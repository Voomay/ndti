import React, { useState } from 'react';

export const VideoBannerSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section aria-label="video-banner" className="p-0 position-relative overflow-hidden">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12">
            <div
              className="position-relative overflow-hidden d-flex align-items-center justify-content-center"
              style={{
                minHeight: '480px',
                backgroundImage: 'url(/images/background/2.webp)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
              }}
            >
              {/* Dark Gradient Overlay */}
              <div
                className="position-absolute inset-0 w-100 h-100"
                style={{ top: 0, left: 0, background: 'rgba(20, 21, 23, 0.55)', zIndex: 1 }}
              ></div>

              {/* Center Play Button & Title */}
              <div
                className="position-relative text-center text-white px-3"
                style={{ zIndex: 2, maxWidth: '750px' }}
              >
                {/* Pulsing Play Button */}
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play Video Presentation"
                  className="btn d-inline-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    color: '#1a1918',
                    border: 'none',
                    boxShadow: '0 0 0 15px rgba(255, 255, 255, 0.25)',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 0 0 22px rgba(255, 255, 255, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 0 0 15px rgba(255, 255, 255, 0.25)';
                  }}
                >
                  <i className="fas fa-play" style={{ fontSize: '24px', marginLeft: '4px' }}></i>
                </button>

                <h2
                  className="text-white mb-3"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 600, letterSpacing: '-0.5px' }}
                >
                  Inspiring Spaces for Extraordinary Living
                </h2>
                <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
                  Take a closer look at our approach to luxury spatial harmony and handcrafted architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Popup */}
      {isPlaying && (
        <div
          className="position-fixed inset-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{ top: 0, left: 0, background: 'rgba(0, 0, 0, 0.92)', zIndex: 99999 }}
          onClick={() => setIsPlaying(false)}
        >
          <div
            className="position-relative w-100"
            style={{ maxWidth: '900px', aspectRatio: '16/9' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="btn btn-close btn-close-white position-absolute"
              style={{ top: '-45px', right: 0 }}
              onClick={() => setIsPlaying(false)}
              aria-label="Close Video"
            ></button>
            <iframe
              src="https://www.youtube-nocookie.com/embed/C6rf51uHWJg?autoplay=1"
              title="Intrio Design Film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-100 h-100 rounded"
              style={{ border: 'none', borderRadius: '12px' }}
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};
