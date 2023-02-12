const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navLink = nav?.querySelectorAll ('a');
const body = document.body;


burger?.addEventListener('click', () => {
    body?.classList.toggle('stop-scroll');
    burger?.classList.toggle('burger--active');
    nav?.classList.toggle('header-nav--click');
});

navLink.forEach(el => {
    el.addEventListener('click', () => {
        body?.classList.remove('stop-scroll');
        burger?.classList.remove('burger--active');
        nav?.classList.remove('header-nav--click');
    });
});

// animation header 

