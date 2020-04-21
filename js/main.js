var imgs = document.getElementsByClassName("img-fluid");
var overlayCon = document.querySelector(".overlay");
var overlayInner = document.querySelector(".overlay-inner");
var close_W = document.getElementById("WClose");
var next = document.getElementById("next");
var perv = document.getElementById("prev");
var imgs_Array = [];
var currentIndex = 0

for (var i = 0; i < imgs.length; i++) {
    imgs_Array.push(imgs[i])
    imgs[i].addEventListener("click", function (e) {
        var overlay_inner = e.target.src;
        overlayInner.style.backgroundImage = "url(" + overlay_inner + ")"
        currentIndex = imgs_Array.indexOf(e.target);
        overlayCon.classList.add("show")
    })
}

close_W.addEventListener("click", function () {
    overlayCon.classList.remove("show")

})

overlayCon.addEventListener("click", function (e) {
    e.target.classList.remove("show")
})


next.addEventListener("click", function () {

    currentIndex++;
    if (currentIndex == imgs_Array.length) {
        currentIndex = 0;
    }
    overlayInner.style.backgroundImage = "url(" + imgs_Array[currentIndex].src + ")";
})

perv.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs_Array.length - 1;
    }
    overlayInner.style.backgroundImage = "url(" + imgs_Array[currentIndex].src + ")";

})


