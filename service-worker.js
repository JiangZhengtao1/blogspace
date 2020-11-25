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
    "revision": "62715e4e2a99198fa8427b75d121ab24"
  },
  {
    "url": "about/index.html",
    "revision": "ceebf47a210c413584ff1b1afb55695c"
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
    "url": "assets/js/39.cb79cbd2.js",
    "revision": "b7f1a92639efa8f29805af93d3327e72"
  },
  {
    "url": "assets/js/4.1dae492b.js",
    "revision": "91540e1820a5e3db8681afe63dbd542e"
  },
  {
    "url": "assets/js/40.e01a3421.js",
    "revision": "427afd9ef9a41670580ce01249b8426c"
  },
  {
    "url": "assets/js/41.aebe53b0.js",
    "revision": "e00874397824d8583c2d5d1d74de6a83"
  },
  {
    "url": "assets/js/42.df2a7f77.js",
    "revision": "4d77fe8fa34585c93f7de784c6e891c9"
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
    "url": "assets/js/9.56174e28.js",
    "revision": "96d1eb530d289fcafbfa0c8d4f64df69"
  },
  {
    "url": "assets/js/app.8e32a942.js",
    "revision": "ba432b8a872f7d2dd01f1a53c162513c"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "b9ccd690c3f234a873dd0f251edec6cc"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "58174292151eb2eb0cf13c139a6b5f13"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "d753593b3a4521d1f4b573f626923b23"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "7659a4ff7fe04414ec8f42ec74f3ffca"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "43375ec87b8b1c2942b5f70be49294b3"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "a2492e704cf158dede58e0ba8f03f90b"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "825b31c110eddfb2dd225161675a6092"
  },
  {
    "url": "blogs/index.html",
    "revision": "6cabde4245d4c98502ba1f4f58624f32"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "84d58015fccbc2d48c4b88189460eeda"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "74ddfe7ab7460a8d8041331759db6069"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "1a9dc7ab67e31f6aa1be66b7c557ff3f"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "146c61534ce26c37841f7e017f84907b"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "54ab3b76b71537b78bd7b4c15a2beda4"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "d389993f43c197eb6be76cce8679ca7d"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "d31c36e09e934ca4f72146cec165a9fe"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "2569f25b0f172e4bc142c6c1474e576b"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "5e1408fcc270dae8b979e0af2e1d1992"
  },
  {
    "url": "blogs/LeetCode/2020-11/168.html",
    "revision": "2c7bdfae14038723d799f8e56d1be8be"
  },
  {
    "url": "blogs/LeetCode/2020-11/172.html",
    "revision": "9efb4c2b50bce2e0e47677d5d2e05d00"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "07ead512ba5270ca54350bc658dbcd71"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "43784f46debeb7daa18626602abcceef"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "d65b1f366062cef6e8706c7be6f8b8be"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "b0732763ac1a238faa25a90ac8bc3b01"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "d5e05f6fdec4e73c999df54fca07d907"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "82f750fba7cc069099bdef8f39a9e530"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "b891615d25c36400dcdb84851e2f3ae3"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "4ff650c5bfe00283f5e40b0ce0f58681"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "57cbb4b6e3c106e5081abd21c1c9f564"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "544ea8d80e4ea2e86018afb5b1d7bda2"
  },
  {
    "url": "categories/index.html",
    "revision": "290183d6a06fbe1fdca0f7545af4c42e"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "6640c4882da56c3cd3df7d4c9597ce1d"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "97a66d3ff1eec9dcc13ce676c7e2f885"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "f6f9afac9d7e7db5a55bcf1da5dde863"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "3325a4285492de67923786260ecb4988"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "ec277aa9a0367a2a8acd747cb7d7da9a"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "50fe67b9f54eefb1999ab49f02e46883"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "846a5646f65a180cc9d6602a61c15753"
  },
  {
    "url": "tag/git/index.html",
    "revision": "0eafa543d519183cd92f8d8eee13a6f7"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "8afbff759d546b1938da954fd9b79491"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "96ae187593e6db0a0baa6cba246da844"
  },
  {
    "url": "tag/github/index.html",
    "revision": "e86b7ebd774eb9f3c3857c4fe21b62cb"
  },
  {
    "url": "tag/index.html",
    "revision": "c5d06ff3ceace8ff550db0c4cd807363"
  },
  {
    "url": "tag/String/index.html",
    "revision": "837efa98fc9614cbfcc16d891809a77a"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "1b48c9d26830e1385c845598fbf3b547"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "911a486770aa3a10444d3c4f4e3a4235"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "d7de08764da60efc80e2f33d768fc47f"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "0e7a8134d90b14cb9960522bcbe31c1a"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "fe1c5088f8b2fd3cfd42d00781718d06"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "daa5d24c1ab54375b0b5ecf9cbc0b479"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "9aa93cef5ee6952c3c33bc30b24adf55"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "a833eb6e0796c175fd0c3eec4056b11d"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "c07786a1ab1190c3770881e47b0c3b4b"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "a490d09dac7a46a81d5f4caba01e5eb8"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "323319606954c147ea499b6a9979a704"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "a1cee5efdd415aa0be447072ab023dd2"
  },
  {
    "url": "tag/阶乘/index.html",
    "revision": "56a9415946393e8993354ba2157b8023"
  },
  {
    "url": "timeline/index.html",
    "revision": "cd418846443c5278a998341e67f0d585"
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
