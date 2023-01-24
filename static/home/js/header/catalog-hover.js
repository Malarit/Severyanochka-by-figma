const animItem = document.querySelector('.MainMenu__catalog')
const catalog = document.querySelector('.catalog-hover')

animItem.onmouseover = animItem.onmouseout = handler;
catalog.onmouseover = catalog.onmouseout = cataloghandler;

function handler(event) {
    if (event.type == 'mouseover') {
        catalog.classList.add('_active');
    }
    if (event.type == 'mouseout') {
        catalog.classList.remove('_active');
    } 
}

function cataloghandler(event) {
    if (event.type == 'mouseover') {
        catalog.classList.add('_active');
    }
    if (event.type == 'mouseout') {
        catalog.classList.remove('_active');
        
    } 
}