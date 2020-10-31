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
    "revision": "37826c2fbf8040a827dcb6121694bcd3"
  },
  {
    "url": "assets/css/0.styles.837c8f3f.css",
    "revision": "e6e18b551db12e8f092b1bbb46c3dc60"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.2dbf3441.js",
    "revision": "2e5ac9e0302cf1938c4eb14b4e378313"
  },
  {
    "url": "assets/js/10.1a70c18b.js",
    "revision": "4b0261a23cd40e12a5184c4abdf4a3b4"
  },
  {
    "url": "assets/js/11.1dcd8756.js",
    "revision": "51da6ed83d363acdb40a477339e5f1b6"
  },
  {
    "url": "assets/js/12.ba9958ef.js",
    "revision": "64d28061a500fb22b2e28f1b265518b3"
  },
  {
    "url": "assets/js/13.99ed7372.js",
    "revision": "b149447faf6fbee91dc877b98c02d762"
  },
  {
    "url": "assets/js/14.16d5c231.js",
    "revision": "8e7325d0e7b500c0cfb266474afa0523"
  },
  {
    "url": "assets/js/15.05b621a1.js",
    "revision": "3db704ad4d66cd050b7d172b7cd67db6"
  },
  {
    "url": "assets/js/16.5ddbe243.js",
    "revision": "d558fc59ac9cee3efcff2e90d90fcff7"
  },
  {
    "url": "assets/js/17.264c0092.js",
    "revision": "1df6c9cb9603b1ca1f8430b5e9292298"
  },
  {
    "url": "assets/js/18.1a3d9bce.js",
    "revision": "4a4128556c8e3ecc9db71fe586ef7e16"
  },
  {
    "url": "assets/js/19.3a0b63ae.js",
    "revision": "945488f995f9756d179ebde4c1904d90"
  },
  {
    "url": "assets/js/20.397d2f15.js",
    "revision": "a8960dae1e66f33a729b60b8f742806b"
  },
  {
    "url": "assets/js/21.c324055a.js",
    "revision": "1d5c6c6e09587b3ae26bc25ffff53ec9"
  },
  {
    "url": "assets/js/22.33e82bed.js",
    "revision": "35e90ccdf5b6c98f8c1da330039fc63e"
  },
  {
    "url": "assets/js/23.7e1dd33d.js",
    "revision": "b4926579ee23503b494c6da5dc989ffe"
  },
  {
    "url": "assets/js/24.5e583e50.js",
    "revision": "f907882acbee1f2e6a236fa44a4533db"
  },
  {
    "url": "assets/js/25.3ca518bd.js",
    "revision": "26c34dfc58305249b4b2cc8e10e338d2"
  },
  {
    "url": "assets/js/3.7afd074d.js",
    "revision": "63d04cab7972aec070b097c8c8b15db2"
  },
  {
    "url": "assets/js/4.4187e4e5.js",
    "revision": "91540e1820a5e3db8681afe63dbd542e"
  },
  {
    "url": "assets/js/5.0b3c76e3.js",
    "revision": "754618d1e853c1fd328ba023e9f9a5fd"
  },
  {
    "url": "assets/js/6.d44744a5.js",
    "revision": "f60b455e06f7ad4c3df8b4b3969c724a"
  },
  {
    "url": "assets/js/7.2ed6d0e6.js",
    "revision": "a19b7c1ee50f083a98209270069afdf0"
  },
  {
    "url": "assets/js/8.5747a1c5.js",
    "revision": "7bb46c057c89f9bfd59ff37a32979551"
  },
  {
    "url": "assets/js/9.dae0942e.js",
    "revision": "e3a9e6e985cd09aae0b59e8b3bad0fef"
  },
  {
    "url": "assets/js/app.6b40d309.js",
    "revision": "48116edb578d9d2f49b208b5a34bf0f0"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "e148907e22ca64682f7b92cca9049b2b"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "7eac7ea6165a0eefe14edd5ec4a029c9"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "a1f7eeface6ea04e4b20a12e906a02cc"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "91584f55f9380575bdb9e27f8c490887"
  },
  {
    "url": "blogs/index.html",
    "revision": "b46c6afc53c35bb570c8925218d048e9"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "c03ca44264e7aaa24c4fa9392c5d0334"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "f928cbbdd4f0cf63bbc7abfeb16a316b"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "02eb55b94548aba68a4f81edd8101898"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "f3f01d87d14a779248deea26e9e6ab67"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "969ba0f9a6a4b0a91d79d78f10a4890d"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "11fcd528965c666f78e0d88972491632"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "5b01a2e6f87523f95d2629632bea08f3"
  },
  {
    "url": "categories/git/index.html",
    "revision": "63eadeeeb74dc0c49d74c27c03e62c58"
  },
  {
    "url": "categories/index.html",
    "revision": "5473d2d4c356ae5890f7386e4d9000ae"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "6f3d96f3ac8c625a3d04b4093b50c8a7"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "db05ef17b6469dcc6fbe364c8c06a3ad"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "99894d80128598f5b2b65a619e12512b"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "7e8c1eafec0060ccf7371897742457ae"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "fd7ae3e99326631286ab451fd9b73e97"
  },
  {
    "url": "tag/git/index.html",
    "revision": "50b0959cd51fc4e43aa49098cf319c50"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "6cc11ce68aa0cf517e7c6f284fcf93ff"
  },
  {
    "url": "tag/github/index.html",
    "revision": "66679ce71f457990fff1884521713dd5"
  },
  {
    "url": "tag/index.html",
    "revision": "3d9c7b24eb36bb3d41c67341acafaac8"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "a3d3a030a0be61e954688d60068279df"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "ad38723541aba0627c4ca01da916a030"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "b5b2d894e27587c669d1d9b50344971b"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "b99a95d1bdd5e974f3dacd936626a63d"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "c3c70d84a4ed779a521d582827ec4320"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "960730c9da96f0804dc86f983638bc4e"
  },
  {
    "url": "timeline/index.html",
    "revision": "800c91c04efb7d598ca22ca80ff35c67"
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
