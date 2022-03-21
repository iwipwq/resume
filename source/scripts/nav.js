(function (){
    const menuListElement = document.querySelector('.menu-list');
    const navBackground = document.querySelector('header');
    const transitionStartingPoint= 2;

    const CheckScrollAndToggleClass = function(elem,px) {
        const TOGGLE_CLASSNAME = 'init';
        const currentScrolledAmount = scrollY;
        const isScrollOverTheStartingPoint = currentScrolledAmount > px;
        isScrollOverTheStartingPoint ? elem.classList.remove(TOGGLE_CLASSNAME) : elem.classList.add(TOGGLE_CLASSNAME);
    }

    this.addEventListener('scroll',() => {
        CheckScrollAndToggleClass(menuListElement,transitionStartingPoint)
        CheckScrollAndToggleClass(navBackground,transitionStartingPoint)
    });
})();