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
    "revision": "4bfbcee0b147a90dd51fade54047306e"
  },
  {
    "url": "about/index.html",
    "revision": "73de7741c0a4ec1499eb6d1e49238fc3"
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
    "url": "assets/js/app.595c2b2e.js",
    "revision": "583fa0c4b6c0ada2f7ad1e26e51ce534"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "fc05b5a0dd3674ad65540e918b1e5d4e"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "5b5d6a4669b9ab668ffca40573982ca3"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "f091f0ce7819e9d8590c2bd375e2b401"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "be86c55383281b1383181dcf4d001009"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "6bfcb02ec9547b2ce6616326131db0c4"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "1804b3d073189ff1af52af328110bd3f"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "1b5054fef28e79f3ad7c6e4b15bbbc40"
  },
  {
    "url": "blogs/index.html",
    "revision": "0866fc629c001a473f5e0c1f9120c755"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "dde6321fc58c6f92cd76629b2eae4eb4"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "5a1867123be6abd578a173431dc24523"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "822af7e0d298b9a97e97c5b8a4f2ed8d"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "93d9420ebadfc1a4a6a9aada3762608c"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "a9dc91e9514a0e1d5c4e547a07b5d7e9"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "d7b81c9d1d0301e622a60638c2a05918"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "05dbe42239ed088b01f1d6dffeb51b45"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "04817618b14f8f0204bf8e92ba8418f6"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "f80d70343601cbc9b02f1ee988272561"
  },
  {
    "url": "blogs/LeetCode/2020-11/168.html",
    "revision": "7d079fa78839c845999b41030ce04dfd"
  },
  {
    "url": "blogs/LeetCode/2020-11/172.html",
    "revision": "22732895c71425a74c5caca7d75d897c"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "638fa8ebd91367c4d2485f56e163986a"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "4a1f2ae4c04e50f4cc483cadd9d2e16e"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "3991f7511a27169c368989d1082f9e40"
  },
  {
    "url": "blogs/LeetCode/2020-11/415.html",
    "revision": "58b4b4fbd9b8f9dff3c4f4c004ecc6c3"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "e9cd3f3bbdc70c26e5f460f4a2de3795"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "37d0f3663e5724e3b64fe26c366c14e6"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "33937db8ea1d688507ecb8131c9f0ce9"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "3e4cfb156b59d5c80d5f4f66bc43c416"
  },
  {
    "url": "blogs/LeetCode/2020-11/67.html",
    "revision": "e7bc2df34469c43bcafdaef48ff06e19"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "f4be6fa1875bc177381c36bab69d0e30"
  },
  {
    "url": "blogs/LeetCode/2020-12/169.html",
    "revision": "07fc64e95bb983d786ecbbd61410c341"
  },
  {
    "url": "blogs/LeetCode/2020-12/462.html",
    "revision": "b4e09bae682581dcbb7dd2aadb2199b5"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "48ddd893d02f13b6b522f6321babbd29"
  },
  {
    "url": "blogs/Research/Methods01.html",
    "revision": "08336a7d0b25d592f931256b1bfbaf3c"
  },
  {
    "url": "blogs/Research/Methods02.html",
    "revision": "4a3d11340540966e635773ae65da6868"
  },
  {
    "url": "blogs/Research/Methods03.html",
    "revision": "b9656e37829d43ddcf49ee0d5d79070a"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "241b124edc4b48e17d8e346fffb0a13b"
  },
  {
    "url": "categories/index.html",
    "revision": "66b20cdd1087bb14634b9ce2fdd0ed2f"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "c738548f5f188063e2f8851e5c3874ea"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "b86c518937ec0992e77b4fbcc3cf0e77"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "82720c80f88661ad52d83d3488ee8dc6"
  },
  {
    "url": "categories/LeetCode/page/3/index.html",
    "revision": "6df0a0f0b18e9482d0a17ee193132830"
  },
  {
    "url": "categories/科研/index.html",
    "revision": "55f6ccd1f547f9ca7a2c7b5af0cf1d4c"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "ac047d25d041fce70563fd2f5c3c5550"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "b4e2d41da2bc8c48b62a6fb3b8b11bd9"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "b348538622f501998ac585fe0a5803f5"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "86b7bd3c31cbdabd1e2732bc571e101c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d443375ab6c95ada0dce153259e9afad"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "4af84cae772e5949b68c05523a78d472"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "946d9b389bae6aa3b3a15cd78d2e2033"
  },
  {
    "url": "tag/github/index.html",
    "revision": "c8fa2c263b78aac15703e0221f32086e"
  },
  {
    "url": "tag/index.html",
    "revision": "ef09290531b053b485a057eb1a316459"
  },
  {
    "url": "tag/String/index.html",
    "revision": "d44e8b03aa8620ce14023311ca3c9d05"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "af06450f613fd4521a5e34b0e5f7e1cc"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "a37c2b670df5acecd14342dbaa7b9b1c"
  },
  {
    "url": "tag/多数投票问题/index.html",
    "revision": "eedd383d5a9d795fa382d868c614d3d3"
  },
  {
    "url": "tag/字符串加法减法/index.html",
    "revision": "e252efec88e34b9381ff9dce9f9a44d8"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "7b7289938ca70d0c6c19b064eb4e5414"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "4158cb4abfdc9f21cc43188113434da5"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "3f9f110c2d3496d280640de0ce889c65"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "8a3c2bf96ed778dc81615b072dd60f7c"
  },
  {
    "url": "tag/相遇问题/index.html",
    "revision": "dd0502b0c00e390efcbdda7aa70ffda5"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "992a1fac8e4c1c74f204fa6097bf2d08"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "52ecc345c6a5314cabec0672bec7b07b"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "a28adc634c19ad484a6991a8cddb999c"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "35eab2810e93b4715f7e8fcd8c776564"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "6aa1179603cca2df104dc20c64e23b5d"
  },
  {
    "url": "tag/读论文的方法/index.html",
    "revision": "1743ec48498723068009ff54232a9536"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "27948a7f109185de71bbb7b4afb39226"
  },
  {
    "url": "tag/阶乘/index.html",
    "revision": "e075ad141c30482f189185fdeb0af5e0"
  },
  {
    "url": "timeline/index.html",
    "revision": "c3942df23fddb314fa401744cf140f91"
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
