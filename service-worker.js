const CACHE_NAME = 'medapp-v2'; // Cambiamos el nombre para forzar la actualización
const URLS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.webmanifest',
    './icon-512.png'
    // Quitamos medicamentos.json de aquí para que no se cachee en la instalación
];

// Evento de instalación: guarda los archivos principales de la app
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Cache abierto');
            return cache.addAll(URLS_TO_CACHE);
        })
    );
});

// Evento de activación: limpia cachés antiguos
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Evento de fetch: decide cómo manejar las solicitudes
self.addEventListener('fetch', event => {
    // Estrategia: Para medicamentos.json, siempre busca en la red primero.
    // Para todo lo demás, usa la caché primero.
    if (event.request.url.includes('medicamentos.json')) {
        event.respondWith(
            caches.open(CACHE_NAME).then(cache => {
                return fetch(event.request).then(response => {
                    // Si la respuesta de la red es exitosa, la guardamos en caché y la devolvemos
                    cache.put(event.request, response.clone());
                    return response;
                }).catch(() => {
                    // Si la red falla, busca en la caché como último recurso
                    return caches.match(event.request);
                });
            })
        );
    } else {
        // Para todos los demás archivos, usa la estrategia "cache-first"
        event.respondWith(
            caches.match(event.request)
            .then(response => {
                // Si está en caché, la devuelve. Si no, la busca en la red.
                return response || fetch(event.request);
            })
        );
    }
});
