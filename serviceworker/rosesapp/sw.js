self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('rose-store').then((cache) => cache.addAll([
      'index.html',
      'index.js',
      'style.css',
      'images/rose1.jpeg',
      'images/rose2.jpeg',
      'images/rose3.jpeg',
      'images/rose4.jpeg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
