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
    "revision": "fdf9be75d5e8d7da6f90c16f44475bf7"
  },
  {
    "url": "about/index.html",
    "revision": "30ad870bbe1efb252c50798c8f04da61"
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
    "url": "assets/js/45.2520d744.js",
    "revision": "e3d41a52adcf939ff370e7e4c5b491b8"
  },
  {
    "url": "assets/js/46.6d1af43a.js",
    "revision": "1024752e5dd30a2d1621fd3649620143"
  },
  {
    "url": "assets/js/47.796a7545.js",
    "revision": "773313cd6cfcd1b6f80d7ba06eb17a8c"
  },
  {
    "url": "assets/js/48.af5559f8.js",
    "revision": "839ee8dde672c6df3b6ebc80bbf454ff"
  },
  {
    "url": "assets/js/49.a915afae.js",
    "revision": "3c27551f0ab396c75bbab777cc7f793b"
  },
  {
    "url": "assets/js/5.b22a7363.js",
    "revision": "754618d1e853c1fd328ba023e9f9a5fd"
  },
  {
    "url": "assets/js/50.bcb03cab.js",
    "revision": "251800b38acde9ce39d267b66b09d116"
  },
  {
    "url": "assets/js/51.fe5311c5.js",
    "revision": "e45cc4257f571c3269e51f5166920ae2"
  },
  {
    "url": "assets/js/52.b8f4c8d5.js",
    "revision": "162771cc4c61e12df03ed7afc904ed1d"
  },
  {
    "url": "assets/js/53.2abfa1b4.js",
    "revision": "3badd329c34b77255c8ae0e1ee63136c"
  },
  {
    "url": "assets/js/54.87a438b6.js",
    "revision": "29f4decfe7e310b4ef881f6c0584230e"
  },
  {
    "url": "assets/js/55.300fcc91.js",
    "revision": "72a699ba655f4b59cee1eb7d69ff51e6"
  },
  {
    "url": "assets/js/56.621aa0f3.js",
    "revision": "54e07a88d29c5c5eef682848653aa4a3"
  },
  {
    "url": "assets/js/57.d5a72c8d.js",
    "revision": "d0b27d31bc08204899ba27d47a7f2e9d"
  },
  {
    "url": "assets/js/58.b30d51b6.js",
    "revision": "2984308bc5663ed4214ed835b4459554"
  },
  {
    "url": "assets/js/59.ba889b82.js",
    "revision": "0e70b32c4056e3f639354fd9d2f4bbfb"
  },
  {
    "url": "assets/js/6.3e5a976c.js",
    "revision": "f60b455e06f7ad4c3df8b4b3969c724a"
  },
  {
    "url": "assets/js/60.dfcb4f78.js",
    "revision": "4a546b7de0afcce0f7645cb557b28897"
  },
  {
    "url": "assets/js/61.064ee8ca.js",
    "revision": "a9a42102028bc3c1fd3a15516aae7f71"
  },
  {
    "url": "assets/js/62.48ddc9cc.js",
    "revision": "6b29ac58fedee05db49782fd5e53bd10"
  },
  {
    "url": "assets/js/63.b21ef86f.js",
    "revision": "89c49d896bc3b141035d091766ddc844"
  },
  {
    "url": "assets/js/64.ba01db28.js",
    "revision": "49349f947d4a00c0a25d9945a88f74ac"
  },
  {
    "url": "assets/js/65.d2570b99.js",
    "revision": "e39bd5d1466ce85907b07c2a2b61a2b8"
  },
  {
    "url": "assets/js/66.78aa6f11.js",
    "revision": "a7756831eaec871261778e9154d8be9a"
  },
  {
    "url": "assets/js/67.c10da464.js",
    "revision": "ba3ae76df8db582af92702e7fc0d62a7"
  },
  {
    "url": "assets/js/68.28849743.js",
    "revision": "4064c534d4b8ff9d41e64bac4f8ea76b"
  },
  {
    "url": "assets/js/69.a6f8cd51.js",
    "revision": "3397da9323c3624f174afaf2cb1da311"
  },
  {
    "url": "assets/js/7.e0f25345.js",
    "revision": "a19b7c1ee50f083a98209270069afdf0"
  },
  {
    "url": "assets/js/70.3cc58b49.js",
    "revision": "e7b88d018c54bbc6b7281b1725919ece"
  },
  {
    "url": "assets/js/71.5115e7c3.js",
    "revision": "d622ca4e6a2394ca21e3150a82bc7c99"
  },
  {
    "url": "assets/js/8.481ace49.js",
    "revision": "58cfcbe846cb6dce17efb01f58bdca0c"
  },
  {
    "url": "assets/js/9.ff25808c.js",
    "revision": "a8d94e38b150f7d3ea3fa7ffcfb9f265"
  },
  {
    "url": "assets/js/app.cf619d82.js",
    "revision": "d27fa2672acc38928964fa09bf7d0220"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "b0323d789b9dabc3a9a7196221b691e5"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "b8c326a7f7a06de47b7ef17ba3a11df8"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "3472a57eda8128359ce83ee2d5fb15b6"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "9584f3a77efdb0c106e87f180f5250bd"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "ef6e783a909448d228e71fe94ac2728d"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "fc7ee1b6e2f177e4d0841e3dd335ce3d"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "15b864a3a140caedfd8238e15ea68ac6"
  },
  {
    "url": "blogs/index.html",
    "revision": "8d9888ee8a2c0c873636d3bf22fc2406"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "d6ac93f07e7af13c2856376dce88c6ed"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "d7ca95f1918b6bf3143823332c54b1a6"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "8fefe72f9c59c878d4892cf11b65425d"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "e598dfd8a9c07f722a7e0a910c05fac2"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "799c98f24476b94d7d5ba83c8e45e308"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "0791efff7e335de9fc17c00ff4589e32"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "af7cfbd00059b2786001b8ea464903b5"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "0a86083533c3bd4d8539931f25d948f8"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "13796a9eb5d991c595f9d11dedee1495"
  },
  {
    "url": "blogs/LeetCode/2020-11/168.html",
    "revision": "7d54b58722d350e023f0a2e733fe0d44"
  },
  {
    "url": "blogs/LeetCode/2020-11/172.html",
    "revision": "15c9f2d76d536b40a782163bf016a4bb"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "54790f1950cecd48b8d3c31c3a30bc87"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "776df11578c66acb0f1809d52f571d80"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "63724cdb3cad214fd5673073698eb017"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "73dcaac3f555da41dcfb7c1370e55c67"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "608fb15b2e8fa3f147b64b28c3cd7815"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "5e71d93e175b82b4f96ff2103e86e04b"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "7e4f3f815501498a7bb2a1507f46d092"
  },
  {
    "url": "blogs/LeetCode/2020-11/67.html",
    "revision": "da484de7d6cb527ec8b122d60eb691d7"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "f346d2fb567c0e9e07c498c09636ee29"
  },
  {
    "url": "blogs/LeetCode/2020-12/169.html",
    "revision": "5afa773a03a3e16f1e9a5e97a3a67135"
  },
  {
    "url": "blogs/LeetCode/2020-12/326.html",
    "revision": "e70e7752d8825bd434b844a3878bcb80"
  },
  {
    "url": "blogs/LeetCode/2020-12/415.html",
    "revision": "3c66d00ec76603f86e64da7de0fee8b6"
  },
  {
    "url": "blogs/LeetCode/2020-12/462.html",
    "revision": "f64694fc2831aa22819437b3a98f5332"
  },
  {
    "url": "blogs/LeetCode/2021-01/104.html",
    "revision": "d0939ae62ed4f4b3639e8eca2897ce78"
  },
  {
    "url": "blogs/LeetCode/2021-01/110.html",
    "revision": "fe86cd3766518bf29e23f0a96fcbac42"
  },
  {
    "url": "blogs/LeetCode/2021-01/112.html",
    "revision": "85689956b3cdaeb7a5183ed1d6f0e132"
  },
  {
    "url": "blogs/LeetCode/2021-01/160.html",
    "revision": "dbc5fa569fa6ab783ff07eb4c9e66153"
  },
  {
    "url": "blogs/LeetCode/2021-01/19.html",
    "revision": "e50127c17d12d47e7aec79a691035414"
  },
  {
    "url": "blogs/LeetCode/2021-01/206.html",
    "revision": "3288ad47613a276bd22a1a92d3206d92"
  },
  {
    "url": "blogs/LeetCode/2021-01/21.html",
    "revision": "76a00d790b6bb28a9149ef2f6d870a71"
  },
  {
    "url": "blogs/LeetCode/2021-01/226.html",
    "revision": "1a1b344ff2dae071f1c20c83314d7e58"
  },
  {
    "url": "blogs/LeetCode/2021-01/234.html",
    "revision": "bc0c9aaa475c72fa4b9e00759dd69460"
  },
  {
    "url": "blogs/LeetCode/2021-01/238.html",
    "revision": "a5f81de80ca5c3fd68054cee375965e9"
  },
  {
    "url": "blogs/LeetCode/2021-01/24.html",
    "revision": "9dccd2fd36206804a827ad0b2f5bbfd3"
  },
  {
    "url": "blogs/LeetCode/2021-01/328.html",
    "revision": "1ed2f01e2282e3338be686675b65bc2a"
  },
  {
    "url": "blogs/LeetCode/2021-01/437.html",
    "revision": "fc0ca229ae9027600b906c32baa3d168"
  },
  {
    "url": "blogs/LeetCode/2021-01/445.html",
    "revision": "37d2dd9c673542b9bae9046c948b4499"
  },
  {
    "url": "blogs/LeetCode/2021-01/543.html",
    "revision": "a7ba9d28341a7a53f6a530f695279801"
  },
  {
    "url": "blogs/LeetCode/2021-01/617.html",
    "revision": "7034a8a293793cf46cfd8cf9fc372d95"
  },
  {
    "url": "blogs/LeetCode/2021-01/628.html",
    "revision": "750f17fe34fb69a2116f553bcf56f52c"
  },
  {
    "url": "blogs/LeetCode/2021-01/725.html",
    "revision": "86a3bcb033adca7accfa9274c226f1f9"
  },
  {
    "url": "blogs/LeetCode/2021-01/83.html",
    "revision": "3c59b21d2426e5d58792b6cd8f586ea4"
  },
  {
    "url": "blogs/LeetCode/index.html",
    "revision": "8072c4db73b7169617da7a40e5a845c1"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "1437ae89bfe97f4d52239f953c6056b2"
  },
  {
    "url": "blogs/Research/Methods01.html",
    "revision": "ba4ab174a3553d34b28554ac000f44bc"
  },
  {
    "url": "blogs/Research/Methods02.html",
    "revision": "adf1310d1652d384b7767ad6a8398c62"
  },
  {
    "url": "blogs/Research/Methods03.html",
    "revision": "34d23d84a1ed08712a837731d20ab2fa"
  },
  {
    "url": "blogs/Research/report_timing.html",
    "revision": "feffbac72dc82b7b7964584c2922d428"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "99e3d9ecf6bdff1fb13d9a41cd0f0a9b"
  },
  {
    "url": "categories/index.html",
    "revision": "098e9536343edbf7f662f22cba0f791a"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "c2a633b5b82b5f0cc866e0b766271e96"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "e0006ed0d69511efb08ca3252a966341"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "c204524ead9530f2f6ba5bc4f3ff2342"
  },
  {
    "url": "categories/LeetCode/page/3/index.html",
    "revision": "d08c246e71385bccbc413fcbc0d85938"
  },
  {
    "url": "categories/LeetCode/page/4/index.html",
    "revision": "5b6caea2bb149344985c89fb8e2813fd"
  },
  {
    "url": "categories/LeetCode/page/5/index.html",
    "revision": "219b07a72ee43e23ec97012c54b9cee1"
  },
  {
    "url": "categories/科研/index.html",
    "revision": "36c372aa73464ca8d797e6df43b67e67"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "544646c410b29824fbc0f4a26e3dd1ea"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "472d61c9a9c91e86bf79155abce124f7"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "25753c4fafef834cabfecf558b1cf7c0"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "69cbfd83e21f00b18bb4a2cb2bef283d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "5e61476b592dcfbb332f4e9ff116bb2d"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "035738c30ed3624a65c53b00788715a3"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "e75d2e0634e5af619ab3e2a142530e71"
  },
  {
    "url": "tag/github/index.html",
    "revision": "0a318ee881e13bf9edae6abd1fea3b6d"
  },
  {
    "url": "tag/index.html",
    "revision": "4774360b943e51f0ca9e0b03199757e8"
  },
  {
    "url": "tag/PrimeTime/index.html",
    "revision": "bfe48ace7c188cdd380d5f573739944c"
  },
  {
    "url": "tag/String/index.html",
    "revision": "212bb413f681e961766404fb50c450fd"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "8a41f1a7ca9aad4414025f274e002adc"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "ba12148b80ab3e9998da328462ea4ad5"
  },
  {
    "url": "tag/多数投票问题/index.html",
    "revision": "eb6d9af9e97a095c21d29f8097693196"
  },
  {
    "url": "tag/字符串加法减法/index.html",
    "revision": "84009c7ef6c30db738601f1855d08c65"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "d638ac4e3720f070bad1a2fc157cb1a9"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "182b51160897d4d0332df25dbe2857a8"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "295ab632247d3fbb5cf1c1b79d2cc5f3"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "9d73986146e0ce02c9b0fa1311e696a7"
  },
  {
    "url": "tag/数学/page/2/index.html",
    "revision": "ed2de3306cc9795673c57576ae8dc82d"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "17bb5ac8bdfb5092afbfb1f5500af60d"
  },
  {
    "url": "tag/数据结构/page/2/index.html",
    "revision": "1e07eaf6619765cb6054e6426d828995"
  },
  {
    "url": "tag/树/index.html",
    "revision": "36a542f5c23ff365fdf22da3824cb222"
  },
  {
    "url": "tag/相遇问题/index.html",
    "revision": "c4a712bb33493b00d0f41bd04b12a6c0"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "2f9cd15cf8cfccd58b20488d40c96a88"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "d71e1ffc4dfc08f1fc9980f074f557a2"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "a827c75bcb079d071344f1f04bf18c82"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "44db8478a4006f0d9ca1fdeaa6caf677"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "8b168dab67ced54d8d7588be8c6e78c2"
  },
  {
    "url": "tag/读论文的方法/index.html",
    "revision": "a46c94b08402c2db57969a08d471bf70"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "ce2dc9174a5476ba07645fb99fd732f5"
  },
  {
    "url": "tag/递归/index.html",
    "revision": "40af5bdccf4512e64be68f2e42bfc732"
  },
  {
    "url": "tag/链表/index.html",
    "revision": "6e720e9028f49d38e19c0befdedc4d61"
  },
  {
    "url": "tag/阶乘/index.html",
    "revision": "b57f1099f66bbccabacd8058a8ee0a6f"
  },
  {
    "url": "tag/静态时序分析/index.html",
    "revision": "1e72acebd3a761222dcb17d49661ca19"
  },
  {
    "url": "timeline/index.html",
    "revision": "0c7e8a195217677307a2f2790f25451a"
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
