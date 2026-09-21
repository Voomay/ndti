const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', 'dist', 'index.html');
const destPath = path.join(__dirname, '..', 'index.html');

let html = fs.readFileSync(srcPath, 'utf8');

// 1. Ensure custom.css and ai-assistant.css in head
if (!html.includes('css/custom.css')) {
  html = html.replace('</head>', '    <link href="css/custom.css" rel="stylesheet" type="text/css">\n    <link href="css/ai-assistant.css" rel="stylesheet" type="text/css">\n</head>');
}

// 2. Update navigation menu
html = html.replace(
  '<li><a class="menu-item" href="why-choose-us.html">Why Choose Us</a></li>',
  '<li><a class="menu-item" href="#why-choose-us">Why Choose Us</a></li>'
);
html = html.replace(
  '<li><a class="menu-item" href="faq.html">FAQ</a></li>',
  '<li><a class="menu-item" href="#faq">FAQ</a></li>'
);

// 3. Update Hero Section
const oldHeroContentRegex = /<div class="row">[\s\S]*?<div class="col-lg-12">[\s\S]*?<h1 class="fs-sm-10vw mb-0 wow fadeInLeft">Inspire Your Space<\/h1>[\s\S]*?<\/div>[\s\S]*?<div class="col-lg-4 offset-lg-1">[\s\S]*?<\/div>[\s\S]*?<\/div>/;

const newHeroContent = `<div class="row justify-content-center">
                                <div class="col-lg-12 text-center">
                                    <div class="hero-content-centered">
                                        <div class="hero-slogan-rotator">
                                            <div class="hero-slogan-slide active">
                                                <span class="line-top">Inspire Your Space</span>
                                                <span class="line-bottom">Art &amp; Design</span>
                                            </div>
                                            <div class="hero-slogan-slide">
                                                <span class="line-top">Custom Bespoke Joinery</span>
                                                <span class="line-bottom">Handcrafted Luxury</span>
                                            </div>
                                            <div class="hero-slogan-slide">
                                                <span class="line-top">Where Precision Joinery</span>
                                                <span class="line-bottom">Meets Fine Art</span>
                                            </div>
                                            <div class="hero-slogan-slide">
                                                <span class="line-top">Designer Kitchens &amp; Living</span>
                                                <span class="line-bottom">Tailored Perfection</span>
                                            </div>
                                        </div>

                                        <p class="hero-description wow fadeInUp" data-wow-delay=".2s">At NDti, we are dedicated to the art of creating custom bespoke joinery that transcends the ordinary. In collaboration with the artist IanArt, we turn spaces into stunning masterpieces.</p>

                                        <div class="hero-cta-buttons wow fadeInUp" data-wow-delay=".4s">
                                            <a href="gallery.html" class="btn-main fx-slide"><span>Explore Portfolio</span></a>
                                            <a href="contact.html" class="btn-hero-secondary"><span>Book Consultation</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>`;

html = html.replace(oldHeroContentRegex, newHeroContent);

// 4. Add Why Choose Us section before Video Section
const whyChooseUsSection = `
            <!-- Catchy Why Choose Us Section -->
            <section id="why-choose-us">
                <div class="container">
                    <div class="row mb-5 justify-content-center text-center">
                        <div class="col-lg-8">
                            <span class="subtitle mb-2" style="color: #d2a073;">The NDti Standard</span>
                            <h2 class="text-white" style="font-size: clamp(28px, 3.8vw, 42px); line-height: 1.25; font-weight: 600;">
                                What Sets NDti &amp; IanArt Apart
                            </h2>
                            <p class="mt-3 mx-auto" style="font-size: 16px; color: rgba(255, 255, 255, 0.75); max-width: 680px;">
                                Discerning homeowners, interior designers, and architects choose NDti because we treat joinery as fine art&mdash;merging bespoke woodworking with artistic perfection.
                            </p>
                        </div>
                    </div>

                    <div class="row g-4">
                        <!-- Pillar 1 -->
                        <div class="col-lg-3 col-md-6">
                            <div class="why-us-card wow fadeInUp" data-wow-delay=".1s">
                                <div class="why-us-icon-wrapper">
                                    <i class="fa-solid fa-pen-ruler fa-2x"></i>
                                </div>
                                <h3>Tailor-Made 3D Design</h3>
                                <p>
                                    Every project begins from scratch. We collaborate closely with you and your architects to generate photorealistic 3D concepts before precision manufacturing starts.
                                </p>
                            </div>
                        </div>

                        <!-- Pillar 2 -->
                        <div class="col-lg-3 col-md-6">
                            <div class="why-us-card wow fadeInUp" data-wow-delay=".2s">
                                <div class="why-us-icon-wrapper">
                                    <i class="fa-solid fa-palette fa-2x"></i>
                                </div>
                                <h3>Art by IanArt</h3>
                                <p>
                                    Our exclusive collaboration with artist IanArt infuses functional cabinetry with distinctive artistic touches, custom hand-finished patinas, and breathtaking visual character.
                                </p>
                            </div>
                        </div>

                        <!-- Pillar 3 -->
                        <div class="col-lg-3 col-md-6">
                            <div class="why-us-card wow fadeInUp" data-wow-delay=".3s">
                                <div class="why-us-icon-wrapper">
                                    <i class="fa-solid fa-gem fa-2x"></i>
                                </div>
                                <h3>Finer Details &amp; Joints</h3>
                                <p>
                                    From meticulously crafted joinery joints to moisture-resistant high-density substrates and premium European Blum &amp; Grass lifetime hardware, our pieces endure.
                                </p>
                            </div>
                        </div>

                        <!-- Pillar 4 -->
                        <div class="col-lg-3 col-md-6">
                            <div class="why-us-card wow fadeInUp" data-wow-delay=".4s">
                                <div class="why-us-icon-wrapper">
                                    <i class="fa-solid fa-medal fa-2x"></i>
                                </div>
                                <h3>Turnkey Installation</h3>
                                <p>
                                    Our dedicated in-house master artisans handle the entire installation process with punctuality, millimeter precision, clean job sites, and zero disruption.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Badge Strip -->
                    <div class="why-us-badge-strip wow fadeInUp" data-wow-delay=".5s">
                        <div class="why-us-badge-item">
                            <i class="fa-solid fa-check-circle"></i>
                            <span>Photorealistic 3D Architectural Renders</span>
                        </div>
                        <div class="why-us-badge-item">
                            <i class="fa-solid fa-check-circle"></i>
                            <span>Blum &amp; Grass Lifetime Soft-Close</span>
                        </div>
                        <div class="why-us-badge-item">
                            <i class="fa-solid fa-check-circle"></i>
                            <span>Moisture-Resistant High-Density Core</span>
                        </div>
                        <div class="why-us-badge-item">
                            <i class="fa-solid fa-check-circle"></i>
                            <span>100% In-House Master Artisans</span>
                        </div>
                    </div>
                </div>
            </section>
`;

html = html.replace('<!-- Video Section -->', whyChooseUsSection + '\n            <!-- Video Section -->');

// 5. Update FAQ section to add id="faq" and enhanced heading
html = html.replace(
  '<!-- FAQ Section -->\n            <section class="pt-0">',
  '<!-- FAQ Section -->\n            <section id="faq" class="pt-0">'
);
html = html.replace(
  '<div class="col-lg-4">\n                            <h2 class="wow fadeInRight">FAQ</h2>\n                        </div>',
  `<div class="col-lg-4">
                            <div class="subtitle">Got Questions?</div>
                            <h2 class="wow fadeInRight">Frequently Asked Questions</h2>
                            <p class="text-muted mt-3">Everything you need to know about our bespoke design, manufacturing, and installation process.</p>
                        </div>`
);

// 6. Replace Footer with Luxury Redesigned Footer
const oldFooterRegex = /<!-- footer begin -->[\s\S]*?<!-- footer close -->/;

const newLuxuryFooter = `<!-- footer begin -->
        <footer class="luxury-footer">
            <!-- Top Banner Strip -->
            <div class="footer-top-banner">
                <div class="container">
                    <div class="row align-items-center justify-content-between gy-4">
                        <div class="col-lg-8">
                            <span class="subtitle mb-1" style="color: #d2a073;">Start Your Journey</span>
                            <h2 class="text-white mb-2 fs-32">Ready to transform your home with bespoke joinery?</h2>
                            <p class="mb-0 text-white-50 fs-15">Collaborate with NDti &amp; IanArt to turn your architectural vision into handcrafted reality.</p>
                        </div>
                        <div class="col-lg-4 text-lg-end">
                            <div class="d-inline-flex gap-3 flex-wrap">
                                <a href="contact.html" class="btn-main fx-slide"><span>Book Consultation</span></a>
                                <a href="https://wa.me/27838008834?text=Hi%20NDti%20%26%20IanArt!%20I'd%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer" class="btn-hero-secondary"><i class="fa-brands fa-whatsapp me-2 text-success"></i> WhatsApp Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Footer Area -->
            <div class="footer-main-area">
                <div class="container">
                    <div class="row g-4 justify-content-between">
                        <!-- Column 1: Brand & Collaborations -->
                        <div class="col-lg-4 col-md-6 footer-brand">
                            <img src="images/ndti/logo.png" class="logo-footer mb-3" alt="NDti in collaboration with IanArt">
                            <p>
                                The place where joinery &amp; art meet. In proud collaboration with artist IanArt, we create custom bespoke cabinetry, luxury designer kitchens, and architectural woodwork that transcend the ordinary.
                            </p>
                            <div class="footer-trust-seals">
                                <span class="trust-seal"><i class="fa-solid fa-gem"></i> Master Artisans</span>
                                <span class="trust-seal"><i class="fa-solid fa-circle-check"></i> Blum &amp; Grass Hardware</span>
                                <span class="trust-seal"><i class="fa-solid fa-palette"></i> IanArt Originals</span>
                            </div>
                            <div class="footer-social-pills">
                                <a href="https://wa.me/27838008834?text=Hi%20NDti%20%26%20IanArt!" target="_blank" rel="noopener noreferrer" class="footer-social-pill" title="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
                                <a href="https://www.facebook.com/profile.php?id=61554944405313" target="_blank" rel="noopener noreferrer" class="footer-social-pill" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="tel:0838008834" class="footer-social-pill" title="Direct Call"><i class="fa-solid fa-phone"></i></a>
                                <a href="mailto:info@ianartndti.co.za" class="footer-social-pill" title="Email Us"><i class="fa-solid fa-envelope"></i></a>
                            </div>
                        </div>

                        <!-- Column 2: Quick Links -->
                        <div class="col-lg-2 col-md-3 col-6">
                            <h4 class="footer-col-title">Navigation</h4>
                            <ul class="footer-links-list">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="services-style-2.html">All Services</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="#why-choose-us">Why Choose Us</a></li>
                                <li><a href="#faq">FAQ</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>

                        <!-- Column 3: Specialties -->
                        <div class="col-lg-3 col-md-3 col-6">
                            <h4 class="footer-col-title">Our Specialties</h4>
                            <ul class="footer-links-list">
                                <li><a href="services-style-2.html#kitchens">Designer Kitchens</a></li>
                                <li><a href="services-style-2.html#bedrooms">Bedrooms &amp; Bathrooms</a></li>
                                <li><a href="services-style-2.html#bespoke">Custom Bespoke Joinery</a></li>
                                <li><a href="services-style-2.html#wardrobes">Cupboards &amp; Closets</a></li>
                                <li><a href="services-style-2.html#living">Living Spaces &amp; TV Units</a></li>
                                <li><a href="services-style-2.html#offices">Studies &amp; Home Offices</a></li>
                                <li><a href="services-style-2.html#winebars">Wine Cellars &amp; Bars</a></li>
                            </ul>
                        </div>

                        <!-- Column 4: Studio & Workshop Details -->
                        <div class="col-lg-3 col-md-12">
                            <h4 class="footer-col-title">Studio &amp; Workshop</h4>
                            
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon"><i class="fa-solid fa-location-dot"></i></div>
                                <div class="footer-contact-text">
                                    <span>Cape Town Workshop</span>
                                    <p>Unit 2, 15 Muscat Road, Saxenburg Park 1, Blackheath, Cape Town</p>
                                </div>
                            </div>

                            <div class="footer-contact-item">
                                <div class="footer-contact-icon"><i class="fa-solid fa-phone"></i></div>
                                <div class="footer-contact-text">
                                    <span>Direct Line &amp; WhatsApp</span>
                                    <a href="tel:0838008834">083 800 8834</a>
                                </div>
                            </div>

                            <div class="footer-contact-item">
                                <div class="footer-contact-icon"><i class="fa-solid fa-envelope"></i></div>
                                <div class="footer-contact-text">
                                    <span>Email Enquiries</span>
                                    <a href="mailto:info@ianartndti.co.za">info@ianartndti.co.za</a>
                                </div>
                            </div>

                            <div class="footer-contact-item">
                                <div class="footer-contact-icon"><i class="fa-solid fa-clock"></i></div>
                                <div class="footer-contact-text">
                                    <span>Operating Hours</span>
                                    <p>Mon – Fri: 08:00 – 17:00<br>Sat: By Appointment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Subfooter -->
            <div class="luxury-subfooter">
                <div class="container">
                    <div class="row align-items-center justify-content-between gy-2">
                        <div class="col-md-6 text-center text-md-start">
                            &copy; 2026 NDti in collaboration with IanArt Pty Ltd. All Rights Reserved.
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <span style="color: #d2a073;">Cape Town, South Africa</span> &bull; Where Joinery Meets Fine Art
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- footer close -->`;

html = html.replace(oldFooterRegex, newLuxuryFooter);

// 7. Ensure hero-rotator.js is included before closing body
if (!html.includes('js/hero-rotator.js')) {
  html = html.replace(
    '<script src="js/ai-assistant.js"></script>',
    '<script src="js/hero-rotator.js"></script>\n    <script src="js/ai-assistant.js"></script>'
  );
}

fs.writeFileSync(destPath, html, 'utf8');
console.log('Successfully generated index.html. Size:', fs.statSync(destPath).size);
