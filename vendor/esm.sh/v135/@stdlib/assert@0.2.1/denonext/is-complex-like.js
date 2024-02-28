/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/is-complex-like) denonext production */
import * as __0$ from "/v135/@stdlib/complex@0.2.1/denonext/float64.js";
import * as __1$ from "/v135/@stdlib/complex@0.2.1/denonext/float32.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/complex/float64":return e(__0$);case"@stdlib/complex/float32":return e(__1$);default:throw new Error("module \""+n+"\" not found");}};
var b=Object.create;var s=Object.defineProperty;var q=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var C=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var p=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,t)=>(typeof require<"u"?require:r)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var c=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),k=(e,r)=>{for(var t in r)s(e,t,{get:r[t],enumerable:!0})},f=(e,r,t,m)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of y(r))!j.call(e,n)&&n!==t&&s(e,n,{get:()=>r[n],enumerable:!(m=q(r,n))||m.enumerable});return e},i=(e,r,t)=>(f(e,r,"default"),t&&f(t,r,"default")),x=(e,r,t)=>(t=e!=null?b(C(e)):{},f(r||!e||!e.__esModule?s(t,"default",{value:e,enumerable:!0}):t,e));var _=c((E,d)=>{"use strict";var L=p("@stdlib/complex/float64"),g=p("@stdlib/complex/float32");function h(e){return e instanceof L||e instanceof g?!0:typeof e=="object"&&e!==null&&typeof e.re=="number"&&typeof e.im=="number"}d.exports=h});var u=c((F,a)=>{"use strict";var w=_();a.exports=w});var o={};k(o,{default:()=>B});var z=x(u());i(o,x(u()));var{default:l,...A}=z,B=l!==void 0?l:A;export{B as default};
/*! Bundled license information:

@stdlib/assert/is-complex-like/lib/main.js:
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

@stdlib/assert/is-complex-like/lib/index.js:
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
//# sourceMappingURL=is-complex-like.js.map