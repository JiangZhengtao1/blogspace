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
    "revision": "57014b88f9c702a3d1a9bbd4d620c51e"
  },
  {
    "url": "about/index.html",
    "revision": "6c58ad7dccfcecbadd46f9b4cd64796c"
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
    "url": "assets/js/45.b902e3cd.js",
    "revision": "e370e30df2c679ed4a38fd3c60a448b5"
  },
  {
    "url": "assets/js/46.35f1a083.js",
    "revision": "5d5026eb89bffa70f7cdc1b8fa5542c2"
  },
  {
    "url": "assets/js/47.7266223d.js",
    "revision": "5e2757d8302fd74e6587801644eb42f7"
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
    "url": "assets/js/9.1116b493.js",
    "revision": "ad93c9e35bea37f64dfb0029830c2fb4"
  },
  {
    "url": "assets/js/app.0d3abba0.js",
    "revision": "162e639ae41f60a738eb230d8a8ec18b"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "5cc7b5b4597c4d74ad3b7474efde70ef"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "6b83b380e2dfc435962a5a90e1e054ee"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "0f13930bfcb85d1d983119c1a345ec43"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "1b256e5af91bc5d80963fc8190181df1"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "464e18ea43ee48bdcefed291da75871f"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "74bdd1d084fab7088b911b73385b6bab"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "ebe8e7bcc843398952effdba7860a922"
  },
  {
    "url": "blogs/index.html",
    "revision": "794afd68f575a590be0cbfff9f7f7c7d"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "28db9fa2ae4fc9be17cec046aedbc3f1"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "a8f7ef4997610b6dedf87098af673520"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "7833b98d6089ec163d661366031400b4"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "678a335e485da3cb05a792da548e63e3"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "8ceee1626e1e4939aebfdca98004ae8e"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "de86307883feb1b3bd41efa5f9fe265e"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "dae5c83dd5c31855734c85df94c5b391"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "ff6b49aa86aa1201561cf6236d20063e"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "a71ee4bcc63eb5eaaca7be9856f298d6"
  },
  {
    "url": "blogs/LeetCode/2020-11/168.html",
    "revision": "4044358b2e9b7e490b1c27c622990700"
  },
  {
    "url": "blogs/LeetCode/2020-11/172.html",
    "revision": "afad221f90cda61785d933364a13296d"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "eaae7840547445c45f76afc459a776cd"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "6906714b75ad1e3180820326a0486be1"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "9cc2bf0137f2740468ee43906bae4cad"
  },
  {
    "url": "blogs/LeetCode/2020-11/415.html",
    "revision": "493b71b4cfdb891f12ce2ce35a72733d"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "ed21da093197f33c223cdc1742db2f09"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "299741d31f0ec94913524fcf61c2626c"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "e0715808b65414eaafd39827436424c4"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "a3531b380ce887f0e65c28477f720b3a"
  },
  {
    "url": "blogs/LeetCode/2020-11/67.html",
    "revision": "05976fc26eaadb75de2685e29561f8fa"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "451fb1a23398a707b438c0ba910839cf"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "14c5dad83b0b3ca36629ade91e378eaf"
  },
  {
    "url": "blogs/Research/Methods01.html",
    "revision": "eef199c03d0860b66838c54cdc787180"
  },
  {
    "url": "blogs/Research/Methods02.html",
    "revision": "9adadc9ff769ef8aa8a69aca1a5dcc17"
  },
  {
    "url": "blogs/Research/Methods03.html",
    "revision": "632a5867d26b474c1109f48ad5c4f2c5"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "8a3f733f12af2d00786bfdbb5a343453"
  },
  {
    "url": "categories/index.html",
    "revision": "839024918784b1773358203daea83eef"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "0e57c50219ed5179837922e7bfed827f"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "f69a789e8d0d41578814893257a1401c"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "b0a49f73fae47a4a809cfaf12063674e"
  },
  {
    "url": "categories/科研/index.html",
    "revision": "68df3beb856fa0118ff5a25fa2d83233"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "07b326eb5679c98d549eb63d7df95344"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "ead1e670fcd25b43417f11661f6c2f6f"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "5ef0d33d5f51bf73f7da269a7e0c4241"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "02a73c1464c379e98897de4816ad7e5b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "30a5bfb64a2b2c8dbdf7149f09f1fcbb"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "4cb47663187af092c8021bfa502f4480"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "51447356fe0700e0c3758534b6359ded"
  },
  {
    "url": "tag/github/index.html",
    "revision": "a4b28d1a16b560da1de826a52f83a192"
  },
  {
    "url": "tag/index.html",
    "revision": "ff4bd9fd0e70c0a512541675d90b6f6d"
  },
  {
    "url": "tag/String/index.html",
    "revision": "23db9a5b0a464a8addbb143cc031f830"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "8c13d8c8291c0e21561495f079459a83"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "802310542a05c03c0955ea90d32aab66"
  },
  {
    "url": "tag/字符串加法减法/index.html",
    "revision": "b34757622c1dd27f9fce42ac04cddf64"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "df786b4923e0af69d6ce77a22e4a7b88"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "eaae2f2bde5f28dca4f9621f79019be5"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "886ff9717ab917b5cc40b26e311d9a2f"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "57affebd42e773d75b97ca65801ecb41"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "2afb6da6e7550e990ccc2fc75b31130a"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "ff9aa69e1f400bd54b52de1654c88de3"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "53bf072d3547144d0b83d5024642af8f"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "2aaa87f20a80b2b9b1feafc1cd721ba0"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "a70812ae8e1d2fe1be971256472ea623"
  },
  {
    "url": "tag/读论文的方法/index.html",
    "revision": "bfdc5134d79168e2b3c868e6b1c0bf5d"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "085ab02e13325459bf04d4b2289252de"
  },
  {
    "url": "tag/阶乘/index.html",
    "revision": "dbbaa2d5e17ee2f553e94c2faa8dfafb"
  },
  {
    "url": "timeline/index.html",
    "revision": "aebbdb56efb3cf643d332126a05c8c9d"
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
