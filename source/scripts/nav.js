(function (){
    const targetElem = document.querySelector('.menu-list');
    const pixelLimit = 2;

    const CheckScrollAndToggleClass = function(elem,px) {
        const TOGGLE_CLASSNAME = 'init';
        const menuList = elem;
        const menuListTransformStartPixel = px;
        const currentScrolledValue = scrollY;
        const isScrollOverTheLimit = currentScrolledValue > menuListTransformStartPixel;
        isScrollOverTheLimit ? menuList.classList.remove(TOGGLE_CLASSNAME) : menuList.classList.add(TOGGLE_CLASSNAME);
    }

    this.addEventListener('scroll',e => {
        CheckScrollAndToggleClass(targetElem,pixelLimit)
    });
})();