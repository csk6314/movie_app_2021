(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{58:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(29),i=n.n(c),r=n(8),o=n(2),j=n(18),l=n.n(j),u=n(30),d=n(11),m=n(12),b=n(14),h=n(13),p=n(31),v=n.n(p),O=(n(58),n(1));var x=function(e){var t=e.id,n=e.year,s=e.title,a=e.summary,c=e.poster,i=e.genres;return Object(O.jsx)(r.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:s,summary:a,poster:c,genres:i}},children:Object(O.jsxs)("div",{className:"movie",children:[Object(O.jsx)("img",{src:c,alt:s,title:s}),Object(O.jsxs)("div",{className:"movie__data",children:[Object(O.jsx)("h3",{className:"movie__title",children:s}),Object(O.jsx)("h5",{className:"movie__year",children:n}),Object(O.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(O.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(O.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})})},f=(n(65),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.movies,n=e.isLoading;return Object(O.jsx)("section",{className:"container",children:n?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(O.jsx)("div",{className:"movies",children:t.map((function(e){return Object(O.jsx)(x,{title:e.title,id:e.id,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(s.Component));n(66);var y=function(){return Object(O.jsx)("span",{id:"About__text",children:"It is Updated in 2021.09.12 !!"})};n(67);var _=function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(r.b,{to:"/",children:"Home"}),Object(O.jsx)(r.b,{to:"/about",children:"About"})]})},g=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;console.log(t),void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;if(e.state){var t=e.state,n=t.title,s=t.year,a=t.summary;return Object(O.jsxs)("div",{id:"details",children:[Object(O.jsx)("span",{children:n}),Object(O.jsx)("span",{children:s}),Object(O.jsx)("span",{children:a})]})}return null}}]),n}(s.Component),N=function(e){var t=e.location;return console.log(t),Object(O.jsx)("h1",{children:"404 ERROR"})};n(68);var k=function(){return Object(O.jsxs)(r.a,{children:[Object(O.jsx)(_,{}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(O.jsx)(o.a,{path:"/about",component:y}),Object(O.jsx)(o.a,{path:"/movie/:id",component:g}),Object(O.jsx)(o.a,{path:"/",component:N})]})]})};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.b3e1ae4f.chunk.js.map