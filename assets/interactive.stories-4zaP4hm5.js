import{d as v,b as t,o as f,e as _,f as n,g as b,n as x}from"./vue.esm-bundler-CZUfaRf-.js";import{_ as I,a as k}from"./VObjectInspector-D5gPF5Sj.js";const u=v({__name:"VInteractive",setup(C){const e=t(1),o=t(["*.a"]),i=t({number:123,string:"abc",multiLine:`123
456`,boolean:!0,arr:[1,2,3,4,5],undef:void 0,nul:null,funcArrow:()=>{},func:function(){},a:{symbolVal:Symbol("aaa"),number:123,string:"abc",boolean:!0,undef:void 0,nul:null,funcArrow:()=>{},func:function(){},arr:[1,2,3,4,5],objEmpty:{}},b:2,c:[1,2,3],x0:console,w:window}),p=()=>{e.value=3},d=()=>{e.value=-1,x(()=>{e.value=0})},m=()=>{o.value=["$.a.arr"]};return(c,h)=>(f(),_("div",null,[n("div",null,[n("button",{onClick:p}," Expand All "),n("button",{onClick:d}," Collapse All "),n("button",{onClick:m}," Expand to path ")]),b(I,{data:i.value,"expand-level":e.value,"expand-paths":o.value,class:"content"},null,8,["data","expand-level","expand-paths"])]))}}),V=k(u,[["__scopeId","data-v-315e4842"]]);u.__docgenInfo={exportName:"default",displayName:"VInteractive",description:"",tags:{},sourceFiles:["/home/runner/work/VObjectInspector/VObjectInspector/src/stories/VInteractive.vue"]};const E={title:"Components/VObjectInspector",component:V},a={};var r,s,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(l=(s=a.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const j=["Interactive"];export{a as Interactive,j as __namedExportsOrder,E as default};