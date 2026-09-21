/**
 * Hero Slogan Rotator for NDti & IanArt
 * Cycles through captivating headline slogans with smooth transitions
 */
document.addEventListener('DOMContentLoaded', function () {
  var slides = document.querySelectorAll('.hero-slogan-slide');
  if (!slides || slides.length <= 1) return;

  var currentIndex = 0;
  var intervalTime = 3200; // 3.2 seconds per slide

  function showSlide(index) {
    slides.forEach(function (slide, idx) {
      if (idx === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  setInterval(function () {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, intervalTime);

  showSlide(0);
});
