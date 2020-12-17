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
    "revision": "6c45da36600803b06fb089cf332b8cf9"
  },
  {
    "url": "about/index.html",
    "revision": "f3ecbf09f9ff0b65dfe6236d5980a5e2"
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
    "url": "assets/js/app.95c1ca5d.js",
    "revision": "941991866296595e422caeb39e664742"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "d942108cde3e46d390c8db16ba54855b"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "d4c8600ea41f5389e1a02a363a222a83"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "7895b8de03cbf1558d3d88340e2d275f"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "95988b9fe9feb7c05a2c7d5dd6290b59"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "32f23aeadffd73eac25e4a6cbd2c8db3"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "5537620e3bc42e8bced7b3a87d77312f"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "27d823ff6497862a808798f0fabeb92d"
  },
  {
    "url": "blogs/index.html",
    "revision": "86b675c0087cdee0dfc2ff5566005257"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "f36dbfd01aa030a12c849bce171ffe25"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "950ccb5cb8b9e63e9fb720a39153393c"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "e319b9ee22c1ddb803ca2c4a5c0525ca"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "1aab332a906eb70773bc37ae6c57f24d"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "3b274fda0ab9069582a4180ffa000ae9"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "7354175f0000a69ddde97655936bcd27"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "fd0239fea36fb6c7188b155b5e801e31"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "c239317c0dcf6f518471ad1f2d5fc339"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "d9ca51c4d241eded7455ecd0a560bccd"
  },
  {
    "url": "blogs/LeetCode/2020-11/168.html",
    "revision": "15e4c19a13be18fd374dc7d47970cc43"
  },
  {
    "url": "blogs/LeetCode/2020-11/172.html",
    "revision": "882a2aa0a24a0e12ce6d9573c61579c8"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "6cbb3e53f97df31aba503630fa1e9246"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "f3eddfbbbc8994d84d2b5850cbccafe2"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "4344acd708061c497ceadb16f5cb2e18"
  },
  {
    "url": "blogs/LeetCode/2020-11/415.html",
    "revision": "2901824d24db2d11709f439c476119e2"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "549d1c630089773fc63b691cee84843c"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "27fc3d361139458d5f0d97e3823a8561"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "032f210201cd48efbae42b027ae04d39"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "f7c56f7de3258db0878b359a5d5516a9"
  },
  {
    "url": "blogs/LeetCode/2020-11/67.html",
    "revision": "b01049617e55ddc6c488f76d77e484da"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "7af5e3d501aad605891998088f7f7c2e"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "645449e1c2d0e8f895137eeb3aca105b"
  },
  {
    "url": "blogs/Research/Methods01.html",
    "revision": "f93b866b47564d2f58ed2417ea3bafb0"
  },
  {
    "url": "blogs/Research/Methods02.html",
    "revision": "59e915acb6587e878be4b5e0350962dc"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "b155faafbaf94365ccca7785a1f9b2d8"
  },
  {
    "url": "categories/index.html",
    "revision": "d78e557b3e45b8aba1321a131d704c98"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "2aad57c996fb6dba7f248b67880f20aa"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "8d2ffc98a9074cb67e201bb1cced14e2"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "3a75bc98fc2483823899d1975aaab1cf"
  },
  {
    "url": "categories/科研/index.html",
    "revision": "9443e1ad1e82a896f0bd081e88c46501"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "d8e20557dbe206478e760ff9be5b23b7"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "b9c38053bc6dc5199dcd6afb12dedff5"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "174129e317b0e7f5b240f042e0bb3cd1"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "d4dd119af40eec85339b294763195713"
  },
  {
    "url": "tag/git/index.html",
    "revision": "57642970dec91925f671c7a5326dfb3f"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "1096da9aef0103ccc23b464a083d0a4f"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "ec989bbad088dd62a6edf6f121cef742"
  },
  {
    "url": "tag/github/index.html",
    "revision": "c8e4cf75c425db065e74f3a08794bf31"
  },
  {
    "url": "tag/index.html",
    "revision": "4bcf513a4c7da6f6e022b47c634b5972"
  },
  {
    "url": "tag/String/index.html",
    "revision": "0584484c9b8de8db9918fd3e3aae1a29"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "9dea9be94935fe72f1ebc7926cb43ec3"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "4dcd60fd770c6c3f5f0a42401448f491"
  },
  {
    "url": "tag/字符串加法减法/index.html",
    "revision": "119395bd891f9d6ee83fde7a99c7ef78"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "f526b9e6b4ba8439c86122814ec754cb"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "4927e9009d2ff0f35bc90fb0299c75f9"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "4dd24220ff78a17a1c5d4f72151fe774"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "21dd797266311ff1cc8cd9fccccae4e9"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "4e47f2b44e4b039b3265c53177fd6c48"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "ad0ead1ebc75b962d8225ad412dda225"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "5d8adc81018477d2b3a77e9582b1bc95"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "325a7c2e411220bd0a87665360bd729a"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "83e7bfa59862a28eabae1eadcd991317"
  },
  {
    "url": "tag/读论文的方法/index.html",
    "revision": "24504ec543ba92e93c36c9081cdeecf5"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "909606d00cad3a3a46f1381a4986925c"
  },
  {
    "url": "tag/阶乘/index.html",
    "revision": "7f57c082ba501aa418a8d1439dee05f6"
  },
  {
    "url": "timeline/index.html",
    "revision": "c8c1120be742f704d71738b2a8ccfa69"
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
