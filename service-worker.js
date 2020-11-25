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
    "revision": "943babdb553e9952071b98021b0079d8"
  },
  {
    "url": "about/index.html",
    "revision": "e9832d63442dd0dfef23acd158124881"
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
    "url": "assets/js/32.9bf3ef5d.js",
    "revision": "3a23db6362648dbc472052f62b1d5567"
  },
  {
    "url": "assets/js/33.5c6dba63.js",
    "revision": "eebe279ef71b7c970c4833bb1005c355"
  },
  {
    "url": "assets/js/34.ec7b70d2.js",
    "revision": "13b731aee1addbc04e242544c58f8ace"
  },
  {
    "url": "assets/js/35.0b5159fb.js",
    "revision": "aee9b5659f5cb766fdf674a396f6757d"
  },
  {
    "url": "assets/js/36.bbd940eb.js",
    "revision": "221bcb6bafebc6a576b38d46ff1f3a20"
  },
  {
    "url": "assets/js/37.0bd947c4.js",
    "revision": "66f5d07fa10ecd315c1899a984935ca2"
  },
  {
    "url": "assets/js/38.f02f89c6.js",
    "revision": "e36de4972f8416316dd4e15af5b8923b"
  },
  {
    "url": "assets/js/39.235245ed.js",
    "revision": "a68b19592bb22f31456f41b6158fc7ba"
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
    "url": "assets/js/9.877ad93b.js",
    "revision": "0e9971d2edad16c5350c397a1a84ada7"
  },
  {
    "url": "assets/js/app.0fe16004.js",
    "revision": "29f7a5ee5a279a47599984e0b638ea38"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "c4a897a18c3c72acbcb5377c1d8e686b"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "b329e3d846eb9abb4cd2b3bd875e4fd8"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "d687721e0c4666878a94460a94df2a5f"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "cb1670a42fe3ee9e5fb4ba2aced6859b"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "f030d78efa4ab5bc3a9343abd1a5544b"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "3c0100563251edc13f55d6f272f6907f"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "dac332b561382b4ff269a986a8f5b4d9"
  },
  {
    "url": "blogs/index.html",
    "revision": "44dedbf354a89984f98d4dcdc1593e8c"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "078e797a8b4609393518c19efac56fe8"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "39db95d59598d90d07eed44ad3e72da4"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "4da5c5324840d615c074d8eb9b50ce6d"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "410bf69af2effa7df508d93f724fcebc"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "7e511746966dcb57699d7538159a7ce8"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "36f7da2f6e574529d10d2cb3aee8a3a4"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "7792d82064386a85c5db10f235add985"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "93182ac0d4702c8ab5ee35d05347631f"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "afcd051be387862adec073fe6521925f"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "3c218013c5d4214bace8d76e2003ac56"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "342843eaebaa7535e5f807e31fbd1297"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "d8c61d1826dcf2d3f5c2c4b3125c0ae1"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "a92cb97356a605dcd9faf542a8a18c5f"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "6c74d995253236fae6cd9fd0cc628740"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "4d7cd7d4186386668c93b4bc3d5585c1"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "908af2d18e0f78ce154cbc6bc1c3a0a7"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "bf27db54dcb8a0489ac8759e1862905a"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "b99cc9a0dd9e5bd44ff13fd8ee217057"
  },
  {
    "url": "categories/index.html",
    "revision": "667bbc949ac8a46ead05ae938470abfe"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "aabd1d0bf1236e39d79eab5e2f171f45"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "b32fa64ded5053485db369b7e13b7ee6"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "7507649f634784ca3f110c3da6a017eb"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "ff46735d51cc7829bfa39b43b7a627ab"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "e4a893779be4ba85269346ed6dcb9c32"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "4b700ebbd290fbaf150f722aa580bf6a"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "537c8af74f5cfa3b3ced918c68bd0dcf"
  },
  {
    "url": "tag/git/index.html",
    "revision": "49cdb604a5531e4329dba3662837683e"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "2c21c577a5d81e741584cde27c42c107"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "a9205bc55eebdca21cf69ba6583f6e51"
  },
  {
    "url": "tag/github/index.html",
    "revision": "8df8060b4090a9cccb7489ad538ad6cf"
  },
  {
    "url": "tag/index.html",
    "revision": "fdfa4f85fdff8dc812728738d8943ebd"
  },
  {
    "url": "tag/String/index.html",
    "revision": "f8a25dd136cf3af8ffcfb30308e86906"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "c069f789ddfc492db5507298c71229cf"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "d3882d3a9fa8f7029c5d884d6692036a"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "d13c2e7c2bca0a2c50cae37bad11767a"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "88d7c9fbcbd34030c41060f062823e40"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "b91be946ae778dde88b01414c922c880"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "d6afb723c7e100b87c4044f270beb268"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "bb8018f1de043ffd86e97a5ce01e1591"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "155c83fe6abd58b965ab931ef2dd852c"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "f78c94100a4c07a859349a05d655425e"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "e2694217df5e96d496bb4dc9b93ae1f6"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "88910e5b3b9fdce23e22f4624b5071ea"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "d77fbd059042dcdebfac15a6d42c5035"
  },
  {
    "url": "timeline/index.html",
    "revision": "04594d9b3cc660803a40e3003df673de"
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
