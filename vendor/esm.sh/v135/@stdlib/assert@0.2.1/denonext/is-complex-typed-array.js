/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/is-complex-typed-array) denonext production */
import * as __0$ from "/v135/@stdlib/utils@0.2.1/denonext/constructor-name.js";
import * as __1$ from "/v135/@stdlib/utils@0.2.1/denonext/get-prototype-of.js";
import * as __2$ from "/v135/@stdlib/array@0.2.1/denonext/complex64.js";
import * as __3$ from "/v135/@stdlib/array@0.2.1/denonext/complex128.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/utils/constructor-name":return e(__0$);case"@stdlib/utils/get-prototype-of":return e(__1$);case"@stdlib/array/complex64":return e(__2$);case"@stdlib/array/complex128":return e(__3$);default:throw new Error("module \""+n+"\" not found");}};
var g=Object.create;var n=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var O=Object.getOwnPropertyNames;var S=Object.getPrototypeOf,T=Object.prototype.hasOwnProperty;var f=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),N=(r,e)=>{for(var t in e)n(r,t,{get:e[t],enumerable:!0})},s=(r,e,t,m)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of O(e))!T.call(r,a)&&a!==t&&n(r,a,{get:()=>e[a],enumerable:!(m=h(e,a))||m.enumerable});return r},i=(r,e,t)=>(s(r,e,"default"),t&&s(t,e,"default")),l=(r,e,t)=>(t=r!=null?g(S(r)):{},s(e||!r||!r.__esModule?n(t,"default",{value:r,enumerable:!0}):t,r));var c=u((G,x)=>{"use strict";var R=f("@stdlib/array/complex64"),b=f("@stdlib/array/complex128"),j=[b,R];x.exports=j});var y=u((H,w)=>{w.exports=["Complex64Array","Complex128Array"]});var A=u((I,C)=>{"use strict";var E=f("@stdlib/utils/constructor-name"),M=f("@stdlib/utils/get-prototype-of"),d=c(),q=y();function P(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<d.length;t++)if(r instanceof d[t])return!0;for(;r;){for(e=E(r),t=0;t<q.length;t++)if(q[t]===e)return!0;r=M(r)}return!1}C.exports=P});var p=u((J,_)=>{"use strict";var k=A();_.exports=k});var o={};N(o,{default:()=>D});var z=l(p());i(o,l(p()));var{default:v,...B}=z,D=v!==void 0?v:B;export{D as default};
/*! Bundled license information:

@stdlib/assert/is-complex-typed-array/lib/ctors.js:
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

@stdlib/assert/is-complex-typed-array/lib/main.js:
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

@stdlib/assert/is-complex-typed-array/lib/index.js:
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
//# sourceMappingURL=is-complex-typed-array.js.map