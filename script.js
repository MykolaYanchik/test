(function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const close = document.querySelector('.header__nav-close');
    burger.addEventListener('click', (e) => {
      e.preventDefault();
        menu.classList.add('header__nav-active')
    })
    close.addEventListener('click', (e) => {
      e.preventDefault();
        menu.classList.remove('header__nav-active')
    })
}());

