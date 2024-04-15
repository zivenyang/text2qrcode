import{V as me,a as fe,b as Ve,c as be,d as ye,e as Y,f as Ce}from"./VDialog-Bz3ZRyr0.js";import{V as te,m as ge,a as Z,b as ke,c as D,d as Se,e as z,f as $,s as Ie}from"./VTextarea-7yzGsDmO.js";import{p as w,T as B,Z as _e,m as oe,c as Re,g as q,I as N,R as O,e as V,O as xe,ab as pe,B as Te,t as g,h as F,i as l,s as J,C as S,ac as ne,L as P,U as Pe,Y as we,F as G,N as De,ad as E,ae as Ue,a6 as he,a0 as Ae,k as Be,l as U,w as v,o as T,v as h,n as K,r as W,af as Ge,x as X}from"./index-QlLddhEq.js";import{j as qe,R as Fe,V as $e,q as Ee,t as Le,u as Ne,i as ee,_ as Oe}from"./_plugin-vue_export-helper-Brw5qknx.js";import{V as le,b as Me}from"./VDivider-BGu3_uf4.js";const ue=Symbol.for("vuetify:selection-control-group"),M=w({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:B,trueIcon:B,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:_e},...oe(),...qe(),...Re()},"SelectionControlGroup"),Qe=w({...M({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),je=q()({name:"VSelectionControlGroup",props:Qe(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:i}=r;const o=N(e,"modelValue"),u=O(),f=V(()=>e.id||`v-selection-control-group-${u}`),m=V(()=>e.name||f.value),n=new Set;return xe(ue,{modelValue:o,forceUpdate:()=>{n.forEach(d=>d())},onForceUpdate:d=>{n.add(d),pe(()=>{n.delete(d)})}}),Te({[e.defaultsTarget]:{color:g(e,"color"),disabled:g(e,"disabled"),density:g(e,"density"),error:g(e,"error"),inline:g(e,"inline"),modelValue:o,multiple:V(()=>!!e.multiple||e.multiple==null&&Array.isArray(o.value)),name:m,falseIcon:g(e,"falseIcon"),trueIcon:g(e,"trueIcon"),readonly:g(e,"readonly"),ripple:g(e,"ripple"),type:g(e,"type"),valueComparator:g(e,"valueComparator")}}),F(()=>{var d;return l("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(d=i.default)==null?void 0:d.call(i)])}),{}}}),se=w({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...oe(),...M()},"VSelectionControl");function He(e){const r=De(ue,void 0),{densityClasses:i}=Ee(e),o=N(e,"modelValue"),u=V(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),f=V(()=>e.falseValue!==void 0?e.falseValue:!1),m=V(()=>!!e.multiple||e.multiple==null&&Array.isArray(o.value)),n=V({get(){const b=r?r.modelValue.value:o.value;return m.value?E(b).some(y=>e.valueComparator(y,u.value)):e.valueComparator(b,u.value)},set(b){if(e.readonly)return;const y=b?u.value:f.value;let C=y;m.value&&(C=b?[...E(o.value),y]:E(o.value).filter(s=>!e.valueComparator(s,u.value))),r?r.modelValue.value=C:o.value=C}}),{textColorClasses:d,textColorStyles:_}=Le(V(()=>{if(!(e.error||e.disabled))return n.value?e.color:e.baseColor})),{backgroundColorClasses:R,backgroundColorStyles:k}=Ne(V(()=>n.value&&!e.error&&!e.disabled?e.color:e.baseColor)),I=V(()=>n.value?e.trueIcon:e.falseIcon);return{group:r,densityClasses:i,trueValue:u,falseValue:f,model:n,textColorClasses:d,textColorStyles:_,backgroundColorClasses:R,backgroundColorStyles:k,icon:I}}const re=q()({name:"VSelectionControl",directives:{Ripple:Fe},inheritAttrs:!1,props:se(),emits:{"update:modelValue":e=>!0},setup(e,r){let{attrs:i,slots:o}=r;const{group:u,densityClasses:f,icon:m,model:n,textColorClasses:d,textColorStyles:_,backgroundColorClasses:R,backgroundColorStyles:k,trueValue:I}=He(e),b=O(),y=J(!1),C=J(!1),s=S(),t=V(()=>e.id||`input-${b}`),a=V(()=>!e.disabled&&!e.readonly);u==null||u.onForceUpdate(()=>{s.value&&(s.value.checked=n.value)});function c(p){a.value&&(y.value=!0,Ue(p.target,":focus-visible")!==!1&&(C.value=!0))}function x(){y.value=!1,C.value=!1}function ie(p){p.stopPropagation()}function de(p){a.value&&(e.readonly&&u&&he(()=>u.forceUpdate()),n.value=p.target.checked)}return F(()=>{var j,H;const p=o.label?o.label({label:e.label,props:{for:t.value}}):e.label,[ce,ve]=ne(i),Q=l("input",P({ref:s,checked:n.value,disabled:!!e.disabled,id:t.value,onBlur:x,onFocus:c,onInput:de,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:I.value,name:e.name,"aria-checked":e.type==="checkbox"?n.value:void 0},ve),null);return l("div",P({class:["v-selection-control",{"v-selection-control--dirty":n.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":y.value,"v-selection-control--focus-visible":C.value,"v-selection-control--inline":e.inline},f.value,e.class]},ce,{style:e.style}),[l("div",{class:["v-selection-control__wrapper",d.value],style:_.value},[(j=o.default)==null?void 0:j.call(o,{backgroundColorClasses:R,backgroundColorStyles:k}),Pe(l("div",{class:["v-selection-control__input"]},[((H=o.input)==null?void 0:H.call(o,{model:n,textColorClasses:d,textColorStyles:_,backgroundColorClasses:R,backgroundColorStyles:k,inputNode:Q,icon:m.value,props:{onFocus:c,onBlur:x,id:t.value}}))??l(G,null,[m.value&&l($e,{key:"icon",icon:m.value},null),Q])]),[[we("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),p&&l(te,{for:t.value,onClick:ie},{default:()=>[p]})])}),{isFocused:y,input:s}}}),Ye=w({...se({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),ae=q()({name:"VRadio",props:Ye(),setup(e,r){let{slots:i}=r;return F(()=>l(re,P(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),i)),{}}}),Ze=w({height:{type:[Number,String],default:"auto"},...ge(),...Ae(M(),["multiple"]),trueIcon:{type:B,default:"$radioOn"},falseIcon:{type:B,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),ze=q()({name:"VRadioGroup",inheritAttrs:!1,props:Ze(),emits:{"update:modelValue":e=>!0},setup(e,r){let{attrs:i,slots:o}=r;const u=O(),f=V(()=>e.id||`radio-group-${u}`),m=N(e,"modelValue");return F(()=>{const[n,d]=ne(i),_=Z.filterProps(e),R=re.filterProps(e),k=o.label?o.label({label:e.label,props:{for:f.value}}):e.label;return l(Z,P({class:["v-radio-group",e.class],style:e.style},n,_,{modelValue:m.value,"onUpdate:modelValue":I=>m.value=I,id:f.value}),{...o,default:I=>{let{id:b,messagesId:y,isDisabled:C,isReadonly:s}=I;return l(G,null,[k&&l(te,{id:b.value},{default:()=>[k]}),l(je,P(R,{id:b.value,"aria-describedby":y.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:C.value,readonly:s.value,"aria-labelledby":k?b.value:void 0,multiple:!1},d,{modelValue:m.value,"onUpdate:modelValue":t=>m.value=t}),o)])}})}),{}}}),A="segmented",L="line",Je=Be({__name:"index",setup(e){const r=S(""),i=S(A),o=S(256),u=S(1),f=S([]),m=S([]),n=S(0),d=S(!1);S(!1);const _=V(()=>`分段模式 (${o.value} 字符/段)`),R=V(()=>`分行模式 (${u.value} 行/段)`),k=async()=>{f.value=[],m.value=[];let s=[];i.value===A?s=I(r.value,o.value):i.value===L&&(s=b(r.value,u.value));for(const t of s)if(t){const a=await Ve.toDataURL(t);f.value.push(a),m.value.push(t)}},I=(s,t)=>{const a=[];for(let c=0;c<s.length;c+=t)a.push(s.substring(c,c+t));return a},b=(s,t)=>{const a=s.split(`
`),c=[];for(let x=0;x<a.length;x+=t)c.push(a.slice(x,x+t).join(`
`));return c},y=s=>{n.value=s,d.value=!0},C=()=>{Ie(f.value[n.value],`QR_Code_${n.value+1}.png`)};return(s,t)=>(T(),U(ke,null,{default:v(()=>[l($,null,{default:v(()=>[l(D,{cols:"12",md:"6"},{default:v(()=>[l(Se,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=a=>r.value=a),label:"输入文本",rows:"7",counter:"",outlined:"",clearable:"",required:"",rules:[a=>!!a||"请输入文本"]},null,8,["modelValue","rules"]),l(ze,{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=a=>i.value=a),row:""},{default:v(()=>[l(ae,{label:_.value,value:A,required:"",rules:[a=>!!a||"请选择模式"]},null,8,["label","rules"]),l(ae,{label:R.value,value:L},null,8,["label"])]),_:1},8,["modelValue"]),l(z,{modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=a=>o.value=a),modelModifiers:{number:!0},label:"分段大小",type:"number",min:"1",max:"1024",outlined:"",disabled:i.value!==A,required:"",rules:[a=>!!a||"请输入分段大小"]},null,8,["modelValue","disabled","rules"]),l(z,{modelValue:u.value,"onUpdate:modelValue":t[3]||(t[3]=a=>u.value=a),modelModifiers:{number:!0},label:"行数大小",type:"number",min:"1",outlined:"",disabled:i.value!==L,required:"",rules:[a=>!!a||"请输入行数大小"]},null,8,["modelValue","disabled","rules"]),l(ee,{onClick:k,color:"primary"},{default:v(()=>[h("生成二维码")]),_:1})]),_:1}),l(D,{cols:"12",md:"6"},{default:v(()=>[f.value.length>0?(T(),U($,{key:0},{default:v(()=>[(T(!0),K(G,null,W(f.value,(a,c)=>(T(),U(D,{key:c,cols:"4",onClick:x=>y(c)},{default:v(()=>[l(le,{src:a,alt:"QR Code "+(c+1),class:"qr-code-image",contain:"",tile:""},null,8,["src","alt"])]),_:2},1032,["onClick"]))),128))]),_:1})):Ge("",!0)]),_:1})]),_:1}),l(fe,{modelValue:d.value,"onUpdate:modelValue":t[5]||(t[5]=a=>d.value=a),"max-width":"800"},{default:v(()=>[l(me,{modelValue:n.value,"onUpdate:modelValue":t[4]||(t[4]=a=>n.value=a),"hide-delimiters":"",progress:"primary"},{default:v(()=>[(T(!0),K(G,null,W(f.value,(a,c)=>(T(),U(be,{key:c},{default:v(()=>[l($,{justify:"center"},{default:v(()=>[l(D,{cols:"12",sm:"6",md:"6"},{default:v(()=>[l(le,{src:a,alt:"QR Code "+(n.value+1)},null,8,["src","alt"])]),_:2},1024)]),_:2},1024),l(ye,null,{default:v(()=>[l(Y,null,{default:v(()=>[h("第 "+X(c+1)+" 段/行",1)]),_:2},1024),l(Me),l(Y,null,{default:v(()=>[h(X(m.value[c]),1)]),_:2},1024),l(Ce,{class:"qr-code-actions"},{default:v(()=>[l(ee,{color:"primary",onClick:C},{default:v(()=>[h("下载二维码")]),_:1})]),_:1})]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}))}}),al=Oe(Je,[["__scopeId","data-v-0a71f30a"]]);export{al as default};
