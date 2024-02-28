/* esm.sh - esbuild bundle(@stdlib/random@0.2.1/base/gamma/lib) denonext production */
import * as __0$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __1$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __2$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-accessor.js";
import * as __3$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-write-accessor.js";
import * as __4$ from "/v135/@stdlib/assert@0.2.1/denonext/is-plain-object.js";
import * as __5$ from "/v135/@stdlib/assert@0.2.1/denonext/is-uint32array.js";
import * as __6$ from "/v135/@stdlib/assert@0.2.1/denonext/is-boolean.js";
import * as __7$ from "/v135/@stdlib/assert@0.2.1/denonext/is-function.js";
import * as __8$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
import * as __9$ from "/v135/@stdlib/utils@0.2.1/denonext/constant-function.js";
import * as __a$ from "/v135/@stdlib/utils@0.2.1/denonext/noop.js";
import * as __b$ from "/v135/@stdlib/math@0.2.1/denonext/base/assert/is-nan.js";
import * as __c$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/sqrt.js";
import * as __d$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/pow.js";
import * as __e$ from "/v135/@stdlib/blas@0.2.1/denonext/base/gcopy.js";
import * as __f$ from "/v135/@stdlib/array@0.2.1/denonext/uint32.js";
import * as __10$ from "/v135/@stdlib/array@0.2.1/denonext/to-json.js";
import * as __11$ from "/v135/@stdlib/object@0.2.1/denonext/assign.js";
import * as __12$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __13$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/ln.js";
import * as __14$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __15$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __16$ from "/v135/@stdlib/assert@0.2.1/denonext/is-positive-number.js";
import * as __17$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __18$ from "/v135/@stdlib/constants@0.2.1/denonext/uint32/max.js";
import * as __19$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/floor.js";
import * as __1a$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __1b$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-accessor.js";
import * as __1c$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-write-accessor.js";
import * as __1d$ from "/v135/@stdlib/assert@0.2.1/denonext/is-function.js";
import * as __1e$ from "/v135/@stdlib/assert@0.2.1/denonext/is-plain-object.js";
import * as __1f$ from "/v135/@stdlib/assert@0.2.1/denonext/is-boolean.js";
import * as __20$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
import * as __21$ from "/v135/@stdlib/assert@0.2.1/denonext/is-uint32array.js";
import * as __22$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-property.js";
import * as __23$ from "/v135/@stdlib/utils@0.2.1/denonext/constant-function.js";
import * as __24$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-only-accessor.js";
import * as __25$ from "/v135/@stdlib/utils@0.2.1/denonext/noop.js";
import * as __26$ from "/v135/@stdlib/utils@0.2.1/denonext/define-nonenumerable-read-write-accessor.js";
import * as __27$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/floor.js";
import * as __28$ from "/v135/@stdlib/assert@0.2.1/denonext/has-own-property.js";
import * as __29$ from "/v135/@stdlib/constants@0.2.1/denonext/uint32/max.js";
import * as __2a$ from "/v135/@stdlib/assert@0.2.1/denonext/is-plain-object.js";
import * as __2b$ from "/v135/@stdlib/array@0.2.1/denonext/to-json.js";
import * as __2c$ from "/v135/@stdlib/assert@0.2.1/denonext/is-collection.js";
import * as __2d$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __2e$ from "/v135/@stdlib/assert@0.2.1/denonext/is-uint32array.js";
import * as __2f$ from "/v135/@stdlib/assert@0.2.1/denonext/is-boolean.js";
import * as __30$ from "/v135/@stdlib/assert@0.2.1/denonext/is-positive-integer.js";
import * as __31$ from "/v135/@stdlib/constants@0.2.1/denonext/float64/max-safe-integer.js";
import * as __32$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/abs.js";
import * as __33$ from "/v135/@stdlib/constants@0.2.1/denonext/uint32/max.js";
import * as __34$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/exp.js";
import * as __35$ from "/v135/@stdlib/array@0.2.1/denonext/uint32.js";
import * as __36$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/max.js";
import * as __37$ from "/v135/@stdlib/math@0.2.1/denonext/base/ops/umul.js";
import * as __38$ from "/v135/@stdlib/blas@0.2.1/denonext/base/gcopy.js";
import * as __39$ from "/v135/@stdlib/array@0.2.1/denonext/to-json.js";
import * as __3a$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/ln.js";
import * as __3b$ from "/v135/@stdlib/string@0.2.1/denonext/format.js";
import * as __3c$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/sqrt.js";
import * as __3d$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/exp.js";
import * as __3e$ from "/v135/@stdlib/math@0.2.1/denonext/base/special/ln.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"@stdlib/utils/define-nonenumerable-read-only-property":return e(__0$);case"@stdlib/utils/define-nonenumerable-read-only-accessor":return e(__2$);case"@stdlib/utils/define-nonenumerable-read-write-accessor":return e(__3$);case"@stdlib/assert/is-plain-object":return e(__4$);case"@stdlib/assert/is-uint32array":return e(__5$);case"@stdlib/assert/is-boolean":return e(__6$);case"@stdlib/assert/is-function":return e(__7$);case"@stdlib/assert/has-own-property":return e(__8$);case"@stdlib/utils/constant-function":return e(__9$);case"@stdlib/utils/noop":return e(__a$);case"@stdlib/math/base/assert/is-nan":return e(__b$);case"@stdlib/math/base/special/sqrt":return e(__c$);case"@stdlib/math/base/special/pow":return e(__d$);case"@stdlib/blas/base/gcopy":return e(__e$);case"@stdlib/array/uint32":return e(__f$);case"@stdlib/array/to-json":return e(__10$);case"@stdlib/object/assign":return e(__11$);case"@stdlib/string/format":return e(__12$);case"@stdlib/math/base/special/ln":return e(__13$);case"@stdlib/assert/is-positive-number":return e(__16$);case"@stdlib/constants/uint32/max":return e(__18$);case"@stdlib/math/base/special/floor":return e(__19$);case"@stdlib/assert/is-collection":return e(__2c$);case"@stdlib/assert/is-positive-integer":return e(__30$);case"@stdlib/constants/float64/max-safe-integer":return e(__31$);case"@stdlib/math/base/special/abs":return e(__32$);case"@stdlib/math/base/special/exp":return e(__34$);case"@stdlib/math/base/special/max":return e(__36$);case"@stdlib/math/base/ops/umul":return e(__37$);default:throw new Error("module \""+n+"\" not found");}};
var Ar=Object.create;var Z=Object.defineProperty;var Sr=Object.getOwnPropertyDescriptor;var _r=Object.getOwnPropertyNames;var Nr=Object.getPrototypeOf,Rr=Object.prototype.hasOwnProperty;var i=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(r,n)=>(typeof require<"u"?require:r)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var d=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports),Lr=(t,r)=>{for(var n in r)Z(t,n,{get:r[n],enumerable:!0})},K=(t,r,n,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of _r(r))!Rr.call(t,e)&&e!==n&&Z(t,e,{get:()=>r[e],enumerable:!(a=Sr(r,e))||a.enumerable});return t},P=(t,r,n)=>(K(t,r,"default"),n&&K(n,r,"default")),me=(t,r,n)=>(n=t!=null?Ar(Nr(t)):{},K(r||!t||!t.__esModule?Z(n,"default",{value:t,enumerable:!0}):n,t));var Q=d((Jt,ye)=>{"use strict";var xr=i("@stdlib/constants/uint32/max"),Mr=i("@stdlib/math/base/special/floor"),Ir=xr-1;function Pr(){var t=Mr(1+Ir*Math.random());return t>>>0}ye.exports=Pr});var oe=d((kt,Ne)=>{"use strict";var O=i("@stdlib/utils/define-nonenumerable-read-only-property"),_=i("@stdlib/utils/define-nonenumerable-read-only-accessor"),he=i("@stdlib/utils/define-nonenumerable-read-write-accessor"),$=i("@stdlib/assert/has-own-property"),Ur=i("@stdlib/assert/is-plain-object"),Fr=i("@stdlib/assert/is-collection"),Ee=i("@stdlib/assert/is-uint32array"),jr=i("@stdlib/assert/is-boolean").isPrimitive,qe=i("@stdlib/assert/is-positive-integer").isPrimitive,Ae=i("@stdlib/constants/float64/max-safe-integer"),Se=i("@stdlib/constants/uint32/max"),h=i("@stdlib/array/uint32"),Gr=i("@stdlib/math/base/special/max"),ie=i("@stdlib/math/base/ops/umul"),U=i("@stdlib/blas/base/gcopy"),Br=i("@stdlib/array/to-json"),q=i("@stdlib/string/format"),Te=Q(),g=624,ee=397,we=Se>>>0,Cr=19650218,re=2147483648,te=2147483647,Xr=1812433253,Vr=1664525,Yr=1566083941,zr=2636928640,Jr=4022730752,kr=2567483615,ne=[0,kr>>>0],_e=1/(Ae+1),Dr=67108864,Wr=2147483648,ae=1,Hr=Ae*_e,V=1,Y=3,N=2,R=g+3,E=g+5,j=g+6;function be(t,r){var n;return r?n="option":n="argument",t.length<j+1?new RangeError(q("invalid %s. `state` array has insufficient length.",n)):t[0]!==V?new RangeError(q("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",n,V,t[0])):t[1]!==Y?new RangeError(q("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",n,Y,t[1])):t[N]!==g?new RangeError(q("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",n,g,t[N])):t[R]!==1?new RangeError(q("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",n,1,t[R])):t[E]!==t.length-j?new RangeError(q("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",n,t.length-j,t[E])):null}function Oe(t,r,n){var a;for(t[0]=n>>>0,a=1;a<r;a++)n=t[a-1]>>>0,n=(n^n>>>30)>>>0,t[a]=ie(n,Xr)+a>>>0;return t}function Kr(t,r,n,a){var e,o,u,v;for(o=1,u=0,v=Gr(r,a);v>0;v--)e=t[o-1]>>>0,e=(e^e>>>30)>>>0,e=ie(e,Vr)>>>0,t[o]=(t[o]>>>0^e)+n[u]+u>>>0,o+=1,u+=1,o>=r&&(t[0]=t[r-1],o=1),u>=a&&(u=0);for(v=r-1;v>0;v--)e=t[o-1]>>>0,e=(e^e>>>30)>>>0,e=ie(e,Yr)>>>0,t[o]=(t[o]>>>0^e)-o>>>0,o+=1,o>=r&&(t[0]=t[r-1],o=1);return t[0]=Wr,t}function Zr(t){var r,n,a,e;for(e=g-ee,n=0;n<e;n++)r=t[n]&re|t[n+1]&te,t[n]=t[n+ee]^r>>>1^ne[r&ae];for(a=g-1;n<a;n++)r=t[n]&re|t[n+1]&te,t[n]=t[n-e]^r>>>1^ne[r&ae];return r=t[a]&re|t[0]&te,t[a]=t[ee-1]^r>>>1^ne[r&ae],t}function Qr(t){var r,n,a,e,o,u;if(a={},arguments.length){if(!Ur(t))throw new TypeError(q("invalid argument. Options argument must be an object. Value: `%s`.",t));if($(t,"copy")&&(a.copy=t.copy,!jr(t.copy)))throw new TypeError(q("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",t.copy));if($(t,"state")){if(n=t.state,a.state=!0,!Ee(n))throw new TypeError(q("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n));if(u=be(n,!0),u)throw u;a.copy===!1?r=n:(r=new h(n.length),U(n.length,n,1,r,1)),n=new h(r.buffer,r.byteOffset+(N+1)*r.BYTES_PER_ELEMENT,g),e=new h(r.buffer,r.byteOffset+(E+1)*r.BYTES_PER_ELEMENT,n[E])}if(e===void 0)if($(t,"seed"))if(e=t.seed,a.seed=!0,qe(e)){if(e>we)throw new RangeError(q("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",e));e>>>=0}else{if(Fr(e)===!1||e.length<1)throw new TypeError(q("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",e));if(e.length===1){if(e=e[0],!qe(e))throw new TypeError(q("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",e));if(e>we)throw new RangeError(q("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",e));e>>>=0}else o=e.length,r=new h(j+o),r[0]=V,r[1]=Y,r[N]=g,r[R]=1,r[R+1]=g,r[E]=o,U.ndarray(o,e,1,0,r,1,E+1),n=new h(r.buffer,r.byteOffset+(N+1)*r.BYTES_PER_ELEMENT,g),e=new h(r.buffer,r.byteOffset+(E+1)*r.BYTES_PER_ELEMENT,o),n=Oe(n,g,Cr),n=Kr(n,g,e,o)}else e=Te()>>>0}else e=Te()>>>0;return n===void 0&&(r=new h(j+1),r[0]=V,r[1]=Y,r[N]=g,r[R]=1,r[R+1]=g,r[E]=1,r[E+1]=e,n=new h(r.buffer,r.byteOffset+(N+1)*r.BYTES_PER_ELEMENT,g),e=new h(r.buffer,r.byteOffset+(E+1)*r.BYTES_PER_ELEMENT,1),n=Oe(n,g,e)),O(p,"NAME","mt19937"),_(p,"seed",v),_(p,"seedLength",l),he(p,"state",m,w),_(p,"stateLength",c),_(p,"byteLength",y),O(p,"toJSON",B),O(p,"MIN",0),O(p,"MAX",Se),O(p,"normalized",b),O(b,"NAME",p.NAME),_(b,"seed",v),_(b,"seedLength",l),he(b,"state",m,w),_(b,"stateLength",c),_(b,"byteLength",y),O(b,"toJSON",B),O(b,"MIN",0),O(b,"MAX",Hr),p;function v(){var s=r[E];return U(s,e,1,new h(s),1)}function l(){return r[E]}function c(){return r.length}function y(){return r.byteLength}function m(){var s=r.length;return U(s,r,1,new h(s),1)}function w(s){var T;if(!Ee(s))throw new TypeError(q("invalid argument. Must provide a Uint32Array. Value: `%s`.",s));if(T=be(s,!1),T)throw T;a.copy===!1?a.state&&s.length===r.length?U(s.length,s,1,r,1):(r=s,a.state=!0):(s.length!==r.length&&(r=new h(s.length)),U(s.length,s,1,r,1)),n=new h(r.buffer,r.byteOffset+(N+1)*r.BYTES_PER_ELEMENT,g),e=new h(r.buffer,r.byteOffset+(E+1)*r.BYTES_PER_ELEMENT,r[E])}function B(){var s={};return s.type="PRNG",s.name=p.NAME,s.state=Br(r),s.params=[],s}function p(){var s,T;return T=r[R+1],T>=g&&(n=Zr(n),T=0),s=n[T],r[R+1]=T+1,s^=s>>>11,s^=s<<7&zr,s^=s<<15&Jr,s^=s>>>18,s>>>0}function b(){var s=p()>>>5,T=p()>>>6;return(s*Dr+T)*_e}}Ne.exports=Qr});var Le=d((Dt,Re)=>{"use strict";var $r=oe(),et=Q(),rt=$r({seed:et()});Re.exports=rt});var ue=d((Wt,Me)=>{"use strict";var tt=i("@stdlib/utils/define-nonenumerable-read-only-property"),xe=Le(),nt=oe();tt(xe,"factory",nt);Me.exports=xe});var Fe=d((Ht,Ue)=>{"use strict";var at=i("@stdlib/math/base/special/sqrt"),Ie=i("@stdlib/math/base/special/exp"),it=i("@stdlib/math/base/special/ln"),Pe=.00991256303526217;function ot(t,r){var n,a,e;for(a=Ie(-.5*r*r),n=[],n.push(Pe/a),n.push(r),e=2;e<t;e++)n[e]=at(-2*it(Pe/n[e-1]+a)),a=Ie(-.5*n[e]*n[e]);return n.push(0),n}Ue.exports=ot});var Ge=d((Kt,je)=>{"use strict";function ut(t){var r,n;for(r=[],n=0;n<t.length-1;n++)r.push(t[n+1]/t[n]);return r}je.exports=ut});var Xe=d((Zt,Ce)=>{"use strict";var Be=i("@stdlib/math/base/special/ln");function st(t,r,n){var a,e;do a=Be(t())/r,e=Be(t());while(-2*e<a*a);return n?a-r:r-a}Ce.exports=st});var Je=d((Qt,ze)=>{"use strict";var vt=i("@stdlib/math/base/special/abs"),Ve=i("@stdlib/math/base/special/exp"),ft=Fe(),lt=Ge(),gt=Xe(),ct=128,Ye=3.442619855899,x=ft(ct,Ye),pt=lt(x),dt=127;function mt(t,r){return n;function n(){for(var a,e,o,u,v,l,c;;){if(v=2*t()-1,l=r()&dt,vt(v)<pt[l])return v*x[l];if(l===0)return gt(t,Ye,v<0);if(u=v*x[l],o=u*u,c=l+1,a=Ve(-.5*(x[l]*x[l]-o)),e=Ve(-.5*(x[c]*x[c]-o)),e+t()*(a-e)<1)return u}}}ze.exports=mt});var ve=d(($t,We)=>{"use strict";var L=i("@stdlib/utils/define-nonenumerable-read-only-property"),z=i("@stdlib/utils/define-nonenumerable-read-only-accessor"),ke=i("@stdlib/utils/define-nonenumerable-read-write-accessor"),yt=i("@stdlib/assert/is-function"),ht=i("@stdlib/assert/is-plain-object"),Et=i("@stdlib/assert/is-boolean").isPrimitive,J=i("@stdlib/assert/has-own-property"),qt=i("@stdlib/assert/is-uint32array"),se=ue().factory,De=i("@stdlib/utils/constant-function"),Tt=i("@stdlib/utils/noop"),wt=i("@stdlib/math/base/special/floor"),bt=i("@stdlib/constants/uint32/max"),Ot=i("@stdlib/array/to-json"),G=i("@stdlib/string/format"),At=Je();function St(t){var r,n,a,e;if(e={copy:!0},arguments.length){if(!ht(t))throw new TypeError(G("invalid argument. Must provide an object. Value: `%s`.",t));if(J(t,"copy")&&(e.copy=t.copy,!Et(t.copy)))throw new TypeError(G("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",t.copy));if(J(t,"prng")){if(!yt(t.prng))throw new TypeError(G("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=t.prng}else if(J(t,"state")){if(e.state=t.state,!qt(t.state))throw new TypeError(G("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t.state))}else if(J(t,"seed")&&(e.seed=t.seed,t.seed===void 0))throw new TypeError(G("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",t.seed))}return e.state===void 0?r===void 0?(n=se(e),r=n.normalized):(n=se({seed:wt(1+bt*r()),copy:e.copy}),e.seed=null):(n=se(e),r=n.normalized),a=At(r,n),L(a,"NAME","improved-ziggurat"),e.seed===null?(L(a,"seed",null),L(a,"seedLength",null)):(z(a,"seed",o),z(a,"seedLength",u)),t&&t.prng?(ke(a,"state",De(null),Tt),L(a,"stateLength",null),L(a,"byteLength",null),L(a,"toJSON",De(null))):(ke(a,"state",c,y),z(a,"stateLength",v),z(a,"byteLength",l),L(a,"toJSON",m)),L(a,"PRNG",r),a;function o(){return n.seed}function u(){return n.seedLength}function v(){return n.stateLength}function l(){return n.byteLength}function c(){return n.state}function y(w){n.state=w}function m(){var w={};return w.type="PRNG",w.name=a.NAME,w.state=Ot(n.state),w.params=[],w}}We.exports=St});var Ke=d((en,He)=>{"use strict";var _t=ve(),Nt=_t();He.exports=Nt});var $e=d((rn,Qe)=>{"use strict";var Rt=i("@stdlib/utils/define-nonenumerable-read-only-property"),Ze=Ke(),Lt=ve();Rt(Ze,"factory",Lt);Qe.exports=Ze});var nr=d((tn,tr)=>{"use strict";var er=i("@stdlib/assert/is-positive-number").isPrimitive,rr=i("@stdlib/string/format");function xt(t,r){return er(t)?er(r)?null:new TypeError(rr("invalid argument. Second argument must be a positive number. Value: `%s`.",r)):new TypeError(rr("invalid argument. First argument must be a positive number. Value: `%s`.",t))}tr.exports=xt});var or=d((nn,ir)=>{"use strict";var ar=i("@stdlib/math/base/special/ln");function Mt(t,r,n,a,e){var o,u,v,l,c,y,m;for(o=!0;o;){do c=r(),m=1+e*c;while(m<=0);m*=m*m,u=c*c,v=1-.331*u*u,l=.5*u+a*(1-m+ar(m)),y=t(),(y<v||ar(y)<l)&&(o=!1)}return 1/n*a*m}ir.exports=Mt});var pe=d((an,mr)=>{"use strict";var A=i("@stdlib/utils/define-nonenumerable-read-only-property"),k=i("@stdlib/utils/define-nonenumerable-read-only-accessor"),ur=i("@stdlib/utils/define-nonenumerable-read-write-accessor"),sr=i("@stdlib/assert/is-plain-object"),fe=i("@stdlib/assert/is-uint32array"),vr=i("@stdlib/assert/is-boolean").isPrimitive,fr=i("@stdlib/assert/is-function"),F=i("@stdlib/assert/has-own-property"),lr=i("@stdlib/utils/constant-function"),It=i("@stdlib/utils/noop"),gr=$e().factory,D=ue().factory,cr=i("@stdlib/math/base/assert/is-nan"),le=i("@stdlib/math/base/special/sqrt"),pr=i("@stdlib/math/base/special/pow"),ge=i("@stdlib/blas/base/gcopy"),ce=i("@stdlib/array/uint32"),Pt=i("@stdlib/array/to-json"),dr=i("@stdlib/object/assign"),S=i("@stdlib/string/format"),Ut=nr(),W=or(),H=1/3;function Ft(){var t,r,n,a,e,o,u,v,l,c,y;if(v=!0,arguments.length===0)e={copy:!1},o=D(e);else if(arguments.length===1){if(e=arguments[0],!sr(e))throw new TypeError(S("invalid argument. Options argument must be an object. Value: `%s`.",e));if(F(e,"copy")&&!vr(e.copy))throw new TypeError(S("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",e.copy));if(F(e,"prng")){if(!fr(e.prng))throw new TypeError(S("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));o=e.prng}else{if(F(e,"state")&&!fe(e.state))throw new TypeError(S("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",e.state));e=dr({},e),e.copy===!1?v=!1:e.state&&(e.state=ge(e.state.length,e.state,1,new ce(e.state.length),1)),e.copy=!1,o=D(e)}}else{if(r=arguments[0],a=arguments[1],l=Ut(r,a),l)throw l;if(arguments.length>2){if(e=arguments[2],!sr(e))throw new TypeError(S("invalid argument. Options argument must be an object. Value: `%s`.",e));if(F(e,"copy")&&!vr(e.copy))throw new TypeError(S("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",e.copy));if(F(e,"prng")){if(!fr(e.prng))throw new TypeError(S("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));o=e.prng}else{if(F(e,"state")&&!fe(e.state))throw new TypeError(S("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",e.state));e=dr({},e),e.copy===!1?v=!1:e.state&&(e.state=ge(e.state.length,e.state,1,new ce(e.state.length),1)),e.copy=!1,o=D(e)}}else e={copy:!1},o=D(e)}return e&&e.prng?n=gr({prng:e.prng}):(e.state?t=e.state:(t=o.state,o.state=t),n=gr({state:t,copy:!1})),r===void 0?u=Or:(r>=1?(u=wr,y=r-H):(u=br,y=r+1-H),c=1/le(9*y)),A(u,"NAME","gamma"),e&&e.prng?(A(u,"seed",null),A(u,"seedLength",null),ur(u,"state",lr(null),It),A(u,"stateLength",null),A(u,"byteLength",null),A(u,"toJSON",lr(null)),A(u,"PRNG",o)):(k(u,"seed",m),k(u,"seedLength",w),ur(u,"state",b,s),k(u,"stateLength",B),k(u,"byteLength",p),A(u,"toJSON",T),A(u,"PRNG",o),o=o.normalized),u;function m(){return o.seed}function w(){return o.seedLength}function B(){return o.stateLength}function p(){return o.byteLength}function b(){return o.state}function s(f){if(!fe(f))throw new TypeError(S("invalid argument. Must provide a Uint32Array. Value: `%s`.",f));v&&(f=ge(f.length,f,1,new ce(f.length),1)),o.state=f}function T(){var f={};return f.type="PRNG",f.name=u.NAME,f.state=Pt(o.state),r===void 0?f.params=[]:f.params=[r,a],f}function wr(){return W(o,n,a,y,c)}function br(){return W(o,n,a,y,c)*pr(o(),1/r)}function Or(f,C){var X,I;return cr(f)||cr(C)||f<=0||C<=0?NaN:f<1?(I=f+1-H,X=1/le(9*I),W(o,n,C,I,X)*pr(o(),1/f)):(I=f-H,X=1/le(9*I),W(o,n,C,I,X))}}mr.exports=Ft});var hr=d((on,yr)=>{"use strict";var jt=pe(),Gt=jt();yr.exports=Gt});var de=d((un,qr)=>{"use strict";var Bt=i("@stdlib/utils/define-nonenumerable-read-only-property"),Er=hr(),Ct=pe();Bt(Er,"factory",Ct);qr.exports=Er});var M={};Lr(M,{default:()=>Yt});var Xt=me(de());P(M,me(de()));var{default:Tr,...Vt}=Xt,Yt=Tr!==void 0?Tr:Vt;export{Yt as default};
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

@stdlib/random/base/improved-ziggurat/lib/coords_array.js:
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

@stdlib/random/base/improved-ziggurat/lib/ratio_array.js:
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

@stdlib/random/base/improved-ziggurat/lib/sample_tail.js:
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

@stdlib/random/base/improved-ziggurat/lib/improved_ziggurat.js:
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

@stdlib/random/base/improved-ziggurat/lib/factory.js:
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

@stdlib/random/base/improved-ziggurat/lib/main.js:
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

@stdlib/random/base/improved-ziggurat/lib/index.js:
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

@stdlib/random/base/gamma/lib/validate.js:
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

@stdlib/random/base/gamma/lib/gamma.js:
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

@stdlib/random/base/gamma/lib/factory.js:
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

@stdlib/random/base/gamma/lib/main.js:
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

@stdlib/random/base/gamma/lib/index.js:
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