/* esm.sh - esbuild bundle(@stdlib/number@0.2.1/float64/base/set-high-word) denonext production */
import * as __0$ from "/v135/@stdlib/array@0.2.1/denonext/uint32.js";
import * as __1$ from "/v135/@stdlib/array@0.2.1/denonext/float64.js";
import * as __2$ from "/v135/@stdlib/assert@0.2.1/denonext/is-little-endian.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/array/uint32":return e(__0$);case"@stdlib/array/float64":return e(__1$);case"@stdlib/assert/is-little-endian":return e(__2$);default:throw new Error("module \""+n+"\" not found");}};
var A=Object.create;var o=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var W=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var n=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var f=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),F=(r,e)=>{for(var t in e)o(r,t,{get:e[t],enumerable:!0})},s=(r,e,t,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of W(e))!y.call(r,u)&&u!==t&&o(r,u,{get:()=>e[u],enumerable:!(l=E(e,u))||l.enumerable});return r},a=(r,e,t)=>(s(r,e,"default"),t&&s(t,e,"default")),p=(r,e,t)=>(t=r!=null?A(w(r)):{},s(e||!r||!r.__esModule?o(t,"default",{value:r,enumerable:!0}):t,r));var m=f((k,c)=>{"use strict";var G=n("@stdlib/assert/is-little-endian"),d;G===!0?d=1:d=0;c.exports=d});var x=f((z,q)=>{"use strict";var L=n("@stdlib/array/uint32"),T=n("@stdlib/array/float64"),U=m(),v=new T(1),V=new L(v.buffer);function b(r,e){return v[0]=r,V[U]=e>>>0,v[0]}q.exports=b});var _=f((B,H)=>{"use strict";var g=x();H.exports=g});var i={};F(i,{default:()=>O});var h=p(_());a(i,p(_()));var{default:I,...N}=h,O=I!==void 0?I:N;export{O as default};
/*! Bundled license information:

@stdlib/number/float64/base/set-high-word/lib/high.js:
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

@stdlib/number/float64/base/set-high-word/lib/main.js:
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

@stdlib/number/float64/base/set-high-word/lib/index.js:
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
//# sourceMappingURL=set-high-word.js.map