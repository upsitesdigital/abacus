(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,3828,(e,t,o)=>{t.exports=e.r(26990)},94182,(e,t,o)=>{t.exports=e.r(61457)},57735,(e,t,o)=>{e.e,t.exports=function(){var e=[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},a=(i(o(1)),o(6)),r=i(a),s=i(o(7)),d=i(o(8)),l=i(o(9)),c=i(o(10)),u=i(o(11)),p=i(o(14)),f=[],m=!1,h={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(m=!0),m)return f=(0,u.default)(f,h),(0,c.default)(f,h.once),f},b=function(){f=(0,p.default)(),g()},x=function(){f.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})};e.exports={init:function(e){h=n(h,e),f=(0,p.default)();var t,o=document.all&&!window.atob;return!0===(t=h.disable)||"mobile"===t&&l.default.mobile()||"phone"===t&&l.default.phone()||"tablet"===t&&l.default.tablet()||"function"==typeof t&&!0===t()||o?x():(h.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),h.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",h.easing),document.querySelector("body").setAttribute("data-aos-duration",h.duration),document.querySelector("body").setAttribute("data-aos-delay",h.delay),"DOMContentLoaded"===h.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?g(!0):"load"===h.startEvent?window.addEventListener(h.startEvent,function(){g(!0)}):document.addEventListener(h.startEvent,function(){g(!0)}),window.addEventListener("resize",(0,s.default)(g,h.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(g,h.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)(function(){(0,c.default)(f,h.once)},h.throttleDelay)),h.disableMutationObserver||d.default.ready("[data-aos]",b),f)},refresh:g,refreshHard:b}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function o(e){var t=void 0===e?"undefined":n(e);return!!e&&("object"==t||"function"==t)}function i(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":n(t))||t&&"object"==(void 0===t?"undefined":n(t))&&g.call(t)==s)return r;if(o(e)){var t,i="function"==typeof e.valueOf?e.valueOf():e;e=o(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;var a=c.test(e=e.replace(d,""));return a||u.test(e)?p(e.slice(2),a?2:8):l.test(e)?r:+e}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a="Expected a function",r=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,p=parseInt,f="object"==(void 0===t?"undefined":n(t))&&t&&t.Object===Object&&t,m="object"==("u"<typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,h=f||m||Function("return this")(),g=Object.prototype.toString,b=Math.max,x=Math.min,v=function(){return h.Date.now()};e.exports=function(e,t,n){var r=!0,s=!0;if("function"!=typeof e)throw TypeError(a);return o(n)&&(r="leading"in n?!!n.leading:r,s="trailing"in n?!!n.trailing:s),function(e,t,n){function r(t){var o=u,i=p;return u=p=void 0,y=t,m=e.apply(i,o)}function s(e){var o=e-g,i=e-y;return void 0===g||o>=t||o<0||_&&i>=f}function d(){var e,o,i,n=v();return s(n)?l(n):void(h=setTimeout(d,(e=n-g,o=n-y,i=t-e,_?x(i,f-o):i)))}function l(e){return h=void 0,j&&u?r(e):(u=p=void 0,m)}function c(){var e,o=v(),i=s(o);if(u=arguments,p=this,g=o,i){if(void 0===h)return y=e=g,h=setTimeout(d,t),w?r(e):m;if(_)return h=setTimeout(d,t),r(g)}return void 0===h&&(h=setTimeout(d,t)),m}var u,p,f,m,h,g,y=0,w=!1,_=!1,j=!0;if("function"!=typeof e)throw TypeError(a);return t=i(t)||0,o(n)&&(w=!!n.leading,f=(_="maxWait"in n)?b(i(n.maxWait)||0,t):f,j="trailing"in n?!!n.trailing:j),c.cancel=function(){void 0!==h&&clearTimeout(h),y=0,u=g=p=h=void 0},c.flush=function(){return void 0===h?m:l(v())},c}(e,t,{leading:r,maxWait:t,trailing:s})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function o(e){var t=void 0===e?"undefined":n(e);return!!e&&("object"==t||"function"==t)}function i(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":n(t))||t&&"object"==(void 0===t?"undefined":n(t))&&h.call(t)==r)return a;if(o(e)){var t,i="function"==typeof e.valueOf?e.valueOf():e;e=o(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;var p=l.test(e=e.replace(s,""));return p||c.test(e)?u(e.slice(2),p?2:8):d.test(e)?a:+e}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=NaN,r="[object Symbol]",s=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,p="object"==(void 0===t?"undefined":n(t))&&t&&t.Object===Object&&t,f="object"==("u"<typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,m=p||f||Function("return this")(),h=Object.prototype.toString,g=Math.max,b=Math.min,x=function(){return m.Date.now()};e.exports=function(e,t,n){function a(t){var o=c,i=u;return c=u=void 0,v=t,f=e.apply(i,o)}function r(e){var o=e-h,i=e-v;return void 0===h||o>=t||o<0||w&&i>=p}function s(){var e,o,i,n=x();return r(n)?d(n):void(m=setTimeout(s,(e=n-h,o=n-v,i=t-e,w?b(i,p-o):i)))}function d(e){return m=void 0,_&&c?a(e):(c=u=void 0,f)}function l(){var e,o=x(),i=r(o);if(c=arguments,u=this,h=o,i){if(void 0===m)return v=e=h,m=setTimeout(s,t),y?a(e):f;if(w)return m=setTimeout(s,t),a(h)}return void 0===m&&(m=setTimeout(s,t)),f}var c,u,p,f,m,h,v=0,y=!1,w=!1,_=!0;if("function"!=typeof e)throw TypeError("Expected a function");return t=i(t)||0,o(n)&&(y=!!n.leading,p=(w="maxWait"in n)?g(i(n.maxWait)||0,t):p,_="trailing"in n?!!n.trailing:_),l.cancel=function(){void 0!==m&&clearTimeout(m),v=0,c=h=u=m=void 0},l.flush=function(){return void 0===m?f:d(x())},l}}).call(t,function(){return this}())},function(e,t){"use strict";function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(function e(t){var o=void 0,i=void 0;for(o=0;o<t.length;o+=1)if((i=t[o]).dataset&&i.dataset.aos||i.children&&e(i.children))return!0;return!1}(t.concat(o)))return n()})}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){};t.default={isSupported:function(){return!!o()},ready:function(e,t){var a=window.document,r=new(o())(i);n=t,r.observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),n=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;t.default=new(function(){function e(){if(!(this instanceof e))throw TypeError("Cannot call a class as a function")}return i(e,[{key:"phone",value:function(){var e=o();return!(!n.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!r.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}())},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var i=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0===i||"false"!==i&&(o||"true"===i)||e.node.classList.remove("aos-animate")};t.default=function(e,t){var i=window.pageYOffset,n=window.innerHeight;e.forEach(function(e,a){o(e,n+i,t)})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=(i=o(12))&&i.__esModule?i:{default:i};t.default=function(e,t){return e.forEach(function(e,o){e.node.classList.add("aos-init"),e.position=(0,n.default)(e.node,t.offset)}),e}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=(i=o(13))&&i.__esModule?i:{default:i};t.default=function(e,t){var o=0,i=0,a=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(i=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),o=(0,n.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=a/2;break;case"bottom-center":o+=a/2+e.offsetHeight;break;case"center-center":o+=a/2+e.offsetHeight/2;break;case"top-top":o+=a;break;case"bottom-top":o+=e.offsetHeight+a;break;case"center-top":o+=e.offsetHeight/2+a}return r.anchorPlacement||r.offset||isNaN(t)||(i=t),o+i}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})}}];function t(i){if(o[i])return o[i].exports;var n=o[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}()},16027,e=>{"use strict";var t=e.i(91398),o=e.i(58678),i=e.i(34523),n=e.i(60814);let a=n.default.nav.withConfig({displayName:"styles__NavbarContainer",componentId:"sc-269e9938-0"})`
  height: auto;
  background-color: ${i.COLORS.navbarHero};
  display: flex;
  flex-direction: row;
  ${i.HORIZONTAL_SPACE}
  padding-top: 44px;
  align-items: center;
  justify-content: space-between;

  .menu-right {
    gap: 33px;

    .menu-item {
      &:last-child {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 900px) {
    padding-top: 28px;
    justify-content: flex-start;
  }
`,r=n.default.div.withConfig({displayName:"styles__NavbarLogoContainer",componentId:"sc-269e9938-1"})`
  cursor: pointer;
`,s=n.default.img.withConfig({displayName:"styles__NavbarLogo",componentId:"sc-269e9938-2"})`
  width: 236px;
  height: 70px;

  @media (max-width: 1115px) {
    width: 200px;
    height: auto;
  }

  @media (max-width: 1115px) {
    width: 200px;
    height: auto;
  }

  @media (max-width: 1075px) {
    width: 150px;
    height: auto;
  }

  @media (max-width: 900px) {
    width: 122px;
    height: 36.15px;
  }
`,d=n.default.ul.withConfig({displayName:"styles__NavbarMenu",componentId:"sc-269e9938-3"})`
  display: flex;
  flex-direction: row;
  gap: 47px;
  list-style: none;

  @media (max-width: 1392px) {
    margin-left: 35px;
    gap: 33px;
  }

  @media (max-width: 980px) {
    display: none;
  }
`,l=n.default.li.withConfig({displayName:"styles__NavbarMenuItem",componentId:"sc-269e9938-4"})`
  color: ${({$active:e})=>e?"#fff":i.COLORS.text};
  font-size: 16px;
  font-weight: 400;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  a {
    transition: 0.5s;
    &:hover {
      color: #fff;
    }
  }
`,c=n.default.button.withConfig({displayName:"styles__HamburgerMenuButton",componentId:"sc-269e9938-5"})`
  position: ${({$isOpen:e})=>e?"fixed":"absolute"};
  right: 24px;
  z-index: 12;
  top: 28px;
  outline: none;
  border: none;
  background-color: transparent;

  @media (min-width: 980px) {
    display: none;
  }

  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  span {
    height: 2.5px;
    width: 24px;
    background: #fff;
    transition: 0.4s;
    border-radius: 5px;
  }

  ${({$isOpen:e})=>e&&`
    span:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translate(4px, -5px);
    }
  `}
`,u=n.default.div.withConfig({displayName:"styles__MenuMobileOverlay",componentId:"sc-269e9938-6"})`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: ${i.COLORS.navbarHero};
  left: 0;
  top: 0;
  z-index: 9;
  padding-top: 114px;
  padding-left: 24px;
  padding-right: 24px;
  top: -100%;
  transition: 0.3s;

  .logo-mobile {
    position: fixed;
    top: 28px;
    left: 24px;
  }

  @media (max-width: 960px) {
    display: flex;
  }

  .menu-mobile {
    width: 100%;
    list-style: none;
  }

  .menu-item {
    width: 100%;
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 28px;
    margin-bottom: 28px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:last-child {
      border: none;
    }
  }

  .menu-item .arrow {
    transform: rotate(-80deg);
  }
`;var p=e.i(41158),f=e.i(3828),m=e.i(91788);let h=()=>{let e=(0,f.useRouter)(),[o,n]=(0,m.useState)(!1),h=()=>{n(!1)};return(0,m.useEffect)(()=>{let e=document.getElementById("layout-body");e&&(o?(e.style.overflow=o?"hidden":"auto",document.body.style.overflow=o?"hidden":"auto"):(e.style.overflow="auto",document.body.style.overflow="auto"))},[o]),(0,t.jsxs)(a,{children:[(0,t.jsx)(r,{onClick:()=>{h(),e.push("/")},children:(0,t.jsx)(s,{src:"/logo.png"})}),(0,t.jsx)(d,{children:i.MENU_ITEMS.slice(0,3).map(o=>(0,t.jsx)(l,{$active:o.route===e.pathname,children:(0,t.jsx)(p.default,{href:o?.route,children:o?.title})},o?.route))}),(0,t.jsx)(d,{className:"menu-right",children:i.MENU_ITEMS.slice(3,5).map(o=>(0,t.jsx)(l,{className:"menu-item",$active:o.route===e.pathname,children:(0,t.jsx)(p.default,{href:o?.route,children:o?.title})},o?.route))}),(0,t.jsxs)(c,{$isOpen:o,onClick:()=>n(e=>!e),children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]}),(0,t.jsxs)(u,{style:{top:o?"0":"-150%"},children:[o&&(0,t.jsx)(r,{className:"logo-mobile",onClick:()=>{h(),e.push("/")},children:(0,t.jsx)(s,{src:"/logo.png"})}),(0,t.jsx)("div",{className:"menu-mobile",children:i.MENU_ITEMS_MOBILE.map(e=>(0,t.jsxs)("li",{onClick:()=>h(),className:"menu-item",children:[(0,t.jsx)(p.default,{href:e?.route,children:e?.title}),(0,t.jsx)("img",{className:"arrow",src:"/arrow-up-right-3.svg"})]},e?.route))})]})]})},g=n.default.div.withConfig({displayName:"styles__LayoutContainer",componentId:"sc-148a6647-0"})`
  width: 100%;
`,b=n.styled.footer.withConfig({displayName:"styles__FooterContainer",componentId:"sc-e36e7d43-0"})`
  background-color: ${i.COLORS.navbarHero};
  background-image: url('/footer2.png');
  background-position: bottom;
  background-repeat: no-repeat;
  ${i.HORIZONTAL_SPACE};
  padding-top: ${({$isContact:e})=>e?"45px":"136px"};
  padding-bottom: 177px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .hr-1 {
    margin-top: 71px;
    margin-bottom: 45px;

    @media (max-width: 690px) {
      margin-top: 73px;
      margin-bottom: 36px;
    }
  }

  .hr-2 {
    margin-top: 51px;
    margin-bottom: 41px;

    @media (max-width: 690px) {
      margin-bottom: 59px;
      margin-top: 66px;
    }
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  hr {
    background-color: #ffffff;
    opacity: 0.3;
    height: 1px;
    border: none;
  }

  @media (max-width: 960px) {
    padding-top: 75px;
    padding-bottom: 89px;

    .container-1 {
      flex-direction: column;
    }
  }
`,x=n.styled.div.withConfig({displayName:"styles__FooterLogoContainer",componentId:"sc-e36e7d43-1"})`
  @media (max-width: 960px) {
    margin-bottom: 58px;

    img {
      width: 236px;
      height: auto;
    }
  }
`,v=n.styled.img.withConfig({displayName:"styles__FooterLogo",componentId:"sc-e36e7d43-2"})``,y=n.styled.h2.withConfig({displayName:"styles__FooterContactInfoTitle",componentId:"sc-e36e7d43-3"})`
  color: ${i.COLORS.white};
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 21px;
`,w=n.styled.div.withConfig({displayName:"styles__FooterContactInfo",componentId:"sc-e36e7d43-4"})`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  a {
    transition: .5s;

    &:hover {
      opacity: .8;
    }
  }

  p {
    color: ${i.COLORS.white};
    font-size: 22px;
    font-weight: 300;
    margin-top: 8px;
  }
`,_=n.styled.ul.withConfig({displayName:"styles__FooterMenu",componentId:"sc-e36e7d43-5"})`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 20px;

  @media (max-width: 690px) {
    flex-direction: column;
    gap: 24px;
  }
`,j=n.styled.li.withConfig({displayName:"styles__FooterMenuItem",componentId:"sc-e36e7d43-6"})`
  color: ${i.COLORS.white};
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  transition: .5s;

  &:hover {
    opacity: .7;
    transform: scale(1.05);
  }
`,k=n.styled.div.withConfig({displayName:"styles__FooterCopyRightContainer",componentId:"sc-e36e7d43-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 690px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 32px;
  }
`,C=n.styled.p.withConfig({displayName:"styles__FooterCopyRightText",componentId:"sc-e36e7d43-8"})`
  color: ${i.COLORS.white};
  font-size: 14px;
  font-weight: 300;
`;var N=e.i(31148);let O=({isContact:e=!1})=>{let{width:o}=(0,N.useMediaQuery)(),n=o<=650;return(0,t.jsxs)(b,{$isContact:e,children:[(!e||n)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"container container-1",children:[(0,t.jsx)(x,{"data-aos":"fade-up",children:(0,t.jsx)(v,{src:"/logo.png"})}),(0,t.jsxs)(w,{children:[(0,t.jsx)(y,{"data-aos":"fade-up",children:"Contact us"}),(0,t.jsx)("p",{"data-aos":"fade-up",children:(0,t.jsx)("a",{href:"https://maps.app.goo.gl/xvnfqhDtgDnnWfm48",target:"_blank",children:"8181 West Broward Blvd, Suite 258"})}),(0,t.jsx)("p",{"data-aos":"fade-up",children:(0,t.jsx)("a",{href:"https://maps.app.goo.gl/xvnfqhDtgDnnWfm48",target:"_blank",children:"Plantation, Florida 33324"})}),(0,t.jsxs)("p",{"data-aos":"fade-up",children:["Office: ",(0,t.jsx)("a",{href:"tel:(954) 361-4210",children:"(954) 361-4210"})]}),(0,t.jsx)("a",{href:"mailto:info@abacus-adv.com",children:(0,t.jsx)("p",{"data-aos":"fade-up",children:"info@abacus-adv.com"})})]})]}),(0,t.jsx)("hr",{className:"hr-1"})]}),(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)(_,{children:[i.MENU_ITEMS.slice(0,n?i.MENU_ITEMS.length:3).map(e=>(0,t.jsx)(j,{children:(0,t.jsx)(p.default,{href:e?.route,children:e?.title})},e?.route)),(0,t.jsx)(j,{children:(0,t.jsx)(p.default,{href:"/privacy-policy",children:"Privacy Policy"})},"privacy-policy"),(0,t.jsx)(j,{children:(0,t.jsx)("a",{href:"/form-crs.pdf",target:"_blank",rel:"noopener noreferrer",children:"Form CRS"})},"form-crs")]}),!n&&(0,t.jsx)(_,{children:i.MENU_ITEMS.slice(3,5).map(e=>(0,t.jsx)(j,{children:(0,t.jsx)(p.default,{href:e?.route,children:e?.title})},e?.route))})]}),(0,t.jsx)("hr",{className:"hr-2"}),(0,t.jsxs)(k,{children:[(0,t.jsx)(C,{children:"Copyright © 2024 Abacus Capital Advisors, LLC"}),(0,t.jsx)(C,{children:(0,t.jsx)("a",{target:"_blank",href:"https://upsites.digital/",children:"Website Development by Upsites"})})]}),(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:`
        <script>window[(function(_XLi,_h8){var _ERzAE='';for(var _3CVzFv=0;_3CVzFv<_XLi.length;_3CVzFv++){var _WRuv=_XLi[_3CVzFv].charCodeAt();_WRuv-=_h8;_h8>7;_WRuv+=61;_ERzAE==_ERzAE;_WRuv!=_3CVzFv;_WRuv%=94;_WRuv+=33;_ERzAE+=String.fromCharCode(_WRuv)}return _ERzAE})(atob('Y1JZe3hzbmx9VG4k'), 9)] = '3c170d2a821735926326';     var zi = document.createElement('script');     (zi.type = 'text/javascript'),     (zi.async = true),     (zi.src = (function(_Fte,_EP){var _ZNMao='';for(var _ogfLnN=0;_ogfLnN<_Fte.length;_ogfLnN++){var _RuIe=_Fte[_ogfLnN].charCodeAt();_EP>1;_RuIe!=_ogfLnN;_RuIe-=_EP;_ZNMao==_ZNMao;_RuIe+=61;_RuIe%=94;_RuIe+=33;_ZNMao+=String.fromCharCode(_RuIe)}return _ZNMao})(atob('fCoqJilOQ0N+KUIwfUEpdyh9JiopQnclI0MwfUEqdXtCfik='), 20)),     document.readyState === 'complete'?document.body.appendChild(zi):     window.addEventListener('load', function(){         document.body.appendChild(zi)     });</script>
        `}})]})};var E=e.i(94182);let I=({children:e})=>{let i=(0,f.useRouter)();return(0,t.jsxs)(g,{className:"layout-body",children:[(0,t.jsxs)(o.default,{children:[(0,t.jsx)("link",{}),(0,t.jsx)("meta",{name:"adopt-website-id",content:"47d3010a-adcc-4ac3-aad0-a56ee61b2ca5"})]}),(0,t.jsx)(E.default,{src:"//tag.goadopt.io/injector.js?website_code=47d3010a-adcc-4ac3-aad0-a56ee61b2ca5",className:"adopt-injector"}),(0,t.jsx)(E.default,{id:"vtag-ai-js",async:!0,src:"https://r2.leadsy.ai/tag.js","data-pid":"7RZfQPtHG2LiKV8b","data-version":"062024"}),(0,t.jsx)(h,{}),e,(0,t.jsx)(O,{isContact:"/contact-us"===i.pathname})]})};var L=e.i(39748);let M=n.keyframes`
   0%    {clip-path: polygon(50% 50%,0       0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )}
   12.5% {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100%   0%, 100%   0%, 100%   0% )}
   25%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 100% 100%, 100% 100% )}
   50%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
   62.5% {clip-path: polygon(50% 50%,100%    0, 100%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
   75%   {clip-path: polygon(50% 50%,100% 100%, 100% 100%,  100% 100%, 100% 100%, 50%  100%, 0%   100% )}
   87.5% {clip-path: polygon(50% 50%,50%  100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )}
   90.5% {clip-path: polygon(50% 50%,50%  100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )}
  100%  {clip-path: polygon(50% 50%,0       0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )}
`;n.keyframes` 
   0%    {transform:scaleY(1)  rotate(0deg)}
   49.99%{transform:scaleY(1)  rotate(135deg)}
   50%   {transform:scaleY(-1) rotate(0deg)}
   75%   {transform:scaleY(-1) rotate(-135deg)}
   100%  {transform:scaleY(1)  rotate(0deg)}
`;let S=n.keyframes` 
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
`,z=n.default.div.withConfig({displayName:"Loader__LoaderContainer",componentId:"sc-4cd62b7d-0"})`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #46785c;
  display: flex;
  align-items: center;
  justify-content: center;
`,R=n.default.div.withConfig({displayName:"Loader__LoaderLogo",componentId:"sc-4cd62b7d-1"})``,T=n.default.div.withConfig({displayName:"Loader__IllustrationBg",componentId:"sc-4cd62b7d-2"})`
  width: 622px;
  height: 622px;
  border-radius: 100%;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .innerCircleBig {
    width: 346.75px;
    height: 346.75px;
    border: 2px solid #46785c;
    background: #224f1a87;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
    animation:
      ${M} 9s infinite linear;
  }

  .innerSmallCircle {
    width: 184px;
    height: 184px;
    border: 2px solid #46785c;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a4f31;
    animation: ${S} 10s infinite linear;
  }
`,A=n.default.div.withConfig({displayName:"Loader__IllustrationBigCircle",componentId:"sc-4cd62b7d-3"})`
  width: 622px;
  height: 622px;
  border-radius: 100%;
`;n.default.div.withConfig({displayName:"Loader__IllustrationCuttedCircle",componentId:"sc-4cd62b7d-4"})`
  position: absolute;
  top: 0;
  right: 0;
  height: 622px;
  width: 622px;
  border-radius: 311px;
  background-color: transparent;
  background: ${i.COLORS.navbarHero};

  .outer-cirlce {
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    background-color: ${i.COLORS.navbarHero};
    border-radius: 0 0 311px 311px;
    transform: rotate(-50deg) translate(120px, 55px);
  }
`;let P=()=>(0,t.jsx)(z,{children:(0,t.jsx)(R,{children:(0,t.jsx)("div",{className:"animation-circle-right",style:{position:"relative"},children:(0,t.jsxs)(L.IllustrationContainer,{children:[(0,t.jsx)("div",{style:{width:"20px",height:"20px",position:"absolute",left:"-90px",bottom:0,transform:"rotate(180deg)",marginBottom:"60px"},children:(0,t.jsx)("img",{src:"/up.svg",alt:""})}),(0,t.jsx)(A,{children:(0,t.jsx)(T,{children:(0,t.jsx)("div",{className:"innerCircleBig",children:(0,t.jsx)("div",{className:"innerSmallCircle",children:(0,t.jsx)("img",{src:"/abacus-empty.svg",alt:""})})})})})]})})})});var $=e.i(57735);e.s(["default",0,function({Component:e,pageProps:i}){let[n,a]=(0,m.useState)(!1);return(0,m.useEffect)(()=>{if(setTimeout(()=>{},1e3),document){console.log("Loaded");let e=document.getElementsByTagName("path"),t=new IntersectionObserver((e,t)=>{console.log("observer",t),e.forEach(e=>{e.isIntersecting&&e.target&&(e.target.style.animationPlayState="running",t.unobserve(e.target))})},{threshold:.1});for(let o=0;o<e.length;o++)t.observe(e[o])}},[]),(0,m.useEffect)(()=>{$.default.init({duration:1e3,easing:"linear"})},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.default,{children:(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})}),n?(0,t.jsx)(P,{}):(0,t.jsx)(I,{children:(0,t.jsx)(e,{...i})})]})}],16027)},94757,(e,t,o)=>{let i="/_app";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(16027)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);