(this["webpackJsonpinstall-test"]=this["webpackJsonpinstall-test"]||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(15),i=n.n(r),l=(n(24),n(5)),c=n(9),s=n(6);var u=n(16),d=n.n(u);var p=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("input",{id:"intro",onChange:function(e){return r(e.target.value)},type:"number"}),o.a.createElement("p",null,n)))};var m=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("input",{id:"intro",onChange:function(e){return r(e.target.value)},type:"number"}),o.a.createElement("button",{onClick:function(e){return r(null)}},"Clear"),o.a.createElement("p",null,n)))};n(25);var f=function(){var e=function(){var e=!1,t=Object(a.useState)(null),n=Object(l.a)(t,2),o=n[0],r=n[1],i=Object(a.useState)(!1),c=Object(l.a)(i,2),s=c[0],u=c[1];return Object(a.useEffect)((function(){var t=function(t){t.preventDefault(),e||(r(t),u(!0))},n=function(){u(!1)};return window.addEventListener("beforeinstallprompt",t),window.addEventListener("appinstalled",n),function(){window.removeEventListener("beforeinstallprompt",t),window.removeEventListener("appinstalled",n)}}),[]),[s,u,function(t){return o?(o.prompt(),o.userChoice.then((function(t){"accepted"===t.outcome&&(e=!0,u(!1))})),Promise.resolve()):Promise.reject(new Error('Tried installing before browser sent "beforeinstallprompt" event'))}]}(),t=Object(l.a)(e,3),n=t[0],r=t[1],i=t[2];return o.a.createElement(c.a,null,o.a.createElement("nav",null,o.a.createElement("div",{hidden:!n},o.a.createElement("button",{onClick:function(){r(!1)}},"Close"),"Hello! Wanna add to homescreen?",o.a.createElement("button",{onClick:i},"Add to homescreen")),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.b,{to:"/install-test/one"},"One")),o.a.createElement("li",null,o.a.createElement(c.b,{to:"/install-test/two"},"Two")))),o.a.createElement(s.c,null,o.a.createElement(s.a,{path:"/install-test/one",component:p}),o.a.createElement(s.a,{path:"/install-test/two",component:m}),o.a.createElement(s.a,{path:"/install-test"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"})))))},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(f,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/install-test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/install-test","/service-worker.js");v?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(t,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.01d3e60a.chunk.js.map