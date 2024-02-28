/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/is-integer) denonext production */
import * as __0$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __1$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
import * as __2$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/ninf.js";
import * as __3$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __4$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-integer.js";
import * as __5$ from "/v135/@stdlib/utils@0.2.1/denonext/native-class.js";
import * as __6$ from "/v135/@stdlib/number@0.2.1/denonext/ctor.js";
import * as __7$ from "/v135/@stdlib/number@0.2.1/denonext/ctor.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/utils/define-nonenumerable-read-only-property":return e(__0$);case"@stdlib/constants/float64/pinf":return e(__1$);case"@stdlib/constants/float64/ninf":return e(__2$);case"@stdlib/math/base/assert/is-integer":return e(__4$);case"@stdlib/utils/native-class":return e(__5$);case"@stdlib/number/ctor":return e(__6$);default:throw new Error("module \""+n+"\" not found");}};
var U=Object.create;var c=Object.defineProperty;var V=Object.getOwnPropertyDescriptor;var W=Object.getOwnPropertyNames;var X=Object.getPrototypeOf,Y=Object.prototype.hasOwnProperty;var s=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,i)=>(typeof require<"u"?require:e)[i]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var t=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),Z=(r,e)=>{for(var i in e)c(r,i,{get:e[i],enumerable:!0})},a=(r,e,i,S)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of W(e))!Y.call(r,o)&&o!==i&&c(r,o,{get:()=>e[o],enumerable:!(S=V(e,o))||S.enumerable});return r},n=(r,e,i)=>(a(r,e,"default"),i&&a(i,e,"default")),N=(r,e,i)=>(i=r!=null?U(X(r)):{},a(e||!r||!r.__esModule?c(i,"default",{value:r,enumerable:!0}):i,r));var m=t((Dr,l)=>{"use strict";function $(r){return typeof r=="number"}l.exports=$});var j=t((Er,O)=>{"use strict";function rr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}O.exports=rr});var d=t((Hr,I)=>{"use strict";var er=j();I.exports=er});var _=t((Jr,P)=>{"use strict";var tr=d(),ir=tr();function sr(){return ir&&typeof Symbol.toStringTag=="symbol"}P.exports=sr});var T=t((Kr,h)=>{"use strict";var ur=_();h.exports=ur});var G=t((Mr,F)=>{"use strict";var nr=s("@stdlib/number/ctor"),or=nr.prototype.toString;F.exports=or});var R=t((Qr,L)=>{"use strict";var ar=G();function cr(r){try{return ar.call(r),!0}catch{return!1}}L.exports=cr});var v=t((Ur,C)=>{"use strict";var mr=T(),vr=s("@stdlib/utils/native-class"),fr=s("@stdlib/number/ctor"),pr=R(),qr=mr();function br(r){return typeof r=="object"?r instanceof fr?!0:qr?pr(r):vr(r)==="[object Number]":!1}C.exports=br});var w=t((Vr,k)=>{"use strict";var xr=m(),yr=v();function gr(r){return xr(r)||yr(r)}k.exports=gr});var p=t((Wr,A)=>{"use strict";var z=s("@stdlib/utils/define-nonenumerable-read-only-property"),f=w(),Sr=m(),Nr=v();z(f,"isPrimitive",Sr);z(f,"isObject",Nr);A.exports=f});var q=t((Xr,B)=>{"use strict";var lr=s("@stdlib/constants/float64/pinf"),Or=s("@stdlib/constants/float64/ninf"),jr=s("@stdlib/math/base/assert/is-integer");function Ir(r){return r<lr&&r>Or&&jr(r)}B.exports=Ir});var b=t((Yr,D)=>{"use strict";var dr=p().isPrimitive,Pr=q();function _r(r){return dr(r)&&Pr(r)}D.exports=_r});var x=t((Zr,E)=>{"use strict";var hr=p().isObject,Tr=q();function Fr(r){return hr(r)&&Tr(r.valueOf())}E.exports=Fr});var J=t(($r,H)=>{"use strict";var Gr=b(),Lr=x();function Rr(r){return Gr(r)||Lr(r)}H.exports=Rr});var g=t((re,M)=>{"use strict";var K=s("@stdlib/utils/define-nonenumerable-read-only-property"),y=J(),Cr=b(),kr=x();K(y,"isPrimitive",Cr);K(y,"isObject",kr);M.exports=y});var u={};Z(u,{default:()=>Ar});var wr=N(g());n(u,N(g()));var{default:Q,...zr}=wr,Ar=Q!==void 0?Q:zr;export{Ar as default};
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
*/
//# sourceMappingURL=is-integer.js.map