"use strict";(globalThis.webpackChunk_ampath_esm_preappointment_app=globalThis.webpackChunk_ampath_esm_preappointment_app||[]).push([[729],{4729:(e,t,n)=>{n.r(t),n.d(t,{IS_REACT_LEGACY:()=>R,IS_SERVER:()=>O,OBJECT:()=>c,SWRConfig:()=>G,SWRGlobalState:()=>r,UNDEFINED:()=>s,cache:()=>q,compare:()=>U,createCacheHelper:()=>w,defaultConfig:()=>P,defaultConfigOptions:()=>S,getTimestamp:()=>F,hasRequestAnimationFrame:()=>m,initCache:()=>x,internalMutate:()=>N,isDocumentDefined:()=>h,isFunction:()=>l,isUndefined:()=>u,isWindowDefined:()=>p,mergeConfigs:()=>j,mergeObjects:()=>f,mutate:()=>J,noop:()=>a,normalize:()=>B,preload:()=>K,preset:()=>C,rAF:()=>T,revalidateEvents:()=>M,serialize:()=>L,slowConnection:()=>A,stableHash:()=>E,subscribeCallback:()=>ee,useIsomorphicLayoutEffect:()=>k,useSWRConfig:()=>Y,useStateWithDeps:()=>Z,withArgs:()=>X,withMiddleware:()=>te});var o=n(5206);const r=new WeakMap,i={},a=()=>{},s=a(),c=Object,u=e=>e===s,l=e=>"function"==typeof e,f=(e,t)=>({...e,...t}),d="undefined",p=typeof window!=d,h=typeof document!=d,m=()=>p&&typeof window.requestAnimationFrame!=d,w=(e,t)=>{const n=r.get(e);return[()=>e.get(t)||i,o=>{const r=e.get(t);n[5](t,f(r,o),r||i)},n[6]]},_=new WeakMap;let g=0;const E=e=>{const t=typeof e,n=e&&e.constructor,o=n==Date;let r,i;if(c(e)!==e||o||n==RegExp)r=o?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(r=_.get(e),r)return r;if(r=++g+"~",_.set(e,r),n==Array){for(r="@",i=0;i<e.length;i++)r+=E(e[i])+",";_.set(e,r)}if(n==c){r="#";const t=c.keys(e).sort();for(;!u(i=t.pop());)u(e[i])||(r+=i+":"+E(e[i])+",");_.set(e,r)}}return r};let v=!0;const[y,b]=p&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[a,a],C={isOnline:()=>v,isVisible:()=>{const e=h&&document.visibilityState;return u(e)||"hidden"!==e}},S={initFocus:e=>(h&&document.addEventListener("visibilitychange",e),y("focus",e),()=>{h&&document.removeEventListener("visibilitychange",e),b("focus",e)}),initReconnect:e=>{const t=()=>{v=!0,e()},n=()=>{v=!1};return y("online",t),y("offline",n),()=>{b("online",t),b("offline",n)}}},R=!o.useId,O=!p||"Deno"in window,T=e=>m()?window.requestAnimationFrame(e):setTimeout(e,1),k=O?o.useEffect:o.useLayoutEffect,D="undefined"!=typeof navigator&&navigator.connection,A=!O&&D&&(["slow-2g","2g"].includes(D.effectiveType)||D.saveData),L=e=>{if(l(e))try{e=e()}catch(t){e=""}const t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?E(e):"",t]};let W=0;const F=()=>++W,I=2;var M={__proto__:null,FOCUS_EVENT:0,RECONNECT_EVENT:1,MUTATE_EVENT:I};async function N(...e){const[t,n,o,i]=e,a=f({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{});let c=a.populateCache;const d=a.rollbackOnError;let p=a.optimisticData;const h=!1!==a.revalidate,m=a.throwOnError;if(l(n)){const e=n,o=[],r=t.keys();for(let n=r.next();!n.done;n=r.next()){const r=n.value;!r.startsWith("$inf$")&&e(t.get(r)._k)&&o.push(r)}return Promise.all(o.map(_))}return _(n);async function _(n){const[i]=L(n);if(!i)return;const[a,f]=w(t,i),[_,g,E]=r.get(t),v=_[i],y=()=>h&&(delete E[i],v&&v[0])?v[0](I).then((()=>a().data)):a().data;if(e.length<3)return y();let b,C=o;const S=F();g[i]=[S,0];const R=!u(p),O=a(),T=O.data,k=O._c,D=u(k)?T:k;if(R&&(p=l(p)?p(D):p,f({data:p,_c:D})),l(C))try{C=C(D)}catch(e){b=e}if(C&&l(C.then)){if(C=await C.catch((e=>{b=e})),S!==g[i][0]){if(b)throw b;return C}b&&R&&(e=>"function"==typeof d?d(e):!1!==d)(b)&&(c=!0,C=D,f({data:C,_c:s}))}c&&(b||(l(c)&&(C=c(C,D)),f({data:C,_c:s}))),g[i][1]=F();const A=await y();if(f({_c:s}),!b)return c?A:C;if(m)throw b}}const V=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},x=(e,t)=>{if(!r.has(e)){const n=f(S,t),o={},i=N.bind(s,e);let c=a;const u={},l=(e,t)=>{const n=u[e]||[];return u[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},d=(t,n,o)=>{e.set(t,n);const r=u[t];if(r)for(let e=r.length;e--;)r[e](o,n)},p=()=>{if(!r.has(e)&&(r.set(e,[o,{},{},{},i,d,l]),!O)){const t=n.initFocus(setTimeout.bind(s,V.bind(s,o,0))),i=n.initReconnect(setTimeout.bind(s,V.bind(s,o,1)));c=()=>{t&&t(),i&&i(),r.delete(e)}}};return p(),[e,i,p,c]}return[e,r.get(e)[4]]},U=(e,t)=>E(e)==E(t),[q,J]=x(new Map),P=f({onLoadingSlow:a,onSuccess:a,onError:a,onErrorRetry:(e,t,n,o,r)=>{const i=n.errorRetryCount,a=r.retryCount,s=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!u(i)&&a>i||setTimeout(o,s,r)},onDiscarded:a,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:A?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:A?5e3:3e3,compare:U,isPaused:()=>!1,cache:q,mutate:J,fallback:{}},C),j=(e,t)=>{const n=f(e,t);if(t){const{use:o,fallback:r}=e,{use:i,fallback:a}=t;o&&i&&(n.use=o.concat(i)),r&&a&&(n.fallback=f(r,a))}return n},z=(0,o.createContext)({}),G=e=>{const{value:t}=e,n=(0,o.useContext)(z),r=l(t),i=(0,o.useMemo)((()=>r?t(n):t),[r,n,t]),a=(0,o.useMemo)((()=>r?i:j(n,i)),[r,n,i]),c=i&&i.provider,[u]=(0,o.useState)((()=>c?x(c(a.cache||q),i):s));return u&&(a.cache=u[0],a.mutate=u[1]),k((()=>{if(u)return u[2]&&u[2](),u[3]}),[]),(0,o.createElement)(z.Provider,f(e,{value:a}))},H=p&&window.__SWR_DEVTOOLS_USE__,$=H?window.__SWR_DEVTOOLS_USE__:[],B=e=>l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],Y=()=>f(P,(0,o.useContext)(z)),K=(e,t)=>{const n=L(e)[0],[,,,o]=r.get(q);if(o[n])return o[n];const i=t(e);return o[n]=i,i},Q=$.concat((e=>(t,n,o)=>e(t,n&&((...e)=>{const o=L(t)[0],[,,,i]=r.get(q),a=i[o];return a?(delete i[o],a):n(...e)}),o))),X=e=>function(...t){const n=Y(),[o,r,i]=B(t),a=j(n,i);let s=e;const{use:c}=a,u=(c||[]).concat(Q);for(let e=u.length;e--;)s=u[e](s);return s(o,r||a.fetcher||null,a)},Z=e=>{const t=(0,o.useState)({})[1],n=(0,o.useRef)(!1),r=(0,o.useRef)(e),i=(0,o.useRef)({data:!1,error:!1,isValidating:!1}),a=(0,o.useCallback)((e=>{let a=!1;const s=r.current;for(const t in e){const n=t;s[n]!==e[n]&&(s[n]=e[n],i.current[n]&&(a=!0))}a&&!n.current&&(R?t({}):o.startTransition((()=>t({}))))}),[]);return k((()=>(n.current=!1,()=>{n.current=!0}))),[r,i.current,a]},ee=(e,t,n)=>{const o=t[e]||(t[e]=[]);return o.push(n),()=>{const e=o.indexOf(n);e>=0&&(o[e]=o[o.length-1],o.pop())}},te=(e,t)=>(...n)=>{const[o,r,i]=B(n),a=(i.use||[]).concat(t);return e(o,r,{...i,use:a})};H&&(window.__SWR_DEVTOOLS_REACT__=o)}}]);