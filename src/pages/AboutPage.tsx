import React from 'react';
import { Target, Compass, Sparkles, ArrowRight, ShieldCheck, Hammer } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="about-page">
      {/* 1. HERO HEADER */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1 className="page-hero-title">About NDti</h1>
          <p className="page-hero-desc">
            The place where bespoke joinery craftsmanship and contemporary artistic vision unite to create extraordinary spaces.
          </p>
        </div>
      </section>

      {/* 2. COLLABORATION STORY & 3-IMAGE REAL PHOTOGRAPHY COLLAGE (White Background Section) */}
      <section className="section section-white">
        <div className="container">
          <div className="about-split-grid">
            <div>
              <span className="badge-tag">About Us</span>
              <h2 className="section-title">
                Bringing Ideas to Life with NDti and IanArt
              </h2>
              <div className="white-line" />

              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                At NDti, we are passionate about creating custom bespoke joinery that transforms spaces into stunning works of art. Collaborating with the talented artist <strong>IanArt</strong>, we bring a unique blend of craftsmanship and creativity to every project we undertake.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#475569' }}>
                From kitchens to bedroom cupboards, bathroom vanities to studies and offices, our team of skilled artisans designs and manufactures bespoke joinery pieces that are not only functional but also reflect the individual style and personality of our clients.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#475569' }}>
                We believe in the power of close collaboration, working hand in hand with homeowners, architects, and interior designers to ensure that every detail is meticulously engineered to align with their vision.
              </p>
            </div>

            {/* 3-Image Real Photography Collage (No Artificial Renders) */}
            <div className="collage-container">
              <div className="collage-item-main">
                <img 
                  src="https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.29.53.jpeg" 
                  alt="NDti Custom Luxury Kitchen" 
                  className="collage-img"
                  loading="lazy"
                />
              </div>

              <div className="collage-item-top">
                <img 
                  src="https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.36.53.jpeg" 
                  alt="NDti Luxury Bedroom Wardrobes" 
                  className="collage-img"
                  loading="lazy"
                />
              </div>

              <div className="collage-item-bottom">
                <img 
                  src="https://www.ianartndti.co.za/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-10-at-22.54.02.jpeg" 
                  alt="NDti Custom Residential Bar" 
                  className="collage-img"
                  loading="lazy"
                />
              </div>

              <div className="about-badge-overlay" style={{ background: '#09090b', color: '#ffffff' }}>
                <Sparkles size={24} style={{ color: '#ffffff' }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#fff' }}>Master Craftsmanship</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Blackheath, Cape Town</div>
                </div>
              </div>
            </div>
          </div>

          {/* STATS METRICS */}
          <div className="stats-grid" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
            {COMPANY_INFO.stats.map((stat) => (
              <div key={stat.label} className="stat-item" style={{ borderRight: '1px solid #e2e8f0' }}>
                <div className="stat-val" style={{ color: '#09090b', textShadow: 'none' }}>{stat.value}</div>
                <div className="stat-label" style={{ color: '#09090b' }}>{stat.label}</div>
                <div className="stat-sub" style={{ color: '#64748b' }}>{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Our Purpose</span>
            <h2 className="section-title">Mission & Vision</h2>
            <div className="white-line-center" />
            <p className="section-description">
              Guided by a relentless commitment to excellence, innovation, and client partnership.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {/* Mission Card */}
            <div className="card">
              <div className="card-icon-wrap">
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Our Mission</h3>
              <p style={{ lineHeight: '1.8', marginBottom: '1.25rem' }}>
                Our mission is simple yet powerful: to bring our clients’ ideas to life. We believe in the power of close collaboration, working hand in hand with our clients and interior designers to ensure that every detail is meticulously crafted to their vision.
              </p>
              <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                We are committed to creating exceptional joinery pieces that enhance the beauty and functionality of spaces. By delivering personalized solutions that reflect individual styles, we aim to exceed expectations and create environments that inspire.
              </p>
            </div>

            {/* Vision Card */}
            <div className="card">
              <div className="card-icon-wrap">
                <Compass size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Our Vision</h3>
              <p style={{ lineHeight: '1.8', marginBottom: '1.25rem' }}>
                Our vision is to be a leading provider of custom bespoke joinery, recognized for our craftsmanship, innovation, and customer-centric approach. We aspire to be the go-to choice for clients seeking unique and stunning joinery solutions.
              </p>
              <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                We aim to continually push the boundaries of design and craftsmanship, merging architectural woodworking with sculptural artistry in partnership with IanArt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WORKSHOP & STANDARDS (Clean Editorial Section) */}
      <section className="section section-white">
        <div className="container">
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-lg)', padding: '3.5rem' }}>
            <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
              <span className="badge-tag">Workshop Standards</span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', color: '#09090b' }}>
                Passionate About The Finer Details
              </h2>
              <div className="white-line-center" />
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#475569', marginBottom: '2.5rem' }}>
                At NDti, we are passionate about the finer details. From meticulously crafted joinery joints to precise measurements, hand-sanded edges, and flawless finishing touches, every piece that leaves our facility reflects South African woodworking excellence.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', textAlign: 'left', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <Hammer size={20} style={{ color: '#09090b', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#09090b', marginBottom: '0.2rem' }}>State-Of-The-Art Tooling</h4>
                    <p style={{ fontSize: '0.85rem', color: '#64748b' }}>CNC precision cutting, edging & digital design integration.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <ShieldCheck size={20} style={{ color: '#09090b', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#09090b', marginBottom: '0.2rem' }}>Quality Assurance</h4>
                    <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Triple-point pre-dispatch inspections on all hardware & surfaces.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <Sparkles size={20} style={{ color: '#09090b', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#09090b', marginBottom: '0.2rem' }}>Artistic Fusion</h4>
                    <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Exclusive collaborative integration with IanArt wooden block pieces.</p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={onOpenQuoteModal}
                >
                  <span>Transform Your Space</span>
                  <ArrowRight size={16} />
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline"
                  onClick={() => onNavigate('contact')}
                >
                  <span>Contact Our Workshop</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
