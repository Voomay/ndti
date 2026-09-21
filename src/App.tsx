import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { VideoBannerSection } from './components/VideoBannerSection';
import { FaqSection } from './components/FaqSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="intrio-app">
      {/* 1. Transparent Sticky Header */}
      <Header
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenDrawer={() => setIsConsultationOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="content">
        {/* 2. Hero Slider with Animated Headlines */}
        <Hero />

        {/* 3. About Us & Stats Counter */}
        <AboutSection />

        {/* 4. Services Carousel with Interactive Controls */}
        <ServicesSection />

        {/* 5. Parallax Testimonials Slider */}
        <TestimonialsSection />

        {/* 6. Curated Projects Portfolio with Filter Pills */}
        <ProjectsSection />

        {/* 7. 4-Step Process Section */}
        <ProcessSection />

        {/* 8. Full-Width Video Banner */}
        <VideoBannerSection />

        {/* 9. FAQ Accordion */}
        <FaqSection />

        {/* 10. Latest Insights & Blog Posts */}
        <BlogSection />
      </main>

      {/* 11. Complete Studio Footer */}
      <Footer />

      {/* 12. Free Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}

export default App;
