const CACHE_NAME = "gerber-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/styles.css",
    "/assets/logo-svg.png"
];

// Instala o service worker
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Intercepta requisições
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
