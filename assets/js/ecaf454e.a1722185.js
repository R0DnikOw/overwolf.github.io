"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1317],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return c},mdx:function(){return f},useMDXComponents:function(){return u},withMDXComponents:function(){return p}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),p=function(e){return function(n){var t=u(n.components);return o.createElement(e,i({},n,{components:t}))}},u=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(d.Provider,{value:n},e.children)},w={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),c=r,m=p["".concat(a,".").concat(c)]||p[c]||w[c]||i;return t?o.createElement(m,s(s({ref:n},d),{},{components:t})):o.createElement(m,s({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17728:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return w},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"windows-tips",title:"General tips for using windows",sidebar_label:"General Tips"},l=void 0,d={unversionedId:"topics/windows-tips",id:"topics/windows-tips",title:"General tips for using windows",description:"In this segment we'll share some best practices and tips born of experience on using Overwolf windows:",source:"@site/pages/docs/topics/windows-tips.mdx",sourceDirName:"topics",slug:"/topics/windows-tips",permalink:"/docs/topics/windows-tips",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/pages/docs/topics/windows-tips.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"windows-tips",title:"General tips for using windows",sidebar_label:"General Tips"},sidebar:"docs",previous:{title:"Resolution Size and Position",permalink:"/docs/topics/windows-resolution-size-position"},next:{title:"What are Overwolf logs",permalink:"/docs/topics/logs-intro"}},p={},u=[{value:"Call getCurrentWindow() once",id:"call-getcurrentwindow-once",level:2},{value:"Avoid full-screen transparent windows",id:"avoid-full-screen-transparent-windows",level:2},{value:"Your app is not a website!",id:"your-app-is-not-a-website",level:2},{value:"Keep your windows small",id:"keep-your-windows-small",level:2},{value:"Use block_top_window_navigation",id:"use-block_top_window_navigation",level:2},{value:"Use a background controller",id:"use-a-background-controller",level:2},{value:"Use native desktop windows",id:"use-native-desktop-windows",level:2}],c={toc:u};function w(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.mdx)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"In this segment we'll share some best practices and tips born of experience on using Overwolf windows:"),(0,i.mdx)("h2",{id:"call-getcurrentwindow-once"},"Call getCurrentWindow() once"),(0,i.mdx)("p",null,"A window should call ",(0,i.mdx)("a",{parentName:"p",href:"../api/overwolf-windows#getcurrentwindowcallback"},"overwolf.windows.getCurrentWindow()")," once during startup and then store the results in a variable for later use. Also makes your code more elegant:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'overwolf.windows.getCurrentWindow(function(result) {\n    if(result.status === "success") {\n        overwolf.windows.dragMove(result.window.id);\n    }\n});\n')),(0,i.mdx)("h2",{id:"avoid-full-screen-transparent-windows"},"Avoid full-screen transparent windows"),(0,i.mdx)("p",null,"Overwolf apps are supposed to act like native desktop applications and not as websites \u2013 therefore, don\u2019t be tempted to create full-screen transparent windows with draggable HTML elements (e.g. ",(0,i.mdx)("inlineCode",{parentName:"p"},"<div>"),") as windows.\nDoing so will:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Create a low-performance, laggy experience.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Use a lot more CPU than required for your features.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Will not support dual screens or companion laptop screens, including dragging an element to the second screen.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Cause a risk of a broken HTML page covering the entire game screen.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Cause a risk of grabbing focus without the gamer wanting it or understanding why."))),(0,i.mdx)("h2",{id:"your-app-is-not-a-website"},"Your app is not a website!"),(0,i.mdx)("p",null,"Overwolf apps are supposed to act like native desktop applications, not websites. Avoid enabling mousewheel scrolls or ",(0,i.mdx)("a",{parentName:"p",href:"https://stackoverflow.com/questions/826782/how-to-disable-text-selection-highlighting"},"text selection")," in your app's windows, these are website features which would look and feel weird in an application setting. Whenever in doubt in terms of design or user experience, compare your app to desktop applications and not to websites. "),(0,i.mdx)("h2",{id:"keep-your-windows-small"},"Keep your windows small"),(0,i.mdx)("p",null,"App windows should provide their value in the leanest, most accurate fashion possible. When Overwolf renders transparent windows it does it\u2019s best to do it efficiently, however, large windows do have performance costs. Therefore, avoid using large windows and try to get your app's design to be focused, to the point and as small as you can effectively make it."),(0,i.mdx)("h2",{id:"use-block_top_window_navigation"},"Use block_top_window_navigation"),(0,i.mdx)("p",null,"Unless you have good reasons to do otherwise, always set the ",(0,i.mdx)("a",{parentName:"p",href:"../api/manifest-json#windows-block_top_window_navigation"},"block_top_window_navigation")," flag to true in your manifest.json file."),(0,i.mdx)("p",null,"This will ensure that no bugs or accidental calls like window.top.href take control of your entire app.\nThe only reason this isn\u2019t set to true by default is for backwards compatibility for apps that are hosted on remote servers."),(0,i.mdx)("h2",{id:"use-a-background-controller"},"Use a background controller"),(0,i.mdx)("p",null,"Consider using your main window as a hidden controller window that the user doesn\u2019t see \u2013 it can act as a service that runs in the background and communicates with other visible windows of the app. For apps that auto-launch when the game starts or wish to implement pop-up notifications, this is a must-have."),(0,i.mdx)("p",null,'This "hidden" window should have the ',(0,i.mdx)("a",{parentName:"p",href:"../api/manifest-json#is_background_page"},"is_background_page")," flag set to true in the app\u2019s manifest.json file:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'"index" : {\n  ...\n  "is_background_page": true,\n  ...\n}\n')),(0,i.mdx)("h2",{id:"use-native-desktop-windows"},"Use native desktop windows"),(0,i.mdx)("p",null,'If your app includes a window that will only be visible on desktop but not while playing, you should set your window as "native".',(0,i.mdx)("br",{parentName:"p"}),"\n","It will dramatically improve your app performance and help design an efficient, elegant product."),(0,i.mdx)("p",null," ",(0,i.mdx)("a",{parentName:"p",href:"windows-types#native-window"},"Read more"),"."))}w.isMDXComponent=!0}}]);