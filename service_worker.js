importScripts('/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/bootstrap.bundle.js",
    "revision": "ee08eb7f44335a3cf385e03d4406e4a5"
  },
  {
    "url": "assets/bootstrap.bundle.min.js",
    "revision": "d70c474886678aebe3e9d91965dc8b62"
  },
  {
    "url": "assets/bootstrap.js",
    "revision": "c2cdb900858c3e63ce8cd9f69171d342"
  },
  {
    "url": "assets/bootstrap.min.js",
    "revision": "eb5fac582a82f296aeb74900b01a2fa3"
  },
  {
    "url": "assets/main.js",
    "revision": "bec7be2a16e744f61f32aa69768d319a"
  },
  {
    "url": "assets/main.min.js",
    "revision": "1c4efcf593a7c4143ec45c56eadbf40b"
  },
  {
    "url": "assets/pjax-api.js",
    "revision": "b1cf3b41d7e10753b12b268df38ee938"
  },
  {
    "url": "assets/pjax-api.min.js",
    "revision": "73441b2e299762517990d794c5444153"
  },
  {
    "url": "assets/style.min.css",
    "revision": "5f7c275df3afe6c6e05efa4ccee1ecab"
  },
  {
    "url": "assets/zepto.min.js",
    "revision": "d37f7aa3fdda41a82b000109654352c6"
  },
  {
    "url": "files/fonts/GenShinGothic-Bold.woff2",
    "revision": "2eac22b8067ebd622cc9703d73ad285a"
  },
  {
    "url": "files/fonts/GenShinGothic-Light.woff2",
    "revision": "91e472e892a59a50ad8293d947c7ffa1"
  },
  {
    "url": "files/fonts/GenShinGothic-Normal.woff2",
    "revision": "5b77e56b6e60cda244328271e6fd2200"
  },
  {
    "url": "files/fonts/mgenplus-c-bold.woff2",
    "revision": "76c65f1d539709a4c6ef83eeaa659810"
  },
  {
    "url": "files/fonts/mgenplus-c-light.woff2",
    "revision": "99d52e90e9c3638178409464a9525232"
  },
  {
    "url": "files/fonts/mgenplus-c-regular.woff2",
    "revision": "f5dcf7e68497eb249acd15114b6cadce"
  },
  {
    "url": "files/fonts/mgenplus-m-bold.woff2",
    "revision": "4c9c98e29eee23f2154f1d95bc46194a"
  },
  {
    "url": "files/fonts/mgenplus-m-light.woff2",
    "revision": "f398d95c9487eca11d0e78e3eb0b295a"
  },
  {
    "url": "files/fonts/mgenplus-m-regular.woff2",
    "revision": "8d0438ab08bffff32cb67279863f6554"
  },
  {
    "url": "files/fonts/mgenplus-p-bold.woff2",
    "revision": "4e20f27ea5480b43f7c8ee0803302efd"
  },
  {
    "url": "files/fonts/mgenplus-p-light.woff2",
    "revision": "e865da6261185aa3b7aeb181c43aab68"
  },
  {
    "url": "files/fonts/mgenplus-p-regular.woff2",
    "revision": "b0c5149e08370d41d300dca20f3d523c"
  },
  {
    "url": "info.json",
    "revision": "f48703ecdc2a7abdea2e9caac61960a5"
  },
  {
    "url": "manifest.json",
    "revision": "9c9385ea38ef484b745bb579ae4b414d"
  },
  {
    "url": "workbox-sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
]);