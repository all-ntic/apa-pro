import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import RealizationsSection from "@/components/RealizationsSection";
import FutureProjectsSection from "@/components/FutureProjectsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <RealizationsSection />
      <FutureProjectsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Portfolio;