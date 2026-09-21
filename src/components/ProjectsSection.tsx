import React, { useState } from 'react';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
}

export const ProjectsSection: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      id: 1,
      title: 'Modern Minimalist Living Room',
      category: 'Living Room',
      image: '/images/projects-wide/1.webp',
      tags: ['Living Room', 'Minimalist', 'Oak Wood'],
    },
    {
      id: 2,
      title: 'Contemporary Luxury Suite',
      category: 'Bedroom',
      image: '/images/projects-wide/2.webp',
      tags: ['Bedroom', 'Luxury', 'Warm Lighting'],
    },
    {
      id: 3,
      title: 'Nordic Open Plan Kitchen',
      category: 'Kitchen',
      image: '/images/projects-wide/3.webp',
      tags: ['Kitchen', 'Nordic Style', 'Clean Lines'],
    },
    {
      id: 4,
      title: 'Executive Ergonomic Home Office',
      category: 'Office',
      image: '/images/projects-wide/4.webp',
      tags: ['Home Office', 'Productivity', 'Custom Joinery'],
    },
    {
      id: 5,
      title: 'Artisan Wooden Dining Space',
      category: 'Dining',
      image: '/images/projects-wide/5.webp',
      tags: ['Dining Area', 'Rustic', 'Natural Wood'],
    },
    {
      id: 6,
      title: 'Italian Marble Spa Bathroom',
      category: 'Bathroom',
      image: '/images/projects-wide/6.webp',
      tags: ['Bathroom', 'Marble', 'Premium Finish'],
    },
  ];

  const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Office', 'Dining', 'Bathroom'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="section-projects" style={{ padding: '110px 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="row mb-4 g-4 align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="subtitle">Our Projects</div>
            <h2 style={{ fontSize: '38px', lineHeight: '1.25', fontWeight: 600, marginTop: '12px' }}>
              Crafting Spaces That Inspire and Endure
            </h2>
          </div>

          <div className="col-lg-5">
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(52, 31, 22, 0.75)', margin: 0 }}>
              Explore our curated portfolio of residential and commercial interior transformations.
              Each project reflects our dedication to timeless architectural aesthetics and everyday functionality.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="col-12 mt-4">
            <div className="d-flex flex-wrap gap-2 pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`btn btn-sm ${
                    activeCategory === cat ? 'btn-dark' : 'btn-outline-secondary'
                  }`}
                  style={{
                    borderRadius: '24px',
                    padding: '8px 20px',
                    fontSize: '14px',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row g-4 mt-2">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-lg-6">
              <div
                className="hover position-relative overflow-hidden rounded cursor-pointer"
                style={{ borderRadius: '14px', cursor: 'pointer' }}
                onClick={() => setSelectedImage(project.image)}
              >
                <div
                  className="position-relative overflow-hidden"
                  style={{ borderRadius: '14px', height: '380px' }}
                >
                  {/* Up-Right Arrow Floating Badge */}
                  <img
                    src="/images/misc/up-right-arrow.webp"
                    className="position-absolute hover-op-1"
                    alt="View project"
                    style={{
                      width: '64px',
                      padding: '16px',
                      zIndex: 4,
                      top: 0,
                      right: 0,
                      filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
                      transition: 'opacity 0.3s ease, transform 0.3s ease',
                    }}
                  />

                  {/* Main Project Image */}
                  <img
                    src={project.image}
                    className="w-100 h-100 hover-scale-1-2"
                    alt={project.title}
                    style={{
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
                    }}
                  />

                  {/* Gradient overlay on bottom */}
                  <div
                    className="position-absolute w-100"
                    style={{
                      bottom: 0,
                      left: 0,
                      height: '140px',
                      background: 'linear-gradient(to top, rgba(15, 12, 10, 0.85), transparent)',
                      zIndex: 2,
                    }}
                  ></div>

                  {/* Badges & Title at bottom */}
                  <div
                    className="position-absolute p-4 w-100 d-flex flex-column justify-content-end"
                    style={{ bottom: 0, left: 0, zIndex: 3 }}
                  >
                    <h4 className="text-white mb-2" style={{ fontSize: '20px', fontWeight: 600 }}>
                      {project.title}
                    </h4>
                    <div className="d-flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="badge"
                          style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(8px)',
                            color: '#fff',
                            fontWeight: 400,
                            fontSize: '12px',
                            padding: '6px 12px',
                            borderRadius: '6px',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      {selectedImage && (
        <div
          className="position-fixed inset-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{
            top: 0,
            left: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="position-relative" style={{ maxWidth: '1000px', maxHeight: '90vh' }}>
            <button
              className="btn btn-close btn-close-white position-absolute"
              style={{ top: '-40px', right: 0 }}
              onClick={() => setSelectedImage(null)}
              aria-label="Close Preview"
            ></button>
            <img
              src={selectedImage}
              alt="Project Full Preview"
              className="img-fluid rounded"
              style={{ maxHeight: '85vh', objectFit: 'contain', borderRadius: '12px' }}
            />
          </div>
        </div>
      )}
    </section>
  );
};