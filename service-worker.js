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
    "revision": "86c94e1f9e520a00f397856597d472b4"
  },
  {
    "url": "about/index.html",
    "revision": "a703065b02bfd5fff02972eba8942097"
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
    "url": "assets/js/44.ce3b8ade.js",
    "revision": "f78ae97965425fba0fa701f49d29e87b"
  },
  {
    "url": "assets/js/45.0cd28d3f.js",
    "revision": "545b7396815778ed363173cdc4653476"
  },
  {
    "url": "assets/js/46.18517f49.js",
    "revision": "3b9aedf1d80d6b109c930f54c9ad5ffb"
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
    "url": "assets/js/9.3005b73b.js",
    "revision": "49e22a31b14a985df11be4e28554e561"
  },
  {
    "url": "assets/js/app.4cbe93d6.js",
    "revision": "9f7098bbfcee0cee267db075f39c2268"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "179e43f3816b9b1297a217a0c3d0533f"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "3f9294810a495b57790fd8ade0c9b92f"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "3faa4f393c74d9d93580f5b316bac50b"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "719a565bb8aa56fb02099a054fa30bc9"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "e6a582de1d8fa8366843a0afea3b89ff"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "5a5a067c956e4a63144a201cbc5c3f27"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "bc3d84436e36f36bc4f52a7b770dc61a"
  },
  {
    "url": "blogs/index.html",
    "revision": "5c6391bac69259c828c9a55cfa681904"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "76e1133a8f7bad82b997b73342f64a3f"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "d742b997b9676ef3ac95ebe5e143ee97"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "dd126ea6bbbfab4119b188998ee6facd"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "2f603ee0727b1a091e8f7ab38f13d8b1"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "50c3bcdc40afe16bdce56e12cda7f983"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "99636b7850fb7774a8b533a7416adaab"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "3f663975562a6277ce5bf668b0782d37"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "4ed09da08e064943c8df946c9ad8a43c"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "bc80b102e86b8f9bd95b13d3374e0ef7"
  },
  {
    "url": "blogs/LeetCode/2020-11/168.html",
    "revision": "c8a5258e21db32d20622d28696fbaab3"
  },
  {
    "url": "blogs/LeetCode/2020-11/172.html",
    "revision": "7e9dc136add526c9af36b5926ec3182c"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "f45035c053328a482650e72424800998"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "c6d50b746f99cab6ae8bc28a5450d7de"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "1ca1e32b89141be7971d3153bcd42d28"
  },
  {
    "url": "blogs/LeetCode/2020-11/415.html",
    "revision": "052c76aceefa9008735ce81050ffa3c1"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "df309c5993e1ba82146ce1ea23c0cf0f"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "7c7df6c673b82c8a6017e4a443184a80"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "b946b3bdcab9a5945eeceaf3255ea6a2"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "b2751c27bd6a8dc631a0ba0e9dd9689d"
  },
  {
    "url": "blogs/LeetCode/2020-11/67.html",
    "revision": "aea8826061f4fbfc4ad2095fd2f200a3"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "212cf0c5b499311dae3ba9174889c1f5"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "34b325b58b8826c84a6df5b793fb3a6b"
  },
  {
    "url": "blogs/Research/Methods01.html",
    "revision": "b8e6de2160bda3afe2f64818befa2581"
  },
  {
    "url": "blogs/Research/Methods02.html",
    "revision": "94fdfeeca9165b406905896c9dc21469"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "a899bde75fce4ee91e88d376e8c76686"
  },
  {
    "url": "categories/index.html",
    "revision": "590b11fe71025489346f14f1373eae69"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "70d0c52c0e250e9feab18621eeebdb45"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "491c15c9a7b6c21d66e1d6d3a22046e1"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "64375eb5a02c1c34355f8a1d229931af"
  },
  {
    "url": "categories/科研/index.html",
    "revision": "52f4ca418b9ad26f5de1c5359a971cb2"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "b7765adfc7fae3bb9c3175d98dbb13c5"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "b94775287aba4cd0c57477081cecfc09"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "e3fa0c03d7074aea08cfcc5b97290d86"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "c263023090188b848048f6c4cdc53c44"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a82111fb1d81f2bf036c2b3c0c63d39c"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "56e0370ae3342ca72d6b13ade30e1219"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "08c0930f4fca6b0d15d0a0241467c1a7"
  },
  {
    "url": "tag/github/index.html",
    "revision": "1fde5e1c5361674879301f3478715a45"
  },
  {
    "url": "tag/index.html",
    "revision": "3e7f8a95b91e8c504fbad5305d954b30"
  },
  {
    "url": "tag/String/index.html",
    "revision": "bf03d57d0c8a0a5884c5a02cfdb6057d"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "dd2af4103eba532e2626f1d43faa1eca"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "a942c25a8ce5cdd0917a3a76c5bb958f"
  },
  {
    "url": "tag/字符串加法减法/index.html",
    "revision": "b874f67236090d4c5d9322b4859f6d6b"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "91147675aac51c7cd2638429c28102f4"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "62a77ff4bd6a220cf89495acaabe08bf"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "f4563a68ccf96effaceb2dfc147dbf95"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "7ee27dedd6cc2852bebd1875f4d0fda5"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "783df623cf4c7bb8952ab3f0fa3b2350"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "e156031b7f2ccb016c9b4137e50788c8"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "5f5e30f7e2e309a210590ed14066af8d"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "c7df871d7c417fdff6d144bbf2ff7866"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "9b40c99faaa58e5b039c21d7a2673ca1"
  },
  {
    "url": "tag/读论文的方法/index.html",
    "revision": "27e5021004162ed7f431c93660dc7f6d"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "67feaa11c5513b5511f291d9f214a3df"
  },
  {
    "url": "tag/阶乘/index.html",
    "revision": "e3bb7e174bc3e3776fa16ad27f9800a8"
  },
  {
    "url": "timeline/index.html",
    "revision": "0ba650d3dfd99028c203421f6f7790fc"
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
