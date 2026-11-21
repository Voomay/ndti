/**
 * NDti & IanArt - Hero Section 30FPS Frame Canvas Scroller
 * 
 * Features:
 * 1. 30 Frames Per Second buttery-smooth canvas scrubbing (300 frames total).
 * 2. Instant zero-lag rendering without HTML5 video decoder stalls or seek stutter.
 * 3. Progressive chunked preloading with intelligent nearest-frame fallback.
 * 4. High-DPI canvas auto-resize with aspect-ratio cover math.
 * 5. Pinned hero stage until video ends (100%), then smoothly continues to About Us.
 * 6. Smooth requestAnimationFrame lerping and HUD metrics updates.
 */

(function () {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroScroller);
  } else {
    initHeroScroller();
  }

  function initHeroScroller() {
    const track = document.getElementById('section-intro');
    const canvas = document.getElementById('hero-canvas');
    if (!track || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const progressBar = document.getElementById('hero-progress-fill');
    const chapterNum = document.getElementById('hero-chapter-num');
    const chapterTime = document.getElementById('hero-chapter-time');
    const scrollHint = document.getElementById('hero-scroll-hint');
    const skipBtn = document.getElementById('hero-skip-btn');
    const playPauseBtn = document.getElementById('hero-playpause-btn');
    const playPauseIcon = document.getElementById('hero-playpause-icon');
    const heroOverlay = document.querySelector('.hero-scrolly-overlay');
    const hotspots = Array.from(document.querySelectorAll('.hero-hotspot'));

    const TOTAL_FRAMES = 300; // 10.0 seconds at 30 fps
    const FPS = 30;
    const DURATION = TOTAL_FRAMES / FPS; // 10.0 seconds

    // Frame cache: array of HTMLImageElement
    const frameImages = new Array(TOTAL_FRAMES);
    const frameLoaded = new Array(TOTAL_FRAMES).fill(false);

    let lastDrawnIndex = -1;
    let targetProgress = 0.0;
    let currentProgress = 0.0;
    let isLoopRunning = false;
    let autoPlaying = false;
    let autoScrollRaf = null;

    // Helper: format index as 4-digit filename
    function getFrameUrl(index) {
      const num = String(index + 1).padStart(4, '0');
      return `images/hero-frames/frame_${num}.jpg`;
    }

    // Helper: format seconds as MM:SS
    function formatTime(seconds) {
      const s = Math.max(0, Math.floor(seconds));
      const m = Math.floor(s / 60);
      const remSec = s % 60;
      return `0${m}:${remSec < 10 ? '0' : ''}${remSec}`;
    }

    // Find nearest loaded frame if current target frame isn't loaded yet
    function getNearestLoadedFrame(targetIdx) {
      if (frameLoaded[targetIdx]) return frameImages[targetIdx];

      // Search radiating outwards
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = targetIdx - offset;
        if (prev >= 0 && frameLoaded[prev]) return frameImages[prev];
        const next = targetIdx + offset;
        if (next < TOTAL_FRAMES && frameLoaded[next]) return frameImages[next];
      }
      return null;
    }

    // Draw an image to canvas with cover sizing and mobile zoom-out framing
    function drawImageCover(img) {
      if (!img || !img.naturalWidth) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      const hRatio = cw / iw;
      const vRatio = ch / ih;
      let ratio = Math.max(hRatio, vRatio);

      // On mobile & portrait screens (aspect ratio < 0.85):
      // Pure vertical cover cuts off ~74% of the widescreen video width, making it feel
      // overly zoomed in. We zoom out on portrait mobile to reveal much more of the kitchen room,
      // island width, cabinetry, and architectural woodwork.
      const isPortrait = (cw / ch) < 0.85;
      if (isPortrait) {
        const mobileRatio = Math.max(hRatio, vRatio * 0.80);
        ratio = mobileRatio;
      }

      const drawW = iw * ratio;
      const drawH = ih * ratio;
      const drawX = (cw - drawW) / 2;
      const drawY = (ch - drawH) / 2;

      // Always clear / fill canvas with seamless luxury background
      ctx.fillStyle = '#0e0d0b';
      ctx.fillRect(0, 0, cw, ch);

      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    }

    // Render frame for a given progress (0.0 to 1.0)
    function renderFrame(prog) {
      const clampedProg = Math.max(0, Math.min(1, prog));
      const targetIdx = Math.min(TOTAL_FRAMES - 1, Math.floor(clampedProg * (TOTAL_FRAMES - 1)));

      const img = getNearestLoadedFrame(targetIdx);
      if (img) {
        drawImageCover(img);
        lastDrawnIndex = targetIdx;
      }

      // Smoothly fade out the hero text overlay as user scrolls through the walkthrough video
      if (heroOverlay) {
        if (clampedProg <= 0.01) {
          heroOverlay.style.opacity = '1';
          heroOverlay.style.transform = 'translateY(0)';
          heroOverlay.style.pointerEvents = 'auto';
        } else if (clampedProg < 0.16) {
          const fadeProg = clampedProg / 0.14;
          const op = Math.max(0, 1 - fadeProg);
          heroOverlay.style.opacity = op.toFixed(3);
          heroOverlay.style.transform = `translateY(-${(fadeProg * 20).toFixed(1)}px)`;
          heroOverlay.style.pointerEvents = op < 0.1 ? 'none' : 'auto';
        } else {
          heroOverlay.style.opacity = '0';
          heroOverlay.style.transform = 'translateY(-20px)';
          heroOverlay.style.pointerEvents = 'none';
        }
      }

      // Activate/deactivate scroll-triggered kitchen feature hotspots
      if (hotspots.length) {
        for (let i = 0; i < hotspots.length; i++) {
          const spot = hotspots[i];
          const start = parseFloat(spot.getAttribute('data-start') || '0');
          const end = parseFloat(spot.getAttribute('data-end') || '1');
          if (clampedProg >= start && clampedProg <= end) {
            spot.classList.add('is-active');
          } else {
            spot.classList.remove('is-active');
          }
        }
      }

      // Update HUD metrics
      const currentSeconds = clampedProg * DURATION;

      if (progressBar) {
        progressBar.style.width = `${(clampedProg * 100).toFixed(1)}%`;
      }

      if (scrollHint) {
        if (clampedProg > 0.04) {
          scrollHint.classList.add('scrolled-past');
        } else {
          scrollHint.classList.remove('scrolled-past');
        }
      }

      if (chapterTime) {
        chapterTime.textContent = `${formatTime(currentSeconds)} / ${formatTime(DURATION)}`;
      }

      if (chapterNum) {
        const pct = Math.min(100, Math.round(clampedProg * 100));
        chapterNum.textContent = `${pct}% Walkthrough`;
      }
    }

    // Canvas resize handler (high-DPI aware)
    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const displayW = Math.round(rect.width || window.innerWidth);
      const displayH = Math.round(rect.height || window.innerHeight);

      if (canvas.width !== displayW * dpr || canvas.height !== displayH * dpr) {
        canvas.width = displayW * dpr;
        canvas.height = displayH * dpr;
      }

      renderFrame(currentProgress);
    }

    // Preload frames progressively
    function preloadFrames() {
      // 1. Load initial frame immediately
      const firstImg = new Image();
      firstImg.src = getFrameUrl(0);
      firstImg.onload = function () {
        frameImages[0] = firstImg;
        frameLoaded[0] = true;
        resizeCanvas();
        renderFrame(0);
      };

      // 2. Progressive preloading in waves
      let nextIndexToLoad = 1;
      const CONCURRENCY = 6;

      function loadNextBatch() {
        if (nextIndexToLoad >= TOTAL_FRAMES) return;
        const currentBatchEnd = Math.min(TOTAL_FRAMES, nextIndexToLoad + CONCURRENCY);

        for (let i = nextIndexToLoad; i < currentBatchEnd; i++) {
          (function (idx) {
            const img = new Image();
            img.src = getFrameUrl(idx);
            img.onload = function () {
              frameImages[idx] = img;
              frameLoaded[idx] = true;
              // If user is currently looking at this frame, render it
              const targetIdx = Math.min(TOTAL_FRAMES - 1, Math.floor(currentProgress * (TOTAL_FRAMES - 1)));
              if (Math.abs(targetIdx - idx) <= 1) {
                renderFrame(currentProgress);
              }
            };
          })(i);
        }

        nextIndexToLoad = currentBatchEnd;
        if (nextIndexToLoad < TOTAL_FRAMES) {
          // Schedule next wave with a tiny tick to keep main thread completely unblocked
          setTimeout(loadNextBatch, 25);
        }
      }

      // Start preloading waves after page load (or 1.2s fallback) so initial page paint is instant
      let batchStarted = false;
      function startBatchPreload() {
        if (batchStarted) return;
        batchStarted = true;
        loadNextBatch();
      }
      if (document.readyState === 'complete') {
        setTimeout(startBatchPreload, 100);
      } else {
        window.addEventListener('load', () => setTimeout(startBatchPreload, 100), { once: true });
        setTimeout(startBatchPreload, 1200);
      }
    }

    // Calculate current scroll progress through the hero track (0.0 to 1.0)
    function getScrollProgress() {
      const rect = track.getBoundingClientRect();
      const maxScroll = track.offsetHeight - window.innerHeight;
      if (maxScroll <= 0) return 0;
      const scrolled = -rect.top;
      return Math.max(0, Math.min(1, scrolled / maxScroll));
    }

    // Smooth RAF Lerp loop for fluid 60fps scrubbing
    function tickLoop() {
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.0005) {
        currentProgress += diff * 0.28; // Responsive silky catch-up
        renderFrame(currentProgress);
        requestAnimationFrame(tickLoop);
      } else {
        currentProgress = targetProgress;
        renderFrame(currentProgress);
        isLoopRunning = false;
      }
    }

    function scheduleUpdate() {
      const rect = track.getBoundingClientRect();
      // Optimization: skip if hero track is far out of view
      if (rect.bottom < -100 || rect.top > window.innerHeight + 100) {
        return;
      }

      targetProgress = getScrollProgress();

      if (!isLoopRunning) {
        isLoopRunning = true;
        requestAnimationFrame(tickLoop);
      }
    }

    // Event Listeners
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', () => {
      resizeCanvas();
      scheduleUpdate();
    });

    // Skip to About Us smooth scroll
    function scrollToAbout(e) {
      if (e) e.preventDefault();
      const aboutSection = document.getElementById('section-about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        const targetY = track.offsetTop + track.offsetHeight;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    }

    if (skipBtn) {
      skipBtn.addEventListener('click', scrollToAbout);
    }

    // Auto Walkthrough Play / Pause toggle
    function stopAutoPlay() {
      autoPlaying = false;
      if (autoScrollRaf) {
        cancelAnimationFrame(autoScrollRaf);
        autoScrollRaf = null;
      }
      if (playPauseIcon) playPauseIcon.className = 'fa fa-play';
      if (playPauseBtn) playPauseBtn.setAttribute('title', 'Play Walkthrough');
    }

    function startAutoPlay() {
      autoPlaying = true;
      if (playPauseIcon) playPauseIcon.className = 'fa fa-pause';
      if (playPauseBtn) playPauseBtn.setAttribute('title', 'Pause Walkthrough');

      const rect = track.getBoundingClientRect();
      const trackTop = window.pageYOffset + rect.top;
      const maxScroll = track.offsetHeight - window.innerHeight;
      const targetY = trackTop + maxScroll;

      // If at end, loop back to top
      if (window.pageYOffset >= targetY - 20) {
        window.scrollTo({ top: trackTop, behavior: 'auto' });
      }

      let lastTime = performance.now();

      function autoScrollLoop(now) {
        if (!autoPlaying) return;
        const dt = (now - lastTime) / 1000;
        lastTime = now;

        const curProgress = getScrollProgress();
        if (curProgress >= 0.999) {
          stopAutoPlay();
          return;
        }

        const scrollStep = (maxScroll / DURATION) * dt;
        window.scrollBy(0, scrollStep);

        autoScrollRaf = requestAnimationFrame(autoScrollLoop);
      }

      autoScrollRaf = requestAnimationFrame(autoScrollLoop);
    }

    if (playPauseBtn) {
      playPauseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (autoPlaying) {
          stopAutoPlay();
        } else {
          startAutoPlay();
        }
      });
    }

    window.addEventListener('wheel', () => {
      if (autoPlaying) stopAutoPlay();
    }, { passive: true });

    window.addEventListener('touchstart', () => {
      if (autoPlaying) stopAutoPlay();
    }, { passive: true });

    // Initialize canvas and preloader
    preloadFrames();
    scheduleUpdate();
  }
})();
