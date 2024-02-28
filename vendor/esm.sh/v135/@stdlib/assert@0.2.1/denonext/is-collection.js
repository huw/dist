/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/is-collection) denonext production */
import * as __0$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-integer.js";
import * as __1$ from "/v135/@stdlib/constants@0.2.1/denonext/array/max-typed-array-length.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/math/base/assert/is-integer":return e(__0$);case"@stdlib/constants/array/max-typed-array-length":return e(__1$);default:throw new Error("module \""+n+"\" not found");}};
var x=Object.create;var f=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var p=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var _=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),j=(e,t)=>{for(var r in t)f(e,r,{get:t[r],enumerable:!0})},s=(e,t,r,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of q(t))!y.call(e,i)&&i!==r&&f(e,i,{get:()=>t[i],enumerable:!(l=a(t,i))||l.enumerable});return e},o=(e,t,r)=>(s(e,t,"default"),r&&s(r,t,"default")),c=(e,t,r)=>(r=e!=null?x(b(e)):{},s(t||!e||!e.__esModule?f(r,"default",{value:e,enumerable:!0}):r,e));var m=_((N,d)=>{"use strict";var A=p("@stdlib/math/base/assert/is-integer"),C=p("@stdlib/constants/array/max-typed-array-length");function E(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&A(e.length)&&e.length>=0&&e.length<=C}d.exports=E});var u=_((T,g)=>{"use strict";var G=m();g.exports=G});var n={};j(n,{default:()=>L});var H=c(u());o(n,c(u()));var{default:h,...I}=H,L=h!==void 0?h:I;export{L as default};
/*! Bundled license information:

@stdlib/assert/is-collection/lib/main.js:
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

@stdlib/assert/is-collection/lib/index.js:
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
//# sourceMappingURL=is-collection.js.map