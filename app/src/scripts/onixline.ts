let onixline1 = document.querySelector('.onixline-1');
let onixline2 = document.querySelector('.onixline-2');
let onixline3 = document.querySelector('.onixline-3');
let onixline4 = document.querySelector('.onixline-4');

onixline1.addEventListener('click', ()=>{
  onixline1.classList.add('current');
  onixline2.classList.remove('current');
  onixline3.classList.remove('current');
  onixline4.classList.remove('current');
})
onixline2.addEventListener('click', ()=>{
  onixline2.classList.add('current');
  onixline1.classList.remove('current');
  onixline3.classList.remove('current');
  onixline4.classList.remove('current');
})
onixline3.addEventListener('click', ()=>{
  onixline3.classList.add('current');
  onixline2.classList.remove('current');
  onixline1.classList.remove('current');
  onixline4.classList.remove('current');
})
onixline4.addEventListener('click', ()=>{
  onixline4.classList.add('current');
  onixline2.classList.remove('current');
  onixline3.classList.remove('current');
  onixline1.classList.remove('current');
})