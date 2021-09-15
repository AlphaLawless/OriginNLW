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

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
};

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  Keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
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

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
    } else {
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  activateMenuAtCurrentSection()
  changeHeaderWhenScroll()
});
