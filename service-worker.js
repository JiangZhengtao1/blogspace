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
    "revision": "1a9eb056d27be358e80ef3f825042083"
  },
  {
    "url": "about/index.html",
    "revision": "3a86b2f99415096402b438a5866edf13"
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
    "url": "assets/js/57.1fea7324.js",
    "revision": "ea7cdf8453741ae48f4ddde45777379d"
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
    "url": "assets/js/64.73d3dd76.js",
    "revision": "da0810e598e60831d0c227ec2301d45e"
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
    "url": "assets/js/app.ad4b5626.js",
    "revision": "565232ee6fe884949ae26d86bb05291a"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "5dee0f39541ad70bfcbde12fc7f50019"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "cffbffc640aed73d3f9a364fbbf12020"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "6225d1ab74cf183a9c05d3dc20f02400"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "43f12376d796f1380651373bd4016369"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "6e631bd89ca739c7d105cf904f30dc96"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "853401163e6295bbdb0415bdaf14ca94"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "a412f7fd8b5e7facd2e60ce3243b3906"
  },
  {
    "url": "blogs/index.html",
    "revision": "1e1a211c9a517b376eeb7cd180f8df39"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "646c84fc1f7dc2212926fc735233d4ee"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "399d3e49cbc3d71410c4e213df5dadf7"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "885b6fb8e3ed534608d70501a23ac11d"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "fd1d13c7f021312239dc0e9af8c62472"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "bb9cae96c88eb76d1b9da1db0d1d4944"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "b1f3a9ce35dc1d6845c0310317e2c607"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "d1bbf0af88436d71aef8bcf9f63a6e52"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "61c8cc27e3394ad27dabf444309578fa"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "b2fa4526b50df31c3bc8b5fb3827b996"
  },
  {
    "url": "blogs/LeetCode/2020-11/168.html",
    "revision": "d876b049de92389a75f0190a7cc531ce"
  },
  {
    "url": "blogs/LeetCode/2020-11/172.html",
    "revision": "b4ca27decf709cff2fb8880085511ec4"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "1748c5f4a7e2e70d9e30a1f38a23f96e"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "2cf8119c03c5eba02f60fb70e1bf2e72"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "c618043c9205747f0511b954dbd95691"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "e5dbd620cf1a06be6b7e3fb212ef7003"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "14d6a5e0734ecf710cbb2dc5ad277160"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "033d63a318d0e52b051054d32b109f52"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "ca9cf38608998650c95f38c72a42ef78"
  },
  {
    "url": "blogs/LeetCode/2020-11/67.html",
    "revision": "73d91995058cf26cccbfa56f839dec03"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "461e60c01284831a2deabec46e49e3df"
  },
  {
    "url": "blogs/LeetCode/2020-12/169.html",
    "revision": "94a1fb6102bfb1c0aaaed50069f56d1e"
  },
  {
    "url": "blogs/LeetCode/2020-12/326.html",
    "revision": "39b6f965c1b1ff99436d275de6a77c95"
  },
  {
    "url": "blogs/LeetCode/2020-12/415.html",
    "revision": "43fac976a84fe119f468c9e2a583aa96"
  },
  {
    "url": "blogs/LeetCode/2020-12/462.html",
    "revision": "173db8402a075bc4fa361a95e816b09d"
  },
  {
    "url": "blogs/LeetCode/2021-01/104.html",
    "revision": "425025e6291bdeb6838612d257ded443"
  },
  {
    "url": "blogs/LeetCode/2021-01/110.html",
    "revision": "3c42ca6673be7b0434f2ddd66acc875e"
  },
  {
    "url": "blogs/LeetCode/2021-01/112.html",
    "revision": "c7fb6ef6267d9842158ae15ff2e94444"
  },
  {
    "url": "blogs/LeetCode/2021-01/160.html",
    "revision": "6c0a099f62c1a517c3d1972894eba203"
  },
  {
    "url": "blogs/LeetCode/2021-01/19.html",
    "revision": "48dde0b3c8c4530b56689c3cae841ac2"
  },
  {
    "url": "blogs/LeetCode/2021-01/206.html",
    "revision": "f7271159fa84489d6216ac9149c9f8a3"
  },
  {
    "url": "blogs/LeetCode/2021-01/21.html",
    "revision": "afec5adc3b929e29d9f42d4c28a7c0fa"
  },
  {
    "url": "blogs/LeetCode/2021-01/226.html",
    "revision": "c2e9de70be26df461bc31ea505e73769"
  },
  {
    "url": "blogs/LeetCode/2021-01/234.html",
    "revision": "10fc45b3f6717f1c9f3122ee729b7119"
  },
  {
    "url": "blogs/LeetCode/2021-01/238.html",
    "revision": "ee56ff66951479bb7f7417b4d07616b9"
  },
  {
    "url": "blogs/LeetCode/2021-01/24.html",
    "revision": "8986786a932464de13333920ea11c7ad"
  },
  {
    "url": "blogs/LeetCode/2021-01/328.html",
    "revision": "0bd7df810d512eccb6823ba4b8a153c0"
  },
  {
    "url": "blogs/LeetCode/2021-01/437.html",
    "revision": "b98bb55d132f9555c32fdba44dd6d4c1"
  },
  {
    "url": "blogs/LeetCode/2021-01/445.html",
    "revision": "7d95ea0c0af0516efc145b4327bfb852"
  },
  {
    "url": "blogs/LeetCode/2021-01/543.html",
    "revision": "063784c6c7c3e13fb77126e8da8ceb13"
  },
  {
    "url": "blogs/LeetCode/2021-01/617.html",
    "revision": "d00960d8721076743c368ec10664ae02"
  },
  {
    "url": "blogs/LeetCode/2021-01/628.html",
    "revision": "15ca34f193f30fb8a6761602fb5d8846"
  },
  {
    "url": "blogs/LeetCode/2021-01/725.html",
    "revision": "cd367825a21cb61e6820cad4458844b9"
  },
  {
    "url": "blogs/LeetCode/2021-01/83.html",
    "revision": "8b07b526cbe1236e7125b66a14b6b82a"
  },
  {
    "url": "blogs/LeetCode/index.html",
    "revision": "db15be42b19fa99160c52aea9dc1b99e"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "4d931557cd66b0228fc6d4fbee7d5f06"
  },
  {
    "url": "blogs/Research/Methods01.html",
    "revision": "4685ea0dd4bdd3b53f3501d86498504a"
  },
  {
    "url": "blogs/Research/Methods02.html",
    "revision": "98afebb38083871fbe9a1ec029089894"
  },
  {
    "url": "blogs/Research/Methods03.html",
    "revision": "e072dafdb02e14e73bd4a75948fee395"
  },
  {
    "url": "blogs/Research/report_timing.html",
    "revision": "02cc39ebe92a5532b0ae57e241eb18f7"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "4ebce3194b54df4c92b32c2be5bfd49c"
  },
  {
    "url": "categories/index.html",
    "revision": "5d895e02549656d3b8f22d60a86fdd4f"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "c71d026b1d0d7e9c0318e8e0c6a443d1"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "775294ecd538dbd47f77ce2c5506c9bd"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "3bd8f78f9c81ba8a33909796e056de7c"
  },
  {
    "url": "categories/LeetCode/page/3/index.html",
    "revision": "6e0caf01ead12777e339d22493b06e99"
  },
  {
    "url": "categories/LeetCode/page/4/index.html",
    "revision": "8d4ebc208efad209b84df40fd5eded73"
  },
  {
    "url": "categories/LeetCode/page/5/index.html",
    "revision": "5fb346318340b5cde792783e113686d3"
  },
  {
    "url": "categories/科研/index.html",
    "revision": "5f8a19def24c61d4ade0cba8f2ededc4"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "259c5ef22819c671a77c3d96516b100c"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "14870ca6eead93e848e08c3dfaf14894"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "f6c08a90883a4992e4ae456850a8276b"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "d5fb1548056e69be70d955bd99091b01"
  },
  {
    "url": "tag/git/index.html",
    "revision": "28f6d6db82c3265de095fedbaecfbd3a"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "208743099e072bed7e18f1f8b8c62ce7"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "dd5abbf1a6281361d6b4f786b3d43b3b"
  },
  {
    "url": "tag/github/index.html",
    "revision": "99b733d839647cd28c6007203f7f9987"
  },
  {
    "url": "tag/index.html",
    "revision": "741f9ae219968a99ae77f58a45baa637"
  },
  {
    "url": "tag/PrimeTime/index.html",
    "revision": "798f72b5f83d8eb7bcc79643dc912147"
  },
  {
    "url": "tag/String/index.html",
    "revision": "816aa2da5ac0f7239263632316aea77d"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "edcc93158546eab2e3f7764cb68ece8c"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "c6d83ee3011cd26c55ec25814d44ebde"
  },
  {
    "url": "tag/多数投票问题/index.html",
    "revision": "c1772c3fabe3968ceaa8d120eacf4f9c"
  },
  {
    "url": "tag/字符串加法减法/index.html",
    "revision": "60bc0cf08bba0f9bd199c87438566bdb"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "b9d217c890bb993a334f8fa408f60495"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "cf85ed54c95c2f7cadacbed957991db5"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "7719710c824f977c6e00c8a0b9f542d2"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "754c5e2b2524a3bcf7ebe37a621a7d8a"
  },
  {
    "url": "tag/数学/page/2/index.html",
    "revision": "3a9857664e9f1849e411bb2a58d77d2d"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "4421530ffc8315d807f12376cbce2bfc"
  },
  {
    "url": "tag/数据结构/page/2/index.html",
    "revision": "3936c0593fa0874038698ec6a9fdd966"
  },
  {
    "url": "tag/树/index.html",
    "revision": "55c45f88c58815b33a0064ebde3625a6"
  },
  {
    "url": "tag/相遇问题/index.html",
    "revision": "b51fa1c42dd9f1534c7d6e41a13feb6c"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "12187342d8ddc312754b4f5a0ad9b09b"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "37ab4bcab31dbf3d4b581e610730977e"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "216ec9348c2240d299b6ec80f45aa7f2"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "afca07c3f4c032493f875bd7f3c372cf"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "9f441e0c5b157bf9860eba162b1e23a1"
  },
  {
    "url": "tag/读论文的方法/index.html",
    "revision": "6c3584c17f5c3c10dbad36665d478ec1"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "ae206b8d7a0127946fa178c12ec3a79a"
  },
  {
    "url": "tag/递归/index.html",
    "revision": "08ac20429d3a8655a26047726b8e610e"
  },
  {
    "url": "tag/链表/index.html",
    "revision": "62cfebe53e5202715f0dcda8ba1b6ed1"
  },
  {
    "url": "tag/阶乘/index.html",
    "revision": "ea4ffc6c324923527efdb2534cb24eae"
  },
  {
    "url": "tag/静态时序分析/index.html",
    "revision": "da005b71521febe197751b547fdca531"
  },
  {
    "url": "timeline/index.html",
    "revision": "fa120d7516d4fff812cf78ce7346059d"
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
