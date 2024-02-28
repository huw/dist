/* esm.sh - esbuild bundle(@stdlib/utils@0.2.1/define-nonenumerable-read-only-property) denonext production */
import * as __0$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/string/format":return e(__0$);default:throw new Error("module \""+n+"\" not found");}};
var C=Object.create;var v=Object.defineProperty;var F=Object.getOwnPropertyDescriptor;var N=Object.getOwnPropertyNames;var R=Object.getPrototypeOf,z=Object.prototype.hasOwnProperty;var B=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,t)=>(typeof require<"u"?require:r)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var n=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),H=(e,r)=>{for(var t in r)v(e,t,{get:r[t],enumerable:!0})},_=(e,r,t,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of N(r))!z.call(e,a)&&a!==t&&v(e,a,{get:()=>r[a],enumerable:!(o=F(r,a))||o.enumerable});return e},u=(e,r,t)=>(_(e,r,"default"),t&&_(t,r,"default")),y=(e,r,t)=>(t=e!=null?C(R(e)):{},_(r||!e||!e.__esModule?v(t,"default",{value:e,enumerable:!0}):t,e));var m=n((ne,d)=>{"use strict";var I=typeof Object.defineProperty=="function"?Object.defineProperty:null;d.exports=I});var h=n((ie,P)=>{"use strict";var J=m();function K(){try{return J({},"x",{}),!0}catch{return!1}}P.exports=K});var S=n((ue,x)=>{"use strict";var L=Object.defineProperty;x.exports=L});var O=n((le,G)=>{"use strict";var g=B("@stdlib/string/format"),l=Object.prototype,w=l.toString,q=l.__defineGetter__,b=l.__defineSetter__,M=l.__lookupGetter__,Q=l.__lookupSetter__;function U(e,r,t){var o,a,f,s;if(typeof e!="object"||e===null||w.call(e)==="[object Array]")throw new TypeError(g("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof t!="object"||t===null||w.call(t)==="[object Array]")throw new TypeError(g("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(a="value"in t,a&&(M.call(e,r)||Q.call(e,r)?(o=e.__proto__,e.__proto__=l,delete e[r],e[r]=t.value,e.__proto__=o):e[r]=t.value),f="get"in t,s="set"in t,a&&(f||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&q&&q.call(e,r,t.get),s&&b&&b.call(e,r,t.set),e}G.exports=U});var E=n((oe,k)=>{"use strict";var W=h(),X=S(),Y=O(),c;W()?c=X:c=Y;k.exports=c});var A=n((fe,V)=>{"use strict";var Z=E();function $(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}V.exports=$});var p=n((se,D)=>{"use strict";var j=A();D.exports=j});var i={};H(i,{default:()=>te});var ee=y(p());u(i,y(p()));var{default:T,...re}=ee,te=T!==void 0?T:re;export{te as default};
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

@stdlib/utils/define-nonenumerable-read-only-property/lib/main.js:
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

@stdlib/utils/define-nonenumerable-read-only-property/lib/index.js:
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
//# sourceMappingURL=define-nonenumerable-read-only-property.js.map