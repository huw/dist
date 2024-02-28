/* esm.sh - esbuild bundle(@stdlib/array@0.2.1/to-json) denonext production */
import * as __0$ from "/v135/@stdlib/assert@0.2.1/denonext/is-typed-array.js";
import * as __1$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-typed-array.js";
import * as __2$ from "/v135/@stdlib/strided@0.2.1/denonext/base/reinterpret-complex64.js";
import * as __3$ from "/v135/@stdlib/strided@0.2.1/denonext/base/reinterpret-complex128.js";
import * as __4$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __5$ from "/v135/@stdlib/assert@0.2.1/denonext/instance-of.js";
import * as __6$ from "/v135/@stdlib/utils@0.2.1/denonext/constructor-name.js";
import * as __7$ from "/v135/@stdlib/utils@0.2.1/denonext/get-prototype-of.js";
import * as __8$ from "/v135/@stdlib/assert@0.2.1/denonext/has-uint8array-support.js";
import * as __9$ from "/v135/@stdlib/assert@0.2.1/denonext/has-int32array-support.js";
import * as __a$ from "/v135/@stdlib/assert@0.2.1/denonext/has-float64array-support.js";
import * as __b$ from "/v135/@stdlib/assert@0.2.1/denonext/has-float32array-support.js";
import * as __c$ from "/v135/@stdlib/assert@0.2.1/denonext/has-uint16array-support.js";
import * as __d$ from "/v135/@stdlib/assert@0.2.1/denonext/has-uint32array-support.js";
import * as __e$ from "/v135/@stdlib/assert@0.2.1/denonext/is-nonnegative-integer.js";
import * as __f$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array-like-object.js";
import * as __10$ from "/v135/@stdlib/assert@0.2.1/denonext/is-collection.js";
import * as __11$ from "/v135/@stdlib/assert@0.2.1/denonext/is-arraybuffer.js";
import * as __12$ from "/v135/@stdlib/assert@0.2.1/denonext/is-object.js";
import * as __13$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array.js";
import * as __14$ from "/v135/@stdlib/assert@0.2.1/denonext/is-string.js";
import * as __15$ from "/v135/@stdlib/assert@0.2.1/denonext/is-function.js";
import * as __16$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __17$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-even.js";
import * as __18$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-integer.js";
import * as __19$ from "/v135/@stdlib/assert@0.2.1/denonext/has-int8array-support.js";
import * as __1a$ from "/v135/@stdlib/assert@0.2.1/denonext/has-int16array-support.js";
import * as __1b$ from "/v135/@stdlib/assert@0.2.1/denonext/has-uint8clampedarray-support.js";
import * as __1c$ from "/v135/@stdlib/assert@0.2.1/denonext/is-nonnegative-integer.js";
import * as __1d$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array-like-object.js";
import * as __1e$ from "/v135/@stdlib/assert@0.2.1/denonext/is-collection.js";
import * as __1f$ from "/v135/@stdlib/assert@0.2.1/denonext/is-arraybuffer.js";
import * as __20$ from "/v135/@stdlib/assert@0.2.1/denonext/is-object.js";
import * as __21$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array.js";
import * as __22$ from "/v135/@stdlib/assert@0.2.1/denonext/is-string.js";
import * as __23$ from "/v135/@stdlib/assert@0.2.1/denonext/is-function.js";
import * as __24$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __25$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-even.js";
import * as __26$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-integer.js";
import * as __27$ from "/v135/@stdlib/assert@0.2.1/denonext/has-iterator-symbol-support.js";
import * as __28$ from "/v135/@stdlib/symbol@0.2.1/denonext/iterator.js";
import * as __29$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __2a$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-accessor.js";
import * as __2b$ from "/v135/@stdlib/complex@0.2.1/denonext/float64.js";
import * as __2c$ from "/v135/@stdlib/complex@0.2.1/denonext/real.js";
import * as __2d$ from "/v135/@stdlib/complex@0.2.1/denonext/imag.js";
import * as __2e$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/floor.js";
import * as __2f$ from "/v135/@stdlib/strided@0.2.1/denonext/base/reinterpret-complex64.js";
import * as __30$ from "/v135/@stdlib/strided@0.2.1/denonext/base/reinterpret-complex128.js";
import * as __31$ from "/v135/@stdlib/assert@0.2.1/denonext/has-iterator-symbol-support.js";
import * as __32$ from "/v135/@stdlib/symbol@0.2.1/denonext/iterator.js";
import * as __33$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __34$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-accessor.js";
import * as __35$ from "/v135/@stdlib/complex@0.2.1/denonext/float32.js";
import * as __36$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __37$ from "/v135/@stdlib/complex@0.2.1/denonext/realf.js";
import * as __38$ from "/v135/@stdlib/complex@0.2.1/denonext/imagf.js";
import * as __39$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/floor.js";
import * as __3a$ from "/v135/@stdlib/strided@0.2.1/denonext/base/reinterpret-complex64.js";
import * as __3b$ from "/v135/@stdlib/strided@0.2.1/denonext/base/reinterpret-complex128.js";
import * as __3c$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __3d$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array-like-object.js";
import * as __3e$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __3f$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array-like-object.js";
import * as __40$ from "/v135/@stdlib/complex@0.2.1/denonext/real.js";
import * as __41$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __42$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __43$ from "/v135/@stdlib/complex@0.2.1/denonext/imag.js";
import * as __44$ from "/v135/@stdlib/complex@0.2.1/denonext/realf.js";
import * as __45$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __46$ from "/v135/@stdlib/complex@0.2.1/denonext/imagf.js";
import * as __47$ from "/v135/@stdlib/complex@0.2.1/denonext/real.js";
import * as __48$ from "/v135/@stdlib/complex@0.2.1/denonext/imag.js";
import * as __49$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __4a$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array-like-object.js";
import * as __4b$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __4c$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __4d$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array-like-object.js";
import * as __4e$ from "/v135/@stdlib/complex@0.2.1/denonext/real.js";
import * as __4f$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __50$ from "/v135/@stdlib/complex@0.2.1/denonext/imag.js";
import * as __51$ from "/v135/@stdlib/complex@0.2.1/denonext/realf.js";
import * as __52$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __53$ from "/v135/@stdlib/complex@0.2.1/denonext/imagf.js";
import * as __54$ from "/v135/@stdlib/complex@0.2.1/denonext/realf.js";
import * as __55$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __56$ from "/v135/@stdlib/complex@0.2.1/denonext/imagf.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/assert/is-typed-array":return e(__0$);case"@stdlib/assert/is-complex-typed-array":return e(__1$);case"@stdlib/strided/base/reinterpret-complex64":return e(__2$);case"@stdlib/strided/base/reinterpret-complex128":return e(__3$);case"@stdlib/string/format":return e(__4$);case"@stdlib/assert/instance-of":return e(__5$);case"@stdlib/utils/constructor-name":return e(__6$);case"@stdlib/utils/get-prototype-of":return e(__7$);case"@stdlib/assert/has-uint8array-support":return e(__8$);case"@stdlib/assert/has-int32array-support":return e(__9$);case"@stdlib/assert/has-float64array-support":return e(__a$);case"@stdlib/assert/has-float32array-support":return e(__b$);case"@stdlib/assert/has-uint16array-support":return e(__c$);case"@stdlib/assert/has-uint32array-support":return e(__d$);case"@stdlib/assert/is-nonnegative-integer":return e(__e$);case"@stdlib/assert/is-array-like-object":return e(__f$);case"@stdlib/assert/is-collection":return e(__10$);case"@stdlib/assert/is-arraybuffer":return e(__11$);case"@stdlib/assert/is-object":return e(__12$);case"@stdlib/assert/is-array":return e(__13$);case"@stdlib/assert/is-string":return e(__14$);case"@stdlib/assert/is-function":return e(__15$);case"@stdlib/assert/is-complex-like":return e(__16$);case"@stdlib/math/base/assert/is-even":return e(__17$);case"@stdlib/math/base/assert/is-integer":return e(__18$);case"@stdlib/assert/has-int8array-support":return e(__19$);case"@stdlib/assert/has-int16array-support":return e(__1a$);case"@stdlib/assert/has-uint8clampedarray-support":return e(__1b$);case"@stdlib/assert/has-iterator-symbol-support":return e(__27$);case"@stdlib/symbol/iterator":return e(__28$);case"@stdlib/utils/define-nonenumerable-read-only-property":return e(__29$);case"@stdlib/utils/define-nonenumerable-read-only-accessor":return e(__2a$);case"@stdlib/complex/float64":return e(__2b$);case"@stdlib/complex/real":return e(__2c$);case"@stdlib/complex/imag":return e(__2d$);case"@stdlib/math/base/special/floor":return e(__2e$);case"@stdlib/complex/float32":return e(__35$);case"@stdlib/complex/realf":return e(__37$);case"@stdlib/complex/imagf":return e(__38$);default:throw new Error("module \""+n+"\" not found");}};
var wt=Object.create;var Z=Object.defineProperty;var bt=Object.getOwnPropertyDescriptor;var Et=Object.getOwnPropertyNames;var Tt=Object.getPrototypeOf,_t=Object.prototype.hasOwnProperty;var f=(a=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(a,{get:(r,e)=>(typeof require<"u"?require:r)[e]}):a)(function(a){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+a+'" is not supported')});var m=(a,r)=>()=>(r||a((r={exports:{}}).exports,r),r.exports),dt=(a,r)=>{for(var e in r)Z(a,e,{get:r[e],enumerable:!0})},X=(a,r,e,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of Et(r))!_t.call(a,i)&&i!==e&&Z(a,i,{get:()=>r[i],enumerable:!(t=bt(r,i))||t.enumerable});return a},Y=(a,r,e)=>(X(a,r,"default"),e&&X(e,r,"default")),br=(a,r,e)=>(e=a!=null?wt(Tt(a)):{},X(r||!a||!a.__esModule?Z(e,"default",{value:a,enumerable:!0}):e,a));var Tr=m((wa,Er)=>{"use strict";var qt=typeof Int8Array=="function"?Int8Array:void 0;Er.exports=qt});var dr=m((ba,_r)=>{"use strict";function xt(){throw new Error("not implemented")}_r.exports=xt});var xr=m((Ea,qr)=>{"use strict";var At=f("@stdlib/assert/has-int8array-support"),Vt=Tr(),Lt=dr(),$;At()?$=Vt:$=Lt;qr.exports=$});var Vr=m((Ta,Ar)=>{"use strict";var St=typeof Uint8Array=="function"?Uint8Array:void 0;Ar.exports=St});var Sr=m((_a,Lr)=>{"use strict";function kt(){throw new Error("not implemented")}Lr.exports=kt});var Fr=m((da,kr)=>{"use strict";var Ft=f("@stdlib/assert/has-uint8array-support"),Rt=Vr(),Ct=Sr(),rr;Ft()?rr=Rt:rr=Ct;kr.exports=rr});var Cr=m((qa,Rr)=>{"use strict";var jt=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;Rr.exports=jt});var Or=m((xa,jr)=>{"use strict";function Ot(){throw new Error("not implemented")}jr.exports=Ot});var Mr=m((Aa,Br)=>{"use strict";var Bt=f("@stdlib/assert/has-uint8clampedarray-support"),Mt=Cr(),Nt=Or(),er;Bt()?er=Mt:er=Nt;Br.exports=er});var Ur=m((Va,Nr)=>{"use strict";var Ut=typeof Int16Array=="function"?Int16Array:void 0;Nr.exports=Ut});var Yr=m((La,Pr)=>{"use strict";function Pt(){throw new Error("not implemented")}Pr.exports=Pt});var Ir=m((Sa,zr)=>{"use strict";var Yt=f("@stdlib/assert/has-int16array-support"),zt=Ur(),It=Yr(),tr;Yt()?tr=zt:tr=It;zr.exports=tr});var Gr=m((ka,Wr)=>{"use strict";var Wt=typeof Uint16Array=="function"?Uint16Array:void 0;Wr.exports=Wt});var Dr=m((Fa,Hr)=>{"use strict";function Gt(){throw new Error("not implemented")}Hr.exports=Gt});var Kr=m((Ra,Jr)=>{"use strict";var Ht=f("@stdlib/assert/has-uint16array-support"),Dt=Gr(),Jt=Dr(),ir;Ht()?ir=Dt:ir=Jt;Jr.exports=ir});var Xr=m((Ca,Qr)=>{"use strict";var Kt=typeof Int32Array=="function"?Int32Array:void 0;Qr.exports=Kt});var $r=m((ja,Zr)=>{"use strict";function Qt(){throw new Error("not implemented")}Zr.exports=Qt});var ee=m((Oa,re)=>{"use strict";var Xt=f("@stdlib/assert/has-int32array-support"),Zt=Xr(),$t=$r(),nr;Xt()?nr=Zt:nr=$t;re.exports=nr});var ie=m((Ba,te)=>{"use strict";var ri=typeof Uint32Array=="function"?Uint32Array:void 0;te.exports=ri});var ae=m((Ma,ne)=>{"use strict";function ei(){throw new Error("not implemented")}ne.exports=ei});var ue=m((Na,oe)=>{"use strict";var ti=f("@stdlib/assert/has-uint32array-support"),ii=ie(),ni=ae(),ar;ti()?ar=ii:ar=ni;oe.exports=ar});var fe=m((Ua,se)=>{"use strict";var ai=typeof Float32Array=="function"?Float32Array:void 0;se.exports=ai});var he=m((Pa,le)=>{"use strict";function oi(){throw new Error("not implemented")}le.exports=oi});var ur=m((Ya,ve)=>{"use strict";var ui=f("@stdlib/assert/has-float32array-support"),si=fe(),fi=he(),or;ui()?or=si:or=fi;ve.exports=or});var ge=m((za,me)=>{"use strict";var li=typeof Float64Array=="function"?Float64Array:void 0;me.exports=li});var ye=m((Ia,pe)=>{"use strict";function hi(){throw new Error("not implemented")}pe.exports=hi});var fr=m((Wa,ce)=>{"use strict";var vi=f("@stdlib/assert/has-float64array-support"),mi=ge(),gi=ye(),sr;vi()?sr=mi:sr=gi;ce.exports=sr});var be=m((Ga,we)=>{"use strict";var pi=8;function yi(a){return typeof a=="object"&&a!==null&&a.constructor.name==="Complex64Array"&&a.BYTES_PER_ELEMENT===pi}we.exports=yi});var lr=m((Ha,Ee)=>{"use strict";var ci=be();Ee.exports=ci});var _e=m((Da,Te)=>{"use strict";var wi=16;function bi(a){return typeof a=="object"&&a!==null&&a.constructor.name==="Complex128Array"&&a.BYTES_PER_ELEMENT===wi}Te.exports=bi});var hr=m((Ja,de)=>{"use strict";var Ei=_e();de.exports=Ei});var Ae=m((Ka,xe)=>{"use strict";var qe={float64:Ti,float32:_i,int32:di,int16:qi,int8:xi,uint32:Ai,uint16:Vi,uint8:Li,uint8c:Si,generic:ki,default:Fi};function Ti(a,r){return a[r]}function _i(a,r){return a[r]}function di(a,r){return a[r]}function qi(a,r){return a[r]}function xi(a,r){return a[r]}function Ai(a,r){return a[r]}function Vi(a,r){return a[r]}function Li(a,r){return a[r]}function Si(a,r){return a[r]}function ki(a,r){return a[r]}function Fi(a,r){return a[r]}function Ri(a){var r=qe[a];return typeof r=="function"?r:qe.default}xe.exports=Ri});var vr=m((Qa,Ve)=>{"use strict";var Ci=Ae();Ve.exports=Ci});var ke=m((Xa,Se)=>{"use strict";var Le={complex128:ji,complex64:Oi,default:Bi};function ji(a,r){return a.get(r)}function Oi(a,r){return a.get(r)}function Bi(a,r){return a.get(r)}function Mi(a){var r=Le[a];return typeof r=="function"?r:Le.default}Se.exports=Mi});var mr=m((Za,Fe)=>{"use strict";var Ni=ke();Fe.exports=Ni});var Ce=m(($a,Re)=>{"use strict";var Ui=f("@stdlib/assert/is-array-like-object"),Pi=f("@stdlib/assert/is-complex-like"),Yi=f("@stdlib/complex/realf"),zi=f("@stdlib/complex/imagf"),Ii=f("@stdlib/string/format");function Wi(a){var r,e,t;for(r=[];e=a.next(),!e.done;)if(t=e.value,Ui(t)&&t.length>=2)r.push(t[0],t[1]);else if(Pi(t))r.push(Yi(t),zi(t));else return new TypeError(Ii("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",t));return r}Re.exports=Wi});var Oe=m((ro,je)=>{"use strict";var Gi=f("@stdlib/assert/is-array-like-object"),Hi=f("@stdlib/assert/is-complex-like"),Di=f("@stdlib/complex/realf"),Ji=f("@stdlib/complex/imagf"),Ki=f("@stdlib/string/format");function Qi(a,r,e){var t,i,n,o;for(t=[],o=-1;i=a.next(),!i.done;)if(o+=1,n=r.call(e,i.value,o),Gi(n)&&n.length>=2)t.push(n[0],n[1]);else if(Hi(n))t.push(Di(n),Ji(n));else return new TypeError(Ki("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return t}je.exports=Qi});var Me=m((eo,Be)=>{"use strict";var Xi=f("@stdlib/assert/is-complex-like"),Zi=f("@stdlib/complex/realf"),$i=f("@stdlib/complex/imagf");function rn(a,r){var e,t,i,n;for(e=r.length,n=0,i=0;i<e;i++){if(t=r[i],!Xi(t))return null;a[n]=Zi(t),a[n+1]=$i(t),n+=2}return a}Be.exports=rn});var Ge=m((to,We)=>{"use strict";var G=f("@stdlib/assert/is-nonnegative-integer").isPrimitive,gr=f("@stdlib/assert/is-array-like-object"),pr=f("@stdlib/assert/is-collection"),Ne=f("@stdlib/assert/is-arraybuffer"),Ue=f("@stdlib/assert/is-object"),en=f("@stdlib/assert/is-array"),tn=f("@stdlib/assert/is-string").isPrimitive,q=f("@stdlib/assert/is-function"),R=f("@stdlib/assert/is-complex-like"),D=f("@stdlib/math/base/assert/is-even"),A=f("@stdlib/math/base/assert/is-integer"),nn=lr(),an=hr(),on=f("@stdlib/assert/has-iterator-symbol-support"),z=f("@stdlib/symbol/iterator"),b=f("@stdlib/utils/define-nonenumerable-read-only-property"),J=f("@stdlib/utils/define-nonenumerable-read-only-accessor"),F=ur(),Pe=f("@stdlib/complex/float32"),l=f("@stdlib/string/format"),B=f("@stdlib/complex/realf"),M=f("@stdlib/complex/imagf"),un=f("@stdlib/math/base/special/floor"),sn=f("@stdlib/strided/base/reinterpret-complex64"),fn=f("@stdlib/strided/base/reinterpret-complex128"),ln=vr(),hn=mr(),Ye=Ce(),vn=Oe(),mn=Me(),V=F.BYTES_PER_ELEMENT*2,ze=on();function T(a){return a instanceof p||typeof a=="object"&&a!==null&&(a.constructor.name==="Complex64Array"||a.constructor.name==="Complex128Array")&&typeof a._length=="number"&&typeof a._buffer=="object"}function Ie(a){return a===p||a.name==="Complex128Array"}function L(a,r){return r*=2,new Pe(a[r],a[r+1])}function p(){var a,r,e,t;if(r=arguments.length,!(this instanceof p))return r===0?new p:r===1?new p(arguments[0]):r===2?new p(arguments[0],arguments[1]):new p(arguments[0],arguments[1],arguments[2]);if(r===0)e=new F(0);else if(r===1)if(G(arguments[0]))e=new F(arguments[0]*2);else if(pr(arguments[0]))if(e=arguments[0],t=e.length,t&&en(e)&&R(e[0])){if(e=mn(new F(t*2),e),e===null){if(!D(t))throw new RangeError(l("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",t));e=new F(arguments[0])}}else{if(nn(e))e=sn(e,0);else if(an(e))e=fn(e,0);else if(!D(t))throw new RangeError(l("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",t));e=new F(e)}else if(Ne(arguments[0])){if(e=arguments[0],!A(e.byteLength/V))throw new RangeError(l("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",V,e.byteLength));e=new F(e)}else if(Ue(arguments[0])){if(e=arguments[0],ze===!1)throw new TypeError(l("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",e));if(!q(e[z]))throw new TypeError(l("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",e));if(e=e[z](),!q(e.next))throw new TypeError(l("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",e));if(e=Ye(e),e instanceof Error)throw e;e=new F(e)}else throw new TypeError(l("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(e=arguments[0],!Ne(e))throw new TypeError(l("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",e));if(a=arguments[1],!G(a))throw new TypeError(l("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",a));if(!A(a/V))throw new RangeError(l("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",V,a));if(r===2){if(t=e.byteLength-a,!A(t/V))throw new RangeError(l("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",V,t));e=new F(e,a)}else{if(t=arguments[2],!G(t))throw new TypeError(l("invalid argument. Length must be a nonnegative integer. Value: `%s`.",t));if(t*V>e.byteLength-a)throw new RangeError(l("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",t*V));e=new F(e,a,t*2)}}return b(this,"_buffer",e),b(this,"_length",e.length/2),this}b(p,"BYTES_PER_ELEMENT",V);b(p,"name","Complex64Array");b(p,"from",function(r){var e,t,i,n,o,u,w,s,c,g,h,d;if(!q(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ie(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(t=arguments.length,t>1){if(i=arguments[1],!q(i))throw new TypeError(l("invalid argument. Second argument must be a function. Value: `%s`.",i));t>2&&(e=arguments[2])}if(T(r)){if(s=r.length,i){for(n=new this(s),o=n._buffer,d=0,h=0;h<s;h++){if(g=i.call(e,r.get(h),h),R(g))o[d]=B(g),o[d+1]=M(g);else if(gr(g)&&g.length>=2)o[d]=g[0],o[d+1]=g[1];else throw new TypeError(l("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",g));d+=2}return n}return new this(r)}if(pr(r)){if(i){for(s=r.length,r.get&&r.set?w=hn("default"):w=ln("default"),h=0;h<s;h++)if(!R(w(r,h))){c=!0;break}if(c){if(!D(s))throw new RangeError(l("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,s));for(n=new this(s/2),o=n._buffer,h=0;h<s;h++)o[h]=i.call(e,w(r,h),h);return n}for(n=new this(s),o=n._buffer,d=0,h=0;h<s;h++){if(g=i.call(e,w(r,h),h),R(g))o[d]=B(g),o[d+1]=M(g);else if(gr(g)&&g.length>=2)o[d]=g[0],o[d+1]=g[1];else throw new TypeError(l("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",g));d+=2}return n}return new this(r)}if(Ue(r)&&ze&&q(r[z])){if(o=r[z](),!q(o.next))throw new TypeError(l("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if(i?u=vn(o,i,e):u=Ye(o),u instanceof Error)throw u;for(s=u.length/2,n=new this(s),o=n._buffer,h=0;h<s;h++)o[h]=u[h];return n}throw new TypeError(l("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))});b(p,"of",function(){var r,e;if(!q(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ie(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)});b(p.prototype,"at",function(r){if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!A(r))throw new TypeError(l("invalid argument. Must provide an integer. Value: `%s`.",r));if(r<0&&(r+=this._length),!(r<0||r>=this._length))return L(this._buffer,r)});J(p.prototype,"buffer",function(){return this._buffer.buffer});J(p.prototype,"byteLength",function(){return this._buffer.byteLength});J(p.prototype,"byteOffset",function(){return this._buffer.byteOffset});b(p.prototype,"BYTES_PER_ELEMENT",p.BYTES_PER_ELEMENT);b(p.prototype,"copyWithin",function(r,e){if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(r*2,e*2):this._buffer.copyWithin(r*2,e*2,arguments[2]*2),this});b(p.prototype,"entries",function(){var r,e,t,i,n,o,u;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,i=this._length,o=-1,u=-2,t={},b(t,"next",w),b(t,"return",s),z&&b(t,z,c),t;function w(){var g;return o+=1,n||o>=i?{done:!0}:(u+=2,g=new Pe(r[u],r[u+1]),{value:[o,g],done:!1})}function s(g){return n=!0,arguments.length?{value:g,done:!0}:{done:!0}}function c(){return e.entries()}});b(p.prototype,"every",function(r,e){var t,i;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(l("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(!r.call(e,L(t,i),i,this))return!1;return!0});b(p.prototype,"fill",function(r,e,t){var i,n,o,u,w,s;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!R(r))throw new TypeError(l("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(i=this._buffer,n=this._length,arguments.length>1){if(!A(e))throw new TypeError(l("invalid argument. Second argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=n,e<0&&(e=0)),arguments.length>2){if(!A(t))throw new TypeError(l("invalid argument. Third argument must be an integer. Value: `%s`.",t));t<0&&(t+=n,t<0&&(t=0)),t>n&&(t=n)}else t=n}else e=0,t=n;for(u=B(r),w=M(r),s=e;s<t;s++)o=2*s,i[o]=u,i[o+1]=w;return this});b(p.prototype,"filter",function(r,e){var t,i,n,o;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(l("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=[],n=0;n<this._length;n++)o=L(t,n),r.call(e,o,n,this)&&i.push(o);return new this.constructor(i)});b(p.prototype,"find",function(r,e){var t,i,n;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(l("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(n=L(t,i),r.call(e,n,i,this))return n});b(p.prototype,"findIndex",function(r,e){var t,i,n;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(l("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(n=L(t,i),r.call(e,n,i,this))return i;return-1});b(p.prototype,"findLast",function(r,e){var t,i,n;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(l("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=this._length-1;i>=0;i--)if(n=L(t,i),r.call(e,n,i,this))return n});b(p.prototype,"findLastIndex",function(r,e){var t,i,n;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(l("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=this._length-1;i>=0;i--)if(n=L(t,i),r.call(e,n,i,this))return i;return-1});b(p.prototype,"forEach",function(r,e){var t,i,n;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(l("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)n=L(t,i),r.call(e,n,i,this)});b(p.prototype,"get",function(r){if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!G(r))throw new TypeError(l("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return L(this._buffer,r)});b(p.prototype,"includes",function(r,e){var t,i,n,o,u;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!R(r))throw new TypeError(l("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!A(e))throw new TypeError(l("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0&&(e+=this._length,e<0&&(e=0))}else e=0;for(n=B(r),o=M(r),t=this._buffer,u=e;u<this._length;u++)if(i=2*u,n===t[i]&&o===t[i+1])return!0;return!1});b(p.prototype,"indexOf",function(r,e){var t,i,n,o,u;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!R(r))throw new TypeError(l("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!A(e))throw new TypeError(l("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0&&(e+=this._length,e<0&&(e=0))}else e=0;for(n=B(r),o=M(r),t=this._buffer,u=e;u<this._length;u++)if(i=2*u,n===t[i]&&o===t[i+1])return u;return-1});b(p.prototype,"join",function(r){var e,t,i,n;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)i=",";else if(tn(r))i=r;else throw new TypeError(l("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[],t=this._buffer,n=0;n<this._length;n++)e.push(L(t,n).toString());return e.join(i)});b(p.prototype,"lastIndexOf",function(r,e){var t,i,n,o,u;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!R(r))throw new TypeError(l("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!A(e))throw new TypeError(l("invalid argument. Second argument must be an integer. Value: `%s`.",e));e>=this._length?e=this._length-1:e<0&&(e+=this._length)}else e=this._length-1;for(n=B(r),o=M(r),t=this._buffer,u=e;u>=0;u--)if(i=2*u,n===t[i]&&o===t[i+1])return u;return-1});J(p.prototype,"length",function(){return this._length});b(p.prototype,"map",function(r,e){var t,i,n,o,u;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(l("invalid argument. First argument must be a function. Value: `%s`.",r));for(i=this._buffer,n=new this.constructor(this._length),t=n._buffer,o=0;o<this._length;o++)if(u=r.call(e,L(i,o),o,this),R(u))t[2*o]=B(u),t[2*o+1]=M(u);else if(gr(u)&&u.length===2)t[2*o]=u[0],t[2*o+1]=u[1];else throw new TypeError(l("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",u));return n});b(p.prototype,"reverse",function(){var r,e,t,i,n,o;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,r=this._buffer,i=un(t/2),n=0;n<i;n++)o=t-n-1,e=r[2*n],r[2*n]=r[2*o],r[2*o]=e,e=r[2*n+1],r[2*n+1]=r[2*o+1],r[2*o+1]=e;return this});b(p.prototype,"set",function(r){var e,t,i,n,o,u,w,s,c;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(t=arguments[1],!G(t))throw new TypeError(l("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(R(r)){if(t>=this._length)throw new RangeError(l("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));t*=2,i[t]=B(r),i[t+1]=M(r);return}if(T(r)){if(u=r._length,t+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,c=i.byteOffset+t*V,e.buffer===i.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(n=new F(e.length),s=0;s<e.length;s++)n[s]=e[s];e=n}for(t*=2,c=0,s=0;s<u;s++)i[t]=e[c],i[t+1]=e[c+1],t+=2,c+=2;return}if(pr(r)){for(u=r.length,s=0;s<u;s++)if(!R(r[s])){o=!0;break}if(o){if(!D(u))throw new RangeError(l("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",u));if(t+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,c=i.byteOffset+t*V,e.buffer===i.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(n=new F(u),s=0;s<u;s++)n[s]=e[s];e=n}for(t*=2,u/=2,c=0,s=0;s<u;s++)i[t]=e[c],i[t+1]=e[c+1],t+=2,c+=2;return}if(t+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,s=0;s<u;s++)w=r[s],i[t]=B(w),i[t+1]=M(w),t+=2;return}throw new TypeError(l("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r))});b(p.prototype,"slice",function(r,e){var t,i,n,o,u,w,s;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(u=this._buffer,w=this._length,arguments.length===0)r=0,e=w;else{if(!A(r))throw new TypeError(l("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=w,r<0&&(r=0)),arguments.length===1)e=w;else{if(!A(e))throw new TypeError(l("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0?(e+=w,e<0&&(e=0)):e>w&&(e=w)}}for(r<e?t=e-r:t=0,n=new this.constructor(t),i=n._buffer,s=0;s<t;s++)o=2*(s+r),i[2*s]=u[o],i[2*s+1]=u[o+1];return n});b(p.prototype,"some",function(r,e){var t,i;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(l("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(r.call(e,L(t,i),i,this))return!0;return!1});b(p.prototype,"subarray",function(r,e){var t,i,n;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,n=this._length,arguments.length===0)r=0,e=n;else{if(!A(r))throw new TypeError(l("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=n,r<0&&(r=0)),arguments.length===1)e=n;else{if(!A(e))throw new TypeError(l("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n)}}return r>=n?(n=0,t=i.byteLength):r>=e?(n=0,t=i.byteOffset+r*V):(n=e-r,t=i.byteOffset+r*V),new this.constructor(i.buffer,t,n<0?0:n)});b(p.prototype,"toReversed",function(){var r,e,t,i,n,o;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,e=new this.constructor(t),i=this._buffer,r=e._buffer,n=0;n<t;n++)o=t-n-1,r[2*n]=i[2*o],r[2*n+1]=i[2*o+1];return e});b(p.prototype,"toString",function(){var r,e,t;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=this._buffer,t=0;t<this._length;t++)r.push(L(e,t).toString());return r.join(",")});b(p.prototype,"with",function(r,e){var t,i,n;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!A(r))throw new TypeError(l("invalid argument. First argument must be an integer. Value: `%s`.",r));if(n=this._length,r<0&&(r+=n),r<0||r>=n)throw new RangeError(l("invalid argument. Index argument is out-of-bounds. Value: `%s`.",r));if(!R(e))throw new TypeError(l("invalid argument. Second argument must be a complex number. Value: `%s`.",e));return i=new this.constructor(this._buffer),t=i._buffer,t[2*r]=B(e),t[2*r+1]=M(e),i});We.exports=p});var De=m((io,He)=>{"use strict";var gn=Ge();He.exports=gn});var Ke=m((no,Je)=>{"use strict";var pn=f("@stdlib/assert/is-array-like-object"),yn=f("@stdlib/assert/is-complex-like"),cn=f("@stdlib/string/format"),wn=f("@stdlib/complex/real"),bn=f("@stdlib/complex/imag");function En(a){var r,e,t;for(r=[];e=a.next(),!e.done;)if(t=e.value,pn(t)&&t.length>=2)r.push(t[0],t[1]);else if(yn(t))r.push(wn(t),bn(t));else return new TypeError(cn("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",t));return r}Je.exports=En});var Xe=m((ao,Qe)=>{"use strict";var Tn=f("@stdlib/assert/is-array-like-object"),_n=f("@stdlib/assert/is-complex-like"),dn=f("@stdlib/string/format"),qn=f("@stdlib/complex/real"),xn=f("@stdlib/complex/imag");function An(a,r,e){var t,i,n,o;for(t=[],o=-1;i=a.next(),!i.done;)if(o+=1,n=r.call(e,i.value,o),Tn(n)&&n.length>=2)t.push(n[0],n[1]);else if(_n(n))t.push(qn(n),xn(n));else return new TypeError(dn("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return t}Qe.exports=An});var $e=m((oo,Ze)=>{"use strict";var Vn=f("@stdlib/assert/is-complex-like"),Ln=f("@stdlib/complex/real"),Sn=f("@stdlib/complex/imag");function kn(a,r){var e,t,i,n;for(e=r.length,n=0,i=0;i<e;i++){if(t=r[i],!Vn(t))return null;a[n]=Ln(t),a[n+1]=Sn(t),n+=2}return a}Ze.exports=kn});var ut=m((uo,ot)=>{"use strict";var H=f("@stdlib/assert/is-nonnegative-integer").isPrimitive,yr=f("@stdlib/assert/is-array-like-object"),cr=f("@stdlib/assert/is-collection"),rt=f("@stdlib/assert/is-arraybuffer"),et=f("@stdlib/assert/is-object"),Fn=f("@stdlib/assert/is-array"),Rn=f("@stdlib/assert/is-string"),x=f("@stdlib/assert/is-function"),j=f("@stdlib/assert/is-complex-like"),K=f("@stdlib/math/base/assert/is-even"),O=f("@stdlib/math/base/assert/is-integer"),Cn=lr(),jn=hr(),On=f("@stdlib/assert/has-iterator-symbol-support"),I=f("@stdlib/symbol/iterator"),E=f("@stdlib/utils/define-nonenumerable-read-only-property"),Q=f("@stdlib/utils/define-nonenumerable-read-only-accessor"),C=fr(),tt=f("@stdlib/complex/float64"),N=f("@stdlib/complex/real"),U=f("@stdlib/complex/imag"),Bn=f("@stdlib/math/base/special/floor"),Mn=f("@stdlib/strided/base/reinterpret-complex64"),Nn=f("@stdlib/strided/base/reinterpret-complex128"),Un=vr(),Pn=mr(),v=f("@stdlib/string/format"),it=Ke(),Yn=Xe(),zn=$e(),S=C.BYTES_PER_ELEMENT*2,nt=On();function _(a){return a instanceof y||typeof a=="object"&&a!==null&&(a.constructor.name==="Complex64Array"||a.constructor.name==="Complex128Array")&&typeof a._length=="number"&&typeof a._buffer=="object"}function at(a){return a===y||a.name==="Complex64Array"}function k(a,r){return r*=2,new tt(a[r],a[r+1])}function y(){var a,r,e,t;if(r=arguments.length,!(this instanceof y))return r===0?new y:r===1?new y(arguments[0]):r===2?new y(arguments[0],arguments[1]):new y(arguments[0],arguments[1],arguments[2]);if(r===0)e=new C(0);else if(r===1)if(H(arguments[0]))e=new C(arguments[0]*2);else if(cr(arguments[0]))if(e=arguments[0],t=e.length,t&&Fn(e)&&j(e[0])){if(e=zn(new C(t*2),e),e===null){if(!K(t))throw new RangeError(v("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",t));e=new C(arguments[0])}}else{if(Cn(e))e=Mn(e,0);else if(jn(e))e=Nn(e,0);else if(!K(t))throw new RangeError(v("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",t));e=new C(e)}else if(rt(arguments[0])){if(e=arguments[0],!O(e.byteLength/S))throw new RangeError(v("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",S,e.byteLength));e=new C(e)}else if(et(arguments[0])){if(e=arguments[0],nt===!1)throw new TypeError(v("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",e));if(!x(e[I]))throw new TypeError(v("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",e));if(e=e[I](),!x(e.next))throw new TypeError(v("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",e));if(e=it(e),e instanceof Error)throw e;e=new C(e)}else throw new TypeError(v("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(e=arguments[0],!rt(e))throw new TypeError(v("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",e));if(a=arguments[1],!H(a))throw new TypeError(v("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",a));if(!O(a/S))throw new RangeError(v("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",S,a));if(r===2){if(t=e.byteLength-a,!O(t/S))throw new RangeError(v("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",S,t));e=new C(e,a)}else{if(t=arguments[2],!H(t))throw new TypeError(v("invalid argument. Length must be a nonnegative integer. Value: `%s`.",t));if(t*S>e.byteLength-a)throw new RangeError(v("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",t*S));e=new C(e,a,t*2)}}return E(this,"_buffer",e),E(this,"_length",e.length/2),this}E(y,"BYTES_PER_ELEMENT",S);E(y,"name","Complex128Array");E(y,"from",function(r){var e,t,i,n,o,u,w,s,c,g,h,d;if(!x(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(t=arguments.length,t>1){if(i=arguments[1],!x(i))throw new TypeError(v("invalid argument. Second argument must be a function. Value: `%s`.",i));t>2&&(e=arguments[2])}if(_(r)){if(s=r.length,i){for(n=new this(s),o=n._buffer,d=0,h=0;h<s;h++){if(g=i.call(e,r.get(h),h),j(g))o[d]=N(g),o[d+1]=U(g);else if(yr(g)&&g.length>=2)o[d]=g[0],o[d+1]=g[1];else throw new TypeError(v("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",g));d+=2}return n}return new this(r)}if(cr(r)){if(i){for(s=r.length,r.get&&r.set?w=Pn("default"):w=Un("default"),h=0;h<s;h++)if(!j(w(r,h))){c=!0;break}if(c){if(!K(s))throw new RangeError(v("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",s));for(n=new this(s/2),o=n._buffer,h=0;h<s;h++)o[h]=i.call(e,w(r,h),h);return n}for(n=new this(s),o=n._buffer,d=0,h=0;h<s;h++){if(g=i.call(e,w(r,h),h),j(g))o[d]=N(g),o[d+1]=U(g);else if(yr(g)&&g.length>=2)o[d]=g[0],o[d+1]=g[1];else throw new TypeError(v("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",g));d+=2}return n}return new this(r)}if(et(r)&&nt&&x(r[I])){if(o=r[I](),!x(o.next))throw new TypeError(v("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if(i?u=Yn(o,i,e):u=it(o),u instanceof Error)throw u;for(s=u.length/2,n=new this(s),o=n._buffer,h=0;h<s;h++)o[h]=u[h];return n}throw new TypeError(v("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))});E(y,"of",function(){var r,e;if(!x(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)});E(y.prototype,"at",function(r){if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!O(r))throw new TypeError(v("invalid argument. Must provide an integer. Value: `%s`.",r));if(r<0&&(r+=this._length),!(r<0||r>=this._length))return k(this._buffer,r)});Q(y.prototype,"buffer",function(){return this._buffer.buffer});Q(y.prototype,"byteLength",function(){return this._buffer.byteLength});Q(y.prototype,"byteOffset",function(){return this._buffer.byteOffset});E(y.prototype,"BYTES_PER_ELEMENT",y.BYTES_PER_ELEMENT);E(y.prototype,"copyWithin",function(r,e){if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(r*2,e*2):this._buffer.copyWithin(r*2,e*2,arguments[2]*2),this});E(y.prototype,"entries",function(){var r,e,t,i,n,o,u;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,i=this._length,o=-1,u=-2,t={},E(t,"next",w),E(t,"return",s),I&&E(t,I,c),t;function w(){var g;return o+=1,n||o>=i?{done:!0}:(u+=2,g=new tt(r[u],r[u+1]),{value:[o,g],done:!1})}function s(g){return n=!0,arguments.length?{value:g,done:!0}:{done:!0}}function c(){return e.entries()}});E(y.prototype,"every",function(r,e){var t,i;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(!r.call(e,k(t,i),i,this))return!1;return!0});E(y.prototype,"fill",function(r,e,t){var i,n,o,u,w,s;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!j(r))throw new TypeError(v("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(i=this._buffer,n=this._length,arguments.length>1){if(!O(e))throw new TypeError(v("invalid argument. Second argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=n,e<0&&(e=0)),arguments.length>2){if(!O(t))throw new TypeError(v("invalid argument. Third argument must be an integer. Value: `%s`.",t));t<0&&(t+=n,t<0&&(t=0)),t>n&&(t=n)}else t=n}else e=0,t=n;for(u=N(r),w=U(r),s=e;s<t;s++)o=2*s,i[o]=u,i[o+1]=w;return this});E(y.prototype,"filter",function(r,e){var t,i,n,o;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=[],n=0;n<this._length;n++)o=k(t,n),r.call(e,o,n,this)&&i.push(o);return new this.constructor(i)});E(y.prototype,"find",function(r,e){var t,i,n;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(n=k(t,i),r.call(e,n,i,this))return n});E(y.prototype,"findIndex",function(r,e){var t,i,n;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(n=k(t,i),r.call(e,n,i,this))return i;return-1});E(y.prototype,"findLast",function(r,e){var t,i,n;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=this._length-1;i>=0;i--)if(n=k(t,i),r.call(e,n,i,this))return n});E(y.prototype,"findLastIndex",function(r,e){var t,i,n;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=this._length-1;i>=0;i--)if(n=k(t,i),r.call(e,n,i,this))return i;return-1});E(y.prototype,"forEach",function(r,e){var t,i,n;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)n=k(t,i),r.call(e,n,i,this)});E(y.prototype,"get",function(r){if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!H(r))throw new TypeError(v("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return k(this._buffer,r)});Q(y.prototype,"length",function(){return this._length});E(y.prototype,"includes",function(r,e){var t,i,n,o,u;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!j(r))throw new TypeError(v("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!O(e))throw new TypeError(v("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0&&(e+=this._length,e<0&&(e=0))}else e=0;for(n=N(r),o=U(r),t=this._buffer,u=e;u<this._length;u++)if(i=2*u,n===t[i]&&o===t[i+1])return!0;return!1});E(y.prototype,"indexOf",function(r,e){var t,i,n,o,u;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!j(r))throw new TypeError(v("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!O(e))throw new TypeError(v("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0&&(e+=this._length,e<0&&(e=0))}else e=0;for(n=N(r),o=U(r),t=this._buffer,u=e;u<this._length;u++)if(i=2*u,n===t[i]&&o===t[i+1])return u;return-1});E(y.prototype,"join",function(r){var e,t,i,n;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)i=",";else if(Rn(r))i=r;else throw new TypeError(v("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[],t=this._buffer,n=0;n<this._length;n++)e.push(k(t,n).toString());return e.join(i)});E(y.prototype,"lastIndexOf",function(r,e){var t,i,n,o,u;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!j(r))throw new TypeError(v("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!O(e))throw new TypeError(v("invalid argument. Second argument must be an integer. Value: `%s`.",e));e>=this._length?e=this._length-1:e<0&&(e+=this._length)}else e=this._length-1;for(n=N(r),o=U(r),t=this._buffer,u=e;u>=0;u--)if(i=2*u,n===t[i]&&o===t[i+1])return u;return-1});E(y.prototype,"map",function(r,e){var t,i,n,o,u;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));for(i=this._buffer,n=new this.constructor(this._length),t=n._buffer,o=0;o<this._length;o++)if(u=r.call(e,k(i,o),o,this),j(u))t[2*o]=N(u),t[2*o+1]=U(u);else if(yr(u)&&u.length===2)t[2*o]=u[0],t[2*o+1]=u[1];else throw new TypeError(v("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",u));return n});E(y.prototype,"reverse",function(){var r,e,t,i,n,o;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,r=this._buffer,i=Bn(t/2),n=0;n<i;n++)o=t-n-1,e=r[2*n],r[2*n]=r[2*o],r[2*o]=e,e=r[2*n+1],r[2*n+1]=r[2*o+1],r[2*o+1]=e;return this});E(y.prototype,"set",function(r){var e,t,i,n,o,u,w,s,c;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(t=arguments[1],!H(t))throw new TypeError(v("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(j(r)){if(t>=this._length)throw new RangeError(v("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));t*=2,i[t]=N(r),i[t+1]=U(r);return}if(_(r)){if(u=r._length,t+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,c=i.byteOffset+t*S,e.buffer===i.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(n=new C(e.length),s=0;s<e.length;s++)n[s]=e[s];e=n}for(t*=2,c=0,s=0;s<u;s++)i[t]=e[c],i[t+1]=e[c+1],t+=2,c+=2;return}if(cr(r)){for(u=r.length,s=0;s<u;s++)if(!j(r[s])){o=!0;break}if(o){if(!K(u))throw new RangeError(v("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",u));if(t+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,c=i.byteOffset+t*S,e.buffer===i.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(n=new C(u),s=0;s<u;s++)n[s]=e[s];e=n}for(t*=2,u/=2,c=0,s=0;s<u;s++)i[t]=e[c],i[t+1]=e[c+1],t+=2,c+=2;return}if(t+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,s=0;s<u;s++)w=r[s],i[t]=N(w),i[t+1]=U(w),t+=2;return}throw new TypeError(v("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r))});E(y.prototype,"some",function(r,e){var t,i;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(v("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(r.call(e,k(t,i),i,this))return!0;return!1});E(y.prototype,"subarray",function(r,e){var t,i,n;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,n=this._length,arguments.length===0)r=0,e=n;else{if(!O(r))throw new TypeError(v("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=n,r<0&&(r=0)),arguments.length===1)e=n;else{if(!O(e))throw new TypeError(v("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n)}}return r>=n?(n=0,t=i.byteLength):r>=e?(n=0,t=i.byteOffset+r*S):(n=e-r,t=i.byteOffset+r*S),new this.constructor(i.buffer,t,n<0?0:n)});E(y.prototype,"toReversed",function(){var r,e,t,i,n,o;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,e=new this.constructor(t),i=this._buffer,r=e._buffer,n=0;n<t;n++)o=t-n-1,r[2*n]=i[2*o],r[2*n+1]=i[2*o+1];return e});E(y.prototype,"toString",function(){var r,e,t;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=this._buffer,t=0;t<this._length;t++)r.push(k(e,t).toString());return r.join(",")});E(y.prototype,"with",function(r,e){var t,i,n;if(!_(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!O(r))throw new TypeError(v("invalid argument. First argument must be an integer. Value: `%s`.",r));if(n=this._length,r<0&&(r+=n),r<0||r>=n)throw new RangeError(v("invalid argument. Index argument is out-of-bounds. Value: `%s`.",r));if(!j(e))throw new TypeError(v("invalid argument. Second argument must be a complex number. Value: `%s`.",e));return i=new this.constructor(this._buffer),t=i._buffer,t[2*r]=N(e),t[2*r+1]=U(e),i});ot.exports=y});var ft=m((so,st)=>{"use strict";var In=ut();st.exports=In});var ht=m((fo,lt)=>{"use strict";var Wn=xr(),Gn=Fr(),Hn=Mr(),Dn=Ir(),Jn=Kr(),Kn=ee(),Qn=ue(),Xn=ur(),Zn=fr(),$n=De(),ra=ft(),ea=[[Zn,"Float64Array"],[Xn,"Float32Array"],[Kn,"Int32Array"],[Qn,"Uint32Array"],[Dn,"Int16Array"],[Jn,"Uint16Array"],[Wn,"Int8Array"],[Gn,"Uint8Array"],[Hn,"Uint8ClampedArray"],[$n,"Complex64Array"],[ra,"Complex128Array"]];lt.exports=ea});var mt=m((lo,vt)=>{"use strict";var ta=f("@stdlib/assert/instance-of"),ia=f("@stdlib/utils/constructor-name"),na=f("@stdlib/utils/get-prototype-of"),W=ht();function aa(a){var r,e;for(e=0;e<W.length;e++)if(ta(a,W[e][0]))return W[e][1];for(;a;){for(r=ia(a),e=0;e<W.length;e++)if(r===W[e][1])return W[e][1];a=na(a)}}vt.exports=aa});var pt=m((ho,gt)=>{"use strict";var oa=f("@stdlib/assert/is-typed-array"),ua=f("@stdlib/assert/is-complex-typed-array"),sa=f("@stdlib/strided/base/reinterpret-complex64"),fa=f("@stdlib/strided/base/reinterpret-complex128"),la=f("@stdlib/string/format"),ha=mt();function va(a){var r,e,t;if(oa(a))r=a;else if(ua(a))a.BYTES_PER_ELEMENT===8?r=sa(a,0):r=fa(a,0);else throw new TypeError(la("invalid argument. Must provide a typed array. Value: `%s`.",a));for(e={type:ha(a),data:[]},t=0;t<r.length;t++)e.data.push(r[t]);return e}gt.exports=va});var wr=m((vo,yt)=>{"use strict";var ma=pt();yt.exports=ma});var P={};dt(P,{default:()=>ya});var ga=br(wr());Y(P,br(wr()));var{default:ct,...pa}=ga,ya=ct!==void 0?ct:pa;export{ya as default};
/*! Bundled license information:

@stdlib/array/int8/lib/main.js:
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

@stdlib/array/int8/lib/polyfill.js:
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

@stdlib/array/int8/lib/index.js:
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

@stdlib/array/uint8/lib/main.js:
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

@stdlib/array/uint8/lib/polyfill.js:
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

@stdlib/array/uint8/lib/index.js:
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

@stdlib/array/uint8c/lib/main.js:
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

@stdlib/array/uint8c/lib/polyfill.js:
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

@stdlib/array/uint8c/lib/index.js:
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

@stdlib/array/int16/lib/main.js:
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

@stdlib/array/int16/lib/polyfill.js:
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

@stdlib/array/int16/lib/index.js:
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

@stdlib/array/uint16/lib/main.js:
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

@stdlib/array/uint16/lib/polyfill.js:
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

@stdlib/array/uint16/lib/index.js:
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

@stdlib/array/int32/lib/main.js:
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

@stdlib/array/int32/lib/polyfill.js:
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

@stdlib/array/int32/lib/index.js:
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

@stdlib/array/uint32/lib/main.js:
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

@stdlib/array/uint32/lib/polyfill.js:
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

@stdlib/array/uint32/lib/index.js:
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

@stdlib/array/float32/lib/main.js:
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

@stdlib/array/float32/lib/polyfill.js:
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

@stdlib/array/float32/lib/index.js:
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

@stdlib/array/float64/lib/main.js:
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

@stdlib/array/float64/lib/polyfill.js:
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

@stdlib/array/float64/lib/index.js:
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

@stdlib/array/base/assert/is-complex64array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
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

@stdlib/array/base/assert/is-complex64array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
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

@stdlib/array/base/assert/is-complex128array/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
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

@stdlib/array/base/assert/is-complex128array/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2024 The Stdlib Authors.
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

@stdlib/array/base/getter/lib/main.js:
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

@stdlib/array/base/getter/lib/index.js:
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

@stdlib/array/base/accessor-getter/lib/main.js:
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

@stdlib/array/base/accessor-getter/lib/index.js:
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

@stdlib/array/complex64/lib/from_iterator.js:
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

@stdlib/array/complex64/lib/from_iterator_map.js:
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

@stdlib/array/complex64/lib/from_array.js:
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

@stdlib/array/complex64/lib/main.js:
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

@stdlib/array/complex64/lib/index.js:
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

@stdlib/array/complex128/lib/from_iterator.js:
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

@stdlib/array/complex128/lib/from_iterator_map.js:
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

@stdlib/array/complex128/lib/from_array.js:
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

@stdlib/array/complex128/lib/main.js:
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

@stdlib/array/complex128/lib/index.js:
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

@stdlib/array/to-json/lib/ctors.js:
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

@stdlib/array/to-json/lib/type.js:
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

@stdlib/array/to-json/lib/main.js:
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

@stdlib/array/to-json/lib/index.js:
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
//# sourceMappingURL=to-json.js.map