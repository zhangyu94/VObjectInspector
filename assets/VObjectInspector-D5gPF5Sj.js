import{d as g,u as J,k as _,l as k,b as O,o as l,e as i,f as b,t as V,F as E,m as j,p as S,q as A,s as L,v as F,x as w,y as M,g as I,z as d,A as oe,B as U,C as se,D as le,E as ue,w as H,G as ie,H as R,I as ce}from"./vue.esm-bundler-CZUfaRf-.js";const W=(e,n)=>{const r=Object.getOwnPropertyDescriptor(e,n);if(r!==void 0){if(r.get)try{return r.get()}catch{return r.get}return r.value}},de=(e,n)=>{function*r(s){if(!(typeof s=="object"&&s!==null||typeof s=="function"))return;const m=Array.isArray(s);if(!m&&s[Symbol.iterator]){let a=0;for(const t of s){if(Array.isArray(t)&&t.length===2){const[o,y]=t;yield{name:o,data:y,isNonEnumerable:!1}}else yield{name:a.toString(),data:t,isNonEnumerable:!1};a+=1}}else{const a=Object.getOwnPropertyNames(s);n===!0&&!m?a.sort():typeof n=="function"&&a.sort(n);for(const t of a)if({}.propertyIsEnumerable.call(s,t)){const o=W(s,t);yield{name:t||'""',data:o,isNonEnumerable:!1}}else if(e){let o;try{o=W(s,t)}catch{}o!==void 0&&(yield{name:t,data:o,isNonEnumerable:!0})}e&&s!==Object.prototype&&(yield{name:"__proto__",data:Object.getPrototypeOf(s),isNonEnumerable:!0})}}return r},C="$",z="*",$=(e,n)=>!n(e).next().done,pe=e=>Array.from({length:e},(n,r)=>[C].concat(Array.from({length:r},()=>"*")).join(".")),K=(e,n,r,s,p)=>{const m=pe(s).concat(r).filter(o=>typeof o=="string"),a=[];m.forEach(o=>{const y=o.split("."),v=(c,u,h)=>{if(h===y.length){a.push(u);return}const f=y[h];if(h===0)$(c,n)&&(f===C||f===z)&&v(c,C,h+1);else if(f===z)for(const x of n(c))$(x.data,n)&&v(x.data,`${u}.${x.name}`,h+1);else{const x=W(c,f);$(x,n)&&v(x,`${u}.${f}`,h+1)}};v(e,"",0)});const t={...p};return a.forEach(o=>{t[o]=!0}),t},me=e=>(A("data-v-5d5c3fae"),e=e(),L(),e),he=["title"],fe=me(()=>b("span",{class:"object-value-function-prefix"},"ƒ ",-1)),be={class:"object-value-function-name"},G=g({__name:"VObjectValue",props:{object:{type:null,required:!0}},setup(e){J(t=>({"1ee80c1a":a.value.nullishColor,"1f73030b":a.value.stringColor,"66f7a468":a.value.numeralColor,"8f28a59c":a.value.functionPrefixColor}));const{object:n}=e,r=t=>{const o=typeof t;return o==="bigint"?{class:"object-value-number",title:`${t}n`}:o==="number"?{class:"object-value-number",title:`${t}`}:o==="string"?{class:"object-value-string",title:`"${t}"`}:o==="boolean"?{class:"object-value-boolean",title:`${t}`}:o==="undefined"?{class:"object-value-undefined",title:"undefined"}:o==="object"?t===null?{class:"object-value-null",title:"null"}:t instanceof Date?{class:"",title:t.toString()}:t instanceof RegExp?{class:"object-value-regexp",title:t.toString()}:Array.isArray(t)?{class:"",title:`Array(${t.length})`}:t.constructor?{class:"",title:t.constructor.name}:{class:"",title:"Object"}:o==="function"?{class:"",title:""}:o==="symbol"?{class:"object-value-symbol",title:t.toString()}:{class:"",title:""}},s=_(()=>typeof n),p=_(()=>r(n)),m=k("darkTheme",O(!1)),a=_(()=>({nullishColor:"rgb(127, 127, 127)",stringColor:m.value?"rgb(233, 63, 59)":"rgb(196, 26, 22)",numeralColor:m.value?"hsl(252, 100%, 75%)":"rgb(28, 0, 207)",functionPrefixColor:m.value?"rgb(85, 106, 242)":"rgb(170, 13, 145)"}));return(t,o)=>(l(),i("span",{class:S(p.value.class),title:p.value.title},[b("span",null,V(p.value.title),1),s.value==="function"?(l(),i(E,{key:0},[fe,b("span",be,V(e.object.name)+"()",1)],64)):j("",!0)],10,he))}}),N=(e,n)=>{const r=e.__vccOpts||e;for(const[s,p]of n)r[s]=p;return r},q=N(G,[["__scopeId","data-v-5d5c3fae"]]);G.__docgenInfo={exportName:"default",displayName:"VObjectValue",description:"",tags:{},props:[{name:"object",description:"The JavaScript variable (of any type) to inspect.",type:{name:"null"},required:!0}],sourceFiles:["/home/runner/work/VObjectInspector/VObjectInspector/src/components/VObjectValue.vue"]};const B=e=>(A("data-v-61106a29"),e=e(),L(),e),ye={key:1},ve={class:"object-preview-desc"},_e={class:"object-preview"},xe=B(()=>b("span",null,"[",-1)),je={key:0},ge={key:1},Ve={key:2},we=B(()=>b("span",null,"]",-1)),ke={key:2},Oe={class:"object-preview-desc"},Ie={class:"object-preview"},Ne=B(()=>b("span",null,"{",-1)),Te={key:0},Pe={class:"object-name-preview"},$e={key:1},qe=B(()=>b("span",null,"}",-1)),Q=g({__name:"VObjectPreview",props:{data:{type:null,required:!0}},setup(e){const n=e,{data:r}=F(n),s=c=>typeof c!="object"||c===null||c instanceof Date||c instanceof RegExp,p=k("objectMaxProperties",O(5)),m=k("arrayMaxProperties",O(10)),a=_(()=>r.value),t=_(()=>s(a.value)),o=_(()=>{if(typeof a.value!="object"||a.value===null)return"";const{constructor:c}=a.value,u=c?c.name:"Object";return u==="Object"?"":`${u} `}),y=_(()=>Array.isArray(a.value)?a.value.slice(0,m.value):[]),v=_(()=>{if(typeof a.value!="object"||a.value===null)return[];let c=Object.keys(a.value);return c.length>p.value&&(c=c.slice(0,p.value)),c.map(u=>({key:u,val:a.value[u]}))});return(c,u)=>(l(),i("span",null,[t.value?(l(),w(q,{key:0,object:a.value},null,8,["object"])):Array.isArray(a.value)?(l(),i("span",ye,[b("span",ve,V(a.value.length===0?"":`(${a.value.length}) `),1),b("span",_e,[xe,(l(!0),i(E,null,M(y.value,(h,f)=>(l(),i("span",{key:f},[f!==0?(l(),i("span",je,", ")):j("",!0),I(q,{object:h},null,8,["object"]),f===d(m)-1?(l(),i("span",ge,", ")):j("",!0),f===d(m)-1?(l(),i("span",Ve,"…")):j("",!0)]))),128)),we])])):(l(),i("span",ke,[b("span",Oe,V(o.value),1),b("span",Ie,[Ne,(l(!0),i(E,null,M(v.value,(h,f)=>(l(),i("span",{key:f},[f!==0?(l(),i("span",Te,", ")):j("",!0),b("span",Pe,V(h.key||'""'),1),oe(": "),I(q,{object:h.val},null,8,["object"]),f===d(p)-1?(l(),i("span",$e,"…")):j("",!0)]))),128)),qe])]))]))}}),D=N(Q,[["__scopeId","data-v-61106a29"]]);Q.__docgenInfo={exportName:"default",displayName:"VObjectPreview",description:"",tags:{},props:[{name:"data",type:{name:"null"},required:!0}],sourceFiles:["/home/runner/work/VObjectInspector/VObjectInspector/src/components/VObjectPreview.vue"]};const Ee=e=>(A("data-v-c962784b"),e=e(),L(),e),Ce=["title"],Se=Ee(()=>b("span",null,": ",-1)),X=g({__name:"VObjectLabel",props:{data:{type:null,required:!0},name:{type:String,default:null},isNonEnumerable:{type:Boolean,required:!0}},setup(e){J(s=>({c28e79f8:r.value.nameColor}));const n=k("darkTheme",O(!1)),r=_(()=>({nameColor:n.value?"rgb(227, 110, 236)":"rgb(136, 19, 145)"}));return(s,p)=>(l(),i("span",{title:e.name},[typeof e.name=="string"?(l(),i("span",{key:0,class:S(["object-name",{"object-name-dimmed":e.isNonEnumerable}])},V(e.name),3)):(l(),w(D,{key:1,data:e.name},null,8,["data"])),Se,I(q,{object:e.data},null,8,["object"])],8,Ce))}}),Ae=N(X,[["__scopeId","data-v-c962784b"]]);X.__docgenInfo={exportName:"default",displayName:"VObjectLabel",description:"",tags:{},props:[{name:"data",description:"The JavaScript variable to inspect.",type:{name:"null"},required:!0},{name:"name",description:"The variable name.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"isNonEnumerable",description:"Whether the variable is non-enumerable.",type:{name:"boolean"},required:!0}],sourceFiles:["/home/runner/work/VObjectInspector/VObjectInspector/src/components/VObjectLabel.vue"]};const Le=e=>(A("data-v-57fd4ee1"),e=e(),L(),e),Fe={key:0},Be={class:"object-name"},Re=Le(()=>b("span",null,": ",-1)),Y=g({__name:"VObjectRootLabel",props:{data:{type:null,required:!0},name:{type:String,default:null}},setup(e){J(s=>({"3f4b4b88":r.value.nameColor}));const n=k("darkTheme",O(!1)),r=_(()=>({nameColor:n.value?"rgb(227, 110, 236)":"rgb(136, 19, 145)"}));return(s,p)=>(l(),i("span",null,[typeof e.name=="string"?(l(),i("span",Fe,[b("span",Be,V(e.name),1),Re,I(D,{data:e.data},null,8,["data"])])):(l(),w(D,{key:1,data:e.data},null,8,["data"]))]))}}),Me=N(Y,[["__scopeId","data-v-57fd4ee1"]]);Y.__docgenInfo={exportName:"default",displayName:"VObjectRootLabel",description:"",tags:{},props:[{name:"data",description:"The JavaScript variable to inspect.",type:{name:"null"},required:!0},{name:"name",description:"The variable name.",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/VObjectInspector/VObjectInspector/src/components/VObjectRootLabel.vue"]};const We=["aria-expanded"],De={key:1,class:"tree-node-placeholder"},Je={role:"group",class:"tree-node-child-nodes-container"},Z=g({__name:"VTreeNode",props:{data:{type:null,required:!0},name:{type:String,default:null},depth:{type:Number,required:!0},isNonEnumerable:{type:Boolean,required:!0},expanded:{type:Boolean,required:!0},showArrow:{type:Boolean,required:!0},showPlaceholder:{type:Boolean,required:!0}},emits:["update:expand"],setup(e){const n=k("darkTheme",!1);return(r,s)=>(l(),i("li",{role:"treeitem",class:"tree-node","aria-expanded":e.expanded,style:U({color:d(n)?"#d5d5d5":"#000",backgroundColor:d(n)?"#242424":"#fff"})},[b("div",{class:"tree-node-preview-container",onClick:s[0]||(s[0]=p=>r.$emit("update:expand"))},[e.showArrow?(l(),i("span",{key:0,class:S(["tree-node-arrow",[e.expanded?"tree-node-arrow-expanded":"tree-node-arrow-collapsed"]]),style:U({color:d(n)?"#919191":"#6e6e6e"})}," ▶ ",6)):e.showPlaceholder&&r.$slots.default?(l(),i("span",De," ")):j("",!0),e.depth===0?(l(),w(Me,{key:2,name:e.name,data:e.data},null,8,["name","data"])):(l(),w(Ae,{key:3,name:e.name,data:e.data,"is-non-enumerable":e.isNonEnumerable},null,8,["name","data","is-non-enumerable"]))]),b("ol",Je,[e.expanded?se(r.$slots,"default",{key:0},void 0,!0):j("",!0)])],12,We))}}),Ue=N(Z,[["__scopeId","data-v-291ecc4d"]]);Z.__docgenInfo={exportName:"default",displayName:"VTreeNode",description:"",tags:{},props:[{name:"data",description:"The JavaScript variable to inspect.",type:{name:"null"},required:!0},{name:"name",description:"The variable name.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"depth",description:`The depth of the variable.
(Root variable has depth 0)`,type:{name:"number"},required:!0},{name:"isNonEnumerable",description:"Whether the variable is non-enumerable.",type:{name:"boolean"},required:!0},{name:"expanded",description:"Whether the variable should be expanded.",type:{name:"boolean"},required:!0},{name:"showArrow",description:"Whether to show an arrow for expand interaction.",type:{name:"boolean"},required:!0},{name:"showPlaceholder",description:`Whether to pad a placeholder on the left.
The placeholder makes variable attributes look indented.`,type:{name:"boolean"},required:!0}],events:[{name:"update:expand"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/VObjectInspector/VObjectInspector/src/components/VTreeNode.vue"]};const He={key:0},ze={key:1},ee=g({__name:"VConnectedTreeNode",props:{data:{type:null,required:!0},name:{type:String,default:null},dataIterator:{type:Function,required:!0},path:{type:String,required:!0},depth:{type:Number,required:!0},isNonEnumerable:{type:Boolean,required:!0},expandedPaths:{type:Object,required:!0}},emits:["update:expanded-paths"],setup(e,{emit:n}){const r=e,s=n,{data:p,name:m,dataIterator:a,path:t,depth:o,isNonEnumerable:y,expandedPaths:v}=F(r),c=_(()=>$(p.value,a.value)),u=_(()=>!!v.value[t.value]),h=_(()=>[...a.value(p.value)]),f=()=>{c.value&&s("update:expanded-paths",{path:t.value,val:!u.value})};return(x,T)=>{const ae=le("VConnectedTreeNode",!0);return l(),w(Ue,{name:d(m),data:d(p),depth:d(o),"is-non-enumerable":d(y),expanded:u.value,"show-arrow":c.value,"show-placeholder":d(o)>0,"onUpdate:expand":f},{default:ue(()=>[u.value?(l(),i("span",He,[(l(!0),i(E,null,M(h.value,(P,ne)=>(l(),w(ae,{key:ne,data:P.data,name:`${P.name}`,"data-iterator":d(a),path:`${d(t)}.${P.name}`,depth:d(o)+1,"is-non-enumerable":P.isNonEnumerable,"expanded-paths":d(v),"onUpdate:expandedPaths":T[0]||(T[0]=re=>x.$emit("update:expanded-paths",re))},null,8,["data","name","data-iterator","path","depth","is-non-enumerable","expanded-paths"]))),128))])):(l(),i("span",ze,"null"))]),_:1},8,["name","data","depth","is-non-enumerable","expanded","show-arrow","show-placeholder"])}}});ee.__docgenInfo={exportName:"default",displayName:"VConnectedTreeNode",description:"",tags:{},props:[{name:"data",description:"The JavaScript variable to inspect.",type:{name:"null"},required:!0},{name:"name",description:"The variable name.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"dataIterator",description:"A factory of object property iterators.",type:{name:"ObjectIterator"},required:!0},{name:"path",description:`The path of the variable.
(Root variable has path DEFAULT_ROOT_PATH)`,type:{name:"string"},required:!0},{name:"depth",description:`The depth of the variable.
(Root variable has depth 0)`,type:{name:"number"},required:!0},{name:"isNonEnumerable",description:"Whether the variable is non-enumerable.",type:{name:"boolean"},required:!0},{name:"expandedPaths",description:"The list of paths currently expanded.",type:{name:"Record<string, boolean>"},required:!0}],events:[{name:"update:expanded-paths",type:{names:["{ path: string, val: boolean }"]}}],sourceFiles:["/home/runner/work/VObjectInspector/VObjectInspector/src/components/VConnectedTreeNode.vue"]};const Ke={role:"tree",class:"tree-view-outline"},te=g({__name:"VTreeView",props:{data:{type:null,required:!0},name:{type:String,default:null},expandLevel:{type:Number,default:0},expandPaths:{type:Array,default:null},dataIterator:{type:Function,required:!0},sortObjectKeys:{type:[Boolean,Function],default:!1}},setup(e){const n=e,{data:r,name:s,expandLevel:p,expandPaths:m,dataIterator:a}=F(n),t=O({}),o=()=>{const u=[];return m.value!==null&&m.value.forEach(h=>{const f=h.split(".");f.forEach((x,T)=>{u.push(f.slice(0,T+1).join("."))})}),t.value=K(r.value,a.value,u,0,{}),u},y=u=>{t.value=K(r.value,a.value,u,p.value,{})},v=()=>{const u=o();y(u)},c=({path:u,val:h})=>{t.value={...t.value,[u]:h}};return H(p,()=>y([])),H(m,()=>o()),ie(()=>v()),(u,h)=>(l(),i("ol",Ke,[I(ee,{data:d(r),name:d(s),"data-iterator":d(a),path:d(C),depth:0,"is-non-enumerable":!1,"expanded-paths":t.value,"onUpdate:expandedPaths":c},null,8,["data","name","data-iterator","path","expanded-paths"])]))}}),Ge=N(te,[["__scopeId","data-v-7ecce417"]]);te.__docgenInfo={exportName:"default",displayName:"VTreeView",description:"",tags:{},props:[{name:"data",description:"The JavaScript object to inspect.",type:{name:"null"},required:!0},{name:"name",description:"The root variables prefix name.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"expandLevel",description:"The depth level to which the tree should be initially expanded.",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"expandPaths",description:"The list of paths that should be initially expanded.",type:{name:"string[]"},defaultValue:{func:!1,value:"null"}},{name:"dataIterator",description:"A factory of object property iterators.",type:{name:"ObjectIterator"},required:!0},{name:"sortObjectKeys",description:`Whether to sort the object keys.
If true, sort keys in alphabetical order except for arrays.
If false, no sorting is applied
(the keys are ordered by Object.getOwnPropertyNames).
If a compare function is passed,
the keys are sorted by the compare function.`,type:{name:"boolean | CompareFunction"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/VObjectInspector/VObjectInspector/src/components/VTreeView.vue"]};const Qe=g({__name:"VObjectInspector",props:{data:{type:null,required:!0},name:{type:String,default:null},expandLevel:{type:Number,default:0},expandPaths:{type:Array,default:null},showNonEnumerable:{type:Boolean,default:!1},sortObjectKeys:{type:[Boolean,Function],default:!1},objectMaxProperties:{type:Number,default:5},arrayMaxProperties:{type:Number,default:10},darkTheme:{type:Boolean,default:!1}},setup(e){const n=e,{data:r,name:s,expandLevel:p,expandPaths:m,showNonEnumerable:a,sortObjectKeys:t,objectMaxProperties:o,arrayMaxProperties:y,darkTheme:v}=F(n);R("objectMaxProperties",o),R("arrayMaxProperties",y),R("darkTheme",v);const c=_(()=>de(a.value,t.value));return(u,h)=>(l(),i("div",{class:S(["vue-object-inspector",[d(v)?"vue-object-inspector-chromedark":""]]),style:{"overflow-wrap":"anywhere","line-break":"anywhere"}},[I(Ge,ce(u.$attrs,{data:d(r),name:d(s),"expand-level":d(p),"expand-paths":d(m),"data-iterator":c.value,"sort-object-keys":d(t)}),null,16,["data","name","expand-level","expand-paths","data-iterator","sort-object-keys"])],2))}});Qe.__docgenInfo={exportName:"default",displayName:"VObjectInspector",description:"",tags:{},props:[{name:"data",description:"The JavaScript object to inspect.",type:{name:"null"},required:!0},{name:"name",description:"The root node's prefix name.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"expandLevel",description:"The depth level to which the tree should be initially expanded.",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"expandPaths",description:"The paths in the tree that should be initially expanded.",type:{name:"string[]"},defaultValue:{func:!1,value:"null"}},{name:"showNonEnumerable",description:"Whether to show non-enumerable properties (e.g., __proto__, length).",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"sortObjectKeys",description:`Whether to sort object keys.
If true, sort keys in alphabetical order except for arrays.
If false, no sorting is applied
(the keys are ordered by Object.getOwnPropertyNames).
If a compare function is passed,
the keys are sorted by the compare function.`,type:{name:"boolean | CompareFunction"},defaultValue:{func:!1,value:"false"}},{name:"objectMaxProperties",description:`The maximal number of object properties to show in preview.
(The ones not in preview are abbreviated with ...)`,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"arrayMaxProperties",description:`The maximal number of array properties to show in preview.
(The ones not in preview are abbreviated with ...)`,type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"darkTheme",description:"Whether to use the dark theme or the light theme.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/VObjectInspector/VObjectInspector/src/VObjectInspector.vue"]};export{Qe as _,N as a};