"use strict";(globalThis.webpackChunk_openmrs_esm_patient_chart_app=globalThis.webpackChunk_openmrs_esm_patient_chart_app||[]).push([[992],{3670:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(272),s=i.n(n),a=i(2609),o=i.n(a)()(s());o.push([e.id,":root{--brand-01: #005d5d;--brand-02: #004144;--brand-03: #007d79;--bottom-nav-height: 4rem;--workspace-header-height: 3rem;--tablet-workspace-window-height: calc(100vh - var(--omrs-navbar-height));--desktop-workspace-window-height: calc(100vh - var(--omrs-navbar-height) - var(--workspace-header-height))}.-esm-patient-chart__end-visit-dialog__bodyShort02___VnI_l{font-size:var(--cds-body-compact-02-font-size, 1rem);font-weight:var(--cds-body-compact-02-font-weight, 400);line-height:var(--cds-body-compact-02-line-height, 1.375);letter-spacing:var(--cds-body-compact-02-letter-spacing, 0);color:#161616}","",{version:3,sources:["webpack://./../../node_modules/@openmrs/esm-styleguide/src/_vars.scss","webpack://./src/visit/visit-prompt/end-visit-dialog.scss","webpack://./../../node_modules/@carbon/type/scss/_styles.scss"],names:[],mappings:"AAoDA,MACE,mBAAA,CACA,mBAAA,CACA,mBAAA,CACA,yBAAA,CACA,+BAAA,CACA,yEAAA,CACA,2GAAA,CCxDF,2DC+1BI,oDAAA,CAAA,uDAAA,CAAA,yDAAA,CAAA,2DAAA,CD71BF,aDDM",sourceRoot:""}]),o.locals={bodyShort02:"-esm-patient-chart__end-visit-dialog__bodyShort02___VnI_l"};const r=o},6992:(e,t,i)=>{i.r(t),i.d(t,{default:()=>D});var n=i(268),s=i.n(n),a=i(7052),o=i(4924),r=i(4350),l=i(2870),d=i(4994),c=i(4100),u=i(321),A=i.n(u),p=i(1195),h=i.n(p),m=i(3275),v=i.n(m),b=i(7162),y=i.n(b),_=i(2094),C=i.n(_),g=i(757),w=i.n(g),k=i(3670),E={};E.styleTagTransform=w(),E.setAttributes=y(),E.insert=v().bind(null,"head"),E.domAPI=h(),E.insertStyleElement=C(),A()(k.Z,E);const f=k.Z&&k.Z.locals?k.Z.locals:void 0,D=function(e){var t=e.patientUuid,i=e.closeModal,n=(0,o.useTranslation)().t,u=(0,l.useVisit)(t),A=u.currentVisit,p=u.currentVisitIsRetrospective,h=u.mutate,m=(0,d.t)(t,null==A?void 0:A.uuid).queueEntry;return s().createElement("div",null,s().createElement(r.ModalHeader,{closeModal:i,title:n("endActiveVisitConfirmation","Are you sure you want to end this active visit?")}),s().createElement(r.ModalBody,null,s().createElement("p",{className:f.bodyShort02},n("endVisitExplainerMessage","Ending this visit means that you will no longer be able to add encounters to it. If you need to add an encounter, you can create a new visit for this patient or edit a past one."))),s().createElement(r.ModalFooter,null,s().createElement(r.Button,{kind:"secondary",onClick:i},n("cancel","Cancel")),s().createElement(r.Button,{kind:"danger",onClick:function(){if(p)(0,l.setCurrentVisit)(null,null),i();else{var e={location:A.location.uuid,startDatetime:(0,l.parseDate)(A.startDatetime),visitType:A.visitType.uuid,stopDatetime:new Date},t=new AbortController;(0,l.updateVisit)(A.uuid,e,t).pipe((0,a.P)()).subscribe((function(e){var s,a;200===e.status&&(m&&(0,c.Ls)(m.queue.uuid,m.queueEntryUuid,t),h(),i(),(0,l.showSnackbar)({isLowContrast:!0,kind:"success",subtitle:n("visitEndSuccessfully","".concat(null==e||null===(a=e.data)||void 0===a||null===(s=a.visitType)||void 0===s?void 0:s.display," ended successfully")),title:n("visitEnded","Visit ended")}))}),(function(e){(0,l.showSnackbar)({title:n("errorEndingVisit","Error ending visit"),kind:"error",isLowContrast:!1,subtitle:null==e?void 0:e.message})}))}}},n("endVisit_title","End Visit"))))}}}]);