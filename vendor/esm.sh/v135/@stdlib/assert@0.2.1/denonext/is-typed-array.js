/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/is-typed-array) denonext production */
import * as __0$ from "/v135/@stdlib/utils@0.2.1/denonext/constructor-name.js";
import * as __1$ from "/v135/@stdlib/utils@0.2.1/denonext/function-name.js";
import * as __2$ from "/v135/@stdlib/utils@0.2.1/denonext/get-prototype-of.js";
import * as __3$ from "/v135/@stdlib/array@0.2.1/denonext/float64.js";
import * as __4$ from "/v135/@stdlib/utils@0.2.1/denonext/native-class.js";
import * as __5$ from "/v135/@stdlib/array@0.2.1/denonext/int8.js";
import * as __6$ from "/v135/@stdlib/array@0.2.1/denonext/uint8.js";
import * as __7$ from "/v135/@stdlib/array@0.2.1/denonext/uint8c.js";
import * as __8$ from "/v135/@stdlib/array@0.2.1/denonext/int16.js";
import * as __9$ from "/v135/@stdlib/array@0.2.1/denonext/uint16.js";
import * as __a$ from "/v135/@stdlib/array@0.2.1/denonext/int32.js";
import * as __b$ from "/v135/@stdlib/array@0.2.1/denonext/uint32.js";
import * as __c$ from "/v135/@stdlib/array@0.2.1/denonext/float32.js";
import * as __d$ from "/v135/@stdlib/array@0.2.1/denonext/float64.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/utils/constructor-name":return e(__0$);case"@stdlib/utils/function-name":return e(__1$);case"@stdlib/utils/get-prototype-of":return e(__2$);case"@stdlib/array/float64":return e(__3$);case"@stdlib/utils/native-class":return e(__4$);case"@stdlib/array/int8":return e(__5$);case"@stdlib/array/uint8":return e(__6$);case"@stdlib/array/uint8c":return e(__7$);case"@stdlib/array/int16":return e(__8$);case"@stdlib/array/uint16":return e(__9$);case"@stdlib/array/int32":return e(__a$);case"@stdlib/array/uint32":return e(__b$);case"@stdlib/array/float32":return e(__c$);default:throw new Error("module \""+n+"\" not found");}};
var E=Object.create;var A=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var M=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty;var e=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(t,a)=>(typeof require<"u"?require:t)[a]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var i=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),z=(r,t)=>{for(var a in t)A(r,a,{get:t[a],enumerable:!0})},s=(r,t,a,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let u of M(t))!k.call(r,u)&&u!==a&&A(r,u,{get:()=>t[u],enumerable:!(l=G(t,u))||l.enumerable});return r},n=(r,t,a)=>(s(r,t,"default"),a&&s(a,t,"default")),p=(r,t,a)=>(a=r!=null?E(P(r)):{},s(t||!r||!r.__esModule?A(a,"default",{value:r,enumerable:!0}):a,r));var v=i((Fr,c)=>{"use strict";var B=e("@stdlib/utils/native-class"),H=typeof Float64Array=="function";function J(r){return H&&r instanceof Float64Array||B(r)==="[object Float64Array]"}c.exports=J});var F=i((mr,q)=>{"use strict";var K=v();q.exports=K});var d=i((dr,m)=>{"use strict";var L=typeof Float64Array=="function"?Float64Array:null;m.exports=L});var U=i((xr,h)=>{"use strict";var Q=F(),x=d();function V(){var r,t;if(typeof x!="function")return!1;try{t=new x([1,3.14,-3.14,NaN]),r=Q(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{r=!1}return r}h.exports=V});var S=i((hr,I)=>{"use strict";var W=U();I.exports=W});var C=i((Ur,_)=>{"use strict";var X=e("@stdlib/array/int8"),Y=e("@stdlib/array/uint8"),Z=e("@stdlib/array/uint8c"),$=e("@stdlib/array/int16"),rr=e("@stdlib/array/uint16"),tr=e("@stdlib/array/int32"),ar=e("@stdlib/array/uint32"),er=e("@stdlib/array/float32"),ir=e("@stdlib/array/float64"),or=[ir,er,tr,ar,$,rr,X,Y,Z];_.exports=or});var N=i((Ir,nr)=>{nr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var w=i((Sr,j)=>{"use strict";var ur=e("@stdlib/utils/constructor-name"),yr=e("@stdlib/utils/function-name"),g=e("@stdlib/utils/get-prototype-of"),sr=S(),Ar=e("@stdlib/array/float64"),T=C(),b=N(),y=sr()?g(Ar):O;y=yr(y)==="TypedArray"?y:O;function O(){}function fr(r){var t,a;if(typeof r!="object"||r===null)return!1;if(r instanceof y)return!0;for(a=0;a<T.length;a++)if(r instanceof T[a])return!0;for(;r;){for(t=ur(r),a=0;a<b.length;a++)if(b[a]===t)return!0;r=g(r)}return!1}j.exports=fr});var f=i((_r,R)=>{"use strict";var lr=w();R.exports=lr});var o={};z(o,{default:()=>vr});var pr=p(f());n(o,p(f()));var{default:D,...cr}=pr,vr=D!==void 0?D:cr;export{vr as default};
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

@stdlib/assert/is-typed-array/lib/ctors.js:
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

@stdlib/assert/is-typed-array/lib/main.js:
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

@stdlib/assert/is-typed-array/lib/index.js:
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
//# sourceMappingURL=is-typed-array.js.map