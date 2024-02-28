/* esm.sh - esbuild bundle(@stdlib/array@0.2.1/base/arraylike2object) denonext production */
import * as __0$ from "/v135/@stdlib/assert@0.2.1/denonext/is-buffer.js";
import * as __1$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array.js";
import * as __2$ from "/v135/@stdlib/utils@0.2.1/denonext/constructor-name.js";
import * as __3$ from "/v135/@stdlib/assert@0.2.1/denonext/has-uint8array-support.js";
import * as __4$ from "/v135/@stdlib/assert@0.2.1/denonext/has-uint8clampedarray-support.js";
import * as __5$ from "/v135/@stdlib/assert@0.2.1/denonext/has-int16array-support.js";
import * as __6$ from "/v135/@stdlib/assert@0.2.1/denonext/has-int8array-support.js";
import * as __7$ from "/v135/@stdlib/assert@0.2.1/denonext/has-float32array-support.js";
import * as __8$ from "/v135/@stdlib/assert@0.2.1/denonext/has-float64array-support.js";
import * as __9$ from "/v135/@stdlib/assert@0.2.1/denonext/has-uint32array-support.js";
import * as __a$ from "/v135/@stdlib/assert@0.2.1/denonext/has-int32array-support.js";
import * as __b$ from "/v135/@stdlib/assert@0.2.1/denonext/has-uint16array-support.js";
import * as __c$ from "/v135/@stdlib/assert@0.2.1/denonext/is-nonnegative-integer.js";
import * as __d$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array-like-object.js";
import * as __e$ from "/v135/@stdlib/assert@0.2.1/denonext/is-collection.js";
import * as __f$ from "/v135/@stdlib/assert@0.2.1/denonext/is-arraybuffer.js";
import * as __10$ from "/v135/@stdlib/assert@0.2.1/denonext/is-object.js";
import * as __11$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array.js";
import * as __12$ from "/v135/@stdlib/assert@0.2.1/denonext/is-string.js";
import * as __13$ from "/v135/@stdlib/assert@0.2.1/denonext/is-function.js";
import * as __14$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __15$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-even.js";
import * as __16$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-integer.js";
import * as __17$ from "/v135/@stdlib/assert@0.2.1/denonext/has-iterator-symbol-support.js";
import * as __18$ from "/v135/@stdlib/symbol@0.2.1/denonext/iterator.js";
import * as __19$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __1a$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-accessor.js";
import * as __1b$ from "/v135/@stdlib/complex@0.2.1/denonext/float32.js";
import * as __1c$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __1d$ from "/v135/@stdlib/complex@0.2.1/denonext/realf.js";
import * as __1e$ from "/v135/@stdlib/complex@0.2.1/denonext/imagf.js";
import * as __1f$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/floor.js";
import * as __20$ from "/v135/@stdlib/strided@0.2.1/denonext/base/reinterpret-complex64.js";
import * as __21$ from "/v135/@stdlib/strided@0.2.1/denonext/base/reinterpret-complex128.js";
import * as __22$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __23$ from "/v135/@stdlib/complex@0.2.1/denonext/realf.js";
import * as __24$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array-like-object.js";
import * as __25$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array-like-object.js";
import * as __26$ from "/v135/@stdlib/complex@0.2.1/denonext/imagf.js";
import * as __27$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __28$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __29$ from "/v135/@stdlib/complex@0.2.1/denonext/realf.js";
import * as __2a$ from "/v135/@stdlib/complex@0.2.1/denonext/realf.js";
import * as __2b$ from "/v135/@stdlib/complex@0.2.1/denonext/imagf.js";
import * as __2c$ from "/v135/@stdlib/complex@0.2.1/denonext/imagf.js";
import * as __2d$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __2e$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __2f$ from "/v135/@stdlib/assert@0.2.1/denonext/is-nonnegative-integer.js";
import * as __30$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array-like-object.js";
import * as __31$ from "/v135/@stdlib/assert@0.2.1/denonext/is-collection.js";
import * as __32$ from "/v135/@stdlib/assert@0.2.1/denonext/is-arraybuffer.js";
import * as __33$ from "/v135/@stdlib/assert@0.2.1/denonext/is-object.js";
import * as __34$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array.js";
import * as __35$ from "/v135/@stdlib/assert@0.2.1/denonext/is-string.js";
import * as __36$ from "/v135/@stdlib/assert@0.2.1/denonext/is-function.js";
import * as __37$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __38$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-even.js";
import * as __39$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-integer.js";
import * as __3a$ from "/v135/@stdlib/assert@0.2.1/denonext/has-iterator-symbol-support.js";
import * as __3b$ from "/v135/@stdlib/symbol@0.2.1/denonext/iterator.js";
import * as __3c$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __3d$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-accessor.js";
import * as __3e$ from "/v135/@stdlib/complex@0.2.1/denonext/float64.js";
import * as __3f$ from "/v135/@stdlib/complex@0.2.1/denonext/real.js";
import * as __40$ from "/v135/@stdlib/complex@0.2.1/denonext/imag.js";
import * as __41$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/floor.js";
import * as __42$ from "/v135/@stdlib/strided@0.2.1/denonext/base/reinterpret-complex64.js";
import * as __43$ from "/v135/@stdlib/strided@0.2.1/denonext/base/reinterpret-complex128.js";
import * as __44$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __45$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __46$ from "/v135/@stdlib/complex@0.2.1/denonext/real.js";
import * as __47$ from "/v135/@stdlib/complex@0.2.1/denonext/imag.js";
import * as __48$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array-like-object.js";
import * as __49$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __4a$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __4b$ from "/v135/@stdlib/complex@0.2.1/denonext/real.js";
import * as __4c$ from "/v135/@stdlib/complex@0.2.1/denonext/imag.js";
import * as __4d$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array-like-object.js";
import * as __4e$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __4f$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __50$ from "/v135/@stdlib/complex@0.2.1/denonext/real.js";
import * as __51$ from "/v135/@stdlib/complex@0.2.1/denonext/imag.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/assert/is-buffer":return e(__0$);case"@stdlib/assert/is-array":return e(__1$);case"@stdlib/utils/constructor-name":return e(__2$);case"@stdlib/assert/has-uint8array-support":return e(__3$);case"@stdlib/assert/has-uint8clampedarray-support":return e(__4$);case"@stdlib/assert/has-int16array-support":return e(__5$);case"@stdlib/assert/has-int8array-support":return e(__6$);case"@stdlib/assert/has-float32array-support":return e(__7$);case"@stdlib/assert/has-float64array-support":return e(__8$);case"@stdlib/assert/has-uint32array-support":return e(__9$);case"@stdlib/assert/has-int32array-support":return e(__a$);case"@stdlib/assert/has-uint16array-support":return e(__b$);case"@stdlib/assert/is-nonnegative-integer":return e(__c$);case"@stdlib/assert/is-array-like-object":return e(__d$);case"@stdlib/assert/is-collection":return e(__e$);case"@stdlib/assert/is-arraybuffer":return e(__f$);case"@stdlib/assert/is-object":return e(__10$);case"@stdlib/assert/is-string":return e(__12$);case"@stdlib/assert/is-function":return e(__13$);case"@stdlib/assert/is-complex-like":return e(__14$);case"@stdlib/math/base/assert/is-even":return e(__15$);case"@stdlib/math/base/assert/is-integer":return e(__16$);case"@stdlib/assert/has-iterator-symbol-support":return e(__17$);case"@stdlib/symbol/iterator":return e(__18$);case"@stdlib/utils/define-nonenumerable-read-only-property":return e(__19$);case"@stdlib/utils/define-nonenumerable-read-only-accessor":return e(__1a$);case"@stdlib/complex/float32":return e(__1b$);case"@stdlib/string/format":return e(__1c$);case"@stdlib/complex/realf":return e(__1d$);case"@stdlib/complex/imagf":return e(__1e$);case"@stdlib/math/base/special/floor":return e(__1f$);case"@stdlib/strided/base/reinterpret-complex64":return e(__20$);case"@stdlib/strided/base/reinterpret-complex128":return e(__21$);case"@stdlib/complex/float64":return e(__3e$);case"@stdlib/complex/real":return e(__3f$);case"@stdlib/complex/imag":return e(__40$);default:throw new Error("module \""+n+"\" not found");}};
var It=Object.create;var $=Object.defineProperty;var Wt=Object.getOwnPropertyDescriptor;var Gt=Object.getOwnPropertyNames;var Dt=Object.getPrototypeOf,Ht=Object.prototype.hasOwnProperty;var f=(a=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(a,{get:(r,e)=>(typeof require<"u"?require:r)[e]}):a)(function(a){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+a+'" is not supported')});var l=(a,r)=>()=>(r||a((r={exports:{}}).exports,r),r.exports),Jt=(a,r)=>{for(var e in r)$(a,e,{get:r[e],enumerable:!0})},Z=(a,r,e,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of Gt(r))!Ht.call(a,i)&&i!==e&&$(a,i,{get:()=>r[i],enumerable:!(t=Wt(r,i))||t.enumerable});return a},Y=(a,r,e)=>(Z(a,r,"default"),e&&Z(e,r,"default")),wr=(a,r,e)=>(e=a!=null?It(Dt(a)):{},Z(r||!a||!a.__esModule?$(e,"default",{value:a,enumerable:!0}):e,a));var Tr=l((wo,Er)=>{"use strict";var br="function";function Kt(a){return typeof a.get===br&&typeof a.set===br}Er.exports=Kt});var _r=l((bo,dr)=>{"use strict";var Qt=Tr();dr.exports=Qt});var Ar=l((Eo,qr)=>{"use strict";var xr={float64:Xt,float32:Zt,int32:$t,int16:ri,int8:ei,uint32:ti,uint16:ii,uint8:ni,uint8c:ai,generic:oi,default:ui};function Xt(a,r){return a[r]}function Zt(a,r){return a[r]}function $t(a,r){return a[r]}function ri(a,r){return a[r]}function ei(a,r){return a[r]}function ti(a,r){return a[r]}function ii(a,r){return a[r]}function ni(a,r){return a[r]}function ai(a,r){return a[r]}function oi(a,r){return a[r]}function ui(a,r){return a[r]}function si(a){var r=xr[a];return typeof r=="function"?r:xr.default}qr.exports=si});var D=l((To,Vr)=>{"use strict";var fi=Ar();Vr.exports=fi});var kr=l((_o,Sr)=>{"use strict";var Lr={float64:li,float32:hi,int32:vi,int16:mi,int8:gi,uint32:pi,uint16:ci,uint8:yi,uint8c:wi,generic:bi,default:Ei};function li(a,r,e){a[r]=e}function hi(a,r,e){a[r]=e}function vi(a,r,e){a[r]=e}function mi(a,r,e){a[r]=e}function gi(a,r,e){a[r]=e}function pi(a,r,e){a[r]=e}function ci(a,r,e){a[r]=e}function yi(a,r,e){a[r]=e}function wi(a,r,e){a[r]=e}function bi(a,r,e){a[r]=e}function Ei(a,r,e){a[r]=e}function Ti(a){var r=Lr[a];return typeof r=="function"?r:Lr.default}Sr.exports=Ti});var Rr=l((xo,Fr)=>{"use strict";var di=kr();Fr.exports=di});var Or=l((qo,jr)=>{"use strict";var Cr={complex128:_i,complex64:xi,default:qi};function _i(a,r){return a.get(r)}function xi(a,r){return a.get(r)}function qi(a,r){return a.get(r)}function Ai(a){var r=Cr[a];return typeof r=="function"?r:Cr.default}jr.exports=Ai});var H=l((Ao,Br)=>{"use strict";var Vi=Or();Br.exports=Vi});var Pr=l((Vo,Ur)=>{"use strict";var Mr={complex128:Li,complex64:Si,default:ki};function Li(a,r,e){a.set(e,r)}function Si(a,r,e){a.set(e,r)}function ki(a,r,e){a.set(e,r)}function Fi(a){var r=Mr[a];return typeof r=="function"?r:Mr.default}Ur.exports=Fi});var Yr=l((Lo,Nr)=>{"use strict";var Ri=Pr();Nr.exports=Ri});var Ir=l((So,zr)=>{"use strict";var Ci={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};zr.exports=Ci});var Gr=l((ko,Wr)=>{"use strict";var ji=typeof Float64Array=="function"?Float64Array:void 0;Wr.exports=ji});var Hr=l((Fo,Dr)=>{"use strict";function Oi(){throw new Error("not implemented")}Dr.exports=Oi});var er=l((Ro,Jr)=>{"use strict";var Bi=f("@stdlib/assert/has-float64array-support"),Mi=Gr(),Ui=Hr(),rr;Bi()?rr=Mi:rr=Ui;Jr.exports=rr});var Qr=l((Co,Kr)=>{"use strict";var Pi=typeof Float32Array=="function"?Float32Array:void 0;Kr.exports=Pi});var Zr=l((jo,Xr)=>{"use strict";function Ni(){throw new Error("not implemented")}Xr.exports=Ni});var ir=l((Oo,$r)=>{"use strict";var Yi=f("@stdlib/assert/has-float32array-support"),zi=Qr(),Ii=Zr(),tr;Yi()?tr=zi:tr=Ii;$r.exports=tr});var ee=l((Bo,re)=>{"use strict";var Wi=typeof Uint32Array=="function"?Uint32Array:void 0;re.exports=Wi});var ie=l((Mo,te)=>{"use strict";function Gi(){throw new Error("not implemented")}te.exports=Gi});var ae=l((Uo,ne)=>{"use strict";var Di=f("@stdlib/assert/has-uint32array-support"),Hi=ee(),Ji=ie(),nr;Di()?nr=Hi:nr=Ji;ne.exports=nr});var ue=l((Po,oe)=>{"use strict";var Ki=typeof Int32Array=="function"?Int32Array:void 0;oe.exports=Ki});var fe=l((No,se)=>{"use strict";function Qi(){throw new Error("not implemented")}se.exports=Qi});var he=l((Yo,le)=>{"use strict";var Xi=f("@stdlib/assert/has-int32array-support"),Zi=ue(),$i=fe(),ar;Xi()?ar=Zi:ar=$i;le.exports=ar});var me=l((zo,ve)=>{"use strict";var rn=typeof Uint16Array=="function"?Uint16Array:void 0;ve.exports=rn});var pe=l((Io,ge)=>{"use strict";function en(){throw new Error("not implemented")}ge.exports=en});var ye=l((Wo,ce)=>{"use strict";var tn=f("@stdlib/assert/has-uint16array-support"),nn=me(),an=pe(),or;tn()?or=nn:or=an;ce.exports=or});var be=l((Go,we)=>{"use strict";var on=typeof Int16Array=="function"?Int16Array:void 0;we.exports=on});var Te=l((Do,Ee)=>{"use strict";function un(){throw new Error("not implemented")}Ee.exports=un});var _e=l((Ho,de)=>{"use strict";var sn=f("@stdlib/assert/has-int16array-support"),fn=be(),ln=Te(),ur;sn()?ur=fn:ur=ln;de.exports=ur});var qe=l((Jo,xe)=>{"use strict";var hn=typeof Uint8Array=="function"?Uint8Array:void 0;xe.exports=hn});var Ve=l((Ko,Ae)=>{"use strict";function vn(){throw new Error("not implemented")}Ae.exports=vn});var Se=l((Qo,Le)=>{"use strict";var mn=f("@stdlib/assert/has-uint8array-support"),gn=qe(),pn=Ve(),sr;mn()?sr=gn:sr=pn;Le.exports=sr});var Fe=l((Xo,ke)=>{"use strict";var cn=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;ke.exports=cn});var Ce=l((Zo,Re)=>{"use strict";function yn(){throw new Error("not implemented")}Re.exports=yn});var Oe=l(($o,je)=>{"use strict";var wn=f("@stdlib/assert/has-uint8clampedarray-support"),bn=Fe(),En=Ce(),fr;wn()?fr=bn:fr=En;je.exports=fr});var Me=l((ru,Be)=>{"use strict";var Tn=typeof Int8Array=="function"?Int8Array:void 0;Be.exports=Tn});var Pe=l((eu,Ue)=>{"use strict";function dn(){throw new Error("not implemented")}Ue.exports=dn});var Ye=l((tu,Ne)=>{"use strict";var _n=f("@stdlib/assert/has-int8array-support"),xn=Me(),qn=Pe(),lr;_n()?lr=xn:lr=qn;Ne.exports=lr});var Ie=l((iu,ze)=>{"use strict";var An=8;function Vn(a){return typeof a=="object"&&a!==null&&a.constructor.name==="Complex64Array"&&a.BYTES_PER_ELEMENT===An}ze.exports=Vn});var hr=l((nu,We)=>{"use strict";var Ln=Ie();We.exports=Ln});var De=l((au,Ge)=>{"use strict";var Sn=16;function kn(a){return typeof a=="object"&&a!==null&&a.constructor.name==="Complex128Array"&&a.BYTES_PER_ELEMENT===Sn}Ge.exports=kn});var vr=l((ou,He)=>{"use strict";var Fn=De();He.exports=Fn});var Ke=l((uu,Je)=>{"use strict";var Rn=f("@stdlib/assert/is-array-like-object"),Cn=f("@stdlib/assert/is-complex-like"),jn=f("@stdlib/complex/realf"),On=f("@stdlib/complex/imagf"),Bn=f("@stdlib/string/format");function Mn(a){var r,e,t;for(r=[];e=a.next(),!e.done;)if(t=e.value,Rn(t)&&t.length>=2)r.push(t[0],t[1]);else if(Cn(t))r.push(jn(t),On(t));else return new TypeError(Bn("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",t));return r}Je.exports=Mn});var Xe=l((su,Qe)=>{"use strict";var Un=f("@stdlib/assert/is-array-like-object"),Pn=f("@stdlib/assert/is-complex-like"),Nn=f("@stdlib/complex/realf"),Yn=f("@stdlib/complex/imagf"),zn=f("@stdlib/string/format");function In(a,r,e){var t,i,n,o;for(t=[],o=-1;i=a.next(),!i.done;)if(o+=1,n=r.call(e,i.value,o),Un(n)&&n.length>=2)t.push(n[0],n[1]);else if(Pn(n))t.push(Nn(n),Yn(n));else return new TypeError(zn("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return t}Qe.exports=In});var $e=l((fu,Ze)=>{"use strict";var Wn=f("@stdlib/assert/is-complex-like"),Gn=f("@stdlib/complex/realf"),Dn=f("@stdlib/complex/imagf");function Hn(a,r){var e,t,i,n;for(e=r.length,n=0,i=0;i<e;i++){if(t=r[i],!Wn(t))return null;a[n]=Gn(t),a[n+1]=Dn(t),n+=2}return a}Ze.exports=Hn});var ut=l((lu,ot)=>{"use strict";var W=f("@stdlib/assert/is-nonnegative-integer").isPrimitive,mr=f("@stdlib/assert/is-array-like-object"),gr=f("@stdlib/assert/is-collection"),rt=f("@stdlib/assert/is-arraybuffer"),et=f("@stdlib/assert/is-object"),Jn=f("@stdlib/assert/is-array"),Kn=f("@stdlib/assert/is-string").isPrimitive,x=f("@stdlib/assert/is-function"),R=f("@stdlib/assert/is-complex-like"),J=f("@stdlib/math/base/assert/is-even"),A=f("@stdlib/math/base/assert/is-integer"),Qn=hr(),Xn=vr(),Zn=f("@stdlib/assert/has-iterator-symbol-support"),z=f("@stdlib/symbol/iterator"),b=f("@stdlib/utils/define-nonenumerable-read-only-property"),K=f("@stdlib/utils/define-nonenumerable-read-only-accessor"),F=ir(),tt=f("@stdlib/complex/float32"),h=f("@stdlib/string/format"),B=f("@stdlib/complex/realf"),M=f("@stdlib/complex/imagf"),$n=f("@stdlib/math/base/special/floor"),ra=f("@stdlib/strided/base/reinterpret-complex64"),ea=f("@stdlib/strided/base/reinterpret-complex128"),ta=D(),ia=H(),it=Ke(),na=Xe(),aa=$e(),V=F.BYTES_PER_ELEMENT*2,nt=Zn();function T(a){return a instanceof p||typeof a=="object"&&a!==null&&(a.constructor.name==="Complex64Array"||a.constructor.name==="Complex128Array")&&typeof a._length=="number"&&typeof a._buffer=="object"}function at(a){return a===p||a.name==="Complex128Array"}function L(a,r){return r*=2,new tt(a[r],a[r+1])}function p(){var a,r,e,t;if(r=arguments.length,!(this instanceof p))return r===0?new p:r===1?new p(arguments[0]):r===2?new p(arguments[0],arguments[1]):new p(arguments[0],arguments[1],arguments[2]);if(r===0)e=new F(0);else if(r===1)if(W(arguments[0]))e=new F(arguments[0]*2);else if(gr(arguments[0]))if(e=arguments[0],t=e.length,t&&Jn(e)&&R(e[0])){if(e=aa(new F(t*2),e),e===null){if(!J(t))throw new RangeError(h("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",t));e=new F(arguments[0])}}else{if(Qn(e))e=ra(e,0);else if(Xn(e))e=ea(e,0);else if(!J(t))throw new RangeError(h("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",t));e=new F(e)}else if(rt(arguments[0])){if(e=arguments[0],!A(e.byteLength/V))throw new RangeError(h("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",V,e.byteLength));e=new F(e)}else if(et(arguments[0])){if(e=arguments[0],nt===!1)throw new TypeError(h("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",e));if(!x(e[z]))throw new TypeError(h("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",e));if(e=e[z](),!x(e.next))throw new TypeError(h("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",e));if(e=it(e),e instanceof Error)throw e;e=new F(e)}else throw new TypeError(h("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(e=arguments[0],!rt(e))throw new TypeError(h("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",e));if(a=arguments[1],!W(a))throw new TypeError(h("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",a));if(!A(a/V))throw new RangeError(h("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",V,a));if(r===2){if(t=e.byteLength-a,!A(t/V))throw new RangeError(h("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",V,t));e=new F(e,a)}else{if(t=arguments[2],!W(t))throw new TypeError(h("invalid argument. Length must be a nonnegative integer. Value: `%s`.",t));if(t*V>e.byteLength-a)throw new RangeError(h("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",t*V));e=new F(e,a,t*2)}}return b(this,"_buffer",e),b(this,"_length",e.length/2),this}b(p,"BYTES_PER_ELEMENT",V);b(p,"name","Complex64Array");b(p,"from",function(r){var e,t,i,n,o,u,w,s,y,g,v,_;if(!x(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(t=arguments.length,t>1){if(i=arguments[1],!x(i))throw new TypeError(h("invalid argument. Second argument must be a function. Value: `%s`.",i));t>2&&(e=arguments[2])}if(T(r)){if(s=r.length,i){for(n=new this(s),o=n._buffer,_=0,v=0;v<s;v++){if(g=i.call(e,r.get(v),v),R(g))o[_]=B(g),o[_+1]=M(g);else if(mr(g)&&g.length>=2)o[_]=g[0],o[_+1]=g[1];else throw new TypeError(h("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",g));_+=2}return n}return new this(r)}if(gr(r)){if(i){for(s=r.length,r.get&&r.set?w=ia("default"):w=ta("default"),v=0;v<s;v++)if(!R(w(r,v))){y=!0;break}if(y){if(!J(s))throw new RangeError(h("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,s));for(n=new this(s/2),o=n._buffer,v=0;v<s;v++)o[v]=i.call(e,w(r,v),v);return n}for(n=new this(s),o=n._buffer,_=0,v=0;v<s;v++){if(g=i.call(e,w(r,v),v),R(g))o[_]=B(g),o[_+1]=M(g);else if(mr(g)&&g.length>=2)o[_]=g[0],o[_+1]=g[1];else throw new TypeError(h("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",g));_+=2}return n}return new this(r)}if(et(r)&&nt&&x(r[z])){if(o=r[z](),!x(o.next))throw new TypeError(h("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if(i?u=na(o,i,e):u=it(o),u instanceof Error)throw u;for(s=u.length/2,n=new this(s),o=n._buffer,v=0;v<s;v++)o[v]=u[v];return n}throw new TypeError(h("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))});b(p,"of",function(){var r,e;if(!x(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)});b(p.prototype,"at",function(r){if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!A(r))throw new TypeError(h("invalid argument. Must provide an integer. Value: `%s`.",r));if(r<0&&(r+=this._length),!(r<0||r>=this._length))return L(this._buffer,r)});K(p.prototype,"buffer",function(){return this._buffer.buffer});K(p.prototype,"byteLength",function(){return this._buffer.byteLength});K(p.prototype,"byteOffset",function(){return this._buffer.byteOffset});b(p.prototype,"BYTES_PER_ELEMENT",p.BYTES_PER_ELEMENT);b(p.prototype,"copyWithin",function(r,e){if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(r*2,e*2):this._buffer.copyWithin(r*2,e*2,arguments[2]*2),this});b(p.prototype,"entries",function(){var r,e,t,i,n,o,u;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,i=this._length,o=-1,u=-2,t={},b(t,"next",w),b(t,"return",s),z&&b(t,z,y),t;function w(){var g;return o+=1,n||o>=i?{done:!0}:(u+=2,g=new tt(r[u],r[u+1]),{value:[o,g],done:!1})}function s(g){return n=!0,arguments.length?{value:g,done:!0}:{done:!0}}function y(){return e.entries()}});b(p.prototype,"every",function(r,e){var t,i;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(!r.call(e,L(t,i),i,this))return!1;return!0});b(p.prototype,"fill",function(r,e,t){var i,n,o,u,w,s;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!R(r))throw new TypeError(h("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(i=this._buffer,n=this._length,arguments.length>1){if(!A(e))throw new TypeError(h("invalid argument. Second argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=n,e<0&&(e=0)),arguments.length>2){if(!A(t))throw new TypeError(h("invalid argument. Third argument must be an integer. Value: `%s`.",t));t<0&&(t+=n,t<0&&(t=0)),t>n&&(t=n)}else t=n}else e=0,t=n;for(u=B(r),w=M(r),s=e;s<t;s++)o=2*s,i[o]=u,i[o+1]=w;return this});b(p.prototype,"filter",function(r,e){var t,i,n,o;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=[],n=0;n<this._length;n++)o=L(t,n),r.call(e,o,n,this)&&i.push(o);return new this.constructor(i)});b(p.prototype,"find",function(r,e){var t,i,n;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(n=L(t,i),r.call(e,n,i,this))return n});b(p.prototype,"findIndex",function(r,e){var t,i,n;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(n=L(t,i),r.call(e,n,i,this))return i;return-1});b(p.prototype,"findLast",function(r,e){var t,i,n;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=this._length-1;i>=0;i--)if(n=L(t,i),r.call(e,n,i,this))return n});b(p.prototype,"findLastIndex",function(r,e){var t,i,n;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=this._length-1;i>=0;i--)if(n=L(t,i),r.call(e,n,i,this))return i;return-1});b(p.prototype,"forEach",function(r,e){var t,i,n;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)n=L(t,i),r.call(e,n,i,this)});b(p.prototype,"get",function(r){if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!W(r))throw new TypeError(h("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return L(this._buffer,r)});b(p.prototype,"includes",function(r,e){var t,i,n,o,u;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!R(r))throw new TypeError(h("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!A(e))throw new TypeError(h("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0&&(e+=this._length,e<0&&(e=0))}else e=0;for(n=B(r),o=M(r),t=this._buffer,u=e;u<this._length;u++)if(i=2*u,n===t[i]&&o===t[i+1])return!0;return!1});b(p.prototype,"indexOf",function(r,e){var t,i,n,o,u;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!R(r))throw new TypeError(h("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!A(e))throw new TypeError(h("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0&&(e+=this._length,e<0&&(e=0))}else e=0;for(n=B(r),o=M(r),t=this._buffer,u=e;u<this._length;u++)if(i=2*u,n===t[i]&&o===t[i+1])return u;return-1});b(p.prototype,"join",function(r){var e,t,i,n;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)i=",";else if(Kn(r))i=r;else throw new TypeError(h("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[],t=this._buffer,n=0;n<this._length;n++)e.push(L(t,n).toString());return e.join(i)});b(p.prototype,"lastIndexOf",function(r,e){var t,i,n,o,u;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!R(r))throw new TypeError(h("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!A(e))throw new TypeError(h("invalid argument. Second argument must be an integer. Value: `%s`.",e));e>=this._length?e=this._length-1:e<0&&(e+=this._length)}else e=this._length-1;for(n=B(r),o=M(r),t=this._buffer,u=e;u>=0;u--)if(i=2*u,n===t[i]&&o===t[i+1])return u;return-1});K(p.prototype,"length",function(){return this._length});b(p.prototype,"map",function(r,e){var t,i,n,o,u;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",r));for(i=this._buffer,n=new this.constructor(this._length),t=n._buffer,o=0;o<this._length;o++)if(u=r.call(e,L(i,o),o,this),R(u))t[2*o]=B(u),t[2*o+1]=M(u);else if(mr(u)&&u.length===2)t[2*o]=u[0],t[2*o+1]=u[1];else throw new TypeError(h("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",u));return n});b(p.prototype,"reverse",function(){var r,e,t,i,n,o;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,r=this._buffer,i=$n(t/2),n=0;n<i;n++)o=t-n-1,e=r[2*n],r[2*n]=r[2*o],r[2*o]=e,e=r[2*n+1],r[2*n+1]=r[2*o+1],r[2*o+1]=e;return this});b(p.prototype,"set",function(r){var e,t,i,n,o,u,w,s,y;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(t=arguments[1],!W(t))throw new TypeError(h("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(R(r)){if(t>=this._length)throw new RangeError(h("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));t*=2,i[t]=B(r),i[t+1]=M(r);return}if(T(r)){if(u=r._length,t+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,y=i.byteOffset+t*V,e.buffer===i.buffer&&e.byteOffset<y&&e.byteOffset+e.byteLength>y){for(n=new F(e.length),s=0;s<e.length;s++)n[s]=e[s];e=n}for(t*=2,y=0,s=0;s<u;s++)i[t]=e[y],i[t+1]=e[y+1],t+=2,y+=2;return}if(gr(r)){for(u=r.length,s=0;s<u;s++)if(!R(r[s])){o=!0;break}if(o){if(!J(u))throw new RangeError(h("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",u));if(t+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,y=i.byteOffset+t*V,e.buffer===i.buffer&&e.byteOffset<y&&e.byteOffset+e.byteLength>y){for(n=new F(u),s=0;s<u;s++)n[s]=e[s];e=n}for(t*=2,u/=2,y=0,s=0;s<u;s++)i[t]=e[y],i[t+1]=e[y+1],t+=2,y+=2;return}if(t+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,s=0;s<u;s++)w=r[s],i[t]=B(w),i[t+1]=M(w),t+=2;return}throw new TypeError(h("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r))});b(p.prototype,"slice",function(r,e){var t,i,n,o,u,w,s;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(u=this._buffer,w=this._length,arguments.length===0)r=0,e=w;else{if(!A(r))throw new TypeError(h("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=w,r<0&&(r=0)),arguments.length===1)e=w;else{if(!A(e))throw new TypeError(h("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0?(e+=w,e<0&&(e=0)):e>w&&(e=w)}}for(r<e?t=e-r:t=0,n=new this.constructor(t),i=n._buffer,s=0;s<t;s++)o=2*(s+r),i[2*s]=u[o],i[2*s+1]=u[o+1];return n});b(p.prototype,"some",function(r,e){var t,i;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(r.call(e,L(t,i),i,this))return!0;return!1});b(p.prototype,"subarray",function(r,e){var t,i,n;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,n=this._length,arguments.length===0)r=0,e=n;else{if(!A(r))throw new TypeError(h("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=n,r<0&&(r=0)),arguments.length===1)e=n;else{if(!A(e))throw new TypeError(h("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n)}}return r>=n?(n=0,t=i.byteLength):r>=e?(n=0,t=i.byteOffset+r*V):(n=e-r,t=i.byteOffset+r*V),new this.constructor(i.buffer,t,n<0?0:n)});b(p.prototype,"toReversed",function(){var r,e,t,i,n,o;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,e=new this.constructor(t),i=this._buffer,r=e._buffer,n=0;n<t;n++)o=t-n-1,r[2*n]=i[2*o],r[2*n+1]=i[2*o+1];return e});b(p.prototype,"toString",function(){var r,e,t;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=this._buffer,t=0;t<this._length;t++)r.push(L(e,t).toString());return r.join(",")});b(p.prototype,"with",function(r,e){var t,i,n;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!A(r))throw new TypeError(h("invalid argument. First argument must be an integer. Value: `%s`.",r));if(n=this._length,r<0&&(r+=n),r<0||r>=n)throw new RangeError(h("invalid argument. Index argument is out-of-bounds. Value: `%s`.",r));if(!R(e))throw new TypeError(h("invalid argument. Second argument must be a complex number. Value: `%s`.",e));return i=new this.constructor(this._buffer),t=i._buffer,t[2*r]=B(e),t[2*r+1]=M(e),i});ot.exports=p});var ft=l((hu,st)=>{"use strict";var oa=ut();st.exports=oa});var ht=l((vu,lt)=>{"use strict";var ua=f("@stdlib/assert/is-array-like-object"),sa=f("@stdlib/assert/is-complex-like"),fa=f("@stdlib/string/format"),la=f("@stdlib/complex/real"),ha=f("@stdlib/complex/imag");function va(a){var r,e,t;for(r=[];e=a.next(),!e.done;)if(t=e.value,ua(t)&&t.length>=2)r.push(t[0],t[1]);else if(sa(t))r.push(la(t),ha(t));else return new TypeError(fa("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",t));return r}lt.exports=va});var mt=l((mu,vt)=>{"use strict";var ma=f("@stdlib/assert/is-array-like-object"),ga=f("@stdlib/assert/is-complex-like"),pa=f("@stdlib/string/format"),ca=f("@stdlib/complex/real"),ya=f("@stdlib/complex/imag");function wa(a,r,e){var t,i,n,o;for(t=[],o=-1;i=a.next(),!i.done;)if(o+=1,n=r.call(e,i.value,o),ma(n)&&n.length>=2)t.push(n[0],n[1]);else if(ga(n))t.push(ca(n),ya(n));else return new TypeError(pa("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return t}vt.exports=wa});var pt=l((gu,gt)=>{"use strict";var ba=f("@stdlib/assert/is-complex-like"),Ea=f("@stdlib/complex/real"),Ta=f("@stdlib/complex/imag");function da(a,r){var e,t,i,n;for(e=r.length,n=0,i=0;i<e;i++){if(t=r[i],!ba(t))return null;a[n]=Ea(t),a[n+1]=Ta(t),n+=2}return a}gt.exports=da});var _t=l((pu,dt)=>{"use strict";var G=f("@stdlib/assert/is-nonnegative-integer").isPrimitive,pr=f("@stdlib/assert/is-array-like-object"),cr=f("@stdlib/assert/is-collection"),ct=f("@stdlib/assert/is-arraybuffer"),yt=f("@stdlib/assert/is-object"),_a=f("@stdlib/assert/is-array"),xa=f("@stdlib/assert/is-string"),q=f("@stdlib/assert/is-function"),j=f("@stdlib/assert/is-complex-like"),Q=f("@stdlib/math/base/assert/is-even"),O=f("@stdlib/math/base/assert/is-integer"),qa=hr(),Aa=vr(),Va=f("@stdlib/assert/has-iterator-symbol-support"),I=f("@stdlib/symbol/iterator"),E=f("@stdlib/utils/define-nonenumerable-read-only-property"),X=f("@stdlib/utils/define-nonenumerable-read-only-accessor"),C=er(),wt=f("@stdlib/complex/float64"),U=f("@stdlib/complex/real"),P=f("@stdlib/complex/imag"),La=f("@stdlib/math/base/special/floor"),Sa=f("@stdlib/strided/base/reinterpret-complex64"),ka=f("@stdlib/strided/base/reinterpret-complex128"),Fa=D(),Ra=H(),m=f("@stdlib/string/format"),bt=ht(),Ca=mt(),ja=pt(),S=C.BYTES_PER_ELEMENT*2,Et=Va();function d(a){return a instanceof c||typeof a=="object"&&a!==null&&(a.constructor.name==="Complex64Array"||a.constructor.name==="Complex128Array")&&typeof a._length=="number"&&typeof a._buffer=="object"}function Tt(a){return a===c||a.name==="Complex64Array"}function k(a,r){return r*=2,new wt(a[r],a[r+1])}function c(){var a,r,e,t;if(r=arguments.length,!(this instanceof c))return r===0?new c:r===1?new c(arguments[0]):r===2?new c(arguments[0],arguments[1]):new c(arguments[0],arguments[1],arguments[2]);if(r===0)e=new C(0);else if(r===1)if(G(arguments[0]))e=new C(arguments[0]*2);else if(cr(arguments[0]))if(e=arguments[0],t=e.length,t&&_a(e)&&j(e[0])){if(e=ja(new C(t*2),e),e===null){if(!Q(t))throw new RangeError(m("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",t));e=new C(arguments[0])}}else{if(qa(e))e=Sa(e,0);else if(Aa(e))e=ka(e,0);else if(!Q(t))throw new RangeError(m("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",t));e=new C(e)}else if(ct(arguments[0])){if(e=arguments[0],!O(e.byteLength/S))throw new RangeError(m("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",S,e.byteLength));e=new C(e)}else if(yt(arguments[0])){if(e=arguments[0],Et===!1)throw new TypeError(m("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",e));if(!q(e[I]))throw new TypeError(m("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",e));if(e=e[I](),!q(e.next))throw new TypeError(m("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",e));if(e=bt(e),e instanceof Error)throw e;e=new C(e)}else throw new TypeError(m("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(e=arguments[0],!ct(e))throw new TypeError(m("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",e));if(a=arguments[1],!G(a))throw new TypeError(m("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",a));if(!O(a/S))throw new RangeError(m("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",S,a));if(r===2){if(t=e.byteLength-a,!O(t/S))throw new RangeError(m("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",S,t));e=new C(e,a)}else{if(t=arguments[2],!G(t))throw new TypeError(m("invalid argument. Length must be a nonnegative integer. Value: `%s`.",t));if(t*S>e.byteLength-a)throw new RangeError(m("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",t*S));e=new C(e,a,t*2)}}return E(this,"_buffer",e),E(this,"_length",e.length/2),this}E(c,"BYTES_PER_ELEMENT",S);E(c,"name","Complex128Array");E(c,"from",function(r){var e,t,i,n,o,u,w,s,y,g,v,_;if(!q(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Tt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(t=arguments.length,t>1){if(i=arguments[1],!q(i))throw new TypeError(m("invalid argument. Second argument must be a function. Value: `%s`.",i));t>2&&(e=arguments[2])}if(d(r)){if(s=r.length,i){for(n=new this(s),o=n._buffer,_=0,v=0;v<s;v++){if(g=i.call(e,r.get(v),v),j(g))o[_]=U(g),o[_+1]=P(g);else if(pr(g)&&g.length>=2)o[_]=g[0],o[_+1]=g[1];else throw new TypeError(m("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",g));_+=2}return n}return new this(r)}if(cr(r)){if(i){for(s=r.length,r.get&&r.set?w=Ra("default"):w=Fa("default"),v=0;v<s;v++)if(!j(w(r,v))){y=!0;break}if(y){if(!Q(s))throw new RangeError(m("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",s));for(n=new this(s/2),o=n._buffer,v=0;v<s;v++)o[v]=i.call(e,w(r,v),v);return n}for(n=new this(s),o=n._buffer,_=0,v=0;v<s;v++){if(g=i.call(e,w(r,v),v),j(g))o[_]=U(g),o[_+1]=P(g);else if(pr(g)&&g.length>=2)o[_]=g[0],o[_+1]=g[1];else throw new TypeError(m("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",g));_+=2}return n}return new this(r)}if(yt(r)&&Et&&q(r[I])){if(o=r[I](),!q(o.next))throw new TypeError(m("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if(i?u=Ca(o,i,e):u=bt(o),u instanceof Error)throw u;for(s=u.length/2,n=new this(s),o=n._buffer,v=0;v<s;v++)o[v]=u[v];return n}throw new TypeError(m("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))});E(c,"of",function(){var r,e;if(!q(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Tt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)});E(c.prototype,"at",function(r){if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!O(r))throw new TypeError(m("invalid argument. Must provide an integer. Value: `%s`.",r));if(r<0&&(r+=this._length),!(r<0||r>=this._length))return k(this._buffer,r)});X(c.prototype,"buffer",function(){return this._buffer.buffer});X(c.prototype,"byteLength",function(){return this._buffer.byteLength});X(c.prototype,"byteOffset",function(){return this._buffer.byteOffset});E(c.prototype,"BYTES_PER_ELEMENT",c.BYTES_PER_ELEMENT);E(c.prototype,"copyWithin",function(r,e){if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(r*2,e*2):this._buffer.copyWithin(r*2,e*2,arguments[2]*2),this});E(c.prototype,"entries",function(){var r,e,t,i,n,o,u;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,i=this._length,o=-1,u=-2,t={},E(t,"next",w),E(t,"return",s),I&&E(t,I,y),t;function w(){var g;return o+=1,n||o>=i?{done:!0}:(u+=2,g=new wt(r[u],r[u+1]),{value:[o,g],done:!1})}function s(g){return n=!0,arguments.length?{value:g,done:!0}:{done:!0}}function y(){return e.entries()}});E(c.prototype,"every",function(r,e){var t,i;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(m("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(!r.call(e,k(t,i),i,this))return!1;return!0});E(c.prototype,"fill",function(r,e,t){var i,n,o,u,w,s;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!j(r))throw new TypeError(m("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(i=this._buffer,n=this._length,arguments.length>1){if(!O(e))throw new TypeError(m("invalid argument. Second argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=n,e<0&&(e=0)),arguments.length>2){if(!O(t))throw new TypeError(m("invalid argument. Third argument must be an integer. Value: `%s`.",t));t<0&&(t+=n,t<0&&(t=0)),t>n&&(t=n)}else t=n}else e=0,t=n;for(u=U(r),w=P(r),s=e;s<t;s++)o=2*s,i[o]=u,i[o+1]=w;return this});E(c.prototype,"filter",function(r,e){var t,i,n,o;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(m("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=[],n=0;n<this._length;n++)o=k(t,n),r.call(e,o,n,this)&&i.push(o);return new this.constructor(i)});E(c.prototype,"find",function(r,e){var t,i,n;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(m("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(n=k(t,i),r.call(e,n,i,this))return n});E(c.prototype,"findIndex",function(r,e){var t,i,n;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(m("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(n=k(t,i),r.call(e,n,i,this))return i;return-1});E(c.prototype,"findLast",function(r,e){var t,i,n;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(m("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=this._length-1;i>=0;i--)if(n=k(t,i),r.call(e,n,i,this))return n});E(c.prototype,"findLastIndex",function(r,e){var t,i,n;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(m("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=this._length-1;i>=0;i--)if(n=k(t,i),r.call(e,n,i,this))return i;return-1});E(c.prototype,"forEach",function(r,e){var t,i,n;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(m("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)n=k(t,i),r.call(e,n,i,this)});E(c.prototype,"get",function(r){if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!G(r))throw new TypeError(m("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return k(this._buffer,r)});X(c.prototype,"length",function(){return this._length});E(c.prototype,"includes",function(r,e){var t,i,n,o,u;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!j(r))throw new TypeError(m("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!O(e))throw new TypeError(m("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0&&(e+=this._length,e<0&&(e=0))}else e=0;for(n=U(r),o=P(r),t=this._buffer,u=e;u<this._length;u++)if(i=2*u,n===t[i]&&o===t[i+1])return!0;return!1});E(c.prototype,"indexOf",function(r,e){var t,i,n,o,u;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!j(r))throw new TypeError(m("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!O(e))throw new TypeError(m("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0&&(e+=this._length,e<0&&(e=0))}else e=0;for(n=U(r),o=P(r),t=this._buffer,u=e;u<this._length;u++)if(i=2*u,n===t[i]&&o===t[i+1])return u;return-1});E(c.prototype,"join",function(r){var e,t,i,n;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)i=",";else if(xa(r))i=r;else throw new TypeError(m("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[],t=this._buffer,n=0;n<this._length;n++)e.push(k(t,n).toString());return e.join(i)});E(c.prototype,"lastIndexOf",function(r,e){var t,i,n,o,u;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!j(r))throw new TypeError(m("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!O(e))throw new TypeError(m("invalid argument. Second argument must be an integer. Value: `%s`.",e));e>=this._length?e=this._length-1:e<0&&(e+=this._length)}else e=this._length-1;for(n=U(r),o=P(r),t=this._buffer,u=e;u>=0;u--)if(i=2*u,n===t[i]&&o===t[i+1])return u;return-1});E(c.prototype,"map",function(r,e){var t,i,n,o,u;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(m("invalid argument. First argument must be a function. Value: `%s`.",r));for(i=this._buffer,n=new this.constructor(this._length),t=n._buffer,o=0;o<this._length;o++)if(u=r.call(e,k(i,o),o,this),j(u))t[2*o]=U(u),t[2*o+1]=P(u);else if(pr(u)&&u.length===2)t[2*o]=u[0],t[2*o+1]=u[1];else throw new TypeError(m("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",u));return n});E(c.prototype,"reverse",function(){var r,e,t,i,n,o;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,r=this._buffer,i=La(t/2),n=0;n<i;n++)o=t-n-1,e=r[2*n],r[2*n]=r[2*o],r[2*o]=e,e=r[2*n+1],r[2*n+1]=r[2*o+1],r[2*o+1]=e;return this});E(c.prototype,"set",function(r){var e,t,i,n,o,u,w,s,y;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(t=arguments[1],!G(t))throw new TypeError(m("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(j(r)){if(t>=this._length)throw new RangeError(m("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));t*=2,i[t]=U(r),i[t+1]=P(r);return}if(d(r)){if(u=r._length,t+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,y=i.byteOffset+t*S,e.buffer===i.buffer&&e.byteOffset<y&&e.byteOffset+e.byteLength>y){for(n=new C(e.length),s=0;s<e.length;s++)n[s]=e[s];e=n}for(t*=2,y=0,s=0;s<u;s++)i[t]=e[y],i[t+1]=e[y+1],t+=2,y+=2;return}if(cr(r)){for(u=r.length,s=0;s<u;s++)if(!j(r[s])){o=!0;break}if(o){if(!Q(u))throw new RangeError(m("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",u));if(t+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,y=i.byteOffset+t*S,e.buffer===i.buffer&&e.byteOffset<y&&e.byteOffset+e.byteLength>y){for(n=new C(u),s=0;s<u;s++)n[s]=e[s];e=n}for(t*=2,u/=2,y=0,s=0;s<u;s++)i[t]=e[y],i[t+1]=e[y+1],t+=2,y+=2;return}if(t+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,s=0;s<u;s++)w=r[s],i[t]=U(w),i[t+1]=P(w),t+=2;return}throw new TypeError(m("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r))});E(c.prototype,"some",function(r,e){var t,i;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(m("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(r.call(e,k(t,i),i,this))return!0;return!1});E(c.prototype,"subarray",function(r,e){var t,i,n;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,n=this._length,arguments.length===0)r=0,e=n;else{if(!O(r))throw new TypeError(m("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=n,r<0&&(r=0)),arguments.length===1)e=n;else{if(!O(e))throw new TypeError(m("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n)}}return r>=n?(n=0,t=i.byteLength):r>=e?(n=0,t=i.byteOffset+r*S):(n=e-r,t=i.byteOffset+r*S),new this.constructor(i.buffer,t,n<0?0:n)});E(c.prototype,"toReversed",function(){var r,e,t,i,n,o;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,e=new this.constructor(t),i=this._buffer,r=e._buffer,n=0;n<t;n++)o=t-n-1,r[2*n]=i[2*o],r[2*n+1]=i[2*o+1];return e});E(c.prototype,"toString",function(){var r,e,t;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=this._buffer,t=0;t<this._length;t++)r.push(k(e,t).toString());return r.join(",")});E(c.prototype,"with",function(r,e){var t,i,n;if(!d(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!O(r))throw new TypeError(m("invalid argument. First argument must be an integer. Value: `%s`.",r));if(n=this._length,r<0&&(r+=n),r<0||r>=n)throw new RangeError(m("invalid argument. Index argument is out-of-bounds. Value: `%s`.",r));if(!j(e))throw new TypeError(m("invalid argument. Second argument must be a complex number. Value: `%s`.",e));return i=new this.constructor(this._buffer),t=i._buffer,t[2*r]=U(e),t[2*r+1]=P(e),i});dt.exports=c});var qt=l((cu,xt)=>{"use strict";var Oa=_t();xt.exports=Oa});var Vt=l((yu,At)=>{"use strict";var Ba=er(),Ma=ir(),Ua=ae(),Pa=he(),Na=ye(),Ya=_e(),za=Se(),Ia=Oe(),Wa=Ye(),Ga=ft(),Da=qt(),Ha=[Ba,Ma,Pa,Ua,Ya,Na,Wa,za,Ia,Ga,Da];At.exports=Ha});var St=l((wu,Lt)=>{"use strict";var Ja=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];Lt.exports=Ja});var Rt=l((bu,Ft)=>{"use strict";var Ka=f("@stdlib/assert/is-buffer"),Qa=f("@stdlib/assert/is-array"),Xa=f("@stdlib/utils/constructor-name"),Za=Ir(),$a=Vt(),kt=St(),ro=kt.length;function eo(a){var r;if(Qa(a))return"generic";if(Ka(a))return null;for(r=0;r<ro;r++)if(a instanceof $a[r])return kt[r];return Za[Xa(a)]||null}Ft.exports=eo});var jt=l((Eu,Ct)=>{"use strict";var to=Rt();Ct.exports=to});var Bt=l((Tu,Ot)=>{"use strict";var io=_r(),no=D(),ao=Rr(),oo=H(),uo=Yr(),so=jt();function fo(a){var r=so(a);return io(a)?{accessorProtocol:!0,accessors:[oo(r),uo(r)]}:{accessorProtocol:!1,accessors:[no(r),ao(r)]}}Ot.exports=fo});var Ut=l((du,Mt)=>{"use strict";var lo=Bt();Mt.exports=lo});var Nt=l((_u,Pt)=>{"use strict";var ho=Ut();function vo(a){var r=ho(a);return{data:a,accessorProtocol:r.accessorProtocol,accessors:r.accessors}}Pt.exports=vo});var yr=l((xu,Yt)=>{"use strict";var mo=Nt();Yt.exports=mo});var N={};Jt(N,{default:()=>co});var go=wr(yr());Y(N,wr(yr()));var{default:zt,...po}=go,co=zt!==void 0?zt:po;export{co as default};
/*! Bundled license information:

@stdlib/array/base/assert/is-accessor-array/lib/main.js:
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

@stdlib/array/base/assert/is-accessor-array/lib/index.js:
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

@stdlib/array/base/setter/lib/main.js:
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

@stdlib/array/base/setter/lib/index.js:
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

@stdlib/array/base/accessor-setter/lib/main.js:
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

@stdlib/array/base/accessor-setter/lib/index.js:
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

@stdlib/array/dtype/lib/ctor2dtype.js:
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

@stdlib/array/dtype/lib/ctors.js:
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

@stdlib/array/dtype/lib/dtypes.js:
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

@stdlib/array/dtype/lib/main.js:
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

@stdlib/array/dtype/lib/index.js:
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

@stdlib/array/base/accessors/lib/main.js:
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

@stdlib/array/base/accessors/lib/index.js:
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

@stdlib/array/base/arraylike2object/lib/main.js:
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

@stdlib/array/base/arraylike2object/lib/index.js:
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
*/
//# sourceMappingURL=arraylike2object.js.map