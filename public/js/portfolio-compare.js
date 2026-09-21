// Portfolio 3D Render vs Finished Reality Interactive Comparison
document.addEventListener('DOMContentLoaded', function() {
  const compareCards = document.querySelectorAll('.portfolio-compare-wrapper');

  compareCards.forEach(card => {
    const overlay = card.querySelector('.compare-overlay');
    const divider = card.querySelector('.compare-divider');
    const pills = card.querySelectorAll('.compare-pill-btn');
    let isHovering = false;

    // Set initial position: 100% Render visible (or full render)
    setSplit(100, false);

    function setSplit(percentage, animate = false) {
      percentage = Math.max(0, Math.min(percentage, 100));
      if (animate) {
        card.classList.add('is-animating');
        setTimeout(() => card.classList.remove('is-animating'), 350);
      }
      card.style.setProperty('--split', percentage + '%');
      if (overlay) {
        overlay.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        overlay.style.webkitClipPath = `inset(0 ${100 - percentage}% 0 0)`;
      }
      if (divider) divider.style.left = percentage + '%';

      // Update pill states
      pills.forEach(pill => {
        const type = pill.getAttribute('data-type');
        if (type === 'render' && percentage >= 50) {
          pill.classList.add('active');
        } else if (type === 'reality' && percentage < 50) {
          pill.classList.add('active');
        } else {
          pill.classList.remove('active');
        }
      });
    }

    // Hover & Mousemove interaction
    card.addEventListener('mouseenter', function() {
      isHovering = true;
    });

    card.addEventListener('mousemove', function(e) {
      if (!isHovering) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const pct = (x / rect.width) * 100;
      setSplit(pct, false);
    });

    card.addEventListener('mouseleave', function() {
      isHovering = false;
      // Smoothly return to 100% Render (or active selected view)
      const activePill = card.querySelector('.compare-pill-btn.active');
      const targetPct = activePill && activePill.getAttribute('data-type') === 'reality' ? 0 : 100;
      setSplit(targetPct, true);
    });

    // Click on toggle pills
    pills.forEach(pill => {
      pill.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const type = this.getAttribute('data-type');
        pills.forEach(p => p.classList.remove('active'));
        this.classList.add('active');

        if (type === 'render') {
          setSplit(100, true);
        } else {
          setSplit(0, true);
        }
      });
    });

    // Touch support for mobile devices
    let touchStartX = 0;
    card.addEventListener('touchstart', function(e) {
      if (e.touches && e.touches[0]) {
        touchStartX = e.touches[0].clientX;
      }
    }, { passive: true });

    card.addEventListener('touchmove', function(e) {
      if (e.touches && e.touches[0]) {
        const rect = card.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        if (x >= 0 && x <= rect.width) {
          const pct = (x / rect.width) * 100;
          setSplit(pct, false);
        }
      }
    }, { passive: true });
  });
});
