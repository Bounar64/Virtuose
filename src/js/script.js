function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const logo = document.querySelector('.logo');
    const menu_icon = document.querySelector('.menu_icon');
    const close_icon = document.querySelector('.close_icon');
    const menu = document.querySelector('.menu');
    const kayak = document.querySelector('.kayak');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
        logo.classList.toggle('open');
        menu_icon.classList.toggle('close');
        close_icon.classList.toggle('open');
        menu.classList.toggle('open');
        kayak.classList.toggle('hide');
    })
}
toggleMenu();