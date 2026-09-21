/**
 * NDti & IanArt - Request A Quote Modal Controller
 * Automatically binds to all "Get A Quote" header and page CTA buttons.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', initQuoteModal);

  function initQuoteModal() {
    if (document.getElementById('quote-modal-overlay')) return;

    // Inject Quote Modal HTML
    const modalHTML = `
      <div id="quote-modal-overlay" class="quote-modal-overlay">
        <div class="quote-modal-card">
          <button type="button" class="quote-modal-close" id="quote-modal-close" aria-label="Close Quote Modal">&times;</button>
          
          <div id="quote-form-wrapper">
            <span class="subtitle mb-2" style="color: #805231; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; font-size: 11.5px; display: block;">NDti &amp; IanArt</span>
            <h3 class="quote-modal-title">Request a Quotation</h3>
            <p class="quote-modal-subtitle">Tell us about your upcoming project and our artisan joinery team will get back to you within 24 hours.</p>

            <form id="quote-modal-form" class="quote-modal-form">
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="field-set">
                    <label class="fs-13 mb-1 fw-bold" style="color: #38302a;">Your Name *</label>
                    <input type="text" name="name" class="form-control" placeholder="e.g. Sarah van der Merwe" required />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field-set">
                    <label class="fs-13 mb-1 fw-bold" style="color: #38302a;">Email Address *</label>
                    <input type="email" name="email" class="form-control" placeholder="e.g. sarah@example.co.za" required />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field-set">
                    <label class="fs-13 mb-1 fw-bold" style="color: #38302a;">Contact Number *</label>
                    <input type="text" name="phone" class="form-control" placeholder="e.g. 083 123 4567" required />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field-set">
                    <label class="fs-13 mb-1 fw-bold" style="color: #38302a;">Joinery Category *</label>
                    <select name="category" class="form-control">
                      <option value="kitchen">Designer Kitchen</option>
                      <option value="bedroom">Bedroom Cupboards &amp; Closets</option>
                      <option value="bathroom">Bathroom Vanity Suite</option>
                      <option value="living">Living Spaces &amp; TV Unit</option>
                      <option value="office">Executive Study / Home Office</option>
                      <option value="wine">Wine Cellar &amp; Bar</option>
                      <option value="full">Full House Bespoke Joinery</option>
                      <option value="commercial">Commercial / Corporate Space</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div class="col-12">
                  <div class="field-set">
                    <label class="fs-13 mb-1 fw-bold" style="color: #38302a;">Project Details &amp; Location *</label>
                    <textarea name="message" class="form-control" rows="4" placeholder="Please describe your space, timeline, and any specific ideas or material preferences..." required></textarea>
                  </div>
                </div>
                <div class="col-12 mt-3">
                  <button type="submit" class="btn-main fx-slide w-100 text-center" style="background: #805231; border: none; border-radius: 0; padding: 12px 24px; color: #fff; font-weight: 600; cursor: pointer;">
                    <span>Send Inquiry &rarr;</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div id="quote-success-state" class="quote-success-state" style="display: none;">
            <div class="quote-success-icon"><i class="fa-solid fa-check"></i></div>
            <h3 style="font-size: 24px; font-weight: 600; color: #241e1a; margin-bottom: 8px;">Thank You!</h3>
            <p style="color: #55504a; font-size: 15px; line-height: 1.6; margin-bottom: 24px;">Your quotation request has been received. Our joinery design team will review your project details and contact you shortly.</p>
            <button type="button" class="btn-main fx-slide" id="quote-success-close" style="background: #805231; color: #fff; border: none; border-radius: 0; padding: 10px 24px; cursor: pointer;">
              <span>Close Window</span>
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const overlay = document.getElementById('quote-modal-overlay');
    const closeBtn = document.getElementById('quote-modal-close');
    const successCloseBtn = document.getElementById('quote-success-close');
    const form = document.getElementById('quote-modal-form');
    const formWrapper = document.getElementById('quote-form-wrapper');
    const successState = document.getElementById('quote-success-state');

    function openModal(e) {
      if (e) e.preventDefault();
      if (formWrapper) formWrapper.style.display = 'block';
      if (successState) successState.style.display = 'none';
      if (overlay) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeModal() {
      if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    }

    // Attach to all header "Get A Quote" buttons across all pages
    const quoteButtons = document.querySelectorAll('a[href="contact.html"].btn-main, a.btn-main[href*="contact.html"], .btn-header-quote, [data-open-quote-modal]');
    quoteButtons.forEach(btn => {
      if (btn.textContent.toLowerCase().includes('quote') || btn.classList.contains('btn-header-quote') || btn.hasAttribute('data-open-quote-modal')) {
        btn.addEventListener('click', openModal);
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (successCloseBtn) successCloseBtn.addEventListener('click', closeModal);

    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) {
        closeModal();
      }
    });

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (formWrapper) formWrapper.style.display = 'none';
        if (successState) successState.style.display = 'block';
        form.reset();
      });
    }

    // Expose globally
    window.openQuoteModal = openModal;
    window.closeQuoteModal = closeModal;
  }
})();
