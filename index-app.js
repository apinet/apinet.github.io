(()=>{var nt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xt=Symbol(),wt=new Map,lt=class{constructor(t,i){if(this._$cssResult$=!0,i!==xt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=wt.get(this.cssText);return nt&&t===void 0&&(wt.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},bt=a=>new lt(typeof a=="string"?a:a+"",xt);var at=(a,t)=>{nt?a.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{let s=document.createElement("style"),r=window.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=i.cssText,a.appendChild(s)})},ot=nt?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let i="";for(let s of t.cssRules)i+=s.cssText;return bt(i)})(a):a;var ht,St=window.trustedTypes,Ae=St?St.emptyScript:"",Et=window.reactiveElementPolyfillSupport,dt={toAttribute(a,t){switch(t){case Boolean:a=a?Ae:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let i=a;switch(t){case Boolean:i=a!==null;break;case Number:i=a===null?null:Number(a);break;case Object:case Array:try{i=JSON.parse(a)}catch{i=null}}return i}},Ct=(a,t)=>t!==a&&(t==t||a==a),ct={attribute:!0,type:String,converter:dt,reflect:!1,hasChanged:Ct},k=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;(i=this.l)!==null&&i!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((i,s)=>{let r=this._$Eh(s,i);r!==void 0&&(this._$Eu.set(r,s),t.push(r))}),t}static createProperty(t,i=ct){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,s,i);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(r){let d=this[t];this[i]=r,this.requestUpdate(t,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ct}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let i=this.properties,s=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(let r of s)this.createProperty(r,i[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let i=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)i.unshift(ot(r))}else t!==void 0&&i.push(ot(t));return i}static _$Eh(t,i){let s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,s;((i=this._$Eg)!==null&&i!==void 0?i:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var i;(i=this._$Eg)===null||i===void 0||i.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;let i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return at(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostConnected)===null||s===void 0?void 0:s.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostDisconnected)===null||s===void 0?void 0:s.call(i)})}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$ES(t,i,s=ct){var r,d;let c=this.constructor._$Eh(t,s);if(c!==void 0&&s.reflect===!0){let g=((d=(r=s.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&d!==void 0?d:dt.toAttribute)(i,s.type);this._$Ei=t,g==null?this.removeAttribute(c):this.setAttribute(c,g),this._$Ei=null}}_$AK(t,i){var s,r,d;let c=this.constructor,g=c._$Eu.get(t);if(g!==void 0&&this._$Ei!==g){let u=c.getPropertyOptions(g),m=u.converter,T=(d=(r=(s=m)===null||s===void 0?void 0:s.fromAttribute)!==null&&r!==void 0?r:typeof m=="function"?m:null)!==null&&d!==void 0?d:dt.fromAttribute;this._$Ei=g,this[g]=T(i,u.type),this._$Ei=null}}requestUpdate(t,i,s){let r=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||Ct)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),s.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(i){Promise.reject(i)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((r,d)=>this[d]=r),this._$Et=void 0);let i=!1,s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var d;return(d=r.hostUpdate)===null||d===void 0?void 0:d.call(r)}),this.update(s)):this._$EU()}catch(r){throw i=!1,this._$EU(),r}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;(i=this._$Eg)===null||i===void 0||i.forEach(s=>{var r;return(r=s.hostUpdated)===null||r===void 0?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,s)=>this._$ES(s,this[s],i)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}};k.finalized=!0,k.elementProperties=new Map,k.elementStyles=[],k.shadowRootOptions={mode:"open"},Et?.({ReactiveElement:k}),((ht=globalThis.reactiveElementVersions)!==null&&ht!==void 0?ht:globalThis.reactiveElementVersions=[]).push("1.3.1");var ut,D=globalThis.trustedTypes,Tt=D?D.createPolicy("lit-html",{createHTML:a=>a}):void 0,L=`lit$${(Math.random()+"").slice(9)}$`,Ut="?"+L,ye=`<${Ut}>`,W=document,Y=(a="")=>W.createComment(a),G=a=>a===null||typeof a!="object"&&typeof a!="function",Pt=Array.isArray,we=a=>{var t;return Pt(a)||typeof((t=a)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ht=/-->/g,Mt=/>/g,O=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Rt=/'/g,kt=/"/g,zt=/^(?:script|style|textarea|title)$/i,Ot=a=>(t,...i)=>({_$litType$:a,strings:t,values:i}),N=Ot(1),Me=Ot(2),R=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Lt=new WeakMap,rt=(a,t,i)=>{var s,r;let d=(s=i?.renderBefore)!==null&&s!==void 0?s:t,c=d._$litPart$;if(c===void 0){let g=(r=i?.renderBefore)!==null&&r!==void 0?r:null;d._$litPart$=c=new q(t.insertBefore(Y(),g),g,void 0,i??{})}return c._$AI(a),c},V=W.createTreeWalker(W,129,null,!1),xe=(a,t)=>{let i=a.length-1,s=[],r,d=t===2?"<svg>":"",c=X;for(let u=0;u<i;u++){let m=a[u],T,$,y=-1,C=0;for(;C<m.length&&(c.lastIndex=C,$=c.exec(m),$!==null);)C=c.lastIndex,c===X?$[1]==="!--"?c=Ht:$[1]!==void 0?c=Mt:$[2]!==void 0?(zt.test($[2])&&(r=RegExp("</"+$[2],"g")),c=O):$[3]!==void 0&&(c=O):c===O?$[0]===">"?(c=r??X,y=-1):$[1]===void 0?y=-2:(y=c.lastIndex-$[2].length,T=$[1],c=$[3]===void 0?O:$[3]==='"'?kt:Rt):c===kt||c===Rt?c=O:c===Ht||c===Mt?c=X:(c=O,r=void 0);let H=c===O&&a[u+1].startsWith("/>")?" ":"";d+=c===X?m+ye:y>=0?(s.push(T),m.slice(0,y)+"$lit$"+m.slice(y)+L+H):m+L+(y===-2?(s.push(void 0),u):H)}let g=d+(a[i]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Tt!==void 0?Tt.createHTML(g):g,s]},j=class{constructor({strings:t,_$litType$:i},s){let r;this.parts=[];let d=0,c=0,g=t.length-1,u=this.parts,[m,T]=xe(t,i);if(this.el=j.createElement(m,s),V.currentNode=this.el.content,i===2){let $=this.el.content,y=$.firstChild;y.remove(),$.append(...y.childNodes)}for(;(r=V.nextNode())!==null&&u.length<g;){if(r.nodeType===1){if(r.hasAttributes()){let $=[];for(let y of r.getAttributeNames())if(y.endsWith("$lit$")||y.startsWith(L)){let C=T[c++];if($.push(y),C!==void 0){let H=r.getAttribute(C.toLowerCase()+"$lit$").split(L),U=/([.?@])?(.*)/.exec(C);u.push({type:1,index:d,name:U[2],strings:H,ctor:U[1]==="."?It:U[1]==="?"?Vt:U[1]==="@"?Dt:Q})}else u.push({type:6,index:d})}for(let y of $)r.removeAttribute(y)}if(zt.test(r.tagName)){let $=r.textContent.split(L),y=$.length-1;if(y>0){r.textContent=D?D.emptyScript:"";for(let C=0;C<y;C++)r.append($[C],Y()),V.nextNode(),u.push({type:2,index:++d});r.append($[y],Y())}}}else if(r.nodeType===8)if(r.data===Ut)u.push({type:2,index:d});else{let $=-1;for(;($=r.data.indexOf(L,$+1))!==-1;)u.push({type:7,index:d}),$+=L.length-1}d++}}static createElement(t,i){let s=W.createElement("template");return s.innerHTML=t,s}};function Z(a,t,i=a,s){var r,d,c,g;if(t===R)return t;let u=s!==void 0?(r=i._$Cl)===null||r===void 0?void 0:r[s]:i._$Cu,m=G(t)?void 0:t._$litDirective$;return u?.constructor!==m&&((d=u?._$AO)===null||d===void 0||d.call(u,!1),m===void 0?u=void 0:(u=new m(a),u._$AT(a,i,s)),s!==void 0?((c=(g=i)._$Cl)!==null&&c!==void 0?c:g._$Cl=[])[s]=u:i._$Cu=u),u!==void 0&&(t=Z(a,u._$AS(a,t.values),u,s)),t}var Bt=class{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;let{el:{content:s},parts:r}=this._$AD,d=((i=t?.creationScope)!==null&&i!==void 0?i:W).importNode(s,!0);V.currentNode=d;let c=V.nextNode(),g=0,u=0,m=r[0];for(;m!==void 0;){if(g===m.index){let T;m.type===2?T=new q(c,c.nextSibling,this,t):m.type===1?T=new m.ctor(c,m.name,m.strings,this,t):m.type===6&&(T=new Wt(c,this,t)),this.v.push(T),m=r[++u]}g!==m?.index&&(c=V.nextNode(),g++)}return d}m(t){let i=0;for(let s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}},q=class{constructor(t,i,s,r){var d;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=r,this._$Cg=(d=r?.isConnected)===null||d===void 0||d}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode,i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Z(this,t,i),G(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==R&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):we(t)?this.S(t):this.$(t)}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==x&&G(this._$AH)?this._$AA.nextSibling.data=t:this.k(W.createTextNode(t)),this._$AH=t}T(t){var i;let{values:s,_$litType$:r}=t,d=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=j.createElement(r.h,this.options)),r);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===d)this._$AH.m(s);else{let c=new Bt(d,this),g=c.p(this.options);c.m(s),this.k(g),this._$AH=c}}_$AC(t){let i=Lt.get(t.strings);return i===void 0&&Lt.set(t.strings,i=new j(t)),i}S(t){Pt(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,s,r=0;for(let d of t)r===i.length?i.push(s=new q(this.A(Y()),this.A(Y()),this,this.options)):s=i[r],s._$AI(d),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,i);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cg=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},Q=class{constructor(t,i,s,r,d){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=d,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,r){let d=this.strings,c=!1;if(d===void 0)t=Z(this,t,i,0),c=!G(t)||t!==this._$AH&&t!==R,c&&(this._$AH=t);else{let g=t,u,m;for(t=d[0],u=0;u<d.length-1;u++)m=Z(this,g[s+u],i,u),m===R&&(m=this._$AH[u]),c||(c=!G(m)||m!==this._$AH[u]),m===x?t=x:t!==x&&(t+=(m??"")+d[u+1]),this._$AH[u]=m}c&&!r&&this.C(t)}C(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},It=class extends Q{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===x?void 0:t}},be=D?D.emptyScript:"",Vt=class extends Q{constructor(){super(...arguments),this.type=4}C(t){t&&t!==x?this.element.setAttribute(this.name,be):this.element.removeAttribute(this.name)}},Dt=class extends Q{constructor(t,i,s,r,d){super(t,i,s,r,d),this.type=5}_$AI(t,i=this){var s;if((t=(s=Z(this,t,i,0))!==null&&s!==void 0?s:x)===R)return;let r=this._$AH,d=t===x&&r!==x||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,c=t!==x&&(r===x||d);d&&this.element.removeEventListener(this.name,this,r),c&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;typeof this._$AH=="function"?this._$AH.call((s=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},Wt=class{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}};var Nt=window.litHtmlPolyfillSupport;Nt?.(j,q),((ut=globalThis.litHtmlVersions)!==null&&ut!==void 0?ut:globalThis.litHtmlVersions=[]).push("2.2.0");var pt,mt;var tt=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;let s=super.createRenderRoot();return(t=(i=this.renderOptions).renderBefore)!==null&&t!==void 0||(i.renderBefore=s.firstChild),s}update(t){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=rt(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return R}};tt.finalized=!0,tt._$litElement$=!0,(pt=globalThis.litElementHydrateSupport)===null||pt===void 0||pt.call(globalThis,{LitElement:tt});var jt=globalThis.litElementPolyfillSupport;jt?.({LitElement:tt});((mt=globalThis.litElementVersions)!==null&&mt!==void 0?mt:globalThis.litElementVersions=[]).push("3.2.0");var Zt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qt=a=>(...t)=>({_$litDirective$:a,values:t}),vt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};var Kt=qt(class extends vt{constructor(a){var t;if(super(a),a.type!==Zt.ATTRIBUTE||a.name!=="style"||((t=a.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(a){return Object.keys(a).reduce((t,i)=>{let s=a[i];return s==null?t:t+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(a,[t]){let{style:i}=a.element;if(this.ct===void 0){this.ct=new Set;for(let s in t)this.ct.add(s);return this.render(t)}this.ct.forEach(s=>{t[s]==null&&(this.ct.delete(s),s.includes("-")?i.removeProperty(s):i[s]="")});for(let s in t){let r=t[s];r!=null&&(this.ct.add(s),s.includes("-")?i.setProperty(s,r):i[s]=r)}return R}});var Ft=N`<svg class="icon github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>`,Jt=N`<svg class="icon kiss-wink-heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 504 512"><path fill="currentColor" d="M501.1 402.5c-8-20.8-31.5-31.5-53.1-25.9l-8.4 2.2-2.3-8.4c-5.9-21.4-27-36.5-49-33-25.2 4-40.6 28.6-34 52.6l22.9 82.6c1.5 5.3 7 8.5 12.4 7.1l83-21.5c24.1-6.3 37.7-31.8 28.5-55.7zm-177.6-4c-5.6-20.3-2.3-42 9-59.7 29.7-46.3 98.7-45.5 127.8 4.3 6.4.1 12.6 1.4 18.6 2.9 10.9-27.9 17.1-58.2 17.1-90C496 119 385 8 248 8S0 119 0 256s111 248 248 248c35.4 0 68.9-7.5 99.4-20.9-.3-.7-23.9-84.6-23.9-84.6zM168 240c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm120 156c0 19.2-28.7 41.5-71.5 44-8.5.8-12.1-11.8-3.6-15.4l17-7.2c13-5.5 20.8-13.5 20.8-21.5s-7.8-16-20.8-21.5l-17-7.2c-6-2.5-5.7-12.3 0-14.8l17-7.2c13-5.5 20.8-13.5 20.8-21.5s-7.8-16-20.8-21.5l-17-7.2c-8.8-3.7-4.6-16.6 3.6-15.4 42.8 2.5 71.5 24.8 71.5 44 0 13-13.4 27.3-35.2 36C274.6 368.7 288 383 288 396zm16-179c-8.3 7.4-21.6.4-19.8-10.8 4-25.2 34.2-42.1 59.9-42.1S400 181 404 206.2c1.7 11.1-11.3 18.3-19.8 10.8l-9.5-8.5c-14.8-13.2-46.2-13.2-61 0L304 217z"/></svg>`;(()=>{var a,t=globalThis.trustedTypes,i=t?t.createPolicy("lit-html",{createHTML:e=>e}):void 0,s=`lit$${(Math.random()+"").slice(9)}$`,r="?"+s,d=`<${r}>`,c=document,g=(e="")=>c.createComment(e),u=e=>e===null||typeof e!="object"&&typeof e!="function",m=Array.isArray,T=e=>{var n;return m(e)||typeof((n=e)===null||n===void 0?void 0:n[Symbol.iterator])=="function"},$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y=/-->/g,C=/>/g,H=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,U=/'/g,_t=/"/g,$t=/^(?:script|style|textarea|title)$/i,gt=e=>(n,...o)=>({_$litType$:e,strings:n,values:o}),Yt=gt(1),K=gt(2),F=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),ft=new WeakMap,Gt=(e,n,o)=>{var l,h;let v=(l=o?.renderBefore)!==null&&l!==void 0?l:n,p=v._$litPart$;if(p===void 0){let f=(h=o?.renderBefore)!==null&&h!==void 0?h:null;v._$litPart$=p=new it(n.insertBefore(g(),f),f,void 0,o??{})}return p._$AI(e),p},B=c.createTreeWalker(c,129,null,!1),Qt=(e,n)=>{let o=e.length-1,l=[],h,v=n===2?"<svg>":"",p=$;for(let _=0;_<o;_++){let b=e[_],S,A,E=-1,J=0;for(;J<b.length&&(p.lastIndex=J,A=p.exec(b),A!==null);)J=p.lastIndex,p===$?A[1]==="!--"?p=y:A[1]!==void 0?p=C:A[2]!==void 0?($t.test(A[2])&&(h=RegExp("</"+A[2],"g")),p=H):A[3]!==void 0&&(p=H):p===H?A[0]===">"?(p=h??$,E=-1):A[1]===void 0?E=-2:(E=p.lastIndex-A[2].length,S=A[1],p=A[3]===void 0?H:A[3]==='"'?_t:U):p===_t||p===U?p=H:p===y||p===C?p=$:(p=H,h=void 0);let z=p===H&&e[_+1].startsWith("/>")?" ":"";v+=p===$?b+d:E>=0?(l.push(S),b.slice(0,E)+"$lit$"+b.slice(E)+s+z):b+s+(E===-2?(l.push(void 0),_):z)}let f=v+(e[o]||"<?>")+(n===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[i!==void 0?i.createHTML(f):f,l]},et=class{constructor({strings:e,_$litType$:n},o){let l;this.parts=[];let h=0,v=0,p=e.length-1,f=this.parts,[_,b]=Qt(e,n);if(this.el=et.createElement(_,o),B.currentNode=this.el.content,n===2){let S=this.el.content,A=S.firstChild;A.remove(),S.append(...A.childNodes)}for(;(l=B.nextNode())!==null&&f.length<p;){if(l.nodeType===1){if(l.hasAttributes()){let S=[];for(let A of l.getAttributeNames())if(A.endsWith("$lit$")||A.startsWith(s)){let E=b[v++];if(S.push(A),E!==void 0){let J=l.getAttribute(E.toLowerCase()+"$lit$").split(s),z=/([.?@])?(.*)/.exec(E);f.push({type:1,index:h,name:z[2],strings:J,ctor:z[1]==="."?ee:z[1]==="?"?se:z[1]==="@"?ne:st})}else f.push({type:6,index:h})}for(let A of S)l.removeAttribute(A)}if($t.test(l.tagName)){let S=l.textContent.split(s),A=S.length-1;if(A>0){l.textContent=t?t.emptyScript:"";for(let E=0;E<A;E++)l.append(S[E],g()),B.nextNode(),f.push({type:2,index:++h});l.append(S[A],g())}}}else if(l.nodeType===8)if(l.data===r)f.push({type:2,index:h});else{let S=-1;for(;(S=l.data.indexOf(s,S+1))!==-1;)f.push({type:7,index:h}),S+=s.length-1}h++}}static createElement(e,n){let o=c.createElement("template");return o.innerHTML=e,o}};function I(e,n,o=e,l){var h,v,p,f;if(n===F)return n;let _=l!==void 0?(h=o._$Cl)===null||h===void 0?void 0:h[l]:o._$Cu,b=u(n)?void 0:n._$litDirective$;return _?.constructor!==b&&((v=_?._$AO)===null||v===void 0||v.call(_,!1),b===void 0?_=void 0:(_=new b(e),_._$AT(e,o,l)),l!==void 0?((p=(f=o)._$Cl)!==null&&p!==void 0?p:f._$Cl=[])[l]=_:o._$Cu=_),_!==void 0&&(n=I(e,_._$AS(e,n.values),_,l)),n}var te=class{constructor(e,n){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var n;let{el:{content:o},parts:l}=this._$AD,h=((n=e?.creationScope)!==null&&n!==void 0?n:c).importNode(o,!0);B.currentNode=h;let v=B.nextNode(),p=0,f=0,_=l[0];for(;_!==void 0;){if(p===_.index){let b;_.type===2?b=new it(v,v.nextSibling,this,e):_.type===1?b=new _.ctor(v,_.name,_.strings,this,e):_.type===6&&(b=new oe(v,this,e)),this.v.push(b),_=l[++f]}p!==_?.index&&(v=B.nextNode(),p++)}return h}m(e){let n=0;for(let o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,n),n+=o.strings.length-2):o._$AI(e[n])),n++}},it=class{constructor(e,n,o,l){var h;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=o,this.options=l,this._$Cg=(h=l?.isConnected)===null||h===void 0||h}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cg}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=I(this,e,n),u(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==F&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):T(e)?this.S(e):this.$(e)}A(e,n=this._$AB){return this._$AA.parentNode.insertBefore(e,n)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==w&&u(this._$AH)?this._$AA.nextSibling.data=e:this.k(c.createTextNode(e)),this._$AH=e}T(e){var n;let{values:o,_$litType$:l}=e,h=typeof l=="number"?this._$AC(e):(l.el===void 0&&(l.el=et.createElement(l.h,this.options)),l);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===h)this._$AH.m(o);else{let v=new te(h,this),p=v.p(this.options);v.m(o),this.k(p),this._$AH=v}}_$AC(e){let n=ft.get(e.strings);return n===void 0&&ft.set(e.strings,n=new et(e)),n}S(e){m(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,o,l=0;for(let h of e)l===n.length?n.push(o=new it(this.A(g()),this.A(g()),this,this.options)):o=n[l],o._$AI(h),l++;l<n.length&&(this._$AR(o&&o._$AB.nextSibling,l),n.length=l)}_$AR(e=this._$AA.nextSibling,n){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,n);e&&e!==this._$AB;){let l=e.nextSibling;e.remove(),e=l}}setConnected(e){var n;this._$AM===void 0&&(this._$Cg=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},st=class{constructor(e,n,o,l,h){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=n,this._$AM=l,this.options=h,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,o,l){let h=this.strings,v=!1;if(h===void 0)e=I(this,e,n,0),v=!u(e)||e!==this._$AH&&e!==F,v&&(this._$AH=e);else{let p=e,f,_;for(e=h[0],f=0;f<h.length-1;f++)_=I(this,p[o+f],n,f),_===F&&(_=this._$AH[f]),v||(v=!u(_)||_!==this._$AH[f]),_===w?e=w:e!==w&&(e+=(_??"")+h[f+1]),this._$AH[f]=_}v&&!l&&this.C(e)}C(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ee=class extends st{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===w?void 0:e}},ie=t?t.emptyScript:"",se=class extends st{constructor(){super(...arguments),this.type=4}C(e){e&&e!==w?this.element.setAttribute(this.name,ie):this.element.removeAttribute(this.name)}},ne=class extends st{constructor(e,n,o,l,h){super(e,n,o,l,h),this.type=5}_$AI(e,n=this){var o;if((e=(o=I(this,e,n,0))!==null&&o!==void 0?o:w)===F)return;let l=this._$AH,h=e===w&&l!==w||e.capture!==l.capture||e.once!==l.once||e.passive!==l.passive,v=e!==w&&(l===w||h);h&&this.element.removeEventListener(this.name,this,l),v&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,o;typeof this._$AH=="function"?this._$AH.call((o=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}},oe=class{constructor(e,n,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}},re=window.litHtmlPolyfillSupport;re?.(et,it),((a=globalThis.litHtmlVersions)!==null&&a!==void 0?a:globalThis.litHtmlVersions=[]).push("2.2.0");var le=function(e){return e.sort((n,o)=>n.time<o.time?-1:n.time>o.time?1:0)},ae=function(e){if(e.length===0)throw new Error("sortedPoints must not be empty");return{min:e[0].time,max:e[e.length-1].time}},he=function(e){if(e.length===0)throw new Error("points must not be empty");let n=e.map(o=>o.value);return{min:Math.min(...n),max:Math.max(...n)}},ce=function(e,n,o,l,h,v){return e.map(p=>({time:P(p.time,n,{min:v,max:l-v}),value:P(p.value,o,{min:h-v,max:v})}))},de=function(e,n){let o=[];if(e.length===0)return o;let l=yt(e[0]);for(let h=1;h<e.length;h++){let v=yt(e[h]);v.time-l.time<n?l=ve(l,v):(o.push(l),l=v)}return o.push(l),o},At=function(...e){return{min:Math.min(...e.map(n=>n.min)),max:Math.max(...e.map(n=>n.max))}},ue=function(e){let n="";return e.forEach((o,l)=>{n=l===0?`M ${o.time},${o.value}`:`${n} L ${o.time},${o.value}`}),n},pe=function(e,n){let o=me(e,n);if(o===null)return null;let l=o[0],h=o[1];return{value:P(n,{min:l.time,max:h.time},{min:l.value,max:h.value}),range:{min:P(n,{min:l.time,max:h.time},{min:l.range.min,max:h.range.min}),max:P(n,{min:l.time,max:h.time},{min:l.range.max,max:h.range.max})}}},me=function(e,n){let o=0,l=e.length-1,h=Math.floor((o+l)/2);if(n<e[o].time||n>e[l].time)return null;for(;l-o>1;)n<e[h].time?(l=h,h=Math.floor((o+h)/2)):(o=h,h=Math.floor((l+h)/2));return[e[o],e[l]]},P=function(e,n,o){return n.max===n.min?(o.max+o.min)/2:(e-n.min)/(n.max-n.min)*(o.max-o.min)+o.min},yt=function(e){return{time:e.time,value:e.value,range:{min:e.value,max:e.value},hits:1}},ve=function(e,n){return{time:(e.time*e.hits+n.time*n.hits)/(e.hits+n.hits),value:(e.value*e.hits+n.value*n.hits)/(e.hits+n.hits),range:{min:Math.min(e.range.min,n.range.min),max:Math.max(e.range.max,n.range.max)},hits:e.hits+n.hits}},M=4,_e=4,$e="default",ge="#224",fe=class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.onResize=this.onResize.bind(this),this.onSelection=this.onSelection.bind(this),this.onLeaveSelection=this.onLeaveSelection.bind(this),this.series=[],this.scaledSeries=[],this.timeRange=null,this.unitRange=new Map,this.selectedTime=null,this.selectedValues=[],this.render()}connectedCallback(){window.addEventListener("resize",this.onResize,!1),this.addEventListener("mousemove",this.onSelection,!1),this.addEventListener("touchmove",this.onSelection,!1),this.addEventListener("mouseleave",this.onLeaveSelection,!1),this.addEventListener("touchend",this.onLeaveSelection,!1),this.adjust()}disconnectedCallback(){window.removeEventListener("resize",this.onResize,!1),this.removeEventListener("mousemove",this.onSelection,!1),this.removeEventListener("touchmove",this.onSelection,!1),this.removeEventListener("mouseleave",this.onLeaveSelection,!1),this.removeEventListener("touchend",this.onLeaveSelection,!1)}static get observedAttributes(){return[]}get data(){return this.series}set data(e){if(e==null||e.length===0||(this.series=e.filter(o=>o.points.length).map(o=>{var l;return{unit:((l=o.unit)==null?void 0:l.toLocaleLowerCase())||$e,color:o.color||ge,points:le(o.points)}}),this.series.length===0))return;let n=this.series.map(o=>ae(o.points));this.timeRange=At(...n),this.unitRange.clear(),this.series.forEach(o=>{let l=he(o.points),h=this.unitRange.get(o.unit);this.unitRange.set(o.unit,h===void 0?l:At(h,l))}),this.adjust()}adjust(){if(!this.clientHeight||!this.clientWidth){this.render();return}this.scaledSeries=this.series.map(e=>{let n=this.unitRange.get(e.unit);if(n===void 0||this.timeRange===null)throw new Error("onResize: unknown unit or timerange");let o=ce(e.points,this.timeRange,n,this.clientWidth,this.clientHeight,M);return{unit:e.unit,color:e.color,slots:de(o,_e)}}),this.render()}onResize(){this.adjust()}onSelection(e){if(this.hasAttribute("no-selection")||this.timeRange===null||(this.selectedTime=e instanceof MouseEvent?e.pageX-this.offsetLeft:e.touches[0].pageX-this.offsetLeft,this.selectedTime<M||this.selectedTime>this.clientWidth-M))return;this.selectedValues=this.scaledSeries.map(l=>this.selectedTime===null?null:pe(l.slots,this.selectedTime));let n=P(this.selectedTime,{min:M,max:this.clientWidth-M},this.timeRange),o=this.selectedValues.map((l,h)=>{let v=this.unitRange.get(this.series[h].unit);return l===null||v===void 0?null:P(l.value,{min:this.clientHeight-M,max:M},v)});this.dispatch("selected",{time:n,values:o}),this.render()}onLeaveSelection(){this.hasAttribute("no-selection")||(this.selectedValues=[],this.selectedTime=null,this.dispatch("selected",null),this.render())}dispatch(e,n){let o=new CustomEvent(`lit-line:${e}`,{composed:!0,detail:n});this.dispatchEvent(o)}render(){this.shadowRoot&&Gt(Yt`
          <svg viewBox="0 0 ${this.clientWidth} ${this.clientHeight}">
            ${this.scaledSeries.map(e=>K`
              <g class="serie">
                <path class="serie__path" stroke=${e.color} d="${ue(e.slots)}"/>
                ${e.slots.map(n=>K`
                    <g class="serie__point">
                    <line class="serie__point__bar" stroke=${e.color} x1="${n.time}" y1="${n.value}" x2="${n.time}" y2="${this.clientHeight-M}"/>
                    <rect class="serie__point__range"
                      ?highlight=${this.selectedTime&&Math.abs(this.selectedTime-n.time)<=2}
                      x="${n.time-2}" y="${n.range.min}"
                      width="4" height="${Math.abs(n.range.max-n.range.min)}"
                      fill=${e.color} stroke=${e.color}
                      rx="3" ry="3"/>
                    <circle class="serie__point__value"
                      stroke=${e.color} fill=${e.color} cx="${n.time}" cy="${n.value}" r="2"/>
                  </g>
                  `)}
              </g>
            `)}
            ${this.selectedTime&&K`
            <g class="selection">
              <line class="selection__time" x1="${this.selectedTime}" y1="${M}" x2="${this.selectedTime}" y2="${this.clientHeight-M}"/>
              ${this.selectedValues.map((e,n)=>e!==null?K`
                    <g class="selection__point">
                      <g class="selection__point__range">
                        <line class="selection__point__range__min" stroke="${this.series[n].color}" x1="${0}" y1="${e.range.min}" x2="${this.clientWidth}" y2="${e.range.min}"/>
                        <line class="selection__point__range__max" stroke="${this.series[n].color}" x1="${0}" y1="${e.range.max}" x2="${this.clientWidth}" y2="${e.range.max}"/>
                      </g>
                      <circle class="selection__point__value" stroke-width="2" stroke=${this.series[n].color} fill="transparent" cx="${this.selectedTime}" cy="${e.value}" r="3"/>
                    </g>
                  `:K``)}
            </g>
          `}
          </svg>
          <style>
            :host {
              display: block;
            }

            .serie__path {
              fill: transparent;
              stroke-width: 2;
              transition: 200ms all ease-in;
            }

            .serie__point__range {
              stroke-opacity: 0.6;
              fill-opacity: 0.4;
              transition: 200ms height ease-in;
            }

            .serie__point__range[highlight] {
              fill-opacity: 1;
            }

            .serie__point__bar {
              stroke-opacity: 0.4;
              stroke-width: 1;
              transition: 200ms height ease-in;
            }

            .selection__time {
              stroke-opacity: var(--lit-line-selected-time--opacity, 0.8);
              stroke-width: var(--lit-line-selected-time--width, 2);
              stroke: var(--lit-line-selected-time--color, black);
            }

            .selection__point__range__min {
              stroke-opacity: var(--lit-line-selected-value-min--opacity, 0.3);
              stroke-width: var(--lit-line-selected-value-min--width, 1);
            }

            .selection__point__range__max {
              stroke-opacity: var(--lit-line-selected-value-max--opacity, 0.3);
              stroke-width: var(--lit-line-selected-value-max--width, 1);
            }

            .selection__point__range__value {
              stroke-opacity: var(--lit-line-selected-value--opacity, 0.8);
              stroke-width: var(--lit-line-selected-value--width, 1);
            }
          </style>
        `,this.shadowRoot)}};window.customElements.define("lit-line",fe)})();var Xt=class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.selection=null,this.data=this.createDataSet(),this.selectedView=0,this.render()}connectedCallback(){this.selectView(1)}disconnectedCallback(){}selectView(t){switch(this.selectedView=t,t){case 1:this.data=[{color:"#fe7142",points:this.createRandom(500)}];break;case 2:this.data=[{color:"#68BB79",points:this.createSinusoid(300,0)},{color:"#9A57E8",points:this.createSinusoid(300,Math.PI)}];break}this.render()}createDataSet(){let t=Array.from({length:300},(i,s)=>({time:s,value:10*Math.sin(.1*s)}));return[{unit:"usd",color:"#591",points:t}]}createRandom(t){return Array.from({length:t},(i,s)=>({time:s,value:Math.floor(Math.random()*40)}))}createSinusoid(t,i){return Array.from({length:t},(s,r)=>({time:r,value:10*Math.sin(.04*r+i)}))}onSelection(t){this.selection=t.detail,this.render()}render(){this.shadowRoot&&rt(N`
          <header>
            <span class="header__logo">&lt;lit-line/&gt;</span>
            <a class="header__github" href="https://github.com/apinet/lit-line"
              >${Ft}</a
            >
          </header>

          <h1>
            <strong>{small, fast, responsive, interactive}</strong> svg line
            chart web component for <strong>modern website</strong>. That's it.
          </h1>

          <main>
            <nav class="nav">
              ${this.selection===null?N`
                    <button
                      class="nav__item"
                      ?selected=${this.selectedView===1}
                      @click=${()=>this.selectView(1)}
                    >
                      Random data
                    </button>
                    <button
                      class="nav__item"
                      ?selected=${this.selectedView===2}
                      @click=${()=>this.selectView(2)}
                    >
                      Multi lines
                    </button>
                  `:N`
                    <span class="nav__item">
                      index:
                      <span class="nav__item__time"
                        >${Math.round(this.selection.time)}</span
                      >
                      | values:
                      ${this.selection.values.map((t,i)=>N`<span
                            class="nav__item__value"
                            style=${Kt({color:this.data[i].color})}
                            >${t?Math.round(t):"--"}</span
                          >`)}
                    </span>
                  `}
            </nav>

            <lit-line
              @lit-line:selected=${t=>this.onSelection(t)}
              .data=${this.data}
            ></lit-line>
          </main>

          <footer>
            <span>
              Made with ${Jt} by
              <a href="https://twitter.com/AdrienForward">Adrien Pinet</a>
            </span>
          </footer>

          <style>
            :host {
              display: flex;
              flex-flow: column;
              justify-content: space-between;
              padding: 1em;
              min-height: calc(100vh - 2em);
              font-size: 1em;
            }

            .icon {
              height: 1em;
              width: 1em;
            }

            a {
              text-decoration: none;
              font-weight: 600;
              color: inherit;
            }

            a .icon {
              margin-right: 0.4em;
            }

            button {
              display: flex;
              align-items: center;
            }

            header {
              display: flex;
              justify-content: space-between;
              font-size: 1.4em;
            }

            .header__logo {
              font-weight: 600;
            }

            .header__github:hover {
              color: #668;
            }

            h1 {
              padding-left: 0.2em;
              color: #224;
              font-size: 1em;
              font-weight: 300;
            }

            nav {
              display: flex;
              flex-flow: row;
              justify-content: center;
              font-size: 1em;
              padding: 1em 0;
              margin-top: 2em 0 1em 0;
            }

            .nav__item {
              background-color: transparent;
              border: 2px solid transparent;
              padding: 0.5em;
              font-size: 1em;
            }

            .nav__item__time,
            .nav__item__value {
              padding: 0.2em 0.4em;
              border-radius: 0.2em;
              font-weight: 600;
            }

            .nav__item__value {
              color: white;
              margin: 0 0.2em;
            }

            .nav__item[selected] {
              border-color: black;
              font-weight: 600;
            }

            lit-line {
              width: 100%;
              height: 25vh;
              --lit-line-selected-time--color: #53a0e8;
              --lit-line-selected-time--width: 3;
            }

            footer {
              display: flex;
              padding: 2em 0;
              font-size: 0.8em;
              justify-content: flex-end;
              color: #556;
            }

            @media (min-height: 400px) {
              lit-line {
                height: 50vh;
              }
            }
            @media (min-height: 600px) {
              lit-line {
                height: 40vh;
              }
            }
          </style>
        `,this.shadowRoot)}};window.customElements.define("index-app",Xt);})();
/**
 * @license
 * Copyright (c) 2022, Adrien Pinet
 * Released under the MIT license
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
