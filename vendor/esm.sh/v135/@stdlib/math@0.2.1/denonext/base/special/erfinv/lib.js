/* esm.sh - esbuild bundle(@stdlib/math@0.2.1/base/special/erfinv/lib) denonext production */
import * as __0$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
import * as __1$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/ninf.js";
import * as __2$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/get-high-word.js";
import * as __3$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/set-high-word.js";
import * as __4$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/exponent-bias.js";
import * as __5$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/ninf.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/constants/float64/pinf":return e(__0$);case"@stdlib/constants/float64/ninf":return e(__1$);case"@stdlib/number/float64/base/get-high-word":return e(__2$);case"@stdlib/number/float64/base/set-high-word":return e(__3$);case"@stdlib/constants/float64/exponent-bias":return e(__4$);default:throw new Error("module \""+n+"\" not found");}};
var t0=Object.create;var F=Object.defineProperty;var i0=Object.getOwnPropertyDescriptor;var n0=Object.getOwnPropertyNames;var u0=Object.getPrototypeOf,s0=Object.prototype.hasOwnProperty;var c=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,a)=>(typeof require<"u"?require:e)[a]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var v=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),v0=(r,e)=>{for(var a in e)F(r,a,{get:e[a],enumerable:!0})},H=(r,e,a,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of n0(e))!s0.call(r,i)&&i!==a&&F(r,i,{get:()=>e[i],enumerable:!(t=i0(e,i))||t.enumerable});return r},q=(r,e,a)=>(H(r,e,"default"),a&&H(a,e,"default")),A=(r,e,a)=>(a=r!=null?t0(u0(r)):{},H(e||!r||!r.__esModule?F(a,"default",{value:r,enumerable:!0}):a,r));var g=v(($0,M)=>{"use strict";function f0(r){return r!==r}M.exports=f0});var R=v((x0,h)=>{"use strict";var o0=g();h.exports=o0});var G=v((r1,E)=>{"use strict";var l0=Math.sqrt;E.exports=l0});var O=v((e1,L)=>{"use strict";var c0=G();L.exports=c0});var Y=v((a1,P)=>{"use strict";function q0(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}P.exports=q0});var S=v((t1,y)=>{"use strict";function p0(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}y.exports=p0});var B=v((i1,W)=>{"use strict";var X=c("@stdlib/number/float64/base/get-high-word"),_0=c("@stdlib/number/float64/base/set-high-word"),N0=R(),I0=c("@stdlib/constants/float64/exponent-bias"),H0=c("@stdlib/constants/float64/ninf"),F0=Y(),R0=S(),N=.6931471803691238,I=19082149292705877e-26,d0=0x40000000000000,m0=.3333333333333333,D=1048575,A0=2146435072,M0=1048576,g0=1072693248;function h0(r){var e,a,t,i,n,u,s,l,m,f,p,_;return r===0?H0:N0(r)||r<0?NaN:(a=X(r),n=0,a<M0&&(n-=54,r*=d0,a=X(r)),a>=A0?r+r:(n+=(a>>20)-I0|0,a&=D,l=a+614244&1048576|0,r=_0(r,a|l^g0),n+=l>>20|0,s=r-1,(D&2+a)<3?s===0?n===0?0:n*N+n*I:(u=s*s*(.5-m0*s),n===0?s-u:n*N-(u-n*I-s)):(f=s/(2+s),_=f*f,l=a-398458|0,p=_*_,m=440401-a|0,i=p*F0(p),t=_*R0(p),l|=m,u=t+i,l>0?(e=.5*s*s,n===0?s-(e-f*(e+u)):n*N-(e-(f*(e+u)+n*I)-s)):n===0?s-f*(s-u):n*N-(f*(s-u)-n*I-s))))}W.exports=h0});var b=v((n1,T)=>{"use strict";var E0=B();T.exports=E0});var k=v((u1,j)=>{"use strict";function G0(r){var e,a,t;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(a=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),t=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,a=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),t=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),a/t)}j.exports=G0});var z=v((s1,w)=>{"use strict";function L0(r){var e,a,t;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(a=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),t=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,a=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),t=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),a/t)}w.exports=L0});var K=v((v1,C)=>{"use strict";function O0(r){var e,a,t;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(a=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),t=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,a=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),t=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),a/t)}C.exports=O0});var J=v((f1,Q)=>{"use strict";function P0(r){var e,a,t;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(a=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),t=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,a=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),t=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),a/t)}Q.exports=P0});var V=v((o1,U)=>{"use strict";function Y0(r){var e,a,t;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(a=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),t=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,a=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),t=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),a/t)}U.exports=Y0});var r0=v((l1,x)=>{"use strict";var y0=R(),Z=O(),$=b(),S0=c("@stdlib/constants/float64/pinf"),X0=c("@stdlib/constants/float64/ninf"),D0=k(),W0=z(),B0=K(),T0=J(),b0=V(),j0=.08913147449493408,k0=2.249481201171875,w0=.807220458984375,z0=.9399557113647461,C0=.9836282730102539;function K0(r){var e,a,t,i,n,u;return y0(r)?NaN:r===1?S0:r===-1?X0:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,a=-r):(e=1,a=r),i=1-a,a<=.5?(n=a*(a+10),u=D0(a),e*(n*j0+n*u)):i>=.25?(n=Z(-2*$(i)),i-=.25,u=W0(i),e*(n/(k0+u))):(i=Z(-$(i)),i<3?(t=i-1.125,u=B0(t),e*(w0*i+u*i)):i<6?(t=i-3,u=T0(t),e*(z0*i+u*i)):(t=i-6,u=b0(t),e*(C0*i+u*i))))}x.exports=K0});var d=v((c1,e0)=>{"use strict";var Q0=r0();e0.exports=Q0});var o={};v0(o,{default:()=>V0});var J0=A(d());q(o,A(d()));var{default:a0,...U0}=J0,V0=a0!==void 0?a0:U0;export{V0 as default};
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

@stdlib/math/base/special/sqrt/lib/main.js:
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

@stdlib/math/base/special/sqrt/lib/index.js:
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

@stdlib/math/base/special/ln/lib/polyval_p.js:
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

@stdlib/math/base/special/ln/lib/polyval_q.js:
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

@stdlib/math/base/special/ln/lib/main.js:
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
  * The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log.c}. The implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
  *
  * Developed at SunPro, a Sun Microsystems, Inc. business.
  * Permission to use, copy, modify, and distribute this
  * software is freely granted, provided that this notice
  * is preserved.
  * ```
  *)

@stdlib/math/base/special/ln/lib/index.js:
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

@stdlib/math/base/special/erfinv/lib/rational_p1q1.js:
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

@stdlib/math/base/special/erfinv/lib/rational_p2q2.js:
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

@stdlib/math/base/special/erfinv/lib/rational_p3q3.js:
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

@stdlib/math/base/special/erfinv/lib/rational_p4q4.js:
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

@stdlib/math/base/special/erfinv/lib/rational_p5q5.js:
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

@stdlib/math/base/special/erfinv/lib/main.js:
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
  * The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_48_0/boost/math/special_functions/detail/erf_inv.hpp}. This implementation follows the original, but has been modified for JavaScript.
  *
  * ```text
  * (C) Copyright John Maddock 2006.
  *
  * Use, modification and distribution are subject to the
  * Boost Software License, Version 1.0. (See accompanying file
  * LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
  * ```
  *)

@stdlib/math/base/special/erfinv/lib/index.js:
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
//# sourceMappingURL=lib.js.map