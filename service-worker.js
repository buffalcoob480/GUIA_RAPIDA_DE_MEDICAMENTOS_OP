// MEJORA: Versión del caché actualizada
const URLS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.webmanifest'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Cache abierto');
            return cache.addAll(URLS_TO_CACHE);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Borrando caché antiguo', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// MEJORA: Estrategia de Fetch actualizada
self.addEventListener('fetch', event => {
    const { request } = event;

    // Estrategia Stale-While-Revalidate para medicamentos.json
    // Muestra el contenido cacheado inmediatamente (stale)
    // mientras busca una nueva versión en la red (revalidate).
    if (request.url.includes('medicamentos.json')) {
        event.respondWith(
            caches.open(CACHE_NAME).then(cache => {
                return cache.match(request).then(cachedResponse => {
                    const fetchPromise = fetch(request).then(networkResponse => {
                        // Si la petición a la red es exitosa, la guardamos en caché
                        cache.put(request, networkResponse.clone());
                        return networkResponse;
                    });
                    // Devolvemos la respuesta cacheada si existe, si no, esperamos la de la red
                    return cachedResponse || fetchPromise;
                });
            })
        );
    } else if (URLS_TO_CACHE.includes(request.pathname) || request.destination === 'image') {
        // Para los archivos principales y las imágenes, usamos "Cache First"
        event.respondWith(
            caches.match(request).then(response => {
                return response || fetch(request);
            })
        );
    }
});
