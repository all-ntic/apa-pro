import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-navy-dark/95 backdrop-blur-lg shadow-elegant" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-white">APA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-white hover:text-cyan-electric transition-colors duration-300"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("apropos")}
              className="text-white hover:text-cyan-electric transition-colors duration-300"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("competences")}
              className="text-white hover:text-cyan-electric transition-colors duration-300"
            >
              Compétences
            </button>
            <button
              onClick={() => scrollToSection("realisations")}
              className="text-white hover:text-cyan-electric transition-colors duration-300"
            >
              Réalisations
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-white hover:text-cyan-electric transition-colors duration-300"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-cyan-electric transition-colors duration-300"
            >
              Contact
            </button>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-cyan-electric text-cyan-electric hover:bg-cyan-electric hover:text-white transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 bg-navy-dark/95 backdrop-blur-lg rounded-b-lg px-4">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-white hover:text-cyan-electric transition-colors duration-300 text-left"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("apropos")}
                className="text-white hover:text-cyan-electric transition-colors duration-300 text-left"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("competences")}
                className="text-white hover:text-cyan-electric transition-colors duration-300 text-left"
              >
                Compétences
              </button>
              <button
                onClick={() => scrollToSection("realisations")}
                className="text-white hover:text-cyan-electric transition-colors duration-300 text-left"
              >
                Réalisations
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-white hover:text-cyan-electric transition-colors duration-300 text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-cyan-electric transition-colors duration-300 text-left"
              >
                Contact
              </button>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-cyan-electric text-cyan-electric hover:bg-cyan-electric hover:text-white transition-all duration-300 w-fit"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;