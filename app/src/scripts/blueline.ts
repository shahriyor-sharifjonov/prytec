let blueline1 = document.querySelector('.blueline-1');
let blueline2 = document.querySelector('.blueline-2');
let blueline3 = document.querySelector('.blueline-3');
let blueline4 = document.querySelector('.blueline-4');
let blueline5 = document.querySelector('.blueline-5');
let blueline6 = document.querySelector('.blueline-6');

blueline1.addEventListener('click', ()=>{
  blueline1.classList.add('current');
  blueline2.classList.remove('current');
  blueline3.classList.remove('current');
  blueline4.classList.remove('current');
  blueline5.classList.remove('current');
  blueline6.classList.remove('current');
})
blueline2.addEventListener('click', ()=>{
  blueline2.classList.add('current');
  blueline1.classList.remove('current');
  blueline3.classList.remove('current');
  blueline4.classList.remove('current');
  blueline5.classList.remove('current');
  blueline6.classList.remove('current');
})
blueline3.addEventListener('click', ()=>{
  blueline3.classList.add('current');
  blueline2.classList.remove('current');
  blueline1.classList.remove('current');
  blueline4.classList.remove('current');
  blueline5.classList.remove('current');
  blueline6.classList.remove('current');
})
blueline4.addEventListener('click', ()=>{
  blueline4.classList.add('current');
  blueline2.classList.remove('current');
  blueline3.classList.remove('current');
  blueline1.classList.remove('current');
  blueline5.classList.remove('current');
  blueline6.classList.remove('current');
})
blueline5.addEventListener('click', ()=>{
  blueline5.classList.add('current');
  blueline2.classList.remove('current');
  blueline3.classList.remove('current');
  blueline4.classList.remove('current');
  blueline1.classList.remove('current');
  blueline6.classList.remove('current');
})
blueline6.addEventListener('click', ()=>{
  blueline6.classList.add('current');
  blueline2.classList.remove('current');
  blueline3.classList.remove('current');
  blueline4.classList.remove('current');
  blueline5.classList.remove('current');
  blueline1.classList.remove('current');
})