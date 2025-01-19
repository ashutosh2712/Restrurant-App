"use strict";(()=>{var e={};e.id=912,e.ids=[912],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},63477:e=>{e.exports=require("querystring")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},14578:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>h,patchFetch:()=>m,requestAsyncStorage:()=>l,routeModule:()=>p,serverHooks:()=>d,staticGenerationAsyncStorage:()=>c});var s={};r.r(s),r.d(s,{GET:()=>u,POST:()=>u});var i=r(49303),n=r(88716),o=r(60670),a=r(28695);let u=(0,r(45609).default)(a.L),p=new i.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/auth/[...nextauth]/route",pathname:"/api/auth/[...nextauth]",filename:"route",bundlePath:"app/api/auth/[...nextauth]/route"},resolvedPagePath:"C:\\Users\\ashu0\\Desktop\\My Projects\\restrurantapp\\src\\app\\api\\auth\\[...nextauth]\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:l,staticGenerationAsyncStorage:c,serverHooks:d}=p,h="/api/auth/[...nextauth]/route";function m(){return(0,o.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:c})}},79925:e=>{var t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,n={};function o(e){var t;let r=["path"in e&&e.path&&`Path=${e.path}`,"expires"in e&&(e.expires||0===e.expires)&&`Expires=${("number"==typeof e.expires?new Date(e.expires):e.expires).toUTCString()}`,"maxAge"in e&&"number"==typeof e.maxAge&&`Max-Age=${e.maxAge}`,"domain"in e&&e.domain&&`Domain=${e.domain}`,"secure"in e&&e.secure&&"Secure","httpOnly"in e&&e.httpOnly&&"HttpOnly","sameSite"in e&&e.sameSite&&`SameSite=${e.sameSite}`,"partitioned"in e&&e.partitioned&&"Partitioned","priority"in e&&e.priority&&`Priority=${e.priority}`].filter(Boolean),s=`${e.name}=${encodeURIComponent(null!=(t=e.value)?t:"")}`;return 0===r.length?s:`${s}; ${r.join("; ")}`}function a(e){let t=new Map;for(let r of e.split(/; */)){if(!r)continue;let e=r.indexOf("=");if(-1===e){t.set(r,"true");continue}let[s,i]=[r.slice(0,e),r.slice(e+1)];try{t.set(s,decodeURIComponent(null!=i?i:"true"))}catch{}}return t}function u(e){var t,r;if(!e)return;let[[s,i],...n]=a(e),{domain:o,expires:u,httponly:c,maxage:d,path:h,samesite:m,secure:f,partitioned:g,priority:x}=Object.fromEntries(n.map(([e,t])=>[e.toLowerCase(),t]));return function(e){let t={};for(let r in e)e[r]&&(t[r]=e[r]);return t}({name:s,value:decodeURIComponent(i),domain:o,...u&&{expires:new Date(u)},...c&&{httpOnly:!0},..."string"==typeof d&&{maxAge:Number(d)},path:h,...m&&{sameSite:p.includes(t=(t=m).toLowerCase())?t:void 0},...f&&{secure:!0},...x&&{priority:l.includes(r=(r=x).toLowerCase())?r:void 0},...g&&{partitioned:!0}})}((e,r)=>{for(var s in r)t(e,s,{get:r[s],enumerable:!0})})(n,{RequestCookies:()=>c,ResponseCookies:()=>d,parseCookie:()=>a,parseSetCookie:()=>u,stringifyCookie:()=>o}),e.exports=((e,n,o,a)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let o of s(n))i.call(e,o)||void 0===o||t(e,o,{get:()=>n[o],enumerable:!(a=r(n,o))||a.enumerable});return e})(t({},"__esModule",{value:!0}),n);var p=["strict","lax","none"],l=["low","medium","high"],c=class{constructor(e){this._parsed=new Map,this._headers=e;let t=e.get("cookie");if(t)for(let[e,r]of a(t))this._parsed.set(e,{name:e,value:r})}[Symbol.iterator](){return this._parsed[Symbol.iterator]()}get size(){return this._parsed.size}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let r=Array.from(this._parsed);if(!e.length)return r.map(([e,t])=>t);let s="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return r.filter(([e])=>e===s).map(([e,t])=>t)}has(e){return this._parsed.has(e)}set(...e){let[t,r]=1===e.length?[e[0].name,e[0].value]:e,s=this._parsed;return s.set(t,{name:t,value:r}),this._headers.set("cookie",Array.from(s).map(([e,t])=>o(t)).join("; ")),this}delete(e){let t=this._parsed,r=Array.isArray(e)?e.map(e=>t.delete(e)):t.delete(e);return this._headers.set("cookie",Array.from(t).map(([e,t])=>o(t)).join("; ")),r}clear(){return this.delete(Array.from(this._parsed.keys())),this}[Symbol.for("edge-runtime.inspect.custom")](){return`RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(e=>`${e.name}=${encodeURIComponent(e.value)}`).join("; ")}},d=class{constructor(e){var t,r,s;this._parsed=new Map,this._headers=e;let i=null!=(s=null!=(r=null==(t=e.getSetCookie)?void 0:t.call(e))?r:e.get("set-cookie"))?s:[];for(let e of Array.isArray(i)?i:function(e){if(!e)return[];var t,r,s,i,n,o=[],a=0;function u(){for(;a<e.length&&/\s/.test(e.charAt(a));)a+=1;return a<e.length}for(;a<e.length;){for(t=a,n=!1;u();)if(","===(r=e.charAt(a))){for(s=a,a+=1,u(),i=a;a<e.length&&"="!==(r=e.charAt(a))&&";"!==r&&","!==r;)a+=1;a<e.length&&"="===e.charAt(a)?(n=!0,a=i,o.push(e.substring(t,s)),t=a):a=s+1}else a+=1;(!n||a>=e.length)&&o.push(e.substring(t,e.length))}return o}(i)){let t=u(e);t&&this._parsed.set(t.name,t)}}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let r=Array.from(this._parsed.values());if(!e.length)return r;let s="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return r.filter(e=>e.name===s)}has(e){return this._parsed.has(e)}set(...e){let[t,r,s]=1===e.length?[e[0].name,e[0].value,e[0]]:e,i=this._parsed;return i.set(t,function(e={name:"",value:""}){return"number"==typeof e.expires&&(e.expires=new Date(e.expires)),e.maxAge&&(e.expires=new Date(Date.now()+1e3*e.maxAge)),(null===e.path||void 0===e.path)&&(e.path="/"),e}({name:t,value:r,...s})),function(e,t){for(let[,r]of(t.delete("set-cookie"),e)){let e=o(r);t.append("set-cookie",e)}}(i,this._headers),this}delete(...e){let[t,r,s]="string"==typeof e[0]?[e[0]]:[e[0].name,e[0].path,e[0].domain];return this.set({name:t,path:r,domain:s,value:"",expires:new Date(0)})}[Symbol.for("edge-runtime.inspect.custom")](){return`ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(o).join("; ")}}},49303:(e,t,r)=>{e.exports=r(30517)},92044:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RequestCookies:function(){return s.RequestCookies},ResponseCookies:function(){return s.ResponseCookies}});let s=r(79925)},28695:(e,t,r)=>{r.d(t,{L:()=>a,P:()=>u});var s=r(7585),i=r(75571),n=r(77234),o=r(39826);let a={adapter:(0,s.N)(o._),session:{strategy:"jwt"},providers:[(0,n.Z)({clientId:process.env.AUTH_GOOGLE_ID,clientSecret:process.env.AUTH_GOOGLE_SECRET})],callbacks:{session:async({token:e,session:t})=>(e&&(t.user.isAdmin=e.isAdmin),t),async jwt({token:e}){let t=await o._.user.findUnique({where:{email:e.email}});return e.isAdmin=t?.isAdmin,e}}},u=()=>(0,i.getServerSession)(a)},39826:(e,t,r)=>{r.d(t,{_:()=>i});let s=require("@prisma/client"),i=globalThis.prisma||new s.PrismaClient}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,635],()=>r(14578));module.exports=s})();