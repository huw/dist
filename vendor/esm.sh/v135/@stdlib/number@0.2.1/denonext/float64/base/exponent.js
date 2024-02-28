/* esm.sh - esbuild bundle(@stdlib/number@0.2.1/float64/base/exponent) denonext production */
import * as __0$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/high-word-exponent-mask.js";
import * as __1$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/exponent-bias.js";
import * as __2$ from "/v135/@stdlib/array@0.2.1/denonext/uint32.js";
import * as __3$ from "/v135/@stdlib/array@0.2.1/denonext/float64.js";
import * as __4$ from "/v135/@stdlib/assert@0.2.1/denonext/is-little-endian.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/constants/float64/high-word-exponent-mask":return e(__0$);case"@stdlib/constants/float64/exponent-bias":return e(__1$);case"@stdlib/array/uint32":return e(__2$);case"@stdlib/array/float64":return e(__3$);case"@stdlib/assert/is-little-endian":return e(__4$);default:throw new Error("module \""+n+"\" not found");}};
var W=Object.create;var v=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var F=Object.getPrototypeOf,G=Object.prototype.hasOwnProperty;var s=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),L=(r,e)=>{for(var t in e)v(r,t,{get:e[t],enumerable:!0})},o=(r,e,t,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of y(e))!G.call(r,a)&&a!==t&&v(r,a,{get:()=>e[a],enumerable:!(p=w(e,a))||p.enumerable});return r},u=(r,e,t)=>(o(r,e,"default"),t&&o(t,e,"default")),q=(r,e,t)=>(t=r!=null?W(F(r)):{},o(e||!r||!r.__esModule?v(t,"default",{value:r,enumerable:!0}):t,r));var c=n((D,_)=>{"use strict";var S=s("@stdlib/assert/is-little-endian"),f;S===!0?f=1:f=0;_.exports=f});var m=n((J,l)=>{"use strict";var T=s("@stdlib/array/uint32"),U=s("@stdlib/array/float64"),V=c(),x=new U(1),b=new T(x.buffer);function B(r){return x[0]=r,b[V]}l.exports=B});var I=n((Q,H)=>{"use strict";var K=m();H.exports=K});var A=n((R,g)=>{"use strict";var M=I(),N=s("@stdlib/constants/float64/high-word-exponent-mask"),O=s("@stdlib/constants/float64/exponent-bias");function P(r){var e=M(r);return e=(e&N)>>>20,e-O|0}g.exports=P});var d=n((Y,h)=>{"use strict";var X=A();h.exports=X});var i={};L(i,{default:()=>z});var j=q(d());u(i,q(d()));var{default:E,...k}=j,z=E!==void 0?E:k;export{z as default};
/*! Bundled license information:

@stdlib/number/float64/base/get-high-word/lib/high.js:
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

@stdlib/number/float64/base/get-high-word/lib/main.js:
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

@stdlib/number/float64/base/get-high-word/lib/index.js:
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

@stdlib/number/float64/base/exponent/lib/main.js:
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

@stdlib/number/float64/base/exponent/lib/index.js:
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
//# sourceMappingURL=exponent.js.map