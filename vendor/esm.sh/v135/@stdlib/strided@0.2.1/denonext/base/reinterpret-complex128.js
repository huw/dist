/* esm.sh - esbuild bundle(@stdlib/strided@0.2.1/base/reinterpret-complex128) denonext production */
import * as __0$ from "/v135/@stdlib/array@0.2.1/denonext/float64.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/array/float64":return e(__0$);default:throw new Error("module \""+n+"\" not found");}};
var c=Object.create;var f=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var T=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,t)=>(typeof require<"u"?require:r)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var _=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),g=(e,r)=>{for(var t in r)f(e,t,{get:r[t],enumerable:!0})},a=(e,r,t,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of q(r))!y.call(e,o)&&o!==t&&f(e,o,{get:()=>r[o],enumerable:!(s=b(r,o))||s.enumerable});return e},n=(e,r,t)=>(a(e,r,"default"),t&&a(t,r,"default")),d=(e,r,t)=>(t=e!=null?c(v(e)):{},a(r||!e||!e.__esModule?f(t,"default",{value:e,enumerable:!0}):t,e));var p=_((M,l)=>{"use strict";var h=T("@stdlib/array/float64");function w(e,r){return new h(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}l.exports=w});var i=_((N,m)=>{"use strict";var x=p();m.exports=x});var u={};g(u,{default:()=>F});var A=d(i());n(u,d(i()));var{default:E,...B}=A,F=E!==void 0?E:B;export{F as default};
/*! Bundled license information:

@stdlib/strided/base/reinterpret-complex128/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
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

@stdlib/strided/base/reinterpret-complex128/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
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
//# sourceMappingURL=reinterpret-complex128.js.map