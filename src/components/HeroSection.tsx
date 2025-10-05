import { ArrowDown, MessageCircle, Phone, Shield } from "lucide-react";
import { HeroButton } from "@/components/ui/button-variants";

const HeroSection = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/+2250707300050?text=Bonjour%20Eburnie%20Groupe,%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20services.", "_blank");
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
        <div className="absolute top-20 left-10 w-64 h-64 bg-eburnie-orange/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-eburnie-orange/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-eburnie-orange/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-eburnie-orange/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 animate-fade-in">
            <Shield className="w-5 h-5 text-eburnie-orange mr-2" />
            <span className="text-eburnie-orange font-medium">+10 ans d'excellence technologique</span>
          </div>

          {/* Titre principal */}
          <div className="space-y-6 animate-fade-in max-w-4xl" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              <span className="gradient-text block">Eburnie Groupe</span>
              <span className="text-white block">& Consulting</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-medium text-eburnie-orange">
              L'innovation au service de votre performance
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-4 animate-slide-in-right max-w-3xl mt-8" style={{ animationDelay: "0.4s" }}>
            <p className="text-lg lg:text-xl leading-relaxed text-white/90">
              Expert technologique ivoirien spécialisé dans les <strong className="text-eburnie-orange">solutions informatiques, sécurité électronique et domotique</strong>.
            </p>
            
            <p className="text-base lg:text-lg leading-relaxed text-white/80">
              Depuis 2013, nous accompagnons particuliers, entreprises et institutions dans leur <strong className="text-eburnie-orange">transformation numérique</strong> avec des solutions innovantes, fiables et sur mesure.
            </p>
          </div>

          {/* Points clés */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <div className="glass-card p-6 rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-eburnie-orange mb-2">500+</div>
              <div className="text-white/80 text-sm">Clients Satisfaits</div>
            </div>
            <div className="glass-card p-6 rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-eburnie-orange mb-2">10+</div>
              <div className="text-white/80 text-sm">Années d'Expérience</div>
            </div>
            <div className="glass-card p-6 rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-eburnie-orange mb-2">24/48h</div>
              <div className="text-white/80 text-sm">Délai d'Intervention</div>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-scale-in" style={{ animationDelay: "0.8s" }}>
            <HeroButton onClick={handleWhatsAppContact} className="group">
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Contacter sur WhatsApp
            </HeroButton>
            <HeroButton variant="secondary" onClick={scrollToContact}>
              <Phone className="w-5 h-5 mr-2" />
              Demander un Devis Gratuit
            </HeroButton>
          </div>

          {/* Services rapides */}
          <div className="flex flex-wrap gap-3 mt-12 justify-center max-w-3xl">
            {["Informatique", "Vidéosurveillance", "Domotique", "Réseaux", "Maintenance", "Sécurité"].map((service, index) => (
              <span 
                key={service}
                className="text-sm px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-eburnie-orange/20 hover:border-eburnie-orange transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-eburnie-orange" />
      </div>
    </section>
  );
};

export default HeroSection;
