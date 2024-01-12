/*=============== LOAD PORTFOLIO CONTENT ===============*/
const portfolio = [
  {
    title: "FinnaTrack",
    type: "web fullstack",
    image: "finnatrack.jpeg",
    codeUrl: "https://github.com/sdahal1/MERN_finance_tracker_backend",
    websiteUrl: "https://mern-finance-tracker-frontend.vercel.app/",
    description: "Fullstack MERN finance tracking application. Uses JWT and cookies for Auth. Renders beautiful charts based on users expenses. Allows for routing, expenses history, expenses input, search, filter, and sort through different dates, categories, and more. Full CRUD functionality. Utilizes MongoDB for persistent storage. NOTE: Currently this application only works on firefox!",
    technology: ["HTML", "CSS", "Javascript", "React", "Express", "NodeJS"],
    features: [
      "Fully responsive on all devices",
      "Personal user accounts",
      "Create, view, monitor, update, and delete expenses",
      "Search and sort through expenses based on multiple parameters such as date, month, category, etc",
      "Sophisticated charts and graphs to visualize spending"
    ]
  },
  {
    title: "Cloud Engineer Portfolio",
    type: "web frontend",
    image: "cloud.jpeg",
    codeUrl: "https://github.com/sdahal1/Darrell-Humphries-Site",
    websiteUrl: "https://sdahal1.github.io/Darrell-Humphries-Site/",
    description: "This is a frontend portfolio website for a Cloud Engineer. Its purpose is to help the client showcase their cloud projects, background, and other skills/hobbies that are relevant to their marketing. It also provides a way to submit inquiries to the client which gets routed to their email.",
    technology: ["HTML", "CSS", "Javascript", "EmailJS", "SwiperJS"],
    features: [
      "Fully responsive on all devices",
      "Light mode/Dark mode",
      "Email communications feature",
      "Swiper based testimonials and filtering options"
    ]
  },
  {
    title: "Web Developer Portfolio",
    type: "web frontend",
    image: "developer.jpeg",
    codeUrl: "https://github.com/sdahal1/SamplePortfolio/",
    websiteUrl: "https://sdahal1.github.io/SamplePortfolio/",
    description: "This is a frontend portfolio website for a Web Developer. Its purpose is to help the client showcase their projects, background, and other skills/hobbies that are relevant to their marketing. It also provides a way to submit inquiries to the client which gets routed to their email. It has a unique multi-page feel while still maintaining a one page application format",
    technology: ["HTML", "CSS", "Javascript", "EmailJS", "SwiperJS"],
    features: [
      "Fully responsive on all devices",
      "Light mode/Dark mode",
      "Email communications feature",
      "Swiper based testimonials and filtering options"
    ]
  }
  
]

const techIconLookup = {
  "html": "devicon-html5-plain",
  "css": "devicon-css3-plain colored",
  "javascript": "devicon-javascript-plain colored",
  "react": "devicon-react-original colored",
  "nodejs": "devicon-nodejs-plain-wordmark colored"
}

function generateWorkCard({ title = '', type = '', image = '', codeUrl = '', websiteUrl = '', description = '', technology = [], features = [] }) {
  const workCardHtml = `<div class="work__card mix ${type}">
  <img src="./assets/img/${image}" alt="" class="work__img" />

  <h3 class="work__title">${title}</h3>
  <div class="work__overlay">
    <h4>${title}</h4>
    <a href="${codeUrl}" target="_blank" class="work__button">
      View Code
      <i class='bx bxl-github work__icon'></i>
    </a>
    <a href="${websiteUrl}" target="_blank" class="work__button">
      Visit Website
      <i class="bx bx-right-arrow-alt work__icon"></i>
    </a>
    <span class="work__button work__button-modal">
      More Info
      <i class="bx bx-right-arrow-alt work__icon"></i>
    </span>
  </div>
  <div class="work__footer">
   ${generateWorkFooterTechSymbols(technology)}
  </div>
  <div class="work__modal">
    <div class="work__modal-content">
      <i class="bx bx-x work__modal-close"></i>
      <h3 class="work__modal-title">
        ${title}
      </h3>
      <p class="work__modal-description">
        ${description}
      </p>
      <p class="work__modal-tech-info">
        Technology: ${technology.join(", ")}
      </p>
      <ul class="work__modal-list">
       ${generateFeatureList(features)}
      </ul>
    </div>
  </div>
  </div>`
  return workCardHtml;
}

function generateFeatureList(features = []) {
  let listItems = ''
  features.forEach(feature=>{
    const featureItem = ` <li class="work__modal-item">
      <i class="bx bx-check work__modal-icon"></i>
      <p class="work__modal-info">
        ${feature}
      </p>
    </li>`
    listItems+= featureItem;
  })
  return listItems

}

function generateWorkFooterTechSymbols(technologies=[]){
  let technologiesHtml = ''
  technologies.forEach(tech=>{
    let content = `<div class="work__footer-tech">
    <i class="${techIconLookup[tech.toLowerCase()]}"></i>
    <p>${tech}</p>
    </div>`
    technologiesHtml += content;
  })
  return technologiesHtml;
}

function loadupWorkContainer() {
  const workContainer = document.querySelector(".work__container");
  workContainer.innerHTML = ""
  portfolio.forEach(project => {
    const workCard = generateWorkCard(project);
    workContainer.innerHTML += workCard;
  })
}

loadupWorkContainer()




/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header');
  //When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i)
  })
})

modalClose.forEach((mc, i) => {
  mc.addEventListener("click", () => {
    modalViews.forEach(mv => {
      mv.classList.remove("active-modal");
    })
  })
})


/*=============== WORK MODAL ===============*/
const workModalViews = document.querySelectorAll(".work__modal"),
  workModalBtns = document.querySelectorAll(".work__button-modal"),
  workModalClose = document.querySelectorAll(".work__modal-close")

let workModal = function (modalClick) {
  workModalViews[modalClick].classList.add('active-modal')
}

workModalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    workModal(i)
  })
})

workModalClose.forEach((mc, i) => {
  mc.addEventListener("click", () => {
    workModalViews.forEach(mv => {
      mv.classList.remove("active-modal");
    })
  })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: '.work__card'
  },
  animation: {
    duration: 300
  }
});

/* Link active work */
const linkWork = document.querySelectorAll('.work__item');

function activeWork(e) {
  console.log("this", this)
  linkWork.forEach((l) => {
    l.classList.remove('active-work')
  });
  this.classList.add('active-work');
  // e.target.classList.add('active-work');
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
    // 1024: {
    //     slidesPerView: 5,
    //     spaceBetween: 50,
    // },
  }
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    // console.log("********", sectionsClass);
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
// const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, { delay: 700 })
sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: 'bottom' })


/*=============== EMAIL JS ===============*/
emailjs.init('njr5lxe7yQZHyiPaV')

window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    // console.log("submitted form");
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    // this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('service_8de57m5', 'template_u9cjkbk', '#contact-form', 'njr5lxe7yQZHyiPaV')
      .then(function () {
        console.log('SUCCESS!');
        document.getElementById('contact-form').reset();
      }, function (error) {
        console.log('FAILED...', error);
      });
  });
}


// window.addEventListener("DOMContentLoaded", loadupWorkContainer);