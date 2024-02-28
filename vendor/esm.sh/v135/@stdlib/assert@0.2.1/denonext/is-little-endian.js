/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/is-little-endian) denonext production */
import * as __0$ from "/v135/@stdlib/array@0.2.1/denonext/uint8.js";
import * as __1$ from "/v135/@stdlib/array@0.2.1/denonext/uint16.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/array/uint8":return e(__0$);case"@stdlib/array/uint16":return e(__1$);default:throw new Error("module \""+n+"\" not found");}};
var E=Object.create;var o=Object.defineProperty;var I=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var _=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var s=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),N=(r,t)=>{for(var e in t)o(r,e,{get:t[e],enumerable:!0})},a=(r,t,e,f)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of L(t))!y.call(r,n)&&n!==e&&o(r,n,{get:()=>t[n],enumerable:!(f=I(t,n))||f.enumerable});return r},u=(r,t,e)=>(a(r,t,"default"),e&&a(e,t,"default")),c=(r,t,e)=>(e=r!=null?E(b(r)):{},a(t||!r||!r.__esModule?o(e,"default",{value:r,enumerable:!0}):e,r));var x=s((B,d)=>{"use strict";var T=_("@stdlib/array/uint8"),U=_("@stdlib/array/uint16"),D={uint16:U,uint8:T};d.exports=D});var q=s((C,m)=>{"use strict";var l=x(),p;function S(){var r,t;return r=new l.uint16(1),r[0]=4660,t=new l.uint8(r.buffer),t[0]===52}p=S();m.exports=p});var v=s((F,w)=>{"use strict";var g=q();w.exports=g});var i={};N(i,{default:()=>k});var h=c(v());u(i,c(v()));var{default:A,...j}=h,k=A!==void 0?A:j;export{k as default};
/*! Bundled license information:

@stdlib/assert/is-little-endian/lib/ctors.js:
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

@stdlib/assert/is-little-endian/lib/main.js:
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

@stdlib/assert/is-little-endian/lib/index.js:
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
//# sourceMappingURL=is-little-endian.js.map