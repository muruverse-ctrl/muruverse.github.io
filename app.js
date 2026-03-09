function msg(text){

document.getElementById("status").innerHTML=text

}

if("serviceWorker" in navigator){

navigator.serviceWorker.register("sw.js")

}
