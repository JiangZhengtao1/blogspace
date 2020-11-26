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
    "revision": "76f7074c118823306df7ae384069446f"
  },
  {
    "url": "about/index.html",
    "revision": "388b40052f8c1100368f24b4ce681097"
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
    "url": "assets/js/41.f5b2928f.js",
    "revision": "0262f8cd9cd50ae9f6e4858b379062e0"
  },
  {
    "url": "assets/js/42.40be0bbc.js",
    "revision": "fce1291543130ba26291a0e428372bae"
  },
  {
    "url": "assets/js/43.e9aac63d.js",
    "revision": "38106a3f1df3eb9caa865bf384d256fa"
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
    "url": "assets/js/9.741535cf.js",
    "revision": "ab6a3b9e5766ff11ab9623e61ebca4e6"
  },
  {
    "url": "assets/js/app.9124b79f.js",
    "revision": "ccf1b212bc411ca7f4dd2c832dd41774"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "7f9c8d0cef684d0340363803497a4a58"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "a4a1282a58eab09460823a3b45c6c6e8"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "65446639bf3b6fb9ad282c6fb676539c"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "cd8a0d96bb361861498d85461447cb6f"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "2ccd45568542e942f74326883673f475"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "08fad23f5ebc88a4f0e8a746cda7b828"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "f75471342b5bdd82d7751c39df5ee53a"
  },
  {
    "url": "blogs/index.html",
    "revision": "7de1c207617b7f1f1719f6459e5da1af"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "d638a68937ec5381cfde24b9af0e5796"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "016dda6cd2a6b56c4b638592f0c5d333"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "e3cec9e2c042fb6d5e65fcb19676dc10"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "19189a8e8149c7d013fa2226730634c4"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "c179a2aa69a960b1ad6ff95f76c8bf7e"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "6738609f2e1340cf473f7bd59f49b440"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "2bb6a3d4f1ddd0d57b0101a476d856ed"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "adabd09f85071f9c42373ff8c6a3467b"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "73edcbf39239dd5e2938670fad197b3c"
  },
  {
    "url": "blogs/LeetCode/2020-11/168.html",
    "revision": "7ea4676a4e974563134bbe136fe3bee5"
  },
  {
    "url": "blogs/LeetCode/2020-11/172.html",
    "revision": "45299e7b8fc7a0ae2e4605de5ba1c611"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "95b4e5558d79a0e5dc58599709694f8d"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "a770150a62ad3d966f9961a59443e7d0"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "5793a8e9237473c621c19cd154eca4fe"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "b409b022174332a0e41cb3c03d6a5849"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "c7817d7cbdbdfe7347bf5b469d2d98f1"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "47871f7b147eacd4fb2f0e1bc04d1bbc"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "7bad508a9a9af9c24561d84728d000c4"
  },
  {
    "url": "blogs/LeetCode/2020-11/67.html",
    "revision": "4eb330a3c5047d3f90cf2cf32676b423"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "cf0d42e98791a48efd5a941c6213f124"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "426162fbffb1fe3a398cbdb2f186923b"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "4ccbd6ea8d77c03b5a5ba6fb8169c201"
  },
  {
    "url": "categories/index.html",
    "revision": "66502d5270d437da1409475222951080"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "fee819847dfff6e1e81d61afc0a357ad"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "af0a218dc49d07beac1c404a412b763b"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "b42c901e63641990f202ad4e4f108c52"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "2a8829bb0d519da3d91d230751a13da1"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "071c457e6491603a7e252e038b6154f0"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "dec4daf2142b86afdaefad76879e4698"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "7a4600ea8768e3a504b105aea0fba876"
  },
  {
    "url": "tag/git/index.html",
    "revision": "bcae542fe1af27cb9191d312230528e5"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "79190c2410c9a7b2da6def92b4b372ee"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "9bfb677a07cf012530b6ea26902a0179"
  },
  {
    "url": "tag/github/index.html",
    "revision": "8186ef3af49d1a5ada40e1fecb932310"
  },
  {
    "url": "tag/index.html",
    "revision": "b29d5149e83ad4eff19f09c7d768cf45"
  },
  {
    "url": "tag/String/index.html",
    "revision": "8e0f90d33b2a1bcfecd3b070af392563"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "0dfc753c16743d7ca7a59d01caafa9ca"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "c1d791df842ebb6816401949ff240e21"
  },
  {
    "url": "tag/字符串加法减法/index.html",
    "revision": "61c8ff19634d4febfc7a76dd20f8e1cd"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "3b2dc182c3f95d450a694a973d68c80c"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "cefefa826b8ac448e90e2b08c776204a"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "ccb2df21272709ac4839f121d933de71"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "5033cc7d4a845471970109de599eea55"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "7f5328e05343821e8d480ee6b82f29ef"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "d165d63b1355f03aac1016286a09393f"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "d7f86951639948d6028567a80118536c"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "03c9b16308557aa27a7dd5ea9917437c"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "ceb6486d396b4ee21ddc8022d48fad24"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "3583c419570e13930abc46a27d39904f"
  },
  {
    "url": "tag/阶乘/index.html",
    "revision": "d1ffa9c7d870d3ff23ec128603a17acc"
  },
  {
    "url": "timeline/index.html",
    "revision": "425d609d04ff2426eac6b8c98cc21eb5"
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
