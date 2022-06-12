"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9394],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return c},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return d},withMDXComponents:function(){return l}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){return function(t){var n=d(t.components);return r.createElement(e,o({},t,{components:n}))}},d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=d(n),u=a,h=l["".concat(i,".").concat(u)]||l[u]||m[u]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88691:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"app-specific-experience",title:"App specific experience",sidebar_label:"App specific experience"},p=void 0,c={unversionedId:"topics/app-specific-experience",id:"topics/app-specific-experience",title:"App specific experience",description:"The Overwolf SDK enables you to create a new experience, providing the best possible user experience and therefore increasing retention.",source:"@site/pages/docs/topics/app-specific-experience.mdx",sourceDirName:"topics",slug:"/topics/app-specific-experience",permalink:"/docs/topics/app-specific-experience",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/pages/docs/topics/app-specific-experience.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"app-specific-experience",title:"App specific experience",sidebar_label:"App specific experience"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/topics/best-practices-overview"},next:{title:"First time user experience",permalink:"/docs/topics/first-time-user-experience"}},l={},d=[{value:"Landing page",id:"landing-page",level:2},{value:"Installer Experience",id:"installer-experience",level:2},{value:"Desktop icon and splash screen",id:"desktop-icon-and-splash-screen",level:2},{value:"Welcome screen",id:"welcome-screen",level:2},{value:"The in-game experience",id:"the-in-game-experience",level:2},{value:"Post game",id:"post-game",level:2}],u={toc:d};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The Overwolf SDK enables you to create a new experience, providing the best possible user experience and therefore increasing retention."),(0,o.mdx)("p",null,"Unlike traditional websites, apps bring content in-game, and that content can communicate with in-game events unlike anything that happens in an ordinary browser. Moreover, as a software client, you have the ability to show windows on desktop too, not just in-game."),(0,o.mdx)("p",null,"In this article we're going to show you the places where users encounter your app as well as what they can expect in terms of experience, from the moment they see your website and all the way to using your app in-game. For reference and to demonstrate some concepts, we\u2019ll be using ",(0,o.mdx)("a",{parentName:"p",href:"https://www.overwolf.com/app/LoLwiz"},"LoLwiz")," \u2013 A League of Legends app providing in-game stats and other features."),(0,o.mdx)("h2",{id:"landing-page"},"Landing page"),(0,o.mdx)("p",null,"Whether it is a new landing page you\u2019ve created for your app or your own website, it's important to help users instantly understand what your product does and how they benefit by using it. The landing page should also have an instant download button so that users satisfied with your introduction can jump right in."),(0,o.mdx)("p",null,"You can read our ",(0,o.mdx)("a",{parentName:"p",href:"communication-guidelines"},"Marketing Communication Guidelines")," for more information."),(0,o.mdx)("h2",{id:"installer-experience"},"Installer Experience"),(0,o.mdx)("p",null,"Once users download your app and start the installation process, they will start an installer experience that can be customized and branded for your app. The installer is a way to make a user comfortable and informed until he can start using the app - starting by telling users the app (LoLwiz in the sample) is being installed and tracking progress. The installer experience will start both directly and when the user downloads the app from the ",(0,o.mdx)("a",{parentName:"p",href:"https://www.overwolf.com/"},"Overwolf Appstore")," on the web."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"alt-text",src:n(55747).Z,width:"816",height:"503"})),(0,o.mdx)("h2",{id:"desktop-icon-and-splash-screen"},"Desktop icon and splash screen"),(0,o.mdx)("p",null,"After installation is complete, the user's desktop will have a new icon added for your app. When clicking it, your app will launch immediately in Desktop mode."),(0,o.mdx)("p",null,"Read more about ",(0,o.mdx)("a",{parentName:"p",href:"../start/submit-your-app-to-the-store"},"desktop icons"),"."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"alt-text",src:n(37339).Z,width:"1919",height:"1080"})),(0,o.mdx)("h2",{id:"welcome-screen"},"Welcome screen"),(0,o.mdx)("p",null,"It's important to create an engaging welcome screen for your app. Once users clicked on the desktop icon or the app\u2019s icon in the Overwolf dock, the welcome screen should appear. It's the best place to start your onboarding experience and provide a clear call for action. In the case of LoLwiz, the welcome screen prompts users: \"Start a match and LoLwiz will automatically appear in-game!\". Setting expectations and leading them to use the app."),(0,o.mdx)("p",null,"For further reading, we put together more insights about the importance of ",(0,o.mdx)("a",{parentName:"p",href:"https://medium.com/overwolf/apps-ftue-best-practices-670dd4fb2b10"},"onboarding experiences"),"."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"alt-text",src:n(34559).Z,width:"900",height:"570"})),(0,o.mdx)("h2",{id:"the-in-game-experience"},"The in-game experience"),(0,o.mdx)("p",null,"Using Overwolf's ",(0,o.mdx)("a",{parentName:"p",href:"../api/overwolf-games-events"},"real-time game events")," API empowers your app to interact with in-game events and connect to users on their own terms. In the following example you can see that LoLwiz chose to show a loading screen while the League of Legends match is loading. Once loading is done, the app window reminds the user about the hotkey they can use to activate the app and reach it's content, which in this case, is stats of players in the match."),(0,o.mdx)("p",null,"Using ads you can ",(0,o.mdx)("a",{parentName:"p",href:"../start/monetization-overview"},"monetize")," your app window with Overwolf, make sure to comply with our forgivable ads policy so user experience is never negatively impacted."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"alt-text",src:n(55694).Z,width:"1406",height:"914"})),(0,o.mdx)("h2",{id:"post-game"},"Post game"),(0,o.mdx)("p",null,"To complete the user's journey, apps like Trophy Hunter will show a summary of the match including statistics and trophies the user earned while playing League of Legends. You can also create a Game Summary tab to follow up with your users after they are done playing. Feel free to contact us at ",(0,o.mdx)("a",{parentName:"p",href:"mailto:developers@overwolf.com"},"developers@overwolf.com")," for more information, or reach out to any of our team members on ",(0,o.mdx)("a",{parentName:"p",href:"https://overwolfdevs.slack.com"},"Slack"),"."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"alt-text",src:n(68056).Z,width:"1246",height:"749"})))}m.isMDXComponent=!0},37339:function(e,t,n){t.Z=n.p+"assets/images/desktop-icon-and-splash-screen-cd79e70b2aba83674b904c91d390d4f2.jpg"},34559:function(e,t,n){t.Z=n.p+"assets/images/lolwiz-home-27ca5c4cbfb847aab667369ba79f6203.jpg"},55747:function(e,t,n){t.Z=n.p+"assets/images/lolwiz-installer-1-f82b924053f52e7f04718dd1088c52c4.jpg"},55694:function(e,t,n){t.Z=n.p+"assets/images/lolwiz-stats-799fc190cf539670b1c28f0aee476b1c.jpg"},68056:function(e,t,n){t.Z=n.p+"assets/images/trophy-hunter-post-game-a0e0606b93e5b0ea583a2ae5a7ded6b3.jpg"}}]);