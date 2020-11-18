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
    "revision": "33eebff0e6acc91c61560aa9a53f1fee"
  },
  {
    "url": "about/index.html",
    "revision": "4b9352772313ea54e22bdcc0060cc271"
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
    "url": "assets/js/30.d7f89d43.js",
    "revision": "f70c981c7a0846a7f4674c7247f5c189"
  },
  {
    "url": "assets/js/31.9005c8c8.js",
    "revision": "4e0613a4f8056b45f417a6f18b03ee99"
  },
  {
    "url": "assets/js/32.ee94b75f.js",
    "revision": "5dea023a2af9349e77eeaa97988f498e"
  },
  {
    "url": "assets/js/33.9128be6c.js",
    "revision": "ee8d81eda624a3bed3636162c34beeec"
  },
  {
    "url": "assets/js/34.0ed2ffa0.js",
    "revision": "553b96838ba8e4ec3c82fc32d999973d"
  },
  {
    "url": "assets/js/35.83619239.js",
    "revision": "2f01ad41a8b8cbd467dbb5db63b16cec"
  },
  {
    "url": "assets/js/36.5c3177b6.js",
    "revision": "de6d8fb739dfbf10eeefecde5cd3154a"
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
    "url": "assets/js/9.516c5b14.js",
    "revision": "51e7b31519d6993bb1b651eecbc244f3"
  },
  {
    "url": "assets/js/app.452f25bd.js",
    "revision": "e9976dafb4fc1995126ebb07ed4745cd"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "32499246360af74cf6da182b61133c82"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "aa8d7dfe2c572ffedb47b3d5230241e7"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "532e93a26c7335735273559dc03ce898"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "0d614afac507200923f363d7efb9bf77"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "4e638bf00dc931bcd8ab029eee841671"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "d68eabf5c658ffdee66e711869e83e2f"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "1f88c0e779d0b27a98283070909c7ed5"
  },
  {
    "url": "blogs/index.html",
    "revision": "95df1010f22c5232964e80e3fc612af7"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "88583dd8d5e5cb7d95fd6a57c92623de"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "c4730f38d4316c8d3c1dfa2d3a64c8b2"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "fd2ddc7279ff5da0bc0681ce4a9f591f"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "4d1937f5fa400ddba7129d06a5ab4502"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "83abc7f3fd7643b1a68839a75b2e1b4f"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "229a8a522b9437aba8b8b7721a7a7289"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "7a78765509dbc85996c1b42c12b41375"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "e3f8c345c10c2cf0d66f77d99d8755b2"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "d598326b6c0f0776633a27cdeb9b44bd"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "342ce21a1b3765c2ca1ca0fe89ce299d"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "9d0133ad6e1f8b8578fd3a2716ae3dbf"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "838d982de4ffd60f92ebe46b0876790e"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "51f5256d744575fd43d1cd27ca42ff3f"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "4682014f591200fa95e4ede424c28d63"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "9aaee79af6222f2420c6dd98c11730a8"
  },
  {
    "url": "categories/index.html",
    "revision": "56a34835496936a3c08c48a3edf72c3f"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "7dff228e98a26944d5aa00e78eff9474"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "29a2360ce6640bf235fb37d0d682e495"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "131fecabc38feba67ff99d00ef943d22"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "40dfecf531919dd6e71b9c486434b933"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "d93c0703aa2aec1f6f0b0d060b4feca6"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "bc520d69247f95ac5273efdc49f98e13"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "0fd23d78a04af8662a7ca7a0c38646ca"
  },
  {
    "url": "tag/git/index.html",
    "revision": "493bb3b26f17d9af8f1a3e79a8d7e546"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "bf7f2fe44a44bea2b107dc3a9247cfa2"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "349410acdd9aa70464379e587d46b79b"
  },
  {
    "url": "tag/github/index.html",
    "revision": "9a89c8556b7c6044271e602bfacd1167"
  },
  {
    "url": "tag/index.html",
    "revision": "529827fbdd7b17cd1d11d0af3fc7fe9d"
  },
  {
    "url": "tag/String/index.html",
    "revision": "d63618965bcfe8364572d8aaaab6c7f1"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "70ed2deffcab9dce28f30f36bd70909d"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "d2c360fb73a470e2354fa3335ea01e5e"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "8d49038a4063824a2cd9e76238bfb8fe"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "204d5ce4470df5e21c75a45cdd55cc89"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "4022f5fc2f3207490ad1ee9dbdb2249f"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "647ae66e4aafb786460e9b35dc94d9da"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "d926452a1da7f5e4464e1686b7eccaea"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "73ab53dbadb67bfd1839951a51790f0e"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "6ea099a6b2e73dbd541c7d93a0f34a07"
  },
  {
    "url": "timeline/index.html",
    "revision": "4b287ac17ae738480b5ea7a315cbe507"
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
