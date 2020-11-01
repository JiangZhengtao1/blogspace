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
    "revision": "9f90b97accc40ade0ab9816844eba1d1"
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
    "url": "assets/js/14.4a4555d4.js",
    "revision": "27ca8c9cd1f77621c045534e2b5ac011"
  },
  {
    "url": "assets/js/15.d900eb1f.js",
    "revision": "5e43b08953e930a612fa57ae38ac09ca"
  },
  {
    "url": "assets/js/16.536d4646.js",
    "revision": "160e1744ce5187a294f8185a857ddb9b"
  },
  {
    "url": "assets/js/17.e6f08a91.js",
    "revision": "b76ec69ca03eaf983647130d440d7e0c"
  },
  {
    "url": "assets/js/18.30598a26.js",
    "revision": "abf659e63157d2f4dd82e7200c5a600f"
  },
  {
    "url": "assets/js/19.95a0676b.js",
    "revision": "ab757308faff4d5ffbdca9bd37c02855"
  },
  {
    "url": "assets/js/20.b87bc721.js",
    "revision": "0a85fa2ad1c805aefacef08b3fe8fc0b"
  },
  {
    "url": "assets/js/21.acb3a061.js",
    "revision": "c5b9b1387c1ce69845946e18d8415314"
  },
  {
    "url": "assets/js/22.491320d0.js",
    "revision": "8f935afff1095d2f7833c0dfe887eb16"
  },
  {
    "url": "assets/js/23.21c1b15a.js",
    "revision": "0b801c0d7ab302910a0ba443296d4f7e"
  },
  {
    "url": "assets/js/24.aab1371e.js",
    "revision": "1b28ca0c819a3c6c381febda9e42aeb7"
  },
  {
    "url": "assets/js/25.6b1cf56e.js",
    "revision": "a2c0c6a718045b2cb96e5cc50d951123"
  },
  {
    "url": "assets/js/26.887795d0.js",
    "revision": "3e8e2120a11f0ceacf8d868cfecea816"
  },
  {
    "url": "assets/js/27.469afd8f.js",
    "revision": "44da0fff3043e97f47dc8022d89d1136"
  },
  {
    "url": "assets/js/28.c595b9af.js",
    "revision": "41a3e415c4b7141ebea9eb324c5f8307"
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
    "url": "assets/js/9.1257f767.js",
    "revision": "fc63cd6f7667f9681f2ba3dda2649f23"
  },
  {
    "url": "assets/js/app.052cebe1.js",
    "revision": "f200dea5c472b66a6c16136c0152422a"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "36d1aeea3c3de867842d94e6b25ed5a4"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "06dca569d23a485ace760389c31c476a"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "14ed9d6308a239e9f1cb65bb70790591"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "28c2e7d0b0c5910d797d1913c04bf63e"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "b1048ef0421edd589d0f7b0c43a36cd4"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "956eb9f17a0769b3e135cd9d5aa3902e"
  },
  {
    "url": "blogs/index.html",
    "revision": "bfe94c509e4fa173b26030e9aef5e5d6"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "4eb5dfd433b0289e341fac1d32625381"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "8d9b395ddab76bfa36137c7c2550d9fa"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "20a3bc4998abea70d70ff40da0484fcb"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "ac4906a4335926386223bd6d223f3d92"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "6ca88c33e633739f305f4021b493d374"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "3dfc1c3accd34c103f97caa1e54e0859"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "933b7268abd30253bbda9d2d8d6f5a43"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "15a5138d4d86d82c0c723024e237477b"
  },
  {
    "url": "categories/git/index.html",
    "revision": "65a303c9458cd4323e30f960a187407e"
  },
  {
    "url": "categories/index.html",
    "revision": "c21a6a604dae9cd886eac964089a30b1"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "7fafbfe397df831c9c76a1a25b53cd78"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "84b10da47e0f146a4eee5690465e630d"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "1b784a5ccb0234af786745dbb233e692"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "14e3d203aed43fff1e313ad199b7f58f"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "ba91e8baebf4d041c4c61482964824ad"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8e40d21d0ec798498d72838b643e0f0b"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "c02160d04901f1cc55f7a4d3581e5268"
  },
  {
    "url": "tag/github/index.html",
    "revision": "b1167b557b4ef4d56a12f5ab26d1149c"
  },
  {
    "url": "tag/index.html",
    "revision": "7cc1789cc0577aa774475c19b9127ee1"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "e74022cd8102dfcc262e45bcad19fd9d"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "1ef416c08bec9dc50ea185d8ed366f09"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "c5ae0c08ae22e4cb453523de07493caa"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "c7eb06e8ac34e568c53850e0ff720714"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "a00a14300ee8873919583c764b19a865"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "e4c9934e84ecbc8d6b278f03d9b43bd8"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "6c06745554d8a3234bcd4b4e0598d491"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "a1a686a9a3e3c0667b8f23cf80e9c6c0"
  },
  {
    "url": "timeline/index.html",
    "revision": "0e8e07eb0e58e68cd169d364fb321f69"
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
