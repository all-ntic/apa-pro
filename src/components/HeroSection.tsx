import { ArrowDown, Download, MessageCircle, Phone } from "lucide-react";
import { HeroButton } from "@/components/ui/button-variants";
import agnidomPhoto from "@/assets/agnidom-photo.jpg";

const HeroSection = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/+2250778023331?text=Bonjour%20ALLNTIC,%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20services.", "_blank");
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
          {/* Photo professionnelle - Style Atisso Goha */}
          <div className="flex-shrink-0 lg:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-2xl opacity-40 mega-glow" />
              <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 hover-mega">
                <img
                  src={agnidomPhoto}
                  alt="Agnidom Pygnali Aboubakar - Technicien ALLNTIC"
                  className="w-full aspect-[4/5] object-cover rounded-xl shadow-floating glow-accent"
                />
                <div className="absolute -bottom-3 -right-3 bg-white text-navy-dark px-3 py-2 rounded-lg font-bold shadow-mega border border-cyan-electric/30">
                  <span className="text-cyan-electric text-sm">Expert IT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu textuel - Style Atisso Goha */}
          <div className="flex-1 lg:w-3/5 text-white space-y-6">
            {/* Nom et titre */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text block">Agnidom Pygnali</span>
                <span className="text-white block">Aboubakar</span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl font-medium text-cyan-electric">
                Le Technicien Polyvalent (ALLNTIC)
              </h2>
              
              {/* Citation/slogan */}
              <blockquote className="text-lg lg:text-xl font-medium italic text-orange-accent">
                « Un technicien polyvalent, pragmatique et orienté résultats, au service de vos systèmes numériques et de votre sécurité. »
              </blockquote>
            </div>

            {/* Description */}
            <div className="space-y-4 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
              <p className="text-base lg:text-lg leading-relaxed text-white/90">
                Découvrez l'expertise d'un professionnel qui transforme les défis informatiques en solutions durables. Agnidom Pygnali Aboubakar (ALLNTIC) maîtrise les systèmes informatiques, réseaux, développement web et sécurité électronique pour garantir la performance de vos infrastructures numériques.
              </p>
              
              <p className="text-base lg:text-lg leading-relaxed text-white/90">
                Basé à <strong className="text-cyan-glow">Abidjan</strong> et actuellement en poste chez <strong className="text-cyan-glow">EGC-CI</strong>, il met son savoir-faire au service des organisations qui recherchent <strong className="text-orange-accent">fiabilité, performance et sécurité</strong> dans leurs solutions numériques.
              </p>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-scale-in" style={{ animationDelay: "0.6s" }}>
              <HeroButton onClick={handleWhatsAppContact} className="group">
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Contacter sur WhatsApp
              </HeroButton>
              <HeroButton variant="secondary" onClick={scrollToContact}>
                <Phone className="w-5 h-5 mr-2" />
                Demander un Devis
              </HeroButton>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator mobile */}
      <div className="lg:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-cyan-electric" />
      </div>
    </section>
  );
};

export default HeroSection;