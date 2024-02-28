/* esm.sh - esbuild bundle(@stdlib/array@0.2.1/complex64) denonext production */
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
import * as __f$ from "/v135/@stdlib/complex@0.2.1/denonext/float32.js";
import * as __10$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __11$ from "/v135/@stdlib/complex@0.2.1/denonext/realf.js";
import * as __12$ from "/v135/@stdlib/complex@0.2.1/denonext/imagf.js";
import * as __13$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/floor.js";
import * as __14$ from "/v135/@stdlib/strided@0.2.1/denonext/base/reinterpret-complex64.js";
import * as __15$ from "/v135/@stdlib/strided@0.2.1/denonext/base/reinterpret-complex128.js";
import * as __16$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array-like-object.js";
import * as __17$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array-like-object.js";
import * as __18$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __19$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __1a$ from "/v135/@stdlib/assert@0.2.1/denonext/is-complex-like.js";
import * as __1b$ from "/v135/@stdlib/complex@0.2.1/denonext/realf.js";
import * as __1c$ from "/v135/@stdlib/complex@0.2.1/denonext/realf.js";
import * as __1d$ from "/v135/@stdlib/complex@0.2.1/denonext/realf.js";
import * as __1e$ from "/v135/@stdlib/complex@0.2.1/denonext/imagf.js";
import * as __1f$ from "/v135/@stdlib/complex@0.2.1/denonext/imagf.js";
import * as __20$ from "/v135/@stdlib/complex@0.2.1/denonext/imagf.js";
import * as __21$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __22$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __23$ from "/v135/@stdlib/assert@0.2.1/denonext/has-float32array-support.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/assert/is-nonnegative-integer":return e(__0$);case"@stdlib/assert/is-array-like-object":return e(__1$);case"@stdlib/assert/is-collection":return e(__2$);case"@stdlib/assert/is-arraybuffer":return e(__3$);case"@stdlib/assert/is-object":return e(__4$);case"@stdlib/assert/is-array":return e(__5$);case"@stdlib/assert/is-string":return e(__6$);case"@stdlib/assert/is-function":return e(__7$);case"@stdlib/assert/is-complex-like":return e(__8$);case"@stdlib/math/base/assert/is-even":return e(__9$);case"@stdlib/math/base/assert/is-integer":return e(__a$);case"@stdlib/assert/has-iterator-symbol-support":return e(__b$);case"@stdlib/symbol/iterator":return e(__c$);case"@stdlib/utils/define-nonenumerable-read-only-property":return e(__d$);case"@stdlib/utils/define-nonenumerable-read-only-accessor":return e(__e$);case"@stdlib/complex/float32":return e(__f$);case"@stdlib/string/format":return e(__10$);case"@stdlib/complex/realf":return e(__11$);case"@stdlib/complex/imagf":return e(__12$);case"@stdlib/math/base/special/floor":return e(__13$);case"@stdlib/strided/base/reinterpret-complex64":return e(__14$);case"@stdlib/strided/base/reinterpret-complex128":return e(__15$);case"@stdlib/assert/has-float32array-support":return e(__23$);default:throw new Error("module \""+n+"\" not found");}};
var Ar=Object.create;var O=Object.defineProperty;var Lr=Object.getOwnPropertyDescriptor;var kr=Object.getOwnPropertyNames;var Rr=Object.getPrototypeOf,Sr=Object.prototype.hasOwnProperty;var h=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(r,e)=>(typeof require<"u"?require:r)[e]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var w=(n,r)=>()=>(r||n((r={exports:{}}).exports,r),r.exports),Fr=(n,r)=>{for(var e in r)O(n,e,{get:r[e],enumerable:!0})},C=(n,r,e,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of kr(r))!Sr.call(n,i)&&i!==e&&O(n,i,{get:()=>r[i],enumerable:!(t=Lr(r,i))||t.enumerable});return n},k=(n,r,e)=>(C(n,r,"default"),e&&C(e,r,"default")),Y=(n,r,e)=>(e=n!=null?Ar(Rr(n)):{},C(r||!n||!n.__esModule?O(e,"default",{value:n,enumerable:!0}):e,n));var G=w((ze,z)=>{"use strict";var jr=8;function Cr(n){return typeof n=="object"&&n!==null&&n.constructor.name==="Complex64Array"&&n.BYTES_PER_ELEMENT===jr}z.exports=Cr});var U=w((Ge,W)=>{"use strict";var Or=G();W.exports=Or});var D=w((We,H)=>{"use strict";var Br=16;function Mr(n){return typeof n=="object"&&n!==null&&n.constructor.name==="Complex128Array"&&n.BYTES_PER_ELEMENT===Br}H.exports=Mr});var J=w((Ue,I)=>{"use strict";var Nr=D();I.exports=Nr});var Q=w((He,K)=>{"use strict";var Pr=typeof Float32Array=="function"?Float32Array:void 0;K.exports=Pr});var Z=w((De,X)=>{"use strict";function Yr(){throw new Error("not implemented")}X.exports=Yr});var rr=w((Ie,$)=>{"use strict";var zr=h("@stdlib/assert/has-float32array-support"),Gr=Q(),Wr=Z(),B;zr()?B=Gr:B=Wr;$.exports=B});var ir=w((Je,tr)=>{"use strict";var er={float64:Ur,float32:Hr,int32:Dr,int16:Ir,int8:Jr,uint32:Kr,uint16:Qr,uint8:Xr,uint8c:Zr,generic:$r,default:re};function Ur(n,r){return n[r]}function Hr(n,r){return n[r]}function Dr(n,r){return n[r]}function Ir(n,r){return n[r]}function Jr(n,r){return n[r]}function Kr(n,r){return n[r]}function Qr(n,r){return n[r]}function Xr(n,r){return n[r]}function Zr(n,r){return n[r]}function $r(n,r){return n[r]}function re(n,r){return n[r]}function ee(n){var r=er[n];return typeof r=="function"?r:er.default}tr.exports=ee});var ar=w((Ke,nr)=>{"use strict";var te=ir();nr.exports=te});var sr=w((Qe,ur)=>{"use strict";var or={complex128:ie,complex64:ne,default:ae};function ie(n,r){return n.get(r)}function ne(n,r){return n.get(r)}function ae(n,r){return n.get(r)}function oe(n){var r=or[n];return typeof r=="function"?r:or.default}ur.exports=oe});var lr=w((Xe,fr)=>{"use strict";var ue=sr();fr.exports=ue});var mr=w((Ze,hr)=>{"use strict";var se=h("@stdlib/assert/is-array-like-object"),fe=h("@stdlib/assert/is-complex-like"),le=h("@stdlib/complex/realf"),he=h("@stdlib/complex/imagf"),me=h("@stdlib/string/format");function ge(n){var r,e,t;for(r=[];e=n.next(),!e.done;)if(t=e.value,se(t)&&t.length>=2)r.push(t[0],t[1]);else if(fe(t))r.push(le(t),he(t));else return new TypeError(me("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",t));return r}hr.exports=ge});var vr=w(($e,gr)=>{"use strict";var ve=h("@stdlib/assert/is-array-like-object"),pe=h("@stdlib/assert/is-complex-like"),ce=h("@stdlib/complex/realf"),ye=h("@stdlib/complex/imagf"),we=h("@stdlib/string/format");function be(n,r,e){var t,i,a,o;for(t=[],o=-1;i=n.next(),!i.done;)if(o+=1,a=r.call(e,i.value,o),ve(a)&&a.length>=2)t.push(a[0],a[1]);else if(pe(a))t.push(ce(a),ye(a));else return new TypeError(we("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return t}gr.exports=be});var cr=w((rt,pr)=>{"use strict";var Ee=h("@stdlib/assert/is-complex-like"),_e=h("@stdlib/complex/realf"),Te=h("@stdlib/complex/imagf");function de(n,r){var e,t,i,a;for(e=r.length,a=0,i=0;i<e;i++){if(t=r[i],!Ee(t))return null;n[a]=_e(t),n[a+1]=Te(t),a+=2}return n}pr.exports=de});var xr=w((et,dr)=>{"use strict";var S=h("@stdlib/assert/is-nonnegative-integer").isPrimitive,M=h("@stdlib/assert/is-array-like-object"),N=h("@stdlib/assert/is-collection"),yr=h("@stdlib/assert/is-arraybuffer"),wr=h("@stdlib/assert/is-object"),xe=h("@stdlib/assert/is-array"),qe=h("@stdlib/assert/is-string").isPrimitive,b=h("@stdlib/assert/is-function"),q=h("@stdlib/assert/is-complex-like"),F=h("@stdlib/math/base/assert/is-even"),E=h("@stdlib/math/base/assert/is-integer"),Ve=U(),Ae=J(),Le=h("@stdlib/assert/has-iterator-symbol-support"),R=h("@stdlib/symbol/iterator"),m=h("@stdlib/utils/define-nonenumerable-read-only-property"),j=h("@stdlib/utils/define-nonenumerable-read-only-accessor"),x=rr(),br=h("@stdlib/complex/float32"),f=h("@stdlib/string/format"),V=h("@stdlib/complex/realf"),A=h("@stdlib/complex/imagf"),ke=h("@stdlib/math/base/special/floor"),Re=h("@stdlib/strided/base/reinterpret-complex64"),Se=h("@stdlib/strided/base/reinterpret-complex128"),Fe=ar(),je=lr(),Er=mr(),Ce=vr(),Oe=cr(),_=x.BYTES_PER_ELEMENT*2,_r=Le();function g(n){return n instanceof l||typeof n=="object"&&n!==null&&(n.constructor.name==="Complex64Array"||n.constructor.name==="Complex128Array")&&typeof n._length=="number"&&typeof n._buffer=="object"}function Tr(n){return n===l||n.name==="Complex128Array"}function T(n,r){return r*=2,new br(n[r],n[r+1])}function l(){var n,r,e,t;if(r=arguments.length,!(this instanceof l))return r===0?new l:r===1?new l(arguments[0]):r===2?new l(arguments[0],arguments[1]):new l(arguments[0],arguments[1],arguments[2]);if(r===0)e=new x(0);else if(r===1)if(S(arguments[0]))e=new x(arguments[0]*2);else if(N(arguments[0]))if(e=arguments[0],t=e.length,t&&xe(e)&&q(e[0])){if(e=Oe(new x(t*2),e),e===null){if(!F(t))throw new RangeError(f("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",t));e=new x(arguments[0])}}else{if(Ve(e))e=Re(e,0);else if(Ae(e))e=Se(e,0);else if(!F(t))throw new RangeError(f("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",t));e=new x(e)}else if(yr(arguments[0])){if(e=arguments[0],!E(e.byteLength/_))throw new RangeError(f("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",_,e.byteLength));e=new x(e)}else if(wr(arguments[0])){if(e=arguments[0],_r===!1)throw new TypeError(f("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",e));if(!b(e[R]))throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",e));if(e=e[R](),!b(e.next))throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",e));if(e=Er(e),e instanceof Error)throw e;e=new x(e)}else throw new TypeError(f("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(e=arguments[0],!yr(e))throw new TypeError(f("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",e));if(n=arguments[1],!S(n))throw new TypeError(f("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",n));if(!E(n/_))throw new RangeError(f("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",_,n));if(r===2){if(t=e.byteLength-n,!E(t/_))throw new RangeError(f("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",_,t));e=new x(e,n)}else{if(t=arguments[2],!S(t))throw new TypeError(f("invalid argument. Length must be a nonnegative integer. Value: `%s`.",t));if(t*_>e.byteLength-n)throw new RangeError(f("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",t*_));e=new x(e,n,t*2)}}return m(this,"_buffer",e),m(this,"_length",e.length/2),this}m(l,"BYTES_PER_ELEMENT",_);m(l,"name","Complex64Array");m(l,"from",function(r){var e,t,i,a,o,u,c,s,y,p,v,d;if(!b(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(t=arguments.length,t>1){if(i=arguments[1],!b(i))throw new TypeError(f("invalid argument. Second argument must be a function. Value: `%s`.",i));t>2&&(e=arguments[2])}if(g(r)){if(s=r.length,i){for(a=new this(s),o=a._buffer,d=0,v=0;v<s;v++){if(p=i.call(e,r.get(v),v),q(p))o[d]=V(p),o[d+1]=A(p);else if(M(p)&&p.length>=2)o[d]=p[0],o[d+1]=p[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",p));d+=2}return a}return new this(r)}if(N(r)){if(i){for(s=r.length,r.get&&r.set?c=je("default"):c=Fe("default"),v=0;v<s;v++)if(!q(c(r,v))){y=!0;break}if(y){if(!F(s))throw new RangeError(f("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,s));for(a=new this(s/2),o=a._buffer,v=0;v<s;v++)o[v]=i.call(e,c(r,v),v);return a}for(a=new this(s),o=a._buffer,d=0,v=0;v<s;v++){if(p=i.call(e,c(r,v),v),q(p))o[d]=V(p),o[d+1]=A(p);else if(M(p)&&p.length>=2)o[d]=p[0],o[d+1]=p[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",p));d+=2}return a}return new this(r)}if(wr(r)&&_r&&b(r[R])){if(o=r[R](),!b(o.next))throw new TypeError(f("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if(i?u=Ce(o,i,e):u=Er(o),u instanceof Error)throw u;for(s=u.length/2,a=new this(s),o=a._buffer,v=0;v<s;v++)o[v]=u[v];return a}throw new TypeError(f("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))});m(l,"of",function(){var r,e;if(!b(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)});m(l.prototype,"at",function(r){if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!E(r))throw new TypeError(f("invalid argument. Must provide an integer. Value: `%s`.",r));if(r<0&&(r+=this._length),!(r<0||r>=this._length))return T(this._buffer,r)});j(l.prototype,"buffer",function(){return this._buffer.buffer});j(l.prototype,"byteLength",function(){return this._buffer.byteLength});j(l.prototype,"byteOffset",function(){return this._buffer.byteOffset});m(l.prototype,"BYTES_PER_ELEMENT",l.BYTES_PER_ELEMENT);m(l.prototype,"copyWithin",function(r,e){if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(r*2,e*2):this._buffer.copyWithin(r*2,e*2,arguments[2]*2),this});m(l.prototype,"entries",function(){var r,e,t,i,a,o,u;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,i=this._length,o=-1,u=-2,t={},m(t,"next",c),m(t,"return",s),R&&m(t,R,y),t;function c(){var p;return o+=1,a||o>=i?{done:!0}:(u+=2,p=new br(r[u],r[u+1]),{value:[o,p],done:!1})}function s(p){return a=!0,arguments.length?{value:p,done:!0}:{done:!0}}function y(){return e.entries()}});m(l.prototype,"every",function(r,e){var t,i;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!b(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(!r.call(e,T(t,i),i,this))return!1;return!0});m(l.prototype,"fill",function(r,e,t){var i,a,o,u,c,s;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(i=this._buffer,a=this._length,arguments.length>1){if(!E(e))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",e));if(e<0&&(e+=a,e<0&&(e=0)),arguments.length>2){if(!E(t))throw new TypeError(f("invalid argument. Third argument must be an integer. Value: `%s`.",t));t<0&&(t+=a,t<0&&(t=0)),t>a&&(t=a)}else t=a}else e=0,t=a;for(u=V(r),c=A(r),s=e;s<t;s++)o=2*s,i[o]=u,i[o+1]=c;return this});m(l.prototype,"filter",function(r,e){var t,i,a,o;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!b(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=[],a=0;a<this._length;a++)o=T(t,a),r.call(e,o,a,this)&&i.push(o);return new this.constructor(i)});m(l.prototype,"find",function(r,e){var t,i,a;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!b(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(a=T(t,i),r.call(e,a,i,this))return a});m(l.prototype,"findIndex",function(r,e){var t,i,a;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!b(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(a=T(t,i),r.call(e,a,i,this))return i;return-1});m(l.prototype,"findLast",function(r,e){var t,i,a;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!b(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=this._length-1;i>=0;i--)if(a=T(t,i),r.call(e,a,i,this))return a});m(l.prototype,"findLastIndex",function(r,e){var t,i,a;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!b(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=this._length-1;i>=0;i--)if(a=T(t,i),r.call(e,a,i,this))return i;return-1});m(l.prototype,"forEach",function(r,e){var t,i,a;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!b(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)a=T(t,i),r.call(e,a,i,this)});m(l.prototype,"get",function(r){if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!S(r))throw new TypeError(f("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return T(this._buffer,r)});m(l.prototype,"includes",function(r,e){var t,i,a,o,u;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!E(e))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0&&(e+=this._length,e<0&&(e=0))}else e=0;for(a=V(r),o=A(r),t=this._buffer,u=e;u<this._length;u++)if(i=2*u,a===t[i]&&o===t[i+1])return!0;return!1});m(l.prototype,"indexOf",function(r,e){var t,i,a,o,u;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!E(e))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0&&(e+=this._length,e<0&&(e=0))}else e=0;for(a=V(r),o=A(r),t=this._buffer,u=e;u<this._length;u++)if(i=2*u,a===t[i]&&o===t[i+1])return u;return-1});m(l.prototype,"join",function(r){var e,t,i,a;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)i=",";else if(qe(r))i=r;else throw new TypeError(f("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[],t=this._buffer,a=0;a<this._length;a++)e.push(T(t,a).toString());return e.join(i)});m(l.prototype,"lastIndexOf",function(r,e){var t,i,a,o,u;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!q(r))throw new TypeError(f("invalid argument. First argument must be a complex number. Value: `%s`.",r));if(arguments.length>1){if(!E(e))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",e));e>=this._length?e=this._length-1:e<0&&(e+=this._length)}else e=this._length-1;for(a=V(r),o=A(r),t=this._buffer,u=e;u>=0;u--)if(i=2*u,a===t[i]&&o===t[i+1])return u;return-1});j(l.prototype,"length",function(){return this._length});m(l.prototype,"map",function(r,e){var t,i,a,o,u;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!b(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));for(i=this._buffer,a=new this.constructor(this._length),t=a._buffer,o=0;o<this._length;o++)if(u=r.call(e,T(i,o),o,this),q(u))t[2*o]=V(u),t[2*o+1]=A(u);else if(M(u)&&u.length===2)t[2*o]=u[0],t[2*o+1]=u[1];else throw new TypeError(f("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",u));return a});m(l.prototype,"reverse",function(){var r,e,t,i,a,o;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,r=this._buffer,i=ke(t/2),a=0;a<i;a++)o=t-a-1,e=r[2*a],r[2*a]=r[2*o],r[2*o]=e,e=r[2*a+1],r[2*a+1]=r[2*o+1],r[2*o+1]=e;return this});m(l.prototype,"set",function(r){var e,t,i,a,o,u,c,s,y;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(t=arguments[1],!S(t))throw new TypeError(f("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(q(r)){if(t>=this._length)throw new RangeError(f("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));t*=2,i[t]=V(r),i[t+1]=A(r);return}if(g(r)){if(u=r._length,t+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,y=i.byteOffset+t*_,e.buffer===i.buffer&&e.byteOffset<y&&e.byteOffset+e.byteLength>y){for(a=new x(e.length),s=0;s<e.length;s++)a[s]=e[s];e=a}for(t*=2,y=0,s=0;s<u;s++)i[t]=e[y],i[t+1]=e[y+1],t+=2,y+=2;return}if(N(r)){for(u=r.length,s=0;s<u;s++)if(!q(r[s])){o=!0;break}if(o){if(!F(u))throw new RangeError(f("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",u));if(t+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,y=i.byteOffset+t*_,e.buffer===i.buffer&&e.byteOffset<y&&e.byteOffset+e.byteLength>y){for(a=new x(u),s=0;s<u;s++)a[s]=e[s];e=a}for(t*=2,u/=2,y=0,s=0;s<u;s++)i[t]=e[y],i[t+1]=e[y+1],t+=2,y+=2;return}if(t+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,s=0;s<u;s++)c=r[s],i[t]=V(c),i[t+1]=A(c),t+=2;return}throw new TypeError(f("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r))});m(l.prototype,"slice",function(r,e){var t,i,a,o,u,c,s;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(u=this._buffer,c=this._length,arguments.length===0)r=0,e=c;else{if(!E(r))throw new TypeError(f("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=c,r<0&&(r=0)),arguments.length===1)e=c;else{if(!E(e))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0?(e+=c,e<0&&(e=0)):e>c&&(e=c)}}for(r<e?t=e-r:t=0,a=new this.constructor(t),i=a._buffer,s=0;s<t;s++)o=2*(s+r),i[2*s]=u[o],i[2*s+1]=u[o+1];return a});m(l.prototype,"some",function(r,e){var t,i;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!b(r))throw new TypeError(f("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=this._buffer,i=0;i<this._length;i++)if(r.call(e,T(t,i),i,this))return!0;return!1});m(l.prototype,"subarray",function(r,e){var t,i,a;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,a=this._length,arguments.length===0)r=0,e=a;else{if(!E(r))throw new TypeError(f("invalid argument. First argument must be an integer. Value: `%s`.",r));if(r<0&&(r+=a,r<0&&(r=0)),arguments.length===1)e=a;else{if(!E(e))throw new TypeError(f("invalid argument. Second argument must be an integer. Value: `%s`.",e));e<0?(e+=a,e<0&&(e=0)):e>a&&(e=a)}}return r>=a?(a=0,t=i.byteLength):r>=e?(a=0,t=i.byteOffset+r*_):(a=e-r,t=i.byteOffset+r*_),new this.constructor(i.buffer,t,a<0?0:a)});m(l.prototype,"toReversed",function(){var r,e,t,i,a,o;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(t=this._length,e=new this.constructor(t),i=this._buffer,r=e._buffer,a=0;a<t;a++)o=t-a-1,r[2*a]=i[2*o],r[2*a+1]=i[2*o+1];return e});m(l.prototype,"toString",function(){var r,e,t;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=this._buffer,t=0;t<this._length;t++)r.push(T(e,t).toString());return r.join(",")});m(l.prototype,"with",function(r,e){var t,i,a;if(!g(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!E(r))throw new TypeError(f("invalid argument. First argument must be an integer. Value: `%s`.",r));if(a=this._length,r<0&&(r+=a),r<0||r>=a)throw new RangeError(f("invalid argument. Index argument is out-of-bounds. Value: `%s`.",r));if(!q(e))throw new TypeError(f("invalid argument. Second argument must be a complex number. Value: `%s`.",e));return i=new this.constructor(this._buffer),t=i._buffer,t[2*r]=V(e),t[2*r+1]=A(e),i});dr.exports=l});var P=w((tt,qr)=>{"use strict";var Be=xr();qr.exports=Be});var L={};Fr(L,{default:()=>Pe});var Me=Y(P());k(L,Y(P()));var{default:Vr,...Ne}=Me,Pe=Vr!==void 0?Vr:Ne;export{Pe as default};
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
*/
//# sourceMappingURL=complex64.js.map