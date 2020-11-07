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
    "revision": "c5953a3327f0d0ab5a0337a796994e7b"
  },
  {
    "url": "about/index.html",
    "revision": "306787b5592cd7e5c29a676e1bdc6821"
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
    "url": "assets/js/20.1c8a74bf.js",
    "revision": "e55f455038ee2a7e158e454e338317c4"
  },
  {
    "url": "assets/js/21.f998b285.js",
    "revision": "dda32615d06b92859a49952657a76f4e"
  },
  {
    "url": "assets/js/22.dae66d71.js",
    "revision": "0f4f2d1cb345ce7b04f2fff8a976d2bd"
  },
  {
    "url": "assets/js/23.e745f679.js",
    "revision": "106953c1dfa02824899dd98c8973faa8"
  },
  {
    "url": "assets/js/24.f7a824c3.js",
    "revision": "13727e0f385b1c96a3a186f0a25705dd"
  },
  {
    "url": "assets/js/25.3b613da9.js",
    "revision": "e3da386299115a38aa6e67bb76d2a83f"
  },
  {
    "url": "assets/js/26.f1500c53.js",
    "revision": "f9c3d614e40249c836f47b810841afc6"
  },
  {
    "url": "assets/js/27.4d992a49.js",
    "revision": "4ddfe1f89f03cf6ee7d0c671db8127d8"
  },
  {
    "url": "assets/js/28.63436dd5.js",
    "revision": "e28f4a2ffc1b4f44e750b8725d158628"
  },
  {
    "url": "assets/js/29.dc644712.js",
    "revision": "3ba1c7ad5920534f1debb2d7a62b3aaf"
  },
  {
    "url": "assets/js/3.ceb7af67.js",
    "revision": "63d04cab7972aec070b097c8c8b15db2"
  },
  {
    "url": "assets/js/30.0cf7022f.js",
    "revision": "1fae8b61e4738f6502bc4c1945080c8c"
  },
  {
    "url": "assets/js/31.69f82b3a.js",
    "revision": "93a3f9cc2a93fa5484f9a46af31cc205"
  },
  {
    "url": "assets/js/32.4b25c842.js",
    "revision": "333d517fd7181fe6ef79e95adc80eef1"
  },
  {
    "url": "assets/js/33.119d38a0.js",
    "revision": "ffaaf0dc82cd6d9ac2f07454df94cda2"
  },
  {
    "url": "assets/js/34.fa162b5a.js",
    "revision": "4306bef99370afebe285962f438a96b2"
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
    "url": "assets/js/9.e76d1dcf.js",
    "revision": "766dfa89775840ef5230be680ce16e11"
  },
  {
    "url": "assets/js/app.118b1455.js",
    "revision": "7f2273ad5b58f5d199127c7947bc4927"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "aa68cf28bc3a49f9117b79f8761a83e1"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "f17f0c3662101e9dd423ed89070e3190"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "24a7b5f042929ce85b7edb1c26b72312"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "0d3bdc25424b683689d7a9f9c5a2376e"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "5982122c3184116e543bd7221445b954"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "7d81cdd766c51887c4ec4663125138aa"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "e32169d805ba4c11ef6dc27105b18b10"
  },
  {
    "url": "blogs/index.html",
    "revision": "325db819228918794ae24ae2ab150249"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "2d51a216cd1589994a34d51564a2916c"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "54088af59ed550c8b56a3c3f228fa5a2"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "dc3b423afe145c83a682dadb78c56329"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "9c7d50b8aaaa772918a58e6dfd84ad57"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "188b679b39e72385ba31088d1bc26269"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "8ac4dd17198ef4a7bc84c8d02b1fa5f0"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "5d831b985af90a8e2ba511d7257bd9df"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "767525cf0aa3e44097dcd0d89af8021b"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "b9620afb040794377cd329730224fa3b"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "79ee3f7b39313e3ac5cbd50cded926f2"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "7ffd863bf652929852e69a407c19ec42"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "0377fc468943e29a67c355ed632708d1"
  },
  {
    "url": "categories/git/index.html",
    "revision": "1c5647b70230a9b43225f5eba34c4615"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "5149851a060dd4d02cf973f28c715eba"
  },
  {
    "url": "categories/index.html",
    "revision": "ad7da82e3a95f0d1cf48058ef8890070"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "4b6e41d2b5599544c6d2784cd16531c1"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "73ae5010ab9df0f9d4628411debbad3d"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "00e02a040e65d07316cb02cf8b5316a3"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "02035bfeb03c09e31bdc65996138ab18"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "04e55cf967c67bf3ae695c97f298e290"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "0d446154b7ed45533a021b96c09e1965"
  },
  {
    "url": "tag/git/index.html",
    "revision": "58dfa6eff972db2826f1be96cbb115fd"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "265bbbb0f87731428e3703c9d7437086"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "01a652358ceec0e47152dd761317565c"
  },
  {
    "url": "tag/github/index.html",
    "revision": "72e6b0b55f0f681c8f19226b09641681"
  },
  {
    "url": "tag/index.html",
    "revision": "d6a9df900bc17d64cd2dd8920ea14c20"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "f4b00708d8910aa5df85b5b249b9ce9e"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "3e458fb232cc6730c6d2c87cb9f256c9"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "7be4c57044aec233cfb5bd4f1d2decb1"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "f3bb059f3976c02d51a4a4383afef8fa"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "11a1efcd4f010701ce72b5c56b535462"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "68bfe7fc3e106daee643fa55bc19cfd3"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "bb3bf0a1862aba45db61e1bfc757625f"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "de066f888c0dbaf6e4d1c74f57afba5c"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "63bf441d05ab65b48a65bdc4e794a704"
  },
  {
    "url": "timeline/index.html",
    "revision": "8abda29a37e0b36628d8f5fc7aec7c65"
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
