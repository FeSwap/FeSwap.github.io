!function(){"use strict";var e,f,a,c,d,t={},n={};function r(e){var f=n[e];if(void 0!==f)return f.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=t,r.c=n,e=[],r.O=function(f,a,c,d){if(!a){var t=1/0;for(u=0;u<e.length;u++){a=e[u][0],c=e[u][1],d=e[u][2];for(var n=!0,o=0;o<a.length;o++)(!1&d||t>=d)&&Object.keys(r.O).every((function(e){return r.O[e](a[o])}))?a.splice(o--,1):(n=!1,d<t&&(t=d));if(n){e.splice(u--,1);var b=c();void 0!==b&&(f=b)}}return f}d=d||0;for(var u=e.length;u>0&&e[u-1][2]>d;u--)e[u]=e[u-1];e[u]=[a,c,d]},r.n=function(e){var f=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(f,{a:f}),f},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var t={};f=f||[null,a({}),a([]),a(a)];for(var n=2&c&&e;"object"==typeof n&&!~f.indexOf(n);n=a(n))Object.getOwnPropertyNames(n).forEach((function(f){t[f]=function(){return e[f]}}));return t.default=function(){return e},r.d(d,t),d},r.d=function(e,f){for(var a in f)r.o(f,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(f,a){return r.f[a](e,f),f}),[]))},r.u=function(e){return"assets/js/"+({53:"935f2afb",110:"db44cdf6",126:"0284318d",277:"c101f1f3",500:"b0a8e85e",533:"b2b675dd",914:"46c9d015",1264:"2674539e",1306:"00d7d12b",1493:"f86db155",1588:"40f661f5",1606:"cd899775",1673:"9a4e9e41",1689:"578b114d",1713:"a7023ddc",1747:"e58997f3",1884:"34c6a426",2085:"06829f7b",2208:"d7fc78f7",2302:"a0231917",2535:"814f3328",2890:"4f1e484a",3085:"1f391b9e",3089:"a6aa9e1f",3257:"aaafef28",3348:"321254f5",3488:"ca609fab",3533:"9d398a43",3727:"8548286f",3762:"03894d8f",3781:"3fde83ff",4013:"01a85c17",4195:"c4f5d8e4",4205:"269a6cfc",4491:"65b21222",4676:"4f88daf5",4818:"52976e5e",4826:"da29069c",5077:"c7cc47c9",5399:"0c03469c",5479:"3ff2f205",5691:"9b64487a",5826:"c09a64e5",5841:"6d29d616",6103:"ccc49370",6290:"fa92dc73",6327:"ecf8b923",6726:"e1740a4f",6738:"65bc6615",6966:"59e1bc5c",7133:"cdcb5863",7225:"d98da2fa",7365:"5b0da4c3",7532:"0801fb71",7585:"19920237",7686:"db14e606",7918:"17896441",8084:"f8c700f1",8144:"8b5d6f4e",8320:"842a7148",8407:"029fa686",8438:"5a9800b7",8550:"8d22805f",8610:"6875c492",8684:"ffda71d4",8976:"fe91a1c7",9081:"18891827",9246:"c52f23ea",9334:"fcb95976",9365:"c24452a0",9514:"1be78505",9599:"5065b319",9603:"1da6090e",9670:"aaa61d14",9686:"4824d328"}[e]||e)+"."+{53:"dbcd1205",110:"f383e525",126:"4ed927a8",261:"db871d8b",277:"3c121eed",497:"3c7671f8",500:"8f690c3f",533:"026f9da0",914:"f3532462",1264:"42082e9d",1306:"77bdfb3a",1493:"db67b66b",1588:"4543e80f",1606:"d02661fa",1673:"b5b4b46f",1689:"5448d506",1713:"3e28b799",1747:"02e15eac",1884:"3a49d29c",2085:"1e2faba0",2208:"2016dce6",2302:"72012ebe",2535:"e97b3c4e",2798:"550a3ed6",2890:"9ac3ce0c",3085:"2b04be3a",3089:"f41a04bb",3257:"bd4c0864",3348:"ef0ee3f2",3488:"e5469018",3533:"b109744e",3727:"362920b4",3762:"7fbe7848",3781:"d6135087",4013:"7f17bfa9",4034:"d1fc4b15",4195:"ecfcb7bf",4205:"0a78d2f3",4491:"6a7d510f",4608:"393905ae",4676:"64471b34",4818:"ea0d5c77",4826:"cd3c3fcc",5077:"81b71d1f",5399:"ac1365df",5479:"26332b51",5691:"bf26ef01",5826:"1e83a0a1",5841:"27774c48",6103:"d358cf62",6257:"a1c040ac",6290:"ed1c94a7",6327:"71ea4cf0",6726:"857de3c4",6738:"ad1b6582",6966:"8a5258e9",7133:"5e101bca",7225:"cdddad89",7365:"bfac0515",7532:"528adc80",7585:"a4a14960",7686:"f550f4c4",7918:"40de6890",8084:"7e7eaa73",8144:"3b1981a3",8320:"6853503c",8407:"dbb6279f",8438:"ddf367b4",8550:"6a5a7c22",8610:"d2ac7196",8684:"ea7c20de",8976:"02a16279",9081:"c6c1150d",9246:"ce542077",9334:"0114f9ba",9365:"84cb42ed",9514:"61ec521c",9599:"60b585cc",9603:"71cef961",9670:"51313895",9686:"de26fbac"}[e]+".js"},r.miniCssF=function(e){return"assets/css/styles.2b4a8334.css"},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,f){return Object.prototype.hasOwnProperty.call(e,f)},c={},d="feswap-docs:",r.l=function(e,f,a,t){if(c[e])c[e].push(f);else{var n,o;if(void 0!==a)for(var b=document.getElementsByTagName("script"),u=0;u<b.length;u++){var i=b[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==d+a){n=i;break}}n||(o=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,r.nc&&n.setAttribute("nonce",r.nc),n.setAttribute("data-webpack",d+a),n.src=e),c[e]=[f];var s=function(f,a){n.onerror=n.onload=null,clearTimeout(l);var d=c[e];if(delete c[e],n.parentNode&&n.parentNode.removeChild(n),d&&d.forEach((function(e){return e(a)})),f)return f(a)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=s.bind(null,n.onerror),n.onload=s.bind(null,n.onload),o&&document.head.appendChild(n)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",r.gca=function(e){return e={17896441:"7918",18891827:"9081",19920237:"7585","935f2afb":"53",db44cdf6:"110","0284318d":"126",c101f1f3:"277",b0a8e85e:"500",b2b675dd:"533","46c9d015":"914","2674539e":"1264","00d7d12b":"1306",f86db155:"1493","40f661f5":"1588",cd899775:"1606","9a4e9e41":"1673","578b114d":"1689",a7023ddc:"1713",e58997f3:"1747","34c6a426":"1884","06829f7b":"2085",d7fc78f7:"2208",a0231917:"2302","814f3328":"2535","4f1e484a":"2890","1f391b9e":"3085",a6aa9e1f:"3089",aaafef28:"3257","321254f5":"3348",ca609fab:"3488","9d398a43":"3533","8548286f":"3727","03894d8f":"3762","3fde83ff":"3781","01a85c17":"4013",c4f5d8e4:"4195","269a6cfc":"4205","65b21222":"4491","4f88daf5":"4676","52976e5e":"4818",da29069c:"4826",c7cc47c9:"5077","0c03469c":"5399","3ff2f205":"5479","9b64487a":"5691",c09a64e5:"5826","6d29d616":"5841",ccc49370:"6103",fa92dc73:"6290",ecf8b923:"6327",e1740a4f:"6726","65bc6615":"6738","59e1bc5c":"6966",cdcb5863:"7133",d98da2fa:"7225","5b0da4c3":"7365","0801fb71":"7532",db14e606:"7686",f8c700f1:"8084","8b5d6f4e":"8144","842a7148":"8320","029fa686":"8407","5a9800b7":"8438","8d22805f":"8550","6875c492":"8610",ffda71d4:"8684",fe91a1c7:"8976",c52f23ea:"9246",fcb95976:"9334",c24452a0:"9365","1be78505":"9514","5065b319":"9599","1da6090e":"9603",aaa61d14:"9670","4824d328":"9686"}[e]||e,r.p+r.u(e)},function(){var e={1303:0,532:0};r.f.j=function(f,a){var c=r.o(e,f)?e[f]:void 0;if(0!==c)if(c)a.push(c[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var d=new Promise((function(a,d){c=e[f]=[a,d]}));a.push(c[2]=d);var t=r.p+r.u(f),n=new Error;r.l(t,(function(a){if(r.o(e,f)&&(0!==(c=e[f])&&(e[f]=void 0),c)){var d=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;n.message="Loading chunk "+f+" failed.\n("+d+": "+t+")",n.name="ChunkLoadError",n.type=d,n.request=t,c[1](n)}}),"chunk-"+f,f)}},r.O.j=function(f){return 0===e[f]};var f=function(f,a){var c,d,t=a[0],n=a[1],o=a[2],b=0;for(c in n)r.o(n,c)&&(r.m[c]=n[c]);if(o)var u=o(r);for(f&&f(a);b<t.length;b++)d=t[b],r.o(e,d)&&e[d]&&e[d][0](),e[t[b]]=0;return r.O(u)},a=self.webpackChunkfeswap_docs=self.webpackChunkfeswap_docs||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))}()}();