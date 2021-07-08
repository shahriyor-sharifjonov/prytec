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
  autoplay: true,
  autoplaySpeed: 2000,
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

let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let fourth = document.querySelector('.fourth');
let firstDownload = document.querySelector('.first__download');
let secondDownload = document.querySelector('.second__download');
let thirdDownload = document.querySelector('.third__download');
let fourthDownload = document.querySelector('.fourth__download');
let cartTitle :HTMLTitleElement = document.querySelector('.finder__cart__title');

first.addEventListener('click', ()=>{
  first.classList.add('current');
  second.classList.remove('current');
  third.classList.remove('current');
  fourth.classList.remove('current');
  firstDownload.classList.add('current');
  secondDownload.classList.remove('current');
  thirdDownload.classList.remove('current');
  fourthDownload.classList.remove('current');
  cartTitle.innerText = "ПРИМЕРЫ ЭКСПЛУАТАЦИИ MEX И LEX";
});
second.addEventListener('click', ()=>{
  second.classList.add('current');
  first.classList.remove('current');
  third.classList.remove('current');
  fourth.classList.remove('current');
  secondDownload.classList.add('current');
  firstDownload.classList.remove('current');
  thirdDownload.classList.remove('current');
  fourthDownload.classList.remove('current');
  cartTitle.innerText = "ПРИМЕРЫ ЭКСПЛУАТАЦИИ CDS И NP";
});
third.addEventListener('click', ()=>{
  third.classList.add('current');
  second.classList.remove('current');
  first.classList.remove('current');
  fourth.classList.remove('current');
  thirdDownload.classList.add('current');
  secondDownload.classList.remove('current');
  firstDownload.classList.remove('current');
  fourthDownload.classList.remove('current');
  cartTitle.innerText = "ПРИМЕРЫ ЭКСПЛУАТАЦИИ DEX";
});
fourth.addEventListener('click', ()=>{
  fourth.classList.add('current');
  second.classList.remove('current');
  third.classList.remove('current');
  first.classList.remove('current');
  fourthDownload.classList.add('current');
  secondDownload.classList.remove('current');
  thirdDownload.classList.remove('current');
  firstDownload.classList.remove('current');
  cartTitle.innerText = "ПРИМЕРЫ ЭКСПЛУАТАЦИИ VPM";
});


