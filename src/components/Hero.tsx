import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const slides = ['/images/slider/1.webp', '/images/slider/2.webp'];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      id="section-intro"
      className="section-dark text-light no-top no-bottom position-relative overflow-hidden z-1000 d-flex flex-column justify-content-center"
      style={{ minHeight: '90vh', padding: 0 }}
    >
      {/* Background Slides with crossfade and zoom */}
      {slides.map((src, index) => (
        <div
          key={src}
          className={`hero-slider-bg ${currentSlide === index ? 'active' : 'inactive'}`}
          style={{ backgroundImage: `url(${src})` }}
        >
          <div className="sw-overlay"></div>
        </div>
      ))}

      {/* Main Hero Content */}
      <div className="position-relative z-2 w-100" style={{ paddingTop: '140px', paddingBottom: '100px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-start">
                <h1 className="fs-sm-10vw mb-0 animate-fade-left">Inspired Spaces</h1>
              </div>
              <div className="text-lg-end">
                <h1 className="fs-sm-10vw mb-4 animate-fade-right" style={{ color: '#f7eee7' }}>
                  Elevated Living
                </h1>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <p
                className="lead"
                style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '18px',
                  lineHeight: '1.7',
                  maxWidth: '520px',
                }}
              >
                We design refined interiors that blend comfort and style, creating spaces that feel
                inviting and functional while reflecting your personality with thoughtful details and
                timeless elegance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div className="position-relative z-2 pb-4 d-none d-md-block w-100" style={{ marginTop: 'auto' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="d-flex justify-content-between align-items-center py-3"
                style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', fontSize: '15px', letterSpacing: '0.5px' }}
              >
                <div className="d-flex align-items-center gap-2">
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-color)' }}></span>
                  Functional Space Planning
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-color)' }}></span>
                  Stylish Material Selection
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-color)' }}></span>
                  Tailored Design Concepts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
