/* esm.sh - esbuild bundle(@stdlib/math@0.2.1/base/utils/absolute-difference) denonext production */
import * as __0$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
import * as __1$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
import * as __2$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/ninf.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/constants/float64/pinf":return e(__0$);case"@stdlib/constants/float64/ninf":return e(__2$);default:throw new Error("module \""+n+"\" not found");}};
var z=Object.create;var o=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var B=Object.getOwnPropertyNames;var C=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty;var f=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),G=(r,e)=>{for(var t in e)o(r,t,{get:e[t],enumerable:!0})},a=(r,e,t,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of B(e))!E.call(r,n)&&n!==t&&o(r,n,{get:()=>e[n],enumerable:!(p=A(e,n))||p.enumerable});return r},u=(r,e,t)=>(a(r,e,"default"),t&&a(t,e,"default")),q=(r,e,t)=>(t=r!=null?z(C(r)):{},a(e||!r||!r.__esModule?o(t,"default",{value:r,enumerable:!0}):t,r));var m=i((y,v)=>{"use strict";function H(r){return Math.abs(r)}v.exports=H});var d=i((rr,N)=>{"use strict";var J=m();N.exports=J});var l=i((er,_)=>{"use strict";function K(r){return r!==r}_.exports=K});var I=i((tr,x)=>{"use strict";var L=l();x.exports=L});var F=i((ir,b)=>{"use strict";var O=f("@stdlib/constants/float64/pinf"),Q=f("@stdlib/constants/float64/ninf");function R(r){return r===O||r===Q}b.exports=R});var h=i((sr,P)=>{"use strict";var S=F();P.exports=S});var j=i((ur,g)=>{"use strict";var T=f("@stdlib/constants/float64/pinf"),U=d(),D=I(),M=h();function V(r,e){return D(r)||D(e)?NaN:M(r)||M(e)?r===e?NaN:T:U(r-e)}g.exports=V});var c=i((nr,k)=>{"use strict";var W=j();k.exports=W});var s={};G(s,{default:()=>Z});var X=q(c());u(s,q(c()));var{default:w,...Y}=X,Z=w!==void 0?w:Y;export{Z as default};
/*! Bundled license information:

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

@stdlib/math/base/utils/absolute-difference/lib/main.js:
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

@stdlib/math/base/utils/absolute-difference/lib/index.js:
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
//# sourceMappingURL=absolute-difference.js.map