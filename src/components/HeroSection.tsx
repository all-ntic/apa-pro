import { ArrowDown, Download, MessageCircle, Phone } from "lucide-react";
import { HeroButton } from "@/components/ui/button-variants";
import agnidomPhoto from "@/assets/agnidom-photo.jpg";

const HeroSection = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/+2250778023331?text=Bonjour%20APA,%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20services.", "_blank");
  };

  const scrollToRealisations = () => {
    const element = document.getElementById("realisations");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-electric/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-orange-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Photo professionnelle */}
          <div className="flex-shrink-0 lg:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-2xl opacity-40 mega-glow" />
              <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 hover-mega">
                <img
                  src={agnidomPhoto}
                  alt="Agnidom Pygnali Aboubakar - Technicien expert IT, réseaux, développement web et sécurité électronique à Abidjan, Côte d'Ivoire"
                  className="w-full aspect-[4/5] object-cover rounded-xl shadow-floating glow-accent"
                  loading="eager"
                />
                <div className="absolute -bottom-3 -right-3 bg-white text-gray-900 px-3 py-2 rounded-lg font-bold shadow-mega border border-royal-blue/30">
                  <span className="text-royal-blue text-sm">Expert IT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu textuel */}
          <div className="flex-1 lg:w-3/5 text-white space-y-6" role="main" aria-label="Présentation principale">
            {/* Nom et titre */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight font-serif">
                <span className="gradient-text block">Agnidom Pygnali</span>
                <span className="text-white block">Aboubakar</span>
              </h1>
              
              <p className="text-xl lg:text-2xl font-medium text-royal-blue-light" role="doc-subtitle">
                Technicien Systèmes, Réseaux, Développement Web & Sécurité Électronique
              </p>
              
              {/* Citation/slogan */}
              <blockquote className="text-lg lg:text-xl font-medium italic text-accent-gold border-l-4 border-accent-gold pl-4">
                « Fiabilité, performance et sécurité au service du numérique africain. »
              </blockquote>
            </div>

            {/* Description */}
            <div className="space-y-4 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
              <p className="text-base lg:text-lg leading-relaxed text-white/90">
                Technicien ivoirien expérimenté dans les domaines de la <strong className="text-royal-blue-glow">maintenance informatique</strong>, des <strong className="text-royal-blue-glow">réseaux</strong>, du <strong className="text-royal-blue-glow">développement web</strong> et de la <strong className="text-royal-blue-glow">sécurité électronique</strong>.
              </p>
              
              <p className="text-base lg:text-lg leading-relaxed text-white/90">
                Fort d'une approche <strong className="text-accent-gold">pragmatique</strong> et d'une vision orientée <strong className="text-accent-gold">performance</strong>, je conçois et déploie des solutions durables adaptées aux besoins des entreprises et particuliers en Côte d'Ivoire.
              </p>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-scale-in" style={{ animationDelay: "0.6s" }} role="navigation" aria-label="Actions principales">
              <HeroButton onClick={scrollToRealisations} className="group" aria-label="Voir mes réalisations professionnelles">
                <Download className="w-5 h-5 mr-2 group-hover:animate-pulse" aria-hidden="true" />
                Voir mes Réalisations
              </HeroButton>
              <HeroButton variant="secondary" onClick={scrollToContact} aria-label="Me contacter pour vos projets">
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                Me Contacter
              </HeroButton>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator mobile */}
      <div className="lg:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-royal-blue-glow" />
      </div>
    </section>
  );
};

export default HeroSection;