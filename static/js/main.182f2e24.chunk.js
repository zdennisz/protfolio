(this.webpackJsonpprotfolio=this.webpackJsonpprotfolio||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(3),i=n.n(a),o=(n(9),n(4)),r=(n(10),n(0)),l=function(e){var t=e.val;return Object(r.jsx)("li",{children:t})},j=function(e){var t,n,c=e.item,s="basic_button";return c.hasOwnProperty("github")?(s+=" github_button",t=c.github,n="Github"):c.hasOwnProperty("website")?(s+=" website_button",t=c.website,n="Website"):c.hasOwnProperty("googleplay")&&(s+=" googleplay_button",t=c.googleplay,n="Google Play"),""===t?Object(r.jsx)(r.Fragment,{}):Object(r.jsx)("li",{className:"li_single_item",children:Object(r.jsx)("a",{href:t,className:s,children:n})})},b=function(e){var t=e.card,n=t.description.map((function(e,t){return Object(r.jsx)(l,{val:e},t.toString())})),c=t.buttons.map((function(e,t){return Object(r.jsx)(j,{item:e},t.toString())}));return Object(r.jsxs)("div",{className:"card_container",children:[Object(r.jsx)("div",{className:"image_container",children:Object(r.jsx)("img",{className:"image",src:t.image,alt:"Card"})}),Object(r.jsx)("div",{className:"title_top",children:t.title}),Object(r.jsx)("ul",{className:"card_content",children:n}),Object(r.jsx)("ul",{className:"links",children:c})]})},u=(n(12),function(e){var t=e.projects.map((function(e,t){return Object(r.jsx)("li",{children:Object(r.jsx)(b,{card:e})},t.toString())}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"header_content",children:[Object(r.jsx)("hr",{className:"left_top_line"}),Object(r.jsx)("div",{className:"title_top",children:"Projects for Fun"})," ",Object(r.jsx)("hr",{className:"right_top_line"})]}),Object(r.jsx)("ul",{className:"card_list",children:t})]})}),d=function(e){return Object(r.jsxs)("div",{className:"NavBarContainer",children:[Object(r.jsx)("div",{className:"ButtonHome",onClick:function(){e&&e.navHome()}}),Object(r.jsx)("div",{className:"Buttonprojects",onClick:function(){e&&e.navProjects()}}),Object(r.jsx)("div",{className:"ButtonContact",onClick:function(){e&&e.navContact()}})]})},m=(n(13),function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"intro",children:[e.isMobile?Object(r.jsx)(d,{}):"",Object(r.jsx)("div",{className:"intro_title",children:"Hi there! My name is Dennis, I'm a software engineer who is always pushing the boundries of preformance! I'm passionate about challenging my coding skills as well as my gym workouts & never afraid to push my limits."})]})})}),h=(n(14),function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"footer_content",children:[Object(r.jsx)("hr",{className:"left_top_line"}),Object(r.jsx)("div",{className:"title_top",children:"Keep In Touch"})," ",Object(r.jsx)("hr",{className:"right_top_line"})]}),Object(r.jsx)("div",{className:"outro",children:Object(r.jsxs)("div",{className:"content_container_outro",children:[Object(r.jsx)("div",{className:"content_outro",children:Object(r.jsxs)("div",{className:"content_container",children:[Object(r.jsxs)("div",{className:"end_message",children:["Thanks for reaching out!",Object(r.jsx)("br",{})," Feel free to leave a message or contact me via"]}),Object(r.jsxs)("div",{className:"buttons_container",children:[Object(r.jsx)("a",{href:"mailto:zdennisz@gmail.com",className:"button button_email"}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/dennis-zabolotny-62802a149/",className:"button button_linkenin"}),Object(r.jsx)("a",{href:"https://github.com/zdennisz",className:"button button_git"})]})]})}),Object(r.jsx)("div",{className:"portrait"})]})})]})}),O=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){localStorage.getItem("cachedData")?s(JSON.parse(localStorage.getItem("cachedData"))):fetch("https://protfolio-36872-default-rtdb.europe-west1.firebasedatabase.app/.json").then((function(e){return e.json()})).then((function(e){s(e),localStorage.setItem("cachedData",JSON.stringify(e))}),(function(e){console.log("unable to reach server due to"+e.toString())}))}),[]),Object(r.jsxs)("div",{className:"page_container",children:[Object(r.jsx)(m,{}),Object(r.jsx)(u,{projects:n}),Object(r.jsx)(h,{})]})};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.182f2e24.chunk.js.map