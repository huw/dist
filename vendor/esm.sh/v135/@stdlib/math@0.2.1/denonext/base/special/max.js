/* esm.sh - esbuild bundle(@stdlib/math@0.2.1/base/special/max) denonext production */
import * as __0$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
import * as __1$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/pinf.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/constants/float64/pinf":return e(__0$);default:throw new Error("module \""+n+"\" not found");}};
var j=Object.create;var a=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var z=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty;var v=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),B=(r,e)=>{for(var t in e)a(r,t,{get:e[t],enumerable:!0})},o=(r,e,t,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of w(e))!A.call(r,n)&&n!==t&&a(r,n,{get:()=>e[n],enumerable:!(p=k(e,n))||p.enumerable});return r},s=(r,e,t)=>(o(r,e,"default"),t&&o(t,e,"default")),m=(r,e,t)=>(t=r!=null?j(z(r)):{},o(e||!r||!r.__esModule?a(t,"default",{value:r,enumerable:!0}):t,r));var d=u((S,q)=>{"use strict";var C=v("@stdlib/constants/float64/pinf");function D(r){return r===0&&1/r===C}q.exports=D});var l=u((T,_)=>{"use strict";var E=d();_.exports=E});var P=u((U,N)=>{"use strict";function G(r){return r!==r}N.exports=G});var I=u((V,F)=>{"use strict";var H=P();F.exports=H});var b=u((W,x)=>{"use strict";var J=l(),Z=I(),f=v("@stdlib/constants/float64/pinf");function K(r,e){return Z(r)||Z(e)?NaN:r===f||e===f?f:r===e&&r===0?J(r)?r:e:r>e?r:e}x.exports=K});var c=u((X,g)=>{"use strict";var L=b();g.exports=L});var i={};B(i,{default:()=>Q});var M=m(c());s(i,m(c()));var{default:h,...O}=M,Q=h!==void 0?h:O;export{Q as default};
/*! Bundled license information:

@stdlib/math/base/assert/is-positive-zero/lib/main.js:
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

@stdlib/math/base/assert/is-positive-zero/lib/index.js:
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

@stdlib/math/base/assert/is-nan/lib/main.js:
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

@stdlib/math/base/assert/is-nan/lib/index.js:
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

@stdlib/math/base/special/max/lib/main.js:
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

@stdlib/math/base/special/max/lib/index.js:
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
//# sourceMappingURL=max.js.map