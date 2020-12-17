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
    "revision": "4ccd1bc23523edc1b82ce3d40eb6177f"
  },
  {
    "url": "about/index.html",
    "revision": "027caeeee6aa72c405acd0e502b45ee0"
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
    "url": "assets/js/42.fd760766.js",
    "revision": "de2a1d88d22a528e2b077721a31ff123"
  },
  {
    "url": "assets/js/43.3065207b.js",
    "revision": "a78f262a92573cb253935f53d0896218"
  },
  {
    "url": "assets/js/44.8a84a9c8.js",
    "revision": "d023b1bab7624aa83d466223480bc10a"
  },
  {
    "url": "assets/js/45.dd3fab4b.js",
    "revision": "7e79f453fb9438e67398ed2aa3ec63a7"
  },
  {
    "url": "assets/js/46.86bfbfdf.js",
    "revision": "f2a1fd86718ec3bea911a57b60996d0b"
  },
  {
    "url": "assets/js/47.b7d141b5.js",
    "revision": "8f34f9344221c77b839c9df371055adb"
  },
  {
    "url": "assets/js/48.c1ef7084.js",
    "revision": "da8648dd465da72b1323fe492ab23e16"
  },
  {
    "url": "assets/js/49.30daa035.js",
    "revision": "3429e5e4f67f2087d57ea152cfab7985"
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
    "url": "assets/js/9.96ffbb6b.js",
    "revision": "d62bb9636f4414c5a68efdc9291ceb41"
  },
  {
    "url": "assets/js/app.db7ffbd2.js",
    "revision": "6f2f94015d3f9be342524fed75662c80"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "d9668d2e14462d881fec98921e86d20c"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "a6196f17b7ee01fcb08bb576b149ad7b"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "a14531040ca05622d8012c0e5f4aa5a5"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "beab0dc624dbb5b8036de89ba42c523b"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "1dfcd0c46665f688256dcf8d3a1cc93d"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "466f7bfccb9b7ca09661b678239fb378"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "13a321d83cbdc62d88fdafcba18e2bd3"
  },
  {
    "url": "blogs/index.html",
    "revision": "282a698bcba1ab05d716e3118d61c9c2"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "0c1c522f6d5d14420053239c9e84a6b9"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "abdb77f0fdec1dc953abdb7e7a44b8cf"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "b5a3db1340fdf38f302ac1746c84b544"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "3fb183dec1ba239b45c7123868db091f"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "1c2307e8cedbaf40438d4192deafe06b"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "85b2af5273c3a588b0bd91580ac4b0d7"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "86e7ef173614825e607e18cc8dc5486f"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "0e171b7122c31b417a8bcc86c268dc40"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "8059fa477328026a7d60b5d8a164815a"
  },
  {
    "url": "blogs/LeetCode/2020-11/168.html",
    "revision": "25e2bfd28b222f59e63a114079571ee0"
  },
  {
    "url": "blogs/LeetCode/2020-11/172.html",
    "revision": "1520afae92e85ba86c5280f96a748271"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "e81bbe978f53979d14029a44ec2adfd7"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "8c93c5288834af8ce405ec4d0fc65963"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "e821d7a7906e57b008c575c43ba578b7"
  },
  {
    "url": "blogs/LeetCode/2020-11/415.html",
    "revision": "e0c92c855b0ac8fc7646c45a3e073cfd"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "7899368ce6f6cca243b42b218d15c5bb"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "909ea37040415c30e793302e9a76c08b"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "e4e2fe08b911547f5afbcab0f64879f0"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "a4041e6246ae4fd6e820a7ba65755b05"
  },
  {
    "url": "blogs/LeetCode/2020-11/67.html",
    "revision": "a283d36bf2969c97d5929750fe84f4c2"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "fc197c0b731dae7ee7875f0ef24b45cf"
  },
  {
    "url": "blogs/LeetCode/2020-12/169.html",
    "revision": "1a6ba8fd63c32534901e92a935430bf3"
  },
  {
    "url": "blogs/LeetCode/2020-12/462.html",
    "revision": "1e2d280c2e66eae65955c6844d2ca8f6"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "576176f39939ddb3b45fb2f32f95079c"
  },
  {
    "url": "blogs/Research/Methods01.html",
    "revision": "e66cae163e6bffb77a884096e7c2e9f9"
  },
  {
    "url": "blogs/Research/Methods02.html",
    "revision": "97d001a2cc61d0f827167876266e135d"
  },
  {
    "url": "blogs/Research/Methods03.html",
    "revision": "2dc87685427c3c3552d1578f02bbc3de"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "4b25c2b070ce8b15a33168127f65250e"
  },
  {
    "url": "categories/index.html",
    "revision": "9932e5c4ee9337d64e190eb103d31f06"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "511145b3aea49c50c2f7b1351787e4ba"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "2241574a79a5a070e868156077f7f52c"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "20198286cc2a99d8d444b027acd57592"
  },
  {
    "url": "categories/LeetCode/page/3/index.html",
    "revision": "73aae67e709681da69a7c72ce16f7088"
  },
  {
    "url": "categories/科研/index.html",
    "revision": "9f9e00b494fd4727d28cb73b17fdaaf0"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "f2e0916279c3dc0236943d624d987de1"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "59c4150dec961c9ca5d4b860576af1ac"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "b69b1cedbfa1ce685cf1699fe09f2cdb"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "a6a27aec531c289f0921b3c002475752"
  },
  {
    "url": "tag/git/index.html",
    "revision": "56f16f2a05e7164a9593d2e2300d25e5"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "2cffaa5584542c12939293f753df7efb"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "17d1b3aa7e4ad28c8d57113a9f111ab0"
  },
  {
    "url": "tag/github/index.html",
    "revision": "5c72b7f23885b21a5e306ddef7ea10c9"
  },
  {
    "url": "tag/index.html",
    "revision": "c721f875e496a20c03c22e461b4bc981"
  },
  {
    "url": "tag/String/index.html",
    "revision": "cb54b5a9f8468dcf5d5db0c8d0c3f8d2"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "31a80a6be79a1b1e509b216a5d385556"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "a04d7f73e7d93e3f349f93df83152627"
  },
  {
    "url": "tag/多数投票问题/index.html",
    "revision": "1772a3ace13d707d048ef90de74d6569"
  },
  {
    "url": "tag/字符串加法减法/index.html",
    "revision": "d1f9a85a8d1c07f5ce28366d4eff9e87"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "2c67c51e6e1b80dc410ab65df47618e7"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "a6367ab20c80043df7d4db909ea08eb1"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "6f9e675d26ec2672e0fdb3e1f257fd7f"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "2c8e15df6c0fa84490a969df5a87ad95"
  },
  {
    "url": "tag/相遇问题/index.html",
    "revision": "c608526ead218c8c51302be584676607"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "9d8a0f99d516977b1650908c97e0df2d"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "ba1c9ff8410a4d41ab45e07e5ff6de69"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "8bd5b4f98f32509d9a2a2f7d33e4b00d"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "454f62a89874db36a84f150663839999"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "d56e85b3206b28f83a61bf756081ff8f"
  },
  {
    "url": "tag/读论文的方法/index.html",
    "revision": "9ba9b7ca3fb35a6024295bd9b3120ec5"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "cd8a1ec30cc6a5df5980efa26085c051"
  },
  {
    "url": "tag/阶乘/index.html",
    "revision": "693f0073f6b235cdb44bab5fc8fa814c"
  },
  {
    "url": "timeline/index.html",
    "revision": "3a7e9bec77512702889f75aa3a85ae99"
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
