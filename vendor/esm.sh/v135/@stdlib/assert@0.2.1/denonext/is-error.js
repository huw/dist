/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/is-error) denonext production */
import * as __0$ from "/v135/@stdlib/utils@0.2.1/denonext/get-prototype-of.js";
import * as __1$ from "/v135/@stdlib/utils@0.2.1/denonext/native-class.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/utils/get-prototype-of":return e(__0$);case"@stdlib/utils/native-class":return e(__1$);default:throw new Error("module \""+n+"\" not found");}};
var q=Object.create;var n=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var c=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var p=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),g=(r,e)=>{for(var t in e)n(r,t,{get:e[t],enumerable:!0})},s=(r,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let f of b(e))!y.call(r,f)&&f!==t&&n(r,f,{get:()=>e[f],enumerable:!(a=E(e,f))||a.enumerable});return r},i=(r,e,t)=>(s(r,e,"default"),t&&s(t,e,"default")),d=(r,e,t)=>(t=r!=null?q(j(r)):{},s(e||!r||!r.__esModule?n(t,"default",{value:r,enumerable:!0}):t,r));var m=p((B,_)=>{"use strict";var h=c("@stdlib/utils/get-prototype-of"),w=c("@stdlib/utils/native-class");function C(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(w(r)==="[object Error]")return!0;r=h(r)}return!1}_.exports=C});var u=p((D,l)=>{"use strict";var O=m();l.exports=O});var o={};g(o,{default:()=>z});var P=d(u());i(o,d(u()));var{default:x,...k}=P,z=x!==void 0?x:k;export{z as default};
/*! Bundled license information:

@stdlib/assert/is-error/lib/main.js:
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

@stdlib/assert/is-error/lib/index.js:
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
//# sourceMappingURL=is-error.js.map