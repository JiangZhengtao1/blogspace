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
    "revision": "af94ca0ddc7a08fc48a0db31eb5a083a"
  },
  {
    "url": "about/index.html",
    "revision": "9cf8780c05547747a973cad6a24287cd"
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
    "url": "assets/js/42.527def8e.js",
    "revision": "b8472b8a0bc4da89769ec5ed32e204d4"
  },
  {
    "url": "assets/js/43.103ccc83.js",
    "revision": "eec04c4caeb37a4cbffe1437d3dbcc47"
  },
  {
    "url": "assets/js/44.528bcaa4.js",
    "revision": "4c3da8c7725fd8612c3e9fe093e270c6"
  },
  {
    "url": "assets/js/45.cda4ff12.js",
    "revision": "15ad567c40b948c8570e54e0b26317fe"
  },
  {
    "url": "assets/js/46.6c0b16c8.js",
    "revision": "2f2238c48bb37150afd1f5eb54e93d0f"
  },
  {
    "url": "assets/js/47.fb8586f3.js",
    "revision": "5b6219326d95bf7e8d67ad30895c2de2"
  },
  {
    "url": "assets/js/48.46ed6b4d.js",
    "revision": "af591673dac809e1b6476b40bc659e6e"
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
    "url": "assets/js/9.f5573938.js",
    "revision": "611ce431ec17e0d74ffa324ffa432327"
  },
  {
    "url": "assets/js/app.73ac3eaa.js",
    "revision": "77a8e98fde0b0077352df3a870dbaad2"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "8e464595afbe7480c715c74d708a3206"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "2322036a6a826630da29bff8cdb0905f"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "8c12e96dda1f9bb481c4c1568bdd47e2"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "d184296cb7e933a37da3df42c32b94c4"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "695b751d7300b2d5846b811c1ac8a42c"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "e9471f14fbd633d3f488ca34009600cb"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "ef3950ea7a6836ab8cad467474e07418"
  },
  {
    "url": "blogs/index.html",
    "revision": "0e577b52e65f8d13cfff56f21e8049de"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "50be31074d8ca72d9b1ce834446278b8"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "d35deacfd68f7316dfb83014e9fa9219"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "3657a206ecb5c9a00ececf4b021bac01"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "6371042ef56a3e75431019d79ad35056"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "c1edba3b71b8f9260e5dc09089698ab6"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "c86cea14ec49a0eb6c8787b980197fbf"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "9f7d76b3d3bc25cec3528b431628996e"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "0a77a3263c69fa79b165fb7ddda06e3c"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "77b0f77c398e97ef216198177bde2d30"
  },
  {
    "url": "blogs/LeetCode/2020-11/168.html",
    "revision": "16896fcdd4ed51b829ad8407c97da4f6"
  },
  {
    "url": "blogs/LeetCode/2020-11/172.html",
    "revision": "041eced5588816e66b843b573fbe5994"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "6374930bde7324c201bd8c04ff4d3daa"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "82bd2d434cfa915785ab092dae1d248b"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "32b3f2a6ec536b95a8d6b5a28b270575"
  },
  {
    "url": "blogs/LeetCode/2020-11/415.html",
    "revision": "c5aa169f699653fa9b9902dfc62b42be"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "a2decf6d6c5524ec378c3778672755fe"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "ee2f421b10399139db90dace8cdb7e33"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "b936352dd38962636afb5063a2f84b2f"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "b4e2dc3ab81ec5d63e25b4b278a73da1"
  },
  {
    "url": "blogs/LeetCode/2020-11/67.html",
    "revision": "d0d9f2ed9860537978e62acccc5e10e6"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "81110bb8bcdb68a20ae8cd6a93c7b8d7"
  },
  {
    "url": "blogs/LeetCode/2020-12/462.html",
    "revision": "1a93dd2d9278e1531e5d40d9aa8468b6"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "d690b7ba2d00609d70f7b773a59380a3"
  },
  {
    "url": "blogs/Research/Methods01.html",
    "revision": "4938b5c361af2e04f758c61660f16ac1"
  },
  {
    "url": "blogs/Research/Methods02.html",
    "revision": "1c2a1bd8d61c57c842988e54b7023381"
  },
  {
    "url": "blogs/Research/Methods03.html",
    "revision": "3dcecac213f2dcf78bad4110e2dc9947"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "01bfa92ac9e1f023d0182ab986abb03f"
  },
  {
    "url": "categories/index.html",
    "revision": "9ffd311437e3889bcdf50a6e5a56abb6"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "c44d3a7bddfa0b2b9ecb0d111ebda6e6"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "8a5432073010004ca4fec7c7da803b80"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "0f6a929d8e8673a419f5e3eff4e077ec"
  },
  {
    "url": "categories/LeetCode/page/3/index.html",
    "revision": "36c0ce266595bde94a804eef3ff644da"
  },
  {
    "url": "categories/科研/index.html",
    "revision": "e7ce74432bb1e2e707817d237efbdafa"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "b5d282cca310a0275e54bd18ebc455e0"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "03d76a63ac198c7a52b82c3b1527f4b9"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "05745bf079b33f0d844d50e79be11a02"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "8af54f1a3a140a1b35b116de6586edb6"
  },
  {
    "url": "tag/git/index.html",
    "revision": "51a7d32c76a5d56842069abb0e290e1d"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "904dd56c229a311e80c364fd6b1c4622"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "45719aaa8d3759e445435618dbbd8535"
  },
  {
    "url": "tag/github/index.html",
    "revision": "3167708042a3509dfb1c81461374110a"
  },
  {
    "url": "tag/index.html",
    "revision": "98d85227aebfef28a832458504abdc8e"
  },
  {
    "url": "tag/String/index.html",
    "revision": "4b9a4926d525966bffd55ed3db361657"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "077a2861409a5841c74b891b6e5a329f"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "c44a0ad67e9be3995e180e632b8be977"
  },
  {
    "url": "tag/字符串加法减法/index.html",
    "revision": "f181201a7b3d97b2e680dc1579f04768"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "15ece89732c7f6cf4bbf867b8b0c8194"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "81e92e02e22579d37dd418c27feaa068"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "41e2ffd1ac4ecaeefe65b33858e933fd"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "99018e2a05851f149615fb8ca077d618"
  },
  {
    "url": "tag/相遇问题/index.html",
    "revision": "c305aa754343c2a18ea0b84585dcbe30"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "71df232a78ff9c6daffb5ac2af8182a8"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "6cfbe5c1273fe9947c8a21ab82e45d67"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "db6de1fbc4bc4acd6de1720dc6a39b3d"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "98f969dab2b119e98e1b865e3bdf6da1"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "29abf11ddbf61417e943e3348d43db49"
  },
  {
    "url": "tag/读论文的方法/index.html",
    "revision": "b859d4a7ce1ddf25a8f454d020f2b250"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "f97617b3e3d7a4b48af2d854fe352c7f"
  },
  {
    "url": "tag/阶乘/index.html",
    "revision": "928a7a67ee06f9736de772fde7affd1a"
  },
  {
    "url": "timeline/index.html",
    "revision": "31535940d60dfce9cf70e5ae2a90772a"
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
