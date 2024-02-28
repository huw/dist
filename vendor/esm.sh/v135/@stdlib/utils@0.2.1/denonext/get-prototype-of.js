/* esm.sh - esbuild bundle(@stdlib/utils@0.2.1/get-prototype-of) denonext production */
import * as __0$ from "/v135/@stdlib/object@0.2.1/denonext/ctor.js";
import * as __1$ from "/v135/@stdlib/assert@0.2.1/denonext/is-function.js";
import * as __2$ from "/v135/@stdlib/assert@0.2.1/denonext/has-tostringtag-support.js";
import * as __3$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
import * as __4$ from "/v135/@stdlib/symbol@0.2.1/denonext/ctor.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/object/ctor":return e(__0$);case"@stdlib/assert/is-function":return e(__1$);case"@stdlib/assert/has-tostringtag-support":return e(__2$);case"@stdlib/assert/has-own-property":return e(__3$);case"@stdlib/symbol/ctor":return e(__4$);default:throw new Error("module \""+n+"\" not found");}};
var J=Object.create;var p=Object.defineProperty;var K=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var M=Object.getPrototypeOf,N=Object.prototype.hasOwnProperty;var a=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var o=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),Q=(r,t)=>{for(var e in t)p(r,e,{get:t[e],enumerable:!0})},l=(r,t,e,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let u of L(t))!N.call(r,u)&&u!==e&&p(r,u,{get:()=>t[u],enumerable:!(s=K(t,u))||s.enumerable});return r},n=(r,t,e)=>(l(r,t,"default"),e&&l(e,t,"default")),y=(r,t,e)=>(e=r!=null?J(M(r)):{},l(t||!r||!r.__esModule?p(e,"default",{value:r,enumerable:!0}):e,r));var d=o((yr,O)=>{"use strict";var R=Object.getPrototypeOf;O.exports=R});var f=o((Or,P)=>{"use strict";var U=Object.prototype.toString;P.exports=U});var S=o((dr,_)=>{"use strict";var V=f();function W(r){return V.call(r)}_.exports=W});var T=o((Pr,m)=>{"use strict";var b=a("@stdlib/symbol/ctor"),X=typeof b=="function"?b.toStringTag:"";m.exports=X});var h=o((_r,j)=>{"use strict";var Y=a("@stdlib/assert/has-own-property"),c=T(),g=f();function Z(r){var t,e,s;if(r==null)return g.call(r);e=r[c],t=Y(r,c);try{r[c]=void 0}catch{return g.call(r)}return s=g.call(r),t?r[c]=e:delete r[c],s}j.exports=Z});var w=o((Sr,C)=>{"use strict";var $=a("@stdlib/assert/has-tostringtag-support"),rr=S(),tr=h(),v;$()?v=tr:v=rr;C.exports=v});var k=o((br,F)=>{"use strict";function er(r){return r.__proto__}F.exports=er});var A=o((mr,z)=>{"use strict";var or=w(),ir=k();function ur(r){var t=ir(r);return t||t===null?t:or(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}z.exports=ur});var D=o((Tr,B)=>{"use strict";var nr=a("@stdlib/assert/is-function"),sr=d(),ar=A(),q;nr(Object.getPrototypeOf)?q=sr:q=ar;B.exports=q});var G=o((jr,E)=>{"use strict";var cr=a("@stdlib/object/ctor"),lr=D();function pr(r){return r==null?null:(r=cr(r),lr(r))}E.exports=pr});var x=o((hr,H)=>{"use strict";var fr=G();H.exports=fr});var i={};Q(i,{default:()=>qr});var gr=y(x());n(i,y(x()));var{default:I,...vr}=gr,qr=I!==void 0?I:vr;export{qr as default};
/*! Bundled license information:

@stdlib/utils/get-prototype-of/lib/native.js:
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

@stdlib/utils/get-prototype-of/lib/proto.js:
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

@stdlib/utils/get-prototype-of/lib/polyfill.js:
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

@stdlib/utils/get-prototype-of/lib/detect.js:
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

@stdlib/utils/get-prototype-of/lib/main.js:
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

@stdlib/utils/get-prototype-of/lib/index.js:
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
//# sourceMappingURL=get-prototype-of.js.map