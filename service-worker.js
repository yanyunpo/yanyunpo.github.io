"use strict";function _typeof2(e){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)})(e)}var precacheConfig=[["/404.html","205a7b3662dd8a8a46170e4289db78b3"],["/about/index.html","f4d72e523bfdc4d770e89822182a29b4"],["/archives/2020/09/index.html","3d424c3582bfca16830e0aa1489c05b9"],["/archives/2020/index.html","bb80c222311116ccfd1e8e41440c1c92"],["/archives/index.html","2a2b3b94ae104629266de5e6c10f3326"],["/categories/index.html","6d4fd4ff901186de6bf88e3b7474634c"],["/css/background.css","632d49b15ac2d66bff59257abbe5021b"],["/css/index.css","d2fbebfc7b235d58c337bb02723b0555"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avator.gif","51a36fe6d24103db317173447fe5aeb3"],["/img/facv.png","2212501e89761b17a8ae220bd8c7befe"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/featureimages/26.jpg","5961f5fa1d0b09e9b24e636698f47074"],["/img/featureimages/27.jpg","231b4c5d18f27646b1a05e8a892e19e4"],["/img/featureimages/28.jpg","23b2ae3a0da29a61fd4be8766e0eb2f6"],["/img/featureimages/29.jpg","9b1dc99132d870fc75cbde534a22bded"],["/img/featureimages/30.jpg","38a2c5898ecd1d918341524c705948d3"],["/img/featureimages/31.jpg","7f3efb846771ad96a0e29988a96b5138"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/imga/pwa/0.png","7d55707a6b2f51c1fe2a5ccaac4ae822"],["/imga/pwa/01.png","c25536df6c0f7a4c3a88f77d7fb31b3c"],["/imga/pwa/02.png","cdac9529e6b60f1576bf59a27b1e56f8"],["/imga/pwa/03.png","95f4a35aa30d324d1b435a72f5f31a4f"],["/imga/pwa/04.png","6e2e48a5bc768c07113763c7bb49962e"],["/imga/pwa/05.png","a9ad28cc6340716ef1c2b6c559bd2e41"],["/imga/pwa/06.png","eb4c7370be260646dfc83f92c27119c0"],["/imga/pwa/2.png","0cdf4aa221b814fb7b16119c4e06cc05"],["/imga/pwa/moon.png","660ccbd3e1f2a252f97e1040fc654937"],["/index.html","ddb4e8ebafb23233fed16ac3f714e635"],["/js/main.js","125fa8cc0f50b559881e6b0be97b3db2"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/link/index.html","1106f4b0e4ca5f0d27ad539c62fd3f76"],["/list/index.html","4b69cea1137a13646ae86403d67fccdb"],["/messageboard/index.html","13ad365a1f77ec53eb056f994915cc07"],["/navigate/index.html","670cb0fbb92d7c23b3cdbcc5e31efd68"],["/page/index.html","5961c56fb4246962d79e240a116a66f4"],["/pic/0.jpg","0dd8d7950649e3eed43ca6284d2bc541"],["/pic/0avator.gif","51a36fe6d24103db317173447fe5aeb3"],["/pic/0facv.png","2212501e89761b17a8ae220bd8c7befe"],["/pic/1.jpg","b0c9f77431e4b9953d6226da63351150"],["/pic/10.jpg","4d7ce9494c5d51d753c469f77034cfb5"],["/pic/11.jpg","54eaa9ec7468d3fda8401603a13f0748"],["/pic/12.jpg","eff7cb33912ab582ed8eeddee23ee90a"],["/pic/13.jpg","27ef8f73d752e2b3ac93caaa7a23a93f"],["/pic/14.jpg","081ea058f3d17daeddef58c1688c79c0"],["/pic/15.jpg","922e4dd386fba51e3fbeabc4077e842e"],["/pic/16.jpg","74a368834bc6cc878eb0f5ddda0e0cca"],["/pic/17.jpg","e7335ba6281c0f0c96c7f2cf6ba061c9"],["/pic/18.jpg","209f085afca9084bd2c51c18c2fbb2a7"],["/pic/19.jpg","2eed87610aa1e04da492e3dac7afa878"],["/pic/2.jpg","df7051b348947378b3bf4a1d41da91d9"],["/pic/20.jpg","afbbfe513b5182e81a4be406dd87e005"],["/pic/21.jpg","00f15a79cd8278a4a7d9ffaf84b39206"],["/pic/22.jpg","74d6793b2a6c302deb0e6bdb1855dde2"],["/pic/23.jpg","ccc6217ca8ccabc9636a7cf9867701e3"],["/pic/24.jpg","43fd5396fecbeb27a628518fa63f7eb8"],["/pic/25.jpg","dd9d383c0fc1462f7d20aa6835fde0ec"],["/pic/26.jpg","5961f5fa1d0b09e9b24e636698f47074"],["/pic/27.jpg","231b4c5d18f27646b1a05e8a892e19e4"],["/pic/28.jpg","23b2ae3a0da29a61fd4be8766e0eb2f6"],["/pic/29.jpg","9b1dc99132d870fc75cbde534a22bded"],["/pic/3.jpg","f8cadf208debafd93dcd3061a51836c1"],["/pic/30.jpg","38a2c5898ecd1d918341524c705948d3"],["/pic/31.jpg","7f3efb846771ad96a0e29988a96b5138"],["/pic/4.jpg","2bab27bfa0cd41dbde31b891af88d5d3"],["/pic/5.jpg","4bae2ac744260e200adaa9daeab089ba"],["/pic/6.jpg","9c99fe5cc0332468546914cfb6b6c25b"],["/pic/7.jpg","bd1aa854602ccbe2fadb90eb9312ec9f"],["/pic/8.jpg","a47f6e8578c471f922f732b2965f2cf7"],["/pic/9.jpg","17ad461de760856c04a9b3ad2191a8b3"],["/posts/25858.html","02f625a10247a9c12ccf88cdd98b686b"],["/posts/5539.html","ec7ca38f209f2bff611114254c898025"],["/tags/butterfly/index.html","eccc9fd034f06ec3b5b7b060ad348bd4"],["/tags/github/index.html","3947c70f23ac08412cbaeb090b3c53a1"],["/tags/hexo/index.html","209a49233137ba5bbd1a0260d881cd56"],["/tags/index.html","a0c7dddac4f4671b84fccb7de2bb155d"],["/tags/总结/index.html","4f58c5871ab03b6defb40a0f928f0030"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,!1);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var n,e;"GET"===t.request.method&&(n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))}),function(e){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}(function(){return function c(o,i,s){function f(t,e){if(!i[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var a=i[t]={exports:{}};o[t][0].call(a.exports,function(e){return f(o[t][1][e]||e)},a,a.exports,c,o,i,s)}return i[t].exports}for(var u="function"==typeof require&&require,e=0;e<s.length;e++)f(s[e]);return f}({1:[function(e,t,n){function s(e,t){((t=t||{}).debug||i.debug)&&console.log("[sw-toolbox] "+e)}function c(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||i.cache.name,caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var o,i=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:s,fetchAndCache:function(r,a){var t=(a=a||{}).successResponses||i.successResponses;return fetch(r.clone()).then(function(e){return"GET"===r.method&&t.test(e.status)&&c(a).then(function(n){n.put(r,e).then(function(){var e,t=a.cache||i.cache;(t.maxEntries||t.maxAgeSeconds)&&t.name&&(e=function(e,n,t){var r=e.url,a=t.maxAgeSeconds,c=t.maxEntries,o=t.name,i=Date.now();return s("Updating LRU order for "+r+". Max entries is "+c+", max age is "+a),f.getDb(o).then(function(e){return f.setTimestampForUrl(e,r,i)}).then(function(e){return f.expireEntries(e,c,a,i)}).then(function(e){s("Successfully updated IDB.");var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){s("Done with cache cleanup.")})}).catch(function(e){s(e)})}.bind(null,r,n,t),o=o?o.then(e):e())})}),e.clone()})},openCache:c,renameCache:function(t,e,n){return s("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return c(e).then(function(e){return e.add(t)})},uncache:function(t,e){return c(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),i.preCacheItems=i.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var f="store",u="timestamp",a={};t.exports={getDb:function(e){return e in a||(a[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open("sw-toolbox-"+r,1);n.onupgradeneeded=function(){n.result.createObjectStore(f,{keyPath:"url"}).createIndex(u,u,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),a[e];var r},setTimestampForUrl:function(r,a,c){return new Promise(function(e,t){var n=r.transaction(f,"readwrite");n.objectStore(f).put({url:a,timestamp:c}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return o=e,s=r,((i=t)?new Promise(function(e,t){var r=1e3*i,a=[],n=o.transaction(f,"readwrite"),c=n.objectStore(f);c.index(u).openCursor().onsuccess=function(e){var t,n=e.target.result;n&&s-r>n.value[u]&&(t=n.value.url,a.push(t),c.delete(t),n.continue())},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(t){return r=e,((s=n)?new Promise(function(e,t){var a=[],n=r.transaction(f,"readwrite"),c=n.objectStore(f),o=c.index(u),i=o.count();o.count().onsuccess=function(){var r=i.result;s<r&&(o.openCursor().onsuccess=function(e){var t,n=e.target.result;n&&(t=n.value.url,a.push(t),c.delete(t),r-a.length>s&&n.continue())})},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var r,s});var o,i,s}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),c=e("./router"),o=e("./options");t.exports={fetchListener:function(e){var t=c.match(e.request);t?e.respondWith(t(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=o.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,o.cache.name))},installListener:function(e){var t=o.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(t){return Promise.all(o.preCacheItems).then(r).then(a.validatePrecacheInput).then(function(e){return a.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href;t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){function r(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=a+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=r,this.handler=n}var a=new URL("./",self.location).pathname,c=e("path-to-regexp");r.prototype.makeHandler=function(e){var n,r;return this.regexp&&(n=this.regexp.exec(e),r={},this.keys.forEach(function(e,t){r[e.name]=n[t+1]})),function(e){return this.handler(e,r,this.options)}.bind(this)},t.exports=r},{"path-to-regexp":15}],6:[function(e,t,n){function i(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;)new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next();return a}function a(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null}var f=e("./route"),u=e("./helpers");["get","post","put","delete","head","any"].forEach(function(r){a.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),a.prototype.add=function(e,t,n,r){var a;r=r||{},a=t instanceof RegExp?RegExp:(a=r.origin||self.location.origin)instanceof RegExp?a.source:a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var c=new f(e,t,n,r);this.routes.has(a)||this.routes.set(a,new Map);var o=this.routes.get(a);o.has(e)||o.set(e,new Map);var i=o.get(e),s=c.regexp||c.fullUrlRegExp;i.has(s.source)&&u.debug('"'+t+'" resolves to same regex as existing route.'),i.set(s.source,c)},a.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,a=n.pathname;return this._match(e,i(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],t)},a.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],c=a&&a.get(e.toLowerCase());if(c){var o=i(c,n);if(0<o.length)return o[0].makeHandler(n)}}return null},a.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new a},{"./helpers":1,"./route":5}],7:[function(e,t,n){var c=e("../options"),o=e("../helpers");t.exports=function(r,e,a){return a=a||{},o.debug("Strategy: cache first ["+r.url+"]",a),o.openCache(a).then(function(e){return e.match(r).then(function(e){var t=a.cache||c.cache,n=Date.now();return o.isResponseFresh(e,t.maxAgeSeconds,n)?e:o.fetchAndCache(r,a)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var a=e("../options"),c=e("../helpers");t.exports=function(t,e,r){return r=r||{},c.debug("Strategy: cache only ["+t.url+"]",r),c.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||a.cache,n=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var f=e("../helpers"),u=e("./cacheOnly");t.exports=function(o,i,s){return f.debug("Strategy: fastest ["+o.url+"]",s),new Promise(function(t,n){function r(e){c.push(e.toString()),a?n(new Error('Both cache and network failed: "'+c.join('", "')+'"')):a=!0}function e(e){e instanceof Response?t(e):r("No result returned")}var a=!1,c=[];f.fetchAndCache(o.clone(),s).then(e,r),u(o,i,s).then(e,r)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var u=e("../options"),p=e("../helpers");t.exports=function(o,e,i){var s=(i=i||{}).successResponses||u.successResponses,f=i.networkTimeoutSeconds||u.networkTimeoutSeconds;return p.debug("Strategy: network first ["+o.url+"]",i),p.openCache(i).then(function(e){var t,n,r,a=[];f&&(r=new Promise(function(a){t=setTimeout(function(){e.match(o).then(function(e){var t=i.cache||u.cache,n=Date.now(),r=t.maxAgeSeconds;p.isResponseFresh(e,r,n)&&a(e)})},1e3*f)}),a.push(r));var c=p.fetchAndCache(o,i).then(function(e){if(t&&clearTimeout(t),s.test(e.status))return e;throw p.debug("Response was an HTTP error: "+e.statusText,i),n=e,new Error("Bad response")}).catch(function(t){return p.debug("Network or response error, fallback to cache ["+o.url+"]",i),e.match(o).then(function(e){if(e)return e;if(n)return n;throw t})});return a.push(c),Promise.race(a)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),a=e("./router"),c=e("./helpers"),o=e("./strategies"),i=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),t.exports={networkOnly:o.networkOnly,networkFirst:o.networkFirst,cacheOnly:o.cacheOnly,cacheFirst:o.cacheFirst,fastest:o.fastest,router:a,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function o(e,t){for(var n,r=[],a=0,c=0,o="",i=t&&t.delimiter||"/";null!=(n=R.exec(e));){var s,f,u,p,d,h,l,b,g,m,v,y,x=n[0],w=n[1],j=n.index;o+=e.slice(c,j),c=j+x.length,w?o+=w[1]:(s=e[c],f=n[2],u=n[3],p=n[4],d=n[5],h=n[6],l=n[7],o&&(r.push(o),o=""),b=null!=f&&null!=s&&s!==f,g="+"===h||"*"===h,m="?"===h||"*"===h,v=n[2]||i,y=p||d,r.push({name:u||a++,prefix:f||"",delimiter:v,optional:m,repeat:g,partial:b,asterisk:!!l,pattern:y?y.replace(/([=!:$\/()])/g,"\\$1"):l?".*":"[^"+E(v)+"]+?"}))}return c<e.length&&(o+=e.substr(c)),o&&r.push(o),r}function d(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function r(u){for(var p=new Array(u.length),e=0;e<u.length;e++)"object"==_typeof(u[e])&&(p[e]=new RegExp("^(?:"+u[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},a=(t||{}).pretty?d:encodeURIComponent,c=0;c<u.length;c++){var o=u[c];if("string"!=typeof o){var i,s=r[o.name];if(null==s){if(o.optional){o.partial&&(n+=o.prefix);continue}throw new TypeError('Expected "'+o.name+'" to be defined')}if(b(s)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but received `'+JSON.stringify(s)+"`");if(0===s.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var f=0;f<s.length;f++){if(i=a(s[f]),!p[c].test(i))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but received `'+JSON.stringify(i)+"`");n+=(0===f?o.prefix:o.delimiter)+i}}else{if(i=o.asterisk?encodeURI(s).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):a(s),!p[c].test(i))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but received "'+i+'"');n+=o.prefix+i}}else n+=o}return n}}function E(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function h(e,t){return e.keys=t,e}function l(e){return e.sensitive?"":"i"}function i(e,t,n){b(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,c="",o=0;o<e.length;o++){var i,s,f=e[o];"string"==typeof f?c+=E(f):(i=E(f.prefix),s="(?:"+f.pattern+")",t.push(f),f.repeat&&(s+="(?:"+i+s+")*"),c+=s=f.optional?f.partial?i+"("+s+")?":"(?:"+i+"("+s+"))?":i+"("+s+")")}var u=E(n.delimiter||"/"),p=c.slice(-u.length)===u;return r||(c=(p?c.slice(0,-u.length):c)+"(?:"+u+"(?=$))?"),c+=a?"$":r&&p?"":"(?="+u+"|$)",h(new RegExp("^"+c,l(n)),t)}var b=e("isarray");t.exports=function c(e,t,n){return b(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return h(e,t)}(e,t):b(e)?function(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(c(e[a],t,n).source);return h(new RegExp("(?:"+r.join("|")+")",l(n)),t)}(e,t,n):(r=t,i(o(e,a=n),r,a));var r,a},t.exports.parse=o,t.exports.compile=function(e,t){return r(o(e,t))},t.exports.tokensToFunction=r,t.exports.tokensToRegExp=i;var R=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){var r,a,c,o=Cache.prototype.addAll;(c=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/))&&(r=c[1],a=parseInt(c[2])),o&&(!c||"Firefox"===r&&46<=a||"Chrome"===r&&50<=a)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var a=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return a.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})},{}]},{},[13])(13)}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"https://yanyunpo.github.io/"});