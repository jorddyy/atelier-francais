// Offline cache. The deploy workflow replaces __VERSION__ with the commit SHA,
// so every deploy installs a fresh cache and removes the old one.
const VERSION = '__VERSION__';
const CACHE = 'atelier-' + VERSION;
const FILES = [
  './',
  'index.html',
  'style.css',
  'content.js',
  'exam-content.js',
  'app.js',
  'manifest.webmanifest',
  'fonts/fraunces-latin-opsz-normal.woff2',
  'fonts/fraunces-latin-opsz-italic.woff2',
  'fonts/source-sans-3-latin-wght-normal.woff2',
  'fonts/source-sans-3-latin-wght-italic.woff2',
  'icons/flag.svg',
  'icons/rooster.svg',
  'icons/rooster-dark.svg',
  'icons/favicon-32.png',
  'icons/apple-touch-icon.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable.png'
];

self.addEventListener('install', event => {
  // cache:'reload' skips the HTTP cache so a new version never stores stale files.
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(FILES.map(f => new Request(f, {cache: 'reload'}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('atelier-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // The site is one page with hash routes: any navigation gets the cached shell.
  if (req.mode === 'navigate') {
    event.respondWith(caches.match('index.html', {cacheName: CACHE}).then(r => r || fetch(req)));
    return;
  }
  event.respondWith(caches.match(req, {cacheName: CACHE, ignoreSearch: true}).then(r => r || fetch(req)));
});
