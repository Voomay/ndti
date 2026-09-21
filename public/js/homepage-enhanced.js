/**
 * NDti & IanArt Homepage Enhanced Interactions:
 * 1. About Us 3-Image Showcase Carousel (slow, refined crossfade with manual navigation)
 * 2. Services Horizontal Scroll-Driven Track (vertical scroll pins & translates cards)
 * 3. FAQ Accordion (crisp white luxury theme)
 */

document.addEventListener('DOMContentLoaded', () => {
  initAboutShowcase();
  initServicesHorizontalScroll();
  initFaqAccordion();
});

/* ==========================================================================
   0. ABOUT US 3-IMAGE LUXURY SHOWCASE CAROUSEL
   ========================================================================== */
function initAboutShowcase() {
  const container = document.getElementById('about-showcase-box');
  if (!container) return;

  const slides = container.querySelectorAll('.about-showcase-slide');
  const indicators = container.querySelectorAll('.about-indicator-btn');
  const counterCurrent = document.getElementById('about-counter-current');
  const btnPrev = document.getElementById('about-btn-prev');
  const btnNext = document.getElementById('about-btn-next');

  if (!slides.length) return;

  let currentIdx = 0;
  let timer = null;
  let isPaused = false;

  function showSlide(idx) {
    currentIdx = (idx + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      if (i === currentIdx) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    indicators.forEach((ind, i) => {
      if (i === currentIdx) {
        ind.classList.add('active');
      } else {
        ind.classList.remove('active');
      }
    });

    if (counterCurrent) {
      counterCurrent.textContent = `0${currentIdx + 1}`;
    }
  }

  function nextSlide() {
    showSlide(currentIdx + 1);
  }

  function prevSlide() {
    showSlide(currentIdx - 1);
  }

  function startAutoCycle() {
    stopAutoCycle();
    timer = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 5500);
  }

  function stopAutoCycle() {
    if (timer) clearInterval(timer);
  }

  container.addEventListener('mouseenter', () => {
    isPaused = true;
  });

  container.addEventListener('mouseleave', () => {
    isPaused = false;
  });

  if (btnPrev) {
    btnPrev.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      startAutoCycle();
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      startAutoCycle();
    });
  }

  indicators.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showSlide(i);
      startAutoCycle();
    });
  });

  startAutoCycle();
}


/* ==========================================================================
   1. OUR SERVICES HORIZONTAL TRACK SCROLL-DRIVEN PINNING
   ========================================================================== */
function initServicesHorizontalScroll() {
  const section = document.getElementById('services-scroll-section');
  if (!section) return;

  const stickyStage = section.querySelector('.services-pin-sticky');
  const track = section.querySelector('.services-horizontal-track');
  const progressBar = section.querySelector('.services-scroll-progress-fill');
  const btnPrev = section.querySelector('.service-nav-prev');
  const btnNext = section.querySelector('.service-nav-next');

  if (!track) return;

  let currentTranslate = 0;
  let targetTranslate = 0;
  let isTrackLoopRunning = false;

  function trackLoop() {
    const diff = targetTranslate - currentTranslate;
    if (Math.abs(diff) > 0.5) {
      currentTranslate += diff * 0.2;
      track.style.transform = `translateX(-${currentTranslate}px)`;
      requestAnimationFrame(trackLoop);
    } else {
      currentTranslate = targetTranslate;
      track.style.transform = `translateX(-${currentTranslate}px)`;
      isTrackLoopRunning = false;
    }
  }

  function updateTrackPosition() {
    if (window.innerWidth < 992) {
      track.style.transform = 'none';
      return;
    }

    const rect = section.getBoundingClientRect();
    const totalScrollable = section.offsetHeight - window.innerHeight;

    if (totalScrollable <= 0) return;

    // Scrolled amount inside section
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

    // Calculate maximum translation distance
    const trackWidth = track.scrollWidth;
    const viewportWidth = window.innerWidth;
    const maxTranslate = Math.max(0, trackWidth - viewportWidth + 80);

    targetTranslate = progress * maxTranslate;

    if (!isTrackLoopRunning) {
      isTrackLoopRunning = true;
      requestAnimationFrame(trackLoop);
    }

    // Update progress bar
    if (progressBar) {
      progressBar.style.width = `${Math.max(8, progress * 100)}%`;
    }
  }

  function onScroll() {
    updateTrackPosition();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateTrackPosition);
  updateTrackPosition();

  // Interactive accordion hover expansion (hovered card expands, siblings shrink)
  const cardItems = track.querySelectorAll('.service-card-item');
  let hoverResetTimer = null;

  cardItems.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      if (window.innerWidth < 992) return;
      clearTimeout(hoverResetTimer);
      cardItems.forEach((c) => {
        if (c === card) {
          c.classList.add('is-expanded');
          c.classList.remove('is-shrunk');
        } else {
          c.classList.add('is-shrunk');
          c.classList.remove('is-expanded');
        }
      });
    });
  });

  track.addEventListener('mouseleave', () => {
    if (window.innerWidth < 992) return;
    clearTimeout(hoverResetTimer);
    hoverResetTimer = setTimeout(() => {
      cardItems.forEach((c) => {
        c.classList.remove('is-expanded', 'is-shrunk');
      });
    }, 120);
  });

  // Navigation button handlers (prev / next)
  if (btnPrev) {
    btnPrev.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.innerWidth < 992) {
        const container = section.querySelector('.services-track-container');
        if (container) container.scrollBy({ left: -320, behavior: 'smooth' });
        return;
      }
      const rect = section.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const step = window.innerHeight * 0.45;
      window.scrollTo({
        top: Math.max(0, scrollTop + rect.top - step),
        behavior: 'smooth',
      });
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.innerWidth < 992) {
        const container = section.querySelector('.services-track-container');
        if (container) container.scrollBy({ left: 320, behavior: 'smooth' });
        return;
      }
      const rect = section.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const step = window.innerHeight * 0.45;
      window.scrollTo({
        top: scrollTop + rect.top + step,
        behavior: 'smooth',
      });
    });
  }
}

/* ==========================================================================
   2. FAQ ACCORDION INTERACTION (Crisp White Luxury Theme)
   ========================================================================== */
function initFaqAccordion() {
  const faqContainer = document.getElementById('faq-white-container');
  if (!faqContainer) return;

  const items = faqContainer.querySelectorAll('.faq-lux-card');

  items.forEach((item) => {
    const header = item.querySelector('.faq-lux-header');
    const content = item.querySelector('.faq-lux-body');

    if (!header || !content) return;

    header.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = item.classList.contains('active');

      items.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
          const otherBody = other.querySelector('.faq-lux-body');
          if (otherBody) otherBody.style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 30 + 'px';
      }
    });
  });

  // Open first item by default
  const firstItem = items[0];
  if (firstItem) {
    firstItem.classList.add('active');
    const firstBody = firstItem.querySelector('.faq-lux-body');
    if (firstBody) {
      firstBody.style.maxHeight = firstBody.scrollHeight + 30 + 'px';
    }
  }
}
