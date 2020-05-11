'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "39a8333a0377378ac0976278bff4016f",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/angry.jpg": "c3863dc92209e09acc95e3c2ac091dd5",
"assets/images/bkg.jpg": "9f34214d03577e816b860a28c0ea9f93",
"assets/images/blog.png": "89172cd5dc5bb1d6fb226ca9fb147517",
"assets/images/c.jpg": "503d979fec63f73d51296dbe49e1828c",
"assets/images/cry.jpg": "c2556ca100f281b8b92316187948c902",
"assets/images/haha.jpg": "a471a798948e1fdbfc8ca460a1676040",
"assets/images/heart.jpg": "c692cd110d0d45d58bbc666d1b6722a8",
"assets/images/l.jpg": "36323dbb754c56cefd737e03bf1673d5",
"assets/images/thumb.jpg": "faf04ed4d6ce81a2b5ada4588d7db25e",
"assets/images/wow.jpg": "331bf69ffb86c054fac35e47473065ea",
"assets/LICENSE": "06fc0bb47ffea7572f92f5cb9513bf07",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "70bb213fc918e442ed2c1c32d331a957",
"/": "70bb213fc918e442ed2c1c32d331a957",
"main.dart.js": "8b6d861a31c627fadc10629b1c0bff79",
"manifest.json": "f45829e274928d75ed309a1d85870ad1"
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
