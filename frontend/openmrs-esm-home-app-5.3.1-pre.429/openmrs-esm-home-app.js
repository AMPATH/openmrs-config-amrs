var _openmrs_esm_home_app;(()=>{"use strict";var e,r,t,n,o,a,i,l,u,s,p,f,d,h,c,m={1961:(e,r,t)=>{var n={"./start":()=>Promise.all([t.e(268),t.e(656)]).then((()=>()=>t(4656)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},v={};function g(e){var r=v[e];if(void 0!==r)return r.exports;var t=v[e]={id:e,loaded:!1,exports:{}};return m[e](t,t.exports,g),t.loaded=!0,t.exports}g.m=m,g.c=v,g.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return g.d(r,{a:r}),r},g.d=(e,r)=>{for(var t in r)g.o(r,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},g.f={},g.e=e=>Promise.all(Object.keys(g.f).reduce(((r,t)=>(g.f[t](e,r),r)),[])),g.u=e=>e+".js",g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@openmrs/esm-home-app:",g.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var p=u[s];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==r+o){i=p;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,g.nc&&i.setAttribute("nonce",g.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},g.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{g.S={};var e={},r={};g.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];g.o(g.S,t)||(g.S[t]={});var a=g.S[t],i="@openmrs/esm-home-app",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("@openmrs/esm-framework","5.5.1-pre.1720",(()=>Promise.all([g.e(130),g.e(268)]).then((()=>()=>g(130))))),l("react-i18next","13.2.2",(()=>Promise.all([g.e(913),g.e(268)]).then((()=>()=>g(913))))),l("react-router-dom","6.15.0",(()=>Promise.all([g.e(62),g.e(268)]).then((()=>()=>g(7062))))),l("react","18.2.0",(()=>g.e(784).then((()=>()=>g(2784)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var r=g.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():o(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,p,f=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(p=(typeof(s=r[i]))[0]))return!u||("u"==f?l>n&&!o:""==f!=o);if("u"==p){if(!u||"u"!=f)return!1}else if(u)if(f==p)if(l<=n){if(s!=e[l])return!1}else{if(o?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=f&&"n"!=f){if(o||l<=n)return!1;u=!1,l--}else{if(l<=n||p<f!=o)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,l--)}}var d=[],h=d.pop.bind(d);for(i=1;i<e.length;i++){var c=e[i];d.push(1==c?h()|h():2==c?h()&h():c?a(c,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",u=(e,r,t,n)=>{var o=i(e,t);return a(n,o)||s(l(e,t,o,n)),p(e[t][o])},s=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},p=e=>(e.loaded=1,e.get()),f=(e=>function(r,t,n,o){var a=g.I(r);return a&&a.then?a.then(e.bind(e,r,g.S[r],t,n,o)):e(0,g.S[r],t,n,o)})(((e,r,t,n,o)=>r&&g.o(r,t)?u(r,0,t,n):o())),d={},h={268:()=>f("default","react",[1,18],(()=>g.e(784).then((()=>()=>g(2784))))),2870:()=>f("default","@openmrs/esm-framework",[1,5],(()=>g.e(130).then((()=>()=>g(130))))),8744:()=>f("default","react-router-dom",[1,6],(()=>g.e(62).then((()=>()=>g(7062))))),4924:()=>f("default","react-i18next",[1,11],(()=>g.e(913).then((()=>()=>g(913)))))},c={268:[268],656:[2870,8744,4924]},g.f.consumes=(e,r)=>{g.o(c,e)&&c[e].forEach((e=>{if(g.o(d,e))return r.push(d[e]);var t=r=>{d[e]=0,g.m[e]=t=>{delete g.c[e],t.exports=r()}},n=r=>{delete d[e],g.m[e]=t=>{throw delete g.c[e],r}};try{var o=h[e]();o.then?r.push(d[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={177:0};g.f.j=(r,t)=>{var n=g.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(268!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=g.p+g.u(r),i=new Error;g.l(a,(t=>{if(g.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,i,l]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)g.o(i,n)&&(g.m[n]=i[n]);l&&l(g)}for(r&&r(t);u<a.length;u++)o=a[u],g.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=globalThis.webpackChunk_openmrs_esm_home_app=globalThis.webpackChunk_openmrs_esm_home_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),g.nc=void 0;var b=g(1961);_openmrs_esm_home_app=b})();