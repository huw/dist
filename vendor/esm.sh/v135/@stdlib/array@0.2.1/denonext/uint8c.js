/* esm.sh - esbuild bundle(@stdlib/array@0.2.1/uint8c) denonext production */
import * as __0$ from "/v135/@stdlib/assert@0.2.1/denonext/has-uint8clampedarray-support.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/assert/has-uint8clampedarray-support":return e(__0$);default:throw new Error("module \""+n+"\" not found");}};
var q=Object.create;var p=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var U=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty;var w=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),b=(r,e)=>{for(var t in e)p(r,t,{get:e[t],enumerable:!0})},l=(r,e,t,f)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of C(e))!h.call(r,a)&&a!==t&&p(r,a,{get:()=>e[a],enumerable:!(f=A(e,a))||f.enumerable});return r},i=(r,e,t)=>(l(r,e,"default"),t&&l(t,e,"default")),d=(r,e,t)=>(t=r!=null?q(U(r)):{},l(e||!r||!r.__esModule?p(t,"default",{value:r,enumerable:!0}):t,r));var c=u((G,m)=>{"use strict";var E=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;m.exports=E});var y=u((H,v)=>{"use strict";function S(){throw new Error("not implemented")}v.exports=S});var s=u((I,_)=>{"use strict";var g=w("@stdlib/assert/has-uint8clampedarray-support"),j=c(),k=y(),n;g()?n=j:n=k;_.exports=n});var o={};b(o,{default:()=>D});var z=d(s());i(o,d(s()));var{default:x,...B}=z,D=x!==void 0?x:B;export{D as default};
/*! Bundled license information:

@stdlib/array/uint8c/lib/main.js:
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

@stdlib/array/uint8c/lib/polyfill.js:
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

@stdlib/array/uint8c/lib/index.js:
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
//# sourceMappingURL=uint8c.js.map