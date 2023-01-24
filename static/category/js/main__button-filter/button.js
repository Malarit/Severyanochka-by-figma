const button = document.querySelector(".main__button-filter")
const cl = document.querySelector(".self-filter")
const close_filter = document.getElementById("close_filter")

button.onclick = function() {
    cl.classList.add('active')
}
window.onclick = function(e) {
    if (!(e.target === cl || cl.contains(e.target)) && e.target != button) {
        cl.classList.remove('active')
    }
}
close_filter.onclick = function() {
    cl.classList.remove('active')
}