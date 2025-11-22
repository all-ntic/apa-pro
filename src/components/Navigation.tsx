import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }, 100);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-royal-blue-dark/95 backdrop-blur-lg shadow-elegant" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-xl font-bold text-white">APA-PRO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-white hover:text-accent-gold transition-colors duration-300"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("apropos")}
              className="text-white hover:text-accent-gold transition-colors duration-300"
            >
              À propos
            </button>
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-white hover:text-accent-gold transition-colors duration-300 flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-royal-blue-dark/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-elegant min-w-[250px] py-2">
                  <Link 
                    to="/services/maintenance-informatique"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors"
                  >
                    Maintenance Informatique
                  </Link>
                  <Link 
                    to="/services/reseaux-informatiques"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors"
                  >
                    Réseaux Informatiques
                  </Link>
                  <Link 
                    to="/services/developpement-web"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors"
                  >
                    Développement Web
                  </Link>
                  <Link 
                    to="/services/securite-electronique"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors"
                  >
                    Sécurité Électronique
                  </Link>
                </div>
              )}
            </div>
            <button
              onClick={() => scrollToSection("realisations")}
              className="text-white hover:text-accent-gold transition-colors duration-300"
            >
              Réalisations
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-white hover:text-accent-gold transition-colors duration-300"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-accent-gold transition-colors duration-300"
            >
              Contact
            </button>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-gray-900 transition-all duration-300"
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
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 bg-royal-blue-dark/95 backdrop-blur-lg rounded-b-lg px-4">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-white hover:text-accent-gold transition-colors duration-300 text-left"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("apropos")}
                className="text-white hover:text-accent-gold transition-colors duration-300 text-left"
              >
                À propos
              </button>
              <div className="flex flex-col space-y-2">
                <span className="text-white font-semibold text-sm">Services</span>
                <Link 
                  to="/services/maintenance-informatique"
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-accent-gold transition-colors duration-300 text-left pl-4"
                >
                  Maintenance Informatique
                </Link>
                <Link 
                  to="/services/reseaux-informatiques"
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-accent-gold transition-colors duration-300 text-left pl-4"
                >
                  Réseaux Informatiques
                </Link>
                <Link 
                  to="/services/developpement-web"
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-accent-gold transition-colors duration-300 text-left pl-4"
                >
                  Développement Web
                </Link>
                <Link 
                  to="/services/securite-electronique"
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-accent-gold transition-colors duration-300 text-left pl-4"
                >
                  Sécurité Électronique
                </Link>
              </div>
              <button
                onClick={() => scrollToSection("realisations")}
                className="text-white hover:text-accent-gold transition-colors duration-300 text-left"
              >
                Réalisations
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-white hover:text-accent-gold transition-colors duration-300 text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-accent-gold transition-colors duration-300 text-left"
              >
                Contact
              </button>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-gray-900 transition-all duration-300 w-fit"
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