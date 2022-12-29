// Menu hamburger
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const logo = document.querySelector('.logo');
    const menu_icon = document.querySelector('.menu_icon');
    const close_icon = document.querySelector('.close_icon');
    const menu = document.querySelector('.menu');
    const kayak = document.querySelector('.kayak');
    const buttonRegister = document.querySelector('.button-register');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
        logo.classList.toggle('open');
        menu_icon.classList.toggle('close');
        close_icon.classList.toggle('open');
        menu.classList.toggle('open');
        kayak.classList.toggle('hide');
        buttonRegister.classList.toggle('open');
    })

    // Menu hamburger leave on click links
    links = document.querySelectorAll('.link');

    links.forEach((link) => {
        link.addEventListener('click', () => {
            navbar.classList.toggle('open');
            logo.classList.toggle('open');
            menu_icon.classList.toggle('close');
            close_icon.classList.toggle('open');
            menu.classList.toggle('open');
            kayak.classList.toggle('hide');
            buttonRegister.classList.toggle('open');
        })
    })
}
toggleMenu();


// Navbar animation
window.addEventListener('scroll', () => {
    scrollY = window.pageYOffset;
    
    if(scrollY > 0) {
        document.querySelector('nav').classList.add('scroll');
    }else {
        document.querySelector('nav').classList.remove('scroll');
    }
});  

// Gsap animation
const Animation = () => {    

    // Little trick :)
    console.log('%cWelcome to %cVirtuose %c.', 'color: #F4F5FC; font-family: Montserrat; font-size: 20px', 'color: #E4FF3B; font-family: Montserrat; font-size: 36px;', 'color: #E4FF3B; font-family: Montserrat; font-size: 46px');

    // Text Animation 
    gsap.from('header', {
        y: -200,
        duration: 1.5
    })

    gsap.from('#kayak', {
        y: 1000,
        duration: 1.5,
        delay: .5
    }) 

    gsap.from('#text-1', {
        x: -1200,
        duration: 1.5, 
        delay: .5
    })

    gsap.from('.content-button', {
        x: -1000,
        duration: 1.5,
        delay: .5
    })

    gsap.from('#content-info-1', {
        y: 500,
        duration: 2,
        delay: .5
    })

    gsap.from('#icon_wave', {
        opacity:  0,
        duration: 2.5,
        delay: 2
    })

    gsap.from('#icon_start', {
        opacity:  0,
        duration: 2.5,
        delay: 2
    })

    gsap.from('#text-2', {
        scrollTrigger: {
            trigger: '#text-2',
            start: '-500px 150px',
        },
        x: -1200,
        duration: 1,
        delay: 0.1
    })

    gsap.from('#text-3', {
        scrollTrigger: {
            trigger: '#text-3',
            start: '-500px 150px',
        },
        x: -1200,
        duration: 1,
        delay: 0.1
    })

    gsap.from('#text-4', {
        scrollTrigger: {
            trigger: '#text-4',
            start: '-500px 150px',
        },
        x: -1200,
        duration: 1,
        delay: 0.1
    })
}

window.onload= Animation();