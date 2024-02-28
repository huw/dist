/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/has-uint8clampedarray-support) denonext production */
import * as __0$ from "/v135/@stdlib/utils@0.2.1/denonext/native-class.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/utils/native-class":return e(__0$);default:throw new Error("module \""+n+"\" not found");}};
var h=Object.create;var p=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var G=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,t)=>(typeof require<"u"?require:r)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var s=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),g=(e,r)=>{for(var t in r)p(e,t,{get:r[t],enumerable:!0})},o=(e,r,t,l)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of S(r))!w.call(e,n)&&n!==t&&p(e,n,{get:()=>r[n],enumerable:!(l=b(r,n))||l.enumerable});return e},i=(e,r,t)=>(o(e,r,"default"),t&&o(t,r,"default")),d=(e,r,t)=>(t=e!=null?h(j(e)):{},o(r||!e||!e.__esModule?p(t,"default",{value:e,enumerable:!0}):t,e));var m=s((N,f)=>{"use strict";var k=G("@stdlib/utils/native-class"),z=typeof Uint8ClampedArray=="function";function B(e){return z&&e instanceof Uint8ClampedArray||k(e)==="[object Uint8ClampedArray]"}f.exports=B});var c=s((O,y)=>{"use strict";var D=m();y.exports=D});var A=s((P,C)=>{"use strict";var E=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;C.exports=E});var x=s((Q,v)=>{"use strict";var F=c(),U=A();function H(){var e,r;if(typeof U!="function")return!1;try{r=new U([-1,0,1,3.14,4.99,255,256]),e=F(r)&&r[0]===0&&r[1]===0&&r[2]===1&&r[3]===3&&r[4]===5&&r[5]===255&&r[6]===255}catch{e=!1}return e}v.exports=H});var u=s((R,_)=>{"use strict";var I=x();_.exports=I});var a={};g(a,{default:()=>L});var J=d(u());i(a,d(u()));var{default:q,...K}=J,L=q!==void 0?q:K;export{L as default};
/*! Bundled license information:

@stdlib/assert/is-uint8clampedarray/lib/main.js:
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

@stdlib/assert/is-uint8clampedarray/lib/index.js:
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

@stdlib/assert/has-uint8clampedarray-support/lib/uint8clampedarray.js:
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

@stdlib/assert/has-uint8clampedarray-support/lib/main.js:
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

@stdlib/assert/has-uint8clampedarray-support/lib/index.js:
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
//# sourceMappingURL=has-uint8clampedarray-support.js.map