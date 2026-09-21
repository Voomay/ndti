import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="section-contact" className="text-light section-dark" style={{ background: '#121315', padding: '90px 0 30px' }}>
      <div className="container">
        <div className="row g-4 justify-content-between mb-5">
          {/* Column 1: Logo, Bio & Social */}
          <div className="col-lg-4 col-md-6">
            <img
              src="/images/logo-white.webp"
              className="mb-4"
              alt="Intrio Logo"
              style={{ height: '38px', width: 'auto' }}
            />
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '15px', lineHeight: '1.8', maxWidth: '320px' }}>
              We craft refined interior architecture and bespoke spaces that blend comfort, functionality,
              and timeless aesthetic beauty.
            </p>

            <div className="d-flex gap-3 mt-4">
              <a
                href="#"
                className="btn btn-outline-light d-flex align-items-center justify-content-center"
                style={{ width: '38px', height: '38px', borderRadius: '50%', padding: 0 }}
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="btn btn-outline-light d-flex align-items-center justify-content-center"
                style={{ width: '38px', height: '38px', borderRadius: '50%', padding: 0 }}
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="btn btn-outline-light d-flex align-items-center justify-content-center"
                style={{ width: '38px', height: '38px', borderRadius: '50%', padding: 0 }}
                aria-label="Twitter"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
              <a
                href="#"
                className="btn btn-outline-light d-flex align-items-center justify-content-center"
                style={{ width: '38px', height: '38px', borderRadius: '50%', padding: 0 }}
                aria-label="Pinterest"
              >
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a
                href="#"
                className="btn btn-outline-light d-flex align-items-center justify-content-center"
                style={{ width: '38px', height: '38px', borderRadius: '50%', padding: 0 }}
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-3 col-6">
            <h5 className="text-white mb-4" style={{ fontSize: '18px', fontWeight: 600 }}>
              Quick Links
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '15px' }}>
              <li>
                <a href="#section-intro" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#section-about" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#section-services" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Our Services
                </a>
              </li>
              <li>
                <a href="#section-projects" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#section-faq" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#section-blog" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Blog Journal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="col-lg-3 col-md-3 col-6">
            <h5 className="text-white mb-4" style={{ fontSize: '18px', fontWeight: 600 }}>
              Studio & Contact
            </h5>
            <div className="d-flex flex-column gap-3" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)' }}>
              <div>
                <strong className="text-white d-block mb-1">Main Studio</strong>
                100 S Main St, Suite 400<br />
                Los Angeles, CA 90012
              </div>
              <div>
                <strong className="text-white d-block mb-1">Direct Inquiries</strong>
                <span>+1 800 555 1234</span><br />
                <span>hello@intrio-design.com</span>
              </div>
              <div>
                <strong className="text-white d-block mb-1">Hours</strong>
                Mon – Fri: 08:00 – 18:00<br />
                Weekend: By appointment
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4" style={{ fontSize: '18px', fontWeight: 600 }}>
              Newsletter
            </h5>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', lineHeight: '1.7' }}>
              Subscribe to receive curated interior architecture ideas, material spotlights, and studio updates.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to Intrio!'); }} className="mt-3">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  required
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    borderRadius: '8px 0 0 8px',
                    padding: '10px 14px',
                  }}
                />
                <button
                  className="btn btn-main"
                  type="submit"
                  style={{ borderRadius: '0 8px 8px 0', border: 'none' }}
                >
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)', margin: '40px 0 20px' }} />
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
          <div>
            &copy; {new Date().getFullYear()} Intrio — Luxury Architecture & Interior Design. All rights reserved.
          </div>
          <div className="d-flex gap-3">
            <a href="#" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.5)' }}>Privacy Policy</a>
            <span>•</span>
            <a href="#" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.5)' }}>Terms of Service</a>
            <span>•</span>
            <a href="#" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.5)' }}>Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
