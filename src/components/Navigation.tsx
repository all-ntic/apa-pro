import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import allnticLogo from "@/assets/allntic-logo.png";

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
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-royal-blue-dark rounded-xl min-w-0"
            aria-label="ALLNTIC GROUP - Retour à l'accueil"
          >
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-cyan-electric/40 via-royal-blue-light/30 to-accent-gold/30 blur-md opacity-70 group-hover:opacity-100 transition" />
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl bg-white flex items-center justify-center ring-1 ring-white/30 overflow-hidden">
                <img
                  src={allnticLogo}
                  alt="ALLNTIC GROUP logo"
                  className="w-full h-full object-contain p-0.5"
                  width="48"
                  height="48"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
            <div className="leading-none min-w-0">
              <span className="block text-base sm:text-lg lg:text-xl font-bold text-white tracking-wide truncate">
                ALLNTIC <span className="bg-gradient-to-r from-cyan-glow to-accent-gold bg-clip-text text-transparent">GROUP</span>
              </span>
              <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-cyan-glow/80 mt-0.5 truncate">
                IT · Sécurité · Web
              </span>
            </div>
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
                  className="absolute top-full left-0 mt-2 bg-royal-blue-dark/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-elegant min-w-[280px] py-2 max-h-[70vh] overflow-y-auto"
                  role="menu"
                  aria-label="Sous-menu Services"
                >
                  <Link to="/services" className="block px-4 py-2 text-accent-gold hover:bg-white/10 font-semibold border-b border-white/10" role="menuitem">
                    Voir tous les services →
                  </Link>
                  <Link to="/services/installation-cameras" className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors" role="menuitem">Installation Caméras</Link>
                  <Link to="/services/videosurveillance" className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors" role="menuitem">Vidéosurveillance</Link>
                  <Link to="/services/reseaux-informatiques" className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors" role="menuitem">Réseaux Informatiques</Link>
                  <Link to="/services/maintenance-informatique" className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors" role="menuitem">Maintenance Informatique</Link>
                  <Link to="/services/controle-acces" className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors" role="menuitem">Contrôle d'Accès</Link>
                  <Link to="/services/ipbx-voip" className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors" role="menuitem">IPBX / VoIP</Link>
                  <Link to="/services/securite-electronique" className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors" role="menuitem">Sécurité Électronique</Link>
                  <Link to="/services/developpement-web" className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors" role="menuitem">Développement Web</Link>
                  <Link to="/services/support-entreprise" className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors" role="menuitem">Support Entreprise</Link>
                  <Link to="/services/wifi-professionnel" className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors" role="menuitem">WiFi Professionnel</Link>
                  <Link to="/services/installation-serveurs" className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors" role="menuitem">Installation Serveurs</Link>
                  <Link to="/services/cybersecurite" className="block px-4 py-2 text-white hover:bg-white/10 hover:text-accent-gold transition-colors" role="menuitem">Cybersécurité</Link>
                </div>
              )}
            </div>
            <Link
              to="/blog"
              className="text-white hover:text-accent-gold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg px-2 py-1"
              role="menuitem"
            >
              Blog
            </Link>
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
              <div className="flex flex-col space-y-1" role="group" aria-label="Services">
                <Link to="/services" onClick={() => setIsOpen(false)} className="text-accent-gold font-semibold text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg py-1">
                  Tous les services →
                </Link>
                {[
                  ["installation-cameras","Installation Caméras"],
                  ["videosurveillance","Vidéosurveillance"],
                  ["reseaux-informatiques","Réseaux Informatiques"],
                  ["maintenance-informatique","Maintenance Informatique"],
                  ["controle-acces","Contrôle d'Accès"],
                  ["ipbx-voip","IPBX / VoIP"],
                  ["securite-electronique","Sécurité Électronique"],
                  ["developpement-web","Développement Web"],
                  ["support-entreprise","Support Entreprise"],
                  ["wifi-professionnel","WiFi Professionnel"],
                  ["installation-serveurs","Installation Serveurs"],
                  ["cybersecurite","Cybersécurité"],
                ].map(([slug, label]) => (
                  <Link
                    key={slug}
                    to={`/services/${slug}`}
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-accent-gold transition-colors duration-300 text-left pl-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg py-1 text-sm"
                    role="menuitem"
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-accent-gold transition-colors duration-300 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg px-2 py-1"
                role="menuitem"
              >
                Blog
              </Link>
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