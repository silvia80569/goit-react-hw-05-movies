"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{681:function(e,a,s){s.r(a),s.d(a,{default:function(){return f}});var t=s(439),i=s(791),l=s(689),o=s(87),c=s(759),n="MoviesDetailles_container__8IGGE",r="MoviesDetailles_backLink__RO2rE",v="MoviesDetailles_movieTitle__3v4GN",_="MoviesDetailles_movieImage__DD9R2",m="MoviesDetailles_movieOverview__rCbB-",h="MoviesDetailles_releaseDate__5o-82",d="MoviesDetailles_nav__zx-fS",u="MoviesDetailles_navLink__9jRjt",j=s(184),f=function(){var e=(0,l.UO)().movieId,a=(0,i.useState)(null),s=(0,t.Z)(a,2),f=s[0],p=s[1],x=(0,i.useState)(!0),D=(0,t.Z)(x,2),g=D[0],k=D[1];return(0,i.useEffect)((function(){c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=65c8682b0ea793c5f0ab74a2479dcb8c")).then((function(e){console.log("Movie:",e.data),p(e.data),k(!1)})).catch((function(e){console.error("Error fetching movie:",e),k(!1)}))}),[e]),g?(0,j.jsx)("h1",{children:"Loading..."}):(0,j.jsxs)("div",{className:n,children:[(0,j.jsx)(o.rU,{className:r,to:"/movies",children:"Back to movies"}),f?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h1",{className:v,children:f.title}),(0,j.jsx)("img",{className:_,src:"https://image.tmdb.org/t/p/w500".concat(f.poster_path),alt:f.title}),(0,j.jsx)("p",{className:m,children:f.overview}),(0,j.jsxs)("p",{className:h,children:["Release date: ",new Date(f.release_date).toLocaleDateString()]}),(0,j.jsxs)("nav",{className:d,children:[(0,j.jsx)(o.rU,{className:u,to:"cast",children:"Cast"}),(0,j.jsx)(o.rU,{className:u,to:"review",children:"Review"})]}),(0,j.jsx)(l.j3,{})]}):(0,j.jsx)("p",{children:"No movie found!"})]})}}}]);
//# sourceMappingURL=681.2d425c79.chunk.js.map