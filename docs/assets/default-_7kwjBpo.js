import{m as ue,a as re,b as ce,u as le,c as de,d as ve,e as fe,V as q,_ as We,f as W,g as Ue,h as St,i as Xe,M as pt,j as Ke,k as Ze,l as wt,n as Je,R as kt,o as _t,p as Ct,q as Qe,r as et,s as Vt,t as It,v as xt,w as At}from"./_plugin-vue_export-helper-DHxoIxv0.js";import{p as E,m as G,a as Te,b as Y,c as ge,g as D,d as me,t as V,s as T,u as Bt,e as f,f as Pe,h as z,i as u,j as K,k as Le,o as _e,l as tt,w as x,n as at,F as ie,r as Tt,q as oe,v as R,x as Pt,y as Lt,z as Mt,A as nt,B as Me,C as L,D as Et,E as $,G as Ee,H as he,I as ae,J as we,K as Ne,L as J,M as Nt,N as Ce,O as Ve,P as F,Q as Ot,R as Ht,S as Ft,T as Z,U as lt,V as Dt,W as $e,X as Rt,Y as $t,Z as zt,_ as Gt,$ as te,a0 as Yt,a1 as jt,a2 as qt,a3 as Wt,a4 as Ut,a5 as Xt,a6 as Kt,a7 as Zt,a8 as Jt,a9 as Qt,aa as ea}from"./index-DJ6bQc3S.js";import{c as Oe,V as it,a as ze,b as ta,u as aa}from"./VDivider-Bc-FCU8I.js";const na=Oe("v-spacer","div","VSpacer"),la=E({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ue(),...G(),...re(),...Te(),...ce(),...Y({tag:"footer"}),...ge()},"VFooter"),ia=D()({name:"VFooter",props:la(),setup(e,i){let{slots:t}=i;const{themeClasses:n}=me(e),{backgroundColorClasses:l,backgroundColorStyles:a}=le(V(e,"color")),{borderClasses:o}=de(e),{elevationClasses:r}=ve(e),{roundedClasses:y}=fe(e),g=T(32),{resizeRef:d}=Bt(s=>{s.length&&(g.value=s[0].target.clientHeight)}),h=f(()=>e.height==="auto"?g.value:parseInt(e.height,10)),{layoutItemStyles:m}=Pe({id:e.name,order:f(()=>parseInt(e.order,10)),position:f(()=>"bottom"),layoutSize:h,elementSize:f(()=>e.height==="auto"?void 0:h.value),active:f(()=>e.app),absolute:V(e,"absolute")});return z(()=>u(e.tag,{ref:d,class:["v-footer",n.value,l.value,o.value,r.value,y.value,e.class],style:[a.value,e.app?m.value:{height:K(e.height)},e.style]},t)),{}}}),ot=e=>(Lt("data-v-58d49aee"),e=e(),Mt(),e),oa=["href","title"],sa={class:"text-caption text-disabled",style:{position:"absolute",right:"16px"}},ua=ot(()=>oe("span",{class:"d-none d-sm-inline-block"},"zivenyang",-1)),ra=ot(()=>oe("a",{class:"text-decoration-none on-surface",href:"https://github.com/zivenyang/text2qrcode/blob/main/LICENSE",rel:"noopener noreferrer",target:"_blank"}," MIT License ",-1)),ca=Le({__name:"AppFooter",setup(e){const i=[{title:"GitHub",icon:"mdi-github",href:"https://github.com/zivenyang/text2qrcode"}];return(t,n)=>(_e(),tt(ia,{height:"40",app:""},{default:x(()=>[(_e(),at(ie,null,Tt(i,l=>oe("a",{key:l.title,href:l.href,title:l.title,class:"d-inline-block mx-2 social-link",rel:"noopener noreferrer",target:"_blank"},[u(q,{icon:l.icon,size:l.icon==="$vuetify"?24:16},null,8,["icon","size"])],8,oa)),64)),oe("div",sa,[R(" © "+Pt(new Date().getFullYear())+" ",1),ua,R(" — "),ra])]),_:1}))}}),da=We(ca,[["__scopeId","data-v-58d49aee"]]),va=E({text:String,...G(),...Y()},"VToolbarTitle"),st=D()({name:"VToolbarTitle",props:va(),setup(e,i){let{slots:t}=i;return z(()=>{const n=!!(t.default||t.text||e.text);return u(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[n&&u("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),fa=[null,"prominent","default","comfortable","compact"],ut=E({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>fa.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ue(),...G(),...re(),...ce(),...Y({tag:"header"}),...ge()},"VToolbar"),Ge=D()({name:"VToolbar",props:ut(),setup(e,i){var s;let{slots:t}=i;const{backgroundColorClasses:n,backgroundColorStyles:l}=le(V(e,"color")),{borderClasses:a}=de(e),{elevationClasses:o}=ve(e),{roundedClasses:r}=fe(e),{themeClasses:y}=me(e),{rtlClasses:g}=nt(),d=T(!!(e.extended||(s=t.extension)!=null&&s.call(t))),h=f(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),m=f(()=>d.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Me({VBtn:{variant:"text"}}),z(()=>{var w;const c=!!(e.title||t.title),v=!!(t.image||e.image),b=(w=t.extension)==null?void 0:w.call(t);return d.value=!!(e.extended||b),u(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,a.value,o.value,r.value,y.value,g.value,e.class],style:[l.value,e.style]},{default:()=>[v&&u("div",{key:"image",class:"v-toolbar__image"},[t.image?u(W,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):u(it,{key:"image-img",cover:!0,src:e.image},null)]),u(W,{defaults:{VTabs:{height:K(h.value)}}},{default:()=>{var A,C,B;return[u("div",{class:"v-toolbar__content",style:{height:K(h.value)}},[t.prepend&&u("div",{class:"v-toolbar__prepend"},[(A=t.prepend)==null?void 0:A.call(t)]),c&&u(st,{key:"title",text:e.title},{text:t.title}),(C=t.default)==null?void 0:C.call(t),t.append&&u("div",{class:"v-toolbar__append"},[(B=t.append)==null?void 0:B.call(t)])])]}}),u(W,{defaults:{VTabs:{height:K(m.value)}}},{default:()=>[u(Ue,null,{default:()=>[d.value&&u("div",{class:"v-toolbar__extension",style:{height:K(m.value)}},[b])]})]})]})}),{contentHeight:h,extensionHeight:m}}}),ga=E({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ma(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=i;let n=0;const l=L(null),a=T(0),o=T(0),r=T(0),y=T(!1),g=T(!1),d=f(()=>Number(e.scrollThreshold)),h=f(()=>Et((d.value-a.value)/d.value||0)),m=()=>{const s=l.value;!s||t&&!t.value||(n=a.value,a.value="window"in s?s.pageYOffset:s.scrollTop,g.value=a.value<n,r.value=Math.abs(a.value-d.value))};return $(g,()=>{o.value=o.value||a.value}),$(y,()=>{o.value=0}),Ee(()=>{$(()=>e.scrollTarget,s=>{var v;const c=s?document.querySelector(s):window;c&&c!==l.value&&((v=l.value)==null||v.removeEventListener("scroll",m),l.value=c,l.value.addEventListener("scroll",m,{passive:!0}))},{immediate:!0})}),he(()=>{var s;(s=l.value)==null||s.removeEventListener("scroll",m)}),t&&$(t,m,{immediate:!0}),{scrollThreshold:d,currentScroll:a,currentThreshold:r,isScrollActive:y,scrollRatio:h,isScrollingUp:g,savedScroll:o}}const ha=E({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ut(),...Te(),...ga(),height:{type:[Number,String],default:64}},"VAppBar"),ya=D()({name:"VAppBar",props:ha(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const n=L(),l=ae(e,"modelValue"),a=f(()=>{var A;const w=new Set(((A=e.scrollBehavior)==null?void 0:A.split(" "))??[]);return{hide:w.has("hide"),inverted:w.has("inverted"),collapse:w.has("collapse"),elevate:w.has("elevate"),fadeImage:w.has("fade-image")}}),o=f(()=>{const w=a.value;return w.hide||w.inverted||w.collapse||w.elevate||w.fadeImage||!l.value}),{currentScroll:r,scrollThreshold:y,isScrollingUp:g,scrollRatio:d}=ma(e,{canScroll:o}),h=f(()=>e.collapse||a.value.collapse&&(a.value.inverted?d.value>0:d.value===0)),m=f(()=>e.flat||a.value.elevate&&(a.value.inverted?r.value>0:r.value===0)),s=f(()=>a.value.fadeImage?a.value.inverted?1-d.value:d.value:void 0),c=f(()=>{var C,B;if(a.value.hide&&a.value.inverted)return 0;const w=((C=n.value)==null?void 0:C.contentHeight)??0,A=((B=n.value)==null?void 0:B.extensionHeight)??0;return w+A});we(f(()=>!!e.scrollBehavior),()=>{Nt(()=>{a.value.hide?a.value.inverted?l.value=r.value>y.value:l.value=g.value||r.value<y.value:l.value=!0})});const{ssrBootStyles:v}=Ne(),{layoutItemStyles:b}=Pe({id:e.name,order:f(()=>parseInt(e.order,10)),position:V(e,"location"),layoutSize:c,elementSize:T(void 0),active:l,absolute:V(e,"absolute")});return z(()=>{const w=Ge.filterProps(e);return u(Ge,J({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...b.value,"--v-toolbar-image-opacity":s.value,height:void 0,...v.value},e.style]},w,{collapse:h.value,flat:m.value}),t)}),{}}}),ba=E({...St({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Sa=D()({name:"VAppBarNavIcon",props:ba(),setup(e,i){let{slots:t}=i;return z(()=>u(Xe,J(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),Be=Symbol.for("vuetify:list");function rt(){const e=Ce(Be,{hasPrepend:T(!1),updateHasPrepend:()=>null}),i={hasPrepend:T(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return Ve(Be,i),e}function ct(){return Ce(Be,null)}const He=e=>{const i={activate:t=>{let{id:n,value:l,activated:a}=t;return n=F(n),e&&!l&&a.size===1&&a.has(n)||(l?a.add(n):a.delete(n)),a},in:(t,n,l)=>{let a=new Set;for(const o of t||[])a=i.activate({id:o,value:!0,activated:new Set(a),children:n,parents:l});return a},out:t=>Array.from(t)};return i},dt=e=>{const i=He(e);return{activate:n=>{let{activated:l,id:a,...o}=n;a=F(a);const r=l.has(a)?new Set([a]):new Set;return i.activate({...o,id:a,activated:r})},in:(n,l,a)=>{let o=new Set;return n!=null&&n.length&&(o=i.in(n.slice(0,1),l,a)),o},out:(n,l,a)=>i.out(n,l,a)}},pa=e=>{const i=He(e);return{activate:n=>{let{id:l,activated:a,children:o,...r}=n;return l=F(l),o.has(l)?a:i.activate({id:l,activated:a,children:o,...r})},in:i.in,out:i.out}},wa=e=>{const i=dt(e);return{activate:n=>{let{id:l,activated:a,children:o,...r}=n;return l=F(l),o.has(l)?a:i.activate({id:l,activated:a,children:o,...r})},in:i.in,out:i.out}},ka={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(i);let o=l.get(i);for(;o!=null;)a.add(o),o=l.get(o);return a}else return n.delete(i),n},select:()=>null},vt={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){let a=l.get(i);for(n.add(i);a!=null&&a!==i;)n.add(a),a=l.get(a);return n}else n.delete(i);return n},select:()=>null},_a={open:vt.open,select:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let o=l.get(i);for(;o!=null;)a.push(o),o=l.get(o);return new Set(a)}},Fe=e=>{const i={select:t=>{let{id:n,value:l,selected:a}=t;if(n=F(n),e&&!l){const o=Array.from(a.entries()).reduce((r,y)=>{let[g,d]=y;return d==="on"&&r.push(g),r},[]);if(o.length===1&&o[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const o of t||[])a=i.select({id:o,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return i},ft=e=>{const i=Fe(e);return{select:n=>{let{selected:l,id:a,...o}=n;a=F(a);const r=l.has(a)?new Map([[a,l.get(a)]]):new Map;return i.select({...o,id:a,selected:r})},in:(n,l,a)=>{let o=new Map;return n!=null&&n.length&&(o=i.in(n.slice(0,1),l,a)),o},out:(n,l,a)=>i.out(n,l,a)}},Ca=e=>{const i=Fe(e);return{select:n=>{let{id:l,selected:a,children:o,...r}=n;return l=F(l),o.has(l)?a:i.select({id:l,selected:a,children:o,...r})},in:i.in,out:i.out}},Va=e=>{const i=ft(e);return{select:n=>{let{id:l,selected:a,children:o,...r}=n;return l=F(l),o.has(l)?a:i.select({id:l,selected:a,children:o,...r})},in:i.in,out:i.out}},Ia=e=>{const i={select:t=>{let{id:n,value:l,selected:a,children:o,parents:r}=t;n=F(n);const y=new Map(a),g=[n];for(;g.length;){const h=g.shift();a.set(h,l?"on":"off"),o.has(h)&&g.push(...o.get(h))}let d=r.get(n);for(;d;){const h=o.get(d),m=h.every(c=>a.get(c)==="on"),s=h.every(c=>!a.has(c)||a.get(c)==="off");a.set(d,m?"on":s?"off":"indeterminate"),d=r.get(d)}return e&&!l&&Array.from(a.entries()).reduce((m,s)=>{let[c,v]=s;return v==="on"&&m.push(c),m},[]).length===0?y:a},in:(t,n,l)=>{let a=new Map;for(const o of t||[])a=i.select({id:o,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,o]of t.entries())o==="on"&&!n.has(a)&&l.push(a);return l}};return i},se=Symbol.for("vuetify:nested"),gt={id:T(),root:{register:()=>null,unregister:()=>null,parents:L(new Map),children:L(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:L(!1),selectable:L(!1),opened:L(new Set),activated:L(new Set),selected:L(new Map),selectedValues:L([])}},xa=E({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function],selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,activated:Array,selected:Array,mandatory:Boolean},"nested"),Aa=e=>{let i=!1;const t=L(new Map),n=L(new Map),l=ae(e,"opened",e.opened,s=>new Set(s),s=>[...s.values()]),a=f(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;switch(e.activeStrategy){case"leaf":return pa(e.mandatory);case"single-leaf":return wa(e.mandatory);case"independent":return He(e.mandatory);case"single-independent":default:return dt(e.mandatory)}}),o=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Va(e.mandatory);case"leaf":return Ca(e.mandatory);case"independent":return Fe(e.mandatory);case"single-independent":return ft(e.mandatory);case"classic":default:return Ia(e.mandatory)}}),r=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return _a;case"single":return ka;case"multiple":default:return vt}}),y=ae(e,"activated",e.activated,s=>a.value.in(s,t.value,n.value),s=>a.value.out(s,t.value,n.value)),g=ae(e,"selected",e.selected,s=>o.value.in(s,t.value,n.value),s=>o.value.out(s,t.value,n.value));he(()=>{i=!0});function d(s){const c=[];let v=s;for(;v!=null;)c.unshift(v),v=n.value.get(v);return c}const h=Ot("nested"),m={id:T(),root:{opened:l,activatable:V(e,"activatable"),selectable:V(e,"selectable"),activated:y,selected:g,selectedValues:f(()=>{const s=[];for(const[c,v]of g.value.entries())v==="on"&&s.push(c);return s}),register:(s,c,v)=>{c&&s!==c&&n.value.set(s,c),v&&t.value.set(s,[]),c!=null&&t.value.set(c,[...t.value.get(c)||[],s])},unregister:s=>{if(i)return;t.value.delete(s);const c=n.value.get(s);if(c){const v=t.value.get(c)??[];t.value.set(c,v.filter(b=>b!==s))}n.value.delete(s),l.value.delete(s)},open:(s,c,v)=>{h.emit("click:open",{id:s,value:c,path:d(s),event:v});const b=r.value.open({id:s,value:c,opened:new Set(l.value),children:t.value,parents:n.value,event:v});b&&(l.value=b)},openOnSelect:(s,c,v)=>{const b=r.value.select({id:s,value:c,selected:new Map(g.value),opened:new Set(l.value),children:t.value,parents:n.value,event:v});b&&(l.value=b)},select:(s,c,v)=>{h.emit("click:select",{id:s,value:c,path:d(s),event:v});const b=o.value.select({id:s,value:c,selected:new Map(g.value),children:t.value,parents:n.value,event:v});b&&(g.value=b),m.root.openOnSelect(s,c,v)},activate:(s,c,v)=>{if(!e.activatable)return m.root.select(s,!0,v);h.emit("click:activate",{id:s,value:c,path:d(s),event:v});const b=a.value.activate({id:s,value:c,activated:new Set(y.value),children:t.value,parents:n.value,event:v});b&&(y.value=b)},children:t,parents:n}};return Ve(se,m),m.root},mt=(e,i)=>{const t=Ce(se,gt),n=Symbol(Ht()),l=f(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(o,r)=>t.root.open(l.value,o,r),openOnSelect:(o,r)=>t.root.openOnSelect(l.value,o,r),isOpen:f(()=>t.root.opened.value.has(l.value)),parent:f(()=>t.root.parents.value.get(l.value)),activate:(o,r)=>t.root.activate(l.value,o,r),isActivated:f(()=>t.root.activated.value.has(F(l.value))),select:(o,r)=>t.root.select(l.value,o,r),isSelected:f(()=>t.root.selected.value.get(F(l.value))==="on"),isIndeterminate:f(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:f(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,i),he(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&Ve(se,a),a},Ba=()=>{const e=Ce(se,gt);Ve(se,{...e,isGroupActivator:!0})},Ta=Ft({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return Ba(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Pa=E({activeColor:String,baseColor:String,color:String,collapseIcon:{type:Z,default:"$collapse"},expandIcon:{type:Z,default:"$expand"},prependIcon:Z,appendIcon:Z,fluid:Boolean,subgroup:Boolean,title:String,value:null,...G(),...Y()},"VListGroup"),Ye=D()({name:"VListGroup",props:Pa(),setup(e,i){let{slots:t}=i;const{isOpen:n,open:l,id:a}=mt(V(e,"value"),!0),o=f(()=>`v-list-group--id-${String(a.value)}`),r=ct(),{isBooted:y}=Ne();function g(s){l(!n.value,s)}const d=f(()=>({onClick:g,class:"v-list-group__header",id:o.value})),h=f(()=>n.value?e.collapseIcon:e.expandIcon),m=f(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&h.value,appendIcon:e.appendIcon||!e.subgroup&&h.value,title:e.title,value:e.value}}));return z(()=>u(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&u(W,{defaults:m.value},{default:()=>[u(Ta,null,{default:()=>[t.activator({props:d.value,isOpen:n.value})]})]}),u(pt,{transition:{component:Ue},disabled:!y.value},{default:()=>{var s;return[lt(u("div",{class:"v-list-group__items",role:"group","aria-labelledby":o.value},[(s=t.default)==null?void 0:s.call(t)]),[[Dt,n.value]])]}})]})),{isOpen:n}}}),La=Oe("v-list-item-subtitle"),ke=Oe("v-list-item-title"),Ma=E({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:Z,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:Z,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:$e(),onClickOnce:$e(),...ue(),...G(),...Ke(),...Ze(),...re(),...ce(),...wt(),...Y(),...ge(),...Je({variant:"text"})},"VListItem"),ne=D()({name:"VListItem",directives:{Ripple:kt},props:Ma(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:n,emit:l}=i;const a=_t(e,t),o=f(()=>e.value===void 0?a.href.value:e.value),{activate:r,isActivated:y,select:g,isSelected:d,isIndeterminate:h,isGroupActivator:m,root:s,parent:c,openOnSelect:v}=mt(o,!1),b=ct(),w=f(()=>{var p;return e.active!==!1&&(e.active||((p=a.isActive)==null?void 0:p.value)||(s.activatable.value?y.value:d.value))}),A=f(()=>e.link!==!1&&a.isLink.value),C=f(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||!!b&&(s.selectable.value||s.activatable.value||e.value!=null))),B=f(()=>e.rounded||e.nav),S=f(()=>e.color??e.activeColor),k=f(()=>({color:w.value?S.value??e.baseColor:e.baseColor,variant:e.variant}));$(()=>{var p;return(p=a.isActive)==null?void 0:p.value},p=>{p&&c.value!=null&&s.open(c.value,!0),p&&v(p)},{immediate:!0});const{themeClasses:_}=me(e),{borderClasses:I}=de(e),{colorClasses:M,colorStyles:N,variantClasses:O}=Ct(k),{densityClasses:P}=Qe(e),{dimensionStyles:U}=et(e),{elevationClasses:ye}=ve(e),{roundedClasses:Ie}=fe(B),be=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Q=f(()=>({isActive:w.value,select:g,isSelected:d.value,isIndeterminate:h.value}));function Se(p){var j;l("click",p),!(m||!C.value)&&((j=a.navigate)==null||j.call(a,p),s.activatable.value?r(!y.value,p):(s.selectable.value||e.value!=null)&&g(!d.value,p))}function xe(p){(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),Se(p))}return z(()=>{const p=A.value?"a":e.tag,j=n.title||e.title!=null,pe=n.subtitle||e.subtitle!=null,ee=!!(e.appendAvatar||e.appendIcon),bt=!!(ee||n.append),De=!!(e.prependAvatar||e.prependIcon),Ae=!!(De||n.prepend);return b==null||b.updateHasPrepend(Ae),e.activeColor&&Rt("active-color",["color","base-color"]),lt(u(p,{class:["v-list-item",{"v-list-item--active":w.value,"v-list-item--disabled":e.disabled,"v-list-item--link":C.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Ae&&(b==null?void 0:b.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&w.value},_.value,I.value,M.value,P.value,ye.value,be.value,Ie.value,O.value,e.class],style:[N.value,U.value,e.style],href:a.href.value,tabindex:C.value?b?-2:0:void 0,onClick:Se,onKeydown:C.value&&!A.value&&xe},{default:()=>{var Re;return[Vt(C.value||w.value,"v-list-item"),Ae&&u("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?u(W,{key:"prepend-defaults",disabled:!De,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var H;return[(H=n.prepend)==null?void 0:H.call(n,Q.value)]}}):u(ie,null,[e.prependAvatar&&u(ze,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&u(q,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),u("div",{class:"v-list-item__spacer"},null)]),u("div",{class:"v-list-item__content","data-no-activator":""},[j&&u(ke,{key:"title"},{default:()=>{var H;return[((H=n.title)==null?void 0:H.call(n,{title:e.title}))??e.title]}}),pe&&u(La,{key:"subtitle"},{default:()=>{var H;return[((H=n.subtitle)==null?void 0:H.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(Re=n.default)==null?void 0:Re.call(n,Q.value)]),bt&&u("div",{key:"append",class:"v-list-item__append"},[n.append?u(W,{key:"append-defaults",disabled:!ee,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var H;return[(H=n.append)==null?void 0:H.call(n,Q.value)]}}):u(ie,null,[e.appendIcon&&u(q,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&u(ze,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),u("div",{class:"v-list-item__spacer"},null)])]}}),[[$t("ripple"),C.value&&e.ripple]])}),{isGroupActivator:m,isSelected:d,list:b,select:g}}}),Ea=E({color:String,inset:Boolean,sticky:Boolean,title:String,...G(),...Y()},"VListSubheader"),Na=D()({name:"VListSubheader",props:Ea(),setup(e,i){let{slots:t}=i;const{textColorClasses:n,textColorStyles:l}=It(V(e,"color"));return z(()=>{const a=!!(t.default||e.title);return u(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var o;return[a&&u("div",{class:"v-list-subheader__text"},[((o=t.default)==null?void 0:o.call(t))??e.title])]}})}),{}}}),Oa=E({items:Array,returnObject:Boolean},"VListChildren"),ht=D()({name:"VListChildren",props:Oa(),setup(e,i){let{slots:t}=i;return rt(),()=>{var n,l;return((n=t.default)==null?void 0:n.call(t))??((l=e.items)==null?void 0:l.map(a=>{var m,s;let{children:o,props:r,type:y,raw:g}=a;if(y==="divider")return((m=t.divider)==null?void 0:m.call(t,{props:r}))??u(ta,r,null);if(y==="subheader")return((s=t.subheader)==null?void 0:s.call(t,{props:r}))??u(Na,r,null);const d={subtitle:t.subtitle?c=>{var v;return(v=t.subtitle)==null?void 0:v.call(t,{...c,item:g})}:void 0,prepend:t.prepend?c=>{var v;return(v=t.prepend)==null?void 0:v.call(t,{...c,item:g})}:void 0,append:t.append?c=>{var v;return(v=t.append)==null?void 0:v.call(t,{...c,item:g})}:void 0,title:t.title?c=>{var v;return(v=t.title)==null?void 0:v.call(t,{...c,item:g})}:void 0},h=Ye.filterProps(r);return o?u(Ye,J({value:r==null?void 0:r.value},h),{activator:c=>{let{props:v}=c;const b={...r,...v,value:e.returnObject?g:r.value};return t.header?t.header({props:b}):u(ne,b,d)},default:()=>u(ht,{items:o},t)}):t.item?t.item({props:r}):u(ne,J(r,{value:e.returnObject?g:r.value}),d)}))}}}),Ha=E({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:zt}},"list-items");function Fa(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Da(e,i){const t=te(i,e.itemType,"item"),n=Fa(i)?i:te(i,e.itemTitle),l=te(i,e.itemValue,void 0),a=te(i,e.itemChildren),o=e.itemProps===!0?Yt(i,["children"]):te(i,e.itemProps),r={title:n,value:l,...o};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?yt(e,a):void 0,raw:i}}function yt(e,i){const t=[];for(const n of i)t.push(Da(e,n));return t}function Ra(e){return{items:f(()=>yt(e,e.items))}}const $a=E({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...xa({selectStrategy:"single-leaf",openStrategy:"list"}),...ue(),...G(),...Ke(),...Ze(),...re(),itemType:{type:String,default:"type"},...Ha(),...ce(),...Y(),...ge(),...Je({variant:"text"})},"VList"),za=D()({name:"VList",props:$a(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:n}=Ra(e),{themeClasses:l}=me(e),{backgroundColorClasses:a,backgroundColorStyles:o}=le(V(e,"bgColor")),{borderClasses:r}=de(e),{densityClasses:y}=Qe(e),{dimensionStyles:g}=et(e),{elevationClasses:d}=ve(e),{roundedClasses:h}=fe(e),{children:m,open:s,parents:c,select:v}=Aa(e),b=f(()=>e.lines?`v-list--${e.lines}-line`:void 0),w=V(e,"activeColor"),A=V(e,"baseColor"),C=V(e,"color");rt(),Me({VListGroup:{activeColor:w,baseColor:A,color:C,expandIcon:V(e,"expandIcon"),collapseIcon:V(e,"collapseIcon")},VListItem:{activeClass:V(e,"activeClass"),activeColor:w,baseColor:A,color:C,density:V(e,"density"),disabled:V(e,"disabled"),lines:V(e,"lines"),nav:V(e,"nav"),slim:V(e,"slim"),variant:V(e,"variant")}});const B=T(!1),S=L();function k(P){B.value=!0}function _(P){B.value=!1}function I(P){var U;!B.value&&!(P.relatedTarget&&((U=S.value)!=null&&U.contains(P.relatedTarget)))&&O()}function M(P){if(S.value){if(P.key==="ArrowDown")O("next");else if(P.key==="ArrowUp")O("prev");else if(P.key==="Home")O("first");else if(P.key==="End")O("last");else return;P.preventDefault()}}function N(P){B.value=!0}function O(P){if(S.value)return Gt(S.value,P)}return z(()=>u(e.tag,{ref:S,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,a.value,r.value,y.value,d.value,b.value,h.value,e.class],style:[o.value,g.value,e.style],tabindex:e.disabled||B.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:k,onFocusout:_,onFocus:I,onKeydown:M,onMousedown:N},{default:()=>[u(ht,{items:n.value,returnObject:e.returnObject},t)]})),{open:s,select:v,focus:O,children:m,parents:c}}});function Ga(e){let{rootEl:i,isSticky:t,layoutItemStyles:n}=e;const l=T(!1),a=T(0),o=f(()=>{const g=typeof l.value=="boolean"?"top":l.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,l.value?{[g]:K(a.value)}:{top:n.value.top}]});Ee(()=>{$(t,g=>{g?window.addEventListener("scroll",y,{passive:!0}):window.removeEventListener("scroll",y)},{immediate:!0})}),he(()=>{window.removeEventListener("scroll",y)});let r=0;function y(){const g=r>window.scrollY?"up":"down",d=i.value.getBoundingClientRect(),h=parseFloat(n.value.top??0),m=window.scrollY-Math.max(0,a.value-h),s=d.height+Math.max(a.value,h)-window.scrollY-window.innerHeight,c=parseFloat(getComputedStyle(i.value).getPropertyValue("--v-body-scroll-y"))||0;d.height<window.innerHeight-h?(l.value="top",a.value=h):g==="up"&&l.value==="bottom"||g==="down"&&l.value==="top"?(a.value=window.scrollY+d.top-c,l.value=!0):g==="down"&&s<=0?(a.value=0,l.value="bottom"):g==="up"&&m<=0&&(c?l.value!=="top"&&(a.value=-m+c+h,l.value="top"):(a.value=d.top+m,l.value="top")),r=window.scrollY}return{isStuck:l,stickyStyles:o}}const Ya=100,ja=20;function je(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function qe(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let i=0;for(let t=e.length-1;t>0;t--){if(e[t].t===e[t-1].t)continue;const n=je(i),l=(e[t].d-e[t-1].d)/(e[t].t-e[t-1].t);i+=(l-n)*Math.abs(l),t===e.length-1&&(i*=.5)}return je(i)*1e3}function qa(){const e={};function i(l){Array.from(l.changedTouches).forEach(a=>{(e[a.identifier]??(e[a.identifier]=new jt(ja))).push([l.timeStamp,a])})}function t(l){Array.from(l.changedTouches).forEach(a=>{delete e[a.identifier]})}function n(l){var g;const a=(g=e[l])==null?void 0:g.values().reverse();if(!a)throw new Error(`No samples for touch id ${l}`);const o=a[0],r=[],y=[];for(const d of a){if(o[0]-d[0]>Ya)break;r.push({t:d[0],d:d[1].clientX}),y.push({t:d[0],d:d[1].clientY})}return{x:qe(r),y:qe(y),get direction(){const{x:d,y:h}=this,[m,s]=[Math.abs(d),Math.abs(h)];return m>s&&d>=0?"right":m>s&&d<=0?"left":s>m&&h>=0?"down":s>m&&h<=0?"up":Wa()}}}return{addMovement:i,endTouch:t,getVelocity:n}}function Wa(){throw new Error}function Ua(e){let{isActive:i,isTemporary:t,width:n,touchless:l,position:a}=e;Ee(()=>{window.addEventListener("touchstart",w,{passive:!0}),window.addEventListener("touchmove",A,{passive:!1}),window.addEventListener("touchend",C,{passive:!0})}),he(()=>{window.removeEventListener("touchstart",w),window.removeEventListener("touchmove",A),window.removeEventListener("touchend",C)});const o=f(()=>["left","right"].includes(a.value)),{addMovement:r,endTouch:y,getVelocity:g}=qa();let d=!1;const h=T(!1),m=T(0),s=T(0);let c;function v(S,k){return(a.value==="left"?S:a.value==="right"?document.documentElement.clientWidth-S:a.value==="top"?S:a.value==="bottom"?document.documentElement.clientHeight-S:X())-(k?n.value:0)}function b(S){let k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const _=a.value==="left"?(S-s.value)/n.value:a.value==="right"?(document.documentElement.clientWidth-S-s.value)/n.value:a.value==="top"?(S-s.value)/n.value:a.value==="bottom"?(document.documentElement.clientHeight-S-s.value)/n.value:X();return k?Math.max(0,Math.min(1,_)):_}function w(S){if(l.value)return;const k=S.changedTouches[0].clientX,_=S.changedTouches[0].clientY,I=25,M=a.value==="left"?k<I:a.value==="right"?k>document.documentElement.clientWidth-I:a.value==="top"?_<I:a.value==="bottom"?_>document.documentElement.clientHeight-I:X(),N=i.value&&(a.value==="left"?k<n.value:a.value==="right"?k>document.documentElement.clientWidth-n.value:a.value==="top"?_<n.value:a.value==="bottom"?_>document.documentElement.clientHeight-n.value:X());(M||N||i.value&&t.value)&&(d=!0,c=[k,_],s.value=v(o.value?k:_,i.value),m.value=b(o.value?k:_),y(S),r(S))}function A(S){const k=S.changedTouches[0].clientX,_=S.changedTouches[0].clientY;if(d){if(!S.cancelable){d=!1;return}const M=Math.abs(k-c[0]),N=Math.abs(_-c[1]);(o.value?M>N&&M>3:N>M&&N>3)?(h.value=!0,d=!1):(o.value?N:M)>3&&(d=!1)}if(!h.value)return;S.preventDefault(),r(S);const I=b(o.value?k:_,!1);m.value=Math.max(0,Math.min(1,I)),I>1?s.value=v(o.value?k:_,!0):I<0&&(s.value=v(o.value?k:_,!1))}function C(S){if(d=!1,!h.value)return;r(S),h.value=!1;const k=g(S.changedTouches[0].identifier),_=Math.abs(k.x),I=Math.abs(k.y);(o.value?_>I&&_>400:I>_&&I>3)?i.value=k.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||X()):i.value=m.value>.5}const B=f(()=>h.value?{transform:a.value==="left"?`translateX(calc(-100% + ${m.value*n.value}px))`:a.value==="right"?`translateX(calc(100% - ${m.value*n.value}px))`:a.value==="top"?`translateY(calc(-100% + ${m.value*n.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${m.value*n.value}px))`:X(),transition:"none"}:void 0);return{isDragging:h,dragProgress:m,dragStyles:B}}function X(){throw new Error}const Xa=["start","end","left","right","top","bottom"],Ka=E({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Xa.includes(e)},sticky:Boolean,...ue(),...G(),...qt(),...re(),...Te(),...ce(),...Y({tag:"nav"}),...ge()},"VNavigationDrawer"),Za=D()({name:"VNavigationDrawer",props:Ka(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,i){let{attrs:t,emit:n,slots:l}=i;const{isRtl:a}=nt(),{themeClasses:o}=me(e),{borderClasses:r}=de(e),{backgroundColorClasses:y,backgroundColorStyles:g}=le(V(e,"color")),{elevationClasses:d}=ve(e),{displayClasses:h,mobile:m}=Wt(e),{roundedClasses:s}=fe(e),c=xt(),v=ae(e,"modelValue",null,p=>!!p),{ssrBootStyles:b}=Ne(),{scopeId:w}=aa(),A=L(),C=T(!1),B=f(()=>e.rail&&e.expandOnHover&&C.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),S=f(()=>At(e.location,a.value)),k=f(()=>!e.permanent&&(m.value||e.temporary)),_=f(()=>e.sticky&&!k.value&&S.value!=="bottom");we(()=>e.expandOnHover&&e.rail!=null,()=>{$(C,p=>n("update:rail",!p))}),we(()=>!e.disableResizeWatcher,()=>{$(k,p=>!e.permanent&&Kt(()=>v.value=!p))}),we(()=>!e.disableRouteWatcher&&!!c,()=>{$(c.currentRoute,()=>k.value&&(v.value=!1))}),$(()=>e.permanent,p=>{p&&(v.value=!0)}),Ut(()=>{e.modelValue!=null||k.value||(v.value=e.permanent||!m.value)});const{isDragging:I,dragProgress:M,dragStyles:N}=Ua({isActive:v,isTemporary:k,width:B,touchless:V(e,"touchless"),position:S}),O=f(()=>{const p=k.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):B.value;return I.value?p*M.value:p}),{layoutItemStyles:P,layoutItemScrimStyles:U}=Pe({id:e.name,order:f(()=>parseInt(e.order,10)),position:S,layoutSize:O,elementSize:B,active:f(()=>v.value||I.value),disableTransitions:f(()=>I.value),absolute:f(()=>e.absolute||_.value&&typeof ye.value!="string")}),{isStuck:ye,stickyStyles:Ie}=Ga({rootEl:A,isSticky:_,layoutItemStyles:P}),be=le(f(()=>typeof e.scrim=="string"?e.scrim:null)),Q=f(()=>({...I.value?{opacity:M.value*.2,transition:"none"}:void 0,...U.value}));Me({VList:{bgColor:"transparent"}});function Se(){C.value=!0}function xe(){C.value=!1}return z(()=>{const p=l.image||e.image;return u(ie,null,[u(e.tag,J({ref:A,onMouseenter:Se,onMouseleave:xe,class:["v-navigation-drawer",`v-navigation-drawer--${S.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":C.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":k.value,"v-navigation-drawer--active":v.value,"v-navigation-drawer--sticky":_.value},o.value,y.value,r.value,h.value,d.value,s.value,e.class],style:[g.value,P.value,N.value,b.value,Ie.value,e.style]},w,t),{default:()=>{var j,pe,ee;return[p&&u("div",{key:"image",class:"v-navigation-drawer__img"},[l.image?u(W,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},l.image):u(it,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),l.prepend&&u("div",{class:"v-navigation-drawer__prepend"},[(j=l.prepend)==null?void 0:j.call(l)]),u("div",{class:"v-navigation-drawer__content"},[(pe=l.default)==null?void 0:pe.call(l)]),l.append&&u("div",{class:"v-navigation-drawer__append"},[(ee=l.append)==null?void 0:ee.call(l)])]}}),u(Xt,{name:"fade-transition"},{default:()=>[k.value&&(I.value||v.value)&&!!e.scrim&&u("div",J({class:["v-navigation-drawer__scrim",be.backgroundColorClasses.value],style:[Q.value,be.backgroundColorStyles.value],onClick:()=>v.value=!1},w),null)]})])}),{isStuck:ye}}}),Ja={title:"GitHub",href:"https://github.com/zivenyang/text2qrcode",target:"_blank",class:"d-inline-block mx-2 social-link"},Qa=Le({__name:"AppHeader",setup(e){const i=L(!1);return(t,n)=>(_e(),at(ie,null,[u(ya,{app:""},{default:x(()=>[u(Sa,{onClick:n[0]||(n[0]=Zt(l=>i.value=!i.value,["stop"]))}),u(st,null,{default:x(()=>[R("text2qrcode")]),_:1}),u(na),u(Xe,{icon:""},{default:x(()=>[oe("a",Ja,[u(q,null,{default:x(()=>[R("mdi-github")]),_:1})])]),_:1})]),_:1}),u(Za,{app:"",modelValue:i.value,"onUpdate:modelValue":n[4]||(n[4]=l=>i.value=l)},{default:x(()=>[u(za,{dense:""},{default:x(()=>[u(ne,{link:"",to:"/",onClick:n[1]||(n[1]=l=>i.value=!1)},{prepend:x(()=>[u(q,null,{default:x(()=>[R("mdi-text")]),_:1})]),default:x(()=>[u(ke,null,{default:x(()=>[R("text2qrcode")]),_:1})]),_:1}),u(ne,{link:"",to:"/file2qrcode",onClick:n[2]||(n[2]=l=>i.value=!1)},{prepend:x(()=>[u(q,null,{default:x(()=>[R("mdi-file")]),_:1})]),default:x(()=>[u(ke,null,{default:x(()=>[R("file2qrcode")]),_:1})]),_:1}),u(ne,{link:"",to:"/base642file",onClick:n[3]||(n[3]=l=>i.value=!1)},{prepend:x(()=>[u(q,null,{default:x(()=>[R("mdi-code-braces")]),_:1})]),default:x(()=>[u(ke,null,{default:x(()=>[R("base642file")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),en=We(Qa,[["__scopeId","data-v-865b009c"]]),ln=Le({__name:"default",setup(e){return(i,t)=>{const n=en,l=Qt("router-view"),a=da;return _e(),tt(Jt,null,{default:x(()=>[u(n),u(ea,null,{default:x(()=>[u(l)]),_:1}),u(a)]),_:1})}}});export{ln as default};
