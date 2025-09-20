import { ArrowDown, Download, MessageCircle, Phone } from "lucide-react";
import { HeroButton } from "@/components/ui/button-variants";
import agnidomPhoto from "@/assets/agnidom-photo.jpg";

const HeroSection = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/+2250000000000?text=Bonjour%20ALLNTIC,%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20services.", "_blank");
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo professionnelle */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-2xl opacity-50 animate-glow-pulse" />
              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                <img
                  src={agnidomPhoto}
                  alt="Agnidom Pygnali Aboubakar - Technicien ALLNTIC"
                  className="w-80 h-96 object-cover rounded-2xl shadow-elegant hover-lift"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-accent text-white px-6 py-3 rounded-xl font-medium shadow-glow">
                  <span className="gradient-text font-bold">Expert IT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu textuel */}
          <div className="order-1 lg:order-2 text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fade-in">
                <span className="gradient-text">Agnidom Pygnali</span>
                <br />
                <span className="text-white">Aboubakar</span>
                <br />
                <span className="text-cyan-electric text-2xl lg:text-3xl font-medium">(ALLNTIC)</span>
              </h1>
              
              <div className="space-y-6 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
                {/* Biographie inspirante */}
                <div className="glass-card p-6 rounded-xl border border-white/20">
                  <p className="text-lg leading-relaxed text-gray-100">
                    Agnidom Pygnali Aboubakar (ALLNTIC) est un <strong className="text-cyan-electric">technicien polyvalent</strong> en systèmes informatiques, réseaux, développement web et sécurité électronique, basé à <strong className="text-cyan-electric">Abidjan</strong>. Actuellement en poste chez EGC-CI, il intervient dans la maintenance, l'exploitation et la sécurisation d'infrastructures informatiques, tout en mettant à profit son savoir-faire en développement de solutions numériques et installation de dispositifs de sécurité électronique.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-100 mt-4">
                    Sa mission est de garantir la <strong className="text-orange-accent">fiabilité, la performance et la sécurité</strong> des systèmes numériques et physiques des organisations grâce à des solutions intégrées, durables et pragmatiques.
                  </p>
                </div>

                {/* Slogan accrocheur */}
                <div className="text-center lg:text-left">
                  <blockquote className="text-xl lg:text-2xl font-medium italic text-cyan-glow border-l-4 border-cyan-electric pl-6">
                    "Un technicien polyvalent, pragmatique et orienté résultats, au service de vos systèmes numériques et de votre sécurité."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in" style={{ animationDelay: "0.6s" }}>
              <HeroButton onClick={handleWhatsAppContact} className="group">
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                WhatsApp Business
              </HeroButton>
              <HeroButton variant="secondary" onClick={scrollToContact}>
                <Phone className="w-5 h-5 mr-2" />
                Demander un Devis
              </HeroButton>
            </div>

            {/* Scroll indicator */}
            <div className="hidden lg:block animate-bounce mt-12">
              <ArrowDown className="w-6 h-6 text-cyan-electric mx-auto" />
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