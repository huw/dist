/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/is-unity-probability-array) denonext production */
import * as __0$ from "/v135/@stdlib/math@0.2.1/denonext/base/utils/absolute-difference.js";
import * as __1$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/sqrt-eps.js";
import * as __2$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __3$ from "/v135/@stdlib/utils@0.2.1/denonext/constructor-name.js";
import * as __4$ from "/v135/@stdlib/utils@0.2.1/denonext/native-class.js";
import * as __5$ from "/v135/@stdlib/utils@0.2.1/denonext/function-name.js";
import * as __6$ from "/v135/@stdlib/utils@0.2.1/denonext/native-class.js";
import * as __7$ from "/v135/@stdlib/utils@0.2.1/denonext/get-prototype-of.js";
import * as __8$ from "/v135/@stdlib/number@0.2.1/denonext/ctor.js";
import * as __9$ from "/v135/@stdlib/array@0.2.1/denonext/float64.js";
import * as __a$ from "/v135/@stdlib/number@0.2.1/denonext/ctor.js";
import * as __b$ from "/v135/@stdlib/array@0.2.1/denonext/int8.js";
import * as __c$ from "/v135/@stdlib/array@0.2.1/denonext/uint8.js";
import * as __d$ from "/v135/@stdlib/array@0.2.1/denonext/uint8c.js";
import * as __e$ from "/v135/@stdlib/array@0.2.1/denonext/int16.js";
import * as __f$ from "/v135/@stdlib/array@0.2.1/denonext/uint16.js";
import * as __10$ from "/v135/@stdlib/array@0.2.1/denonext/int32.js";
import * as __11$ from "/v135/@stdlib/array@0.2.1/denonext/uint32.js";
import * as __12$ from "/v135/@stdlib/array@0.2.1/denonext/float32.js";
import * as __13$ from "/v135/@stdlib/array@0.2.1/denonext/float64.js";
import * as __14$ from "/v135/@stdlib/utils@0.2.1/denonext/native-class.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/math/base/utils/absolute-difference":return e(__0$);case"@stdlib/constants/float64/sqrt-eps":return e(__1$);case"@stdlib/utils/define-nonenumerable-read-only-property":return e(__2$);case"@stdlib/utils/constructor-name":return e(__3$);case"@stdlib/utils/native-class":return e(__4$);case"@stdlib/utils/function-name":return e(__5$);case"@stdlib/utils/get-prototype-of":return e(__7$);case"@stdlib/number/ctor":return e(__8$);case"@stdlib/array/float64":return e(__9$);case"@stdlib/array/int8":return e(__b$);case"@stdlib/array/uint8":return e(__c$);case"@stdlib/array/uint8c":return e(__d$);case"@stdlib/array/int16":return e(__e$);case"@stdlib/array/uint16":return e(__f$);case"@stdlib/array/int32":return e(__10$);case"@stdlib/array/uint32":return e(__11$);case"@stdlib/array/float32":return e(__12$);default:throw new Error("module \""+n+"\" not found");}};
var qr=Object.create;var f=Object.defineProperty;var vr=Object.getOwnPropertyDescriptor;var mr=Object.getOwnPropertyNames;var br=Object.getPrototypeOf,xr=Object.prototype.hasOwnProperty;var a=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),Fr=(r,e)=>{for(var t in e)f(r,t,{get:e[t],enumerable:!0})},y=(r,e,t,v)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of mr(e))!xr.call(r,o)&&o!==t&&f(r,o,{get:()=>e[o],enumerable:!(v=vr(e,o))||v.enumerable});return r},u=(r,e,t)=>(y(r,e,"default"),t&&y(t,e,"default")),m=(r,e,t)=>(t=r!=null?qr(br(r)):{},y(e||!r||!r.__esModule?f(t,"default",{value:r,enumerable:!0}):t,r));var x=i((Ne,b)=>{"use strict";var Sr=a("@stdlib/utils/native-class"),hr=typeof Float64Array=="function";function dr(r){return hr&&r instanceof Float64Array||Sr(r)==="[object Float64Array]"}b.exports=dr});var S=i((Ue,F)=>{"use strict";var gr=x();F.exports=gr});var d=i((je,h)=>{"use strict";var Tr=typeof Float64Array=="function"?Float64Array:null;h.exports=Tr});var N=i((Oe,T)=>{"use strict";var Nr=S(),g=d();function Ur(){var r,e;if(typeof g!="function")return!1;try{e=new g([1,3.14,-3.14,NaN]),r=Nr(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}T.exports=Ur});var j=i((_e,U)=>{"use strict";var jr=N();U.exports=jr});var _=i((Ce,O)=>{"use strict";var Or=a("@stdlib/array/int8"),_r=a("@stdlib/array/uint8"),Cr=a("@stdlib/array/uint8c"),Pr=a("@stdlib/array/int16"),Ir=a("@stdlib/array/uint16"),Rr=a("@stdlib/array/int32"),Gr=a("@stdlib/array/uint32"),Lr=a("@stdlib/array/float32"),wr=a("@stdlib/array/float64"),Er=[wr,Lr,Rr,Gr,Pr,Ir,Or,_r,Cr];O.exports=Er});var C=i((Pe,Dr)=>{Dr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var w=i((Ie,L)=>{"use strict";var Mr=a("@stdlib/utils/constructor-name"),Qr=a("@stdlib/utils/function-name"),R=a("@stdlib/utils/get-prototype-of"),kr=j(),zr=a("@stdlib/array/float64"),P=_(),I=C(),n=kr()?R(zr):G;n=Qr(n)==="TypedArray"?n:G;function G(){}function Br(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof n)return!0;for(t=0;t<P.length;t++)if(r instanceof P[t])return!0;for(;r;){for(e=Mr(r),t=0;t<I.length;t++)if(I[t]===e)return!0;r=R(r)}return!1}L.exports=Br});var D=i((Re,E)=>{"use strict";var Hr=w();E.exports=Hr});var Q=i((Ge,M)=>{"use strict";var Jr=a("@stdlib/utils/native-class"),c;function Kr(r){return Jr(r)==="[object Array]"}Array.isArray?c=Array.isArray:c=Kr;M.exports=c});var z=i((Le,k)=>{"use strict";var Vr=Q();k.exports=Vr});var p=i((we,B)=>{"use strict";function Wr(r){return typeof r=="number"}B.exports=Wr});var J=i((Ee,H)=>{"use strict";function Xr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}H.exports=Xr});var V=i((De,K)=>{"use strict";var Yr=J();K.exports=Yr});var X=i((Me,W)=>{"use strict";var Zr=V(),$r=Zr();function re(){return $r&&typeof Symbol.toStringTag=="symbol"}W.exports=re});var Z=i((Qe,Y)=>{"use strict";var ee=X();Y.exports=ee});var rr=i((ke,$)=>{"use strict";var te=a("@stdlib/number/ctor"),ie=te.prototype.toString;$.exports=ie});var tr=i((ze,er)=>{"use strict";var ae=rr();function se(r){try{return ae.call(r),!0}catch{return!1}}er.exports=se});var l=i((Be,ir)=>{"use strict";var ue=Z(),oe=a("@stdlib/utils/native-class"),ne=a("@stdlib/number/ctor"),ye=tr(),fe=ue();function ce(r){return typeof r=="object"?r instanceof ne?!0:fe?ye(r):oe(r)==="[object Number]":!1}ir.exports=ce});var sr=i((He,ar)=>{"use strict";var pe=p(),le=l();function Ae(r){return pe(r)||le(r)}ar.exports=Ae});var nr=i((Je,or)=>{"use strict";var ur=a("@stdlib/utils/define-nonenumerable-read-only-property"),A=sr(),qe=p(),ve=l();ur(A,"isPrimitive",qe);ur(A,"isObject",ve);or.exports=A});var pr=i((Ke,cr)=>{"use strict";var me=D(),be=z(),xe=nr().isPrimitive,yr=a("@stdlib/math/base/utils/absolute-difference"),fr=a("@stdlib/constants/float64/sqrt-eps");function Fe(r){var e,t;if(be(r)){for(e=0,t=0;t<r.length;t++){if(!xe(r[t])||r[t]>1||r[t]<0)return!1;e+=r[t]}return yr(e,1)<=fr}if(me(r)){for(e=0,t=0;t<r.length;t++){if(r[t]>1||r[t]<0)return!1;e+=r[t]}return yr(e,1)<=fr}return!1}cr.exports=Fe});var q=i((Ve,lr)=>{"use strict";var Se=pr();lr.exports=Se});var s={};Fr(s,{default:()=>ge});var he=m(q());u(s,m(q()));var{default:Ar,...de}=he,ge=Ar!==void 0?Ar:de;export{ge as default};
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

@stdlib/assert/is-array/lib/main.js:
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

@stdlib/assert/is-array/lib/index.js:
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

@stdlib/assert/is-number/lib/primitive.js:
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

@stdlib/assert/has-symbol-support/lib/main.js:
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

@stdlib/assert/has-symbol-support/lib/index.js:
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

@stdlib/assert/has-tostringtag-support/lib/main.js:
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

@stdlib/assert/has-tostringtag-support/lib/index.js:
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

@stdlib/assert/is-number/lib/tostring.js:
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

@stdlib/assert/is-number/lib/try2serialize.js:
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

@stdlib/assert/is-number/lib/object.js:
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

@stdlib/assert/is-number/lib/main.js:
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

@stdlib/assert/is-number/lib/index.js:
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

@stdlib/assert/is-unity-probability-array/lib/main.js:
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

@stdlib/assert/is-unity-probability-array/lib/index.js:
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
//# sourceMappingURL=is-unity-probability-array.js.map