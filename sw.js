const CACHE_NAME = "muruverse-host"

const urlsToCache = [

"/",
"index.html",
"style.css",
"app.js",
"background.jpg"

]

self.addEventListener("install",event=>{

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>{

return cache.addAll(urlsToCache)

})

)

})

self.addEventListener("fetch",event=>{

event.respondWith(

caches.match(event.request)

.then(response=>{

return response || fetch(event.request)

})

)

})
