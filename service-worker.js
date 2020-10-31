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
    "revision": "508e384d9396f3542e7fde1b49c08b03"
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
    "url": "assets/js/app.ce8f804b.js",
    "revision": "2313d9deaf1c0e9a585de1c0443bb002"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "c74f8bcc27c947c5c7a70716111cfbbb"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "1493abaf9279e583dc60add10a1109d2"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "24311c581e3cf0becf2ce62e39d621a2"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "f23f6a7a40f6e80b65f99ce67af718a0"
  },
  {
    "url": "blogs/index.html",
    "revision": "296227e89270409be2c1af614a6dd934"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "82d5e3f42eb7d5ad97629e869a9ef70a"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "594ff4b4f40b648a67833d4ac1ee38cf"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "428c79ac91d339cc3d774596ec9873d6"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "8bb7bf8d48e826d049eb2e814caeab8d"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "b2e47ca31ad54b4187c0fd38450a46ac"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "93a15a3cfbe8afff5b0a0df46d8243c8"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "4d813c158e18855f44583ecde62d26f4"
  },
  {
    "url": "categories/git/index.html",
    "revision": "2b751954aabdc8d8c9726a1301eaf066"
  },
  {
    "url": "categories/index.html",
    "revision": "4b44053168f2dce23b278e0eaa28b311"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "d8af4d2271d0bb263f0e1465c9756c9a"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "734959b27683d69b54011a13ad8c5398"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "b512befd8222d198b03c5a16ba5f6b5d"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "66a326df2221706787d64e9fbc99b062"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "0df59209bbd987a69d9d0a06ce264517"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f289ea4eb57f8800e97ebec33bb95c36"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "b8a0481c77b9f367f87c55c60556028b"
  },
  {
    "url": "tag/github/index.html",
    "revision": "19ae58161d257ea225079d8ee015bb79"
  },
  {
    "url": "tag/index.html",
    "revision": "ed04dfd5e2ed63a6037bd834f582b0ed"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "d4911518ebd497a16509ca9edf837e51"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "bb998ea4d8dd382c46c8fd1c0d63dbcc"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "1fa94c5f5bec510c30a982fdfcebab01"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "373dd3aae64d61c16c9da80351dd1adb"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "fbbed1b43c8e3141c9c879c125ad2756"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "ba3fd2b21fef2121338f0c796f8da819"
  },
  {
    "url": "timeline/index.html",
    "revision": "c7f98fde60569adecbb0f255b0020a95"
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
