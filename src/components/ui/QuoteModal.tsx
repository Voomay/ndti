import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'designer-kitchens',
    timeline: 'Within 1-3 Months',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onSuccess(`Thank you ${formData.firstName}! Your bespoke quote inquiry has been received.`);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 2000);
    }, 900);
  };

  return (
    <div 
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content">
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close quote modal"
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
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
            <h3 style={{ marginBottom: '0.75rem' }}>Inquiry Received</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Thank you for contacting NDti. Our master joinery consultant will review your specifications and contact you shortly.
            </p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '2rem' }}>
              <span className="badge-tag">Bespoke Inquiry</span>
              <h2 style={{ fontSize: '1.8rem', marginTop: '0.5rem' }}>Request A Quote</h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                Share your architectural joinery vision with our team. We provide tailored concept consultations and precision estimates.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-input" 
                    placeholder="e.g. David"
                    value={formData.firstName}
                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-input" 
                    placeholder="e.g. Van Der Merwe"
                    value={formData.lastName}
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    className="form-input" 
                    placeholder="name@domain.co.za"
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
                    placeholder="082 123 4567"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Joinery Discipline *</label>
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
                    <option value="art-installation" style={{ background: '#181820' }}>
                      IanArt Installation
                    </option>
                    <option value="whole-home-joinery" style={{ background: '#181820' }}>
                      Complete Residential Joinery
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Estimated Timeline</label>
                  <select 
                    className="form-select"
                    value={formData.timeline}
                    onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                  >
                    <option value="Immediate" style={{ background: '#181820' }}>Immediate (Under 1 month)</option>
                    <option value="Within 1-3 Months" style={{ background: '#181820' }}>Within 1 - 3 Months</option>
                    <option value="3-6 Months" style={{ background: '#181820' }}>3 - 6 Months</option>
                    <option value="Planning & Concept Phase" style={{ background: '#181820' }}>Planning & Concept Phase</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Project Details & Requirements</label>
                <textarea 
                  rows={4} 
                  className="form-textarea"
                  placeholder="Tell us about the space, preferred timber or finishes, aesthetic vision, or specific architectural features..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Submit Quote Request</span>
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
