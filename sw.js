const urlsToCache = [

  '/',
  '/products',

  '/css/bootstrap.min.css',
  '/css/shop-homepage.css',

  '/fonts/flintstone.ttf',
  '/fonts/glyphicons-halflings-regular.woff2',

  '/images/products/car.jpg',
  '/images/products/club.png',
  '/images/products/dino.jpg',
  '/images/products/wheel.jpg'
];

const cacheName = 'new_cache';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(urlsToCache)
      })
  );
});

self.addEventListener('activate', function (event) {
  //event.waitUntil(self.clients.claim());
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
    }))
});