(self.webpackChunkfeswap_docs=self.webpackChunkfeswap_docs||[]).push([[9670],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(9756),a=n(7294),i=n(3727),o=n(2263),l=n(3919),u=n(412),c=(0,a.createContext)({collectLink:function(){}}),s=n(4996),p=n(8780);var f=function(e){var t,n,f=e.isNavLink,d=e.to,m=e.href,b=e.activeClassName,h=e.isActive,v=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,w=void 0===g||g,k=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=(0,o.Z)().siteConfig,F=y.trailingSlash,O=y.baseUrl,E=(0,s.C)().withBaseUrl,N=(0,a.useContext)(c),x=d||m,C=(0,l.Z)(x),T=null==x?void 0:x.replace("pathname://",""),S=void 0!==T?(n=T,w&&function(e){return e.startsWith("/")}(n)?E(n):n):void 0;S&&C&&(S=(0,p.applyTrailingSlash)(S,{trailingSlash:F,baseUrl:O}));var j,_=(0,a.useRef)(!1),B=f?i.OL:i.rU,D=u.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!D&&C&&null!=S&&window.docusaurus.prefetch(S),function(){D&&j&&j.disconnect()}}),[S,D,C]);var P=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,A=!S||!C||P;return S&&C&&!P&&!v&&N.collectLink(S),A?a.createElement("a",Object.assign({href:S},x&&!C&&{target:"_blank",rel:"noopener noreferrer"},k)):a.createElement(B,Object.assign({},k,{onMouseEnter:function(){_.current||null==S||(window.docusaurus.preload(S),_.current=!0)},innerRef:function(e){var t,n;D&&e&&C&&(t=e,n=function(){null!=S&&window.docusaurus.prefetch(S)},(j=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.unobserve(t),j.disconnect(),n())}))}))).observe(t))},to:S||""},f&&{isActive:h,activeClassName:b}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,u=i.absolute,c=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},9084:function(e,t,n){"use strict";n.d(t,{Q:function(){return l}});var r=n(7294),a="buttonsJump_Eb8L",i=n(6742),o=n(4996);function l(e){var t=e.url,n=e.link;return r.createElement("div",{align:"center",style:{paddingBottom:"25px",verticalAlign:"middle"}},r.createElement(i.Z,{className:a,to:(0,o.Z)(""+t)},r.createElement("text",{style:{textalign:"center"}},null!=n?n:"Jump")))}},5661:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=n(9084),l={slug:"21-08-12",title:"FeSwap alpha release",hide_table_of_contents:!1,author:"Derik Lu",author_title:"ldru@163.com",author_url:"https://github.com/FeSwap",tags:["Feswap","Appha release","NFT","Sponor"]},u=void 0,c={permalink:"/cn/blog/21-08-12",editUrl:"https://github.com/feswap/blog/2021-08-12_alpha_release.mdx",source:"@site/blog/2021-08-12_alpha_release.mdx",title:"FeSwap alpha release",description:"FeSwap Exchange has been deployed on ETH mainnet now.",date:"2021-08-12T00:00:00.000Z",formattedDate:"August 12, 2021",tags:[{label:"Feswap",permalink:"/cn/blog/tags/feswap"},{label:"Appha release",permalink:"/cn/blog/tags/appha-release"},{label:"NFT",permalink:"/cn/blog/tags/nft"},{label:"Sponor",permalink:"/cn/blog/tags/sponor"}],readingTime:.37,truncated:!1,nextItem:{title:"User Guidance Available",permalink:"/cn/blog/21-08-05"}},s=[],p={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"FeSwap Exchange has been deployed on ETH mainnet now. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FESW")," address: ",(0,i.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe"},"0x4269eaec0710b874ea55e2AeDc8Fb66223522Bbe"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Timelock")," address:  ",(0,i.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0xd24347c40f4ed36f326f82e3befffaf3b8d436a1"},"0xd24347C40f4ed36f326f82E3bEFFfaf3B8D436a1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FeswGovernor")," address: ",(0,i.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x77F98c147a37564c32E48054Bff7692A1F97f343"},"0x77F98c147a37564c32E48054Bff7692A1F97f343")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FeswaNFT")," address: ",(0,i.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x0ab276b92a6e6d3ecc8d5888d1b15effea223923"},"0x0aB276b92a6E6d3EcC8D5888D1b15EffEa223923")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FeswSponsor")," address: ",(0,i.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x74B6F6884FE98259aF4127ca9A5D580Da934E52b"},"0x74B6F6884FE98259aF4127ca9A5D580Da934E52b"))),(0,i.kt)("p",null,"Token pair NFT bidding will be open at 2021-08-14-08-08-08 UTC+8. Timestamp is 1628899688. Sponsor is also open at same time."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FeSwapRouter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"FeSwapFactory")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"StakingTwinRewardsFactory")," will be deployed within two weeks."),(0,i.kt)(o.Q,{url:"https://app.feswap.io/#/NFT",link:"Jump to Bid FeSwap NFT  \u2197",mdxType:"LinkButton"}))}f.isMDXComponent=!0}}]);