(this["webpackJsonpnews-aggregator-magazine-react"]=this["webpackJsonpnews-aggregator-magazine-react"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),l=n.n(c),i=(n(12),n(2)),u=n(6);function s(e){return e.news.map((function(e){return r.a.createElement("div",{className:"news"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.body))}))}function o(e){var t=e.search,n=Object(a.useState)([]),c=Object(i.a)(n,2),l=c[0],o=c[1],m=Object(a.useState)([]),d=Object(i.a)(m,2),f=d[0],p=d[1];Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts?_limit=50").then((function(e){return e.json()})).then((function(e){return o(e)}))}),[]);var E=l.map((function(e,n){return e.title.includes(t)?r.a.createElement("div",{className:"news_list",key:"news_"+n},r.a.createElement("span",{onClick:function(t){return n=e.id,void p(l.filter((function(e){return e.id===n})));var n}},e.title.slice(0,20))):""}));return r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"newsList"},Object(u.a)(E))," ",r.a.createElement(s,{news:f}))}function m(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Search News...",onChange:function(e){return function(e){c(e.target.value)}(e)}})),r.a.createElement(o,{search:n}))}var d=function(){return r.a.createElement("div",{style:f},r.a.createElement("h2",null,"News Aggregator Magazine"))},f={background:"#333",color:"#fff",textAlign:"center",padding:"25px",borderRadius:"3px",border:"solid #607d8b",height:"100%"};var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(m,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.ef44248e.chunk.js.map