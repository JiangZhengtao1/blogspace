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
    "revision": "434dfe49c4400fc611545a79074ee005"
  },
  {
    "url": "about/index.html",
    "revision": "180078d9ccb06d1204955090f763d811"
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
    "url": "assets/js/13.a64e9af6.js",
    "revision": "0f339a999e0bb9b0f676cc6c6cbacf9b"
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
    "url": "assets/js/21.0912c4d2.js",
    "revision": "33b55f1cbef78c427f8b5a2ff05e261d"
  },
  {
    "url": "assets/js/22.b154a7e0.js",
    "revision": "25fd3af0a975dfeb9de2f4ae8b4ab1b3"
  },
  {
    "url": "assets/js/23.5aa5c49d.js",
    "revision": "0eeed75ef620a9ff1325e98fa23a7e32"
  },
  {
    "url": "assets/js/24.ea6a33b5.js",
    "revision": "c35e66240fbb19b8a4c60995389a93cd"
  },
  {
    "url": "assets/js/25.0c7610d2.js",
    "revision": "88399b61c959b46c884b7bf50cf17474"
  },
  {
    "url": "assets/js/26.75f84aca.js",
    "revision": "c4ccdb9a77dc18e91e65606668bd78d7"
  },
  {
    "url": "assets/js/27.f198f9d9.js",
    "revision": "630e5805535d6eef386b3e0040956ecb"
  },
  {
    "url": "assets/js/28.1d309d07.js",
    "revision": "b9a60ffd94dc83413abb9e03229cc2b9"
  },
  {
    "url": "assets/js/29.2b72968a.js",
    "revision": "68fdb11563ee0b1ee80793903d17e42a"
  },
  {
    "url": "assets/js/3.ceb7af67.js",
    "revision": "63d04cab7972aec070b097c8c8b15db2"
  },
  {
    "url": "assets/js/30.066547ab.js",
    "revision": "28427ec890f3052a2742a6349b7c7378"
  },
  {
    "url": "assets/js/31.0b950e3f.js",
    "revision": "e039ae7619ca95dcd130ff63cbdf592c"
  },
  {
    "url": "assets/js/32.a0ed3acb.js",
    "revision": "db6b7b937a01aa3e1611cfe7e95f8b79"
  },
  {
    "url": "assets/js/33.7435fff9.js",
    "revision": "eac085a589f933d7eb6227d8a1bba05a"
  },
  {
    "url": "assets/js/34.f2528ffa.js",
    "revision": "6fe184a6f628d36153155aa1944abe0f"
  },
  {
    "url": "assets/js/35.f46250b8.js",
    "revision": "ee196cddcd76d8508967550715bbd703"
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
    "url": "assets/js/42.fd760766.js",
    "revision": "de2a1d88d22a528e2b077721a31ff123"
  },
  {
    "url": "assets/js/43.d7e9fc06.js",
    "revision": "2aabc1dbe22af0433e121eba3539c167"
  },
  {
    "url": "assets/js/44.b9481c14.js",
    "revision": "ccbd67dd3fe4dcc00c485a6c030d17c6"
  },
  {
    "url": "assets/js/45.d127ce13.js",
    "revision": "62eb76aa2ac59b8d574e01bbcd61ab27"
  },
  {
    "url": "assets/js/46.fb7ec061.js",
    "revision": "f8a186566d8c444d128d239c0c235d05"
  },
  {
    "url": "assets/js/47.d69d9c18.js",
    "revision": "8914dc81d2fb4bdac8037247c0d791f7"
  },
  {
    "url": "assets/js/48.7c2819df.js",
    "revision": "955cea563786c9f6a111871dd5f9b5b6"
  },
  {
    "url": "assets/js/49.2a403118.js",
    "revision": "8a6029e271063a9d86677e191088585c"
  },
  {
    "url": "assets/js/5.b22a7363.js",
    "revision": "754618d1e853c1fd328ba023e9f9a5fd"
  },
  {
    "url": "assets/js/50.00981f34.js",
    "revision": "0af64c3863f02ca3593af4b7aaa76cb6"
  },
  {
    "url": "assets/js/51.1c676cf4.js",
    "revision": "42e65a5127c7c901ea54cbe47af841fe"
  },
  {
    "url": "assets/js/52.44f41e51.js",
    "revision": "6f6f7c396d432c2b48c2fcf61f0a51ed"
  },
  {
    "url": "assets/js/53.3c1fd246.js",
    "revision": "9154e02b798eb42e879adc413a00afdd"
  },
  {
    "url": "assets/js/54.f92698fa.js",
    "revision": "fdb1233d5ee197cec545679f7f5dee43"
  },
  {
    "url": "assets/js/55.7c6f7cb1.js",
    "revision": "a16866ead1f3f4a16e16ef5baba081ac"
  },
  {
    "url": "assets/js/56.790af609.js",
    "revision": "6084592fcc87e4af56523b2694b6c975"
  },
  {
    "url": "assets/js/57.8c57a3ac.js",
    "revision": "f21f5823c1237be6394c942c07d7b66d"
  },
  {
    "url": "assets/js/58.3859432e.js",
    "revision": "e57075749bdf644e920bed456efa59f6"
  },
  {
    "url": "assets/js/59.0468f851.js",
    "revision": "cda3fe2a0c5fe4425121c6fd7a19d695"
  },
  {
    "url": "assets/js/6.3e5a976c.js",
    "revision": "f60b455e06f7ad4c3df8b4b3969c724a"
  },
  {
    "url": "assets/js/60.7e203353.js",
    "revision": "018c75ffaccd25709409a5bab8aaccd0"
  },
  {
    "url": "assets/js/61.d8dcba8a.js",
    "revision": "dd7a79b1ad09099a7b8809e27fa7bf10"
  },
  {
    "url": "assets/js/62.ffbd2bb9.js",
    "revision": "ff61779a86bfa2b1445f1f7ec628a914"
  },
  {
    "url": "assets/js/63.8923a268.js",
    "revision": "99fb570014a37a05149e7f91a639a7a6"
  },
  {
    "url": "assets/js/64.ac216568.js",
    "revision": "8ed568365eba448ac6f4fc0bf16225c9"
  },
  {
    "url": "assets/js/65.c8c8bb64.js",
    "revision": "9af89dcbe67fe9a1011c9205b9ab72f4"
  },
  {
    "url": "assets/js/66.6e70a673.js",
    "revision": "55fb36fdb150e025084b2658475c9afe"
  },
  {
    "url": "assets/js/67.f772fec3.js",
    "revision": "276ec3883a441b2be18c4d2252b89598"
  },
  {
    "url": "assets/js/68.c8fb3eb6.js",
    "revision": "0ae4b47df6f490e0bb9a2381c3440af2"
  },
  {
    "url": "assets/js/69.62476ed7.js",
    "revision": "953e966703fbaa0735480cb0b78a8682"
  },
  {
    "url": "assets/js/7.e0f25345.js",
    "revision": "a19b7c1ee50f083a98209270069afdf0"
  },
  {
    "url": "assets/js/70.86d24b75.js",
    "revision": "335b74ad64847a1fe6b9e7d4db000fa2"
  },
  {
    "url": "assets/js/71.05d84e5a.js",
    "revision": "86cd63cab99903b3c66c70790a7d1af9"
  },
  {
    "url": "assets/js/72.c8a3ca36.js",
    "revision": "8b9b12d47c40bb0e7060bbca56e94c33"
  },
  {
    "url": "assets/js/73.2534e83d.js",
    "revision": "78f93d3b153fdb6ebd603c683b4db1cc"
  },
  {
    "url": "assets/js/74.3af19276.js",
    "revision": "fe73e729ad31000def08457c18420b44"
  },
  {
    "url": "assets/js/75.736607c4.js",
    "revision": "7e325ded992fb89e3057e275b41329a7"
  },
  {
    "url": "assets/js/76.7cd5364d.js",
    "revision": "1fc374306d5cb2f0fa325721a1f7650e"
  },
  {
    "url": "assets/js/77.038dd373.js",
    "revision": "d7ad1481216b0c48112c76b0718155ba"
  },
  {
    "url": "assets/js/78.df5d7d8b.js",
    "revision": "2ee2451854a32c186d357702c2cd1fe6"
  },
  {
    "url": "assets/js/79.2cc11495.js",
    "revision": "e5bd97c6a3513ff5f36ca74a8cab374e"
  },
  {
    "url": "assets/js/8.481ace49.js",
    "revision": "58cfcbe846cb6dce17efb01f58bdca0c"
  },
  {
    "url": "assets/js/80.48b18969.js",
    "revision": "7d00553cf048c2bc0ffe6b04d7065635"
  },
  {
    "url": "assets/js/81.c9ccb6de.js",
    "revision": "b90515d54dc6003210923c14182a8616"
  },
  {
    "url": "assets/js/82.353366f9.js",
    "revision": "46f5dd8409ff9e3e7eb426b8e6585308"
  },
  {
    "url": "assets/js/83.f43ff6a7.js",
    "revision": "71ad19f77a5228aa209bea4b72c87623"
  },
  {
    "url": "assets/js/84.4d862b4c.js",
    "revision": "10040a0c6f83849ba422e9d8c091b889"
  },
  {
    "url": "assets/js/85.9daa6b2c.js",
    "revision": "5389fd8ee446d9a80859e7e535bf47c2"
  },
  {
    "url": "assets/js/86.973ce5af.js",
    "revision": "43bbd13b62f48a5a8907b9a3086c603f"
  },
  {
    "url": "assets/js/87.b90e1765.js",
    "revision": "ad63246cafc0aef9fc7316c1f852c165"
  },
  {
    "url": "assets/js/88.540605e1.js",
    "revision": "e3d7b6cb76871df7ebdf46531ad783aa"
  },
  {
    "url": "assets/js/89.8c23fed3.js",
    "revision": "cf4491431474dbef9691542a07beb492"
  },
  {
    "url": "assets/js/9.5ed075ec.js",
    "revision": "4abe2d0cc22e037948eb112fd4e61c8a"
  },
  {
    "url": "assets/js/90.e2ae95a4.js",
    "revision": "f2d5278b5051cbebbcc91bde25872dad"
  },
  {
    "url": "assets/js/91.57c5485d.js",
    "revision": "795b63e93482962e04f79bcec2ce9a80"
  },
  {
    "url": "assets/js/app.7bf2a302.js",
    "revision": "b665b35861c06cddb3b1f40f5969c3d0"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/Algorithm/CompletePack.html",
    "revision": "f08eeddc988d94e6d8f5460b1f72a654"
  },
  {
    "url": "blogs/Algorithm/DynamicMethods.html",
    "revision": "7c8e94e22eca4a4de01f2c749d16ae66"
  },
  {
    "url": "blogs/Algorithm/knapsack01.html",
    "revision": "dab08d18316a2e5df55172334d278f0f"
  },
  {
    "url": "blogs/Algorithm/PackTaolu.html",
    "revision": "7f20d3e6ed2a992c0e9db585177f63e1"
  },
  {
    "url": "blogs/Algorithm/UnionFind.html",
    "revision": "02830c49ff7f05a4f3578153d7173930"
  },
  {
    "url": "blogs/Git/GIt.html",
    "revision": "c221cd20ae4b1022226d96287a004ed9"
  },
  {
    "url": "blogs/Git/GitBug1.html",
    "revision": "5f1bc1a4f5c8072bb3402deabcb66e7b"
  },
  {
    "url": "blogs/index.html",
    "revision": "d42e306e70f59c5367a9255f4772dea2"
  },
  {
    "url": "blogs/Java/Arrays.html",
    "revision": "5239e2a411c667ce64108ca049275cf0"
  },
  {
    "url": "blogs/Java/String.html",
    "revision": "2470cf6e07213f8677d7fd6038bfd087"
  },
  {
    "url": "blogs/LeetCode/2020-10/139.html",
    "revision": "db0e3e90e866ae87366bae648e6bed41"
  },
  {
    "url": "blogs/LeetCode/2020-10/309.html",
    "revision": "d1c6af706990cdf27f0a8ecd6eac2518"
  },
  {
    "url": "blogs/LeetCode/2020-10/322.html",
    "revision": "65df76d46f640d65a43a72bbda66f0a7"
  },
  {
    "url": "blogs/LeetCode/2020-10/377.html",
    "revision": "be2721bb77aa9737d269ac21f35fc4eb"
  },
  {
    "url": "blogs/LeetCode/2020-10/416PartitionEqualSubsetSum.html",
    "revision": "011f810671012d8db00f8b755a099346"
  },
  {
    "url": "blogs/LeetCode/2020-10/474.html",
    "revision": "073460590f4268ac22659af08e7a8f79"
  },
  {
    "url": "blogs/LeetCode/2020-10/518.html",
    "revision": "6c09d2ad281a7777ed3feec91a607ca8"
  },
  {
    "url": "blogs/LeetCode/2020-11/123.html",
    "revision": "67f874122709f96fde9e503968d9dc19"
  },
  {
    "url": "blogs/LeetCode/2020-11/168.html",
    "revision": "d281c006349c8a0bdc05c5f35047d165"
  },
  {
    "url": "blogs/LeetCode/2020-11/172.html",
    "revision": "264dc97b1301df4998fa6a9f6b69dfa8"
  },
  {
    "url": "blogs/LeetCode/2020-11/188.html",
    "revision": "23cdfd8cacfc8681e2be93e0db6ae751"
  },
  {
    "url": "blogs/LeetCode/2020-11/204.html",
    "revision": "22395021a7817fc482430aecd7a4b90b"
  },
  {
    "url": "blogs/LeetCode/2020-11/405.html",
    "revision": "b19aa18d59bf46a21112822ab997bfa9"
  },
  {
    "url": "blogs/LeetCode/2020-11/494.html",
    "revision": "1a8a225c02fa826a02afdbee799cdf74"
  },
  {
    "url": "blogs/LeetCode/2020-11/504.html",
    "revision": "bde3db1af14e69e729f3afe0f6340d58"
  },
  {
    "url": "blogs/LeetCode/2020-11/583.html",
    "revision": "abfd3e9d4ef583be49019fcfb21191fb"
  },
  {
    "url": "blogs/LeetCode/2020-11/650.html",
    "revision": "a0821f9dc7f71ca0695de4f849de26e3"
  },
  {
    "url": "blogs/LeetCode/2020-11/67.html",
    "revision": "189376184adab414776629194b5fd2f9"
  },
  {
    "url": "blogs/LeetCode/2020-11/72.html",
    "revision": "082f19f3365b994e6fd91b9bd21094f7"
  },
  {
    "url": "blogs/LeetCode/2020-12/169.html",
    "revision": "0ab42d838e0f5626d66caf5c78e97215"
  },
  {
    "url": "blogs/LeetCode/2020-12/326.html",
    "revision": "305eb9718af14a23a99ffba4e57992f2"
  },
  {
    "url": "blogs/LeetCode/2020-12/415.html",
    "revision": "51822ecd25e6fc70bcecaa3ecafab242"
  },
  {
    "url": "blogs/LeetCode/2020-12/462.html",
    "revision": "8a96f5ff3ff5bd6a6a02de9dc8ed04cd"
  },
  {
    "url": "blogs/LeetCode/2021-01/101.html",
    "revision": "d9055c5e65e5a3a56f1bfa02acf04d0f"
  },
  {
    "url": "blogs/LeetCode/2021-01/104.html",
    "revision": "345701c0ebf3aa9a821dfdb2e09ce18d"
  },
  {
    "url": "blogs/LeetCode/2021-01/110.html",
    "revision": "5cf539c3495436f63937aceef2b645f5"
  },
  {
    "url": "blogs/LeetCode/2021-01/111.html",
    "revision": "57ba4481e6639d79e0f2560ca01ce421"
  },
  {
    "url": "blogs/LeetCode/2021-01/112.html",
    "revision": "42e4be27fd966835004a8e129d242676"
  },
  {
    "url": "blogs/LeetCode/2021-01/160.html",
    "revision": "2c1a9ad0b037fc6c4506f25f4ca7a7b3"
  },
  {
    "url": "blogs/LeetCode/2021-01/19.html",
    "revision": "ed363e6b5c4e2b09358c011307d6df84"
  },
  {
    "url": "blogs/LeetCode/2021-01/206.html",
    "revision": "1318da2572d234a96f3440acd8271592"
  },
  {
    "url": "blogs/LeetCode/2021-01/21.html",
    "revision": "e58166945c30e849aa928e773fa4ce29"
  },
  {
    "url": "blogs/LeetCode/2021-01/226.html",
    "revision": "b696a53b9f78a36d23d53bee33fd7891"
  },
  {
    "url": "blogs/LeetCode/2021-01/234.html",
    "revision": "9d1162c8426865ff160ab310bb8b7544"
  },
  {
    "url": "blogs/LeetCode/2021-01/238.html",
    "revision": "d72e795e1a5139f8f5f3261f8b79ed7c"
  },
  {
    "url": "blogs/LeetCode/2021-01/24.html",
    "revision": "808778ae1612164f78770568e98e17eb"
  },
  {
    "url": "blogs/LeetCode/2021-01/328.html",
    "revision": "7f82b67d93ae4ffabfd1554133f5c49f"
  },
  {
    "url": "blogs/LeetCode/2021-01/437.html",
    "revision": "8551529b2a980d2067e81d47987981ee"
  },
  {
    "url": "blogs/LeetCode/2021-01/445.html",
    "revision": "af1ec4db6276fdc42801e45e946a75b1"
  },
  {
    "url": "blogs/LeetCode/2021-01/543.html",
    "revision": "512f48cc75c2dd30d7ba6db8093e2814"
  },
  {
    "url": "blogs/LeetCode/2021-01/572.html",
    "revision": "10ca208a05e46b7c1c0dcf6abb9cdf20"
  },
  {
    "url": "blogs/LeetCode/2021-01/617.html",
    "revision": "d5558b7e1c70ba02bf2d0fb42ebd46b1"
  },
  {
    "url": "blogs/LeetCode/2021-01/628.html",
    "revision": "52042f52fbac0af840063d0222738e20"
  },
  {
    "url": "blogs/LeetCode/2021-01/725.html",
    "revision": "f13aced615a37d6c62d8d4c303d56a94"
  },
  {
    "url": "blogs/LeetCode/2021-01/83.html",
    "revision": "1c91bd2ab588918b7c674c1c4c0875d8"
  },
  {
    "url": "blogs/LeetCode/2021-02/108.html",
    "revision": "d129f7aff552eb130887bf1e9090888c"
  },
  {
    "url": "blogs/LeetCode/2021-02/109.html",
    "revision": "c2bc556781771da8a534862f309b829a"
  },
  {
    "url": "blogs/LeetCode/2021-02/144.html",
    "revision": "5e510f20873135f4afdda9cb545c4d8f"
  },
  {
    "url": "blogs/LeetCode/2021-02/145.html",
    "revision": "6e0f7e68d672198010e03c01d999d898"
  },
  {
    "url": "blogs/LeetCode/2021-02/230.html",
    "revision": "23ed69fe00dd74859ddf45a3ef50de0a"
  },
  {
    "url": "blogs/LeetCode/2021-02/235.html",
    "revision": "9dae6796225a8ae9492ec3d5419accfd"
  },
  {
    "url": "blogs/LeetCode/2021-02/337.html",
    "revision": "d0c22257138afb210a886fe29d35b6ac"
  },
  {
    "url": "blogs/LeetCode/2021-02/404.html",
    "revision": "b5961d4c315d328c359fa92733bfc2f6"
  },
  {
    "url": "blogs/LeetCode/2021-02/513.html",
    "revision": "bde2f1043398d732b16ddf39fb8da027"
  },
  {
    "url": "blogs/LeetCode/2021-02/538.html",
    "revision": "638f8ca226b0d2c4535980931f6d36af"
  },
  {
    "url": "blogs/LeetCode/2021-02/637.html",
    "revision": "ed78d783f5e1368b03ca8d332022a932"
  },
  {
    "url": "blogs/LeetCode/2021-02/669.html",
    "revision": "f3469239976d76c0eff949ca5ea2e0e8"
  },
  {
    "url": "blogs/LeetCode/2021-02/671.html",
    "revision": "1f3dc6e3e48ef9b3d5a5d860afd659ce"
  },
  {
    "url": "blogs/LeetCode/2021-02/687.html",
    "revision": "864a683200790b23accb6cb596bcfccf"
  },
  {
    "url": "blogs/LeetCode/2021-02/94.html",
    "revision": "6709b56acd41e1a6cf8623c022c95890"
  },
  {
    "url": "blogs/LeetCode/index.html",
    "revision": "149e5f343ca567df0bd362ac5e616247"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "f128b4ee26e8f16dba9e73a9a6f5898d"
  },
  {
    "url": "blogs/Research/Methods01.html",
    "revision": "64e74a02a0e7bd87d8b474f0e53ea9e4"
  },
  {
    "url": "blogs/Research/Methods02.html",
    "revision": "0a65850719b5dda2cdf7890e0261f783"
  },
  {
    "url": "blogs/Research/Methods03.html",
    "revision": "035b04ebac7d57b1e0a76e3261c7de11"
  },
  {
    "url": "blogs/Research/report_timing.html",
    "revision": "6c2df48f643b89f29a1ca147fa889a87"
  },
  {
    "url": "blogs/Research/TCL.html",
    "revision": "f6c1469aabfea72d5ab2ec3b4b8c3ba1"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "2275c95f47170daf7b489085cb6736e8"
  },
  {
    "url": "categories/index.html",
    "revision": "0c3cf90ef19b7cca7c30bd17db803d46"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "ce7e8ac60cd963b1ff0b97f615fceb18"
  },
  {
    "url": "categories/LeetCode/index.html",
    "revision": "f764cad46991cb1935832612bcf2d877"
  },
  {
    "url": "categories/LeetCode/page/2/index.html",
    "revision": "10c24fed5db97e712d97e5555d891a8d"
  },
  {
    "url": "categories/LeetCode/page/3/index.html",
    "revision": "a7e82856fa00276d8c36be89e77d4f61"
  },
  {
    "url": "categories/LeetCode/page/4/index.html",
    "revision": "baabdc3eb61ba123c4c60a81073ec77e"
  },
  {
    "url": "categories/LeetCode/page/5/index.html",
    "revision": "6844939ee7ef7c077b6c5e22977b00f8"
  },
  {
    "url": "categories/LeetCode/page/6/index.html",
    "revision": "19d0b1c29901b603110a680c45e31bc6"
  },
  {
    "url": "categories/LeetCode/page/7/index.html",
    "revision": "5f99b735fd94dd026687844fe831ec90"
  },
  {
    "url": "categories/科研/index.html",
    "revision": "c31265ec187dac8b9ac8a316da427aa1"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "c5220fa5edc79188265f43fe56753b48"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "16b48bd117b3ec3723905c5982142645"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "README.en.html",
    "revision": "c624685cdadc1256fdd3da1fb0e533b1"
  },
  {
    "url": "summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
  },
  {
    "url": "tag/01背包/index.html",
    "revision": "6e3153b404fd98c28ea6de7775f4e7db"
  },
  {
    "url": "tag/git/index.html",
    "revision": "69562e46dbc697ccde0fb3450bc21880"
  },
  {
    "url": "tag/GitBug/index.html",
    "revision": "f497b0dedc64b121f05a2d196d35dc61"
  },
  {
    "url": "tag/gitee/index.html",
    "revision": "50081d12716d81a3a329a08ee7c0d431"
  },
  {
    "url": "tag/github/index.html",
    "revision": "1eede83957bca93bbcd039fbb95a9ae0"
  },
  {
    "url": "tag/index.html",
    "revision": "70f1f63613eab1f115dd57c54a5c8137"
  },
  {
    "url": "tag/PrimeTime/index.html",
    "revision": "781d474bfb4f4f56e5d45d515bf525ed"
  },
  {
    "url": "tag/String/index.html",
    "revision": "6e9f8c337a32f3feeb555f682beea4df"
  },
  {
    "url": "tag/二叉搜索树/index.html",
    "revision": "683e341a9c484ed0e42e0f5495a5e89b"
  },
  {
    "url": "tag/前中后序遍历/index.html",
    "revision": "18a777f6dcfd486201382b7c7e4f187c"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "a82a10c5f3f6e9505d3cd85753b04c56"
  },
  {
    "url": "tag/动态规划/page/2/index.html",
    "revision": "f7e42d0719d07c0c0fec678f3a8bf317"
  },
  {
    "url": "tag/多数投票问题/index.html",
    "revision": "9837267e87e5eada7776e2afd69ca5fb"
  },
  {
    "url": "tag/字符串加法减法/index.html",
    "revision": "bf97834f266fc33039b2ca6c068c5c3a"
  },
  {
    "url": "tag/字符串编辑/index.html",
    "revision": "c01984804ddcb38be4371b611f6056e0"
  },
  {
    "url": "tag/完全背包/index.html",
    "revision": "f538939c99f417cf0344d5b32a665cf2"
  },
  {
    "url": "tag/层次遍历/index.html",
    "revision": "f8098b1de7678b19ce09862826c3ca25"
  },
  {
    "url": "tag/并查集/index.html",
    "revision": "24a781b9ddf93f03c6e9591d7324fbaf"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "495cfcfea702da47d0f0a211456d8c2e"
  },
  {
    "url": "tag/数学/page/2/index.html",
    "revision": "885e912143b9d6b84ab02dacb8a29d60"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "8215aee212b917e8acc1dada79d08c73"
  },
  {
    "url": "tag/数据结构/page/2/index.html",
    "revision": "798ac6098714ac428f7855b6803c6cc9"
  },
  {
    "url": "tag/数组/index.html",
    "revision": "89d28a6e86bdc1ff6b9475c8f9ca5347"
  },
  {
    "url": "tag/树/index.html",
    "revision": "430d5016edc004b36f0cedf32379182d"
  },
  {
    "url": "tag/树/page/2/index.html",
    "revision": "5ac810bc53263eb9a7bbaa0c796c72b0"
  },
  {
    "url": "tag/树/page/3/index.html",
    "revision": "92d1b4e03c40b318a528436d5d61a7fd"
  },
  {
    "url": "tag/相遇问题/index.html",
    "revision": "f58d2d6c531673851d2bd3fd52b1a257"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "d48e42347542d3b30102eeb3c0bb257c"
  },
  {
    "url": "tag/素数/index.html",
    "revision": "94b2d62cc3abd3063facc366623cd4dc"
  },
  {
    "url": "tag/组合问题/index.html",
    "revision": "6fea1dc805eb60a5526ca7e79e22df8c"
  },
  {
    "url": "tag/股票问题/index.html",
    "revision": "dc5ae9a8f9bef7b84b736b276c9a328e"
  },
  {
    "url": "tag/背包问题/index.html",
    "revision": "3206f2423a519bbcd4997504abc2c184"
  },
  {
    "url": "tag/读论文的方法/index.html",
    "revision": "052b0a4ce5499dd0868e87c2c2105121"
  },
  {
    "url": "tag/进制转换/index.html",
    "revision": "e54b00ede8e2c491a495baa39ba1b2f3"
  },
  {
    "url": "tag/迭代/index.html",
    "revision": "c3f2fb0b93ddd8737424071fd69f8a29"
  },
  {
    "url": "tag/递归/index.html",
    "revision": "d923de29d7cf3b4f542b421acf799d81"
  },
  {
    "url": "tag/递归/page/2/index.html",
    "revision": "4b60a5605ab45e9d596bc56101dc38e1"
  },
  {
    "url": "tag/链表/index.html",
    "revision": "8aad1ce62cc57e1ba0baa1b76cc28478"
  },
  {
    "url": "tag/阶乘/index.html",
    "revision": "135d40ce7fd54a0796744214c5f0e58c"
  },
  {
    "url": "tag/静态时序分析/index.html",
    "revision": "d217e64fa91311c431f1017bd8940d76"
  },
  {
    "url": "timeline/index.html",
    "revision": "098bd14014d3aad87160989aec521d7b"
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
