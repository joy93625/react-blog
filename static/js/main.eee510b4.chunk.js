(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{29:function(n,t,e){},36:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),i=e(20),o=e.n(i),a=e(5),u=e(2),s=(e(29),e(3)),j=e(10),b=e(4),d=Object(c.createContext)(null),f="token",l=function(n){localStorage.setItem(f,n)},x=function(){return localStorage.getItem(f)};function p(){var n=Object(u.a)(["\n  height: 64px;\n  width: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n\n  ","\n"]);return p=function(){return n},n}function O(){var n=Object(u.a)(["\n  font-size: 28px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n"]);return O=function(){return n},n}function h(){var n=Object(u.a)(["\n  display: flex;\n\n  "," {\n    margin-left: 64px;\n  }\n"]);return h=function(){return n},n}function v(){var n=Object(u.a)(["\n  display: flex;\n"]);return v=function(){return n},n}function g(){var n=Object(u.a)(["\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  border-bottom: 1px solid rgb(0, 0, 0, 0.2);\n  padding: 0 32px;\n  align-items: center;\n  box-sizing: border-box;\n"]);return g=function(){return n},n}var m=s.a.div(g()),w=s.a.div(v()),y=s.a.div(h(),w),S=Object(s.a)(j.b)(O()),k=Object(s.a)(j.b)(p(),(function(n){return n.$active&&"\n    background: rgba(0, 0, 0, 0.2);\n  "}));function C(){var n=Object(b.g)(),t=Object(b.f)(),e=Object(c.useContext)(d),i=e.user,o=e.setUser;return Object(r.jsxs)(m,{children:[Object(r.jsxs)(y,{children:[Object(r.jsx)(S,{to:"/",children:"\u90e8\u843d\u683c"}),Object(r.jsxs)(w,{children:[Object(r.jsx)(k,{to:"/",$active:"/"===n.pathname,children:"\u9996\u9801"}),i&&Object(r.jsx)(k,{to:"/new-post",$active:"/new-post"===n.pathname,children:"\u767c\u5e03\u6587\u7ae0"})]})]}),Object(r.jsxs)(w,{children:[!i&&Object(r.jsx)(k,{to:"/login",$active:"/login"===n.pathname,children:"\u767b\u5165"}),!i&&Object(r.jsx)(k,{to:"/register",$active:"/register"===n.pathname,children:"\u8a3b\u518a"}),i&&Object(r.jsx)(k,{onClick:function(){l(""),o(null),"/"!==n.pathname&&t.push("/")},children:"\u767b\u51fa"})]})]})}var z="https://student-json-api.lidemy.me",$=function(){var n=x();return fetch("".concat(z,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))};function J(){var n=Object(u.a)(["\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  width: 36px;\n  height: 36px;\n  border: solid 1px #3333332b;\n  color: #333;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n  ","\n"]);return J=function(){return n},n}function P(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n"]);return P=function(){return n},n}function E(){var n=Object(u.a)(["\n  color: rgba(0, 0, 0, 0.8);\n"]);return E=function(){return n},n}function N(){var n=Object(u.a)(["\n  font-size: 24px;\n  cursor: pointer;\n  color: #333;\n  text-decoration: none;\n"]);return N=function(){return n},n}function U(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 16px;\n"]);return U=function(){return n},n}function B(){var n=Object(u.a)(["\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 80px;\n"]);return B=function(){return n},n}var I=s.a.div(B()),L=s.a.div(U()),T=Object(s.a)(j.b)(N()),A=s.a.div(E()),D=s.a.div(P()),_=s.a.div(J(),(function(n){return n.$prev&&"\n      border-radius: 0px;\n      border: none;\n      transition: 0.5s;\n      cursor: pointer;\n      &:hover {\n        background-color: #fff;\n        color: #333;\n        border-bottom: 1px solid #333;\n      }\n    "}));function R(n){var t=n.post;return Object(r.jsxs)(L,{children:[Object(r.jsx)(T,{to:"/posts/".concat(t.id),children:t.title}),Object(r.jsx)(A,{children:new Date(t.createdAt).toLocaleString()})]})}function q(){var n=Object(c.useState)([]),t=Object(a.a)(n,2),e=t[0],i=t[1],o=Object(c.useState)(1),u=Object(a.a)(o,2),s=u[0],j=u[1];return Object(c.useEffect)((function(){(function(n){return fetch("".concat(z,"/posts?_page=").concat(n,"&_limit=5")).then((function(n){return n.json()}))})(s).then((function(n){return i(n)}))}),[s]),Object(r.jsxs)(I,{children:[e.map((function(n){return Object(r.jsx)(R,{post:n},n.id)})),Object(r.jsxs)(D,{children:[1!==s&&Object(r.jsx)(_,{$prev:!0,onClick:function(){j(s-1)},children:"\uff1c"}),Object(r.jsx)(_,{children:s}),5===e.length&&Object(r.jsx)(_,{$prev:!0,onClick:function(){j(s+1)},children:"\uff1e"})]})]})}function F(){var n=Object(u.a)(["\n  color: red;\n"]);return F=function(){return n},n}function G(){var n=Object(u.a)([""]);return G=function(){return n},n}function H(){var n=Object(u.a)(["\n  padding: 8px;\n"]);return H=function(){return n},n}function K(){var n=Object(u.a)(["\n  width: 300px;\n  margin: 0 auto;\n  margin-top: 80px;\n  border: 1px solid #333;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  text-align: center;\n"]);return K=function(){return n},n}var M=s.a.div(K()),Q=s.a.div(H()),V=s.a.button(G()),W=s.a.div(F());function X(){var n=Object(c.useContext)(d).setUser,t=Object(c.useState)(""),e=Object(a.a)(t,2),i=e[0],o=e[1],u=Object(c.useState)(""),s=Object(a.a)(u,2),j=s[0],f=s[1],x=Object(c.useState)(),p=Object(a.a)(x,2),O=p[0],h=p[1],v=Object(b.f)();return Object(r.jsxs)(M,{children:[O&&Object(r.jsx)(W,{children:O}),Object(r.jsxs)("form",{onSubmit:function(t){h(null),function(n,t){return fetch("".concat(z,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,password:t})}).then((function(n){return n.json()}))}(i,j).then((function(t){if(0===t.ok)return h(t.message);l(t.token),$().then((function(t){if(1!==t.ok)return l(null),h(t.toString());n(t.data),v.push("/")}))}))},children:[Object(r.jsxs)(Q,{children:["username:",Object(r.jsx)("input",{value:i,onChange:function(n){return o(n.target.value)}})]}),Object(r.jsxs)(Q,{children:["password:",Object(r.jsx)("input",{type:"password",value:j,onChange:function(n){return f(n.target.value)}})]}),Object(r.jsx)(V,{children:"\u767b\u5165"})]})]})}function Y(){var n=Object(u.a)([""]);return Y=function(){return n},n}function Z(){var n=Object(u.a)(["\n  margin: 20px 0;\n  color: rgba(0, 0, 0, 0.5);\n"]);return Z=function(){return n},n}function nn(){var n=Object(u.a)(["\n  font-size: 24px;\n"]);return nn=function(){return n},n}function tn(){var n=Object(u.a)(["\n  padding: 16px;\n  position: relative;\n"]);return tn=function(){return n},n}function en(){var n=Object(u.a)(["\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 80px;\n  border: 1px solid #333;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n"]);return en=function(){return n},n}var rn=s.a.div(en()),cn=s.a.div(tn()),on=s.a.div(nn()),an=s.a.div(Z()),un=s.a.div(Y());function sn(n){var t=n.post;return Object(r.jsxs)(cn,{children:[Object(r.jsx)(on,{children:t.title}),Object(r.jsx)(an,{children:new Date(t.createdAt).toLocaleString()}),Object(r.jsx)(un,{children:t.body})]})}function jn(){var n=Object(c.useState)([]),t=Object(a.a)(n,2),e=t[0],i=t[1],o=Object(b.h)().id;return Object(c.useEffect)((function(){(function(n){return fetch("".concat(z,"/posts/").concat(n)).then((function(n){return n.json()}))})(o).then((function(n){return i(n)}))}),[o]),Object(r.jsx)(rn,{children:Object(r.jsx)(sn,{post:e})})}function bn(){var n=Object(u.a)(["\n  color: red;\n"]);return bn=function(){return n},n}function dn(){var n=Object(u.a)(["\n  margin-top: 16px;\n  text-align: center;\n"]);return dn=function(){return n},n}function fn(){var n=Object(u.a)(["\n  width: 100%;\n  padding: 8px;\n"]);return fn=function(){return n},n}function ln(){var n=Object(u.a)(["\n  width: 100%;\n  padding: 8px;\n  font-size: 18px;\n"]);return ln=function(){return n},n}function xn(){var n=Object(u.a)(["\n  margin: 16px;\n"]);return xn=function(){return n},n}function pn(){var n=Object(u.a)(["\n  margin: 10px 0px;\n  font-size: 20px;\n"]);return pn=function(){return n},n}function On(){var n=Object(u.a)(["\n  width: 800px;\n  margin: 0 auto;\n  margin-top: 80px;\n  border: 1px solid #333;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n  padding: 16px;\n"]);return On=function(){return n},n}var hn=s.a.div(On()),vn=s.a.div(pn()),gn=s.a.div(xn()),mn=s.a.input(ln()),wn=s.a.textarea(fn()),yn=s.a.div(dn()),Sn=s.a.div(bn());function kn(){var n=Object(c.useState)(""),t=Object(a.a)(n,2),e=t[0],i=t[1],o=Object(c.useState)(""),u=Object(a.a)(o,2),s=u[0],j=u[1],d=Object(c.useState)(),f=Object(a.a)(d,2),l=f[0],p=f[1],O=Object(b.f)();return Object(r.jsxs)(hn,{children:[l&&Object(r.jsx)(Sn,{children:l}),Object(r.jsxs)("form",{onSubmit:function(n){var t=x();if(p(null),t){if(!e||!s)return p("Please fill the empty area.");(function(n,t){var e=x();return fetch("".concat(z,"/posts"),{method:"POST",headers:{authorization:"Bearer ".concat(e),"content-type":"application/json"},body:JSON.stringify({title:n,body:t})}).then((function(n){return n.json()}))})(e,s).then((function(n){console.log(n)})),O.push("/")}},children:[Object(r.jsxs)(gn,{children:[Object(r.jsx)(vn,{children:"\u6587\u7ae0\u6a19\u984c"}),Object(r.jsx)(mn,{value:e,onChange:function(n){return i(n.target.value)},placeholder:"\u6a19\u984c"})]}),Object(r.jsxs)(gn,{children:[Object(r.jsx)(vn,{children:"\u6587\u7ae0\u5167\u5bb9"}),Object(r.jsx)(wn,{rows:14,value:s,onChange:function(n){return j(n.target.value)}})]}),Object(r.jsx)(yn,{children:Object(r.jsx)("button",{children:"\u767c\u5e03"})})]})]})}function Cn(){var n=Object(u.a)(["\n  color: red;\n"]);return Cn=function(){return n},n}function zn(){var n=Object(u.a)([""]);return zn=function(){return n},n}function $n(){var n=Object(u.a)(["\n  padding: 8px;\n"]);return $n=function(){return n},n}function Jn(){var n=Object(u.a)(["\n  width: 300px;\n  margin: 0 auto;\n  margin-top: 80px;\n  border: 1px solid #333;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  text-align: center;\n"]);return Jn=function(){return n},n}var Pn=s.a.div(Jn()),En=s.a.div($n()),Nn=s.a.button(zn()),Un=s.a.div(Cn());function Bn(){var n=Object(c.useContext)(d).setUser,t=Object(c.useState)(""),e=Object(a.a)(t,2),i=e[0],o=e[1],u=Object(c.useState)(""),s=Object(a.a)(u,2),j=s[0],f=s[1],x=Object(c.useState)(""),p=Object(a.a)(x,2),O=p[0],h=p[1],v=Object(c.useState)(),g=Object(a.a)(v,2),m=g[0],w=g[1],y=Object(b.f)();return Object(r.jsxs)(Pn,{children:[m&&Object(r.jsx)(Un,{children:m}),Object(r.jsxs)("form",{onSubmit:function(t){if(w(null),!j||!O||!i)return w("\u8acb\u586b\u5beb\u5b8c\u6574\u8cc7\u6599");(function(n,t,e){return fetch("".concat(z,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:n,username:t,password:e})}).then((function(n){return n.json()}))})(i,j,O).then((function(t){if(0===t.ok)return w(t.message);l(t.token),$().then((function(t){if(1!==t.ok)return l(null),w(t.toString());n(t.data),y.push("/")}))}))},children:[Object(r.jsxs)(En,{children:["nickname:",Object(r.jsx)("input",{value:i,onChange:function(n){return o(n.target.value)}})]}),Object(r.jsxs)(En,{children:["username:",Object(r.jsx)("input",{value:j,onChange:function(n){return f(n.target.value)}})]}),Object(r.jsxs)(En,{children:["password:",Object(r.jsx)("input",{type:"password",value:O,onChange:function(n){return h(n.target.value)}})]}),Object(r.jsx)(Nn,{children:"\u8a3b\u518a"})]})]})}function In(){var n=Object(u.a)([""]);return In=function(){return n},n}var Ln=s.a.div(In());function Tn(){var n=Object(c.useState)(null),t=Object(a.a)(n,2),e=t[0],i=t[1],o=x();return Object(c.useEffect)((function(){o&&$().then((function(n){n.ok&&i(n.data)}))}),[]),Object(r.jsx)(d.Provider,{value:{user:e,setUser:i},children:Object(r.jsx)(Ln,{children:Object(r.jsxs)(j.a,{children:[Object(r.jsx)(C,{}),Object(r.jsxs)(b.c,{children:[Object(r.jsx)(b.a,{exact:!0,path:"/",children:Object(r.jsx)(q,{})}),Object(r.jsx)(b.a,{path:"/posts/:id",children:Object(r.jsx)(jn,{})}),Object(r.jsx)(b.a,{path:"/Login",children:Object(r.jsx)(X,{})}),Object(r.jsx)(b.a,{path:"/New-post",children:Object(r.jsx)(kn,{})}),Object(r.jsx)(b.a,{path:"/Register",children:Object(r.jsx)(Bn,{})})]})]})})})}o.a.render(Object(r.jsx)(Tn,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.eee510b4.chunk.js.map