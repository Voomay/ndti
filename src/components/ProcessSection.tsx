import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: 'fas fa-comments',
      title: 'Consultation',
      desc: 'We discuss your needs, style, and goals to understand your vision and space requirements clearly.',
    },
    {
      num: '02',
      icon: 'fas fa-pencil-ruler',
      title: 'Concept Design',
      desc: 'Our team creates detailed concepts, layouts, and mood boards tailored to your lifestyle and taste.',
    },
    {
      num: '03',
      icon: 'fas fa-tools',
      title: 'Execution',
      desc: 'We bring the design to life with quality materials, skilled work, and precise project management.',
    },
    {
      num: '04',
      icon: 'fas fa-home',
      title: 'Final Reveal',
      desc: 'Your completed space is delivered beautifully finished, ready to enjoy with comfort and style.',
    },
  ];

  return (
    <section id="section-process" style={{ padding: '90px 0 110px' }}>
      <div className="container">
        {/* Header */}
        <div className="row mb-5 text-center justify-content-center">
          <div className="col-lg-6">
            <div className="subtitle mx-auto mb-2">Our Process</div>
            <h2 style={{ fontSize: '38px', lineHeight: '1.25', fontWeight: 600 }}>
              4 Easy Steps to Your Dream Space
            </h2>
            <p className="mt-3" style={{ fontSize: '16px', color: 'rgba(52, 31, 22, 0.75)' }}>
              From the initial creative brainstorm to the final turnkey reveal, our transparent step-by-step
              method guarantees flawless execution.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="row g-4 justify-content-center">
          {steps.map((step, idx) => (
            <div key={idx} className="col-6 col-md-3">
              <div
                className="de-step h-100 p-4 text-center rounded position-relative"
                style={{
                  background: '#faf7f5',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderRadius: '16px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {/* Step number badge */}
                <div
                  className="position-absolute"
                  style={{
                    top: '16px',
                    right: '18px',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: 'rgba(52, 31, 22, 0.3)',
                  }}
                >
                  {step.num}
                </div>

                <div
                  className="de-step-icon d-inline-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: '#fff',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                    color: 'var(--primary-color, #c29d59)',
                  }}
                >
                  <i className={`${step.icon} fa-2x`}></i>
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(52, 31, 22, 0.75)', margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
