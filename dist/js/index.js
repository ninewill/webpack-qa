!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),c=null,l=0,p=[],f=t(3);function d(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function u(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function b(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),p.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,t);t.insertBefore(e,o)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=p.indexOf(n);e>=0&&p.splice(e,1)}function h(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return m(e,n.attrs),b(n,e),e}function m(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function y(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var a=l++;t=c||(c=h(e)),r=v.bind(null,t,a,!1),o=v.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",m(e,n.attrs),b(n,e),e}(e),r=function(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),o=function(){g(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){g(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=u(n,e);return d(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}n&&d(u(n,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var x,w=(x=[],function(n,e){return x[n]=e,x.filter(Boolean).join("\n")});function v(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e,t){n.exports=t.p+"images/北捷2018年報_封面2.jpg?13d99033"},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,e,t){"use strict";n.exports=function(n,e){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||e?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,e,t){n.exports=t.p+"images/北捷2018年報_封面.jpg?e611c365"},function(n,e,t){"use strict";t.r(e);t(7),t(9);t(12)("./annualreport.png");var r=new ProgressBar.Line(container2016,{strokeWidth:5,easing:"easeInOut",duration:1400,color:"#a6c3dd",trailColor:"#eee",trailWidth:0,svgStyle:{width:"100%",height:"100%",borderRadius:"30px"},text:{style:{color:"#fff",position:"absolute",right:"6px",top:"2px",fontSize:"12px",padding:0,margin:0,transform:null},autoStyleContainer:!1},from:{color:"#FFEA82"},to:{color:"#ED6A5A"},step:function(n,e){e.setText(Math.round(7.2*e.value()))}}),o=new ProgressBar.Line(container2017,{strokeWidth:5,easing:"easeInOut",duration:1400,color:"#a6c3dd",trailColor:"#eee",trailWidth:0,svgStyle:{width:"100%",height:"100%",borderRadius:"30px"},text:{style:{color:"#fff",position:"absolute",right:"6px",top:"2px",fontSize:"12px",padding:0,margin:0,transform:null},autoStyleContainer:!1},from:{color:"#FFEA82"},to:{color:"#ED6A5A"},step:function(n,e){e.setText(Math.round(7.2*e.value()))}}),i=new ProgressBar.Line(container2018,{strokeWidth:5,easing:"easeInOut",duration:1400,color:"#3b91c0",trailColor:"#eee",trailWidth:0,svgStyle:{width:"100%",height:"100%",borderRadius:"30px"},text:{style:{color:"#fff",position:"absolute",right:"6px",top:"2px",fontSize:"12px",padding:0,margin:0,transform:null},autoStyleContainer:!1},from:{color:"#FFEA82"},to:{color:"#ED6A5A"},step:function(n,e){e.setText(Math.round(7.2*e.value()))}});r.animate(1),o.animate(1),i.animate(1)},function(n,e,t){var r=t(8);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n",""])},function(n,e,t){var r=t(10);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){e=n.exports=t(0)(!1);var r=t(4),o=r(t(2)),i=r(t(11));e.push([n.i,'@charset "UTF-8";\n* {\n  padding: 0;\n  margin: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\nhtml, body {\n  width: 100%;\n  height: 3000px;\n  -webkit-overflow-scrolling: touch; }\n\n.header-bg {\n  width: 100%;\n  min-height: 800px;\n  background-image: url('+o+");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat; }\n  .header-bg .header-wrap {\n    width: 1200px;\n    margin: 0 auto; }\n    .header-bg .header-wrap .top-menu {\n      width: 100%;\n      height: 90px;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      .header-bg .header-wrap .top-menu li a {\n        display: block;\n        font-size: 16px;\n        color: #fff;\n        text-decoration: none; }\n        .header-bg .header-wrap .top-menu li a img {\n          width: 202px;\n          height: auto;\n          overflow: hidden; }\n  .header-bg .wrap {\n    width: 1200px;\n    margin: 0 auto;\n    margin-top: 54px; }\n    .header-bg .wrap .title-svg {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .header-bg .wrap h2 {\n      margin-top: 38px;\n      color: #fff;\n      font-size: 24px;\n      letter-spacing: 3px; }\n\n.container {\n  margin-top: 23px; }\n  .container .container-wrap {\n    width: 1200px;\n    margin: 0 auto; }\n    .container .container-wrap .section-2-title {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      .container .container-wrap .section-2-title .en-title {\n        font-family: Montserrat;\n        font-size: 48px;\n        font-weight: 900;\n        color: #000;\n        line-height: 1.29; }\n      .container .container-wrap .section-2-title .cn-title {\n        font-size: 40px;\n        font-weight: 300;\n        color: #000;\n        line-height: 1.55; }\n    .container .container-wrap .section-2-info {\n      width: 100%;\n      height: auto;\n      overflow: hidden;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      margin-top: 62px;\n      position: relative; }\n      .container .container-wrap .section-2-info .section-2-info-description {\n        position: absolute;\n        z-index: 2; }\n        .container .container-wrap .section-2-info .section-2-info-description h3 {\n          position: relative;\n          font-weight: 600;\n          font-size: 24px;\n          line-height: 1.42; }\n          .container .container-wrap .section-2-info .section-2-info-description h3::after {\n            content: '';\n            background-image: url("+i+");\n            position: absolute;\n            top: 20%;\n            display: inline-block;\n            width: 100%;\n            height: 100%;\n            background-repeat: no-repeat; }\n        .container .container-wrap .section-2-info .section-2-info-description .total-progress {\n          margin-top: 44px;\n          line-height: 1.63; }\n          .container .container-wrap .section-2-info .section-2-info-description .total-progress h4 {\n            font-size: 16px; }\n            .container .container-wrap .section-2-info .section-2-info-description .total-progress h4 .sub-txt-color {\n              color: #3b91bf; }\n            .container .container-wrap .section-2-info .section-2-info-description .total-progress h4 .sub-txt-gray {\n              font-size: 12px;\n              letter-spacing: 1.2px;\n              color: rgba(0, 0, 0, 0.6);\n              text-transform: uppercase; }\n        .container .container-wrap .section-2-info .section-2-info-description .average-progress {\n          display: -webkit-box;\n          display: -webkit-flex;\n          display: -ms-flexbox;\n          display: flex;\n          margin-top: 10px; }\n          .container .container-wrap .section-2-info .section-2-info-description .average-progress .man-progress-bar img {\n            width: 100%;\n            height: 100%; }\n          .container .container-wrap .section-2-info .section-2-info-description .average-progress .year-progress-bar {\n            display: -webkit-box;\n            display: -webkit-flex;\n            display: -ms-flexbox;\n            display: flex; }\n            .container .container-wrap .section-2-info .section-2-info-description .average-progress .year-progress-bar .year {\n              margin: 42px 10px 0 0; }\n              .container .container-wrap .section-2-info .section-2-info-description .average-progress .year-progress-bar .year li {\n                margin-bottom: 40px; }\n              .container .container-wrap .section-2-info .section-2-info-description .average-progress .year-progress-bar .year .year-2018 {\n                margin-bottom: 0; }\n            .container .container-wrap .section-2-info .section-2-info-description .average-progress .year-progress-bar .progress-bar {\n              margin-top: 40px; }\n              .container .container-wrap .section-2-info .section-2-info-description .average-progress .year-progress-bar .progress-bar #container2016 {\n                width: 296px;\n                position: relative; }\n              .container .container-wrap .section-2-info .section-2-info-description .average-progress .year-progress-bar .progress-bar #container2017 {\n                margin-top: 40px;\n                width: 315px;\n                position: relative; }\n              .container .container-wrap .section-2-info .section-2-info-description .average-progress .year-progress-bar .progress-bar #container2018 {\n                margin-top: 40px;\n                width: 330px;\n                position: relative; }\n      .container .container-wrap .section-2-info .section-2-data {\n        position: absolute;\n        width: 30%;\n        height: 100%;\n        background: #fff;\n        border-left: 1px solid #fff; }\n        .container .container-wrap .section-2-info .section-2-data::after {\n          position: absolute;\n          z-index: 0;\n          top: 0;\n          right: -300px;\n          content: '';\n          width: 0;\n          height: 0;\n          border-color: transparent #fff;\n          border-width: 0px 0px 680px 300px;\n          border-style: solid; }\n      .container .container-wrap .section-2-info .section-2-video {\n        width: 100%; }\n        .container .container-wrap .section-2-info .section-2-video video {\n          width: 100%;\n          height: auto; }\n",""])},function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTguNTkgMTYuMzRsNC41OC00LjU5LTQuNTgtNC41OUwxMCA1Ljc1bDYgNi02IDZ6Ii8+PC9zdmc+"},function(n,e,t){var r={"./1015773805-preview.mp4":13,"./28153219-preview.mp4":14,"./annualreport.png":15,"./北捷2018年報_封面.jpg":5,"./北捷2018年報_封面2.jpg":2};function o(n){var e=i(n);return t(e)}function i(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=i,n.exports=o,o.id=12},function(n,e){throw new Error("Module parse failed: Unexpected character '\0' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},function(n,e){throw new Error("Module parse failed: Unexpected character '\0' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZYAAABqCAMAAACoAYdyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABOUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////4il91oAAAAZdFJOUwB86+BtYi31S4i+CZGn0jeeIkARyVgDGrO5Dl2nAAAUXklEQVR42uxciZajKhANIIIrKory/z/6ik1RMell3mS6j3fmRNNxrUttLPV4fBcDKfqXB+VjOcCmX+r0sV1B5fplGpf5fEgvP/lgqrL41svNxeu7FmX9+PdQa/36sbjGRj6DZmkxEV1uPyBdno+QBGfq8aD4hO5MiJVloy2ysxzHNEqVeDksXr3bGG4hmg3zm1lRWBP1WqU0cRuc/r01r6Ymh0aPfm+I2m2n9TgDZYzsgBMcZqzJQaTu5+X0c6kvcGoyPdO1ek0LdTs0upR4My2DDk8Fcn2iLc9psS1OnOS0OzonGs8oqCaqub9ymbgaEevjne8o+xSGBC2gcDU6gMa2twQw3ZoNBVrI4PB+WpZVWVSB+69qi6VF1g4gVb+HdgdVzfJYaSH6kpZe+9/MOeyjEurPtKCUSrGd7d1QAy2tl8TbaYEWPm0Mjeo72rJJY7nQvuqRgVWxjDHdmA20zObkO9zNgsVCX6RFca2XzIPpzu/x+BwBaDUyG7nRUmmdv5eWUrdq88q6+KC2ZM0m8h60vtUg4PlIy15KgRkZt130qI7kVTjmOAuy+jQtgulx/QvbWp+69i3+VrnW/VtZGSJ7Yb/tW4kAW1yY/82OlgpsdhcbcIfikXkv7tx6GwenE16NujXfWFOzmVOhIY7kO58NisrIATJBCwefsT1ARMvjKS3S+X75VlrGvWXvDmas25p1REvfat1s/GXLsoAIlmU6GvN5733LeWfWL+xEfoiJy7PzqY/+Yj7TAk1sjGSbpEXmBmDE7FZZWhAu4W3IW1nhmu20NWea7gxDMM31RssMboHRtG9R0qDQC3z2e1pAXVx8xV22AmGaxdHeqdI3jW7Jg4egp7zmgIQRU6iJvyZpWXbcUkuL8Lb1nWi9M6l6ntVLy4xWqKcun5mk4ZxsJVy+PNBilKy1zsKaOLiTtXftyd+z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"}]);