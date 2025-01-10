const CACHE_NAME = 'vocab-cache-v1';
const URLs_TO_CACHE = [
    'index.html',
    '7000單.csv',
    'manifest.json',
    'service-worker.js',
    'icon.png',
    'icon-large.png',
    // External resources
    'https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Noto+Serif+TC:wght@200;300;400;500;600;700;800;900&display=swap',
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search'
];

// Install event: caching essential resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(URLs_TO_CACHE);
            })
    );
});

// Fetch event: serve cached content when offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return the response
                if (response) {
                    return response;
                }
                // Clone the request as it can only be consumed once
                const fetchRequest = event.request.clone();
                return fetch(fetchRequest).then(
                    fetchResponse => {
                        // Check for a valid response
                        if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
                            return fetchResponse;
                        }
                        // Clone the response as it can only be consumed once
                        const responseToCache = fetchResponse.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        return fetchResponse;
                    }
                );
            })
            .catch(() => {
                // Fallback content if both cache and network are unavailable
                return caches.match('index.html');
            })
    );
});

// Activate event: clean up old caches
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});