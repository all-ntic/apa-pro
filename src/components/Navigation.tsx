import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import allnticLogo from "@/assets/allntic-logo-new.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-navy-dark/98 backdrop-blur-xl shadow-elegant border-b border-gold-primary/10" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("accueil")}>
            <img src={allnticLogo} alt="ALLNTIC Logo" className="h-10 w-auto transition-transform duration-300 hover:scale-110" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {["Accueil", "À propos", "Compétences", "Réalisations", "Projets", "FAQ", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace("à propos", "apropos").replace("compétences", "competences").replace("réalisations", "realisations"))}
                className="relative text-white/90 hover:text-gold-primary font-medium transition-all duration-300 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <Button
              onClick={() => window.open("https://wa.me/2250778023331", "_blank")}
              className="bg-gradient-gold text-navy-dark hover:shadow-glow font-semibold transition-all duration-300 hover:scale-105"
            >
              Contactez-nous
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-gold-primary transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col space-y-4 pt-6">
              {["Accueil", "À propos", "Compétences", "Réalisations", "Projets", "FAQ", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace("à propos", "apropos").replace("compétences", "competences").replace("réalisations", "realisations"))}
                  className="text-white/90 hover:text-gold-primary transition-colors duration-300 text-left font-medium"
                >
                  {item}
                </button>
              ))}
              <Button
                onClick={() => window.open("https://wa.me/2250778023331", "_blank")}
                className="bg-gradient-gold text-navy-dark hover:shadow-glow font-semibold w-fit"
              >
                Contactez-nous
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
