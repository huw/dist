/* esm.sh - esbuild bundle(@stdlib/utils@0.2.1/enumerable-properties) denonext production */
import * as __0$ from "/v135/@stdlib/assert@0.2.1/denonext/is-enumerable-property.js";
import * as __1$ from "/v135/@stdlib/object@0.2.1/denonext/ctor.js";
import * as __2$ from "/v135/@stdlib/assert@0.2.1/denonext/is-arguments.js";
import * as __3$ from "/v135/@stdlib/assert@0.2.1/denonext/is-object-like.js";
import * as __4$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
import * as __5$ from "/v135/@stdlib/assert@0.2.1/denonext/is-arguments.js";
import * as __6$ from "/v135/@stdlib/assert@0.2.1/denonext/is-enumerable-property.js";
import * as __7$ from "/v135/@stdlib/assert@0.2.1/denonext/is-enumerable-property.js";
import * as __8$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
import * as __9$ from "/v135/@stdlib/regexp@0.2.1/denonext/function-name.js";
import * as __a$ from "/v135/@stdlib/assert@0.2.1/denonext/is-buffer.js";
import * as __b$ from "/v135/@stdlib/assert@0.2.1/denonext/has-tostringtag-support.js";
import * as __c$ from "/v135/@stdlib/assert@0.2.1/denonext/is-nan.js";
import * as __d$ from "/v135/@stdlib/assert@0.2.1/denonext/is-collection.js";
import * as __e$ from "/v135/@stdlib/assert@0.2.1/denonext/is-boolean.js";
import * as __f$ from "/v135/@stdlib/assert@0.2.1/denonext/is-string.js";
import * as __10$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __11$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
import * as __12$ from "/v135/@stdlib/assert@0.2.1/denonext/is-integer.js";
import * as __13$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __14$ from "/v135/@stdlib/symbol@0.2.1/denonext/ctor.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/assert/is-enumerable-property":return e(__0$);case"@stdlib/object/ctor":return e(__1$);case"@stdlib/assert/is-arguments":return e(__2$);case"@stdlib/assert/is-object-like":return e(__3$);case"@stdlib/assert/has-own-property":return e(__4$);case"@stdlib/regexp/function-name":return e(__9$);case"@stdlib/assert/is-buffer":return e(__a$);case"@stdlib/assert/has-tostringtag-support":return e(__b$);case"@stdlib/assert/is-nan":return e(__c$);case"@stdlib/assert/is-collection":return e(__d$);case"@stdlib/assert/is-boolean":return e(__e$);case"@stdlib/assert/is-string":return e(__f$);case"@stdlib/string/format":return e(__10$);case"@stdlib/assert/is-integer":return e(__12$);case"@stdlib/symbol/ctor":return e(__14$);default:throw new Error("module \""+n+"\" not found");}};
var ge=Object.create;var b=Object.defineProperty;var be=Object.getOwnPropertyDescriptor;var me=Object.getOwnPropertyNames;var xe=Object.getPrototypeOf,he=Object.prototype.hasOwnProperty;var u=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(t,i)=>(typeof require<"u"?require:t)[i]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var e=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),de=(r,t)=>{for(var i in t)b(r,i,{get:t[i],enumerable:!0})},g=(r,t,i,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of me(t))!he.call(r,o)&&o!==i&&b(r,o,{get:()=>t[o],enumerable:!(s=be(t,o))||s.enumerable});return r},c=(r,t,i)=>(g(r,t,"default"),i&&g(i,t,"default")),E=(r,t,i)=>(i=r!=null?ge(xe(r)):{},g(t||!r||!r.__esModule?b(i,"default",{value:r,enumerable:!0}):i,r));var y=e((yi,j)=>{"use strict";function we(r){return Object.keys(Object(r))}j.exports=we});var _=e((qi,k)=>{"use strict";var Se=y();function Oe(){return(Se(arguments)||"").length!==2}function Pe(){return Oe(1,2)}k.exports=Pe});var N=e((gi,T)=>{"use strict";var Ee=typeof Object.keys<"u";T.exports=Ee});var B=e((bi,C)=>{"use strict";var je=u("@stdlib/assert/is-arguments"),A=y(),ke=Array.prototype.slice;function _e(r){return je(r)?A(ke.call(r)):A(r)}C.exports=_e});var U=e((mi,L)=>{"use strict";function Te(){}L.exports=Te});var H=e((xi,G)=>{"use strict";var Ne=U();G.exports=Ne});var I=e((hi,R)=>{"use strict";var Ae=u("@stdlib/assert/is-enumerable-property"),Ce=H(),Be=Ae(Ce,"prototype");R.exports=Be});var D=e((di,W)=>{"use strict";var Le=u("@stdlib/assert/is-enumerable-property"),Ue={toString:null},Ge=!Le(Ue,"toString");W.exports=Ge});var V=e((wi,F)=>{"use strict";var M=u("@stdlib/assert/is-nan"),He=u("@stdlib/assert/is-collection"),Re=u("@stdlib/assert/is-string").isPrimitive,Ie=u("@stdlib/assert/is-integer").isPrimitive,X=u("@stdlib/string/format");function We(r,t,i){var s,o;if(!He(r)&&!Re(r))throw new TypeError(X("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(s=r.length,s===0)return-1;if(arguments.length===3){if(!Ie(i))throw new TypeError(X("invalid argument. Third argument must be an integer. Value: `%s`.",i));if(i>=0){if(i>=s)return-1;o=i}else o=s+i,o<0&&(o=0)}else o=0;if(M(t)){for(;o<s;o++)if(M(r[o]))return o}else for(;o<s;o++)if(r[o]===t)return o;return-1}F.exports=We});var K=e((Si,Y)=>{"use strict";var De=V();Y.exports=De});var J=e((Oi,z)=>{"use strict";var Me=/./;z.exports=Me});var Z=e((Pi,Q)=>{"use strict";function Xe(){return new Function("return this;")()}Q.exports=Xe});var rr=e((Ei,$)=>{"use strict";var Fe=typeof self=="object"?self:null;$.exports=Fe});var tr=e((ji,er)=>{"use strict";var Ve=typeof window=="object"?window:null;er.exports=Ve});var or=e((ki,ir)=>{"use strict";var Ye=typeof globalThis=="object"?globalThis:null;ir.exports=Ye});var cr=e((_i,ar)=>{"use strict";var Ke=u("@stdlib/assert/is-boolean").isPrimitive,ze=u("@stdlib/string/format"),Je=Z(),sr=rr(),ur=tr(),nr=or();function Qe(r){if(arguments.length){if(!Ke(r))throw new TypeError(ze("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Je()}if(nr)return nr;if(sr)return sr;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}ar.exports=Qe});var lr=e((Ti,pr)=>{"use strict";var Ze=cr(),fr=Ze(),$e=fr.document&&fr.document.childNodes;pr.exports=$e});var yr=e((Ni,vr)=>{"use strict";var rt=Int8Array;vr.exports=rt});var gr=e((Ai,qr)=>{"use strict";var et=J(),tt=lr(),it=yr();function ot(){return typeof et=="function"||typeof it=="object"||typeof tt=="function"}qr.exports=ot});var m=e((Ci,br)=>{"use strict";var st=Object.prototype.toString;br.exports=st});var xr=e((Bi,mr)=>{"use strict";var ut=m();function nt(r){return ut.call(r)}mr.exports=nt});var wr=e((Li,dr)=>{"use strict";var hr=u("@stdlib/symbol/ctor"),at=typeof hr=="function"?hr.toStringTag:"";dr.exports=at});var Or=e((Ui,Sr)=>{"use strict";var ct=u("@stdlib/assert/has-own-property"),p=wr(),x=m();function ft(r){var t,i,s;if(r==null)return x.call(r);i=r[p],t=ct(r,p);try{r[p]=void 0}catch{return x.call(r)}return s=x.call(r),t?r[p]=i:delete r[p],s}Sr.exports=ft});var Er=e((Gi,Pr)=>{"use strict";var pt=u("@stdlib/assert/has-tostringtag-support"),lt=xr(),vt=Or(),h;pt()?h=vt:h=lt;Pr.exports=h});var kr=e((Hi,jr)=>{"use strict";var yt=Er(),qt=u("@stdlib/regexp/function-name").REGEXP,gt=u("@stdlib/assert/is-buffer");function bt(r){var t,i,s;if(i=yt(r).slice(8,-1),(i==="Object"||i==="Error")&&r.constructor){if(s=r.constructor,typeof s.name=="string")return s.name;if(t=qt.exec(s.toString()),t)return t[1]}return gt(r)?"Buffer":i}jr.exports=bt});var d=e((Ri,_r)=>{"use strict";var mt=kr();_r.exports=mt});var Nr=e((Ii,Tr)=>{"use strict";var xt=d();function ht(r){var t;return r===null?"null":(t=typeof r,t==="object"?xt(r).toLowerCase():t)}Tr.exports=ht});var Cr=e((Wi,Ar)=>{"use strict";var dt=d();function wt(r){return dt(r).toLowerCase()}Ar.exports=wt});var Lr=e((Di,Br)=>{"use strict";var St=gr(),Ot=Nr(),Pt=Cr(),Et=St()?Pt:Ot;Br.exports=Et});var w=e((Mi,Ur)=>{"use strict";function jt(r){return r.constructor&&r.constructor.prototype===r}Ur.exports=jt});var Gr=e((Xi,kt)=>{kt.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var Rr=e((Fi,Hr)=>{"use strict";var _t=typeof window>"u"?void 0:window;Hr.exports=_t});var Mr=e((Vi,Dr)=>{"use strict";var Tt=u("@stdlib/assert/has-own-property"),Nt=K(),Ir=Lr(),At=w(),Ct=Gr(),f=Rr(),Wr;function Bt(){var r;if(Ir(f)==="undefined")return!1;for(r in f)try{Nt(Ct,r)===-1&&Tt(f,r)&&f[r]!==null&&Ir(f[r])==="object"&&At(f[r])}catch{return!0}return!1}Wr=Bt();Dr.exports=Wr});var Fr=e((Yi,Xr)=>{"use strict";var Lt=typeof window<"u";Xr.exports=Lt});var Kr=e((Ki,Yr)=>{"use strict";var Ut=Mr(),Vr=w(),Gt=Fr();function Ht(r){if(Gt===!1&&!Ut)return Vr(r);try{return Vr(r)}catch{return!1}}Yr.exports=Ht});var zr=e((zi,Rt)=>{Rt.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var Zr=e((Ji,Qr)=>{"use strict";var It=u("@stdlib/assert/is-object-like"),S=u("@stdlib/assert/has-own-property"),Wt=u("@stdlib/assert/is-arguments"),Dt=I(),Mt=D(),Xt=Kr(),Jr=zr();function Ft(r){var t,i,s,o,l,v,n;if(o=[],Wt(r)){for(n=0;n<r.length;n++)o.push(n.toString());return o}if(typeof r=="string"){if(r.length>0&&!S(r,"0"))for(n=0;n<r.length;n++)o.push(n.toString())}else{if(s=typeof r=="function",s===!1&&!It(r))return o;i=Dt&&s}for(l in r)!(i&&l==="prototype")&&S(r,l)&&o.push(String(l));if(Mt)for(t=Xt(r),n=0;n<Jr.length;n++)v=Jr[n],!(t&&v==="constructor")&&S(r,v)&&o.push(String(v));return o}Qr.exports=Ft});var re=e((Qi,$r)=>{"use strict";var Vt=_(),Yt=N(),Kt=y(),zt=B(),Jt=Zr(),q;Yt?Vt()?q=zt:q=Kt:q=Jt;$r.exports=q});var te=e((Zi,ee)=>{"use strict";var Qt=re();ee.exports=Qt});var oe=e(($i,ie)=>{"use strict";var Zt=typeof Object.getOwnPropertySymbols<"u";ie.exports=Zt});var ne=e((ro,ue)=>{"use strict";var se=u("@stdlib/object/ctor"),$t=se.getOwnPropertySymbols;function ri(r){return $t(se(r))}ue.exports=ri});var ce=e((eo,ae)=>{"use strict";function ei(){return[]}ae.exports=ei});var pe=e((to,fe)=>{"use strict";var ti=oe(),ii=ne(),oi=ce(),O;ti?O=ii:O=oi;fe.exports=O});var ve=e((io,le)=>{"use strict";var si=te(),ui=pe(),ni=u("@stdlib/assert/is-enumerable-property");function ai(r){var t,i,s;for(t=si(r),i=ui(r),s=0;s<i.length;s++)ni(r,i[s])&&t.push(i[s]);return t}le.exports=ai});var P=e((oo,ye)=>{"use strict";var ci=ve();ye.exports=ci});var a={};de(a,{default:()=>li});var fi=E(P());c(a,E(P()));var{default:qe,...pi}=fi,li=qe!==void 0?qe:pi;export{li as default};
/*! Bundled license information:

@stdlib/utils/keys/lib/builtin.js:
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

@stdlib/utils/keys/lib/has_arguments_bug.js:
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

@stdlib/utils/keys/lib/has_builtin.js:
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

@stdlib/utils/keys/lib/builtin_wrapper.js:
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

@stdlib/utils/noop/lib/main.js:
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

@stdlib/utils/noop/lib/index.js:
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

@stdlib/utils/keys/lib/has_enumerable_prototype_bug.js:
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

@stdlib/utils/keys/lib/has_non_enumerable_properties_bug.js:
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

@stdlib/utils/index-of/lib/main.js:
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

@stdlib/utils/index-of/lib/index.js:
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

@stdlib/utils/keys/lib/is_constructor_prototype.js:
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

@stdlib/utils/keys/lib/window.js:
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

@stdlib/utils/keys/lib/has_automation_equality_bug.js:
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

@stdlib/utils/keys/lib/has_window.js:
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

@stdlib/utils/keys/lib/is_constructor_prototype_wrapper.js:
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

@stdlib/utils/keys/lib/polyfill.js:
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

@stdlib/utils/keys/lib/main.js:
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

@stdlib/utils/keys/lib/index.js:
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

@stdlib/utils/property-symbols/lib/has_builtin.js:
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

@stdlib/utils/property-symbols/lib/builtin.js:
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

@stdlib/utils/property-symbols/lib/polyfill.js:
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

@stdlib/utils/property-symbols/lib/index.js:
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

@stdlib/utils/enumerable-properties/lib/main.js:
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

@stdlib/utils/enumerable-properties/lib/index.js:
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
//# sourceMappingURL=enumerable-properties.js.map