const CACHE = 'agoravap-v4';
const ASSETS = ['/manifest.json', '/icon.svg'];

self.addEventListener('install', e => {
  // Cacheia apenas assets estaticos — NAO o index.html
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  // Remove caches antigos
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Firebase e APIs externas — nunca cacheia
  if (url.includes('firebaseapp') || url.includes('googleapis') ||
      url.includes('firebase') || url.includes('gstatic')) return;

  // index.html — SEMPRE busca do servidor (network first)
  // Garante que o usuario sempre veja a versao mais recente
  if (url.endsWith('/') || url.includes('index.html')) {
    e.respondWith(
      fetch(e.request)
        .then(r => r)
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Outros assets estaticos — cache first
  e.respondWith(
    caches.match(e.request)
      .then(cached => cached || fetch(e.request))
  );
});
