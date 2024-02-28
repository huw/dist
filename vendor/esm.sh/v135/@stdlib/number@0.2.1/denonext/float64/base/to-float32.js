/* esm.sh - esbuild bundle(@stdlib/number@0.2.1/float64/base/to-float32) denonext production */
import * as __0$ from "/v135/@stdlib/array@0.2.1/denonext/float32.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/array/float32":return e(__0$);default:throw new Error("module \""+n+"\" not found");}};
var T=Object.create;var l=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var A=Object.getOwnPropertyNames;var M=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var w=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var n=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),E=(r,t)=>{for(var e in t)l(r,e,{get:t[e],enumerable:!0})},f=(r,t,e,d)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of A(t))!b.call(r,a)&&a!==e&&l(r,a,{get:()=>t[a],enumerable:!(d=h(t,a))||d.enumerable});return r},u=(r,t,e)=>(f(r,t,"default"),e&&f(e,t,"default")),p=(r,t,e)=>(e=r!=null?T(M(r)):{},f(t||!r||!r.__esModule?l(e,"default",{value:r,enumerable:!0}):e,r));var _=n((z,c)=>{"use strict";var I=typeof Math.fround=="function"?Math.fround:null;c.exports=I});var m=n((B,x)=>{"use strict";var L=w("@stdlib/array/float32"),v=new L(1);function O(r){return v[0]=r,v[0]}x.exports=O});var s=n((C,F)=>{"use strict";var y=_(),V=m(),i;typeof y=="function"?i=y:i=V;F.exports=i});var o={};E(o,{default:()=>j});var W=p(s());u(o,p(s()));var{default:q,...g}=W,j=q!==void 0?q:g;export{j as default};
/*! Bundled license information:

@stdlib/number/float64/base/to-float32/lib/main.js:
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

@stdlib/number/float64/base/to-float32/lib/polyfill.js:
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

@stdlib/number/float64/base/to-float32/lib/index.js:
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
//# sourceMappingURL=to-float32.js.map