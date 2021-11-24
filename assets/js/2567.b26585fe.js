"use strict";(self.webpackChunkexample_api=self.webpackChunkexample_api||[]).push([[2567],{3336:function(e,t){t.Z=function(){return null}},7733:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(3929),r="iconExternalLink_+YQI",l=function(e){var t=e.width,n=void 0===t?13.5:t,l=e.height,o=void 0===l?13.5:l;return a.createElement("svg",{width:n,height:o,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},2567:function(e,t,n){n.d(t,{Z:function(){return ke}});var a=n(3929),r=n(4722),l=n(8179),o=n(279),i=n(4692),c="skipToContent_-xbw";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,a.useRef)(null),t=(0,l.k6)().action;return(0,i.SL)((function(n){var a=n.location;e.current&&!a.hash&&"PUSH"===t&&s(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m=n(4834),d=n(8265),f=["width","height","color","strokeWidth","className"];function v(e){var t=e.width,n=void 0===t?21:t,r=e.height,l=void 0===r?21:r,o=e.color,i=void 0===o?"currentColor":o,c=e.strokeWidth,s=void 0===c?1.2:c,u=(e.className,(0,d.Z)(e,f));return a.createElement("svg",(0,m.Z)({viewBox:"0 0 15 15",width:n,height:l},u),a.createElement("g",{stroke:i,strokeWidth:s},a.createElement("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})))}var h="announcementBar_Qpqh",g="announcementBarPlaceholder_6PtE",b="announcementBarClose_fb5h",E="announcementBarContent_X1pa";var p=function(){var e=(0,i.nT)(),t=e.isActive,n=e.close,l=(0,i.LU)().announcementBar;if(!t)return null;var c=l.content,s=l.backgroundColor,u=l.textColor,m=l.isCloseable;return a.createElement("div",{className:h,style:{backgroundColor:s,color:u},role:"banner"},m&&a.createElement("div",{className:g}),a.createElement("div",{className:E,dangerouslySetInnerHTML:{__html:c}}),m?a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn close",b),onClick:n,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(v,{width:14,height:14,strokeWidth:3.1})):null)},k=n(3336),Z=n(1504),_={toggle:"toggle_Eh1g",toggleScreenReader:"toggleScreenReader_yE6R",toggleDisabled:"toggleDisabled_IxDZ",toggleTrack:"toggleTrack_p-A7",toggleTrackCheck:"toggleTrackCheck_kaxG",toggleChecked:"toggleChecked_AkWo",toggleTrackX:"toggleTrackX_hNhw",toggleTrackThumb:"toggleTrackThumb_66wu",toggleFocused:"toggleFocused_lwlc",toggleIcon:"toggleIcon_DeKz"},w=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(_.toggleIcon,_.dark),style:n},t)},N=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(_.toggleIcon,_.light),style:n},t)},C=(0,a.memo)((function(e){var t,n=e.className,l=e.icons,o=e.checked,i=e.disabled,c=e.onChange,s=(0,a.useState)(o),u=s[0],m=s[1],d=(0,a.useState)(!1),f=d[0],v=d[1],h=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)(_.toggle,n,(t={},t[_.toggleChecked]=u,t[_.toggleFocused]=f,t[_.toggleDisabled]=i,t))},a.createElement("div",{className:_.toggleTrack,role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=h.current)?void 0:e.click()}},a.createElement("div",{className:_.toggleTrackCheck},l.checked),a.createElement("div",{className:_.toggleTrackX},l.unchecked),a.createElement("div",{className:_.toggleTrackThumb})),a.createElement("input",{ref:h,checked:u,type:"checkbox",className:_.toggleScreenReader,"aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return m(!u)},onFocus:function(){return v(!0)},onBlur:function(){return v(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=h.current)||t.click())}}))}));function y(e){var t=(0,i.LU)().colorMode.switchConfig,n=t.darkIcon,r=t.darkIconStyle,l=t.lightIcon,o=t.lightIconStyle,c=(0,Z.Z)();return a.createElement(C,(0,m.Z)({disabled:!c,icons:{checked:a.createElement(w,{icon:n,style:r}),unchecked:a.createElement(N,{icon:l,style:o})}},e))}var I=n(9882),T=function(e){var t=(0,a.useState)(e),n=t[0],r=t[1],l=(0,a.useRef)(!1),o=(0,a.useRef)(0),c=(0,a.useCallback)((function(e){null!==e&&(o.current=e.getBoundingClientRect().height)}),[]);return(0,i.RF)((function(t,n){if(e){var a=t.scrollY;if(a<o.current)r(!0);else if(l.current)l.current=!1;else{var i=null==n?void 0:n.scrollY,c=document.documentElement.scrollHeight-o.current,s=window.innerHeight;i&&a>=i?r(!1):a+s<c&&r(!0)}}})),(0,i.SL)((function(t){if(e)return t.location.hash?(l.current=!0,void r(!1)):void r(!0)})),{navbarRef:c,isNavbarVisible:n}};var L=function(e){void 0===e&&(e=!0),(0,a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},D=n(6062),S=n(6433),B=n(3943),x=n(5113),A=["width","height","className"],M=function(e){var t=e.width,n=void 0===t?30:t,r=e.height,l=void 0===r?30:r,o=e.className,i=(0,d.Z)(e,A);return a.createElement("svg",(0,m.Z)({className:o,width:n,height:l,viewBox:"0 0 30 30","aria-hidden":"true"},i),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},R={toggle:"toggle_4UpN",navbarHideable:"navbarHideable_IsmX",navbarHidden:"navbarHidden_bsBe",navbarSidebarToggle:"navbarSidebarToggle_OcMT"},U="right";function H(){return(0,i.LU)().navbar.items}function P(){var e=(0,i.LU)().colorMode.disableSwitch,t=(0,I.Z)(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,a.useCallback)((function(e){return e.target.checked?l():r()}),[r,l]),disabled:e}}function W(e){var t=e.sidebarShown,n=e.toggleSidebar;L(t);var l=H(),c=P(),s=function(e){var t,n=e.sidebarShown,r=e.toggleSidebar,l=null==(t=(0,i.g8)())?void 0:t({toggleSidebar:r}),o=(0,i.D9)(l),c=(0,a.useState)((function(){return!1})),s=c[0],u=c[1];(0,a.useEffect)((function(){l&&!o&&u(!0)}),[l,o]);var m=!!l;return(0,a.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,a.useCallback)((function(){u(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(x.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&a.createElement(y,{className:R.navbarSidebarToggle,checked:c.isDarkTheme,onChange:c.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(v,{color:"var(--ifm-color-emphasis-600)",className:R.navbarSidebarCloseSvg}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return a.createElement(B.Z,(0,m.Z)({mobile:!0},e,{onClick:n,key:t}))})))),a.createElement("div",{className:"navbar-sidebar__item menu"},l.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}var V=function(){var e,t=(0,i.LU)().navbar,n=t.hideOnScroll,l=t.style,o=function(){var e=(0,D.Z)(),t="mobile"===e,n=(0,a.useState)(!1),r=n[0],l=n[1];(0,i.Rb)((function(){if(r)return l(!1),!1}));var o=(0,a.useCallback)((function(){l((function(e){return!e}))}),[]);return(0,a.useEffect)((function(){"desktop"===e&&l(!1)}),[e]),{shouldRender:t,toggle:o,shown:r}}(),c=P(),s=(0,S.gA)(),u=T(n),d=u.navbarRef,f=u.isNavbarVisible,v=H(),h=v.some((function(e){return"search"===e.type})),g=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:U)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:U)}))}}(v),b=g.leftItems,E=g.rightItems;return a.createElement("nav",{ref:d,className:(0,r.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===l,"navbar--primary":"primary"===l,"navbar-sidebar--show":o.shown},e[R.navbarHideable]=n,e[R.navbarHidden]=n&&!f,e))},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},((null==v?void 0:v.length)>0||s)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:o.toggle,onKeyDown:o.toggle},a.createElement(M,null)),a.createElement(x.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),b.map((function(e,t){return a.createElement(B.Z,(0,m.Z)({},e,{key:t}))}))),a.createElement("div",{className:"navbar__items navbar__items--right"},E.map((function(e,t){return a.createElement(B.Z,(0,m.Z)({},e,{key:t}))})),!c.disabled&&a.createElement(y,{className:R.toggle,checked:c.isDarkTheme,onChange:c.toggle}),!h&&a.createElement(k.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:o.toggle}),o.shouldRender&&a.createElement(W,{sidebarShown:o.shown,toggleSidebar:o.toggle}))},z=n(520),F=n(2976),O=n(794),G="footerLogoLink_DXH5",X=n(3650),K=n(7733),Q=["to","href","label","prependBaseUrlToHref"];function j(e){var t=e.to,n=e.href,r=e.label,l=e.prependBaseUrlToHref,o=(0,d.Z)(e,Q),i=(0,F.Z)(t),c=(0,F.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(z.Z,(0,m.Z)({className:"footer__link-item"},n?{href:l?c:n}:{to:i},o),n&&!(0,O.Z)(n)?a.createElement("span",null,r,a.createElement(K.Z,null)):r)}var q=function(e){var t=e.sources,n=e.alt,r=e.width,l=e.height;return a.createElement(X.Z,{className:"footer__logo",alt:n,sources:t,width:r,height:l})};var J=function(){var e=(0,i.LU)().footer,t=e||{},n=t.copyright,l=t.links,o=void 0===l?[]:l,c=t.logo,s=void 0===c?{}:c,u={light:(0,F.Z)(s.src),dark:(0,F.Z)(s.srcDark||s.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},o&&o.length>0&&a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(j,e))}))):null)}))),(s||n)&&a.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},s.href?a.createElement(z.Z,{href:s.href,className:G},a.createElement(q,{alt:s.alt,sources:u,width:s.width,height:s.height})):a.createElement(q,{alt:s.alt,sources:u})),n?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},Y=n(2975),$=(0,i.WA)("theme"),ee="light",te="dark",ne=function(e){return e===te?te:ee},ae=function(e){(0,i.WA)("theme").set(ne(e))},re=function(){var e=(0,i.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,l=(0,a.useState)(function(e){return Y.Z.canUseDOM?ne(document.documentElement.getAttribute("data-theme")):ne(e)}(t)),o=l[0],c=l[1],s=(0,a.useCallback)((function(){c(ee),ae(ee)}),[]),u=(0,a.useCallback)((function(){c(te),ae(te)}),[]);return(0,a.useEffect)((function(){document.documentElement.setAttribute("data-theme",ne(o))}),[o]),(0,a.useEffect)((function(){if(!n)try{var e=$.get();null!==e&&c(ne(e))}catch(t){console.error(t)}}),[n,c]),(0,a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?te:ee)}))}),[n,r]),{isDarkTheme:o===te,setLightTheme:s,setDarkTheme:u}},le=n(1300);var oe=function(e){var t=re(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return a.createElement(le.Z.Provider,{value:{isDarkTheme:n,setLightTheme:r,setDarkTheme:l}},e.children)},ie="docusaurus.tab.",ce=function(){var e=(0,a.useState)({}),t=e[0],n=e[1],r=(0,a.useCallback)((function(e,t){(0,i.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((function(){try{var e={};(0,i._f)().forEach((function(t){if(t.startsWith(ie)){var n=t.substring(ie.length);e[n]=(0,i.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},se=(0,a.createContext)(void 0);var ue=function(e){var t=ce(),n=t.tabGroupChoices,r=t.setTabGroupChoices;return a.createElement(se.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:r}},e.children)};function me(e){var t=e.children;return a.createElement(oe,null,a.createElement(i.pl,null,a.createElement(ue,null,a.createElement(i.OC,null,a.createElement(i.L5,null,a.createElement(i.Cn,null,t))))))}var de=n(8180),fe=n(8297);function ve(e){var t=e.locale,n=e.version,r=e.tag;return a.createElement(de.Z,null,t&&a.createElement("meta",{name:"docusaurus_locale",content:t}),n&&a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.createElement("meta",{name:"docusaurus_tag",content:r}))}var he=n(314);function ge(){var e=(0,fe.Z)().i18n,t=e.defaultLocale,n=e.locales,r=(0,i.l5)();return a.createElement(de.Z,null,n.map((function(e){return a.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),a.createElement("link",{rel:"alternate",href:r.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function be(e){var t=e.permalink,n=(0,fe.Z)().siteConfig.url,r=function(){var e=(0,fe.Z)().siteConfig.url,t=(0,l.TH)().pathname;return e+(0,F.Z)(t)}(),o=t?""+n+t:r;return a.createElement(de.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function Ee(e){var t=(0,fe.Z)(),n=t.siteConfig.favicon,r=t.i18n,l=r.currentLocale,o=r.localeConfigs,c=(0,i.LU)(),s=c.metadatas,u=c.image,d=e.title,f=e.description,v=e.image,h=e.keywords,g=e.searchMetadatas,b=(0,F.Z)(n),E=(0,i.pe)(d),p=l,k=o[l].direction;return a.createElement(a.Fragment,null,a.createElement(de.Z,null,a.createElement("html",{lang:p,dir:k}),n&&a.createElement("link",{rel:"shortcut icon",href:b}),a.createElement("title",null,E),a.createElement("meta",{property:"og:title",content:E}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),u&&a.createElement(he.Z,{image:u}),v&&a.createElement(he.Z,{image:v}),a.createElement(he.Z,{description:f,keywords:h}),a.createElement(be,null),a.createElement(ge,null),a.createElement(ve,(0,m.Z)({tag:i.HX,locale:l},g)),a.createElement(de.Z,null,s.map((function(e,t){return a.createElement("meta",(0,m.Z)({key:"metadata_"+t},e))}))))}var pe=function(){(0,a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var ke=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,o=e.pageClassName;return pe(),a.createElement(me,null,a.createElement(Ee,e),a.createElement(u,null),a.createElement(p,null),a.createElement(V,null),a.createElement("div",{className:(0,r.Z)(i.kM.wrapper.main,l,o)},t),!n&&a.createElement(J,null))}},5113:function(e,t,n){var a=n(4834),r=n(8265),l=n(3929),o=n(520),i=n(3650),c=n(2976),s=n(8297),u=n(4692),m=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,s.Z)().siteConfig.title,n=(0,u.LU)().navbar,d=n.title,f=n.logo,v=void 0===f?{src:""}:f,h=e.imageClassName,g=e.titleClassName,b=(0,r.Z)(e,m),E=(0,c.Z)(v.href||"/"),p={light:(0,c.Z)(v.src),dark:(0,c.Z)(v.srcDark||v.src)},k=l.createElement(i.Z,{sources:p,height:v.height,width:v.width,alt:v.alt||d||t});return l.createElement(o.Z,(0,a.Z)({to:E},b,v.target&&{target:v.target}),v.src&&(h?l.createElement("div",{className:h},k):l.createElement(l.Fragment,null,k)),null!=d&&l.createElement("b",{className:g},d))}},8761:function(e,t,n){n.d(t,{O:function(){return b}});var a=n(4834),r=n(8265),l=n(3929),o=n(4722),i=n(520),c=n(2976),s=n(7733),u=n(794),m=n(4692),d=n(3943),f=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],v=["className","isDropdownItem"],h=["className","isDropdownItem"],g=["mobile","position"];function b(e){var t,n=e.activeBasePath,o=e.activeBaseRegex,d=e.to,v=e.href,h=e.label,g=e.activeClassName,b=void 0===g?"":g,E=e.prependBaseUrlToHref,p=(0,r.Z)(e,f),k=(0,c.Z)(d),Z=(0,c.Z)(n),_=(0,c.Z)(v,{forcePrependBaseUrl:!0}),w=h&&v&&!(0,u.Z)(v),N="dropdown__link--active"===b;return l.createElement(i.Z,(0,a.Z)({},v?{href:E?_:v}:Object.assign({isNavLink:!0,activeClassName:null!=(t=p.className)&&t.includes(b)?"":b,to:k},n||o?{isActive:function(e,t){return o?(0,m.Fx)(o,t.pathname):t.pathname.startsWith(Z)}}:null),p),w?l.createElement("span",null,h,l.createElement(s.Z,N&&{width:12,height:12})):h)}function E(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,c=(0,r.Z)(e,v),s=l.createElement(b,(0,a.Z)({className:(0,o.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},c));return i?l.createElement("li",null,s):s}function p(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,h));return l.createElement("li",{className:"menu__list-item"},l.createElement(b,(0,a.Z)({className:(0,o.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,o=void 0!==n&&n,i=(e.position,(0,r.Z)(e,g)),c=o?p:E;return l.createElement(c,(0,a.Z)({},i,{activeClassName:null!=(t=i.activeClassName)?t:(0,d.E)(o)}))}},3510:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(4834),r=n(8265),l=n(3929),o=n(8761),i=n(6433),c=n(4722),s=n(3943),u=n(4692),m=n(7858),d=["docId","label","docsPluginId"];function f(e){var t,n=e.docId,f=e.label,v=e.docsPluginId,h=(0,r.Z)(e,d),g=(0,i.Iw)(v),b=g.activeVersion,E=g.activeDoc,p=(0,u.J)(v).preferredVersion,k=(0,i.yW)(v),Z=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,m.uniq)([b,p,k].filter(Boolean)),n),_=(0,s.E)(h.mobile);return l.createElement(o.Z,(0,a.Z)({exact:!0},h,{className:(0,c.Z)(h.className,(t={},t[_]=(null==E?void 0:E.sidebar)&&E.sidebar===Z.sidebar,t)),activeClassName:_,label:null!=f?f:Z.id,to:Z.path}))}},9698:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(4834),r=n(8265),l=n(3929),o=n(8761),i=n(5432),c=n(6433),s=n(4692),u=n(279),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,v=e.docsPluginId,h=e.dropdownActiveClassDisabled,g=e.dropdownItemsBefore,b=e.dropdownItemsAfter,E=(0,r.Z)(e,m),p=(0,c.Iw)(v),k=(0,c.gB)(v),Z=(0,c.yW)(v),_=(0,s.J)(v),w=_.preferredVersion,N=_.savePreferredVersionName;var C,y=(C=k.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){N(e.name)}}})),[].concat(g,C,b)),I=null!=(t=null!=(n=p.activeVersion)?n:w)?t:Z,T=f&&y?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):I.label,L=f&&y?void 0:d(I).path;return y.length<=1?l.createElement(o.Z,(0,a.Z)({},E,{mobile:f,label:T,to:L,isActive:h?function(){return!1}:void 0})):l.createElement(i.Z,(0,a.Z)({},E,{mobile:f,label:T,to:L,items:y,isActive:h?function(){return!1}:void 0}))}},1723:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(4834),r=n(8265),l=n(3929),o=n(8761),i=n(6433),c=n(4692),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,r.Z)(e,s),f=(0,i.zu)(m),v=(0,c.J)(m).preferredVersion,h=(0,i.yW)(m),g=null!=(t=null!=f?f:v)?t:h,b=null!=n?n:g.label,E=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return l.createElement(o.Z,(0,a.Z)({},d,{label:b,to:E}))}},5432:function(e,t,n){var a=n(4834),r=n(8265),l=n(3929),o=n(4722),i=n(4692),c=n(8761),s=n(3943),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,i.Mg)(e.to,t)||!!(0,i.Fx)(e.activeBaseRegex,t)||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,i=e.position,m=e.className,d=(0,r.Z)(e,u),f=(0,l.useRef)(null),v=(0,l.useRef)(null),h=(0,l.useState)(!1),g=h[0],b=h[1];return(0,l.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),l.createElement("div",{ref:f,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":g})},l.createElement(c.O,(0,a.Z)({className:(0,o.Z)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!g))}}),null!=(t=d.children)?t:d.label),l.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var a=f.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,u=e.className,d=(e.position,(0,r.Z)(e,m)),v=(0,i.be)(),h=f(n,v),g=(0,i.uR)({initialState:function(){return!h}}),b=g.collapsed,E=g.toggleCollapsed,p=g.setCollapsed;return(0,l.useEffect)((function(){h&&p(!h)}),[v,h,p]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":b})},l.createElement(c.O,(0,a.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),E()}}),null!=(t=d.children)?t:d.label),l.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,d),o=n?h:v;return l.createElement(o,a)}},3943:function(e,t,n){n.d(t,{Z:function(){return k},E:function(){return p}});var a=n(8265),r=n(3929),l=n(8761),o=n(5432),i=n(4834),c=["width","height"],s=function(e){var t=e.width,n=void 0===t?20:t,l=e.height,o=void 0===l?20:l,s=(0,a.Z)(e,c);return r.createElement("svg",(0,i.Z)({viewBox:"0 0 20 20",width:n,height:o,"aria-hidden":"true"},s),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},u=n(8297),m=n(4692),d="iconLanguage_KCu8",f=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function v(e){var t=e.mobile,n=e.dropdownItemsBefore,l=e.dropdownItemsAfter,c=(0,a.Z)(e,f),v=(0,u.Z)().i18n,h=v.currentLocale,g=v.locales,b=v.localeConfigs,E=(0,m.l5)();function p(e){return b[e].label}var k=g.map((function(e){var t="pathname://"+E.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:p(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),Z=[].concat(n,k,l),_=t?"Languages":p(h);return r.createElement(o.Z,(0,i.Z)({},c,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(s,{className:d}),r.createElement("span",null,_)),items:Z}))}var h=n(3336);function g(e){return e.mobile?null:r.createElement(h.Z,null)}var b=["type"],E={default:function(){return l.Z},localeDropdown:function(){return v},search:function(){return g},dropdown:function(){return o.Z},docsVersion:function(){return n(1723).Z},docsVersionDropdown:function(){return n(9698).Z},doc:function(){return n(3510).Z}};var p=function(e){return e?"menu__link--active":"navbar__link--active"};function k(e){var t=e.type,n=(0,a.Z)(e,b),l=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),o=function(e){var t=E[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(l);return r.createElement(o,n)}},1300:function(e,t,n){var a=n(3929).createContext(void 0);t.Z=a},3650:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(4834),r=n(8265),l=n(3929),o=n(4722),i=n(1504),c=n(9882),s={themedImage:"themedImage_ZxwB","themedImage--light":"themedImage--light_EiFz","themedImage--dark":"themedImage--dark_7d+3"},u=["sources","className","alt"],m=function(e){var t=(0,i.Z)(),n=(0,c.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,r.Z)(e,u),g=t?n?["dark"]:["light"]:["light","dark"];return l.createElement(l.Fragment,null,g.map((function(e){return l.createElement("img",(0,a.Z)({key:e,src:m[e],alt:v,className:(0,o.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},9882:function(e,t,n){var a=n(3929),r=n(1300);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}}}]);