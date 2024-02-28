/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/has-uint16array-support) denonext production */
import * as __0$ from "/v135/@stdlib/constants@0.2.1/denonext/uint16/max.js";
import * as __1$ from "/v135/@stdlib/utils@0.2.1/denonext/native-class.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/constants/uint16/max":return e(__0$);case"@stdlib/utils/native-class":return e(__1$);default:throw new Error("module \""+n+"\" not found");}};
var j=Object.create;var u=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var G=Object.getPrototypeOf,I=Object.prototype.hasOwnProperty;var p=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(r,e)=>(typeof require<"u"?require:r)[e]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var s=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports),M=(t,r)=>{for(var e in r)u(t,e,{get:r[e],enumerable:!0})},o=(t,r,e,c)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of C(r))!I.call(t,n)&&n!==e&&u(t,n,{get:()=>r[n],enumerable:!(c=w(r,n))||c.enumerable});return t},i=(t,r,e)=>(o(t,r,"default"),e&&o(e,r,"default")),A=(t,r,e)=>(e=t!=null?j(G(t)):{},o(r||!t||!t.__esModule?u(e,"default",{value:t,enumerable:!0}):e,t));var l=s((K,U)=>{"use strict";var N=p("@stdlib/utils/native-class"),T=typeof Uint16Array=="function";function X(t){return T&&t instanceof Uint16Array||N(t)==="[object Uint16Array]"}U.exports=X});var x=s((L,v)=>{"use strict";var g=l();v.exports=g});var d=s((O,_)=>{"use strict";var k=typeof Uint16Array=="function"?Uint16Array:null;_.exports=k});var h=s((P,m)=>{"use strict";var z=x(),f=p("@stdlib/constants/uint16/max"),q=d();function B(){var t,r;if(typeof q!="function")return!1;try{r=[1,3.14,-3.14,f+1,f+2],r=new q(r),t=z(r)&&r[0]===1&&r[1]===3&&r[2]===f-2&&r[3]===0&&r[4]===1}catch{t=!1}return t}m.exports=B});var y=s((Q,b)=>{"use strict";var D=h();b.exports=D});var a={};M(a,{default:()=>H});var E=A(y());i(a,A(y()));var{default:S,...F}=E,H=S!==void 0?S:F;export{H as default};
/*! Bundled license information:

@stdlib/assert/is-uint16array/lib/main.js:
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

@stdlib/assert/is-uint16array/lib/index.js:
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

@stdlib/assert/has-uint16array-support/lib/uint16array.js:
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

@stdlib/assert/has-uint16array-support/lib/main.js:
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

@stdlib/assert/has-uint16array-support/lib/index.js:
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
//# sourceMappingURL=has-uint16array-support.js.map