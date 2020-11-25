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
    "revision": "e333814463b7ccd385bca6303a43b995"
  },
  {
    "url": "about/index.html",
    "revision": "a1674693f227141f4122ff397094f52f"
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
    "url": "assets/js/31.b2c9435d.js",
    "revision": "da2851f462b6df8a7f3b2f0acfd4e4e9"
  },
  {
    "url": "assets/js/32.1a688b47.js",
    "revision": "0b91b40202131d6c0d2a6635953d1283"
  },
  {
    "url": "assets/js/33.512b87d0.js",
    "revision": "7ee1197b3811a921b75651703f9bcc21"
  },
  {
    "url": "assets/js/34.1df146ef.js",
    "revision": "ea2b641ddc85719b0521769f01785363"
  },
  {
    "url": "assets/js/35.cbd2daf1.js",
    "revision": "127cb2545f6f532a0a4512d5f7cb414d"
  },
  {
    "url": "assets/js/36.0a350f08.js",
    "revision": "e54c137d8d0bb1ea056192da7cf7cced"
  },
  {
    "url": "assets/js/37.9aa06e78.js",
    "revision": "2601eac419999022bfcd83058f5961d1"
  },
  {
    "url": "assets/js/38.3f9987a2.js",
    "revision": "9947dab78569d92656a27b5c24816c8a"
  },
  {
    "url": "assets/js/39.f8a38b53.js",
    "revision": "2706e18bb432e7ee69845483137362fb"
  },
  {
    "url": "assets/js/4.1dae492b.js",
    "revision": "91540e1820a5e3db8681afe63dbd542e"
  },
  {
    "url": "assets/js/40.1d442cb4.js",
    "revision": "2db1df1c969a17f973b5282d7651c3a4"
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
    "url": "assets/js/9.fca86d05.js",
    "revision": "300f2f114e81041309fc58f45da13285"
  },
  {
    "url": "assets/js/app.5d6ea23d.js",
    "revision": "cfc7c0b1dcd05b4f3b6acc65fbadd228"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "56b162680d5658406ca098736da835bb"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "531338c8b4c0d171e4bb4d8977312530"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "d2dde2edd298a076941f41a742f4cf9f"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "7deb9c1546259d029a85ebb795422b41"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "c86935a02c4ad1d2e396de108e9af120"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "a6f4cf0bad08ff9c2bd79e64c5e5a405"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "2b71a364c82c92b2face0f59b10ac313"
  },
  {
    "url": "blogs/index.html",
    "revision": "521cd9308a10baed489d3505d37bf1dd"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "cc4e8e08c5dbf7ecc6b0d57e238087b9"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "86a3a4edb910c36bffc40fa8d1c09263"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "030e647fc8a761408430aae7ec15c47c"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "c783e94c53961aca5e8ce6f6513e8b24"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "2e9bcfb868ae6256ce8ffa7f23842a80"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "d9182b90998118e879124e2e1dcab2b2"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "1c82841d145ac7e9560a3bfd116f4c9f"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "ba52530ae58f71e21d42daa15961665c"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "498bdf954d899af1a1df56cc682ce0b7"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "22dc995f3f752fb78f4bb507be9484c4"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "27c8aa1cb3b4ca2223d7eafc90a1a4ed"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "158fc71b596957fa4c9857a3e4298405"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "5ecc6ef4a80da58b40d5debb9d4c3223"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "cb5612f31d365433b31ef292ee938be9"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "76a400becfdd6e9017fab9e37fc6e7c5"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "e85a4a1c489f6c5084a6fb498ce60c9a"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "cfbdfb32fd9a89132e446bfd1ba0ebdb"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "79402a62193a4456744617d8bb942bd7"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "627aeeac0ffecd5a02955104caecc5ed"
  },
  {
    "url": "categories/index.html",
    "revision": "3e3460ed01a607ccaf81a8b37c950557"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "a4545078e718b644369a896c2feb0d61"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "59c7061fbb5a5c58fa2c62d59033f91c"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "e59049174fb93e44350f6c01f32c393e"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "245a6ac8537b93c3ae3801f88a9921e3"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "f01ae261e56cfa0ac9ab9457fdf1c8b5"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "9898b1cda75057b88d219deb84f53352"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "0540489541ee9563e0d3c38cc910e010"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b5948b2c3b17c2c8d8a93787a30dd067"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "51f6ae48c0564b127837515e5231e5a5"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "d3e0af663e6147b8cfe3cabe5d5e5c08"
  },
  {
    "url": "tag/github/index.html",
    "revision": "3e238ad730797604ba1362c820160f93"
  },
  {
    "url": "tag/index.html",
    "revision": "98abc1ee9cc735f46e2b34e1adb6318f"
  },
  {
    "url": "tag/String/index.html",
    "revision": "3bd10fb8c4f6f4310d13a7bf511b2123"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "fbef4fe37dd870f8183b26d4a32d7abe"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "890c84c49efa995dfa00bfc7a626e2cd"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "23b3c1120325a0b4e63bd318321c649e"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "9d60deb2d7878b0158d1bbd6fbb3133c"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "48c6885de4f096c56502ce9570fc1d42"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "80413ce572562cd8c2786568db1eb52d"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "2040f432493c9812dc58029e9f0b96ce"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "dc3331406a12acbfc0a13ebb5b82e787"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "9f11f8aa7343aab8a523832bc3717991"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "d9da3008de5ee66692089415e2d711ab"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "10d743402d4fb7fa054fb45bb32ef5eb"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "e5322181c67ffbd0e0972f06a364a913"
  },
  {
    "url": "timeline/index.html",
    "revision": "001f70f758b83d8e3191615c380c6ef7"
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
