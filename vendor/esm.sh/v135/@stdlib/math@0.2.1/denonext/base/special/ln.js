/* esm.sh - esbuild bundle(@stdlib/math@0.2.1/base/special/ln) denonext production */
import * as __0$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/get-high-word.js";
import * as __1$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/set-high-word.js";
import * as __2$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/exponent-bias.js";
import * as __3$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/ninf.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/number/float64/base/get-high-word":return e(__0$);case"@stdlib/number/float64/base/set-high-word":return e(__1$);case"@stdlib/constants/float64/exponent-bias":return e(__2$);case"@stdlib/constants/float64/ninf":return e(__3$);default:throw new Error("module \""+n+"\" not found");}};
var F=Object.create;var d=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty;var H=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var o=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),w=(r,e)=>{for(var t in e)d(r,t,{get:e[t],enumerable:!0})},q=(r,e,t,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of b(e))!k.call(r,u)&&u!==t&&d(r,u,{get:()=>e[u],enumerable:!(l=T(e,u))||l.enumerable});return r},_=(r,e,t)=>(q(r,e,"default"),t&&q(t,e,"default")),E=(r,e,t)=>(t=r!=null?F(j(r)):{},q(e||!r||!r.__esModule?d(t,"default",{value:r,enumerable:!0}):t,r));var L=o((or,G)=>{"use strict";function x(r){return r!==r}G.exports=x});var O=o((_r,M)=>{"use strict";var z=L();M.exports=z});var y=o((lr,h)=>{"use strict";function C(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}h.exports=C});var R=o((pr,P)=>{"use strict";function K(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}P.exports=K});var D=o((Ir,g)=>{"use strict";var S=H("@stdlib/number/float64/base/get-high-word"),Q=H("@stdlib/number/float64/base/set-high-word"),J=O(),U=H("@stdlib/constants/float64/exponent-bias"),V=H("@stdlib/constants/float64/ninf"),Y=y(),Z=R(),N=.6931471803691238,c=19082149292705877e-26,$=0x40000000000000,rr=.3333333333333333,X=1048575,er=2146435072,tr=1048576,ar=1072693248;function ir(r){var e,t,l,u,i,f,a,s,m,n,p,I;return r===0?V:J(r)||r<0?NaN:(t=S(r),i=0,t<tr&&(i-=54,r*=$,t=S(r)),t>=er?r+r:(i+=(t>>20)-U|0,t&=X,s=t+614244&1048576|0,r=Q(r,t|s^ar),i+=s>>20|0,a=r-1,(X&2+t)<3?a===0?i===0?0:i*N+i*c:(f=a*a*(.5-rr*a),i===0?a-f:i*N-(f-i*c-a)):(n=a/(2+a),I=n*n,s=t-398458|0,p=I*I,m=440401-t|0,u=p*Y(p),l=I*Z(p),s|=m,f=l+u,s>0?(e=.5*a*a,i===0?a-(e-n*(e+f)):i*N-(e-(n*(e+f)+i*c)-a)):i===0?a-n*(a-f):i*N-(n*(a-f)-i*c-a))))}g.exports=ir});var A=o((Hr,W)=>{"use strict";var ur=D();W.exports=ur});var v={};w(v,{default:()=>vr});var fr=E(A());_(v,E(A()));var{default:B,...nr}=fr,vr=B!==void 0?B:nr;export{vr as default};
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
*/
//# sourceMappingURL=ln.js.map