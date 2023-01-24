(function () {
    const hint = document.getElementById("hint")
    const triggerHint = document.querySelector(".watch__card img")

    triggerHint.onmouseover = function(e) {
        hint.style.display = "block";
    }
    triggerHint.onmouseout = function(e) {
        hint.style.display = "none";
    }
}())