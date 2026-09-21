import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenDrawer: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onOpenDrawer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`transparent ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              {/* Logo */}
              <div className="de-flex-col">
                <div id="logo">
                  <a href="#section-intro" className="d-block">
                    <img
                      className="logo-main"
                      src="/images/logo-white.webp"
                      alt="Intrio Logo"
                      style={{ height: '36px', width: 'auto' }}
                    />
                  </a>
                </div>
              </div>

              {/* Main Desktop Menu */}
              <div className="de-flex-col header-col-mid d-none d-lg-flex">
                <ul id="mainmenu">
                  <li>
                    <a className="menu-item" href="#section-intro">Home</a>
                    <ul>
                      <li><a href="#section-intro">Homepage 1 (Active)</a></li>
                      <li><a href="#section-intro">Homepage 2</a></li>
                      <li><a href="#section-intro">Homepage 3</a></li>
                      <li><a href="#section-intro">Homepage 4</a></li>
                      <li><a href="#section-intro">Homepage 5</a></li>
                    </ul>
                  </li>
                  <li>
                    <a className="menu-item" href="#section-services">Services</a>
                    <ul>
                      <li><a href="#section-services">Furniture & Decor</a></li>
                      <li><a href="#section-services">Concept Development</a></li>
                      <li><a href="#section-services">Renovation & Space</a></li>
                      <li><a href="#section-services">Visual Rendering</a></li>
                    </ul>
                  </li>
                  <li>
                    <a className="menu-item" href="#section-projects">Projects</a>
                    <ul>
                      <li><a href="#section-projects">Modern Living Room</a></li>
                      <li><a href="#section-projects">Contemporary Suite</a></li>
                      <li><a href="#section-projects">Scandinavian Kitchen</a></li>
                      <li><a href="#section-projects">Marble Bathroom</a></li>
                    </ul>
                  </li>
                  <li>
                    <a className="menu-item" href="#section-about">Pages</a>
                    <ul>
                      <li><a href="#section-about">About Us</a></li>
                      <li><a href="#section-faq">FAQ</a></li>
                      <li><a href="#section-testimonials">Testimonials</a></li>
                    </ul>
                  </li>
                  <li>
                    <a className="menu-item" href="#section-blog">Blog</a>
                  </li>
                  <li>
                    <a className="menu-item" href="#section-contact">Contact</a>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="de-flex-col">
                <div className="menu_side_area d-flex align-items-center">
                  <button
                    onClick={onOpenConsultation}
                    className="btn-main fx-slide"
                    style={{ border: 'none' }}
                  >
                    <span>Free Consultation</span>
                  </button>

                  {/* Mobile Menu Toggle Button */}
                  <div
                    className="d-lg-none ms-3 text-white cursor-pointer"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{ fontSize: '24px', cursor: 'pointer' }}
                  >
                    <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                  </div>
                </div>

                {/* Offcanvas Drawer Toggle Button */}
                <div id="btn-extra" onClick={onOpenDrawer} title="Explore More">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
              <div
                className="d-lg-none mt-3 p-4 rounded"
                style={{ background: '#18191b', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                  <li>
                    <a
                      href="#section-intro"
                      className="text-white text-decoration-none"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-services"
                      className="text-white text-decoration-none"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-projects"
                      className="text-white text-decoration-none"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-about"
                      className="text-white text-decoration-none"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-faq"
                      className="text-white text-decoration-none"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-blog"
                      className="text-white text-decoration-none"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section-contact"
                      className="text-white text-decoration-none"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
