(function () {
    const img = document.querySelectorAll(".watch__some-pictures div img")
    const focusImg = document.querySelector(".watch__focus-pictures img")

    for(let i = 0; i < img.length; i++) {
        img[i].onmouseover = function(e) {
            focusImg.src = e.target.src;
        }
    }
    
}());