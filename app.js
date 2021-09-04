const navBurguer = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  element.addEventListener('click', function () {
    navBurguer.classList.toggle('show')
  });
};

const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', function () {
    navBurguer.classList.remove('show');
  });
};

const header = document.querySelector('#header');
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  Keyboard: true
});

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(`
  #home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials .text,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `, {interval: 100}
);
