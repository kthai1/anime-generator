(this["webpackJsonpanime-generator"]=this["webpackJsonpanime-generator"]||[]).push([[0],{30:function(e,n,a){},31:function(e,n,a){},42:function(e,n,a){"use strict";a.r(n);var t=a(1),i=a(0),c=a.n(i),s=a(17),o=a.n(s),r=(a(30),a(13)),j=a(14),l=a(16),u=a(15),d=(a(31),a(9)),g=a(3),b=a.n(g),h=[{genre:"Action",icon:Object(t.jsx)(b.a,{}),value:1},{genre:"Adventure",icon:Object(t.jsx)(b.a,{}),value:2},{genre:"Cars",icon:Object(t.jsx)(b.a,{}),value:3},{genre:"Comedy",icon:Object(t.jsx)(b.a,{}),value:4},{genre:"Dementia",icon:Object(t.jsx)(b.a,{}),value:5},{genre:"Demons",icon:Object(t.jsx)(b.a,{}),value:6},{genre:"Mystery",icon:Object(t.jsx)(b.a,{}),value:7},{genre:"Drama",icon:Object(t.jsx)(b.a,{}),value:8},{genre:"Ecchi",icon:Object(t.jsx)(b.a,{}),value:9},{genre:"Fantasy",icon:Object(t.jsx)(b.a,{}),value:10},{genre:"Game",icon:Object(t.jsx)(b.a,{}),value:11},{genre:"Hentai",icon:Object(t.jsx)(b.a,{}),value:12},{genre:"Historical",icon:Object(t.jsx)(b.a,{}),value:13},{genre:"Horror",icon:Object(t.jsx)(b.a,{}),value:14},{genre:"Kids",icon:Object(t.jsx)(b.a,{}),value:15},{genre:"Magic",icon:Object(t.jsx)(b.a,{}),value:16},{genre:"Martial Arts",icon:Object(t.jsx)(b.a,{}),value:17},{genre:"Mecha",icon:Object(t.jsx)(b.a,{}),value:18},{genre:"Music",icon:Object(t.jsx)(b.a,{}),value:19},{genre:"Parody",icon:Object(t.jsx)(b.a,{}),value:20},{genre:"Samurai",icon:Object(t.jsx)(b.a,{}),value:21},{genre:"Romance",icon:Object(t.jsx)(b.a,{}),value:22},{genre:"School",icon:Object(t.jsx)(b.a,{}),value:23},{genre:"Sci Fi",icon:Object(t.jsx)(b.a,{}),value:24},{genre:"Shoujo",icon:Object(t.jsx)(b.a,{}),value:25},{genre:"Shoujo Ai",icon:Object(t.jsx)(b.a,{}),value:26},{genre:"Shounen",icon:Object(t.jsx)(b.a,{}),value:27},{genre:"Shounen Ai",icon:Object(t.jsx)(b.a,{}),value:28},{genre:"Space",icon:Object(t.jsx)(b.a,{}),value:29},{genre:"Sports",icon:Object(t.jsx)(b.a,{}),value:30},{genre:"Super Power",icon:Object(t.jsx)(b.a,{}),value:31},{genre:"Vampire",icon:Object(t.jsx)(b.a,{}),value:32},{genre:"Yaoi",icon:Object(t.jsx)(b.a,{}),value:33},{genre:"Yuri",icon:Object(t.jsx)(b.a,{}),value:34},{genre:"Harem",icon:Object(t.jsx)(b.a,{}),value:35},{genre:"Slice of Life",icon:Object(t.jsx)(b.a,{}),value:36},{genre:"Supernatural",icon:Object(t.jsx)(b.a,{}),value:37},{genre:"Military",icon:Object(t.jsx)(b.a,{}),value:38},{genre:"Police",icon:Object(t.jsx)(b.a,{}),value:39},{genre:"Psychological",icon:Object(t.jsx)(b.a,{}),value:40},{genre:"Thriller",icon:Object(t.jsx)(b.a,{}),value:41},{genre:"Seinen",icon:Object(t.jsx)(b.a,{}),value:42},{genre:"Josei",icon:Object(t.jsx)(b.a,{}),value:43}],m=function(e){Object(l.a)(a,e);var n=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=n.call(this)).state={animeList:[""],i:0,page:1,showGenre:!0,genre:1},e.loadanimePage=e.loadanimePage.bind(Object(d.a)(e)),e.nextRandomAnime=e.nextRandomAnime.bind(Object(d.a)(e)),e.getGenre=e.getGenre.bind(Object(d.a)(e)),e.changePage=e.changePage.bind(Object(d.a)(e)),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.loadanimePage()}},{key:"loadanimePage",value:function(){var e=this;fetch("https://jikan1.p.rapidapi.com/genre/anime/"+this.state.genre+"/"+this.state.page,{method:"GET",headers:{"x-rapidapi-key":"542c3ca589msh41c910fdd2fb3e6p174e03jsnb59816e25977","x-rapidapi-host":"jikan1.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(n){e.setState({animeList:n.anime,isLoading:!0}),console.log(e.state.animeList[e.state.i])}))}},{key:"nextRandomAnime",value:function(){this.setState({i:this.state.i+1})}},{key:"getGenre",value:function(e){var n=this;this.setState({genre:e,isLoading:!1}),setTimeout((function(){n.loadanimePage()}),100)}},{key:"toggleGenre",value:function(){this.setState((function(e){return{showGenre:!e.showGenre}}))}},{key:"changePage",value:function(){this.setState({page:this.state.page+1}),this.loadanimePage()}},{key:"render",value:function(){var e=this,n=this.state,a=n.isLoading,i=n.animeList,c=n.i;return a?Object(t.jsx)("div",{className:"App",children:Object(t.jsxs)("div",{className:"MainPage",children:[Object(t.jsx)("div",{className:"Sidebar",children:Object(t.jsxs)("ul",{className:"SidebarList",children:[Object(t.jsx)("h1",{className:"row",style:{color:"black"},onClick:function(){window.location.pathname=""},children:"Home"}),Object(t.jsx)("h2",{className:"row",style:{color:"black"},onClick:function(){window.location.pathname="/completedanime"},children:"Watched"}),Object(t.jsx)("h2",{className:"row",style:{color:"black"},onClick:function(){e.toggleGenre()},children:"Genre"}),this.state.showGenre?h.map((function(n,a){return Object(t.jsx)("li",{classname:"row",id:n.value===e.state.genre?"active":"",onClick:function(){e.getGenre(n.value)},children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{id:"icon",children:n.icon}),Object(t.jsx)("div",{id:"genre",children:n.genre})]})},a)})):null]})}),Object(t.jsxs)("div",{className:"Randomizer",children:[Object(t.jsxs)("div",{className:"Buttons",children:[Object(t.jsx)("button",{onClick:this.changePage,children:"Change Anime Page"}),Object(t.jsx)("button",{onClick:c<99?this.nextRandomAnime:this.changePage,children:"Next Random Anime"})]}),Object(t.jsxs)("div",{className:"Container",children:[Object(t.jsx)("div",{className:"Image",children:Object(t.jsx)("img",{src:i[c].image_url})}),Object(t.jsxs)("div",{className:"Info",children:[Object(t.jsx)("h1",{children:Object(t.jsxs)("a",{href:i[c].url,target:"_blank",children:[" ",i[c].title," "]})}),Object(t.jsxs)("h3",{children:["Year: ",i[c].airing_start[0],i[c].airing_start[1],i[c].airing_start[2],i[c].airing_start[3]]}),Object(t.jsxs)("h3",{children:["Episodes: ",i[c].episodes]}),Object(t.jsxs)("h3",{children:["Synopsis: ",Object(t.jsx)("p",{children:i[c].synopsis})]})]})]})]})]})}):Object(t.jsx)("div",{children:"Loading..."})}}]),a}(c.a.Component),O=a(19),x=a(4),v=function(e){Object(l.a)(a,e);var n=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=n.call(this)).state={animeList:[""],isLoading:!0,animePage:1},e.loadanimePage=e.loadanimePage.bind(Object(d.a)(e)),e.incrementPage=e.incrementPage.bind(Object(d.a)(e)),e.decrementPage=e.decrementPage.bind(Object(d.a)(e)),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.loadanimePage()}},{key:"incrementPage",value:function(){var e=this;this.setState({animePage:this.state.animePage+1}),setTimeout((function(){e.loadanimePage()}),100)}},{key:"decrementPage",value:function(){var e=this;this.setState({animePage:this.state.animePage-1}),setTimeout((function(){e.loadanimePage()}),100)}},{key:"loadanimePage",value:function(){var e=this;this.setState({isLoading:!1}),fetch("https://jikan1.p.rapidapi.com/genre/anime/1/"+this.state.animePage,{method:"GET",headers:{"x-rapidapi-key":"542c3ca589msh41c910fdd2fb3e6p174e03jsnb59816e25977","x-rapidapi-host":"jikan1.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(n){e.setState({animeList:n.anime,isLoading:!0}),console.log(e.state.animeList)}))}},{key:"render",value:function(){var e=this.state,n=e.isLoading;e.animeList;return n?Object(t.jsx)("div",{className:"App",children:Object(t.jsx)("div",{className:"MainPage",children:Object(t.jsx)("div",{className:"Sidebar",children:Object(t.jsxs)("ul",{className:"SidebarList",children:[Object(t.jsx)("h1",{className:"row",style:{color:"black"},onClick:function(){window.location.pathname=""},children:"Home"}),Object(t.jsx)("h2",{className:"row",style:{color:"black"},onClick:function(){window.location.pathname="/completedanime"},children:"Watched"})]})})})}):Object(t.jsx)("div",{children:"Loading..."})}}]),a}(c.a.Component),p=function(e){Object(l.a)(a,e);var n=Object(u.a)(a);function a(){return Object(r.a)(this,a),n.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(t.jsx)(O.a,{children:Object(t.jsxs)(x.c,{children:[Object(t.jsx)(x.a,{exact:!0,path:"/",component:m}),Object(t.jsx)(x.a,{exact:!0,path:"/completedanime",component:v})]})})}}]),a}(c.a.Component),f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(n){var a=n.getCLS,t=n.getFID,i=n.getFCP,c=n.getLCP,s=n.getTTFB;a(e),t(e),i(e),c(e),s(e)}))};o.a.render(Object(t.jsx)(O.b,{children:Object(t.jsx)(p,{})}),document.getElementById("root")),f()}},[[42,1,2]]]);
//# sourceMappingURL=main.8d940d38.chunk.js.map