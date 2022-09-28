
var 프로미스 = new Promise((resolve, reject) => {
    var img = document.querySelector("#test");
    img.addEventListener("load", function() {
        resolve(img);
    })
    img.addEventListener("error", function() {
        reject(img);
    })
    
})

프로미스.then(() => {
    console.log("성공")
}).catch(() => {
    console.log('실패')
})