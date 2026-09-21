import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { MAIN_NAV_LINKS } from '../../data/navigation';
import { COMPANY_INFO } from '../../data/companyInfo';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (href: string, isExternal?: boolean) => {
    if (isExternal) return;
    const page = href === '/' ? 'home' : href.replace('/', '');
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-container">
          <a 
            href="#home" 
            className="navbar-brand" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}
            title="NDti In Collaboration with IanArt"
          >
            <img 
              src="/assets/logo/ndti-logo.png" 
              alt="NDti in collaboration with IanArt" 
              className="navbar-logo"
            />
          </a>

          <ul className="navbar-links">
            {MAIN_NAV_LINKS.map((link) => {
              const linkPage = link.href === '/' ? 'home' : link.href.replace('/', '');
              const isActive = !link.isExternal && currentPage === linkPage;

              if (link.isExternal) {
                return (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="nav-link"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={13} style={{ opacity: 0.6 }} />
                    </a>
                  </li>
                );
              }

              return (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(link.href)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="nav-actions">
            <button 
              type="button" 
              className="btn btn-primary btn-sm"
              onClick={onOpenQuoteModal}
            >
              Get A Quote
            </button>

            <button 
              type="button" 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Drawer */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div>
          <div className="mobile-drawer-header">
            <img 
              src="/assets/logo/ndti-logo.png" 
              alt="NDti" 
              style={{ height: '36px', width: 'auto' }}
            />
            <button 
              type="button" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '4px' }}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <ul className="mobile-nav-links">
            {MAIN_NAV_LINKS.map((link) => {
              const linkPage = link.href === '/' ? 'home' : link.href.replace('/', '');
              const isActive = !link.isExternal && currentPage === linkPage;

              if (link.isExternal) {
                return (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mobile-nav-link"
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={16} />
                    </a>
                  </li>
                );
              }

              return (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(link.href)}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button 
            type="button" 
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }}
          >
            Get A Quote
          </button>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            <p>{COMPANY_INFO.displayPhone}</p>
            <p>{COMPANY_INFO.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};
