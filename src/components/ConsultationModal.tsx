import React, { useState } from 'react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    budget: '$25k - $50k',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      className="position-fixed inset-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
      style={{
        top: 0,
        left: 0,
        background: 'rgba(10, 10, 12, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 99999,
      }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded p-4 p-md-5 position-relative text-dark"
        style={{
          maxWidth: '560px',
          width: '100%',
          borderRadius: '20px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="btn btn-close position-absolute"
          style={{ top: '24px', right: '24px' }}
          onClick={onClose}
          aria-label="Close"
        ></button>

        {submitted ? (
          <div className="text-center py-5">
            <div
              className="d-inline-flex align-items-center justify-content-center mb-3"
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: '#e8f5e9',
                color: '#2e7d32',
                fontSize: '32px',
              }}
            >
              <i className="fas fa-check"></i>
            </div>
            <h3 style={{ fontSize: '26px', fontWeight: 600 }}>Thank You!</h3>
            <p style={{ color: '#666', fontSize: '15px' }}>
              Your consultation request has been received. Our senior architect will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <div className="subtitle mb-2">Book an Appointment</div>
              <h3 style={{ fontSize: '28px', fontWeight: 600, margin: 0 }}>
                Schedule a Free Consultation
              </h3>
              <p style={{ color: '#777', fontSize: '14px', marginTop: '6px' }}>
                Share your space details and let us create a tailored interior architecture proposal.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
              <div>
                <label className="form-label" style={{ fontSize: '13px', fontWeight: 600, color: '#444' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ borderRadius: '8px', padding: '10px 14px' }}
                />
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: '13px', fontWeight: 600, color: '#444' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ borderRadius: '8px', padding: '10px 14px' }}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: '13px', fontWeight: 600, color: '#444' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    className="form-control"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ borderRadius: '8px', padding: '10px 14px' }}
                  />
                </div>
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: '13px', fontWeight: 600, color: '#444' }}>
                    Project Type
                  </label>
                  <select
                    className="form-select"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{ borderRadius: '8px', padding: '10px 14px' }}
                  >
                    <option value="Residential">Residential Interior</option>
                    <option value="Commercial">Commercial / Office</option>
                    <option value="Full Renovation">Full Renovation</option>
                    <option value="Custom Joinery">Custom Joinery</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: '13px', fontWeight: 600, color: '#444' }}>
                    Estimated Budget
                  </label>
                  <select
                    className="form-select"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{ borderRadius: '8px', padding: '10px 14px' }}
                  >
                    <option value="Under $25k">Under $25k</option>
                    <option value="$25k - $50k">$25k - $50k</option>
                    <option value="$50k - $100k">$50k - $100k</option>
                    <option value="$100k+">$100k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="form-label" style={{ fontSize: '13px', fontWeight: 600, color: '#444' }}>
                  Project Details
                </label>
                <textarea
                  rows={3}
                  className="form-control"
                  placeholder="Tell us about your property, timeline, or design preferences..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ borderRadius: '8px', padding: '10px 14px' }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-main fx-slide mt-2 w-100"
                style={{ padding: '14px', borderRadius: '10px', border: 'none' }}
              >
                <span>Submit Consultation Request &rarr;</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
