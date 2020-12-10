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
    "revision": "befa352533aafee5229e4b9465d644bb"
  },
  {
    "url": "about/index.html",
    "revision": "b1e9b6084873d5fe13e6466af76b6871"
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
    "url": "assets/js/31.cb5afd5d.js",
    "revision": "823d96706dd64b8eb472053cc96f0407"
  },
  {
    "url": "assets/js/32.99a0b9bd.js",
    "revision": "d306ebaf8b9b39705539b732c54f8c51"
  },
  {
    "url": "assets/js/33.5b5d00fb.js",
    "revision": "bb200958a781537641532edde39c8019"
  },
  {
    "url": "assets/js/34.27bd3d5c.js",
    "revision": "0116c020eac36cdd5898fc9c9d6d2d6e"
  },
  {
    "url": "assets/js/35.0585c713.js",
    "revision": "1fce9e279c4ce50087ea32580a97913b"
  },
  {
    "url": "assets/js/36.4e061a18.js",
    "revision": "83cbbed4bee437080f7ebe8ab7ffcd55"
  },
  {
    "url": "assets/js/37.081527f9.js",
    "revision": "d3327377d8888b3b11998c309e34e5f5"
  },
  {
    "url": "assets/js/38.5d2fea20.js",
    "revision": "cfce701fe14c5bbae2b559bd369c4fe6"
  },
  {
    "url": "assets/js/39.83ab988e.js",
    "revision": "2ffa72c7c1aceedeeb2a0e00736b2b80"
  },
  {
    "url": "assets/js/4.1dae492b.js",
    "revision": "91540e1820a5e3db8681afe63dbd542e"
  },
  {
    "url": "assets/js/40.224f04e7.js",
    "revision": "118427028ba73922b44e11f408df34f7"
  },
  {
    "url": "assets/js/41.fb6559d7.js",
    "revision": "b2ddcc80717ade656744b1bdcd1f48a5"
  },
  {
    "url": "assets/js/42.1e411159.js",
    "revision": "456470b4bf7cfd119567833fe218d578"
  },
  {
    "url": "assets/js/43.fa1339fd.js",
    "revision": "a3bc1b0094ebd7f6bb3424e039f45ecf"
  },
  {
    "url": "assets/js/44.610734b0.js",
    "revision": "5b13f67ac95879b48aff7148197e238d"
  },
  {
    "url": "assets/js/45.8b5bd170.js",
    "revision": "edbfe45257f07a876e35850cd0b09c98"
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
    "url": "assets/js/9.ead1b341.js",
    "revision": "18aa73b76e2024d0bfade3144fe7cf94"
  },
  {
    "url": "assets/js/app.33f43e99.js",
    "revision": "8403cc69469355100d886195f4dc449b"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "4cfe5f6ff6463e0f6bf7f60c9c697590"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "b58cfa926695ac4696e7ed94cb7db085"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "07fd41f8807f328917f8eace3948d6a5"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "d1ff88575aef613e07a4510c85c84ee3"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "857bb5fced55382bc5db47e0c4eb61f1"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "80c7841950e61bfe526be0162debd2bb"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "7c5bf4b49b50840d205c6041cf775a81"
  },
  {
    "url": "blogs/index.html",
    "revision": "ec4b3bcd3ff2ddc415f92e9c878bce6f"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "f52903c57fe7b41cec27862d45546a7f"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "fefb5416014485014ceb6373f4b53c7b"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "21eb68d6d695e7df5e2883821388e852"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "e0e94ed111f9ccf662f1a82133aa5d9e"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "674068f5780af825908481015e5f293d"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "7de034a03c67c0075d95039a9fd74424"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "e3bb42ce29773358e546d971ccb76bba"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "f16bbcf0e534e0c1cbe5e4402703d4f6"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "db44349c55fdd1a5ff022b17a7365f26"
  },
  {
    "url": "blogs/LeetCode/2020-11/168.html",
    "revision": "7972a7e5ee2f4fe8e95a0f8b0162ad91"
  },
  {
    "url": "blogs/LeetCode/2020-11/172.html",
    "revision": "9b851227d5e4f2dfb6ba7813167ea977"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "5d19a5d038f40b5193cb62b61ebec92b"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "1742233d14b783b9c5b293e9afd99b9e"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "c609e1b53e3aa2fa2b7ad56b7d125a33"
  },
  {
    "url": "blogs/LeetCode/2020-11/415.html",
    "revision": "c34738193874673075a05ac70d4c30d0"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "23cd6aa19e71ea1b998435425d353ee1"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "4c197ff1a4f24aa272a8aa7bd8de5cca"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "3230ee1939fd41414a6ede57044882c0"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "c3cfefae737e54fa2cc27f31b5e85765"
  },
  {
    "url": "blogs/LeetCode/2020-11/67.html",
    "revision": "1c6ca27b9d08ecdc325e9f2b429aed3b"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "0413a4142b4fd96603fa407d5c7e4848"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "62f53347b280d5a5acd878148fa659e7"
  },
  {
    "url": "blogs/Research/Methods01.html",
    "revision": "90743c8307c89a6eeddee087d5392ba4"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "e8ef752d7b1078b82fe2495a983c661a"
  },
  {
    "url": "categories/index.html",
    "revision": "1f7201851d56a6865ce9cadd032d0710"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "af222b0506bd436d1481da5ac1d32d56"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "03c834a47f343fcf15dd0be63865fc25"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "4bd258b3a01de57f891f17dd635f8a28"
  },
  {
    "url": "categories/科研/index.html",
    "revision": "b1ccfab96377582c4257bb9647701285"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "16ca2d4c11bb1ccdc9416670ba6c3d55"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "30d5d47c6c45c43526527ee287e4c428"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "39e90c9bdbb3ce1b5d0c81ed6e226ab5"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "d4c1df83da56bccf7ffa2cb6e0fb23b2"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f088e555f51352ebb2e1d2b10317e968"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "cbaae6aeebc26f49d89022d48c7f5085"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "2b401d76ac0554b348d5a12498e784fb"
  },
  {
    "url": "tag/github/index.html",
    "revision": "77bbb29d4e90dfafd3f6bec595e81ce0"
  },
  {
    "url": "tag/index.html",
    "revision": "de7775df4a6d6dd990516065f1b2a4c6"
  },
  {
    "url": "tag/String/index.html",
    "revision": "c2c35148c483552b42ff2cd38a12b40a"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "c3d942602499145f08c32511f9c75c23"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "de5168415b3278037c639c125dfd1170"
  },
  {
    "url": "tag/字符串加法减法/index.html",
    "revision": "ebcdeb7483a6ce8e15a899488499a5a2"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "ee11f4798edc2c554308b90b911109d4"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "a959931629a67e8a2b5d722722cffad2"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "4b43e18906850040528db8a58b6483c5"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "3e6ba057d85b17091cc14974a555236b"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "e82c95677b486874d3045a5e4f031844"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "d9c8fcb73d7697905d7a0f7991ff09a0"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "eec6ecc84d780923da524cd5bd6fa887"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "a57709b446ba813a649c83a20231e06d"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "22009a8eb40f873a63e952cff842f72e"
  },
  {
    "url": "tag/读论文的方法/index.html",
    "revision": "cd4ff3bf3d669db7a6f7f8a0bf8b24de"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "9f03de1a2b47ab438c28f8ca507ffee0"
  },
  {
    "url": "tag/阶乘/index.html",
    "revision": "4f2fef446bfe8a7ef411d08b565cf60f"
  },
  {
    "url": "timeline/index.html",
    "revision": "81e358d00b4033cf03253a8797e55e2f"
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
