import React, { useState, useMemo } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
  onOpenLightbox: (items: ProjectItem[], index: number) => void;
  onOpenQuoteModal: () => void;
}

const ITEMS_PER_PAGE = 24;

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onOpenLightbox,
  onOpenQuoteModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return PORTFOLIO_ITEMS;
    }
    return PORTFOLIO_ITEMS.filter(item => item.categories.includes(activeCategory));
  }, [activeCategory]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };

  const currentCategoryMeta = PORTFOLIO_CATEGORIES.find(c => c.id === activeCategory);

  return (
    <div className="portfolio-page">
      {/* 1. HERO HEADER */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
            <span>/</span>
            <span>Portfolio</span>
          </div>
          <h1 className="page-hero-title">Our Portfolio</h1>
          <p className="page-hero-desc">
            A Showcase of Timeless Craftsmanship. Explore our complete catalogue of bespoke kitchens, bedrooms, bars, bathrooms, and architectural woodwork.
          </p>
        </div>
      </section>

      {/* 2. GALLERY SECTION */}
      <section className="section">
        <div className="container">
          {/* Filter Bar */}
          <div className="filter-container">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                <span>{cat.name}</span>
                <span className="filter-count">{cat.count}</span>
              </button>
            ))}
          </div>

          {/* Active Category Description Banner */}
          {currentCategoryMeta && (
            <div 
              style={{ 
                textAlign: 'center', 
                marginBottom: '2.5rem', 
                maxWidth: '700px', 
                margin: '0 auto 2.5rem auto' 
              }}
            >
              <h2 style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>{currentCategoryMeta.name}</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                {currentCategoryMeta.description} • Showing {displayedItems.length} of {filteredItems.length} installations
              </p>
            </div>
          )}

          {/* Grid of Portfolio Items */}
          <div className="portfolio-grid">
            {displayedItems.map((item, index) => (
              <div
                key={item.id}
                className="portfolio-item"
                onClick={() => onOpenLightbox(filteredItems, index)}
              >
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="portfolio-img"
                  loading="lazy"
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-badge">{item.primaryCategory}</span>
                  <h3 className="portfolio-title">{item.title}</h3>
                  <div className="portfolio-view-prompt">
                    <span>Enlarge photo</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredItems.length && (
            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <button
                type="button"
                className="btn btn-outline btn-lg"
                onClick={handleLoadMore}
              >
                <span>Load More Projects ({filteredItems.length - visibleCount} remaining)</span>
              </button>
            </div>
          )}

          {/* Bottom CTA Card */}
          <div 
            style={{ 
              marginTop: '5rem', 
              background: 'var(--bg-card)', 
              border: '1px solid var(--border-subtle)', 
              borderRadius: 'var(--radius-lg)', 
              padding: '3rem',
              textAlign: 'center'
            }}
          >
            <span className="badge-tag">Custom Fabrication</span>
            <h2 style={{ fontSize: '1.85rem', marginBottom: '1rem' }}>
              Have A Specific Design In Mind?
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1rem' }}>
              We collaborate closely with clients and interior designers to bring custom visions to life. From single feature pieces to complete architectural fitouts.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOpenQuoteModal}
            >
              <span>Request Custom Consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
