(()=>{var e={};e.id=445,e.ids=[445],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},84091:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>d,pages:()=>p,routeModule:()=>x,tree:()=>c}),r(81091),r(89116),r(35866);var s=r(23191),a=r(88716),n=r(37922),o=r.n(n),i=r(95231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["menu",{children:["[category]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,81091)),"C:\\Users\\ashu0\\Desktop\\My Projects\\restrurantapp\\src\\app\\menu\\[category]\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,89116)),"C:\\Users\\ashu0\\Desktop\\My Projects\\restrurantapp\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["C:\\Users\\ashu0\\Desktop\\My Projects\\restrurantapp\\src\\app\\menu\\[category]\\page.tsx"],d="/menu/[category]/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/menu/[category]/page",pathname:"/menu/[category]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},46629:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,92481,23)),Promise.resolve().then(r.t.bind(r,79404,23))},81091:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(19510),a=r(17710),n=r(57371);r(71159);let o=async e=>{let t=await fetch(`http://localhost:3000/api/products?cat=${e}`,{cache:"no-store"});if(!t.ok)throw Error("Failed!");return t.json()},i=async({params:e})=>{let t=await o(e.category);return s.jsx("div",{className:"flex flex-wrap text-orange-500",children:t.map(e=>(0,s.jsxs)(n.default,{className:"w-full h-[60vh] border-r-2 border-b-2 border-orange-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50",href:`/product/${e.id}`,children:[e.img&&s.jsx("div",{className:"relative h-[80%]",children:s.jsx(a.default,{src:e.img,alt:"",fill:!0,className:"object-contain"})}),(0,s.jsxs)("div",{className:"flex items-center justify-between font-bold gr",children:[s.jsx("h1",{className:"text-2xl uppercase p-2",children:e.title}),(0,s.jsxs)("h2",{className:"group-hover:hidden text-xl",children:["$",e.price]}),s.jsx("button",{className:" hidden group-hover:block uppercase bg-orange-500 text-white rounded-md p-2",children:"Add to Cart"})]})]},e.id))})}},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(66621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,386,621,268],()=>r(84091));module.exports=s})();