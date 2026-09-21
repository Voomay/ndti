import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  HeartHandshake, 
  Sparkles, 
  ExternalLink,
  PhoneCall
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { SERVICES_DATA } from '../data/servicesData';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { TESTIMONIALS } from '../data/testimonialsData';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal: () => void;
  onOpenLightbox: (itemIndex: number) => void;
}

const HERO_SLIDES = [
  'https://www.ianartndti.co.za/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-10.28.09.jpeg',
  'https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.53.jpeg',
  'https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.53.jpeg',
  'https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.47.53.jpeg'
];

export const HomePage: React.FC<HomePageProps> = ({ 
  onNavigate, 
  onOpenQuoteModal,
  onOpenLightbox 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background Hero Slider auto-cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Featured selection of portfolio items for the homepage
  const featuredProjects = PORTFOLIO_ITEMS.slice(0, 6);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Award': return <Award size={26} />;
      case 'CheckCircle2': return <CheckCircle2 size={26} />;
      default: return <HeartHandshake size={26} />;
    }
  };

  return (
    <div className="home-page">
      {/* 1. HERO SECTION WITH BACKGROUND SLIDER */}
      <section className="home-hero">
        <div className="hero-slider-bg">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`hero-slide-item ${currentSlide === idx ? 'active' : ''}`}
              style={{ backgroundImage: `url('${slide}')` }}
            />
          ))}
        </div>
        <div className="home-hero-overlay" />

        <div className="container">
          <div className="home-hero-content">
            <div className="badge-tag">
              <Sparkles size={14} />
              <span>Where Joinery & Art Meet</span>
            </div>

            <h1 className="home-hero-title">
              Inspire your space through art and design.
            </h1>

            <p className="home-hero-desc">
              At NDti, we are dedicated to the art of creating custom bespoke joinery that transcends the ordinary. Collaborating with master artist IanArt, we turn luxury residential and corporate spaces into timeless masterpieces.
            </p>

            <div className="home-hero-actions">
              <button 
                type="button" 
                className="btn btn-primary btn-lg"
                onClick={onOpenQuoteModal}
              >
                <span>Get A Quote</span>
                <ArrowRight size={16} />
              </button>

              <button 
                type="button" 
                className="btn btn-outline btn-lg"
                onClick={() => onNavigate('portfolio')}
              >
                <span>View Portfolio</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Slider Dots */}
        <div className="hero-slider-dots">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`hero-slider-dot ${currentSlide === idx ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. VALUE PILLARS (Clean, generous spacing from hero buttons) */}
      <section className="pillars-section">
        <div className="container">
          <div className="pillars-grid">
            {COMPANY_INFO.pillars.map((pillar) => (
              <div key={pillar.title} className="pillar-card">
                <div className="pillar-icon-box">
                  {getPillarIcon(pillar.icon)}
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT US - CRISP WHITE BACKGROUND SECTION WITH 3-IMAGE COLLAGE */}
      <section className="section section-white">
        <div className="container">
          <div className="about-split-grid">
            {/* 3-Image Real Photography Collage (No Renders, No Text Badges) */}
            <div className="collage-container">
              <div className="collage-item-main">
                <img 
                  src="https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.53.jpeg" 
                  alt="NDti Luxury Designer Kitchen Installation" 
                  className="collage-img"
                  loading="lazy"
                />
              </div>

              <div className="collage-item-top">
                <img 
                  src="https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.53.jpeg" 
                  alt="NDti Bespoke Wardrobe Cabinetry" 
                  className="collage-img"
                  loading="lazy"
                />
              </div>

              <div className="collage-item-bottom">
                <img 
                  src="https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.02.jpeg" 
                  alt="NDti Custom Residential Bar & Cellar Joinery" 
                  className="collage-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content description with "About Us" heading */}
            <div>
              <span className="badge-tag">About Us</span>
              <h2 className="section-title">
                Artisanal Craftsmanship Meets Modern Vision.
              </h2>
              <div className="white-line" />

              <p style={{ fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
                At NDti, we are dedicated to the art of creating custom bespoke joinery that transcends the ordinary. With a passion for craftsmanship and an eye for design, we collaborate with the talented artist <strong>IanArt</strong> to turn spaces into stunning masterpieces.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                From kitchens to bedroom cupboards, bathroom vanities to studies and offices, our skilled team meticulously crafts joinery pieces that are not only functional but also works of art. We believe in the power of close collaboration with our clients and interior designers.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => onNavigate('ianart')}
                >
                  <span>Explore Ian Art</span>
                  <ArrowRight size={15} />
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline"
                  onClick={() => onNavigate('about')}
                >
                  <span>Discover More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE BEFORE & AFTER SLIDER (Real Raw Timber vs Completed Luxury Finish) */}
      <section className="section">
        <div className="container">
          <BeforeAfterSlider 
            beforeImage="https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.37.00.jpeg"
            afterImage="https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.53.jpeg"
            beforeLabel="Raw Timber & Fitting Phase"
            afterLabel="Completed Luxury Joinery"
            title="Craftsmanship in Action: From Raw Timber to Luxury Finish"
          />
        </div>
      </section>

      {/* 5. SERVICES SHOWCASE */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Our Capabilities</span>
            <h2 className="section-title">Bespoke Services. Exceptional Results.</h2>
            <div className="white-line-center" />
            <p className="section-description">
              We offer a curated range of bespoke joinery services tailored to meet the highest standards of luxury living. From conceptual design to precision manufacturing and flawless installation.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES_DATA.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-card-img-wrap">
                  <img 
                    src={service.featuredImage} 
                    alt={service.title} 
                    className="service-card-img"
                    loading="lazy"
                  />
                  <div className="service-icon-badge">
                    <img src={service.iconSrc} alt={`${service.title} icon`} />
                  </div>
                </div>

                <div className="service-card-body">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.shortDesc}</p>

                  <ul className="service-features-list">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="service-feature-item">
                        <CheckCircle2 size={15} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    type="button" 
                    className="btn btn-outline btn-sm"
                    style={{ marginTop: 'auto', width: '100%' }}
                    onClick={() => onNavigate('services')}
                  >
                    <span>View Service Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO SHOWCASE */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Showcase</span>
            <h2 className="section-title">Design Made Real. Latest Projects.</h2>
            <div className="white-line-center" />
            <p className="section-description">
              Explore our showcase and discover how your vision can be brought to life—crafted with care, made to inspire, and built to endure.
            </p>
          </div>

          <div className="portfolio-grid">
            {featuredProjects.map((project, idx) => (
              <div 
                key={project.id} 
                className="portfolio-item"
                onClick={() => onOpenLightbox(idx)}
              >
                <img 
                  src={project.thumbnailUrl} 
                  alt={project.title} 
                  className="portfolio-img"
                  loading="lazy"
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-badge">{project.primaryCategory}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <div className="portfolio-view-prompt">
                    <span>Click to view in high resolution</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button 
              type="button" 
              className="btn btn-primary btn-lg"
              onClick={() => onNavigate('portfolio')}
            >
              <span>Explore All 198+ Projects</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION BANNER */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #13131a 0%, #09090b 100%)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="badge-tag">Start Your Transformation</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '1.25rem' }}>
            Ready To Start A New Project With IanART NDTI?
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.7' }}>
            Whether you are designing a high-end luxury kitchen, bespoke bedroom suites, or an architectural commercial fitout, our team is ready to collaborate.
          </p>
          <div style={{ display: 'flex', gap: '12.5px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              type="button" 
              className="btn btn-primary btn-lg"
              onClick={onOpenQuoteModal}
            >
              <span>Request Consultation</span>
              <ArrowRight size={16} />
            </button>
            <button 
              type="button" 
              className="btn btn-outline btn-lg"
              onClick={() => onNavigate('contact')}
            >
              <PhoneCall size={16} />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </section>

      {/* 8. CLIENT TESTIMONIALS (No Stars as requested) */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Client Feedback</span>
            <h2 className="section-title">Words From Those We’ve Inspired.</h2>
            <div className="white-line-center" />
            <p className="section-description">
              Our clients’ satisfaction speaks to the passion and dedication we put into every project. From bespoke bedrooms to designer kitchens, we transform spaces with unparalleled attention to detail.
            </p>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="testimonial-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <div>
                  <p className="testimonial-quote" style={{ color: '#334155' }}>“{t.quote}”</p>
                </div>

                <div className="testimonial-author-box" style={{ borderTop: '1px solid #e2e8f0' }}>
                  <div className="testimonial-avatar" style={{ background: '#09090b', color: '#ffffff', border: 'none' }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="testimonial-name" style={{ color: '#09090b' }}>{t.name}</div>
                    <div className="testimonial-role" style={{ color: '#64748b' }}>{t.projectType} • {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
