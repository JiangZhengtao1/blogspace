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
    "revision": "fbd48a1592c68e52346e0009fdae07ed"
  },
  {
    "url": "about/index.html",
    "revision": "8fdf6dd29c8526f376359498523fdf73"
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
    "url": "assets/js/30.935f67e0.js",
    "revision": "6f25957021e05fe2f47bf338dc5323ca"
  },
  {
    "url": "assets/js/31.5b86e9a5.js",
    "revision": "8968f6654ec2f02ba3c7a05fedfaccad"
  },
  {
    "url": "assets/js/32.cce35a29.js",
    "revision": "893c90fe3bebfce4f3bdabeba33ac248"
  },
  {
    "url": "assets/js/33.eee1f486.js",
    "revision": "6b960f93af18e8c79f5d3a565e16d56a"
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
    "url": "assets/js/9.15ea8e5b.js",
    "revision": "3ca6135677caf9ddb37e68e7ee4b4fa5"
  },
  {
    "url": "assets/js/app.5dbbcc35.js",
    "revision": "dc33996fdee2778016aafff687872168"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "cc98caa6965417a5cec727f4edbf3dd9"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "01911858c6712c2c443b9dbf0510ff0f"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "737ca241cfcd27c1e01073b03586ac46"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "d809945c13221a4653a4e46a3d4ccd47"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "c728a69d4962396697aba33719ec8c57"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "08369f33511c8624259121980f2d52b4"
  },
  {
    "url": "blogs/index.html",
    "revision": "50b1816e8b570a8740fb6b8b98754f72"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "2604732b9e24c164736e47d91257240b"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "d1cd0200d9f5fd8776bcd674724975b6"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "d20b3eae0e31ca0f0185155407ae5a9d"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "4bc0be6fa7251734d755a56f356cc81f"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "051f5574030a421a9aa17ac62b2dc411"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "f1743013752f43bb717aa04a55fc6c6a"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "36a23b9bec4be58645ce5443ca06bda9"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "892743c80ed84cdbfb056cd1e03496a9"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "dfb9c218c4deccadb8914e74e4c958db"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "517dca1372cbfe711e628dac17385520"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "ace340252279c6c35f4e0c9df4037617"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "bd7afc5e680fbd22169097235393404f"
  },
  {
    "url": "categories/git/index.html",
    "revision": "f82dfecf721a4f85a7698fa9d6a3631f"
  },
  {
    "url": "categories/index.html",
    "revision": "0663321a7ef5a493b92e76aeadc086dd"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "d564f59c606131984df06b70fc9dad7b"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "75d974f601a55a48f36289a85705ec8d"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "66de9613a285d50a347e394ad35e2c41"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "621cc0104d1232699e42304e21148bbb"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "43112c2489829403afeec28796997339"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "8b0bd1a92cdf584668e8daa7d0e97954"
  },
  {
    "url": "tag/git/index.html",
    "revision": "892567b3fff21913c64772f16ffe071c"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "64377c4e9b379ad497690165de5800a8"
  },
  {
    "url": "tag/github/index.html",
    "revision": "5cf014b3e7cf7fe129d47bfa20350cb2"
  },
  {
    "url": "tag/index.html",
    "revision": "f3b56dcf3deb6ab55f2605b74df623b8"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "6bf84d46187fbbe74241c74e5b40d7bb"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "7260d632034aa39bba70d4f476c192ed"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "dbf089f6566f399437402eaf66bf6f32"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "e99f1c7d7c9ccaf6070a0d226afd3769"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "9d63e015054b6d74545f799b3b7ceeb3"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "febec3ff3897d55b1918b500a5f3da81"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "41a7c5a3abfae5d1b270395188b1acd4"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "6cf7b15fe4c7eae5739c2e28efa33cf0"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "10e3c0129a6710ba461607dcbf870e6c"
  },
  {
    "url": "timeline/index.html",
    "revision": "2d539240a25dc9004fc2ebf53c0d8a87"
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
