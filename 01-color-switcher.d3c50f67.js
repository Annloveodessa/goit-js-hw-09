!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),a(!0,!1)})),e.addEventListener("click",(function(){clearInterval(n),a(!1,!0)})),e.disabled=!0;var n=null;function a(n,a){t.disabled=n,e.disabled=a}}();
//# sourceMappingURL=01-color-switcher.d3c50f67.js.map