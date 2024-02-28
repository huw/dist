/* esm.sh - esbuild bundle(@stdlib/random@0.2.1/sample/lib) denonext production */
import * as __0$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __1$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __2$ from "/v135/@stdlib/assert@0.2.1/denonext/is-array-like.js";
import * as __3$ from "/v135/@stdlib/assert@0.2.1/denonext/is-typed-array-like.js";
import * as __4$ from "/v135/@stdlib/assert@0.2.1/denonext/is-string.js";
import * as __5$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __6$ from "/v135/@stdlib/utils@0.2.1/denonext/copy.js";
import * as __7$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __8$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/floor.js";
import * as __9$ from "/v135/@stdlib/assert@0.2.1/denonext/is-nonnegative-integer.js";
import * as __a$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/floor.js";
import * as __b$ from "/v135/@stdlib/assert@0.2.1/denonext/is-unity-probability-array.js";
import * as __c$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/floor.js";
import * as __d$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
import * as __e$ from "/v135/@stdlib/assert@0.2.1/denonext/is-boolean.js";
import * as __f$ from "/v135/@stdlib/assert@0.2.1/denonext/is-plain-object.js";
import * as __10$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __11$ from "/v135/@stdlib/constants@0.2.1/denonext/uint32/max.js";
import * as __12$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/floor.js";
import * as __13$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __14$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-accessor.js";
import * as __15$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-write-accessor.js";
import * as __16$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
import * as __17$ from "/v135/@stdlib/assert@0.2.1/denonext/is-plain-object.js";
import * as __18$ from "/v135/@stdlib/assert@0.2.1/denonext/is-collection.js";
import * as __19$ from "/v135/@stdlib/assert@0.2.1/denonext/is-uint32array.js";
import * as __1a$ from "/v135/@stdlib/assert@0.2.1/denonext/is-boolean.js";
import * as __1b$ from "/v135/@stdlib/assert@0.2.1/denonext/is-positive-integer.js";
import * as __1c$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/max-safe-integer.js";
import * as __1d$ from "/v135/@stdlib/constants@0.2.1/denonext/uint32/max.js";
import * as __1e$ from "/v135/@stdlib/array@0.2.1/denonext/uint32.js";
import * as __1f$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/max.js";
import * as __20$ from "/v135/@stdlib/math@0.2.1/denonext/base/ops/umul.js";
import * as __21$ from "/v135/@stdlib/blas@0.2.1/denonext/base/gcopy.js";
import * as __22$ from "/v135/@stdlib/array@0.2.1/denonext/to-json.js";
import * as __23$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/utils/define-nonenumerable-read-only-property":return e(__0$);case"@stdlib/assert/is-array-like":return e(__2$);case"@stdlib/assert/is-typed-array-like":return e(__3$);case"@stdlib/assert/is-string":return e(__4$);case"@stdlib/string/format":return e(__5$);case"@stdlib/utils/copy":return e(__6$);case"@stdlib/math/base/special/floor":return e(__8$);case"@stdlib/assert/is-nonnegative-integer":return e(__9$);case"@stdlib/assert/is-unity-probability-array":return e(__b$);case"@stdlib/assert/has-own-property":return e(__d$);case"@stdlib/assert/is-boolean":return e(__e$);case"@stdlib/assert/is-plain-object":return e(__f$);case"@stdlib/constants/uint32/max":return e(__11$);case"@stdlib/utils/define-nonenumerable-read-only-accessor":return e(__14$);case"@stdlib/utils/define-nonenumerable-read-write-accessor":return e(__15$);case"@stdlib/assert/is-collection":return e(__18$);case"@stdlib/assert/is-uint32array":return e(__19$);case"@stdlib/assert/is-positive-integer":return e(__1b$);case"@stdlib/constants/float64/max-safe-integer":return e(__1c$);case"@stdlib/array/uint32":return e(__1e$);case"@stdlib/math/base/special/max":return e(__1f$);case"@stdlib/math/base/ops/umul":return e(__20$);case"@stdlib/blas/base/gcopy":return e(__21$);case"@stdlib/array/to-json":return e(__22$);default:throw new Error("module \""+n+"\" not found");}};
var ke=Object.create;var C=Object.defineProperty;var Be=Object.getOwnPropertyDescriptor;var Xe=Object.getOwnPropertyNames;var Ge=Object.getPrototypeOf,Ve=Object.prototype.hasOwnProperty;var s=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,i)=>(typeof require<"u"?require:e)[i]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var w=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),De=(r,e)=>{for(var i in e)C(r,i,{get:e[i],enumerable:!0})},j=(r,e,i,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of Xe(e))!Ve.call(r,t)&&t!==i&&C(r,t,{get:()=>e[t],enumerable:!(a=Be(e,t))||a.enumerable});return r},R=(r,e,i)=>(j(r,e,"default"),i&&j(i,e,"default")),$=(r,e,i)=>(i=r!=null?ke(Ge(r)):{},j(e||!r||!r.__esModule?C(i,"default",{value:r,enumerable:!0}):i,r));var Y=w((Dr,ee)=>{"use strict";var We=s("@stdlib/constants/uint32/max"),He=s("@stdlib/math/base/special/floor"),Je=We-1;function Ke(){var r=He(1+Je*Math.random());return r>>>0}ee.exports=Ke});var H=w((Wr,ve)=>{"use strict";var _=s("@stdlib/utils/define-nonenumerable-read-only-property"),A=s("@stdlib/utils/define-nonenumerable-read-only-accessor"),re=s("@stdlib/utils/define-nonenumerable-read-write-accessor"),k=s("@stdlib/assert/has-own-property"),Ze=s("@stdlib/assert/is-plain-object"),Qe=s("@stdlib/assert/is-collection"),ie=s("@stdlib/assert/is-uint32array"),$e=s("@stdlib/assert/is-boolean").isPrimitive,te=s("@stdlib/assert/is-positive-integer").isPrimitive,se=s("@stdlib/constants/float64/max-safe-integer"),le=s("@stdlib/constants/uint32/max"),y=s("@stdlib/array/uint32"),er=s("@stdlib/math/base/special/max"),W=s("@stdlib/math/base/ops/umul"),M=s("@stdlib/blas/base/gcopy"),rr=s("@stdlib/array/to-json"),T=s("@stdlib/string/format"),ae=Y(),m=624,B=397,ne=le>>>0,ir=19650218,X=2147483648,G=2147483647,tr=1812433253,ar=1664525,nr=1566083941,or=2636928640,ur=4022730752,sr=2567483615,V=[0,sr>>>0],fe=1/(se+1),lr=67108864,fr=2147483648,D=1,vr=se*fe,P=1,z=3,O=2,S=m+3,b=m+5,I=m+6;function oe(r,e){var i;return e?i="option":i="argument",r.length<I+1?new RangeError(T("invalid %s. `state` array has insufficient length.",i)):r[0]!==P?new RangeError(T("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",i,P,r[0])):r[1]!==z?new RangeError(T("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",i,z,r[1])):r[O]!==m?new RangeError(T("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",i,m,r[O])):r[S]!==1?new RangeError(T("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",i,1,r[S])):r[b]!==r.length-I?new RangeError(T("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",i,r.length-I,r[b])):null}function ue(r,e,i){var a;for(r[0]=i>>>0,a=1;a<e;a++)i=r[a-1]>>>0,i=(i^i>>>30)>>>0,r[a]=W(i,tr)+a>>>0;return r}function cr(r,e,i,a){var t,n,l,h;for(n=1,l=0,h=er(e,a);h>0;h--)t=r[n-1]>>>0,t=(t^t>>>30)>>>0,t=W(t,ar)>>>0,r[n]=(r[n]>>>0^t)+i[l]+l>>>0,n+=1,l+=1,n>=e&&(r[0]=r[e-1],n=1),l>=a&&(l=0);for(h=e-1;h>0;h--)t=r[n-1]>>>0,t=(t^t>>>30)>>>0,t=W(t,nr)>>>0,r[n]=(r[n]>>>0^t)-n>>>0,n+=1,n>=e&&(r[0]=r[e-1],n=1);return r[0]=fr,r}function gr(r){var e,i,a,t;for(t=m-B,i=0;i<t;i++)e=r[i]&X|r[i+1]&G,r[i]=r[i+B]^e>>>1^V[e&D];for(a=m-1;i<a;i++)e=r[i]&X|r[i+1]&G,r[i]=r[i-t]^e>>>1^V[e&D];return e=r[a]&X|r[0]&G,r[a]=r[B-1]^e>>>1^V[e&D],r}function pr(r){var e,i,a,t,n,l;if(a={},arguments.length){if(!Ze(r))throw new TypeError(T("invalid argument. Options argument must be an object. Value: `%s`.",r));if(k(r,"copy")&&(a.copy=r.copy,!$e(r.copy)))throw new TypeError(T("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(k(r,"state")){if(i=r.state,a.state=!0,!ie(i))throw new TypeError(T("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i));if(l=oe(i,!0),l)throw l;a.copy===!1?e=i:(e=new y(i.length),M(i.length,i,1,e,1)),i=new y(e.buffer,e.byteOffset+(O+1)*e.BYTES_PER_ELEMENT,m),t=new y(e.buffer,e.byteOffset+(b+1)*e.BYTES_PER_ELEMENT,i[b])}if(t===void 0)if(k(r,"seed"))if(t=r.seed,a.seed=!0,te(t)){if(t>ne)throw new RangeError(T("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",t));t>>>=0}else{if(Qe(t)===!1||t.length<1)throw new TypeError(T("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",t));if(t.length===1){if(t=t[0],!te(t))throw new TypeError(T("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",t));if(t>ne)throw new RangeError(T("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",t));t>>>=0}else n=t.length,e=new y(I+n),e[0]=P,e[1]=z,e[O]=m,e[S]=1,e[S+1]=m,e[b]=n,M.ndarray(n,t,1,0,e,1,b+1),i=new y(e.buffer,e.byteOffset+(O+1)*e.BYTES_PER_ELEMENT,m),t=new y(e.buffer,e.byteOffset+(b+1)*e.BYTES_PER_ELEMENT,n),i=ue(i,m,ir),i=cr(i,m,t,n)}else t=ae()>>>0}else t=ae()>>>0;return i===void 0&&(e=new y(I+1),e[0]=P,e[1]=z,e[O]=m,e[S]=1,e[S+1]=m,e[b]=1,e[b+1]=t,i=new y(e.buffer,e.byteOffset+(O+1)*e.BYTES_PER_ELEMENT,m),t=new y(e.buffer,e.byteOffset+(b+1)*e.BYTES_PER_ELEMENT,1),i=ue(i,m,t)),_(v,"NAME","mt19937"),A(v,"seed",h),A(v,"seedLength",f),re(v,"state",g,o),A(v,"stateLength",c),A(v,"byteLength",E),_(v,"toJSON",p),_(v,"MIN",0),_(v,"MAX",le),_(v,"normalized",d),_(d,"NAME",v.NAME),A(d,"seed",h),A(d,"seedLength",f),re(d,"state",g,o),A(d,"stateLength",c),A(d,"byteLength",E),_(d,"toJSON",p),_(d,"MIN",0),_(d,"MAX",vr),v;function h(){var u=e[b];return M(u,t,1,new y(u),1)}function f(){return e[b]}function c(){return e.length}function E(){return e.byteLength}function g(){var u=e.length;return M(u,e,1,new y(u),1)}function o(u){var q;if(!ie(u))throw new TypeError(T("invalid argument. Must provide a Uint32Array. Value: `%s`.",u));if(q=oe(u,!1),q)throw q;a.copy===!1?a.state&&u.length===e.length?M(u.length,u,1,e,1):(e=u,a.state=!0):(u.length!==e.length&&(e=new y(u.length)),M(u.length,u,1,e,1)),i=new y(e.buffer,e.byteOffset+(O+1)*e.BYTES_PER_ELEMENT,m),t=new y(e.buffer,e.byteOffset+(b+1)*e.BYTES_PER_ELEMENT,e[b])}function p(){var u={};return u.type="PRNG",u.name=v.NAME,u.state=rr(e),u.params=[],u}function v(){var u,q;return q=e[S+1],q>=m&&(i=gr(i),q=0),u=i[q],e[S+1]=q+1,u^=u>>>11,u^=u<<7&or,u^=u<<15&ur,u^=u>>>18,u>>>0}function d(){var u=v()>>>5,q=v()>>>6;return(u*lr+q)*fe}}ve.exports=pr});var ge=w((Hr,ce)=>{"use strict";var Er=H(),hr=Y(),mr=Er({seed:hr()});ce.exports=mr});var he=w((Jr,Ee)=>{"use strict";var dr=s("@stdlib/utils/define-nonenumerable-read-only-property"),pe=ge(),yr=H();dr(pe,"factory",yr);Ee.exports=pe});var de=w((Kr,me)=>{"use strict";var br=s("@stdlib/math/base/special/floor");function Tr(r,e,i){var a,t,n,l;for(n=r.length,t=new Array(e),l=0;l<e;l++)a=br(n*i()),t[l]=r[a];return t}me.exports=Tr});var be=w((Zr,ye)=>{"use strict";function wr(r,e,i,a){var t,n,l,h,f,c,E,g;for(h=r.length,t=new Array(h),f=0;f<h;f++)t[f]=a[f];for(l=new Array(e),f=0;f<e;f++){for(g=i(),n=0,c=0;c<h&&(n+=t[c],!(g<n));c++);for(E=0;E<h;E++)E!==c&&(t[E]/=1-t[c]);t[c]=0,l[f]=r[c]}return l}ye.exports=wr});var we=w((Qr,Te)=>{"use strict";var qr=s("@stdlib/math/base/special/floor"),_r=Array.prototype.slice;function Ar(r,e,i){var a,t,n,l;for(t=r.length,n=t-1;n>0;n--)l=qr(i()*(n+1)),a=r[n],r[n]=r[l],r[l]=a;return _r.call(r,0,e)}Te.exports=Ar});var _e=w(($r,qe)=>{"use strict";var Or=s("@stdlib/math/base/special/floor");function Sr(r,e,i,a){var t,n,l,h,f,c,E,g,o,p;for(l=a.slice(),c=r.length,t=[],n=[],o=0;o<c;o++)l[o]*=c,l[o]<1?t.push(o):n.push(o);for(h=new Array(c),E=new Array(c);t.length!==0&&n.length!==0;)p=t.shift(),g=n.shift(),E[p]=l[p],h[p]=g,l[g]=l[g]+l[p]-1,l[g]<1?t.push(g):n.push(g);for(o=0;o<n.length;o++)E[n[o]]=1;for(o=0;o<t.length;o++)E[t[o]]=1;for(f=new Array(e),o=0;o<e;o++)p=Or(c*i()),i()<E[p]?f[o]=r[p]:f[o]=r[h[p]];return f}qe.exports=Sr});var Ae=w((ei,Nr)=>{Nr.exports={mutate:!1,replace:!0}});var Ne=w((ri,Se)=>{"use strict";var Rr=s("@stdlib/assert/is-nonnegative-integer"),Mr=s("@stdlib/assert/is-unity-probability-array"),x=s("@stdlib/assert/has-own-property"),Oe=s("@stdlib/assert/is-boolean").isPrimitive,Ir=s("@stdlib/assert/is-plain-object"),L=s("@stdlib/string/format");function Lr(r,e){return Ir(e)?x(e,"size")&&(r.size=e.size,!Rr(r.size))?new TypeError(L("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","size",r.size)):x(e,"probs")&&(r.probs=e.probs,!Mr(r.probs))?new TypeError(L("invalid option. `%s` option must be an array of probabilities that sum to one. Option: `%s`.","probs",r.probs)):x(e,"mutate")&&(r.mutate=e.mutate,!Oe(r.mutate))?new TypeError(L("invalid option. `%s` option must be a boolean. Option: `%s`.","mutate",r.mutate)):x(e,"replace")&&(r.replace=e.replace,!Oe(r.replace))?new TypeError(L("invalid option. `%s` option must be a boolean. Option: `%s`.","replace",r.replace)):null:new TypeError(L("invalid argument. Options argument must be an object. Value: `%s`.",e))}Se.exports=Lr});var Z=w((ii,xe)=>{"use strict";var Re=s("@stdlib/utils/define-nonenumerable-read-only-property"),J=s("@stdlib/assert/is-array-like"),K=s("@stdlib/assert/is-typed-array-like"),Me=s("@stdlib/assert/is-string").isPrimitive,F=s("@stdlib/string/format"),Ie=he().factory,Le=s("@stdlib/utils/copy"),Pe=de(),Pr=be(),ze=we(),zr=_e(),xr=Ae(),U=Ne(),Fr=Array.prototype.slice;function Ur(){var r,e,i,a,t,n;if(i=Le(xr),arguments.length===1)J(arguments[0])||K(arguments[0])?e=arguments[0]:(r=arguments[0],t=U(i,r));else if(arguments.length>1){if(e=arguments[0],r=arguments[1],!(J(e)||K(e)))throw new TypeError(F("invalid argument. `%s` argument must be array-like. Value: `%s`.","pool",e));t=U(i,r)}if(t)throw t;return r&&r.seed?a=Ie({seed:r.seed}):a=Ie(),e===void 0?n=l:(Me(e)?e=e.split(""):e=Le(e),n=h),Re(n,"seed",a.seed),Re(n,"PRNG",a),a=a.normalized,n;function l(f,c){var E,g,o,p,v,d;if(!(J(f)||K(f)))throw new TypeError(F("invalid argument. First argument must be array-like. Value: `%s`.",f));if(Me(f)&&(f=f.split("")),p={},arguments.length>1&&(d=U(p,c),d))throw d;if(p.replace===void 0?E=i.replace:E=p.replace,p.probs!==void 0&&(o=p.probs),p.size?v=p.size:i.size?v=i.size:v=f.length,E===!1&&v>f.length)throw new RangeError(F("invalid option. `size` option must be less than or equal to the length of `x` when `replace` is `false`. Option: `%s`.",v));return o?E?zr(f,v,a,o):Pr(f,v,a,o):E?Pe(f,v,a):(g=Fr.call(f),ze(g,v,a))}function h(f){var c,E,g,o,p,v;if(e.length===0)return null;if(g={},arguments.length&&(p=U(g,f),p))throw p;if(g.mutate===void 0?E=i.mutate:E=g.mutate,g.replace===void 0?c=i.replace:c=g.replace,g.size?o=g.size:i.size?o=i.size:o=e.length,c===!1&&o>e.length)throw new RangeError(F("invalid option. `size` option must be less than or equal to the population size when `replace` is `false`. Option: `%s`.",o));return c?Pe(e,o,a):(v=ze(e,o,a),E&&(e=e.slice(o,e.length)),v)}}xe.exports=Ur});var Ue=w((ti,Fe)=>{"use strict";var jr=Z(),Cr=jr();Fe.exports=Cr});var Q=w((ai,Ce)=>{"use strict";var Yr=s("@stdlib/utils/define-nonenumerable-read-only-property"),je=Ue(),kr=Z();Yr(je,"factory",kr);Ce.exports=je});var N={};De(N,{default:()=>Gr});var Br=$(Q());R(N,$(Q()));var{default:Ye,...Xr}=Br,Gr=Ye!==void 0?Ye:Xr;export{Gr as default};
/*! Bundled license information:

@stdlib/random/base/mt19937/lib/rand_uint32.js:
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

@stdlib/random/base/mt19937/lib/factory.js:
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
  *
  *
  * ## Notice
  *
  * The original C code and copyright notice are from the [source implementation][mt19937]. The implementation has been modified for JavaScript.
  *
  * ```text
  * Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
  * All rights reserved.
  *
  * Redistribution and use in source and binary forms, with or without
  * modification, are permitted provided that the following conditions
  * are met:
  *
  *   1. Redistributions of source code must retain the above copyright
  *      notice, this list of conditions and the following disclaimer.
  *
  *   2. Redistributions in binary form must reproduce the above copyright
  *      notice, this list of conditions and the following disclaimer in the
  *      documentation and/or other materials provided with the distribution.
  *
  *   3. The names of its contributors may not be used to endorse or promote
  *      products derived from this software without specific prior written
  *      permission.
  *
  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
  * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
  * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
  * A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
  * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  * ```
  *
  * [mt19937]: http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/MT2002/CODES/mt19937ar.c
  *)

@stdlib/random/base/mt19937/lib/main.js:
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

@stdlib/random/base/mt19937/lib/index.js:
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

@stdlib/random/sample/lib/discrete_uniform.js:
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

@stdlib/random/sample/lib/renormalizing.js:
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

@stdlib/random/sample/lib/fisher_yates.js:
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

@stdlib/random/sample/lib/vose.js:
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

@stdlib/random/sample/lib/validate.js:
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

@stdlib/random/sample/lib/factory.js:
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

@stdlib/random/sample/lib/main.js:
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

@stdlib/random/sample/lib/index.js:
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
//# sourceMappingURL=lib.js.map