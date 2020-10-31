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
    "revision": "d00ca14091410ce356051eb8c8b97578"
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
    "url": "assets/js/13.ca133261.js",
    "revision": "2d22b286bf41a6537adc5cdc24f75225"
  },
  {
    "url": "assets/js/14.ce799c8e.js",
    "revision": "c9f4f28f04b373f19f8ca950aaab7a0a"
  },
  {
    "url": "assets/js/15.0365bd32.js",
    "revision": "d2d8f775390a24f8647e23513267945a"
  },
  {
    "url": "assets/js/16.ffd9d452.js",
    "revision": "7f718ffe08e758a361071f441b217363"
  },
  {
    "url": "assets/js/17.e9d5a0ec.js",
    "revision": "f12e91c90c6b221dca7b406a8d4cbc7b"
  },
  {
    "url": "assets/js/18.6cd4ad98.js",
    "revision": "639701e88d04fb164f7a9908c25774b8"
  },
  {
    "url": "assets/js/19.12b5f9a2.js",
    "revision": "64d40b46e4f5bc6da45507a1aa74b511"
  },
  {
    "url": "assets/js/20.789baeb4.js",
    "revision": "bfce05e02e0c35531ffcbcd961d9ef5e"
  },
  {
    "url": "assets/js/21.b463b816.js",
    "revision": "db4b5c4e1fefc241923a5c1dda3ade0b"
  },
  {
    "url": "assets/js/22.b5d5da70.js",
    "revision": "5aefb60fab508a427b0c6ca0df4e986e"
  },
  {
    "url": "assets/js/23.bc49e2e3.js",
    "revision": "d1ebcae9983746280b3da1645db45818"
  },
  {
    "url": "assets/js/24.4548d98d.js",
    "revision": "69b9f71c57c2d4640265d17a500e55db"
  },
  {
    "url": "assets/js/25.72821999.js",
    "revision": "81cebdf06a40b446e443879f8133f496"
  },
  {
    "url": "assets/js/26.015442cc.js",
    "revision": "50929a226ef508589ad48f7714768866"
  },
  {
    "url": "assets/js/27.adc94896.js",
    "revision": "b9772d04e885c35a4acbc34132a7acfc"
  },
  {
    "url": "assets/js/3.ceb7af67.js",
    "revision": "63d04cab7972aec070b097c8c8b15db2"
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
    "url": "assets/js/8.ee414d06.js",
    "revision": "7bb46c057c89f9bfd59ff37a32979551"
  },
  {
    "url": "assets/js/9.90edd236.js",
    "revision": "1cbef74e6fac04c6ea2e1a5844c6ec7e"
  },
  {
    "url": "assets/js/app.2d6aa846.js",
    "revision": "c1f742b6a5acf0b9627367a44a08f1f9"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "b7734eb01345e7db69d024416b615b6d"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "6b4ee879829596b234ffbaa8e1c62cac"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "1a5c81863d10184d438cc9bb42ba01a4"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "1834ea2692b55872bce7a104a69383fa"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "2d3a909876cb3e9ecdea133a59177e3a"
  },
  {
    "url": "blogs/index.html",
    "revision": "2c1e713cf7504f93bdb7c723e08c2270"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "882674baf7b1df9d12e3560ade8da03a"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "60fc2e047cc4128d594a9999913c70e2"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "7b9f2d2749f01d7c270ed3897b639c36"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "92acaa59317b252a33fe74896d3ae79c"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "d410e4a8607f40eb62069ea772d955b0"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "637190638ed5ed8bde16f88471f2c3ea"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "862b720c138c0022fcaacb98a38b8e54"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "9c66ab0a44f928ce7c00ad05b0eb85a3"
  },
  {
    "url": "categories/git/index.html",
    "revision": "7760b5b66961bbc338a7f2a23096f9ec"
  },
  {
    "url": "categories/index.html",
    "revision": "004c6575c7c691cad68307e322368ce8"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "4ba86c422dc047ce444cc287bd9bfbce"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "a4a62f8df6bd74581b23b3ed41f13447"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "2d4601949d4be5c37780380d818aab93"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "10520d928a90635e07fe2f09334d8815"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "29104edb3e3fbadd5d1512c5b8312991"
  },
  {
    "url": "tag/git/index.html",
    "revision": "569f1d27d4fe364ee8f051cb8015ad0e"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "492dfc2d3c0a6849abb346d8d3008e2b"
  },
  {
    "url": "tag/github/index.html",
    "revision": "cdd063702f2b60318722dfd4296d2842"
  },
  {
    "url": "tag/index.html",
    "revision": "ac39756b9e9d3b10f11d8e76e17779f9"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "ea041ca08159888b2614cff6fb114551"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "d5d6fa16874260893980f2815c5831d2"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "c734e9f54f5c4f3d5e80daeca7b734b4"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "cc58f7dd4c8e82d22efb314569547677"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "f7778774fe7a0059f568bd1ef5bcef8d"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "29e11f31f7643c383ea5fcc855afea3c"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "5d0d366ca83af89b061d4e992b3dd1b7"
  },
  {
    "url": "timeline/index.html",
    "revision": "d5c09989014a6dc79278c7f9d70a004e"
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
