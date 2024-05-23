(globalThis.webpackChunk_openmrs_esm_form_builder_app=globalThis.webpackChunk_openmrs_esm_form_builder_app||[]).push([[91],{38091:(e,t,o)=>{"use strict";o.r(t),o.d(t,{importTranslation:()=>s,root:()=>d,startupApp:()=>p,systemAdministrationFormBuilderCardLink:()=>l});var r=o(25987),n={questionTypes:{_type:r.Type.Array,_description:"Provides information that the processor uses to render a field",_default:["control","encounterDatetime","encounterLocation","encounterProvider","obs","obsGroup","personAttribute","testOrder"]},fieldTypes:{_type:r.Type.Array,_description:"An array of available field types. A question can have only one field type, and the field type determines how the question is rendered.",_default:["date","drug","field-set","file","group","multiCheckbox","number","problem","radio","repeating","select","text","textarea","ui-select-extended"]},showSchemaSaveWarning:{_type:r.Type.Boolean,_default:!0,_description:"Whether to show a warning about possibly losing data in the forms dashboard"},dataTypeToRenderingMap:{_description:"A map used to match concept datatypes to rendering types",_type:r.Type.Object,_default:{Numeric:["number","fixed-value"],Coded:["select","checkbox","radio","toggle","content-switcher","fixed-value"],Text:["text","textarea","fixed-value"],Date:["date","fixed-value"],Datetime:["datetime","fixed-value"],Boolean:["toggle","select","radio","content-switcher","fixed-value"],Rule:["repeating","group"]}},enableFormValidation:{_type:r.Type.Boolean,_default:!1,_description:"Whether to enable form validation"},blockRenderingWithErrors:{_type:r.Type.Boolean,_default:!1,_description:"Whether to enable form validation"}},a="@openmrs/esm-form-builder-app",i={featureName:"form-builder",moduleName:a},s=o(26738),d=(0,r.getAsyncLifecycle)((function(){return Promise.all([o.e(802),o.e(578),o.e(72),o.e(488),o.e(24)]).then(o.bind(o,50132))}),i),l=(0,r.getAsyncLifecycle)((function(){return Promise.all([o.e(802),o.e(72),o.e(488),o.e(192)]).then(o.bind(o,4192))}),i);function p(){(0,r.defineConfigSchema)(a,n)}},26738:(e,t,o)=>{var r={"./am.json":[81197,197],"./en.json":[34300,300],"./es.json":[93099,99],"./fr.json":[94055,55],"./he.json":[84652,652],"./km.json":[54335,335]};function n(e){if(!o.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return o.e(t[1]).then((()=>o(n)))}n.keys=()=>Object.keys(r),n.id=26738,e.exports=n}}]);