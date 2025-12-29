self.addEventListener('fetch', function(event) {
  // This allows the app to work even with poor internet
  event.respondWith(fetch(event.request));
});
