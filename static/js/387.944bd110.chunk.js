"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(n,t,r){r.r(t),r.d(t,{default:function(){return m}});var e,a,c=r(861),u=r(439),i=r(687),s=r.n(i),o=r(791),p=r(689),f=r(545),l=r(73),d=r(168),h=r(686),v=h.Z.ul(e||(e=(0,d.Z)(["\n  margin-top: 12px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  list-style: none;\n"]))),x=h.Z.li(a||(a=(0,d.Z)(["\n  min-width: 182px;\n  font-size: 14px;\n  padding: 6px;\n  max-width: min-content;\n  background-color: #DCDCDC;\n  border-radius: 14px;\n\n  :not(:last-child) {\n    margin-bottom: 6px;\n  }\n\n  img {\n    max-width: 182px;\n    border-radius: 8px;\n  }\n  span {\n    color: #ff8533;\n  }\n"]))),g=r(184),m=function(){var n=(0,p.UO)().movieId,t=(0,o.useState)([]),r=(0,u.Z)(t,2),e=r[0],a=r[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,c.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.Eb)(n);case 3:r=t.sent,a(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(v,{children:e.map((function(n){var t=n.id,r=n.profile_path,e=n.original_name,a=n.character;return(0,g.jsxs)(x,{children:[(0,g.jsx)("img",{src:"".concat(r?l.f+r:l.l+"?text="+e),alt:e}),(0,g.jsxs)("p",{children:[(0,g.jsx)("span",{children:" Actor:"})," ",e]}),(0,g.jsxs)("p",{children:[(0,g.jsx)("span",{children:"Character:"})," ",a]})]},t)}))})})}},545:function(n,t,r){r.d(t,{Df:function(){return s},Eb:function(){return f},Hu:function(){return l},Pg:function(){return p},Ph:function(){return o}});var e=r(861),a=r(687),c=r.n(a),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="c609255ffcb20c3303eb6de86439bdeb",s=function(){var n=(0,e.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/week?api_key=".concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},73:function(n,t,r){r.d(t,{f:function(){return e},l:function(){return a}});var e="https://image.tmdb.org/t/p/w500/",a="https://via.placeholder.com/182x273"}}]);
//# sourceMappingURL=387.944bd110.chunk.js.map