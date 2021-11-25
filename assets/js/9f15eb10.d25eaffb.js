(self.webpackChunkfeswap_docs=self.webpackChunkfeswap_docs||[]).push([[7351],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,h=u["".concat(d,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2958:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={id:"nft",title:"NFT bidding on Heco",hide_title:!0,sidebar_label:"NFT Bid Setting"},l=void 0,d={unversionedId:"Heco/nft",id:"Heco/nft",isDocsHomePage:!1,title:"NFT bidding on Heco",description:"NFT bidding on Heco",source:"@site/docs/Heco/NFT Bid.md",sourceDirName:"Heco",slug:"/Heco/nft",permalink:"/docs/Heco/nft",version:"current",frontMatter:{id:"nft",title:"NFT bidding on Heco",hide_title:!0,sidebar_label:"NFT Bid Setting"},sidebar:"FeSwapSidebar",previous:{title:"Improvement on Heco",permalink:"/docs/Heco/improvement"},next:{title:"Contracts on Heco",permalink:"/docs/Heco/contracts"}},c=[],s={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"title"},(0,a.kt)("h1",null," NFT bidding on Heco ")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"FeSwap DAO does not own and control any crypto asset liquidity pools, the NFT owner of the liquidity pool does. NFT owner earns 60% of the\nprotocol profit of the belonged liquidity pools, FeSwap DAO just collect the left 40%. NFT owner also has the privilege to set the price gap\ntrigerring internal asset exchange, to config the fraction of protocol profit in the total exchange profit, and to swith on/off the price\noracle utility. "),(0,a.kt)("p",null,"To be an NFT owner of an asset-pair liquidity pool is extremly easy, just create it with ZERO bidding price. You need to pay nothing\nelse than some miminal transaction gas fees on Heco. If the NFT is created or occupied by someone else, you could bid it with a litte bit\nhigher price, which is 2% more than current price, or just 0.4 HT adding price if current price is less than 20 HT. Once there is no one else\nbidding this NFT within the bidding duration which is 3 days starting from it is first bidded, you will be the winner of this NFT."),(0,a.kt)("p",null,"Each time you bid for an NFT, you will get some giveaway in FESW@H. As the fisrt bidder of an NFT, you will get 3000 FESW@H. While bidding\nwith a higher price, you will get the giveaway at the rate of 500 FESW@H/HT based on your bidding price increment, no matter whether\nyou are the first bidder or following bidder."),(0,a.kt)("p",null,"As the winner of an NFT bidding, you will get the giveaway at the rate of 2500 FESW@H/HT based on your final bidding price, which is\ndistributed alongside with the creation of the liquidity pool while you claim your won NFT.  "),(0,a.kt)("p",null,"Detailded NFT bidding rules are as following:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Rule No."),(0,a.kt)("th",{parentName:"tr",align:"left"},"Bidding Rules"),(0,a.kt)("th",{parentName:"tr",align:"left"},"More Info"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The first NFT bidder of any crypto asset liquidity pool receives 3000 FESW@H as the giveaway. Only the heading 10000 first NFT bidders are qualified for this giveaway.",(0,a.kt)("br",null),"* If the bidding price is not ZERO, additional giveaway is distributed based on rule 2."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Giveaway = 3000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Giveaway amount to any following NFT bidder is the product of the bidding price increment and the rate of 500 FESW@H/HT. This rule is also applicable to the first NFT bidder if the bidding price is not ZERO."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Giveaway = 500 * Price increment")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"3"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The bidding price increment should be more than 2% over current NFT price, or more than 0.4 HT if current price is less than 20 HT. ",(0,a.kt)("br",null)," * The first NFT bidder could offer any bidding price, including ZERO."),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u03b4P >= max (0.4 HT, 2% * price)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Normal bidding duration is 3 days staring from the firts bidding time (t",(0,a.kt)("sub",null,"0"),")."),(0,a.kt)("td",{parentName:"tr",align:"left"},"t",(0,a.kt)("sub",null,"e")," = t",(0,a.kt)("sub",null,"0")," + 3 days")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"5"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Bidding is extended if anyone bids the NFT within 2 hours before the normal ending time. Extension duration is 2 hours starting from the last bidding time."),(0,a.kt)("td",{parentName:"tr",align:"left"},"t'",(0,a.kt)("sub",null,"e")," = t + 2 hours, if t >= t",(0,a.kt)("sub",null,"e")," - 2 hours")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"6"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The bidding is ended if the normal bidding time passed, and no new bidding comes in during last 2 hours. The last NFT bidder is the final bidding winner."),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"7"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The NFT winner need to claim the NFT within 4 days starting from the time the bidding has ended, otherwise the NFT will be open for re-bidding, but the current winner will only be refunded half of the final bidding price."),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"8"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The giveaway amount to the NFT bidding winner is the product of the last bidding price and the rate of 2500 FESW@H/HT."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Winner giveaway = 2500 * Price")))))}p.isMDXComponent=!0}}]);