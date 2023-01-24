const Item = document.querySelectorAll(".self-catalog__wrapper a > div");

function block_tablet() {
    Item[11].classList.add('_short-block');  
    Item[11].classList.remove('_long-block');
}
function block_dekstop() {
    Item[11].classList.remove('_short-block');  
    Item[11].classList.add('_long-block');
}

function resize() {
    if (window.innerWidth <= 1189 && window.innerWidth >= 630) {
        block_tablet()
    }
    else {
        block_dekstop()
    }
}



window.addEventListener(`resize`, resize);