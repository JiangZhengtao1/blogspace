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
    "revision": "ba1dd82b10436f46e4e695365713ceb9"
  },
  {
    "url": "about/index.html",
    "revision": "e1af349689f05c2249b6bc52e5642ac9"
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
    "url": "assets/js/13.17587ffd.js",
    "revision": "2f57e69d0d08b3f10e7c5446a72826e5"
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
    "url": "assets/js/20.2e79b999.js",
    "revision": "d7be6bac9c1e4f396c53189d835b5b79"
  },
  {
    "url": "assets/js/21.1ba1a564.js",
    "revision": "4fb1a9a9c09ba396cbf4634c52b2fd70"
  },
  {
    "url": "assets/js/22.018b4214.js",
    "revision": "07ec865590a41bc3afe9d251c3f8c169"
  },
  {
    "url": "assets/js/23.5d658a50.js",
    "revision": "0184fc4bed3fdffcfc1c375418f7f490"
  },
  {
    "url": "assets/js/24.a1575c38.js",
    "revision": "16b018a749c88d4a4af2f74819533732"
  },
  {
    "url": "assets/js/25.0d22e6ce.js",
    "revision": "931c97583a5496ef7e7ce78a04077f17"
  },
  {
    "url": "assets/js/26.8354cf48.js",
    "revision": "cc1e176a3c54811787252d21b165b953"
  },
  {
    "url": "assets/js/27.8625af1b.js",
    "revision": "990baa258c3b9f6d3ebfd430861af64b"
  },
  {
    "url": "assets/js/28.d59b0417.js",
    "revision": "912353129d0839aade6b0b0009d1c101"
  },
  {
    "url": "assets/js/29.60d5da81.js",
    "revision": "b06cb677b673462f363c2a316c9493ad"
  },
  {
    "url": "assets/js/3.ceb7af67.js",
    "revision": "63d04cab7972aec070b097c8c8b15db2"
  },
  {
    "url": "assets/js/30.4c4d2d41.js",
    "revision": "8d15e17a7f562ecdbbe9f8a6ae4e9a06"
  },
  {
    "url": "assets/js/31.31f46c4a.js",
    "revision": "3b7e2e9964cf001c8a23da8d016bab55"
  },
  {
    "url": "assets/js/32.aa864c22.js",
    "revision": "eb9688c0e271b123b100cab1f63e4f18"
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
    "url": "assets/js/9.6f8b2afc.js",
    "revision": "8ad75d9d02082de574781b97cfea1231"
  },
  {
    "url": "assets/js/app.3a9d8bdb.js",
    "revision": "6aced80174a364347db700ada0fa41e8"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "25d007a84db249a591a20dd94487f1c1"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "cb06c30e7f6fd7641514fb5019991cef"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "43276ab43f4cc47ebcaad2b815d7dde4"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "5715718026005e79e6fdedaef9bbbeba"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "37bb4b78cb9c7818a76c703e3bc56a8b"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "f9f5a47804a660b4ea34ea7ec5caffe4"
  },
  {
    "url": "blogs/index.html",
    "revision": "f747e070ddac85cdd6d720115e36f4ca"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "bf60a43e04f419d18d87255196750347"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "e67c3b7800e5adfffe2715bf9c783d2a"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "94ce5d79223c9a899f9564355525942f"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "688e9c80fa167080602c8131269c3844"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "501c037739274575a20e8265ebc84b3d"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "ddecb1c1286eaaf3396732328b450066"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "169f10f54d71b19fd7f0431a6f16554f"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "9d820b96b34e413b7272da38d70801e9"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "1bac8fb537ea8cf8d6187a866e22117b"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "896626cf024c92794c9fe325170cb896"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "8553ba60ba28749dc961147bb6dc9413"
  },
  {
    "url": "categories/git/index.html",
    "revision": "d881c272a7adabd57feac687b866a261"
  },
  {
    "url": "categories/index.html",
    "revision": "33cd2fd37a222b00fca12d7e06c971a1"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "a2909ef76d4bd730016a7ddee6279ace"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "a7cc015bc3c30de02757d174c89b494c"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "e11dfae4aa5714f295509f5b43c7fc0a"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "107aa0705fc075e6c08b6d4129adcd89"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "56c8ffe7a67f699f1d66fa9f889843c5"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f05bb85ee76a66ba783ae073e70c9a8e"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "6061da16b970df32f2ab9c3b4796bf17"
  },
  {
    "url": "tag/github/index.html",
    "revision": "8760fa62f2268520ff83655bc555cce0"
  },
  {
    "url": "tag/index.html",
    "revision": "944957d5c4e8b47cd24150b609842840"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "cb8844128af6bb2de58f23041421a482"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "04e3a558d7e92adbc5f7fdccb94bcfa3"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "2fa8b3e8bf97118cae5af385ab8806da"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "a59d7775e135fb62033e59f766e6075e"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "388f9478300649e25d26905d64847abe"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "3fd24e6f6d8c60ccb61b247086624666"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "e238a5de319670527eef175749a4f219"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "eb6a84d0ddaa62e99eeee46cd6c8337a"
  },
  {
    "url": "timeline/index.html",
    "revision": "f87a1eeeac6853bb496b8781826174b0"
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
