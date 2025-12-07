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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-royal-blue-dark/95 backdrop-blur-lg shadow-elegant" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-royal-blue-dark rounded-lg"
            aria-label="APA-PRO - Retour à l'accueil"
          >
            <span className="text-xl font-bold text-white">APA-PRO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-white hover:text-accent-gold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg px-2 py-1"
              role="menuitem"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("apropos")}
              className="text-white hover:text-accent-gold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg px-2 py-1"
              role="menuitem"
            >
              À propos
            </button>
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onFocus={() => setServicesOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setServicesOpen(false);
                }
              }}
            >
              <button 
                className="text-white hover:text-accent-gold transition-colors duration-300 flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg px-2 py-1"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                role="menuitem"
              >
                Services
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 bg-royal-blue-dark/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-elegant min-w-[250px] py-2"
                  role="menu"
                  aria-label="Sous-menu Services"
                >
                  <Link 
                    to="/services/maintenance-informatique"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors focus:outline-none focus-visible:bg-white/10 focus-visible:text-accent-gold"
                    role="menuitem"
                  >
                    Maintenance Informatique
                  </Link>
                  <Link 
                    to="/services/reseaux-informatiques"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors focus:outline-none focus-visible:bg-white/10 focus-visible:text-accent-gold"
                    role="menuitem"
                  >
                    Réseaux Informatiques
                  </Link>
                  <Link 
                    to="/services/developpement-web"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors focus:outline-none focus-visible:bg-white/10 focus-visible:text-accent-gold"
                    role="menuitem"
                  >
                    Développement Web
                  </Link>
                  <Link 
                    to="/services/securite-electronique"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors focus:outline-none focus-visible:bg-white/10 focus-visible:text-accent-gold"
                    role="menuitem"
                  >
                    Sécurité Électronique
                  </Link>
                </div>
              )}
            </div>
            <button
              onClick={() => scrollToSection("realisations")}
              className="text-white hover:text-accent-gold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg px-2 py-1"
              role="menuitem"
            >
              Réalisations
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-white hover:text-accent-gold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg px-2 py-1"
              role="menuitem"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-accent-gold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg px-2 py-1"
              role="menuitem"
            >
              Contact
            </button>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-gray-900 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent-gold"
              aria-label="Ouvrir le chat"
            >
              <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
              Chat
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg p-1"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden mt-4 pb-4 border-t border-white/10 bg-royal-blue-dark/95 backdrop-blur-lg rounded-b-lg px-4"
            role="menu"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-white hover:text-accent-gold transition-colors duration-300 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg px-2 py-1"
                role="menuitem"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("apropos")}
                className="text-white hover:text-accent-gold transition-colors duration-300 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg px-2 py-1"
                role="menuitem"
              >
                À propos
              </button>
              <div className="flex flex-col space-y-2" role="group" aria-label="Services">
                <span className="text-white font-semibold text-sm" id="services-mobile-label">Services</span>
                <Link 
                  to="/services/maintenance-informatique"
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-accent-gold transition-colors duration-300 text-left pl-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg py-1"
                  role="menuitem"
                >
                  Maintenance Informatique
                </Link>
                <Link 
                  to="/services/reseaux-informatiques"
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-accent-gold transition-colors duration-300 text-left pl-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg py-1"
                  role="menuitem"
                >
                  Réseaux Informatiques
                </Link>
                <Link 
                  to="/services/developpement-web"
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-accent-gold transition-colors duration-300 text-left pl-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg py-1"
                  role="menuitem"
                >
                  Développement Web
                </Link>
                <Link 
                  to="/services/securite-electronique"
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-accent-gold transition-colors duration-300 text-left pl-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg py-1"
                  role="menuitem"
                >
                  Sécurité Électronique
                </Link>
              </div>
              <button
                onClick={() => scrollToSection("realisations")}
                className="text-white hover:text-accent-gold transition-colors duration-300 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg px-2 py-1"
                role="menuitem"
              >
                Réalisations
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-white hover:text-accent-gold transition-colors duration-300 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg px-2 py-1"
                role="menuitem"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-accent-gold transition-colors duration-300 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg px-2 py-1"
                role="menuitem"
              >
                Contact
              </button>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-gray-900 transition-all duration-300 w-fit focus-visible:ring-2 focus-visible:ring-accent-gold"
                aria-label="Ouvrir le chat"
              >
                <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
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