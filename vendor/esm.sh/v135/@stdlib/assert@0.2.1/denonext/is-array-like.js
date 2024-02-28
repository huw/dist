/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/is-array-like) denonext production */
import * as __0$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-integer.js";
import * as __1$ from "/v135/@stdlib/constants@0.2.1/denonext/array/max-array-length.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/math/base/assert/is-integer":return e(__0$);case"@stdlib/constants/array/max-array-length":return e(__1$);default:throw new Error("module \""+n+"\" not found");}};
var x=Object.create;var f=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var y=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty;var p=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var _=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),L=(r,e)=>{for(var t in e)f(r,t,{get:e[t],enumerable:!0})},s=(r,e,t,d)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of q(e))!A.call(r,o)&&o!==t&&f(r,o,{get:()=>e[o],enumerable:!(d=a(e,o))||d.enumerable});return r},i=(r,e,t)=>(s(r,e,"default"),t&&s(t,e,"default")),m=(r,e,t)=>(t=r!=null?x(y(r)):{},s(e||!r||!r.__esModule?f(t,"default",{value:r,enumerable:!0}):t,r));var g=_((T,c)=>{"use strict";var b=p("@stdlib/math/base/assert/is-integer"),k=p("@stdlib/constants/array/max-array-length");function E(r){return r!=null&&typeof r!="function"&&typeof r.length=="number"&&b(r.length)&&r.length>=0&&r.length<=k}c.exports=E});var u=_((X,h)=>{"use strict";var G=g();h.exports=G});var n={};L(n,{default:()=>M});var H=m(u());i(n,m(u()));var{default:l,...I}=H,M=l!==void 0?l:I;export{M as default};
/*! Bundled license information:

@stdlib/assert/is-array-like/lib/main.js:
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

@stdlib/assert/is-array-like/lib/index.js:
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
//# sourceMappingURL=is-array-like.js.map