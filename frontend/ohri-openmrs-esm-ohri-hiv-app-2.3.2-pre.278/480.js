"use strict";(globalThis.webpackChunk_ohri_openmrs_esm_ohri_hiv_app=globalThis.webpackChunk_ohri_openmrs_esm_ohri_hiv_app||[]).push([[480],{1480:(e,r,t)=>{t.r(r),t.d(r,{default:()=>m,infinite:()=>v,unstable_serialize:()=>h});var n=t(268),a=t(1032),i=t(3325),o=t(5495);function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function l(e,r,t,n,a,i,o){try{var u=e[i](o),l=u.value}catch(e){return void t(e)}u.done?r(l):Promise.resolve(l).then(n,a)}function c(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var i=e.apply(r,t);function o(e){l(i,n,a,o,u,"next",e)}function u(e){l(i,n,a,o,u,"throw",e)}o(void 0)}))}}function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,i=[],o=!0,u=!1;try{for(t=t.call(e);!(o=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);o=!0);}catch(e){u=!0,a=e}finally{try{o||null==t.return||t.return()}finally{if(u)throw a}}return i}}(e,r)||function(e,r){if(e){if("string"==typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,r){var t,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=r.call(e,o)}catch(e){i=[6,e],n=0}finally{t=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function b(e){var r="function"==typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}var d=function(e){return(0,i.serialize)(e?e(0,null):null)[0]},h=function(e){return i.INFINITE_PREFIX+d(e)},y=Promise.resolve(),v=function(e){return function(r,t,a){var u,l=(0,n.useRef)(!1),h=a.cache,v=a.initialSize,m=void 0===v?1:v,g=a.revalidateAll,w=void 0!==g&&g,O=a.persistSize,_=void 0!==O&&O,S=a.revalidateFirstPage,P=void 0===S||S,j=a.revalidateOnMount,k=void 0!==j&&j,E=a.parallel,C=void 0!==E&&E,I=f(i.SWRGlobalState.get(i.cache),4)[3];try{(u=d(r))&&(u=i.INFINITE_PREFIX+u)}catch(e){}var U=f((0,i.createCacheHelper)(h,u),3),z=U[0],D=U[1],F=U[2],N=(0,n.useCallback)((function(){return(0,i.isUndefined)(z()._l)?m:z()._l}),[h,u,m]);(0,o.useSyncExternalStore)((0,n.useCallback)((function(e){return u?F(u,(function(){e()})):function(){}}),[h,u]),N,N);var x=(0,n.useCallback)((function(){var e=z()._l;return(0,i.isUndefined)(e)?m:e}),[u,m]),A=(0,n.useRef)(x());(0,i.useIsomorphicLayoutEffect)((function(){l.current?u&&D({_l:_?A.current:x()}):l.current=!0}),[u,h]);var T,H=k&&!l.current,R=e(u,(T=c((function(e){var n,o,u,l,s,d,y,v,m,g;return p(this,(function(O){switch(O.label){case 0:n=function(e){var n,l,s,b,d,g,O,_,S;return p(this,(function(j){switch(j.label){case 0:return n=f((0,i.serialize)(r(e,C?null:m)),2),l=n[0],s=n[1],l?(b=f((0,i.createCacheHelper)(h,l),2),d=b[0],g=b[1],O=d().data,_=w||o||(0,i.isUndefined)(O)||P&&!e&&!(0,i.isUndefined)(y)||H||y&&!(0,i.isUndefined)(y[e])&&!a.compare(y[e],O),t&&_?(S=function(){var r=c((function(){var r;return p(this,(function(n){switch(n.label){case 0:return l in I?[3,2]:[4,t(s)];case 1:return O=n.sent(),[3,4];case 2:return r=I[l],delete I[l],[4,r];case 3:O=n.sent(),n.label=4;case 4:return g({data:O,_k:s}),u[e]=O,[2]}}))}));return function(){return r.apply(this,arguments)}}(),C?(v.push(S),[3,3]):[3,1]):[3,4]):[2,"break"];case 1:return[4,S()];case 2:j.sent(),j.label=3;case 3:return[3,5];case 4:u[e]=O,j.label=5;case 5:return C||(m=O),[2]}}))},o=z()._i,u=[],l=x(),s=f((0,i.createCacheHelper)(h,e),1),d=s[0],y=d().data,v=[],m=null,g=0,O.label=1;case 1:return g<l?[5,b(n(g))]:[3,4];case 2:if("break"===O.sent())return[3,4];O.label=3;case 3:return++g,[3,1];case 4:return C?[4,Promise.all(v.map((function(e){return e()})))]:[3,6];case 5:O.sent(),O.label=6;case 6:return D({_i:i.UNDEFINED}),[2,u]}}))})),function(e){return T.apply(this,arguments)}),a),L=(0,n.useCallback)((function(e,r){var t,n,a="boolean"==typeof r?{revalidate:r}:r||{},o=!1!==a.revalidate;return u?(o&&((0,i.isUndefined)(e)?D({_i:!0}):D({_i:!1})),arguments.length?R.mutate(e,(t=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){s(e,r,t[r])}))}return e}({},a),n=null!=(n={revalidate:o})?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t.push.apply(t,n)}return t}(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})),t)):R.mutate()):y}),[u,h]),M=(0,n.useCallback)((function(e){if(!u)return y;var t,n=f((0,i.createCacheHelper)(h,u),2)[1];if((0,i.isFunction)(e)?t=e(x()):"number"==typeof e&&(t=e),"number"!=typeof t)return y;n({_l:t}),A.current=t;for(var a=[],o=f((0,i.createCacheHelper)(h,u),1)[0],l=null,c=0;c<t;++c){var s=f((0,i.serialize)(r(c,l)),1)[0],p=f((0,i.createCacheHelper)(h,s),1)[0],b=s?p().data:i.UNDEFINED;if((0,i.isUndefined)(b))return L(o().data);a.push(b),l=b}return L(a)}),[u,h,L,x]);return{size:x(),setSize:M,mutate:L,get data(){return R.data},get error(){return R.error},get isValidating(){return R.isValidating},get isLoading(){return R.isLoading}}}},m=(0,i.withMiddleware)(a.ZP,v)}}]);