import{h as f,c as h,i as y,a as w,r as d}from"./vue.esm-bundler-CZUfaRf-.js";var P=Object.defineProperty,U=(e,r)=>{for(var t in r)P(e,t,{get:r[t],enumerable:!0})};const{sanitizeStoryContextUpdate:b}=__STORYBOOK_MODULE_PREVIEW_API__;var j={};U(j,{applyDecorators:()=>A,parameters:()=>C,render:()=>v,renderToCanvas:()=>N});var v=(e,r)=>{let{id:t,component:o}=r;if(!o)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return()=>f(o,e,E(e,r))},I=async(e,r)=>{globalThis&&globalThis.PLUGINS_SETUP_FUNCTIONS&&await Promise.all([...globalThis.PLUGINS_SETUP_FUNCTIONS].map(t=>t(e,r)))},l=new Map;async function N({storyFn:e,forceRemount:r,showMain:t,showException:o,storyContext:a,id:n},i){let u=l.get(i);if(u&&!r){let p=e(),c=S(p,a);return R(u.reactiveArgs,c),()=>{g(u.vueApp,i)}}u&&r&&g(u.vueApp,i);let s=h({setup(){a.args=d(a.args);let p=e(),c=S(p,a),_={vueApp:s,reactiveArgs:d(c)};return l.set(i,_),()=>f(p)}});return s.config.errorHandler=(p,c,_)=>{var m;(m=window.__STORYBOOK_PREVIEW__)!=null&&m.storyRenders.some(O=>O.id===n&&O.phase==="playing")?setTimeout(()=>{throw p},0):o(p)},await I(s,a),s.mount(i),t(),()=>{g(s,i)}}function E(e,r){let{argTypes:t}=r,o=Object.entries(e).filter(([a])=>{var n,i;return((i=(n=t[a])==null?void 0:n.table)==null?void 0:i.category)==="slots"}).map(([a,n])=>[a,typeof n=="function"?n:()=>n]);return Object.fromEntries(o)}function S(e,r){return e.props&&y(e)?e.props:r.args}function R(e,r){if(Object.keys(r).length===0)return;let t=w(e)?e:d(e);Object.keys(t).forEach(o=>{o in r||delete t[o]}),Object.assign(t,r)}function g(e,r){e==null||e.unmount(),l.has(r)&&l.delete(r)}function z(e){return typeof e=="function"?{render:e,name:e.name}:e}function T(e,r){let t=e;return t===null?null:typeof t=="function"?t:r?{...z(t),components:{...t.components||{},story:r}}:{render(){return f(t)}}}function A(e,r){return r.reduce((t,o)=>a=>{let n,i=o(u=>{let s=b(u);return u&&(s.args=Object.assign(a.args,s.args)),n=t({...a,...s}),n},a);return n||(n=t(a)),i===n?n:T(i,()=>f(n))},t=>T(e(t)))}var C={renderer:"vue3"};export{A as applyDecorators,C as parameters,v as render,N as renderToCanvas};
