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
    "revision": "0c6f4cc384ea28ae2e26870a8b5477b3"
  },
  {
    "url": "about/index.html",
    "revision": "cf828c5e326eefc12a9413b93e66e031"
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
    "url": "assets/js/35.3249fe24.js",
    "revision": "085be2d29c8cf8607c2c192081b01aac"
  },
  {
    "url": "assets/js/36.023c4002.js",
    "revision": "4fb2f309d8120bcc72e0ecf925ce95de"
  },
  {
    "url": "assets/js/37.aadfc481.js",
    "revision": "a250ea5104eafb7304d5a72996707c62"
  },
  {
    "url": "assets/js/38.4f9d53dc.js",
    "revision": "9cd605094f1d8d6ab09621d9553b4017"
  },
  {
    "url": "assets/js/39.87ef460f.js",
    "revision": "f78dddd95c7259d6d20e46855f4e8253"
  },
  {
    "url": "assets/js/4.1dae492b.js",
    "revision": "91540e1820a5e3db8681afe63dbd542e"
  },
  {
    "url": "assets/js/40.0f7a57c2.js",
    "revision": "5df4224bd28b997aa16decba2a19d923"
  },
  {
    "url": "assets/js/41.2f6b19cc.js",
    "revision": "113e6e61c316256b64e9e8ad012fda09"
  },
  {
    "url": "assets/js/42.d8515778.js",
    "revision": "2ddf86ce56c1812db280289997d7906b"
  },
  {
    "url": "assets/js/43.30ba61a5.js",
    "revision": "7a64c4990c5fdc4ccf3c0577eddf43c8"
  },
  {
    "url": "assets/js/44.0a5bf46f.js",
    "revision": "d9e683109bc1a727b73592d27eda4818"
  },
  {
    "url": "assets/js/45.115bbf3d.js",
    "revision": "fe0f89918efca9cc91b2848363955d8b"
  },
  {
    "url": "assets/js/46.8c782a3b.js",
    "revision": "4a8ea5b8bb1c24b4c2aa6abc7ccc40f0"
  },
  {
    "url": "assets/js/47.3353bd52.js",
    "revision": "9a4e985b27f0d139f9d48a42088a6224"
  },
  {
    "url": "assets/js/48.14ecfef9.js",
    "revision": "43975276918736aeaddda067b66fffed"
  },
  {
    "url": "assets/js/49.45db3854.js",
    "revision": "68bf12842e24be108a3fd241be6b6112"
  },
  {
    "url": "assets/js/5.b22a7363.js",
    "revision": "754618d1e853c1fd328ba023e9f9a5fd"
  },
  {
    "url": "assets/js/50.d6555a91.js",
    "revision": "1c2bf5b728eb2d512b974ce20e5a83d8"
  },
  {
    "url": "assets/js/51.aa8e879d.js",
    "revision": "65b3064afa22fe278fc62b7674cd8355"
  },
  {
    "url": "assets/js/52.6a5d7214.js",
    "revision": "357d729e8edcd1dd02601157826d29ed"
  },
  {
    "url": "assets/js/53.c835c6cc.js",
    "revision": "162fe28c1aeeb2b4bac0056ba554040b"
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
    "url": "assets/js/9.83d51db7.js",
    "revision": "3525ace54c3056c00ffaeb79d288a7f0"
  },
  {
    "url": "assets/js/app.aa3578bf.js",
    "revision": "41e0e51ef7c769f70a9e6c55d5924d9e"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "b7f30f2669620172fcf4652c3c155d66"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "64c8f0c6cc0f30a6d75b9652d6835f63"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "6c0f624ac90eb8f07ce1eb626cffe872"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "ebbfe4890b9423d74a0041a531b9d365"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "b4dd908c4181f99ff918224c892a55e1"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "6946ac22d018fc0f4410c5ee99af7279"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "1038e910b80de53fa0611dbec64d2b10"
  },
  {
    "url": "blogs/index.html",
    "revision": "a529f42397f1ce3c4fb375f268ee0e41"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "6505cb79adc9247d2b8b6f5a1bf13f88"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "83cf8e82825bce52193ded6a71a28815"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "0a10e85f51ac09090d336d69de5f7c63"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "8608ad6fe8d6fa56f58a54a25c9f0c78"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "edf55899f192b7f42586db4ce9b96b76"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "0b290393db6e01fd779c9612b01d3099"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "e572487327613b8b29c3b15c93b6bd13"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "ced4c1a7616b6f2b2b12c373b4723d93"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "fe9ccc6b2907a8d58b491e7cecfcf6e9"
  },
  {
    "url": "blogs/LeetCode/2020-11/168.html",
    "revision": "3657b0b70ce22184b06ab5969e320d92"
  },
  {
    "url": "blogs/LeetCode/2020-11/172.html",
    "revision": "eee168678c239df02f434bf5caf0630c"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "383ae524ac0b4fd603cc802ba300a5af"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "eb59506b9e69a7d2fac77aa5f899b021"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "4efe917608a1b2b9d265b395fdb91005"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "0bcb77b0c001ac36218b864400f1fd80"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "a434084fa0a62ead3dbe622542213386"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "4918c4bfa300b805f984b9490753ed1c"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "8b8a19720f41d9794e7ec6d7570f22e3"
  },
  {
    "url": "blogs/LeetCode/2020-11/67.html",
    "revision": "c3c9ba11832ef6c5ad9a225980680aeb"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "a9fbd681c6e01c0631fe0fc67a43a09c"
  },
  {
    "url": "blogs/LeetCode/2020-12/169.html",
    "revision": "81638bee2d24191f27dfbb22e24f7d74"
  },
  {
    "url": "blogs/LeetCode/2020-12/326.html",
    "revision": "eef7ef6663284b4a7e77bb41e9fd7055"
  },
  {
    "url": "blogs/LeetCode/2020-12/415.html",
    "revision": "0285fe0e69fee7c04a61041f67db259f"
  },
  {
    "url": "blogs/LeetCode/2020-12/462.html",
    "revision": "2ad040cf2cb90d9b90552d067c4c6e86"
  },
  {
    "url": "blogs/LeetCode/2021-01/160.html",
    "revision": "97ac0c43e66f6400450b66376164a6fd"
  },
  {
    "url": "blogs/LeetCode/2021-01/238.html",
    "revision": "89a9657a504e1e59b65b052c741b5251"
  },
  {
    "url": "blogs/LeetCode/2021-01/628.html",
    "revision": "67b890a2adce51ba58a12f9ef1eb6377"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "b480ecae2d2c552c423b08569bd6725a"
  },
  {
    "url": "blogs/Research/Methods01.html",
    "revision": "b9b9328f7997976bb60ea531c8c278ec"
  },
  {
    "url": "blogs/Research/Methods02.html",
    "revision": "2605ee9ed526622a0c97edad8ca26ca0"
  },
  {
    "url": "blogs/Research/Methods03.html",
    "revision": "5b9334a14b5eabe53a189d25b704c56d"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "9c235a035aa853a0f1c1a2e1abb82499"
  },
  {
    "url": "categories/index.html",
    "revision": "42e10a9e15c5af93af45621e5b2296f5"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "3b3d9d244e765cce84e20b954da0a30f"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "af748204905ce7743e118cc84102aeef"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "7264accc22929765144a14c47070cd2e"
  },
  {
    "url": "categories/LeetCode/page/3/index.html",
    "revision": "660f14ef0b12082e71c06f7acb9ee97c"
  },
  {
    "url": "categories/科研/index.html",
    "revision": "692b4ee81408a6e6df14869ed739157f"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "14d09d588f2296ca4e8484d57daf5094"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "b7a3d2caf0f3923a502adeedb45526d7"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "29a8fb0b5b8c1cc01ab8eb99b5e07922"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "443e69ce3b4b8ed9970bbcfbbab45fca"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6a75292359cc235cd98ae213f19eea81"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "0e2e78db42010f3fb1b1cb17bf367bcf"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "6e588cbd4e9f4e1656be315351c45bf4"
  },
  {
    "url": "tag/github/index.html",
    "revision": "83af52680aee388509d22a53a46c610c"
  },
  {
    "url": "tag/index.html",
    "revision": "0d9b66b493040d52532322b9ad572f16"
  },
  {
    "url": "tag/String/index.html",
    "revision": "0edbd61e0939d8ed24a64315b7af52d5"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "85de6ddc08dc624e8aa421394a90989f"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "072adfb2d5a3c210e086922312028e9c"
  },
  {
    "url": "tag/多数投票问题/index.html",
    "revision": "ea4efb012363f920e9567f4a6b976df7"
  },
  {
    "url": "tag/字符串加法减法/index.html",
    "revision": "55889c39d3283736bd59d7e1c1a346da"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "dbc890863c12c313a4363bf5672c064c"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "7f04dc3ab9affc0e1933db1e50b9978c"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "33a818d21907690421c44034484d5eca"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "b85f233fba15e81f36459e6e2bf43928"
  },
  {
    "url": "tag/数学/page/2/index.html",
    "revision": "6d2040e8f8d80faba85b03ac0068fd2e"
  },
  {
    "url": "tag/相遇问题/index.html",
    "revision": "e641fa90014047e83095a478eda7bf09"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "7a67a00564a318585edcbfeeafe68df9"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "a400213a8ead65f39bb1c0bc3005c824"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "1ec53a95e4985a952b9c8fbe399c02f3"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "9e7eb1511772cda2243231107fb2b64b"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "9d940cbd42fda18424324b0551649648"
  },
  {
    "url": "tag/读论文的方法/index.html",
    "revision": "18e99025f537d48cd58a38f803afc0e6"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "c5ede09cac21aa1c8b1f8827fa0fb01e"
  },
  {
    "url": "tag/链表/index.html",
    "revision": "f19fa71ed95cd73c8a4ac90c8ec047bc"
  },
  {
    "url": "tag/阶乘/index.html",
    "revision": "148ed2ff81f2106e10533fe999ea5e4f"
  },
  {
    "url": "timeline/index.html",
    "revision": "ce255c79d90a425b0c6f91330c45ff1e"
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
