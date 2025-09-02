const CACHE_NAME = "pwa-chace-v1";
const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/manifest.json",
    "/styles.css",
    "/assets/logo-svg.png",
    "/assets/icons/icon-192x192.png",
    "/assets/icons/icon-512x512.png"
];

// Instala o service worker
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

// Intercepta requisições
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
