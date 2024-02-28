/* esm.sh - esbuild bundle(@stdlib/complex@0.2.1/float64) denonext production */
import * as __0$ from "/v135/@stdlib/assert@0.2.1/denonext/is-number.js";
import * as __1$ from "/v135/@stdlib/utils@0.2.1/denonext/define-property.js";
import * as __2$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __3$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/assert/is-number":return e(__0$);case"@stdlib/utils/define-property":return e(__1$);case"@stdlib/utils/define-nonenumerable-read-only-property":return e(__2$);case"@stdlib/string/format":return e(__3$);default:throw new Error("module \""+n+"\" not found");}};
var g=Object.create;var p=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var O=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty;var a=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,t)=>(typeof require<"u"?require:r)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var l=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),C=(e,r)=>{for(var t in r)p(e,t,{get:r[t],enumerable:!0})},m=(e,r,t,c)=>{if(r&&typeof r=="object"||typeof r=="function")for(let u of O(r))!R.call(e,u)&&u!==t&&p(e,u,{get:()=>r[u],enumerable:!(c=N(r,u))||c.enumerable});return e},n=(e,r,t)=>(m(e,r,"default"),t&&m(t,r,"default")),h=(e,r,t)=>(t=e!=null?g(P(e)):{},m(r||!e||!e.__esModule?p(t,"default",{value:e,enumerable:!0}):t,e));var b=l((z,v)=>{"use strict";function J(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}v.exports=J});var y=l((A,d)=>{"use strict";function L(){var e={};return e.type="Complex128",e.re=this.re,e.im=this.im,e}d.exports=L});var S=l((D,x)=>{"use strict";var E=a("@stdlib/assert/is-number").isPrimitive,w=a("@stdlib/utils/define-property"),s=a("@stdlib/utils/define-nonenumerable-read-only-property"),_=a("@stdlib/string/format"),B=b(),M=y();function i(e,r){if(!(this instanceof i))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!E(e))throw new TypeError(_("invalid argument. Real component must be a number. Value: `%s`.",e));if(!E(r))throw new TypeError(_("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return w(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),w(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}s(i,"BYTES_PER_ELEMENT",8);s(i.prototype,"BYTES_PER_ELEMENT",8);s(i.prototype,"byteLength",16);s(i.prototype,"toString",B);s(i.prototype,"toJSON",M);x.exports=i});var f=l((F,q)=>{"use strict";var V=S();q.exports=V});var o={};C(o,{default:()=>I});var Y=h(f());n(o,h(f()));var{default:T,...k}=Y,I=T!==void 0?T:k;export{I as default};
/*! Bundled license information:

@stdlib/complex/float64/lib/tostring.js:
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

@stdlib/complex/float64/lib/tojson.js:
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

@stdlib/complex/float64/lib/main.js:
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

@stdlib/complex/float64/lib/index.js:
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
//# sourceMappingURL=float64.js.map