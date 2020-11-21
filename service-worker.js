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
    "revision": "f961e8bd86e247947a7d2c945e761f3a"
  },
  {
    "url": "about/index.html",
    "revision": "2eb45eb5fe9b8782d2c25f456a69ae71"
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
    "url": "assets/js/app.f960fd41.js",
    "revision": "67af4424d641ffaebba849cc791f9671"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "8d035f0378a776fba29020636bed5ca7"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "d6af6fcab2ae8fffffefc566854c642f"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "99633b368e0b598d588058401dfd03c2"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "ba2e6803a771c77ae9fa714f9fe944e4"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "e06e1ac5fdd5a43c828201c208db0cc8"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "358d65a9d42766a1f47952c1395dda5f"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "9681d2257407223fa64a7203e94e2560"
  },
  {
    "url": "blogs/index.html",
    "revision": "6435be32e32c1b761426ba73fba8a6f2"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "0710bda463d6f6eb1d0c182c4ee3ea7b"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "3fdd0ecf118f17ad6a90e2049bcdc1d7"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "da0c43e932b714788b1f483906792253"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "edfe2ee4ab0f5b12ef7862d08635cab7"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "f4d72b76b7470848d99a5e92dfff3dba"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "e72852e445bcb6f90508a537c201a755"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "eeb12004a3e66d40c6b0d8d4635347b0"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "e0c6ef45be89cc1459e43889faeba760"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "de7f1bb83e7eab059055d019399d7b67"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "d5733e007476eaa003ee4615f00ca373"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "26a8d42e8cf3088f0c44f0db30f12735"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "e4f3adb374ecfcaae46f058650cda381"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "95b5d001dd8a7eee94769722857226d1"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "33c13b0287b4fea11a19969c001069cf"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "b8e00468dee4f04c837e10372952cc06"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "359f7feeaa42824efa95f6b08b10065a"
  },
  {
    "url": "categories/index.html",
    "revision": "673dbc893d1a3146204c4155442af904"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "7e6fb53932e2cc7ad23b40b2882d85a4"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "051a0b96c8183f6a1974204f9089fd04"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "6b2640d66af1896abb96666bd368f9bc"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "a9140a7882cc378ab7f68669c567d816"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "a41b1aa560d09ffe660f37fd05a54174"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "9c1f2d06a93384e03a7b484038152934"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "65d9391e5f9b3361a68611425c303060"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3f77b61482878175c3927a27c755db49"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "6fe858dd122f044b10444802be27dd69"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "4d61d84c73bbabd957b4e31f0dbb8067"
  },
  {
    "url": "tag/github/index.html",
    "revision": "5b74e99bc28b91b0547cae5a83a87576"
  },
  {
    "url": "tag/index.html",
    "revision": "4bdbabc5f6bb7a12b9b3ef484e6094cb"
  },
  {
    "url": "tag/String/index.html",
    "revision": "e8237d55cc7e7202c0b1f489c46483e5"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "9d62e9a06e453174cdd9d22e2749b643"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "14e35554ff98623e6a7a06f837514afb"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "561d32c47b21eca5f194b5d2abb5ea79"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "c6c25e7225962a950d094aff107d1e9a"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "2cbf63a347fb9dcdd830a4c95bf317bb"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "c7c18b2b354fca48fc75837f9ff14c89"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "0ab17680223da90d9de5b0d886e35547"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "453755387d5287fbf68ec7a9a9927835"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "5516312649b076e5115f0c51a4f07b0d"
  },
  {
    "url": "timeline/index.html",
    "revision": "3eec2227c51c520d163b54156f001860"
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
