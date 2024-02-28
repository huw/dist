/* esm.sh - esbuild bundle(@stdlib/blas@0.2.1/base/gcopy) denonext production */
import * as __0$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __1$ from "/v135/@stdlib/array@0.2.1/denonext/base/arraylike2object.js";
import * as __2$ from "/v135/@stdlib/array@0.2.1/denonext/base/arraylike2object.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/utils/define-nonenumerable-read-only-property":return e(__0$);case"@stdlib/array/base/arraylike2object":return e(__1$);default:throw new Error("module \""+n+"\" not found");}};
var H=Object.create;var P=Object.defineProperty;var I=Object.getOwnPropertyDescriptor;var J=Object.getOwnPropertyNames;var K=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty;var j=(a=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(a,{get:(r,c)=>(typeof require<"u"?require:r)[c]}):a)(function(a){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+a+'" is not supported')});var _=(a,r)=>()=>(r||a((r={exports:{}}).exports,r),r.exports),Q=(a,r)=>{for(var c in r)P(a,c,{get:r[c],enumerable:!0})},g=(a,r,c,u)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of J(r))!L.call(a,e)&&e!==c&&P(a,e,{get:()=>r[e],enumerable:!(u=I(r,e))||u.enumerable});return a},m=(a,r,c)=>(g(a,r,"default"),c&&g(c,r,"default")),R=(a,r,c)=>(c=a!=null?H(K(a)):{},g(r||!a||!a.__esModule?P(c,"default",{value:a,enumerable:!0}):c,a));var k=_((N,h)=>{"use strict";function S(a,r,c,u,e,t,n){var v,f,s,o,l,i,b;for(v=r.data,f=e.data,o=r.accessors[0],s=e.accessors[1],l=u,i=n,b=0;b<a;b++)s(f,i,o(v,l)),l+=c,i+=t;return r}h.exports=S});var A=_((y,z)=>{"use strict";var w=j("@stdlib/array/base/arraylike2object"),T=k(),M=8;function U(a,r,c,u,e){var t,n,v,f,s,o;if(a<=0)return u;if(v=w(r),f=w(u),v.accessorProtocol||f.accessorProtocol)return c<0?t=(1-a)*c:t=0,e<0?n=(1-a)*e:n=0,T(a,v,c,t,f,e,n),f.data;if(c===1&&e===1){if(s=a%M,s>0)for(o=0;o<s;o++)u[o]=r[o];if(a<M)return u;for(o=s;o<a;o+=M)u[o]=r[o],u[o+1]=r[o+1],u[o+2]=r[o+2],u[o+3]=r[o+3],u[o+4]=r[o+4],u[o+5]=r[o+5],u[o+6]=r[o+6],u[o+7]=r[o+7];return u}for(c<0?t=(1-a)*c:t=0,e<0?n=(1-a)*e:n=0,o=0;o<a;o++)u[n]=r[t],t+=c,n+=e;return u}z.exports=U});var D=_((rr,C)=>{"use strict";var B=j("@stdlib/array/base/arraylike2object"),V=k(),q=8;function W(a,r,c,u,e,t,n){var v,f,s,o,l,i;if(a<=0)return e;if(s=B(r),o=B(e),s.accessorProtocol||o.accessorProtocol)return V(a,s,c,u,o,t,n),o.data;if(v=u,f=n,c===1&&t===1){if(l=a%q,l>0)for(i=0;i<l;i++)e[f]=r[v],v+=c,f+=t;if(a<q)return e;for(i=l;i<a;i+=q)e[f]=r[v],e[f+1]=r[v+1],e[f+2]=r[v+2],e[f+3]=r[v+3],e[f+4]=r[v+4],e[f+5]=r[v+5],e[f+6]=r[v+6],e[f+7]=r[v+7],v+=q,f+=q;return e}for(i=0;i<a;i++)e[f]=r[v],v+=c,f+=t;return e}C.exports=W});var O=_((ar,F)=>{"use strict";var Z=j("@stdlib/utils/define-nonenumerable-read-only-property"),E=A(),$=D();Z(E,"ndarray",$);F.exports=E});var p={};Q(p,{default:()=>X});var d=R(O());m(p,R(O()));var{default:G,...x}=d,X=G!==void 0?G:x;export{X as default};
/*! Bundled license information:

@stdlib/blas/base/gcopy/lib/accessors.js:
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

@stdlib/blas/base/gcopy/lib/main.js:
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

@stdlib/blas/base/gcopy/lib/ndarray.js:
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

@stdlib/blas/base/gcopy/lib/index.js:
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
//# sourceMappingURL=gcopy.js.map