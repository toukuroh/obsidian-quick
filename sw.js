// キャッシュなし版 — 常にネットワークから最新を取得
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => {
  // 古いキャッシュをすべて削除
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
  );
  self.clients.claim();
});

// fetch ハンドラなし → ブラウザが毎回ネットワークに取りに行く
