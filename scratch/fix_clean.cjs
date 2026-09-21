const fs = require('fs');
const path = require('path');

const indexPath = path.join(process.cwd(), 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Remove the bottom ticks bar from the hero section
const ticksRegex = /<div class="abs w-100 bottom-0 z-2 pb-4 sm-hide">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;
html = html.replace(ticksRegex, '');

// 2. Remove the 3 feature cards (Expertise, Attention to Detail, Customer Satisfaction)
const featureCardsRegex = /<!-- 3 Feature Cards \(Expertise, Attention to Detail, Customer Satisfaction\) -->[\s\S]*?<\/section>/;
html = html.replace(featureCardsRegex, '');

// 3. Remove the Brand Partners Carousel / Strip (logos)
const brandStripRegex = /<!-- Brand Partners Carousel \/ Strip -->[\s\S]*?<\/section>/;
html = html.replace(brandStripRegex, '');

// 4. Update the Hero content to be CENTERED with rotating animation and centered buttons
const oldHeroContentRegex = /<div class="abs w-80 abs-middle z-2 w-100">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;

const newHeroCentered = `<div class="abs w-100 abs-middle z-2">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-10 text-center">
                                    <div class="hero-content-centered">
                                        <div class="hero-slogan-rotator">
                                            <div class="hero-slogan-slide active">
                                                <h1 class="hero-anim-top">Inspire Your Space</h1>
                                                <h1 class="hero-anim-bottom">Art &amp; Design</h1>
                                            </div>
                                            <div class="hero-slogan-slide">
                                                <h1 class="hero-anim-top">Creating Beautiful</h1>
                                                <h1 class="hero-anim-bottom">Spaces &amp; Art</h1>
                                            </div>
                                            <div class="hero-slogan-slide">
                                                <h1 class="hero-anim-top">Custom Bespoke Joinery</h1>
                                                <h1 class="hero-anim-bottom">Crafted For Living</h1>
                                            </div>
                                        </div>

                                        <p class="hero-desc mx-auto text-center">Custom Bespoke Joinery by NDti &amp; IanArt. The place where joinery and art meet to transform residential and commercial spaces into stunning masterpieces.</p>

                                        <div class="d-flex justify-content-center align-items-center gap-3">
                                            <a href="gallery.html" class="btn-main fx-slide"><span>View Portfolio</span></a>
                                            <a href="contact.html" class="btn-main fx-slide btn-line"><span>Contact Us</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;

html = html.replace(oldHeroContentRegex, newHeroCentered);

// 5. Ensure Why Choose Us section is placed cleanly before FAQ
const cleanWhyChooseUs = `
            <!-- Catchy Why Choose Us Section -->
            <section id="why-choose-us" class="bg-color-op-1 py-5" style="border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06);">
                <div class="container">
                    <div class="row mb-4 justify-content-center text-center">
                        <div class="col-lg-8">
                            <span class="subtitle mb-2" style="color: #d2a073;">The NDti Standard</span>
                            <h2 class="text-white">Why Choose Us</h2>
                            <p class="mt-2 text-white-50" style="font-size: 16px;">The place where joinery &amp; art meet. Combining master woodworking, artistic collaboration, and flawless installation.</p>
                        </div>
                    </div>

                    <div class="row g-4">
                        <div class="col-lg-3 col-md-6">
                            <div class="p-4 rounded-3 h-100" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
                                <div class="mb-3 d-inline-flex align-items-center justify-content-center" style="width: 50px; height: 50px; border-radius: 8px; background: rgba(210, 160, 115, 0.15); color: #d2a073; font-size: 20px;">
                                    <i class="fa-solid fa-pen-ruler"></i>
                                </div>
                                <h3 class="text-white fs-20 mb-2">Tailor-Made Design</h3>
                                <p class="mb-0 text-white-50 fs-14" style="line-height: 1.7;">Every project begins from scratch. We work closely with you and your designers to bring your unique vision to reality.</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="p-4 rounded-3 h-100" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
                                <div class="mb-3 d-inline-flex align-items-center justify-content-center" style="width: 50px; height: 50px; border-radius: 8px; background: rgba(210, 160, 115, 0.15); color: #d2a073; font-size: 20px;">
                                    <i class="fa-solid fa-palette"></i>
                                </div>
                                <h3 class="text-white fs-20 mb-2">Art by IanArt</h3>
                                <p class="mb-0 text-white-50 fs-14" style="line-height: 1.7;">Our exclusive collaboration with artist IanArt infuses functional cabinetry with distinctive artistic finishes and character.</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="p-4 rounded-3 h-100" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
                                <div class="mb-3 d-inline-flex align-items-center justify-content-center" style="width: 50px; height: 50px; border-radius: 8px; background: rgba(210, 160, 115, 0.15); color: #d2a073; font-size: 20px;">
                                    <i class="fa-solid fa-gem"></i>
                                </div>
                                <h3 class="text-white fs-20 mb-2">Finer Details &amp; Joints</h3>
                                <p class="mb-0 text-white-50 fs-14" style="line-height: 1.7;">Meticulous attention to joints, precise measurements, and premium European soft-close hardware built to endure.</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="p-4 rounded-3 h-100" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
                                <div class="mb-3 d-inline-flex align-items-center justify-content-center" style="width: 50px; height: 50px; border-radius: 8px; background: rgba(210, 160, 115, 0.15); color: #d2a073; font-size: 20px;">
                                    <i class="fa-solid fa-truck-ramp-box"></i>
                                </div>
                                <h3 class="text-white fs-20 mb-2">Turnkey Installation</h3>
                                <p class="mb-0 text-white-50 fs-14" style="line-height: 1.7;">Our dedicated team handles the entire installation process with punctuality, clean job sites, and precision fitting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
`;

// Remove any existing why-choose-us section if present
html = html.replace(/<!-- Catchy Why Choose Us Section -->[\s\S]*?<\/section>/g, '');

// Insert it right before FAQ section
html = html.replace('<!-- FAQ Section -->', cleanWhyChooseUs + '\n            <!-- FAQ Section -->');

// 6. Clean, professional footer redesign without banners, without trust seals, without fake stuff
const cleanFooter = `<!-- footer begin -->
        <footer class="text-light section-dark" style="background: #141210 !important; border-top: 1px solid rgba(210, 160, 115, 0.2); padding-top: 60px;">
            <div class="container">
                <div class="row g-4 justify-content-between">
                    <div class="col-lg-4 col-md-6">
                        <img src="images/ndti/logo.png" class="logo-footer mb-3" alt="NDti in collaboration with IanArt" style="max-width: 180px;">
                        <p style="color: rgba(255, 255, 255, 0.7); font-size: 14.5px; line-height: 1.7;">
                            The place where joinery &amp; art meet. Custom bespoke joinery crafted in collaboration with artist IanArt.
                        </p>
                        <div class="d-flex gap-2 mt-3">
                            <a href="https://wa.me/27838008834?text=Hi%20NDti%20%26%20IanArt!" target="_blank" rel="noopener noreferrer" class="footer-social-pill"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="https://www.facebook.com/profile.php?id=61554944405313" target="_blank" rel="noopener noreferrer" class="footer-social-pill"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="tel:0838008834" class="footer-social-pill"><i class="fa-solid fa-phone"></i></a>
                            <a href="mailto:info@ianartndti.co.za" class="footer-social-pill"><i class="fa-solid fa-envelope"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-3 col-6">
                        <div class="widget">
                            <h2 class="hs-5" style="font-size: 16px; color: #ffffff; letter-spacing: 1px; text-transform: uppercase;">Quick Links</h2>
                            <ul style="list-style: none; padding: 0; margin: 0; line-height: 2;">                                        
                                <li><a href="index.html" style="color: rgba(255,255,255,0.7); text-decoration: none;">Home</a></li>
                                <li><a href="about.html" style="color: rgba(255,255,255,0.7); text-decoration: none;">About Us</a></li>
                                <li><a href="services-style-2.html" style="color: rgba(255,255,255,0.7); text-decoration: none;">Services</a></li>
                                <li><a href="gallery.html" style="color: rgba(255,255,255,0.7); text-decoration: none;">Gallery</a></li>
                                <li><a href="index.html#why-choose-us" style="color: rgba(255,255,255,0.7); text-decoration: none;">Why Choose Us</a></li>
                                <li><a href="index.html#faq" style="color: rgba(255,255,255,0.7); text-decoration: none;">FAQ</a></li>
                                <li><a href="contact.html" style="color: rgba(255,255,255,0.7); text-decoration: none;">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-6">
                        <div class="widget">
                            <h2 class="hs-5" style="font-size: 16px; color: #ffffff; letter-spacing: 1px; text-transform: uppercase;">Our Services</h2>
                            <ul style="list-style: none; padding: 0; margin: 0; line-height: 2;">                                        
                                <li><a href="services-style-2.html#kitchens" style="color: rgba(255,255,255,0.7); text-decoration: none;">Designer Kitchens</a></li>
                                <li><a href="services-style-2.html#bedrooms" style="color: rgba(255,255,255,0.7); text-decoration: none;">Bedrooms &amp; Bathrooms</a></li>
                                <li><a href="services-style-2.html#bespoke" style="color: rgba(255,255,255,0.7); text-decoration: none;">Custom Bespoke Joinery</a></li>
                                <li><a href="services-style-2.html#wardrobes" style="color: rgba(255,255,255,0.7); text-decoration: none;">Bedroom Cupboards</a></li>
                                <li><a href="services-style-2.html#living" style="color: rgba(255,255,255,0.7); text-decoration: none;">Living Spaces &amp; TV Units</a></li>
                                <li><a href="services-style-2.html#offices" style="color: rgba(255,255,255,0.7); text-decoration: none;">Studies &amp; Home Offices</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="widget">
                            <h2 class="hs-5" style="font-size: 16px; color: #ffffff; letter-spacing: 1px; text-transform: uppercase;">Get in Touch</h2>
                            
                            <div class="mb-3">
                                <div style="color: #d2a073; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Workshop &amp; Showroom</div>
                                <div style="color: rgba(255,255,255,0.85); font-size: 14px; margin-top: 4px;">Unit 2, 15 Muscat Road, Saxenburg Park 1, Blackheath, Cape Town</div>
                            </div>

                            <div class="mb-3">
                                <div style="color: #d2a073; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone &amp; WhatsApp</div>
                                <div><a href="tel:0838008834" style="color: rgba(255,255,255,0.85); font-size: 14px; text-decoration: none;">083 800 8834</a></div>
                            </div>

                            <div class="mb-3">
                                <div style="color: #d2a073; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</div>
                                <div><a href="mailto:info@ianartndti.co.za" style="color: rgba(255,255,255,0.85); font-size: 14px; text-decoration: none;">info@ianartndti.co.za</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="subfooter mt-5" style="background: #0e0d0b; border-top: 1px solid rgba(255,255,255,0.06); padding: 20px 0;">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center" style="font-size: 13.5px; color: rgba(255,255,255,0.5);">
                            Copyright 2026 NDti in collaboration with IanArt Pty Ltd. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- footer close -->`;

html = html.replace(/<!-- footer begin -->[\s\S]*?<!-- footer close -->/, cleanFooter);

// Ensure hero-rotator.js is present
if (!html.includes('js/hero-rotator.js')) {
  html = html.replace('</body>', '    <script src="js/hero-rotator.js"></script>\n</body>');
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Fixed index.html successfully!');
