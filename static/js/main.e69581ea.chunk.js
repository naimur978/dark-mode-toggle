(this["webpackJsonpdark-mode-toggle"]=this["webpackJsonpdark-mode-toggle"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),l=c.n(s),n=c(4),o=c.n(n),d=c(3);c(10),c(11);function i(e){var t=e.toggled,c=e.handleClick;return Object(a.jsxs)("div",{onClick:c,className:"toggle ".concat(t?"night":""),children:[Object(a.jsx)("div",{className:"notch"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"shape sm"}),Object(a.jsx)("div",{className:"shape sm"}),Object(a.jsx)("div",{className:"shape md"}),Object(a.jsx)("div",{className:"shape lg"})]})]})}var r=function(){var e=Object(s.useState)("dark"===localStorage.getItem("theme")),t=Object(d.a)(e,2),c=t[0],n=t[1],o=l.a.useState(!1),r=Object(d.a)(o,2);r[0],r[1];Object(s.useEffect)((function(){document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme"))}),[c]);return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)(i,{toggled:c,handleClick:function(){!1===c?(localStorage.setItem("theme","dark"),n(!0)):(localStorage.setItem("theme","light"),n(!1))}}),Object(a.jsx)("p",{className:"toggleText",children:"Click the button to toggle themes"})]})})};o.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(r,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e69581ea.chunk.js.map