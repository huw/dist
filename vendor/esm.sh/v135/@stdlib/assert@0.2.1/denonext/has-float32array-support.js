/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/has-float32array-support) denonext production */
import * as __0$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
import * as __1$ from "/v135/@stdlib/utils@0.2.1/denonext/native-class.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/constants/float64/pinf":return e(__0$);case"@stdlib/utils/native-class":return e(__1$);default:throw new Error("module \""+n+"\" not found");}};
var S=Object.create;var l=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var C=Object.getPrototypeOf,G=Object.prototype.hasOwnProperty;var y=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(t,a)=>(typeof require<"u"?require:t)[a]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var u=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),I=(r,t)=>{for(var a in t)l(r,a,{get:t[a],enumerable:!0})},i=(r,t,a,f)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of w(t))!G.call(r,s)&&s!==a&&l(r,s,{get:()=>t[s],enumerable:!(f=j(t,s))||f.enumerable});return r},o=(r,t,a)=>(i(r,t,"default"),a&&i(a,t,"default")),c=(r,t,a)=>(a=r!=null?S(C(r)):{},i(t||!r||!r.__esModule?l(a,"default",{value:r,enumerable:!0}):a,r));var F=u((O,p)=>{"use strict";var N=y("@stdlib/utils/native-class"),P=typeof Float32Array=="function";function g(r){return P&&r instanceof Float32Array||N(r)==="[object Float32Array]"}p.exports=g});var v=u((Q,A)=>{"use strict";var k=F();A.exports=k});var d=u((R,x)=>{"use strict";var z=typeof Float32Array=="function"?Float32Array:null;x.exports=z});var m=u((T,_)=>{"use strict";var B=v(),D=y("@stdlib/constants/float64/pinf"),q=d();function E(){var r,t;if(typeof q!="function")return!1;try{t=new q([1,3.14,-3.14,5e40]),r=B(t)&&t[0]===1&&t[1]===3.140000104904175&&t[2]===-3.140000104904175&&t[3]===D}catch{r=!1}return r}_.exports=E});var n=u((U,h)=>{"use strict";var H=m();h.exports=H});var e={};I(e,{default:()=>L});var J=c(n());o(e,c(n()));var{default:b,...K}=J,L=b!==void 0?b:K;export{L as default};
/*! Bundled license information:

@stdlib/assert/is-float32array/lib/main.js:
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

@stdlib/assert/is-float32array/lib/index.js:
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

@stdlib/assert/has-float32array-support/lib/float32array.js:
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

@stdlib/assert/has-float32array-support/lib/main.js:
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

@stdlib/assert/has-float32array-support/lib/index.js:
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
//# sourceMappingURL=has-float32array-support.js.map