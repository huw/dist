/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/is-arraybuffer) denonext production */
import * as __0$ from "/v135/@stdlib/utils@0.2.1/denonext/native-class.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/utils/native-class":return e(__0$);default:throw new Error("module \""+n+"\" not found");}};
var A=Object.create;var s=Object.defineProperty;var B=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var q=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var c=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),b=(r,e)=>{for(var t in e)s(r,t,{get:e[t],enumerable:!0})},o=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of l(e))!v.call(r,u)&&u!==t&&s(r,u,{get:()=>e[u],enumerable:!(n=B(e,u))||n.enumerable});return r},a=(r,e,t)=>(o(r,e,"default"),t&&o(t,e,"default")),d=(r,e,t)=>(t=r!=null?A(x(r)):{},o(e||!r||!r.__esModule?s(t,"default",{value:r,enumerable:!0}):t,r));var y=c((E,p)=>{"use strict";var h=q("@stdlib/utils/native-class"),j=typeof ArrayBuffer=="function";function C(r){return j&&r instanceof ArrayBuffer||h(r)==="[object ArrayBuffer]"}p.exports=C});var i=c((F,_)=>{"use strict";var g=y();_.exports=g});var f={};b(f,{default:()=>z});var k=d(i());a(f,d(i()));var{default:m,...w}=k,z=m!==void 0?m:w;export{z as default};
/*! Bundled license information:

@stdlib/assert/is-arraybuffer/lib/main.js:
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

@stdlib/assert/is-arraybuffer/lib/index.js:
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
//# sourceMappingURL=is-arraybuffer.js.map