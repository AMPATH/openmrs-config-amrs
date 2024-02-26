/*! For license information please see 255.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ampath_esm_preappointment_app=globalThis.webpackChunk_ampath_esm_preappointment_app||[]).push([[255],{452:(e,n,t)=>{var r=t(5206),i="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},a=r.useState,s=r.useEffect,u=r.useLayoutEffect,o=r.useDebugValue;function d(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!i(e,t)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,n){return n()}:function(e,n){var t=n(),r=a({inst:{value:t,getSnapshot:n}}),i=r[0].inst,c=r[1];return u((function(){i.value=t,i.getSnapshot=n,d(i)&&c({inst:i})}),[e,t,n]),s((function(){return d(i)&&c({inst:i}),e((function(){d(i)&&c({inst:i})}))}),[e]),o(t),t};n.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},3100:(e,n,t)=>{e.exports=t(452)},3255:(e,n,t)=>{t.d(n,{ZP:()=>u});var r=t(5206),i=t(3100),a=t(3325);const s={dedupe:!0};a.OBJECT.defineProperty(a.SWRConfig,"defaultValue",{value:a.defaultConfig});var u=(0,a.withArgs)(((e,n,t)=>{const{cache:u,compare:o,suspense:d,fallbackData:c,revalidateOnMount:l,refreshInterval:f,refreshWhenHidden:E,refreshWhenOffline:g,keepPreviousData:p}=t,[h,v,S]=a.SWRGlobalState.get(u),[m,b]=(0,a.serialize)(e),U=(0,r.useRef)(!1),R=(0,r.useRef)(!1),C=(0,r.useRef)(m),T=(0,r.useRef)(n),_=(0,r.useRef)(t),y=()=>_.current,V=()=>y().isVisible()&&y().isOnline(),[w,k,I]=(0,a.createCacheHelper)(u,m),L=(0,r.useRef)({}).current,O=(0,a.isUndefined)(c)?t.fallback[m]:c,D=(e,n)=>{let t=!0;for(const r in L){const i=r;o(n[i],e[i])||"data"===i&&(0,a.isUndefined)(e[i])&&o(n[i],j)||(t=!1)}return t},N=(0,r.useMemo)((()=>{const e=!!m&&!!n&&((0,a.isUndefined)(l)?!y().isPaused()&&!d:l),t=()=>{const n=w(),t=(0,a.mergeObjects)(n);return delete t._k,e?{isValidating:!0,isLoading:!0,...t}:t};let r=t();return()=>{const e=t();return D(e,r)?r:r=e}}),[u,m]),F=(0,i.useSyncExternalStore)((0,r.useCallback)((e=>I(m,((n,t)=>{D(n,t)||e()}))),[u,m]),N,N),A=!U.current,P=F.data,x=(0,a.isUndefined)(P)?O:P,M=F.error,W=(0,r.useRef)(x),j=p?(0,a.isUndefined)(P)?W.current:P:x,G=A&&!(0,a.isUndefined)(l)?l:!y().isPaused()&&(d?!(0,a.isUndefined)(x)&&t.revalidateIfStale:(0,a.isUndefined)(x)||t.revalidateIfStale),H=!!(m&&n&&A&&G),Y=(0,a.isUndefined)(F.isValidating)?H:F.isValidating,q=(0,a.isUndefined)(F.isLoading)?H:F.isLoading,z=(0,r.useCallback)((async e=>{const n=T.current;if(!m||!n||R.current||y().isPaused())return!1;let r,i,s=!0;const u=e||{},d=!S[m]||!u.dedupe,c=()=>a.IS_REACT_LEGACY?!R.current&&m===C.current&&U.current:m===C.current,l={isValidating:!1,isLoading:!1},f=()=>{k(l)},E=()=>{const e=S[m];e&&e[1]===i&&delete S[m]},g={isValidating:!0};(0,a.isUndefined)(w().data)&&(g.isLoading=!0);try{if(d&&(k(g),t.loadingTimeout&&(0,a.isUndefined)(w().data)&&setTimeout((()=>{s&&c()&&y().onLoadingSlow(m,t)}),t.loadingTimeout),S[m]=[n(b),(0,a.getTimestamp)()]),[r,i]=S[m],r=await r,d&&setTimeout(E,t.dedupingInterval),!S[m]||S[m][1]!==i)return d&&c()&&y().onDiscarded(m),!1;l.error=a.UNDEFINED;const e=v[m];if(!(0,a.isUndefined)(e)&&(i<=e[0]||i<=e[1]||0===e[1]))return f(),d&&c()&&y().onDiscarded(m),!1;const u=w().data;l.data=o(u,r)?u:r,d&&c()&&y().onSuccess(r,m,t)}catch(e){E();const n=y(),{shouldRetryOnError:t}=n;n.isPaused()||(l.error=e,d&&c()&&(n.onError(e,m,n),(!0===t||(0,a.isFunction)(t)&&t(e))&&V()&&n.onErrorRetry(e,m,n,z,{retryCount:(u.retryCount||0)+1,dedupe:!0})))}return s=!1,f(),!0}),[m,u]),B=(0,r.useCallback)(((...e)=>(0,a.internalMutate)(u,C.current,...e)),[]);if((0,a.useIsomorphicLayoutEffect)((()=>{T.current=n,_.current=t,(0,a.isUndefined)(P)||(W.current=P)})),(0,a.useIsomorphicLayoutEffect)((()=>{if(!m)return;const e=z.bind(a.UNDEFINED,s);let n=0;const t=(0,a.subscribeCallback)(m,h,(t=>{if(t==a.revalidateEvents.FOCUS_EVENT){const t=Date.now();y().revalidateOnFocus&&t>n&&V()&&(n=t+y().focusThrottleInterval,e())}else if(t==a.revalidateEvents.RECONNECT_EVENT)y().revalidateOnReconnect&&V()&&e();else if(t==a.revalidateEvents.MUTATE_EVENT)return z()}));return R.current=!1,C.current=m,U.current=!0,k({_k:b}),G&&((0,a.isUndefined)(x)||a.IS_SERVER?e():(0,a.rAF)(e)),()=>{R.current=!0,t()}}),[m]),(0,a.useIsomorphicLayoutEffect)((()=>{let e;function n(){const n=(0,a.isFunction)(f)?f(x):f;n&&-1!==e&&(e=setTimeout(t,n))}function t(){w().error||!E&&!y().isVisible()||!g&&!y().isOnline()?n():z(s).then(n)}return n(),()=>{e&&(clearTimeout(e),e=-1)}}),[f,E,g,m]),(0,r.useDebugValue)(j),d&&(0,a.isUndefined)(x)&&m){if(!a.IS_REACT_LEGACY&&a.IS_SERVER)throw new Error("Fallback data is required when using suspense in SSR.");throw T.current=n,_.current=t,R.current=!1,(0,a.isUndefined)(M)?z(s):M}return{mutate:B,get data(){return L.data=!0,j},get error(){return L.error=!0,M},get isValidating(){return L.isValidating=!0,Y},get isLoading(){return L.isLoading=!0,q}}}))}}]);