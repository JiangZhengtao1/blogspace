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
    "revision": "1982f1edebab43499db2d7fc5cfff381"
  },
  {
    "url": "about/index.html",
    "revision": "2aea5a286cf023dae441c7a1cd363703"
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
    "url": "assets/js/21.51df64cf.js",
    "revision": "b4b65206304d9bd47a10d29510935934"
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
    "url": "assets/js/30.7977c664.js",
    "revision": "a0c9a83e074cd0532441aeecd39b3750"
  },
  {
    "url": "assets/js/31.4d2b3843.js",
    "revision": "3cf8b02e0f194a7d79fa73ba09c5874f"
  },
  {
    "url": "assets/js/32.3fdc3b85.js",
    "revision": "6f58c088768f2a24b5bfd8a17201d839"
  },
  {
    "url": "assets/js/33.06e7ddf4.js",
    "revision": "4bef37880c0c05d0b7a0c3eeee2c2b6d"
  },
  {
    "url": "assets/js/34.da02d123.js",
    "revision": "8697d19f557bc95d320deb1d8237530c"
  },
  {
    "url": "assets/js/35.7df6d248.js",
    "revision": "e41f571ff1780e6644ee54f021eaa50c"
  },
  {
    "url": "assets/js/36.d98b8f45.js",
    "revision": "cae8bf80812f22c1532256b57801f656"
  },
  {
    "url": "assets/js/37.c8b0863d.js",
    "revision": "1d38cb5b7090d7c2d84d1f45cb91b6ae"
  },
  {
    "url": "assets/js/38.6eeaa677.js",
    "revision": "77725c4dda45b83507ddb71cdf7ef479"
  },
  {
    "url": "assets/js/39.8c88ce50.js",
    "revision": "c4b969802157ea7e62eda575ff70850e"
  },
  {
    "url": "assets/js/4.1dae492b.js",
    "revision": "91540e1820a5e3db8681afe63dbd542e"
  },
  {
    "url": "assets/js/40.e4b4c297.js",
    "revision": "b496cb884b70fdac6d42431894132e5d"
  },
  {
    "url": "assets/js/41.725574db.js",
    "revision": "71ae306e8340dcb28a68e8a4b6327ff0"
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
    "url": "assets/js/9.2d75d9e5.js",
    "revision": "5adea3f01753ce22e440d9bfaf8eb164"
  },
  {
    "url": "assets/js/app.9b27bd99.js",
    "revision": "e056e2f29990b0a6812a18d79a60cf1e"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "ca48fa24f921c96e50cbf35de3f6ad20"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "ff1da5b33a244d385417e1f3eddbb72e"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "11ee3b358fdfe33452496c5c3cb5535d"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "6e5e978bf536d5a33f704c5a53a352a3"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "e14f315741c01f94e8c1cfa996f125ee"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "19bc03d5b5cd15d8fca0b43939846bbd"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "56369e1eda1588aa3aac8b551a425300"
  },
  {
    "url": "blogs/index.html",
    "revision": "9f0e34824068b9622a92e67ec6deabad"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "9c50c8f8b5838277391a160b5b4d0eec"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "65ffb62c78465f9d1ece2bf3779a4526"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "d44326101f827a4ff462c8d567809114"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "90494c177cf85a2f3a3de5ed1d3cd86d"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "8a727c1166c74caecd4f46673093c2fb"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "412c9701fcce86aea427fac6296fdfbb"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "2c95a38841edca9f2c839c7fe8c1496f"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "055a19c95ec218d010638a01077aec77"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "81c994393d9041783e0be91f06db0061"
  },
  {
    "url": "blogs/LeetCode/2020-11/168.html",
    "revision": "d244b9c887d81cd5388a40f83bee6cfa"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "724874cfd98c20c21d7d4842f1fb5780"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "e4067a4798a05a8772bb7e47c1b30f2e"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "d4a3d1ff767d86f93160917da4493fc4"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "3849b9d5faed20d8aac288a2cf8aa2a8"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "a88d59f88c7026abfab19abbf01014f3"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "c42333b0c60514d4be5af6b506635291"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "732fb786bb74390dcd03cc402577cffc"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "eceee2af9126f892c8f0434f557468d0"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "8d18ecfc2e7a5629eb65ae649451c199"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "63c5786c118ad032a44fd8cde2f11c3e"
  },
  {
    "url": "categories/index.html",
    "revision": "224597be63f318738a6c5294607b66ad"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "e6c81fee1a16e93db9823a768c93f897"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "5e12cc1c22dd9f8205f0f27ce65d5259"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "f5b5fe952ef2e8e3354c02a7a05e8a5b"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "832a963150661ad0fd86f878ad9528b8"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "6afd0335af432ea066f47e391ca05aa6"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "42282c921fa7a2554c580da4d8f0a618"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "dd8d6b161c7ba493ee8243b47d43f9d2"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4f210824f4137f91af7a84b512f705a0"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "f1d68b3658a5aa48e99604ae2dee5dc1"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "f1a23beb5bda912495ffb686a2b31d49"
  },
  {
    "url": "tag/github/index.html",
    "revision": "21174c2828aad0b37fe3c18d60e0b872"
  },
  {
    "url": "tag/index.html",
    "revision": "8d2f256f7856995bfa9968ad35345c43"
  },
  {
    "url": "tag/String/index.html",
    "revision": "55ff5288321985c59703e55c2dbe8646"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "263558ee0183f3922a7a588619362c7b"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "fdeff4508045ba95e20261f28cb8ab54"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "c7ec699b6a824a49858c41d7d656fdfd"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "3ea391651d8e275c1d565bb22de0fa45"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "d8b082c7b0ddcebad0b9537dd1f51135"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "0f84d325c1d67baffef724e069a699e4"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "44d883e62500ff573bd438179a10f34e"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "08d2d59b59ee558a1a6c006618554695"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "ef5af83a27f69e064865f2970dff7c42"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "cfb4d7512de1d3500634513efd011f24"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "689df8a0040e30096118d6a4ca677bac"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "62f0ec2075b86da42aba269aba9846a3"
  },
  {
    "url": "timeline/index.html",
    "revision": "6457b31d90f404d5913b1116a2368aef"
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
