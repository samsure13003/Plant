/*-----------toggle button-----------*/
const navmenu = document.getElementById("nav-menu");
const navlink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    // Toggle the visibility of the menu
    navmenu.classList.toggle("left-[0]");
    navmenu.classList.toggle("left-[-100%]");

    // Toggle icon between menu and close
    hamburger.classList.toggle("ri-menu-4-line");
    hamburger.classList.toggle("ri-close-large-fill");
});

// Close menu on link click
navlink.forEach(link => {
    link.addEventListener("click", () => {
        navmenu.classList.remove("left-[0]");
        navmenu.classList.add("left-[-100%]");
        hamburger.classList.add("ri-menu-4-line");
        hamburger.classList.remove("ri-close-large-fill");
    });
});

/*-----------swiper-----------*/
const swiper = new Swiper('.mySwiper', {
      speed:400,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
});

/*-----------scroll up-----------*/
const scrollUp = () => {
    const scrollUpButton = document.getElementById("scroll-up");
    if (this.scrollY >= 250) {
        scrollUpButton.classList.remove("-bottom-1/2");
        scrollUpButton.classList.add("bottom-4");
    } else {
        scrollUpButton.classList.add("-bottom-1/2");
        scrollUpButton.classList.remove("bottom-4");
    }
}
window.addEventListener("scroll", scrollUp);

/*-----------------background header---------------*/
const scrollHeader = () => {
    const header = document.getElementById("navbar");
    if (this.scrollY >= 50) {
        header.classList.add("border-b","border-yellow-500");
    } else {
        header.classList.remove("border-b");
    }
}
window.addEventListener("scroll", scrollHeader);


/*-----------------active link---------------*/

const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  let current = "home";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
};

/*------------------scroll reveal---------------*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 300,
  reset: true
})

sr.reveal('.home_data, .popular_more, .review_more,.social__card,.social_main ')
sr.reveal('.home_img', { delay: 300 ,scale : 0.5,origin: 'right'});
sr.reveal('.service_card, .popular__card, .swiper_card', { interval: 100})
sr.reveal('.about_more', { delay: 300 });
sr.reveal('.about_img,.social_img', { delay: 300 ,origin: 'left'});
sr.reveal('.social_min', { delay: 400 ,origin: 'left'});
sr.reveal('.about_content', { delay: 300 ,origin: 'right'});

window.addEventListener("scroll",activeLink)