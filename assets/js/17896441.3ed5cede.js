"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7918],{65864:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(27378);const l=function(e){const{name:a,pathUrl:t}=e;return n.createElement("a",{href:`${t}`,className:"fancy-link"},n.createElement("svg",null,n.createElement("use",{href:"/img/sprite.svg#urlIcon"})),a)}},64611:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(27378),l=t(75404);function s(e){const{className:a,path:t,imgSrc:l,text:s,gameID:r}=e;return n.createElement("li",{className:a},n.createElement("a",{href:t},n.createElement("span",{className:"game-info"},n.createElement("img",{src:l})," ",s),n.createElement("span",{className:"game-id"},"Game ID: ",n.createElement("span",null,r))))}const r=function(e){const{gameListData:a,urlAsDocsPath:t}=e,r=function(e,a){return e.map((e=>{let t="game "+(0,l.F)(e.state);return n.createElement(s,{key:e.id,gameID:e.displayId||e.id,className:t,path:a?e.docs:e.path,imgSrc:e.iconUrl,text:e.name})}))}(a,t);return r.sort(((e,a)=>e.props.text<a.props.text?-1:1)),n.createElement("article",null,n.createElement("div",{className:"gep-games-list"},n.createElement("ul",{className:"legend"},n.createElement("li",{className:"good"},"Good to go"),n.createElement("li",{className:"medium"},"Some game events may be unavailable"),n.createElement("li",{className:"bad"},"Game events are currently unavailable")),n.createElement("ul",{className:"list"},r)))};var o=t(88476);function i(e){return n.createElement("form",{role:"search",method:"get",className:"search-game",action:"#",autoComplete:"off",onSubmit:e=>{e.preventDefault()}},n.createElement("input",{type:"search",name:"search",className:"search-input",placeholder:"Search for game events, e.g. \u201ckill\u201d",onKeyUp:e=>{!function(e){const a=e.target,t=document.querySelectorAll(".game-data ul li");let n=a.value.toLowerCase();0===n.length?t.forEach((e=>e.removeAttribute("style"))):t.forEach((function(e){e.textContent.toLowerCase().includes(n)?e.removeAttribute("style"):e.style.display="none"}))}(e)}}),n.createElement("button",{type:"submit",className:"search-submit",title:"Search"},n.createElement("svg",{className:"games-icon"},n.createElement("use",{href:"../../img/sprite.svg#searchIcon"}))))}const c=function(e){const{gameStatusData:a,gameId:t,endOfLife:s}=e,r=e=>{if(!a.features||0===a.features.length)return n.createElement("li",{className:"coming-soon"},"Coming soon");let t=0;const s=[];for(let r of a.features)for(let a of r.keys)a.type==e&&s.push(n.createElement("li",{className:(0,l.F)(a.state),key:t++},a.name));return s},c=r(0),m=r(1);return n.createElement("article",null,n.createElement("div",{className:"entry-content"},n.createElement("div",{className:"gep-game"},n.createElement(o.Z,{gameId:t,page:"status"}),!s&&n.createElement(n.Fragment,null,n.createElement(i,null),n.createElement("div",{className:"game-events-info"},n.createElement("div",{className:"game-data"},n.createElement("h4",null,"Events"),n.createElement("ul",null,c)),n.createElement("div",{className:"game-data"},n.createElement("h4",null,"Info updates"),n.createElement("ul",null,m)))))))};var m=t(58484),g=t(55759);const d=function(e){const{allGames:a,specificGame:t,gameId:l,docsPath:s,urlAsDocsPath:o=!1,onlyGames:i=!1,onlyLaunchers:d=!1,endOfLife:u}=e,[p,f]=(0,n.useState)(null),[h,v]=(0,n.useState)(null);return(0,n.useEffect)((()=>{if(a){async function e(){await fetch("https://game-events-status.overwolf.com/all_prod.json").then((e=>e.json())).then((e=>{const a=[];for(let t of e)m.z[t.game_id]&&(i&&m.z[t.game_id].games||d&&!m.z[t.game_id].launcher||(m.z[t.game_id].state=m.z[t.game_id].endOfLife?0:t.state,a.push(m.z[t.game_id])));f(a)}))}e()}if(t){async function n(){await fetch(`https://game-events-status.overwolf.com/${l}_prod.json`).then((e=>e.json())).then((e=>v(e)))}n()}}),[]),null!=p||null!=h?n.createElement(n.Fragment,null,a&&null!=p&&n.createElement(r,{gameListData:p,urlAsDocsPath:o}),t&&null!=h&&n.createElement(c,{gameStatusData:h,gameId:l,docsPath:s,endOfLife:u})):n.createElement(g.Z,null)}},75404:(e,a,t)=>{t.d(a,{B:()=>r,F:()=>l});const n={[-1]:"Deprecated",0:"coming-soon",1:"good",2:"medium",3:"bad"},l=e=>n[e],s={[-1]:"Deprecated",0:"Coming soon",1:"Good to go",2:"Some events may be unavailable",3:"Events are currently unavailable"},r=e=>s[e]},58484:(e,a,t)=>{t.d(a,{z:()=>n});const n={765:{id:765,path:"/status/world-of-warcraft",name:"World of Warcraft",docs:"/api/games/events/world-of-warcraft",iconUrl:"/img/games-logos/world-of-warcraft.png",iconLargeUrl:"/img/games-logos/large/world-of-warcraft.png"},5426:{id:5426,launcher:10902,path:"/status/league-of-legends",name:"League of Legends",compliance:"/start/game-compliance/league-of-legends",docs:"/api/games/events/league-of-legends",iconUrl:"/img/games-logos/league-of-legends.png",iconLargeUrl:"/img/games-logos/large/league-of-legends.png"},5855:{id:5855,path:"/status/starcraft-2",name:"StarCraft II",docs:"/api/games/events/starcraft-2",iconUrl:"/img/games-logos/starcraft-2.png",iconLargeUrl:"/img/games-logos/large/starcraft-2.png"},6350:{id:6350,path:"/status/final-fantasy-xiv",name:"Final Fantasy XIV",docs:"/api/games/events/final-fantasy-xiv",iconUrl:"/img/games-logos/final-fantasy-xiv.png",iconLargeUrl:"/img/games-logos/large/final-fantasy-xiv.png"},6365:{id:6365,path:"/status/world-of-tanks",name:"World of Tanks",docs:"/api/games/events/world-of-tanks",iconUrl:"/img/games-logos/world-of-tanks.png",iconLargeUrl:"/img/games-logos/large/world-of-tanks.png"},7212:{id:7212,path:"/status/path-of-exile",name:"Path of Exile",docs:"/api/games/events/path-of-exile",iconUrl:"/img/games-logos/path-of-exile.png",iconLargeUrl:"/img/games-logos/large/path-of-exile.png"},7314:{id:7314,path:"/status/dota-2",name:"Dota 2",compliance:"/start/game-compliance/dota-2",docs:"/api/games/events/dota-2",iconUrl:"/img/games-logos/dota-2.png",iconLargeUrl:"/img/games-logos/large/dota-2.png"},7764:{id:7764,path:"/status/counter-strike-global-offensive",name:"Counter-Strike: Global Offensive",docs:"/api/games/events/counter-strike-global-offensive",iconUrl:"/img/games-logos/counter-strike-global-offensive.png",iconLargeUrl:"/img/games-logos/large/counter-strike-global-offensive.png"},8032:{id:8032,path:"/status/minecraft",name:"Minecraft",docs:"/api/games/events/minecraft",iconUrl:"/img/games-logos/minecraft.png",iconLargeUrl:"/img/games-logos/large/minecraft.png"},8954:{id:8954,path:"/status/warframe",name:"Warframe",docs:"/api/games/events/warframe",iconUrl:"/img/games-logos/warframe.png",iconLargeUrl:"/img/games-logos/large/warframe.png"},9898:{id:9898,path:"/status/hearthstone",name:"Hearthstone",docs:"/api/games/events/hearthstone",iconUrl:"/img/games-logos/hearthstone.png",iconLargeUrl:"/img/games-logos/large/hearthstone.png"},10624:{id:10624,path:"/status/heroes-of-the-storm",name:"Heroes of the Storm",docs:"/api/games/events/heroes-of-the-storm",iconUrl:"/img/games-logos/heroes-of-the-storm.png",iconLargeUrl:"/img/games-logos/large/heroes-of-the-storm.png"},10746:{id:10746,path:"/status/world-of-warships",name:"World of Warships",docs:"/api/games/events/world-of-warships",iconUrl:"/img/games-logos/world-of-warships.png",iconLargeUrl:"/img/games-logos/large/world-of-warships.png"},10798:{id:10798,path:"/status/rocket-league",name:"Rocket League",docs:"/api/games/events/rocket-league",iconUrl:"/img/games-logos/rocket-league.png",iconLargeUrl:"/img/games-logos/large/rocket-league.png"},10826:{id:10826,path:"/status/rainbow-six-siege",name:"Rainbow Six Siege",compliance:"/start/game-compliance/rainbow-six-siege",docs:"/api/games/events/rainbow-six-siege",iconUrl:"/img/games-logos/rainbow-six-siege.png",iconLargeUrl:"/img/games-logos/large/rainbow-six-siege.png"},10844:{id:10844,path:"/status/overwatch-2",name:"Overwatch 2",docs:"/api/games/events/overwatch-2",iconUrl:"/img/games-logos/overwatch-2.png",iconLargeUrl:"/img/games-logos/large/overwatch-2.png"},10902:{id:10902,games:[5426,21570,215701],path:"/status/launchers/league-of-legends",name:"League of Legends Launcher",docs:"/api/games/launchers/events/league-of-legends",iconUrl:"/img/games-logos/launchers/league-of-legends.png",iconLargeUrl:"/img/games-logos/large/launchers/league-of-legends.png"},10906:{id:10906,path:"/status/player-unknowns-battlegrounds",name:"PlayerUnknown's Battlegrounds",docs:"/api/games/events/player-unknowns-battlegrounds",iconUrl:"/img/games-logos/player-unknowns-battlegrounds.png",iconLargeUrl:"/img/games-logos/large/player-unknowns-battlegrounds.png"},21216:{id:21216,path:"/status/fortnite",name:"Fortnite",docs:"/api/games/events/fortnite",iconUrl:"/img/games-logos/fortnite.png",iconLargeUrl:"/img/games-logos/large/fortnite.png"},21308:{id:21308,path:"/status/magic-the-gathering-arena",name:"Magic: The Gathering Arena",docs:"/api/games/events/magic-the-gathering-arena",iconUrl:"/img/games-logos/magic-the-gathering-arena.png",iconLargeUrl:"/img/games-logos/large/magic-the-gathering-arena.png"},21328:{id:21328,path:"/status/hunt-showdown",name:"Hunt: Showdown",endOfLife:"9/7/2023",docs:"/api/games/events/hunt-showdown",iconUrl:"/img/games-logos/hunt-showdown.png",iconLargeUrl:"/img/games-logos/large/hunt-showdown.png"},21404:{id:21404,path:"/status/splitgate-arena-warfare",name:"Splitgate: Arena Warfare",docs:"/api/games/events/splitgate-arena-warfare",iconUrl:"/img/games-logos/splitgate-arena-warfare.png",iconLargeUrl:"/img/games-logos/large/splitgate-arena-warfare.png"},21566:{id:21566,path:"/status/apex-legends",name:"Apex Legends",docs:"/api/games/events/apex-legends",iconUrl:"/img/games-logos/apex-legends.png",iconLargeUrl:"/img/games-logos/large/apex-legends.png"},21570:{id:21570,displayId:5426,launcher:10902,subVariants:[215701],path:"/status/teamfight-tactics",name:"Teamfight Tactics",electron:"/api/electron/game-events/teamfight-tactics",docs:"/api/games/events/teamfight-tactics",iconUrl:"/img/games-logos/teamfight-tactics.png",iconLargeUrl:"/img/games-logos/large/teamfight-tactics.png"},21586:{id:21586,path:"/status/dota-underlords",name:"Dota Underlords",endOfLife:"9/7/2023",docs:"/api/games/events/dota-underlords",iconUrl:"/img/games-logos/dota-underlords.png",iconLargeUrl:"/img/games-logos/large/dota-underlords.png"},21620:{id:21620,path:"/status/legends-of-runeterra",name:"Legends of Runeterra",docs:"/api/games/events/legends-of-runeterra",iconUrl:"/img/games-logos/legends-of-runeterra.png",iconLargeUrl:"/img/games-logos/large/legends-of-runeterra.png"},21626:{id:21626,path:"/status/call-of-duty-warzone-caldera",name:"Call of Duty: Warzone Caldera",compliance:"/start/game-compliance/call-of-duty-warzone-caldera",docs:"/api/games/events/call-of-duty-warzone-caldera",iconUrl:"/img/games-logos/call-of-duty-warzone-caldera.png",iconLargeUrl:"/img/games-logos/large/call-of-duty-warzone-caldera.png"},21634:{id:21634,path:"/status/escape-from-tarkov",name:"Escape From Tarkov",docs:"/api/games/events/escape-from-tarkov",iconUrl:"/img/games-logos/escape-from-tarkov.png",iconLargeUrl:"/img/games-logos/large/escape-from-tarkov.png"},21640:{id:21640,path:"/status/valorant",name:"Valorant",docs:"/api/games/events/valorant",iconUrl:"/img/games-logos/valorant.png",iconLargeUrl:"/img/games-logos/large/valorant.png"},21666:{id:21666,path:"/status/football-manager-2021",name:"Football Manager 2021",endOfLife:"9/7/2023",docs:"/api/games/events/football-manager-2021",iconUrl:"/img/games-logos/football-manager-2021.png",iconLargeUrl:"/img/games-logos/large/football-manager-2021.png"},21668:{id:21668,path:"/status/valheim",name:"Valheim",docs:"/api/games/events/valheim",iconUrl:"/img/games-logos/valheim.png",iconLargeUrl:"/img/games-logos/large/valheim.png"},21672:{id:21672,path:"/status/eternal-return",name:"Eternal Return",docs:"/api/games/events/eternal-return",iconUrl:"/img/games-logos/eternal-return.png",iconLargeUrl:"/img/games-logos/large/eternal-return.png"},21816:{id:21816,path:"/status/new-world",name:"New World",compliance:"/start/game-compliance/new-world",docs:"/api/games/events/new-world",iconUrl:"/img/games-logos/new-world.png",iconLargeUrl:"/img/games-logos/large/new-world.png"},21848:{id:21848,path:"/status/diablo-2-resurrected",name:"Diablo 2 Resurrected",docs:"/api/games/events/diablo-2-resurrected",iconUrl:"/img/games-logos/diablo-2-resurrected.png",iconLargeUrl:"/img/games-logos/large/diablo-2-resurrected.png"},21854:{id:21854,path:"/status/halo-infinite",name:"Halo Infinite",docs:"/api/games/events/halo-infinite",iconUrl:"/img/games-logos/halo-infinite.png",iconLargeUrl:"/img/games-logos/large/halo-infinite.png"},21856:{id:21856,path:"/status/football-manager-2022",name:"Football Manager 2022",endOfLife:"9/7/2023",docs:"/api/games/events/football-manager-2022",iconUrl:"/img/games-logos/football-manager-2022.png",iconLargeUrl:"/img/games-logos/large/football-manager-2022.png"},21864:{id:21864,path:"/status/lost-ark",name:"Lost Ark",docs:"/api/games/events/lost-ark",iconUrl:"/img/games-logos/lost-ark.png",iconLargeUrl:"/img/games-logos/large/lost-ark.png"},21876:{id:21876,path:"/status/call-of-duty-vanguard",name:"Call of Duty: Vanguard",docs:"/api/games/events/call-of-duty-vanguard",iconUrl:"/img/games-logos/call-of-duty-vanguard.png",iconLargeUrl:"/img/games-logos/large/call-of-duty-vanguard.png"},21960:{id:21960,path:"/status/axie-infinity-origin",name:"Axie Infinity Origin",docs:"/api/games/events/axie-infinity-origin",iconUrl:"/img/games-logos/axie-infinity-origin.png",iconLargeUrl:"/img/games-logos/large/axie-infinity-origin.png"},22312:{id:22312,path:"/status/leap",name:"LEAP",docs:"/api/games/events/leap",iconUrl:"/img/games-logos/leap.png",iconLargeUrl:"/img/games-logos/large/leap.png"},22638:{id:22638,path:"/status/sons-of-the-forest",name:"Sons of the Forest",docs:"/api/games/events/sons-of-the-forest",iconUrl:"/img/games-logos/sons-of-the-forest.png",iconLargeUrl:"/img/games-logos/large/sons-of-the-forest.png"},22700:{id:22700,path:"/status/diablo-4",name:"Diablo 4",docs:"/api/games/events/diablo-4",iconUrl:"/img/games-logos/diablo-4.png",iconLargeUrl:"/img/games-logos/large/diablo-4.png"},215701:{id:215701,displayId:5426,launcher:10902,mainVariant:21570,docs:"/api/games/events/teamfight-tactics",path:"/status/teamfight-tactics-public-beta",name:"Teamfight Tactics PBE",variant:"PBE",iconUrl:"/img/games-logos/teamfight-tactics-public-beta.png",iconLargeUrl:"/img/games-logos/large/teamfight-tactics-public-beta.png"}}},88476:(e,a,t)=>{t.d(a,{Z:()=>u});var n=t(27378),l=t(58484),s=t(75404),r=t(65864);const o=function(e){const{metaData:a,type:t,disabledLinks:l,hasElectron:s}=e,{id:o,displayId:i,path:c,docs:m,compliance:g,variant:d,electron:u}=a;t||d||console.error("No variant was defined for this game!",a);const p=d??t,f=s?`${t} (Electron)`:d?`${t} (${p})`:t;return n.createElement(n.Fragment,null,n.createElement("p",null,n.createElement("span",null,f," ID: "),i||o),i&&n.createElement("p",null,n.createElement("span",null,"Tracking ID: "),o),!l.docs&&m&&n.createElement(r.Z,{name:`${p} API docs`,pathUrl:u??m}),!l.status&&c&&n.createElement(r.Z,{name:`${p} events status`,pathUrl:c}),!l.compliance&&g&&n.createElement(r.Z,{name:`${p} compliance page`,pathUrl:g}))};const i=function(e){const{gamesListData:a}=e,[t,s]=(0,n.useState)(!1),[r,i]=(0,n.useState)(0),c=(0,n.useRef)(null),m=a.map((e=>{const a=l.z[e];return n.createElement("li",null,n.createElement("h3",null,n.createElement("img",{src:a.iconLargeUrl}),n.createElement("span",null,a.name)),n.createElement(o,{metaData:a,type:"Game",disabledLinks:{docs:!1,status:!1,compliance:!1}}))}));function g(){t?(i(0),s(!1)):(i(c.current.querySelector("ul").clientHeight),s(!0))}return n.createElement("div",{className:"expended-launcher-game-list "+(t?"is-open":"")},n.createElement("button",{className:"expend-btn",onClick:g},n.createElement("svg",{className:"games-icon"},n.createElement("use",{href:"/img/sprite.svg#gamesIcon"})),"Launcher's supported games list",n.createElement("svg",null,n.createElement("use",{href:"/img/sprite.svg#arrowDown"}))),n.createElement("div",{className:"launcher-game-list-inner",ref:c,style:{height:r+"px"}},n.createElement("ul",{className:"launcher-game-list"},m),n.createElement("button",{className:"hide-button",onClick:g},"Hide List")))};const c=function(e){const{gameState:a,endOfLife:t}=e;return n.createElement("div",{className:"status-tooltip-trigger"},n.createElement("div",{className:"status-tooltip"},n.createElement("span",null,(0,s.B)(t?-1:a))))};var m=t(55759);function g(e,a){return{docs:e.docs===a.docs,compliance:e.compliance===a.compliance,status:e.path===a.path}}function d(e,a){return void 0===a&&(a={docs:!1,status:!1,compliance:!1}),a[e]=!0,a}const u=function(e){const{gameId:a,page:t}=e,[r,u]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){await fetch(`https://game-events-status.overwolf.com/${a}_prod.json`).then((e=>e.json())).then((e=>u(e.state)))}()}),[]);const p=l.z[a],f=l.z[p.launcher],h=p?.games,v=l.z[p.mainVariant],E=p.subVariants,b=p.electron;return null!==r?n.createElement("section",{className:"game-info-section"},n.createElement("div",{className:"game-info-item"},n.createElement("h1",{className:`game-info-title ${(0,s.F)(p.endOfLife?0:r)}`},n.createElement("img",{src:p.iconLargeUrl}),n.createElement("span",null,p.name),n.createElement(c,{gameState:r,endOfLife:p.endOfLife})),n.createElement("ul",{className:"game-info-groups"},p.endOfLife&&n.createElement("li",{style:{paddingTop:"10px"}},n.createElement("h1",null,"This game is nearing its end of life, and support will be fully removed at ",p.endOfLife)),n.createElement("li",{className:"main"},n.createElement(o,{metaData:p,type:"Game",disabledLinks:d(t)})),b&&n.createElement("li",{className:"main"},n.createElement(o,{metaData:p,type:"Game",hasElectron:!0,disabledLinks:d(t)})),v&&n.createElement(n.Fragment,null,n.createElement("li",{className:"main"},n.createElement(o,{metaData:v,type:"Game",disabledLinks:{docs:!1,status:!1,compliance:!1}})),n.createElement("li",null,n.createElement(o,{metaData:p,type:"Game",disabledLinks:d(t,g(v,p))}))),E&&E.map((e=>{const a=l.z[e];return n.createElement("li",null,n.createElement(o,{metaData:a,type:"Game",disabledLinks:g(p,a)}))})),f&&n.createElement("li",null,n.createElement(o,{metaData:f,type:"Launcher",disabledLinks:{docs:!1,status:!1,compliance:!1}})))),h?.length&&n.createElement(i,{gamesListData:h}),"status"===t&&n.createElement("ul",{className:"legend"},n.createElement("li",{className:"good"},"Good to go"),n.createElement("li",{className:"medium"},"Some events may be unavailable"),n.createElement("li",{className:"bad"},"Events are currently unavailable"))):n.createElement(m.Z,{small:!0})}},55961:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(27378);const l=()=>{const[e,a]=(0,n.useState)("");return(0,n.useEffect)((()=>{const e=document.querySelector("html"),t=()=>{switch(e?.dataset.theme){case"light":a("light");break;case"dark":a("dark")}};t(),e?.addEventListener("click",(()=>{setTimeout((()=>{t()}),0)}),!1)}),[]),e}},50133:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(27378);const l=e=>{const{children:a,thTitle:t,width:l,bold:s,center:r,desktopOnly:o,useAsMobileTitle:i}=e,c=(0,n.useRef)(null);return null!==c.current&&(l&&(c.current.style.width=l),s&&(c.current.style.fontWeight="bold"),r&&(c.current.style.textAlign="center")),n.createElement("div",{className:"ow-data-cell "+(o||i?"desktop-only":""),ref:c},n.createElement("span",{className:"mobile-label mobile-only"},t),n.createElement("span",null,a))}},22958:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(27378);const l=e=>{const{children:a,mobileTitle:t,mobileDescription:l}=e;return n.createElement("div",{className:"ow-table-body-expended-row-group"},a,n.createElement("h1",null,n.createElement("div",null,t),n.createElement("div",null,l)))}},90836:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(27378);const l=e=>{const{children:a,expandButton:t=!1}=e,l=(0,n.useRef)(null),[s,r]=(0,n.useState)(!1),o=e=>{if(null!==l.current){const a=e?l.current.nextElementSibling:l.current,t=a?.firstChild,n=t?.offsetHeight;a.style.height=`${n}px`}};return n.createElement("div",{className:"ow-table-body-row",ref:l,onClick:()=>{window.innerWidth>600&&o(!1)}},a,t&&n.createElement("button",{className:"expand-row "+(s?"is-expanded":""),onClick:()=>{if(null!==l.current){const e=l.current.nextElementSibling;s?(e.style.display="none",r(!1)):(e.style.display="table-row",o(!0),r(!0))}}},s?"Collapse":"View Full",n.createElement("svg",null,n.createElement("use",{href:"/img/sprite.svg#arrowDown"}))))}},48023:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(27378);const l=e=>{const{tabID:a,label:t,iconDarkSrc:l,iconLightSrc:s,className:r,children:o}=e;return n.createElement("section",{className:r,id:a,"data-label":t,"data-icon":l,"data-light-icon":s},o)}},36269:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(27378),l=t(55961);const s=e=>{const{children:a}=e,t=(0,l.Z)(),s=(0,n.useRef)(null),r=n.Children.map(a,((e,a)=>{if(n.isValidElement(e)){const l="light"==t?e.props.iconLightSrc:e.props.iconDarkSrc;return n.createElement("button",{key:a,className:"tabs-nav-item "+(0==a?"is-active":""),"data-tab":e.props.tabID,onClick:a=>((e,a)=>{if(null!==s.current){const t=a.target,n=s.current.querySelector(`#${e}`),l=n?.parentElement?.querySelector(".is-open"),r=t?.parentElement?.querySelector(".is-active");l?.classList.remove("is-open"),r?.classList.remove("is-active"),t?.classList.add("is-active"),n?.classList.add("is-open")}else console.log("ref is null")})(e.props.tabID,a)},e.props.iconDarkSrc&&n.createElement("img",{src:l,alt:e.props.label}),e.props.label)}return n.createElement("p",{style:{color:"red"}},"not a tab! use the proper tab component!!")})),o=n.Children.map(a,((e,a)=>n.isValidElement(e)?n.cloneElement(e,{className:"panel "+(0==a?"is-open":"")}):n.createElement("p",{style:{color:"red"}},"not a tab! use the proper tab component!! or call Benjo for instructions")));return n.createElement("section",{className:"tabs-section"},n.createElement("div",{className:"tabs-header"},n.createElement("nav",{className:"tabs-nav"},r)),n.createElement("div",{className:"panels-container",ref:s},o))}},55759:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(27378);const l=function(e){const{small:a}=e;return n.createElement("div",{className:"preloader "+(a?"small":"")},n.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"https://www.w3.org/2000/svg"},n.createElement("path",{d:"M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1",stroke:"white",strokeWidth:"2"})),n.createElement("span",null,"Loading..."))}},86602:(e,a,t)=>{t.d(a,{Z:()=>z});var n=t(27378),l=t(88757);const s=function(e){const{children:a,miniSlides:t}=e,l=n.Children.toArray(a),s=(0,n.useRef)(null),[r,o]=(0,n.useState)(658),[i,c]=(0,n.useState)(""),[m,g]=(0,n.useState)("ow-image-slider"),[d,u]=(0,n.useState)(!1),[p,f]=(0,n.useState)(""),[h,v]=(0,n.useState)(""),E=()=>{let e=s.current.querySelector("li:first-child img").clientWidth+16;return o(e),e},b=e=>{u(!0),setTimeout((()=>{u(!1)}),500);const a=e*r;s.current.scrollBy({left:a,behavior:"smooth"}),(e=>{const a=s.current.scrollLeft+e,t=s.current;t.parentElement.classList.remove("scroll-start"),t.parentElement.classList.remove("scroll-end"),a<=0?t.parentElement.classList.add("scroll-start"):a+t.offsetWidth>=t.scrollWidth&&t.parentElement.classList.add("scroll-end")})(a)};let w=0;const y=e=>{e.pageX<w?c("right"):e.pageX>w&&c("left"),w=e.pageX},L=e=>{"right"==i?b(1):"left"==i&&b(-1)},k=e=>{const a=e.target.getAttribute("src"),t=e.target.getAttribute("alt");f(a),v(t),g("ow-image-slider is-active")},U=()=>{g("ow-image-slider")};return(0,n.useEffect)((()=>{window.addEventListener("resize",E),document.addEventListener("mousemove",y),document.addEventListener("dragstart",(function(e){var a=new Image;a.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(a,0,0)}),!1)}),[]),n.createElement("section",{className:m},n.createElement("div",{className:"modal-backdrop",onClick:U,onWheel:U}),n.createElement("div",{className:"ow-image-slider-inner scroll-start"},n.createElement("button",{className:"btn-next",onClick:()=>b(1),disabled:d},n.createElement("svg",null,n.createElement("use",{href:"../../img/sprite.svg#next"}))),n.createElement("ul",{className:t?"mini":"",ref:s},"  ",l.map(((e,a)=>n.createElement("li",{key:`slide-${a}`,"data-current":a,onDragEnd:L,draggable:!0},n.createElement("div",{onClick:k},e),n.createElement("p",null,e.props.alt))))),n.createElement("button",{className:"btn-prev",onClick:()=>b(-1),disabled:d},n.createElement("svg",null,n.createElement("use",{href:"../../img/sprite.svg#prev"})))),n.createElement("div",{className:"slider-image-modal",onClick:U,onWheel:U},n.createElement("img",{src:p}),n.createElement("p",null,h)))};const r=function(e){const{children:a}=e,[t,l]=(0,n.useState)("image-box-modal"),s=n.Children.toArray(a),r=()=>{l("image-box-modal")};return n.createElement("section",{className:t},n.createElement("div",{className:"image-box-modal-backdrop",onClick:r,onWheel:r}),n.createElement("div",{className:"image-box-modal-inner"},n.createElement("a",{onClick:()=>{l("image-box-modal is-active")}},a,s.map(((e,a)=>n.createElement("p",{key:a}," ",e.props.alt))))),n.createElement("div",{className:"image-modal",onWheel:r},a,s.map(((e,a)=>n.createElement("p",{key:a}," ",e.props.alt)))))};const o=function(e){const{videoID:a,fullWidth:t}=e;return n.createElement("div",{className:"video-box "+(t?"full-width":"")},n.createElement("iframe",{className:"video-frame",src:`https://www.youtube.com/embed/${a}`,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))};var i=t(88476),c=t(29738);const m=function(e,a){const t=(0,n.useCallback)((()=>{if("undefined"==typeof window)return a;try{const t=window.localStorage.getItem(e);return t?function(e){if("{"!==e[0])return e;try{return"undefined"===e?void 0:JSON.parse(e)}catch{return void console.log("parsing error on",{value:e})}}(t):(window.localStorage.setItem(e,JSON.stringify(a)),a)}catch(t){return console.warn(`Error reading localStorage key \u201c${e}\u201d:`,t),a}}),[a,e]),[l,s]=(0,n.useState)(t),r=(0,c.$0)((a=>{"undefined"==typeof window&&console.warn(`Tried setting localStorage key \u201c${e}\u201d even though environment is not a client`);try{const t=a instanceof Function?a(l):a;window.localStorage.setItem(e,JSON.stringify(t)),s(t),window.dispatchEvent(new Event("local-storage"))}catch(t){console.warn(`Error setting localStorage key \u201c${e}\u201d:`,t)}}));(0,n.useEffect)((()=>{s(t())}),[]);const o=(0,n.useCallback)((a=>{a?.key&&a.key!==e||s(t())}),[e,t]);return(0,c.OR)("storage",o),(0,c.OR)("local-storage",o),[l,r]};function g(){return m("debug-info",{name:!0,color:!0})}const d=function(){return!1};const u=function(e){var{type:a,children:t}=e;if(!d())return n.createElement(n.Fragment,null);const[l,s]=g();return n.createElement("div",{style:{color:"grey",paddingLeft:"10px"}},l.name&&[a||"debugType",n.createElement("br",null),n.createElement("i",{style:{paddingLeft:"20px"}},t)])};var p=t(36269),f=t(48023),h=t(55961);const v=e=>{const{title:a,imgLightSrc:t,imgDarkSrc:l,children:s,id:r}=e,o="light"==(0,h.Z)()?t:l;return n.createElement("div",{className:"image-heading"},n.createElement("img",{src:o,alt:`${a} Icon`}),n.createElement("div",{className:"content"},n.createElement("h2",{id:r},a),s))};var E=t(55759);const b=e=>{const{children:a,headerCellNames:t=[]}=e,[l,s]=(0,n.useState)(!1);return setTimeout((()=>{s(!0)}),1500),n.createElement(n.Fragment,null,!l&&n.createElement(E.Z,null),n.createElement("section",{className:"ow-table",style:{display:l?"":"none"}},n.createElement("div",{className:"ow-table-header"},n.createElement("div",{className:"ow-table-header-row"},0!=t.length&&t.map(((e,a)=>n.createElement("div",{key:a}," ",e," "))))),n.createElement("div",{className:"ow-table-body"},a)))};var w=t(90836),y=t(22958),L=t(50133);const k=function(e){return n.createElement("div",{className:e.type},e.children)};var U=t(25773),N=t(38944),S=t(76457),x=t(70784),D=t(49947),I=t(83457);const A="tabList_TRJ7",C="tabItem_hGfb";function T(e){const{lazy:a,block:t,defaultValue:l,values:s,groupId:r,className:o}=e,i=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),c=s??i.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),m=(0,x.l)(c,((e,a)=>e.value===a.value));if(m.length>0)throw new Error(`Docusaurus error: Duplicate values "${m.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===l?l:l??i.find((e=>e.props.default))?.props.value??i[0].props.value;if(null!==g&&!c.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${c.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:d,setTabGroupChoices:u}=(0,D.U)(),[p,f]=(0,n.useState)(g),h=[],{blockElementScrollPositionUntilNextRender:v}=(0,I.o5)();if(null!=r){const e=d[r];null!=e&&e!==p&&c.some((a=>a.value===e))&&f(e)}const E=e=>{const a=e.currentTarget,t=h.indexOf(a),n=c[t].value;n!==p&&(v(a),function(e){let{key:a,oldValue:t,newValue:n,storage:l}=e;const s=document.createEvent("StorageEvent");s.initStorageEvent("storage",!1,!1,a,t,n,window.location.href,l),window.dispatchEvent(s)}({key:`docusaurus.tab.${r}`,oldValue:p,newValue:n,storage:localStorage}),f(n),null!=r&&u(r,String(n)))},b=e=>{let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=h.indexOf(e.currentTarget)+1;a=h[t]??h[0];break}case"ArrowLeft":{const t=h.indexOf(e.currentTarget)-1;a=h[t]??h[h.length-1];break}}a?.focus()};return n.createElement("div",{className:(0,N.Z)("tabs-container",A)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,N.Z)("tabs",{"tabs--block":t},o)},c.map((e=>{let{value:a,label:t,attributes:l}=e;return n.createElement("li",(0,U.Z)({role:"tab",tabIndex:p===a?0:-1,"aria-selected":p===a,key:a,ref:e=>h.push(e),onKeyDown:b,onClick:E,"data-text":t},l,{className:(0,N.Z)("tabs__item",C,l?.className,{"tabs__item--active":p===a})}),t??a)}))),a?(0,n.cloneElement)(i.filter((e=>e.props.value===p))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},i.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==p})))))}var O=t(39798);const Z=function(e){const{groupId:a,choices:t}=e;if(!a)return console.error("groupId must be set!");if(!t)return console.error("choices must be set!");const l=`docusaurus.tab.${a}`,[s]="undefined"==typeof window?[t[0]]:m(l,Object.keys(t)[0]);return n.createElement("p",null,t[s])};var W=t(64611),$=t(65864);const F=function(e){const{}=e;return n.createElement("div",null,n.createElement("b",null,"This event is intended for real-time usage only, and its content should not be logged."))};const G=function(e){return n.createElement(n.Fragment,null,n.createElement("div",{style:{whiteSpace:"pre-wrap"},dangerouslySetInnerHTML:{__html:`${JSON.stringify(e,void 0,4)}`}}))},z={...l.Z,ImageSlider:s,ImageBoxModal:r,VideoBox:o,GameInfo:i.Z,SkipMe:u,OWTabs:p.Z,OWTabItem:f.Z,ImageHeading:v,OWTable:b,OWTableRow:w.Z,OWexpandedRowGroup:y.Z,OWdataCell:L.Z,Tagger:k,Tabs:function(e){const a=(0,S.Z)();return n.createElement(T,(0,U.Z)({key:String(a)},e))},TabItem:O.Z,SimpleTab:Z,EventsData:W.Z,FancyLink:$.Z,MatchOnly:F,DisplayJSON:G}}}]);