(self.webpackChunkfeswap_docs=self.webpackChunkfeswap_docs||[]).push([[9573],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4802:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={slug:"21-09-12",title:"FeSwap is really working",hide_table_of_contents:!1,author:"Derik Lu",author_title:"ldru@163.com",author_url:"https://github.com/FeSwap",tags:["Feswap","ETH/FESW"]},p=void 0,c={permalink:"/cn/blog/21-09-12",source:"@site/blog/2021-09-12_FeSwap_Working.mdx",title:"FeSwap is really working",description:"FeSwap does not charge commision fee, but can make profits for its liquidity providers.",date:"2021-09-12T00:00:00.000Z",formattedDate:"September 12, 2021",tags:[{label:"Feswap",permalink:"/cn/blog/tags/feswap"},{label:"ETH/FESW",permalink:"/cn/blog/tags/eth-fesw"}],readingTime:.28,truncated:!1,nextItem:{title:"Three Swap Pair Created",permalink:"/cn/blog/21-08-29"}},l=[],u={toc:l};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"FeSwap does not charge commision fee, but can make profits for its liquidity providers. "),(0,o.kt)("p",null,"This is the transation happened in ETH mainnet and triggered internal arbitrage:\n",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/tx/0xc3b5ccaf55a3d915c5d50b6a14df6e908188a9a3f3c425f8906d7281016a12b6"},"swapExactTokensForETH")),(0,o.kt)("p",null,"This is the transaction happened in ETH mainnet and distributed profits for its liquidity providers:\n",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/tx/0x7e5dae73ea8b2db89f951b5257b387c6a64c346b17fb04ee62193208c1eae458"},"addLiquidityETH")),(0,o.kt)("p",null,"For FeSwap protocol information, please visit:",(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://app.feswap.io"},"FeSwap App")," ",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.feswap.io"},"FeSwap Info"))))}s.isMDXComponent=!0}}]);