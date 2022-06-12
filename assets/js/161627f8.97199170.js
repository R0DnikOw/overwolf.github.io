"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2135],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return m},mdx:function(){return h},useMDXComponents:function(){return u},withMDXComponents:function(){return l}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){return function(t){var n=u(t.components);return r.createElement(e,a({},t,{components:n}))}},u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),m=o,f=l["".concat(i,".").concat(m)]||l[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},23954:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var r,o=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],c={id:"launch-time-performance",title:"App Launch Performance",sidebar_label:"App launch performance"},p=void 0,l={unversionedId:"topics/launch-time-performance",id:"topics/launch-time-performance",title:"App Launch Performance",description:"When gamers launch an app, they expect it to load quickly and be responsive immediately when launched. Bad launch performance or an app that takes a while to start working can disappoint or annoy users, not meeting their standards. Naturally, different apps have different requirements, and some apps to take a couple of seconds to load - however, you should do your very best to make your app light and efficient so loading and launch times are as short as possible.",source:"@site/pages/docs/topics/launch-time-performance.mdx",sourceDirName:"topics",slug:"/topics/launch-time-performance",permalink:"/docs/topics/launch-time-performance",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/pages/docs/topics/launch-time-performance.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"launch-time-performance",title:"App Launch Performance",sidebar_label:"App launch performance"},sidebar:"docs",previous:{title:"First time user experience",permalink:"/docs/topics/first-time-user-experience"},next:{title:"Marketing Communications",permalink:"/docs/topics/communication-guidelines"}},u={},m=[{value:"Tips for a better launch experience",id:"tips-for-a-better-launch-experience",level:4}],d=(r="ImageSlider",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),f={toc:m};function h(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.mdx)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"When gamers launch an app, they expect it to load quickly and be responsive immediately when launched. Bad launch performance or an app that takes a while to start working can disappoint or annoy users, not meeting their standards. Naturally, different apps have different requirements, and some apps to take a couple of seconds to load - however, you should do your very best to make your app light and efficient so loading and launch times are as short as possible."),(0,i.mdx)("h4",{id:"tips-for-a-better-launch-experience"},"Tips for a better launch experience"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Locally store assets used by your app's Home and Notification windows, which are the ones seen by the user on launch. These images, fonts or other assets should be a part of the base .opk file for faster loading times.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Use long-term caching for resources that do not change often, so your user won't have to redownload materials. For example, League of Legends champion portraits and item visuals can be stored long-term. ")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Compress your app\u2019s JavaScript. For example, comments and whitespace are not needed for code execution, and removing them will reduce file size and speed up script execution times.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Compress images to the smallest size possible with ",(0,i.mdx)("a",{parentName:"p",href:"http://www.jpegmini.com/"},"JPEGMini")," or ",(0,i.mdx)("a",{parentName:"p",href:"https://tinypng.com/"},"TinyPNG"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Remove non-critical JavaScript from your app to reduce transmission times, CPU-intensive compiling and potential memory overhead.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"During runtime, prefer smaller, short running scripts to minimize responsiveness issues. Long-running JavaScript can block the main thread causing pages to become unresponsive."))),(0,i.mdx)("p",null,"Our goal is to load any window in under 30ms from the moment the user clicked to open the app from the Overwolf dock or used to hotkey in-game. A loader can be used once the app has been launched."),(0,i.mdx)(d,{mdxType:"ImageSlider"},(0,i.mdx)("img",{src:n(68169).Z,alt:"Trophy Hunter loader"}),(0,i.mdx)("img",{src:n(57910).Z,alt:"CSGO Scout loader"})))}h.isMDXComponent=!0},57910:function(e,t,n){t.Z=n.p+"assets/images/CSGOScoutloader-72a51ecc988d0edb801e600dfd65cb09.png"},68169:function(e,t,n){t.Z=n.p+"assets/images/THLoader-8f7574545326dfcd7e807b5d78230bc9.jpg"}}]);