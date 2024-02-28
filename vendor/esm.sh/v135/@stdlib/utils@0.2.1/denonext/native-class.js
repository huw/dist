/* esm.sh - esbuild bundle(@stdlib/utils@0.2.1/native-class) denonext production */
import * as __0$ from "/v135/@stdlib/assert@0.2.1/denonext/has-tostringtag-support.js";
import * as __1$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
import * as __2$ from "/v135/@stdlib/symbol@0.2.1/denonext/ctor.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/assert/has-tostringtag-support":return e(__0$);case"@stdlib/assert/has-own-property":return e(__1$);case"@stdlib/symbol/ctor":return e(__2$);default:throw new Error("module \""+n+"\" not found");}};
var C=Object.create;var c=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var k=Object.getPrototypeOf,z=Object.prototype.hasOwnProperty;var f=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var s=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),A=(r,t)=>{for(var e in t)c(r,e,{get:t[e],enumerable:!0})},n=(r,t,e,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of P(t))!z.call(r,i)&&i!==e&&c(r,i,{get:()=>t[i],enumerable:!(u=j(t,i))||u.enumerable});return r},o=(r,t,e)=>(n(r,t,"default"),e&&n(e,t,"default")),S=(r,t,e)=>(e=r!=null?C(k(r)):{},n(t||!r||!r.__esModule?c(e,"default",{value:r,enumerable:!0}):e,r));var p=s((R,q)=>{"use strict";var B=Object.prototype.toString;q.exports=B});var m=s((U,x)=>{"use strict";var D=p();function E(r){return D.call(r)}x.exports=E});var T=s((V,y)=>{"use strict";var _=f("@stdlib/symbol/ctor"),F=typeof _=="function"?_.toStringTag:"";y.exports=F});var h=s((W,b)=>{"use strict";var G=f("@stdlib/assert/has-own-property"),l=T(),d=p();function H(r){var t,e,u;if(r==null)return d.call(r);e=r[l],t=G(r,l);try{r[l]=void 0}catch{return d.call(r)}return u=d.call(r),t?r[l]=e:delete r[l],u}b.exports=H});var v=s((X,O)=>{"use strict";var I=f("@stdlib/assert/has-tostringtag-support"),J=m(),K=h(),g;I()?g=K:g=J;O.exports=g});var a={};A(a,{default:()=>N});var L=S(v());o(a,S(v()));var{default:w,...M}=L,N=w!==void 0?w:M;export{N as default};
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
*/
//# sourceMappingURL=native-class.js.map