/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/is-object-like) denonext production */
import * as __0$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __1$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __2$ from "/v135/@stdlib/utils@0.2.1/denonext/native-class.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/utils/define-nonenumerable-read-only-property":return e(__0$);case"@stdlib/string/format":return e(__1$);case"@stdlib/utils/native-class":return e(__2$);default:throw new Error("module \""+n+"\" not found");}};
var h=Object.create;var o=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var E=Object.getPrototypeOf,M=Object.prototype.hasOwnProperty;var c=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),R=(r,e)=>{for(var t in e)o(r,t,{get:e[t],enumerable:!0})},f=(r,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of C(e))!M.call(r,i)&&i!==t&&o(r,i,{get:()=>e[i],enumerable:!(s=w(e,i))||s.enumerable});return r},u=(r,e,t)=>(f(r,e,"default"),t&&f(t,e,"default")),p=(r,e,t)=>(t=r!=null?h(E(r)):{},f(e||!r||!r.__esModule?o(t,"default",{value:r,enumerable:!0}):t,r));var A=n((U,m)=>{"use strict";var T=c("@stdlib/utils/native-class"),y;function V(r){return T(r)==="[object Array]"}Array.isArray?y=Array.isArray:y=V;m.exports=y});var x=n((W,q)=>{"use strict";var z=A();q.exports=z});var _=n((X,d)=>{"use strict";var B=x(),D=c("@stdlib/string/format");function F(r){if(typeof r!="function")throw new TypeError(D("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var s,i;if(!B(t)||(s=t.length,s===0))return!1;for(i=0;i<s;i++)if(r(t[i])===!1)return!1;return!0}}d.exports=F});var j=n((Y,b)=>{"use strict";var G=_();b.exports=G});var k=n((Z,O)=>{"use strict";function H(r){return r!==null&&typeof r=="object"}O.exports=H});var v=n(($,L)=>{"use strict";var I=c("@stdlib/utils/define-nonenumerable-read-only-property"),J=j(),l=k(),K=J(l);I(l,"isObjectLikeArray",K);L.exports=l});var a={};R(a,{default:()=>Q});var N=p(v());u(a,p(v()));var{default:g,...P}=N,Q=g!==void 0?g:P;export{Q as default};
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
*/
//# sourceMappingURL=is-object-like.js.map