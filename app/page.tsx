import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import WorkflowShowcase from "./components/WorkflowShowcase";
import TestimonialsSection from "./components/TestimonialsSection";

import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import LogoLoop from "./components/LogoLoop";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <LogoLoop />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
