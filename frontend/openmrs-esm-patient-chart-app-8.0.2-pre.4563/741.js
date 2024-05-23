"use strict";(globalThis.webpackChunk_openmrs_esm_patient_chart_app=globalThis.webpackChunk_openmrs_esm_patient_chart_app||[]).push([[741],{2265:(t,e,i)=>{i.d(e,{Z:()=>m});var n=i(321),s=i.n(n),l=i(1195),r=i.n(l),a=i(3275),o=i.n(a),d=i(7162),c=i.n(d),u=i(2094),v=i.n(u),A=i(757),h=i.n(A),g=i(9850),p={};p.styleTagTransform=h(),p.setAttributes=c(),p.insert=o().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=v(),s()(g.Z,p);const m=g.Z&&g.Z.locals?g.Z.locals:void 0},9850:(t,e,i)=>{i.d(e,{Z:()=>a});var n=i(272),s=i.n(n),l=i(2609),r=i.n(l)()(s());r.push([t.id,":root{--brand-01: #005d5d;--brand-02: #004144;--brand-03: #007d79;--bottom-nav-height: 4rem;--workspace-header-height: 3rem;--tablet-workspace-window-height: calc(100vh - var(--omrs-navbar-height));--desktop-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--workspace-header-height))}.-esm-patient-chart__start-visit-dialog__header___qFdjw{font-size:var(--cds-heading-03-font-size, 1.25rem);font-weight:var(--cds-heading-03-font-weight, 400);line-height:var(--cds-heading-03-line-height, 1.4);letter-spacing:var(--cds-heading-03-letter-spacing, 0)}.-esm-patient-chart__start-visit-dialog__body___VphOU{font-size:var(--cds-body-01-font-size, 0.875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, 0.16px)}","",{version:3,sources:["webpack://./../../node_modules/@openmrs/esm-styleguide/src/_vars.scss","webpack://./src/visit/visit-prompt/start-visit-dialog.scss","webpack://./../../node_modules/@carbon/type/scss/_styles.scss"],names:[],mappings:"AAoDA,MACE,mBAAA,CACA,mBAAA,CACA,mBAAA,CACA,yBAAA,CACA,+BAAA,CACA,yEAAA,CACA,2GAAA,CCvDF,wDC81BI,kDAAA,CAAA,kDAAA,CAAA,kDAAA,CAAA,sDAAA,CD11BJ,sDC01BI,gDAAA,CAAA,+CAAA,CAAA,mDAAA,CAAA,wDAAA",sourceRoot:""}]),r.locals={header:"-esm-patient-chart__start-visit-dialog__header___qFdjw",body:"-esm-patient-chart__start-visit-dialog__body___VphOU"};const a=r},4455:(t,e,i)=>{i.d(e,{l:()=>o});var n=i(2870),s=i(5968),l=i(4924),r=i(268);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function o(t,e){var i,o,d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},u=(0,s.Tn)(t).mutateVisits,v=(0,n.useVisit)(t).mutate,A=(i=(0,r.useState)(!1),o=2,function(t){if(Array.isArray(t))return t}(i)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var n,s,l=[],r=!0,a=!1;try{for(i=i.call(t);!(r=(n=i.next()).done)&&(l.push(n.value),!e||l.length!==e);r=!0);}catch(t){a=!0,s=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw s}}return l}}(i,o)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(t,e):void 0}}(i,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=A[0],g=A[1],p=(0,l.useTranslation)().t,m=function(){(0,s.rP)(null==e?void 0:e.uuid).then((function(){var t,i;(0,n.showSnackbar)({title:p("visitRestored","Visit restored"),subtitle:p("visitRestoredSuccessfully","{{visit}} restored successfully",{visit:null!==(i=null==e||null===(t=e.visitType)||void 0===t?void 0:t.display)&&void 0!==i?i:p("visit","Visit")}),kind:"success"}),u(),v(),null==c||c()})).catch((function(){var t,i;(0,n.showSnackbar)({title:p("visitNotRestored","Visit couldn't be restored"),subtitle:p("errorWhenRestoringVisit","Error occured when restoring {{visit}}",{visit:null!==(i=null==e||null===(t=e.visitType)||void 0===t?void 0:t.display)&&void 0!==i?i:p("visit","Visit")}),kind:"error"})}))};return{initiateDeletingVisit:function(){g(!0);var t=!(null==e?void 0:e.stopDatetime);(0,s.u4)(null==e?void 0:e.uuid).then((function(){var i,s,l,r,a,o;u(),v(),t?(0,n.showSnackbar)({title:p("visitCancelled","Visit cancelled"),subtitle:p("visitCancelSuccessMessage","Active {{visit}} cancelled successfully",{visit:null!==(s=null==e||null===(i=e.visitType)||void 0===i?void 0:i.display)&&void 0!==s?s:p("visit","Visit")}),isLowContrast:!0,kind:"success"}):(0,n.showActionableNotification)({title:p("visitDeleted","{{visit}} deleted",{visit:null!==(a=null==e||null===(l=e.visitType)||void 0===l?void 0:l.display)&&void 0!==a?a:p("visit","Visit")}),subtitle:p("visitDeletedSuccessfully","{{visit}} deleted successfully",{visit:null!==(o=null==e||null===(r=e.visitType)||void 0===r?void 0:r.display)&&void 0!==o?o:p("visit","Visit")}),kind:"success",actionButtonLabel:p("undo","Undo"),onActionButtonClick:m}),null==d||d()})).catch((function(){(0,n.showSnackbar)({title:t?p("errorCancellingVisit","Error cancelling active visit"):p("errorDeletingVisit","Error deleting visit"),kind:"error",subtitle:p("errorOccuredDeletingVisit","An error occured when deleting visit")})})).finally((function(){g(!1)}))},isDeletingVisit:h}}},4741:(t,e,i)=>{i.r(e),i.d(e,{default:()=>c});var n=i(268),s=i.n(n),l=i(4350),r=i(4924),a=i(2870),o=i(2265),d=i(4455);const c=function(t){var e,i,n=t.closeModal,c=t.patientUuid,u=t.visit,v=(0,r.useTranslation)().t,A=(0,d.l)(c,u,n),h=A.isDeletingVisit,g=A.initiateDeletingVisit;return s().createElement("div",null,s().createElement(l.ModalHeader,{closeModal:n,label:v("visit","Visit"),title:v("deleteVisitDialogHeader","Are you sure you want to delete this visit?")}),s().createElement(l.ModalBody,null,s().createElement("p",{className:o.Z.body},v("confirmDeletingVisitTextWithStartAndEndDate","Are you sure you want to delete {{visit}} which started {{visitStartDate}} and ended {{visitEndDate}}?",{visit:null!==(i=null==u||null===(e=u.visitType)||void 0===e?void 0:e.display)&&void 0!==i?i:v("visit","Visit"),visitStartDate:(0,a.formatDatetime)(new Date(null==u?void 0:u.startDatetime),{mode:"standard"}),visitEndDate:(0,a.formatDatetime)(new Date(null==u?void 0:u.stopDatetime),{mode:"standard"})}),s().createElement("br",null),v("deletingVisitWillDeleteEncounters","Deleting this visit will delete all associated encounters."))),s().createElement(l.ModalFooter,null,s().createElement(l.Button,{kind:"secondary",onClick:n},v("cancel","Cancel")),s().createElement(l.Button,{kind:"danger",onClick:g,disabled:h},h?s().createElement(l.InlineLoading,{description:v("deletingVisit","Deleting visit")}):v("deleteVisit","Delete visit"))))}}}]);