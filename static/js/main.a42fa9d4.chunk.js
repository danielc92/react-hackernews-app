(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,n){e.exports=n.p+"static/media/snooping.4627c20d.svg"},139:function(e,t,n){e.exports=n(233)},233:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),s=n(10),i=n(11),u=n(13),l=n(12),p=n(14),m=n(234),h=n(238),d=n(25),f=n(31),y=n(124),b=n.n(y),E=m.a.Header;var v=function(){return r.a.createElement(E,{style:{backgroundColor:"white",position:"fixed",zIndex:1,width:"100%"}},r.a.createElement("div",{className:"logo"}),r.a.createElement(h.a,{mode:"horizontal",defaultSelectedKeys:["topStories"],style:{lineHeight:"64px"}},r.a.createElement(h.a.Item,{key:"logo"},r.a.createElement("img",{src:b.a,style:{maxWidth:"38px"}})),r.a.createElement(h.a.Item,{key:"topStories"},r.a.createElement(f.b,{to:"/top-stories"},"Top Stories")),r.a.createElement(h.a.Item,{key:"newStories"},r.a.createElement(f.b,{to:"/new-stories"},"New Stories")),r.a.createElement(h.a.Item,{key:"bestStories"},r.a.createElement(f.b,{to:"/best-stories"},"Best Stories")),r.a.createElement(h.a.Item,{key:"showStories"},r.a.createElement(f.b,{to:"/show-stories"},"Show Stories")),r.a.createElement(h.a.Item,{key:"askStories"},r.a.createElement(f.b,{to:"/ask-stories"},"Ask Stories")),r.a.createElement(h.a.Item,{key:"jobStories"},r.a.createElement(f.b,{to:"/jobs"},"Jobs")),r.a.createElement(h.a.Item,{key:"github-link"},r.a.createElement("a",{target:"_blank",href:"https://github.com/danielc92/react-hackernews-app"},r.a.createElement(d.a,{type:"github"}),"Source Code"))))},O=m.a.Footer;var S=function(){return r.a.createElement(O,{style:{textAlign:"center",color:"white",backgroundColor:"#001529"}},r.a.createElement("p",null,"Developed by ",r.a.createElement("strong",null,"Daniel Corcoran")),r.a.createElement("p",null,"Built by ",r.a.createElement("strong",null,"React")," and ",r.a.createElement("strong",null,"Ant Design UI")),r.a.createElement("p",null,"Powered by ",r.a.createElement("strong",null,"Hacker News Firebase API")))},j=n(15),I=n(32),g=n(9),w=n.n(g),_=n(21),k=n(135),T=n.n(k).a.create({baseURL:"https://hacker-news.firebaseio.com/"}),C=n(19),x=n(242),F=n(241),H=n(240),M=function(e){var t=(new Date).getTime()/1e3,n=Math.floor((t-e)/60);return n<60?"".concat(n," minutes ago"):"".concat(Math.floor(n/60)," hour(s) ago")},D=n(239);function R(){return r.a.createElement("div",null,r.a.createElement(D.a,{loading:!0,avatar:!0,active:!0,paragraph:{rows:2}}))}var Y=n(235),B=n(236),N=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.id;this.props.fetchCommentItem(e)}},{key:"render",value:function(){var e=this.props.data;if(e)var t=M(e.time);return r.a.createElement(r.a.Fragment,null,e?r.a.createElement(Y.a,{shape:"square",style:{marginBottom:".6rem",border:"1px solid #f3f3f3",padding:".75rem 1.5rem"},avatar:r.a.createElement(B.a,{style:{backgroundColor:"#339DFF"},icon:"user"}),actions:[r.a.createElement("p",null,t)],author:e.by,content:r.a.createElement("p",{className:"help",dangerouslySetInnerHTML:{__html:e.text}})},e.kids?r.a.createElement(W,{kids:e.kids}):null):r.a.createElement(R,null))}}]),t}(a.Component),A={fetchCommentItem:function(e){return function(){var t=Object(_.a)(w.a.mark(function t(n,a){var r;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.get("v0/item/".concat(e,".json"));case 2:r=t.sent,n({type:"FETCH_COMMENT_ITEM",payload:Object(I.a)({},e,r.data)});case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}},J=Object(j.b)(function(e,t){return{data:e.commentItems[t.id]}},A)(N),W=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.kids;return r.a.createElement(r.a.Fragment,null,e.map(function(e){return r.a.createElement(J,{id:e})}))}}]),t}(a.Component),P=x.a.Item,K=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={showComments:!1},n.toggleCommentState=function(){console.log("Changing the comment state"),n.setState({showComments:!n.state.showComments})},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.story,t=e.by,n=e.score,a=e.title,o=e.descendants,c=e.kids,s=e.time,i=e.type,u=e.url,l=e.text;this.props.story;if(s)var p=M(s);return r.a.createElement(r.a.Fragment,null,a?[r.a.createElement(x.a,{title:a},r.a.createElement(P,null,"By: ",t),r.a.createElement(P,{label:"Score"},n),r.a.createElement(P,{label:"Replies"},o),r.a.createElement(P,null,"Created: ",p),r.a.createElement(P,{label:"Type"},r.a.createElement(F.a,{color:"green"},i)),r.a.createElement(P,null,r.a.createElement(H.a,{href:u,target:"_blank"},"Visit Source")),r.a.createElement("div",null,l?r.a.createElement("span",{dangerouslySetInnerHTML:{__html:l}}):null)),c&&!1===this.state.showComments?r.a.createElement("a",{onClick:this.toggleCommentState},"Load comments"):null,this.state.showComments?r.a.createElement(W,{kids:c}):null]:r.a.createElement(R,null))}}]),t}(a.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.id;switch(e.type){case"job":this.props.fetchJobStoryItem(t);case"show":this.props.fetchShowStoryItem(t);case"ask":this.props.fetchAskStoryItem(t);case"new":this.props.fetchNewStoryItem(t);case"best":this.props.fetchBestStoryItem(t);case"top":this.props.fetchTopStoryItem(t);default:return}}},{key:"render",value:function(){var e=this.props.story;return r.a.createElement("div",{style:{border:"1px solid #f3f3f3",padding:"1rem",marginBottom:"1rem"}},e?r.a.createElement(K,{story:e}):null)}}]),t}(a.Component),z={fetchTopStoryItem:function(e){return function(){var t=Object(_.a)(w.a.mark(function t(n,a){var r;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.get("v0/item/".concat(e,".json"));case 2:r=t.sent,n({type:"FETCH_TOP_STORY_ITEM",payload:Object(I.a)({},e,r.data)});case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},fetchNewStoryItem:function(e){return function(){var t=Object(_.a)(w.a.mark(function t(n,a){var r;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.get("v0/item/".concat(e,".json"));case 2:r=t.sent,n({type:"FETCH_NEW_STORY_ITEM",payload:Object(I.a)({},e,r.data)});case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},fetchBestStoryItem:function(e){return function(){var t=Object(_.a)(w.a.mark(function t(n,a){var r;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.get("v0/item/".concat(e,".json"));case 2:r=t.sent,n({type:"FETCH_BEST_STORY_ITEM",payload:Object(I.a)({},e,r.data)});case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},fetchJobStoryItem:function(e){return function(){var t=Object(_.a)(w.a.mark(function t(n,a){var r;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.get("v0/item/".concat(e,".json"));case 2:r=t.sent,n({type:"FETCH_JOB_ITEM",payload:Object(I.a)({},e,r.data)});case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},fetchAskStoryItem:function(e){return function(){var t=Object(_.a)(w.a.mark(function t(n,a){var r;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.get("v0/item/".concat(e,".json"));case 2:r=t.sent,n({type:"FETCH_ASK_STORY_ITEM",payload:Object(I.a)({},e,r.data)});case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},fetchShowStoryItem:function(e){return function(){var t=Object(_.a)(w.a.mark(function t(n,a){var r;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.get("v0/item/".concat(e,".json"));case 2:r=t.sent,n({type:"FETCH_SHOW_STORY_ITEM",payload:Object(I.a)({},e,r.data)});case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}},U=Object(j.b)(function(e,t){var n=t.type,a=t.id;return"new"===n?{story:Object(C.a)({},e.newStoryItems[a])}:"top"===n?{story:Object(C.a)({},e.topStoryItems[a])}:"best"===n?{story:Object(C.a)({},e.bestStoryItems[a])}:"show"===n?{story:Object(C.a)({},e.showStoryItems[a])}:"job"===n?{story:Object(C.a)({},e.jobStoryItems[a])}:"ask"===n?{story:Object(C.a)({},e.askStoryItems[a])}:void 0},z)(L),V=n(237);var X=function(){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(V.a,{size:"large"}))},q=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTopStoryIds()}},{key:"render",value:function(){var e=this.props.topStoryIds,t=e.length>0;return r.a.createElement(r.a.Fragment,null,t?e.map(function(e){return r.a.createElement(U,{type:"top",key:e,id:e})}):r.a.createElement(X,null))}}]),t}(a.Component),G={fetchTopStoryIds:function(){return function(){var e=Object(_.a)(w.a.mark(function e(t,n){var a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("v0/topstories.json");case 2:a=e.sent,t({type:"FETCH_TOP_STORY_IDS",payload:a.data.slice(0,50)});case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()}},Q=Object(j.b)(function(e){return{topStoryIds:e.topStoryIds}},G)(q),Z=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchNewStoryIds()}},{key:"render",value:function(){var e=this.props.newStoryIds,t=e.length>0;return r.a.createElement(r.a.Fragment,null,t?e.map(function(e){return r.a.createElement(U,{type:"new",key:e,id:e})}):r.a.createElement(X,null))}}]),t}(a.Component),$={fetchNewStoryIds:function(){return function(){var e=Object(_.a)(w.a.mark(function e(t,n){var a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("v0/newstories.json");case 2:a=e.sent,t({type:"FETCH_NEW_STORY_IDS",payload:a.data.slice(0,50)});case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()}},ee=Object(j.b)(function(e){return{newStoryIds:e.newStoryIds}},$)(Z),te=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBestStoryIds()}},{key:"render",value:function(){var e=this.props.bestStoryIds,t=e.length>0;return r.a.createElement(r.a.Fragment,null,t?e.map(function(e){return r.a.createElement(U,{type:"best",key:e,id:e})}):r.a.createElement(X,null))}}]),t}(a.Component),ne={fetchBestStoryIds:function(){return function(){var e=Object(_.a)(w.a.mark(function e(t,n){var a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("v0/beststories.json");case 2:a=e.sent,t({type:"FETCH_BEST_STORY_IDS",payload:a.data.slice(0,50)});case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()}},ae=Object(j.b)(function(e){return{bestStoryIds:e.bestStoryIds}},ne)(te),re=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchShowStoryIds()}},{key:"render",value:function(){var e=this.props.showStoryIds,t=e.length>0;return r.a.createElement(r.a.Fragment,null,t?e.map(function(e){return r.a.createElement(U,{type:"show",key:e,id:e})}):r.a.createElement(X,null))}}]),t}(a.Component),oe={fetchShowStoryIds:function(){return function(){var e=Object(_.a)(w.a.mark(function e(t,n){var a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("v0/showstories.json");case 2:a=e.sent,t({type:"FETCH_SHOW_STORY_IDS",payload:a.data.slice(0,50)});case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()}},ce=Object(j.b)(function(e){return{showStoryIds:e.showStoryIds}},oe)(re),se=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchAskStoryIds()}},{key:"render",value:function(){var e=this.props.askStoryIds,t=e.length>0;return r.a.createElement(r.a.Fragment,null,t?e.map(function(e){return r.a.createElement(U,{type:"ask",key:e,id:e})}):r.a.createElement(X,null))}}]),t}(a.Component),ie={fetchAskStoryIds:function(){return function(){var e=Object(_.a)(w.a.mark(function e(t,n){var a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("v0/askstories.json");case 2:a=e.sent,t({type:"FETCH_ASK_STORY_IDS",payload:a.data.slice(0,50)});case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()}},ue=Object(j.b)(function(e){return{askStoryIds:e.askStoryIds}},ie)(se),le=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchJobStoryIds()}},{key:"render",value:function(){var e=this.props.jobStoryIds,t=e.length>0;return r.a.createElement(r.a.Fragment,null,t?e.map(function(e){return r.a.createElement(U,{type:"job",key:e,id:e})}):r.a.createElement(X,null))}}]),t}(a.Component),pe={fetchJobStoryIds:function(){return function(){var e=Object(_.a)(w.a.mark(function e(t,n){var a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("v0/jobstories.json");case 2:a=e.sent,t({type:"FETCH_JOBS_IDS",payload:a.data.slice(0,50)});case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()}},me=Object(j.b)(function(e){return{jobStoryIds:e.jobStoryIds}},pe)(le),he=n(43),de=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a.Content,{style:{padding:"10px",marginTop:64}},r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:380}},r.a.createElement(he.a,{path:"/",exact:!0,component:Q}),r.a.createElement(he.a,{path:"/top-stories",component:Q}),r.a.createElement(he.a,{path:"/new-stories",component:ee}),r.a.createElement(he.a,{path:"/best-stories",component:ae}),r.a.createElement(he.a,{path:"/show-stories",component:ce}),r.a.createElement(he.a,{path:"/ask-stories",component:ue}),r.a.createElement(he.a,{path:"/jobs",component:me})))}}]),t}(a.Component),fe=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{style:{minHeight:"100vh"}},r.a.createElement(v,null),r.a.createElement(de,null),r.a.createElement(S,null))}}]),t}(a.Component),ye=(n(232),n(41)),be=n(137),Ee=Object(ye.c)({topStoryIds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"FETCH_TOP_STORY_IDS":return n;default:return e}},topStoryItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"FETCH_TOP_STORY_ITEM":return Object(C.a)({},e,n);default:return e}},newStoryIds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"FETCH_NEW_STORY_IDS":return n;default:return e}},newStoryItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"FETCH_NEW_STORY_ITEM":return Object(C.a)({},e,n);default:return e}},bestStoryIds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"FETCH_BEST_STORY_IDS":return n;default:return e}},bestStoryItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"FETCH_BEST_STORY_ITEM":return Object(C.a)({},e,n);default:return e}},commentItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"FETCH_COMMENT_ITEM":return Object(C.a)({},e,n);default:return e}},showStoryIds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"FETCH_SHOW_STORY_IDS":return n;default:return e}},showStoryItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"FETCH_SHOW_STORY_ITEM":return Object(C.a)({},e,n);default:return e}},askStoryIds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"FETCH_ASK_STORY_IDS":return n;default:return e}},askStoryItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"FETCH_ASK_STORY_ITEM":return Object(C.a)({},e,n);default:return e}},jobStoryIds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"FETCH_JOBS_IDS":return n;default:return e}},jobStoryItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"FETCH_JOB_ITEM":return Object(C.a)({},e,n);default:return e}}}),ve=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ye.d,Oe=Object(ye.e)(Ee,ve(Object(ye.a)(be.a)));c.a.render(r.a.createElement(j.a,{store:Oe},r.a.createElement(f.a,null,r.a.createElement(fe,null))),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.a42fa9d4.chunk.js.map