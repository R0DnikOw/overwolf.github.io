"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3764],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return m},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),s=function(e){return function(n){var t=p(n.components);return a.createElement(e,i({},n,{components:t}))}},p=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(m.Provider,{value:n},e.children)},w={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=p(t),u=r,c=s["".concat(o,".").concat(u)]||s[u]||w[u]||i;return t?a.createElement(c,l(l({ref:n},m),{},{components:t})):a.createElement(c,l({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},88182:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return u}});var a,r=t(87462),i=t(63366),o=(t(67294),t(3905)),l=["components"],d={id:"windows-types",title:"Windows Types",sidebar_label:"Windows Types"},m=void 0,s={unversionedId:"topics/windows-types",id:"topics/windows-types",title:"Windows Types",description:"Behavior is different depending on window type, and we're going to go over two main types of Overwolf app windows: Transparent vs. Non-Transparent Windows.",source:"@site/pages/docs/topics/windows-types.mdx",sourceDirName:"topics",slug:"/topics/windows-types",permalink:"/docs/topics/windows-types",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/pages/docs/topics/windows-types.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"windows-types",title:"Windows Types",sidebar_label:"Windows Types"},sidebar:"docs",previous:{title:"Windows Communication",permalink:"/docs/topics/communicating-between-windows"},next:{title:"Resolution Size and Position",permalink:"/docs/topics/windows-resolution-size-position"}},p={},u=[{value:"Non-Transparent Window",id:"non-transparent-window",level:2},{value:"Example from the manifest.json:",id:"example-from-the-manifestjson",level:4},{value:"Transparent window",id:"transparent-window",level:2},{value:"Example from the manifest.json:",id:"example-from-the-manifestjson-1",level:4},{value:"Native window",id:"native-window",level:2},{value:"Example from the manifest.json:",id:"example-from-the-manifestjson-2",level:4},{value:"Comparison table",id:"comparison-table",level:2},{value:"Sample app",id:"sample-app",level:2}],w=(a="ImageSlider",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),c={toc:u};function f(e){var n=e.components,a=(0,i.Z)(e,l);return(0,o.mdx)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Behavior is different depending on window type, and we're going to go over two main types of Overwolf app windows: Transparent vs. Non-Transparent Windows."),(0,o.mdx)("h2",{id:"non-transparent-window"},"Non-Transparent Window"),(0,o.mdx)("p",null,"A non-Transparent Window is the ",(0,o.mdx)("strong",{parentName:"p"},"standard")," Overwolf window. A window with borders, control buttons and opacity slider.  "),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},'Any part of your window that has a transparent background ("background: transparent;") will become white.')),(0,o.mdx)("h4",{id:"example-from-the-manifestjson"},"Example from the manifest.json:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"In order to create this window you should set the ",(0,o.mdx)("a",{parentName:"li",href:"../api/manifest-json#window-transparent"},"transparent")," property in your manifest.json to 'false'."),(0,o.mdx)("li",{parentName:"ul"},"In order to enable a ",(0,o.mdx)("a",{parentName:"li",href:"../api/manifest-json#show_maximize"},"maximize")," / ",(0,o.mdx)("a",{parentName:"li",href:"../api/manifest-json#windows-show_minimize"},"minimize"),' buttons, you should set the right flags in the manifest to "true".')),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'"windows": {\n    "windowName": {\n      "file": "name.html",\n      "transparent": false,\n      "show_maximize": true, //only relevant for non-transparent windows\n      "show_minimize": true //only relevant for non-transparent windows\n     }\n}\n')),(0,o.mdx)("p",null,"Example for a standard, non-transparent window:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"standard window",src:t(82436).Z,width:"480",height:"380"})),(0,o.mdx)("h2",{id:"transparent-window"},"Transparent window"),(0,o.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"The term transparent might be a bit misleading. This window has no borders, window control buttons or default background \u2013 create those elements by yourself in your HTML/CSS."))),(0,o.mdx)("p",null,"A Transparent Window is a window ",(0,o.mdx)("strong",{parentName:"p"},"without")," borders, control buttons and opacity slider.  "),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},'Any part of your window that has a transparent background ("background: transparent;") will become a see-through area that blends with the game or desktop behind it.'),(0,o.mdx)("li",{parentName:"ul"},"You should implement the window header with the control elements (like maximize, minimize) independently, by yourself in the HTML/CSS. (you can use our ",(0,o.mdx)("a",{parentName:"li",href:"../start/sample-app-ui-components"},"UI components samples"),")"),(0,o.mdx)("li",{parentName:"ul"},"You should implement dragging behavior independently, by yourself. (you can use our ",(0,o.mdx)("a",{parentName:"li",href:"../start/sample-app-overview"},"sample app")," that already implemented this feature)"),(0,o.mdx)("li",{parentName:"ul"},"Avoid full-screen transparent windows. ",(0,o.mdx)("a",{parentName:"li",href:"windows-tips#avoid-full-screen-transparent-windows"},"More info here"),".")),(0,o.mdx)("h4",{id:"example-from-the-manifestjson-1"},"Example from the manifest.json:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"In order to create this window you should set the ",(0,o.mdx)("a",{parentName:"li",href:"../api/manifest-json#window-transparent"},"transparent")," property in your manifest.json to 'true'.")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'"windows": {\n    "windowName": {\n      "file": "name.html",\n      "transparent": true\n     }\n}\n')),(0,o.mdx)("p",null,"Here you can see some examples for transparent windows:"),(0,o.mdx)(w,{mdxType:"ImageSlider"},(0,o.mdx)("img",{src:t(18493).Z,alt:'"transparent" window that is being used in our sample app.'}),(0,o.mdx)("img",{src:t(9854).Z,alt:'"transparent" window that is being used in the Spawning Tool Build Advisor.'}),(0,o.mdx)("img",{src:t(54132).Z,alt:'"transparent" window being used in the Legendary Builds app.'})),(0,o.mdx)("h2",{id:"native-window"},"Native window"),(0,o.mdx)("p",null,"If your app includes a window that will only be visible on desktop, either before, after or on a 2nd screen during game (desktop_only:true), you should define this window as a ",(0,o.mdx)("a",{parentName:"p",href:"../api/manifest-json#native_window"},'"native"'),".  "),(0,o.mdx)("p",null,"It will dramatically improve your app performance and help design an efficient, elegant product."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"A native window is always a non-transparent window."),(0,o.mdx)("li",{parentName:"ul"},'Any part of your window that has a transparent background ("background: transparent;") will become black.'),(0,o.mdx)("li",{parentName:"ul"},"You should implement the window header with the control elements (like maximize, minimize) independently, by yourself in the HTML/CSS. (you can use our ",(0,o.mdx)("a",{parentName:"li",href:"../start/sample-app-ui-components"},"UI components samples"),")"),(0,o.mdx)("li",{parentName:"ul"},"You should implement dragging behavior independently, by yourself. (you can use our ",(0,o.mdx)("a",{parentName:"li",href:"../start/sample-app-overview"},"sample app")," that already implemented this feature)"),(0,o.mdx)("li",{parentName:"ul"},"Native windows change their size according to the users' DPI automagically. (to disable that use the disable_auto_dpi_sizing flag)"),(0,o.mdx)("li",{parentName:"ul"},"On native window, ",(0,o.mdx)("inlineCode",{parentName:"li"},"window.screen")," returns the dimensions of the desktop with calculating DPI. (on non-native window, it returns without calculating DPI)")),(0,o.mdx)("h4",{id:"example-from-the-manifestjson-2"},"Example from the manifest.json:"),(0,o.mdx)("p",null,"add the following flags to that window's data in the app\u2019s manifest.json file:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'"desktop_only": true,\n"native_window":true,\n')),(0,o.mdx)("h2",{id:"comparison-table"},"Comparison table"),(0,o.mdx)("p",null,"To summarize, these are the main differences between the transparent, non-transparent, and native windows:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Feature"),(0,o.mdx)("th",{parentName:"tr",align:null},"transparent"),(0,o.mdx)("th",{parentName:"tr",align:null},"non-transparent"),(0,o.mdx)("th",{parentName:"tr",align:null},"native"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"desktop_only support"),(0,o.mdx)("td",{parentName:"tr",align:null},"+"),(0,o.mdx)("td",{parentName:"tr",align:null},"+"),(0,o.mdx)("td",{parentName:"tr",align:null},"+")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"in_game_only support"),(0,o.mdx)("td",{parentName:"tr",align:null},"+"),(0,o.mdx)("td",{parentName:"tr",align:null},"+"),(0,o.mdx)("td",{parentName:"tr",align:null},"-")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"built-in controls (maximize,minimize)"),(0,o.mdx)("td",{parentName:"tr",align:null},"-"),(0,o.mdx)("td",{parentName:"tr",align:null},"+"),(0,o.mdx)("td",{parentName:"tr",align:null},"-")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"built-in dragging"),(0,o.mdx)("td",{parentName:"tr",align:null},"-"),(0,o.mdx)("td",{parentName:"tr",align:null},"+"),(0,o.mdx)("td",{parentName:"tr",align:null},"-")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"built-in resizing"),(0,o.mdx)("td",{parentName:"tr",align:null},"+"),(0,o.mdx)("td",{parentName:"tr",align:null},"+"),(0,o.mdx)("td",{parentName:"tr",align:null},"+")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"See-through background"),(0,o.mdx)("td",{parentName:"tr",align:null},"+"),(0,o.mdx)("td",{parentName:"tr",align:null},"- (white bg)"),(0,o.mdx)("td",{parentName:"tr",align:null},"- (black bg)")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"DPI-Aware mechanic"),(0,o.mdx)("td",{parentName:"tr",align:null},"-"),(0,o.mdx)("td",{parentName:"tr",align:null},"-"),(0,o.mdx)("td",{parentName:"tr",align:null},"+")))),(0,o.mdx)("h2",{id:"sample-app"},"Sample app"),(0,o.mdx)("p",null,"You should download our ",(0,o.mdx)("a",{parentName:"p",href:"../start/sample-app-overview"},"sample app"),", it covers transparent/non-transparent window creation and much more."))}f.isMDXComponent=!0},9854:function(e,n,t){n.Z=t.p+"assets/images/transparent-overwolf-window-2-d12d01bf88bedc9543197112977b268c.jpg"},54132:function(e,n,t){n.Z=t.p+"assets/images/transparent-overwolf-window-3-38affd711281836410eeff470a7d4b98.jpg"},18493:function(e,n,t){n.Z=t.p+"assets/images/transparent-window-89080117de5d9c8fefe6927a4d6792a5.png"},82436:function(e,n,t){n.Z=t.p+"assets/images/standard-window-ff57751a94c953ae00a6606a1b836886.png"}}]);