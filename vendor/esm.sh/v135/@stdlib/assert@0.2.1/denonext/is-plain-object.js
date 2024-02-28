/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/is-plain-object) denonext production */
import * as __0$ from "/v135/@stdlib/utils@0.2.1/denonext/get-prototype-of.js";
import * as __1$ from "/v135/@stdlib/utils@0.2.1/denonext/native-class.js";
import * as __2$ from "/v135/@stdlib/utils@0.2.1/denonext/native-class.js";
import * as __3$ from "/v135/@stdlib/utils@0.2.1/denonext/type-of.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/utils/get-prototype-of":return e(__0$);case"@stdlib/utils/native-class":return e(__1$);case"@stdlib/utils/type-of":return e(__3$);default:throw new Error("module \""+n+"\" not found");}};
var H=Object.create;var f=Object.defineProperty;var I=Object.getOwnPropertyDescriptor;var J=Object.getOwnPropertyNames;var K=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty;var u=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var i=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),M=(r,t)=>{for(var e in t)f(r,e,{get:t[e],enumerable:!0})},c=(r,t,e,v)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of J(t))!L.call(r,n)&&n!==e&&f(r,n,{get:()=>t[n],enumerable:!(v=I(t,n))||v.enumerable});return r},o=(r,t,e)=>(c(r,t,"default"),e&&c(e,t,"default")),q=(r,t,e)=>(e=r!=null?H(K(r)):{},c(t||!r||!r.__esModule?f(e,"default",{value:r,enumerable:!0}):e,r));var O=i((pr,x)=>{"use strict";var N=u("@stdlib/utils/native-class"),p;function Q(r){return N(r)==="[object Array]"}Array.isArray?p=Array.isArray:p=Q;x.exports=p});var m=i((yr,l)=>{"use strict";var R=O();l.exports=R});var b=i((vr,P)=>{"use strict";var S=m();function T(r){return typeof r=="object"&&r!==null&&!S(r)}P.exports=T});var d=i((qr,j)=>{"use strict";var U=b();j.exports=U});var _=i((xr,A)=>{"use strict";var V=u("@stdlib/utils/type-of");function W(r){return V(r)==="function"}A.exports=W});var w=i((Or,h)=>{"use strict";var X=_();h.exports=X});var C=i((lr,F)=>{"use strict";var Y=Object.prototype.hasOwnProperty;function Z(r,t){return r==null?!1:Y.call(r,t)}F.exports=Z});var k=i((mr,g)=>{"use strict";var $=C();g.exports=$});var D=i((Pr,B)=>{"use strict";var rr=d(),z=w(),tr=u("@stdlib/utils/get-prototype-of"),a=k(),er=u("@stdlib/utils/native-class"),ir=Object.prototype;function sr(r){var t;for(t in r)if(!a(r,t))return!1;return!0}function or(r){var t;return rr(r)?(t=tr(r),t?!a(r,"constructor")&&a(t,"constructor")&&z(t.constructor)&&er(t.constructor)==="[object Function]"&&a(t,"isPrototypeOf")&&z(t.isPrototypeOf)&&(t===ir||sr(r)):!0):!1}B.exports=or});var y=i((br,E)=>{"use strict";var nr=D();E.exports=nr});var s={};M(s,{default:()=>cr});var ur=q(y());o(s,q(y()));var{default:G,...ar}=ur,cr=G!==void 0?G:ar;export{cr as default};
/*! Bundled license information:

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

@stdlib/assert/is-object/lib/main.js:
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

@stdlib/assert/is-object/lib/index.js:
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

@stdlib/assert/is-function/lib/main.js:
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

@stdlib/assert/is-function/lib/index.js:
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

@stdlib/assert/has-own-property/lib/main.js:
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

@stdlib/assert/has-own-property/lib/index.js:
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

@stdlib/assert/is-plain-object/lib/main.js:
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

@stdlib/assert/is-plain-object/lib/index.js:
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
//# sourceMappingURL=is-plain-object.js.map