"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3766],{3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return o},MDXProvider:function(){return p},mdx:function(){return g},useMDXComponents:function(){return u},withMDXComponents:function(){return i}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){return function(t){var a=u(t.components);return n.createElement(e,l({},t,{components:a}))}},u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},x=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),i=u(a),p=r,x=i["".concat(d,".").concat(p)]||i[p]||c[p]||l;return a?n.createElement(x,m(m({ref:t},o),{},{components:a})):n.createElement(x,m({ref:t},o))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,d=new Array(l);d[0]=x;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:r,d[1]=m;for(var o=2;o<l;o++)d[o]=a[o];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}x.displayName="MDXCreateElement"},95291:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),d=["components"],m={id:"overwolf-games-events",title:"overwolf.games.events API",sidebar_label:"overwolf.games.events"},s=void 0,o={unversionedId:"api/overwolf-games-events",id:"api/overwolf-games-events",title:"overwolf.games.events API",description:"Notify you when something interesting happens while playing a particular game.",source:"@site/pages/docs/api/overwolf-games-events.mdx",sourceDirName:"api",slug:"/api/overwolf-games-events",permalink:"/docs/api/overwolf-games-events",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/pages/docs/api/overwolf-games-events.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"overwolf-games-events",title:"overwolf.games.events API",sidebar_label:"overwolf.games.events"},sidebar:"api",previous:{title:"overwolf.games",permalink:"/docs/api/overwolf-games"},next:{title:"overwolf.games.tracked",permalink:"/docs/api/overwolf-games-tracked"}},i={},u=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"Sample App",id:"sample-app",level:2},{value:"setRequiredFeatures(features, callback)",id:"setrequiredfeaturesfeatures-callback",level:2},{value:"Version added: 0.93",id:"version-added-093",level:4},{value:"Usage Example",id:"usage-example",level:4},{value:"getInfo(callback)",id:"getinfocallback",level:2},{value:"Version added: 0.95",id:"version-added-095",level:4},{value:"Usage Example",id:"usage-example-1",level:4},{value:"onError",id:"onerror",level:2},{value:"Version added: 0.78",id:"version-added-078",level:4},{value:"onInfoUpdates2",id:"oninfoupdates2",level:2},{value:"Version added: 0.96",id:"version-added-096",level:4},{value:"Usage Example",id:"usage-example-2",level:4},{value:"onNewEvents",id:"onnewevents",level:2},{value:"Version added: 0.96",id:"version-added-096-1",level:4},{value:"Usage Example",id:"usage-example-3",level:4},{value:"SetRequiredFeaturesResult Object",id:"setrequiredfeaturesresult-object",level:2},{value:"Example data: Success",id:"example-data-success",level:4},{value:"GetInfoResult Object",id:"getinforesult-object",level:2},{value:"Example data: Success",id:"example-data-success-1",level:4},{value:"ErrorEvent Object",id:"errorevent-object",level:2},{value:"Event data example: Success",id:"event-data-example-success",level:4},{value:"InfoUpdates2Event Object",id:"infoupdates2event-object",level:2},{value:"Event data example: Success",id:"event-data-example-success-1",level:4},{value:"NewGameEvents Object",id:"newgameevents-object",level:2},{value:"Event data example: Success",id:"event-data-example-success-2",level:4},{value:"GameEvent Object",id:"gameevent-object",level:2},{value:"Event data example: Success",id:"event-data-example-success-3",level:4}],p={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,d);return(0,l.mdx)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Notify you when something interesting happens while playing a particular game.  "),(0,l.mdx)("p",null,"The full list of supported games with their Game ID\u2019s is always up to date and can be found ",(0,l.mdx)("a",{parentName:"p",href:"games-ids"},"here"),"."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Please read all the info about how to use game events in your app in our ",(0,l.mdx)("a",{parentName:"strong",href:"../topics/using-events"},"using game events")," guide.")),(0,l.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"The difference between overwolf.games.events to overwolf.games  ")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"This API enables you to get real-time game events (kill, death, etc.) for ",(0,l.mdx)("a",{parentName:"p",href:"../topics/using-events#set-the-relevant-game-events"},"specific games that are defined"),' in your app\'s manifest, under the "game_events" section.'),(0,l.mdx)("p",{parentName:"div"},"Regardless, you have the ",(0,l.mdx)("a",{parentName:"p",href:"overwolf-games"},"overwolf.games"),' API that gives you general "game info" events about the currently running game\'s state (process name, focus, command line info, and more).'))),(0,l.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#setrequiredfeaturesfeatures-callback"},"overwolf.games.events.setRequiredFeatures()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getinfocallback"},"overwolf.games.events.getInfo()"))),(0,l.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onerror"},"overwolf.games.events.onError")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#oninfoupdates2"},"overwolf.games.events.onInfoUpdates2")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onnewevents"},"overwolf.games.events.onNewEvents"))),(0,l.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#setrequiredfeaturesresult-object"},"overwolf.games.events.SetRequiredFeaturesResult")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getinforesult-object"},"overwolf.games.events.GetInfoResult")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#errorevent-object"},"overwolf.windows.ErrorEvent")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#infoupdates2event-object"},"overwolf.windows.InfoUpdates2Event")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#newgameevents-object"},"overwolf.windows.NewGameEvents")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#gameevent-object"},"overwolf.windows.GameEvent")," Object")),(0,l.mdx)("h2",{id:"sample-app"},"Sample App"),(0,l.mdx)("p",null,"You can find an example of overwolf.games.events API usage ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/events-sample-apps/tree/master/lol-events-sample-app"},"here"),".",(0,l.mdx)("br",{parentName:"p"}),"\n","This one notifies whenever a relevant event has happened in League of Legends."),(0,l.mdx)("h2",{id:"setrequiredfeaturesfeatures-callback"},"setRequiredFeatures(features, callback)"),(0,l.mdx)("h4",{id:"version-added-093"},"Version added: 0.93"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Sets the required features from the provider.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"features"),(0,l.mdx)("td",{parentName:"tr",align:null},"string[]"),(0,l.mdx)("td",{parentName:"tr",align:null},"String array of features to utilize")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"##setrequiredfeaturesresult-object"},"(Result:SetRequiredFeaturesResult)")," => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"all available features for the registered games declared in the manifest")))),(0,l.mdx)("h4",{id:"usage-example"},"Usage Example"),(0,l.mdx)("p",null,"Example for setting League of Legends required features:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"var g_interestedInFeatures = [\n  'summoner_info',\n  'gameMode',\n  'teams',\n  'matchState',\n  'kill'\n];\n\noverwolf.games.events.setRequiredFeatures(g_interestedInFeatures, function(info) {\n    if (info.success == false)\n    {\n      console.log(\"Could not set required features: \" + info.error);\n      return;\n    }\n}\n")),(0,l.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"s")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("ol",{parentName:"div"},(0,l.mdx)("li",{parentName:"ol"},"it's important to wait for the ",(0,l.mdx)("strong",{parentName:"li"},"success")," status to ensure that required features will be registered and trigger events properly.  "),(0,l.mdx)("li",{parentName:"ol"},"If your app uses a ",(0,l.mdx)("a",{parentName:"li",href:"../topics/communicating-between-windows#using-a-background-controller"},"background controller"),", make sure to call the setRequiredFeatures function only from your background controller.")))),(0,l.mdx)("p",null,"Example for setting required features and waiting for 'success':"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"  async setRequiredFeatures() {\n    let tries = 1;\n    let result;\n\n    while ( tries <= MAX_RETRIES ) {\n      result = await new Promise(resolve => {\n        overwolf.games.events.setRequiredFeatures(FEATURES_ARRAY, resolve);\n      })\n\n      if ( result.success === true ) {\n        // make sure our required features were registered\n        return (result.supportedFeatures.length > 0); \n      }\n\n      // wait 3 sec before retry\n      await new Promise(resolve => {\n        setTimeout(resolve, 3000);\n      });\n      tries++;\n    }\n\n    console.warn('setRequiredFeatures(): failure after '+ tries +' tries'+ JSON.stringify(result, null, 2));\n    return false;\n  }\n")),(0,l.mdx)("h2",{id:"getinfocallback"},"getInfo(callback)"),(0,l.mdx)("h4",{id:"version-added-095"},"Version added: 0.95"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Gets the current game info.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#getinforesult-object"},"(Result:GetInfoResult)")," => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"Provides the current game info")))),(0,l.mdx)("h4",{id:"usage-example-1"},"Usage Example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"overwolf.games.events.getInfo(function(info) {\n   console.log(info);\n});\n")),(0,l.mdx)("h2",{id:"onerror"},"onError"),(0,l.mdx)("h4",{id:"version-added-078"},"Version added: 0.78"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when an error occurred in the Game Event system,  with the following structure: ",(0,l.mdx)("a",{parentName:"p",href:"#errorevent-object"},"ErrorEvent")," Object.")),(0,l.mdx)("h2",{id:"oninfoupdates2"},"onInfoUpdates2"),(0,l.mdx)("h4",{id:"version-added-096"},"Version added: 0.96"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when there are game info updates with a JSON object of the updates, in the following structure: ",(0,l.mdx)("a",{parentName:"p",href:"#infoupdates2event-object"},"InfoUpdates2Event")," Object")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Our best practice is removing event listeners and then adding the listener back to prevent accidental multiple listeners.")),(0,l.mdx)("h4",{id:"usage-example-2"},"Usage Example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'overwolf.games.events.onInfoUpdates2.addListener(function(info) {\n      console.log("Info UPDATE: " + JSON.stringify(info));\n});\n')),(0,l.mdx)("h2",{id:"onnewevents"},"onNewEvents"),(0,l.mdx)("h4",{id:"version-added-096-1"},"Version added: 0.96"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when there are new game events with a JSON object of events information, in the following structure: ",(0,l.mdx)("a",{parentName:"p",href:"#newgameevents-object"},"NewGameEvents")," Object")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Our best practice is removing event listeners and then adding the listener back to prevent accidental multiple listeners.")),(0,l.mdx)("h4",{id:"usage-example-3"},"Usage Example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"overwolf.games.events.onNewEvents.addListener(function(info) {\n   console.log('EVENT FIRED: ' + JSON.stringify(info));  \n});\n")),(0,l.mdx)("h2",{id:"setrequiredfeaturesresult-object"},"SetRequiredFeaturesResult Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"success"),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"null if success is true")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"supportedFeatures"),(0,l.mdx)("td",{parentName:"tr",align:null},"string[]"),(0,l.mdx)("td",{parentName:"tr",align:null},"all available features for the registered games declared in the manifest")))),(0,l.mdx)("h4",{id:"example-data-success"},"Example data: Success"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{  \n   "success":true,\n   "supportedFeatures":[  \n      "summoner_info",\n      "teams",\n      "kill"\n   ]\n}\n')),(0,l.mdx)("h2",{id:"getinforesult-object"},"GetInfoResult Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"success"),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"error"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"null if success is true")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"res"),(0,l.mdx)("td",{parentName:"tr",align:null},"object"),(0,l.mdx)("td",{parentName:"tr",align:null},"Provides the current game info")))),(0,l.mdx)("h4",{id:"example-data-success-1"},"Example data: Success"),(0,l.mdx)("p",null,"The current game's info, registered features, and all available info for the current game session."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{  \n   "success":true,\n   "res":{  \n      "summoner_info":{  \n         "id":"79489298",\n         "name":"itaygl",\n         "region":"EUW",\n         "champion":"Rengar"\n      },\n      "game_info":{  \n         "match_started":"True",\n         "matchStarted":"True",\n         "teams":"%5B%7B%22team%22:%22100%22,%22champion%22:%22Rengar%22",\n         "gameMode":"custom",\n         "game_mode":"custom",\n         "minionKills":"5",\n         "minions_kills":"5",\n         "gold":"1002"\n      },\n      "features":{  \n         "kill":"True",\n         "assist":"True",\n         "minions":"True",\n         "deathAndRespawn":"True",\n         "death":"True",\n         "minion":"True",\n         "gold":"True",\n         "level":"True",\n         "abilities":"True",\n         "gameMode":"True",\n         "game_mode":"True"\n      },\n      "level":{  \n         "level":"3"\n      }\n   }\n}\n')),(0,l.mdx)("h2",{id:"errorevent-object"},"ErrorEvent Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"reason"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"the error reason"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h4",{id:"event-data-example-success"},"Event data example: Success"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "reason": "some reason",\n}\n')),(0,l.mdx)("h2",{id:"infoupdates2event-object"},"InfoUpdates2Event Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"info"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"feature"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h4",{id:"event-data-example-success-1"},"Event data example: Success"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{  \n   "info":{  \n      "game_info":{  \n         "minionKills":"3"\n      }\n   },\n   "feature":"minions"\n}\n')),(0,l.mdx)("h2",{id:"newgameevents-object"},"NewGameEvents Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"events"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#gameevent-object"},"GameEvent"),"[] array"),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h4",{id:"event-data-example-success-2"},"Event data example: Success"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "events": [\n    {\n      "name": "death",\n      "data": "{`count`: `2`}"\n    }\n  ]\n}\n')),(0,l.mdx)("h2",{id:"gameevent-object"},"GameEvent Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"name"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"data"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h4",{id:"event-data-example-success-3"},"Event data example: Success"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "death",\n   "data": "{`count`: `2`}"\n}\n')))}c.isMDXComponent=!0}}]);