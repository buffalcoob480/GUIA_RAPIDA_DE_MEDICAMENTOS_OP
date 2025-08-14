const CACHE_NAME = 'medapp-v6'; // Versión del caché actualizada
const URLS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.webmanifest',
    './medicamentos.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Cache abierto y archivos añadidos');
            return cache.addAll(URLS_TO_CACHE);
        })
    );
    self.skipWaiting();
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
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Solo manejar peticiones GET
    if (request.method !== 'GET') {
        return;
    }

    // Estrategia: Network First, falling back to Cache para medicamentos.json
    // Intenta obtener de la red primero para tener los datos más frescos,
    // pero si falla, usa el caché. Actualiza el caché si la red funciona.
    if (url.pathname.endsWith('/medicamentos.json')) {
        event.respondWith(
            caches.open(CACHE_NAME).then(cache => {
                return fetch(request).then(networkResponse => {
                    console.log('medicamentos.json obtenido de la red y cache actualizado');
                    cache.put(request, networkResponse.clone());
                    return networkResponse;
                }).catch(() => {
                    console.log('medicamentos.json no disponible en la red, usando caché');
                    return cache.match(request);
                });
            })
        );
        return;
    }

    // Estrategia: Cache First para los demás recursos estáticos
    // Busca en el caché primero. Si no está, va a la red.
    event.respondWith(
        caches.match(request).then(cachedResponse => {
            return cachedResponse || fetch(request).then(networkResponse => {
                // Opcional: cachear nuevos recursos estáticos si es necesario
                return networkResponse;
            });
        })
    );
});
