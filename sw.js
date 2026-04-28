// Service Worker code here
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
});

self.addEventListener('fetch', (event) => {
  console.log('Fetching:', event.request.url);
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
});