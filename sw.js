const urlsToCache = [

  '/',
  '/products',

  '/css/bootstrap.min.css',
  '/css/shop-homepage.css',

  '/fonts/flintstone2.ttf',
  '/fonts/glyphicons-halflings-regular.woff2',

  '/images/loader.gif',
  '/images/products/car.jpg',
  '/images/products/club.png',
  '/images/products/dino.jpg',
  '/images/products/wheel.jpg'
];

const cacheName = 'js_poland_2017';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(urlsToCache)
    })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then((result) => {
      return result || fetch(event.request)
    })
  )
});