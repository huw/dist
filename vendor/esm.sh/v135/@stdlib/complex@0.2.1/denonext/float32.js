/* esm.sh - esbuild bundle(@stdlib/complex@0.2.1/float32) denonext production */
import * as __0$ from "/v135/@stdlib/assert@0.2.1/denonext/is-number.js";
import * as __1$ from "/v135/@stdlib/utils@0.2.1/denonext/define-property.js";
import * as __2$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __3$ from "/v135/@stdlib/number@0.2.1/denonext/float64/base/to-float32.js";
import * as __4$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/assert/is-number":return e(__0$);case"@stdlib/utils/define-property":return e(__1$);case"@stdlib/utils/define-nonenumerable-read-only-property":return e(__2$);case"@stdlib/number/float64/base/to-float32":return e(__3$);case"@stdlib/string/format":return e(__4$);default:throw new Error("module \""+n+"\" not found");}};
var N=Object.create;var p=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var R=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var a=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,t)=>(typeof require<"u"?require:r)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var l=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),J=(e,r)=>{for(var t in r)p(e,t,{get:r[t],enumerable:!0})},m=(e,r,t,v)=>{if(r&&typeof r=="object"||typeof r=="function")for(let u of P(r))!C.call(e,u)&&u!==t&&p(e,u,{get:()=>r[u],enumerable:!(v=O(r,u))||v.enumerable});return e},n=(e,r,t)=>(m(e,r,"default"),t&&m(t,r,"default")),c=(e,r,t)=>(t=e!=null?N(R(e)):{},m(r||!e||!e.__esModule?p(t,"default",{value:e,enumerable:!0}):t,e));var b=l((z,h)=>{"use strict";function L(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}h.exports=L});var y=l((A,d)=>{"use strict";function B(){var e={};return e.type="Complex64",e.re=this.re,e.im=this.im,e}d.exports=B});var S=l((D,x)=>{"use strict";var E=a("@stdlib/assert/is-number").isPrimitive,w=a("@stdlib/utils/define-property"),s=a("@stdlib/utils/define-nonenumerable-read-only-property"),_=a("@stdlib/number/float64/base/to-float32"),q=a("@stdlib/string/format"),M=b(),V=y();function i(e,r){if(!(this instanceof i))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!E(e))throw new TypeError(q("invalid argument. Real component must be a number. Value: `%s`.",e));if(!E(r))throw new TypeError(q("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return w(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:_(e)}),w(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:_(r)}),this}s(i,"BYTES_PER_ELEMENT",4);s(i.prototype,"BYTES_PER_ELEMENT",4);s(i.prototype,"byteLength",8);s(i.prototype,"toString",M);s(i.prototype,"toJSON",V);x.exports=i});var f=l((G,T)=>{"use strict";var Y=S();T.exports=Y});var o={};J(o,{default:()=>I});var k=c(f());n(o,c(f()));var{default:g,...F}=k,I=g!==void 0?g:F;export{I as default};
/*! Bundled license information:

@stdlib/complex/float32/lib/tostring.js:
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

@stdlib/complex/float32/lib/tojson.js:
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

@stdlib/complex/float32/lib/main.js:
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

@stdlib/complex/float32/lib/index.js:
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
//# sourceMappingURL=float32.js.map