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
    "revision": "008070f97a4a24d960ed7c591758e853"
  },
  {
    "url": "about/index.html",
    "revision": "ad2d23000509369b3470303aa534f585"
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
    "url": "assets/js/45.115bbf3d.js",
    "revision": "fe0f89918efca9cc91b2848363955d8b"
  },
  {
    "url": "assets/js/46.3240cad5.js",
    "revision": "b74b5ffd5d59fa5fb39396ad2987b56e"
  },
  {
    "url": "assets/js/47.ba133b94.js",
    "revision": "7cf69407c89b2c4f12ed9038dba2105c"
  },
  {
    "url": "assets/js/48.c09492b3.js",
    "revision": "b2b3ead7a0fc3c3ea7871365c9a9c7c1"
  },
  {
    "url": "assets/js/49.ed17ed15.js",
    "revision": "cea9f122f085f19acf3bcd21dbd02a2f"
  },
  {
    "url": "assets/js/5.b22a7363.js",
    "revision": "754618d1e853c1fd328ba023e9f9a5fd"
  },
  {
    "url": "assets/js/50.feea23c7.js",
    "revision": "b703f0b2a2b1bf75e8c382482047cfd8"
  },
  {
    "url": "assets/js/51.76883f80.js",
    "revision": "638895764e2a0591222a8ab08f77f57f"
  },
  {
    "url": "assets/js/52.d87e6d13.js",
    "revision": "b1b6081dd1d30aac5d6ea224390e2356"
  },
  {
    "url": "assets/js/53.a1a61e5c.js",
    "revision": "6431974119c4b3d623f8e1535a4478ae"
  },
  {
    "url": "assets/js/54.3bf36241.js",
    "revision": "69d9e4013ffd3b00e8a47dd4f538bef6"
  },
  {
    "url": "assets/js/55.c014f36b.js",
    "revision": "ae18666faae6e627fb8d9fdca79117f1"
  },
  {
    "url": "assets/js/56.5012118e.js",
    "revision": "495518680c9d350e4ea183bf7de51f36"
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
    "url": "assets/js/9.27de6578.js",
    "revision": "19b188f4c679688bf0eb19ef66399e1f"
  },
  {
    "url": "assets/js/app.5b8df2c2.js",
    "revision": "729ffa5943205503b137658dcd07d68b"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "bc89c116a5e37500e2bb8681d812ec48"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "c6f050e5c910f6f2d7033110d35367bc"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "cd96c25c0a6da60a88281d3f4642d3af"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "cc9104854bd1f19671c99f0c48f4bd56"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "f7395d9a50df681fe800c4ac73aec5dd"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "6eac54abd513006e4316b65cebe18015"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "31b8f51e214309b13096b46b857db5f7"
  },
  {
    "url": "blogs/index.html",
    "revision": "ba7ad9c71fe7ba72f4615669694ee078"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "1280c0ec25f04b4bcacd75e9d35e048b"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "2c9aee34601fdf402708f4d61be3d320"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "6b5e6a9fb2f9a380d6d1d5ba4acc5938"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "f58d8cd7e97608ebff51474ec3b0bb2f"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "905f64b2725ccf8996d1d15d3a74134d"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "b54d2cc6606f6f77d13c243b175863f4"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "1b7d1fde3978b3f28653e692b304a354"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "ae0377524c3b73ff15396ec0b61f4be4"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "0a88e2cf83ace9440116ed9b813c9eb1"
  },
  {
    "url": "blogs/LeetCode/2020-11/168.html",
    "revision": "9adf2017d2242a79f183fa69affba468"
  },
  {
    "url": "blogs/LeetCode/2020-11/172.html",
    "revision": "d851df23bc45f4219bcd74fda36ecb2f"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "1745f0a463536d0989dd20785d9f6607"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "1157b173ecd0a57a28b95355766daed0"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "8be062ed73250ef0568f01ffeaacc222"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "8d67336dcb9b1da670f5d17febc207ac"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "8f7afdf59ae0bf850b210d6e2750d393"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "610548b851fb6f3410cbe0f0a1b17913"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "93eb4a40f440819023e8ce191b5dbccd"
  },
  {
    "url": "blogs/LeetCode/2020-11/67.html",
    "revision": "c42ae3d5848575f324d6e5423f6ffd71"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "ce293c696f38923d1854a21788865099"
  },
  {
    "url": "blogs/LeetCode/2020-12/169.html",
    "revision": "659a1928e1d43ad92eb907056984c1a9"
  },
  {
    "url": "blogs/LeetCode/2020-12/326.html",
    "revision": "04a6662b11470c967a7fc7225115b788"
  },
  {
    "url": "blogs/LeetCode/2020-12/415.html",
    "revision": "48ffde4d2b7c67feed82190f71a91d36"
  },
  {
    "url": "blogs/LeetCode/2020-12/462.html",
    "revision": "96e85a1bc35e589e31342ed57cc2df07"
  },
  {
    "url": "blogs/LeetCode/2021-01/160.html",
    "revision": "b8d1684fc4ed030ac783c704638f788f"
  },
  {
    "url": "blogs/LeetCode/2021-01/206.html",
    "revision": "71debd4e630bce7646e4c0770230aeb6"
  },
  {
    "url": "blogs/LeetCode/2021-01/21.html",
    "revision": "47808335fc478042e49e1b12ea3414cf"
  },
  {
    "url": "blogs/LeetCode/2021-01/238.html",
    "revision": "29cf238ac33cfaae81b7c68e5f767e93"
  },
  {
    "url": "blogs/LeetCode/2021-01/628.html",
    "revision": "fd4827fc4df225a52eac24ff38a8c6b7"
  },
  {
    "url": "blogs/LeetCode/2021-01/83.html",
    "revision": "e5c5668377a429bde9b0ffc32dec8038"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "ce662fa8317a1e6cac74a6d6e30e1fca"
  },
  {
    "url": "blogs/Research/Methods01.html",
    "revision": "89c522b558d0e229bd7dd0908120fcc7"
  },
  {
    "url": "blogs/Research/Methods02.html",
    "revision": "362399c23f3b5fb407de04fcd76c0bf2"
  },
  {
    "url": "blogs/Research/Methods03.html",
    "revision": "8b5aa3712b9717ef8e534273375b09d8"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "85fed0ce54803bf81bfe0d141e55c9f7"
  },
  {
    "url": "categories/index.html",
    "revision": "1dee192544bd46e70afb1b67209d54bc"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "80014c2e8100473be57a1b6f73dfbc0a"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "fc9816803dc0bdb24dd4aed083c974a5"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "e257f48b0dbbec5923b7a56b94987491"
  },
  {
    "url": "categories/LeetCode/page/3/index.html",
    "revision": "6ac6cddf43028694b886cdca4bf21d8b"
  },
  {
    "url": "categories/科研/index.html",
    "revision": "7a97bd3d5f13bc0774cba98d6193a9d3"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "c0589b93a390113859f80120d44c9fc8"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "a004ded63155cba4a2e361a9143870b1"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "42301e353d845015e34aa2f4ecccd7b6"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "3afc99c9b2d41dc195a97ba4eb7ca817"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7c5c5bacd66c98fe9c587ec185f5c950"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "934e1bf302ca5b88faab18b06062791b"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "b66ccb41beeceb6cdaefc16c404d2c03"
  },
  {
    "url": "tag/github/index.html",
    "revision": "38e63ea48421665cb125fea9110741c7"
  },
  {
    "url": "tag/index.html",
    "revision": "4ac68d0bece7a9a458a03f5a9fd52cf1"
  },
  {
    "url": "tag/String/index.html",
    "revision": "75033d88c02f887b1126244d0ded5b37"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "7c3a3211c05a808f9162e1def9849aa1"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "7f2be31851efceb5d918021d4b6cc90f"
  },
  {
    "url": "tag/多数投票问题/index.html",
    "revision": "36ef4e4749e07db0cc39e6ce0fbd0585"
  },
  {
    "url": "tag/字符串加法减法/index.html",
    "revision": "05304e865f511ef5e84c87756cc647ad"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "0da466f7bc387dc2c437574d295e3329"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "918f3e3d60cf4bcee0b359fa642396b6"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "9bb63991239301248594e39a5c787689"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "b33f7e2cdc0d6cf320a8f47c74ca9ecc"
  },
  {
    "url": "tag/数学/page/2/index.html",
    "revision": "f41e8d89cdc2db9b249fd4b648c51ee1"
  },
  {
    "url": "tag/相遇问题/index.html",
    "revision": "badd2a0c2b92363ec6c470a0eb27af5f"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "10c1b9baef16b8d8d8ef599d8cb5daeb"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "2b292ffbbe0f67ee6a37af55a298e256"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "1305d9cc3b0ced6adcb83d849746bf33"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "2afe2297649bcc28b3f78cbb82a4f92d"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "d8439f67d215eebfc3ee141b61cee0c3"
  },
  {
    "url": "tag/读论文的方法/index.html",
    "revision": "cbca0df626ca3cae1227150b978da111"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "ee2849a7cb9053e4ee4131133826ebbf"
  },
  {
    "url": "tag/链表/index.html",
    "revision": "bc9949e41f73204b765008873f31cdc7"
  },
  {
    "url": "tag/阶乘/index.html",
    "revision": "4aec8af8d2a60d383d37d4fc5c2b6bd6"
  },
  {
    "url": "timeline/index.html",
    "revision": "74557dc83bcbbe3cf302473ecc55628a"
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
