(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{120:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(121),l=a(118),o=a(114),s=a(116);const i="",u="dark";var m=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(o.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):i),r=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),c=Object(n.useCallback)(()=>{a(i),r(i)},[]),l=Object(n.useCallback)(()=>{a(u),r(u)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),Object(n.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{a(e?u:i)})},[]),{isDarkTheme:t===u,setLightTheme:c,setDarkTheme:l}},d=a(124);var h=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=m();return r.a.createElement(d.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)};var f=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}},[]);return Object(n.useEffect)(()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith("docusaurus.tab.")){e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}},[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t(t=>({...t,[e]:n})),a(e,n)}}};var b=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});var v=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=f();return r.a.createElement(b.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a}},e.children)},g=a(125);var p=()=>{const{siteConfig:{themeConfig:{announcementBar:{id:e}={}}}={}}=Object(o.a)(),[t,a]=Object(n.useState)(!0);return Object(n.useEffect)(()=>{if(!e)return;const t=localStorage.getItem("docusaurus.announcement.id"),n=e!==t;localStorage.setItem("docusaurus.announcement.id",e),n&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(n||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&a(!1)},[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:()=>{localStorage.setItem("docusaurus.announcement.dismiss",!0),a(!0)}}};var k=function(e){const{isAnnouncementBarClosed:t,closeAnnouncementBar:a}=p();return r.a.createElement(g.a.Provider,{value:{isAnnouncementBarClosed:t,closeAnnouncementBar:a}},e.children)},E=a(126),_=a(94),O=a.n(_);var y=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}}={}}=Object(o.a)(),{content:t,backgroundColor:a,textColor:n}=e,{isAnnouncementBarClosed:c,closeAnnouncementBar:l}=Object(E.a)();return!t||c?null:r.a.createElement("div",{className:O.a.announcementBar,style:{backgroundColor:a,color:n},role:"banner"},r.a.createElement("div",{className:O.a.announcementBarContent,dangerouslySetInnerHTML:{__html:t}}),r.a.createElement("button",{type:"button",className:O.a.announcementBarClose,onClick:l,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},j=a(2),C=a(115),N=a.n(C),w=a(117),T=()=>null,S=a(134),B=a.n(S),x=a(95),L=a.n(x);const M=()=>r.a.createElement("span",{className:N()(L.a.toggle,L.a.moon)}),D=()=>r.a.createElement("span",{className:N()(L.a.toggle,L.a.sun)});var I=function(e){const{isClient:t}=Object(o.a)();return r.a.createElement(B.a,Object(j.a)({disabled:!t,icons:{checked:r.a.createElement(M,null),unchecked:r.a.createElement(D,null)}},e))},P=a(122),A=a(127);var X=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]},F=a(128);var H=e=>{const[t,a]=Object(n.useState)(!0),[r,c]=Object(n.useState)(!1),[l,o]=Object(n.useState)(0),[s,i]=Object(n.useState)(0),u=Object(n.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),m=Object(A.b)(),[d,h]=X(m.hash);return Object(F.a)(({scrollY:t})=>{if(!e)return;if(0===t&&a(!0),t<s)return;if(r)return c(!1),a(!1),void o(t);const n=document.documentElement.scrollHeight-s,i=window.innerHeight;l&&t>=l?a(!1):t+i<n&&a(!0),o(t)},[l,s]),Object(n.useEffect)(()=>{e&&(a(!0),h(m.hash))},[m]),Object(n.useEffect)(()=>{e&&d&&c(!0)},[d]),{navbarRef:u,isNavbarVisible:t}},G=a(129),R=a(130),U=a(96),Y=a.n(U);function V({activeBasePath:e,activeBaseRegex:t,to:a,href:n,label:c,activeClassName:l="navbar__link--active",prependBaseUrlToHref:o,...i}){const u=Object(s.a)(a),m=Object(s.a)(e),d=Object(s.a)(n,!0);return r.a.createElement(w.a,Object(j.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:o?d:n}:{isNavLink:!0,activeClassName:l,to:u,...e||t?{isActive:(e,a)=>t?new RegExp(t).test(a.pathname):a.pathname.startsWith(m)}:null},i),c)}function W({items:e,position:t,className:a,...n}){const c=(e,t=!1)=>N()({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?r.a.createElement("div",{className:N()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},r.a.createElement(V,Object(j.a)({className:c(a)},n,{onClick:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),n.label),r.a.createElement("ul",{className:"dropdown__menu"},e.map(({className:e,...t},a)=>r.a.createElement("li",{key:a},r.a.createElement(V,Object(j.a)({activeClassName:"dropdown__link--active",className:c(e,!0)},t)))))):r.a.createElement(V,Object(j.a)({className:c(a)},n))}function J({items:e,position:t,className:a,...n}){const c=(e,t=!1)=>N()("menu__link",{"menu__link--sublist":t},e);return e?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(V,Object(j.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},e.map(({className:e,...t},a)=>r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(V,Object(j.a)({activeClassName:"menu__link--active",className:c(e)},t,{onClick:n.onClick})))))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(V,Object(j.a)({className:c(a)},n)))}var K=function(){const{siteConfig:{themeConfig:{navbar:{title:e,links:t=[],hideOnScroll:a=!1}={},disableDarkMode:c=!1}},isClient:l}=Object(o.a)(),[s,i]=Object(n.useState)(!1),[u,m]=Object(n.useState)(!1),{isDarkTheme:d,setLightTheme:h,setDarkTheme:f}=Object(P.a)(),{navbarRef:b,isNavbarVisible:v}=H(a),{logoLink:g,logoLinkProps:p,logoImageUrl:k,logoAlt:E}=Object(R.a)();Object(G.a)(s);const _=Object(n.useCallback)(()=>{i(!0)},[i]),O=Object(n.useCallback)(()=>{i(!1)},[i]),y=Object(n.useCallback)(e=>e.target.checked?f():h(),[h,f]);return r.a.createElement("nav",{ref:b,className:N()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":s,[Y.a.navbarHideable]:a,[Y.a.navbarHidden]:!v})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:_,onKeyDown:_},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(w.a,Object(j.a)({className:"navbar__brand",to:g},p),null!=k&&r.a.createElement("img",{key:l,className:"navbar__logo",src:k,alt:E}),null!=e&&r.a.createElement("strong",{className:N()("navbar__title",{[Y.a.hideLogoText]:u})},e)),t.filter(e=>"left"===e.position).map((e,t)=>r.a.createElement(W,Object(j.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},t.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(W,Object(j.a)({},e,{key:t}))),!c&&r.a.createElement(I,{className:Y.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:d,onChange:y}),r.a.createElement(T,{handleSearchBarToggle:m,isSearchBarExpanded:u}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:O}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(w.a,Object(j.a)({className:"navbar__brand",onClick:O,to:g},p),null!=k&&r.a.createElement("img",{key:l,className:"navbar__logo",src:k,alt:E}),null!=e&&r.a.createElement("strong",{className:"navbar__title"},e)),!c&&s&&r.a.createElement(I,{"aria-label":"Dark mode toggle in sidebar",checked:d,onChange:y})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},t.map((e,t)=>r.a.createElement(J,Object(j.a)({},e,{onClick:O,key:t}))))))))},$=a(97),q=a.n($);function z({to:e,href:t,label:a,prependBaseUrlToHref:n,...c}){const l=Object(s.a)(e),o=Object(s.a)(t,!0);return r.a.createElement(w.a,Object(j.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:n?o:t}:{to:l},c),a)}const Q=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var Z=function(){const e=Object(o.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:c,links:l=[],logo:i={}}=n||{},u=Object(s.a)(i.src);return n?r.a.createElement("footer",{className:N()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},l&&l.length>0&&r.a.createElement("div",{className:"row footer__links"},l.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(z,e)))):null))),(i||c)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:q.a.footerLogoLink},r.a.createElement(Q,{alt:i.alt,url:u})):r.a.createElement(Q,{alt:i.alt,url:u})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))):null};a(98);t.a=function(e){const{siteConfig:t={}}=Object(o.a)(),{favicon:a,title:n,themeConfig:{image:i},url:u}=t,{children:m,title:d,noFooter:f,description:b,image:g,keywords:p,permalink:E,version:_}=e,O=d?`${d} | ${n}`:n,j=g||i;let C=u+Object(s.a)(j);Object(l.a)(j)||(C=j);const N=Object(s.a)(a);return r.a.createElement(h,null,r.a.createElement(v,null,r.a.createElement(k,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),O&&r.a.createElement("title",null,O),O&&r.a.createElement("meta",{property:"og:title",content:O}),a&&r.a.createElement("link",{rel:"shortcut icon",href:N}),b&&r.a.createElement("meta",{name:"description",content:b}),b&&r.a.createElement("meta",{property:"og:description",content:b}),_&&r.a.createElement("meta",{name:"docsearch:version",content:_}),p&&p.length&&r.a.createElement("meta",{name:"keywords",content:p.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:C}),j&&r.a.createElement("meta",{property:"twitter:image",content:C}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+O}),E&&r.a.createElement("meta",{property:"og:url",content:u+E}),E&&r.a.createElement("link",{rel:"canonical",href:u+E}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(y,null),r.a.createElement(K,null),r.a.createElement("div",{className:"main-wrapper"},m),!f&&r.a.createElement(Z,null))))}},122:function(e,t,a){"use strict";var n=a(0),r=a(124);t.a=function(){return Object(n.useContext)(r.a)}},124:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},125:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)({isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},126:function(e,t,a){"use strict";var n=a(0),r=a(125);t.a=function(){return Object(n.useContext)(r.a)}},127:function(e,t,a){"use strict";var n=a(18);a.d(t,"a",(function(){return n.d})),a.d(t,"b",(function(){return n.e}))},128:function(e,t,a){"use strict";var n=a(0),r=a(36);const c=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[a,r]=Object(n.useState)(c()),l=()=>{const t=c();r(t),e&&e(t)};return Object(n.useEffect)(()=>(window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l,{passive:!0})),t),a}},129:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},130:function(e,t,a){"use strict";var n=a(114),r=a(122),c=a(116),l=a(118);t.a=()=>{const{siteConfig:{themeConfig:{navbar:{logo:e={}}={}}}={}}=Object(n.a)(),{isDarkTheme:t}=Object(r.a)(),a=Object(c.a)(e.href||"/");let o={};e.target?o={target:e.target}:Object(l.a)(a)||(o={rel:"noopener noreferrer",target:"_blank"});const s=e.srcDark&&t?e.srcDark:e.src;return{logoLink:a,logoLinkProps:o,logoImageUrl:Object(c.a)(s),logoAlt:e.alt}}},134:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=d(c),o=d(a(115)),s=d(a(9)),i=d(a(135)),u=d(a(136)),m=a(137);function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,m.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,m.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,m.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:l.default.createElement(i.default,null),unchecked:l.default.createElement(u.default,null)}},h.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},135:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},136:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},137:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);