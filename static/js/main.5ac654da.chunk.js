(this.webpackJsonpprotfolio=this.webpackJsonpprotfolio||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(3),i=n.n(a),o=(n(9),n(4)),r=(n(10),n(0)),l=function(e){var t=e.card,n=t.description.map((function(e,t){return Object(r.jsx)("li",{children:e},t.toString())})),s=t.buttons.map((function(e,t){var n,s,c="basic_button";return e.hasOwnProperty("github")?(c+=" github_button",n=e.github,s="Github"):e.hasOwnProperty("website")?(c+=" website_button",n=e.website,s="Website"):e.hasOwnProperty("googleplay")&&(c+=" googleplay_button",n=e.googleplay,s="Google Play"),""===n?Object(r.jsx)(r.Fragment,{}):Object(r.jsx)("a",{href:n,className:c,children:s},t.toString())}));return Object(r.jsxs)("div",{className:"card_container",children:[Object(r.jsx)("div",{className:"image_container",children:Object(r.jsx)("img",{className:"image",src:t.image,alt:"Image of Card"})}),Object(r.jsx)("div",{className:"title_top",children:t.title}),Object(r.jsx)("ul",{className:"card_content",children:n}),Object(r.jsx)("div",{className:"links",children:s})]})},j=(n(12),function(e){var t=e.projects.map((function(e,t){return Object(r.jsx)("li",{children:Object(r.jsx)(l,{card:e})},t.toString())}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"header_content",children:[Object(r.jsx)("hr",{className:"left_top_line"}),Object(r.jsx)("div",{className:"title_top",children:"Projects for Fun"})," ",Object(r.jsx)("hr",{className:"right_top_line"})]}),Object(r.jsx)("ul",{className:"card_list",children:t})]})}),b=function(e){return Object(r.jsxs)("div",{className:"NavBarContainer",children:[Object(r.jsx)("div",{className:"ButtonHome",onClick:function(){e&&e.navHome()}}),Object(r.jsx)("div",{className:"Buttonprojects",onClick:function(){e&&e.navProjects()}}),Object(r.jsx)("div",{className:"ButtonContact",onClick:function(){e&&e.navContact()}})]})},d=(n(13),function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"intro",children:[e.isMobile?Object(r.jsx)(b,{}):"",Object(r.jsx)("div",{className:"intro_title",children:"Hi there! My name is Dennis, I'm a software engineer who is always pushing the boundries of preformance! I'm passionate about challenging my coding skills as well as my gym workouts & never afraid to push my limits."})]})})}),u=(n(14),function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"footer_content",children:[Object(r.jsx)("hr",{className:"left_top_line"}),Object(r.jsx)("div",{className:"title_top",children:"Keep In Touch"})," ",Object(r.jsx)("hr",{className:"right_top_line"})]}),Object(r.jsx)("div",{className:"outro",children:Object(r.jsxs)("div",{className:"content_container_outro",children:[Object(r.jsx)("div",{className:"content_outro",children:Object(r.jsxs)("div",{className:"content_container",children:[Object(r.jsxs)("div",{className:"end_message",children:["Thanks for reaching out!",Object(r.jsx)("br",{})," Feel free to leave a message or contact me via"]}),Object(r.jsxs)("div",{className:"buttons_container",children:[Object(r.jsx)("a",{href:"mailto:zdennisz@gmail.com",className:"button button_email"}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/dennis-zabolotny-62802a149/",className:"button button_linkenin"}),Object(r.jsx)("a",{href:"https://github.com/zdennisz",className:"button button_git"})]})]})}),Object(r.jsx)("div",{className:"portrait"})]})})]})}),m=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){localStorage.getItem("cachedData")?c(JSON.parse(localStorage.getItem("cachedData"))):fetch("https://protfolio-36872-default-rtdb.europe-west1.firebasedatabase.app/.json").then((function(e){return e.json()})).then((function(e){c(e),localStorage.setItem("cachedData",JSON.stringify(e))}),(function(e){console.log("unable to reach server due to"+e.toString())}))}),[]),Object(r.jsxs)("div",{className:"page_container",children:[Object(r.jsx)(d,{}),Object(r.jsx)(j,{projects:n}),Object(r.jsx)(u,{})]})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.5ac654da.chunk.js.map