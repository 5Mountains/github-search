(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(1),r=s.n(c),a=s(6),u=s.n(a),i=(s(12),s.p+"static/media/github.c5a427a2.svg"),o=s(2),l=s.n(o),j=s(3),h=s(4),p=function(){var e=Object(j.a)(l.a.mark((function e(t){var s,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.github.com/search/users?q=").concat(t,"in:user&per_page=100"));case 2:return s=e.sent,e.next=5,s.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=(s(14),function(e){var t=e.users;return Object(n.jsx)("ul",{className:"users__list users",children:t.map((function(e){return Object(n.jsxs)("li",{className:"user__item user",children:[Object(n.jsx)("a",{href:e.html_url,className:"user__link",children:Object(n.jsx)("div",{className:"user__img-container",children:Object(n.jsx)("img",{src:e.avatar_url,alt:"".concat(e.login," user"),className:"user__img"})})}),Object(n.jsx)("p",{className:"user__text",children:e.login})]},e.id)}))})});b.defaultProps={users:[]};s(15);var m=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),s=t[0],r=t[1],a=Object(c.useState)(""),u=Object(h.a)(a,2),i=u[0],o=u[1],m=Object(c.useState)(!1),d=Object(h.a)(m,2),_=d[0],f=d[1];return Object(n.jsxs)("div",{className:"search",children:[Object(n.jsxs)("div",{className:"search__area",children:[Object(n.jsxs)("div",{className:"search__input-container",children:[Object(n.jsx)("input",{type:"text",className:"search__input",placeholder:"search username here...",value:i,onChange:function(e){o(e.target.value),f(!1)}}),_&&Object(n.jsx)("span",{className:"search__error",children:"You should type some username"})]}),Object(n.jsx)("button",{type:"submit",className:"search__button",onClick:function(e){(e.preventDefault(),i)?i&&(function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(i);case 2:t=e.sent,r(t.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),o("")):f(!0)},children:"Search users"})]}),Object(n.jsx)(b,{users:s})]})},d=(s(16),function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{className:"App__header",children:Object(n.jsx)("img",{src:i,className:"App__logo",alt:"logo"})}),Object(n.jsx)(m,{})]})}),_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,18)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),r(e),a(e)}))};u.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(d,{})}),document.getElementById("root")),_()}],[[17,1,2]]]);
//# sourceMappingURL=main.e12b8483.chunk.js.map