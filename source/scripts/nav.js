(function (){
    const targetElem = document.querySelector('.menu-list');
    const pixelLimit = 500;

    const CheckScrollAndToggleClass = function(elem,px) {
        console.log('callback')
        const menuList = elem;
        const menuListTransformStartPixel = px;
        const currentScrolledValue = scrollY;
        if( currentScrolledValue > menuListTransformStartPixel) {
            menuList.classList.remove('init');
        } else {
            menuList.classList.add('init');
        }
    }

    this.addEventListener('scroll',CheckScrollAndToggleClass(targetElem,pixelLimit))
})();