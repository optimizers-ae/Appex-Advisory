import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import StatsCounter from '../components/StatsCounter';
import TechStackGrid from '../components/TechStackGrid';
import AccentBanner from '../components/AccentBanner';
import WhyChooseUs from '../components/WhyChooseUs';
import DashboardDemo from '../components/DashboardDemo';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';
import { MagneticCursor } from '../components/MouseTrackingEffect';

const Home = () => {
  return (
    <main className="relative min-h-screen bg-[#d8aa5d] text-white selection:bg-amber-300 selection:text-black">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero */}
      <Hero />

      {/* 3. About Us / Overview */}
      <About />

      {/* 5. Stats & Testimonial */}
      <StatsCounter />

      {/* 6. Production Tech Stack Grid */}
      <TechStackGrid />

      {/* 7. Accent Banner (Documented & Handed Off) */}
      <MagneticCursor
        magneticFactor={0.55}
        blendMode="exclusion"
        cursorSize={40}
      >

        <AccentBanner
          image="/accent-section-1-v2.webp"
          alt="Loro Labs Handed Off"
          lines={[
            'EVERY BUSINESS',
            'DESERVES THE',
            'RIGHT GUIDANCE',
            'TO GROW.',
          ]}
          badge="ENGINEERED FOR BUSINESS SUCCESS"
          position="bottom-right"
        />
      </MagneticCursor>

      {/* 8. The Loro Difference / Why Choose Us */}
      <WhyChooseUs />



      {/* 9. Interactive Live Dashboard Demo */}
      <DashboardDemo />

      {/* 10. Contact CTA */}
      <ContactCTA />

      {/* 11. Studio Footer */}
      <Footer />
    </main>
  );
};

export default Home;
