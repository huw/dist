/* esm.sh - esbuild bundle(@stdlib/number@0.2.1/float64/base/get-high-word) denonext production */
import * as __0$ from "/v135/@stdlib/array@0.2.1/denonext/uint32.js";
import * as __1$ from "/v135/@stdlib/array@0.2.1/denonext/float64.js";
import * as __2$ from "/v135/@stdlib/assert@0.2.1/denonext/is-little-endian.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/array/uint32":return e(__0$);case"@stdlib/array/float64":return e(__1$);case"@stdlib/assert/is-little-endian":return e(__2$);default:throw new Error("module \""+n+"\" not found");}};
var A=Object.create;var o=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var W=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var n=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var f=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),y=(r,e)=>{for(var t in e)o(r,t,{get:e[t],enumerable:!0})},s=(r,e,t,_)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of W(e))!w.call(r,u)&&u!==t&&o(r,u,{get:()=>e[u],enumerable:!(_=E(e,u))||_.enumerable});return r},a=(r,e,t)=>(s(r,e,"default"),t&&s(t,e,"default")),l=(r,e,t)=>(t=r!=null?A(g(r)):{},s(e||!r||!r.__esModule?o(t,"default",{value:r,enumerable:!0}):t,r));var c=f((k,p)=>{"use strict";var F=n("@stdlib/assert/is-little-endian"),d;F===!0?d=1:d=0;p.exports=d});var x=f((z,q)=>{"use strict";var G=n("@stdlib/array/uint32"),L=n("@stdlib/array/float64"),T=c(),m=new L(1),U=new G(m.buffer);function V(r){return m[0]=r,U[T]}q.exports=V});var v=f((B,H)=>{"use strict";var b=x();H.exports=b});var i={};y(i,{default:()=>O});var h=l(v());a(i,l(v()));var{default:I,...N}=h,O=I!==void 0?I:N;export{O as default};
/*! Bundled license information:

@stdlib/number/float64/base/get-high-word/lib/high.js:
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

@stdlib/number/float64/base/get-high-word/lib/main.js:
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

@stdlib/number/float64/base/get-high-word/lib/index.js:
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
//# sourceMappingURL=get-high-word.js.map