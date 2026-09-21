import React from 'react';

export const BlogSection: React.FC = () => {
  const blogs = [
    {
      id: 1,
      image: '/images/blog/1.webp',
      title: 'Smart layout planning for better space and comfort',
      excerpt:
        'Discover how thoughtful interior layouts can transform small or large spaces into functional, stylish, and comfortable living environments.',
      author: 'Amelia Bright',
      authorImg: '/images/testimonial/1.webp',
      date: '10 Jan 2025',
    },
    {
      id: 2,
      image: '/images/blog/2.webp',
      title: 'Choosing materials that elevate modern interiors',
      excerpt:
        'Learn how selecting the right materials can enhance aesthetics, durability, and overall value in contemporary interior design projects.',
      author: 'Daniel Yuen',
      authorImg: '/images/testimonial/2.webp',
      date: '22 Feb 2025',
    },
    {
      id: 3,
      image: '/images/blog/3.webp',
      title: 'Common mistakes to avoid in home interior design',
      excerpt:
        'Uncover frequent interior design mistakes and how to avoid them, from poor lighting choices to mismatched furniture and color schemes.',
      author: 'Leona Hart',
      authorImg: '/images/testimonial/3.webp',
      date: '05 Mar 2025',
    },
  ];

  return (
    <section id="section-blog" className="bg-color-op-1" style={{ padding: '110px 0' }}>
      <div className="container">
        {/* Header */}
        <div className="row mb-5 g-4 align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="subtitle">Latest From Our Journal</div>
            <h2 style={{ fontSize: '38px', lineHeight: '1.25', fontWeight: 600, marginTop: '12px' }}>
              Insights & Inspiration
            </h2>
          </div>
          <div className="col-lg-5">
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(52, 31, 22, 0.75)', margin: 0 }}>
              Stay updated with current design movements, architectural trends, material innovations, and
              expert guidance from our studio.
            </p>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="row g-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-lg-4 col-md-6">
              <div
                className="hover h-100 p-3 rounded"
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {/* Image */}
                <div
                  className="position-relative overflow-hidden rounded"
                  style={{ borderRadius: '12px', height: '240px' }}
                >
                  <img
                    src={blog.image}
                    className="w-100 h-100 hover-scale-1-1"
                    alt={blog.title}
                    style={{ objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
                  />
                </div>

                {/* Content */}
                <div className="pt-4 pb-2 px-2">
                  <h3 style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.35', marginBottom: '12px' }}>
                    <a
                      href="#section-blog"
                      className="text-dark text-decoration-none"
                      style={{ transition: 'color 0.2s ease' }}
                    >
                      {blog.title}
                    </a>
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(52, 31, 22, 0.75)', marginBottom: '18px' }}>
                    {blog.excerpt}
                  </p>

                  <hr style={{ borderColor: 'rgba(0,0,0,0.08)', margin: '14px 0' }} />

                  {/* Author & Date */}
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={blog.authorImg}
                        alt={blog.author}
                        style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <span style={{ fontSize: '13px', fontWeight: 500, color: '#333' }}>
                        {blog.author}
                      </span>
                    </div>

                    <div style={{ fontSize: '13px', color: '#888' }}>
                      <i className="far fa-calendar-alt me-1 text-muted"></i>
                      {blog.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
