import {
  DocBlockTag,
  DocCodeSpan,
  DocEscapedText,
  DocFencedCode,
  DocHtmlEndTag,
  DocHtmlStartTag,
  DocLinkTag,
  DocNode,
  DocNodeKind,
  DocNodeTransforms,
  DocParagraph,
  DocPlainText,
  DocSection,
  StringBuilder
} from '@microsoft/tsdoc';
import { IndentedWriter } from './builders/indented-builder';
import { IEmitterContext, IEmitterOptions, IInternalDocumenterDelegate } from './interfaces';
import { DocEmphasisSpan } from './nodes/doc-emphasis-span';
import { DocFrontmatter, ListContainer } from './nodes/doc-frontmatter';
import { DocHeading } from './nodes/doc-heading';
import { DocNoteBox } from './nodes/doc-notebox';
import { DocTable } from './nodes/doc-table';
import { DocTableCell } from './nodes/doc-table-cell';
import { CustomDocNodeKind } from './nodes/doc-types';

/**
 * Largely borrowed from here but we've built in extensibility in via delegate. Also fixes some issues regarding the markdown we emit https://github.com/microsoft/rushstack/blob/bc8eb7b3963445c3c3a3736030d7186ea6e5b318/apps/api-documenter/src/markdown/MarkdownEmitter.ts
 */
export class StandardMarkdownEmitter {
  private _delegate: IInternalDocumenterDelegate;
  public constructor(delegate: IInternalDocumenterDelegate) {
    this._delegate = delegate;
  }

  public emit(docNode: DocNode, stringBuilder: StringBuilder, options: IEmitterOptions): string {
    const writer = new IndentedWriter(stringBuilder);

    const context: IEmitterContext = {
      writer,
      insideTable: false,

      boldRequested: false,
      italicRequested: false,

      writingBold: false,
      writingItalic: false,
      options
    };

    this.writeNode(docNode, context, false);
    writer.ensureNewLine();

    return writer.toString();
  }

  protected writeNode(docNode: DocNode, context: IEmitterContext, docNodeSiblings: boolean): void {
    const { writer } = context;

    switch (docNode.kind) {
      case DocNodeKind.Section: {
        const docSection = docNode as DocSection;
        this.writeNodes(docSection.nodes, context);
        break;
      }
      case DocNodeKind.InlineTag: {
        break;
      }

      case DocNodeKind.BlockTag: {
        const tagNode = docNode as DocBlockTag;
        console.warn('Unsupported block tag: ' + tagNode.tagName);
        break;
      }
      case DocNodeKind.Paragraph: {
        const docParagraph = docNode as DocParagraph;
        const trimmedParagraph = DocNodeTransforms.trimSpacesInParagraph(docParagraph);
        if (context.insideTable) {
          if (docNodeSiblings) {
            writer.write('<p>');
            this.writeNodes(trimmedParagraph.nodes, context);
            writer.write('</p>');
          } else {
            // Special case:  If we are the only element inside this table cell, then we can omit the <p></p> container.
            this.writeNodes(trimmedParagraph.nodes, context);
          }
        } else {
          this.writeNodes(trimmedParagraph.nodes, context);
          writer.ensureNewLine();
          writer.writeLine();
        }
        break;
      }
      case DocNodeKind.PlainText: {
        const docPlainText: DocPlainText = docNode as DocPlainText;
        this.writePlainText(docPlainText.text, context);
        break;
      }

      case CustomDocNodeKind.NoteBox: {
        const docNoteBox = docNode as DocNoteBox;
        writer.ensureNewLine();

        writer.increaseIndent('&gte; ');

        this.writeNode(docNoteBox.content, context, false);
        writer.ensureNewLine();

        writer.decreaseIndent();

        writer.writeLine();
        break;
      }
      case CustomDocNodeKind.Heading:
        const docHeading = docNode as DocHeading;
        writer.ensureSkippedLine();

        let prefix: string;
        switch (docHeading.level) {
          case 1:
            prefix = '##';
            break;
          case 2:
            prefix = '###';
            break;
          case 3:
            prefix = '###';
            break;
          default:
            prefix = '####';
        }

        writer.writeLine(prefix + ' ' + docHeading.title);
        writer.writeLine();
        break;

      case DocNodeKind.HtmlStartTag:
      case DocNodeKind.HtmlEndTag: {
        const docHtmlTag = docNode as DocHtmlStartTag | DocHtmlEndTag;
        // write the HTML element verbatim into the output
        writer.write(docHtmlTag.emitAsHtml());
        break;
      }

      case DocNodeKind.CodeSpan: {
        const docCodeSpan = docNode as DocCodeSpan;
        if (context.insideTable) {
          writer.write('<code>');
        } else {
          writer.write('`');
        }
        if (context.insideTable) {
          const code = this.getTableEscapedText(docCodeSpan.code);
          const parts = code.split(/\r?\n/g);
          writer.write(parts.join('</code><br/><code>'));
        } else {
          writer.write(docCodeSpan.code);
        }
        if (context.insideTable) {
          writer.write('</code>');
        } else {
          writer.write('`');
        }
        break;
      }

      case DocNodeKind.LinkTag: {
        const docLinkTag = docNode as DocLinkTag;
        if (docLinkTag.codeDestination) {
          this.writeLinkTagWithCodeDestination(docLinkTag, context);
        } else if (docLinkTag.urlDestination) {
          this.writeLinkTagWithUrlDestination(docLinkTag, context);
        } else if (docLinkTag.linkText) {
          this.writePlainText(docLinkTag.linkText, context);
        }
        break;
      }

      case CustomDocNodeKind.EmphasisSpan: {
        const docEmphasisSpan = docNode as DocEmphasisSpan;
        const oldBold = context.boldRequested;
        const oldItalic = context.italicRequested;
        context.boldRequested = docEmphasisSpan.bold;
        context.italicRequested = docEmphasisSpan.italic;
        this.writeNodes(docEmphasisSpan.nodes, context);
        context.boldRequested = oldBold;
        context.italicRequested = oldItalic;
        break;
      }

      case CustomDocNodeKind.Frontmatter: {
        const frontMatterNode = docNode as DocFrontmatter;
        writer.writeLine('---');
        writer.writeLine(
          '# Do not edit this file. It is automatically generated by the docusaurus-api-extractor plugin'
        );
        this.writeNodes(frontMatterNode.nodes, context);
        writer.writeLine('---');
        writer.ensureNewLine();
        break;
      }

      case CustomDocNodeKind.ListContainer: {
        const nodes = docNode.getChildNodes();
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          if (node instanceof ListContainer) {
            writer.increaseIndent();
            this.writeNode(node, context, false);
            writer.decreaseIndent();
          } else if (node instanceof DocPlainText) {
            writer.writeLine(node.text);
          }
        }
        break;
      }

      case DocNodeKind.FencedCode: {
        const docFencedCode = docNode as DocFencedCode;
        writer.ensureNewLine();
        writer.write('```');
        writer.write(docFencedCode.language);
        writer.writeLine();
        writer.write(docFencedCode.code);
        writer.ensureNewLine();
        writer.writeLine('```');
        break;
      }
      case CustomDocNodeKind.Table:
        const docTable = docNode as DocTable;
        // GitHub's markdown renderer chokes on tables that don't have a blank line above them,
        // whereas VS Code's renderer is totally fine with it.
        writer.ensureSkippedLine();

        context.insideTable = true;

        // Markdown table rows can have inconsistent cell counts.  Size the table based on the longest row.
        let columnCount: number = 0;
        if (docTable.header) {
          columnCount = docTable.header.cells.length;
        }
        for (const row of docTable.rows) {
          if (row.cells.length > columnCount) {
            columnCount = row.cells.length;
          }
        }

        // write the table header (which is required by Markdown)
        writer.write('| ');
        for (let i: number = 0; i < columnCount; ++i) {
          writer.write(' ');
          if (docTable.header) {
            const cell: DocTableCell | undefined = docTable.header.cells[i];
            if (cell) {
              this.writeNode(cell.content, context, false);
            }
          }
          writer.write(' |');
        }
        writer.writeLine();

        // write the divider
        writer.write('| ');
        for (let i: number = 0; i < columnCount; ++i) {
          writer.write(' --- |');
        }
        writer.writeLine();

        for (const row of docTable.rows) {
          writer.write('| ');
          for (const cell of row.cells) {
            writer.write(' ');
            this.writeNode(cell.content, context, false);
            writer.write(' |');
          }
          writer.writeLine();
        }
        writer.writeLine();

        context.insideTable = false;

        break;
      case DocNodeKind.SoftBreak: {
        if (!/^\s?$/.test(writer.peekLastCharacter())) {
          writer.write(' ');
        }
        break;
      }

      case DocNodeKind.EscapedText: {
        const docEscapedText = docNode as DocEscapedText;
        this.writePlainText(docEscapedText.decodedText, context);
        break;
      }
      default:
        this._delegate.writeNode({
          docNode,
          context,
          docNodeSiblings,
          writeNode: this.writeNode.bind(this)
        });
    }
  }

  protected writeLinkTagWithCodeDestination(docLinkTag: DocLinkTag, context: IEmitterContext): void {
    const options = context.options;

    const result = this._delegate.apiModel.resolveDeclarationReference(
      docLinkTag.codeDestination!,
      options.contextApiItem
    );

    if (result.resolvedApiItem) {
      const filename = options.onGetFilenameForApiItem(result.resolvedApiItem);

      if (filename) {
        let linkText = docLinkTag.linkText || '';
        if (linkText.length === 0) {
          // Generate a name such as Namespace1.Namespace2.MyClass.myMethod()
          linkText = result.resolvedApiItem.getScopedNameWithinPackage();
        }
        if (linkText.length > 0) {
          const encodedLinkText = linkText.replace(/\s+/g, ' ');

          context.writer.write('[');
          context.writer.write(encodedLinkText);
          context.writer.write(`](${filename!})`);
        } else {
          console.log('WARNING: Unable to determine link text');
        }
      }
    } else if (result.errorMessage) {
      console.log(
        `WARNING: Unable to resolve reference "${docLinkTag.codeDestination!.emitAsTsdoc()}": ` +
          result.errorMessage
      );
    }
  }

  protected writeLinkTagWithUrlDestination(docLinkTag: DocLinkTag, context: IEmitterContext): void {
    const linkText = docLinkTag.linkText !== undefined ? docLinkTag.linkText : docLinkTag.urlDestination!;

    const encodedLinkText = this.getEscapedText(linkText.replace(/\s+/g, ' '));

    context.writer.write('[');
    context.writer.write(encodedLinkText);
    context.writer.write(`](${docLinkTag.urlDestination!})`);
  }

  protected getEscapedText(text: string): string {
    const textWithBackslashes = text
      .replace(/\\/g, '\\\\') // first replace the escape character
      .replace(/[*#[\]_|`~]/g, (x) => '\\' + x) // then escape any special characters
      .replace(/---/g, '\\-\\-\\-') // hyphens only if it's 3 or more
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return textWithBackslashes;
  }

  protected getTableEscapedText(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\|/g, '&#124;');
  }

  protected writeNodes(docNodes: ReadonlyArray<DocNode>, context: IEmitterContext): void {
    for (const docNode of docNodes) {
      this.writeNode(docNode, context, docNodes.length > 1);
    }
  }

  protected writePlainText(text: string, context: IEmitterContext): void {
    const writer = context.writer;
    const parts = text.match(/^(\s*)(.*?)(\s*)$/) || [];

    writer.write(parts[1]);

    const middle = parts[2];

    if (middle !== '') {
      switch (writer.peekLastCharacter()) {
        case '':
        case '\n':
        case ' ':
        case '[':
        case '>':
          break;
        default:
          writer.write('<!-- -->');
          break;
      }

      if (context.boldRequested) {
        writer.write('**');
      }

      if (context.italicRequested) {
        writer.write('_');
      }

      writer.write(this.getEscapedText(middle));

      if (context.italicRequested) {
        writer.write('_');
      }
      if (context.boldRequested) {
        writer.write('**');
      }
    }

    writer.write(parts[3]);
  }
}
