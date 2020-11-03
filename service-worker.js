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
    "revision": "72691bdb0f95479266a492bd188ceb1b"
  },
  {
    "url": "about/index.html",
    "revision": "e4b3827d12d0bad56322b555abc3c8a6"
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
    "url": "assets/js/28.9dc89c9b.js",
    "revision": "4b15d49a8b19f80ee41d116a9fa6b787"
  },
  {
    "url": "assets/js/29.8d5fce29.js",
    "revision": "d98b7a1808f0e96552110d9780a58e80"
  },
  {
    "url": "assets/js/3.ceb7af67.js",
    "revision": "63d04cab7972aec070b097c8c8b15db2"
  },
  {
    "url": "assets/js/30.ecd6e768.js",
    "revision": "feedf67c67652e294bb025cc77243918"
  },
  {
    "url": "assets/js/31.a331711b.js",
    "revision": "88c9f6a3c19db027b6cdc1292ca9451b"
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
    "url": "assets/js/8.ee414d06.js",
    "revision": "7bb46c057c89f9bfd59ff37a32979551"
  },
  {
    "url": "assets/js/9.0f805c1d.js",
    "revision": "4a10508e1a7a98f1246806ea5edf0c46"
  },
  {
    "url": "assets/js/app.aa2ad652.js",
    "revision": "27a3c8006e8a161cd250cd4c7ca9a085"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "aa0686f8267e5bc5f96e09808a98b5dc"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "d63daf8ef586db9a32a9205a882a5a0e"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "1cdaaf0ebab2444c22127b1501b4b77e"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "202a4e8630d619e1381b7bcba1b0d37a"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "9233133501eb83ab957639eaf92105df"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "7bfe38e9dae9edd11d009a047f5bcbe1"
  },
  {
    "url": "blogs/index.html",
    "revision": "530738dbe481376b20e9260f2cb144c7"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "9e6f19426728bbc63122d5cd85cf89c8"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "3f5a32526779535f726df2f0963051ca"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "bd8b050e52fe7e884bd032146f293467"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "571309280399e66b5ea494de7a6979eb"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "0d8916bffcb472b420a8087d17ad013b"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "8af2db4327fc794e0ea4ac547dbdd5e7"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "ec2cc8506dc0a4857bd9d2999e8cd60d"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "d8ec3e2c9b087579d0100eb2b28a7b94"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "87fad086ba9629bfe5e1e649547df4dd"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "8e487c839bb35a0b8e7c659e33ca82ea"
  },
  {
    "url": "categories/git/index.html",
    "revision": "ee77f9a51670deccda78a6103f3f6267"
  },
  {
    "url": "categories/index.html",
    "revision": "207c9c57a39288cfc95110d0cc46c2ee"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "fa360cd74037a527aeed93a1ef31047d"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "f5803459f432c598d5763f0b29997c2f"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "8a0570691576d28d508eeb00eeb534f7"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "cc7e8130196a69707570e059a23e3027"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "40b2e0da6d9fdaded076850f9cad7160"
  },
  {
    "url": "tag/git/index.html",
    "revision": "fcb9e9a3cd6a97d82b515b9f90ad2e62"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "da76d00088a74d1b82e07e484d1571ed"
  },
  {
    "url": "tag/github/index.html",
    "revision": "d1c8d67516f23487ccc44013e5127297"
  },
  {
    "url": "tag/index.html",
    "revision": "dd9279f2345c3d4a23b79a2ee9e22071"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "830be69d0851ec2fe131fb7bb61250bc"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "a50b3a6e2a5ff6428ee1cce9ce6640b6"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "c6d9c2aa551c142ca6779b4e9f8a0e51"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "07a63677caaf79d13322d98e89b14c1b"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "bb31cc7f5676085037d84d4bdcebbff9"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "fc47bb8732a38ff33c4bd77dc9b1f5d8"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "b14bba7e90e01b960d373f336b3394a6"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "b52ce1fa954902444bf719e258694df3"
  },
  {
    "url": "timeline/index.html",
    "revision": "3f59c74520c700f529927ad755941fe9"
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
