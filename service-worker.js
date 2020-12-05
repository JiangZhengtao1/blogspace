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
    "revision": "e511a5e40da52cad0ac6142a9c4abeb7"
  },
  {
    "url": "about/index.html",
    "revision": "78ab6a1296c2cc9b85de7ea782ff381f"
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
    "url": "assets/js/43.4c196157.js",
    "revision": "8f88d516fb0ed443e6c0192b44fd0d28"
  },
  {
    "url": "assets/js/44.f7c4572c.js",
    "revision": "b6191332e66eab000c658417856663fa"
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
    "url": "assets/js/9.b284a362.js",
    "revision": "a5c258d6a78839b405b32e9b03fab332"
  },
  {
    "url": "assets/js/app.0bc3af1d.js",
    "revision": "09c09be6dcc7f6862ebf78066e26d0ca"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "6de95c2724e3283c4b5780802b88cf15"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "4224d9b3a0b35748918c81e91937e5f5"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "90a4dcb7de54d22fbedd86febb5b016d"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "d2eda8ac4817dc8dac592df4731b275a"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "a02321aef86f35fc4b4d2b8bcf56647b"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "ac98a3e5a25306ce622451e2ac29ffba"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "647e34b81bccfbe9c4004d179ca749c5"
  },
  {
    "url": "blogs/index.html",
    "revision": "8442ee69d5d995b049328433e60e520d"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "0bf865d47447455bf8aba89e7b76d14b"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "5d29f85ef6f99b3a975f26e1aae7e767"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "355589385aa2b3fa4d1f77ab57085ae2"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "a229d2908f0fbd912aa96c1b052fade0"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "61adbeba82454a6cddb460b39a311896"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "982713ee204337c1b9a75a4cac897a02"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "bf056d701854cde74d983495043bc2da"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "619923ccb125c748cefd3f7edc4891cc"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "9947dc91051beca3c64c34eba28584fc"
  },
  {
    "url": "blogs/LeetCode/2020-11/168.html",
    "revision": "adb7b8f6e9c0ff95b739ddc7fd05a052"
  },
  {
    "url": "blogs/LeetCode/2020-11/172.html",
    "revision": "be5e7cf8143425b28ea6a29acf24ace2"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "7ec5d911b9d8575ad17805be05f8c16d"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "bd324b17ef29ad532e0165dc3c75f311"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "8aebdf246cede56acd1b355f2d3c783a"
  },
  {
    "url": "blogs/LeetCode/2020-11/415.html",
    "revision": "407a8504fe1c2cad8b7027d107d90b2f"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "81732b008f4377dc6e2bfbcdbf8dd686"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "bd94bbdcf101851803f21d239e37ef68"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "2039dfcf5feb0ae4246f3fe729fd2c5c"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "553182c969dfb80e0140a4a349bc0040"
  },
  {
    "url": "blogs/LeetCode/2020-11/67.html",
    "revision": "108c000786e38348b84ff27c868b7aa0"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "ec9e32a0a96b1640b08c154f0f6def6e"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "753db60a15e3a4d9316eb1259a6f6e46"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "602d997b7c5a94d8017481b95aaee3ac"
  },
  {
    "url": "categories/index.html",
    "revision": "5ed1c4c7e62c8c446b1cbbb4c4999982"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "35fe7132f3fc884c03bd1ef0b8e7549b"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "f79247156a87c7bf8d8783943a77bf5c"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "ec9bf333fc911cf7b152389f0aaf052d"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "6b12293c7a3c05638a883736327ecd83"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "3ee0d6ca928b9f18d43983949d20786d"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "3693e6f2e66a34784426f8462b8cc144"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "2a4ac57bebdfe90a49a33798e3051d67"
  },
  {
    "url": "tag/git/index.html",
    "revision": "fbf8310776162c82548acc6e7460ae22"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "879514dd876d6b987c8be8f1d927383b"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "d8964cd6d1f40bd542889b53bd79f4cd"
  },
  {
    "url": "tag/github/index.html",
    "revision": "ab024753b245e230a2b73bc7ad98361d"
  },
  {
    "url": "tag/index.html",
    "revision": "979c5e4f87ccf49b9a5ada1337d13fd9"
  },
  {
    "url": "tag/String/index.html",
    "revision": "903e097e0699ee2bdc0564f5c22bcbb4"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "5e6150d0e733cb0a8075f5a4b927db08"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "531a427f3d4573640ae81cb0757e492a"
  },
  {
    "url": "tag/字符串加法减法/index.html",
    "revision": "689b811f682639a10815d1f4898cd414"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "8c84d5144b2f26509accd11f4e261ce3"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "3ad400e056e605b2ab8b72ad45dc9ebe"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "f120c272f8f8b914cf0fe055cbccf6fa"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "ffe71d934fc3338bdeb10a2d13f7dd3c"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "944316967e0f1af7146dce7b02d04180"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "b32e67bbc55059e394faf1cf9c299a8f"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "1e8dab4ada0140f9ca08b4f00d4548d3"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "fa4060bf87a960bdf5cc51d0d8b3ed03"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "36798d8f99ecf87cd9b972c010155f5a"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "0642e15564798e933560e21fe33b0cb8"
  },
  {
    "url": "tag/阶乘/index.html",
    "revision": "15e95c3f8cee28a088c968cbb0e99199"
  },
  {
    "url": "timeline/index.html",
    "revision": "9b836d9c2449f8f398b53578f21fe881"
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
