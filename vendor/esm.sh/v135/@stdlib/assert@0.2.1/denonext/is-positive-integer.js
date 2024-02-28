/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/is-positive-integer) denonext production */
import * as __0$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __1$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __2$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __3$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
import * as __4$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/ninf.js";
import * as __5$ from "/v135/@stdlib/utils@0.2.1/denonext/native-class.js";
import * as __6$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-integer.js";
import * as __7$ from "/v135/@stdlib/number@0.2.1/denonext/ctor.js";
import * as __8$ from "/v135/@stdlib/number@0.2.1/denonext/ctor.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/utils/define-nonenumerable-read-only-property":return e(__0$);case"@stdlib/constants/float64/pinf":return e(__3$);case"@stdlib/constants/float64/ninf":return e(__4$);case"@stdlib/utils/native-class":return e(__5$);case"@stdlib/math/base/assert/is-integer":return e(__6$);case"@stdlib/number/ctor":return e(__7$);default:throw new Error("module \""+n+"\" not found");}};
var ir=Object.create;var c=Object.defineProperty;var sr=Object.getOwnPropertyDescriptor;var ur=Object.getOwnPropertyNames;var nr=Object.getPrototypeOf,or=Object.prototype.hasOwnProperty;var s=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,i)=>(typeof require<"u"?require:e)[i]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var t=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),ar=(r,e)=>{for(var i in e)c(r,i,{get:e[i],enumerable:!0})},a=(r,e,i,S)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of ur(e))!or.call(r,o)&&o!==i&&c(r,o,{get:()=>e[o],enumerable:!(S=sr(e,o))||S.enumerable});return r},n=(r,e,i)=>(a(r,e,"default"),i&&a(i,e,"default")),N=(r,e,i)=>(i=r!=null?ir(nr(r)):{},a(e||!r||!r.__esModule?c(i,"default",{value:r,enumerable:!0}):i,r));var v=t((ue,d)=>{"use strict";function cr(r){return typeof r=="number"}d.exports=cr});var _=t((ne,l)=>{"use strict";function vr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}l.exports=vr});var T=t((oe,h)=>{"use strict";var mr=_();h.exports=mr});var R=t((ae,F)=>{"use strict";var qr=T(),fr=qr();function pr(){return fr&&typeof Symbol.toStringTag=="symbol"}F.exports=pr});var L=t((ce,G)=>{"use strict";var br=R();G.exports=br});var k=t((ve,C)=>{"use strict";var xr=s("@stdlib/number/ctor"),gr=xr.prototype.toString;C.exports=gr});var z=t((me,w)=>{"use strict";var yr=k();function Or(r){try{return yr.call(r),!0}catch{return!1}}w.exports=Or});var m=t((qe,A)=>{"use strict";var Pr=L(),Ir=s("@stdlib/utils/native-class"),jr=s("@stdlib/number/ctor"),Sr=z(),Nr=Pr();function dr(r){return typeof r=="object"?r instanceof jr?!0:Nr?Sr(r):Ir(r)==="[object Number]":!1}A.exports=dr});var D=t((fe,B)=>{"use strict";var lr=v(),_r=m();function hr(r){return lr(r)||_r(r)}B.exports=hr});var f=t((pe,H)=>{"use strict";var E=s("@stdlib/utils/define-nonenumerable-read-only-property"),q=D(),Tr=v(),Fr=m();E(q,"isPrimitive",Tr);E(q,"isObject",Fr);H.exports=q});var p=t((be,J)=>{"use strict";var Rr=s("@stdlib/constants/float64/pinf"),Gr=s("@stdlib/constants/float64/ninf"),Lr=s("@stdlib/math/base/assert/is-integer");function Cr(r){return r<Rr&&r>Gr&&Lr(r)}J.exports=Cr});var b=t((xe,K)=>{"use strict";var kr=f().isPrimitive,wr=p();function zr(r){return kr(r)&&wr(r)}K.exports=zr});var x=t((ge,M)=>{"use strict";var Ar=f().isObject,Br=p();function Dr(r){return Ar(r)&&Br(r.valueOf())}M.exports=Dr});var U=t((ye,Q)=>{"use strict";var Er=b(),Hr=x();function Jr(r){return Er(r)||Hr(r)}Q.exports=Jr});var y=t((Oe,W)=>{"use strict";var V=s("@stdlib/utils/define-nonenumerable-read-only-property"),g=U(),Kr=b(),Mr=x();V(g,"isPrimitive",Kr);V(g,"isObject",Mr);W.exports=g});var O=t((Pe,X)=>{"use strict";var Qr=y().isPrimitive;function Ur(r){return Qr(r)&&r>0}X.exports=Ur});var P=t((Ie,Y)=>{"use strict";var Vr=y().isObject;function Wr(r){return Vr(r)&&r.valueOf()>0}Y.exports=Wr});var $=t((je,Z)=>{"use strict";var Xr=O(),Yr=P();function Zr(r){return Xr(r)||Yr(r)}Z.exports=Zr});var j=t((Se,er)=>{"use strict";var rr=s("@stdlib/utils/define-nonenumerable-read-only-property"),I=$(),$r=O(),re=P();rr(I,"isPrimitive",$r);rr(I,"isObject",re);er.exports=I});var u={};ar(u,{default:()=>ie});var ee=N(j());n(u,N(j()));var{default:tr,...te}=ee,ie=tr!==void 0?tr:te;export{ie as default};
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

@stdlib/assert/is-positive-integer/lib/primitive.js:
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

@stdlib/assert/is-positive-integer/lib/object.js:
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

@stdlib/assert/is-positive-integer/lib/main.js:
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

@stdlib/assert/is-positive-integer/lib/index.js:
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
//# sourceMappingURL=is-positive-integer.js.map