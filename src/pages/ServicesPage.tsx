import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA, PROCESS_STEPS } from '../data/servicesData';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="services-page">
      {/* 1. HERO HEADER */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
            <span>/</span>
            <span>Our Services</span>
          </div>
          <h1 className="page-hero-title">Our Services</h1>
          <p className="page-hero-desc">
            With our comprehensive range of bespoke joinery services, we transform residential and commercial spaces into personalized architectural masterpieces.
          </p>
        </div>
      </section>

      {/* 2. SERVICES DETAILED SECTIONS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Disciplines</span>
            <h2 className="section-title">Bespoke Services. Exceptional Results.</h2>
            <div className="gold-line-center" />
            <p className="section-description">
              From concept to completion, we design and manufacture custom joinery solutions that elevate spaces.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {SERVICES_DATA.map((service, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isEven ? '1.1fr 1fr' : '1fr 1.1fr',
                    gap: '4rem',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.75rem' }}>
                      <div 
                        style={{ 
                          width: '42px', 
                          height: '42px', 
                          background: 'rgba(197, 168, 128, 0.12)', 
                          borderRadius: '8px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          padding: '6px'
                        }}
                      >
                        <img src={service.iconSrc} alt="" style={{ filter: 'invert(1)', width: '100%', height: '100%', objectFit: 'contain' }} />
                      </div>
                      <span className="badge-tag" style={{ margin: 0 }}>Specialized Craft</span>
                    </div>

                    <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{service.title}</h2>
                    <div className="gold-line" />

                    <p style={{ fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                      {service.fullDesc}
                    </p>

                    <div style={{ marginBottom: '1.75rem' }}>
                      <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Key Highlights & Capabilities
                      </h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {service.features.map((f, fi) => (
                          <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                            <CheckCircle2 size={16} style={{ color: 'var(--color-champagne)', flexShrink: 0 }} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <button 
                        type="button" 
                        className="btn btn-primary btn-sm"
                        onClick={onOpenQuoteModal}
                      >
                        <span>Inquire About {service.title}</span>
                        <ArrowRight size={14} />
                      </button>
                      <button 
                        type="button" 
                        className="btn btn-outline btn-sm"
                        onClick={() => onNavigate('portfolio')}
                      >
                        <span>View Completed Projects</span>
                      </button>
                    </div>
                  </div>

                  <div 
                    style={{ 
                      order: isEven ? 1 : 2,
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      border: '1px solid var(--border-subtle)',
                      boxShadow: 'var(--shadow-md)',
                      aspectRatio: '16 / 11'
                    }}
                  >
                    <img 
                      src={service.featuredImage} 
                      alt={service.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. HOW WE WORK (PROCESS) */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Methodology</span>
            <h2 className="section-title">How We Work</h2>
            <div className="gold-line-center" />
            <p className="section-description">
              Our collaborative approach, commitment to quality craftsmanship, and dedication to customer satisfaction are at the forefront of every project.
            </p>
          </div>

          <div className="process-grid">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="process-card">
                <div className="process-step-badge">{step.step}</div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.description}</p>

                <ul className="process-details-list">
                  {step.details.map((d, i) => (
                    <li key={i} className="process-detail-item">
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button 
              type="button" 
              className="btn btn-primary btn-lg"
              onClick={onOpenQuoteModal}
            >
              <span>Schedule A Concept Consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
