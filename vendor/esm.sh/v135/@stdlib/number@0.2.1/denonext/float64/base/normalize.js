/* esm.sh - esbuild bundle(@stdlib/number@0.2.1/float64/base/normalize) denonext production */
import * as __0$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __1$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/smallest-normal.js";
import * as __2$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-infinite.js";
import * as __3$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-nan.js";
import * as __4$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/abs.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/utils/define-nonenumerable-read-only-property":return e(__0$);case"@stdlib/constants/float64/smallest-normal":return e(__1$);case"@stdlib/math/base/assert/is-infinite":return e(__2$);case"@stdlib/math/base/assert/is-nan":return e(__3$);case"@stdlib/math/base/special/abs":return e(__4$);default:throw new Error("module \""+n+"\" not found");}};
var S=Object.create;var q=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var z=Object.getPrototypeOf,M=Object.prototype.hasOwnProperty;var t=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,i)=>(typeof require<"u"?require:e)[i]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var _=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),T=(r,e)=>{for(var i in e)q(r,i,{get:e[i],enumerable:!0})},v=(r,e,i,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of g(e))!M.call(r,s)&&s!==i&&q(r,s,{get:()=>e[s],enumerable:!(n=f(e,s))||n.enumerable});return r},u=(r,e,i)=>(v(r,e,"default"),i&&v(i,e,"default")),m=(r,e,i)=>(i=r!=null?S(z(r)):{},v(e||!r||!r.__esModule?q(i,"default",{value:r,enumerable:!0}):i,r));var c=_((G,p)=>{"use strict";var b=t("@stdlib/constants/float64/smallest-normal"),o=t("@stdlib/math/base/assert/is-infinite"),y=t("@stdlib/math/base/assert/is-nan"),C=t("@stdlib/math/base/special/abs"),E=4503599627370496;function F(r,e,i,n){return y(r)||o(r)?(e[n]=r,e[n+i]=0,e):r!==0&&C(r)<b?(e[n]=r*E,e[n+i]=-52,e):(e[n]=r,e[n+i]=0,e)}p.exports=F});var A=_((H,d)=>{"use strict";var I=c();function N(r){return I(r,[0,0],1,0)}d.exports=N});var l=_((J,O)=>{"use strict";var h=t("@stdlib/utils/define-nonenumerable-read-only-property"),L=A(),j=c();h(L,"assign",j);O.exports=L});var a={};T(a,{default:()=>B});var k=m(l());u(a,m(l()));var{default:R,...w}=k,B=R!==void 0?R:w;export{B as default};
/*! Bundled license information:

@stdlib/number/float64/base/normalize/lib/assign.js:
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

@stdlib/number/float64/base/normalize/lib/main.js:
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

@stdlib/number/float64/base/normalize/lib/index.js:
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
//# sourceMappingURL=normalize.js.map