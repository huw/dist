/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/is-array-like-object) denonext production */
import * as __0$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-integer.js";
import * as __1$ from "/v135/@stdlib/constants@0.2.1/denonext/array/max-array-length.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/math/base/assert/is-integer":return e(__0$);case"@stdlib/constants/array/max-array-length":return e(__1$);default:throw new Error("module \""+n+"\" not found");}};
var h=Object.create;var f=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var q=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var _=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,t)=>(typeof require<"u"?require:r)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var c=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),j=(e,r)=>{for(var t in r)f(e,t,{get:r[t],enumerable:!0})},s=(e,r,t,p)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of b(r))!y.call(e,i)&&i!==t&&f(e,i,{get:()=>r[i],enumerable:!(p=x(r,i))||p.enumerable});return e},o=(e,r,t)=>(s(e,r,"default"),t&&s(t,r,"default")),d=(e,r,t)=>(t=e!=null?h(q(e)):{},s(r||!e||!e.__esModule?f(t,"default",{value:e,enumerable:!0}):t,e));var g=c((N,m)=>{"use strict";var A=_("@stdlib/math/base/assert/is-integer"),L=_("@stdlib/constants/array/max-array-length");function k(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&A(e.length)&&e.length>=0&&e.length<=L}m.exports=k});var u=c((O,l)=>{"use strict";var E=g();l.exports=E});var n={};j(n,{default:()=>I});var G=d(u());o(n,d(u()));var{default:a,...H}=G,I=a!==void 0?a:H;export{I as default};
/*! Bundled license information:

@stdlib/assert/is-array-like-object/lib/main.js:
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

@stdlib/assert/is-array-like-object/lib/index.js:
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
//# sourceMappingURL=is-array-like-object.js.map