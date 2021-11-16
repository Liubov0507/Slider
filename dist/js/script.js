//Слайдер
//Индекс слайда по умолчанию
let slideIndex = 1;
showSlides(slideIndex);

// Функция увеличивает индекс на 1, показывает следующй слайд
function plusSlide() {
    showSlides(slideIndex += 1);
}

// Функция уменьшяет индекс на 1, показывает предыдущий слайд
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

// Устанавливает текущий слайд
function currentSlide(n) {
    showSlides(slideIndex = n);
}


//Основная функция слайдера: стрелки и точки
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("completed_img");
    let dots = document.getElementsByClassName("completed_dots_item");
    let nav = document.getElementsByClassName("completed_nav_item");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
  }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < nav.length; i++) {
      nav[i].className = nav[i].className.replace(" active", "");
  }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    nav[slideIndex - 1].className += " active";

    //Переменные для табов сверху
    let tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
    let tabsContentElems = document.querySelectorAll('[data-tabs-field]');

    //Функция для табов 
    for(let btn of tabsHandlerElems) {
      btn.addEventListener('click', () => {
          tabsHandlerElems.forEach(item => {
              item.classList.remove('active');
          });
          btn.classList.add('active');
    
          tabsContentElems.forEach(content => {
              if(content.dataset.tabsField === btn.dataset.tabsHandler) {
                  content.classList.remove('hidden');
              } else {
                  content.classList.add('hidden');
              }
          });
      });
    }
}