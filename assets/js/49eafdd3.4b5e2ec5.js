(self.webpackChunkfeswap_docs=self.webpackChunkfeswap_docs||[]).push([[8452],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return n?i.createElement(f,o(o({ref:t},m),{},{components:n})):i.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1402:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o={id:"improvement",title:"FeSwap Improvements on BSC",hide_title:!0,sidebar_label:"Improvement on BSC"},l=void 0,c={unversionedId:"Binance/improvement",id:"Binance/improvement",isDocsHomePage:!1,title:"FeSwap Improvements on BSC",description:"FeSwap Improvements on BSC",source:"@site/docs/Binance/Improvement.md",sourceDirName:"Binance",slug:"/Binance/improvement",permalink:"/docs/Binance/improvement",version:"current",frontMatter:{id:"improvement",title:"FeSwap Improvements on BSC",hide_title:!0,sidebar_label:"Improvement on BSC"},sidebar:"FeSwapSidebar",previous:{title:"Governance on BSC",permalink:"/docs/Binance/governance"},next:{title:"NFT Bid Setting",permalink:"/docs/Binance/nft"}},s=[],m={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"title"},(0,a.kt)("h1",null," FeSwap Improvements on BSC ")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Some improvements have been made to the FeSwap protocol implementation deployed on Binance Smart Chain, which mainly include following 4 features\uff1a "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"Patch")," mechanism is designed, and applied to a few FeSwap core smart contracts.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Compared to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Proxy")," mechanism widely adopted in Defi ecosystem to upgrade deployed smart contracts, which always incur some fixed gas fees to all transactions, ",(0,a.kt)("inlineCode",{parentName:"li"},"Patch")," mechanism imposes no additional gas fee to the host smart contract execution."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Patch")," mechanism upgrades original smart contract by adding new codes and new features, versus ",(0,a.kt)("inlineCode",{parentName:"li"},"Proxy")," mechanism upgrades smart contract by totally replacing the original smart contract.  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Patch")," mechanism is applied in 4 smart contract: ",(0,a.kt)("inlineCode",{parentName:"li"},"Factory"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Router"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"NFT")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"FESW"),". ",(0,a.kt)("br",null),(0,a.kt)("br",null)))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Price Oracle")," feature of the liquidity pool can be switched on/off by its NFT owner.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Price Oracle")," only has reference value while its corresponding liquidity pool includes big enough liquidity. This is not the case for most liquidity pools containing low marketcap assets, especially while these liquidity pools are newly created and have not been used widely."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Price Oracle")," feature is switched off by default to save gas fees, as it imposes some gas fee cost to all swapers if switched on, it is not valuable while there is no need to query for the asset price."),(0,a.kt)("li",{parentName:"ul"},"The NFT owner of each liquidity pool is privileged to switch on/off the ",(0,a.kt)("inlineCode",{parentName:"li"},"Price Oracle")," feature if needed. ",(0,a.kt)("br",null),(0,a.kt)("br",null)))),(0,a.kt)("li",{parentName:"ul"},"Some optimization has been done for the core smart contract to be more gas fee effective.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A few smart contract variables changed to be immutable. "),(0,a.kt)("li",{parentName:"ul"},"A few lines of code adjusted to be more gas fee saving. ",(0,a.kt)("br",null),(0,a.kt)("br",null)))),(0,a.kt)("li",{parentName:"ul"},"Some NFT bid settings are changed according to Binance Smart Chain characteristics, mainly include:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The bid starting price of all the crypto asset liquidity pool NFTs is ZERO."),(0,a.kt)("li",{parentName:"ul"},"NFT bidding duration is shorten to be 3 days."),(0,a.kt)("li",{parentName:"ul"},"Liquidity pool is created at the same time while its corresponding NFT is claimed. "),(0,a.kt)("li",{parentName:"ul"},"NFT needs to be claimed within 4 days starting from the time when its bidding is finished, otherwise it will be open for new bidding."),(0,a.kt)("li",{parentName:"ul"},"FESW@B giveaway rates are changed accordingly.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"li"},(0,a.kt)("a",{parentName:"em",href:"./nft"},"** Learn more about NFT bidding on BSC")),(0,a.kt)("br",null))))))}p.isMDXComponent=!0}}]);