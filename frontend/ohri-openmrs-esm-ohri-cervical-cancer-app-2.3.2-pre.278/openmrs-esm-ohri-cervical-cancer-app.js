var _ohri_openmrs_esm_ohri_cervical_cancer_app;(()=>{"use strict";var e,r,t,n,o,a,i,l,s,u,f,c,p,h,d,m,v,g={8508:(e,r,t)=>{var n={"./start":()=>Promise.all([t.e(32),t.e(665),t.e(649),t.e(268),t.e(325),t.e(663),t.e(505)]).then((()=>()=>t(2044)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},b={};function _(e){var r=b[e];if(void 0!==r)return r.exports;var t=b[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,_),t.loaded=!0,t.exports}_.m=g,_.c=b,_.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return _.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,_.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);_.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,_.d(o,a),o},_.d=(e,r)=>{for(var t in r)_.o(r,t)&&!_.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},_.f={},_.e=e=>Promise.all(Object.keys(_.f).reduce(((r,t)=>(_.f[t](e,r),r)),[])),_.u=e=>e+".js",_.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),_.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="@ohri/openmrs-esm-ohri-cervical-cancer-app:",_.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,l;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var f=s[u];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==n+o){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,_.nc&&i.setAttribute("nonce",_.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var c=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),l&&document.head.appendChild(i)}},_.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{_.S={};var e={},r={};_.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];_.o(_.S,t)||(_.S[t]={});var a=_.S[t],i="@ohri/openmrs-esm-ohri-cervical-cancer-app",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},s=[];return"default"===t&&(l("@openmrs/esm-framework","5.6.1-pre.1806",(()=>Promise.all([_.e(130),_.e(268)]).then((()=>()=>_(130))))),l("@openmrs/esm-patient-common-lib","8.0.2-pre.4556",(()=>Promise.all([_.e(32),_.e(665),_.e(548),_.e(268),_.e(325),_.e(663)]).then((()=>()=>_(3548))))),l("dayjs","1.11.10",(()=>_.e(731).then((()=>()=>_(4731))))),l("react-i18next","11.18.6",(()=>Promise.all([_.e(416),_.e(268)]).then((()=>()=>_(6416))))),l("react","18.2.0",(()=>_.e(570).then((()=>()=>_(570))))),l("swr/_internal","2.2.4",(()=>Promise.all([_.e(637),_.e(268)]).then((()=>()=>_(4637))))),l("swr/immutable","2.2.4",(()=>Promise.all([_.e(32),_.e(268),_.e(325),_.e(983)]).then((()=>()=>_(2652))))),l("swr/infinite","2.2.4",(()=>Promise.all([_.e(32),_.e(480),_.e(268),_.e(325)]).then((()=>()=>_(1480)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),(()=>{var e;_.g.importScripts&&(e=_.g.location+"");var r=_.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),_.p=e})(),o=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},a=(e,r)=>{e=o(e),r=o(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var n=e[t],a=(typeof n)[0];if(t>=r.length)return"u"==a;var i=r[t],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;t++}},i=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var a=[];for(o=1;o<e.length;o++){var l=e[o];a.push(0===l?"not("+s()+")":1===l?"("+s()+" || "+s()+")":2===l?a.pop()+" "+a.pop():i(l))}return s();function s(){return a.pop().replace(/^\((.+)\)$/,"$1")}},l=(e,r)=>{if(0 in e){r=o(r);var t=e[0],n=t<0;n&&(t=-t-1);for(var a=0,i=1,s=!0;;i++,a++){var u,f,c=i<e.length?(typeof e[i])[0]:"";if(a>=r.length||"o"==(f=(typeof(u=r[a]))[0]))return!s||("u"==c?i>t&&!n:""==c!=n);if("u"==f){if(!s||"u"!=c)return!1}else if(s)if(c==f)if(i<=t){if(u!=e[i])return!1}else{if(n?u>e[i]:u<e[i])return!1;u!=e[i]&&(s=!1)}else if("s"!=c&&"n"!=c){if(n||i<=t)return!1;s=!1,i--}else{if(i<=t||f<c!=n)return!1;s=!1}else"s"!=c&&"n"!=c&&(s=!1,i--)}}var p=[],h=p.pop.bind(p);for(a=1;a<e.length;a++){var d=e[a];p.push(1==d?h()|h():2==d?h()&h():d?l(d,r):!h())}return!!h()},s=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},u=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+i(n)+")",f=(e,r,t,n)=>{var o=s(e,t);return l(n,o)||c(u(e,t,o,n)),p(e[t][o])},c=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},p=e=>(e.loaded=1,e.get()),h=(e=>function(r,t,n,o){var a=_.I(r);return a&&a.then?a.then(e.bind(e,r,_.S[r],t,n,o)):e(0,_.S[r],t,n,o)})(((e,r,t,n,o)=>r&&_.o(r,t)?f(r,0,t,n):o())),d={},m={268:()=>h("default","react",[1,18],(()=>_.e(570).then((()=>()=>_(570))))),3325:()=>h("default","swr/_internal",[1,2],(()=>_.e(637).then((()=>()=>_(4637))))),2870:()=>h("default","@openmrs/esm-framework",[1,5],(()=>_.e(130).then((()=>()=>_(130))))),3287:()=>h("default","@openmrs/esm-patient-common-lib",[1,6],(()=>_.e(548).then((()=>()=>_(3548))))),4924:()=>h("default","react-i18next",[1,11],(()=>_.e(416).then((()=>()=>_(6416))))),9198:()=>h("default","swr/immutable",[1,2],(()=>_.e(652).then((()=>()=>_(2652))))),3565:()=>h("default","dayjs",[1,1],(()=>_.e(731).then((()=>()=>_(4731))))),9285:()=>h("default","swr/infinite",[1,2],(()=>_.e(480).then((()=>()=>_(1480)))))},v={268:[268],325:[3325],505:[3565,9285],663:[2870,3287,4924,9198]},_.f.consumes=(e,r)=>{_.o(v,e)&&v[e].forEach((e=>{if(_.o(d,e))return r.push(d[e]);var t=r=>{d[e]=0,_.m[e]=t=>{delete _.c[e],t.exports=r()}},n=r=>{delete d[e],_.m[e]=t=>{throw delete _.c[e],r}};try{var o=m[e]();o.then?r.push(d[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={743:0};_.f.j=(r,t)=>{var n=_.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(268|325|663)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=_.p+_.u(r),i=new Error;_.l(a,(t=>{if(_.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,l]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in i)_.o(i,n)&&(_.m[n]=i[n]);l&&l(_)}for(r&&r(t);s<a.length;s++)o=a[s],_.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=globalThis.webpackChunk_ohri_openmrs_esm_ohri_cervical_cancer_app=globalThis.webpackChunk_ohri_openmrs_esm_ohri_cervical_cancer_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),_.nc=void 0;var y=_(8508);_ohri_openmrs_esm_ohri_cervical_cancer_app=y})();