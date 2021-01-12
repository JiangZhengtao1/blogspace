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
    "revision": "34f7126531b9b94fa916f9fe8ebcbbaf"
  },
  {
    "url": "about/index.html",
    "revision": "f2d235417e722fa7e1aa36bc0fd0da97"
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
    "url": "assets/js/46.18fe8167.js",
    "revision": "0be331a17bee453ba569f26abe2329b3"
  },
  {
    "url": "assets/js/47.d202eeab.js",
    "revision": "6e3f63d6cc1276d542b54ea5b101f15d"
  },
  {
    "url": "assets/js/48.99cae3f7.js",
    "revision": "086f7659027425d2c3d72d6e874764cf"
  },
  {
    "url": "assets/js/49.2f8a6d62.js",
    "revision": "014deb0e4c317074e336bc9381b8fc92"
  },
  {
    "url": "assets/js/5.b22a7363.js",
    "revision": "754618d1e853c1fd328ba023e9f9a5fd"
  },
  {
    "url": "assets/js/50.77f207c3.js",
    "revision": "c57ffccf0a5ef45a05173a40a7ddd6ec"
  },
  {
    "url": "assets/js/51.11ddc75d.js",
    "revision": "ff5c4b5755632cf79433cf391bbee11d"
  },
  {
    "url": "assets/js/52.df460782.js",
    "revision": "d6fadc429fd3f27968fd88864d937f3c"
  },
  {
    "url": "assets/js/53.0895b820.js",
    "revision": "0e41dc1fa4d1cb6a23be20cf55d247cb"
  },
  {
    "url": "assets/js/54.25cd8496.js",
    "revision": "8c2cbec467ab72d00fc1494aa5115bbd"
  },
  {
    "url": "assets/js/55.93fc0624.js",
    "revision": "0101a79cbab1de9e60a6b36f365c4482"
  },
  {
    "url": "assets/js/56.d089be58.js",
    "revision": "82c74475779562b745b8e0230875d10c"
  },
  {
    "url": "assets/js/57.7aa756bc.js",
    "revision": "506c38469c6886d88924c08d104ece7e"
  },
  {
    "url": "assets/js/58.5291fa29.js",
    "revision": "3330cc5c6a08d5756f932ef1a002abd5"
  },
  {
    "url": "assets/js/59.b6bf7caa.js",
    "revision": "ba74d41d0d4815a275fd454dab7b26e2"
  },
  {
    "url": "assets/js/6.3e5a976c.js",
    "revision": "f60b455e06f7ad4c3df8b4b3969c724a"
  },
  {
    "url": "assets/js/60.4ffa06eb.js",
    "revision": "b05c3de9fde6e224b6c6855f7854ff04"
  },
  {
    "url": "assets/js/61.59e0b092.js",
    "revision": "6a936b3ea7ec91deb52a209fbd161ec6"
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
    "url": "assets/js/9.7501f70b.js",
    "revision": "54b23bb8a66f10665dc38808fd493187"
  },
  {
    "url": "assets/js/app.d1018c97.js",
    "revision": "76440c7b20afc666fc7c767a5ac2f781"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "53640ceade1323e9f37248cc14614dc9"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "e8aab503078375b54823f09a8a63c63f"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "fc76d46eb8474a0eb77b6c8b9eb64526"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "fd86d3a8ef9125d668993cc0c2b76471"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "a77f88a893a6abc214405539bdc9de03"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "f6576dc541fa0ef98121484807e5b198"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "ab0cdc5a1dd5714a01df5ada3daad228"
  },
  {
    "url": "blogs/index.html",
    "revision": "b85c708a9461b26a26606f944930d810"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "30fe9c9fef68455e0e3ca3529ffc8388"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "5b3e5333a4cd3ad59e5c2bd4fa14fa26"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "4017ee660df08271c55e10948e9fd3d7"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "ea365e8be538752671b8987732509088"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "b1e51794f6853adbd042a9907a9f89cc"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "123a3977ccba76d25692c85a708beb39"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "ed7b24873d21b1a5f2be1afbcffbbaed"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "cdbfb8916863d8ba411a6c81355332c8"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "c95da2a010bc00e5c640fb29365c91bc"
  },
  {
    "url": "blogs/LeetCode/2020-11/168.html",
    "revision": "311ca54d494a8326d70e769021ac27b4"
  },
  {
    "url": "blogs/LeetCode/2020-11/172.html",
    "revision": "fda9b6d5dea4b2d0a59bbf726218a9b6"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "bae008bf3e7e1ad3f298b7772e4aa12b"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "222bac3f435a8776cc03859dc7c98c1e"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "0379758db5ed211a036cee49e1bc2d51"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "58c8d3e78a9e0b76083f72a84908380b"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "65dd1ee9bc93554ada09ce01ca49014e"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "86ee2822be21c3554388aed04d0c354f"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "487ad4208a5521190f938b66568b058b"
  },
  {
    "url": "blogs/LeetCode/2020-11/67.html",
    "revision": "f6bd712e341586250df192c22c888de1"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "56a63986e001fc467b6c321e07a14311"
  },
  {
    "url": "blogs/LeetCode/2020-12/169.html",
    "revision": "61ace66d62a28cfae80b78d09bef056f"
  },
  {
    "url": "blogs/LeetCode/2020-12/326.html",
    "revision": "df9cbf50f44a62527ec045bbbee39a95"
  },
  {
    "url": "blogs/LeetCode/2020-12/415.html",
    "revision": "32b08417727ab56b349bed00d06e867f"
  },
  {
    "url": "blogs/LeetCode/2020-12/462.html",
    "revision": "fed29a97cd36375add3b70d7d16efc5d"
  },
  {
    "url": "blogs/LeetCode/2021-01/160.html",
    "revision": "eb69cce13b1f50ea973640526a8174b0"
  },
  {
    "url": "blogs/LeetCode/2021-01/19.html",
    "revision": "9a1fc0bddabcc0e2b19e510ef941e637"
  },
  {
    "url": "blogs/LeetCode/2021-01/206.html",
    "revision": "026c790c747c64da3f43b3fe49a0467f"
  },
  {
    "url": "blogs/LeetCode/2021-01/21.html",
    "revision": "918c4a795d5444a104fd58c2811e7ed7"
  },
  {
    "url": "blogs/LeetCode/2021-01/234.html",
    "revision": "bc28699e9e0f3c15a37dbd279c715cf4"
  },
  {
    "url": "blogs/LeetCode/2021-01/238.html",
    "revision": "5e51a94f1dab6ed90ce02ea404ee49b9"
  },
  {
    "url": "blogs/LeetCode/2021-01/24.html",
    "revision": "cd9bb2ff4e212396c247349095f5afd9"
  },
  {
    "url": "blogs/LeetCode/2021-01/445.html",
    "revision": "183d9a4087937073dfef4e2f7bd5065b"
  },
  {
    "url": "blogs/LeetCode/2021-01/628.html",
    "revision": "56ff1af94f103a6ac56ea54e210a4f7c"
  },
  {
    "url": "blogs/LeetCode/2021-01/725.html",
    "revision": "6c381a440c405238c545df695a12e7d6"
  },
  {
    "url": "blogs/LeetCode/2021-01/83.html",
    "revision": "2935cfa882f7a704c9fc798f49029af1"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "767163eb570f2f63905f2972ce229467"
  },
  {
    "url": "blogs/Research/Methods01.html",
    "revision": "86ea25701b0f7e2100aec4308d945cee"
  },
  {
    "url": "blogs/Research/Methods02.html",
    "revision": "a5508412ae92561b97f1973d84fd5a8e"
  },
  {
    "url": "blogs/Research/Methods03.html",
    "revision": "f98063532b7dd83cb74097a63881a572"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "44ae3fe8e364b77dc39d66208b276f06"
  },
  {
    "url": "categories/index.html",
    "revision": "4300487204e37f95671f434f88e8d70e"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "2108b53e90798adf1ff1227884eabde2"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "3cffc9456a3c99f369cd27b7e38c874e"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "6a3895bf00771f367eb4c6cf9ff4114e"
  },
  {
    "url": "categories/LeetCode/page/3/index.html",
    "revision": "d3196bd795897f51c53b1a195f861b43"
  },
  {
    "url": "categories/LeetCode/page/4/index.html",
    "revision": "91645c97b3ff1c9297e27057b77fb06b"
  },
  {
    "url": "categories/科研/index.html",
    "revision": "874e0994199d32e111bfcd538eac5a53"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "b509bed0ba04f738638e49e3424bd09d"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "1006cdba9ced1b5995bbd10619413793"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "590623748845441190c9552344ec6aec"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "ce77cc4d31434cfeadd0d932ed7058e8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e3737663b3cef92db1f5437337fb664b"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "effe530d99b3b63e831c070f063e0c3a"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "459aafe45efc281c5b97831cf1c5e543"
  },
  {
    "url": "tag/github/index.html",
    "revision": "cfdd2717337ead1672b423d6bae5133a"
  },
  {
    "url": "tag/index.html",
    "revision": "298ee1e9ec1f1176ab5c89de570161aa"
  },
  {
    "url": "tag/String/index.html",
    "revision": "8aecbad9b353006f964ce266bd18aa62"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "f498e990c47dadbdcafd90ae8402482c"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "b0a88516eb52acb3a21c251f0681af89"
  },
  {
    "url": "tag/多数投票问题/index.html",
    "revision": "d6bb036db703049c2d4c243239e9fe76"
  },
  {
    "url": "tag/字符串加法减法/index.html",
    "revision": "3d324e9d9f635a463f76c83b57af5128"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "2dd3beb3609784bba057434c21a95e0a"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "d16210ed3eaf100be05850a4020ae8b9"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "21a5ffbc7c2b21bb012852cac950f457"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "124f10570a8123686b7db80a8e0d16f4"
  },
  {
    "url": "tag/数学/page/2/index.html",
    "revision": "cc0989e6535c97c5186a70af16210c14"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "53648ec831a5908a6d0e8a9f964eb77e"
  },
  {
    "url": "tag/相遇问题/index.html",
    "revision": "688454cf8ffdbcc6d15220e770c29a2c"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "e483e6f2137abe6ee52ed5813f5e40ff"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "6d0e7544159f0a28ee3f950530013681"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "da280685941c017274e51f6c69716731"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "bc7b621c2a4e116d24c4ff188f4e1589"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "0c019f8d52dfdef4352ffd1d3a1a529c"
  },
  {
    "url": "tag/读论文的方法/index.html",
    "revision": "5c7d224693c540603293de9f1cb9a08f"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "b75a94683683d5cdacf8ce01e57a7160"
  },
  {
    "url": "tag/链表/index.html",
    "revision": "0fdc7d480795295c26dd1bbe10918c93"
  },
  {
    "url": "tag/阶乘/index.html",
    "revision": "df38834fe7fc7213a6006feba694da69"
  },
  {
    "url": "timeline/index.html",
    "revision": "13f99cf1187bdfd212b5aae453e682c0"
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
