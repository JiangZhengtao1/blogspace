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
    "revision": "6fa2153d564b8bf24aa1bbcf6616ab64"
  },
  {
    "url": "about/index.html",
    "revision": "d5cc7b47b3ad683e3132c40689717252"
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
    "url": "assets/js/39.87ef460f.js",
    "revision": "f78dddd95c7259d6d20e46855f4e8253"
  },
  {
    "url": "assets/js/4.1dae492b.js",
    "revision": "91540e1820a5e3db8681afe63dbd542e"
  },
  {
    "url": "assets/js/40.0f7a57c2.js",
    "revision": "5df4224bd28b997aa16decba2a19d923"
  },
  {
    "url": "assets/js/41.2f6b19cc.js",
    "revision": "113e6e61c316256b64e9e8ad012fda09"
  },
  {
    "url": "assets/js/42.d8515778.js",
    "revision": "2ddf86ce56c1812db280289997d7906b"
  },
  {
    "url": "assets/js/43.30ba61a5.js",
    "revision": "7a64c4990c5fdc4ccf3c0577eddf43c8"
  },
  {
    "url": "assets/js/44.0a5bf46f.js",
    "revision": "d9e683109bc1a727b73592d27eda4818"
  },
  {
    "url": "assets/js/45.960dbcc7.js",
    "revision": "7356f2d00935656bc0b4e92d7e21a9bb"
  },
  {
    "url": "assets/js/46.d67c111c.js",
    "revision": "416602cb83b27ac049f10badd1b730e2"
  },
  {
    "url": "assets/js/47.d2208816.js",
    "revision": "4a8726e8eb499370d05d8f69f9bc5702"
  },
  {
    "url": "assets/js/48.cf6573b5.js",
    "revision": "7cb1107a69e9690364e05356fbf7bc05"
  },
  {
    "url": "assets/js/49.2490a1ff.js",
    "revision": "fa0aebe8761631cd8bf6e0ba138df927"
  },
  {
    "url": "assets/js/5.b22a7363.js",
    "revision": "754618d1e853c1fd328ba023e9f9a5fd"
  },
  {
    "url": "assets/js/50.c4d08205.js",
    "revision": "8e2fc827e1d14b52730c77f328cd9129"
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
    "url": "assets/js/9.a5cd447e.js",
    "revision": "a271285c86b5dc14f9eaa7c3bcc2a447"
  },
  {
    "url": "assets/js/app.00aa7795.js",
    "revision": "17342f5b1e4c74e28a8a4ecfdc0d3786"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "459299d7f1ae87fbe5e4104b828eb16d"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "c5051e127c1ebba35f8d314cf3161c3d"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "6e6416d46e2b87fdbdec19a1e04f5d44"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "f0f8557983feaa623193f7f0bb1cd0ec"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "83b3664ac8012f05ed94a16941e11248"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "3d7ea87e8c88b26af0e4f01194c70639"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "275346cc0072ea27ecbc078708e7025e"
  },
  {
    "url": "blogs/index.html",
    "revision": "c8212a84aebe66c2f74229053096a5a0"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "d4dab54dd47edcc20c35364faca04ed2"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "dc59000ed18e73c640cc5755e76a85f6"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "fc707cdcf98c1c1f645a01a34aec7a5a"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "222285a5712b2aff078b16b406629455"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "7034476a1beb359d7bc916dbfc9eb65c"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "27064ab01f386bb5afb03663175dcdeb"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "9e2a5b43717681a2dc0f157dc143a983"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "bde6800d874698da245cd18bb0aeb887"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "82a8befe472e2bef1e7e7cd4ad130000"
  },
  {
    "url": "blogs/LeetCode/2020-11/168.html",
    "revision": "f9e18fb5cf1fc0ba9ba85c12165d49e7"
  },
  {
    "url": "blogs/LeetCode/2020-11/172.html",
    "revision": "05af946a625edaa12c95cc72bfe9283a"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "2c86ea6bc4b0f30770f281f02070a63f"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "b2ffbd07acb62d17cc6f6a1425e151c5"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "9aa86b8327fffdadff9861c1cb7a1ca3"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "6dc95e12ae76995ffaf2260f822996aa"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "83b9b7981f2c150f3a169c8254701bc4"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "c10e2046561124a91cb40a6d0065fafe"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "73586ddee08bf153baeafb191ac91b5b"
  },
  {
    "url": "blogs/LeetCode/2020-11/67.html",
    "revision": "303ad445fa1f62dfb58bbe68f1fa5b0c"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "fe9067790be1c5e9c32016dccbf3f8d4"
  },
  {
    "url": "blogs/LeetCode/2020-12/169.html",
    "revision": "125c84c6ad0a93bfd52f6326f99ba1b2"
  },
  {
    "url": "blogs/LeetCode/2020-12/326.html",
    "revision": "09e07044b41ee29eec6629df98d715f1"
  },
  {
    "url": "blogs/LeetCode/2020-12/415.html",
    "revision": "8ef9e1f0f244e2b81d71eb88b991dd91"
  },
  {
    "url": "blogs/LeetCode/2020-12/462.html",
    "revision": "a81123e1be409ddde93fb99773076ea7"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "661cb3ba3c8eec3798d18a079f82f10b"
  },
  {
    "url": "blogs/Research/Methods01.html",
    "revision": "54390bd0041526e0a14f2b4d227bd3b2"
  },
  {
    "url": "blogs/Research/Methods02.html",
    "revision": "4857b5ddcf8fb451e94c8699c5816b4f"
  },
  {
    "url": "blogs/Research/Methods03.html",
    "revision": "12d950584c2ccc518bbdc159ea71456c"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "f5b03b237e407c23ce7a43b0dc55abc0"
  },
  {
    "url": "categories/index.html",
    "revision": "596aceaa700c5665f8bfe66e0208ba81"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "dd06d4c2ad686e9a102728f5ae8405fa"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "41e8f4fc0b5fc35925f4c6ed5f2da771"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "8d312fd4ed99fce70eed10834d4b0de6"
  },
  {
    "url": "categories/LeetCode/page/3/index.html",
    "revision": "f7302c3f50588a0d23ff2bc4378b4760"
  },
  {
    "url": "categories/科研/index.html",
    "revision": "b481e4cc6e81f4526972386d76f5747c"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "b19a34db526d1ef24c6c0c671e93e21c"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "17c5d315a41561aa332e0b70ae05c224"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "8dbc44f4c9f0384c0112c4e60bc67103"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "c401e11df5e05b78becd54bb7e3e48e0"
  },
  {
    "url": "tag/git/index.html",
    "revision": "fecf295cbec8ed9d46775d8682f68e11"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "45c9ceaa1d487a447c583f96b6983523"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "7c13335151762d6f3bdc00db135db92f"
  },
  {
    "url": "tag/github/index.html",
    "revision": "62a6caa34f5fd28287c3249db91ea687"
  },
  {
    "url": "tag/index.html",
    "revision": "ac445fee1ca6c8431530e837f7a596fd"
  },
  {
    "url": "tag/String/index.html",
    "revision": "784743f6463529fd4d76c4603db4bad4"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "e1f066f4646cf380f4258b744a7aeaa5"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "90aec7ba0eb0f53af6076b1f10be7c2c"
  },
  {
    "url": "tag/多数投票问题/index.html",
    "revision": "2691895b0998b0776dc48144e48feef2"
  },
  {
    "url": "tag/字符串加法减法/index.html",
    "revision": "2b8d086bd89bc6eb1a221b69d04625b6"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "1977144d78c536cb4300c213dc169362"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "12c62c6d3882a53b55aed8d0314d7d7e"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "a4c1d4cdd3ab4ab2351a72a5a52c6ba4"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "db24e331896025bd779dc0471a6c4a33"
  },
  {
    "url": "tag/相遇问题/index.html",
    "revision": "53b320b04a79de11b910ddea4309934b"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "e54b461f4fd0c1e665d1dd02f6ea5757"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "dfdf10a08e6d6fb1deb5a721162146c4"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "11daea8aaa919c3cd7bb9f6c943228c0"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "9c8ce97959e4e4cb613fc34ad60bf44a"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "66c8f6a79716483e994594efb72a1814"
  },
  {
    "url": "tag/读论文的方法/index.html",
    "revision": "95ec028f2a68b69e4ed304e4dd2e35a1"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "5b2cc7e2061b05841990080231bf1ec5"
  },
  {
    "url": "tag/阶乘/index.html",
    "revision": "dfcc0a55e92876fe50b88652d9d09ffe"
  },
  {
    "url": "timeline/index.html",
    "revision": "afd9baf4b44511fc4186e70ca80aea4c"
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
