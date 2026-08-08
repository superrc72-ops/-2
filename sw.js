self.addEventListener("install", (e) => { self.skipWaiting(); });
self.addEventListener("activate", (e) => { self.clients.claim(); });
self.addEventListener("fetch", (e) => {
  // 네트워크 우선, 실패 시 캐시 없이 그냥 통과 (오프라인 캐싱은 필요시 나중에 추가)
});
