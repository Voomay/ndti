import React from 'react';
import { ExternalLink, ArrowRight, Quote } from 'lucide-react';
import { IANART_PHILOSOPHY, IANART_ITEMS } from '../data/ianartData';
import type { IanArtItem } from '../data/ianartData';

interface IanArtPageProps {
  onNavigate: (page: string) => void;
  onOpenLightbox: (items: IanArtItem[], index: number) => void;
  onOpenQuoteModal: () => void;
}

export const IanArtPage: React.FC<IanArtPageProps> = ({
  onNavigate,
  onOpenLightbox,
  onOpenQuoteModal
}) => {
  return (
    <div className="ianart-page">
      {/* 1. HERO HEADER */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
            <span>/</span>
            <span>IanArt Installations</span>
          </div>
          <h1 className="page-hero-title">IanArt Installations</h1>
          <p className="page-hero-desc">
            Building Dreams Block by Block. Where geometric solid wood sculptures meet moral philosophy and architectural craftsmanship.
          </p>
        </div>
      </section>

      {/* 2. ARTIST & PHILOSOPHY SECTION */}
      <section className="section">
        <div className="container">
          <div className="ianart-hero-split">
            {/* Artist Portrait */}
            <div className="ianart-portrait-wrap">
              <img 
                src="/assets/ianart/ian-albertyn-portrait.jpg" 
                alt="Ian Albertyn - Founder of IanArt" 
                className="ianart-portrait-img"
              />
              <div className="about-badge-overlay">
                <div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.1rem' }}>Ian Albertyn</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-champagne)' }}>Founder & Sculptural Artist</div>
                </div>
              </div>
            </div>

            {/* Philosophy Text */}
            <div>
              <span className="badge-tag">The Artistic Concept</span>
              <h2 className="section-title">
                Building Dreams Block by Block
              </h2>
              <div className="gold-line" />

              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                {IANART_PHILOSOPHY.paragraphs[0]}
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.25rem', color: 'var(--text-secondary)' }}>
                {IANART_PHILOSOPHY.paragraphs[1]}
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                {IANART_PHILOSOPHY.paragraphs[2]}
              </p>

              <div className="ianart-quote-banner">
                <Quote size={28} style={{ color: 'var(--color-champagne)', marginBottom: '0.75rem', opacity: 0.6 }} />
                <div className="ianart-quote-text">
                  “{IANART_PHILOSOPHY.quote}”
                </div>
                <div className="ianart-quote-author">
                  — {IANART_PHILOSOPHY.author}, {IANART_PHILOSOPHY.role}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="https://ianart.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <span>Visit IanArt Official Site</span>
                  <ExternalLink size={15} />
                </a>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onOpenQuoteModal}
                >
                  <span>Commission An Installation</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ART INSTALLATION GALLERY */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Sculptural Works</span>
            <h2 className="section-title">Our Bespoke Art Installations</h2>
            <div className="gold-line-center" />
            <p className="section-description">
              A curated collection of bespoke wooden block sculptures and architectural installations created by IanArt in collaboration with NDti.
            </p>
          </div>

          <div className="portfolio-grid">
            {IANART_ITEMS.map((item, index) => (
              <div
                key={item.id}
                className="portfolio-item"
                onClick={() => onOpenLightbox(IANART_ITEMS, index)}
              >
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="portfolio-img"
                  loading="lazy"
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-badge">Solid Wood Art</span>
                  <h3 className="portfolio-title">{item.title}</h3>
                  <div className="portfolio-view-prompt">
                    <span>View installation details</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={onOpenQuoteModal}
            >
              <span>Inquire About Commissioning IanArt</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
