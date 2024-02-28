/* esm.sh - esbuild bundle(@stdlib/math@0.2.1/base/ops/umul) denonext production */
var O=Object.create;var v=Object.defineProperty;var W=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var A=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var n=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports),K=(t,r)=>{for(var e in r)v(t,e,{get:r[e],enumerable:!0})},l=(t,r,e,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of q(r))!D.call(t,a)&&a!==e&&v(t,a,{get:()=>r[a],enumerable:!(s=W(r,a))||s.enumerable});return t},f=(t,r,e)=>(l(t,r,"default"),e&&l(e,r,"default")),d=(t,r,e)=>(e=t!=null?O(A(t)):{},l(r||!t||!t.__esModule?v(e,"default",{value:t,enumerable:!0}):e,t));var c=n((k,x)=>{"use strict";var p=65535;function L(t,r){var e,s,a,m,o,i;return t>>>=0,r>>>=0,a=t>>>16>>>0,m=r>>>16>>>0,o=(t&p)>>>0,i=(r&p)>>>0,e=o*i>>>0,s=a*i+o*m<<16>>>0,e+s>>>0}x.exports=L});var _=n((w,b)=>{"use strict";var M=c();b.exports=M});var u={};K(u,{default:()=>g});var R=d(_());f(u,d(_()));var{default:h,...S}=R,g=h!==void 0?h:S;export{g as default};
/*! Bundled license information:

@stdlib/math/base/ops/umul/lib/main.js:
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

@stdlib/math/base/ops/umul/lib/index.js:
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
//# sourceMappingURL=umul.js.map