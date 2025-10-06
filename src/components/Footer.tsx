import { MessageCircle, Phone, Mail, MapPin, Shield, Monitor } from "lucide-react";
import allnticLogo from "@/assets/allntic-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Compétences", href: "#competences" },
    { name: "Réalisations", href: "#realisations" },
    { name: "Projets", href: "#projets" },
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
    <footer className="bg-navy-dark text-white relative overflow-hidden">
      {/* Éléments de fond */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-electric/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-glow/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Informations entreprise */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img src={allnticLogo} alt="ALLNTIC Logo" className="h-12 w-12 mr-4" />
              <div>
                <h3 className="text-2xl font-bold">ALLNTIC</h3>
                <p className="text-cyan-electric">Agnidom Pygnali Aboubakar</p>
              </div>
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
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 text-cyan-electric mr-3" />
                <a href="mailto:all.ntic225@gmail.com" className="hover:text-cyan-electric transition-colors duration-300">
                  all.ntic225@gmail.com
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

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} ALLNTIC - Agnidom Pygnali Aboubakar. Tous droits réservés.
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/+2250778023331"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-all duration-300 hover:shadow-glow group"
            >
              <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
            </a>
            <a
              href="mailto:all.ntic225@gmail.com"
              className="bg-cyan-electric/10 hover:bg-cyan-electric hover:text-white text-cyan-electric p-3 rounded-full transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;