"use strict";(()=>{var nt,it=window,W=it.trustedTypes,gt=W?W.createPolicy("lit-html",{createHTML:a=>a}):void 0,N=`lit$${(Math.random()+"").slice(9)}$`,Ht="?"+N,ne=`<${Ht}>`,O=document,J=(a="")=>O.createComment(a),K=a=>a===null||typeof a!="object"&&typeof a!="function",Mt=Array.isArray,le=a=>Mt(a)||typeof a?.[Symbol.iterator]=="function",G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,At=/-->/g,ft=/>/g,I=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yt=/'/g,xt=/"/g,Tt=/^(?:script|style|textarea|title)$/i,Et=a=>(e,...s)=>({_$litType$:a,strings:e,values:s}),k=Et(1),he=Et(2),B=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),wt=new WeakMap,j=O.createTreeWalker(O,129,null,!1),oe=(a,e)=>{let s=a.length-1,o=[],r,d=e===2?"<svg>":"",c=G;for(let u=0;u<s;u++){let _=a[u],E,$,f=-1,T=0;for(;T<_.length&&(c.lastIndex=T,$=c.exec(_),$!==null);)T=c.lastIndex,c===G?$[1]==="!--"?c=At:$[1]!==void 0?c=ft:$[2]!==void 0?(Tt.test($[2])&&(r=RegExp("</"+$[2],"g")),c=I):$[3]!==void 0&&(c=I):c===I?$[0]===">"?(c=r??G,f=-1):$[1]===void 0?f=-2:(f=c.lastIndex-$[2].length,E=$[1],c=$[3]===void 0?I:$[3]==='"'?xt:yt):c===xt||c===yt?c=I:c===At||c===ft?c=G:(c=I,r=void 0);let L=c===I&&a[u+1].startsWith("/>")?" ":"";d+=c===G?_+ne:f>=0?(o.push(E),_.slice(0,f)+"$lit$"+_.slice(f)+N+L):_+N+(f===-2?(o.push(void 0),u):L)}let y=d+(a[s]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return[gt!==void 0?gt.createHTML(y):y,o]},P=class{constructor({strings:e,_$litType$:s},o){let r;this.parts=[];let d=0,c=0,y=e.length-1,u=this.parts,[_,E]=oe(e,s);if(this.el=P.createElement(_,o),j.currentNode=this.el.content,s===2){let $=this.el.content,f=$.firstChild;f.remove(),$.append(...f.childNodes)}for(;(r=j.nextNode())!==null&&u.length<y;){if(r.nodeType===1){if(r.hasAttributes()){let $=[];for(let f of r.getAttributeNames())if(f.endsWith("$lit$")||f.startsWith(N)){let T=E[c++];if($.push(f),T!==void 0){let L=r.getAttribute(T.toLowerCase()+"$lit$").split(N),S=/([.?@])?(.*)/.exec(T);u.push({type:1,index:d,name:S[2],strings:L,ctor:S[1]==="."?ot:S[1]==="?"?rt:S[1]==="@"?ht:F})}else u.push({type:6,index:d})}for(let f of $)r.removeAttribute(f)}if(Tt.test(r.tagName)){let $=r.textContent.split(N),f=$.length-1;if(f>0){r.textContent=W?W.emptyScript:"";for(let T=0;T<f;T++)r.append($[T],J()),j.nextNode(),u.push({type:2,index:++d});r.append($[f],J())}}}else if(r.nodeType===8)if(r.data===Ht)u.push({type:2,index:d});else{let $=-1;for(;($=r.data.indexOf(N,$+1))!==-1;)u.push({type:7,index:d}),$+=N.length-1}d++}}static createElement(e,s){let o=O.createElement("template");return o.innerHTML=e,o}};function Z(a,e,s=a,o){var r,d,c,y;if(e===B)return e;let u=o!==void 0?(r=s._$Co)===null||r===void 0?void 0:r[o]:s._$Cl,_=K(e)?void 0:e._$litDirective$;return u?.constructor!==_&&((d=u?._$AO)===null||d===void 0||d.call(u,!1),_===void 0?u=void 0:(u=new _(a),u._$AT(a,s,o)),o!==void 0?((c=(y=s)._$Co)!==null&&c!==void 0?c:y._$Co=[])[o]=u:s._$Cl=u),u!==void 0&&(e=Z(a,u._$AS(a,e.values),u,o)),e}var lt=class{constructor(e,s){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var s;let{el:{content:o},parts:r}=this._$AD,d=((s=e?.creationScope)!==null&&s!==void 0?s:O).importNode(o,!0);j.currentNode=d;let c=j.nextNode(),y=0,u=0,_=r[0];for(;_!==void 0;){if(y===_.index){let E;_.type===2?E=new V(c,c.nextSibling,this,e):_.type===1?E=new _.ctor(c,_.name,_.strings,this,e):_.type===6&&(E=new at(c,this,e)),this.u.push(E),_=r[++u]}y!==_?.index&&(c=j.nextNode(),y++)}return d}p(e){let s=0;for(let o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,s),s+=o.strings.length-2):o._$AI(e[s])),s++}},V=class{constructor(e,s,o,r){var d;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=o,this.options=r,this._$Cm=(d=r?.isConnected)===null||d===void 0||d}get _$AU(){var e,s;return(s=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&s!==void 0?s:this._$Cm}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=Z(this,e,s),K(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==B&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):le(e)?this.k(e):this.g(e)}O(e,s=this._$AB){return this._$AA.parentNode.insertBefore(e,s)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==w&&K(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){var s;let{values:o,_$litType$:r}=e,d=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=P.createElement(r.h,this.options)),r);if(((s=this._$AH)===null||s===void 0?void 0:s._$AD)===d)this._$AH.p(o);else{let c=new lt(d,this),y=c.v(this.options);c.p(o),this.T(y),this._$AH=c}}_$AC(e){let s=wt.get(e.strings);return s===void 0&&wt.set(e.strings,s=new P(e)),s}k(e){Mt(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,o,r=0;for(let d of e)r===s.length?s.push(o=new V(this.O(J()),this.O(J()),this,this.options)):o=s[r],o._$AI(d),r++;r<s.length&&(this._$AR(o&&o._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,s);e&&e!==this._$AB;){let r=e.nextSibling;e.remove(),e=r}}setConnected(e){var s;this._$AM===void 0&&(this._$Cm=e,(s=this._$AP)===null||s===void 0||s.call(this,e))}},F=class{constructor(e,s,o,r,d){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=d,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,s=this,o,r){let d=this.strings,c=!1;if(d===void 0)e=Z(this,e,s,0),c=!K(e)||e!==this._$AH&&e!==B,c&&(this._$AH=e);else{let y=e,u,_;for(e=d[0],u=0;u<d.length-1;u++)_=Z(this,y[o+u],s,u),_===B&&(_=this._$AH[u]),c||(c=!K(_)||_!==this._$AH[u]),_===w?e=w:e!==w&&(e+=(_??"")+d[u+1]),this._$AH[u]=_}c&&!r&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ot=class extends F{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}},re=W?W.emptyScript:"",rt=class extends F{constructor(){super(...arguments),this.type=4}j(e){e&&e!==w?this.element.setAttribute(this.name,re):this.element.removeAttribute(this.name)}},ht=class extends F{constructor(e,s,o,r,d){super(e,s,o,r,d),this.type=5}_$AI(e,s=this){var o;if((e=(o=Z(this,e,s,0))!==null&&o!==void 0?o:w)===B)return;let r=this._$AH,d=e===w&&r!==w||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,c=e!==w&&(r===w||d);d&&this.element.removeEventListener(this.name,this,r),c&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s,o;typeof this._$AH=="function"?this._$AH.call((o=(s=this.options)===null||s===void 0?void 0:s.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}},at=class{constructor(e,s,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}};var bt=it.litHtmlPolyfillSupport;bt?.(P,V),((nt=it.litHtmlVersions)!==null&&nt!==void 0?nt:it.litHtmlVersions=[]).push("2.5.0");var St=(a,e,s)=>{var o,r;let d=(o=s?.renderBefore)!==null&&o!==void 0?o:e,c=d._$litPart$;if(c===void 0){let y=(r=s?.renderBefore)!==null&&r!==void 0?r:null;d._$litPart$=c=new V(e.insertBefore(J(),y),y,void 0,s??{})}return c._$AI(a),c};var Ct={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Nt=a=>(...e)=>({_$litDirective$:a,values:e}),st=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,o){this._$Ct=e,this._$AM=s,this._$Ci=o}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}};var kt=Nt(class extends st{constructor(a){var e;if(super(a),a.type!==Ct.ATTRIBUTE||a.name!=="style"||((e=a.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(a){return Object.keys(a).reduce((e,s)=>{let o=a[s];return o==null?e:e+`${s=s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(a,[e]){let{style:s}=a.element;if(this.vt===void 0){this.vt=new Set;for(let o in e)this.vt.add(o);return this.render(e)}this.vt.forEach(o=>{e[o]==null&&(this.vt.delete(o),o.includes("-")?s.removeProperty(o):s[o]="")});for(let o in e){let r=e[o];r!=null&&(this.vt.add(o),o.includes("-")?s.setProperty(o,r):s[o]=r)}return B}});var Lt=k`<svg
  class="icon github"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 496 512"
>
  <path
    fill="currentColor"
    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
  />
</svg>`,Rt=k`<svg
  class="icon kiss-wink-heart"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 504 512"
>
  <path
    fill="currentColor"
    d="M501.1 402.5c-8-20.8-31.5-31.5-53.1-25.9l-8.4 2.2-2.3-8.4c-5.9-21.4-27-36.5-49-33-25.2 4-40.6 28.6-34 52.6l22.9 82.6c1.5 5.3 7 8.5 12.4 7.1l83-21.5c24.1-6.3 37.7-31.8 28.5-55.7zm-177.6-4c-5.6-20.3-2.3-42 9-59.7 29.7-46.3 98.7-45.5 127.8 4.3 6.4.1 12.6 1.4 18.6 2.9 10.9-27.9 17.1-58.2 17.1-90C496 119 385 8 248 8S0 119 0 256s111 248 248 248c35.4 0 68.9-7.5 99.4-20.9-.3-.7-23.9-84.6-23.9-84.6zM168 240c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm120 156c0 19.2-28.7 41.5-71.5 44-8.5.8-12.1-11.8-3.6-15.4l17-7.2c13-5.5 20.8-13.5 20.8-21.5s-7.8-16-20.8-21.5l-17-7.2c-6-2.5-5.7-12.3 0-14.8l17-7.2c13-5.5 20.8-13.5 20.8-21.5s-7.8-16-20.8-21.5l-17-7.2c-8.8-3.7-4.6-16.6 3.6-15.4 42.8 2.5 71.5 24.8 71.5 44 0 13-13.4 27.3-35.2 36C274.6 368.7 288 383 288 396zm16-179c-8.3 7.4-21.6.4-19.8-10.8 4-25.2 34.2-42.1 59.9-42.1S400 181 404 206.2c1.7 11.1-11.3 18.3-19.8 10.8l-9.5-8.5c-14.8-13.2-46.2-13.2-61 0L304 217z"
  />
</svg>`;(()=>{var a,e=window,s=e.trustedTypes,o=s?s.createPolicy("lit-html",{createHTML:t=>t}):void 0,r=`lit$${(Math.random()+"").slice(9)}$`,d="?"+r,c=`<${d}>`,y=document,u=(t="")=>y.createComment(t),_=t=>t===null||typeof t!="object"&&typeof t!="function",E=Array.isArray,$=t=>E(t)||typeof t?.[Symbol.iterator]=="function",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,L=/>/g,S=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dt=/'/g,ut=/"/g,mt=/^(?:script|style|textarea|title)$/i,vt=t=>(i,...n)=>({_$litType$:t,strings:i,values:n}),zt=vt(1),X=vt(2),Y=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),_t=new WeakMap,U=y.createTreeWalker(y,129,null,!1),It=(t,i)=>{let n=t.length-1,l=[],h,v=i===2?"<svg>":"",m=f;for(let p=0;p<n;p++){let b=t[p],H,A,M=-1,q=0;for(;q<b.length&&(m.lastIndex=q,A=m.exec(b),A!==null);)q=m.lastIndex,m===f?A[1]==="!--"?m=T:A[1]!==void 0?m=L:A[2]!==void 0?(mt.test(A[2])&&(h=RegExp("</"+A[2],"g")),m=S):A[3]!==void 0&&(m=S):m===S?A[0]===">"?(m=h??f,M=-1):A[1]===void 0?M=-2:(M=m.lastIndex-A[2].length,H=A[1],m=A[3]===void 0?S:A[3]==='"'?ut:dt):m===ut||m===dt?m=S:m===T||m===L?m=f:(m=S,h=void 0);let z=m===S&&t[p+1].startsWith("/>")?" ":"";v+=m===f?b+c:M>=0?(l.push(H),b.slice(0,M)+"$lit$"+b.slice(M)+r+z):b+r+(M===-2?(l.push(void 0),p):z)}let g=v+(t[n]||"<?>")+(i===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[o!==void 0?o.createHTML(g):g,l]},Q=class{constructor({strings:t,_$litType$:i},n){let l;this.parts=[];let h=0,v=0,m=t.length-1,g=this.parts,[p,b]=It(t,i);if(this.el=Q.createElement(p,n),U.currentNode=this.el.content,i===2){let H=this.el.content,A=H.firstChild;A.remove(),H.append(...A.childNodes)}for(;(l=U.nextNode())!==null&&g.length<m;){if(l.nodeType===1){if(l.hasAttributes()){let H=[];for(let A of l.getAttributeNames())if(A.endsWith("$lit$")||A.startsWith(r)){let M=b[v++];if(H.push(A),M!==void 0){let q=l.getAttribute(M.toLowerCase()+"$lit$").split(r),z=/([.?@])?(.*)/.exec(M);g.push({type:1,index:h,name:z[2],strings:q,ctor:z[1]==="."?Pt:z[1]==="?"?Ut:z[1]==="@"?Dt:et})}else g.push({type:6,index:h})}for(let A of H)l.removeAttribute(A)}if(mt.test(l.tagName)){let H=l.textContent.split(r),A=H.length-1;if(A>0){l.textContent=s?s.emptyScript:"";for(let M=0;M<A;M++)l.append(H[M],u()),U.nextNode(),g.push({type:2,index:++h});l.append(H[A],u())}}}else if(l.nodeType===8)if(l.data===d)g.push({type:2,index:h});else{let H=-1;for(;(H=l.data.indexOf(r,H+1))!==-1;)g.push({type:7,index:h}),H+=r.length-1}h++}}static createElement(t,i){let n=y.createElement("template");return n.innerHTML=t,n}};function D(t,i,n=t,l){var h,v,m,g;if(i===Y)return i;let p=l!==void 0?(h=n._$Co)===null||h===void 0?void 0:h[l]:n._$Cl,b=_(i)?void 0:i._$litDirective$;return p?.constructor!==b&&((v=p?._$AO)===null||v===void 0||v.call(p,!1),b===void 0?p=void 0:(p=new b(t),p._$AT(t,n,l)),l!==void 0?((m=(g=n)._$Co)!==null&&m!==void 0?m:g._$Co=[])[l]=p:n._$Cl=p),p!==void 0&&(i=D(t,p._$AS(t,i.values),p,l)),i}var Bt=class{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;let{el:{content:n},parts:l}=this._$AD,h=((i=t?.creationScope)!==null&&i!==void 0?i:y).importNode(n,!0);U.currentNode=h;let v=U.nextNode(),m=0,g=0,p=l[0];for(;p!==void 0;){if(m===p.index){let b;p.type===2?b=new tt(v,v.nextSibling,this,t):p.type===1?b=new p.ctor(v,p.name,p.strings,this,t):p.type===6&&(b=new jt(v,this,t)),this.u.push(b),p=l[++g]}m!==p?.index&&(v=U.nextNode(),m++)}return h}p(t){let i=0;for(let n of this.u)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}},tt=class{constructor(t,i,n,l){var h;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=l,this._$Cm=(h=l?.isConnected)===null||h===void 0||h}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode,i=this._$AM;return i!==void 0&&t.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=D(this,t,i),_(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==Y&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):$(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==x&&_(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){var i;let{values:n,_$litType$:l}=t,h=typeof l=="number"?this._$AC(t):(l.el===void 0&&(l.el=Q.createElement(l.h,this.options)),l);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===h)this._$AH.p(n);else{let v=new Bt(h,this),m=v.v(this.options);v.p(n),this.T(m),this._$AH=v}}_$AC(t){let i=_t.get(t.strings);return i===void 0&&_t.set(t.strings,i=new Q(t)),i}k(t){E(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,n,l=0;for(let h of t)l===i.length?i.push(n=new tt(this.O(u()),this.O(u()),this,this.options)):n=i[l],n._$AI(h),l++;l<i.length&&(this._$AR(n&&n._$AB.nextSibling,l),i.length=l)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,i);t&&t!==this._$AB;){let l=t.nextSibling;t.remove(),t=l}}setConnected(t){var i;this._$AM===void 0&&(this._$Cm=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},et=class{constructor(t,i,n,l,h){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=i,this._$AM=l,this.options=h,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,n,l){let h=this.strings,v=!1;if(h===void 0)t=D(this,t,i,0),v=!_(t)||t!==this._$AH&&t!==Y,v&&(this._$AH=t);else{let m=t,g,p;for(t=h[0],g=0;g<h.length-1;g++)p=D(this,m[n+g],i,g),p===Y&&(p=this._$AH[g]),v||(v=!_(p)||p!==this._$AH[g]),p===x?t=x:t!==x&&(t+=(p??"")+h[g+1]),this._$AH[g]=p}v&&!l&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Pt=class extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}},Vt=s?s.emptyScript:"",Ut=class extends et{constructor(){super(...arguments),this.type=4}j(t){t&&t!==x?this.element.setAttribute(this.name,Vt):this.element.removeAttribute(this.name)}},Dt=class extends et{constructor(t,i,n,l,h){super(t,i,n,l,h),this.type=5}_$AI(t,i=this){var n;if((t=(n=D(this,t,i,0))!==null&&n!==void 0?n:x)===Y)return;let l=this._$AH,h=t===x&&l!==x||t.capture!==l.capture||t.once!==l.once||t.passive!==l.passive,v=t!==x&&(l===x||h);h&&this.element.removeEventListener(this.name,this,l),v&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,n;typeof this._$AH=="function"?this._$AH.call((n=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}},jt=class{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}},Wt=e.litHtmlPolyfillSupport;Wt?.(Q,tt),((a=e.litHtmlVersions)!==null&&a!==void 0?a:e.litHtmlVersions=[]).push("2.5.0");var Ot=(t,i,n)=>{var l,h;let v=(l=n?.renderBefore)!==null&&l!==void 0?l:i,m=v._$litPart$;if(m===void 0){let g=(h=n?.renderBefore)!==null&&h!==void 0?h:null;v._$litPart$=m=new tt(i.insertBefore(u(),g),g,void 0,n??{})}return m._$AI(t),m},Zt=function(t){return t.sort((i,n)=>i.time<n.time?-1:i.time>n.time?1:0)},Ft=function(t){if(t.length===0)throw new Error("sortedPoints must not be empty");return{min:t[0].time,max:t[t.length-1].time}},Xt=function(t){if(t.length===0)throw new Error("points must not be empty");let i=t.map(n=>n.value);return{min:Math.min(...i),max:Math.max(...i)}},Yt=function(t,i,n,l,h,v){return t.map(m=>({time:R(m.time,i,{min:v,max:l-v}),value:R(m.value,n,{min:h-v,max:v})}))},qt=function(t,i){let n=[];if(t.length===0)return n;let l=$t(t[0]);for(let h=1;h<t.length;h++){let v=$t(t[h]);v.time-l.time<i?l=Qt(l,v):(n.push(l),l=v)}return n.push(l),n},pt=function(...t){return{min:Math.min(...t.map(i=>i.min)),max:Math.max(...t.map(i=>i.max))}},Gt=function(t){let i="";return t.forEach((n,l)=>{i=l===0?`M ${n.time},${n.value}`:`${i} L ${n.time},${n.value}`}),i},Jt=function(t,i){let n=Kt(t,i);if(n===null)return null;let l=n[0],h=n[1];return{value:R(i,{min:l.time,max:h.time},{min:l.value,max:h.value}),range:{min:R(i,{min:l.time,max:h.time},{min:l.range.min,max:h.range.min}),max:R(i,{min:l.time,max:h.time},{min:l.range.max,max:h.range.max})}}},Kt=function(t,i){let n=0,l=t.length-1,h=Math.floor((n+l)/2);if(i<t[n].time||i>t[l].time)return null;for(;l-n>1;)i<t[h].time?(l=h,h=Math.floor((n+h)/2)):(n=h,h=Math.floor((l+h)/2));return[t[n],t[l]]},R=function(t,i,n){return i.max===i.min?(n.max+n.min)/2:(t-i.min)/(i.max-i.min)*(n.max-n.min)+n.min},$t=function(t){return{time:t.time,value:t.value,range:{min:t.value,max:t.value},hits:1}},Qt=function(t,i){return{time:(t.time*t.hits+i.time*i.hits)/(t.hits+i.hits),value:(t.value*t.hits+i.value*i.hits)/(t.hits+i.hits),range:{min:Math.min(t.range.min,i.range.min),max:Math.max(t.range.max,i.range.max)},hits:t.hits+i.hits}},C=4,te=4,ee="default",ie="#224",se=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.onResize=this.onResize.bind(this),this.onSelection=this.onSelection.bind(this),this.onLeaveSelection=this.onLeaveSelection.bind(this),this.series=[],this.scaledSeries=[],this.timeRange=null,this.unitRange=new Map,this.selectedTime=null,this.selectedValues=[],this.render()}connectedCallback(){window.addEventListener("resize",this.onResize,!1),this.addEventListener("mousemove",this.onSelection,!1),this.addEventListener("touchmove",this.onSelection,!1),this.addEventListener("mouseleave",this.onLeaveSelection,!1),this.addEventListener("touchend",this.onLeaveSelection,!1),this.adjust()}disconnectedCallback(){window.removeEventListener("resize",this.onResize,!1),this.removeEventListener("mousemove",this.onSelection,!1),this.removeEventListener("touchmove",this.onSelection,!1),this.removeEventListener("mouseleave",this.onLeaveSelection,!1),this.removeEventListener("touchend",this.onLeaveSelection,!1)}static get observedAttributes(){return[]}get data(){return this.series}set data(t){if(t==null||t.length===0||(this.series=t.filter(n=>n.points.length).map(n=>{var l;return{unit:((l=n.unit)==null?void 0:l.toLocaleLowerCase())||ee,color:n.color||ie,points:Zt(n.points)}}),this.series.length===0))return;let i=this.series.map(n=>Ft(n.points));this.timeRange=pt(...i),this.unitRange.clear(),this.series.forEach(n=>{let l=Xt(n.points),h=this.unitRange.get(n.unit);this.unitRange.set(n.unit,h===void 0?l:pt(h,l))}),this.adjust()}adjust(){if(!this.clientHeight||!this.clientWidth){this.render();return}this.scaledSeries=this.series.map(t=>{let i=this.unitRange.get(t.unit);if(i===void 0||this.timeRange===null)throw new Error("onResize: unknown unit or timerange");let n=Yt(t.points,this.timeRange,i,this.clientWidth,this.clientHeight,C);return{unit:t.unit,color:t.color,slots:qt(n,te)}}),this.render()}onResize(){this.adjust()}onSelection(t){if(this.hasAttribute("no-selection")||this.timeRange===null||(this.selectedTime=t instanceof MouseEvent?t.pageX-this.offsetLeft:t.touches[0].pageX-this.offsetLeft,this.selectedTime<C||this.selectedTime>this.clientWidth-C))return;this.selectedValues=this.scaledSeries.map(l=>this.selectedTime===null?null:Jt(l.slots,this.selectedTime));let i=R(this.selectedTime,{min:C,max:this.clientWidth-C},this.timeRange),n=this.selectedValues.map((l,h)=>{let v=this.unitRange.get(this.series[h].unit);return l===null||v===void 0?null:R(l.value,{min:this.clientHeight-C,max:C},v)});this.dispatch("selected",{time:i,values:n}),this.render()}onLeaveSelection(){this.hasAttribute("no-selection")||(this.selectedValues=[],this.selectedTime=null,this.dispatch("selected",null),this.render())}dispatch(t,i){let n=new CustomEvent(`lit-line:${t}`,{composed:!0,detail:i});this.dispatchEvent(n)}render(){this.shadowRoot&&Ot(zt`
          <svg viewBox="0 0 ${this.clientWidth} ${this.clientHeight}">
            ${this.scaledSeries.map(t=>X`
                <g class="serie">
                  <path class="serie__path" stroke=${t.color} d="${Gt(t.slots)}"/>
                  ${t.slots.map(i=>X`
                      <g class="serie__point">
                      <line class="serie__point__bar" stroke=${t.color} x1="${i.time}" y1="${i.value}" x2="${i.time}" y2="${this.clientHeight-C}"/>
                      <rect class="serie__point__range"
                        ?highlight=${this.selectedTime&&Math.abs(this.selectedTime-i.time)<=2}
                        x="${i.time-2}" y="${i.range.min}"
                        width="4" height="${Math.abs(i.range.max-i.range.min)}"
                        fill=${t.color} stroke=${t.color}
                        rx="3" ry="3"/>
                      <circle class="serie__point__value"
                        stroke=${t.color} fill=${t.color} cx="${i.time}" cy="${i.value}" r="2"/>
                    </g>
                    `)}
                </g>
              `)}
            ${this.selectedTime&&X`
              <g class="selection">
                <line class="selection__time" x1="${this.selectedTime}" y1="${C}" x2="${this.selectedTime}" y2="${this.clientHeight-C}"/>
                ${this.selectedValues.map((t,i)=>t!==null?X`
                      <g class="selection__point">
                        <g class="selection__point__range">
                          <line class="selection__point__range__min" stroke="${this.series[i].color}" x1="${0}" y1="${t.range.min}" x2="${this.clientWidth}" y2="${t.range.min}"/>
                          <line class="selection__point__range__max" stroke="${this.series[i].color}" x1="${0}" y1="${t.range.max}" x2="${this.clientWidth}" y2="${t.range.max}"/>
                        </g>
                        <circle class="selection__point__value" stroke-width="2" stroke=${this.series[i].color} fill="transparent" cx="${this.selectedTime}" cy="${t.value}" r="3"/>
                      </g>
                    `:X``)}
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
        `,this.shadowRoot)}};customElements.get("lit-line")||window.customElements.define("lit-line",se)})();var ct=class extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.selection=null,this.data=this.createDataSet(),this.selectedView=0,this.render()}connectedCallback(){this.selectView(1)}disconnectedCallback(){}selectView(s){switch(this.selectedView=s,s){case 1:this.data=[{color:"#fe7142",points:this.createRandom(500)}];break;case 2:this.data=[{color:"#68bb79",points:this.createSinusoid(300,0)},{color:"#9a57e8",points:this.createSinusoid(300,Math.PI)}];break}this.render()}createDataSet(){return[{unit:"usd",color:"#591",points:Array.from({length:300},(o,r)=>({time:r,value:10*Math.sin(.1*r)}))}]}createRandom(s){return Array.from({length:s},(o,r)=>({time:r,value:Math.floor(Math.random()*40)}))}createSinusoid(s,o){return Array.from({length:s},(r,d)=>({time:d,value:10*Math.sin(.04*d+o)}))}onSelection(s){this.selection=s.detail,this.render()}render(){this.shadowRoot&&St(k`
          <header>
            <span class="header__logo">&lt;lit-line/&gt;</span>
            <a class="header__github" href="https://github.com/apinet/lit-line"
              >${Lt}</a
            >
          </header>

          <h1>
            <strong>{small, fast, responsive, interactive}</strong> svg line
            chart web component for <strong>modern website</strong>. That's it.
          </h1>

          <main>
            <nav class="nav">
              ${this.selection===null?k`
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
                  `:k`
                    <span class="nav__item">
                      index:
                      <span class="nav__item__time"
                        >${Math.round(this.selection.time)}</span
                      >
                      | values:
                      ${this.selection.values.map((s,o)=>k`<span
                            class="nav__item__value"
                            style=${kt({color:this.data[o].color})}
                            >${s?Math.round(s):"--"}</span
                          >`)}
                    </span>
                  `}
            </nav>

            <lit-line
              @lit-line:selected=${s=>this.onSelection(s)}
              .data=${this.data}
            ></lit-line>
          </main>

          <footer>
            <span>
              Made with ${Rt} by
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
              align-items: center;
              font-size: 1em;
              min-height: 3em;
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
        `,this.shadowRoot)}};window.customElements.define("index-app",ct);})();
/*! Bundled license information:

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-line/dist/lit-line.js:
  (**
   * @license
   * Copyright (c) 2022, Adrien Pinet
   * Released under the MIT license
   *)
  (*! Bundled license information:
  
  lit-html/lit-html.js:
    (**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  *)
*/
