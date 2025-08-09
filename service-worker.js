// MEJORA: Versión del caché actualizada
const CACHE_NAME = 'medapp-v4';
const URLS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.webmanifest',
    './medicamentos.json' // Añadido para asegurar que se cachee desde el principio
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

// MEJORA: Estrategia de Fetch actualizada y corregida
self.addEventListener('fetch', event => {
    const { request } = event;
    // Se crea un objeto URL para acceder al pathname de forma segura
    const requestUrl = new URL(request.url);

    // Ignorar peticiones que no son GET
    if (request.method !== 'GET') {
        return;
    }

    // Estrategia Stale-While-Revalidate para medicamentos.json
    if (requestUrl.pathname.endsWith('medicamentos.json')) {
        event.respondWith(
            caches.open(CACHE_NAME).then(cache => {
                return fetch(request).then(networkResponse => {
                    cache.put(request, networkResponse.clone());
                    return networkResponse;
                }).catch(() => {
                    return cache.match(request);
                });
            })
        );
    } else {
        // Para los demás recursos, usamos "Cache First"
        event.respondWith(
            caches.match(request).then(response => {
                // Si encontramos una respuesta en el caché, la devolvemos.
                // Si no, hacemos la petición a la red.
                return response || fetch(request).then(networkResponse => {
                    // Opcional: Cachear nuevos recursos dinámicamente
                    // if (request.destination === 'image') {
                    //     const cacheCopy = networkResponse.clone();
                    //     caches.open(CACHE_NAME).then(cache => {
                    //         cache.put(request, cacheCopy);
                    //     });
                    // }
                    return networkResponse;
                });
            })
        );
    }
});
