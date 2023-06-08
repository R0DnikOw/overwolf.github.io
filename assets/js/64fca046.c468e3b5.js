"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3913],{35318:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>m,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>g});var n=t(27378);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(){return l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var m=n.createContext({}),g=function(e){return function(a){var t=c(a.components);return n.createElement(e,l({},a,{components:t}))}},c=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(m.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),g=c(t),p=s,d=g["".concat(o,".").concat(p)]||g[p]||u[p]||l;return t?n.createElement(d,r(r({ref:a},m),{},{components:t})):n.createElement(d,r({ref:a},m))}));function h(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var l=t.length,o=new Array(l);o[0]=f;var r={};for(var i in a)hasOwnProperty.call(a,i)&&(r[i]=a[i]);r.originalType=e,r[d]="string"==typeof e?e:s,o[1]=r;for(var m=2;m<l;m++)o[m]=t[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},65864:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(27378);const s=function(e){const{name:a,pathUrl:t}=e;return n.createElement("a",{href:`${t}`,className:"fancy-link"},n.createElement("svg",null,n.createElement("use",{href:"/img/sprite.svg#urlIcon"})),a)}},64611:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(27378),s=t(75404);function l(e){const{className:a,path:t,imgSrc:s,text:l,gameID:o}=e;return n.createElement("li",{className:a},n.createElement("a",{href:t},n.createElement("span",{className:"game-info"},n.createElement("img",{src:s})," ",l),n.createElement("span",{className:"game-id"},"Game ID: ",n.createElement("span",null,o))))}const o=function(e){const{gameListData:a,urlAsDocsPath:t}=e,o=function(e,a){return e.map((e=>{let t="game "+(0,s.F)(e.state);return n.createElement(l,{key:e.id,gameID:e.displayId||e.id,className:t,path:a?e.docs:e.path,imgSrc:e.iconUrl,text:e.name})}))}(a,t);return o.sort(((e,a)=>e.props.text<a.props.text?-1:1)),n.createElement("article",null,n.createElement("div",{className:"gep-games-list"},n.createElement("ul",{className:"legend"},n.createElement("li",{className:"good"},"Good to go"),n.createElement("li",{className:"medium"},"Some game events may be unavailable"),n.createElement("li",{className:"bad"},"Game events are currently unavailable")),n.createElement("ul",{className:"list"},o)))};var r=t(88476);function i(e){return n.createElement("form",{role:"search",method:"get",className:"search-game",action:"#",autoComplete:"off",onSubmit:e=>{e.preventDefault()}},n.createElement("input",{type:"search",name:"search",className:"search-input",placeholder:"Search for game events, e.g. \u201ckill\u201d",onKeyUp:e=>{!function(e){const a=e.target,t=document.querySelectorAll(".game-data ul li");let n=a.value.toLowerCase();0===n.length?t.forEach((e=>e.removeAttribute("style"))):t.forEach((function(e){e.textContent.toLowerCase().includes(n)?e.removeAttribute("style"):e.style.display="none"}))}(e)}}),n.createElement("button",{type:"submit",className:"search-submit",title:"Search"},n.createElement("svg",{className:"games-icon"},n.createElement("use",{href:"../../img/sprite.svg#searchIcon"}))))}const m=function(e){const{gameStatusData:a,gameId:t,endOfLife:l}=e,o=e=>{if(!a.features||0===a.features.length)return n.createElement("li",{className:"coming-soon"},"Coming soon");let t=0;const l=[];for(let o of a.features)for(let a of o.keys)a.type==e&&l.push(n.createElement("li",{className:(0,s.F)(a.state),key:t++},a.name));return l},m=o(0),g=o(1);return n.createElement("article",null,n.createElement("div",{className:"entry-content"},n.createElement("div",{className:"gep-game"},n.createElement(r.Z,{gameId:t,page:"status"}),!l&&n.createElement(n.Fragment,null,n.createElement(i,null),n.createElement("div",{className:"game-events-info"},n.createElement("div",{className:"game-data"},n.createElement("h4",null,"Events"),n.createElement("ul",null,m)),n.createElement("div",{className:"game-data"},n.createElement("h4",null,"Info updates"),n.createElement("ul",null,g)))))))};var g=t(58484),c=t(55759);const p=function(e){const{allGames:a,specificGame:t,gameId:s,docsPath:l,urlAsDocsPath:r=!1,onlyGames:i=!1,onlyLaunchers:p=!1,endOfLife:d}=e,[u,f]=(0,n.useState)(null),[h,v]=(0,n.useState)(null);return(0,n.useEffect)((()=>{if(a){async function e(){await fetch("https://game-events-status.overwolf.com/all_prod.json").then((e=>e.json())).then((e=>{const a=[];for(let t of e)g.z[t.game_id]&&(i&&g.z[t.game_id].games||p&&!g.z[t.game_id].launcher||(g.z[t.game_id].state=g.z[t.game_id].endOfLife?0:t.state,a.push(g.z[t.game_id])));f(a)}))}e()}if(t){async function n(){await fetch(`https://game-events-status.overwolf.com/${s}_prod.json`).then((e=>e.json())).then((e=>v(e)))}n()}}),[]),null!=u||null!=h?n.createElement(n.Fragment,null,a&&null!=u&&n.createElement(o,{gameListData:u,urlAsDocsPath:r}),t&&null!=h&&n.createElement(m,{gameStatusData:h,gameId:s,docsPath:l,endOfLife:d})):n.createElement(c.Z,null)}},75404:(e,a,t)=>{t.d(a,{B:()=>o,F:()=>s});const n={[-1]:"Deprecated",0:"coming-soon",1:"good",2:"medium",3:"bad"},s=e=>n[e],l={[-1]:"Deprecated",0:"Coming soon",1:"Good to go",2:"Some events may be unavailable",3:"Events are currently unavailable"},o=e=>l[e]},58484:(e,a,t)=>{t.d(a,{z:()=>n});const n={765:{id:765,path:"/status/world-of-warcraft",name:"World of Warcraft",docs:"/api/games/events/world-of-warcraft",iconUrl:"/img/games-logos/world-of-warcraft.png",iconLargeUrl:"/img/games-logos/large/world-of-warcraft.png"},5426:{id:5426,launcher:10902,path:"/status/league-of-legends",name:"League of Legends",compliance:"/start/game-compliance/league-of-legends",docs:"/api/games/events/league-of-legends",iconUrl:"/img/games-logos/league-of-legends.png",iconLargeUrl:"/img/games-logos/large/league-of-legends.png"},5855:{id:5855,path:"/status/starcraft-2",name:"StarCraft II",docs:"/api/games/events/starcraft-2",iconUrl:"/img/games-logos/starcraft-2.png",iconLargeUrl:"/img/games-logos/large/starcraft-2.png"},6350:{id:6350,path:"/status/final-fantasy-xiv",name:"Final Fantasy XIV",docs:"/api/games/events/final-fantasy-xiv",iconUrl:"/img/games-logos/final-fantasy-xiv.png",iconLargeUrl:"/img/games-logos/large/final-fantasy-xiv.png"},6365:{id:6365,path:"/status/world-of-tanks",name:"World of Tanks",docs:"/api/games/events/world-of-tanks",iconUrl:"/img/games-logos/world-of-tanks.png",iconLargeUrl:"/img/games-logos/large/world-of-tanks.png"},7212:{id:7212,path:"/status/path-of-exile",name:"Path of Exile",docs:"/api/games/events/path-of-exile",iconUrl:"/img/games-logos/path-of-exile.png",iconLargeUrl:"/img/games-logos/large/path-of-exile.png"},7314:{id:7314,path:"/status/dota-2",name:"Dota 2",compliance:"/start/game-compliance/dota-2",docs:"/api/games/events/dota-2",iconUrl:"/img/games-logos/dota-2.png",iconLargeUrl:"/img/games-logos/large/dota-2.png"},7764:{id:7764,path:"/status/counter-strike-global-offensive",name:"Counter-Strike: Global Offensive",docs:"/api/games/events/counter-strike-global-offensive",iconUrl:"/img/games-logos/counter-strike-global-offensive.png",iconLargeUrl:"/img/games-logos/large/counter-strike-global-offensive.png"},8032:{id:8032,path:"/status/minecraft",name:"Minecraft",docs:"/api/games/events/minecraft",iconUrl:"/img/games-logos/minecraft.png",iconLargeUrl:"/img/games-logos/large/minecraft.png"},8954:{id:8954,path:"/status/warframe",name:"Warframe",docs:"/api/games/events/warframe",iconUrl:"/img/games-logos/warframe.png",iconLargeUrl:"/img/games-logos/large/warframe.png"},9898:{id:9898,path:"/status/hearthstone",name:"Hearthstone",docs:"/api/games/events/hearthstone",iconUrl:"/img/games-logos/hearthstone.png",iconLargeUrl:"/img/games-logos/large/hearthstone.png"},10624:{id:10624,path:"/status/heroes-of-the-storm",name:"Heroes of the Storm",docs:"/api/games/events/heroes-of-the-storm",iconUrl:"/img/games-logos/heroes-of-the-storm.png",iconLargeUrl:"/img/games-logos/large/heroes-of-the-storm.png"},10746:{id:10746,path:"/status/world-of-warships",name:"World of Warships",docs:"/api/games/events/world-of-warships",iconUrl:"/img/games-logos/world-of-warships.png",iconLargeUrl:"/img/games-logos/large/world-of-warships.png"},10798:{id:10798,path:"/status/rocket-league",name:"Rocket League",docs:"/api/games/events/rocket-league",iconUrl:"/img/games-logos/rocket-league.png",iconLargeUrl:"/img/games-logos/large/rocket-league.png"},10826:{id:10826,path:"/status/rainbow-six-siege",name:"Rainbow Six Siege",compliance:"/start/game-compliance/rainbow-six-siege",docs:"/api/games/events/rainbow-six-siege",iconUrl:"/img/games-logos/rainbow-six-siege.png",iconLargeUrl:"/img/games-logos/large/rainbow-six-siege.png"},10844:{id:10844,path:"/status/overwatch-2",name:"Overwatch 2",docs:"/api/games/events/overwatch-2",iconUrl:"/img/games-logos/overwatch-2.png",iconLargeUrl:"/img/games-logos/large/overwatch-2.png"},10902:{id:10902,games:[5426,21570,215701],path:"/status/launchers/league-of-legends",name:"League of Legends Launcher",docs:"/api/games/launchers/events/league-of-legends",iconUrl:"/img/games-logos/launchers/league-of-legends.png",iconLargeUrl:"/img/games-logos/large/launchers/league-of-legends.png"},10906:{id:10906,path:"/status/player-unknowns-battlegrounds",name:"PlayerUnknown's Battlegrounds",docs:"/api/games/events/player-unknowns-battlegrounds",iconUrl:"/img/games-logos/player-unknowns-battlegrounds.png",iconLargeUrl:"/img/games-logos/large/player-unknowns-battlegrounds.png"},21216:{id:21216,path:"/status/fortnite",name:"Fortnite",docs:"/api/games/events/fortnite",iconUrl:"/img/games-logos/fortnite.png",iconLargeUrl:"/img/games-logos/large/fortnite.png"},21308:{id:21308,path:"/status/magic-the-gathering-arena",name:"Magic: The Gathering Arena",docs:"/api/games/events/magic-the-gathering-arena",iconUrl:"/img/games-logos/magic-the-gathering-arena.png",iconLargeUrl:"/img/games-logos/large/magic-the-gathering-arena.png"},21328:{id:21328,path:"/status/hunt-showdown",name:"Hunt: Showdown",endOfLife:"9/7/2023",docs:"/api/games/events/hunt-showdown",iconUrl:"/img/games-logos/hunt-showdown.png",iconLargeUrl:"/img/games-logos/large/hunt-showdown.png"},21404:{id:21404,path:"/status/splitgate-arena-warfare",name:"Splitgate: Arena Warfare",docs:"/api/games/events/splitgate-arena-warfare",iconUrl:"/img/games-logos/splitgate-arena-warfare.png",iconLargeUrl:"/img/games-logos/large/splitgate-arena-warfare.png"},21566:{id:21566,path:"/status/apex-legends",name:"Apex Legends",docs:"/api/games/events/apex-legends",iconUrl:"/img/games-logos/apex-legends.png",iconLargeUrl:"/img/games-logos/large/apex-legends.png"},21570:{id:21570,displayId:5426,launcher:10902,subVariants:[215701],path:"/status/teamfight-tactics",name:"Teamfight Tactics",electron:"/api/electron/game-events/teamfight-tactics",docs:"/api/games/events/teamfight-tactics",iconUrl:"/img/games-logos/teamfight-tactics.png",iconLargeUrl:"/img/games-logos/large/teamfight-tactics.png"},21586:{id:21586,path:"/status/dota-underlords",name:"Dota Underlords",endOfLife:"9/7/2023",docs:"/api/games/events/dota-underlords",iconUrl:"/img/games-logos/dota-underlords.png",iconLargeUrl:"/img/games-logos/large/dota-underlords.png"},21620:{id:21620,path:"/status/legends-of-runeterra",name:"Legends of Runeterra",docs:"/api/games/events/legends-of-runeterra",iconUrl:"/img/games-logos/legends-of-runeterra.png",iconLargeUrl:"/img/games-logos/large/legends-of-runeterra.png"},21626:{id:21626,path:"/status/call-of-duty-warzone-caldera",name:"Call of Duty: Warzone Caldera",compliance:"/start/game-compliance/call-of-duty-warzone-caldera",docs:"/api/games/events/call-of-duty-warzone-caldera",iconUrl:"/img/games-logos/call-of-duty-warzone-caldera.png",iconLargeUrl:"/img/games-logos/large/call-of-duty-warzone-caldera.png"},21634:{id:21634,path:"/status/escape-from-tarkov",name:"Escape From Tarkov",docs:"/api/games/events/escape-from-tarkov",iconUrl:"/img/games-logos/escape-from-tarkov.png",iconLargeUrl:"/img/games-logos/large/escape-from-tarkov.png"},21640:{id:21640,path:"/status/valorant",name:"Valorant",docs:"/api/games/events/valorant",iconUrl:"/img/games-logos/valorant.png",iconLargeUrl:"/img/games-logos/large/valorant.png"},21666:{id:21666,path:"/status/football-manager-2021",name:"Football Manager 2021",endOfLife:"9/7/2023",docs:"/api/games/events/football-manager-2021",iconUrl:"/img/games-logos/football-manager-2021.png",iconLargeUrl:"/img/games-logos/large/football-manager-2021.png"},21668:{id:21668,path:"/status/valheim",name:"Valheim",docs:"/api/games/events/valheim",iconUrl:"/img/games-logos/valheim.png",iconLargeUrl:"/img/games-logos/large/valheim.png"},21672:{id:21672,path:"/status/eternal-return",name:"Eternal Return",docs:"/api/games/events/eternal-return",iconUrl:"/img/games-logos/eternal-return.png",iconLargeUrl:"/img/games-logos/large/eternal-return.png"},21816:{id:21816,path:"/status/new-world",name:"New World",compliance:"/start/game-compliance/new-world",docs:"/api/games/events/new-world",iconUrl:"/img/games-logos/new-world.png",iconLargeUrl:"/img/games-logos/large/new-world.png"},21848:{id:21848,path:"/status/diablo-2-resurrected",name:"Diablo 2 Resurrected",docs:"/api/games/events/diablo-2-resurrected",iconUrl:"/img/games-logos/diablo-2-resurrected.png",iconLargeUrl:"/img/games-logos/large/diablo-2-resurrected.png"},21854:{id:21854,path:"/status/halo-infinite",name:"Halo Infinite",docs:"/api/games/events/halo-infinite",iconUrl:"/img/games-logos/halo-infinite.png",iconLargeUrl:"/img/games-logos/large/halo-infinite.png"},21856:{id:21856,path:"/status/football-manager-2022",name:"Football Manager 2022",endOfLife:"9/7/2023",docs:"/api/games/events/football-manager-2022",iconUrl:"/img/games-logos/football-manager-2022.png",iconLargeUrl:"/img/games-logos/large/football-manager-2022.png"},21864:{id:21864,path:"/status/lost-ark",name:"Lost Ark",docs:"/api/games/events/lost-ark",iconUrl:"/img/games-logos/lost-ark.png",iconLargeUrl:"/img/games-logos/large/lost-ark.png"},21876:{id:21876,path:"/status/call-of-duty-vanguard",name:"Call of Duty: Vanguard",docs:"/api/games/events/call-of-duty-vanguard",iconUrl:"/img/games-logos/call-of-duty-vanguard.png",iconLargeUrl:"/img/games-logos/large/call-of-duty-vanguard.png"},21960:{id:21960,path:"/status/axie-infinity-origin",name:"Axie Infinity Origin",docs:"/api/games/events/axie-infinity-origin",iconUrl:"/img/games-logos/axie-infinity-origin.png",iconLargeUrl:"/img/games-logos/large/axie-infinity-origin.png"},22312:{id:22312,path:"/status/leap",name:"LEAP",docs:"/api/games/events/leap",iconUrl:"/img/games-logos/leap.png",iconLargeUrl:"/img/games-logos/large/leap.png"},22638:{id:22638,path:"/status/sons-of-the-forest",name:"Sons of the Forest",docs:"/api/games/events/sons-of-the-forest",iconUrl:"/img/games-logos/sons-of-the-forest.png",iconLargeUrl:"/img/games-logos/large/sons-of-the-forest.png"},22700:{id:22700,path:"/status/diablo-4",name:"Diablo 4",docs:"/api/games/events/diablo-4",iconUrl:"/img/games-logos/diablo-4.png",iconLargeUrl:"/img/games-logos/large/diablo-4.png"},215701:{id:215701,displayId:5426,launcher:10902,mainVariant:21570,docs:"/api/games/events/teamfight-tactics",path:"/status/teamfight-tactics-public-beta",name:"Teamfight Tactics PBE",variant:"PBE",iconUrl:"/img/games-logos/teamfight-tactics-public-beta.png",iconLargeUrl:"/img/games-logos/large/teamfight-tactics-public-beta.png"}}},88476:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(27378),s=t(58484),l=t(75404),o=t(65864);const r=function(e){const{metaData:a,type:t,disabledLinks:s,hasElectron:l}=e,{id:r,displayId:i,path:m,docs:g,compliance:c,variant:p,electron:d}=a;t||p||console.error("No variant was defined for this game!",a);const u=p??t,f=l?`${t} (Electron)`:p?`${t} (${u})`:t;return n.createElement(n.Fragment,null,n.createElement("p",null,n.createElement("span",null,f," ID: "),i||r),i&&n.createElement("p",null,n.createElement("span",null,"Tracking ID: "),r),!s.docs&&g&&n.createElement(o.Z,{name:`${u} API docs`,pathUrl:d??g}),!s.status&&m&&n.createElement(o.Z,{name:`${u} events status`,pathUrl:m}),!s.compliance&&c&&n.createElement(o.Z,{name:`${u} compliance page`,pathUrl:c}))};const i=function(e){const{gamesListData:a}=e,[t,l]=(0,n.useState)(!1),[o,i]=(0,n.useState)(0),m=(0,n.useRef)(null),g=a.map((e=>{const a=s.z[e];return n.createElement("li",null,n.createElement("h3",null,n.createElement("img",{src:a.iconLargeUrl}),n.createElement("span",null,a.name)),n.createElement(r,{metaData:a,type:"Game",disabledLinks:{docs:!1,status:!1,compliance:!1}}))}));function c(){t?(i(0),l(!1)):(i(m.current.querySelector("ul").clientHeight),l(!0))}return n.createElement("div",{className:"expended-launcher-game-list "+(t?"is-open":"")},n.createElement("button",{className:"expend-btn",onClick:c},n.createElement("svg",{className:"games-icon"},n.createElement("use",{href:"/img/sprite.svg#gamesIcon"})),"Launcher's supported games list",n.createElement("svg",null,n.createElement("use",{href:"/img/sprite.svg#arrowDown"}))),n.createElement("div",{className:"launcher-game-list-inner",ref:m,style:{height:o+"px"}},n.createElement("ul",{className:"launcher-game-list"},g),n.createElement("button",{className:"hide-button",onClick:c},"Hide List")))};const m=function(e){const{gameState:a,endOfLife:t}=e;return n.createElement("div",{className:"status-tooltip-trigger"},n.createElement("div",{className:"status-tooltip"},n.createElement("span",null,(0,l.B)(t?-1:a))))};var g=t(55759);function c(e,a){return{docs:e.docs===a.docs,compliance:e.compliance===a.compliance,status:e.path===a.path}}function p(e,a){return void 0===a&&(a={docs:!1,status:!1,compliance:!1}),a[e]=!0,a}const d=function(e){const{gameId:a,page:t}=e,[o,d]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){await fetch(`https://game-events-status.overwolf.com/${a}_prod.json`).then((e=>e.json())).then((e=>d(e.state)))}()}),[]);const u=s.z[a],f=s.z[u.launcher],h=u?.games,v=s.z[u.mainVariant],w=u.subVariants,y=u.electron;return null!==o?n.createElement("section",{className:"game-info-section"},n.createElement("div",{className:"game-info-item"},n.createElement("h1",{className:`game-info-title ${(0,l.F)(u.endOfLife?0:o)}`},n.createElement("img",{src:u.iconLargeUrl}),n.createElement("span",null,u.name),n.createElement(m,{gameState:o,endOfLife:u.endOfLife})),n.createElement("ul",{className:"game-info-groups"},u.endOfLife&&n.createElement("li",{style:{paddingTop:"10px"}},n.createElement("h1",null,"This game is nearing its end of life, and support will be fully removed at ",u.endOfLife)),n.createElement("li",{className:"main"},n.createElement(r,{metaData:u,type:"Game",disabledLinks:p(t)})),y&&n.createElement("li",{className:"main"},n.createElement(r,{metaData:u,type:"Game",hasElectron:!0,disabledLinks:p(t)})),v&&n.createElement(n.Fragment,null,n.createElement("li",{className:"main"},n.createElement(r,{metaData:v,type:"Game",disabledLinks:{docs:!1,status:!1,compliance:!1}})),n.createElement("li",null,n.createElement(r,{metaData:u,type:"Game",disabledLinks:p(t,c(v,u))}))),w&&w.map((e=>{const a=s.z[e];return n.createElement("li",null,n.createElement(r,{metaData:a,type:"Game",disabledLinks:c(u,a)}))})),f&&n.createElement("li",null,n.createElement(r,{metaData:f,type:"Launcher",disabledLinks:{docs:!1,status:!1,compliance:!1}})))),h?.length&&n.createElement(i,{gamesListData:h}),"status"===t&&n.createElement("ul",{className:"legend"},n.createElement("li",{className:"good"},"Good to go"),n.createElement("li",{className:"medium"},"Some events may be unavailable"),n.createElement("li",{className:"bad"},"Events are currently unavailable"))):n.createElement(g.Z,{small:!0})}},55759:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(27378);const s=function(e){const{small:a}=e;return n.createElement("div",{className:"preloader "+(a?"small":"")},n.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"https://www.w3.org/2000/svg"},n.createElement("path",{d:"M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1",stroke:"white",strokeWidth:"2"})),n.createElement("span",null,"Loading..."))}},17382:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var n=t(25773),s=(t(27378),t(35318)),l=t(64611);const o={id:"ids",image:"/img/embed/api-docs.jpg",title:"Games IDs",sidebar_label:"Games IDs",sidebar_position:-3,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},r=void 0,i={unversionedId:"api/games/ids",id:"api/games/ids",title:"Games IDs",description:"What is an Overwolf Supported Game?",source:"@site/pages/docs/api/games/ids.mdx",sourceDirName:"api/games",slug:"/api/games/ids",permalink:"/api/games/ids",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/ids.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1675088026,formattedLastUpdatedAt:"Jan 30, 2023",sidebarPosition:-3,frontMatter:{id:"ids",image:"/img/embed/api-docs.jpg",title:"Games IDs",sidebar_label:"Games IDs",sidebar_position:-3,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"overwolf.games API",permalink:"/api/games/"},next:{title:"overwolf.games.events API",permalink:"/api/games/events/"}},m={},g=[{value:"What is an Overwolf Supported Game?",id:"what-is-an-overwolf-supported-game",level:2},{value:"What is the Game ID",id:"what-is-the-game-id",level:2},{value:"The gamelist.xml file",id:"the-gamelistxml-file",level:2},{value:"Game-ID and Instance-ID",id:"game-id-and-instance-id",level:2},{value:"Games with game events support",id:"games-with-game-events-support",level:2},{value:"Game launcher IDs",id:"game-launcher-ids",level:2}],c={toc:g};function p(e){let{components:a,...t}=e;return(0,s.mdx)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.mdx)("h2",{id:"what-is-an-overwolf-supported-game"},"What is an Overwolf Supported Game?"),(0,s.mdx)("p",null,'In Overwolf, when we refer to a "supported game" it could mean one of two levels of support:'),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Overlay support - games that support overlay injection.\nIn these games, we can display OW apps as an overlay, and make use of Overwolf APIs.\nThe full list of games that support overlay injection can be found in the ",(0,s.mdx)("a",{parentName:"p",href:"#the-gamelistxml-file"},"gamelist.xml")," file.")),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Game events support - games which support overlay injection as well as real-time game events.\nYou can create OW apps for these games, that leverage game events using the ",(0,s.mdx)("a",{parentName:"p",href:"/api"},"overwolf.games.events")," API.\nThe full list of games that supports events can be found ",(0,s.mdx)("a",{parentName:"p",href:"/status/"},"here"),"."),(0,s.mdx)("admonition",{parentName:"li",title:"Note",type:"tip"},(0,s.mdx)("p",{parentName:"admonition"},"Game events can vary between games. If you'd like us to enable a new game event, you can request it as a ",(0,s.mdx)("a",{parentName:"p",href:"/support/request-a-feature"},"new feature"),".")))),(0,s.mdx)("h2",{id:"what-is-the-game-id"},"What is the Game ID"),(0,s.mdx)("p",null,"Each ",(0,s.mdx)("a",{parentName:"p",href:"#what-is-an-overwolf-supported-game"},"supported game")," has its own unique Game ID."),(0,s.mdx)("p",null,"Game IDs are used in your app\u2019s manifest.json in multiple ways:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("a",{parentName:"p",href:"../manifest#game_targeting"},"game_targeting")," property - A list of games which enable overlay for this app.")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("a",{parentName:"p",href:"../manifest#game_events"},"game_events")," property - A list of games for which game events are required.")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("a",{parentName:"p",href:"../manifest#launch_events"},"launch_events")," property -  A list of games triggering the app to launch."))),(0,s.mdx)("h2",{id:"the-gamelistxml-file"},"The gamelist.xml file"),(0,s.mdx)("p",null,"We support overlay injection in a vast and growing number of games.\nThe list is kept up to date, and you can find it in your local Overwolf app data folder after installing Overwolf."),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Navigate to your ",(0,s.mdx)("inlineCode",{parentName:"p"},"%localappdata%")," folder and open the ",(0,s.mdx)("inlineCode",{parentName:"p"},"overwolf")," folder.")),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Open the Game List XML file (named with a number postfix, for example, gamelistXXX.xml, higher number means newer version), and search your game by name.")),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Under each game, you can find game ID listed.\nIf you didn\u2019t find the game you need, ",(0,s.mdx)("a",{parentName:"p",href:"/support/contact-us"},"contact us"),"."))),(0,s.mdx)("h2",{id:"game-id-and-instance-id"},"Game-ID and Instance-ID"),(0,s.mdx)("p",null,'A single game can have multiple executables: Steam, GOG, 32 / 64-bit clients, etc.\nWe differentiate between them by adding one digit to each game ID, which is called an "Instance ID."\nBasically, you have the base game ID, and then a series of instances (212160, 212161, \u2026)'),(0,s.mdx)("p",null,"When you call ",(0,s.mdx)("a",{parentName:"p",href:"../games#ongameinfoupdated"},"overwolf.games.onGameInfoUpdated"),' you will get the same full ID including the instance ID.\nBesides, there is a file called "gamelist.xml" in the OW client folder that contains all the supported game ids, including instance ID.\nIn order to translate the instance ID into the game ID that needs to be used in the manifest, you can divide the instance ID by 10 and round down.'),(0,s.mdx)("p",null,"For example for Fortnite: in order to get 21216 instead of 212161, you can do:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"Math.floor(gameInfoResult.gameInfo.id/10)\n")),(0,s.mdx)("p",null,"You can see how we use it in the ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/events-sample-apps/blob/master/fortnite-sample-app/main.js#L81"},"Fortnite events sample")," app."),(0,s.mdx)("p",null,"Note that the ",(0,s.mdx)("a",{parentName:"p",href:"../games#runninggameinfo-object"},"RunningGameInfo object")," also has a ",(0,s.mdx)("inlineCode",{parentName:"p"},"classId")," property, which already equals the game ID."),(0,s.mdx)("h2",{id:"games-with-game-events-support"},"Games with game events support"),(0,s.mdx)(l.Z,{allGames:!0,onlyGames:!0,mdxType:"EventsData"}),(0,s.mdx)("h2",{id:"game-launcher-ids"},"Game launcher IDs"),(0,s.mdx)("p",null,"IDs for Launchers such as the League of Legends launcher can be found ",(0,s.mdx)("a",{parentName:"p",href:"launchers/ids"},"here"),"."))}p.isMDXComponent=!0}}]);