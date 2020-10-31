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
    "revision": "b12ec70d23a610e0106ffc91d7c05f1d"
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
    "url": "assets/js/14.e8c0cf45.js",
    "revision": "03057bfba6b64ee98ba059c7e2104841"
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
    "url": "assets/js/17.bfa94fc7.js",
    "revision": "cba0b72f9c0fedc1cc7c294d08f45db0"
  },
  {
    "url": "assets/js/18.e3840e01.js",
    "revision": "b667b9ea1d5bf2bd099df82086d40278"
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
    "url": "assets/js/24.207ccac6.js",
    "revision": "f4bb90e0373c120b9706759cb07f6fd8"
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
    "url": "assets/js/app.c3f6a54f.js",
    "revision": "1ac2afdeb6e8a0a66ece1ca10a510aa3"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "49cee88e5500f0e93573bc4c90f6b95c"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "3221e253f25958e06aa9a4fb18fedb65"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "ce332b8c0a43b660be9e762c3b77db37"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "8dd415f64c54240940de0c33a3cb7698"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "0072be58412890d6617274b2846a1aaf"
  },
  {
    "url": "blogs/index.html",
    "revision": "2feae7b1f58b73bfdc97bdb4bd53be30"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "debf99d5036647b41c840f7fec829662"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "be67c709d01d50dcd653cbf7a2ab546a"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "9de5f8016105046439ae8dec0b7e1768"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "19d9ee1dee6b6f61f6c5d68f9c1347f6"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "c37e9fa793eca50a52df52ab31796e73"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "e35d1b0526f98c8f68035ef5dc40db8e"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "e0070e0e0510338acfe404f324a80af7"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "c7497caae80046272ad7fa6f98e09a49"
  },
  {
    "url": "categories/git/index.html",
    "revision": "b6b5f77198c1b2a9020ae1f0e61efe13"
  },
  {
    "url": "categories/index.html",
    "revision": "6b975376ebc829390b0e5747ba34ce35"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "cdd9264e079286e70e57579988fb743f"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "230c29a51c74ea366e3db074105e763e"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "2aae64904d5313dea8705f7f957330d2"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "5e4fd9147be4b98f5fe813c77b62dfe8"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "d8f3788fec6f6080fd087dd42b90149d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a495fb0c1b27f67f8ff15f31c97ac4bb"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "b8d6837c8889ec403698d19c78918dff"
  },
  {
    "url": "tag/github/index.html",
    "revision": "751416ac1d011b1ab232833565558cf9"
  },
  {
    "url": "tag/index.html",
    "revision": "5f02829a4ec0319415adbc8ae98ef8c5"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "66f0df23d9a0ac046568ba97375fb092"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "0330e68d71644119fe4b1dc0d4d147af"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "b6bb3395816fba4a556edea1807ebf7e"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "75ca962fb985884b8032f604f5906615"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "e9a0e40b0ea330a2c1a840caa9ea8384"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "1fbb5de78f0185d6e6f7b31c3c2d85ec"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "735542356750581deeb270bb52d1d977"
  },
  {
    "url": "timeline/index.html",
    "revision": "c303e5de83381612d708fe3d7429b320"
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
