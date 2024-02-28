/* esm.sh - esbuild bundle(@stdlib/number@0.2.1/float64/base/to-words) denonext production */
import * as __0$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __1$ from "/v135/@stdlib/array@0.2.1/denonext/uint32.js";
import * as __2$ from "/v135/@stdlib/array@0.2.1/denonext/float64.js";
import * as __3$ from "/v135/@stdlib/assert@0.2.1/denonext/is-little-endian.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/utils/define-nonenumerable-read-only-property":return e(__0$);case"@stdlib/array/uint32":return e(__1$);case"@stdlib/array/float64":return e(__2$);case"@stdlib/assert/is-little-endian":return e(__3$);default:throw new Error("module \""+n+"\" not found");}};
var g=Object.create;var d=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var F=Object.getOwnPropertyNames;var T=Object.getPrototypeOf,U=Object.prototype.hasOwnProperty;var u=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var o=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),V=(r,e)=>{for(var t in e)d(r,t,{get:e[t],enumerable:!0})},v=(r,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of F(e))!U.call(r,n)&&n!==t&&d(r,n,{get:()=>e[n],enumerable:!(s=w(e,n))||s.enumerable});return r},a=(r,e,t)=>(v(r,e,"default"),t&&v(t,e,"default")),H=(r,e,t)=>(t=r!=null?g(T(r)):{},v(e||!r||!r.__esModule?d(t,"default",{value:r,enumerable:!0}):t,r));var p=o((Q,_)=>{"use strict";var b=u("@stdlib/assert/is-little-endian"),W,c,f;b===!0?(c=1,f=0):(c=0,f=1);W={HIGH:c,LOW:f};_.exports=W});var l=o((S,O)=>{"use strict";var N=u("@stdlib/array/uint32"),R=u("@stdlib/array/float64"),x=p(),L=new R(1),I=new N(L.buffer),h=x.HIGH,j=x.LOW;function k(r,e,t,s){return L[0]=r,e[s]=I[h],e[s+t]=I[j],e}O.exports=k});var G=o((X,m)=>{"use strict";var z=l();function B(r){return z(r,[0,0],1,0)}m.exports=B});var q=o((Y,A)=>{"use strict";var C=u("@stdlib/utils/define-nonenumerable-read-only-property"),y=G(),D=l();C(y,"assign",D);A.exports=y});var i={};V(i,{default:()=>M});var J=H(q());a(i,H(q()));var{default:E,...K}=J,M=E!==void 0?E:K;export{M as default};
/*! Bundled license information:

@stdlib/number/float64/base/to-words/lib/indices.js:
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

@stdlib/number/float64/base/to-words/lib/assign.js:
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

@stdlib/number/float64/base/to-words/lib/main.js:
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

@stdlib/number/float64/base/to-words/lib/index.js:
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
//# sourceMappingURL=to-words.js.map