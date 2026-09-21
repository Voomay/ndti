import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    category: 'Services & Scope',
    question: 'What bespoke joinery and interior services do you offer?',
    answer:
      'We specialize in luxury bespoke joinery and custom architectural cabinetry. Our core offerings include designer kitchens, floor-to-ceiling bedroom wardrobes, bathroom vanities, executive home study joinery, wine cellars, custom bars, and turnkey commercial office fitouts.',
  },
  {
    category: 'Consultation',
    question: 'How do I get started with a design consultation?',
    answer:
      'You can request a complimentary initial consultation by clicking "Request Consultation" or using our contact form. Our team will arrange an exploratory discovery session to review your floor plans, aesthetic preferences, spatial requirements, and timeline.',
  },
  {
    category: 'Process & Timeline',
    question: 'What is included in your design and fabrication process?',
    answer:
      'Our turnkey process includes precision site surveys, 3D architectural renders, detailed material schedules, computer-aided CNC precision milling in our Blackheath workshop, hand-finished assembly, and careful on-site fitting by master craftsmen.',
  },
  {
    category: 'Renovations',
    question: 'Do you handle full residential and commercial renovations?',
    answer:
      'Yes. Beyond freestanding cabinetry, we manage turnkey architectural renovations including spatial reconfiguration, structural wall adjustments, plumbing coordination for sinks/appliances, electrical LED wiring, and final reveal styling.',
  },
  {
    category: 'Materials & Quality',
    question: 'What materials, hardware, and guarantees do you provide?',
    answer:
      'We utilize moisture-resistant HMR and marine-grade substrates, premium natural veneers, quartz and sintered stone surfaces, and industry-leading German Blum concealed soft-close runners and hinges backed by comprehensive workmanship guarantees.',
  },
  {
    category: 'Budgeting',
    question: 'Can you work within my specific project budget parameters?',
    answer:
      'We engineer solutions tailored to your investment goals. We offer transparent material schedules and modular configuration options to ensure you achieve breathtaking bespoke luxury without unanticipated budget surprises.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="section-faq"
      style={{
        padding: '120px 0',
        backgroundColor: '#ffffff',
        position: 'relative',
      }}
    >
      {/* Subtle Top Divider Line for Smooth Section Transition */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '5%',
          right: '5%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(52, 31, 22, 0.08) 50%, transparent 100%)',
        }}
      />

      <div className="container">
        <div className="row g-5 align-items-start">
          {/* Left Column: Title & CTA Card */}
          <div className="col-lg-4">
            <div className="position-sticky" style={{ top: '100px' }}>
              <div
                className="d-inline-flex align-items-center mb-2 px-3 py-1"
                style={{
                  background: 'rgba(128, 82, 49, 0.08)',
                  borderRadius: '20px',
                  color: '#805231',
                  fontSize: '12px',
                  letterSpacing: '2px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                Got Questions?
              </div>

              <h2
                style={{
                  fontSize: 'clamp(30px, 3vw, 40px)',
                  lineHeight: '1.2',
                  fontWeight: 600,
                  color: '#341F16',
                  marginTop: '12px',
                  marginBottom: '16px',
                }}
              >
                Frequently Asked Questions
              </h2>

              <p
                style={{
                  fontSize: '16px',
                  lineHeight: '1.75',
                  color: 'rgba(52, 31, 22, 0.75)',
                  marginBottom: '28px',
                }}
              >
                Here are answers to the most common questions regarding our bespoke joinery process,
                materials, timelines, and consultation bookings.
              </p>

              {/* High-End Direct Contact Card */}
              <div
                style={{
                  background: '#faf7f2',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid rgba(128, 82, 49, 0.12)',
                }}
              >
                <h4 style={{ fontSize: '17px', fontWeight: 600, color: '#341F16', marginBottom: '8px' }}>
                  Have a custom question?
                </h4>
                <p style={{ fontSize: '14px', color: 'rgba(52, 31, 22, 0.7)', lineHeight: '1.6', marginBottom: '18px' }}>
                  Speak directly with our architectural joinery specialists about your specific space.
                </p>
                <a
                  href="#section-contact"
                  className="btn btn-main d-inline-flex align-items-center justify-content-center w-100"
                  style={{
                    backgroundColor: '#805231',
                    color: '#ffffff',
                    padding: '12px 20px',
                    borderRadius: '24px',
                    fontWeight: 600,
                    fontSize: '14px',
                    textDecoration: 'none',
                    gap: '8px',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#341F16';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#805231';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>Contact Our Team</span>
                  <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Accordion List */}
          <div className="col-lg-8">
            <div className="d-flex flex-column gap-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      borderRadius: '14px',
                      border: isOpen
                        ? '1px solid rgba(128, 82, 49, 0.35)'
                        : '1px solid rgba(52, 31, 22, 0.1)',
                      backgroundColor: isOpen ? '#fdfbf9' : '#ffffff',
                      boxShadow: isOpen
                        ? '0 10px 30px rgba(52, 31, 22, 0.06)'
                        : '0 2px 8px rgba(0, 0, 0, 0.02)',
                      transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                      overflow: 'hidden',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      className="w-100 text-start d-flex justify-content-between align-items-center btn"
                      style={{
                        padding: '22px 24px',
                        border: 'none',
                        background: 'transparent',
                        outline: 'none',
                        boxShadow: 'none',
                      }}
                      aria-expanded={isOpen}
                    >
                      <div className="d-flex flex-column" style={{ paddingRight: '16px' }}>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '1.5px',
                            color: isOpen ? '#805231' : '#9c8e84',
                            marginBottom: '4px',
                          }}
                        >
                          {faq.category}
                        </span>
                        <span
                          style={{
                            fontSize: '18px',
                            fontWeight: 600,
                            color: isOpen ? '#341F16' : '#221a15',
                            lineHeight: 1.35,
                          }}
                        >
                          {faq.question}
                        </span>
                      </div>

                      <span
                        className="d-inline-flex align-items-center justify-content-center flex-shrink-0"
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: isOpen ? '#805231' : 'rgba(52, 31, 22, 0.06)',
                          color: isOpen ? '#ffffff' : '#341F16',
                          fontSize: '13px',
                          transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      >
                        <i className="fas fa-chevron-down"></i>
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        className="px-4 pb-4 pt-1"
                        style={{
                          fontSize: '15px',
                          lineHeight: '1.8',
                          color: 'rgba(52, 31, 22, 0.8)',
                          borderTop: '1px solid rgba(128, 82, 49, 0.08)',
                          marginTop: '4px',
                          paddingTop: '16px',
                          animation: 'fadeIn 0.3s ease forwards',
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
