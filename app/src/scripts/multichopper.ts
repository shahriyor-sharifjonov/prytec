let multi1 = document.querySelector('.multichopper__first');
let multi2 = document.querySelector('.multichopper__second');
let dynamicImg = document.querySelector('.multichopper__dynamic__item__img');
dynamicImg.innerHTML = "<img src='images/multichopper-dynamic-1.webp' alt='' class='multichopper__dynamic__item__img'></img>";

multi1.addEventListener('click', ()=>{
  multi1.classList.add('current');
  multi2.classList.remove('current');
  dynamicImg.innerHTML = "<img src='images/multichopper-dynamic-1.webp' alt='' class='multichopper__dynamic__item__img'></img>";
})
multi2.addEventListener('click', ()=>{
  multi2.classList.add('current');
  multi1.classList.remove('current');
  dynamicImg.innerHTML = "<img src='images/multichopper-dynamic-2.webp' alt='' class='multichopper__dynamic__item__img'></img>";
})