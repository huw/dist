/* esm.sh - esbuild bundle(@stdlib/number@0.2.1/float64/base/from-words) denonext production */
import * as __0$ from "/v135/@stdlib/array@0.2.1/denonext/uint32.js";
import * as __1$ from "/v135/@stdlib/array@0.2.1/denonext/float64.js";
import * as __2$ from "/v135/@stdlib/assert@0.2.1/denonext/is-little-endian.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/array/uint32":return e(__0$);case"@stdlib/array/float64":return e(__1$);case"@stdlib/assert/is-little-endian":return e(__2$);default:throw new Error("module \""+n+"\" not found");}};
var A=Object.create;var n=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var y=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty;var o=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var v=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),T=(r,e)=>{for(var t in e)n(r,t,{get:e[t],enumerable:!0})},u=(r,e,t,_)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of w(e))!F.call(r,s)&&s!==t&&n(r,s,{get:()=>e[s],enumerable:!(_=E(e,s))||_.enumerable});return r},i=(r,e,t)=>(u(r,e,"default"),t&&u(t,e,"default")),c=(r,e,t)=>(t=r!=null?A(y(r)):{},u(e||!r||!r.__esModule?n(t,"default",{value:r,enumerable:!0}):t,r));var W=v((D,I)=>{"use strict";var U=o("@stdlib/assert/is-little-endian"),l,f,d;U===!0?(f=1,d=0):(f=0,d=1);l={HIGH:f,LOW:d};I.exports=l});var x=v((J,q)=>{"use strict";var V=o("@stdlib/array/uint32"),b=o("@stdlib/array/float64"),p=W(),L=new b(1),m=new V(L.buffer),N=p.HIGH,g=p.LOW;function h(r,e){return m[N]=r,m[g]=e,L[0]}q.exports=h});var H=v((K,O)=>{"use strict";var j=x();O.exports=j});var a={};T(a,{default:()=>B});var k=c(H());i(a,c(H()));var{default:G,...z}=k,B=G!==void 0?G:z;export{B as default};
/*! Bundled license information:

@stdlib/number/float64/base/from-words/lib/indices.js:
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

@stdlib/number/float64/base/from-words/lib/main.js:
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

@stdlib/number/float64/base/from-words/lib/index.js:
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
//# sourceMappingURL=from-words.js.map