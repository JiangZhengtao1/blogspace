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
    "revision": "ea51d11b85904d39986f30e8adde949c"
  },
  {
    "url": "about/index.html",
    "revision": "b4efa31a0cf8a613fe95830ac9ac83c4"
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
    "url": "assets/js/33.f21604bc.js",
    "revision": "c3e299caaf1a4921079a5ad2cb970288"
  },
  {
    "url": "assets/js/34.b6c15214.js",
    "revision": "9d4da87e460541a361e3b38efb9ce6c0"
  },
  {
    "url": "assets/js/35.170b7c02.js",
    "revision": "f4c91a9cdc519b52e29527b1a0039e24"
  },
  {
    "url": "assets/js/36.9c9d60d4.js",
    "revision": "fca7eb0098e6e0f49fca47cce8b02c5c"
  },
  {
    "url": "assets/js/37.ef8cf748.js",
    "revision": "5f70950490f7296b071ea6fa28005f66"
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
    "url": "assets/js/9.fef06f8b.js",
    "revision": "81a9681c019f3f8b6434d6ac918347b8"
  },
  {
    "url": "assets/js/app.e6aaf03e.js",
    "revision": "35062912d6923b493a2ae8a13fe48867"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "cd29ca89340d99575e62faf858093b50"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "63a43d226e18b1770ec17c4a06176460"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "34ee1b61788fee3bca4622d4a244703c"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "5c5ed437965961a13957dffa4e11a86d"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "447cf9de1221e56890070afe8db17de4"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "7c984c0dfdaaa48669e2e97d2bc64c65"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "6b7720d68b8c2f1adadd00a243ca5143"
  },
  {
    "url": "blogs/index.html",
    "revision": "cbffae224e41aaffa536bbbc1df42537"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "857e678b3c10326425a889b93849d03a"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "6a406ae2feb5bd68f123ccac0c46df84"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "c5d4a316de06b61d7d68aea87ae96d49"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "33e788af8f9f76034fe86a85d07dfbc8"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "c5bf06ecb41d7e6741d46f6401ab9112"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "5e90cf1e35cbbb6ecf5cfbd6a74717e6"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "e5159303711d1d8533fb10961ede690e"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "12b29e45b2192f881c692be9a4f087bf"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "267c48b53b29e26fe292b2c2321c884e"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "783c0f6792d273069756b7cf95f83ae7"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "70b462da823bb3c313cf1877af8d92f2"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "798c35f0886357df376c8408b8101b3d"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "519fb83c9d98b6f460f7a09f36ec16dd"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "99559cf3ab9ecd9da2c1447233f172cd"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "57630b44faffe9c0afc4de3976351a99"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "2faad3e764830a73d65acd9bd0a5c132"
  },
  {
    "url": "categories/index.html",
    "revision": "760bce44032f7f97fe6dfd3d73930e0d"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "3c84ba5fdb440ed5a7af7e2902b2cbe0"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "3fa2d1e9ba06cb8f20e9418c14653cc0"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "cf9a5f0f5678c3d37aab6a9bba037bda"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "0d5ae3e84cb3a3af251bf9aea9c01802"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "42a9e1695039857c8d0e2b8d05663bde"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "bbd2e9dfd419b4879b0996962dc751b8"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "4a72f1f255857723be4cfe79fb5e9df4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c448f6f857ccd13cf6da8dc9e4e7ec94"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "d0c8e6e92c8ac5462e0d5be61fe323fa"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "520ced16c37036fca7223f4fd2fb9093"
  },
  {
    "url": "tag/github/index.html",
    "revision": "3fad06da6d047366803eab30c03206cb"
  },
  {
    "url": "tag/index.html",
    "revision": "4462e9dab6c95828a670f09f0076739c"
  },
  {
    "url": "tag/String/index.html",
    "revision": "6e182232b9c3aa4d7ade17db75e74b6d"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "cdc6d6e0c9964154f9c81a4d64852e74"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "2fe3c91eef23493d4c0d9d1876beb36f"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "d46dada36607af53e99db7b19b852535"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "b5dff9c87e74c2b125f482f28e831c0f"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "dd83c30d03af2ea17c94eeec763497cd"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "7591ee416729609a754ad364597e8732"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "2f091bcddc12c71f5d2b4c826825efdf"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "6c1c2856904cb660291bcb85dda09c73"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "8fc8ca09bc33e8a10ddfbd1269b16bd6"
  },
  {
    "url": "timeline/index.html",
    "revision": "d56ae8ef06c346034f3942e4bcecc4f6"
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
