/* esm.sh - esbuild bundle(@stdlib/buffer@0.2.1/from-buffer) denonext production */
import * as __0$ from "/v135/@stdlib/assert@0.2.1/denonext/is-buffer.js";
import * as __1$ from "/v135/@stdlib/assert@0.2.1/denonext/is-function.js";
import * as __2$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __3$ from "/v135/@stdlib/assert@0.2.1/denonext/is-buffer.js";
import * as __4$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __5$ from "/v135/@stdlib/assert@0.2.1/denonext/has-node-buffer-support.js";
import * as __6$ from "node:buffer";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/assert/is-buffer":return e(__0$);case"@stdlib/assert/is-function":return e(__1$);case"@stdlib/string/format":return e(__2$);case"@stdlib/assert/has-node-buffer-support":return e(__5$);case"buffer":return e(__6$);default:throw new Error("module \""+n+"\" not found");}};
var N=Object.create;var v=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var k=Object.getPrototypeOf,z=Object.prototype.hasOwnProperty;var u=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),A=(r,e)=>{for(var t in e)v(r,t,{get:e[t],enumerable:!0})},n=(r,e,t,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of j(e))!z.call(r,a)&&a!==t&&v(r,a,{get:()=>e[a],enumerable:!(c=S(e,a))||c.enumerable});return r},f=(r,e,t)=>(n(r,e,"default"),t&&n(t,e,"default")),q=(r,e,t)=>(t=r!=null?N(k(r)):{},n(e||!r||!r.__esModule?v(t,"default",{value:r,enumerable:!0}):t,r));var B=i((ir,d)=>{"use strict";var C=u("buffer").Buffer;d.exports=C});var w=i((or,x)=>{"use strict";function D(){throw new Error("not implemented")}x.exports=D});var s=i((fr,y)=>{"use strict";var G=u("@stdlib/assert/has-node-buffer-support"),H=B(),I=w(),l;G()?l=H:l=I;y.exports=l});var h=i((ar,_)=>{"use strict";var J=u("@stdlib/assert/is-function"),K=s(),L=J(K.from);_.exports=L});var g=i((sr,E)=>{"use strict";var O=u("@stdlib/assert/is-buffer"),P=u("@stdlib/string/format"),Q=s();function R(r){if(!O(r))throw new TypeError(P("invalid argument. Must provide a Buffer. Value: `%s`.",r));return Q.from(r)}E.exports=R});var M=i((nr,F)=>{"use strict";var U=u("@stdlib/assert/is-buffer"),W=u("@stdlib/string/format"),X=s();function Y(r){if(!U(r))throw new TypeError(W("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new X(r)}F.exports=Y});var m=i((vr,T)=>{"use strict";var Z=h(),$=g(),b=M(),p;Z?p=$:p=b;T.exports=p});var o={};A(o,{default:()=>tr});var rr=q(m());f(o,q(m()));var{default:V,...er}=rr,tr=V!==void 0?V:er;export{tr as default};
/*! Bundled license information:

@stdlib/buffer/ctor/lib/main.js:
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

@stdlib/buffer/ctor/lib/polyfill.js:
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

@stdlib/buffer/ctor/lib/index.js:
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

@stdlib/buffer/from-buffer/lib/has_from.js:
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

@stdlib/buffer/from-buffer/lib/main.js:
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

@stdlib/buffer/from-buffer/lib/polyfill.js:
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

@stdlib/buffer/from-buffer/lib/index.js:
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
//# sourceMappingURL=from-buffer.js.map