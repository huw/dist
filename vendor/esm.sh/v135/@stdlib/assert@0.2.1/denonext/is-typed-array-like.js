/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/is-typed-array-like) denonext production */
import * as __0$ from "/v135/@stdlib/constants@0.2.1/denonext/array/max-typed-array-length.js";
import * as __1$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __2$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __3$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
import * as __4$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __5$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/ninf.js";
import * as __6$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-integer.js";
import * as __7$ from "/v135/@stdlib/utils@0.2.1/denonext/native-class.js";
import * as __8$ from "/v135/@stdlib/number@0.2.1/denonext/ctor.js";
import * as __9$ from "/v135/@stdlib/number@0.2.1/denonext/ctor.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/constants/array/max-typed-array-length":return e(__0$);case"@stdlib/utils/define-nonenumerable-read-only-property":return e(__1$);case"@stdlib/constants/float64/pinf":return e(__3$);case"@stdlib/constants/float64/ninf":return e(__5$);case"@stdlib/math/base/assert/is-integer":return e(__6$);case"@stdlib/utils/native-class":return e(__7$);case"@stdlib/number/ctor":return e(__8$);default:throw new Error("module \""+n+"\" not found");}};
var or=Object.create;var c=Object.defineProperty;var ar=Object.getOwnPropertyDescriptor;var cr=Object.getOwnPropertyNames;var vr=Object.getPrototypeOf,fr=Object.prototype.hasOwnProperty;var s=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,i)=>(typeof require<"u"?require:e)[i]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var t=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),mr=(r,e)=>{for(var i in e)c(r,i,{get:e[i],enumerable:!0})},a=(r,e,i,P)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of cr(e))!fr.call(r,o)&&o!==i&&c(r,o,{get:()=>e[o],enumerable:!(P=ar(e,o))||P.enumerable});return r},n=(r,e,i)=>(a(r,e,"default"),i&&a(i,e,"default")),S=(r,e,i)=>(i=r!=null?or(vr(r)):{},a(e||!r||!r.__esModule?c(i,"default",{value:r,enumerable:!0}):i,r));var v=t((pe,d)=>{"use strict";function pr(r){return typeof r=="number"}d.exports=pr});var T=t((qe,h)=>{"use strict";function qr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}h.exports=qr});var l=t((be,_)=>{"use strict";var br=T();_.exports=br});var L=t((ge,E)=>{"use strict";var gr=l(),yr=gr();function xr(){return yr&&typeof Symbol.toStringTag=="symbol"}E.exports=xr});var R=t((ye,F)=>{"use strict";var Nr=L();F.exports=Nr});var G=t((xe,A)=>{"use strict";var Or=s("@stdlib/number/ctor"),Ir=Or.prototype.toString;A.exports=Ir});var k=t((Ne,M)=>{"use strict";var jr=G();function Pr(r){try{return jr.call(r),!0}catch{return!1}}M.exports=Pr});var f=t((Oe,B)=>{"use strict";var Sr=R(),dr=s("@stdlib/utils/native-class"),hr=s("@stdlib/number/ctor"),Tr=k(),_r=Sr();function lr(r){return typeof r=="object"?r instanceof hr?!0:_r?Tr(r):dr(r)==="[object Number]":!1}B.exports=lr});var X=t((Ie,C)=>{"use strict";var Er=v(),Lr=f();function Fr(r){return Er(r)||Lr(r)}C.exports=Fr});var p=t((je,w)=>{"use strict";var Y=s("@stdlib/utils/define-nonenumerable-read-only-property"),m=X(),Rr=v(),Ar=f();Y(m,"isPrimitive",Rr);Y(m,"isObject",Ar);w.exports=m});var q=t((Pe,z)=>{"use strict";var Gr=s("@stdlib/constants/float64/pinf"),Mr=s("@stdlib/constants/float64/ninf"),kr=s("@stdlib/math/base/assert/is-integer");function Br(r){return r<Gr&&r>Mr&&kr(r)}z.exports=Br});var b=t((Se,D)=>{"use strict";var Cr=p().isPrimitive,Xr=q();function Yr(r){return Cr(r)&&Xr(r)}D.exports=Yr});var g=t((de,H)=>{"use strict";var wr=p().isObject,zr=q();function Dr(r){return wr(r)&&zr(r.valueOf())}H.exports=Dr});var K=t((he,J)=>{"use strict";var Hr=b(),Jr=g();function Kr(r){return Hr(r)||Jr(r)}J.exports=Kr});var x=t((Te,U)=>{"use strict";var Q=s("@stdlib/utils/define-nonenumerable-read-only-property"),y=K(),Qr=b(),Ur=g();Q(y,"isPrimitive",Qr);Q(y,"isObject",Ur);U.exports=y});var N=t((_e,V)=>{"use strict";var Vr=x().isPrimitive;function Wr(r){return Vr(r)&&r>=0}V.exports=Wr});var O=t((le,W)=>{"use strict";var Zr=x().isObject;function $r(r){return Zr(r)&&r.valueOf()>=0}W.exports=$r});var $=t((Ee,Z)=>{"use strict";var re=N(),ee=O();function te(r){return re(r)||ee(r)}Z.exports=te});var tr=t((Le,er)=>{"use strict";var rr=s("@stdlib/utils/define-nonenumerable-read-only-property"),I=$(),ie=N(),se=O();rr(I,"isPrimitive",ie);rr(I,"isObject",se);er.exports=I});var sr=t((Fe,ir)=>{"use strict";var ue=tr().isPrimitive,ne=s("@stdlib/constants/array/max-typed-array-length");function oe(r){return r!==null&&typeof r=="object"&&ue(r.length)&&r.length<=ne&&typeof r.BYTES_PER_ELEMENT=="number"&&typeof r.byteOffset=="number"&&typeof r.byteLength=="number"}ir.exports=oe});var j=t((Re,ur)=>{"use strict";var ae=sr();ur.exports=ae});var u={};mr(u,{default:()=>fe});var ce=S(j());n(u,S(j()));var{default:nr,...ve}=ce,fe=nr!==void 0?nr:ve;export{fe as default};
/*! Bundled license information:

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

@stdlib/assert/is-integer/lib/integer.js:
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

@stdlib/assert/is-integer/lib/primitive.js:
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

@stdlib/assert/is-integer/lib/object.js:
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

@stdlib/assert/is-integer/lib/main.js:
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

@stdlib/assert/is-integer/lib/index.js:
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

@stdlib/assert/is-nonnegative-integer/lib/primitive.js:
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

@stdlib/assert/is-nonnegative-integer/lib/object.js:
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

@stdlib/assert/is-nonnegative-integer/lib/main.js:
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

@stdlib/assert/is-nonnegative-integer/lib/index.js:
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

@stdlib/assert/is-typed-array-like/lib/main.js:
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

@stdlib/assert/is-typed-array-like/lib/index.js:
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
//# sourceMappingURL=is-typed-array-like.js.map