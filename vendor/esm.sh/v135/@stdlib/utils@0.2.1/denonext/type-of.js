/* esm.sh - esbuild bundle(@stdlib/utils@0.2.1/type-of) denonext production */
import * as __0$ from "/v135/@stdlib/regexp@0.2.1/denonext/function-name.js";
import * as __1$ from "/v135/@stdlib/assert@0.2.1/denonext/is-buffer.js";
import * as __2$ from "/v135/@stdlib/assert@0.2.1/denonext/has-tostringtag-support.js";
import * as __3$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
import * as __4$ from "/v135/@stdlib/symbol@0.2.1/denonext/ctor.js";
import * as __5$ from "/v135/@stdlib/assert@0.2.1/denonext/is-boolean.js";
import * as __6$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/regexp/function-name":return e(__0$);case"@stdlib/assert/is-buffer":return e(__1$);case"@stdlib/assert/has-tostringtag-support":return e(__2$);case"@stdlib/assert/has-own-property":return e(__3$);case"@stdlib/symbol/ctor":return e(__4$);case"@stdlib/assert/is-boolean":return e(__5$);case"@stdlib/string/format":return e(__6$);default:throw new Error("module \""+n+"\" not found");}};
var ur=Object.create;var f=Object.defineProperty;var ar=Object.getOwnPropertyDescriptor;var sr=Object.getOwnPropertyNames;var nr=Object.getPrototypeOf,lr=Object.prototype.hasOwnProperty;var u=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),cr=(r,e)=>{for(var t in e)f(r,t,{get:e[t],enumerable:!0})},c=(r,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of sr(e))!lr.call(r,s)&&s!==t&&f(r,s,{get:()=>e[s],enumerable:!(o=ar(e,s))||o.enumerable});return r},n=(r,e,t)=>(c(r,e,"default"),t&&c(t,e,"default")),x=(r,e,t)=>(t=r!=null?ur(nr(r)):{},c(e||!r||!r.__esModule?f(t,"default",{value:r,enumerable:!0}):t,r));var d=i(($r,m)=>{"use strict";var fr=/./;m.exports=fr});var h=i((re,g)=>{"use strict";function pr(){return new Function("return this;")()}g.exports=pr});var j=i((ee,w)=>{"use strict";var vr=typeof self=="object"?self:null;w.exports=vr});var T=i((te,S)=>{"use strict";var qr=typeof window=="object"?window:null;S.exports=qr});var O=i((ie,E)=>{"use strict";var yr=typeof globalThis=="object"?globalThis:null;E.exports=yr});var N=i((oe,L)=>{"use strict";var br=u("@stdlib/assert/is-boolean").isPrimitive,xr=u("@stdlib/string/format"),mr=h(),_=j(),C=T(),G=O();function dr(r){if(arguments.length){if(!br(r))throw new TypeError(xr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return mr()}if(G)return G;if(_)return _;if(C)return C;throw new Error("unexpected error. Unable to resolve global object.")}L.exports=dr});var B=i((ue,R)=>{"use strict";var gr=N(),P=gr(),hr=P.document&&P.document.childNodes;R.exports=hr});var A=i((ae,k)=>{"use strict";var wr=Int8Array;k.exports=wr});var I=i((se,F)=>{"use strict";var jr=d(),Sr=B(),Tr=A();function Er(){return typeof jr=="function"||typeof Tr=="object"||typeof Sr=="function"}F.exports=Er});var p=i((ne,M)=>{"use strict";var Or=Object.prototype.toString;M.exports=Or});var V=i((le,U)=>{"use strict";var _r=p();function Cr(r){return _r.call(r)}U.exports=Cr});var z=i((ce,X)=>{"use strict";var W=u("@stdlib/symbol/ctor"),Gr=typeof W=="function"?W.toStringTag:"";X.exports=Gr});var H=i((fe,D)=>{"use strict";var Lr=u("@stdlib/assert/has-own-property"),l=z(),v=p();function Nr(r){var e,t,o;if(r==null)return v.call(r);t=r[l],e=Lr(r,l);try{r[l]=void 0}catch{return v.call(r)}return o=v.call(r),e?r[l]=t:delete r[l],o}D.exports=Nr});var K=i((pe,J)=>{"use strict";var Pr=u("@stdlib/assert/has-tostringtag-support"),Rr=V(),Br=H(),q;Pr()?q=Br:q=Rr;J.exports=q});var Y=i((ve,Q)=>{"use strict";var kr=K(),Ar=u("@stdlib/regexp/function-name").REGEXP,Fr=u("@stdlib/assert/is-buffer");function Ir(r){var e,t,o;if(t=kr(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(o=r.constructor,typeof o.name=="string")return o.name;if(e=Ar.exec(o.toString()),e)return e[1]}return Fr(r)?"Buffer":t}Q.exports=Ir});var y=i((qe,Z)=>{"use strict";var Mr=Y();Z.exports=Mr});var rr=i((ye,$)=>{"use strict";var Ur=y();function Vr(r){var e;return r===null?"null":(e=typeof r,e==="object"?Ur(r).toLowerCase():e)}$.exports=Vr});var tr=i((be,er)=>{"use strict";var Wr=y();function Xr(r){return Wr(r).toLowerCase()}er.exports=Xr});var b=i((xe,ir)=>{"use strict";var zr=I(),Dr=rr(),Hr=tr(),Jr=zr()?Hr:Dr;ir.exports=Jr});var a={};cr(a,{default:()=>Yr});var Kr=x(b());n(a,x(b()));var{default:or,...Qr}=Kr,Yr=or!==void 0?or:Qr;export{Yr as default};
/*! Bundled license information:

@stdlib/utils/type-of/lib/fixtures/re.js:
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

@stdlib/utils/global/lib/codegen.js:
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

@stdlib/utils/global/lib/self.js:
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

@stdlib/utils/global/lib/window.js:
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

@stdlib/utils/global/lib/global_this.js:
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

@stdlib/utils/global/lib/browser.js:
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

@stdlib/utils/type-of/lib/fixtures/nodelist.js:
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

@stdlib/utils/type-of/lib/fixtures/typedarray.js:
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

@stdlib/utils/type-of/lib/check.js:
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

@stdlib/utils/type-of/lib/main.js:
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

@stdlib/utils/type-of/lib/polyfill.js:
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

@stdlib/utils/type-of/lib/index.js:
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
//# sourceMappingURL=type-of.js.map