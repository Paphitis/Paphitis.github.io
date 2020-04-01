'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
"/.git/config": "aac29ee1a3130f2b10a9046c37b82a2d",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/index": "4f36cdc7326e69b65ed5e6bc2eee8457",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "5920c71cf61bc15c11dfbb604c4fcb2e",
"/.git/logs/refs/heads/master": "5920c71cf61bc15c11dfbb604c4fcb2e",
"/.git/logs/refs/remotes/origin/master": "2fe972a6f50411aca9350e66e0b97c70",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/1a/174661923c4dde1f956317316cef2f0d638d0e": "8b38a51852a61d36798f3ac4371afbc2",
"/.git/objects/1a/4082c4287b46a9a9828886536f128cb350af63": "885ed79a1b36f849fd1c2e7c9bce35fe",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/28/8c1337628a727afb2455b952f5377130ec0402": "834c2b9ee89e375445478be26f90987c",
"/.git/objects/29/4aee59692ca273c20e34b101603303a7604a78": "daa9d7bc3aa0fedff267767e27087b92",
"/.git/objects/54/08eea141704a6f1d6d7b924d2818667779de15": "dd8a72e971bfde1838d35ea1f7ef1e86",
"/.git/objects/80/e7d78867719c4715c0dede50679423ef14de8d": "948c1dbedc89eaff99ef7ee5697d3168",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/84/d5f7a5b765e6ecfd251dba1fee3373254260ef": "0d5e578c3152dce21a05ce4f8d423657",
"/.git/objects/86/199f8840ee1c79d71b66e74be2d4577951b9ba": "08a5de0a58c9ce10745b580040ac356f",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/a6/692548e559ff5e8ca7c31f53632ffd5321f5f3": "b28f5921d5c8048790659a95a45ff95c",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/bd/11cd988aaa453dd59846236ede26a0891504a6": "c872c074f773980342914046dc1b04ae",
"/.git/objects/be/f08c4ffa4e38664e1e4d57f010008a56c9756f": "a4b9a8211ca4b17ffff9ae84efd629aa",
"/.git/objects/cf/7f5e7bfc77983c306fe952c7e4dcb82d4c484b": "1d45f977f27072235c6faa244df88a09",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/e5/7121f930ca195e5c4fc8926e491e9dabbb8b95": "a5459ba01500696eeb79b67ff351d271",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/refs/heads/master": "6245b6ff524d6559ac88de7c5ae8be3d",
"/.git/refs/remotes/origin/master": "6245b6ff524d6559ac88de7c5ae8be3d",
"/assets/AssetManifest.json": "be3e7f2a023a4024393fd7eb7fc77543",
"/assets/assets/English.json": "dcab54494f980cddf2c22cd0d9823e11",
"/assets/assets/Greek.json": "f1344ef0f4009bacb3882cedcfa20a3e",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "01a7bc973f2f570f17a74de8f6aeebb1",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "00d8ad521ce00c82bf29e69e22078de5",
"/main.dart.js": "46ee75fac03be8f4141ecf7e361a818f",
"/manifest.json": "bc6ccc3267f03266b7320ec3784afb1c"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
