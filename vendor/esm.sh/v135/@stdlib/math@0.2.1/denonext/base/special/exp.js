/* esm.sh - esbuild bundle(@stdlib/math@0.2.1/base/special/exp) denonext production */
import * as __0$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/ninf.js";
import * as __1$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
import * as __2$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
import * as __3$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/ninf.js";
import * as __4$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/exponent-bias.js";
import * as __5$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/max-base2-exponent.js";
import * as __6$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/max-base2-exponent-subnormal.js";
import * as __7$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/min-base2-exponent-subnormal.js";
import * as __8$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/normalize.js";
import * as __9$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/exponent.js";
import * as __a$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/to-words.js";
import * as __b$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/from-words.js";
import * as __c$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
import * as __d$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/ninf.js";
import * as __e$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/high-word-sign-mask.js";
import * as __f$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/high-word-abs-mask.js";
import * as __10$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/to-words.js";
import * as __11$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/get-high-word.js";
import * as __12$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/from-words.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/constants/float64/ninf":return e(__0$);case"@stdlib/constants/float64/pinf":return e(__1$);case"@stdlib/constants/float64/exponent-bias":return e(__4$);case"@stdlib/constants/float64/max-base2-exponent":return e(__5$);case"@stdlib/constants/float64/max-base2-exponent-subnormal":return e(__6$);case"@stdlib/constants/float64/min-base2-exponent-subnormal":return e(__7$);case"@stdlib/number/float64/base/normalize":return e(__8$);case"@stdlib/number/float64/base/exponent":return e(__9$);case"@stdlib/number/float64/base/to-words":return e(__a$);case"@stdlib/number/float64/base/from-words":return e(__b$);case"@stdlib/constants/float64/high-word-sign-mask":return e(__e$);case"@stdlib/constants/float64/high-word-abs-mask":return e(__f$);case"@stdlib/number/float64/base/get-high-word":return e(__11$);default:throw new Error("module \""+n+"\" not found");}};
var ur=Object.create;var f=Object.defineProperty;var ar=Object.getOwnPropertyDescriptor;var sr=Object.getOwnPropertyNames;var nr=Object.getPrototypeOf,vr=Object.prototype.hasOwnProperty;var u=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,i)=>(typeof require<"u"?require:e)[i]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var a=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),or=(r,e)=>{for(var i in e)f(r,i,{get:e[i],enumerable:!0})},q=(r,e,i,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of sr(e))!vr.call(r,s)&&s!==i&&f(r,s,{get:()=>e[s],enumerable:!(t=ar(e,s))||t.enumerable});return r},v=(r,e,i)=>(q(r,e,"default"),i&&q(i,e,"default")),E=(r,e,i)=>(i=r!=null?ur(nr(r)):{},q(e||!r||!r.__esModule?f(i,"default",{value:r,enumerable:!0}):i,r));var d=a((ce,O)=>{"use strict";function qr(r){return r!==r}O.exports=qr});var c=a((Ne,A)=>{"use strict";var fr=d();A.exports=fr});var R=a((pe,I)=>{"use strict";var cr=Math.floor;I.exports=cr});var S=a((le,M)=>{"use strict";var Nr=R();M.exports=Nr});var F=a((_e,W)=>{"use strict";var pr=Math.ceil;W.exports=pr});var g=a((me,L)=>{"use strict";var lr=F();L.exports=lr});var h=a((Ee,P)=>{"use strict";var _r=S(),mr=g();function Er(r){return r<0?mr(r):_r(r)}P.exports=Er});var X=a((Oe,y)=>{"use strict";var Or=h();y.exports=Or});var T=a((de,B)=>{"use strict";var dr=u("@stdlib/constants/float64/pinf"),Ar=u("@stdlib/constants/float64/ninf");function Ir(r){return r===dr||r===Ar}B.exports=Ir});var G=a((Ae,D)=>{"use strict";var Rr=T();D.exports=Rr});var U=a((Ie,K)=>{"use strict";var Mr=u("@stdlib/constants/float64/high-word-sign-mask"),Sr=u("@stdlib/constants/float64/high-word-abs-mask"),Wr=u("@stdlib/number/float64/base/to-words"),Fr=u("@stdlib/number/float64/base/get-high-word"),Lr=u("@stdlib/number/float64/base/from-words"),N=[0,0];function gr(r,e){var i,t;return Wr.assign(r,N,1,0),i=N[0],i&=Sr,t=Fr(e),t&=Mr,i|=t,Lr(i,N[1])}K.exports=gr});var H=a((Re,C)=>{"use strict";var Pr=U();C.exports=Pr});var Z=a((Me,V)=>{"use strict";var hr=u("@stdlib/constants/float64/pinf"),yr=u("@stdlib/constants/float64/ninf"),Xr=u("@stdlib/constants/float64/exponent-bias"),Br=u("@stdlib/constants/float64/max-base2-exponent"),Tr=u("@stdlib/constants/float64/max-base2-exponent-subnormal"),Dr=u("@stdlib/constants/float64/min-base2-exponent-subnormal"),Gr=c(),Kr=G(),Ur=H(),Cr=u("@stdlib/number/float64/base/normalize").assign,Hr=u("@stdlib/number/float64/base/exponent"),Vr=u("@stdlib/number/float64/base/to-words"),Zr=u("@stdlib/number/float64/base/from-words"),kr=2220446049250313e-31,xr=2148532223,p=[0,0],l=[0,0];function zr(r,e){var i,t;return e===0||r===0||Gr(r)||Kr(r)?r:(Cr(r,p,1,0),r=p[0],e+=p[1],e+=Hr(r),e<Dr?Ur(0,r):e>Br?r<0?yr:hr:(e<=Tr?(e+=52,t=kr):t=1,Vr.assign(r,l,1,0),i=l[0],i&=xr,i|=e+Xr<<20,t*Zr(i,l[1])))}V.exports=zr});var x=a((Se,k)=>{"use strict";var br=Z();k.exports=br});var b=a((We,z)=>{"use strict";function jr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}z.exports=jr});var w=a((Fe,j)=>{"use strict";var wr=x(),Jr=b();function Qr(r,e,i){var t,s,o,m;return t=r-e,s=t*t,o=t-s*Jr(s),m=1-(e-t*o/(2-o)-r),wr(m,i)}j.exports=Qr});var er=a((Le,rr)=>{"use strict";var Yr=c(),J=X(),$r=u("@stdlib/constants/float64/ninf"),Q=u("@stdlib/constants/float64/pinf"),re=w(),ee=.6931471803691238,ie=19082149292705877e-26,Y=1.4426950408889634,te=709.782712893384,ue=-745.1332191019411,$=1/(1<<28),ae=-$;function se(r){var e,i,t;return Yr(r)||r===Q?r:r===$r?0:r>te?Q:r<ue?0:r>ae&&r<$?1+r:(r<0?t=J(Y*r-.5):t=J(Y*r+.5),e=r-t*ee,i=t*ie,re(e,i,t))}rr.exports=se});var _=a((ge,ir)=>{"use strict";var ne=er();ir.exports=ne});var n={};or(n,{default:()=>qe});var ve=E(_());v(n,E(_()));var{default:tr,...oe}=ve,qe=tr!==void 0?tr:oe;export{qe as default};
/*! Bundled license information:

@stdlib/math/base/assert/is-nan/lib/main.js:
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

@stdlib/math/base/assert/is-nan/lib/index.js:
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

@stdlib/math/base/special/floor/lib/main.js:
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

@stdlib/math/base/special/floor/lib/index.js:
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

@stdlib/math/base/special/ceil/lib/main.js:
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

@stdlib/math/base/special/ceil/lib/index.js:
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

@stdlib/math/base/special/trunc/lib/main.js:
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

@stdlib/math/base/special/trunc/lib/index.js:
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

@stdlib/math/base/assert/is-infinite/lib/main.js:
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

@stdlib/math/base/assert/is-infinite/lib/index.js:
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

@stdlib/math/base/special/copysign/lib/main.js:
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

@stdlib/math/base/special/copysign/lib/index.js:
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

@stdlib/math/base/special/ldexp/lib/main.js:
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

@stdlib/math/base/special/ldexp/lib/index.js:
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

@stdlib/math/base/special/exp/lib/polyval_p.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
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

@stdlib/math/base/special/exp/lib/expmulti.js:
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
  *
  *
  * ## Notice
  *
  * The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (c) 2009 The Go Authors. All rights reserved.
  *
  * Redistribution and use in source and binary forms, with or without
  * modification, are permitted provided that the following conditions are
  * met:
  *
  *    * Redistributions of source code must retain the above copyright
  * notice, this list of conditions and the following disclaimer.
  *    * Redistributions in binary form must reproduce the above
  * copyright notice, this list of conditions and the following disclaimer
  * in the documentation and/or other materials provided with the
  * distribution.
  *    * Neither the name of Google Inc. nor the names of its
  * contributors may be used to endorse or promote products derived from
  * this software without specific prior written permission.
  *
  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
  * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
  * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
  * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
  * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
  * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
  * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
  * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
  * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
  * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  * ```
  *
  * ```text
  * Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/exp/lib/main.js:
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
  *
  *
  * ## Notice
  *
  * The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (c) 2009 The Go Authors. All rights reserved.
  *
  * Redistribution and use in source and binary forms, with or without
  * modification, are permitted provided that the following conditions are
  * met:
  *
  *    * Redistributions of source code must retain the above copyright
  * notice, this list of conditions and the following disclaimer.
  *    * Redistributions in binary form must reproduce the above
  * copyright notice, this list of conditions and the following disclaimer
  * in the documentation and/or other materials provided with the
  * distribution.
  *    * Neither the name of Google Inc. nor the names of its
  * contributors may be used to endorse or promote products derived from
  * this software without specific prior written permission.
  *
  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
  * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
  * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
  * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
  * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
  * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
  * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
  * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
  * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
  * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  * ```
  *
  * ```text
  * Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/exp/lib/index.js:
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
//# sourceMappingURL=exp.js.map