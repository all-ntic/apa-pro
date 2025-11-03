import { MessageCircle, Phone, MapPin, Shield, Monitor, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Compétences", href: "#competences" },
    { name: "Réalisations", href: "#realisations" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Maintenance IT", icon: <Monitor className="w-4 h-4" /> },
    { name: "Réseaux LAN/WAN", icon: <Shield className="w-4 h-4" /> },
    { name: "Développement Web", icon: <Monitor className="w-4 h-4" /> },
    { name: "Sécurité Électronique", icon: <Shield className="w-4 h-4" /> }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-royal-blue-dark text-white relative overflow-hidden">
      {/* Éléments de fond */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-electric/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-glow/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Informations entreprise */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">APA</h3>
              <p className="text-accent-gold">Agnidom Pygnali Aboubakar</p>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Technicien polyvalent en systèmes informatiques, réseaux, développement web et sécurité électronique. 
              Des solutions intégrées, durables et pragmatiques pour vos besoins technologiques à Abidjan.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-electric mr-3" />
                <span>Abidjan, Côte d'Ivoire</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 text-cyan-electric mr-3" />
                <a href="tel:+2250778023331" className="hover:text-cyan-electric transition-colors duration-300">
                  +225 07 78 02 33 31
                </a>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-electric">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-cyan-electric transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-electric">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="text-cyan-electric mr-2">{service.icon}</span>
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        {/* Social Media Links */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Suivez-nous sur les réseaux sociaux
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="https://wa.me/+2250778023331"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-all duration-300 hover:shadow-glow group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
              </a>
              <a
                href="https://github.com/all-ntic"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-cyan-electric/20 text-gray-300 hover:text-cyan-electric p-2.5 rounded-full transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://web.facebook.com/ALLNTIC"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-cyan-electric/20 text-gray-300 hover:text-cyan-electric p-2.5 rounded-full transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pygnali-aboubakar-agnidom-2813b6188"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-cyan-electric/20 text-gray-300 hover:text-cyan-electric p-2.5 rounded-full transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/allntic225"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-cyan-electric/20 text-gray-300 hover:text-cyan-electric p-2.5 rounded-full transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@allntic"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-cyan-electric/20 text-gray-300 hover:text-cyan-electric p-2.5 rounded-full transition-all duration-300"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@allntic"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-cyan-electric/20 text-gray-300 hover:text-cyan-electric p-2.5 rounded-full transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10">
          <div className="text-gray-400 text-sm text-center">
            © {currentYear} APA - Agnidom Pygnali Aboubakar. Tous droits réservés.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;