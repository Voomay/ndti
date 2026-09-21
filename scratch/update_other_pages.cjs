const fs = require('fs');
const path = require('path');

const files = ['about.html', 'services-style-2.html', 'gallery.html', 'contact.html'];

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

for (const file of files) {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace links
  content = content.replace(/href="why-choose-us\.html"/g, 'href="index.html#why-choose-us"');
  content = content.replace(/href="faq\.html"/g, 'href="index.html#faq"');

  // Replace footer
  const footerRegex = /<!-- footer begin -->[\s\S]*?<!-- footer close -->/;
  if (footerRegex.test(content)) {
    content = content.replace(footerRegex, cleanFooter);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Cleaned footer and links in ${file}`);
}
