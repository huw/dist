/* esm.sh - esbuild bundle(@stdlib/utils@0.2.1/define-nonenumerable-read-only-accessor) denonext production */
import * as __0$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/string/format":return e(__0$);default:throw new Error("module \""+n+"\" not found");}};
var C=Object.create;var c=Object.defineProperty;var F=Object.getOwnPropertyDescriptor;var N=Object.getOwnPropertyNames;var R=Object.getPrototypeOf,z=Object.prototype.hasOwnProperty;var B=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,t)=>(typeof require<"u"?require:r)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var n=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),H=(e,r)=>{for(var t in r)c(e,t,{get:r[t],enumerable:!0})},_=(e,r,t,l)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of N(r))!z.call(e,a)&&a!==t&&c(e,a,{get:()=>r[a],enumerable:!(l=F(r,a))||l.enumerable});return e},u=(e,r,t)=>(_(e,r,"default"),t&&_(t,r,"default")),y=(e,r,t)=>(t=e!=null?C(R(e)):{},_(r||!e||!e.__esModule?c(t,"default",{value:e,enumerable:!0}):t,e));var m=n((ne,d)=>{"use strict";var I=typeof Object.defineProperty=="function"?Object.defineProperty:null;d.exports=I});var h=n((ie,P)=>{"use strict";var J=m();function K(){try{return J({},"x",{}),!0}catch{return!1}}P.exports=K});var g=n((ue,x)=>{"use strict";var L=Object.defineProperty;x.exports=L});var O=n((oe,G)=>{"use strict";var S=B("@stdlib/string/format"),o=Object.prototype,q=o.toString,w=o.__defineGetter__,b=o.__defineSetter__,M=o.__lookupGetter__,Q=o.__lookupSetter__;function U(e,r,t){var l,a,f,s;if(typeof e!="object"||e===null||q.call(e)==="[object Array]")throw new TypeError(S("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof t!="object"||t===null||q.call(t)==="[object Array]")throw new TypeError(S("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(a="value"in t,a&&(M.call(e,r)||Q.call(e,r)?(l=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),f="get"in t,s="set"in t,a&&(f||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&w&&w.call(e,r,t.get),s&&b&&b.call(e,r,t.set),e}G.exports=U});var E=n((le,k)=>{"use strict";var W=h(),X=g(),Y=O(),v;W()?v=X:v=Y;k.exports=v});var V=n((fe,A)=>{"use strict";var Z=E();function $(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,get:t})}A.exports=$});var p=n((se,D)=>{"use strict";var j=V();D.exports=j});var i={};H(i,{default:()=>te});var ee=y(p());u(i,y(p()));var{default:T,...re}=ee,te=T!==void 0?T:re;export{te as default};
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

@stdlib/utils/define-nonenumerable-read-only-accessor/lib/main.js:
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

@stdlib/utils/define-nonenumerable-read-only-accessor/lib/index.js:
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
//# sourceMappingURL=define-nonenumerable-read-only-accessor.js.map