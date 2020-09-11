"use strict";function debounce(i,o,a){var r;return function(){var t=this,e=arguments,n=a&&!r;clearTimeout(r),r=setTimeout(function(){r=null,a||i.apply(t,e)},o),n&&i.apply(t,e)}}function throttle(n,i,o){var a,r,c,l=0;function s(){l=!1===o.leading?0:(new Date).getTime(),a=null,n.apply(r,c),a||(r=c=null)}return o=o||{},function(){var t=(new Date).getTime();l||!1!==o.leading||(l=t);var e=i-(t-l);r=this,c=arguments,e<=0||i<e?(a&&(clearTimeout(a),a=null),l=t,n.apply(r,c),a||(r=c=null)):a||!1===o.trailing||(a=setTimeout(s,e))}}function sidebarPaddingR(){var t=window.innerWidth,e=document.body.clientWidth,n=t-e;t!==e&&$("body").css("padding-right",n)}function scrollToDest(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=$(t).offset();$("body,html").animate({scrollTop:n.top-e})}function snackbarShow(t,e,n){var i=void 0!==e&&e,o=void 0!==n?n:2e3,a=GLOBAL_CONFIG.Snackbar.position,r="light"===document.documentElement.getAttribute("data-theme")?GLOBAL_CONFIG.Snackbar.bgLight:GLOBAL_CONFIG.Snackbar.bgDark;Snackbar.show({text:t,backgroundColor:r,showAction:i,duration:o,pos:a})}var Cookies={get:function(t){var e="; ".concat(document.cookie).split("; ".concat(t,"="));if(2===e.length)return e.pop().split(";").shift()},set:function(t,e,n){var i,o="";n&&((i=new Date).setTime(i.getTime()+24*n*60*60*1e3),o="; expires="+i.toUTCString()),document.cookie=t+"="+(e||"")+o+"; path=/"}},initJustifiedGallery=function(t){t.each(function(t,e){$(this).is(":visible")&&$(this).justifiedGallery({rowHeight:220,margins:4})})},diffDate=function(t){var e=new Date,n=new Date(t.replace(/-/g,"/")),i=e.getTime()-n.getTime();return Math.floor(i/864e5)},loadComment=function(t,e){var n;"IntersectionObserver"in window?(n=new IntersectionObserver(function(t){t[0].isIntersecting&&(e(),n.disconnect())},{threshold:[0]})).observe(t):e()};