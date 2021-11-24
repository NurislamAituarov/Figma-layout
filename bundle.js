(()=>{"use strict";var n={424:(n,t,e)=>{e.d(t,{Z:()=>s});var i=e(81),o=e.n(i),r=e(645),a=e.n(r)()(o());a.push([n.id,"body {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 18px;\n  color: white;\n  overflow-x: hidden;\n}\nhtml,\nbody {\n  overflow-x: hidden;\n}\n\n/* burger///////////////////// */\n\n.burger {\n  cursor: pointer;\n  width: 30px;\n  position: relative;\n  height: 20px;\n  margin: 10px 0;\n  display: none;\n}\n\n#burger_span {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: rgb(255, 255, 255);\n  transition: 0.3s;\n}\n#burger_span:nth-child(3) {\n  bottom: 0;\n}\n#burger_span:nth-child(2) {\n  top: 45%;\n}\n\n/* media/////////////////////////////s */\n@media (max-width: 850px) {\n  p {\n    font-size: 10px;\n  }\n  h2 {\n    font-size: 20px;\n  }\n  h3 {\n    font-size: 20px;\n  }\n}\n",""]);const s=a},99:(n,t,e)=>{e.d(t,{Z:()=>s});var i=e(81),o=e.n(i),r=e(645),a=e.n(r)()(o());a.push([n.id,".container_blogs {\n  box-sizing: border-box;\n  /* max-width: 1600px; */\n  margin: 0 auto;\n  padding: 0px 13.3%;\n  color: black;\n  text-align: center;\n}\nh3 {\n  font-weight: 500;\n  font-family: Georgia;\n  line-height: 28px;\n}\n.blogs_h2 {\n  margin: 0;\n  margin-bottom: 20px;\n  font-family: Gelasio;\n}\n.blog_title {\n  font-family: Roboto;\n  display: inline-block;\n  max-width: 581px;\n  line-height: 28px;\n  margin-bottom: 5%;\n}\n.blog_items {\n  text-align: start;\n  display: flex;\n  /* align-items: center; */\n  margin-bottom: 12.3%;\n}\n.left_item {\n  max-width: 550px;\n}\n.left_img {\n  width: 100%;\n  height: 397px;\n  border-radius: 10px;\n  transition: 1s;\n}\n.left_img:hover {\n  transform: rotateX(60deg) rotateY(180deg);\n}\n.text_title {\n  display: inline-block;\n  max-width: 470px;\n  line-height: 28px;\n  margin-top: 20px;\n}\n.mail {\n  margin-top: 10px;\n  font-weight: 400;\n  font-size: 20px;\n  opacity: 1;\n}\n/* right */\n.right_item {\n  width: 550px;\n  margin-left: 3%;\n}\n.min_item {\n  display: flex;\n  margin-bottom: 30px;\n}\n.right_img {\n  max-width: 260px;\n  height: 200px;\n  margin-right: 30px;\n  border-radius: 10px;\n  transition: 1s;\n}\n.right_img:hover {\n  transform: rotate(180deg);\n}\n\n/* media */\n\n@media (max-width: 850px) {\n  .blogs_h2 {\n    font-size: 30px;\n    margin: 0;\n  }\n  .left_img {\n    height: 200px;\n  }\n  .right_img {\n    width: 150px;\n    margin-right: 5px;\n    height: 120px;\n  }\n  .min_item {\n    margin-bottom: 10px;\n  }\n  .mail {\n    margin-top: 5px;\n    font-size: 12px;\n  }\n  h3 {\n    margin: 0;\n    /* font-size: 25px; */\n  }\n  .blog_title {\n    margin-bottom: 10px;\n  }\n}\n\n@media (max-width: 650px) {\n  .text_title {\n    margin-top: 0px;\n    line-height: 15px;\n  }\n}\n\n@media (max-width: 550px) {\n  .container_blogs {\n    padding: 5%;\n  }\n  .blog_items {\n    display: block;\n  }\n  .blog_title {\n    line-height: 10px;\n  }\n  .mail {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n  .right_item {\n    margin: 0;\n  }\n  .text_blog {\n    max-width: 150px;\n  }\n}\n\n@media (max-width: 400px) {\n  /* .item {\n    height: 300px;\n  } */\n  .item_img {\n    height: 120px;\n  }\n  .titleh3 {\n    margin: 0;\n  }\n}\n",""]);const s=a},626:(n,t,e)=>{e.d(t,{Z:()=>s});var i=e(81),o=e.n(i),r=e(645),a=e.n(r)()(o());a.push([n.id,"footer {\n  box-sizing: border-box;\n  /* max-width: 1600px; */\n  margin: 0 auto;\n  color: black;\n  background-color: rgba(38, 148, 153, 0.04);\n  padding: 70px 13.3%;\n\n  /* align-items: center; */\n}\n.footer_container {\n  display: flex;\n  justify-content: space-between;\n  max-width: 1110px;\n}\n.footer_title {\n  margin: 0;\n  margin-bottom: 21.5%;\n  font-family: Ribeye;\n  font-weight: 600;\n  letter-spacing: 2px;\n  color: black;\n  opacity: 1;\n  line-height: 36px;\n  font-size: 24px;\n}\n#footer_p {\n  font-weight: 500;\n  color: black;\n  opacity: 1;\n  margin-bottom: 20px;\n}\n\ninput {\n  max-width: 195px;\n  font-size: 16px;\n  margin-right: 67px;\n  padding: 14px 20px;\n  border-radius: 5px;\n  border: 1px solid rgb(219, 219, 219);\n  outline: none;\n}\n.footer_sub {\n  font-family: Roboto;\n  font-weight: 600;\n  letter-spacing: 2px;\n  font-size: 20px;\n  line-height: 30px;\n  margin: 0;\n  margin-bottom: 40px;\n}\n.ikons {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 25px;\n}\n.footer_btn {\n  font-size: 16px;\n  letter-spacing: 1px;\n}\n/* media */\n\n@media (max-width: 850px) {\n  .footer_item {\n    margin-right: 5px;\n  }\n  .footer_title {\n    margin-bottom: 0;\n  }\n  #footer_p {\n    margin-bottom: 5px;\n  }\n  .footer_sub {\n    margin-bottom: 0;\n  }\n  input {\n    padding: 5px;\n    margin-bottom: 5px;\n    font-size: 12px;\n  }\n  .footer_btn {\n    padding: 5px;\n    font-size: 12px;\n  }\n}\n@media (max-width: 550px) {\n  .footer_container {\n    display: block;\n    text-align: center;\n  }\n  input {\n    padding: 10px;\n    margin: 0;\n  }\n  .footer_item {\n    margin-bottom: 10px;\n  }\n  .ikons {\n    margin-top: 10px;\n  }\n}\n",""]);const s=a},816:(n,t,e)=>{e.d(t,{Z:()=>s});var i=e(81),o=e.n(i),r=e(645),a=e.n(r)()(o());a.push([n.id,".container {\n  /* max-width: 1600px; */\n  box-sizing: border-box;\n  margin: 0 auto;\n  padding: 2.23em 13.3%;\n  background-image: url('https://images.wallpaperscraft.ru/image/single/zvezdnoe_nebo_noch_derevya_nochnoj_pejzazh_118760_1920x1080.jpg');\n  background-size: cover;\n  background-position: center;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\na {\n  line-height: 2em;\n  font-size: 1.4em;\n  font-family: Ribeye;\n  text-decoration: none;\n  font-weight: 400;\n  color: white;\n  letter-spacing: 2px;\n}\nul {\n  display: flex;\n  text-decoration: none;\n  margin: 0;\n  transition: 0.5s;\n}\nli {\n  position: relative;\n  transition: 0.5s;\n  font-family: roboto;\n  cursor: pointer;\n  margin-right: 3em;\n  list-style-type: none;\n}\nli:hover {\n  color: #c9453b;\n  transform: scale(1.1);\n}\n.link_contact {\n  background-color: aliceblue;\n  display: none;\n  position: absolute;\n  left: 10px;\n  padding: 10px;\n  width: 150px;\n  border-radius: 5px;\n  box-shadow: 1px 2px 0px 0px rgb(160, 160, 160);\n}\n[href='#1'] {\n  font-size: 15px;\n  display: block;\n  color: rgb(0, 0, 0);\n}\n[href='#1']:hover {\n  color: #c9453b;\n}\n\nbutton {\n  background-color: #c9453b;\n  color: white;\n  font-family: roboto;\n  line-height: 24px;\n  font-size: 16px;\n  border-radius: 0.4em;\n  padding: 14px 36px;\n  cursor: pointer;\n  border: none;\n  transition: 0.5s;\n}\nbutton:hover {\n  background-color: #880900;\n}\n/* section */\n\n#section {\n  max-width: 678px;\n  margin-top: 18%;\n  margin-bottom: 16%;\n}\nh1 {\n  margin: 0;\n  font-weight: 700;\n  font-size: 65px;\n  line-height: 78px;\n  margin-bottom: 30px;\n}\n#title {\n  max-width: 400px;\n  line-height: 28px;\n  color: rgb(251, 251, 251, 0.6);\n  margin-bottom: 40px;\n}\n#button {\n  padding: 18px 46px;\n}\n\n/* media */\n\n@media (max-width: 850px) {\n  ul {\n    padding: 5px;\n    width: max-content;\n  }\n  h1 {\n    font-size: 35px;\n  }\n  li {\n    margin: 5px;\n  }\n  button {\n    padding: 10px;\n  }\n  #button {\n    padding: 10px;\n  }\n}\n@media (max-width: 600px) {\n  .container {\n    padding: 5%;\n  }\n}\n\n@media (max-width: 580px) {\n  .header {\n    display: block;\n    text-align: start;\n  }\n  nav {\n    width: max-content;\n  }\n  #section {\n    margin-top: 70px;\n  }\n  a {\n    line-height: 5px;\n  }\n  h1 {\n    line-height: 40px;\n  }\n  button {\n    padding: 7px 10px;\n  }\n  .link_contact {\n    width: 100px;\n    font-size: 10px;\n    left: -10px;\n    text-align: start;\n    box-shadow: none;\n  }\n  [href='#1'] {\n    display: inline-block;\n    line-height: 20px;\n    box-shadow: none;\n    margin-bottom: 5px;\n  }\n}\n",""]);const s=a},670:(n,t,e)=>{e.d(t,{Z:()=>s});var i=e(81),o=e.n(i),r=e(645),a=e.n(r)()(o());a.push([n.id,"main {\n  /* max-width: 1600px; */\n  box-sizing: border-box;\n  margin: 0 auto;\n  padding: 5% 13.3%;\n  text-align: center;\n  color: black;\n}\nh2 {\n  font-family: Gelasio;\n  font-weight: 500;\n  font-size: 43px;\n  line-height: 60px;\n  margin-bottom: 20px;\n}\nh3 {\n  font-size: 24px;\n  font-weight: 500;\n  font-family: Gelasio;\n  margin-bottom: 10px;\n}\n.titleh3 {\n  margin-top: 30px;\n}\n.item {\n  max-width: 360px;\n  height: 500px;\n  box-shadow: 0px 0px 2px 1px rgb(221, 221, 221, 0.5);\n  border-radius: 10px;\n  overflow: hidden;\n  transition: 2s;\n  margin-right: 2%;\n}\n.item:hover {\n  transform: rotateY(180deg);\n}\n.popular_cart {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.item_img {\n  max-width: 100%;\n  height: 330px;\n}\n.page_title {\n  max-width: 700px;\n  opacity: 0.6;\n  font-family: Roboto;\n  display: inline-block;\n  margin: 20px;\n  margin-top: 0;\n  margin-bottom: 50px;\n}\n#p {\n  display: inline-block;\n  max-width: 300px;\n  opacity: 0.6;\n  font-family: Roboto;\n  line-height: 28px;\n}\n/* media */\n\n@media (max-width: 850px) {\n  h2 {\n    font-size: 30px;\n  }\n  h3 {\n    font-size: 20px;\n  }\n  .item_img {\n    height: 150px;\n  }\n  .item {\n    height: 350px;\n  }\n}\n@media (max-width: 600px) {\n  main {\n    padding: 5%;\n  }\n  .item {\n    height: 255px;\n  }\n  #p {\n    line-height: 15px;\n  }\n  .page_title {\n    margin-bottom: 10px;\n  }\n  h2 {\n    margin: 0;\n  }\n}\n",""]);const s=a},943:(n,t,e)=>{e.d(t,{Z:()=>s});var i=e(81),o=e.n(i),r=e(645),a=e.n(r)()(o());a.push([n.id,".container_offers {\n  /* max-width: 1600px; */\n  box-sizing: border-box;\n  margin: 0 auto;\n  text-align: center;\n  color: black;\n  margin-top: 3.5%;\n  margin-bottom: 8.1%;\n}\n\n.container_offers_wrapper {\n  width: 280px;\n  margin: 0 auto;\n  transition: 0.5s;\n  /* overflow: hidden; */\n}\n.container_offers_card {\n  transition: 1s;\n  display: flex;\n  width: 560%;\n  justify-content: space-between;\n  transform: translateX(-41%);\n  margin: 0 auto;\n}\n\n.offers_h2 {\n  font-size: 43px;\n  line-height: 60px;\n  margin: 0;\n  font-weight: 500;\n}\n.container_p {\n  max-width: 600px;\n  line-height: 28px;\n  font-weight: 400;\n  opacity: 0.5;\n  display: inline-block;\n  margin-bottom: 4.6%;\n}\n.card_offers {\n  text-align: start;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: 0.5s;\n  /* margin-left: 2%; */\n}\np {\n  font-family: Roboto;\n  margin: 0;\n  opacity: 0.7;\n  /* color: #c9453b; */\n}\n#img {\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n#img:hover {\n  transform: scale(1.2);\n}\n.city {\n  width: 60%;\n  display: flex;\n  justify-content: space-between;\n}\n#h3 {\n  font-weight: 500;\n}\nimg {\n  cursor: pointer;\n  transition: 0.5s;\n}\n.slider_direction {\n  margin: 0 auto;\n  margin-top: 50px;\n  max-width: 350px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 5px;\n}\n#slider_sapn {\n  cursor: pointer;\n  display: inline-block;\n  width: 45px;\n  height: 5px;\n  background-color: #c9453b;\n  opacity: 0.5;\n  border-radius: 5px;\n  margin-right: 4px;\n  transition: 0.5s;\n}\n#slider_sapn:hover {\n  transform: scale(1.1);\n  opacity: 1;\n}\n.slid {\n  display: flex;\n  align-items: center;\n}\n#img_left:hover {\n  transform: scale(1.2) translateX(-5px);\n}\n#img_right:hover {\n  transform: scale(1.2) translateX(5px);\n}\n\n.fade {\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n@keyframes fade {\n  from {\n    opacity: 0.1;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* media */\n\n@media (max-width: 850px) {\n  .container_offers_card {\n    width: 410%;\n    transform: translateX(-38%);\n  }\n  .offers_h2 {\n    font-size: 30px;\n  }\n  .container_p {\n    margin-bottom: 0;\n    line-height: 10px;\n  }\n  #img {\n    width: 200px;\n    height: 140px;\n  }\n}\n",""]);const s=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",i=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),i&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),i&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);i&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,i=0;i<t.length;i++)if(t[i].identifier===n){e=i;break}return e}function i(n,i){for(var r={},a=[],s=0;s<n.length;s++){var l=n[s],p=i.base?l[0]+i.base:l[0],d=r[p]||0,c="".concat(p," ").concat(d);r[p]=d+1;var m=e(c),g={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(g);else{var x=o(g,i);i.byIndex=s,t.splice(s,0,{identifier:c,updater:x,references:1})}a.push(c)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=e(r[a]);t[s].references--}for(var l=i(n,o),p=0;p<r.length;p++){var d=e(r[p]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=l}}},569:n=>{var t={};n.exports=function(n,e){var i=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var i="";e.supports&&(i+="@supports (".concat(e.supports,") {")),e.media&&(i+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(i+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),i+=e.css,o&&(i+="}"),e.media&&(i+="}"),e.supports&&(i+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return n[i](r,r.exports,e),r.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n=e(379),t=e.n(n),i=e(795),o=e.n(i),r=e(569),a=e.n(r),s=e(565),l=e.n(s),p=e(216),d=e.n(p),c=e(589),m=e.n(c),g=e(816),x={};x.styleTagTransform=m(),x.setAttributes=l(),x.insert=a().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=d(),t()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals;var h=e(943),f={};f.styleTagTransform=m(),f.setAttributes=l(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;var u=e(424),b={};b.styleTagTransform=m(),b.setAttributes=l(),b.insert=a().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=d(),t()(u.Z,b),u.Z&&u.Z.locals&&u.Z.locals;var y=e(670),w={};w.styleTagTransform=m(),w.setAttributes=l(),w.insert=a().bind(null,"head"),w.domAPI=o(),w.insertStyleElement=d(),t()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;var v=e(99),_={};_.styleTagTransform=m(),_.setAttributes=l(),_.insert=a().bind(null,"head"),_.domAPI=o(),_.insertStyleElement=d(),t()(v.Z,_),v.Z&&v.Z.locals&&v.Z.locals;var k=e(626),z={};z.styleTagTransform=m(),z.setAttributes=l(),z.insert=a().bind(null,"head"),z.domAPI=o(),z.insertStyleElement=d(),t()(k.Z,z),k.Z&&k.Z.locals&&k.Z.locals;let Z=!1;(()=>{const n=document.querySelector(".container_offers_card"),t=document.querySelector("#img_right"),e=document.querySelector("#img_left"),i=document.querySelectorAll("#slider_sapn"),o=document.getElementsByClassName("card_offers"),r=document.querySelectorAll(".right_img"),a=document.querySelector("#link_contact");i.forEach(((n,t)=>{n.addEventListener("click",(()=>{}))})),e.addEventListener("click",(()=>{n.prepend(o[o.length-1])})),t.addEventListener("click",(()=>{n.appendChild(o[0])})),a.addEventListener("mouseover",(()=>{document.querySelector(".link_contact").style.display="block"})),a.addEventListener("mouseout",(()=>{document.querySelector(".link_contact").style.display="none"})),window.addEventListener("scroll",(()=>{window.pageYOffset>2200&&window.pageYOffset<2300&&(r.forEach(((n,t)=>{t%2?n.style.transform="rotateY(180deg)":setTimeout((()=>n.style.transform="rotateX(180deg)"))})),setTimeout((()=>{r.forEach((n=>{n.style.transform="rotateY(0deg)"}))}),1e3))}))})(),(()=>{const n=document.querySelector("ul"),t=document.querySelectorAll("li"),e=document.querySelector(".burger"),i=document.querySelectorAll("#burger_span");function o(t){i[1].style.display="block",i[2].style.cssText="transform:rotate(0deg); bottom:0",i[0].style.cssText="transform:rotate(0deg); top:0",n.style.display="none",Z=!1}function r(n){[...t].filter((t=>{if(t===n.target)return t}))[0]!==n.target&&o()}window.innerWidth<400&&(n.style.display="none",e.style.display="block",window.addEventListener("click",r)),window.addEventListener("resize",(()=>{window.innerWidth<400&&(n.style.display="none",e.style.display="block",window.addEventListener("click",r)),window.innerWidth>400&&(n.style.display="flex",e.style.display="none",window.removeEventListener("click",r))})),e.addEventListener("click",(t=>{t.stopPropagation(),Z?o():(i[1].style.display="none",i[2].style.cssText="transform:rotate(45deg); top:50%",i[0].style.cssText="transform:rotate(-45deg); top:50%",n.style.display="block",Z=!0)}))})()})()})();