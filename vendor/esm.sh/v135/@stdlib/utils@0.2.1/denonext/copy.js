/* esm.sh - esbuild bundle(@stdlib/utils@0.2.1/copy) denonext production */
import * as __0$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array.js";
import * as __1$ from "/v135/@stdlib/assert@0.2.1/denonext/is-nonnegative-integer.js";
import * as __2$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __3$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
import * as __4$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
import * as __5$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array.js";
import * as __6$ from "/v135/@stdlib/assert@0.2.1/denonext/is-buffer.js";
import * as __7$ from "/v135/@stdlib/assert@0.2.1/denonext/is-error.js";
import * as __8$ from "/v135/@stdlib/buffer@0.2.1/denonext/from-buffer.js";
import * as __9$ from "/v135/@stdlib/array@0.2.1/denonext/int8.js";
import * as __a$ from "/v135/@stdlib/array@0.2.1/denonext/uint8.js";
import * as __b$ from "/v135/@stdlib/array@0.2.1/denonext/uint8c.js";
import * as __c$ from "/v135/@stdlib/array@0.2.1/denonext/int16.js";
import * as __d$ from "/v135/@stdlib/array@0.2.1/denonext/uint16.js";
import * as __e$ from "/v135/@stdlib/array@0.2.1/denonext/int32.js";
import * as __f$ from "/v135/@stdlib/array@0.2.1/denonext/uint32.js";
import * as __10$ from "/v135/@stdlib/array@0.2.1/denonext/float32.js";
import * as __11$ from "/v135/@stdlib/array@0.2.1/denonext/float64.js";
import * as __12$ from "/v135/@stdlib/regexp@0.2.1/denonext/function-name.js";
import * as __13$ from "/v135/@stdlib/assert@0.2.1/denonext/is-buffer.js";
import * as __14$ from "/v135/@stdlib/assert@0.2.1/denonext/has-tostringtag-support.js";
import * as __15$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __16$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
import * as __17$ from "/v135/@stdlib/object@0.2.1/denonext/ctor.js";
import * as __18$ from "/v135/@stdlib/assert@0.2.1/denonext/is-string.js";
import * as __19$ from "/v135/@stdlib/regexp@0.2.1/denonext/regexp.js";
import * as __1a$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __1b$ from "/v135/@stdlib/assert@0.2.1/denonext/is-function.js";
import * as __1c$ from "/v135/@stdlib/assert@0.2.1/denonext/is-object-like.js";
import * as __1d$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
import * as __1e$ from "/v135/@stdlib/assert@0.2.1/denonext/is-arguments.js";
import * as __1f$ from "/v135/@stdlib/symbol@0.2.1/denonext/ctor.js";
import * as __20$ from "/v135/@stdlib/assert@0.2.1/denonext/is-arguments.js";
import * as __21$ from "/v135/@stdlib/assert@0.2.1/denonext/is-enumerable-property.js";
import * as __22$ from "/v135/@stdlib/assert@0.2.1/denonext/is-boolean.js";
import * as __23$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __24$ from "/v135/@stdlib/assert@0.2.1/denonext/is-enumerable-property.js";
import * as __25$ from "/v135/@stdlib/assert@0.2.1/denonext/is-nan.js";
import * as __26$ from "/v135/@stdlib/object@0.2.1/denonext/ctor.js";
import * as __27$ from "/v135/@stdlib/assert@0.2.1/denonext/is-collection.js";
import * as __28$ from "/v135/@stdlib/assert@0.2.1/denonext/is-string.js";
import * as __29$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
import * as __2a$ from "/v135/@stdlib/object@0.2.1/denonext/ctor.js";
import * as __2b$ from "/v135/@stdlib/assert@0.2.1/denonext/is-integer.js";
import * as __2c$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __2d$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/assert/is-array":return e(__0$);case"@stdlib/assert/is-nonnegative-integer":return e(__1$);case"@stdlib/string/format":return e(__2$);case"@stdlib/constants/float64/pinf":return e(__3$);case"@stdlib/assert/has-own-property":return e(__4$);case"@stdlib/assert/is-buffer":return e(__6$);case"@stdlib/assert/is-error":return e(__7$);case"@stdlib/buffer/from-buffer":return e(__8$);case"@stdlib/array/int8":return e(__9$);case"@stdlib/array/uint8":return e(__a$);case"@stdlib/array/uint8c":return e(__b$);case"@stdlib/array/int16":return e(__c$);case"@stdlib/array/uint16":return e(__d$);case"@stdlib/array/int32":return e(__e$);case"@stdlib/array/uint32":return e(__f$);case"@stdlib/array/float32":return e(__10$);case"@stdlib/array/float64":return e(__11$);case"@stdlib/regexp/function-name":return e(__12$);case"@stdlib/assert/has-tostringtag-support":return e(__14$);case"@stdlib/object/ctor":return e(__17$);case"@stdlib/assert/is-string":return e(__18$);case"@stdlib/regexp/regexp":return e(__19$);case"@stdlib/assert/is-function":return e(__1b$);case"@stdlib/assert/is-object-like":return e(__1c$);case"@stdlib/assert/is-arguments":return e(__1e$);case"@stdlib/symbol/ctor":return e(__1f$);case"@stdlib/assert/is-enumerable-property":return e(__21$);case"@stdlib/assert/is-boolean":return e(__22$);case"@stdlib/assert/is-nan":return e(__25$);case"@stdlib/assert/is-collection":return e(__27$);case"@stdlib/assert/is-integer":return e(__2b$);default:throw new Error("module \""+n+"\" not found");}};
var Pt=Object.create;var k=Object.defineProperty;var _t=Object.getOwnPropertyDescriptor;var St=Object.getOwnPropertyNames;var jt=Object.getPrototypeOf,Et=Object.prototype.hasOwnProperty;var o=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,i)=>(typeof require<"u"?require:e)[i]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var t=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),kt=(r,e)=>{for(var i in e)k(r,i,{get:e[i],enumerable:!0})},E=(r,e,i,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of St(e))!Et.call(r,n)&&n!==i&&k(r,n,{get:()=>e[n],enumerable:!(a=_t(e,n))||a.enumerable});return r},g=(r,e,i)=>(E(r,e,"default"),i&&E(i,e,"default")),W=(r,e,i)=>(i=r!=null?Pt(jt(r)):{},E(e||!r||!r.__esModule?k(i,"default",{value:r,enumerable:!0}):i,r));var Y=t((Du,X)=>{"use strict";var At=/./;X.exports=At});var J=t((Iu,K)=>{"use strict";function Nt(){return new Function("return this;")()}K.exports=Nt});var Z=t((Fu,Q)=>{"use strict";var Tt=typeof self=="object"?self:null;Q.exports=Tt});var rr=t((Gu,$)=>{"use strict";var Ct=typeof window=="object"?window:null;$.exports=Ct});var tr=t((Lu,er)=>{"use strict";var Bt=typeof globalThis=="object"?globalThis:null;er.exports=Bt});var ar=t((Ru,or)=>{"use strict";var Ut=o("@stdlib/assert/is-boolean").isPrimitive,Dt=o("@stdlib/string/format"),It=J(),ir=Z(),nr=rr(),ur=tr();function Ft(r){if(arguments.length){if(!Ut(r))throw new TypeError(Dt("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return It()}if(ur)return ur;if(ir)return ir;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}or.exports=Ft});var cr=t((Hu,fr)=>{"use strict";var Gt=ar(),sr=Gt(),Lt=sr.document&&sr.document.childNodes;fr.exports=Lt});var lr=t((Vu,pr)=>{"use strict";var Rt=Int8Array;pr.exports=Rt});var yr=t((Mu,vr)=>{"use strict";var Ht=Y(),Vt=cr(),Mt=lr();function zt(){return typeof Ht=="function"||typeof Mt=="object"||typeof Vt=="function"}vr.exports=zt});var A=t((zu,qr)=>{"use strict";var Wt=Object.prototype.toString;qr.exports=Wt});var br=t((Wu,gr)=>{"use strict";var Xt=A();function Yt(r){return Xt.call(r)}gr.exports=Yt});var dr=t((Xu,xr)=>{"use strict";var mr=o("@stdlib/symbol/ctor"),Kt=typeof mr=="function"?mr.toStringTag:"";xr.exports=Kt});var Or=t((Yu,wr)=>{"use strict";var Jt=o("@stdlib/assert/has-own-property"),x=dr(),N=A();function Qt(r){var e,i,a;if(r==null)return N.call(r);i=r[x],e=Jt(r,x);try{r[x]=void 0}catch{return N.call(r)}return a=N.call(r),e?r[x]=i:delete r[x],a}wr.exports=Qt});var C=t((Ku,hr)=>{"use strict";var Zt=o("@stdlib/assert/has-tostringtag-support"),$t=br(),ri=Or(),T;Zt()?T=ri:T=$t;hr.exports=T});var _r=t((Ju,Pr)=>{"use strict";var ei=C(),ti=o("@stdlib/regexp/function-name").REGEXP,ii=o("@stdlib/assert/is-buffer");function ni(r){var e,i,a;if(i=ei(r).slice(8,-1),(i==="Object"||i==="Error")&&r.constructor){if(a=r.constructor,typeof a.name=="string")return a.name;if(e=ti.exec(a.toString()),e)return e[1]}return ii(r)?"Buffer":i}Pr.exports=ni});var B=t((Qu,Sr)=>{"use strict";var ui=_r();Sr.exports=ui});var Er=t((Zu,jr)=>{"use strict";var oi=B();function ai(r){var e;return r===null?"null":(e=typeof r,e==="object"?oi(r).toLowerCase():e)}jr.exports=ai});var Ar=t(($u,kr)=>{"use strict";var si=B();function fi(r){return si(r).toLowerCase()}kr.exports=fi});var U=t((ro,Nr)=>{"use strict";var ci=yr(),pi=Er(),li=Ar(),vi=ci()?li:pi;Nr.exports=vi});var Cr=t((eo,Tr)=>{"use strict";var yi=o("@stdlib/assert/is-string").isPrimitive,qi=o("@stdlib/regexp/regexp"),gi=o("@stdlib/string/format");function bi(r){if(!yi(r))throw new TypeError(gi("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=qi().exec(r),r?new RegExp(r[1],r[2]):null}Tr.exports=bi});var Ur=t((to,Br)=>{"use strict";var mi=Cr();Br.exports=mi});var Gr=t((io,Fr)=>{"use strict";var Dr=o("@stdlib/assert/is-nan"),xi=o("@stdlib/assert/is-collection"),di=o("@stdlib/assert/is-string").isPrimitive,wi=o("@stdlib/assert/is-integer").isPrimitive,Ir=o("@stdlib/string/format");function Oi(r,e,i){var a,n;if(!xi(r)&&!di(r))throw new TypeError(Ir("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(a=r.length,a===0)return-1;if(arguments.length===3){if(!wi(i))throw new TypeError(Ir("invalid argument. Third argument must be an integer. Value: `%s`.",i));if(i>=0){if(i>=a)return-1;n=i}else n=a+i,n<0&&(n=0)}else n=0;if(Dr(e)){for(;n<a;n++)if(Dr(r[n]))return n}else for(;n<a;n++)if(r[n]===e)return n;return-1}Fr.exports=Oi});var D=t((no,Lr)=>{"use strict";var hi=Gr();Lr.exports=hi});var h=t((uo,Rr)=>{"use strict";function Pi(r){return Object.keys(Object(r))}Rr.exports=Pi});var Vr=t((oo,Hr)=>{"use strict";var _i=h();function Si(){return(_i(arguments)||"").length!==2}function ji(){return Si(1,2)}Hr.exports=ji});var zr=t((ao,Mr)=>{"use strict";var Ei=typeof Object.keys<"u";Mr.exports=Ei});var Yr=t((so,Xr)=>{"use strict";var ki=o("@stdlib/assert/is-arguments"),Wr=h(),Ai=Array.prototype.slice;function Ni(r){return ki(r)?Wr(Ai.call(r)):Wr(r)}Xr.exports=Ni});var Jr=t((fo,Kr)=>{"use strict";function Ti(){}Kr.exports=Ti});var Zr=t((co,Qr)=>{"use strict";var Ci=Jr();Qr.exports=Ci});var re=t((po,$r)=>{"use strict";var Bi=o("@stdlib/assert/is-enumerable-property"),Ui=Zr(),Di=Bi(Ui,"prototype");$r.exports=Di});var te=t((lo,ee)=>{"use strict";var Ii=o("@stdlib/assert/is-enumerable-property"),Fi={toString:null},Gi=!Ii(Fi,"toString");ee.exports=Gi});var I=t((vo,ie)=>{"use strict";function Li(r){return r.constructor&&r.constructor.prototype===r}ie.exports=Li});var ne=t((yo,Ri)=>{Ri.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var oe=t((qo,ue)=>{"use strict";var Hi=typeof window>"u"?void 0:window;ue.exports=Hi});var ce=t((go,fe)=>{"use strict";var Vi=o("@stdlib/assert/has-own-property"),Mi=D(),ae=U(),zi=I(),Wi=ne(),b=oe(),se;function Xi(){var r;if(ae(b)==="undefined")return!1;for(r in b)try{Mi(Wi,r)===-1&&Vi(b,r)&&b[r]!==null&&ae(b[r])==="object"&&zi(b[r])}catch{return!0}return!1}se=Xi();fe.exports=se});var le=t((bo,pe)=>{"use strict";var Yi=typeof window<"u";pe.exports=Yi});var qe=t((mo,ye)=>{"use strict";var Ki=ce(),ve=I(),Ji=le();function Qi(r){if(Ji===!1&&!Ki)return ve(r);try{return ve(r)}catch{return!1}}ye.exports=Qi});var ge=t((xo,Zi)=>{Zi.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var xe=t((wo,me)=>{"use strict";var $i=o("@stdlib/assert/is-object-like"),F=o("@stdlib/assert/has-own-property"),rn=o("@stdlib/assert/is-arguments"),en=re(),tn=te(),nn=qe(),be=ge();function un(r){var e,i,a,n,f,s,u;if(n=[],rn(r)){for(u=0;u<r.length;u++)n.push(u.toString());return n}if(typeof r=="string"){if(r.length>0&&!F(r,"0"))for(u=0;u<r.length;u++)n.push(u.toString())}else{if(a=typeof r=="function",a===!1&&!$i(r))return n;i=en&&a}for(f in r)!(i&&f==="prototype")&&F(r,f)&&n.push(String(f));if(tn)for(e=nn(r),u=0;u<be.length;u++)s=be[u],!(e&&s==="constructor")&&F(r,s)&&n.push(String(s));return n}me.exports=un});var we=t((Oo,de)=>{"use strict";var on=Vr(),an=zr(),sn=h(),fn=Yr(),cn=xe(),P;an?on()?P=fn:P=sn:P=cn;de.exports=P});var G=t((ho,Oe)=>{"use strict";var pn=we();Oe.exports=pn});var Pe=t((Po,he)=>{"use strict";var ln=typeof Object.getOwnPropertyNames<"u";he.exports=ln});var je=t((_o,Se)=>{"use strict";var _e=o("@stdlib/object/ctor"),vn=_e.getOwnPropertyNames;function yn(r){return vn(_e(r))}Se.exports=yn});var ke=t((So,Ee)=>{"use strict";var qn=o("@stdlib/object/ctor"),gn=G();function bn(r){return gn(qn(r))}Ee.exports=bn});var Ne=t((jo,Ae)=>{"use strict";var mn=Pe(),xn=je(),dn=ke(),L;mn?L=xn:L=dn;Ae.exports=L});var Ce=t((Eo,Te)=>{"use strict";var wn=typeof Object.getOwnPropertyDescriptor<"u";Te.exports=wn});var Ue=t((ko,Be)=>{"use strict";var On=Object.getOwnPropertyDescriptor;function hn(r,e){var i;return r==null?null:(i=On(r,e),i===void 0?null:i)}Be.exports=hn});var Ie=t((Ao,De)=>{"use strict";var Pn=o("@stdlib/assert/has-own-property");function _n(r,e){return Pn(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}De.exports=_n});var Ge=t((No,Fe)=>{"use strict";var Sn=Ce(),jn=Ue(),En=Ie(),R;Sn?R=jn:R=En;Fe.exports=R});var Re=t((To,Le)=>{"use strict";var kn=Object.getPrototypeOf;Le.exports=kn});var Ve=t((Co,He)=>{"use strict";function An(r){return r.__proto__}He.exports=An});var ze=t((Bo,Me)=>{"use strict";var Nn=C(),Tn=Ve();function Cn(r){var e=Tn(r);return e||e===null?e:Nn(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}Me.exports=Cn});var Xe=t((Uo,We)=>{"use strict";var Bn=o("@stdlib/assert/is-function"),Un=Re(),Dn=ze(),H;Bn(Object.getPrototypeOf)?H=Un:H=Dn;We.exports=H});var Ke=t((Do,Ye)=>{"use strict";var In=o("@stdlib/object/ctor"),Fn=Xe();function Gn(r){return r==null?null:(r=In(r),Fn(r))}Ye.exports=Gn});var Qe=t((Io,Je)=>{"use strict";var Ln=Ke();Je.exports=Ln});var $e=t((Fo,Ze)=>{"use strict";var Rn=typeof Object.defineProperty=="function"?Object.defineProperty:null;Ze.exports=Rn});var et=t((Go,rt)=>{"use strict";var Hn=$e();function Vn(){try{return Hn({},"x",{}),!0}catch{return!1}}rt.exports=Vn});var it=t((Lo,tt)=>{"use strict";var Mn=Object.defineProperty;tt.exports=Mn});var ft=t((Ro,st)=>{"use strict";var nt=o("@stdlib/string/format"),m=Object.prototype,ut=m.toString,ot=m.__defineGetter__,at=m.__defineSetter__,zn=m.__lookupGetter__,Wn=m.__lookupSetter__;function Xn(r,e,i){var a,n,f,s;if(typeof r!="object"||r===null||ut.call(r)==="[object Array]")throw new TypeError(nt("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof i!="object"||i===null||ut.call(i)==="[object Array]")throw new TypeError(nt("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if(n="value"in i,n&&(zn.call(r,e)||Wn.call(r,e)?(a=r.__proto__,r.__proto__=m,delete r[e],r[e]=i.value,r.__proto__=a):r[e]=i.value),f="get"in i,s="set"in i,n&&(f||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&ot&&ot.call(r,e,i.get),s&&at&&at.call(r,e,i.set),r}st.exports=Xn});var pt=t((Ho,ct)=>{"use strict";var Yn=et(),Kn=it(),Jn=ft(),V;Yn()?V=Kn:V=Jn;ct.exports=V});var yt=t((Vo,vt)=>{"use strict";var Qn=o("@stdlib/array/int8"),Zn=o("@stdlib/array/uint8"),$n=o("@stdlib/array/uint8c"),ru=o("@stdlib/array/int16"),eu=o("@stdlib/array/uint16"),tu=o("@stdlib/array/int32"),iu=o("@stdlib/array/uint32"),nu=o("@stdlib/array/float32"),uu=o("@stdlib/array/float64"),lt;function ou(r){return new Qn(r)}function au(r){return new Zn(r)}function su(r){return new $n(r)}function fu(r){return new ru(r)}function cu(r){return new eu(r)}function pu(r){return new tu(r)}function lu(r){return new iu(r)}function vu(r){return new nu(r)}function yu(r){return new uu(r)}function qu(){var r={int8array:ou,uint8array:au,uint8clampedarray:su,int16array:fu,uint16array:cu,int32array:pu,uint32array:lu,float32array:vu,float64array:yu};return r}lt=qu();vt.exports=lt});var xt=t((Mo,mt)=>{"use strict";var _=o("@stdlib/assert/has-own-property"),M=o("@stdlib/assert/is-array"),qt=o("@stdlib/assert/is-buffer"),gu=o("@stdlib/assert/is-error"),gt=U(),bu=Ur(),mu=D(),bt=G(),xu=Ne(),d=Ge(),du=Qe(),w=pt(),wu=o("@stdlib/buffer/from-buffer"),Ou=yt();function hu(r){var e,i,a,n,f,s,u,c;for(e=[],n=[],u=Object.create(du(r)),e.push(r),n.push(u),i=xu(r),c=0;c<i.length;c++)a=i[c],f=d(r,a),_(f,"value")&&(s=M(r[a])?[]:{},f.value=y(r[a],s,e,n,-1)),w(u,a,f);return Object.isExtensible(r)||Object.preventExtensions(u),Object.isSealed(r)&&Object.seal(u),Object.isFrozen(r)&&Object.freeze(u),u}function Pu(r){var e=[],i=[],a,n,f,s,u,c;for(u=new r.constructor(r.message),e.push(r),i.push(u),r.stack&&(u.stack=r.stack),r.code&&(u.code=r.code),r.errno&&(u.errno=r.errno),r.syscall&&(u.syscall=r.syscall),a=bt(r),c=0;c<a.length;c++)s=a[c],n=d(r,s),_(n,"value")&&(f=M(r[s])?[]:{},n.value=y(r[s],f,e,i,-1)),w(u,s,n);return u}function y(r,e,i,a,n){var f,s,u,c,S,p,O,l,j,v;if(n-=1,typeof r!="object"||r===null)return r;if(qt(r))return wu(r);if(gu(r))return Pu(r);if(u=gt(r),u==="date")return new Date(+r);if(u==="regexp")return bu(r.toString());if(u==="set")return new Set(r);if(u==="map")return new Map(r);if(u==="string"||u==="boolean"||u==="number")return r.valueOf();if(S=Ou[u],S)return S(r);if(u!=="array"&&u!=="object")return typeof Object.freeze=="function"?hu(r):{};if(s=bt(r),n>0)for(f=u,v=0;v<s.length;v++){if(p=s[v],l=r[p],u=gt(l),typeof l!="object"||l===null||u!=="array"&&u!=="object"||qt(l)){f==="object"?(c=d(r,p),_(c,"value")&&(c.value=y(l)),w(e,p,c)):e[p]=y(l);continue}if(j=mu(i,l),j!==-1){e[p]=a[j];continue}O=M(l)?new Array(l.length):{},i.push(l),a.push(O),f==="array"?e[p]=y(l,O,i,a,n):(c=d(r,p),_(c,"value")&&(c.value=y(l,O,i,a,n)),w(e,p,c))}else if(u==="array")for(v=0;v<s.length;v++)p=s[v],e[p]=r[p];else for(v=0;v<s.length;v++)p=s[v],c=d(r,p),w(e,p,c);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}mt.exports=y});var wt=t((zo,dt)=>{"use strict";var _u=o("@stdlib/assert/is-array"),Su=o("@stdlib/assert/is-nonnegative-integer").isPrimitive,ju=o("@stdlib/string/format"),Eu=o("@stdlib/constants/float64/pinf"),ku=xt();function Au(r,e){var i;if(arguments.length>1){if(!Su(e))throw new TypeError(ju("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=Eu;return i=_u(r)?new Array(r.length):{},ku(r,i,[r],[i],e)}dt.exports=Au});var z=t((Wo,Ot)=>{"use strict";var Nu=wt();Ot.exports=Nu});var q={};kt(q,{default:()=>Bu});var Tu=W(z());g(q,W(z()));var{default:ht,...Cu}=Tu,Bu=ht!==void 0?ht:Cu;export{Bu as default};
/*! Bundled license information:

@stdlib/utils/type-of/lib/fixtures/re.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/global/lib/codegen.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/global/lib/self.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/global/lib/window.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/global/lib/global_this.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/global/lib/browser.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/type-of/lib/fixtures/nodelist.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/type-of/lib/fixtures/typedarray.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/type-of/lib/check.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/native-class/lib/tostring.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/native-class/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/native-class/lib/tostringtag.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/native-class/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/native-class/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/constructor-name/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/constructor-name/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/type-of/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/type-of/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/type-of/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/regexp-from-string/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/regexp-from-string/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/index-of/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/index-of/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/builtin.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/has_arguments_bug.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/has_builtin.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/builtin_wrapper.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/noop/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/noop/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/has_enumerable_prototype_bug.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/has_non_enumerable_properties_bug.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/is_constructor_prototype.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/window.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/has_automation_equality_bug.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/has_window.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/is_constructor_prototype_wrapper.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/keys/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/property-names/lib/has_builtin.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/property-names/lib/builtin.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/property-names/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/property-names/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/property-descriptor/lib/has_builtin.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/property-descriptor/lib/builtin.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/property-descriptor/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/property-descriptor/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/get-prototype-of/lib/native.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/get-prototype-of/lib/proto.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/get-prototype-of/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/get-prototype-of/lib/detect.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/get-prototype-of/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/get-prototype-of/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-property/lib/define_property.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-property/lib/has_define_property_support.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-property/lib/builtin.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-property/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/define-property/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/copy/lib/typed_arrays.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/copy/lib/deep_copy.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/copy/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils/copy/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
*/
//# sourceMappingURL=copy.js.map