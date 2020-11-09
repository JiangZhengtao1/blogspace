/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d6b5b19c7314e5accab2691bf00a5975"
  },
  {
    "url": "about/index.html",
    "revision": "32809e52c8b9bdf8a20371ffb57238a9"
  },
  {
    "url": "assets/css/0.styles.200d2a76.css",
    "revision": "45d7459368f021338762aea3c2d6248d"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.36942bb3.js",
    "revision": "2e5ac9e0302cf1938c4eb14b4e378313"
  },
  {
    "url": "assets/js/10.d5e3d9e9.js",
    "revision": "4b0261a23cd40e12a5184c4abdf4a3b4"
  },
  {
    "url": "assets/js/11.e1ad0362.js",
    "revision": "51da6ed83d363acdb40a477339e5f1b6"
  },
  {
    "url": "assets/js/12.2c67e3e0.js",
    "revision": "64d28061a500fb22b2e28f1b265518b3"
  },
  {
    "url": "assets/js/13.28b3a702.js",
    "revision": "a31550455ee4c61efbfb5ef6c6b4b338"
  },
  {
    "url": "assets/js/14.b072088e.js",
    "revision": "df5cc93f300f0c13c951025458e328cc"
  },
  {
    "url": "assets/js/15.035e5033.js",
    "revision": "f4d8f1735a0229b14832515d059678b0"
  },
  {
    "url": "assets/js/16.28ce64fc.js",
    "revision": "ed1bbfd1a65288f73ce5b1191fc0cbfc"
  },
  {
    "url": "assets/js/17.65cd4c58.js",
    "revision": "7041e255fc1a57ba1072f80ebf35b945"
  },
  {
    "url": "assets/js/18.6d32ad66.js",
    "revision": "e3d36bd6e022aa616f504cbd2a46d1c7"
  },
  {
    "url": "assets/js/19.fbf513dc.js",
    "revision": "d931495da0e2667c97e7e52de4513935"
  },
  {
    "url": "assets/js/20.1c8a74bf.js",
    "revision": "e55f455038ee2a7e158e454e338317c4"
  },
  {
    "url": "assets/js/21.62f749de.js",
    "revision": "93ded2c90d295c6be64f96af68b38d32"
  },
  {
    "url": "assets/js/22.ebb04497.js",
    "revision": "537f58ebf349b7774c7602e85f20f7c9"
  },
  {
    "url": "assets/js/23.f53bec0f.js",
    "revision": "029d307b39d3cb56a93472f70aaf6901"
  },
  {
    "url": "assets/js/24.b424dfb4.js",
    "revision": "3e810a4182e1d83599441c96a60315dc"
  },
  {
    "url": "assets/js/25.f6f66d0a.js",
    "revision": "c41a9122e9ec1c4acd6418d9feebfada"
  },
  {
    "url": "assets/js/26.30e055cd.js",
    "revision": "5d6102a25a12fa213ea9ae81b0b345c8"
  },
  {
    "url": "assets/js/27.ab9fdcc5.js",
    "revision": "3e77b8f378d0775a90cfb93051b737cd"
  },
  {
    "url": "assets/js/28.c8a8b7af.js",
    "revision": "c6ce9a2d3bb20a659f22e9de9a411890"
  },
  {
    "url": "assets/js/29.591b087f.js",
    "revision": "510289821b8f86267aa5b23533364f11"
  },
  {
    "url": "assets/js/3.ceb7af67.js",
    "revision": "63d04cab7972aec070b097c8c8b15db2"
  },
  {
    "url": "assets/js/30.d7f89d43.js",
    "revision": "f70c981c7a0846a7f4674c7247f5c189"
  },
  {
    "url": "assets/js/31.9005c8c8.js",
    "revision": "4e0613a4f8056b45f417a6f18b03ee99"
  },
  {
    "url": "assets/js/32.ee94b75f.js",
    "revision": "5dea023a2af9349e77eeaa97988f498e"
  },
  {
    "url": "assets/js/33.f3f401c4.js",
    "revision": "0366380a9053fe9631c8b88ff5e472e8"
  },
  {
    "url": "assets/js/34.dfb08b0c.js",
    "revision": "aecece9385344e869e4f4ba6161f8682"
  },
  {
    "url": "assets/js/35.02cb4a3b.js",
    "revision": "289a6e4cd3110e842fc9379c80a1b25d"
  },
  {
    "url": "assets/js/4.1dae492b.js",
    "revision": "91540e1820a5e3db8681afe63dbd542e"
  },
  {
    "url": "assets/js/5.b22a7363.js",
    "revision": "754618d1e853c1fd328ba023e9f9a5fd"
  },
  {
    "url": "assets/js/6.3e5a976c.js",
    "revision": "f60b455e06f7ad4c3df8b4b3969c724a"
  },
  {
    "url": "assets/js/7.e0f25345.js",
    "revision": "a19b7c1ee50f083a98209270069afdf0"
  },
  {
    "url": "assets/js/8.481ace49.js",
    "revision": "58cfcbe846cb6dce17efb01f58bdca0c"
  },
  {
    "url": "assets/js/9.2a966058.js",
    "revision": "894049494cfc6ed73d0fddd0d1d3e187"
  },
  {
    "url": "assets/js/app.e6a4f65d.js",
    "revision": "278dd8460fe973141778bf6ee31a196e"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "c8c1b022e580235a16633c500045b228"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "aa385ca072e625e2c0e30be278a8d12e"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "f34a5a34b330bcbca2803197cb68b18b"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "6284802621acead7b9a57d1e5b73c5df"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "fd5d943e0d8fa8554bd26f788d192482"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "1a891c59554c6a8d7c491945fa9d2d40"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "134028a26db00a1b1fcc17ca8b089838"
  },
  {
    "url": "blogs/index.html",
    "revision": "b9eb9fe755ed5f81838717b9ab19bed4"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "c0dfdad27b4b3de76d3e41fbe115a9fd"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "69af556ab6aebde05be633dbc2902508"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "33b710097806b680e9d0a3581e0f2bee"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "12df98f516a7600047401ca12dd15375"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "f3c25cc0756e250ada99eff99bae56fe"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "7556c308b47c5c6961d351fe35bf6608"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "09f49a2b05a92f1b58c77ea7d91fe1fb"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "d6d45588d9713ffdeeb5195a5c4f25a1"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "47c70f95e8663f5e6ee95a4f828f45b0"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "6546acdbcab582a3ede9299972cc4d56"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "6428e2184e19a755286cbfab2a2f9efb"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "3baec77607f51b01284e903f86345a4d"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "cfcd2e8d5d6cd684e69bb0d733440a3c"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "fa70df9b8c66e64d4dba403be8ff8cb1"
  },
  {
    "url": "categories/index.html",
    "revision": "aa5fd979aa8c24bfeda481eb2baa3ad0"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "7806531c10dae4eceeeb2581cea41fc2"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "4804dbb927aa670fc16e9991b6f731e0"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "b8417181717d19fb482dcf26de1d657f"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "18558a644ff9222f4608341e5ddf7380"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "0f659e7fe86276ba8c51e9971889b44e"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "060668aabd92b1fb5c2f2b67af44ec9d"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "444f06bc5f903b79d6abab18c63aee3f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d22dbc7c23acbf4c68ddcba485c2031a"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "b67b8bd5f2706ae2a808b37d032f9078"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "6c941b3a00d044c0e24a46e8943927b4"
  },
  {
    "url": "tag/github/index.html",
    "revision": "626dd2612ff6785ba6d9035afb7ed2c8"
  },
  {
    "url": "tag/index.html",
    "revision": "6cbf4038e49fe758a4cc8082b36269fd"
  },
  {
    "url": "tag/String/index.html",
    "revision": "08071ca9d85d90c6b499a376026edae4"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "229b30a8ac8ad093f79746de0f08cdee"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "19e186df624bfabed8b7193ed4beb9be"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "5c569c9152bdf5eddaa8e8bc45d8d92b"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "238b8da06b8b21422e32b712217cd2bb"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "e4d7a2d71ae8ba775af5b7f679dcc460"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "9ab79775d7c3ce2f3a60a4c47a52bb44"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "53ad60d9b7f7a729843e099cb632a4c3"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "5dabaee2ed5354fcae31f338042d59b9"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "5c01cf8672c1e062a56ee7acf28bf51f"
  },
  {
    "url": "timeline/index.html",
    "revision": "66b930f47c2722d57777358238d4c518"
  },
  {
    "url": "vx.jpg",
    "revision": "91bb9e69cdde32b6b2249479db6a7caa"
  },
  {
    "url": "夏影.jpg",
    "revision": "9ac2395672f4660123522163123d8738"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
