import React, { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  author: string;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: 'They transformed our home into a warm, elegant space. Every detail felt intentional and refined.',
      author: 'Anna L., Paris',
    },
    {
      quote: 'The layout and design exceeded expectations. Our space now feels larger, brighter, and more inviting.',
      author: 'Michael H., Toronto',
    },
    {
      quote: 'They truly understood our vision. The result reflects our lifestyle with style and comfort.',
      author: 'Nadia R., Dubai',
    },
    {
      quote: 'The entire process was smooth and inspiring. A truly professional and creative design team.',
      author: 'Tom S., Los Angeles',
    },
    {
      quote: 'From concept to finish, everything was flawless. Our home now feels both functional and beautiful.',
      author: 'Elise K., Amsterdam',
    },
    {
      quote: 'Creative ideas and excellent execution. They turned our space into something truly special.',
      author: 'David M., Singapore',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section
      id="section-testimonials"
      className="text-light position-relative overflow-hidden"
      style={{
        padding: '130px 0',
        backgroundImage: 'url(/images/background/1.webp)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* Dark Overlay */}
      <div
        className="position-absolute inset-0 w-100 h-100"
        style={{ top: 0, left: 0, background: 'rgba(20, 21, 23, 0.75)', zIndex: 1 }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row g-4 justify-content-center align-items-center">
          {/* Subtitle Column */}
          <div className="col-md-4">
            <div
              className="subtitle"
              style={{
                color: '#f0c6a2',
                background: 'rgba(240, 198, 162, 0.15)',
                border: '1px solid rgba(240, 198, 162, 0.25)',
              }}
            >
              Testimonials
            </div>
            <h2 className="text-white mt-3" style={{ fontSize: '36px', fontWeight: 600 }}>
              What Our Clients Say
            </h2>
          </div>

          {/* Testimonial Quote Column */}
          <div className="col-md-8">
            <div style={{ minHeight: '220px' }}>
              {/* Star ratings */}
              <div className="d-flex gap-1 mb-3" style={{ color: '#d19f78', fontSize: '18px' }}>
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>

              {/* Animated quote */}
              <h2
                className="text-white mb-4"
                style={{
                  fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)',
                  fontWeight: 400,
                  lineHeight: '1.4',
                  fontStyle: 'italic',
                  transition: 'opacity 0.4s ease',
                }}
              >
                "{testimonials[currentIndex].quote}"
              </h2>

              <span
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                — {testimonials[currentIndex].author}
              </span>
            </div>

            {/* Slider Dots */}
            <div className="d-flex align-items-center mt-5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`testi-dot ${currentIndex === idx ? 'active' : ''}`}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
