if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>n(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(l.map((s=>t[s]||o(s)))).then((s=>(i(...s),u)))}}define(["./workbox-8b1b2de1"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.BQ_onWrA.js",revision:null},{url:"assets/audio_index.md.dfOiay_T.js",revision:null},{url:"assets/audio_index.md.dfOiay_T.lean.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.s3o_0-_D.js",revision:null},{url:"assets/chunks/framework.krxl9QgM.js",revision:null},{url:"assets/chunks/snippet.DWm-LxzY.js",revision:null},{url:"assets/chunks/theme.BC5HIW_r.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.B3BB1Ulp.js",revision:null},{url:"assets/index.md.BcNtWHfu.js",revision:null},{url:"assets/index.md.BcNtWHfu.lean.js",revision:null},{url:"assets/style.C6SG-Vw6.css",revision:null},{url:"registerSW.js",revision:"f53644caa7199ace9578ff03b86b2977"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
