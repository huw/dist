/* esm.sh - esbuild bundle(@stdlib/array@0.2.1/complex128) denonext production */
import * as __0$ from "/v135/@stdlib/assert@0.2.1/denonext/is-nonnegative-integer.js";
import * as __1$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array-like-object.js";
import * as __2$ from "/v135/@stdlib/assert@0.2.1/denonext/is-collection.js";
import * as __3$ from "/v135/@stdlib/assert@0.2.1/denonext/is-arraybuffer.js";
import * as __4$ from "/v135/@stdlib/assert@0.2.1/denonext/is-object.js";
import * as __5$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array.js";
import * as __6$ from "/v135/@stdlib/assert@0.2.1/denonext/is-string.js";
import * as __7$ from "/v135/@stdlib/assert@0.2.1/denonext/is-function.js";
import * as __8$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __9$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-even.js";
import * as __a$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-integer.js";
import * as __b$ from "/v135/@stdlib/assert@0.2.1/denonext/has-iterator-symbol-support.js";
import * as __c$ from "/v135/@stdlib/symbol@0.2.1/denonext/iterator.js";
import * as __d$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __e$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-accessor.js";
import * as __f$ from "/v135/@stdlib/complex@0.2.1/denonext/float64.js";
import * as __10$ from "/v135/@stdlib/complex@0.2.1/denonext/real.js";
import * as __11$ from "/v135/@stdlib/complex@0.2.1/denonext/imag.js";
import * as __12$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/floor.js";
import * as __13$ from "/v135/@stdlib/strided@0.2.1/denonext/base/reinterpret-complex64.js";
import * as __14$ from "/v135/@stdlib/strided@0.2.1/denonext/base/reinterpret-complex128.js";
import * as __15$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __16$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array-like-object.js";
import * as __17$ from "/v135/@stdlib/assert@0.2.1/denonext/has-float64array-support.js";
import * as __18$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __19$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __1a$ from "/v135/@stdlib/complex@0.2.1/denonext/real.js";
import * as __1b$ from "/v135/@stdlib/complex@0.2.1/denonext/imag.js";
import * as __1c$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __1d$ from "/v135/@stdlib/complex@0.2.1/denonext/real.js";
import * as __1e$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array-like-object.js";
import * as __1f$ from "/v135/@stdlib/complex@0.2.1/denonext/imag.js";
import * as __20$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __21$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __22$ from "/v135/@stdlib/complex@0.2.1/denonext/real.js";
import * as __23$ from "/v135/@stdlib/complex@0.2.1/denonext/imag.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/assert/is-nonnegative-integer":return e(__0$);case"@stdlib/assert/is-array-like-object":return e(__1$);case"@stdlib/assert/is-collection":return e(__2$);case"@stdlib/assert/is-arraybuffer":return e(__3$);case"@stdlib/assert/is-object":return e(__4$);case"@stdlib/assert/is-array":return e(__5$);case"@stdlib/assert/is-string":return e(__6$);case"@stdlib/assert/is-function":return e(__7$);case"@stdlib/assert/is-complex-like":return e(__8$);case"@stdlib/math/base/assert/is-even":return e(__9$);case"@stdlib/math/base/assert/is-integer":return e(__a$);case"@stdlib/assert/has-iterator-symbol-support":return e(__b$);case"@stdlib/symbol/iterator":return e(__c$);case"@stdlib/utils/define-nonenumerable-read-only-property":return e(__d$);case"@stdlib/utils/define-nonenumerable-read-only-accessor":return e(__e$);case"@stdlib/complex/float64":return e(__f$);case"@stdlib/complex/real":return e(__10$);case"@stdlib/complex/imag":return e(__11$);case"@stdlib/math/base/special/floor":return e(__12$);case"@stdlib/strided/base/reinterpret-complex64":return e(__13$);case"@stdlib/strided/base/reinterpret-complex128":return e(__14$);case"@stdlib/string/format":return e(__15$);case"@stdlib/assert/has-float64array-support":return e(__17$);default:throw new Error("module \""+n+"\" not found");}};
var Ar=Object.create;var O=Object.defineProperty;var Lr=Object.getOwnPropertyDescriptor;var kr=Object.getOwnPropertyNames;var Rr=Object.getPrototypeOf,Sr=Object.prototype.hasOwnProperty;var h=(i=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(i,{get:(r,e)=>(typeof require<"u"?require:r)[e]}):i)(function(i){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+i+'" is not supported')});var c=(i,r)=>()=>(r||i((r={exports:{}}).exports,r),r.exports),Fr=(i,r)=>{for(var e in r)O(i,e,{get:r[e],enumerable:!0})},C=(i,r,e,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of kr(r))!Sr.call(i,n)&&n!==e&&O(i,n,{get:()=>r[n],enumerable:!(t=Lr(r,n))||t.enumerable});return i},k=(i,r,e)=>(C(i,r,"default"),e&&C(e,r,"default")),P=(i,r,e)=>(e=i!=null?Ar(Rr(i)):{},C(r||!i||!i.__esModule?O(e,"default",{value:i,enumerable:!0}):e,i));var G=c((ze,z)=>{"use strict";var jr=8;function Cr(i){return typeof i=="object"&&i!==null&&i.constructor.name==="Complex64Array"&&i.BYTES_PER_ELEMENT===jr}z.exports=Cr});var U=c((Ge,W)=>{"use strict";var Or=G();W.exports=Or});var D=c((We,H)=>{"use strict";var Br=16;function Mr(i){return typeof i=="object"&&i!==null&&i.constructor.name==="Complex128Array"&&i.BYTES_PER_ELEMENT===Br}H.exports=Mr});var J=c((Ue,I)=>{"use strict";var Nr=D();I.exports=Nr});var Q=c((He,K)=>{"use strict";var Yr=typeof Float64Array=="function"?Float64Array:void 0;K.exports=Yr});var Z=c((De,X)=>{"use strict";function Pr(){throw new Error("not implemented")}X.exports=Pr});var rr=c((Ie,$)=>{"use strict";var zr=h("@stdlib/assert/has-float64array-support"),Gr=Q(),Wr=Z(),B;zr()?B=Gr:B=Wr;$.exports=B});var nr=c((Je,tr)=>{"use strict";var er={float64:Ur,float32:Hr,int32:Dr,int16:Ir,int8:Jr,uint32:Kr,uint16:Qr,uint8:Xr,uint8c:Zr,generic:$r,default:re};function Ur(i,r){return i[r]}function Hr(i,r){return i[r]}function Dr(i,r){return i[r]}function Ir(i,r){return i[r]}function Jr(i,r){return i[r]}function Kr(i,r){return i[r]}function Qr(i,r){return i[r]}function Xr(i,r){return i[r]}function Zr(i,r){return i[r]}function $r(i,r){return i[r]}function re(i,r){return i[r]}function ee(i){var r=er[i];return typeof r=="function"?r:er.default}tr.exports=ee});var ar=c((Ke,ir)=>{"use strict";var te=nr();ir.exports=te});var sr=c((Qe,ur)=>{"use strict";var or={complex128:ne,complex64:ie,default:ae};function ne(i,r){return i.get(r)}function ie(i,r){return i.get(r)}function ae(i,r){return i.get(r)}function oe(i){var r=or[i];return typeof r=="function"?r:or.default}ur.exports=oe});var lr=c((Xe,fr)=>{"use strict";var ue=sr();fr.exports=ue});var mr=c((Ze,hr)=>{"use strict";var se=h("@stdlib/assert/is-array-like-object"),fe=h("@stdlib/assert/is-complex-like"),le=h("@stdlib/string/format"),he=h("@stdlib/complex/real"),me=h("@stdlib/complex/imag");function ge(i){var r,e,t;for(r=[];e=i.next(),!e.done;)if(t=e.value,se(t)&&t.length>=2)r.push(t[0],t[1]);else if(fe(t))r.push(he(t),me(t));else return new TypeError(le("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",t));return r}hr.exports=ge});var vr=c(($e,gr)=>{"use strict";var ve=h("@stdlib/assert/is-array-like-object"),pe=h("@stdlib/assert/is-complex-like"),ye=h("@stdlib/string/format"),ce=h("@stdlib/complex/real"),we=h("@stdlib/complex/imag");function be(i,r,e){var t,n,a,o;for(t=[],o=-1;n=i.next(),!n.done;)if(o+=1,a=r.call(e,n.value,o),ve(a)&&a.length>=2)t.push(a[0],a[1]);else if(pe(a))t.push(ce(a),we(a));else return new TypeError(ye("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return t}gr.exports=be});var yr=c((rt,pr)=>{"use strict";var Ee=h("@stdlib/assert/is-complex-like"),_e=h("@stdlib/complex/real"),Te=h("@stdlib/complex/imag");function de(i,r){var e,t,n,a;for(e=r.length,a=0,n=0;n<e;n++){if(t=r[n],!Ee(t))return null;i[a]=_e(t),i[a+1]=Te(t),a+=2}return i}pr.exports=de});var xr=c((et,dr)=>{"use strict";var S=h("@stdlib/assert/is-nonnegative-integer").isPrimitive,M=h("@stdlib/assert/is-array-like-object"),N=h("@stdlib/assert/is-collection"),cr=h("@stdlib/assert/is-arraybuffer"),wr=h("@stdlib/assert/is-object"),xe=h("@stdlib/assert/is-array"),qe=h("@stdlib/assert/is-string"),w=h("@stdlib/assert/is-function"),x=h("@stdlib/assert/is-complex-like"),F=h("@stdlib/math/base/assert/is-even"),q=h("@stdlib/math/base/assert/is-integer"),Ve=U(),Ae=J(),Le=h("@stdlib/assert/has-iterator-symbol-support"),R=h("@stdlib/symbol/iterator"),m=h("@stdlib/utils/define-nonenumerable-read-only-property"),j=h("@stdlib/utils/define-nonenumerable-read-only-accessor"),d=rr(),br=h("@stdlib/complex/float64"),V=h("@stdlib/complex/real"),A=h("@stdlib/complex/imag"),ke=h("@stdlib/math/base/special/floor"),Re=h("@stdlib/strided/base/reinterpret-complex64"),Se=h("@stdlib/strided/base/reinterpret-complex128"),Fe=ar(),je=lr(),s=h("@stdlib/string/format"),Er=mr(),Ce=vr(),Oe=yr(),E=d.BYTES_PER_ELEMENT*2,_r=Le();function g(i){return i instanceof l||typeof i=="object"&&i!==null&&(i.constructor.name==="Complex64Array"||i.constructor.name==="Complex128Array")&&typeof i._length=="number"&&typeof i._buffer=="object"}function Tr(i){return i===l||i.name==="Complex64Array"}function _(i,r){return r*=2,new br(i[r],i[r+1])}function l(){var i,r,e,t;if(r=arguments.length,!(this instanceof l))return r===0?new l:r===1?new l(arguments[0]):r===2?new l(arguments[0],arguments[1]):new l(arguments[0],arguments[1],arguments[2]);if(r===0)e=new d(0);else if(r===1)if(S(arguments[0]))e=new d(arguments[0]*2);else if(N(arguments[0]))if(e=arguments[0],t=e.length,t&&xe(e)&&x(e[0])){if(e=Oe(new d(t*2),e),e===null){if(!F(t))throw new RangeError(s("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",t));e=new d(arguments[0])}}else{if(Ve(e))e=Re(e,0);else if(Ae(e))e=Se(e,0);else if(!F(t))throw new RangeError(s("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",t));e=new d(e)}else if(cr(arguments[0])){if(e=arguments[0],!q(e.byteLength/E))throw new RangeError(s("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",E,e.byteLength));e=new d(e)}else if(wr(arguments[0])){if(e=arguments[0],_r===!1)throw new TypeError(s("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",e));if(!w(e[R]))throw new TypeError(s("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",e));if(e=e[R](),!w(e.next))throw new TypeError(s("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",e));if(e=Er(e),e instanceof Error)throw e;e=new d(e)}else throw new TypeError(s("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(e=arguments[0],!cr(e))throw new TypeError(s("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",e));if(i=arguments[1],!S(i))throw new TypeError(s("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",i));if(!q(i/E))throw new RangeError(s("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",E,i));if(r===2){if(t=e.byteLength-i,!q(t/E))throw new RangeError(s("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",E,t));e=new d(e,i)}else{if(t=arguments[2],!S(t))throw new TypeError(s("invalid argument. Length must be a nonnegative integer. Value: `%s`.",t));if(t*E>e.byteLength-i)throw new RangeError(s("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",t*E));e=new d(e,i,t*2)}}return m(this,"_buffer",e),m(this,"_length",e.length/2),this}m(l,"BYTES_PER_ELEMENT",E);m(l,"name","Complex128Array");m(l,"from",function(r){var e,t,n,a,o,u,b,f,y,p,v,T;if(!w(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(t=arguments.length,t>1){if(n=arguments[1],!w(n))throw new TypeError(s("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(g(r)){if(f=r.length,n){for(a=new this(f),o=a._buffer,T=0,v=0;v<f;v++){if(p=n.call(e,r.get(v),v),x(p))o[T]=V(p),o[T+1]=A(p);else if(M(p)&&p.length>=2)o[T]=p[0],o[T+1]=p[1];else throw new TypeError(s("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",p));T+=2}return a}return new this(r)}if(N(r)){if(n){for(f=r.length,r.get&&r.set?b=je("default"):b=Fe("default"),v=0;v<f;v++)if(!x(b(r,v))){y=!0;break}if(y){if(!F(f))throw new RangeError(s("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(a=new this(f/2),o=a._buffer,v=0;v<f;v++)o[v]=n.call(e,b(r,v),v);return a}for(a=new this(f),o=a._buffer,T=0,v=0;v<f;v++){if(p=n.call(e,b(r,v),v),x(p))o[T]=V(p),o[T+1]=A(p);else if(M(p)&&p.length>=2)o[T]=p[0],o[T+1]=p[1];else throw new TypeError(s("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",p));T+=2}return a}return new this(r)}if(wr(r)&&_r&&w(r[R])){if(o=r[R](),!w(o.next))throw new TypeError(s("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if(n?u=Ce(o,n,e):u=Er(o),u instanceof Error)throw u;for(f=u.length/2,a=new this(f),o=a._buffer,v=0;v<f;v++)o[v]=u[v];return a}throw new TypeError(s("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))});m(l,"of",function(){var r,e;if(!w(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)});m(l.prototype,"at",function(r){if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(s("invalid argument. Must provide an integer. Value: `%s`.",r));if(r<0&&(r+=this._length),!(r<0||r>=this._length))return _(this._buffer,r)});j(l.prototype,"buffer",function(){return this._buffer.buffer});j(l.prototype,"byteLength",function(){return this._buffer.byteLength});j(l.prototype,"byteOffset",function(){return this._buffer.byteOffset});m(l.prototype,"BYTES_PER_ELEMENT",l.BYTES_PER_ELEMENT);m(l.prototype,"copyWithin",function(r,e){if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(r*2,e*2):this._buffer.copyWithin(r*2,e*2,arguments[2]*2),this});m(l.prototype,"entries",function(){var r,e,t,n,a,o,u;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,u=-2,t={},m(t,"next",b),m(t,"return",f),R&&m(t,R,y),t;function b(){var p;return o+=1,a||o>=n?{done:!0}:(u+=2,p=new br(r[u],r[u+1]),{value:[o,p],done:!1})}function f(p){return a=!0,arguments.length?{value:p,done:!0}:{done:!0}}function y(){return e.entries()}});m(l.prototype,"every",function(r,e){var t,n;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=0;n<this._length;n++)if(!r.call(e,_(t,n),n,this))return!1;return!0});m(l.prototype,"fill",function(r,e,t){var n,a,o,u,b,f;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(s("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(n=this._buffer,a=this._length,arguments.length>1){if(!q(e))throw new TypeError(s("invalid argument. Second argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=a,e<0&&(e=0)),arguments.length>2){if(!q(t))throw new TypeError(s("invalid argument. Third argument must be an integer. Value: `%s`.",t));t<0&&(t+=a,t<0&&(t=0)),t>a&&(t=a)}else t=a}else e=0,t=a;for(u=V(r),b=A(r),f=e;f<t;f++)o=2*f,n[o]=u,n[o+1]=b;return this});m(l.prototype,"filter",function(r,e){var t,n,a,o;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=[],a=0;a<this._length;a++)o=_(t,a),r.call(e,o,a,this)&&n.push(o);return new this.constructor(n)});m(l.prototype,"find",function(r,e){var t,n,a;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=0;n<this._length;n++)if(a=_(t,n),r.call(e,a,n,this))return a});m(l.prototype,"findIndex",function(r,e){var t,n,a;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=0;n<this._length;n++)if(a=_(t,n),r.call(e,a,n,this))return n;return-1});m(l.prototype,"findLast",function(r,e){var t,n,a;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=this._length-1;n>=0;n--)if(a=_(t,n),r.call(e,a,n,this))return a});m(l.prototype,"findLastIndex",function(r,e){var t,n,a;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=this._length-1;n>=0;n--)if(a=_(t,n),r.call(e,a,n,this))return n;return-1});m(l.prototype,"forEach",function(r,e){var t,n,a;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=0;n<this._length;n++)a=_(t,n),r.call(e,a,n,this)});m(l.prototype,"get",function(r){if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!S(r))throw new TypeError(s("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return _(this._buffer,r)});j(l.prototype,"length",function(){return this._length});m(l.prototype,"includes",function(r,e){var t,n,a,o,u;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(s("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!q(e))throw new TypeError(s("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0&&(e+=this._length,e<0&&(e=0))}else e=0;for(a=V(r),o=A(r),t=this._buffer,u=e;u<this._length;u++)if(n=2*u,a===t[n]&&o===t[n+1])return!0;return!1});m(l.prototype,"indexOf",function(r,e){var t,n,a,o,u;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(s("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!q(e))throw new TypeError(s("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0&&(e+=this._length,e<0&&(e=0))}else e=0;for(a=V(r),o=A(r),t=this._buffer,u=e;u<this._length;u++)if(n=2*u,a===t[n]&&o===t[n+1])return u;return-1});m(l.prototype,"join",function(r){var e,t,n,a;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)n=",";else if(qe(r))n=r;else throw new TypeError(s("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[],t=this._buffer,a=0;a<this._length;a++)e.push(_(t,a).toString());return e.join(n)});m(l.prototype,"lastIndexOf",function(r,e){var t,n,a,o,u;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!x(r))throw new TypeError(s("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!q(e))throw new TypeError(s("invalid argument. Second argument must be an integer. Value: `%s`.",e));e>=this._length?e=this._length-1:e<0&&(e+=this._length)}else e=this._length-1;for(a=V(r),o=A(r),t=this._buffer,u=e;u>=0;u--)if(n=2*u,a===t[n]&&o===t[n+1])return u;return-1});m(l.prototype,"map",function(r,e){var t,n,a,o,u;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));for(n=this._buffer,a=new this.constructor(this._length),t=a._buffer,o=0;o<this._length;o++)if(u=r.call(e,_(n,o),o,this),x(u))t[2*o]=V(u),t[2*o+1]=A(u);else if(M(u)&&u.length===2)t[2*o]=u[0],t[2*o+1]=u[1];else throw new TypeError(s("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",u));return a});m(l.prototype,"reverse",function(){var r,e,t,n,a,o;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,r=this._buffer,n=ke(t/2),a=0;a<n;a++)o=t-a-1,e=r[2*a],r[2*a]=r[2*o],r[2*o]=e,e=r[2*a+1],r[2*a+1]=r[2*o+1],r[2*o+1]=e;return this});m(l.prototype,"set",function(r){var e,t,n,a,o,u,b,f,y;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(t=arguments[1],!S(t))throw new TypeError(s("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(x(r)){if(t>=this._length)throw new RangeError(s("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));t*=2,n[t]=V(r),n[t+1]=A(r);return}if(g(r)){if(u=r._length,t+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,y=n.byteOffset+t*E,e.buffer===n.buffer&&e.byteOffset<y&&e.byteOffset+e.byteLength>y){for(a=new d(e.length),f=0;f<e.length;f++)a[f]=e[f];e=a}for(t*=2,y=0,f=0;f<u;f++)n[t]=e[y],n[t+1]=e[y+1],t+=2,y+=2;return}if(N(r)){for(u=r.length,f=0;f<u;f++)if(!x(r[f])){o=!0;break}if(o){if(!F(u))throw new RangeError(s("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",u));if(t+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,y=n.byteOffset+t*E,e.buffer===n.buffer&&e.byteOffset<y&&e.byteOffset+e.byteLength>y){for(a=new d(u),f=0;f<u;f++)a[f]=e[f];e=a}for(t*=2,u/=2,y=0,f=0;f<u;f++)n[t]=e[y],n[t+1]=e[y+1],t+=2,y+=2;return}if(t+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<u;f++)b=r[f],n[t]=V(b),n[t+1]=A(b),t+=2;return}throw new TypeError(s("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r))});m(l.prototype,"some",function(r,e){var t,n;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!w(r))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,n=0;n<this._length;n++)if(r.call(e,_(t,n),n,this))return!0;return!1});m(l.prototype,"subarray",function(r,e){var t,n,a;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,a=this._length,arguments.length===0)r=0,e=a;else{if(!q(r))throw new TypeError(s("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=a,r<0&&(r=0)),arguments.length===1)e=a;else{if(!q(e))throw new TypeError(s("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0?(e+=a,e<0&&(e=0)):e>a&&(e=a)}}return r>=a?(a=0,t=n.byteLength):r>=e?(a=0,t=n.byteOffset+r*E):(a=e-r,t=n.byteOffset+r*E),new this.constructor(n.buffer,t,a<0?0:a)});m(l.prototype,"toReversed",function(){var r,e,t,n,a,o;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,e=new this.constructor(t),n=this._buffer,r=e._buffer,a=0;a<t;a++)o=t-a-1,r[2*a]=n[2*o],r[2*a+1]=n[2*o+1];return e});m(l.prototype,"toString",function(){var r,e,t;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=this._buffer,t=0;t<this._length;t++)r.push(_(e,t).toString());return r.join(",")});m(l.prototype,"with",function(r,e){var t,n,a;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(s("invalid argument. First argument must be an integer. Value: `%s`.",r));if(a=this._length,r<0&&(r+=a),r<0||r>=a)throw new RangeError(s("invalid argument. Index argument is out-of-bounds. Value: `%s`.",r));if(!x(e))throw new TypeError(s("invalid argument. Second argument must be a complex number. Value: `%s`.",e));return n=new this.constructor(this._buffer),t=n._buffer,t[2*r]=V(e),t[2*r+1]=A(e),n});dr.exports=l});var Y=c((tt,qr)=>{"use strict";var Be=xr();qr.exports=Be});var L={};Fr(L,{default:()=>Ye});var Me=P(Y());k(L,P(Y()));var{default:Vr,...Ne}=Me,Ye=Vr!==void 0?Vr:Ne;export{Ye as default};
/*! Bundled license information:

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
*/
//# sourceMappingURL=complex128.js.map