/* esm.sh - esbuild bundle(@stdlib/utils@0.2.1/constructor-name) denonext production */
import * as __0$ from "/v135/@stdlib/regexp@0.2.1/denonext/function-name.js";
import * as __1$ from "/v135/@stdlib/assert@0.2.1/denonext/is-buffer.js";
import * as __2$ from "/v135/@stdlib/assert@0.2.1/denonext/has-tostringtag-support.js";
import * as __3$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
import * as __4$ from "/v135/@stdlib/symbol@0.2.1/denonext/ctor.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/regexp/function-name":return e(__0$);case"@stdlib/assert/is-buffer":return e(__1$);case"@stdlib/assert/has-tostringtag-support":return e(__2$);case"@stdlib/assert/has-own-property":return e(__3$);case"@stdlib/symbol/ctor":return e(__4$);default:throw new Error("module \""+n+"\" not found");}};
var P=Object.create;var f=Object.defineProperty;var R=Object.getOwnPropertyDescriptor;var G=Object.getOwnPropertyNames;var N=Object.getPrototypeOf,X=Object.prototype.hasOwnProperty;var n=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var a=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),k=(r,t)=>{for(var e in t)f(r,e,{get:t[e],enumerable:!0})},l=(r,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let u of G(t))!X.call(r,u)&&u!==e&&f(r,u,{get:()=>t[u],enumerable:!(i=R(t,u))||i.enumerable});return r},s=(r,t,e)=>(l(r,t,"default"),e&&l(e,t,"default")),g=(r,t,e)=>(e=r!=null?P(N(r)):{},l(t||!r||!r.__esModule?f(e,"default",{value:r,enumerable:!0}):e,r));var p=a((tr,x)=>{"use strict";var z=Object.prototype.toString;x.exports=z});var d=a((er,S)=>{"use strict";var A=p();function D(r){return A.call(r)}S.exports=D});var T=a((ir,_)=>{"use strict";var y=n("@stdlib/symbol/ctor"),F=typeof y=="function"?y.toStringTag:"";_.exports=F});var h=a((ar,b)=>{"use strict";var H=n("@stdlib/assert/has-own-property"),c=T(),v=p();function I(r){var t,e,i;if(r==null)return v.call(r);e=r[c],t=H(r,c);try{r[c]=void 0}catch{return v.call(r)}return i=v.call(r),t?r[c]=e:delete r[c],i}b.exports=I});var O=a((or,E)=>{"use strict";var J=n("@stdlib/assert/has-tostringtag-support"),K=d(),L=h(),m;J()?m=L:m=K;E.exports=m});var j=a((ur,C)=>{"use strict";var M=O(),Q=n("@stdlib/regexp/function-name").REGEXP,U=n("@stdlib/assert/is-buffer");function V(r){var t,e,i;if(e=M(r).slice(8,-1),(e==="Object"||e==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(t=Q.exec(i.toString()),t)return t[1]}return U(r)?"Buffer":e}C.exports=V});var q=a((sr,w)=>{"use strict";var W=j();w.exports=W});var o={};k(o,{default:()=>$});var Y=g(q());s(o,g(q()));var{default:B,...Z}=Y,$=B!==void 0?B:Z;export{$ as default};
/*! Bundled license information:

@stdlib/utils/native-class/lib/tostring.js:
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

@stdlib/utils/native-class/lib/main.js:
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

@stdlib/utils/native-class/lib/tostringtag.js:
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

@stdlib/utils/native-class/lib/polyfill.js:
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

@stdlib/utils/native-class/lib/index.js:
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

@stdlib/utils/constructor-name/lib/main.js:
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

@stdlib/utils/constructor-name/lib/index.js:
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
//# sourceMappingURL=constructor-name.js.map