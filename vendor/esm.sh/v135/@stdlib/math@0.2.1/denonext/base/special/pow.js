/* esm.sh - esbuild bundle(@stdlib/math@0.2.1/base/special/pow) denonext production */
import * as __0$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/to-words.js";
import * as __1$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/set-low-word.js";
import * as __2$ from "/v135/@stdlib/number@0.2.1/denonext/uint32/base/to-int32.js";
import * as __3$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/ninf.js";
import * as __4$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
import * as __5$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/high-word-abs-mask.js";
import * as __6$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
import * as __7$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/ninf.js";
import * as __8$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/get-high-word.js";
import * as __9$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/set-high-word.js";
import * as __a$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/set-low-word.js";
import * as __b$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/high-word-abs-mask.js";
import * as __c$ from "/v135/@stdlib/number@0.2.1/denonext/uint32/base/to-int32.js";
import * as __d$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/get-high-word.js";
import * as __e$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/set-low-word.js";
import * as __f$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/ninf.js";
import * as __10$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
import * as __11$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/get-high-word.js";
import * as __12$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/ln-two.js";
import * as __13$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/exponent-bias.js";
import * as __14$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/set-low-word.js";
import * as __15$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
import * as __16$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/high-word-abs-mask.js";
import * as __17$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/set-high-word.js";
import * as __18$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/high-word-significand-mask.js";
import * as __19$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/exponent-bias.js";
import * as __1a$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/high-word-sign-mask.js";
import * as __1b$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/high-word-abs-mask.js";
import * as __1c$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/to-words.js";
import * as __1d$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/get-high-word.js";
import * as __1e$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/from-words.js";
import * as __1f$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
import * as __20$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/ninf.js";
import * as __21$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/exponent-bias.js";
import * as __22$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/max-base2-exponent.js";
import * as __23$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/max-base2-exponent-subnormal.js";
import * as __24$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/min-base2-exponent-subnormal.js";
import * as __25$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/normalize.js";
import * as __26$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/exponent.js";
import * as __27$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/to-words.js";
import * as __28$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/from-words.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/number/float64/base/to-words":return e(__0$);case"@stdlib/number/float64/base/set-low-word":return e(__1$);case"@stdlib/number/uint32/base/to-int32":return e(__2$);case"@stdlib/constants/float64/ninf":return e(__3$);case"@stdlib/constants/float64/pinf":return e(__4$);case"@stdlib/constants/float64/high-word-abs-mask":return e(__5$);case"@stdlib/number/float64/base/get-high-word":return e(__8$);case"@stdlib/number/float64/base/set-high-word":return e(__9$);case"@stdlib/constants/float64/ln-two":return e(__12$);case"@stdlib/constants/float64/exponent-bias":return e(__13$);case"@stdlib/constants/float64/high-word-significand-mask":return e(__18$);case"@stdlib/constants/float64/high-word-sign-mask":return e(__1a$);case"@stdlib/number/float64/base/from-words":return e(__1e$);case"@stdlib/constants/float64/max-base2-exponent":return e(__22$);case"@stdlib/constants/float64/max-base2-exponent-subnormal":return e(__23$);case"@stdlib/constants/float64/min-base2-exponent-subnormal":return e(__24$);case"@stdlib/number/float64/base/normalize":return e(__25$);case"@stdlib/number/float64/base/exponent":return e(__26$);default:throw new Error("module \""+n+"\" not found");}};
var l0=Object.create;var R=Object.defineProperty;var S0=Object.getOwnPropertyDescriptor;var E0=Object.getOwnPropertyNames;var G0=Object.getPrototypeOf,d0=Object.prototype.hasOwnProperty;var t=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,i)=>(typeof require<"u"?require:e)[i]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var a=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),g0=(r,e)=>{for(var i in e)R(r,i,{get:e[i],enumerable:!0})},w=(r,e,i,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let v of E0(e))!d0.call(r,v)&&v!==i&&R(r,v,{get:()=>e[v],enumerable:!(u=S0(e,v))||u.enumerable});return r},O=(r,e,i)=>(w(r,e,"default"),i&&w(i,e,"default")),x=(r,e,i)=>(i=r!=null?l0(G0(r)):{},w(e||!r||!r.__esModule?R(i,"default",{value:r,enumerable:!0}):i,r));var y=a((Bi,j)=>{"use strict";function P0(r){return r!==r}j.exports=P0});var C=a((Li,rr)=>{"use strict";var M0=y();rr.exports=M0});var ir=a((Wi,er)=>{"use strict";var O0=Math.floor;er.exports=O0});var ar=a((mi,tr)=>{"use strict";var B0=ir();tr.exports=B0});var vr=a((Di,ur)=>{"use strict";var L0=ar();function W0(r){return L0(r)===r}ur.exports=W0});var K=a((Xi,sr)=>{"use strict";var m0=vr();sr.exports=m0});var fr=a((Fi,nr)=>{"use strict";var D0=K();function X0(r){return D0(r/2)}nr.exports=X0});var Ir=a((hi,or)=>{"use strict";var F0=fr();or.exports=F0});var Nr=a((Ti,qr)=>{"use strict";var _r=Ir();function h0(r){return r>0?_r(r-1):_r(r+1)}qr.exports=h0});var U=a((wi,Hr)=>{"use strict";var T0=Nr();Hr.exports=T0});var cr=a((Ri,pr)=>{"use strict";var w0=t("@stdlib/constants/float64/pinf"),R0=t("@stdlib/constants/float64/ninf");function C0(r){return r===w0||r===R0}pr.exports=C0});var b=a((Ci,Ar)=>{"use strict";var K0=cr();Ar.exports=K0});var Sr=a((Ki,lr)=>{"use strict";var U0=Math.sqrt;lr.exports=U0});var Gr=a((Ui,Er)=>{"use strict";var b0=Sr();Er.exports=b0});var gr=a((bi,dr)=>{"use strict";function z0(r){return Math.abs(r)}dr.exports=z0});var z=a((zi,Pr)=>{"use strict";var V0=gr();Pr.exports=V0});var Or=a((Vi,Mr)=>{"use strict";var Y0=t("@stdlib/constants/float64/high-word-sign-mask"),k0=t("@stdlib/constants/float64/high-word-abs-mask"),Z0=t("@stdlib/number/float64/base/to-words"),J0=t("@stdlib/number/float64/base/get-high-word"),Q0=t("@stdlib/number/float64/base/from-words"),V=[0,0];function $0(r,e){var i,u;return Z0.assign(r,V,1,0),i=V[0],i&=k0,u=J0(e),u&=Y0,i|=u,Q0(i,V[1])}Mr.exports=$0});var Y=a((Yi,Br)=>{"use strict";var x0=Or();Br.exports=x0});var mr=a((ki,Wr)=>{"use strict";var Lr=U(),j0=Y(),y0=t("@stdlib/constants/float64/ninf"),D=t("@stdlib/constants/float64/pinf");function re(r,e){return e===y0?D:e===D?0:e>0?Lr(e)?r:0:Lr(e)?j0(D,r):D}Wr.exports=re});var Xr=a((Zi,Dr)=>{"use strict";var ee=t("@stdlib/constants/float64/high-word-abs-mask"),ie=t("@stdlib/number/float64/base/get-high-word"),te=1072693247,X=1e300,F=1e-300;function ae(r,e){var i,u;return u=ie(r),i=u&ee,i<=te?e<0?X*X:F*F:e>0?X*X:F*F}Dr.exports=ae});var Tr=a((Ji,hr)=>{"use strict";var ue=z(),Fr=t("@stdlib/constants/float64/pinf");function ve(r,e){return r===-1?(r-r)/(r-r):r===1?1:ue(r)<1==(e===Fr)?0:Fr}hr.exports=ve});var Rr=a((Qi,wr)=>{"use strict";function se(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}wr.exports=se});var br=a(($i,Ur)=>{"use strict";var ne=t("@stdlib/number/float64/base/get-high-word"),h=t("@stdlib/number/float64/base/set-low-word"),Cr=t("@stdlib/number/float64/base/set-high-word"),fe=t("@stdlib/constants/float64/exponent-bias"),oe=Rr(),Ie=1048575,Kr=1048576,_e=1072693248,qe=536870912,Ne=524288,He=20,pe=9007199254740992,ce=.9617966939259756,Ae=.9617967009544373,le=-7028461650952758e-24,Se=[1,1.5],Ee=[0,.5849624872207642],Ge=[0,1350039202129749e-23];function de(r,e,i){var u,v,s,I,N,_,f,n,o,q,H,A,c,p,g,T,W,P,M,B,m,G;return B=0,i<Kr&&(e*=pe,B-=53,i=ne(e)),B+=(i>>He)-fe|0,m=i&Ie|0,i=m|_e|0,m<=235662?G=0:m<767610?G=1:(G=0,B+=1,i-=Kr),e=Cr(e,i),n=Se[G],P=e-n,M=1/(e+n),v=P*M,I=h(v,0),u=(i>>1|qe)+Ne,u+=G<<18,_=Cr(0,u),f=e-(_-n),N=M*(P-I*_-I*f),s=v*v,W=s*s*oe(s),W+=N*(I+v),s=I*I,_=3+s+W,_=h(_,0),f=W-(_-3-s),P=I*_,M=N*_+f*v,q=P+M,q=h(q,0),H=M-(q-P),A=Ae*q,c=le*q+H*ce+Ge[G],o=Ee[G],T=B,p=A+c+o+T,p=h(p,0),g=c-(p-T-o-A),r[0]=p,r[1]=g,r}Ur.exports=de});var Vr=a((xi,zr)=>{"use strict";function ge(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}zr.exports=ge});var kr=a((ji,Yr)=>{"use strict";var Pe=t("@stdlib/number/float64/base/set-low-word"),Me=Vr(),Oe=1.4426950408889634,Be=1.4426950216293335,Le=19259629911266175e-24;function We(r,e){var i,u,v,s,I,N;return v=e-1,s=v*v*Me(v),I=Be*v,N=v*Le-s*Oe,u=I+N,u=Pe(u,0),i=N-(u-I),r[0]=u,r[1]=i,r}Yr.exports=We});var Jr=a((yi,Zr)=>{"use strict";var me=t("@stdlib/constants/float64/pinf"),De=t("@stdlib/constants/float64/ninf"),Xe=t("@stdlib/constants/float64/exponent-bias"),Fe=t("@stdlib/constants/float64/max-base2-exponent"),he=t("@stdlib/constants/float64/max-base2-exponent-subnormal"),Te=t("@stdlib/constants/float64/min-base2-exponent-subnormal"),we=C(),Re=b(),Ce=Y(),Ke=t("@stdlib/number/float64/base/normalize").assign,Ue=t("@stdlib/number/float64/base/exponent"),be=t("@stdlib/number/float64/base/to-words"),ze=t("@stdlib/number/float64/base/from-words"),Ve=2220446049250313e-31,Ye=2148532223,k=[0,0],Z=[0,0];function ke(r,e){var i,u;return e===0||r===0||we(r)||Re(r)?r:(Ke(r,k,1,0),r=k[0],e+=k[1],e+=Ue(r),e<Te?Ce(0,r):e>Fe?r<0?De:me:(e<=he?(e+=52,u=Ve):u=1,be.assign(r,Z,1,0),i=Z[0],i&=Ye,i|=e+Xe<<20,u*ze(i,Z[1])))}Zr.exports=ke});var $r=a((rt,Qr)=>{"use strict";var Ze=Jr();Qr.exports=Ze});var jr=a((et,xr)=>{"use strict";function Je(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}xr.exports=Je});var u0=a((it,a0)=>{"use strict";var Qe=t("@stdlib/number/float64/base/get-high-word"),yr=t("@stdlib/number/float64/base/set-high-word"),$e=t("@stdlib/number/float64/base/set-low-word"),xe=t("@stdlib/number/uint32/base/to-int32"),je=$r(),ye=t("@stdlib/constants/float64/ln-two"),r0=t("@stdlib/constants/float64/exponent-bias"),e0=t("@stdlib/constants/float64/high-word-abs-mask"),i0=t("@stdlib/constants/float64/high-word-significand-mask"),ri=jr(),t0=1048576,ei=1071644672,L=20,ii=.6931471824645996,ti=-1904654299957768e-24;function ai(r,e,i){var u,v,s,I,N,_,f,n,o,q,H;return q=r&e0|0,H=(q>>L)-r0|0,o=0,q>ei&&(o=r+(t0>>H+1)>>>0,H=((o&e0)>>L)-r0|0,u=(o&~(i0>>H))>>>0,s=yr(0,u),o=(o&i0|t0)>>L-H>>>0,r<0&&(o=-o),e-=s),s=i+e,s=$e(s,0),N=s*ii,_=(i-(s-e))*ye+s*ti,n=N+_,f=_-(n-N),s=n*n,v=n-s*ri(s),I=n*v/(v-2)-(f+n*f),n=1-(I-n),r=Qe(n),r=xe(r),r+=o<<L>>>0,r>>L<=0?n=je(n,o):n=yr(n,r),n}a0.exports=ai});var p0=a((tt,H0)=>{"use strict";var v0=C(),s0=U(),n0=b(),ui=K(),f0=Gr(),vi=z(),J=t("@stdlib/number/float64/base/to-words"),si=t("@stdlib/number/float64/base/set-low-word"),o0=t("@stdlib/number/uint32/base/to-int32"),ni=t("@stdlib/constants/float64/ninf"),fi=t("@stdlib/constants/float64/pinf"),Q=t("@stdlib/constants/float64/high-word-abs-mask"),oi=mr(),Ii=Xr(),_i=Tr(),qi=br(),Ni=kr(),Hi=u0(),pi=1072693247,ci=1105199104,Ai=1139802112,I0=1083179008,li=1072693248,Si=1083231232,Ei=3230714880,_0=31,S=1e300,E=1e-300,Gi=8008566259537294e-32,l=[0,0],q0=[0,0];function N0(r,e){var i,u,v,s,I,N,_,f,n,o,q,H,A,c,p,g;if(v0(r)||v0(e))return NaN;if(J.assign(e,l,1,0),N=l[0],_=l[1],_===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return f0(r);if(e===-.5)return 1/f0(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(n0(e))return _i(r,e)}if(J.assign(r,l,1,0),s=l[0],I=l[1],I===0){if(s===0)return oi(r,e);if(r===1)return 1;if(r===-1&&s0(e))return-1;if(n0(r))return r===ni?N0(-0,-e):e<0?0:fi}if(r<0&&ui(e)===!1)return(r-r)/(r-r);if(v=vi(r),i=s&Q|0,u=N&Q|0,f=s>>>_0|0,n=N>>>_0|0,f&&s0(e)?f=-1:f=1,u>ci){if(u>Ai)return Ii(r,e);if(i<pi)return n===1?f*S*S:f*E*E;if(i>li)return n===0?f*S*S:f*E*E;A=Ni(q0,v)}else A=qi(q0,v,i);if(o=si(e,0),H=(e-o)*A[0]+e*A[1],q=o*A[0],c=H+q,J.assign(c,l,1,0),p=o0(l[0]),g=o0(l[1]),p>=I0){if(p-I0|g||H+Gi>c-q)return f*S*S}else if((p&Q)>=Si&&(p-Ei|g||H<=c-q))return f*E*E;return c=Hi(p,q,H),f*c}H0.exports=N0});var $=a((at,c0)=>{"use strict";var di=p0();c0.exports=di});var d={};g0(d,{default:()=>Mi});var gi=x($());O(d,x($()));var{default:A0,...Pi}=gi,Mi=A0!==void 0?A0:Pi;export{Mi as default};
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

@stdlib/math/base/assert/is-integer/lib/main.js:
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

@stdlib/math/base/assert/is-integer/lib/index.js:
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

@stdlib/math/base/assert/is-even/lib/main.js:
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

@stdlib/math/base/assert/is-even/lib/index.js:
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

@stdlib/math/base/assert/is-odd/lib/main.js:
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

@stdlib/math/base/assert/is-odd/lib/index.js:
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

@stdlib/math/base/special/abs/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
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

@stdlib/math/base/special/abs/lib/index.js:
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

@stdlib/math/base/special/pow/lib/x_is_zero.js:
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
  * The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
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

@stdlib/math/base/special/pow/lib/y_is_huge.js:
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
  * The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
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

@stdlib/math/base/special/pow/lib/y_is_infinite.js:
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

@stdlib/math/base/special/pow/lib/polyval_l.js:
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

@stdlib/math/base/special/pow/lib/log2ax.js:
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
  * The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
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

@stdlib/math/base/special/pow/lib/polyval_w.js:
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

@stdlib/math/base/special/pow/lib/logx.js:
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
  * The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
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

@stdlib/math/base/special/pow/lib/polyval_p.js:
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

@stdlib/math/base/special/pow/lib/pow2.js:
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
  * The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
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

@stdlib/math/base/special/pow/lib/main.js:
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
  * The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
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

@stdlib/math/base/special/pow/lib/index.js:
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
//# sourceMappingURL=pow.js.map