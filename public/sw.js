const CACHE_NAME = 'techflex-cache-v1.1'; // Increment version for updates
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  // Add main JS/CSS bundles if they have stable names or use a build tool to inject them
  // For now, assume dynamic JS/CSS loaded by index.html will be cached via network-first or stale-while-revalidate
  // For ESM modules via esm.sh, they are typically aggressively cached by the browser and CDN.
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        // Add all URLs, but don't fail install if some are not found (e.g. development)
        const cachePromises = urlsToCache.map(urlToCache => {
          return cache.add(urlToCache).catch(err => {
            console.warn(`Failed to cache ${urlToCache}: ${err}`);
          });
        });
        return Promise.all(cachePromises);
      })
      .then(() => self.skipWaiting()) // Activate new service worker immediately
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // Take control of all open clients
  );
});

self.addEventListener('fetch', (event) => {
  // For navigation requests, try network first, then cache (Network-First)
  // This ensures users get the latest HTML if online.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          return response;
        })
        .catch(() => {
          return caches.match(event.request)
            .then(cachedResponse => {
              return cachedResponse || caches.match('/index.html'); // Fallback to index.html if specific page not cached
            });
        })
    );
    return;
  }

  // For other requests (CSS, JS, images), use Cache-First strategy
  // This is good for static assets.
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response; // Serve from cache
        }
        // Not in cache, fetch from network
        return fetch(event.request).then(
          (networkResponse) => {
            // Check if we received a valid response
            if(!networkResponse || networkResponse.status !== 200) { // Don't cache opaque responses or errors
                return networkResponse;
            }

            // Don't cache esm.sh requests in service worker as they have their own strong caching.
            if (event.request.url.startsWith('https://esm.sh/')) {
                return networkResponse;
            }

            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return networkResponse;
          }
        ).catch(error => {
          console.error('Fetching failed:', error);
          // Optionally, provide a generic fallback for images or other assets
          // if (event.request.destination === 'image') {
          //   return caches.match('/icons/offline-placeholder.png');
          // }
        });
      })
  );
});