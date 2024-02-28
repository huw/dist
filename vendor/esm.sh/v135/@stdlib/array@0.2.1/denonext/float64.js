/* esm.sh - esbuild bundle(@stdlib/array@0.2.1/float64) denonext production */
import * as __0$ from "/v135/@stdlib/assert@0.2.1/denonext/has-float64array-support.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/assert/has-float64array-support":return e(__0$);default:throw new Error("module \""+n+"\" not found");}};
var q=Object.create;var u=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var F=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var b=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var s=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),E=(r,t)=>{for(var e in t)u(r,e,{get:t[e],enumerable:!0})},l=(r,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of F(t))!w.call(r,a)&&a!==e&&u(r,a,{get:()=>t[a],enumerable:!(n=A(t,a))||n.enumerable});return r},i=(r,t,e)=>(l(r,t,"default"),e&&l(e,t,"default")),c=(r,t,e)=>(e=r!=null?q(h(r)):{},l(t||!r||!r.__esModule?u(e,"default",{value:r,enumerable:!0}):e,r));var m=s((H,d)=>{"use strict";var S=typeof Float64Array=="function"?Float64Array:void 0;d.exports=S});var y=s((I,v)=>{"use strict";function g(){throw new Error("not implemented")}v.exports=g});var p=s((J,_)=>{"use strict";var j=b("@stdlib/assert/has-float64array-support"),k=m(),z=y(),f;j()?f=k:f=z;_.exports=f});var o={};E(o,{default:()=>D});var B=c(p());i(o,c(p()));var{default:x,...C}=B,D=x!==void 0?x:C;export{D as default};
/*! Bundled license information:

@stdlib/array/float64/lib/main.js:
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

@stdlib/array/float64/lib/polyfill.js:
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

@stdlib/array/float64/lib/index.js:
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
//# sourceMappingURL=float64.js.map