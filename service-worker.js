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
    "revision": "b5cb1dd3b4933d35652c4b66fff9be7b"
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
    "url": "assets/js/18.6497c1f0.js",
    "revision": "6c8282f4b22b5bd4b31a0c9650a659f9"
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
    "url": "assets/js/app.af0f3598.js",
    "revision": "e6a4bd50caeeaa1095e8df63afff235d"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "b46f507c12fa000f85ee2e2c2930baf2"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "4a9ad15e4132fc98efb7af66e362a8ea"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "ae743cc1079e344f9d766fa607e01ce5"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "39794fa16d554b2421cc4f0cb1da7c31"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "66943943b8a6c8c2f71169243b17da5e"
  },
  {
    "url": "blogs/index.html",
    "revision": "eab0dd2ca61a9631c1286c0cb6af3a4b"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "ebcca3eee982ec5dc432a55c881c4b12"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "dd531ead90f57d421178d866c80e0198"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "6753ffbd8349a07679bac11fbca99031"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "e25feb0e891df5d25da121bd9a8ff35d"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "795a4787da960bdf473cae200010aba8"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "e29ccdaf1e9a4fc448237e679bccde73"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "72297956aa336e5cb2f9fd64daa2a115"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "405fce2e0243cd48eff846cfcde874ac"
  },
  {
    "url": "categories/git/index.html",
    "revision": "c6c3716c848503b9b5301858e535e61e"
  },
  {
    "url": "categories/index.html",
    "revision": "bddcde910d0b96d5fe16886011885e1c"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "f9455c76bfa4e2e9cd102593f584fde7"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "6bd04d5f08156facdf1a90715f18aa7f"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "6afd8a7ff59addfcc3a56f400d6c53d4"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "8b0b7a33f47b84de16fc4d3a2d1b9e13"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "1a00e5a05958badb12aed1f726bc50b3"
  },
  {
    "url": "tag/git/index.html",
    "revision": "0fafeecbaaa2e66f85ffd0da64a4aa02"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "7f5bf018e55ebce8840cf25c2d95a5de"
  },
  {
    "url": "tag/github/index.html",
    "revision": "97fd600115e9d8de4ef1e5b3d1df087a"
  },
  {
    "url": "tag/index.html",
    "revision": "3557e7d1e763104be2b359a0dcbce627"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "50ece329c8f10253702ac9d0f878cdc0"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "b18e73d624256b96796b66c6efe99d13"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "6a2b5c2fab3cb804b7af76f75bfa2e03"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "43db992dcb2b463be171719bebada526"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "51d578f7be9d3909f1daee6ae7cb8d8f"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "ce9949f6a39bcdad07483406427f03d5"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "7a012a70665f83863e9eaaf30b354172"
  },
  {
    "url": "timeline/index.html",
    "revision": "1f17281dc023395a7f55ef444b663340"
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
