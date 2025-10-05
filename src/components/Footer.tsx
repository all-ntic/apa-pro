import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-eburnie-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* À propos */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">EGC</span>
              </div>
              <span className="text-xl font-bold">Eburnie Groupe</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Expert technologique ivoirien spécialisé dans les solutions informatiques, sécurité électronique et domotique depuis 2013.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-eburnie-orange">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById('accueil')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/70 hover:text-eburnie-orange transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/70 hover:text-eburnie-orange transition-colors"
                >
                  À Propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/70 hover:text-eburnie-orange transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/70 hover:text-eburnie-orange transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-eburnie-orange">Nos Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Matériel Informatique</li>
              <li>Vidéosurveillance</li>
              <li>Sécurité Électronique</li>
              <li>Domotique</li>
              <li>Réseaux & Câblage</li>
              <li>Maintenance & Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-eburnie-orange">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-eburnie-orange flex-shrink-0 mt-0.5" />
                <span className="text-white/70">Koumassi remblais<br />Abidjan, Côte d'Ivoire<br />10 BP 927 Abidjan 10</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-eburnie-orange flex-shrink-0" />
                <a href="tel:+2250707300050" className="text-white/70 hover:text-eburnie-orange transition-colors">
                  +225 07 07 300 050
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-eburnie-orange flex-shrink-0" />
                <a href="mailto:info@eburniegroupe.com" className="text-white/70 hover:text-eburnie-orange transition-colors">
                  info@eburniegroupe.com
                </a>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://web.facebook.com/eburniegroupe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-eburnie-orange/10 rounded-lg flex items-center justify-center hover:bg-eburnie-orange transition-colors"
              >
                <Facebook className="w-5 h-5 text-eburnie-orange hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-eburnie-orange/10 rounded-lg flex items-center justify-center hover:bg-eburnie-orange transition-colors"
              >
                <Linkedin className="w-5 h-5 text-eburnie-orange hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-eburnie-orange/10 rounded-lg flex items-center justify-center hover:bg-eburnie-orange transition-colors"
              >
                <Twitter className="w-5 h-5 text-eburnie-orange hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© {currentYear} Eburnie Groupe & Consulting. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-eburnie-orange transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-eburnie-orange transition-colors">Politique de Confidentialité</a>
              <a href="#" className="hover:text-eburnie-orange transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;