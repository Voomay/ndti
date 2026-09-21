import React, { useState, useEffect, useRef } from 'react';

interface ServiceItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: 'kitchens',
    number: '01',
    tag: 'Culinary Architecture',
    title: 'Designer Kitchens',
    description:
      'We design and build bespoke luxury kitchen joinery, combining ergonomics, spatial harmony, and master craftsmanship. From quartz waterfall islands to concealed soft-close Blum hardware and tailored pantry larders.',
    image: '/images/ndti/service-kitchen.jpg',
    features: [
      'Ergonomic workflow & spatial engineering',
      'Solid hardwood, rich veneer & matte lacquer finishes',
      'Concealed German Blum soft-close mechanics',
      'Integrated quartz islands & bespoke larders',
    ],
  },
  {
    id: 'bedrooms',
    number: '02',
    tag: 'Master Suites',
    title: 'Luxury Bedroom Cupboards',
    description:
      'Tailored floor-to-ceiling wardrobe configurations designed to maximize volume while imparting calm architectural elegance. Featuring smoked glass cabinets, sensor illumination, and custom velvet accessories drawers.',
    image: '/images/ndti/service-bedroom.jpg',
    features: [
      'Floor-to-ceiling built-in wardrobe systems',
      'Integrated warm-spectrum sensor LED lighting',
      'Velvet jewellery trays & shoe display galleries',
      'Walk-in dressing island suites with glass tops',
    ],
  },
  {
    id: 'bathrooms',
    number: '03',
    tag: 'Sanctuary & Spa',
    title: 'Custom Bathroom Vanities',
    description:
      'Floating wall-hung and freestanding vanities engineered with marine-grade waterproof substrates. Designed with clean minimalist lines, seamless stone basin cutouts, and concealed plumbing conduits.',
    image: '/images/ndti/service-bathroom.jpg',
    features: [
      'Marine-grade waterproof core substrates',
      'Floating wall-hung architecture with under-glow LEDs',
      'Precision stone & solid surface integration',
      'Matching framed backlit mirrors & medicine cabinets',
    ],
  },
  {
    id: 'joinery',
    number: '04',
    tag: 'Executive Living',
    title: 'Studies & Custom Joinery',
    description:
      'Tailored architectural joinery for home offices, private libraries, and statement media walls. Each shelf, acoustic timber slat, and hidden cable channel is customized to foster deep focus and elegance.',
    image: '/images/ndti/service-bespoke.jpg',
    features: [
      'Full-height architectural library bookcases',
      'Ergonomic executive floating desks',
      'Acoustic timber slat wall paneling',
      'Concealed cable management & device hubs',
    ],
  },
  {
    id: 'winebars',
    number: '05',
    tag: 'Luxury Entertaining',
    title: 'Wine Cellars & Bespoke Bars',
    description:
      'Curated residential bars and climate-controlled wine displays crafted for connoisseurs. Featuring backlit onyx surfaces, custom timber pegs, brass footrails, and integrated refrigeration framing.',
    image: '/images/ndti/service-winebar.jpg',
    features: [
      'Climate-zoned architectural wine enclosures',
      'Backlit translucent stone & warm bronze details',
      'Custom hardwood wine pegs & cradles',
      'Concealed prep sinks, ice stations & bar cabinets',
    ],
  },
  {
    id: 'commercial',
    number: '06',
    tag: 'Corporate & Hospitality',
    title: 'Commercial & Architectural Joinery',
    description:
      'Executive boardroom credenzas, high-impact reception desks with back-lit corporate branding, and bespoke commercial installations engineered for durability and uncompromising executive prestige.',
    image: '/images/services/6.webp',
    features: [
      'High-impact reception counters & feature portals',
      'Executive boardroom tables with integrated AV ports',
      'High-traffic commercial veneer & laminate craft',
      'Turnkey spatial fitouts & boutique retail joinery',
    ],
  },
];

export const ServicesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check window width for responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Native, silky-smooth scroll-driven progress listener
  useEffect(() => {
    if (isMobile) return;

    let animFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const rawProgress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      setProgress(rawProgress);

      const computedIndex = Math.min(
        SERVICES.length - 1,
        Math.floor(rawProgress * SERVICES.length)
      );
      setActiveIndex(computedIndex);
    };

    const onScroll = () => {
      cancelAnimationFrame(animFrameId);
      animFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animFrameId);
    };
  }, [isMobile]);

  // Click handler to smoothly scroll to a specific service step
  const scrollToService = (index: number) => {
    if (!containerRef.current) {
      setActiveIndex(index);
      return;
    }

    if (isMobile) {
      setActiveIndex(index);
      return;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = scrollTop + rect.top;
    const totalScrollable = rect.height - window.innerHeight;
    const targetScroll = containerTop + (index / (SERVICES.length - 1)) * totalScrollable;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    const nextIdx = activeIndex === 0 ? SERVICES.length - 1 : activeIndex - 1;
    scrollToService(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex === SERVICES.length - 1 ? 0 : activeIndex + 1;
    scrollToService(nextIdx);
  };

  const activeService = SERVICES[activeIndex] || SERVICES[0];

  return (
    <section
      id="section-services"
      ref={containerRef}
      style={{
        position: 'relative',
        height: isMobile ? 'auto' : `calc(100vh + ${(SERVICES.length - 1) * 70}vh)`,
        backgroundColor: '#faf7f2',
      }}
    >
      {/* Sticky Viewport Frame */}
      <div
        style={{
          position: isMobile ? 'relative' : 'sticky',
          top: 0,
          minHeight: isMobile ? 'auto' : '100vh',
          height: isMobile ? 'auto' : '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: isMobile ? '80px 0' : '40px 0',
          boxSizing: 'border-box',
          overflow: 'hidden',
          backgroundColor: '#faf7f2',
          borderTop: '1px solid rgba(128, 82, 49, 0.12)',
          borderBottom: '1px solid rgba(128, 82, 49, 0.12)',
        }}
      >
        <div className="container position-relative" style={{ zIndex: 2 }}>
          {/* Header Row */}
          <div className="row mb-4 align-items-end justify-content-between g-3">
            <div className="col-lg-6">
              <div
                className="d-inline-flex align-items-center mb-2 px-3 py-1"
                style={{
                  background: 'rgba(128, 82, 49, 0.1)',
                  borderRadius: '20px',
                  color: '#805231',
                  fontSize: '12px',
                  letterSpacing: '2px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                Our Services
              </div>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  lineHeight: '1.2',
                  fontWeight: 600,
                  color: '#341F16',
                  margin: 0,
                }}
              >
                Bespoke Service, Exceptional Results
              </h2>
            </div>

            <div className="col-lg-5">
              <div className="d-flex flex-column align-items-lg-end">
                {/* Step counter & Navigation controls */}
                <div className="d-flex align-items-center gap-3 mb-2">
                  <span
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#805231',
                      letterSpacing: '1px',
                    }}
                  >
                    {activeService.number} <span style={{ color: '#8c7e75', fontWeight: 400 }}>/ 0{SERVICES.length}</span>
                  </span>

                  <div className="de-custom-nav" style={{ gap: '8px' }}>
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="de-nav-btn"
                      aria-label="Previous service"
                      style={{
                        width: '38px',
                        height: '38px',
                        background: '#341F16',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = '#805231')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = '#341F16')}
                    >
                      <i className="fas fa-chevron-left" style={{ fontSize: '12px' }}></i>
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="de-nav-btn"
                      aria-label="Next service"
                      style={{
                        width: '38px',
                        height: '38px',
                        background: '#341F16',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = '#805231')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = '#341F16')}
                    >
                      <i className="fas fa-chevron-right" style={{ fontSize: '12px' }}></i>
                    </button>
                  </div>
                </div>

                {/* Overall Scroll Progress Bar */}
                {!isMobile && (
                  <div
                    style={{
                      width: '160px',
                      height: '3px',
                      backgroundColor: 'rgba(52, 31, 22, 0.12)',
                      borderRadius: '2px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        width: `${Math.max(5, progress * 100)}%`,
                        height: '100%',
                        backgroundColor: '#805231',
                        transition: 'width 0.15s ease-out',
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick-select Service Tabs / Pills */}
          <div
            className="d-flex align-items-center mb-4 pb-2"
            style={{
              gap: '8px',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {SERVICES.map((s, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollToService(idx)}
                  style={{
                    padding: '7px 16px',
                    borderRadius: '24px',
                    fontSize: '13px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: isCurrent ? '1px solid #805231' : '1px solid rgba(52, 31, 22, 0.15)',
                    backgroundColor: isCurrent ? '#805231' : '#ffffff',
                    color: isCurrent ? '#ffffff' : '#4a3b32',
                    boxShadow: isCurrent ? '0 4px 12px rgba(128, 82, 49, 0.25)' : 'none',
                  }}
                >
                  <span style={{ opacity: isCurrent ? 0.8 : 0.5, marginRight: '6px', fontSize: '11px' }}>
                    {s.number}
                  </span>
                  {s.title}
                </button>
              );
            })}
          </div>

          {/* Pinned Service Showcase Stage (Split Editorial Layout) */}
          <div
            className="row g-4 g-lg-5 align-items-center"
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: isMobile ? '24px 16px' : '36px 40px',
              boxShadow: '0 20px 50px rgba(52, 31, 22, 0.08)',
              border: '1px solid rgba(128, 82, 49, 0.1)',
            }}
          >
            {/* Left Column: Service Details & Features */}
            <div className="col-lg-6 order-2 order-lg-1">
              <div
                key={activeService.id}
                style={{
                  animation: 'fadeInSlide 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards',
                }}
              >
                {/* Service Tag */}
                <div
                  className="d-inline-flex align-items-center mb-2"
                  style={{
                    color: '#805231',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                  }}
                >
                  <i className="fas fa-sparkles me-2" style={{ fontSize: '11px' }}></i>
                  {activeService.tag}
                </div>

                {/* Service Title */}
                <h3
                  style={{
                    fontSize: 'clamp(24px, 2.5vw, 34px)',
                    fontWeight: 600,
                    color: '#341F16',
                    marginBottom: '14px',
                    lineHeight: 1.25,
                  }}
                >
                  {activeService.title}
                </h3>

                {/* Service Description */}
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: '1.75',
                    color: 'rgba(52, 31, 22, 0.8)',
                    marginBottom: '20px',
                  }}
                >
                  {activeService.description}
                </p>

                {/* Key Craftsmanship Features */}
                <div className="row g-2 mb-4">
                  {activeService.features.map((feature, fIdx) => (
                    <div key={fIdx} className="col-sm-6">
                      <div className="d-flex align-items-start" style={{ gap: '10px' }}>
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(128, 82, 49, 0.12)',
                            color: '#805231',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '10px',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        >
                          <i className="fas fa-check"></i>
                        </div>
                        <span
                          style={{
                            fontSize: '13px',
                            color: '#42332a',
                            fontWeight: 500,
                            lineHeight: 1.4,
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="d-flex align-items-center gap-3 pt-2">
                  <a
                    href="#section-contact"
                    className="btn btn-main"
                    style={{
                      backgroundColor: '#805231',
                      color: '#ffffff',
                      padding: '12px 28px',
                      borderRadius: '28px',
                      fontWeight: 600,
                      fontSize: '14px',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 8px 20px rgba(128, 82, 49, 0.3)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#341F16';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#805231';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <span>Request Consultation</span>
                    <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
                  </a>

                  <a
                    href="#section-projects"
                    style={{
                      color: '#341F16',
                      fontWeight: 600,
                      fontSize: '14px',
                      textDecoration: 'none',
                      padding: '12px 18px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#805231')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#341F16')}
                  >
                    <span>View Projects</span>
                    <i className="fas fa-chevron-right" style={{ fontSize: '10px' }}></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Imagery Stack */}
            <div className="col-lg-6 order-1 order-lg-2">
              <div
                className="position-relative overflow-hidden"
                style={{
                  borderRadius: '16px',
                  height: isMobile ? '300px' : '420px',
                  backgroundColor: '#18191b',
                  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.15)',
                }}
              >
                {SERVICES.map((s, idx) => {
                  const isCur = idx === activeIndex;
                  return (
                    <div
                      key={s.id}
                      className="position-absolute w-100 h-100"
                      style={{
                        top: 0,
                        left: 0,
                        opacity: isCur ? 1 : 0,
                        transform: isCur ? 'scale(1)' : 'scale(1.08)',
                        transition: 'opacity 0.7s cubic-bezier(0.25, 1, 0.5, 1), transform 0.9s cubic-bezier(0.25, 1, 0.5, 1)',
                        zIndex: isCur ? 2 : 1,
                        pointerEvents: isCur ? 'auto' : 'none',
                      }}
                    >
                      <img
                        src={s.image}
                        alt={s.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                      {/* Gradient overlay */}
                      <div
                        className="position-absolute w-100 h-100"
                        style={{
                          top: 0,
                          left: 0,
                          background: 'linear-gradient(to top, rgba(20, 15, 12, 0.65) 0%, rgba(20, 15, 12, 0) 50%)',
                        }}
                      />

                      {/* Up-Right Arrow Floating Badge */}
                      <a
                        href="#section-contact"
                        className="position-absolute"
                        style={{
                          top: '16px',
                          right: '16px',
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.25)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.35)',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          zIndex: 4,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#805231';
                          e.currentTarget.style.transform = 'scale(1.1) rotate(45deg)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                          e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                        }}
                        aria-label={`Inquire about ${s.title}`}
                      >
                        <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '14px' }}></i>
                      </a>

                      {/* Bottom Image Badge */}
                      <div
                        className="position-absolute"
                        style={{
                          bottom: '16px',
                          left: '16px',
                          zIndex: 4,
                          background: 'rgba(24, 25, 27, 0.75)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          color: '#ffffff',
                          padding: '6px 14px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: 500,
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                        }}
                      >
                        <span style={{ color: '#d19f78', fontWeight: 600, marginRight: '6px' }}>{s.number}</span>
                        {s.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
