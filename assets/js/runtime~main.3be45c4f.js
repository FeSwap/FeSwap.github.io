!function(){"use strict";var e,f,a,c,d,t={},b={};function n(e){var f=b[e];if(void 0!==f)return f.exports;var a=b[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=t,n.c=b,e=[],n.O=function(f,a,c,d){if(!a){var t=1/0;for(u=0;u<e.length;u++){a=e[u][0],c=e[u][1],d=e[u][2];for(var b=!0,r=0;r<a.length;r++)(!1&d||t>=d)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(b=!1,d<t&&(t=d));if(b){e.splice(u--,1);var o=c();void 0!==o&&(f=o)}}return f}d=d||0;for(var u=e.length;u>0&&e[u-1][2]>d;u--)e[u]=e[u-1];e[u]=[a,c,d]},n.n=function(e){var f=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(f,{a:f}),f},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);n.r(d);var t={};f=f||[null,a({}),a([]),a(a)];for(var b=2&c&&e;"object"==typeof b&&!~f.indexOf(b);b=a(b))Object.getOwnPropertyNames(b).forEach((function(f){t[f]=function(){return e[f]}}));return t.default=function(){return e},n.d(d,t),d},n.d=function(e,f){for(var a in f)n.o(f,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(f,a){return n.f[a](e,f),f}),[]))},n.u=function(e){return"assets/js/"+({53:"935f2afb",110:"db44cdf6",126:"0284318d",129:"92136717",131:"51023cae",277:"c101f1f3",321:"d004d28d",394:"b8f18680",500:"b0a8e85e",533:"b2b675dd",914:"46c9d015",1014:"ec2a912c",1264:"2674539e",1306:"00d7d12b",1493:"f86db155",1588:"40f661f5",1606:"cd899775",1673:"9a4e9e41",1689:"578b114d",1703:"aab376c6",1713:"a7023ddc",1747:"e58997f3",1884:"34c6a426",2085:"06829f7b",2208:"d7fc78f7",2302:"a0231917",2535:"814f3328",2756:"e2bd25a4",2890:"4f1e484a",3085:"1f391b9e",3089:"a6aa9e1f",3257:"aaafef28",3348:"321254f5",3488:"ca609fab",3533:"9d398a43",3677:"e112b695",3727:"8548286f",3762:"03894d8f",3781:"3fde83ff",3885:"9bb3f948",4009:"1d45122e",4013:"01a85c17",4195:"c4f5d8e4",4205:"269a6cfc",4251:"c8a3d4f1",4491:"65b21222",4676:"4f88daf5",4818:"52976e5e",4826:"da29069c",5065:"5f9560f6",5077:"c7cc47c9",5180:"0588ac28",5320:"b4e8d7cf",5399:"0c03469c",5433:"709b0c61",5479:"3ff2f205",5691:"9b64487a",5826:"c09a64e5",5841:"6d29d616",6103:"ccc49370",6290:"fa92dc73",6327:"ecf8b923",6726:"e1740a4f",6738:"65bc6615",6873:"5dd54bf1",6966:"59e1bc5c",7133:"cdcb5863",7225:"d98da2fa",7365:"5b0da4c3",7467:"e019a078",7532:"0801fb71",7585:"19920237",7686:"db14e606",7801:"e000358d",7808:"8b5bf76d",7918:"17896441",8064:"1e2d8ea9",8084:"f8c700f1",8144:"8b5d6f4e",8151:"5ba9390c",8320:"842a7148",8407:"029fa686",8438:"5a9800b7",8452:"49eafdd3",8550:"8d22805f",8610:"6875c492",8684:"ffda71d4",8976:"fe91a1c7",9081:"18891827",9246:"c52f23ea",9334:"fcb95976",9365:"c24452a0",9514:"1be78505",9573:"1ef2fcf4",9599:"5065b319",9603:"1da6090e",9670:"aaa61d14",9686:"4824d328"}[e]||e)+"."+{53:"5c6118e0",110:"54b79763",126:"4ed927a8",129:"4fbf3ca3",131:"e32636cc",261:"db871d8b",277:"3c121eed",321:"e94f8e40",394:"fef87096",497:"3c7671f8",500:"8f690c3f",533:"dfb4abcf",914:"f58bacc7",1014:"bb6f83ff",1264:"85ff4e86",1306:"f438cb02",1493:"7c02246e",1588:"4543e80f",1606:"001ab299",1673:"975d53c4",1689:"d77f6773",1703:"87e7a318",1713:"7f933c10",1747:"bb5bc43f",1884:"19a9029f",2085:"93bc8aba",2208:"2016dce6",2302:"a05cd64a",2535:"265b2c1c",2756:"893439e7",2798:"550a3ed6",2890:"9ac3ce0c",3085:"2b04be3a",3089:"f41a04bb",3257:"140b2fb9",3348:"ef0ee3f2",3488:"68a6ba7e",3533:"ef114fc0",3677:"6de7075b",3727:"614a8278",3762:"d4561651",3781:"937f564c",3885:"a2f43e11",4009:"b92e5c1f",4013:"7f17bfa9",4034:"d1fc4b15",4195:"ecfcb7bf",4205:"0a78d2f3",4251:"befa2b71",4491:"6a7d510f",4608:"393905ae",4676:"64471b34",4818:"ea0d5c77",4826:"afd29438",5065:"ada68c98",5077:"1bcec448",5180:"77369974",5320:"808960e1",5399:"52a9fc18",5433:"c8c836e1",5479:"3323a2e9",5691:"856638eb",5826:"1e83a0a1",5841:"2ed93618",6103:"d358cf62",6257:"a1c040ac",6290:"f8fb8375",6327:"82f76e9f",6726:"49f12edb",6738:"ad1b6582",6873:"adcbb0ea",6966:"0a2018c9",7133:"6d938e62",7225:"feef2b1d",7365:"bfac0515",7467:"af8a94dd",7532:"528adc80",7585:"83cd44a2",7686:"f550f4c4",7801:"71a02ddb",7808:"8582a9dc",7918:"40de6890",8064:"ca3cc7f9",8084:"7e7eaa73",8144:"32ba1c02",8151:"9d74f992",8320:"ef498e12",8407:"543d1723",8438:"bf614e5f",8452:"4b5e2ec5",8550:"d8e3b766",8610:"d2ac7196",8684:"4e5a5986",8976:"c7930011",9081:"cf54f361",9246:"4d9287ac",9334:"0114f9ba",9365:"429e8520",9514:"61ec521c",9573:"78bc5b7c",9599:"b4fd417a",9603:"710587ac",9670:"4f96b071",9686:"c58e5e5f"}[e]+".js"},n.miniCssF=function(e){return"assets/css/styles.9f0b1821.css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,f){return Object.prototype.hasOwnProperty.call(e,f)},c={},d="feswap-docs:",n.l=function(e,f,a,t){if(c[e])c[e].push(f);else{var b,r;if(void 0!==a)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==d+a){b=i;break}}b||(r=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,n.nc&&b.setAttribute("nonce",n.nc),b.setAttribute("data-webpack",d+a),b.src=e),c[e]=[f];var s=function(f,a){b.onerror=b.onload=null,clearTimeout(l);var d=c[e];if(delete c[e],b.parentNode&&b.parentNode.removeChild(b),d&&d.forEach((function(e){return e(a)})),f)return f(a)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=s.bind(null,b.onerror),b.onload=s.bind(null,b.onload),r&&document.head.appendChild(b)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.gca=function(e){return e={17896441:"7918",18891827:"9081",19920237:"7585",92136717:"129","935f2afb":"53",db44cdf6:"110","0284318d":"126","51023cae":"131",c101f1f3:"277",d004d28d:"321",b8f18680:"394",b0a8e85e:"500",b2b675dd:"533","46c9d015":"914",ec2a912c:"1014","2674539e":"1264","00d7d12b":"1306",f86db155:"1493","40f661f5":"1588",cd899775:"1606","9a4e9e41":"1673","578b114d":"1689",aab376c6:"1703",a7023ddc:"1713",e58997f3:"1747","34c6a426":"1884","06829f7b":"2085",d7fc78f7:"2208",a0231917:"2302","814f3328":"2535",e2bd25a4:"2756","4f1e484a":"2890","1f391b9e":"3085",a6aa9e1f:"3089",aaafef28:"3257","321254f5":"3348",ca609fab:"3488","9d398a43":"3533",e112b695:"3677","8548286f":"3727","03894d8f":"3762","3fde83ff":"3781","9bb3f948":"3885","1d45122e":"4009","01a85c17":"4013",c4f5d8e4:"4195","269a6cfc":"4205",c8a3d4f1:"4251","65b21222":"4491","4f88daf5":"4676","52976e5e":"4818",da29069c:"4826","5f9560f6":"5065",c7cc47c9:"5077","0588ac28":"5180",b4e8d7cf:"5320","0c03469c":"5399","709b0c61":"5433","3ff2f205":"5479","9b64487a":"5691",c09a64e5:"5826","6d29d616":"5841",ccc49370:"6103",fa92dc73:"6290",ecf8b923:"6327",e1740a4f:"6726","65bc6615":"6738","5dd54bf1":"6873","59e1bc5c":"6966",cdcb5863:"7133",d98da2fa:"7225","5b0da4c3":"7365",e019a078:"7467","0801fb71":"7532",db14e606:"7686",e000358d:"7801","8b5bf76d":"7808","1e2d8ea9":"8064",f8c700f1:"8084","8b5d6f4e":"8144","5ba9390c":"8151","842a7148":"8320","029fa686":"8407","5a9800b7":"8438","49eafdd3":"8452","8d22805f":"8550","6875c492":"8610",ffda71d4:"8684",fe91a1c7:"8976",c52f23ea:"9246",fcb95976:"9334",c24452a0:"9365","1be78505":"9514","1ef2fcf4":"9573","5065b319":"9599","1da6090e":"9603",aaa61d14:"9670","4824d328":"9686"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(f,a){var c=n.o(e,f)?e[f]:void 0;if(0!==c)if(c)a.push(c[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var d=new Promise((function(a,d){c=e[f]=[a,d]}));a.push(c[2]=d);var t=n.p+n.u(f),b=new Error;n.l(t,(function(a){if(n.o(e,f)&&(0!==(c=e[f])&&(e[f]=void 0),c)){var d=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;b.message="Loading chunk "+f+" failed.\n("+d+": "+t+")",b.name="ChunkLoadError",b.type=d,b.request=t,c[1](b)}}),"chunk-"+f,f)}},n.O.j=function(f){return 0===e[f]};var f=function(f,a){var c,d,t=a[0],b=a[1],r=a[2],o=0;for(c in b)n.o(b,c)&&(n.m[c]=b[c]);if(r)var u=r(n);for(f&&f(a);o<t.length;o++)d=t[o],n.o(e,d)&&e[d]&&e[d][0](),e[t[o]]=0;return n.O(u)},a=self.webpackChunkfeswap_docs=self.webpackChunkfeswap_docs||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))}()}();