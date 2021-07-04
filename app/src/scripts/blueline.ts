let blueline1 = document.querySelector('.blueline-1');
let blueline2 = document.querySelector('.blueline-2');
let blueline3 = document.querySelector('.blueline-3');
let blueline4 = document.querySelector('.blueline-4');
let blueline5 = document.querySelector('.blueline-5');
let blueline6 = document.querySelector('.blueline-6');
let bluelineDynamic = document.querySelector('.blueline__dynamic');


bluelineDynamic.innerHTML = `
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          PL100
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 0.75 до 12 м3/ч</p>
          <p>• давление до 12 бар</p>
          <p>• макс. число оборотов 800</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          PL200
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 0.75 до 12 м3/ч</p>
          <p>• давление до 12 бар</p>
          <p>• макс. число оборотов 800</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          PL300
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 0.75 до 12 м3/ч</p>
          <p>• давление до 12 бар</p>
          <p>• макс. число оборотов 800</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
          PL400
        </button>
      </h2>
      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 10.50 до 150 м3/ч</p>
          <p>• давление до 4 бар</p>
          <p>• макс. число оборотов 700</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
  </div>
  `



blueline1.addEventListener('click', ()=>{
  blueline1.classList.add('current');
  blueline2.classList.remove('current');
  blueline3.classList.remove('current');
  blueline4.classList.remove('current');
  blueline5.classList.remove('current');
  blueline6.classList.remove('current');
  bluelineDynamic.innerHTML = `
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          AL25
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 0.75 до 12 м3/ч</p>
          <p>• давление до 12 бар</p>
          <p>• макс. число оборотов 800</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          AL50
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 0.75 до 12 м3/ч</p>
          <p>• давление до 12 бар</p>
          <p>• макс. число оборотов 800</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          AL75
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 0.75 до 12 м3/ч</p>
          <p>• давление до 12 бар</p>
          <p>• макс. число оборотов 800</p>
        <p>• температура до 200°С</p>
    </div>
      </div>
    </div>
  </div>
  `
})
blueline2.addEventListener('click', ()=>{
  blueline2.classList.add('current');
  blueline1.classList.remove('current');
  blueline3.classList.remove('current');
  blueline4.classList.remove('current');
  blueline5.classList.remove('current');
  blueline6.classList.remove('current');
  bluelineDynamic.innerHTML = `
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          PL100
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 0.75 до 12 м3/ч</p>
          <p>• давление до 12 бар</p>
          <p>• макс. число оборотов 800</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          PL200
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 0.75 до 12 м3/ч</p>
          <p>• давление до 12 бар</p>
          <p>• макс. число оборотов 800</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          PL300
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 0.75 до 12 м3/ч</p>
          <p>• давление до 12 бар</p>
          <p>• макс. число оборотов 800</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
          PL400
        </button>
      </h2>
      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 10.50 до 150 м3/ч</p>
          <p>• давление до 4 бар</p>
          <p>• макс. число оборотов 700</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
  </div>
  `
})
blueline3.addEventListener('click', ()=>{
  blueline3.classList.add('current');
  blueline2.classList.remove('current');
  blueline1.classList.remove('current');
  blueline4.classList.remove('current');
  blueline5.classList.remove('current');
  blueline6.classList.remove('current');
  bluelineDynamic.innerHTML = `
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          CL260
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 7.8 до 94 м3/ч</p>
          <p>• давление до 12 бар</p>
          <p>• макс. число оборотов 600</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          CL390
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 12 до 140 м3/ч</p>
          <p>• давление до 8 бар</p>
          <p>• макс. число оборотов 600</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          CL520
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 15.50 до 190 м3/ч</p>
          <p>• давление до 4 бар</p>
          <p>• макс. число оборотов 600</p>
        <p>• температура до 200°С</p>
    </div>
      </div>
    </div>
  </div>
  `
})
blueline4.addEventListener('click', ()=>{
  blueline4.classList.add('current');
  blueline2.classList.remove('current');
  blueline3.classList.remove('current');
  blueline1.classList.remove('current');
  blueline5.classList.remove('current');
  blueline6.classList.remove('current');
  bluelineDynamic.innerHTML = `
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          FL518
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 17 до 205 м3/ч</p>
          <p>• давление до 12 бар</p>
          <p>• макс. число оборотов 600</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          FL776
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 25 до 310 м3/ч</p>
          <p>• давление до 4 бар</p>
          <p>• макс. число оборотов 600</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          FL1036
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 33 до 410 м3/ч</p>
          <p>• давление до 4 бар</p>
          <p>• макс. число оборотов 800</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
  </div>
  `
})
blueline5.addEventListener('click', ()=>{
  blueline5.classList.add('current');
  blueline2.classList.remove('current');
  blueline3.classList.remove('current');
  blueline4.classList.remove('current');
  blueline1.classList.remove('current');
  blueline6.classList.remove('current');
  bluelineDynamic.innerHTML = `
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          EL1000
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 0.75 до 12 м3/ч</p>
          <p>• давление до 12 бар</p>
          <p>• макс. число оборотов 800</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          EL1550
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 45 до 560 м3/ч</p>
          <p>• давление до 5 бар</p>
          <p>• макс. число оборотов 600</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          EL2250
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 65 до 810 м3/ч</p>
          <p>• давление до 3 бар</p>
          <p>• макс. число оборотов 600</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingf">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsef" aria-expanded="false" aria-controls="collapsef">
          EL3050
        </button>
      </h2>
      <div id="collapsef" class="accordion-collapse collapse" aria-labelledby="headingf" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 92 до 1100 м3/ч</p>
          <p>• давление до 2 бар</p>
          <p>• макс. число оборотов 800</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
  </div>
  `
})
blueline6.addEventListener('click', ()=>{
  blueline6.classList.add('current');
  blueline2.classList.remove('current');
  blueline3.classList.remove('current');
  blueline4.classList.remove('current');
  blueline5.classList.remove('current');
  blueline1.classList.remove('current');
  bluelineDynamic.innerHTML = `
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          XL1760
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 52 до 635 м3/ч</p>
          <p>• давление до 10 бар</p>
          <p>• макс. число оборотов 500</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          XL2650
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 80 до 995 м3/ч</p>
          <p>• давление до 6 бар</p>
          <p>• макс. число оборотов 600</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          XL3530
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 105 до 1050 м3/ч</p>
          <p>• давление до 4 бар</p>
          <p>• макс. число оборотов 500</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingf">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsef" aria-expanded="false" aria-controls="collapsef">
          XL5350
        </button>
      </h2>
      <div id="collapsef" class="accordion-collapse collapse" aria-labelledby="headingf" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>• производительность от 160 до 1600 м3/ч</p>
          <p>• давление до 2 бар</p>
          <p>• макс. число оборотов 500</p>
          <p>• температура до 200°С</p>
        </div>
      </div>
    </div>
  </div>
  `
})