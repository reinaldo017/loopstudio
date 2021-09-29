function toogleMenu(e) {
    const menu = document.querySelector('.menu');
    const ul = document.querySelector('.menu__ul');
    menu.classList.toggle('menu--show');
    ul.classList.toggle('menu__ul--appear');
}

//Adding Event Listeners
const hamburger = document.querySelector('.nav__hamburger');
const closeIcon = document.querySelector('.menu__close-icon');

hamburger.addEventListener('click', toogleMenu);
closeIcon.addEventListener('click', toogleMenu);