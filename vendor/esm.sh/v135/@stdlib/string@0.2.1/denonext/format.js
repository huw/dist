/* esm.sh - esbuild bundle(@stdlib/string@0.2.1/format) denonext production */
var Q=Object.create;var w=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var rr=Object.getOwnPropertyNames;var er=Object.getPrototypeOf,ir=Object.prototype.hasOwnProperty;var s=(r,a)=>()=>(a||r((a={exports:{}}).exports,a),a.exports),ar=(r,a)=>{for(var i in a)w(r,i,{get:a[i],enumerable:!0})},h=(r,a,i,e)=>{if(a&&typeof a=="object"||typeof a=="function")for(let t of rr(a))!ir.call(r,t)&&t!==i&&w(r,t,{get:()=>a[t],enumerable:!(e=k(a,t))||e.enumerable});return r},p=(r,a,i)=>(h(r,a,"default"),i&&h(i,a,"default")),x=(r,a,i)=>(i=r!=null?Q(er(r)):{},h(a||!r||!r.__esModule?w(i,"default",{value:r,enumerable:!0}):i,r));var m=s((Mr,_)=>{"use strict";function tr(r){return typeof r=="number"}_.exports=tr});var E=s((Ur,R)=>{"use strict";function sr(r){return r[0]==="-"}function I(r){var a="",i;for(i=0;i<r;i++)a+="0";return a}function nr(r,a,i){var e=!1,t=a-r.length;return t<0||(sr(r)&&(e=!0,r=r.substr(1)),r=i?r+I(t):I(t)+r,e&&(r="-"+r)),r}R.exports=nr});var q=s((jr,P)=>{"use strict";var or=m(),y=E(),cr=String.prototype.toLowerCase,S=String.prototype.toUpperCase;function pr(r){var a,i,e;switch(r.specifier){case"b":a=2;break;case"o":a=8;break;case"x":case"X":a=16;break;case"d":case"i":case"u":default:a=10;break}if(i=r.arg,e=parseInt(i,10),!isFinite(e)){if(!or(i))throw new Error("invalid integer. Value: "+i);e=0}return e<0&&(r.specifier==="u"||a!==10)&&(e=4294967295+e+1),e<0?(i=(-e).toString(a),r.precision&&(i=y(i,r.precision,r.padRight)),i="-"+i):(i=e.toString(a),!e&&!r.precision?i="":r.precision&&(i=y(i,r.precision,r.padRight)),r.sign&&(i=r.sign+i)),a===16&&(r.alternate&&(i="0x"+i),i=r.specifier===S.call(r.specifier)?S.call(i):cr.call(i)),a===8&&r.alternate&&i.charAt(0)!=="0"&&(i="0"+i),i}P.exports=pr});var F=s((Yr,T)=>{"use strict";function fr(r){return typeof r=="string"}T.exports=fr});var V=s((Hr,$)=>{"use strict";var ur=m(),lr=Math.abs,gr=String.prototype.toLowerCase,O=String.prototype.toUpperCase,o=String.prototype.replace,dr=/e\+(\d)$/,vr=/e-(\d)$/,hr=/^(\d+)$/,wr=/^(\d+)e/,mr=/\.0$/,Er=/\.0*e/,br=/(\..*[^0])0*e/;function xr(r){var a,i,e=parseFloat(r.arg);if(!isFinite(e)){if(!ur(r.arg))throw new Error("invalid floating-point number. Value: "+i);e=r.arg}switch(r.specifier){case"e":case"E":i=e.toExponential(r.precision);break;case"f":case"F":i=e.toFixed(r.precision);break;case"g":case"G":lr(e)<1e-4?(a=r.precision,a>0&&(a-=1),i=e.toExponential(a)):i=e.toPrecision(r.precision),r.alternate||(i=o.call(i,br,"$1e"),i=o.call(i,Er,"e"),i=o.call(i,mr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=o.call(i,dr,"e+0$1"),i=o.call(i,vr,"e-0$1"),r.alternate&&(i=o.call(i,hr,"$1."),i=o.call(i,wr,"$1.e")),e>=0&&r.sign&&(i=r.sign+i),i=r.specifier===O.call(r.specifier)?O.call(i):gr.call(i),i}$.exports=xr});var D=s((Jr,C)=>{"use strict";function z(r){var a="",i;for(i=0;i<r;i++)a+=" ";return a}function _r(r,a,i){var e=a-r.length;return e<0||(r=i?r+z(e):z(e)+r),r}C.exports=_r});var N=s((Kr,G)=>{"use strict";var Ir=q(),Rr=F(),yr=V(),Sr=D(),Pr=E(),qr=String.fromCharCode,d=isNaN,Tr=Array.isArray;function Fr(r){var a={};return a.specifier=r.specifier,a.precision=r.precision===void 0?1:r.precision,a.width=r.width,a.flags=r.flags||"",a.mapping=r.mapping,a}function Or(r){var a,i,e,t,f,l,n,u,g;if(!Tr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",n=1,u=0;u<r.length;u++)if(e=r[u],Rr(e))l+=e;else{if(a=e.precision!==void 0,e=Fr(e),!e.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+e+"`.");for(e.mapping&&(n=e.mapping),i=e.flags,g=0;g<i.length;g++)switch(t=i.charAt(g),t){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=i.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+t)}if(e.width==="*"){if(e.width=parseInt(arguments[n],10),n+=1,d(e.width))throw new TypeError("the argument for * width at position "+n+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(a&&e.precision==="*"){if(e.precision=parseInt(arguments[n],10),n+=1,d(e.precision))throw new TypeError("the argument for * precision at position "+n+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,a=!1)}switch(e.arg=arguments[n],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":a&&(e.padZeros=!1),e.arg=Ir(e);break;case"s":e.maxWidth=a?e.precision:-1;break;case"c":if(!d(e.arg)){if(f=parseInt(e.arg,10),f<0||f>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=d(f)?String(e.arg):qr(f)}break;case"e":case"E":case"f":case"F":case"g":case"G":a||(e.precision=6),e.arg=yr(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=Pr(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Sr(e.arg,e.width,e.padRight)),l+=e.arg||"",n+=1}return l}G.exports=Or});var A=s((Qr,Z)=>{"use strict";var $r=N();Z.exports=$r});var L=s((kr,X)=>{"use strict";var v=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Vr(r){var a={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(a.precision="1"),a}function zr(r){var a,i,e,t;for(i=[],t=0,e=v.exec(r);e;)a=r.slice(t,v.lastIndex-e[0].length),a.length&&i.push(a),i.push(Vr(e)),t=v.lastIndex,e=v.exec(r);return a=r.slice(t),a.length&&i.push(a),i}X.exports=zr});var B=s((re,W)=>{"use strict";var Cr=L();W.exports=Cr});var U=s((ee,M)=>{"use strict";function Dr(r){return typeof r=="string"}M.exports=Dr});var H=s((ie,Y)=>{"use strict";var Gr=A(),Nr=B(),Zr=U();function j(r){var a,i;if(!Zr(r))throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(a=[Nr(r)],i=1;i<arguments.length;i++)a.push(arguments[i]);return Gr.apply(null,a)}Y.exports=j});var b=s((ae,J)=>{"use strict";var Ar=H();J.exports=Ar});var c={};ar(c,{default:()=>Wr});var Xr=x(b());p(c,x(b()));var{default:K,...Lr}=Xr,Wr=K!==void 0?K:Lr;export{Wr as default};
/*! Bundled license information:

@stdlib/string/base/format-interpolate/lib/is_number.js:
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

@stdlib/string/base/format-interpolate/lib/zero_pad.js:
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

@stdlib/string/base/format-interpolate/lib/format_integer.js:
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

@stdlib/string/base/format-interpolate/lib/is_string.js:
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

@stdlib/string/base/format-interpolate/lib/format_double.js:
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

@stdlib/string/base/format-interpolate/lib/space_pad.js:
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

@stdlib/string/base/format-interpolate/lib/main.js:
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

@stdlib/string/base/format-interpolate/lib/index.js:
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

@stdlib/string/base/format-tokenize/lib/main.js:
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

@stdlib/string/base/format-tokenize/lib/index.js:
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

@stdlib/string/format/lib/is_string.js:
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

@stdlib/string/format/lib/main.js:
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

@stdlib/string/format/lib/index.js:
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
*/
//# sourceMappingURL=format.js.map