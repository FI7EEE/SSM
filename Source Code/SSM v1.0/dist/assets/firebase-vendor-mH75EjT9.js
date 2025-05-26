import{o as vg,_ as ul}from"./vendor-tiRY5r1j.js";const Eg=()=>{};var Uu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(n,e){if(!n)throw ui(e)},ui=function(n){return new Error("Firebase Database ("+Kd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Tg=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],l=n[t++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},hl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,l=o?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,f=r>>2,p=(r&3)<<4|l>>4;let m=(l&15)<<2|h>>6,w=h&63;c||(w=64,o||(m=64)),i.push(t[f],t[p],t[m],t[w])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Qd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Tg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||l==null||h==null||p==null)throw new Ig;const m=r<<2|l>>4;if(i.push(m),h!==64){const w=l<<4&240|h>>2;if(i.push(w),p!==64){const S=h<<6&192|p;i.push(S)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ig extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yd=function(n){const e=Qd(n);return hl.encodeByteArray(e,!0)},Tr=function(n){return Yd(n).replace(/\./g,"")},Ir=function(n){try{return hl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(n){return Xd(void 0,n)}function Xd(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Cg(t)||(n[t]=Xd(n[t],e[t]));return n}function Cg(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=()=>Ag().__FIREBASE_DEFAULTS__,Sg=()=>{if(typeof process>"u"||typeof Uu>"u")return;const n=Uu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ir(n[1]);return e&&JSON.parse(e)},io=()=>{try{return Eg()||Rg()||Sg()||Pg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jd=n=>{var e,t;return(t=(e=io())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Zd=n=>{const e=Jd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},ef=()=>{var n;return(n=io())===null||n===void 0?void 0:n.config},tf=n=>{var e;return(e=io())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(n){return n.endsWith(".cloudworkstations.dev")}async function fl(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Tr(JSON.stringify(t)),Tr(JSON.stringify(o)),""].join(".")}const Qi={};function bg(){const n={prod:[],emulator:[]};for(const e of Object.keys(Qi))Qi[e]?n.emulator.push(e):n.prod.push(e);return n}function kg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Bu=!1;function hi(n,e){if(typeof window>"u"||typeof document>"u"||!An(window.location.host)||Qi[n]===e||Qi[n]||Bu)return;Qi[n]=e;function t(m){return`__firebase__banner__${m}`}const i="__firebase__banner",r=bg().prod.length>0;function o(){const m=document.getElementById(i);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Bu=!0,o()},m}function f(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=kg(i),w=t("text"),S=document.getElementById(w)||document.createElement("span"),N=t("learnmore"),k=document.getElementById(N)||document.createElement("a"),W=t("preprendIcon"),B=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const H=m.element;l(H),f(k,N);const se=h();c(B,W),H.append(B,S,k,se),document.body.appendChild(H)}r?(S.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function Ng(){var n;const e=(n=io())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Og(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function sf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vg(){const n=Me();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function rf(){return Kd.NODE_ADMIN===!0}function xg(){return!Ng()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mg(){try{return typeof indexedDB=="object"}catch{return!1}}function Lg(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="FirebaseError";class Pt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Fg,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Ug(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Pt(s,l,i)}}function Ug(n,e){return n.replace(Bg,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Bg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n){return JSON.parse(n)}function Ie(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=rs(Ir(r[0])||""),t=rs(Ir(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},qg=function(n){const e=of(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},jg=function(n){const e=of(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Zn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ca(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wr(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function zt(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(qu(r)&&qu(o)){if(!zt(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function qu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Wi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Hi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)i[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)i[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const m=i[p-3]^i[p-8]^i[p-14]^i[p-16];i[p]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],h,f;for(let p=0;p<80;p++){p<40?p<20?(h=l^r&(o^l),f=1518500249):(h=r^o^l,f=1859775393):p<60?(h=r&o|l&(r|o),f=2400959708):(h=r^o^l,f=3395469782);const m=(s<<5|s>>>27)+h+c+f+i[p]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Hg(n,e){const t=new $g(n,e);return t.subscribe.bind(t)}class $g{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");zg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=ca),s.error===void 0&&(s.error=ca),s.complete===void 0&&(s.complete=ca);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ca(){}function af(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,D(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},so=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(n){return n&&n._delegate?n._delegate:n}class Gt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new dl;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yg(e))try{this.getOrInitializeService({instanceIdentifier:hn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hn){return this.instances.has(e)}getOptions(e=hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Qg(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=hn){return this.component?this.component.multipleInstances?e:hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qg(n){return n===hn?void 0:n}function Yg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Kg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const Jg={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Zg=G.INFO,ey={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},ty=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=ey[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ro{constructor(e){this.name=e,this._logLevel=Zg,this._logHandler=ty,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(iy(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function iy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Aa="@firebase/app",ju="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new ro("@firebase/app"),sy="@firebase/app-compat",ry="@firebase/analytics-compat",oy="@firebase/analytics",ay="@firebase/app-check-compat",ly="@firebase/app-check",cy="@firebase/auth",uy="@firebase/auth-compat",hy="@firebase/database",dy="@firebase/data-connect",fy="@firebase/database-compat",py="@firebase/functions",_y="@firebase/functions-compat",my="@firebase/installations",gy="@firebase/installations-compat",yy="@firebase/messaging",vy="@firebase/messaging-compat",Ey="@firebase/performance",Ty="@firebase/performance-compat",Iy="@firebase/remote-config",wy="@firebase/remote-config-compat",Cy="@firebase/storage",Ay="@firebase/storage-compat",Ry="@firebase/firestore",Sy="@firebase/ai",Py="@firebase/firestore-compat",by="firebase",ky="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="[DEFAULT]",Ny={[Aa]:"fire-core",[sy]:"fire-core-compat",[oy]:"fire-analytics",[ry]:"fire-analytics-compat",[ly]:"fire-app-check",[ay]:"fire-app-check-compat",[cy]:"fire-auth",[uy]:"fire-auth-compat",[hy]:"fire-rtdb",[dy]:"fire-data-connect",[fy]:"fire-rtdb-compat",[py]:"fire-fn",[_y]:"fire-fn-compat",[my]:"fire-iid",[gy]:"fire-iid-compat",[yy]:"fire-fcm",[vy]:"fire-fcm-compat",[Ey]:"fire-perf",[Ty]:"fire-perf-compat",[Iy]:"fire-rc",[wy]:"fire-rc-compat",[Cy]:"fire-gcs",[Ay]:"fire-gcs-compat",[Ry]:"fire-fst",[Py]:"fire-fst-compat",[Sy]:"fire-vertex","fire-js":"fire-js",[by]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Map,Dy=new Map,Sa=new Map;function Wu(n,e){try{n.container.addComponent(e)}catch(t){It.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mn(n){const e=n.name;if(Sa.has(e))return It.debug(`There were multiple attempts to register component ${e}.`),!1;Sa.set(e,n);for(const t of Cr.values())Wu(t,n);for(const t of Dy.values())Wu(t,n);return!0}function oo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ze(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new Is("app","Firebase",Oy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=ky;function xy(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ra,automaticDataCollectionEnabled:!0},e),s=i.name;if(typeof s!="string"||!s)throw qt.create("bad-app-name",{appName:String(s)});if(t||(t=ef()),!t)throw qt.create("no-options");const r=Cr.get(s);if(r){if(zt(t,r.options)&&zt(i,r.config))return r;throw qt.create("duplicate-app",{appName:s})}const o=new Xg(s);for(const c of Sa.values())o.addComponent(c);const l=new Vy(t,i,o);return Cr.set(s,l),l}function _l(n=Ra){const e=Cr.get(n);if(!e&&n===Ra&&ef())return xy();if(!e)throw qt.create("no-app",{appName:n});return e}function ot(n,e,t){var i;let s=(i=Ny[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),It.warn(l.join(" "));return}mn(new Gt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="firebase-heartbeat-database",Ly=1,os="firebase-heartbeat-store";let ua=null;function lf(){return ua||(ua=vg(My,Ly,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(os)}catch(t){console.warn(t)}}}}).catch(n=>{throw qt.create("idb-open",{originalErrorMessage:n.message})})),ua}async function Fy(n){try{const t=(await lf()).transaction(os),i=await t.objectStore(os).get(cf(n));return await t.done,i}catch(e){if(e instanceof Pt)It.warn(e.message);else{const t=qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});It.warn(t.message)}}}async function Hu(n,e){try{const i=(await lf()).transaction(os,"readwrite");await i.objectStore(os).put(e,cf(n)),await i.done}catch(t){if(t instanceof Pt)It.warn(t.message);else{const i=qt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});It.warn(i.message)}}}function cf(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=1024,By=30;class qy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Wy(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$u();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>By){const o=Hy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){It.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$u(),{heartbeatsToSend:i,unsentEntries:s}=jy(this._heartbeatsCache.heartbeats),r=Tr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return It.warn(t),""}}}function $u(){return new Date().toISOString().substring(0,10)}function jy(n,e=Uy){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),zu(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),zu(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Wy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mg()?Lg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Fy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zu(n){return Tr(JSON.stringify({version:2,heartbeats:n})).length}function Hy(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(n){mn(new Gt("platform-logger",e=>new ny(e),"PRIVATE")),mn(new Gt("heartbeat",e=>new qy(e),"PRIVATE")),ot(Aa,ju,n),ot(Aa,ju,"esm2017"),ot("fire-js","")}$y("");function uf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zy=uf,hf=new Is("auth","Firebase",uf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new ro("@firebase/auth");function Gy(n,...e){Ar.logLevel<=G.WARN&&Ar.warn(`Auth (${Rn}): ${n}`,...e)}function hr(n,...e){Ar.logLevel<=G.ERROR&&Ar.error(`Auth (${Rn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n,...e){throw ml(n,...e)}function at(n,...e){return ml(n,...e)}function df(n,e,t){const i=Object.assign(Object.assign({},zy()),{[e]:t});return new Is("auth","Firebase",i).create(e,{appName:n.name})}function vt(n){return df(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ml(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return hf.create(n,...e)}function L(n,e,...t){if(!n)throw ml(e,...t)}function mt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw hr(e),new Error(e)}function wt(n,e){n||mt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ky(){return Gu()==="http:"||Gu()==="https:"}function Gu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ky()||Og()||"connection"in navigator)?navigator.onLine:!0}function Yy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t){this.shortDelay=e,this.longDelay=t,wt(t>e,"Short delay should be less than long delay!"),this.isMobile=pl()||sf()}get(){return Qy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(n,e){wt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Zy=new ws(3e4,6e4);function nn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function sn(n,e,t,i,s={}){return pf(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=di(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},r);return Dg()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&An(n.emulatorConfig.host)&&(h.credentials="include"),ff.fetch()(await _f(n,n.config.apiHost,t,l),h)})}async function pf(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Xy),e);try{const s=new tv(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ir(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ir(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ir(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ir(n,"user-disabled",o);const f=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw df(n,f,h);it(n,f)}}catch(s){if(s instanceof Pt)throw s;it(n,"network-request-failed",{message:String(s)})}}async function Cs(n,e,t,i,s={}){const r=await sn(n,e,t,i,s);return"mfaPendingCredential"in r&&it(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function _f(n,e,t,i){const s=`${e}${t}?${i}`,r=n,o=r.config.emulator?gl(n.config,s):`${n.config.apiScheme}://${s}`;return Jy.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function ev(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(at(this.auth,"network-request-failed")),Zy.get())})}}function ir(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=at(n,e,i);return s.customData._tokenResponse=t,s}function Ku(n){return n!==void 0&&n.enterprise!==void 0}class nv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ev(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function iv(n,e){return sn(n,"GET","/v2/recaptchaConfig",nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sv(n,e){return sn(n,"POST","/v1/accounts:delete",e)}async function Rr(n,e){return sn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rv(n,e=!1){const t=de(n),i=await t.getIdToken(e),s=yl(i);L(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Yi(ha(s.auth_time)),issuedAtTime:Yi(ha(s.iat)),expirationTime:Yi(ha(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ha(n){return Number(n)*1e3}function yl(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return hr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ir(t);return s?JSON.parse(s):(hr("Failed to decode base64 JWT payload"),null)}catch(s){return hr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Qu(n){const e=yl(n);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Pt&&ov(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function ov({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yi(this.lastLoginAt),this.creationTime=Yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(n){var e;const t=n.auth,i=await n.getIdToken(),s=await as(n,Rr(t,{idToken:i}));L(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?mf(r.providerUserInfo):[],l=cv(n.providerData,o),c=n.isAnonymous,h=!(n.email&&r.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new ba(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function lv(n){const e=de(n);await Sr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cv(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function mf(n){return n.map(e=>{var{providerId:t}=e,i=ul(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(n,e){const t=await pf(n,{},async()=>{const i=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await _f(n,s,"/v1/token",`key=${r}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ff.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hv(n,e){return sn(n,"POST","/v2/accounts:revokeToken",nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");const t=Qu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await uv(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new $n;return i&&(L(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(L(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $n,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(n,e){L(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ze{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=ul(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new av(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ba(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await as(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return rv(this,e)}reload(){return lv(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Sr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ze(this.auth.app))return Promise.reject(vt(this.auth));const e=await this.getIdToken();return await as(this,sv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,l,c,h,f;const p=(i=t.displayName)!==null&&i!==void 0?i:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,w=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,S=(o=t.photoURL)!==null&&o!==void 0?o:void 0,N=(l=t.tenantId)!==null&&l!==void 0?l:void 0,k=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,W=(h=t.createdAt)!==null&&h!==void 0?h:void 0,B=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:H,emailVerified:se,isAnonymous:Qe,providerData:ue,stsTokenManager:T}=t;L(H&&T,e,"internal-error");const g=$n.fromJSON(this.name,T);L(typeof H=="string",e,"internal-error"),xt(p,e.name),xt(m,e.name),L(typeof se=="boolean",e,"internal-error"),L(typeof Qe=="boolean",e,"internal-error"),xt(w,e.name),xt(S,e.name),xt(N,e.name),xt(k,e.name),xt(W,e.name),xt(B,e.name);const v=new Ze({uid:H,auth:e,email:m,emailVerified:se,displayName:p,isAnonymous:Qe,photoURL:S,phoneNumber:w,tenantId:N,stsTokenManager:g,createdAt:W,lastLoginAt:B});return ue&&Array.isArray(ue)&&(v.providerData=ue.map(E=>Object.assign({},E))),k&&(v._redirectEventId=k),v}static async _fromIdTokenResponse(e,t,i=!1){const s=new $n;s.updateFromServerResponse(t);const r=new Ze({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Sr(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];L(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?mf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),l=new $n;l.updateFromIdToken(i);const c=new Ze({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new ba(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new Map;function gt(n){wt(n instanceof Function,"Expected a class definition");let e=Yu.get(n);return e?(wt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Yu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gf.type="NONE";const Xu=gf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(n,e,t){return`firebase:${n}:${e}:${t}`}class zn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=dr(this.userKey,s.apiKey,r),this.fullPersistenceKey=dr("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Rr(this.auth,{idToken:e}).catch(()=>{});return t?Ze._fromGetAccountInfoResponse(this.auth,t,e):null}return Ze._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new zn(gt(Xu),e,i);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=s[0]||gt(Xu);const o=dr(i,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await Rr(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Ze._fromGetAccountInfoResponse(e,m,f)}else p=Ze._fromJSON(e,f);h!==r&&(l=p),r=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new zn(r,e,i):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==r)try{await h._remove(o)}catch{}})),new zn(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wf(e))return"Blackberry";if(Cf(e))return"Webos";if(vf(e))return"Safari";if((e.includes("chrome/")||Ef(e))&&!e.includes("edge/"))return"Chrome";if(If(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function yf(n=Me()){return/firefox\//i.test(n)}function vf(n=Me()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ef(n=Me()){return/crios\//i.test(n)}function Tf(n=Me()){return/iemobile/i.test(n)}function If(n=Me()){return/android/i.test(n)}function wf(n=Me()){return/blackberry/i.test(n)}function Cf(n=Me()){return/webos/i.test(n)}function vl(n=Me()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function dv(n=Me()){var e;return vl(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fv(){return Vg()&&document.documentMode===10}function Af(n=Me()){return vl(n)||If(n)||Cf(n)||wf(n)||/windows phone/i.test(n)||Tf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n,e=[]){let t;switch(n){case"Browser":t=Ju(Me());break;case"Worker":t=`${Ju(Me())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Rn}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _v(n,e={}){return sn(n,"GET","/v2/passwordPolicy",nn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=6;class gv{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:mv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zu(this),this.idTokenSubscription=new Zu(this),this.beforeStateQueue=new pv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gt(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await zn.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Rr(this,{idToken:e}),i=await Ze._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ze(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Sr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ze(this.app))return Promise.reject(vt(this));const t=e?de(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ze(this.app)?Promise.reject(vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ze(this.app)?Promise.reject(vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _v(this),t=new gv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Is("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await hv(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gt(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await zn.create(this,[gt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(ze(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Gy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Sn(n){return de(n)}class Zu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hg(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vv(n){ao=n}function Sf(n){return ao.loadJS(n)}function Ev(){return ao.recaptchaEnterpriseScript}function Tv(){return ao.gapiScript}function Iv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class wv{constructor(){this.enterprise=new Cv}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Cv{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Av="recaptcha-enterprise",Pf="NO_RECAPTCHA";class Rv{constructor(e){this.type=Av,this.auth=Sn(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,l)=>{iv(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new nv(c);return r.tenantId==null?r._agentRecaptchaConfig=h:r._tenantRecaptchaConfigs[r.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(r,o,l){const c=window.grecaptcha;Ku(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(h=>{o(h)}).catch(()=>{o(Pf)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wv().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(l=>{if(!t&&Ku(window.grecaptcha))s(l,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Ev();c.length!==0&&(c+=l),Sf(c).then(()=>{s(l,r,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Fi(n,e,t,i=!1,s=!1){const r=new Rv(n);let o;if(s)o=Pf;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return i?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ka(n,e,t,i,s){var r,o;if(s==="EMAIL_PASSWORD_PROVIDER")if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Fi(n,e,t,t==="getOobCode");return i(n,l)}else return i(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Fi(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(l)});else if(s==="PHONE_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await Fi(n,e,t);return i(n,l).catch(async c=>{var h;if(((h=n._getRecaptchaConfig())===null||h===void 0?void 0:h.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const f=await Fi(n,e,t,!1,!0);return i(n,f)}return Promise.reject(c)})}else{const l=await Fi(n,e,t,!1,!0);return i(n,l)}else return Promise.reject(s+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(n,e){const t=oo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(zt(r,e??{}))return s;it(s,"already-initialized")}return t.initialize({options:e})}function Pv(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(gt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function bv(n,e,t){const i=Sn(n);L(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=bf(e),{host:o,port:l}=kv(e),c=l===null?"":`:${l}`,h={url:`${r}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){L(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),L(zt(h,i.config.emulator)&&zt(f,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=f,i.settings.appVerificationDisabledForTesting=!0,An(o)?(hi("Auth",!0),fl(`${r}//${o}${c}`)):s||Nv()}function bf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function kv(n){const e=bf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:eh(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:eh(o)}}}function eh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Nv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mt("not implemented")}_getIdTokenResponse(e){return mt("not implemented")}_linkToIdToken(e,t){return mt("not implemented")}_getReauthenticationResolver(e){return mt("not implemented")}}async function Dv(n,e){return sn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ov(n,e){return Cs(n,"POST","/v1/accounts:signInWithPassword",nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vv(n,e){return Cs(n,"POST","/v1/accounts:signInWithEmailLink",nn(n,e))}async function xv(n,e){return Cs(n,"POST","/v1/accounts:signInWithEmailLink",nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends El{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ls(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new ls(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ka(e,t,"signInWithPassword",Ov,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Vv(e,{email:this._email,oobCode:this._password});default:it(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ka(e,i,"signUpPassword",Dv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return xv(e,{idToken:t,email:this._email,oobCode:this._password});default:it(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(n,e){return Cs(n,"POST","/v1/accounts:signInWithIdp",nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="http://localhost";class gn extends El{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):it("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=ul(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new gn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Gn(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Gn(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Gn(e,t)}buildRequest(){const e={requestUri:Mv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=di(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Fv(n){const e=Wi(Hi(n)).link,t=e?Wi(Hi(e)).deep_link_id:null,i=Wi(Hi(n)).deep_link_id;return(i?Wi(Hi(i)).link:null)||i||t||e||n}class Tl{constructor(e){var t,i,s,r,o,l;const c=Wi(Hi(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(i=c.oobCode)!==null&&i!==void 0?i:null,p=Lv((s=c.mode)!==null&&s!==void 0?s:null);L(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=Fv(e);try{return new Tl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.providerId=fi.PROVIDER_ID}static credential(e,t){return ls._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Tl.parseLink(t);return L(i,"argument-error"),ls._fromEmailAndCode(e,i.code,i.tenantId)}}fi.PROVIDER_ID="password";fi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends kf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends As{constructor(){super("facebook.com")}static credential(e){return gn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends As{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Lt.credential(t,i)}catch{return null}}}Lt.GOOGLE_SIGN_IN_METHOD="google.com";Lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends As{constructor(){super("github.com")}static credential(e){return gn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends As{constructor(){super("twitter.com")}static credential(e,t){return gn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ut.credential(t,i)}catch{return null}}}Ut.TWITTER_SIGN_IN_METHOD="twitter.com";Ut.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv(n,e){return Cs(n,"POST","/v1/accounts:signUp",nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Ze._fromIdTokenResponse(e,i,s),o=th(i);return new yn({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=th(i);return new yn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function th(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Pt{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Pr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Pr(e,t,i,s)}}function Nf(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Pr._fromErrorAndOperation(n,r,e,i):r})}async function Bv(n,e,t=!1){const i=await as(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return yn._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qv(n,e,t=!1){const{auth:i}=n;if(ze(i.app))return Promise.reject(vt(i));const s="reauthenticate";try{const r=await as(n,Nf(i,s,e,n),t);L(r.idToken,i,"internal-error");const o=yl(r.idToken);L(o,i,"internal-error");const{sub:l}=o;return L(n.uid===l,i,"user-mismatch"),yn._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&it(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Df(n,e,t=!1){if(ze(n.app))return Promise.reject(vt(n));const i="signIn",s=await Nf(n,i,e),r=await yn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function jv(n,e){return Df(Sn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Of(n){const e=Sn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function m0(n,e,t){if(ze(n.app))return Promise.reject(vt(n));const i=Sn(n),o=await ka(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Uv,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Of(n),c}),l=await yn._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(l.user),l}function g0(n,e,t){return ze(n.app)?Promise.reject(vt(n)):jv(de(n),fi.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Of(n),i})}function Wv(n,e,t,i){return de(n).onIdTokenChanged(e,t,i)}function Hv(n,e,t){return de(n).beforeAuthStateChanged(e,t)}const br="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(br,"1"),this.storage.removeItem(br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=1e3,zv=10;class xf extends Vf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Af(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);fv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zv):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},$v)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xf.type="LOCAL";const Gv=xf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf extends Vf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Mf.type="SESSION";const Lf=Mf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new lo(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(o).map(async h=>h(t.origin,r)),c=await Kv(l);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((l,c)=>{const h=Il("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(m.data.response);break;default:clearTimeout(f),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return window}function Yv(n){lt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function Xv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Zv(){return Ff()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="firebaseLocalStorageDb",eE=1,kr="firebaseLocalStorage",Bf="fbase_key";class Rs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function co(n,e){return n.transaction([kr],e?"readwrite":"readonly").objectStore(kr)}function tE(){const n=indexedDB.deleteDatabase(Uf);return new Rs(n).toPromise()}function Na(){const n=indexedDB.open(Uf,eE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(kr,{keyPath:Bf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(kr)?e(i):(i.close(),await tE(),e(await Na()))})})}async function nh(n,e,t){const i=co(n,!0).put({[Bf]:e,value:t});return new Rs(i).toPromise()}async function nE(n,e){const t=co(n,!1).get(e),i=await new Rs(t).toPromise();return i===void 0?null:i.value}function ih(n,e){const t=co(n,!0).delete(e);return new Rs(t).toPromise()}const iE=800,sE=3;class qf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Na(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>sE)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ff()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lo._getInstance(Zv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Xv(),!this.activeServiceWorker)return;this.sender=new Qv(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Na();return await nh(e,br,"1"),await ih(e,br),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>nh(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>nE(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ih(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=co(s,!1).getAll();return new Rs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qf.type="LOCAL";const rE=qf;new ws(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(n,e){return e?gt(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends El{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Gn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Gn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function aE(n){return Df(n.auth,new wl(n),n.bypassAuthState)}function lE(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),qv(t,new wl(n),n.bypassAuthState)}async function cE(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),Bv(t,new wl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aE;case"linkViaPopup":case"linkViaRedirect":return cE;case"reauthViaPopup":case"reauthViaRedirect":return lE;default:it(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=new ws(2e3,1e4);class jn extends jf{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,jn.currentPopupAction&&jn.currentPopupAction.cancel(),jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const e=Il();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uE.get())};e()}}jn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE="pendingRedirect",fr=new Map;class dE extends jf{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=fr.get(this.auth._key());if(!e){try{const i=await fE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}fr.set(this.auth._key(),e)}return this.bypassAuthState||fr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fE(n,e){const t=mE(e),i=_E(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function pE(n,e){fr.set(n._key(),e)}function _E(n){return gt(n._redirectPersistence)}function mE(n){return dr(hE,n.config.apiKey,n.name)}async function gE(n,e,t=!1){if(ze(n.app))return Promise.reject(vt(n));const i=Sn(n),s=oE(i,e),o=await new dE(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=10*60*1e3;class vE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Wf(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(at(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yE&&this.cachedEventUids.clear(),this.cachedEventUids.has(sh(e))}saveEventToCache(e){this.cachedEventUids.add(sh(e)),this.lastProcessedEventTime=Date.now()}}function sh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Wf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TE(n,e={}){return sn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wE=/^https?/;async function CE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await TE(n);for(const t of e)try{if(AE(t))return}catch{}it(n,"unauthorized-domain")}function AE(n){const e=Pa(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!wE.test(t))return!1;if(IE.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=new ws(3e4,6e4);function rh(){const n=lt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function SE(n){return new Promise((e,t)=>{var i,s,r;function o(){rh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rh(),t(at(n,"network-request-failed"))},timeout:RE.get()})}if(!((s=(i=lt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=lt().gapi)===null||r===void 0)&&r.load)o();else{const l=Iv("iframefcb");return lt()[l]=()=>{gapi.load?o():t(at(n,"network-request-failed"))},Sf(`${Tv()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw pr=null,e})}let pr=null;function PE(n){return pr=pr||SE(n),pr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=new ws(5e3,15e3),kE="__/auth/iframe",NE="emulator/auth/iframe",DE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VE(n){const e=n.config;L(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?gl(e,NE):`https://${n.config.authDomain}/${kE}`,i={apiKey:e.apiKey,appName:n.name,v:Rn},s=OE.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${di(i).slice(1)}`}async function xE(n){const e=await PE(n),t=lt().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:VE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DE,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=at(n,"network-request-failed"),l=lt().setTimeout(()=>{r(o)},bE.get());function c(){lt().clearTimeout(l),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LE=500,FE=600,UE="_blank",BE="http://localhost";class oh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qE(n,e,t,i=LE,s=FE){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},ME),{width:i.toString(),height:s.toString(),top:r,left:o}),h=Me().toLowerCase();t&&(l=Ef(h)?UE:t),yf(h)&&(e=e||BE,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[w,S])=>`${m}${w}=${S},`,"");if(dv(h)&&l!=="_self")return jE(e||"",l),new oh(null);const p=window.open(e||"",l,f);L(p,n,"popup-blocked");try{p.focus()}catch{}return new oh(p)}function jE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE="__/auth/handler",HE="emulator/auth/handler",$E=encodeURIComponent("fac");async function ah(n,e,t,i,s,r){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Rn,eventId:s};if(e instanceof kf){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ca(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(r||{}))o[f]=p}if(e instanceof As){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${$E}=${encodeURIComponent(c)}`:"";return`${zE(n)}?${di(l).slice(1)}${h}`}function zE({config:n}){return n.emulator?gl(n,HE):`https://${n.authDomain}/${WE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="webStorageSupport";class GE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lf,this._completeRedirectFn=gE,this._overrideRedirectResult=pE}async _openPopup(e,t,i,s){var r;wt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await ah(e,t,i,Pa(),s);return qE(e,o,Il())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await ah(e,t,i,Pa(),s);return Yv(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(wt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await xE(e),i=new vE(e);return t.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(da,{type:da},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[da];o!==void 0&&t(!!o),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=CE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Af()||vf()||vl()}}const KE=GE;var lh="@firebase/auth",ch="1.10.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XE(n){mn(new Gt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rf(n)},h=new yv(i,s,r,c);return Pv(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),mn(new Gt("auth-internal",e=>{const t=Sn(e.getProvider("auth").getImmediate());return(i=>new QE(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ot(lh,ch,YE(n)),ot(lh,ch,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=5*60,ZE=tf("authIdTokenMaxAge")||JE;let uh=null;const eT=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>ZE)return;const s=t==null?void 0:t.token;uh!==s&&(uh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function y0(n=_l()){const e=oo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Sv(n,{popupRedirectResolver:KE,persistence:[rE,Gv,Lf]}),i=tf("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=eT(r.toString());Hv(t,o,()=>o(t.currentUser)),Wv(t,l=>o(l))}}const s=Jd("auth");return s?bv(t,`http://${s}`):hi("Auth",!1),t}function tT(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}vv({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=at("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",tT().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XE("Browser");var hh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jt,Hf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function v(){}v.prototype=g.prototype,T.D=g.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(E,I,A){for(var y=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)y[dt-2]=arguments[dt];return g.prototype[I].apply(E,y)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,g,v){v||(v=0);var E=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)E[I]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(I=0;16>I;++I)E[I]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=T.g[0],v=T.g[1],I=T.g[2];var A=T.g[3],y=g+(A^v&(I^A))+E[0]+3614090360&4294967295;g=v+(y<<7&4294967295|y>>>25),y=A+(I^g&(v^I))+E[1]+3905402710&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(v^A&(g^v))+E[2]+606105819&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(g^I&(A^g))+E[3]+3250441966&4294967295,v=I+(y<<22&4294967295|y>>>10),y=g+(A^v&(I^A))+E[4]+4118548399&4294967295,g=v+(y<<7&4294967295|y>>>25),y=A+(I^g&(v^I))+E[5]+1200080426&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(v^A&(g^v))+E[6]+2821735955&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(g^I&(A^g))+E[7]+4249261313&4294967295,v=I+(y<<22&4294967295|y>>>10),y=g+(A^v&(I^A))+E[8]+1770035416&4294967295,g=v+(y<<7&4294967295|y>>>25),y=A+(I^g&(v^I))+E[9]+2336552879&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(v^A&(g^v))+E[10]+4294925233&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(g^I&(A^g))+E[11]+2304563134&4294967295,v=I+(y<<22&4294967295|y>>>10),y=g+(A^v&(I^A))+E[12]+1804603682&4294967295,g=v+(y<<7&4294967295|y>>>25),y=A+(I^g&(v^I))+E[13]+4254626195&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(v^A&(g^v))+E[14]+2792965006&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(g^I&(A^g))+E[15]+1236535329&4294967295,v=I+(y<<22&4294967295|y>>>10),y=g+(I^A&(v^I))+E[1]+4129170786&4294967295,g=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(g^v))+E[6]+3225465664&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^v&(A^g))+E[11]+643717713&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^g&(I^A))+E[0]+3921069994&4294967295,v=I+(y<<20&4294967295|y>>>12),y=g+(I^A&(v^I))+E[5]+3593408605&4294967295,g=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(g^v))+E[10]+38016083&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^v&(A^g))+E[15]+3634488961&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^g&(I^A))+E[4]+3889429448&4294967295,v=I+(y<<20&4294967295|y>>>12),y=g+(I^A&(v^I))+E[9]+568446438&4294967295,g=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(g^v))+E[14]+3275163606&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^v&(A^g))+E[3]+4107603335&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^g&(I^A))+E[8]+1163531501&4294967295,v=I+(y<<20&4294967295|y>>>12),y=g+(I^A&(v^I))+E[13]+2850285829&4294967295,g=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(g^v))+E[2]+4243563512&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^v&(A^g))+E[7]+1735328473&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^g&(I^A))+E[12]+2368359562&4294967295,v=I+(y<<20&4294967295|y>>>12),y=g+(v^I^A)+E[5]+4294588738&4294967295,g=v+(y<<4&4294967295|y>>>28),y=A+(g^v^I)+E[8]+2272392833&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^v)+E[11]+1839030562&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^g)+E[14]+4259657740&4294967295,v=I+(y<<23&4294967295|y>>>9),y=g+(v^I^A)+E[1]+2763975236&4294967295,g=v+(y<<4&4294967295|y>>>28),y=A+(g^v^I)+E[4]+1272893353&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^v)+E[7]+4139469664&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^g)+E[10]+3200236656&4294967295,v=I+(y<<23&4294967295|y>>>9),y=g+(v^I^A)+E[13]+681279174&4294967295,g=v+(y<<4&4294967295|y>>>28),y=A+(g^v^I)+E[0]+3936430074&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^v)+E[3]+3572445317&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^g)+E[6]+76029189&4294967295,v=I+(y<<23&4294967295|y>>>9),y=g+(v^I^A)+E[9]+3654602809&4294967295,g=v+(y<<4&4294967295|y>>>28),y=A+(g^v^I)+E[12]+3873151461&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^v)+E[15]+530742520&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^g)+E[2]+3299628645&4294967295,v=I+(y<<23&4294967295|y>>>9),y=g+(I^(v|~A))+E[0]+4096336452&4294967295,g=v+(y<<6&4294967295|y>>>26),y=A+(v^(g|~I))+E[7]+1126891415&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~v))+E[14]+2878612391&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~g))+E[5]+4237533241&4294967295,v=I+(y<<21&4294967295|y>>>11),y=g+(I^(v|~A))+E[12]+1700485571&4294967295,g=v+(y<<6&4294967295|y>>>26),y=A+(v^(g|~I))+E[3]+2399980690&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~v))+E[10]+4293915773&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~g))+E[1]+2240044497&4294967295,v=I+(y<<21&4294967295|y>>>11),y=g+(I^(v|~A))+E[8]+1873313359&4294967295,g=v+(y<<6&4294967295|y>>>26),y=A+(v^(g|~I))+E[15]+4264355552&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~v))+E[6]+2734768916&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~g))+E[13]+1309151649&4294967295,v=I+(y<<21&4294967295|y>>>11),y=g+(I^(v|~A))+E[4]+4149444226&4294967295,g=v+(y<<6&4294967295|y>>>26),y=A+(v^(g|~I))+E[11]+3174756917&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~v))+E[2]+718787259&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~g))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+A&4294967295}i.prototype.u=function(T,g){g===void 0&&(g=T.length);for(var v=g-this.blockSize,E=this.B,I=this.h,A=0;A<g;){if(I==0)for(;A<=v;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<g;)if(E[I++]=T.charCodeAt(A++),I==this.blockSize){s(this,E),I=0;break}}else for(;A<g;)if(E[I++]=T[A++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=g},i.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;var v=8*this.o;for(g=T.length-8;g<T.length;++g)T[g]=v&255,v/=256;for(this.u(T),T=Array(16),g=v=0;4>g;++g)for(var E=0;32>E;E+=8)T[v++]=this.g[g]>>>E&255;return T};function r(T,g){var v=l;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=g(T)}function o(T,g){this.h=g;for(var v=[],E=!0,I=T.length-1;0<=I;I--){var A=T[I]|0;E&&A==g||(v[I]=A,E=!1)}this.g=v}var l={};function c(T){return-128<=T&&128>T?r(T,function(g){return new o([g|0],0>g?-1:0)}):new o([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return k(h(-T));for(var g=[],v=1,E=0;T>=v;E++)g[E]=T/v|0,v*=4294967296;return new o(g,0)}function f(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return k(f(T.substring(1),g));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(g,8)),E=p,I=0;I<T.length;I+=8){var A=Math.min(8,T.length-I),y=parseInt(T.substring(I,I+A),g);8>A?(A=h(Math.pow(g,A)),E=E.j(A).add(h(y))):(E=E.j(v),E=E.add(h(y)))}return E}var p=c(0),m=c(1),w=c(16777216);n=o.prototype,n.m=function(){if(N(this))return-k(this).m();for(var T=0,g=1,v=0;v<this.g.length;v++){var E=this.i(v);T+=(0<=E?E:4294967296+E)*g,g*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(N(this))return"-"+k(this).toString(T);for(var g=h(Math.pow(T,6)),v=this,E="";;){var I=se(v,g).g;v=W(v,I.j(g));var A=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=I,S(v))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(var g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function N(T){return T.h==-1}n.l=function(T){return T=W(this,T),N(T)?-1:S(T)?0:1};function k(T){for(var g=T.g.length,v=[],E=0;E<g;E++)v[E]=~T.g[E];return new o(v,~T.h).add(m)}n.abs=function(){return N(this)?k(this):this},n.add=function(T){for(var g=Math.max(this.g.length,T.g.length),v=[],E=0,I=0;I<=g;I++){var A=E+(this.i(I)&65535)+(T.i(I)&65535),y=(A>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);E=y>>>16,A&=65535,y&=65535,v[I]=y<<16|A}return new o(v,v[v.length-1]&-2147483648?-1:0)};function W(T,g){return T.add(k(g))}n.j=function(T){if(S(this)||S(T))return p;if(N(this))return N(T)?k(this).j(k(T)):k(k(this).j(T));if(N(T))return k(this.j(k(T)));if(0>this.l(w)&&0>T.l(w))return h(this.m()*T.m());for(var g=this.g.length+T.g.length,v=[],E=0;E<2*g;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<T.g.length;I++){var A=this.i(E)>>>16,y=this.i(E)&65535,dt=T.i(I)>>>16,Ei=T.i(I)&65535;v[2*E+2*I]+=y*Ei,B(v,2*E+2*I),v[2*E+2*I+1]+=A*Ei,B(v,2*E+2*I+1),v[2*E+2*I+1]+=y*dt,B(v,2*E+2*I+1),v[2*E+2*I+2]+=A*dt,B(v,2*E+2*I+2)}for(E=0;E<g;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=g;E<2*g;E++)v[E]=0;return new o(v,0)};function B(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function H(T,g){this.g=T,this.h=g}function se(T,g){if(S(g))throw Error("division by zero");if(S(T))return new H(p,p);if(N(T))return g=se(k(T),g),new H(k(g.g),k(g.h));if(N(g))return g=se(T,k(g)),new H(k(g.g),g.h);if(30<T.g.length){if(N(T)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var v=m,E=g;0>=E.l(T);)v=Qe(v),E=Qe(E);var I=ue(v,1),A=ue(E,1);for(E=ue(E,2),v=ue(v,2);!S(E);){var y=A.add(E);0>=y.l(T)&&(I=I.add(v),A=y),E=ue(E,1),v=ue(v,1)}return g=W(T,I.j(g)),new H(I,g)}for(I=p;0<=T.l(g);){for(v=Math.max(1,Math.floor(T.m()/g.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=h(v),y=A.j(g);N(y)||0<y.l(T);)v-=E,A=h(v),y=A.j(g);S(A)&&(A=m),I=I.add(A),T=W(T,y)}return new H(I,T)}n.A=function(T){return se(this,T).h},n.and=function(T){for(var g=Math.max(this.g.length,T.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)&T.i(E);return new o(v,this.h&T.h)},n.or=function(T){for(var g=Math.max(this.g.length,T.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)|T.i(E);return new o(v,this.h|T.h)},n.xor=function(T){for(var g=Math.max(this.g.length,T.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)^T.i(E);return new o(v,this.h^T.h)};function Qe(T){for(var g=T.g.length+1,v=[],E=0;E<g;E++)v[E]=T.i(E)<<1|T.i(E-1)>>>31;return new o(v,T.h)}function ue(T,g){var v=g>>5;g%=32;for(var E=T.g.length-v,I=[],A=0;A<E;A++)I[A]=0<g?T.i(A+v)>>>g|T.i(A+v+1)<<32-g:T.i(A+v);return new o(I,T.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Hf=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,jt=o}).apply(typeof hh<"u"?hh:typeof self<"u"?self:typeof window<"u"?window:{});var sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $f,$i,zf,_r,Da,Gf,Kf,Qf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof sr=="object"&&sr];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var i=t(this);function s(a,u){if(u)e:{var d=i;a=a.split(".");for(var _=0;_<a.length-1;_++){var C=a[_];if(!(C in d))break e;d=d[C]}a=a[a.length-1],_=d[a],u=u(_),u!=_&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function r(a,u){a instanceof String&&(a+="");var d=0,_=!1,C={next:function(){if(!_&&d<a.length){var R=d++;return{value:u(R,a[R]),done:!1}}return _=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return r(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,_),a.apply(u,C)}}return function(){return a.apply(u,arguments)}}function m(a,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function w(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function S(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(_,C,R){for(var O=Array(arguments.length-2),te=2;te<arguments.length;te++)O[te-2]=arguments[te];return u.prototype[C].apply(_,O)}}function N(a){const u=a.length;if(0<u){const d=Array(u);for(let _=0;_<u;_++)d[_]=a[_];return d}return[]}function k(a,u){for(let d=1;d<arguments.length;d++){const _=arguments[d];if(c(_)){const C=a.length||0,R=_.length||0;a.length=C+R;for(let O=0;O<R;O++)a[C+O]=_[O]}else a.push(_)}}class W{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function H(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function se(a){return se[" "](a),a}se[" "]=function(){};var Qe=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function ue(a,u,d){for(const _ in a)u.call(d,a[_],_,a)}function T(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function g(a){const u={};for(const d in a)u[d]=a[d];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,u){let d,_;for(let C=1;C<arguments.length;C++){_=arguments[C];for(d in _)a[d]=_[d];for(let R=0;R<v.length;R++)d=v[R],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function I(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function A(a){l.setTimeout(()=>{throw a},0)}function y(){var a=Fo;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class dt{constructor(){this.h=this.g=null}add(u,d){const _=Ei.get();_.set(u,d),this.h?this.h.next=_:this.g=_,this.h=_}}var Ei=new W(()=>new Um,a=>a.reset());class Um{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ti,Ii=!1,Fo=new dt,Fc=()=>{const a=l.Promise.resolve(void 0);Ti=()=>{a.then(Bm)}};var Bm=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(d){A(d)}var u=Ei;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}Ii=!1};function Nt(){this.s=this.s,this.C=this.C}Nt.prototype.s=!1,Nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var qm=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return a}();function wi(a,u){if(Re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(Qe){e:{try{se(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:jm[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&wi.aa.h.call(this)}}S(wi,Re);var jm={2:"touch",3:"pen",4:"mouse"};wi.prototype.h=function(){wi.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ci="closure_listenable_"+(1e6*Math.random()|0),Wm=0;function Hm(a,u,d,_,C){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!_,this.ha=C,this.key=++Wm,this.da=this.fa=!1}function Us(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Bs(a){this.src=a,this.g={},this.h=0}Bs.prototype.add=function(a,u,d,_,C){var R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);var O=Bo(a,u,_,C);return-1<O?(u=a[O],d||(u.fa=!1)):(u=new Hm(u,this.src,R,!!_,C),u.fa=d,a.push(u)),u};function Uo(a,u){var d=u.type;if(d in a.g){var _=a.g[d],C=Array.prototype.indexOf.call(_,u,void 0),R;(R=0<=C)&&Array.prototype.splice.call(_,C,1),R&&(Us(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Bo(a,u,d,_){for(var C=0;C<a.length;++C){var R=a[C];if(!R.da&&R.listener==u&&R.capture==!!d&&R.ha==_)return C}return-1}var qo="closure_lm_"+(1e6*Math.random()|0),jo={};function Uc(a,u,d,_,C){if(_&&_.once)return qc(a,u,d,_,C);if(Array.isArray(u)){for(var R=0;R<u.length;R++)Uc(a,u[R],d,_,C);return null}return d=zo(d),a&&a[Ci]?a.K(u,d,h(_)?!!_.capture:!!_,C):Bc(a,u,d,!1,_,C)}function Bc(a,u,d,_,C,R){if(!u)throw Error("Invalid event type");var O=h(C)?!!C.capture:!!C,te=Ho(a);if(te||(a[qo]=te=new Bs(a)),d=te.add(u,d,_,O,R),d.proxy)return d;if(_=$m(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)qm||(C=O),C===void 0&&(C=!1),a.addEventListener(u.toString(),_,C);else if(a.attachEvent)a.attachEvent(Wc(u.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function $m(){function a(d){return u.call(a.src,a.listener,d)}const u=zm;return a}function qc(a,u,d,_,C){if(Array.isArray(u)){for(var R=0;R<u.length;R++)qc(a,u[R],d,_,C);return null}return d=zo(d),a&&a[Ci]?a.L(u,d,h(_)?!!_.capture:!!_,C):Bc(a,u,d,!0,_,C)}function jc(a,u,d,_,C){if(Array.isArray(u))for(var R=0;R<u.length;R++)jc(a,u[R],d,_,C);else _=h(_)?!!_.capture:!!_,d=zo(d),a&&a[Ci]?(a=a.i,u=String(u).toString(),u in a.g&&(R=a.g[u],d=Bo(R,d,_,C),-1<d&&(Us(R[d]),Array.prototype.splice.call(R,d,1),R.length==0&&(delete a.g[u],a.h--)))):a&&(a=Ho(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Bo(u,d,_,C)),(d=-1<a?u[a]:null)&&Wo(d))}function Wo(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Ci])Uo(u.i,a);else{var d=a.type,_=a.proxy;u.removeEventListener?u.removeEventListener(d,_,a.capture):u.detachEvent?u.detachEvent(Wc(d),_):u.addListener&&u.removeListener&&u.removeListener(_),(d=Ho(u))?(Uo(d,a),d.h==0&&(d.src=null,u[qo]=null)):Us(a)}}}function Wc(a){return a in jo?jo[a]:jo[a]="on"+a}function zm(a,u){if(a.da)a=!0;else{u=new wi(u,this);var d=a.listener,_=a.ha||a.src;a.fa&&Wo(a),a=d.call(_,u)}return a}function Ho(a){return a=a[qo],a instanceof Bs?a:null}var $o="__closure_events_fn_"+(1e9*Math.random()>>>0);function zo(a){return typeof a=="function"?a:(a[$o]||(a[$o]=function(u){return a.handleEvent(u)}),a[$o])}function Se(){Nt.call(this),this.i=new Bs(this),this.M=this,this.F=null}S(Se,Nt),Se.prototype[Ci]=!0,Se.prototype.removeEventListener=function(a,u,d,_){jc(this,a,u,d,_)};function Le(a,u){var d,_=a.F;if(_)for(d=[];_;_=_.F)d.push(_);if(a=a.M,_=u.type||u,typeof u=="string")u=new Re(u,a);else if(u instanceof Re)u.target=u.target||a;else{var C=u;u=new Re(_,a),E(u,C)}if(C=!0,d)for(var R=d.length-1;0<=R;R--){var O=u.g=d[R];C=qs(O,_,!0,u)&&C}if(O=u.g=a,C=qs(O,_,!0,u)&&C,C=qs(O,_,!1,u)&&C,d)for(R=0;R<d.length;R++)O=u.g=d[R],C=qs(O,_,!1,u)&&C}Se.prototype.N=function(){if(Se.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],_=0;_<d.length;_++)Us(d[_]);delete a.g[u],a.h--}}this.F=null},Se.prototype.K=function(a,u,d,_){return this.i.add(String(a),u,!1,d,_)},Se.prototype.L=function(a,u,d,_){return this.i.add(String(a),u,!0,d,_)};function qs(a,u,d,_){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,R=0;R<u.length;++R){var O=u[R];if(O&&!O.da&&O.capture==d){var te=O.listener,we=O.ha||O.src;O.fa&&Uo(a.i,O),C=te.call(we,_)!==!1&&C}}return C&&!_.defaultPrevented}function Hc(a,u,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function $c(a){a.g=Hc(()=>{a.g=null,a.i&&(a.i=!1,$c(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Gm extends Nt{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:$c(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ai(a){Nt.call(this),this.h=a,this.g={}}S(Ai,Nt);var zc=[];function Gc(a){ue(a.g,function(u,d){this.g.hasOwnProperty(d)&&Wo(u)},a),a.g={}}Ai.prototype.N=function(){Ai.aa.N.call(this),Gc(this)},Ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Go=l.JSON.stringify,Km=l.JSON.parse,Qm=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ko(){}Ko.prototype.h=null;function Kc(a){return a.h||(a.h=a.i())}function Qc(){}var Ri={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qo(){Re.call(this,"d")}S(Qo,Re);function Yo(){Re.call(this,"c")}S(Yo,Re);var an={},Yc=null;function js(){return Yc=Yc||new Se}an.La="serverreachability";function Xc(a){Re.call(this,an.La,a)}S(Xc,Re);function Si(a){const u=js();Le(u,new Xc(u))}an.STAT_EVENT="statevent";function Jc(a,u){Re.call(this,an.STAT_EVENT,a),this.stat=u}S(Jc,Re);function Fe(a){const u=js();Le(u,new Jc(u,a))}an.Ma="timingevent";function Zc(a,u){Re.call(this,an.Ma,a),this.size=u}S(Zc,Re);function Pi(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function bi(){this.g=!0}bi.prototype.xa=function(){this.g=!1};function Ym(a,u,d,_,C,R){a.info(function(){if(a.g)if(R)for(var O="",te=R.split("&"),we=0;we<te.length;we++){var J=te[we].split("=");if(1<J.length){var Pe=J[0];J=J[1];var be=Pe.split("_");O=2<=be.length&&be[1]=="type"?O+(Pe+"="+J+"&"):O+(Pe+"=redacted&")}}else O=null;else O=R;return"XMLHTTP REQ ("+_+") [attempt "+C+"]: "+u+`
`+d+`
`+O})}function Xm(a,u,d,_,C,R,O){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+C+"]: "+u+`
`+d+`
`+R+" "+O})}function On(a,u,d,_){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Zm(a,d)+(_?" "+_:"")})}function Jm(a,u){a.info(function(){return"TIMEOUT: "+u})}bi.prototype.info=function(){};function Zm(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var _=d[a];if(!(2>_.length)){var C=_[1];if(Array.isArray(C)&&!(1>C.length)){var R=C[0];if(R!="noop"&&R!="stop"&&R!="close")for(var O=1;O<C.length;O++)C[O]=""}}}}return Go(d)}catch{return u}}var Ws={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xo;function Hs(){}S(Hs,Ko),Hs.prototype.g=function(){return new XMLHttpRequest},Hs.prototype.i=function(){return{}},Xo=new Hs;function Dt(a,u,d,_){this.j=a,this.i=u,this.l=d,this.R=_||1,this.U=new Ai(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new tu}function tu(){this.i=null,this.g="",this.h=!1}var nu={},Jo={};function Zo(a,u,d){a.L=1,a.v=Ks(ft(u)),a.m=d,a.P=!0,iu(a,null)}function iu(a,u){a.F=Date.now(),$s(a),a.A=ft(a.v);var d=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),gu(d.i,"t",_),a.C=0,d=a.j.J,a.h=new tu,a.g=xu(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Gm(m(a.Y,a,a.g),a.O)),u=a.U,d=a.g,_=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(zc[0]=C.toString()),C=zc);for(var R=0;R<C.length;R++){var O=Uc(d,C[R],_||u.handleEvent,!1,u.h||u);if(!O)break;u.g[O.key]=O}u=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Si(),Ym(a.i,a.u,a.A,a.l,a.R,a.m)}Dt.prototype.ca=function(a){a=a.target;const u=this.M;u&&pt(a)==3?u.j():this.Y(a)},Dt.prototype.Y=function(a){try{if(a==this.g)e:{const be=pt(this.g);var u=this.g.Ba();const Mn=this.g.Z();if(!(3>be)&&(be!=3||this.g&&(this.h.h||this.g.oa()||Cu(this.g)))){this.J||be!=4||u==7||(u==8||0>=Mn?Si(3):Si(2)),ea(this);var d=this.g.Z();this.X=d;t:if(su(this)){var _=Cu(this.g);a="";var C=_.length,R=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),ki(this);var O="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,a+=this.h.i.decode(_[u],{stream:!(R&&u==C-1)});_.length=0,this.h.g+=a,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,Xm(this.i,this.u,this.A,this.l,this.R,be,d),this.o){if(this.T&&!this.K){t:{if(this.g){var te,we=this.g;if((te=we.g?we.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(te)){var J=te;break t}}J=null}if(d=J)On(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ta(this,d);else{this.o=!1,this.s=3,Fe(12),ln(this),ki(this);break e}}if(this.P){d=!0;let Xe;for(;!this.J&&this.C<O.length;)if(Xe=eg(this,O),Xe==Jo){be==4&&(this.s=4,Fe(14),d=!1),On(this.i,this.l,null,"[Incomplete Response]");break}else if(Xe==nu){this.s=4,Fe(15),On(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else On(this.i,this.l,Xe,null),ta(this,Xe);if(su(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||O.length!=0||this.h.h||(this.s=1,Fe(16),d=!1),this.o=this.o&&d,!d)On(this.i,this.l,O,"[Invalid Chunked Response]"),ln(this),ki(this);else if(0<O.length&&!this.W){this.W=!0;var Pe=this.j;Pe.g==this&&Pe.ba&&!Pe.M&&(Pe.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),aa(Pe),Pe.M=!0,Fe(11))}}else On(this.i,this.l,O,null),ta(this,O);be==4&&ln(this),this.o&&!this.J&&(be==4?Nu(this.j,this):(this.o=!1,$s(this)))}else gg(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,Fe(12)):(this.s=0,Fe(13)),ln(this),ki(this)}}}catch{}finally{}};function su(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function eg(a,u){var d=a.C,_=u.indexOf(`
`,d);return _==-1?Jo:(d=Number(u.substring(d,_)),isNaN(d)?nu:(_+=1,_+d>u.length?Jo:(u=u.slice(_,_+d),a.C=_+d,u)))}Dt.prototype.cancel=function(){this.J=!0,ln(this)};function $s(a){a.S=Date.now()+a.I,ru(a,a.I)}function ru(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Pi(m(a.ba,a),u)}function ea(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Dt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Jm(this.i,this.A),this.L!=2&&(Si(),Fe(17)),ln(this),this.s=2,ki(this)):ru(this,this.S-a)};function ki(a){a.j.G==0||a.J||Nu(a.j,a)}function ln(a){ea(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Gc(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function ta(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||na(d.h,a))){if(!a.K&&na(d.h,a)&&d.G==3){try{var _=d.Da.g.parse(u)}catch{_=null}if(Array.isArray(_)&&_.length==3){var C=_;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)er(d),Js(d);else break e;oa(d),Fe(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Pi(m(d.Za,d),6e3));if(1>=lu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else un(d,11)}else if((a.K||d.g==a)&&er(d),!B(u))for(C=d.Da.g.parse(u),u=0;u<C.length;u++){let J=C[u];if(d.T=J[0],J=J[1],d.G==2)if(J[0]=="c"){d.K=J[1],d.ia=J[2];const Pe=J[3];Pe!=null&&(d.la=Pe,d.j.info("VER="+d.la));const be=J[4];be!=null&&(d.Aa=be,d.j.info("SVER="+d.Aa));const Mn=J[5];Mn!=null&&typeof Mn=="number"&&0<Mn&&(_=1.5*Mn,d.L=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const Xe=a.g;if(Xe){const nr=Xe.g?Xe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nr){var R=_.h;R.g||nr.indexOf("spdy")==-1&&nr.indexOf("quic")==-1&&nr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ia(R,R.h),R.h=null))}if(_.D){const la=Xe.g?Xe.g.getResponseHeader("X-HTTP-Session-Id"):null;la&&(_.ya=la,re(_.I,_.D,la))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),_=d;var O=a;if(_.qa=Vu(_,_.J?_.ia:null,_.W),O.K){cu(_.h,O);var te=O,we=_.L;we&&(te.I=we),te.B&&(ea(te),$s(te)),_.g=O}else bu(_);0<d.i.length&&Zs(d)}else J[0]!="stop"&&J[0]!="close"||un(d,7);else d.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?un(d,7):ra(d):J[0]!="noop"&&d.l&&d.l.ta(J),d.v=0)}}Si(4)}catch{}}var tg=class{constructor(a,u){this.g=a,this.map=u}};function ou(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function au(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function lu(a){return a.h?1:a.g?a.g.size:0}function na(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function ia(a,u){a.g?a.g.add(u):a.h=u}function cu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}ou.prototype.cancel=function(){if(this.i=uu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function uu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return N(a.i)}function ng(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],d=a.length,_=0;_<d;_++)u.push(a[_]);return u}u=[],d=0;for(_ in a)u[d++]=a[_];return u}function ig(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const _ in a)u[d++]=_;return u}}}function hu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=ig(a),_=ng(a),C=_.length,R=0;R<C;R++)u.call(void 0,_[R],d&&d[R],a)}var du=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sg(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var _=a[d].indexOf("="),C=null;if(0<=_){var R=a[d].substring(0,_);C=a[d].substring(_+1)}else R=a[d];u(R,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function cn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof cn){this.h=a.h,zs(this,a.j),this.o=a.o,this.g=a.g,Gs(this,a.s),this.l=a.l;var u=a.i,d=new Oi;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),fu(this,d),this.m=a.m}else a&&(u=String(a).match(du))?(this.h=!1,zs(this,u[1]||"",!0),this.o=Ni(u[2]||""),this.g=Ni(u[3]||"",!0),Gs(this,u[4]),this.l=Ni(u[5]||"",!0),fu(this,u[6]||"",!0),this.m=Ni(u[7]||"")):(this.h=!1,this.i=new Oi(null,this.h))}cn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Di(u,pu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Di(u,pu,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Di(d,d.charAt(0)=="/"?ag:og,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Di(d,cg)),a.join("")};function ft(a){return new cn(a)}function zs(a,u,d){a.j=d?Ni(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Gs(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function fu(a,u,d){u instanceof Oi?(a.i=u,ug(a.i,a.h)):(d||(u=Di(u,lg)),a.i=new Oi(u,a.h))}function re(a,u,d){a.i.set(u,d)}function Ks(a){return re(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ni(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Di(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,rg),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function rg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var pu=/[#\/\?@]/g,og=/[#\?:]/g,ag=/[#\?]/g,lg=/[#\?@]/g,cg=/#/g;function Oi(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Ot(a){a.g||(a.g=new Map,a.h=0,a.i&&sg(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Oi.prototype,n.add=function(a,u){Ot(this),this.i=null,a=Vn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function _u(a,u){Ot(a),u=Vn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function mu(a,u){return Ot(a),u=Vn(a,u),a.g.has(u)}n.forEach=function(a,u){Ot(this),this.g.forEach(function(d,_){d.forEach(function(C){a.call(u,C,_,this)},this)},this)},n.na=function(){Ot(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let _=0;_<u.length;_++){const C=a[_];for(let R=0;R<C.length;R++)d.push(u[_])}return d},n.V=function(a){Ot(this);let u=[];if(typeof a=="string")mu(this,a)&&(u=u.concat(this.g.get(Vn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},n.set=function(a,u){return Ot(this),this.i=null,a=Vn(this,a),mu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function gu(a,u,d){_u(a,u),0<d.length&&(a.i=null,a.g.set(Vn(a,u),N(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var _=u[d];const R=encodeURIComponent(String(_)),O=this.V(_);for(_=0;_<O.length;_++){var C=R;O[_]!==""&&(C+="="+encodeURIComponent(String(O[_]))),a.push(C)}}return this.i=a.join("&")};function Vn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function ug(a,u){u&&!a.j&&(Ot(a),a.i=null,a.g.forEach(function(d,_){var C=_.toLowerCase();_!=C&&(_u(this,_),gu(this,C,d))},a)),a.j=u}function hg(a,u){const d=new bi;if(l.Image){const _=new Image;_.onload=w(Vt,d,"TestLoadImage: loaded",!0,u,_),_.onerror=w(Vt,d,"TestLoadImage: error",!1,u,_),_.onabort=w(Vt,d,"TestLoadImage: abort",!1,u,_),_.ontimeout=w(Vt,d,"TestLoadImage: timeout",!1,u,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else u(!1)}function dg(a,u){const d=new bi,_=new AbortController,C=setTimeout(()=>{_.abort(),Vt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:_.signal}).then(R=>{clearTimeout(C),R.ok?Vt(d,"TestPingServer: ok",!0,u):Vt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Vt(d,"TestPingServer: error",!1,u)})}function Vt(a,u,d,_,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),_(d)}catch{}}function fg(){this.g=new Qm}function pg(a,u,d){const _=d||"";try{hu(a,function(C,R){let O=C;h(C)&&(O=Go(C)),u.push(_+R+"="+encodeURIComponent(O))})}catch(C){throw u.push(_+"type="+encodeURIComponent("_badmap")),C}}function Qs(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Qs,Ko),Qs.prototype.g=function(){return new Ys(this.l,this.j)},Qs.prototype.i=function(a){return function(){return a}}({});function Ys(a,u){Se.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Ys,Se),n=Ys.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,xi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vi(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,xi(this)),this.g&&(this.readyState=3,xi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;yu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function yu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Vi(this):xi(this),this.readyState==3&&yu(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Vi(this))},n.Qa=function(a){this.g&&(this.response=a,Vi(this))},n.ga=function(){this.g&&Vi(this)};function Vi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,xi(a)}n.setRequestHeader=function(a,u){this.u.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function xi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ys.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function vu(a){let u="";return ue(a,function(d,_){u+=_,u+=":",u+=d,u+=`\r
`}),u}function sa(a,u,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=vu(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):re(a,u,d))}function le(a){Se.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(le,Se);var _g=/^https?$/i,mg=["POST","PUT"];n=le.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,u,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xo.g(),this.v=this.o?Kc(this.o):Kc(Xo),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(R){Eu(this,R);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var C in _)d.set(C,_[C]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const R of _.keys())d.set(R,_.get(R));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(mg,u,void 0))||_||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,O]of d)this.g.setRequestHeader(R,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wu(this),this.u=!0,this.g.send(a),this.u=!1}catch(R){Eu(this,R)}};function Eu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Tu(a),Xs(a)}function Tu(a){a.A||(a.A=!0,Le(a,"complete"),Le(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Le(this,"complete"),Le(this,"abort"),Xs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xs(this,!0)),le.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Iu(this):this.bb())},n.bb=function(){Iu(this)};function Iu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||pt(a)!=4||a.Z()!=2)){if(a.u&&pt(a)==4)Hc(a.Ea,0,a);else if(Le(a,"readystatechange"),pt(a)==4){a.h=!1;try{const O=a.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var _;if(_=O===0){var C=String(a.D).match(du)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),_=!_g.test(C?C.toLowerCase():"")}d=_}if(d)Le(a,"complete"),Le(a,"success");else{a.m=6;try{var R=2<pt(a)?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.Z()+"]",Tu(a)}}finally{Xs(a)}}}}function Xs(a,u){if(a.g){wu(a);const d=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||Le(a,"ready");try{d.onreadystatechange=_}catch{}}}function wu(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function pt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Km(u)}};function Cu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function gg(a){const u={};a=(a.g&&2<=pt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(B(a[_]))continue;var d=I(a[_]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=u[C]||[];u[C]=R,R.push(d)}T(u,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mi(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Au(a){this.Aa=0,this.i=[],this.j=new bi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mi("baseRetryDelayMs",5e3,a),this.cb=Mi("retryDelaySeedMs",1e4,a),this.Wa=Mi("forwardChannelMaxRetries",2,a),this.wa=Mi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ou(a&&a.concurrentRequestLimit),this.Da=new fg,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Au.prototype,n.la=8,n.G=1,n.connect=function(a,u,d,_){Fe(0),this.W=a,this.H=u||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.I=Vu(this,null,this.W),Zs(this)};function ra(a){if(Ru(a),a.G==3){var u=a.U++,d=ft(a.I);if(re(d,"SID",a.K),re(d,"RID",u),re(d,"TYPE","terminate"),Li(a,d),u=new Dt(a,a.j,u),u.L=2,u.v=Ks(ft(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=xu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),$s(u)}Ou(a)}function Js(a){a.g&&(aa(a),a.g.cancel(),a.g=null)}function Ru(a){Js(a),a.u&&(l.clearTimeout(a.u),a.u=null),er(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Zs(a){if(!au(a.h)&&!a.s){a.s=!0;var u=a.Ga;Ti||Fc(),Ii||(Ti(),Ii=!0),Fo.add(u,a),a.B=0}}function yg(a,u){return lu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Pi(m(a.Ga,a,u),Du(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Dt(this,this.j,a);let R=this.o;if(this.S&&(R?(R=g(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(C.H=R,R=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(u+=_,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Pu(this,C,u),d=ft(this.I),re(d,"RID",a),re(d,"CVER",22),this.D&&re(d,"X-HTTP-Session-Id",this.D),Li(this,d),R&&(this.O?u="headers="+encodeURIComponent(String(vu(R)))+"&"+u:this.m&&sa(d,this.m,R)),ia(this.h,C),this.Ua&&re(d,"TYPE","init"),this.P?(re(d,"$req",u),re(d,"SID","null"),C.T=!0,Zo(C,d,null)):Zo(C,d,u),this.G=2}}else this.G==3&&(a?Su(this,a):this.i.length==0||au(this.h)||Su(this))};function Su(a,u){var d;u?d=u.l:d=a.U++;const _=ft(a.I);re(_,"SID",a.K),re(_,"RID",d),re(_,"AID",a.T),Li(a,_),a.m&&a.o&&sa(_,a.m,a.o),d=new Dt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Pu(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ia(a.h,d),Zo(d,_,u)}function Li(a,u){a.H&&ue(a.H,function(d,_){re(u,_,d)}),a.l&&hu({},function(d,_){re(u,_,d)})}function Pu(a,u,d){d=Math.min(a.i.length,d);var _=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let R=-1;for(;;){const O=["count="+d];R==-1?0<d?(R=C[0].g,O.push("ofs="+R)):R=0:O.push("ofs="+R);let te=!0;for(let we=0;we<d;we++){let J=C[we].g;const Pe=C[we].map;if(J-=R,0>J)R=Math.max(0,C[we].g-100),te=!1;else try{pg(Pe,O,"req"+J+"_")}catch{_&&_(Pe)}}if(te){_=O.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,_}function bu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Ti||Fc(),Ii||(Ti(),Ii=!0),Fo.add(u,a),a.v=0}}function oa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Pi(m(a.Fa,a),Du(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,ku(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Pi(m(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Fe(10),Js(this),ku(this))};function aa(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ku(a){a.g=new Dt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=ft(a.qa);re(u,"RID","rpc"),re(u,"SID",a.K),re(u,"AID",a.T),re(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&re(u,"TO",a.ja),re(u,"TYPE","xmlhttp"),Li(a,u),a.m&&a.o&&sa(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ks(ft(u)),d.m=null,d.P=!0,iu(d,a)}n.Za=function(){this.C!=null&&(this.C=null,Js(this),oa(this),Fe(19))};function er(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Nu(a,u){var d=null;if(a.g==u){er(a),aa(a),a.g=null;var _=2}else if(na(a.h,u))d=u.D,cu(a.h,u),_=1;else return;if(a.G!=0){if(u.o)if(_==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var C=a.B;_=js(),Le(_,new Zc(_,d)),Zs(a)}else bu(a);else if(C=u.s,C==3||C==0&&0<u.X||!(_==1&&yg(a,u)||_==2&&oa(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),C){case 1:un(a,5);break;case 4:un(a,10);break;case 3:un(a,6);break;default:un(a,2)}}}function Du(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function un(a,u){if(a.j.info("Error code "+u),u==2){var d=m(a.fb,a),_=a.Xa;const C=!_;_=new cn(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||zs(_,"https"),Ks(_),C?hg(_.toString(),d):dg(_.toString(),d)}else Fe(2);a.G=0,a.l&&a.l.sa(u),Ou(a),Ru(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function Ou(a){if(a.G=0,a.ka=[],a.l){const u=uu(a.h);(u.length!=0||a.i.length!=0)&&(k(a.ka,u),k(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Vu(a,u,d){var _=d instanceof cn?ft(d):new cn(d);if(_.g!="")u&&(_.g=u+"."+_.g),Gs(_,_.s);else{var C=l.location;_=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var R=new cn(null);_&&zs(R,_),u&&(R.g=u),C&&Gs(R,C),d&&(R.l=d),_=R}return d=a.D,u=a.ya,d&&u&&re(_,d,u),re(_,"VER",a.la),Li(a,_),_}function xu(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new le(new Qs({eb:d})):new le(a.pa),u.Ha(a.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mu(){}n=Mu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function tr(){}tr.prototype.g=function(a,u){return new $e(a,u)};function $e(a,u){Se.call(this),this.g=new Au(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new xn(this)}S($e,Se),$e.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){ra(this.g)},$e.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Go(a),a=d);u.i.push(new tg(u.Ya++,a)),u.G==3&&Zs(u)},$e.prototype.N=function(){this.g.l=null,delete this.j,ra(this.g),delete this.g,$e.aa.N.call(this)};function Lu(a){Qo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}S(Lu,Qo);function Fu(){Yo.call(this),this.status=1}S(Fu,Yo);function xn(a){this.g=a}S(xn,Mu),xn.prototype.ua=function(){Le(this.g,"a")},xn.prototype.ta=function(a){Le(this.g,new Lu(a))},xn.prototype.sa=function(a){Le(this.g,new Fu)},xn.prototype.ra=function(){Le(this.g,"b")},tr.prototype.createWebChannel=tr.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,Qf=function(){return new tr},Kf=function(){return js()},Gf=an,Da={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ws.NO_ERROR=0,Ws.TIMEOUT=8,Ws.HTTP_ERROR=6,_r=Ws,eu.COMPLETE="complete",zf=eu,Qc.EventType=Ri,Ri.OPEN="a",Ri.CLOSE="b",Ri.ERROR="c",Ri.MESSAGE="d",Se.prototype.listen=Se.prototype.K,$i=Qc,le.prototype.listenOnce=le.prototype.L,le.prototype.getLastError=le.prototype.Ka,le.prototype.getLastErrorCode=le.prototype.Ba,le.prototype.getStatus=le.prototype.Z,le.prototype.getResponseJson=le.prototype.Oa,le.prototype.getResponseText=le.prototype.oa,le.prototype.send=le.prototype.ea,le.prototype.setWithCredentials=le.prototype.Ha,$f=le}).apply(typeof sr<"u"?sr:typeof self<"u"?self:typeof window<"u"?window:{});const dh="@firebase/firestore",fh="4.7.15";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi="11.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new ro("@firebase/firestore");function Fn(){return vn.logLevel}function V(n,...e){if(vn.logLevel<=G.DEBUG){const t=e.map(Cl);vn.debug(`Firestore (${pi}): ${n}`,...t)}}function Ct(n,...e){if(vn.logLevel<=G.ERROR){const t=e.map(Cl);vn.error(`Firestore (${pi}): ${n}`,...t)}}function ei(n,...e){if(vn.logLevel<=G.WARN){const t=e.map(Cl);vn.warn(`Firestore (${pi}): ${n}`,...t)}}function Cl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Yf(n,i,t)}function Yf(n,e,t){let i=`FIRESTORE (${pi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Ct(i),new Error(i)}function ee(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||Yf(e,s,i)}function j(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Pt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ne.UNAUTHENTICATED))}shutdown(){}}class iT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class sT{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ee(this.o===void 0,42304);let i=this.i;const s=c=>this.i!==i?(i=this.i,t(c)):Promise.resolve();let r=new Et;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Et,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Et)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ee(typeof i.accessToken=="string",31837,{l:i}),new Xf(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string",2055,{h:e}),new Ne(e)}}class rT{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class oT{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new rT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ph{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ze(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ee(this.o===void 0,3512);const i=r=>{r.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ph(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ee(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ph(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=lT(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%62))}return i}}function $(n,e){return n<e?-1:n>e?1:0}function Oa(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),s=e.codePointAt(t);if(i!==s){if(i<128&&s<128)return $(i,s);{const r=Jf(),o=cT(r.encode(_h(n,t)),r.encode(_h(e,t)));return o!==0?o:$(i,s)}}t+=i>65535?2:1}return $(n.length,e.length)}function _h(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function cT(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return $(n[t],e[t]);return $(n.length,e.length)}function ti(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=-62135596800,gh=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*gh);return new ge(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<mh)throw new x(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gh}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-mh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromTimestamp(e){return new q(e)}static min(){return new q(new ge(0,0))}static max(){return new q(new ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="__name__";class rt{constructor(e,t,i){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&F(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return rt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof rt?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=rt.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return $(e.length,t.length)}static compareSegments(e,t){const i=rt.isNumericId(e),s=rt.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?rt.extractNumericId(e).compare(rt.extractNumericId(t)):Oa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return jt.fromString(e.substring(4,e.length-2))}}class ae extends rt{construct(e,t,i){return new ae(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new x(b.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new ae(t)}static emptyPath(){return new ae([])}}const uT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ce extends rt{construct(e,t,i){return new Ce(e,t,i)}static isValidIdentifier(e){return uT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yh}static keyField(){return new Ce([yh])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new x(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new x(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(i+=l,s++):(r(),s++)}if(r(),o)throw new x(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ce(t)}static emptyPath(){return new Ce([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ae.fromString(e))}static fromName(e){return new M(ae.fromString(e).popFirst(5))}static empty(){return new M(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ae(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=-1;function hT(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=q.fromTimestamp(i===1e9?new ge(t+1,0):new ge(t,i));return new Kt(s,M.empty(),e)}function dT(n){return new Kt(n.readTime,n.key,cs)}class Kt{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Kt(q.min(),M.empty(),cs)}static max(){return new Kt(q.max(),M.empty(),cs)}}function fT(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:$(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _T{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==pT)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,i)=>{t(e)})}static reject(e){return new P((t,i)=>{i(e)})}static waitFor(e){return new P((t,i)=>{let s=0,r=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++r,o&&r===s&&t()},c=>i(c))}),o=!0,r===s&&t()})}static or(e){let t=P.resolve(!1);for(const i of e)t=t.next(s=>s?P.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}static mapArray(e,t){return new P((i,s)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const h=c;t(e[h]).next(f=>{o[h]=f,++l,l===r&&i(o)},f=>s(f))}})}static doWhile(e,t){return new P((i,s)=>{const r=()=>{e()===!0?t().next(()=>{r()},s):i()};r()})}}function mT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function mi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ue(i),this.ce=i=>t.writeSequenceNumber(i))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}uo.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=-1;function ho(n){return n==null}function Nr(n){return n===0&&1/n==-1/0}function gT(n){return typeof n=="number"&&Number.isInteger(n)&&!Nr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="";function yT(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=vh(e)),e=vT(n.get(t),e);return vh(e)}function vT(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case ep:t+="";break;default:t+=r}}return t}function vh(n){return n+ep+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function rn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function tp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _e=class Va{constructor(e,t){this.comparator=e,this.root=t||Wt.EMPTY}insert(e,t){return new Va(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Wt.BLACK,null,null))}remove(e){return new Va(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Wt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rr(this.root,e,this.comparator,!1)}getReverseIterator(){return new rr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rr(this.root,e,this.comparator,!0)}},rr=class{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Wt=class _t{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??_t.RED,this.left=s??_t.EMPTY,this.right=r??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new _t(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}};Wt.EMPTY=null,Wt.RED=!0,Wt.BLACK=!1;Wt.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,i,s,r){return this}insert(e,t,i){return new Wt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Th(this.data.getIterator())}getIteratorFrom(e){return new Th(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ye(this.comparator);return t.data=e,t}}class Th{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.fields=e,e.sort(Ce.comparator)}static empty(){return new Ge([])}unionWith(e){let t=new ye(Ce.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Ge(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ti(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new np("Invalid base64 string: "+r):r}}(e);return new Ae(t)}static fromUint8Array(e){const t=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new Ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const ET=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(n){if(ee(!!n,39018),typeof n=="string"){let e=0;const t=ET.exec(n);if(ee(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:he(n.seconds),nanos:he(n.nanos)}}function he(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yt(n){return typeof n=="string"?Ae.fromBase64String(n):Ae.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="server_timestamp",sp="__type__",rp="__previous_value__",op="__local_write_time__";function Rl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[sp])===null||t===void 0?void 0:t.stringValue)===ip}function fo(n){const e=n.mapValue.fields[rp];return Rl(e)?fo(e):e}function us(n){const e=Qt(n.mapValue.fields[op].timestampValue);return new ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,t,i,s,r,o,l,c,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const Dr="(default)";class hs{constructor(e,t){this.projectId=e,this.database=t||Dr}static empty(){return new hs("","")}get isDefaultDatabase(){return this.database===Dr}isEqual(e){return e instanceof hs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="__type__",lp="__max__",or={mapValue:{fields:{__type__:{stringValue:lp}}}},cp="__vector__",Or="value";function Xt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Rl(n)?4:wT(n)?9007199254740991:IT(n)?10:11:F(28295,{value:n})}function ht(n,e){if(n===e)return!0;const t=Xt(n);if(t!==Xt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return us(n).isEqual(us(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Qt(s.timestampValue),l=Qt(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return Yt(s.bytesValue).isEqual(Yt(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return he(s.geoPointValue.latitude)===he(r.geoPointValue.latitude)&&he(s.geoPointValue.longitude)===he(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return he(s.integerValue)===he(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=he(s.doubleValue),l=he(r.doubleValue);return o===l?Nr(o)===Nr(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return ti(n.arrayValue.values||[],e.arrayValue.values||[],ht);case 10:case 11:return function(s,r){const o=s.mapValue.fields||{},l=r.mapValue.fields||{};if(Eh(o)!==Eh(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!ht(o[c],l[c])))return!1;return!0}(n,e);default:return F(52216,{left:n})}}function ds(n,e){return(n.values||[]).find(t=>ht(t,e))!==void 0}function ni(n,e){if(n===e)return 0;const t=Xt(n),i=Xt(e);if(t!==i)return $(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,e.booleanValue);case 2:return function(r,o){const l=he(r.integerValue||r.doubleValue),c=he(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Ih(n.timestampValue,e.timestampValue);case 4:return Ih(us(n),us(e));case 5:return Oa(n.stringValue,e.stringValue);case 6:return function(r,o){const l=Yt(r),c=Yt(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(r,o){const l=r.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=$(l[h],c[h]);if(f!==0)return f}return $(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,o){const l=$(he(r.latitude),he(o.latitude));return l!==0?l:$(he(r.longitude),he(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return wh(n.arrayValue,e.arrayValue);case 10:return function(r,o){var l,c,h,f;const p=r.fields||{},m=o.fields||{},w=(l=p[Or])===null||l===void 0?void 0:l.arrayValue,S=(c=m[Or])===null||c===void 0?void 0:c.arrayValue,N=$(((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:wh(w,S)}(n.mapValue,e.mapValue);case 11:return function(r,o){if(r===or.mapValue&&o===or.mapValue)return 0;if(r===or.mapValue)return 1;if(o===or.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=Oa(c[p],f[p]);if(m!==0)return m;const w=ni(l[c[p]],h[f[p]]);if(w!==0)return w}return $(c.length,f.length)}(n.mapValue,e.mapValue);default:throw F(23264,{Pe:t})}}function Ih(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return $(n,e);const t=Qt(n),i=Qt(e),s=$(t.seconds,i.seconds);return s!==0?s:$(t.nanos,i.nanos)}function wh(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=ni(t[s],i[s]);if(r)return r}return $(t.length,i.length)}function ii(n){return xa(n)}function xa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Qt(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Yt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=xa(r);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${xa(t.fields[o])}`;return s+"}"}(n.mapValue):F(61005,{value:n})}function mr(n){switch(Xt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fo(n);return e?16+mr(e):16;case 5:return 2*n.stringValue.length;case 6:return Yt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,r)=>s+mr(r),0)}(n.arrayValue);case 10:case 11:return function(i){let s=0;return rn(i.fields,(r,o)=>{s+=r.length+mr(o)}),s}(n.mapValue);default:throw F(13486,{value:n})}}function Ch(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ma(n){return!!n&&"integerValue"in n}function Sl(n){return!!n&&"arrayValue"in n}function Ah(n){return!!n&&"nullValue"in n}function Rh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function gr(n){return!!n&&"mapValue"in n}function IT(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ap])===null||t===void 0?void 0:t.stringValue)===cp}function Xi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return rn(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Xi(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function wT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===lp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!gr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xi(t)}setAll(e){let t=Ce.emptyPath(),i={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,i,s),i={},s=[],t=l.popLast()}o?i[l.lastSegment()]=Xi(o):s.push(l.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());gr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ht(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];gr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){rn(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Be(Xi(this.value))}}function up(n){const e=[];return rn(n.fields,(t,i)=>{const s=new Ce([t]);if(gr(i)){const r=up(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Ge(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,i,s,r,o,l){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new De(e,0,q.min(),q.min(),q.min(),Be.empty(),0)}static newFoundDocument(e,t,i,s){return new De(e,1,t,q.min(),i,s,0)}static newNoDocument(e,t){return new De(e,2,t,q.min(),q.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new De(e,3,t,q.min(),q.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t){this.position=e,this.inclusive=t}}function Sh(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=M.comparator(M.fromName(o.referenceValue),t.key):i=ni(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ph(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ht(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t="asc"){this.field=e,this.dir=t}}function CT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{}class pe extends hp{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new RT(e,t,i):t==="array-contains"?new bT(e,i):t==="in"?new kT(e,i):t==="not-in"?new NT(e,i):t==="array-contains-any"?new DT(e,i):new pe(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new ST(e,i):new PT(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ni(t,this.value)):t!==null&&Xt(this.value)===Xt(t)&&this.matchesComparison(ni(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class st extends hp{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new st(e,t)}matches(e){return dp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function dp(n){return n.op==="and"}function fp(n){return AT(n)&&dp(n)}function AT(n){for(const e of n.filters)if(e instanceof st)return!1;return!0}function La(n){if(n instanceof pe)return n.field.canonicalString()+n.op.toString()+ii(n.value);if(fp(n))return n.filters.map(e=>La(e)).join(",");{const e=n.filters.map(t=>La(t)).join(",");return`${n.op}(${e})`}}function pp(n,e){return n instanceof pe?function(i,s){return s instanceof pe&&i.op===s.op&&i.field.isEqual(s.field)&&ht(i.value,s.value)}(n,e):n instanceof st?function(i,s){return s instanceof st&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,l)=>r&&pp(o,s.filters[l]),!0):!1}(n,e):void F(19439)}function _p(n){return n instanceof pe?function(t){return`${t.field.canonicalString()} ${t.op} ${ii(t.value)}`}(n):n instanceof st?function(t){return t.op.toString()+" {"+t.getFilters().map(_p).join(" ,")+"}"}(n):"Filter"}class RT extends pe{constructor(e,t,i){super(e,t,i),this.key=M.fromName(i.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class ST extends pe{constructor(e,t){super(e,"in",t),this.keys=mp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class PT extends pe{constructor(e,t){super(e,"not-in",t),this.keys=mp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function mp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>M.fromName(i.referenceValue))}class bT extends pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Sl(t)&&ds(t.arrayValue,this.value)}}class kT extends pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ds(this.value.arrayValue,t)}}class NT extends pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ds(this.value.arrayValue,t)}}class DT extends pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Sl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>ds(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,t=null,i=[],s=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=l,this.Ie=null}}function bh(n,e=null,t=[],i=[],s=null,r=null,o=null){return new OT(n,e,t,i,s,r,o)}function Pl(n){const e=j(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>La(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),ho(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>ii(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>ii(i)).join(",")),e.Ie=t}return e.Ie}function bl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!CT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!pp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ph(n.startAt,e.startAt)&&Ph(n.endAt,e.endAt)}function Fa(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t=null,i=[],s=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function VT(n,e,t,i,s,r,o,l){return new Ss(n,e,t,i,s,r,o,l)}function po(n){return new Ss(n)}function kh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function gp(n){return n.collectionGroup!==null}function Ji(n){const e=j(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ee.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ye(Ce.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ee.push(new xr(r,i))}),t.has(Ce.keyField().canonicalString())||e.Ee.push(new xr(Ce.keyField(),i))}return e.Ee}function ct(n){const e=j(n);return e.de||(e.de=xT(e,Ji(n))),e.de}function xT(n,e){if(n.limitType==="F")return bh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new xr(s.field,r)});const t=n.endAt?new Vr(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Vr(n.startAt.position,n.startAt.inclusive):null;return bh(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Ua(n,e){const t=n.filters.concat([e]);return new Ss(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ba(n,e,t){return new Ss(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function _o(n,e){return bl(ct(n),ct(e))&&n.limitType===e.limitType}function yp(n){return`${Pl(ct(n))}|lt:${n.limitType}`}function Un(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(s=>_p(s)).join(", ")}]`),ho(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>ii(s)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>ii(s)).join(",")),`Target(${i})`}(ct(n))}; limitType=${n.limitType})`}function mo(n,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):M.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(n,e)&&function(i,s){for(const r of Ji(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(i,s){return!(i.startAt&&!function(o,l,c){const h=Sh(o,l,c);return o.inclusive?h<=0:h<0}(i.startAt,Ji(i),s)||i.endAt&&!function(o,l,c){const h=Sh(o,l,c);return o.inclusive?h>=0:h>0}(i.endAt,Ji(i),s))}(n,e)}function MT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function vp(n){return(e,t)=>{let i=!1;for(const s of Ji(n)){const r=LT(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function LT(n,e,t){const i=n.field.isKeyField()?M.comparator(e.key,t.key):function(r,o,l){const c=o.data.field(r),h=l.data.field(r);return c!==null&&h!==null?ni(c,h):F(42886)}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return F(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){rn(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return tp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=new _e(M.comparator);function At(){return FT}const Ep=new _e(M.comparator);function zi(...n){let e=Ep;for(const t of n)e=e.insert(t.key,t);return e}function Tp(n){let e=Ep;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function fn(){return Zi()}function Ip(){return Zi()}function Zi(){return new Pn(n=>n.toString(),(n,e)=>n.isEqual(e))}const UT=new _e(M.comparator),BT=new ye(M.comparator);function Y(...n){let e=BT;for(const t of n)e=e.add(t);return e}const qT=new ye($);function jT(){return qT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nr(e)?"-0":e}}function wp(n){return{integerValue:""+n}}function WT(n,e){return gT(e)?wp(e):kl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this._=void 0}}function HT(n,e,t){return n instanceof Mr?function(s,r){const o={fields:{[sp]:{stringValue:ip},[op]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Rl(r)&&(r=fo(r)),r&&(o.fields[rp]=r),{mapValue:o}}(t,e):n instanceof fs?Ap(n,e):n instanceof ps?Rp(n,e):function(s,r){const o=Cp(s,r),l=Nh(o)+Nh(s.Re);return Ma(o)&&Ma(s.Re)?wp(l):kl(s.serializer,l)}(n,e)}function $T(n,e,t){return n instanceof fs?Ap(n,e):n instanceof ps?Rp(n,e):t}function Cp(n,e){return n instanceof Lr?function(i){return Ma(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class Mr extends go{}class fs extends go{constructor(e){super(),this.elements=e}}function Ap(n,e){const t=Sp(e);for(const i of n.elements)t.some(s=>ht(s,i))||t.push(i);return{arrayValue:{values:t}}}class ps extends go{constructor(e){super(),this.elements=e}}function Rp(n,e){let t=Sp(e);for(const i of n.elements)t=t.filter(s=>!ht(s,i));return{arrayValue:{values:t}}}class Lr extends go{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Nh(n){return he(n.integerValue||n.doubleValue)}function Sp(n){return Sl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function zT(n,e){return n.field.isEqual(e.field)&&function(i,s){return i instanceof fs&&s instanceof fs||i instanceof ps&&s instanceof ps?ti(i.elements,s.elements,ht):i instanceof Lr&&s instanceof Lr?ht(i.Re,s.Re):i instanceof Mr&&s instanceof Mr}(n.transform,e.transform)}class GT{constructor(e,t){this.version=e,this.transformResults=t}}class Ye{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ye}static exists(e){return new Ye(void 0,e)}static updateTime(e){return new Ye(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class yo{}function Pp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Nl(n.key,Ye.none()):new Ps(n.key,n.data,Ye.none());{const t=n.data,i=Be.empty();let s=new ye(Ce.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new on(n.key,i,new Ge(s.toArray()),Ye.none())}}function KT(n,e,t){n instanceof Ps?function(s,r,o){const l=s.value.clone(),c=Oh(s.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof on?function(s,r,o){if(!yr(s.precondition,r))return void r.convertToUnknownDocument(o.version);const l=Oh(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(bp(s)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function es(n,e,t,i){return n instanceof Ps?function(r,o,l,c){if(!yr(r.precondition,o))return l;const h=r.value.clone(),f=Vh(r.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,i):n instanceof on?function(r,o,l,c){if(!yr(r.precondition,o))return l;const h=Vh(r.fieldTransforms,c,o),f=o.data;return f.setAll(bp(r)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(p=>p.field))}(n,e,t,i):function(r,o,l){return yr(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function QT(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=Cp(i.transform,s||null);r!=null&&(t===null&&(t=Be.empty()),t.set(i.field,r))}return t||null}function Dh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ti(i,s,(r,o)=>zT(r,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ps extends yo{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class on extends yo{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function bp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Oh(n,e,t){const i=new Map;ee(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,l=e.data.field(r.field);i.set(r.field,$T(o,l,t[s]))}return i}function Vh(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,HT(r,o,e))}return i}class Nl extends yo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YT extends yo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&KT(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=es(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=es(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Ip();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=t.has(s.key)?null:l;const c=Pp(o,l);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(q.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Y())}isEqual(e){return this.batchId===e.batchId&&ti(this.mutations,e.mutations,(t,i)=>Dh(t,i))&&ti(this.baseMutations,e.baseMutations,(t,i)=>Dh(t,i))}}class Dl{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){ee(e.mutations.length===i.length,58842,{fe:e.mutations.length,ge:i.length});let s=function(){return UT}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Dl(e,t,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe,X;function eI(n){switch(n){case b.OK:return F(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function kp(n){if(n===void 0)return Ct("GRPC error has no .code"),b.UNKNOWN;switch(n){case fe.OK:return b.OK;case fe.CANCELLED:return b.CANCELLED;case fe.UNKNOWN:return b.UNKNOWN;case fe.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case fe.INTERNAL:return b.INTERNAL;case fe.UNAVAILABLE:return b.UNAVAILABLE;case fe.UNAUTHENTICATED:return b.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case fe.NOT_FOUND:return b.NOT_FOUND;case fe.ALREADY_EXISTS:return b.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return b.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case fe.ABORTED:return b.ABORTED;case fe.OUT_OF_RANGE:return b.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return b.UNIMPLEMENTED;case fe.DATA_LOSS:return b.DATA_LOSS;default:return F(39323,{code:n})}}(X=fe||(fe={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=new jt([4294967295,4294967295],0);function xh(n){const e=Jf().encode(n),t=new Hf;return t.update(e),new Uint8Array(t.digest())}function Mh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new jt([t,i],0),new jt([s,r],0)]}class Ol{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Gi(`Invalid padding: ${t}`);if(i<0)throw new Gi(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Gi(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Gi(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=jt.fromNumber(this.pe)}we(e,t,i){let s=e.add(t.multiply(jt.fromNumber(i)));return s.compare(tI)===1&&(s=new jt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=xh(e),[i,s]=Mh(t);for(let r=0;r<this.hashCount;r++){const o=this.we(i,s,r);if(!this.Se(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Ol(r,s,t);return i.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const t=xh(e),[i,s]=Mh(t);for(let r=0;r<this.hashCount;r++){const o=this.we(i,s,r);this.be(o)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Gi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,bs.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new vo(q.min(),s,new _e($),At(),Y())}}class bs{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new bs(i,t,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t,i,s){this.De=e,this.removedTargetIds=t,this.key=i,this.ve=s}}class Np{constructor(e,t){this.targetId=e,this.Ce=t}}class Dp{constructor(e,t,i=Ae.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Lh{constructor(){this.Fe=0,this.Me=Fh(),this.xe=Ae.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Y(),t=Y(),i=Y();return this.Me.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:F(38017,{changeType:r})}}),new bs(this.xe,this.Oe,e,t,i)}Qe(){this.Ne=!1,this.Me=Fh()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ee(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class nI{constructor(e){this.ze=e,this.je=new Map,this.He=At(),this.Je=ar(),this.Ye=ar(),this.Ze=new _e($)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const i=this.rt(t);switch(e.state){case 0:this.it(t)&&i.ke(e.resumeToken);break;case 1:i.We(),i.Be||i.Qe(),i.ke(e.resumeToken);break;case 2:i.We(),i.Be||this.removeTarget(t);break;case 3:this.it(t)&&(i.Ge(),i.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),i.ke(e.resumeToken));break;default:F(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((i,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,i=e.Ce.count,s=this._t(t);if(s){const r=s.target;if(Fa(r))if(i===0){const o=new M(r.path);this.tt(t,o,De.newNoDocument(o,q.min()))}else ee(i===1,20013,{expectedCount:i});else{const o=this.ut(t);if(o!==i){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,l;try{o=Yt(i).toUint8Array()}catch(c){if(c instanceof np)return ei("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ol(o,s,r)}catch(c){return ei(c instanceof Gi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,t,i){return t.Ce.count===i-this.Tt(e,t.targetId)?0:2}Tt(e,t){const i=this.ze.getRemoteKeysForTarget(t);let s=0;return i.forEach(r=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.tt(t,r,null),s++)}),s}It(e){const t=new Map;this.je.forEach((r,o)=>{const l=this._t(o);if(l){if(r.current&&Fa(l.target)){const c=new M(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,De.newNoDocument(c,e))}r.Le&&(t.set(o,r.qe()),r.Qe())}});let i=Y();this.Ye.forEach((r,o)=>{let l=!0;o.forEachWhile(c=>{const h=this._t(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(r))}),this.He.forEach((r,o)=>o.setReadTime(e));const s=new vo(e,t,this.Ze,this.He,i);return this.He=At(),this.Je=ar(),this.Ye=ar(),this.Ze=new _e($),s}et(e,t){if(!this.it(e))return;const i=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,i),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,i){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),i&&(this.He=this.He.insert(t,i))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Lh,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new ye($),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ye($),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Lh),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function ar(){return new _e(M.comparator)}function Fh(){return new _e(M.comparator)}const iI={asc:"ASCENDING",desc:"DESCENDING"},sI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rI={and:"AND",or:"OR"};class oI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function qa(n,e){return n.useProto3Json||ho(e)?e:{value:e}}function Fr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Op(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function aI(n,e){return Fr(n,e.toTimestamp())}function ut(n){return ee(!!n,49232),q.fromTimestamp(function(t){const i=Qt(t);return new ge(i.seconds,i.nanos)}(n))}function Vl(n,e){return ja(n,e).canonicalString()}function ja(n,e){const t=function(s){return new ae(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Vp(n){const e=ae.fromString(n);return ee(Up(e),10190,{key:e.toString()}),e}function Wa(n,e){return Vl(n.databaseId,e.path)}function fa(n,e){const t=Vp(e);if(t.get(1)!==n.databaseId.projectId)throw new x(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(Mp(t))}function xp(n,e){return Vl(n.databaseId,e)}function lI(n){const e=Vp(n);return e.length===4?ae.emptyPath():Mp(e)}function Ha(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Mp(n){return ee(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Uh(n,e,t){return{name:Wa(n,e),fields:t.value.mapValue.fields}}function cI(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(h,f){return h.useProto3Json?(ee(f===void 0||typeof f=="string",58123),Ae.fromBase64String(f||"")):(ee(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ae.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?b.UNKNOWN:kp(h.code);return new x(f,h.message||"")}(o);t=new Dp(i,s,r,l||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=fa(n,i.document.name),r=ut(i.document.updateTime),o=i.document.createTime?ut(i.document.createTime):q.min(),l=new Be({mapValue:{fields:i.document.fields}}),c=De.newFoundDocument(s,r,o,l),h=i.targetIds||[],f=i.removedTargetIds||[];t=new vr(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=fa(n,i.document),r=i.readTime?ut(i.readTime):q.min(),o=De.newNoDocument(s,r),l=i.removedTargetIds||[];t=new vr([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=fa(n,i.document),r=i.removedTargetIds||[];t=new vr([],r,s,null)}else{if(!("filter"in e))return F(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new ZT(s,r),l=i.targetId;t=new Np(l,o)}}return t}function uI(n,e){let t;if(e instanceof Ps)t={update:Uh(n,e.key,e.value)};else if(e instanceof Nl)t={delete:Wa(n,e.key)};else if(e instanceof on)t={update:Uh(n,e.key,e.data),updateMask:vI(e.fieldMask)};else{if(!(e instanceof YT))return F(16599,{ft:e.type});t={verify:Wa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const l=o.transform;if(l instanceof Mr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ps)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Lr)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw F(20930,{transform:o.transform})}(0,i))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:aI(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:F(27497)}(n,e.precondition)),t}function hI(n,e){return n&&n.length>0?(ee(e!==void 0,14353),n.map(t=>function(s,r){let o=s.updateTime?ut(s.updateTime):ut(r);return o.isEqual(q.min())&&(o=ut(r)),new GT(o,s.transformResults||[])}(t,e))):[]}function dI(n,e){return{documents:[xp(n,e.path)]}}function fI(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=xp(n,s);const r=function(h){if(h.length!==0)return Fp(st.create(h,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Bn(m.field),direction:mI(m.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=qa(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:t,parent:s}}function pI(n){let e=lI(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){ee(i===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let r=[];t.where&&(r=function(p){const m=Lp(p);return m instanceof st&&fp(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(S){return new xr(qn(S.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ho(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(p){const m=!!p.before,w=p.values||[];return new Vr(w,m)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const m=!p.before,w=p.values||[];return new Vr(w,m)}(t.endAt)),VT(e,s,o,r,l,"F",c,h)}function _I(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Lp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=qn(t.unaryFilter.field);return pe.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=qn(t.unaryFilter.field);return pe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=qn(t.unaryFilter.field);return pe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qn(t.unaryFilter.field);return pe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(n):n.fieldFilter!==void 0?function(t){return pe.create(qn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return st.create(t.compositeFilter.filters.map(i=>Lp(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(t.compositeFilter.op))}(n):F(30097,{filter:n})}function mI(n){return iI[n]}function gI(n){return sI[n]}function yI(n){return rI[n]}function Bn(n){return{fieldPath:n.canonicalString()}}function qn(n){return Ce.fromServerFormat(n.fieldPath)}function Fp(n){return n instanceof pe?function(t){if(t.op==="=="){if(Rh(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NAN"}};if(Ah(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Rh(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NAN"}};if(Ah(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bn(t.field),op:gI(t.op),value:t.value}}}(n):n instanceof st?function(t){const i=t.getFilters().map(s=>Fp(s));return i.length===1?i[0]:{compositeFilter:{op:yI(t.op),filters:i}}}(n):F(54877,{filter:n})}function vI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Up(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,i,s,r=q.min(),o=q.min(),l=Ae.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e){this.wt=e}}function TI(n){const e=pI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ba(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.Cn=new wI}addToCollectionParentIndex(e,t){return this.Cn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Kt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Kt.min())}updateCollectionGroup(e,t,i){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class wI{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new ye(ae.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new ye(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Bp=41943040;class Ue{static withCacheSize(e){return new Ue(e,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue.DEFAULT_COLLECTION_PERCENTILE=10,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ue.DEFAULT=new Ue(Bp,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ue.DISABLED=new Ue(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new si(0)}static lr(){return new si(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="LruGarbageCollector",CI=1048576;function jh([n,e],[t,i]){const s=$(n,t);return s===0?$(e,i):s}class AI{constructor(e){this.Er=e,this.buffer=new ye(jh),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();jh(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class RI{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){V(qh,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){mi(t)?V(qh,"Ignoring IndexedDB error during garbage collection: ",t):await _i(t)}await this.mr(3e5)})}}class SI{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return P.resolve(uo.le);const i=new AI(t);return this.gr.forEachTarget(e,s=>i.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>i.Rr(s))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.gr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Bh)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bh):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let i,s,r,o,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(i=p,l=Date.now(),this.removeTargets(e,i,t))).next(p=>(r=p,c=Date.now(),this.removeOrphanedDocuments(e,i))).next(p=>(h=Date.now(),Fn()<=G.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${r} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:p})))}}function PI(n,e){return new SI(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(){this.changes=new Pn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?P.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&es(i.mutation,s,Ge.empty(),ge.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Y()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Y()){const s=fn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(r=>{let o=zi();return r.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=fn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Y()))}populateOverlays(e,t,i){const s=[];return i.forEach(r=>{t.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,i,s){let r=At();const o=Zi(),l=function(){return Zi()}();return t.forEach((c,h)=>{const f=i.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof on)?r=r.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),es(f.mutation,h,f.mutation.getFieldMask(),ge.now())):o.set(h.key,Ge.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return l.set(h,new kI(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const i=Zi();let s=new _e((o,l)=>o-l),r=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=i.get(c)||Ge.empty();f=l.applyToLocalView(h,f),i.set(c,f);const p=(s.get(l.batchId)||Y()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=Ip();f.forEach(m=>{if(!r.has(m)){const w=Pp(t.get(m),i.get(m));w!==null&&p.set(m,w),r=r.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return P.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,s){return function(o){return M.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):gp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):P.resolve(fn());let l=cs,c=r;return o.next(h=>P.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),r.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,h,r)).next(()=>this.computeViews(e,c,h,Y())).next(f=>({batchId:l,changes:Tp(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(i=>{let s=zi();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=zi();return this.indexManager.getCollectionParents(e,r).next(l=>P.forEach(l,c=>{const h=function(p,m){return new Ss(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,h,i,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s))).next(o=>{r.forEach((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,De.newInvalidDocument(f)))});let l=zi();return o.forEach((c,h)=>{const f=r.get(c);f!==void 0&&es(f.mutation,h,Ge.empty(),ge.now()),mo(t,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return P.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ut(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(s){return{name:s.name,query:TI(s.bundledQuery),readTime:ut(s.readTime)}}(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(){this.overlays=new _e(M.comparator),this.Qr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const i=fn();return P.forEach(t,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,r)=>{this.bt(e,t,r)}),P.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Qr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.Qr.delete(i)),P.resolve()}getOverlaysForCollection(e,t,i){const s=fn(),r=t.length+1,o=new M(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new _e((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>i){let f=r.get(h.largestBatchId);f===null&&(f=fn(),r=r.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=fn(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return P.resolve(l)}bt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(i.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new JT(t,i));let r=this.Qr.get(t);r===void 0&&(r=Y(),this.Qr.set(t,r)),this.Qr.set(t,r.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(){this.sessionToken=Ae.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.$r=new ye(Ee.Ur),this.Kr=new ye(Ee.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const i=new Ee(e,t);this.$r=this.$r.add(i),this.Kr=this.Kr.add(i)}Gr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.zr(new Ee(e,t))}jr(e,t){e.forEach(i=>this.removeReference(i,t))}Hr(e){const t=new M(new ae([])),i=new Ee(t,e),s=new Ee(t,e+1),r=[];return this.Kr.forEachInRange([i,s],o=>{this.zr(o),r.push(o.key)}),r}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new M(new ae([])),i=new Ee(t,e),s=new Ee(t,e+1);let r=Y();return this.Kr.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new Ee(e,0),i=this.$r.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Ee{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return M.comparator(e.key,t.key)||$(e.Zr,t.Zr)}static Wr(e,t){return $(e.Zr,t.Zr)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new ye(Ee.Ur)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XT(r,t,i,s);this.mutationQueue.push(o);for(const l of s)this.Xr=this.Xr.add(new Ee(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.ti(i),r=s<0?0:s;return P.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Al:this.nr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Ee(t,0),s=new Ee(t,Number.POSITIVE_INFINITY),r=[];return this.Xr.forEachInRange([i,s],o=>{const l=this.ei(o.Zr);r.push(l)}),P.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new ye($);return t.forEach(s=>{const r=new Ee(s,0),o=new Ee(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([r,o],l=>{i=i.add(l.Zr)})}),P.resolve(this.ni(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;M.isDocumentKey(r)||(r=r.child(""));const o=new Ee(new M(r),0);let l=new ye($);return this.Xr.forEachWhile(c=>{const h=c.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Zr)),!0)},o),P.resolve(this.ni(l))}ni(e){const t=[];return e.forEach(i=>{const s=this.ei(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ee(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Xr;return P.forEach(t.mutations,s=>{const r=new Ee(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=i})}sr(e){}containsKey(e,t){const i=new Ee(t,0),s=this.Xr.firstAfterOrEqual(i);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.ii=e,this.docs=function(){return new _e(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.ii(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return P.resolve(i?i.document.mutableCopy():De.newInvalidDocument(t))}getEntries(e,t){let i=At();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():De.newInvalidDocument(s))}),P.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=At();const o=t.path,l=new M(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||fT(dT(f),i)<=0||(s.has(f.key)||mo(t,f))&&(r=r.insert(f.key,f.mutableCopy()))}return P.resolve(r)}getAllFromCollectionGroup(e,t,i,s){F(9500)}si(e,t){return P.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new LI(this)}getSize(e){return P.resolve(this.size)}}class LI extends bI{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.Br.addEntry(e,s)):this.Br.removeEntry(i)}),P.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.persistence=e,this.oi=new Pn(t=>Pl(t),bl),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this._i=0,this.ai=new xl,this.targetCount=0,this.ui=si.cr()}forEachTarget(e,t){return this.oi.forEach((i,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this._i&&(this._i=t),P.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new si(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Tr(t),P.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=t&&i.get(l.targetId)===null&&(this.oi.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),P.waitFor(r).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const i=this.oi.get(t)||null;return P.resolve(i)}addMatchingKeys(e,t,i){return this.ai.Gr(t,i),P.resolve()}removeMatchingKeys(e,t,i){this.ai.jr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),P.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const i=this.ai.Yr(t);return P.resolve(i)}containsKey(e,t){return P.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t){this.ci={},this.overlays={},this.li=new uo(0),this.hi=!1,this.hi=!0,this.Pi=new VI,this.referenceDelegate=e(this),this.Ti=new FI(this),this.indexManager=new II,this.remoteDocumentCache=function(s){return new MI(s)}(i=>this.referenceDelegate.Ii(i)),this.serializer=new EI(t),this.Ei=new DI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new OI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ci[e.toKey()];return i||(i=new xI(t,this.referenceDelegate),this.ci[e.toKey()]=i),i}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,i){V("MemoryPersistence","Starting transaction:",e);const s=new UI(this.li.next());return this.referenceDelegate.di(),i(s).next(r=>this.referenceDelegate.Ai(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ri(e,t){return P.or(Object.values(this.ci).map(i=>()=>i.containsKey(e,t)))}}class UI extends _T{constructor(e){super(),this.currentSequenceNumber=e}}class Ml{constructor(e){this.persistence=e,this.Vi=new xl,this.mi=null}static fi(e){return new Ml(e)}get gi(){if(this.mi)return this.mi;throw F(60996)}addReference(e,t,i){return this.Vi.addReference(i,t),this.gi.delete(i.toString()),P.resolve()}removeReference(e,t,i){return this.Vi.removeReference(i,t),this.gi.add(i.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(s=>this.gi.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.gi.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.gi,i=>{const s=M.fromPath(i);return this.pi(e,s).next(r=>{r||t.removeEntry(s,q.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(i=>{i?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return P.or([()=>P.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Ur{constructor(e,t){this.persistence=e,this.yi=new Pn(i=>yT(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=PI(this,t)}static fi(e,t){return new Ur(e,t)}di(){}Ai(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(s=>i+s))}Sr(e){let t=0;return this.yr(e,i=>{t++}).next(()=>t)}yr(e,t){return P.forEach(this.yi,(i,s)=>this.Dr(e,i,s).next(r=>r?P.resolve():t(s)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,t).next(l=>{l||(i++,r.removeEntry(o,q.min()))})).next(()=>r.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.yi.set(i,e.currentSequenceNumber),P.resolve()}removeReference(e,t,i){return this.yi.set(i,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),P.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=mr(e.data.value)),t}Dr(e,t,i){return P.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.yi.get(t);return P.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.ds=i,this.As=s}static Rs(e,t){let i=Y(),s=Y();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Ll(e,t.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return xg()?8:mT(Me())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.ws(e,t).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Ss(e,t,s,i).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new BI;return this.bs(e,t,o).next(l=>{if(r.result=l,this.fs)return this.Ds(e,t,o,l.size)})}).next(()=>r.result)}Ds(e,t,i,s){return i.documentReadCount<this.gs?(Fn()<=G.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Un(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),P.resolve()):(Fn()<=G.DEBUG&&V("QueryEngine","Query:",Un(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ps*s?(Fn()<=G.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Un(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ct(t))):P.resolve())}ws(e,t){if(kh(t))return P.resolve(null);let i=ct(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ba(t,null,"F"),i=ct(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=Y(...r);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,i).next(c=>{const h=this.vs(t,l);return this.Cs(t,h,o,c.readTime)?this.ws(e,Ba(t,null,"F")):this.Fs(e,h,t,c)}))})))}Ss(e,t,i,s){return kh(t)||s.isEqual(q.min())?P.resolve(null):this.ys.getDocuments(e,i).next(r=>{const o=this.vs(t,r);return this.Cs(t,o,i,s)?P.resolve(null):(Fn()<=G.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Un(t)),this.Fs(e,o,t,hT(s,cs)).next(l=>l))})}vs(e,t){let i=new ye(vp(e));return t.forEach((s,r)=>{mo(e,r)&&(i=i.add(r))}),i}Cs(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}bs(e,t,i){return Fn()<=G.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Un(t)),this.ys.getDocumentsMatchingQuery(e,t,Kt.min(),i)}Fs(e,t,i,s){return this.ys.getDocumentsMatchingQuery(e,i,s).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="LocalStore",jI=3e8;class WI{constructor(e,t,i,s){this.persistence=e,this.Ms=t,this.serializer=s,this.xs=new _e($),this.Os=new Pn(r=>Pl(r),bl),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(i)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NI(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function HI(n,e,t,i){return new WI(n,e,t,i)}async function jp(n,e){const t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,t.Ls(e),t.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],l=[];let c=Y();for(const h of s){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of r){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(i,c).next(h=>({ks:h,removedBatchIds:o,addedBatchIds:l}))})})}function $I(n,e){const t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=t.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,m=p.keys();let w=P.resolve();return m.forEach(S=>{w=w.next(()=>f.getEntry(c,S)).next(N=>{const k=h.docVersions.get(S);ee(k!==null,48541),N.version.compareTo(k)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,i,e,r).next(()=>r.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let c=Y();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function Wp(n){const e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function zI(n,e){const t=j(n),i=e.snapshotVersion;let s=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Bs.newChangeBuffer({trackRemovals:!0});s=t.xs;const l=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;l.push(t.Ti.removeMatchingKeys(r,f.removedDocuments,p).next(()=>t.Ti.addMatchingKeys(r,f.addedDocuments,p)));let w=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Ae.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,i)),s=s.insert(p,w),function(N,k,W){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=jI?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(m,w,f)&&l.push(t.Ti.updateTargetData(r,w))});let c=At(),h=Y();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(r,f))}),l.push(GI(r,o,e.documentUpdates).next(f=>{c=f.qs,h=f.Qs})),!i.isEqual(q.min())){const f=t.Ti.getLastRemoteSnapshotVersion(r).next(p=>t.Ti.setTargetsMetadata(r,r.currentSequenceNumber,i));l.push(f)}return P.waitFor(l).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,h)).next(()=>c)}).then(r=>(t.xs=s,r))}function GI(n,e,t){let i=Y(),s=Y();return t.forEach(r=>i=i.add(r)),e.getEntries(n,i).next(r=>{let o=At();return t.forEach((l,c)=>{const h=r.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(q.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):V(Fl,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{qs:o,Qs:s}})}function KI(n,e){const t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=Al),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function QI(n,e){const t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.Ti.getTargetData(i,e).next(r=>r?(s=r,P.resolve(s)):t.Ti.allocateTargetId(i).next(o=>(s=new Bt(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.Ti.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.xs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.xs=t.xs.insert(i.targetId,i),t.Os.set(e,i.targetId)),i})}async function $a(n,e,t){const i=j(n),s=i.xs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!mi(o))throw o;V(Fl,`Failed to update sequence numbers for target ${e}: ${o}`)}i.xs=i.xs.remove(e),i.Os.delete(s.target)}function Wh(n,e,t){const i=j(n);let s=q.min(),r=Y();return i.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,f){const p=j(c),m=p.Os.get(f);return m!==void 0?P.resolve(p.xs.get(m)):p.Ti.getTargetData(h,f)}(i,o,ct(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.Ti.getMatchingKeysForTargetId(o,l.targetId).next(c=>{r=c})}).next(()=>i.Ms.getDocumentsMatchingQuery(o,e,t?s:q.min(),t?r:Y())).next(l=>(YI(i,MT(e),l),{documents:l,$s:r})))}function YI(n,e,t){let i=n.Ns.get(e)||q.min();t.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),n.Ns.set(e,i)}class Hh{constructor(){this.activeTargetIds=jT()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XI{constructor(){this.xo=new Hh,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,i){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Hh,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="ConnectivityMonitor";class zh{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){V($h,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){V($h,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lr=null;function za(){return lr===null?lr=function(){return 268435456+Math.round(2147483648*Math.random())}():lr++,"0x"+lr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="RestConnection",ZI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ew{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${i}/databases/${s}`,this.Go=this.databaseId.database===Dr?`project_id=${i}`:`project_id=${i}&database_id=${s}`}zo(e,t,i,s,r){const o=za(),l=this.jo(e,t.toUriEncodedString());V(pa,`Sending RPC '${e}' ${o}:`,l,i);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,r);const{host:h}=new URL(l),f=An(h);return this.Jo(e,l,c,i,f).then(p=>(V(pa,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ei(pa,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",i),p})}Yo(e,t,i,s,r,o){return this.zo(e,t,i,s,r)}Ho(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}jo(e,t){const i=ZI[e];return`${this.Ko}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="WebChannelConnection";class nw extends ew{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,s,r){const o=za();return new Promise((l,c)=>{const h=new $f;h.setWithCredentials(!0),h.listenOnce(zf.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case _r.NO_ERROR:const p=h.getResponseJson();V(ke,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case _r.TIMEOUT:V(ke,`RPC '${e}' ${o} timed out`),c(new x(b.DEADLINE_EXCEEDED,"Request time out"));break;case _r.HTTP_ERROR:const m=h.getStatus();if(V(ke,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const N=function(W){const B=W.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(B)>=0?B:b.UNKNOWN}(S.status);c(new x(N,S.message))}else c(new x(b.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new x(b.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{V(ke,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);V(ke,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,i,15)})}T_(e,t,i){const s=za(),r=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Qf(),l=Kf(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const f=r.join("");V(ke,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);let m=!1,w=!1;const S=new tw({Zo:k=>{w?V(ke,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(V(ke,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),V(ke,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},Xo:()=>p.close()}),N=(k,W,B)=>{k.listen(W,H=>{try{B(H)}catch(se){setTimeout(()=>{throw se},0)}})};return N(p,$i.EventType.OPEN,()=>{w||(V(ke,`RPC '${e}' stream ${s} transport opened.`),S.__())}),N(p,$i.EventType.CLOSE,()=>{w||(w=!0,V(ke,`RPC '${e}' stream ${s} transport closed`),S.u_())}),N(p,$i.EventType.ERROR,k=>{w||(w=!0,ei(ke,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),S.u_(new x(b.UNAVAILABLE,"The operation could not be completed")))}),N(p,$i.EventType.MESSAGE,k=>{var W;if(!w){const B=k.data[0];ee(!!B,16349);const H=B,se=(H==null?void 0:H.error)||((W=H[0])===null||W===void 0?void 0:W.error);if(se){V(ke,`RPC '${e}' stream ${s} received error:`,se);const Qe=se.status;let ue=function(v){const E=fe[v];if(E!==void 0)return kp(E)}(Qe),T=se.message;ue===void 0&&(ue=b.INTERNAL,T="Unknown error status: "+Qe+" with message "+se.message),w=!0,S.u_(new x(ue,T)),p.close()}else V(ke,`RPC '${e}' stream ${s} received:`,B),S.c_(B)}}),N(l,Gf.STAT_EVENT,k=>{k.stat===Da.PROXY?V(ke,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Da.NOPROXY&&V(ke,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.a_()},0),S}}function _a(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n){return new oI(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,t,i=1e3,s=1.5,r=6e4){this.xi=e,this.timerId=t,this.I_=i,this.E_=s,this.d_=r,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),i=Math.max(0,Date.now()-this.V_),s=Math.max(0,t-i);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="PersistentStream";class $p{constructor(e,t,i,s,r,o,l,c){this.xi=e,this.y_=i,this.w_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new Hp(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(Ct(t.toString()),Ct("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.S_===t&&this.K_(i,s)},i=>{e(()=>{const s=new x(b.UNKNOWN,"Fetching auth token failed: "+i.message);return this.W_(s)})})}K_(e,t){const i=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{i(()=>this.listener.e_())}),this.stream.n_(()=>{i(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{i(()=>this.W_(s))}),this.stream.onMessage(s=>{i(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return V(Gh,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(V(Gh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iw extends $p{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=cI(this.serializer,e),i=function(r){if(!("targetChange"in r))return q.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?ut(o.readTime):q.min()}(e);return this.listener.j_(t,i)}H_(e){const t={};t.database=Ha(this.serializer),t.addTarget=function(r,o){let l;const c=o.target;if(l=Fa(c)?{documents:dI(r,c)}:{query:fI(r,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Op(r,o.resumeToken);const h=qa(r,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(q.min())>0){l.readTime=Fr(r,o.snapshotVersion.toTimestamp());const h=qa(r,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const i=_I(this.serializer,e);i&&(t.labels=i),this.L_(t)}J_(e){const t={};t.database=Ha(this.serializer),t.removeTarget=e,this.L_(t)}}class sw extends $p{constructor(e,t,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return ee(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ee(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){ee(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=hI(e.writeResults,e.commitTime),i=ut(e.commitTime);return this.listener.ea(i,t)}ta(){const e={};e.database=Ha(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>uI(this.serializer,i))};this.L_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{}class ow extends rw{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.na=!1}ra(){if(this.na)throw new x(b.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,i,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.zo(e,ja(t,i),s,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new x(b.UNKNOWN,r.toString())})}Yo(e,t,i,s,r){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,ja(t,i),s,o,l,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(b.UNKNOWN,o.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class aw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Ct(t),this.oa=!1):V("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En="RemoteStore";class lw{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=r,this.Ea.No(o=>{i.enqueueAndForget(async()=>{bn(this)&&(V(En,"Restarting streams for network reachability change."),await async function(c){const h=j(c);h.Ta.add(4),await ks(h),h.da.set("Unknown"),h.Ta.delete(4),await To(h)}(this))})}),this.da=new aw(i,s)}}async function To(n){if(bn(n))for(const e of n.Ia)await e(!0)}async function ks(n){for(const e of n.Ia)await e(!1)}function zp(n,e){const t=j(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),jl(t)?ql(t):gi(t).M_()&&Bl(t,e))}function Ul(n,e){const t=j(n),i=gi(t);t.Pa.delete(e),i.M_()&&Gp(t,e),t.Pa.size===0&&(i.M_()?i.N_():bn(t)&&t.da.set("Unknown"))}function Bl(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}gi(n).H_(e)}function Gp(n,e){n.Aa.Ke(e),gi(n).J_(e)}function ql(n){n.Aa=new nI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),gi(n).start(),n.da._a()}function jl(n){return bn(n)&&!gi(n).F_()&&n.Pa.size>0}function bn(n){return j(n).Ta.size===0}function Kp(n){n.Aa=void 0}async function cw(n){n.da.set("Online")}async function uw(n){n.Pa.forEach((e,t)=>{Bl(n,e)})}async function hw(n,e){Kp(n),jl(n)?(n.da.ca(e),ql(n)):n.da.set("Unknown")}async function dw(n,e,t){if(n.da.set("Online"),e instanceof Dp&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const l of r.targetIds)s.Pa.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Pa.delete(l),s.Aa.removeTarget(l))}(n,e)}catch(i){V(En,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Br(n,i)}else if(e instanceof vr?n.Aa.Xe(e):e instanceof Np?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(q.min()))try{const i=await Wp(n.localStore);t.compareTo(i)>=0&&await function(r,o){const l=r.Aa.It(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=r.Pa.get(h);f&&r.Pa.set(h,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const f=r.Pa.get(c);if(!f)return;r.Pa.set(c,f.withResumeToken(Ae.EMPTY_BYTE_STRING,f.snapshotVersion)),Gp(r,c);const p=new Bt(f.target,c,h,f.sequenceNumber);Bl(r,p)}),r.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(i){V(En,"Failed to raise snapshot:",i),await Br(n,i)}}async function Br(n,e,t){if(!mi(e))throw e;n.Ta.add(1),await ks(n),n.da.set("Offline"),t||(t=()=>Wp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(En,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await To(n)})}function Qp(n,e){return e().catch(t=>Br(n,t,e))}async function Io(n){const e=j(n),t=Jt(e);let i=e.ha.length>0?e.ha[e.ha.length-1].batchId:Al;for(;fw(e);)try{const s=await KI(e.localStore,i);if(s===null){e.ha.length===0&&t.N_();break}i=s.batchId,pw(e,s)}catch(s){await Br(e,s)}Yp(e)&&Xp(e)}function fw(n){return bn(n)&&n.ha.length<10}function pw(n,e){n.ha.push(e);const t=Jt(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function Yp(n){return bn(n)&&!Jt(n).F_()&&n.ha.length>0}function Xp(n){Jt(n).start()}async function _w(n){Jt(n).ta()}async function mw(n){const e=Jt(n);for(const t of n.ha)e.Z_(t.mutations)}async function gw(n,e,t){const i=n.ha.shift(),s=Dl.from(i,e,t);await Qp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Io(n)}async function yw(n,e){e&&Jt(n).Y_&&await async function(i,s){if(function(o){return eI(o)&&o!==b.ABORTED}(s.code)){const r=i.ha.shift();Jt(i).O_(),await Qp(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Io(i)}}(n,e),Yp(n)&&Xp(n)}async function Kh(n,e){const t=j(n);t.asyncQueue.verifyOperationInProgress(),V(En,"RemoteStore received new credentials");const i=bn(t);t.Ta.add(3),await ks(t),i&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await To(t)}async function vw(n,e){const t=j(n);e?(t.Ta.delete(2),await To(t)):e||(t.Ta.add(2),await ks(t),t.da.set("Unknown"))}function gi(n){return n.Ra||(n.Ra=function(t,i,s){const r=j(t);return r.ra(),new iw(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{e_:cw.bind(null,n),n_:uw.bind(null,n),i_:hw.bind(null,n),j_:dw.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),jl(n)?ql(n):n.da.set("Unknown")):(await n.Ra.stop(),Kp(n))})),n.Ra}function Jt(n){return n.Va||(n.Va=function(t,i,s){const r=j(t);return r.ra(),new sw(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:_w.bind(null,n),i_:yw.bind(null,n),X_:mw.bind(null,n),ea:gw.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await Io(n)):(await n.Va.stop(),n.ha.length>0&&(V(En,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,l=new Wl(e,t,o,s,r);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hl(n,e){if(Ct("AsyncQueue",`${e}: ${n}`),mi(n))return new x(b.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{static emptySet(e){return new Kn(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||M.comparator(t.key,i.key):(t,i)=>M.comparator(t.key,i.key),this.keyedMap=zi(),this.sortedSet=new _e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Kn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Kn;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this.ma=new _e(M.comparator)}track(e){const t=e.doc.key,i=this.ma.get(t);i?e.type!==0&&i.type===3?this.ma=this.ma.insert(t,e):e.type===3&&i.type!==1?this.ma=this.ma.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ma=this.ma.remove(t):e.type===1&&i.type===2?this.ma=this.ma.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):F(63341,{Vt:e,fa:i}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,i)=>{e.push(i)}),e}}class ri{constructor(e,t,i,s,r,o,l,c,h){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new ri(e,t,Kn.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_o(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class Tw{constructor(){this.queries=Yh(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,i){const s=j(t),r=s.queries;s.queries=Yh(),r.forEach((o,l)=>{for(const c of l.ya)c.onError(i)})})(this,new x(b.ABORTED,"Firestore shutting down"))}}function Yh(){return new Pn(n=>yp(n),_o)}async function $l(n,e){const t=j(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.wa()&&e.Sa()&&(i=2):(r=new Ew,i=e.Sa()?0:1);try{switch(i){case 0:r.pa=await t.onListen(s,!0);break;case 1:r.pa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=Hl(o,`Initialization of query '${Un(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,r),r.ya.push(e),e.Da(t.onlineState),r.pa&&e.va(r.pa)&&Gl(t)}async function zl(n,e){const t=j(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.ya.indexOf(e);o>=0&&(r.ya.splice(o,1),r.ya.length===0?s=e.Sa()?0:1:!r.wa()&&e.Sa()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Iw(n,e){const t=j(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const l of o.ya)l.va(s)&&(i=!0);o.pa=s}}i&&Gl(t)}function ww(n,e,t){const i=j(n),s=i.queries.get(e);if(s)for(const r of s.ya)r.onError(t);i.queries.delete(e)}function Gl(n){n.ba.forEach(e=>{e.next()})}var Ga,Xh;(Xh=Ga||(Ga={})).Ca="default",Xh.Cache="cache";class Kl{constructor(e,t,i){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=i||{}}va(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new ri(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const i=t!=="Offline";return(!this.options.La||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=ri.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==Ga.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e){this.key=e}}class Zp{constructor(e){this.key=e}}class Cw{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Y(),this.mutatedKeys=Y(),this.Ha=vp(e),this.Ja=new Kn(this.Ha)}get Ya(){return this.Ga}Za(e,t){const i=t?t.Xa:new Qh,s=t?t.Ja:this.Ja;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),w=mo(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),N=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let k=!1;m&&w?m.data.isEqual(w.data)?S!==N&&(i.track({type:3,doc:w}),k=!0):this.eu(m,w)||(i.track({type:2,doc:w}),k=!0,(c&&this.Ha(w,c)>0||h&&this.Ha(w,h)<0)&&(l=!0)):!m&&w?(i.track({type:0,doc:w}),k=!0):m&&!w&&(i.track({type:1,doc:m}),k=!0,(c||h)&&(l=!0)),k&&(w?(o=o.add(w),r=N?r.add(f):r.delete(f)):(o=o.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),r=r.delete(f.key),i.track({type:1,doc:f})}return{Ja:o,Xa:i,Cs:l,mutatedKeys:r}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const o=e.Xa.ga();o.sort((f,p)=>function(w,S){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{Vt:k})}};return N(w)-N(S)}(f.type,p.type)||this.Ha(f.doc,p.doc)),this.tu(i),s=s!=null&&s;const l=t&&!s?this.nu():[],c=this.ja.size===0&&this.current&&!s?1:0,h=c!==this.za;return this.za=c,o.length!==0||h?{snapshot:new ri(this.query,e.Ja,r,o,e.mutatedKeys,c===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),ru:l}:{ru:l}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new Qh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Y(),this.Ja.forEach(i=>{this.iu(i.key)&&(this.ja=this.ja.add(i.key))});const t=[];return e.forEach(i=>{this.ja.has(i)||t.push(new Zp(i))}),this.ja.forEach(i=>{e.has(i)||t.push(new Jp(i))}),t}su(e){this.Ga=e.$s,this.ja=Y();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return ri.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Ql="SyncEngine";class Aw{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Rw{constructor(e){this.key=e,this._u=!1}}class Sw{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.au={},this.uu=new Pn(l=>yp(l),_o),this.cu=new Map,this.lu=new Set,this.hu=new _e(M.comparator),this.Pu=new Map,this.Tu=new xl,this.Iu={},this.Eu=new Map,this.du=si.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function Pw(n,e,t=!0){const i=r_(n);let s;const r=i.uu.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.ou()):s=await e_(i,e,t,!0),s}async function bw(n,e){const t=r_(n);await e_(t,e,!0,!1)}async function e_(n,e,t,i){const s=await QI(n.localStore,ct(e)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let l;return i&&(l=await kw(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&zp(n.remoteStore,s),l}async function kw(n,e,t,i,s){n.Ru=(p,m,w)=>async function(N,k,W,B){let H=k.view.Za(W);H.Cs&&(H=await Wh(N.localStore,k.query,!1).then(({documents:T})=>k.view.Za(T,H)));const se=B&&B.targetChanges.get(k.targetId),Qe=B&&B.targetMismatches.get(k.targetId)!=null,ue=k.view.applyChanges(H,N.isPrimaryClient,se,Qe);return Zh(N,k.targetId,ue.ru),ue.snapshot}(n,p,m,w);const r=await Wh(n.localStore,e,!0),o=new Cw(e,r.$s),l=o.Za(r.documents),c=bs.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),h=o.applyChanges(l,n.isPrimaryClient,c);Zh(n,t,h.ru);const f=new Aw(e,t,o);return n.uu.set(e,f),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),h.snapshot}async function Nw(n,e,t){const i=j(n),s=i.uu.get(e),r=i.cu.get(s.targetId);if(r.length>1)return i.cu.set(s.targetId,r.filter(o=>!_o(o,e))),void i.uu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await $a(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),t&&Ul(i.remoteStore,s.targetId),Ka(i,s.targetId)}).catch(_i)):(Ka(i,s.targetId),await $a(i.localStore,s.targetId,!0))}async function Dw(n,e){const t=j(n),i=t.uu.get(e),s=t.cu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Ul(t.remoteStore,i.targetId))}async function Ow(n,e,t){const i=Bw(n);try{const s=await function(o,l){const c=j(o),h=ge.now(),f=l.reduce((w,S)=>w.add(S.key),Y());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let S=At(),N=Y();return c.Bs.getEntries(w,f).next(k=>{S=k,S.forEach((W,B)=>{B.isValidDocument()||(N=N.add(W))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,S)).next(k=>{p=k;const W=[];for(const B of l){const H=QT(B,p.get(B.key).overlayedDocument);H!=null&&W.push(new on(B.key,H,up(H.value.mapValue),Ye.exists(!0)))}return c.mutationQueue.addMutationBatch(w,h,W,l)}).next(k=>{m=k;const W=k.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(w,k.batchId,W)})}).then(()=>({batchId:m.batchId,changes:Tp(p)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Iu[o.currentUser.toKey()];h||(h=new _e($)),h=h.insert(l,c),o.Iu[o.currentUser.toKey()]=h}(i,s.batchId,t),await Ns(i,s.changes),await Io(i.remoteStore)}catch(s){const r=Hl(s,"Failed to persist write");t.reject(r)}}async function t_(n,e){const t=j(n);try{const i=await zI(t.localStore,e);e.targetChanges.forEach((s,r)=>{const o=t.Pu.get(r);o&&(ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o._u=!0:s.modifiedDocuments.size>0?ee(o._u,14607):s.removedDocuments.size>0&&(ee(o._u,42227),o._u=!1))}),await Ns(t,i,e)}catch(i){await _i(i)}}function Jh(n,e,t){const i=j(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.uu.forEach((r,o)=>{const l=o.view.Da(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=j(o);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const m of p.ya)m.Da(l)&&(h=!0)}),h&&Gl(c)}(i.eventManager,e),s.length&&i.au.j_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Vw(n,e,t){const i=j(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Pu.get(e),r=s&&s.key;if(r){let o=new _e(M.comparator);o=o.insert(r,De.newNoDocument(r,q.min()));const l=Y().add(r),c=new vo(q.min(),new Map,new _e($),o,l);await t_(i,c),i.hu=i.hu.remove(r),i.Pu.delete(e),Yl(i)}else await $a(i.localStore,e,!1).then(()=>Ka(i,e,t)).catch(_i)}async function xw(n,e){const t=j(n),i=e.batch.batchId;try{const s=await $I(t.localStore,e);i_(t,i,null),n_(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Ns(t,s)}catch(s){await _i(s)}}async function Mw(n,e,t){const i=j(n);try{const s=await function(o,l){const c=j(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(ee(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(i.localStore,e);i_(i,e,t),n_(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Ns(i,s)}catch(s){await _i(s)}}function n_(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function i_(n,e,t){const i=j(n);let s=i.Iu[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.Iu[i.currentUser.toKey()]=s}}function Ka(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.cu.get(e))n.uu.delete(i),t&&n.au.Vu(i,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(i=>{n.Tu.containsKey(i)||s_(n,i)})}function s_(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&(Ul(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),Yl(n))}function Zh(n,e,t){for(const i of t)i instanceof Jp?(n.Tu.addReference(i.key,e),Lw(n,i)):i instanceof Zp?(V(Ql,"Document no longer in limbo: "+i.key),n.Tu.removeReference(i.key,e),n.Tu.containsKey(i.key)||s_(n,i.key)):F(19791,{mu:i})}function Lw(n,e){const t=e.key,i=t.path.canonicalString();n.hu.get(t)||n.lu.has(i)||(V(Ql,"New document in limbo: "+t),n.lu.add(i),Yl(n))}function Yl(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new M(ae.fromString(e)),i=n.du.next();n.Pu.set(i,new Rw(t)),n.hu=n.hu.insert(t,i),zp(n.remoteStore,new Bt(ct(po(t.path)),i,"TargetPurposeLimboResolution",uo.le))}}async function Ns(n,e,t){const i=j(n),s=[],r=[],o=[];i.uu.isEmpty()||(i.uu.forEach((l,c)=>{o.push(i.Ru(c,e,t).then(h=>{var f;if((h||t)&&i.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;i.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Ll.Rs(c.targetId,h);r.push(p)}}))}),await Promise.all(o),i.au.j_(s),await async function(c,h){const f=j(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>P.forEach(h,m=>P.forEach(m.ds,w=>f.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>P.forEach(m.As,w=>f.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!mi(p))throw p;V(Fl,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const w=f.xs.get(m),S=w.snapshotVersion,N=w.withLastLimboFreeSnapshotVersion(S);f.xs=f.xs.insert(m,N)}}}(i.localStore,r))}async function Fw(n,e){const t=j(n);if(!t.currentUser.isEqual(e)){V(Ql,"User change. New user:",e.toKey());const i=await jp(t.localStore,e);t.currentUser=e,function(r,o){r.Eu.forEach(l=>{l.forEach(c=>{c.reject(new x(b.CANCELLED,o))})}),r.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Ns(t,i.ks)}}function Uw(n,e){const t=j(n),i=t.Pu.get(e);if(i&&i._u)return Y().add(i.key);{let s=Y();const r=t.cu.get(e);if(!r)return s;for(const o of r){const l=t.uu.get(o);s=s.unionWith(l.view.Ya)}return s}}function r_(n){const e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=t_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Uw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vw.bind(null,e),e.au.j_=Iw.bind(null,e.eventManager),e.au.Vu=ww.bind(null,e.eventManager),e}function Bw(n){const e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mw.bind(null,e),e}class qr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Eo(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return HI(this.persistence,new qI,e.initialUser,this.serializer)}yu(e){return new qp(Ml.fi,this.serializer)}pu(e){return new XI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qr.provider={build:()=>new qr};class qw extends qr{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){ee(this.persistence.referenceDelegate instanceof Ur,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new RI(i,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?Ue.withCacheSize(this.cacheSizeBytes):Ue.DEFAULT;return new qp(i=>Ur.fi(i,t),this.serializer)}}class Qa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Jh(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fw.bind(null,this.syncEngine),await vw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Tw}()}createDatastore(e){const t=Eo(e.databaseInfo.databaseId),i=function(r){return new nw(r)}(e.databaseInfo);return function(r,o,l,c){return new ow(r,o,l,c)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,s,r,o,l){return new lw(i,s,r,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Jh(this.syncEngine,t,0),function(){return zh.C()?new zh:new JI}())}createSyncEngine(e,t){return function(s,r,o,l,c,h,f){const p=new Sw(s,r,o,l,c,h);return f&&(p.Au=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const r=j(s);V(En,"RemoteStore shutting down."),r.Ta.add(5),await ks(r),r.Ea.shutdown(),r.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Qa.provider={build:()=>new Qa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Ct("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="FirestoreClient";class jw{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=Ne.UNAUTHENTICATED,this.clientId=Zf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,async o=>{V(Zt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(V(Zt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Hl(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function ma(n,e){n.asyncQueue.verifyOperationInProgress(),V(Zt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await jp(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ed(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ww(n);V(Zt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Kh(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Kh(e.remoteStore,s)),n._onlineComponents=e}async function Ww(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Zt,"Using user provided OfflineComponentProvider");try{await ma(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;ei("Error using user provided cache. Falling back to memory cache: "+t),await ma(n,new qr)}}else V(Zt,"Using default OfflineComponentProvider"),await ma(n,new qw(void 0));return n._offlineComponents}async function o_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Zt,"Using user provided OnlineComponentProvider"),await ed(n,n._uninitializedComponentsProvider._online)):(V(Zt,"Using default OnlineComponentProvider"),await ed(n,new Qa))),n._onlineComponents}function Hw(n){return o_(n).then(e=>e.syncEngine)}async function jr(n){const e=await o_(n),t=e.eventManager;return t.onListen=Pw.bind(null,e.syncEngine),t.onUnlisten=Nw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=bw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Dw.bind(null,e.syncEngine),t}function $w(n,e,t={}){const i=new Et;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,l,c,h){const f=new Xl({next:m=>{f.Cu(),o.enqueueAndForget(()=>zl(r,p));const w=m.docs.has(l);!w&&m.fromCache?h.reject(new x(b.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&c&&c.source==="server"?h.reject(new x(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Kl(po(l.path),f,{includeMetadataChanges:!0,La:!0});return $l(r,p)}(await jr(n),n.asyncQueue,e,t,i)),i.promise}function zw(n,e,t={}){const i=new Et;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,l,c,h){const f=new Xl({next:m=>{f.Cu(),o.enqueueAndForget(()=>zl(r,p)),m.fromCache&&c.source==="server"?h.reject(new x(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Kl(l,f,{includeMetadataChanges:!0,La:!0});return $l(r,p)}(await jr(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(n,e,t){if(!t)throw new x(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Gw(n,e,t,i){if(e===!0&&i===!0)throw new x(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function nd(n){if(!M.isDocumentKey(n))throw new x(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function id(n){if(M.isDocumentKey(n))throw new x(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function wo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function We(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wo(n);throw new x(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="firestore.googleapis.com",sd=!0;class rd{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new x(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=c_,this.ssl=sd}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:sd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Bp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<CI)throw new x(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Gw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=a_((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new x(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new x(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new x(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Co{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new nT;switch(i.type){case"firstParty":return new oT(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new x(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,hi("Firestore",this._settings.isUsingEmulator),this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=td.get(t);i&&(V("ComponentProvider","Removing Datastore"),td.delete(t),i.terminate())}(this),Promise.resolve()}}function Kw(n,e,t,i={}){var s;n=We(n,Co);const r=An(e),o=n._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;o.host!==c_&&o.host!==c&&ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:c,ssl:r,emulatorOptions:i});if(!zt(h,l)&&(n._setSettings(h),r&&(fl(`https://${c}`),hi("Firestore",!0)),i.mockUserToken)){let f,p;if(typeof i.mockUserToken=="string")f=i.mockUserToken,p=Ne.MOCK_USER;else{f=nf(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=i.mockUserToken.sub||i.mockUserToken.user_id;if(!m)throw new x(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ne(m)}n._authCredentials=new iT(new Xf(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new kn(this.firestore,e,this._query)}}class xe{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}}class Ht extends kn{constructor(e,t,i){super(e,t,po(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new M(e))}withConverter(e){return new Ht(this.firestore,e,this._path)}}function T0(n,e,...t){if(n=de(n),l_("collection","path",e),n instanceof Co){const i=ae.fromString(e,...t);return id(i),new Ht(n,null,i)}{if(!(n instanceof xe||n instanceof Ht))throw new x(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ae.fromString(e,...t));return id(i),new Ht(n.firestore,null,i)}}function Qw(n,e,...t){if(n=de(n),arguments.length===1&&(e=Zf.newId()),l_("doc","path",e),n instanceof Co){const i=ae.fromString(e,...t);return nd(i),new xe(n,null,new M(i))}{if(!(n instanceof xe||n instanceof Ht))throw new x(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ae.fromString(e,...t));return nd(i),new xe(n.firestore,n instanceof Ht?n.converter:null,new M(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="AsyncQueue";class ad{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new Hp(this,"async_queue_retry"),this.ec=()=>{const i=_a();i&&V(od,"Visibility state changed to "+i.visibilityState),this.C_.p_()},this.tc=e;const t=_a();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=_a();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new Et;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!mi(e))throw e;V(od,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(i=>{throw this.Ju=i,this.Yu=!1,Ct("INTERNAL UNHANDLED ERROR: ",ld(i)),i}).then(i=>(this.Yu=!1,i))));return this.tc=t,t}enqueueAfterDelay(e,t,i){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const s=Wl.createAndSchedule(this,e,t,i,r=>this.oc(r));return this.Hu.push(s),s}nc(){this.Ju&&F(47125,{_c:ld(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function ld(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class Rt extends Co{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new ad,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ad(e),this._firestoreClient=void 0,await e}}}function I0(n,e){const t=typeof n=="object"?n:_l(),i=typeof n=="string"?n:e||Dr,s=oo(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Zd("firestore");r&&Kw(s,...r)}return s}function Ao(n){if(n._terminated)throw new x(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Yw(n),n._firestoreClient}function Yw(n){var e,t,i;const s=n._freezeSettings(),r=function(l,c,h,f){return new TT(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,a_(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new jw(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oi(Ae.fromBase64String(e))}catch(t){throw new x(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new oi(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=/^__.*__$/;class Jw{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new on(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ps(e,this.data,t,this.fieldTransforms)}}class u_{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new on(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function h_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{hc:n})}}class tc{constructor(e,t,i,s,r,o){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Pc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new tc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:i,Ec:!1});return s.dc(e),s}Ac(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:i,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Wr(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(h_(this.hc)&&Xw.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class Zw{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Eo(e)}gc(e,t,i,s=!1){return new tc({hc:e,methodName:t,fc:i,path:Ce.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function So(n){const e=n._freezeSettings(),t=Eo(n._databaseId);return new Zw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function d_(n,e,t,i,s,r={}){const o=n.gc(r.merge||r.mergeFields?2:0,e,t,s);nc("Data must be an object, but it was:",o,i);const l=f_(i,o);let c,h;if(r.merge)c=new Ge(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const f=[];for(const p of r.mergeFields){const m=Ya(e,p,t);if(!o.contains(m))throw new x(b.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);__(f,m)||f.push(m)}c=new Ge(f),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new Jw(new Be(l),c,h)}class Po extends Jl{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Po}}function eC(n,e,t,i){const s=n.gc(1,e,t);nc("Data must be an object, but it was:",s,i);const r=[],o=Be.empty();rn(i,(c,h)=>{const f=ic(e,c,t);h=de(h);const p=s.Ac(f);if(h instanceof Po)r.push(f);else{const m=Ds(h,p);m!=null&&(r.push(f),o.set(f,m))}});const l=new Ge(r);return new u_(o,l,s.fieldTransforms)}function tC(n,e,t,i,s,r){const o=n.gc(1,e,t),l=[Ya(e,i,t)],c=[s];if(r.length%2!=0)throw new x(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<r.length;m+=2)l.push(Ya(e,r[m])),c.push(r[m+1]);const h=[],f=Be.empty();for(let m=l.length-1;m>=0;--m)if(!__(h,l[m])){const w=l[m];let S=c[m];S=de(S);const N=o.Ac(w);if(S instanceof Po)h.push(w);else{const k=Ds(S,N);k!=null&&(h.push(w),f.set(w,k))}}const p=new Ge(h);return new u_(f,p,o.fieldTransforms)}function nC(n,e,t,i=!1){return Ds(t,n.gc(i?4:3,e))}function Ds(n,e){if(p_(n=de(n)))return nc("Unsupported field value:",e,n),f_(n,e);if(n instanceof Jl)return function(i,s){if(!h_(s.hc))throw s.Vc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const l of i){let c=Ds(l,s.Rc(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(n,e)}return function(i,s){if((i=de(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return WT(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=ge.fromDate(i);return{timestampValue:Fr(s.serializer,r)}}if(i instanceof ge){const r=new ge(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Fr(s.serializer,r)}}if(i instanceof Zl)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof oi)return{bytesValue:Op(s.serializer,i._byteString)};if(i instanceof xe){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Vl(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof ec)return function(o,l){return{mapValue:{fields:{[ap]:{stringValue:cp},[Or]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Vc("VectorValues must only contain numeric values.");return kl(l.serializer,h)})}}}}}}(i,s);throw s.Vc(`Unsupported field value: ${wo(i)}`)}(n,e)}function f_(n,e){const t={};return tp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rn(n,(i,s)=>{const r=Ds(s,e.Ic(i));r!=null&&(t[i]=r)}),{mapValue:{fields:t}}}function p_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ge||n instanceof Zl||n instanceof oi||n instanceof xe||n instanceof Jl||n instanceof ec)}function nc(n,e,t){if(!p_(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const i=wo(t);throw i==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+i)}}function Ya(n,e,t){if((e=de(e))instanceof Ro)return e._internalPath;if(typeof e=="string")return ic(n,e);throw Wr("Field path arguments must be of type string or ",n,!1,void 0,t)}const iC=new RegExp("[~\\*/\\[\\]]");function ic(n,e,t){if(e.search(iC)>=0)throw Wr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ro(...e.split("."))._internalPath}catch{throw Wr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Wr(n,e,t,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new x(b.INVALID_ARGUMENT,l+n+c)}function __(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sC extends m_{data(){return super.data()}}function sc(n,e){return typeof e=="string"?ic(n,e):e instanceof Ro?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rc{}class rC extends rc{}function w0(n,e,...t){let i=[];e instanceof rc&&i.push(e),i=i.concat(t),function(r){const o=r.filter(c=>c instanceof oc).length,l=r.filter(c=>c instanceof bo).length;if(o>1||o>0&&l>0)throw new x(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)n=s._apply(n);return n}class bo extends rC{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new bo(e,t,i)}_apply(e){const t=this._parse(e);return y_(e._query,t),new kn(e.firestore,e.converter,Ua(e._query,t))}_parse(e){const t=So(e.firestore);return function(r,o,l,c,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new x(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){hd(p,f);const S=[];for(const N of p)S.push(ud(c,r,N));m={arrayValue:{values:S}}}else m=ud(c,r,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||hd(p,f),m=nC(l,o,p,f==="in"||f==="not-in");return pe.create(h,f,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function C0(n,e,t){const i=e,s=sc("where",n);return bo._create(s,i,t)}class oc extends rc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new oc(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:st.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,r){let o=s;const l=r.getFlattenedFilters();for(const c of l)y_(o,c),o=Ua(o,c)}(e._query,t),new kn(e.firestore,e.converter,Ua(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ud(n,e,t){if(typeof(t=de(t))=="string"){if(t==="")throw new x(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gp(e)&&t.indexOf("/")!==-1)throw new x(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(ae.fromString(t));if(!M.isDocumentKey(i))throw new x(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Ch(n,new M(i))}if(t instanceof xe)return Ch(n,t._key);throw new x(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wo(t)}.`)}function hd(n,e){if(!Array.isArray(n)||n.length===0)throw new x(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function y_(n,e){const t=function(s,r){for(const o of s)for(const l of o.getFlattenedFilters())if(r.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new x(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class oC{convertValue(e,t="none"){switch(Xt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return rn(e,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertVectorValue(e){var t,i,s;const r=(s=(i=(t=e.fields)===null||t===void 0?void 0:t[Or].arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(o=>he(o.doubleValue));return new ec(r)}convertGeoPoint(e){return new Zl(he(e.latitude),he(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=fo(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(us(e));default:return null}}convertTimestamp(e){const t=Qt(e);return new ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=ae.fromString(e);ee(Up(i),9688,{name:e});const s=new hs(i.get(1),i.get(3)),r=new M(i.popFirst(5));return s.isEqual(t)||Ct(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class E_ extends m_{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Er(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(sc("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Er extends E_{data(e={}){return super.data(e)}}class T_{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ki(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Er(this._firestore,this._userDataWriter,i.key,i,new Ki(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Er(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ki(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>r||l.type!==3).map(l=>{const c=new Er(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ki(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:aC(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function aC(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(n){n=We(n,xe);const e=We(n.firestore,Rt);return $w(Ao(e),n._key).then(t=>I_(e,n,t))}class ac extends oC{constructor(e){super(),this.firestore=e}convertBytes(e){return new oi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,t)}}function R0(n){n=We(n,kn);const e=We(n.firestore,Rt),t=Ao(e),i=new ac(e);return g_(n._query),zw(t,n._query).then(s=>new T_(e,i,n,s))}function S0(n,e,t){n=We(n,xe);const i=We(n.firestore,Rt),s=v_(n.converter,e,t);return ko(i,[d_(So(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ye.none())])}function P0(n,e,t,...i){n=We(n,xe);const s=We(n.firestore,Rt),r=So(s);let o;return o=typeof(e=de(e))=="string"||e instanceof Ro?tC(r,"updateDoc",n._key,e,t,i):eC(r,"updateDoc",n._key,e),ko(s,[o.toMutation(n._key,Ye.exists(!0))])}function b0(n){return ko(We(n.firestore,Rt),[new Nl(n._key,Ye.none())])}function k0(n,e){const t=We(n.firestore,Rt),i=Qw(n),s=v_(n.converter,e);return ko(t,[d_(So(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Ye.exists(!1))]).then(()=>i)}function N0(n,...e){var t,i,s;n=de(n);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||cd(e[o])||(r=e[o],o++);const l={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(cd(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(i=p.error)===null||i===void 0?void 0:i.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,f;if(n instanceof xe)h=We(n.firestore,Rt),f=po(n._key.path),c={next:p=>{e[o]&&e[o](I_(h,n,p))},error:e[o+1],complete:e[o+2]};else{const p=We(n,kn);h=We(p.firestore,Rt),f=p._query;const m=new ac(h);c={next:w=>{e[o]&&e[o](new T_(h,m,p,w))},error:e[o+1],complete:e[o+2]},g_(n._query)}return function(m,w,S,N){const k=new Xl(N),W=new Kl(w,k,S);return m.asyncQueue.enqueueAndForget(async()=>$l(await jr(m),W)),()=>{k.Cu(),m.asyncQueue.enqueueAndForget(async()=>zl(await jr(m),W))}}(Ao(h),f,l,c)}function ko(n,e){return function(i,s){const r=new Et;return i.asyncQueue.enqueueAndForget(async()=>Ow(await Hw(i),s,r)),r.promise}(Ao(n),e)}function I_(n,e,t){const i=t.docs.get(e._key),s=new ac(n);return new E_(n,s,e._key,i,new Ki(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){pi=s})(Rn),mn(new Gt("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),l=new Rt(new sT(i.getProvider("auth-internal")),new aT(o,i.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new x(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hs(h.options.projectId,f)}(o,s),o);return r=Object.assign({useFetchStreams:t},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),ot(dh,fh,e),ot(dh,fh,"esm2017")})();var lC="firebase",cC="11.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot(lC,cC,"app");var dd={};const fd="@firebase/database",pd="1.0.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let w_="";function uC(n){w_=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ie(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:rs(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hC(e)}}catch{}return new dC},pn=C_("localStorage"),Xa=C_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new ro("@firebase/database"),fC=function(){let n=1;return function(){return n++}}(),A_=function(n){const e=Gg(n),t=new Wg;t.update(e);const i=t.digest();return hl.encodeByteArray(i)},Os=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Os.apply(null,i):typeof i=="object"?e+=Ie(i):e+=i,e+=" "}return e};let _n=null,_d=!0;const pC=function(n,e){D(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Qn.logLevel=G.VERBOSE,_n=Qn.log.bind(Qn),e&&Xa.set("logging_enabled",!0)):typeof n=="function"?_n=n:(_n=null,Xa.remove("logging_enabled"))},Oe=function(...n){if(_d===!0&&(_d=!1,_n===null&&Xa.get("logging_enabled")===!0&&pC(!0)),_n){const e=Os.apply(null,n);_n(e)}},Vs=function(n){return function(...e){Oe(n,...e)}},Ja=function(...n){const e="FIREBASE INTERNAL ERROR: "+Os(...n);Qn.error(e)},St=function(...n){const e=`FIREBASE FATAL ERROR: ${Os(...n)}`;throw Qn.error(e),new Error(e)},Ke=function(...n){const e="FIREBASE WARNING: "+Os(...n);Qn.warn(e)},_C=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},R_=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},mC=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ai="[MIN_NAME]",Tn="[MAX_NAME]",yi=function(n,e){if(n===e)return 0;if(n===ai||e===Tn)return-1;if(e===ai||n===Tn)return 1;{const t=md(n),i=md(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},gC=function(n,e){return n===e?0:n<e?-1:1},Ui=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ie(e))},lc=function(n){if(typeof n!="object"||n===null)return Ie(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Ie(e[i]),t+=":",t+=lc(n[e[i]]);return t+="}",t},S_=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function He(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const P_=function(n){D(!R_(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,l,c;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=l+i,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const h=[];for(c=t;c;c-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(s?1:0),h.reverse();const f=h.join("");let p="";for(c=0;c<64;c+=8){let m=parseInt(f.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),p=p+m}return p.toLowerCase()},yC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function EC(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const TC=new RegExp("^-?(0*)\\d{1,10}$"),IC=-2147483648,wC=2147483647,md=function(n){if(TC.test(n)){const e=Number(n);if(e>=IC&&e<=wC)return e}return null},xs=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ke("Exception was thrown by user callback.",t),e},Math.floor(0))}},CC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ts=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ze(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Oe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class Yn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Yn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="5",b_="v",k_="s",N_="r",D_="f",O_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,V_="ls",x_="p",Za="ac",M_="websocket",L_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,t,i,s,r=!1,o="",l=!1,c=!1,h=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function SC(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function U_(n,e,t){D(typeof e=="string","typeof type must == string"),D(typeof t=="object","typeof params must == object");let i;if(e===M_)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===L_)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);SC(n)&&(t.ns=n.namespace);const s=[];return He(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this.counters_={}}incrementCounter(e,t=1){bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return wg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga={},ya={};function uc(n){const e=n.toString();return ga[e]||(ga[e]=new PC),ga[e]}function bC(n,e){const t=n.toString();return ya[t]||(ya[t]=e()),ya[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&xs(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="start",NC="close",DC="pLPCommand",OC="pRTLPCB",B_="id",q_="pw",j_="ser",VC="cb",xC="seg",MC="ts",LC="d",FC="dframe",W_=1870,H_=30,UC=W_-H_,BC=25e3,qC=3e4;class Wn{constructor(e,t,i,s,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vs(e),this.stats_=uc(t),this.urlFn=c=>(this.appCheckToken&&(c[Za]=this.appCheckToken),U_(t,L_,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new kC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qC)),mC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hc((...r)=>{const[o,l,c,h,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gd)this.id=l,this.password=c;else if(o===NC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[gd]="t",i[j_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[VC]=this.scriptTagHolder.uniqueCallbackIdentifier),i[b_]=cc,this.transportSessionId&&(i[k_]=this.transportSessionId),this.lastSessionId&&(i[V_]=this.lastSessionId),this.applicationId&&(i[x_]=this.applicationId),this.appCheckToken&&(i[Za]=this.appCheckToken),typeof location<"u"&&location.hostname&&O_.test(location.hostname)&&(i[N_]=D_);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wn.forceAllow_=!0}static forceDisallow(){Wn.forceDisallow_=!0}static isAvailable(){return Wn.forceAllow_?!0:!Wn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yC()&&!vC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ie(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Yd(t),s=S_(i,UC);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[FC]="t",i[B_]=e,i[q_]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ie(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class hc{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fC(),window[DC+this.uniqueCallbackIdentifier]=e,window[OC+this.uniqueCallbackIdentifier]=t,this.myIFrame=hc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Oe("frame writing exception"),l.stack&&Oe(l.stack),Oe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Oe("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[B_]=this.myID,e[q_]=this.myPW,e[j_]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+H_+i.length<=W_;){const o=this.pendingSegs.shift();i=i+"&"+xC+s+"="+o.seg+"&"+MC+s+"="+o.ts+"&"+LC+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(BC)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Oe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=16384,WC=45e3;let Hr=null;typeof MozWebSocket<"u"?Hr=MozWebSocket:typeof WebSocket<"u"&&(Hr=WebSocket);class Je{constructor(e,t,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vs(this.connId),this.stats_=uc(t),this.connURL=Je.connectionURL_(t,o,l,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[b_]=cc,typeof location<"u"&&location.hostname&&O_.test(location.hostname)&&(o[N_]=D_),t&&(o[k_]=t),i&&(o[V_]=i),s&&(o[Za]=s),r&&(o[x_]=r),U_(e,M_,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pn.set("previous_websocket_failure",!0);try{let i;rf(),this.mySock=new Hr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Je.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Hr!==null&&!Je.forceDisallow_}static previouslyFailed(){return pn.isInMemoryStorage||pn.get("previous_websocket_failure")===!0}markConnectionHealthy(){pn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=rs(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Ie(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=S_(t,jC);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(WC))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Je.responsesRequiredToBeHealthy=2;Je.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{static get ALL_TRANSPORTS(){return[Wn,Je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Je&&Je.isAvailable();let i=t&&!Je.previouslyFailed();if(e.webSocketOnly&&(t||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Je];else{const s=this.transports_=[];for(const r of _s.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);_s.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_s.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=6e4,$C=5e3,zC=10*1024,GC=100*1024,va="t",yd="d",KC="s",vd="r",QC="e",Ed="o",Td="a",Id="n",wd="p",YC="h";class XC{constructor(e,t,i,s,r,o,l,c,h,f){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vs("c:"+this.id+":"),this.transportManager_=new _s(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ts(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>GC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(va in e){const t=e[va];t===Td?this.upgradeIfSecondaryHealthy_():t===vd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ed&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ui("t",e),i=Ui("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Td,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Id,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ui("t",e),i=Ui("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ui(va,e);if(yd in e){const i=e[yd];if(t===YC){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Id){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===KC?this.onConnectionShutdown_(i):t===vd?this.onReset_(i):t===QC?Ja("Server Error: "+i):t===Ed?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ja("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),cc!==i&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),ts(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(HC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ts(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($C))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){D(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends z_{static getInstance(){return new $r}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!pl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=32,Ad=768;class ne{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Z(){return new ne("")}function K(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function en(n){return n.pieces_.length-n.pieceNum_}function ie(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ne(n.pieces_,e)}function G_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function JC(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function K_(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Q_(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ne(e,0)}function me(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof ne)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new ne(t,0)}function Q(n){return n.pieceNum_>=n.pieces_.length}function qe(n,e){const t=K(n),i=K(e);if(t===null)return e;if(t===i)return qe(ie(n),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function dc(n,e){if(en(n)!==en(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function et(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(en(n)>en(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class ZC{constructor(e,t){this.errorPrefix_=t,this.parts_=K_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=so(this.parts_[i]);Y_(this)}}function eA(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=so(e),Y_(n)}function tA(n){const e=n.parts_.pop();n.byteLength_-=so(e),n.parts_.length>0&&(n.byteLength_-=1)}function Y_(n){if(n.byteLength_>Ad)throw new Error(n.errorPrefix_+"has a key path longer than "+Ad+" bytes ("+n.byteLength_+").");if(n.parts_.length>Cd)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cd+") or object contains a cycle "+dn(n))}function dn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends z_{static getInstance(){return new fc}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=1e3,nA=60*5*1e3,Rd=30*1e3,iA=1.3,sA=3e4,rA="server_kill",Sd=3;class Tt extends $_{constructor(e,t,i,s,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=Tt.nextPersistentConnectionId_++,this.log_=Vs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bi,this.maxReconnectDelay_=nA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!rf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$r.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Ie(r)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new dl,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,h=l.s;Tt.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),h!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(h,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&bt(e,"w")){const i=Zn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=qg(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ie(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ja("Unrecognized action received from server: "+Ie(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sA&&(this.reconnectDelay_=Bi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*iA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Tt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,i())},h=function(p){D(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:h};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,m]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Oe("getToken() completed but was canceled"):(Oe("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=m&&m.token,l=new XC(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,w=>{Ke(w+" ("+this.repoInfo_.toString()+")"),this.interrupt(rA)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Ke(p),c())}}}interrupt(e){Oe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Oe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ca(this.interruptReasons_)&&(this.reconnectDelay_=Bi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>lc(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new ne(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Oe("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Sd&&(this.reconnectDelay_=Rd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Oe("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Sd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+w_.replace(/\./g,"-")]=1,pl()?e["framework.cordova"]=1:sf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$r.getInstance().currentlyOnline();return Ca(this.interruptReasons_)&&e}}Tt.nextPersistentConnectionId_=0;Tt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new z(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new z(ai,e),s=new z(ai,t);return this.compare(i,s)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cr;class X_ extends No{static get __EMPTY_NODE(){return cr}static set __EMPTY_NODE(e){cr=e}compare(e,t){return yi(e.name,t.name)}isDefinedOn(e){throw ui("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return z.MIN}maxPost(){return new z(Tn,cr)}makePost(e,t){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,cr)}toString(){return".key"}}const Xn=new X_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Te{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Te.RED,this.left=s??je.EMPTY_NODE,this.right=r??je.EMPTY_NODE}copy(e,t,i,s,r){return new Te(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Te.RED=!0;Te.BLACK=!1;class oA{copy(e,t,i,s,r){return this}insert(e,t,i){return new Te(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class je{constructor(e,t=je.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new je(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Te.BLACK,null,null))}remove(e){return new je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Te.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ur(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ur(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ur(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ur(this.root_,null,this.comparator_,!0,e)}}je.EMPTY_NODE=new oA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(n,e){return yi(n.name,e.name)}function pc(n,e){return yi(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el;function lA(n){el=n}const J_=function(n){return typeof n=="number"?"number:"+P_(n):"string:"+n},Z_=function(n){if(n.isLeafNode()){const e=n.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bt(e,".sv"),"Priority must be a string or number.")}else D(n===el||n.isEmpty(),"priority of unexpected type.");D(n===el||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pd;class ve{static set __childrenNodeConstructor(e){Pd=e}static get __childrenNodeConstructor(){return Pd}constructor(e,t=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Z_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:K(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=K(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(D(i!==".priority"||en(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+J_(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=P_(this.value_):e+=this.value_,this.lazyHash_=A_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=ve.VALUE_TYPE_ORDER.indexOf(t),r=ve.VALUE_TYPE_ORDER.indexOf(i);return D(s>=0,"Unknown leaf type: "+t),D(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let em,tm;function cA(n){em=n}function uA(n){tm=n}class hA extends No{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?yi(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return z.MIN}maxPost(){return new z(Tn,new ve("[PRIORITY-POST]",tm))}makePost(e,t){const i=em(e);return new z(t,new ve("[PRIORITY-POST]",i))}toString(){return".priority"}}const ce=new hA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=Math.log(2);class fA{constructor(e){const t=r=>parseInt(Math.log(r)/dA,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zr=function(n,e,t,i){n.sort(e);const s=function(c,h){const f=h-c;let p,m;if(f===0)return null;if(f===1)return p=n[c],m=t?t(p):p,new Te(m,p.node,Te.BLACK,null,null);{const w=parseInt(f/2,10)+c,S=s(c,w),N=s(w+1,h);return p=n[w],m=t?t(p):p,new Te(m,p.node,Te.BLACK,S,N)}},r=function(c){let h=null,f=null,p=n.length;const m=function(S,N){const k=p-S,W=p;p-=S;const B=s(k+1,W),H=n[k],se=t?t(H):H;w(new Te(se,H.node,N,null,B))},w=function(S){h?(h.left=S,h=S):(f=S,h=S)};for(let S=0;S<c.count;++S){const N=c.nextBitIsOne(),k=Math.pow(2,c.count-(S+1));N?m(k,Te.BLACK):(m(k,Te.BLACK),m(k,Te.RED))}return f},o=new fA(n.length),l=r(o);return new je(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea;const Ln={};class yt{static get Default(){return D(Ln&&ce,"ChildrenNode.ts has not been loaded"),Ea=Ea||new yt({".priority":Ln},{".priority":ce}),Ea}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Zn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof je?t:null}hasIndex(e){return bt(this.indexSet_,e.toString())}addIndex(e,t){D(e!==Xn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(z.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=zr(i,e.getCompare()):l=Ln;const c=e.toString(),h=Object.assign({},this.indexSet_);h[c]=e;const f=Object.assign({},this.indexes_);return f[c]=l,new yt(f,h)}addToIndexes(e,t){const i=wr(this.indexes_,(s,r)=>{const o=Zn(this.indexSet_,r);if(D(o,"Missing index implementation for "+r),s===Ln)if(o.isDefinedOn(e.node)){const l=[],c=t.getIterator(z.Wrap);let h=c.getNext();for(;h;)h.name!==e.name&&l.push(h),h=c.getNext();return l.push(e),zr(l,o.getCompare())}else return Ln;else{const l=t.get(e.name);let c=s;return l&&(c=c.remove(new z(e.name,l))),c.insert(e,e.node)}});return new yt(i,this.indexSet_)}removeFromIndexes(e,t){const i=wr(this.indexes_,s=>{if(s===Ln)return s;{const r=t.get(e.name);return r?s.remove(new z(e.name,r)):s}});return new yt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi;class U{static get EMPTY_NODE(){return qi||(qi=new U(new je(pc),null,yt.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Z_(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qi}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?qi:t}}getChild(e){const t=K(e);return t===null?this:this.getImmediateChild(t).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(D(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new z(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?qi:this.priorityNode_;return new U(s,o,r)}}updateChild(e,t){const i=K(e);if(i===null)return t;{D(K(e)!==".priority"||en(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(ie(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(ce,(o,l)=>{t[o]=l.val(e),i++,r&&U.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+J_(this.getPriority().val())+":"),this.forEachChild(ce,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":A_(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new z(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new z(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new z(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,z.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ms?-1:0}withIndex(e){if(e===Xn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Xn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(ce),s=t.getIterator(ce);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Xn?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class pA extends U{constructor(){super(new je(pc),U.EMPTY_NODE,yt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const Ms=new pA;Object.defineProperties(z,{MIN:{value:new z(ai,U.EMPTY_NODE)},MAX:{value:new z(Tn,Ms)}});X_.__EMPTY_NODE=U.EMPTY_NODE;ve.__childrenNodeConstructor=U;lA(Ms);uA(Ms);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=!0;function Ve(n,e=null){if(n===null)return U.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ve(t,Ve(e))}if(!(n instanceof Array)&&_A){const t=[];let i=!1;if(He(n,(o,l)=>{if(o.substring(0,1)!=="."){const c=Ve(l);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new z(o,c)))}}),t.length===0)return U.EMPTY_NODE;const r=zr(t,aA,o=>o.name,pc);if(i){const o=zr(t,ce.getCompare());return new U(r,Ve(e),new yt({".priority":o},{".priority":ce}))}else return new U(r,Ve(e),yt.Default)}else{let t=U.EMPTY_NODE;return He(n,(i,s)=>{if(bt(n,i)&&i.substring(0,1)!=="."){const r=Ve(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(Ve(e))}}cA(Ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA extends No{constructor(e){super(),this.indexPath_=e,D(!Q(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?yi(e.name,t.name):r}makePost(e,t){const i=Ve(e),s=U.EMPTY_NODE.updateChild(this.indexPath_,i);return new z(t,s)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,Ms);return new z(Tn,e)}toString(){return K_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA extends No{compare(e,t){const i=e.node.compareTo(t.node);return i===0?yi(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,t){const i=Ve(e);return new z(t,i)}toString(){return".value"}}const yA=new gA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(n){return{type:"value",snapshotNode:n}}function li(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ms(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function gs(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function vA(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(ms(t,l)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(li(t,i)):o.trackChildChange(gs(t,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ce,(s,r)=>{t.hasChild(s)||i.trackChildChange(ms(s,r))}),t.isLeafNode()||t.forEachChild(ce,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(gs(s,r,o))}else i.trackChildChange(li(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.indexedFilter_=new _c(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ys.getStartPost_(e),this.endPost_=ys.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new z(t,i))||(i=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=U.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(U.EMPTY_NODE);const r=this;return t.forEachChild(ce,(o,l)=>{r.matches(new z(o,l))||(s=s.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new ys(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new z(t,i))||(i=U.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=U.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(U.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const p=this.index_.getCompare();o=(m,w)=>p(w,m)}else o=this.index_.getCompare();const l=e;D(l.numChildren()===this.limit_,"");const c=new z(t,i),h=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(c);if(l.hasChild(t)){const p=l.getImmediateChild(t);let m=s.getChildAfterChild(this.index_,h,this.reverse_);for(;m!=null&&(m.name===t||l.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const w=m==null?1:o(m,c);if(f&&!i.isEmpty()&&w>=0)return r!=null&&r.trackChildChange(gs(t,i,p)),l.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(ms(t,p));const N=l.updateImmediateChild(t,U.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(r!=null&&r.trackChildChange(li(m.name,m.node)),N.updateImmediateChild(m.name,m.node)):N}}else return i.isEmpty()?e:f&&o(h,c)>=0?(r!=null&&(r.trackChildChange(ms(h.name,h.node)),r.trackChildChange(li(t,i))),l.updateImmediateChild(t,i).updateImmediateChild(h.name,U.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ai}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Tn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ce}copy(){const e=new mc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function TA(n){return n.loadsAllData()?new _c(n.getIndex()):n.hasLimit()?new EA(n):new ys(n)}function bd(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ce?t="$priority":n.index_===yA?t="$value":n.index_===Xn?t="$key":(D(n.index_ instanceof mA,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ie(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Ie(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Ie(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Ie(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Ie(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function kd(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ce&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends $_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Vs("p:rest:"),this.listens_={}}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Gr.getListenId_(e,i),l={};this.listens_[o]=l;const c=bd(e._queryParams);this.restRequest_(r+".json",c,(h,f)=>{let p=f;if(h===404&&(p=null,h=null),h===null&&this.onDataUpdate_(r,p,!1,i),Zn(this.listens_,o)===l){let m;h?h===401?m="permission_denied":m="rest_error:"+h:m="ok",s(m,null)}})}unlisten(e,t){const i=Gr.getListenId_(e,t);delete this.listens_[i]}get(e){const t=bd(e._queryParams),i=e._path.toString(),s=new dl;return this.restRequest_(i+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+di(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=rs(l.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,c)}else l.status!==401&&l.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(){return{value:null,children:new Map}}function im(n,e,t){if(Q(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=K(e);n.children.has(i)||n.children.set(i,Kr());const s=n.children.get(i);e=ie(e),im(s,e,t)}}function tl(n,e,t){n.value!==null?t(e,n.value):wA(n,(i,s)=>{const r=new ne(e.toString()+"/"+i);tl(s,r,t)})}function wA(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&He(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=10*1e3,AA=30*1e3,RA=5*60*1e3;class SA{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new CA(e);const i=Nd+(AA-Nd)*Math.random();ts(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;He(e,(s,r)=>{r>0&&bt(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),ts(this.reportStats_.bind(this),Math.floor(Math.random()*2*RA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tt||(tt={}));function sm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yc(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=tt.ACK_USER_WRITE,this.source=sm()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ne(e));return new Qr(Z(),t,this.revert)}}else return D(K(this.path)===e,"operationForChild called for unrelated child."),new Qr(ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t){this.source=e,this.path=t,this.type=tt.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new vs(this.source,Z()):new vs(this.source,ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=tt.OVERWRITE}operationForChild(e){return Q(this.path)?new In(this.source,Z(),this.snap.getImmediateChild(e)):new In(this.source,ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=tt.MERGE}operationForChild(e){if(Q(this.path)){const t=this.children.subtree(new ne(e));return t.isEmpty()?null:t.value?new In(this.source,Z(),t.value):new Es(this.source,Z(),t)}else return D(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Es(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const t=K(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function bA(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(vA(o.childName,o.snapshotNode))}),ji(n,s,"child_removed",e,i,t),ji(n,s,"child_added",e,i,t),ji(n,s,"child_moved",r,i,t),ji(n,s,"child_changed",e,i,t),ji(n,s,"value",e,i,t),s}function ji(n,e,t,i,s,r){const o=i.filter(l=>l.type===t);o.sort((l,c)=>NA(n,l,c)),o.forEach(l=>{const c=kA(n,l,r);s.forEach(h=>{h.respondsTo(l.type)&&e.push(h.createEvent(c,n.query_))})})}function kA(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function NA(n,e,t){if(e.childName==null||t.childName==null)throw ui("Should only compare child_ events.");const i=new z(e.childName,e.snapshotNode),s=new z(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(n,e){return{eventCache:n,serverCache:e}}function ns(n,e,t,i){return Do(new wn(e,t,i),n.serverCache)}function rm(n,e,t,i){return Do(n.eventCache,new wn(e,t,i))}function nl(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Cn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta;const DA=()=>(Ta||(Ta=new je(gC)),Ta);class oe{static fromObject(e){let t=new oe(null);return He(e,(i,s)=>{t=t.set(new ne(i),s)}),t}constructor(e,t=DA()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Z(),value:this.value};if(Q(e))return null;{const i=K(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(ie(e),t);return r!=null?{path:me(new ne(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const t=K(e),i=this.children.get(t);return i!==null?i.subtree(ie(e)):new oe(null)}}set(e,t){if(Q(e))return new oe(t,this.children);{const i=K(e),r=(this.children.get(i)||new oe(null)).set(ie(e),t),o=this.children.insert(i,r);return new oe(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const t=K(e),i=this.children.get(t);if(i){const s=i.remove(ie(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new oe(null):new oe(this.value,r)}else return this}}get(e){if(Q(e))return this.value;{const t=K(e),i=this.children.get(t);return i?i.get(ie(e)):null}}setTree(e,t){if(Q(e))return t;{const i=K(e),r=(this.children.get(i)||new oe(null)).setTree(ie(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new oe(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(me(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,Z(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(Q(e))return null;{const r=K(e),o=this.children.get(r);return o?o.findOnPath_(ie(e),me(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Z(),t)}foreachOnPath_(e,t,i){if(Q(e))return this;{this.value&&i(t,this.value);const s=K(e),r=this.children.get(s);return r?r.foreachOnPath_(ie(e),me(t,s),i):new oe(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(me(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.writeTree_=e}static empty(){return new nt(new oe(null))}}function is(n,e,t){if(Q(e))return new nt(new oe(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=qe(s,e);return r=r.updateChild(o,t),new nt(n.writeTree_.set(s,r))}else{const s=new oe(t),r=n.writeTree_.setTree(e,s);return new nt(r)}}}function Dd(n,e,t){let i=n;return He(t,(s,r)=>{i=is(i,me(e,s),r)}),i}function Od(n,e){if(Q(e))return nt.empty();{const t=n.writeTree_.setTree(e,new oe(null));return new nt(t)}}function il(n,e){return Nn(n,e)!=null}function Nn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(qe(t.path,e)):null}function Vd(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ce,(i,s)=>{e.push(new z(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new z(i,s.value))}),e}function $t(n,e){if(Q(e))return n;{const t=Nn(n,e);return t!=null?new nt(new oe(t)):new nt(n.writeTree_.subtree(e))}}function sl(n){return n.writeTree_.isEmpty()}function ci(n,e){return om(Z(),n.writeTree_,e)}function om(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(D(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=om(me(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(me(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(n,e){return um(e,n)}function OA(n,e,t,i,s){D(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=is(n.visibleWrites,e,t)),n.lastWriteId=i}function VA(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function xA(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);D(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&MA(l,i.path)?s=!1:et(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return LA(n),!0;if(i.snap)n.visibleWrites=Od(n.visibleWrites,i.path);else{const l=i.children;He(l,c=>{n.visibleWrites=Od(n.visibleWrites,me(i.path,c))})}return!0}else return!1}function MA(n,e){if(n.snap)return et(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&et(me(n.path,t),e))return!0;return!1}function LA(n){n.visibleWrites=am(n.allWrites,FA,Z()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function FA(n){return n.visible}function am(n,e,t){let i=nt.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let l;if(r.snap)et(t,o)?(l=qe(t,o),i=is(i,l,r.snap)):et(o,t)&&(l=qe(o,t),i=is(i,Z(),r.snap.getChild(l)));else if(r.children){if(et(t,o))l=qe(t,o),i=Dd(i,l,r.children);else if(et(o,t))if(l=qe(o,t),Q(l))i=Dd(i,Z(),r.children);else{const c=Zn(r.children,K(l));if(c){const h=c.getChild(ie(l));i=is(i,Z(),h)}}}else throw ui("WriteRecord should have .snap or .children")}}return i}function lm(n,e,t,i,s){if(!i&&!s){const r=Nn(n.visibleWrites,e);if(r!=null)return r;{const o=$t(n.visibleWrites,e);if(sl(o))return t;if(t==null&&!il(o,Z()))return null;{const l=t||U.EMPTY_NODE;return ci(o,l)}}}else{const r=$t(n.visibleWrites,e);if(!s&&sl(r))return t;if(!s&&t==null&&!il(r,Z()))return null;{const o=function(h){return(h.visible||s)&&(!i||!~i.indexOf(h.writeId))&&(et(h.path,e)||et(e,h.path))},l=am(n.allWrites,o,e),c=t||U.EMPTY_NODE;return ci(l,c)}}}function UA(n,e,t){let i=U.EMPTY_NODE;const s=Nn(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ce,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=$t(n.visibleWrites,e);return t.forEachChild(ce,(o,l)=>{const c=ci($t(r,new ne(o)),l);i=i.updateImmediateChild(o,c)}),Vd(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=$t(n.visibleWrites,e);return Vd(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function BA(n,e,t,i,s){D(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=me(e,t);if(il(n.visibleWrites,r))return null;{const o=$t(n.visibleWrites,r);return sl(o)?s.getChild(t):ci(o,s.getChild(t))}}function qA(n,e,t,i){const s=me(e,t),r=Nn(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=$t(n.visibleWrites,s);return ci(o,i.getNode().getImmediateChild(t))}else return null}function jA(n,e){return Nn(n.visibleWrites,e)}function WA(n,e,t,i,s,r,o){let l;const c=$t(n.visibleWrites,e),h=Nn(c,Z());if(h!=null)l=h;else if(t!=null)l=ci(c,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],p=o.getCompare(),m=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let w=m.getNext();for(;w&&f.length<s;)p(w,i)!==0&&f.push(w),w=m.getNext();return f}else return[]}function HA(){return{visibleWrites:nt.empty(),allWrites:[],lastWriteId:-1}}function Yr(n,e,t,i){return lm(n.writeTree,n.treePath,e,t,i)}function Ec(n,e){return UA(n.writeTree,n.treePath,e)}function xd(n,e,t,i){return BA(n.writeTree,n.treePath,e,t,i)}function Xr(n,e){return jA(n.writeTree,me(n.treePath,e))}function $A(n,e,t,i,s,r){return WA(n.writeTree,n.treePath,e,t,i,s,r)}function Tc(n,e,t){return qA(n.writeTree,n.treePath,e,t)}function cm(n,e){return um(me(n.treePath,e),n.writeTree)}function um(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;D(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),D(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,gs(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,ms(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,li(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,gs(i,e.snapshotNode,s.oldSnap));else throw ui("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const hm=new GA;class Ic{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new wn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Tc(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Cn(this.viewCache_),r=$A(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(n){return{filter:n}}function QA(n,e){D(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function YA(n,e,t,i,s){const r=new zA;let o,l;if(t.type===tt.OVERWRITE){const h=t;h.source.fromUser?o=rl(n,e,h.path,h.snap,i,s,r):(D(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered()&&!Q(h.path),o=Jr(n,e,h.path,h.snap,i,s,l,r))}else if(t.type===tt.MERGE){const h=t;h.source.fromUser?o=JA(n,e,h.path,h.children,i,s,r):(D(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered(),o=ol(n,e,h.path,h.children,i,s,l,r))}else if(t.type===tt.ACK_USER_WRITE){const h=t;h.revert?o=tR(n,e,h.path,i,s,r):o=ZA(n,e,h.path,h.affectedTree,i,s,r)}else if(t.type===tt.LISTEN_COMPLETE)o=eR(n,e,t.path,i,r);else throw ui("Unknown operation type: "+t.type);const c=r.getChanges();return XA(e,o,c),{viewCache:o,changes:c}}function XA(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=nl(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(nm(nl(e)))}}function dm(n,e,t,i,s,r){const o=e.eventCache;if(Xr(i,t)!=null)return e;{let l,c;if(Q(t))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Cn(e),f=h instanceof U?h:U.EMPTY_NODE,p=Ec(i,f);l=n.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const h=Yr(i,Cn(e));l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const h=K(t);if(h===".priority"){D(en(t)===1,"Can't have a priority with additional path components");const f=o.getNode();c=e.serverCache.getNode();const p=xd(i,t,f,c);p!=null?l=n.filter.updatePriority(f,p):l=o.getNode()}else{const f=ie(t);let p;if(o.isCompleteForChild(h)){c=e.serverCache.getNode();const m=xd(i,t,o.getNode(),c);m!=null?p=o.getNode().getImmediateChild(h).updateChild(f,m):p=o.getNode().getImmediateChild(h)}else p=Tc(i,h,e.serverCache);p!=null?l=n.filter.updateChild(o.getNode(),h,p,f,s,r):l=o.getNode()}}return ns(e,l,o.isFullyInitialized()||Q(t),n.filter.filtersNodes())}}function Jr(n,e,t,i,s,r,o,l){const c=e.serverCache;let h;const f=o?n.filter:n.filter.getIndexedFilter();if(Q(t))h=f.updateFullNode(c.getNode(),i,null);else if(f.filtersNodes()&&!c.isFiltered()){const w=c.getNode().updateChild(t,i);h=f.updateFullNode(c.getNode(),w,null)}else{const w=K(t);if(!c.isCompleteForPath(t)&&en(t)>1)return e;const S=ie(t),k=c.getNode().getImmediateChild(w).updateChild(S,i);w===".priority"?h=f.updatePriority(c.getNode(),k):h=f.updateChild(c.getNode(),w,k,S,hm,null)}const p=rm(e,h,c.isFullyInitialized()||Q(t),f.filtersNodes()),m=new Ic(s,p,r);return dm(n,p,t,s,m,l)}function rl(n,e,t,i,s,r,o){const l=e.eventCache;let c,h;const f=new Ic(s,e,r);if(Q(t))h=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=ns(e,h,!0,n.filter.filtersNodes());else{const p=K(t);if(p===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),i),c=ns(e,h,l.isFullyInitialized(),l.isFiltered());else{const m=ie(t),w=l.getNode().getImmediateChild(p);let S;if(Q(m))S=i;else{const N=f.getCompleteChild(p);N!=null?G_(m)===".priority"&&N.getChild(Q_(m)).isEmpty()?S=N:S=N.updateChild(m,i):S=U.EMPTY_NODE}if(w.equals(S))c=e;else{const N=n.filter.updateChild(l.getNode(),p,S,m,f,o);c=ns(e,N,l.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Md(n,e){return n.eventCache.isCompleteForChild(e)}function JA(n,e,t,i,s,r,o){let l=e;return i.foreach((c,h)=>{const f=me(t,c);Md(e,K(f))&&(l=rl(n,l,f,h,s,r,o))}),i.foreach((c,h)=>{const f=me(t,c);Md(e,K(f))||(l=rl(n,l,f,h,s,r,o))}),l}function Ld(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ol(n,e,t,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,h;Q(t)?h=i:h=new oe(null).setTree(t,i);const f=e.serverCache.getNode();return h.children.inorderTraversal((p,m)=>{if(f.hasChild(p)){const w=e.serverCache.getNode().getImmediateChild(p),S=Ld(n,w,m);c=Jr(n,c,new ne(p),S,s,r,o,l)}}),h.children.inorderTraversal((p,m)=>{const w=!e.serverCache.isCompleteForChild(p)&&m.value===null;if(!f.hasChild(p)&&!w){const S=e.serverCache.getNode().getImmediateChild(p),N=Ld(n,S,m);c=Jr(n,c,new ne(p),N,s,r,o,l)}}),c}function ZA(n,e,t,i,s,r,o){if(Xr(s,t)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(Q(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Jr(n,e,t,c.getNode().getChild(t),s,r,l,o);if(Q(t)){let h=new oe(null);return c.getNode().forEachChild(Xn,(f,p)=>{h=h.set(new ne(f),p)}),ol(n,e,t,h,s,r,l,o)}else return e}else{let h=new oe(null);return i.foreach((f,p)=>{const m=me(t,f);c.isCompleteForPath(m)&&(h=h.set(f,c.getNode().getChild(m)))}),ol(n,e,t,h,s,r,l,o)}}function eR(n,e,t,i,s){const r=e.serverCache,o=rm(e,r.getNode(),r.isFullyInitialized()||Q(t),r.isFiltered());return dm(n,o,t,i,hm,s)}function tR(n,e,t,i,s,r){let o;if(Xr(i,t)!=null)return e;{const l=new Ic(i,e,s),c=e.eventCache.getNode();let h;if(Q(t)||K(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Yr(i,Cn(e));else{const p=e.serverCache.getNode();D(p instanceof U,"serverChildren would be complete if leaf node"),f=Ec(i,p)}f=f,h=n.filter.updateFullNode(c,f,r)}else{const f=K(t);let p=Tc(i,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=c.getImmediateChild(f)),p!=null?h=n.filter.updateChild(c,f,p,ie(t),l,r):e.eventCache.getNode().hasChild(f)?h=n.filter.updateChild(c,f,U.EMPTY_NODE,ie(t),l,r):h=c,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yr(i,Cn(e)),o.isLeafNode()&&(h=n.filter.updateFullNode(h,o,r)))}return o=e.serverCache.isFullyInitialized()||Xr(i,Z())!=null,ns(e,h,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new _c(i.getIndex()),r=TA(i);this.processor_=KA(r);const o=t.serverCache,l=t.eventCache,c=s.updateFullNode(U.EMPTY_NODE,o.getNode(),null),h=r.updateFullNode(U.EMPTY_NODE,l.getNode(),null),f=new wn(c,o.isFullyInitialized(),s.filtersNodes()),p=new wn(h,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Do(p,f),this.eventGenerator_=new PA(this.query_)}get query(){return this.query_}}function iR(n){return n.viewCache_.serverCache.getNode()}function sR(n,e){const t=Cn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Q(e)&&!t.getImmediateChild(K(e)).isEmpty())?t.getChild(e):null}function Fd(n){return n.eventRegistrations_.length===0}function rR(n,e){n.eventRegistrations_.push(e)}function Ud(n,e,t){const i=[];if(t){D(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Bd(n,e,t,i){e.type===tt.MERGE&&e.source.queryId!==null&&(D(Cn(n.viewCache_),"We should always have a full cache before handling merges"),D(nl(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=YA(n.processor_,s,e,t,i);return QA(n.processor_,r.viewCache),D(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,fm(n,r.changes,r.viewCache.eventCache.getNode(),null)}function oR(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ce,(r,o)=>{i.push(li(r,o))}),t.isFullyInitialized()&&i.push(nm(t.getNode())),fm(n,i,t.getNode(),e)}function fm(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return bA(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr;class aR{constructor(){this.views=new Map}}function lR(n){D(!Zr,"__referenceConstructor has already been defined"),Zr=n}function cR(){return D(Zr,"Reference.ts has not been loaded"),Zr}function uR(n){return n.views.size===0}function wc(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return D(r!=null,"SyncTree gave us an op for an invalid query."),Bd(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Bd(o,e,t,i));return r}}function hR(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Yr(t,s?i:null),c=!1;l?c=!0:i instanceof U?(l=Ec(t,i),c=!1):(l=U.EMPTY_NODE,c=!1);const h=Do(new wn(l,c,!1),new wn(i,s,!1));return new nR(e,h)}return o}function dR(n,e,t,i,s,r){const o=hR(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),rR(o,t),oR(o,t)}function fR(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const l=tn(n);if(s==="default")for(const[c,h]of n.views.entries())o=o.concat(Ud(h,t,i)),Fd(h)&&(n.views.delete(c),h.query._queryParams.loadsAllData()||r.push(h.query));else{const c=n.views.get(s);c&&(o=o.concat(Ud(c,t,i)),Fd(c)&&(n.views.delete(s),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!tn(n)&&r.push(new(cR())(e._repo,e._path)),{removed:r,events:o}}function pm(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Jn(n,e){let t=null;for(const i of n.views.values())t=t||sR(i,e);return t}function _m(n,e){if(e._queryParams.loadsAllData())return Oo(n);{const i=e._queryIdentifier;return n.views.get(i)}}function mm(n,e){return _m(n,e)!=null}function tn(n){return Oo(n)!=null}function Oo(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo;function pR(n){D(!eo,"__referenceConstructor has already been defined"),eo=n}function _R(){return D(eo,"Reference.ts has not been loaded"),eo}let mR=1;class qd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=HA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gR(n,e,t,i,s){return OA(n.pendingWriteTree_,e,t,i,s),s?Ls(n,new In(sm(),e,t)):[]}function Hn(n,e,t=!1){const i=VA(n.pendingWriteTree_,e);if(xA(n.pendingWriteTree_,e)){let r=new oe(null);return i.snap!=null?r=r.set(Z(),!0):He(i.children,o=>{r=r.set(new ne(o),!0)}),Ls(n,new Qr(i.path,r,t))}else return[]}function Vo(n,e,t){return Ls(n,new In(gc(),e,t))}function yR(n,e,t){const i=oe.fromObject(t);return Ls(n,new Es(gc(),e,i))}function vR(n,e){return Ls(n,new vs(gc(),e))}function ER(n,e,t){const i=Cc(n,t);if(i){const s=Ac(i),r=s.path,o=s.queryId,l=qe(r,e),c=new vs(yc(o),l);return Rc(n,r,c)}else return[]}function al(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||mm(o,e))){const c=fR(o,e,t,i);uR(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const h=c.removed;if(l=c.events,!s){const f=h.findIndex(m=>m._queryParams.loadsAllData())!==-1,p=n.syncPointTree_.findOnPath(r,(m,w)=>tn(w));if(f&&!p){const m=n.syncPointTree_.subtree(r);if(!m.isEmpty()){const w=wR(m);for(let S=0;S<w.length;++S){const N=w[S],k=N.query,W=Em(n,N);n.listenProvider_.startListening(ss(k),to(n,k),W.hashFn,W.onComplete)}}}!p&&h.length>0&&!i&&(f?n.listenProvider_.stopListening(ss(e),null):h.forEach(m=>{const w=n.queryToTagMap.get(xo(m));n.listenProvider_.stopListening(ss(m),w)}))}CR(n,h)}return l}function TR(n,e,t,i){const s=Cc(n,i);if(s!=null){const r=Ac(s),o=r.path,l=r.queryId,c=qe(o,e),h=new In(yc(l),c,t);return Rc(n,o,h)}else return[]}function IR(n,e,t,i){const s=Cc(n,i);if(s){const r=Ac(s),o=r.path,l=r.queryId,c=qe(o,e),h=oe.fromObject(t),f=new Es(yc(l),c,h);return Rc(n,o,f)}else return[]}function jd(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(m,w)=>{const S=qe(m,s);r=r||Jn(w,S),o=o||tn(w)});let l=n.syncPointTree_.get(s);l?(o=o||tn(l),r=r||Jn(l,Z())):(l=new aR,n.syncPointTree_=n.syncPointTree_.set(s,l));let c;r!=null?c=!0:(c=!1,r=U.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((w,S)=>{const N=Jn(S,Z());N&&(r=r.updateImmediateChild(w,N))}));const h=mm(l,e);if(!h&&!e._queryParams.loadsAllData()){const m=xo(e);D(!n.queryToTagMap.has(m),"View does not exist, but we have a tag");const w=AR();n.queryToTagMap.set(m,w),n.tagToQueryMap.set(w,m)}const f=vc(n.pendingWriteTree_,s);let p=dR(l,e,t,f,r,c);if(!h&&!o&&!i){const m=_m(l,e);p=p.concat(RR(n,e,m))}return p}function gm(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const c=qe(o,e),h=Jn(l,c);if(h)return h});return lm(s,e,r,t,!0)}function Ls(n,e){return ym(e,n.syncPointTree_,null,vc(n.pendingWriteTree_,Z()))}function ym(n,e,t,i){if(Q(n.path))return vm(n,e,t,i);{const s=e.get(Z());t==null&&s!=null&&(t=Jn(s,Z()));let r=[];const o=K(n.path),l=n.operationForChild(o),c=e.children.get(o);if(c&&l){const h=t?t.getImmediateChild(o):null,f=cm(i,o);r=r.concat(ym(l,c,h,f))}return s&&(r=r.concat(wc(s,n,i,t))),r}}function vm(n,e,t,i){const s=e.get(Z());t==null&&s!=null&&(t=Jn(s,Z()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=t?t.getImmediateChild(o):null,h=cm(i,o),f=n.operationForChild(o);f&&(r=r.concat(vm(f,l,c,h)))}),s&&(r=r.concat(wc(s,n,i,t))),r}function Em(n,e){const t=e.query,i=to(n,t);return{hashFn:()=>(iR(e)||U.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?ER(n,t._path,i):vR(n,t._path);{const r=EC(s,t);return al(n,t,null,r)}}}}function to(n,e){const t=xo(e);return n.queryToTagMap.get(t)}function xo(n){return n._path.toString()+"$"+n._queryIdentifier}function Cc(n,e){return n.tagToQueryMap.get(e)}function Ac(n){const e=n.indexOf("$");return D(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ne(n.substr(0,e))}}function Rc(n,e,t){const i=n.syncPointTree_.get(e);D(i,"Missing sync point for query tag that we're tracking");const s=vc(n.pendingWriteTree_,e);return wc(i,t,s,null)}function wR(n){return n.fold((e,t,i)=>{if(t&&tn(t))return[Oo(t)];{let s=[];return t&&(s=pm(t)),He(i,(r,o)=>{s=s.concat(o)}),s}})}function ss(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(_R())(n._repo,n._path):n}function CR(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=xo(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function AR(){return mR++}function RR(n,e,t){const i=e._path,s=to(n,e),r=Em(n,t),o=n.listenProvider_.startListening(ss(e),s,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(i);if(s)D(!tn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((h,f,p)=>{if(!Q(h)&&f&&tn(f))return[Oo(f).query];{let m=[];return f&&(m=m.concat(pm(f).map(w=>w.query))),He(p,(w,S)=>{m=m.concat(S)}),m}});for(let h=0;h<c.length;++h){const f=c[h];n.listenProvider_.stopListening(ss(f),to(n,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Sc(t)}node(){return this.node_}}class Pc{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=me(this.path_,e);return new Pc(this.syncTree_,t)}node(){return gm(this.syncTree_,this.path_)}}const SR=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Wd=function(n,e,t){if(!n||typeof n!="object")return n;if(D(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return PR(n[".sv"],e,t);if(typeof n[".sv"]=="object")return bR(n[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},PR=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:D(!1,"Unexpected server value: "+n)}},bR=function(n,e,t){n.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&D(!1,"Unexpected increment value: "+i);const s=e.node();if(D(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},kR=function(n,e,t,i){return bc(e,new Pc(t,n),i)},NR=function(n,e,t){return bc(n,new Sc(e),t)};function bc(n,e,t){const i=n.getPriority().val(),s=Wd(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=Wd(o.getValue(),e,t);return l!==o.getValue()||s!==o.getPriority().val()?new ve(l,Ve(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ve(s))),o.forEachChild(ce,(l,c)=>{const h=bc(c,e.getImmediateChild(l),t);h!==c&&(r=r.updateImmediateChild(l,h))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Nc(n,e){let t=e instanceof ne?e:new ne(e),i=n,s=K(t);for(;s!==null;){const r=Zn(i.node.children,s)||{children:{},childCount:0};i=new kc(s,i,r),t=ie(t),s=K(t)}return i}function vi(n){return n.node.value}function Tm(n,e){n.node.value=e,ll(n)}function Im(n){return n.node.childCount>0}function DR(n){return vi(n)===void 0&&!Im(n)}function Mo(n,e){He(n.node.children,(t,i)=>{e(new kc(t,n,i))})}function wm(n,e,t,i){t&&!i&&e(n),Mo(n,s=>{wm(s,e,!0,i)}),t&&i&&e(n)}function OR(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Fs(n){return new ne(n.parent===null?n.name:Fs(n.parent)+"/"+n.name)}function ll(n){n.parent!==null&&VR(n.parent,n.name,n)}function VR(n,e,t){const i=DR(t),s=bt(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ll(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ll(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=/[\[\].#$\/\u0000-\u001F\u007F]/,MR=/[\[\].#$\u0000-\u001F\u007F]/,Ia=10*1024*1024,Cm=function(n){return typeof n=="string"&&n.length!==0&&!xR.test(n)},Am=function(n){return typeof n=="string"&&n.length!==0&&!MR.test(n)},LR=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Am(n)},Rm=function(n,e,t){const i=t instanceof ne?new ZC(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+dn(i));if(typeof e=="function")throw new Error(n+"contains a function "+dn(i)+" with contents = "+e.toString());if(R_(e))throw new Error(n+"contains "+e.toString()+" "+dn(i));if(typeof e=="string"&&e.length>Ia/3&&so(e)>Ia)throw new Error(n+"contains a string greater than "+Ia+" utf8 bytes "+dn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(He(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Cm(o)))throw new Error(n+" contains an invalid key ("+o+") "+dn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);eA(i,o),Rm(n,l,i),tA(i)}),s&&r)throw new Error(n+' contains ".value" child '+dn(i)+" in addition to actual children.")}},Sm=function(n,e,t,i){if(!(i&&t===void 0)&&!Am(t))throw new Error(af(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},FR=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Sm(n,e,t,i)},UR=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Cm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!LR(t))throw new Error(af(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Pm(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!dc(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function bm(n,e,t){Pm(n,t),km(n,i=>dc(i,e))}function Dn(n,e,t){Pm(n,t),km(n,i=>et(i,e)||et(e,i))}function km(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(qR(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function qR(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();_n&&Oe("event: "+t.toString()),xs(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR="repo_interrupt",WR=25;class HR{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new BR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Kr(),this.transactionQueueTree_=new kc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function $R(n,e,t){if(n.stats_=uc(n.repoInfo_),n.forceRestClient_||CC())n.server_=new Gr(n.repoInfo_,(i,s,r,o)=>{Hd(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>$d(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ie(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Tt(n.repoInfo_,e,(i,s,r,o)=>{Hd(n,i,s,r,o)},i=>{$d(n,i)},i=>{GR(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=bC(n.repoInfo_,()=>new SA(n.stats_,n.server_)),n.infoData_=new IA,n.infoSyncTree_=new qd({startListening:(i,s,r,o)=>{let l=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(l=Vo(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Dc(n,"connected",!1),n.serverSyncTree_=new qd({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(l,c)=>{const h=o(l,c);Dn(n.eventQueue_,i._path,h)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function zR(n){const t=n.infoData_.getNode(new ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Nm(n){return SR({timestamp:zR(n)})}function Hd(n,e,t,i,s){n.dataUpdateCount++;const r=new ne(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const c=wr(t,h=>Ve(h));o=IR(n.serverSyncTree_,r,c,s)}else{const c=Ve(t);o=TR(n.serverSyncTree_,r,c,s)}else if(i){const c=wr(t,h=>Ve(h));o=yR(n.serverSyncTree_,r,c)}else{const c=Ve(t);o=Vo(n.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Vc(n,r)),Dn(n.eventQueue_,l,o)}function $d(n,e){Dc(n,"connected",e),e===!1&&QR(n)}function GR(n,e){He(e,(t,i)=>{Dc(n,t,i)})}function Dc(n,e,t){const i=new ne("/.info/"+e),s=Ve(t);n.infoData_.updateSnapshot(i,s);const r=Vo(n.infoSyncTree_,i,s);Dn(n.eventQueue_,i,r)}function KR(n){return n.nextWriteId_++}function QR(n){Dm(n,"onDisconnectEvents");const e=Nm(n),t=Kr();tl(n.onDisconnect_,Z(),(s,r)=>{const o=kR(s,r,n.serverSyncTree_,e);im(t,s,o)});let i=[];tl(t,Z(),(s,r)=>{i=i.concat(Vo(n.serverSyncTree_,s,r));const o=e0(n,s);Vc(n,o)}),n.onDisconnect_=Kr(),Dn(n.eventQueue_,Z(),i)}function YR(n,e,t){let i;K(e._path)===".info"?i=jd(n.infoSyncTree_,e,t):i=jd(n.serverSyncTree_,e,t),bm(n.eventQueue_,e._path,i)}function zd(n,e,t){let i;K(e._path)===".info"?i=al(n.infoSyncTree_,e,t):i=al(n.serverSyncTree_,e,t),bm(n.eventQueue_,e._path,i)}function XR(n){n.persistentConnection_&&n.persistentConnection_.interrupt(jR)}function Dm(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Oe(t,...e)}function Om(n,e,t){return gm(n.serverSyncTree_,e,t)||U.EMPTY_NODE}function Oc(n,e=n.transactionQueueTree_){if(e||Lo(n,e),vi(e)){const t=xm(n,e);D(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&JR(n,Fs(e),t)}else Im(e)&&Mo(e,t=>{Oc(n,t)})}function JR(n,e,t){const i=t.map(h=>h.currentWriteId),s=Om(n,e,i);let r=s;const o=s.hash();for(let h=0;h<t.length;h++){const f=t[h];D(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=qe(e,f.path);r=r.updateChild(p,f.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;n.server_.put(c.toString(),l,h=>{Dm(n,"transaction put response",{path:c.toString(),status:h});let f=[];if(h==="ok"){const p=[];for(let m=0;m<t.length;m++)t[m].status=2,f=f.concat(Hn(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&p.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();Lo(n,Nc(n.transactionQueueTree_,e)),Oc(n,n.transactionQueueTree_),Dn(n.eventQueue_,e,f);for(let m=0;m<p.length;m++)xs(p[m])}else{if(h==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{Ke("transaction at "+c.toString()+" failed: "+h);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=h}Vc(n,e)}},o)}function Vc(n,e){const t=Vm(n,e),i=Fs(t),s=xm(n,t);return ZR(n,s,i),i}function ZR(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],h=qe(t,c.path);let f=!1,p;if(D(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,p=c.abortReason,s=s.concat(Hn(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=WR)f=!0,p="maxretry",s=s.concat(Hn(n.serverSyncTree_,c.currentWriteId,!0));else{const m=Om(n,c.path,o);c.currentInputSnapshot=m;const w=e[l].update(m.val());if(w!==void 0){Rm("transaction failed: Data returned ",w,c.path);let S=Ve(w);typeof w=="object"&&w!=null&&bt(w,".priority")||(S=S.updatePriority(m.getPriority()));const k=c.currentWriteId,W=Nm(n),B=NR(S,m,W);c.currentOutputSnapshotRaw=S,c.currentOutputSnapshotResolved=B,c.currentWriteId=KR(n),o.splice(o.indexOf(k),1),s=s.concat(gR(n.serverSyncTree_,c.path,B,c.currentWriteId,c.applyLocally)),s=s.concat(Hn(n.serverSyncTree_,k,!0))}else f=!0,p="nodata",s=s.concat(Hn(n.serverSyncTree_,c.currentWriteId,!0))}Dn(n.eventQueue_,t,s),s=[],f&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(p),!1,null))))}Lo(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)xs(i[l]);Oc(n,n.transactionQueueTree_)}function Vm(n,e){let t,i=n.transactionQueueTree_;for(t=K(e);t!==null&&vi(i)===void 0;)i=Nc(i,t),e=ie(e),t=K(e);return i}function xm(n,e){const t=[];return Mm(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Mm(n,e,t){const i=vi(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Mo(e,s=>{Mm(n,s,t)})}function Lo(n,e){const t=vi(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Tm(e,t.length>0?t:void 0)}Mo(e,i=>{Lo(n,i)})}function e0(n,e){const t=Fs(Vm(n,e)),i=Nc(n.transactionQueueTree_,e);return OR(i,s=>{wa(n,s)}),wa(n,i),wm(i,s=>{wa(n,s)}),t}function wa(n,e){const t=vi(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(D(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(D(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Hn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Tm(e,void 0):t.length=r+1,Dn(n.eventQueue_,Fs(e),s);for(let o=0;o<i.length;o++)xs(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function n0(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ke(`Invalid query segment '${t}' in query '${n}'`)}return e}const Gd=function(n,e){const t=i0(n),i=t.namespace;t.domain==="firebase.com"&&St(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&St("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||_C();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new F_(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new ne(t.pathString)}},i0=function(n){let e="",t="",i="",s="",r="",o=!0,l="https",c=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(l=n.substring(0,h-1),n=n.substring(h+2));let f=n.indexOf("/");f===-1&&(f=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(f,p)),f<p&&(s=t0(n.substring(f,p)));const m=n0(n.substring(Math.min(n.length,p)));h=e.indexOf(":"),h>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(h+1),10)):h=e.length;const w=e.slice(0,h);if(w.toLowerCase()==="localhost")t="localhost";else if(w.split(".").length<=2)t=w;else{const S=e.indexOf(".");i=e.substring(0,S).toLowerCase(),t=e.substring(S+1),r=i}"ns"in m&&(r=m.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ie(this.snapshot.exportVal())}}class Fm{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return Q(this._path)?null:G_(this._path)}get ref(){return new kt(this._repo,this._path)}get _queryIdentifier(){const e=kd(this._queryParams),t=lc(e);return t==="{}"?"default":t}get _queryObject(){return kd(this._queryParams)}isEqual(e){if(e=de(e),!(e instanceof xc))return!1;const t=this._repo===e._repo,i=dc(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+JC(this._path)}}class kt extends xc{constructor(e,t){super(e,t,new mc,!1)}get parent(){const e=Q_(this._path);return e===null?null:new kt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ts{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ne(e),i=no(this.ref,e);return new Ts(this._node.getChild(t),i,ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Ts(s,no(this.ref,i),ce)))}hasChild(e){const t=new ne(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function D0(n,e){return n=de(n),n._checkNotDeleted("ref"),e!==void 0?no(n._root,e):n._root}function no(n,e){return n=de(n),K(n._path)===null?FR("child","path",e,!1):Sm("child","path",e,!1),new kt(n._repo,me(n._path,e))}class Mc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Lm("value",this,new Ts(e.snapshotNode,new kt(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Fm(this,e,t):null}matches(e){return e instanceof Mc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Lc{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Fm(this,e,t):null}createEvent(e,t){D(e.childName!=null,"Child events should have a childName.");const i=no(new kt(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new Lm(e.type,this,new Ts(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Lc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function r0(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const c=t,h=(f,p)=>{zd(n._repo,n,l),c(f,p)};h.userCallback=t.userCallback,h.context=t.context,t=h}const o=new s0(t,r||void 0),l=e==="value"?new Mc(o):new Lc(e,o);return YR(n._repo,n,l),()=>zd(n._repo,n,l)}function O0(n,e,t,i){return r0(n,"value",e,t,i)}lR(kt);pR(kt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="FIREBASE_DATABASE_EMULATOR_HOST",cl={};let a0=!1;function l0(n,e,t,i){const s=e.lastIndexOf(":"),r=e.substring(0,s),o=An(r);n.repoInfo_=new F_(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function c0(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||St("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Oe("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Gd(r,s),l=o.repoInfo,c,h;typeof process<"u"&&dd&&(h=dd[o0]),h?(c=!0,r=`http://${h}?ns=${l.namespace}`,o=Gd(r,s),l=o.repoInfo):c=!o.repoInfo.secure;const f=s&&c?new Yn(Yn.OWNER):new RC(n.name,n.options,e);UR("Invalid Firebase Database URL",o),Q(o.path)||St("Database URL must point to the root of a Firebase Database (not including a child path).");const p=h0(l,n,f,new AC(n,t));return new d0(p,n)}function u0(n,e){const t=cl[e];(!t||t[n.key]!==n)&&St(`Database ${e}(${n.repoInfo_}) has already been deleted.`),XR(n),delete t[n.key]}function h0(n,e,t,i){let s=cl[e.name];s||(s={},cl[e.name]=s);let r=s[n.toURLString()];return r&&St("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new HR(n,a0,t,i),s[n.toURLString()]=r,r}class d0{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||($R(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0,hi("Database",this._repo.repoInfo_.emulatorOptions!==null)),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new kt(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(u0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&St("Cannot call "+e+" on a deleted database.")}}function V0(n=_l(),e){const t=oo(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Zd("database");i&&f0(t,...i)}return t}function f0(n,e,t,i={}){n=de(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&zt(i,r.repoInfo_.emulatorOptions))return;St("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&St('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Yn(Yn.OWNER);else if(i.mockUserToken){const l=typeof i.mockUserToken=="string"?i.mockUserToken:nf(i.mockUserToken,n.app.options.projectId);o=new Yn(l)}An(e)&&(fl(e),hi("Database",!0)),l0(r,s,i,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(n){uC(Rn),mn(new Gt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return c0(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),ot(fd,pd,n),ot(fd,pd,"esm2017")}Tt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Tt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};p0();export{ge as T,I0 as a,y0 as b,m0 as c,Qw as d,g0 as e,A0 as f,V0 as g,N0 as h,xy as i,T0 as j,R0 as k,k0 as l,b0 as m,O0 as o,w0 as q,D0 as r,S0 as s,P0 as u,C0 as w};
