/* esm.sh - esbuild bundle(@stdlib/utils@0.2.1/function-name) denonext production */
import * as __0$ from "/v135/@stdlib/assert@0.2.1/denonext/is-function.js";
import * as __1$ from "/v135/@stdlib/assert@0.2.1/denonext/has-function-name-support.js";
import * as __2$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __3$ from "/v135/@stdlib/regexp@0.2.1/denonext/function-name.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/assert/is-function":return e(__0$);case"@stdlib/assert/has-function-name-support":return e(__1$);case"@stdlib/string/format":return e(__2$);case"@stdlib/regexp/function-name":return e(__3$);default:throw new Error("module \""+n+"\" not found");}};
var q=Object.create;var s=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var F=Object.getPrototypeOf,N=Object.prototype.hasOwnProperty;var o=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var f=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),S=(r,e)=>{for(var t in e)s(r,t,{get:e[t],enumerable:!0})},n=(r,e,t,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of E(e))!N.call(r,a)&&a!==t&&s(r,a,{get:()=>e[a],enumerable:!(p=x(e,a))||p.enumerable});return r},i=(r,e,t)=>(n(r,e,"default"),t&&n(t,e,"default")),d=(r,e,t)=>(t=r!=null?q(F(r)):{},n(e||!r||!r.__esModule?s(t,"default",{value:r,enumerable:!0}):t,r));var c=f((b,v)=>{"use strict";var g=o("@stdlib/assert/is-function"),h=o("@stdlib/assert/has-function-name-support"),w=o("@stdlib/string/format"),R=o("@stdlib/regexp/function-name").REGEXP,y=h();function G(r){if(g(r)===!1)throw new TypeError(w("invalid argument. Must provide a function. Value: `%s`.",r));return y?r.name:R.exec(r.toString())[1]}v.exports=G});var m=f((j,l)=>{"use strict";var M=c();l.exports=M});var u={};S(u,{default:()=>V});var P=d(m());i(u,d(m()));var{default:_,...T}=P,V=_!==void 0?_:T;export{V as default};
/*! Bundled license information:

@stdlib/utils/function-name/lib/main.js:
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

@stdlib/utils/function-name/lib/index.js:
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
//# sourceMappingURL=function-name.js.map