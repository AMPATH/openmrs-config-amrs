var _openmrs_esm_dispensing_app;(()=>{"use strict";var e,r,t,n,o,a,i,s,l,u,p,d,f,c,h,m={616:(e,r,t)=>{var n={"./start":()=>Promise.all([t.e(739),t.e(672),t.e(985)]).then((()=>()=>t(6443)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},v={};function g(e){var r=v[e];if(void 0!==r)return r.exports;var t=v[e]={id:e,loaded:!1,exports:{}};return m[e].call(t.exports,t,t.exports,g),t.loaded=!0,t.exports}g.m=m,g.c=v,g.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return g.d(r,{a:r}),r},g.d=(e,r)=>{for(var t in r)g.o(r,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},g.f={},g.e=e=>Promise.all(Object.keys(g.f).reduce(((r,t)=>(g.f[t](e,r),r)),[])),g.u=e=>e+".js",g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@openmrs/esm-dispensing-app:",g.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,s;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==r+o){i=p;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,g.nc&&i.setAttribute("nonce",g.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(f);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),s&&document.head.appendChild(i)}},g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},g.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{g.S={};var e={},r={};g.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];g.o(g.S,t)||(g.S[t]={});var a=g.S[t],i="@openmrs/esm-dispensing-app",s=(e,r,t,n)=>{var o=a[e]=a[e]||{},s=o[r];(!s||!s.loaded&&(!n!=!s.eager?n:i>s.from))&&(o[r]={get:t,from:i,eager:!!n})},l=[];return"default"===t&&(s("@openmrs/esm-framework","5.2.1-pre.1156",(()=>Promise.all([g.e(800),g.e(672)]).then((()=>()=>g(4800))))),s("dayjs","1.11.7",(()=>g.e(484).then((()=>()=>g(7484))))),s("react-dom","18.2.0",(()=>Promise.all([g.e(935),g.e(672)]).then((()=>()=>g(3935))))),s("react-i18next","11.18.6",(()=>Promise.all([g.e(672),g.e(629)]).then((()=>()=>g(707))))),s("react","18.2.0",(()=>g.e(294).then((()=>()=>g(7294))))),s("swr/_internal","2.2.4",(()=>Promise.all([g.e(753),g.e(672)]).then((()=>()=>g(1753)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var r=g.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],s=(typeof i)[0];if(a!=s)return"o"==a&&"n"==s||"s"==s||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(s=e[a]))[0]?"-":(n>0?".":"")+(n=2,s);return t}var i=[];for(a=1;a<e.length;a++){var s=e[a];i.push(0===s?"not("+l()+")":1===s?"("+l()+" || "+l()+")":2===s?i.pop()+" "+i.pop():o(s))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,s=1,l=!0;;s++,i++){var u,p,d=s<e.length?(typeof e[s])[0]:"";if(i>=r.length||"o"==(p=(typeof(u=r[i]))[0]))return!l||("u"==d?s>n&&!o:""==d!=o);if("u"==p){if(!l||"u"!=d)return!1}else if(l)if(d==p)if(s<=n){if(u!=e[s])return!1}else{if(o?u>e[s]:u<e[s])return!1;u!=e[s]&&(l=!1)}else if("s"!=d&&"n"!=d){if(o||s<=n)return!1;l=!1,s--}else{if(s<=n||p<d!=o)return!1;l=!1}else"s"!=d&&"n"!=d&&(l=!1,s--)}}var f=[],c=f.pop.bind(f);for(i=1;i<e.length;i++){var h=e[i];f.push(1==h?c()|c():2==h?c()&c():h?a(h,r):!c())}return!!c()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},s=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",l=(e,r,t,n)=>{var o=i(e,t);return a(n,o)||u(s(e,t,o,n)),p(e[t][o])},u=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},p=e=>(e.loaded=1,e.get()),d=(e=>function(r,t,n,o){var a=g.I(r);return a&&a.then?a.then(e.bind(e,r,g.S[r],t,n,o)):e(0,g.S[r],t,n,o)})(((e,r,t,n,o)=>r&&g.o(r,t)?l(r,0,t,n):o())),f={},c={1672:()=>d("default","react",[1,18],(()=>g.e(294).then((()=>()=>g(7294))))),1132:()=>d("default","@openmrs/esm-framework",[0],(()=>g.e(800).then((()=>()=>g(4800))))),2653:()=>d("default","dayjs",[1,1],(()=>g.e(484).then((()=>()=>g(7484))))),3397:()=>d("default","react-i18next",[1,11],(()=>g.e(707).then((()=>()=>g(707))))),5183:()=>d("default","react-dom",[1,18],(()=>g.e(935).then((()=>()=>g(3935))))),5714:()=>d("default","swr/_internal",[1,2],(()=>g.e(753).then((()=>()=>g(1753)))))},h={672:[1672],985:[1132,2653,3397,5183,5714]},g.f.consumes=(e,r)=>{g.o(h,e)&&h[e].forEach((e=>{if(g.o(f,e))return r.push(f[e]);var t=r=>{f[e]=0,g.m[e]=t=>{delete g.c[e],t.exports=r()}},n=r=>{delete f[e],g.m[e]=t=>{throw delete g.c[e],r}};try{var o=c[e]();o.then?r.push(f[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={989:0};g.f.j=(r,t)=>{var n=g.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(672!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=g.p+g.u(r),i=new Error;g.l(a,(t=>{if(g.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,i,s]=t,l=0;if(a.some((r=>0!==e[r]))){for(n in i)g.o(i,n)&&(g.m[n]=i[n]);s&&s(g)}for(r&&r(t);l<a.length;l++)o=a[l],g.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=globalThis.webpackChunk_openmrs_esm_dispensing_app=globalThis.webpackChunk_openmrs_esm_dispensing_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),g.nc=void 0;var b=g(616);_openmrs_esm_dispensing_app=b})();