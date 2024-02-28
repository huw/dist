/* esm.sh - esbuild bundle(@stdlib/random@0.2.1/base/uniform/lib) denonext production */
import * as __0$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __1$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __2$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-accessor.js";
import * as __3$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-write-accessor.js";
import * as __4$ from "/v135/@stdlib/assert@0.2.1/denonext/is-plain-object.js";
import * as __5$ from "/v135/@stdlib/assert@0.2.1/denonext/is-function.js";
import * as __6$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
import * as __7$ from "/v135/@stdlib/utils@0.2.1/denonext/constant-function.js";
import * as __8$ from "/v135/@stdlib/utils@0.2.1/denonext/noop.js";
import * as __9$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-nan.js";
import * as __a$ from "/v135/@stdlib/array@0.2.1/denonext/to-json.js";
import * as __b$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __c$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __d$ from "/v135/@stdlib/assert@0.2.1/denonext/is-number.js";
import * as __e$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __f$ from "/v135/@stdlib/assert@0.2.1/denonext/is-nan.js";
import * as __10$ from "/v135/@stdlib/constants@0.2.1/denonext/uint32/max.js";
import * as __11$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/floor.js";
import * as __12$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __13$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-accessor.js";
import * as __14$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-write-accessor.js";
import * as __15$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
import * as __16$ from "/v135/@stdlib/assert@0.2.1/denonext/is-plain-object.js";
import * as __17$ from "/v135/@stdlib/assert@0.2.1/denonext/is-collection.js";
import * as __18$ from "/v135/@stdlib/assert@0.2.1/denonext/is-uint32array.js";
import * as __19$ from "/v135/@stdlib/assert@0.2.1/denonext/is-boolean.js";
import * as __1a$ from "/v135/@stdlib/assert@0.2.1/denonext/is-positive-integer.js";
import * as __1b$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/max-safe-integer.js";
import * as __1c$ from "/v135/@stdlib/constants@0.2.1/denonext/uint32/max.js";
import * as __1d$ from "/v135/@stdlib/array@0.2.1/denonext/uint32.js";
import * as __1e$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/max.js";
import * as __1f$ from "/v135/@stdlib/math@0.2.1/denonext/base/ops/umul.js";
import * as __20$ from "/v135/@stdlib/blas@0.2.1/denonext/base/gcopy.js";
import * as __21$ from "/v135/@stdlib/array@0.2.1/denonext/to-json.js";
import * as __22$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/utils/define-nonenumerable-read-only-property":return e(__0$);case"@stdlib/utils/define-nonenumerable-read-only-accessor":return e(__2$);case"@stdlib/utils/define-nonenumerable-read-write-accessor":return e(__3$);case"@stdlib/assert/is-plain-object":return e(__4$);case"@stdlib/assert/is-function":return e(__5$);case"@stdlib/assert/has-own-property":return e(__6$);case"@stdlib/utils/constant-function":return e(__7$);case"@stdlib/utils/noop":return e(__8$);case"@stdlib/math/base/assert/is-nan":return e(__9$);case"@stdlib/array/to-json":return e(__a$);case"@stdlib/string/format":return e(__b$);case"@stdlib/assert/is-number":return e(__d$);case"@stdlib/assert/is-nan":return e(__f$);case"@stdlib/constants/uint32/max":return e(__10$);case"@stdlib/math/base/special/floor":return e(__11$);case"@stdlib/assert/is-collection":return e(__17$);case"@stdlib/assert/is-uint32array":return e(__18$);case"@stdlib/assert/is-boolean":return e(__19$);case"@stdlib/assert/is-positive-integer":return e(__1a$);case"@stdlib/constants/float64/max-safe-integer":return e(__1b$);case"@stdlib/array/uint32":return e(__1d$);case"@stdlib/math/base/special/max":return e(__1e$);case"@stdlib/math/base/ops/umul":return e(__1f$);case"@stdlib/blas/base/gcopy":return e(__20$);default:throw new Error("module \""+n+"\" not found");}};
var Fe=Object.create;var G=Object.defineProperty;var je=Object.getOwnPropertyDescriptor;var Ce=Object.getOwnPropertyNames;var Ue=Object.getPrototypeOf,Ge=Object.prototype.hasOwnProperty;var a=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var p=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),Xe=(r,e)=>{for(var t in e)G(r,t,{get:e[t],enumerable:!0})},U=(r,e,t,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Ce(e))!Ge.call(r,n)&&n!==t&&G(r,n,{get:()=>e[n],enumerable:!(u=je(e,n))||u.enumerable});return r},w=(r,e,t)=>(U(r,e,"default"),t&&U(t,e,"default")),Q=(r,e,t)=>(t=r!=null?Fe(Ue(r)):{},U(e||!r||!r.__esModule?G(t,"default",{value:r,enumerable:!0}):t,r));var X=p((Nr,$)=>{"use strict";var Ye=a("@stdlib/constants/uint32/max"),Be=a("@stdlib/math/base/special/floor"),Ve=Ye-1;function Je(){var r=Be(1+Ve*Math.random());return r>>>0}$.exports=Je});var W=p((Rr,ve)=>{"use strict";var h=a("@stdlib/utils/define-nonenumerable-read-only-property"),T=a("@stdlib/utils/define-nonenumerable-read-only-accessor"),ee=a("@stdlib/utils/define-nonenumerable-read-write-accessor"),Y=a("@stdlib/assert/has-own-property"),ke=a("@stdlib/assert/is-plain-object"),ze=a("@stdlib/assert/is-collection"),re=a("@stdlib/assert/is-uint32array"),De=a("@stdlib/assert/is-boolean").isPrimitive,te=a("@stdlib/assert/is-positive-integer").isPrimitive,oe=a("@stdlib/constants/float64/max-safe-integer"),se=a("@stdlib/constants/uint32/max"),l=a("@stdlib/array/uint32"),We=a("@stdlib/math/base/special/max"),D=a("@stdlib/math/base/ops/umul"),S=a("@stdlib/blas/base/gcopy"),He=a("@stdlib/array/to-json"),E=a("@stdlib/string/format"),ne=X(),f=624,B=397,ie=se>>>0,Ke=19650218,V=2147483648,J=2147483647,Ze=1812433253,Qe=1664525,$e=1566083941,er=2636928640,rr=4022730752,tr=2567483615,k=[0,tr>>>0],fe=1/(oe+1),nr=67108864,ir=2147483648,z=1,ar=oe*fe,I=1,P=3,_=2,b=f+3,g=f+5,q=f+6;function ae(r,e){var t;return e?t="option":t="argument",r.length<q+1?new RangeError(E("invalid %s. `state` array has insufficient length.",t)):r[0]!==I?new RangeError(E("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,I,r[0])):r[1]!==P?new RangeError(E("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,P,r[1])):r[_]!==f?new RangeError(E("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,f,r[_])):r[b]!==1?new RangeError(E("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[b])):r[g]!==r.length-q?new RangeError(E("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-q,r[g])):null}function ue(r,e,t){var u;for(r[0]=t>>>0,u=1;u<e;u++)t=r[u-1]>>>0,t=(t^t>>>30)>>>0,r[u]=D(t,Ze)+u>>>0;return r}function ur(r,e,t,u){var n,o,m,c;for(o=1,m=0,c=We(e,u);c>0;c--)n=r[o-1]>>>0,n=(n^n>>>30)>>>0,n=D(n,Qe)>>>0,r[o]=(r[o]>>>0^n)+t[m]+m>>>0,o+=1,m+=1,o>=e&&(r[0]=r[e-1],o=1),m>=u&&(m=0);for(c=e-1;c>0;c--)n=r[o-1]>>>0,n=(n^n>>>30)>>>0,n=D(n,$e)>>>0,r[o]=(r[o]>>>0^n)-o>>>0,o+=1,o>=e&&(r[0]=r[e-1],o=1);return r[0]=ir,r}function or(r){var e,t,u,n;for(n=f-B,t=0;t<n;t++)e=r[t]&V|r[t+1]&J,r[t]=r[t+B]^e>>>1^k[e&z];for(u=f-1;t<u;t++)e=r[t]&V|r[t+1]&J,r[t]=r[t-n]^e>>>1^k[e&z];return e=r[u]&V|r[0]&J,r[u]=r[B-1]^e>>>1^k[e&z],r}function sr(r){var e,t,u,n,o,m;if(u={},arguments.length){if(!ke(r))throw new TypeError(E("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Y(r,"copy")&&(u.copy=r.copy,!De(r.copy)))throw new TypeError(E("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Y(r,"state")){if(t=r.state,u.state=!0,!re(t))throw new TypeError(E("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(m=ae(t,!0),m)throw m;u.copy===!1?e=t:(e=new l(t.length),S(t.length,t,1,e,1)),t=new l(e.buffer,e.byteOffset+(_+1)*e.BYTES_PER_ELEMENT,f),n=new l(e.buffer,e.byteOffset+(g+1)*e.BYTES_PER_ELEMENT,t[g])}if(n===void 0)if(Y(r,"seed"))if(n=r.seed,u.seed=!0,te(n)){if(n>ie)throw new RangeError(E("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(ze(n)===!1||n.length<1)throw new TypeError(E("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!te(n))throw new TypeError(E("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>ie)throw new RangeError(E("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else o=n.length,e=new l(q+o),e[0]=I,e[1]=P,e[_]=f,e[b]=1,e[b+1]=f,e[g]=o,S.ndarray(o,n,1,0,e,1,g+1),t=new l(e.buffer,e.byteOffset+(_+1)*e.BYTES_PER_ELEMENT,f),n=new l(e.buffer,e.byteOffset+(g+1)*e.BYTES_PER_ELEMENT,o),t=ue(t,f,Ke),t=ur(t,f,n,o)}else n=ne()>>>0}else n=ne()>>>0;return t===void 0&&(e=new l(q+1),e[0]=I,e[1]=P,e[_]=f,e[b]=1,e[b+1]=f,e[g]=1,e[g+1]=n,t=new l(e.buffer,e.byteOffset+(_+1)*e.BYTES_PER_ELEMENT,f),n=new l(e.buffer,e.byteOffset+(g+1)*e.BYTES_PER_ELEMENT,1),t=ue(t,f,n)),h(v,"NAME","mt19937"),T(v,"seed",c),T(v,"seedLength",A),ee(v,"state",M,L),T(v,"stateLength",N),T(v,"byteLength",R),h(v,"toJSON",x),h(v,"MIN",0),h(v,"MAX",se),h(v,"normalized",s),h(s,"NAME",v.NAME),T(s,"seed",c),T(s,"seedLength",A),ee(s,"state",M,L),T(s,"stateLength",N),T(s,"byteLength",R),h(s,"toJSON",x),h(s,"MIN",0),h(s,"MAX",ar),v;function c(){var i=e[g];return S(i,n,1,new l(i),1)}function A(){return e[g]}function N(){return e.length}function R(){return e.byteLength}function M(){var i=e.length;return S(i,e,1,new l(i),1)}function L(i){var d;if(!re(i))throw new TypeError(E("invalid argument. Must provide a Uint32Array. Value: `%s`.",i));if(d=ae(i,!1),d)throw d;u.copy===!1?u.state&&i.length===e.length?S(i.length,i,1,e,1):(e=i,u.state=!0):(i.length!==e.length&&(e=new l(i.length)),S(i.length,i,1,e,1)),t=new l(e.buffer,e.byteOffset+(_+1)*e.BYTES_PER_ELEMENT,f),n=new l(e.buffer,e.byteOffset+(g+1)*e.BYTES_PER_ELEMENT,e[g])}function x(){var i={};return i.type="PRNG",i.name=v.NAME,i.state=He(e),i.params=[],i}function v(){var i,d;return d=e[b+1],d>=f&&(t=or(t),d=0),i=t[d],e[b+1]=d+1,i^=i>>>11,i^=i<<7&er,i^=i<<15&rr,i^=i>>>18,i>>>0}function s(){var i=v()>>>5,d=v()>>>6;return(i*nr+d)*fe}}ve.exports=sr});var ge=p((Mr,le)=>{"use strict";var fr=W(),vr=X(),lr=fr({seed:vr()});le.exports=lr});var ce=p((Lr,me)=>{"use strict";var gr=a("@stdlib/utils/define-nonenumerable-read-only-property"),Ee=ge(),Er=W();gr(Ee,"factory",Er);me.exports=Ee});var ye=p((xr,he)=>{"use strict";var de=a("@stdlib/assert/is-number").isPrimitive,H=a("@stdlib/string/format"),pe=a("@stdlib/assert/is-nan");function mr(r,e){return!de(r)||pe(r)?new TypeError(H("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!de(e)||pe(e)?new TypeError(H("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(H("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}he.exports=mr});var _e=p((Ir,Te)=>{"use strict";function cr(r,e,t){var u=r();return t*u+(1-u)*e}Te.exports=cr});var K=p((Pr,Re)=>{"use strict";var y=a("@stdlib/utils/define-nonenumerable-read-only-property"),F=a("@stdlib/utils/define-nonenumerable-read-only-accessor"),be=a("@stdlib/utils/define-nonenumerable-read-write-accessor"),Oe=a("@stdlib/assert/is-plain-object"),we=a("@stdlib/assert/is-function"),Se=a("@stdlib/assert/has-own-property"),qe=a("@stdlib/utils/constant-function"),dr=a("@stdlib/utils/noop"),j=ce().factory,Ae=a("@stdlib/math/base/assert/is-nan"),pr=a("@stdlib/array/to-json"),C=a("@stdlib/string/format"),hr=ye(),Ne=_e();function yr(){var r,e,t,u,n,o;if(arguments.length===0)e=j();else if(arguments.length===1){if(r=arguments[0],!Oe(r))throw new TypeError(C("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Se(r,"prng")){if(!we(r.prng))throw new TypeError(C("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=j(r)}else{if(n=arguments[0],o=arguments[1],u=hr(n,o),u)throw u;if(arguments.length>2){if(r=arguments[2],!Oe(r))throw new TypeError(C("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Se(r,"prng")){if(!we(r.prng))throw new TypeError(C("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=j(r)}else e=j()}return n===void 0?t=v:t=x,y(t,"NAME","uniform"),r&&r.prng?(y(t,"seed",null),y(t,"seedLength",null),be(t,"state",qe(null),dr),y(t,"stateLength",null),y(t,"byteLength",null),y(t,"toJSON",qe(null)),y(t,"PRNG",e)):(F(t,"seed",m),F(t,"seedLength",c),be(t,"state",R,M),F(t,"stateLength",A),F(t,"byteLength",N),y(t,"toJSON",L),y(t,"PRNG",e),e=e.normalized),t;function m(){return e.seed}function c(){return e.seedLength}function A(){return e.stateLength}function N(){return e.byteLength}function R(){return e.state}function M(s){e.state=s}function L(){var s={};return s.type="PRNG",s.name=t.NAME,s.state=pr(e.state),n===void 0?s.params=[]:s.params=[n,o],s}function x(){return Ne(e,n,o)}function v(s,i){return Ae(s)||Ae(i)||s>=i?NaN:Ne(e,s,i)}}Re.exports=yr});var Le=p((Fr,Me)=>{"use strict";var Tr=K(),_r=Tr();Me.exports=_r});var Z=p((jr,Ie)=>{"use strict";var br=a("@stdlib/utils/define-nonenumerable-read-only-property"),xe=Le(),Or=K();br(xe,"factory",Or);Ie.exports=xe});var O={};Xe(O,{default:()=>qr});var wr=Q(Z());w(O,Q(Z()));var{default:Pe,...Sr}=wr,qr=Pe!==void 0?Pe:Sr;export{qr as default};
/*! Bundled license information:

@stdlib/random/base/mt19937/lib/rand_uint32.js:
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

@stdlib/random/base/mt19937/lib/factory.js:
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
  *
  *
  * ## Notice
  *
  * The original C code and copyright notice are from the [source implementation][mt19937]. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
  * All rights reserved.
  *
  * Redistribution and use in source and binary forms, with or without
  * modification, are permitted provided that the following conditions
  * are met:
  *
  *   1. Redistributions of source code must retain the above copyright
  *      notice, this list of conditions and the following disclaimer.
  *
  *   2. Redistributions in binary form must reproduce the above copyright
  *      notice, this list of conditions and the following disclaimer in the
  *      documentation and/or other materials provided with the distribution.
  *
  *   3. The names of its contributors may not be used to endorse or promote
  *      products derived from this software without specific prior written
  *      permission.
  *
  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
  * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
  * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
  * A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
  * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  * ```
  *
  * [mt19937]: http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/MT2002/CODES/mt19937ar.c
  *)

@stdlib/random/base/mt19937/lib/main.js:
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

@stdlib/random/base/mt19937/lib/index.js:
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

@stdlib/random/base/uniform/lib/validate.js:
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

@stdlib/random/base/uniform/lib/uniform.js:
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

@stdlib/random/base/uniform/lib/factory.js:
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

@stdlib/random/base/uniform/lib/main.js:
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

@stdlib/random/base/uniform/lib/index.js:
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
//# sourceMappingURL=lib.js.map