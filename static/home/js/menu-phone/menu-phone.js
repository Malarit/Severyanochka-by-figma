//Sticking to the bottom

const menu_phone = document.querySelector('.menu-phone')

if (menu_phone != null) {

    menu_phone.style.top = 
                (window.innerHeight + window.pageYOffset) - menu_phone.offsetHeight + "px";

    window.addEventListener('scroll', translateOnScroll);
    function translateOnScroll() {
        menu_phone.style.top = 
                (window.innerHeight + window.pageYOffset) - menu_phone.offsetHeight + "px";
    }
}
