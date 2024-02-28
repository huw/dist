/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/has-float64array-support) denonext production */
import * as __0$ from "/v135/@stdlib/utils@0.2.1/denonext/native-class.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/utils/native-class":return e(__0$);default:throw new Error("module \""+n+"\" not found");}};
var b=Object.create;var l=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var C=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(r,a)=>(typeof require<"u"?require:r)[a]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var u=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports),G=(t,r)=>{for(var a in r)l(t,a,{get:r[a],enumerable:!0})},i=(t,r,a,f)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of S(r))!w.call(t,s)&&s!==a&&l(t,s,{get:()=>r[s],enumerable:!(f=N(r,s))||f.enumerable});return t},o=(t,r,a)=>(i(t,r,"default"),a&&i(a,r,"default")),y=(t,r,a)=>(a=t!=null?b(j(t)):{},i(r||!t||!t.__esModule?l(a,"default",{value:t,enumerable:!0}):a,t));var p=u((O,c)=>{"use strict";var g=C("@stdlib/utils/native-class"),k=typeof Float64Array=="function";function z(t){return k&&t instanceof Float64Array||g(t)==="[object Float64Array]"}c.exports=z});var F=u((P,A)=>{"use strict";var B=p();A.exports=B});var x=u((Q,v)=>{"use strict";var D=typeof Float64Array=="function"?Float64Array:null;v.exports=D});var m=u((R,_)=>{"use strict";var E=F(),d=x();function H(){var t,r;if(typeof d!="function")return!1;try{r=new d([1,3.14,-3.14,NaN]),t=E(r)&&r[0]===1&&r[1]===3.14&&r[2]===-3.14&&r[3]!==r[3]}catch{t=!1}return t}_.exports=H});var n=u((T,q)=>{"use strict";var I=m();q.exports=I});var e={};G(e,{default:()=>L});var J=y(n());o(e,y(n()));var{default:h,...K}=J,L=h!==void 0?h:K;export{L as default};
/*! Bundled license information:

@stdlib/assert/is-float64array/lib/main.js:
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

@stdlib/assert/is-float64array/lib/index.js:
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

@stdlib/assert/has-float64array-support/lib/float64array.js:
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

@stdlib/assert/has-float64array-support/lib/main.js:
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

@stdlib/assert/has-float64array-support/lib/index.js:
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
//# sourceMappingURL=has-float64array-support.js.map