!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o={send:!1,typeSeptic:1,diameter:"1.4",numberRings:1,diameterTwo:0,numberRingsTwo:0,bottom:!0,distance:0,calcResult:11e3,clear:function(){this.send=!1,this.typeSeptic=1,this.diameter="1.4",this.numberRings=1,this.diameterTwo=0,this.numberRingsTwo=0,this.bottom=!0,this.distance=0,this.calcResult=11e3}},c={message:""},r=function(e){e.style.display="none",document.body.style.overflow="",function(e){e.querySelectorAll("input").forEach((function(e){"button"!==e.type&&(e.value="")}))}(e),Object.keys(o).indexOf("send")<0&&o.clear(),c.message=""},s=function(e){var t=document.querySelector(e);t.style.display="block",document.body.style.overflow="hidden",t.addEventListener("click",(function(e){var n=e.target;n.classList.contains("popup-close")||n.classList.contains("close-popup")?(e.preventDefault(),r(t)):(n=n.closest(".popup-content"))||r(t)}))},i=function(){var e=document.querySelector(".sentence .row"),t=document.querySelector(".add-sentence-btn");t.addEventListener("click",(function(){var n=!0,o=!1,c=void 0;try{for(var r,s=e.children[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){var i=r.value;i.classList.contains("visible-sm-block")&&i.classList.remove("visible-sm-block"),i.classList.contains("hidden")&&i.classList.remove("hidden"),t.style.display="none"}}catch(e){o=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw c}}}))},a=function(){document.body.addEventListener("click",(function(e){var t=e.target;!t.closest("#accordion")&&!t.closest("#accordion-two")||!t.closest(".panel-heading")&&"a"!==t.tagName.toLowerCase()&&"a"!==t.parentElement.tagName.toLowerCase()||function(e){var t=document.querySelector(e),n=t.closest(".panel-group"),o=t.closest(".panel-default"),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t?e.children[1].classList.contains("in")||e.children[1].classList.add("in"):e.children[1].classList.contains("in")&&e.children[1].classList.remove("in")},r=!0,s=!1,i=void 0;try{for(var a,l=n.children[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var u=a.value;u===o?c(u,"in"):c(u)}}catch(e){s=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(s)throw i}}}(t.closest('[href^="#"]')?t.closest('[href^="#"]').href.replace(/[^#]+(.*)/,"$1"):t.querySelector("a").href.replace(/[^#]+(.*)/,"$1"))}))},l=function(){var e={cost:[1e4,15e3],diameter:{1.4:[0,0],2:[.2,.2]},numberRings:{1:[0,0],2:[.3,.3],3:[.5,.5]},bottom:[1e3,2e3]},t=document.getElementById("accordion"),n=document.getElementById("diameter"),o=document.getElementById("numberRings"),c=document.getElementById("diameterTwo"),r=document.getElementById("numberRingsTwo"),s=document.getElementById("calc-result"),i=document.getElementById("myonoffswitch"),a=document.getElementById("myonoffswitch-two"),l=function(){return s.value=(t=e.cost[+!i.checked])+t*e.diameter[n.value][0]+t*e.numberRings[o.value][0]+t*e.diameter[c.value][1]*!i.checked+t*e.numberRings[r.value][1]*!i.checked+e.bottom[+!i.checked]*a.checked;var t};t.addEventListener("click",(function(e){var t=e.target;(t.classList.contains("onoffswitch-inner")||t.classList.contains("onoffswitch-switch"))&&(t.parentElement.previousElementSibling.checked=!t.parentElement.previousElementSibling.checked,"myonoffswitch"===t.parentElement.previousElementSibling.id&&(t.parentElement.previousElementSibling.checked?document.getElementById("twoTank").style.display="none":document.getElementById("twoTank").style.display="block")),l()}))},u=function(){document.addEventListener("submit",(function(e){e.preventDefault();var t,n=e.target,i=function(e){var t={error:{message:"Приносим извинения!<br />При отправке Вашего сообщения возникла ошибка.<br />Попробуйте позже или позвоните нам.",img:"./img/status/cancel.svg"},success:{message:"Спасибо!<br />Мы скоро с вами свяжемся!",img:"./img/status/mark.svg"}},n=document.getElementById("imgStatus"),o=document.getElementById("pStatus");Object.keys(t).indexOf(e)>=0&&(n.src=t[e].img,o.innerHTML=t[e].message,s(".popup-status"))};if(!n.classList.contains("director-form")){var a=o.send?(delete o.send,o):""!==c.message?c:{};new FormData(n).forEach((function(e,t){return a[t]=e})),i("load"),(t=a,fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).then((function(e){if(200!==e.status)throw new Error("Status network ".concat(e.status));return i("success"),e.json()})).then((function(e){})).catch((function(e){i("error"),console.error(e)})),n.closest(".popup")&&r(n.closest(".popup"))}}))},d=function(e){var t=e.keyCode,n=e.target,o="+7 (___) ___-__-__",c=o.replace(/\D/g,""),r=n.value.replace(/\D/g,""),s=0,i=o.replace(/[_\d]/g,(function(e){return s<r.length?r.charAt(s++)||c.charAt(s):e}));-1!=(s=i.indexOf("_"))&&(i=i.slice(0,s));var a=o.substr(0,n.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(n.value)||n.value.length<5||t>47&&t<58)&&(n.value=i),"blur"==e.type&&n.value.length<5&&(n.value="")},m=function(){var e=document.querySelectorAll(".phone-user");document.body.addEventListener("input",(function(e){var t,n=e.target;"user_name"===n.name?(t=n).value=t.value.replace(/[^а-яё ]/gi,""):"user_quest"===n.name?function(e){e.value=e.value.replace(/[^а-яё ,.!?():;+-\d]/gi,"")}(n):"distance"===n.name&&function(e){e.value=e.value.replace(/[^\d]/g,"")}(n)})),e.forEach((function(e){e.addEventListener("input",d),e.addEventListener("focus",d),e.addEventListener("blur",d)}))};(function(){document.body.addEventListener("click",(function(e){var t=e.target;if("submit"!==t.type&&e.preventDefault(),t.closest(".contacts")&&t.classList.contains("call-btn")&&s(".popup-call"),t.classList.contains("discount-btn")&&s(".popup-discount"),t.classList.contains("check-btn")&&s(".popup-check"),t.classList.contains("consultation-btn")){var n=document.querySelector(".director-form input");if(n.value.trim())return c.message=n.value.trim(),s(".popup-consultation"),!1}if(t.classList.contains("construct-btn")&&t.classList.contains("call-btn")){var r=document.getElementById("myonoffswitch").checked,i=document.getElementById("distance").value.trim();o.send=!0,o.typeSeptic=r?1:2,o.diameter=document.getElementById("diameter").value,o.numberRings=document.getElementById("numberRings").value,o.diameterTwo=r?0:document.getElementById("diameterTwo").value,o.numberRingsTwo=r?0:document.getElementById("numberRingsTwo").value,o.bottom=document.getElementById("myonoffswitch-two").checked,o.distance=i||0,o.calcResult=document.getElementById("calc-result").value,s(".popup-discount")}}))})(),i(),a(),l(),u(),m()}]);