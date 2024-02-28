/* esm.sh - esbuild bundle(@stdlib/math@0.2.1/base/assert/is-infinite) denonext production */
import * as __0$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
import * as __1$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/ninf.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/constants/float64/pinf":return e(__0$);case"@stdlib/constants/float64/ninf":return e(__1$);default:throw new Error("module \""+n+"\" not found");}};
var v=Object.create;var n=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var I=Object.getOwnPropertyNames;var N=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty;var d=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,t)=>(typeof require<"u"?require:r)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var _=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),P=(e,r)=>{for(var t in r)n(e,t,{get:r[t],enumerable:!0})},s=(e,r,t,f)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of I(r))!F.call(e,o)&&o!==t&&n(e,o,{get:()=>r[o],enumerable:!(f=x(r,o))||f.enumerable});return e},u=(e,r,t)=>(s(e,r,"default"),t&&s(t,r,"default")),m=(e,r,t)=>(t=e!=null?v(N(e)):{},s(r||!e||!e.__esModule?n(t,"default",{value:e,enumerable:!0}):t,e));var c=_((A,p)=>{"use strict";var b=d("@stdlib/constants/float64/pinf"),g=d("@stdlib/constants/float64/ninf");function h(e){return e===b||e===g}p.exports=h});var a=_((B,l)=>{"use strict";var j=c();l.exports=j});var i={};P(i,{default:()=>y});var k=m(a());u(i,m(a()));var{default:q,...w}=k,y=q!==void 0?q:w;export{y as default};
/*! Bundled license information:

@stdlib/math/base/assert/is-infinite/lib/main.js:
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

@stdlib/math/base/assert/is-infinite/lib/index.js:
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
//# sourceMappingURL=is-infinite.js.map