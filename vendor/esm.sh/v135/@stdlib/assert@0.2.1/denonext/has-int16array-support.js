/* esm.sh - esbuild bundle(@stdlib/assert@0.2.1/has-int16array-support) denonext production */
import * as __0$ from "/v135/@stdlib/constants@0.2.1/denonext/int16/max.js";
import * as __1$ from "/v135/@stdlib/constants@0.2.1/denonext/int16/min.js";
import * as __2$ from "/v135/@stdlib/utils@0.2.1/denonext/native-class.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/constants/int16/max":return e(__0$);case"@stdlib/constants/int16/min":return e(__1$);case"@stdlib/utils/native-class":return e(__2$);default:throw new Error("module \""+n+"\" not found");}};
var N=Object.create;var i=Object.defineProperty;var M=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var T=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var f=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var o=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),w=(r,t)=>{for(var e in t)i(r,e,{get:t[e],enumerable:!0})},u=(r,t,e,c)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of S(t))!j.call(r,s)&&s!==e&&i(r,s,{get:()=>t[s],enumerable:!(c=M(t,s))||c.enumerable});return r},n=(r,t,e)=>(u(r,t,"default"),e&&u(e,t,"default")),p=(r,t,e)=>(e=r!=null?N(T(r)):{},u(t||!r||!r.__esModule?i(e,"default",{value:r,enumerable:!0}):e,r));var A=o((O,I)=>{"use strict";var C=f("@stdlib/utils/native-class"),G=typeof Int16Array=="function";function X(r){return G&&r instanceof Int16Array||C(r)==="[object Int16Array]"}I.exports=X});var v=o((P,l)=>{"use strict";var g=A();l.exports=g});var q=o((Q,_)=>{"use strict";var k=typeof Int16Array=="function"?Int16Array:null;_.exports=k});var m=o((R,d)=>{"use strict";var z=v(),B=f("@stdlib/constants/int16/max"),D=f("@stdlib/constants/int16/min"),x=q();function E(){var r,t;if(typeof x!="function")return!1;try{t=new x([1,3.14,-3.14,B+1]),r=z(t)&&t[0]===1&&t[1]===3&&t[2]===-3&&t[3]===D}catch{r=!1}return r}d.exports=E});var y=o((U,h)=>{"use strict";var F=m();h.exports=F});var a={};w(a,{default:()=>K});var H=p(y());n(a,p(y()));var{default:b,...J}=H,K=b!==void 0?b:J;export{K as default};
/*! Bundled license information:

@stdlib/assert/is-int16array/lib/main.js:
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

@stdlib/assert/is-int16array/lib/index.js:
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

@stdlib/assert/has-int16array-support/lib/int16array.js:
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

@stdlib/assert/has-int16array-support/lib/main.js:
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

@stdlib/assert/has-int16array-support/lib/index.js:
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
//# sourceMappingURL=has-int16array-support.js.map