import React, { useState, useEffect, useRef } from 'react';

interface ShowcaseImage {
  src: string;
  alt: string;
  title: string;
  category: string;
}

const ABOUT_SHOWCASE_IMAGES: ShowcaseImage[] = [
  {
    src: '/images/ndti/project-01.jpg',
    alt: 'Master Kitchen Joinery & Architecture',
    title: 'Precision Kitchen Architecture',
    category: 'Custom Joinery',
  },
  {
    src: '/images/ndti/project-04.jpg',
    alt: 'Luxury Master Bedroom Cabinetry',
    title: 'Master Bedroom Suite & Storage',
    category: 'Bespoke Interior',
  },
  {
    src: '/images/ndti/project-03.jpg',
    alt: 'Architectural Study & Library Joinery',
    title: 'Tailored Study & Library Craft',
    category: 'Fine Cabinetry',
  },
];

export const AboutSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = ABOUT_SHOWCASE_IMAGES.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stats = [
    { number: '65,250+', label: 'Design Hours Completed' },
    { number: '23,160+', label: 'Satisfied Clients' },
    { number: '150+', label: 'Awards Winning' },
    { number: '20+', label: 'Years of Design Experience' },
  ];

  // Slow, refined auto-transition every 5.5s
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % total);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, total]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % total);
  };

  return (
    <section id="section-about" style={{ padding: '120px 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="row g-4 gx-5 justify-content-end align-items-center">
          {/* Column 1: 3-Image Luxury Showcase Carousel */}
          <div className="col-md-4">
            <div
              className="position-relative overflow-hidden"
              style={{
                borderRadius: '16px',
                minHeight: '440px',
                height: '440px',
                boxShadow: '0 20px 40px rgba(52, 31, 22, 0.12)',
                backgroundColor: '#18191b',
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Stacked Images for Ultra-Smooth Crossfade & Depth Transition */}
              {ABOUT_SHOWCASE_IMAGES.map((item, idx) => {
                const isActive = idx === currentIdx;
                return (
                  <div
                    key={idx}
                    className="position-absolute w-100 h-100"
                    style={{
                      top: 0,
                      left: 0,
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'scale(1)' : 'scale(1.06)',
                      transition: 'opacity 0.9s cubic-bezier(0.25, 1, 0.5, 1), transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
                      zIndex: isActive ? 2 : 1,
                      pointerEvents: isActive ? 'auto' : 'none',
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    {/* Subtle Luxury Gradient Overlay */}
                    <div
                      className="position-absolute w-100"
                      style={{
                        bottom: 0,
                        left: 0,
                        height: '55%',
                        background: 'linear-gradient(to top, rgba(20, 15, 12, 0.85) 0%, rgba(20, 15, 12, 0) 100%)',
                        zIndex: 2,
                      }}
                    />
                  </div>
                );
              })}

              {/* Top Glass Badge: Slide Counter (e.g., 01 / 03) */}
              <div
                className="position-absolute"
                style={{
                  top: '16px',
                  right: '16px',
                  zIndex: 5,
                  background: 'rgba(24, 25, 27, 0.65)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  color: '#ffffff',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  letterSpacing: '1px',
                  fontWeight: 600,
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                0{currentIdx + 1} <span style={{ opacity: 0.6, fontWeight: 400 }}>/ 0{total}</span>
              </div>

              {/* Bottom Info & Editorial Caption */}
              <div
                className="position-absolute w-100 p-4"
                style={{
                  bottom: 0,
                  left: 0,
                  zIndex: 4,
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: '#d19f78',
                    fontWeight: 600,
                    marginBottom: '4px',
                  }}
                >
                  {ABOUT_SHOWCASE_IMAGES[currentIdx].category}
                </div>
                <h4
                  style={{
                    color: '#ffffff',
                    fontSize: '18px',
                    fontWeight: 600,
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {ABOUT_SHOWCASE_IMAGES[currentIdx].title}
                </h4>

                {/* Navigation Bar: Progress Indicators & Minimalist Arrows */}
                <div className="d-flex align-items-center justify-content-between mt-3 pt-2" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  {/* Indicators / Progress bars */}
                  <div className="d-flex align-items-center" style={{ gap: '6px' }}>
                    {ABOUT_SHOWCASE_IMAGES.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setCurrentIdx(i)}
                        aria-label={`Go to image ${i + 1}`}
                        style={{
                          width: i === currentIdx ? '28px' : '8px',
                          height: '4px',
                          borderRadius: '4px',
                          backgroundColor: i === currentIdx ? '#d19f78' : 'rgba(255, 255, 255, 0.4)',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          transition: 'all 0.35s ease',
                        }}
                      />
                    ))}
                  </div>

                  {/* Manual Navigation Buttons */}
                  <div className="d-flex align-items-center" style={{ gap: '6px' }}>
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous image"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.18)',
                        backdropFilter: 'blur(6px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '12px',
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#805231';
                        e.currentTarget.style.transform = 'scale(1.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.18)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <i className="fas fa-chevron-left" style={{ fontSize: '10px' }}></i>
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next image"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.18)',
                        backdropFilter: 'blur(6px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '12px',
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#805231';
                        e.currentTarget.style.transform = 'scale(1.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.18)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <i className="fas fa-chevron-right" style={{ fontSize: '10px' }}></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Heading & Subtitle */}
          <div className="col-md-4">
            <div className="subtitle">About Us</div>
            <h2 style={{ fontSize: '38px', lineHeight: '1.25', marginTop: '16px', fontWeight: 600, color: '#341F16' }}>
              We’re committed to turning your vision into reality
            </h2>
          </div>

          {/* Column 3: Paragraph & Designer Signature */}
          <div className="col-md-4">
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(52, 31, 22, 0.75)' }}>
              We create spaces that are not only visually stunning but also functional and uniquely
              yours. Whether it’s a private residence or a commercial space, our interior design services
              are tailored to bring your vision to life with style and precision.
            </p>
            <div className="text-end mt-4">
              <img
                src="/images/misc/signature.webp"
                className="w-150px mb-1"
                alt="John Smith Signature"
                style={{ width: '140px' }}
              />
              <h3 style={{ fontSize: '20px', fontWeight: 600, margin: 0, color: '#341F16' }}>John Smith</h3>
              <span style={{ fontSize: '13px', color: '#888' }}>Lead Interior Architect</span>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div style={{ height: '80px' }}></div>

        {/* Counter Stats */}
        <div className="row g-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="col-md-3 col-sm-6">
              <div className="de_count">
                <h3 className="mb-1" style={{ color: '#341F16', fontWeight: 600 }}>{stat.number}</h3>
                <div style={{ fontSize: '15px', color: 'rgba(52, 31, 22, 0.75)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
