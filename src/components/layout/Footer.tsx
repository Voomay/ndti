import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';
import { FOOTER_QUICK_LINKS, FOOTER_SERVICES_LINKS } from '../../data/navigation';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('/services#')) {
      onNavigate('services');
      const hash = href.split('#')[1];
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const page = href === '/' ? 'home' : href.replace('/', '');
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand */}
          <div>
            <img 
              src="/assets/logo/ndti-logo.png" 
              alt="NDti in Collaboration with IanArt" 
              className="footer-logo"
            />
            <p style={{ fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              At NDti, we are passionate about the finer details. From meticulously crafted joinery joints to precise measurements and finishing touches, we collaborate with IanArt to turn spaces into stunning masterpieces.
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-champagne)' }}>
              {COMPANY_INFO.tagline}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(link.href)}
                    className="footer-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                  >
                    <ArrowRight size={13} style={{ color: 'var(--color-champagne)' }} />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links">
              {FOOTER_SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(link.href)}
                    className="footer-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                  >
                    <ArrowRight size={13} style={{ color: 'var(--color-champagne)' }} />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="footer-col-title">Contact Information</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <Phone size={16} />
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Call Direct</div>
                  <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: '#fff', fontWeight: 500 }}>
                    {COMPANY_INFO.displayPhone}
                  </a>
                </div>
              </li>
              <li className="footer-contact-item">
                <Mail size={16} />
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Email Inquiries</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#fff' }}>
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </li>
              <li className="footer-contact-item">
                <MapPin size={16} />
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Studio & Workshop</div>
                  <span>{COMPANY_INFO.address.full}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            NDti in Collabration with IanArt Pty Ltd | Copyright © 2024. All rights reserved.
          </p>
          <button 
            type="button" 
            onClick={scrollToTop}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              padding: '0.45rem 0.9rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
