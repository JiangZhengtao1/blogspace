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
    "revision": "a1247f89e97e3b158af0ac96e71a3563"
  },
  {
    "url": "about/index.html",
    "revision": "b5aa1911ca297322e1edef7ccb411e2d"
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
    "url": "assets/js/13.17587ffd.js",
    "revision": "2f57e69d0d08b3f10e7c5446a72826e5"
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
    "url": "assets/js/20.2e79b999.js",
    "revision": "d7be6bac9c1e4f396c53189d835b5b79"
  },
  {
    "url": "assets/js/21.1ba1a564.js",
    "revision": "4fb1a9a9c09ba396cbf4634c52b2fd70"
  },
  {
    "url": "assets/js/22.018b4214.js",
    "revision": "07ec865590a41bc3afe9d251c3f8c169"
  },
  {
    "url": "assets/js/23.5d658a50.js",
    "revision": "0184fc4bed3fdffcfc1c375418f7f490"
  },
  {
    "url": "assets/js/24.a1575c38.js",
    "revision": "16b018a749c88d4a4af2f74819533732"
  },
  {
    "url": "assets/js/25.0d22e6ce.js",
    "revision": "931c97583a5496ef7e7ce78a04077f17"
  },
  {
    "url": "assets/js/26.8354cf48.js",
    "revision": "cc1e176a3c54811787252d21b165b953"
  },
  {
    "url": "assets/js/27.8625af1b.js",
    "revision": "990baa258c3b9f6d3ebfd430861af64b"
  },
  {
    "url": "assets/js/28.d59b0417.js",
    "revision": "912353129d0839aade6b0b0009d1c101"
  },
  {
    "url": "assets/js/29.60d5da81.js",
    "revision": "b06cb677b673462f363c2a316c9493ad"
  },
  {
    "url": "assets/js/3.ceb7af67.js",
    "revision": "63d04cab7972aec070b097c8c8b15db2"
  },
  {
    "url": "assets/js/30.4c4d2d41.js",
    "revision": "8d15e17a7f562ecdbbe9f8a6ae4e9a06"
  },
  {
    "url": "assets/js/31.31f46c4a.js",
    "revision": "3b7e2e9964cf001c8a23da8d016bab55"
  },
  {
    "url": "assets/js/32.aa864c22.js",
    "revision": "eb9688c0e271b123b100cab1f63e4f18"
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
    "url": "assets/js/9.6f8b2afc.js",
    "revision": "8ad75d9d02082de574781b97cfea1231"
  },
  {
    "url": "assets/js/app.fe1c69dd.js",
    "revision": "65b33630cc66ea25f2cd446ab98616b4"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "d21a45fb538283a45acaf324dee77c31"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "f6f2582b6f0e6022eb0367e79d83a3e6"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "73c4fd7f81624d47aa203d3e54938f39"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "026368add1f728fdeedc1c2444bbc2be"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "7191fadb5941365b6aad8c18f23004cb"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "9433086ea8780174ea2c6874f4d1738b"
  },
  {
    "url": "blogs/index.html",
    "revision": "dc3e40354ab84d1e47dd41765dfc1b4e"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "eb452b7dc3ea8c6e0c9c13ddfd9ff9ab"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "8211a4367acc1c85b33d6f57740f2294"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "bcb30b906a4e1bffdfb0fdde6cc63ca2"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "3f3a2002be60532d6fee01d643d027ee"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "2282a452acfaae9cadc103355a93713d"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "a7a522b5865abc2075dc0aa7b35648fb"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "50481615bfb9d15c93b161ad316e84ca"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "1d7bb057f0cc3c50eaf2fc99132bf6d1"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "bf725e647efeb74e1461019933973c44"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "bfd9a5b3e97bc5661f556a50a125c097"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "ad039869d14ce93e9de94317c76527df"
  },
  {
    "url": "categories/git/index.html",
    "revision": "917ce5c7e6b91c62dc93c9011e0f98c1"
  },
  {
    "url": "categories/index.html",
    "revision": "9cb6670146417048d5065cab6b84d05a"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "34b31b7eaa0618df8bce8c0fe6fa2150"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "a83148ac78c957ee8013425a18cd1645"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "4a930678748415b54f7faf87cea02ab6"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "d7d3b947f6247439a7b61e15b7b635a5"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "0df11dcfd4e16ee2eacf3df8431ec90a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "0dfa645b39a56f4630370bd856080417"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "3d3eddef7b0d29a3cbc5a31a7469db59"
  },
  {
    "url": "tag/github/index.html",
    "revision": "07e61189963c9c5400d3d193d0bd7a64"
  },
  {
    "url": "tag/index.html",
    "revision": "b75e3e966cf19d634ca87ba5f6ff3e7a"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "a604a8fb20be33e9a00a28c82bb1c49c"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "1021431ecbbb590f416d6242be34271b"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "777ba66880d72dc594ba88cfc3aff2dc"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "ffa372f6265446322309267b003a53ce"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "c7f624b14be543af1b4fe4cffb8ff3fe"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "068dd67123e7fdc4417fa01c45c348a9"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "ebad9074697fb954cbcd29ca6241a77e"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "090a08d4eebe2a9765efd378d0bf03f8"
  },
  {
    "url": "timeline/index.html",
    "revision": "b24c08014a08fb3d611789b67ab4ae8f"
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
