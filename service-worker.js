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
    "revision": "f469f32d752e58709df82b783a0d2bd5"
  },
  {
    "url": "about/index.html",
    "revision": "ea43017f91c097c7553d4def2594d8bd"
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
    "url": "assets/js/21.f998b285.js",
    "revision": "dda32615d06b92859a49952657a76f4e"
  },
  {
    "url": "assets/js/22.dae66d71.js",
    "revision": "0f4f2d1cb345ce7b04f2fff8a976d2bd"
  },
  {
    "url": "assets/js/23.e745f679.js",
    "revision": "106953c1dfa02824899dd98c8973faa8"
  },
  {
    "url": "assets/js/24.f7a824c3.js",
    "revision": "13727e0f385b1c96a3a186f0a25705dd"
  },
  {
    "url": "assets/js/25.3b613da9.js",
    "revision": "e3da386299115a38aa6e67bb76d2a83f"
  },
  {
    "url": "assets/js/26.f1500c53.js",
    "revision": "f9c3d614e40249c836f47b810841afc6"
  },
  {
    "url": "assets/js/27.4d992a49.js",
    "revision": "4ddfe1f89f03cf6ee7d0c671db8127d8"
  },
  {
    "url": "assets/js/28.63436dd5.js",
    "revision": "e28f4a2ffc1b4f44e750b8725d158628"
  },
  {
    "url": "assets/js/29.dc644712.js",
    "revision": "3ba1c7ad5920534f1debb2d7a62b3aaf"
  },
  {
    "url": "assets/js/3.ceb7af67.js",
    "revision": "63d04cab7972aec070b097c8c8b15db2"
  },
  {
    "url": "assets/js/30.0cf7022f.js",
    "revision": "1fae8b61e4738f6502bc4c1945080c8c"
  },
  {
    "url": "assets/js/31.69f82b3a.js",
    "revision": "93a3f9cc2a93fa5484f9a46af31cc205"
  },
  {
    "url": "assets/js/32.4b25c842.js",
    "revision": "333d517fd7181fe6ef79e95adc80eef1"
  },
  {
    "url": "assets/js/33.119d38a0.js",
    "revision": "ffaaf0dc82cd6d9ac2f07454df94cda2"
  },
  {
    "url": "assets/js/34.fa162b5a.js",
    "revision": "4306bef99370afebe285962f438a96b2"
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
    "url": "assets/js/9.e76d1dcf.js",
    "revision": "766dfa89775840ef5230be680ce16e11"
  },
  {
    "url": "assets/js/app.7c076986.js",
    "revision": "bee865a41e5347ce890b94362e971cb7"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "baa0e1257d09be9a57b746b6bde5822d"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "6a7d63e820d3bada2a6d6800a1f4e264"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "edde18de24e243caca78803804696c75"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "44c1249f0bd889a46e102d8a2b2a2822"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "50134d5f18b6c877c18d718531e0971b"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "3bfa4dae20e107ec59d5b2e460015b35"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "fe494e20a4657068772e51735a27663d"
  },
  {
    "url": "blogs/index.html",
    "revision": "f3fc7703ea8fada0893efbebf5a9cbab"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "51aeb2d6cd04d15cef1a7859e4fdae38"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "f351edb198706575f08e6534823374e4"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "15f84cf6b47fd32f26122d1d03f806df"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "e71c3ea20d3f0ec84b3376aef16ea0b1"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "0ac9d3701ec834d488a4e164f370450b"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "87d659f2a094876e0822edd1fc9c8207"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "afa92f1d5d800294e6fe6be9d75df1e6"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "5f0edbba907561521c334665623b5d9d"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "5d41fa7e855f07bf92ff5095042780ad"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "8a8add063fa7c7af8b93701d85c0c842"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "980ef3d5e2e5a190ce96fa51f6ab4dba"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "26c1b7ae841b9730b449e3b2a16e91b8"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "419704abe2c49796de1ef69ea9e89ea8"
  },
  {
    "url": "categories/index.html",
    "revision": "15fd7312a5ccf58eea34eec3ea9b6948"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "10f2e3655ab8aff75901af3151466619"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "3db919f32bcd32c599df0a4b122893d9"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "00c6f017857039f9f038f37b0a4c8905"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "64d75e8c2e4c26f26536723ed060fbe4"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "141d5e87f14f774fac7151ceb36ad5fa"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "e8826aae8b28b18b2229a9b2c8e89ac9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6cb188ba930844eb84a53434a02c9065"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "07793cc0cdae058824a701770de12328"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "d3ecb4375d79803037ca690a3257eb36"
  },
  {
    "url": "tag/github/index.html",
    "revision": "7cad1132c2031f7926923d07a1e7b8d6"
  },
  {
    "url": "tag/index.html",
    "revision": "c817308a2f321262d02138b234db9d8f"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "f79b382bd25a665156b8c4caa25ce4fb"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "53ce375799d2686d7f89b005c79a326a"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "45136dcec0883b0f881b23d79d2493a3"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "879596dbe8c891d60ee18a129fee871d"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "f63bb9fedb2e07a87ca3be86d1957cde"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "aa3709093c20929d3cbbeb335a4c379b"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "296b4b0d75dfe98ab9d9f9629910a877"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "16ac0a5d7bf36390b01443b6c639b3ef"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "dc7f1e6c214d949a13af832a11c58934"
  },
  {
    "url": "timeline/index.html",
    "revision": "3303fd9bd48b7a4d620d427508c32dc3"
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
