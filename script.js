const container = document.querySelector('.conatiner-for-cards');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  slides.style.transform = `translateX(-${currentSlide * 220}px)`;
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  slides.style.transform = `translateX(-${currentSlide * 220}px)`;
}


setInterval(() => {
  nextSlide();
}, 2000);
