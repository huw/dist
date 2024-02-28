/* esm.sh - esbuild bundle(@stdlib/utils@0.2.1/define-property) denonext production */
import * as __0$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/string/format":return e(__0$);default:throw new Error("module \""+n+"\" not found");}};
var b=Object.create;var v=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var T=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var F=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var l=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),z=(e,t)=>{for(var r in t)v(e,r,{get:t[r],enumerable:!0})},s=(e,t,r,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of D(t))!C.call(e,a)&&a!==r&&v(e,a,{get:()=>t[a],enumerable:!(u=A(t,a))||u.enumerable});return e},i=(e,t,r)=>(s(e,t,"default"),r&&s(r,t,"default")),p=(e,t,r)=>(r=e!=null?b(T(e)):{},s(t||!e||!e.__esModule?v(r,"default",{value:e,enumerable:!0}):r,e));var m=l((Z,d)=>{"use strict";var B=typeof Object.defineProperty=="function"?Object.defineProperty:null;d.exports=B});var h=l(($,P)=>{"use strict";var H=m();function I(){try{return H({},"x",{}),!0}catch{return!1}}P.exports=I});var x=l((j,S)=>{"use strict";var J=Object.defineProperty;S.exports=J});var O=l((ee,k)=>{"use strict";var g=F("@stdlib/string/format"),o=Object.prototype,w=o.toString,q=o.__defineGetter__,G=o.__defineSetter__,K=o.__lookupGetter__,L=o.__lookupSetter__;function M(e,t,r){var u,a,f,_;if(typeof e!="object"||e===null||w.call(e)==="[object Array]")throw new TypeError(g("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof r!="object"||r===null||w.call(r)==="[object Array]")throw new TypeError(g("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if(a="value"in r,a&&(K.call(e,t)||L.call(e,t)?(u=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=u):e[t]=r.value),f="get"in r,_="set"in r,a&&(f||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&q&&q.call(e,t,r.get),_&&G&&G.call(e,t,r.set),e}k.exports=M});var c=l((te,E)=>{"use strict";var N=h(),Q=x(),R=O(),y;N()?y=Q:y=R;E.exports=y});var n={};z(n,{default:()=>X});var U=p(c());i(n,p(c()));var{default:V,...W}=U,X=V!==void 0?V:W;export{X as default};
/*! Bundled license information:

@stdlib/utils/define-property/lib/define_property.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
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

@stdlib/utils/define-property/lib/has_define_property_support.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
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

@stdlib/utils/define-property/lib/builtin.js:
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

@stdlib/utils/define-property/lib/polyfill.js:
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

@stdlib/utils/define-property/lib/index.js:
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
//# sourceMappingURL=define-property.js.map