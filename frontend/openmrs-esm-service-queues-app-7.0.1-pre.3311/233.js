"use strict";(globalThis.webpackChunk_openmrs_esm_service_queues_app=globalThis.webpackChunk_openmrs_esm_service_queues_app||[]).push([[233],{7702:(e,t,n)=>{n.d(t,{VK:()=>o,hu:()=>s,rf:()=>u,zI:()=>a});var r=n(2870);function u(e,t){return(0,r.openmrsFetch)("".concat(r.restBaseUrl,"/queue-entry/transition"),{method:"POST",headers:{"Content-Type":"application/json"},signal:null==t?void 0:t.signal,body:e})}function a(e,t,n){return(0,r.openmrsFetch)("".concat(r.restBaseUrl,"/queue-entry/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"},signal:null==n?void 0:n.signal,body:t})}function o(e,t){return(0,r.openmrsFetch)("".concat(r.restBaseUrl,"/queue-entry/transition"),{method:"DELETE",headers:{"Content-Type":"application/json"},signal:null==t?void 0:t.signal,body:e})}function s(e,t){return(0,r.openmrsFetch)("".concat(r.restBaseUrl,"/queue-entry/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"},signal:null==t?void 0:t.signal})}},6166:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(5206),u=n.n(r),a=n(4924),o=n(8427),s=n(2870),i=n(9561);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const c=function(e){var t,n,c=e.queueEntry,d=e.closeModal,m=e.modalParams,p=(0,a.useTranslation)().t,y=(0,i.Q)().mutateQueueEntries,f=m.modalTitle,h=m.modalInstruction,b=m.submitButtonText,v=m.submitSuccessTitle,T=m.submitSuccessText,E=m.submitFailureTitle,g=m.submitAction,S=(t=(0,r.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,u,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,u=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw u}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),q=S[0],k=S[1];return u().createElement(u().Fragment,null,u().createElement(o.xBx,{closeModal:d,title:f}),u().createElement(o.fef,null,u().createElement(o.Kqy,{gap:4},u().createElement("h5",null,c.display),h)),u().createElement(o.mzw,null,u().createElement(o.zxk,{kind:"secondary",onClick:d},p("cancel","Cancel")),u().createElement(o.zxk,{disabled:q,onClick:function(e){e.preventDefault(),k(!0),g(c).then((function(e){var t=e.status;if(!(t>=200&&t<300))throw{message:p("unexpectedServerResponse","Unexpected Server Response")};(0,s.showSnackbar)({isLowContrast:!0,title:v,kind:"success",subtitle:T}),y(),d()})).catch((function(e){(0,s.showSnackbar)({title:E,kind:"error",subtitle:null==e?void 0:e.message})})).finally((function(){k(!1)}))}},b)))}},3233:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(5206),u=n.n(r),a=n(4924),o=n(7702),s=n(6166);const i=function(e){var t=e.queueEntry,n=e.closeModal,r=(0,a.useTranslation)().t,i=t.previousQueueEntry,l=t.queueComingFrom,c=l.uuid==t.queue.uuid?u().createElement("p",null,r("confirmMoveBackStatus",'Are you sure you want to move patient back to status "{{status}}"?',{status:i.status.display,interpolation:{escapeValue:!1}})):u().createElement("p",null,r("confirmMoveBackQueueAndStatus",'Are you sure you want to move patient back to queue "{{queue}}" with status "{{status}}"?',{queue:l.display,status:i.status.display,interpolation:{escapeValue:!1}}));return u().createElement(s.Z,{queueEntry:t,closeModal:n,modalParams:{modalTitle:r("undoTransition","Undo Transition"),modalInstruction:c,submitButtonText:r("undoTransition","Undo transition"),submitSuccessTitle:r("queueEntryTransitionUndoSuccessful","Undo transition success"),submitSuccessText:r("queueEntryTransitionUndoSuccessful","Queue entry transition undo success"),submitFailureTitle:r("queueEntryTransitionUndoFailed","Error undoing transition"),submitAction:function(e){return(0,o.VK)({queueEntry:e.uuid})}}})}}}]);