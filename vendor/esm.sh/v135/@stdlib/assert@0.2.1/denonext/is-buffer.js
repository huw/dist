/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/is-buffer) denonext production */
import * as __0$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __1$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __2$ from "/v135/@stdlib/utils@0.2.1/denonext/native-class.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/utils/define-nonenumerable-read-only-property":return e(__0$);case"@stdlib/string/format":return e(__1$);case"@stdlib/utils/native-class":return e(__2$);default:throw new Error("module \""+n+"\" not found");}};
var E=Object.create;var a=Object.defineProperty;var M=Object.getOwnPropertyDescriptor;var R=Object.getOwnPropertyNames;var T=Object.getPrototypeOf,V=Object.prototype.hasOwnProperty;var c=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),z=(r,e)=>{for(var t in e)a(r,t,{get:e[t],enumerable:!0})},o=(r,e,t,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of R(e))!V.call(r,i)&&i!==t&&a(r,i,{get:()=>e[i],enumerable:!(u=M(e,i))||u.enumerable});return r},f=(r,e,t)=>(o(r,e,"default"),t&&o(t,e,"default")),q=(r,e,t)=>(t=r!=null?E(T(r)):{},o(e||!r||!r.__esModule?a(t,"default",{value:r,enumerable:!0}):t,r));var x=s((er,v)=>{"use strict";var D=c("@stdlib/utils/native-class"),y;function F(r){return D(r)==="[object Array]"}Array.isArray?y=Array.isArray:y=F;v.exports=y});var A=s((tr,l)=>{"use strict";var G=x();l.exports=G});var _=s((ir,d)=>{"use strict";var H=A(),I=c("@stdlib/string/format");function J(r){if(typeof r!="function")throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var u,i;if(!H(t)||(u=t.length,u===0))return!1;for(i=0;i<u;i++)if(r(t[i])===!1)return!1;return!0}}d.exports=J});var j=s((sr,b)=>{"use strict";var K=_();b.exports=K});var k=s((nr,O)=>{"use strict";function N(r){return r!==null&&typeof r=="object"}O.exports=N});var L=s((ur,B)=>{"use strict";var P=c("@stdlib/utils/define-nonenumerable-read-only-property"),Q=j(),p=k(),S=Q(p);P(p,"isObjectLikeArray",S);B.exports=p});var h=s((fr,g)=>{"use strict";var U=L();function W(r){return U(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}g.exports=W});var m=s((or,w)=>{"use strict";var X=h();w.exports=X});var n={};z(n,{default:()=>$});var Y=q(m());f(n,q(m()));var{default:C,...Z}=Y,$=C!==void 0?C:Z;export{$ as default};
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

@stdlib/assert/tools/array-function/lib/main.js:
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

@stdlib/assert/tools/array-function/lib/index.js:
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

@stdlib/assert/is-object-like/lib/main.js:
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

@stdlib/assert/is-object-like/lib/index.js:
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

@stdlib/assert/is-buffer/lib/main.js:
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

@stdlib/assert/is-buffer/lib/index.js:
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
//# sourceMappingURL=is-buffer.js.map