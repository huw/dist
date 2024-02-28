/* esm.sh - esbuild bundle(@stdlib/object@0.2.1/assign) denonext production */
import * as __0$ from "/v135/@stdlib/assert@0.2.1/denonext/is-function.js";
import * as __1$ from "/v135/@stdlib/utils@0.2.1/denonext/enumerable-properties.js";
import * as __2$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/assert/is-function":return e(__0$);case"@stdlib/utils/enumerable-properties":return e(__1$);case"@stdlib/string/format":return e(__2$);default:throw new Error("module \""+n+"\" not found");}};
var P=Object.create;var f=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var V=Object.getOwnPropertyNames;var z=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty;var m=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,s)=>(typeof require<"u"?require:r)[s]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var u=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),C=(e,r)=>{for(var s in r)f(e,s,{get:r[s],enumerable:!0})},c=(e,r,s,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of V(r))!B.call(e,t)&&t!==s&&f(e,t,{get:()=>r[t],enumerable:!(a=T(r,t))||a.enumerable});return e},n=(e,r,s)=>(c(e,r,"default"),s&&c(s,r,"default")),d=(e,r,s)=>(s=e!=null?P(z(e)):{},c(r||!e||!e.__esModule?f(s,"default",{value:e,enumerable:!0}):s,e));var j=u((Y,g)=>{"use strict";var D=m("@stdlib/assert/is-function"),G=D(Object.assign);g.exports=G});var x=u((Z,q)=>{"use strict";var H=Object.assign;q.exports=H});var _=u(($,O)=>{"use strict";var I=Object;O.exports=I});var y=u((rr,h)=>{"use strict";var J=_();h.exports=J});var F=u((er,w)=>{"use strict";var K=m("@stdlib/utils/enumerable-properties"),k=y(),L=m("@stdlib/string/format");function M(e){var r,s,a,t,l,o,v;if(e==null)throw new TypeError(L("invalid argument. First argument must be a non-null object. Value: `%s`.",e));for(l=k(e),o=1;o<arguments.length;o++)if(r=arguments[o],r!=null)for(s=K(k(r)),t=s.length,v=0;v<t;v++)a=s[v],l[a]=r[a];return l}w.exports=M});var b=u((sr,A)=>{"use strict";var N=j(),Q=x(),R=F(),p;N?p=Q:p=R;A.exports=p});var i={};C(i,{default:()=>W});var S=d(b());n(i,d(b()));var{default:E,...U}=S,W=E!==void 0?E:U;export{W as default};
/*! Bundled license information:

@stdlib/object/assign/lib/has_object_assign.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2023 The Stdlib Authors.
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

@stdlib/object/assign/lib/builtin.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2023 The Stdlib Authors.
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

@stdlib/object/ctor/lib/main.js:
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

@stdlib/object/ctor/lib/index.js:
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

@stdlib/object/assign/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2023 The Stdlib Authors.
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

@stdlib/object/assign/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2023 The Stdlib Authors.
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
//# sourceMappingURL=assign.js.map