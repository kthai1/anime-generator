(this["webpackJsonpanime-generator"]=this["webpackJsonpanime-generator"]||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),c=a.n(i),s=a(21),r=a.n(s),o=(a(37),a(14)),l=a(15),j=a(17),b=a(16),d=(a(38),a(10)),u=a(3),h=a.n(u),g=[{genre:"Action",icon:Object(n.jsx)(h.a,{}),value:1},{genre:"Adventure",icon:Object(n.jsx)(h.a,{}),value:2},{genre:"Cars",icon:Object(n.jsx)(h.a,{}),value:3},{genre:"Comedy",icon:Object(n.jsx)(h.a,{}),value:4},{genre:"Dementia",icon:Object(n.jsx)(h.a,{}),value:5},{genre:"Demons",icon:Object(n.jsx)(h.a,{}),value:6},{genre:"Mystery",icon:Object(n.jsx)(h.a,{}),value:7},{genre:"Drama",icon:Object(n.jsx)(h.a,{}),value:8},{genre:"Ecchi",icon:Object(n.jsx)(h.a,{}),value:9},{genre:"Fantasy",icon:Object(n.jsx)(h.a,{}),value:10},{genre:"Game",icon:Object(n.jsx)(h.a,{}),value:11},{genre:"Hentai",icon:Object(n.jsx)(h.a,{}),value:12},{genre:"Historical",icon:Object(n.jsx)(h.a,{}),value:13},{genre:"Horror",icon:Object(n.jsx)(h.a,{}),value:14},{genre:"Kids",icon:Object(n.jsx)(h.a,{}),value:15},{genre:"Magic",icon:Object(n.jsx)(h.a,{}),value:16},{genre:"Martial Arts",icon:Object(n.jsx)(h.a,{}),value:17},{genre:"Mecha",icon:Object(n.jsx)(h.a,{}),value:18},{genre:"Music",icon:Object(n.jsx)(h.a,{}),value:19},{genre:"Parody",icon:Object(n.jsx)(h.a,{}),value:20},{genre:"Samurai",icon:Object(n.jsx)(h.a,{}),value:21},{genre:"Romance",icon:Object(n.jsx)(h.a,{}),value:22},{genre:"School",icon:Object(n.jsx)(h.a,{}),value:23},{genre:"Sci Fi",icon:Object(n.jsx)(h.a,{}),value:24},{genre:"Shoujo",icon:Object(n.jsx)(h.a,{}),value:25},{genre:"Shoujo Ai",icon:Object(n.jsx)(h.a,{}),value:26},{genre:"Shounen",icon:Object(n.jsx)(h.a,{}),value:27},{genre:"Shounen Ai",icon:Object(n.jsx)(h.a,{}),value:28},{genre:"Space",icon:Object(n.jsx)(h.a,{}),value:29},{genre:"Sports",icon:Object(n.jsx)(h.a,{}),value:30},{genre:"Super Power",icon:Object(n.jsx)(h.a,{}),value:31},{genre:"Vampire",icon:Object(n.jsx)(h.a,{}),value:32},{genre:"Yaoi",icon:Object(n.jsx)(h.a,{}),value:33},{genre:"Yuri",icon:Object(n.jsx)(h.a,{}),value:34},{genre:"Harem",icon:Object(n.jsx)(h.a,{}),value:35},{genre:"Slice of Life",icon:Object(n.jsx)(h.a,{}),value:36},{genre:"Supernatural",icon:Object(n.jsx)(h.a,{}),value:37},{genre:"Military",icon:Object(n.jsx)(h.a,{}),value:38},{genre:"Police",icon:Object(n.jsx)(h.a,{}),value:39},{genre:"Psychological",icon:Object(n.jsx)(h.a,{}),value:40},{genre:"Thriller",icon:Object(n.jsx)(h.a,{}),value:41},{genre:"Seinen",icon:Object(n.jsx)(h.a,{}),value:42},{genre:"Josei",icon:Object(n.jsx)(h.a,{}),value:43}],m=a(13),O=a(23),x=a.n(O),v=a(24),p=a.n(v),S=a(25),f=a.n(S),y=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={animeList:[""],i:0,page:1,showSidebar:!0,watchList:[],genre:1},e.loadanimePage=e.loadanimePage.bind(Object(d.a)(e)),e.nextRandomAnime=e.nextRandomAnime.bind(Object(d.a)(e)),e.getGenre=e.getGenre.bind(Object(d.a)(e)),e.changePage=e.changePage.bind(Object(d.a)(e)),e.watchedAnime=e.watchedAnime.bind(Object(d.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.loadanimePage()}},{key:"loadanimePage",value:function(){var e=this;fetch("https://jikan1.p.rapidapi.com/genre/anime/"+this.state.genre+"/"+this.state.page,{method:"GET",headers:{"x-rapidapi-key":"542c3ca589msh41c910fdd2fb3e6p174e03jsnb59816e25977","x-rapidapi-host":"jikan1.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(t){e.setState({animeList:t.anime,isLoading:!0})}))}},{key:"nextRandomAnime",value:function(){this.setState({i:this.state.i+1})}},{key:"getGenre",value:function(e){var t=this;this.setState({genre:e,isLoading:!1,i:0}),setTimeout((function(){t.loadanimePage()}),100)}},{key:"toggleSidebar",value:function(){this.setState((function(e){return{showSidebar:!e.showSidebar}}))}},{key:"changePage",value:function(){this.setState({page:this.state.page+1})}},{key:"watchedAnime",value:function(){var e=JSON.parse(localStorage.getItem("mylocalStorage")||"[]");e.push(this.state.animeList[this.state.i]),this.state.watchList.push(this.state.animeList[this.state.i]),localStorage.setItem("mylocalStorage",JSON.stringify(e)),this.nextRandomAnime()}},{key:"displayAnime",value:function(){var e=this.state,t=e.animeList,a=e.i,i=JSON.parse(localStorage.getItem("mylocalStorage")||"[]");console.log("DISPKay");for(var c=0;c<i.length;c++)t[a].mal_id==i[c].mal_id&&this.nextRandomAnime();return Object(n.jsxs)("div",{className:"Container",children:[Object(n.jsx)("div",{className:"Image",children:Object(n.jsx)("img",{src:t[a].image_url})}),Object(n.jsxs)("div",{className:"Info",children:[Object(n.jsx)("h1",{children:Object(n.jsxs)("a",{style:{textDecoration:"none",color:"blue"},href:t[a].url,target:"_blank",children:[" ",t[a].title," "]})}),Object(n.jsxs)("h3",{children:["Year: ",t[a].airing_start[0],t[a].airing_start[1],t[a].airing_start[2],t[a].airing_start[3]]}),Object(n.jsxs)("h3",{children:["Episodes: ",t[a].episodes]}),Object(n.jsxs)("h3",{children:["Synopsis: ",Object(n.jsx)("p",{children:t[a].synopsis})]})]})]})}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,i=(t.animeList,t.i);return a?Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"TopBar",children:[Object(n.jsx)(x.a,{onClick:function(){e.toggleSidebar()},style:{fontSize:"40px"},children:"Sidebar"}),Object(n.jsx)(m.b,{className:"NavLink",to:"/",children:Object(n.jsx)(p.a,{style:{fontSize:"40px"}})}),Object(n.jsx)(m.b,{className:"NavLink",to:{pathname:"/completedanime",state:{listcomplete:this.state.watchList}},children:Object(n.jsx)(f.a,{style:{fontSize:"40px"}})})]}),Object(n.jsxs)("div",{className:"MainPage",children:[this.state.showSidebar?Object(n.jsx)("div",{className:"Sidebar",children:Object(n.jsxs)("ul",{className:"SidebarList",children:[Object(n.jsx)("h2",{style:{color:"black",margin:"10px",paddingLeft:"13px"},children:"Genre"}),g.map((function(t,a){return Object(n.jsx)("li",{classname:"row",id:t.value===e.state.genre?"active":"",onClick:function(){e.getGenre(t.value)},children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{id:"icon",children:t.icon}),Object(n.jsx)("div",{id:"genre",children:t.genre})]})},a)}))]})}):null,Object(n.jsxs)("div",{className:"Randomizer",children:[Object(n.jsxs)("div",{className:"Buttons",children:[Object(n.jsx)("button",{onClick:this.watchedAnime,style:{margin:"1%"},children:"Watched"}),Object(n.jsx)("button",{onClick:i<99?this.nextRandomAnime:this.changePage,children:"Next Random Anime"})]}),this.displayAnime()]})]})]}):Object(n.jsx)("div",{children:"Loading..."})}}]),a}(c.a.Component),N=a(4),k=a(30),L=a.n(k),A=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={isLoading:!0,showSidebar:!1},e.removeAnime=e.removeAnime.bind(Object(d.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.location.state}},{key:"toggleSidebar",value:function(){this.setState((function(e){return{showSidebar:!e.showSidebar}}))}},{key:"removeAnime",value:function(e,t){var a=JSON.parse(localStorage.getItem("mylocalStorage")||"[]"),n=Object.assign([],a);n.splice(t,1),localStorage.setItem("mylocalStorage",JSON.stringify(n)),window.location.reload(!1)}},{key:"render",value:function(e){var t=this;if(this.state.isLoading){var a=JSON.parse(localStorage.getItem("mylocalStorage")||"[]");return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"TopBar",children:[Object(n.jsx)(x.a,{onClick:function(){t.toggleSidebar()},style:{fontSize:"40px"},children:"Sidebar"}),Object(n.jsx)(m.b,{className:"NavLink",to:"/",children:Object(n.jsx)(p.a,{style:{fontSize:"40px"}})}),Object(n.jsx)(m.b,{className:"NavLink",to:{pathname:"/completedanime",state:{listcomplete:this.state.watchList}},children:Object(n.jsx)(f.a,{style:{fontSize:"40px"}})})]}),Object(n.jsxs)("div",{className:"MainPage",children:[this.state.showSidebar?Object(n.jsx)("div",{className:"Sidebar",children:Object(n.jsx)("ul",{className:"SidebarList"})}):null,Object(n.jsx)("div",{className:"Watched",children:a.map((function(e,a){return Object(n.jsxs)("div",{className:"WatchedAnime",children:[Object(n.jsx)(L.a,{onClick:function(){t.removeAnime(e.mal_id,a)}}),Object(n.jsxs)("a",{style:{textDecoration:"none"},href:e.url,target:"_blank",children:[" ",e.title," "]}),Object(n.jsx)("div",{className:"AnimeImage",children:Object(n.jsx)("img",{src:e.image_url})})]},e.mal_id)}))})]})]})}return Object(n.jsx)("div",{children:"Loading..."})}}]),a}(c.a.Component),w=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(m.a,{children:Object(n.jsxs)(N.c,{children:[Object(n.jsx)(N.a,{exact:!0,path:"/",component:y}),Object(n.jsx)(N.a,{path:"/completedanime",component:A})]})})}}]),a}(c.a.Component),P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,58)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),P()}},[[46,1,2]]]);
//# sourceMappingURL=main.4a61a3a7.chunk.js.map