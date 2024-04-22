'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9824506e2f1e50cb0267d5527641c0b5",
"assets/AssetManifest.bin.json": "f116c3b798acc6ce5244241cee1b1c4e",
"assets/AssetManifest.json": "d0d2549820fdfdcae26098262f3cdc69",
"assets/assets/animations/empty.json": "dc9e879c0c74b6ce7ae182fe6f72eae5",
"assets/assets/animations/notification.json": "c15d925b5ff7baa6a63e2efa1a24cdd4",
"assets/assets/images/atigo.png": "eb0fe23f527febb068a6dfa354eb9bd6",
"assets/assets/images/bnk.jpg": "2b23aae966660000efc88cf3f544cd25",
"assets/assets/images/icon.png": "5c35861f5164625741bb19872bad0f37",
"assets/assets/images/intro_1.svg": "a7f2b01a7b4d970f2f17c7ffa15871bc",
"assets/assets/images/intro_2.svg": "aaa9ff254db75ffbaf5d01d6c882fcbc",
"assets/assets/images/intro_3.svg": "0649349b02a7e8ea54cc125115bae1ee",
"assets/assets/images/logo.png": "36111e6db5a786b6169bca895a334233",
"assets/assets/images/momo.png": "9047a08c073155bb0bbb979ba81691a5",
"assets/assets/images/premium.png": "e64df11693a6ad21700af6e1ca637636",
"assets/assets/images/splash.png": "5c35861f5164625741bb19872bad0f37",
"assets/assets/images/telec.png": "60185827e10eee5a902e1b8b60be6502",
"assets/assets/translations/ar-SA.json": "99600a671da2cf238f0dca1e72e96ecf",
"assets/assets/translations/de-DE.json": "09690363a65fd324d23f9b329d2d637f",
"assets/assets/translations/en-US.json": "cc0f490111b9ee6d9485da763d5f2c83",
"assets/assets/translations/es-ES.json": "c16d546e8bfd2cab46d9a06bbbd24b33",
"assets/assets/translations/fr-FR.json": "c2ae291a07b722569ae7eae378acff45",
"assets/assets/translations/hi-IN.json": "3e5db5d08689576a3fb653c5b5b2d11c",
"assets/assets/translations/id-ID.json": "f1490fe81f73df07560642713c01a09b",
"assets/assets/translations/pt-BR.json": "33ccd56f04e1aa9bf2f624dd8f9451e7",
"assets/assets/translations/zh-CN.json": "6f882db5116572d4368afc6c484da5bc",
"assets/FontManifest.json": "6fd2628bfa5e2a7478acaf1a349044e8",
"assets/fonts/MaterialIcons-Regular.otf": "16740bb34fcfa828782a566f1d6439da",
"assets/NOTICES": "abf5f643a670a7becba909241470863a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a0cb8a35225d064a6465f046c9471fd",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/feather_icons/fonts/feather.ttf": "0d0d92d310cc68e53796bf15c36838c2",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "90befbec7bfc3e9748412e5088df93d4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c624c2618a2ce162bf15607bd46341d1",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8aa0fa243c62dbfb2d2e8934db6b6de2",
"/": "8aa0fa243c62dbfb2d2e8934db6b6de2",
"main.dart.js": "c4e5bce37886fd75dc3d76be1804f938",
"manifest.json": "c0ff5127b0e6731ad6792e11fadd9f3d",
"version.json": "33077ef7ad9bafa4b3c1f2e7f15bec7b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
