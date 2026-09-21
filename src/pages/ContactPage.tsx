import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { SERVICES_DATA } from '../data/servicesData';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  onSuccess: (message: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'designer-kitchens',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onSuccess(`Thank you ${formData.firstName}! Your message has been sent successfully.`);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'designer-kitchens',
        message: ''
      });
    }, 800);
  };

  return (
    <div className="contact-page">
      {/* 1. HERO HEADER */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
            <span>/</span>
            <span>Contact Us</span>
          </div>
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-desc">
            Let’s Create Something Beautiful. Connect with our bespoke joinery craftsmen and design team.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Direct Info Cards & Map */}
            <div className="contact-cards-col">
              <div>
                <span className="badge-tag">Direct Channels</span>
                <h2 style={{ fontSize: '1.85rem', marginBottom: '0.75rem' }}>
                  Get In Touch Directly
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Please feel free to reach out to us using the contact information below. Our friendly and knowledgeable team is ready to assist with your project inquiries.
                </p>
              </div>

              {/* Phone Card */}
              <a href={`tel:${COMPANY_INFO.phone}`} className="contact-info-card">
                <div className="contact-card-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="contact-card-title">Call Our Studio</h3>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '0.2rem' }}>
                    {COMPANY_INFO.displayPhone}
                  </div>
                  <div className="contact-card-desc">Direct mobile line & WhatsApp consultations</div>
                </div>
              </a>

              {/* Email Card */}
              <a href={`mailto:${COMPANY_INFO.email}`} className="contact-info-card">
                <div className="contact-card-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="contact-card-title">Email Correspondence</h3>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff', marginBottom: '0.2rem' }}>
                    {COMPANY_INFO.email}
                  </div>
                  <div className="contact-card-desc">Send architectural plans & design drawings</div>
                </div>
              </a>

              {/* Address Card */}
              <a 
                href={COMPANY_INFO.address.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-info-card"
              >
                <div className="contact-card-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="contact-card-title">Workshop & Showroom</h3>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '0.2rem' }}>
                    {COMPANY_INFO.address.full}
                  </div>
                  <div className="contact-card-desc">Open for scheduled visits & material consultations</div>
                </div>
              </a>

              {/* Operating Hours Card */}
              <div className="contact-info-card">
                <div className="contact-card-icon">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="contact-card-title">Operating Hours</h3>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '0.2rem' }}>
                    {COMPANY_INFO.workingHours}
                  </div>
                  <div className="contact-card-desc">Saturday & Sunday by appointment only</div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="map-container">
                <iframe
                  title="NDti Workshop Location"
                  className="map-iframe"
                  src="https://maps.google.com/maps?q=Unit%202,%2015%20Muscat%20road,%20Saxenburg%20Park%201,%20Blackheath&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="contact-form-wrap">
              <span className="badge-tag">Online Inquiry</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Send Us A Message</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Fill out the form below and an NDti bespoke joinery specialist will review your inquiry and follow up within 24 hours.
              </p>

              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
                  <div 
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem auto'
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>Thank You!</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    Your message has been dispatched to our joinery team. We will be in touch shortly to discuss your custom project.
                  </p>
                  <button 
                    type="button" 
                    className="btn btn-outline btn-sm"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First Name *</label>
                      <input 
                        type="text" 
                        required 
                        className="form-input" 
                        placeholder="Name"
                        value={formData.firstName}
                        onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Surname *</label>
                      <input 
                        type="text" 
                        required 
                        className="form-input" 
                        placeholder="Surname"
                        value={formData.lastName}
                        onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input 
                        type="email" 
                        required 
                        className="form-input" 
                        placeholder="Email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Contact Number *</label>
                      <input 
                        type="tel" 
                        required 
                        className="form-input" 
                        placeholder="Contact Number"
                        pattern="[0-9()#&+\*\-=. ]+"
                        title="Only numbers and phone characters are accepted."
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Service of Interest</label>
                    <select 
                      className="form-select"
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                    >
                      {SERVICES_DATA.map(s => (
                        <option key={s.slug} value={s.slug} style={{ background: '#181820' }}>
                          {s.title}
                        </option>
                      ))}
                      <option value="ianart" style={{ background: '#181820' }}>IanArt Bespoke Art Installation</option>
                      <option value="whole-home" style={{ background: '#181820' }}>Complete Interior Joinery</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message *</label>
                    <textarea 
                      rows={5} 
                      required
                      className="form-textarea"
                      placeholder="Message"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
