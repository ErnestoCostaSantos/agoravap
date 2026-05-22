const CACHE = 'agoravap-v5';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  if (url.includes('firebaseapp') || url.includes('googleapis') ||
      url.includes('firebase') || url.includes('gstatic')) return;
  e.respondWith(
    fetch(e.request).catch(() => new Response('Offline', {status: 503}))
  );
});
