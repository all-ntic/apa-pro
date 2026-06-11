import { ArrowRight, MessageCircle, FileText, ShieldCheck, Network, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import TechBackground from "@/components/TechBackground";
import allnticLogo from "@/assets/allntic-logo.png";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/+2250778023331?text=Bonjour%20ALLNTIC%20GROUP,%20je%20souhaite%20obtenir%20un%20devis.",
      "_blank"
    );
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { icon: Award, value: "5+", label: "Ans d'expérience" },
    { icon: Network, value: "30+", label: "Projets livrés" },
    { icon: ShieldCheck, value: "10+", label: "Secteurs accompagnés" },
  ];

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <TechBackground variant="dark" />

      <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white space-y-8">
          {/* Logo central */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-cyan-electric/40 via-royal-blue-glow/40 to-accent-gold/30 rounded-full blur-2xl opacity-70 animate-glow-pulse" />
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white flex items-center justify-center ring-2 ring-cyan-electric/40 shadow-2xl">
                <img
                  src={allnticLogo}
                  alt="Logo ALLNTIC GROUP"
                  className="w-full h-full object-contain p-2"
                  width="128"
                  height="128"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          {/* Chip */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-electric/40 bg-cyan-electric/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-cyan-glow" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-cyan-glow via-white to-accent-gold bg-clip-text text-transparent">
                IT · Sécurité Électronique · Web
              </span>
            </div>
          </div>

          {/* Titre */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-serif font-bold leading-[1.05] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block text-white">ALLNTIC</span>
              <span className="block bg-gradient-to-r from-cyan-glow via-white to-accent-gold bg-clip-text text-transparent">
                GROUP
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white/85 max-w-3xl mx-auto">
              Pôle technique africain — Infrastructures, cybersécurité et solutions numériques sur mesure.
            </p>
          </div>

          {/* Description */}
          <p
            className="text-base lg:text-lg leading-relaxed text-white/75 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Nous concevons, déployons et sécurisons les systèmes numériques des entreprises et institutions en Côte d'Ivoire :
            réseaux, vidéosurveillance IP, développement web et cybersécurité.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3 sm:gap-4 justify-center pt-2 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-500/30 group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              WhatsApp
            </Button>
            <Button
              size="lg"
              onClick={() => scrollTo("realisations")}
              className="bg-white text-royal-blue-dark hover:bg-cyan-glow hover:text-white"
            >
              <FileText className="w-5 h-5 mr-2" />
              Voir nos réalisations
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("contact")}
              className="border-cyan-electric/60 text-cyan-glow hover:bg-cyan-electric/15 hover:text-white bg-transparent group"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-4 sm:gap-8 pt-10 max-w-3xl mx-auto border-t border-white/10 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2 pt-6">
                <div className="hidden sm:flex w-10 h-10 rounded-lg bg-cyan-electric/15 border border-cyan-electric/30 items-center justify-center">
                  <s.icon className="w-5 h-5 text-cyan-glow" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white font-serif">
                  {s.value}
                </div>
                <div className="text-xs lg:text-sm text-white/75 leading-tight text-center">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
