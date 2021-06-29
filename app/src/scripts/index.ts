// Header Menu
const headerButton: HTMLButtonElement = document.querySelector(
  ".header__button"
);
const headerLinkDf: HTMLDivElement = document.querySelector(".header__link__df");
const galleryMenu: HTMLDivElement = document.querySelector(".gallery__menu");
const headerMenu: HTMLUListElement = document.querySelector(".header__list");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

let galleryMenuOpened = false;
const galleryMenuToggle = () => {
  galleryMenuOpened = !galleryMenuOpened;
  galleryMenu.classList.toggle("active");
}

headerLinkDf.onclick = galleryMenuToggle;

headerButton.onclick = menuToggle;

window.onclick = (e: MouseEvent) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

window.onclick = (e: MouseEvent) => {
  if (
    galleryMenuOpened &&
    !e.composedPath().includes(headerLinkDf)
  )
  galleryMenuToggle();
};

$('.slider__inner ').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  speed: 500,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '20px',
      }
    },
  ]
});

