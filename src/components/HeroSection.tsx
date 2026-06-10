import { useState } from "react";
import { ArrowRight, MessageCircle, FileText, User, ShieldCheck, Network, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import TechBackground from "@/components/TechBackground";
import agnidomPhoto from "@/assets/agnidom-photo.jpg";
import agnidomPhotoWebp from "@/assets/agnidom-photo.webp";

const HeroSection = () => {
  const [imgError, setImgError] = useState(false);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/+2250778023331?text=Bonjour%20ALLNTIC,%20je%20souhaite%20obtenir%20un%20devis.",
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

      <div className="container mx-auto px-6 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="lg:col-span-7 text-white space-y-6 lg:space-y-8">
            {/* Brand chip */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-electric/40 bg-gradient-to-r from-royal-blue/30 via-cyan-electric/15 to-accent-gold/15 backdrop-blur-sm animate-fade-in shadow-[0_0_30px_-5px_hsl(var(--cyan-electric)/0.5)]">
              <span className="w-2 h-2 rounded-full bg-cyan-electric animate-glow-pulse" />
              <span className="text-sm font-semibold tracking-wide bg-gradient-to-r from-cyan-glow via-white to-accent-gold bg-clip-text text-transparent">
                ALLNTIC GROUP — IT · Sécurité Électronique · Web
              </span>
            </div>

            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h1 className="font-serif font-bold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                <span className="block text-white">Agnidom Pygnali</span>
                <span className="block bg-gradient-to-r from-cyan-glow via-white to-accent-gold bg-clip-text text-transparent">
                  Aboubakar
                </span>
              </h1>

              <p className="text-lg lg:text-xl font-medium text-white/85">
                Fondateur d'<strong className="text-cyan-glow">ALLNTIC GROUP</strong> · Créateur de{" "}
                <strong className="text-cyan-glow">LesCVPro</strong> · Entrepreneur & Technicien IT
              </p>
            </div>

            <p
              className="text-base lg:text-lg leading-relaxed text-white/80 max-w-2xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Des solutions IT modernes, fiables et sécurisées pour entreprises et particuliers.
              Infrastructures réseau, vidéosurveillance, développement web et cybersécurité —
              pensés pour le contexte africain.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 sm:gap-4 pt-2 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
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
                Voir le portfolio
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

            {/* Trust badges */}
            <div
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-white/10 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {stats.map((s) => (
                <div key={s.label} className="flex items-start gap-3">
                  <div className="hidden sm:flex w-10 h-10 rounded-lg bg-cyan-electric/15 border border-cyan-electric/30 items-center justify-center flex-shrink-0">
                    <s.icon className="w-5 h-5 text-cyan-glow" />
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-white font-serif">
                      {s.value}
                    </div>
                    <div className="text-xs lg:text-sm text-white/80 leading-tight">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Photo */}
          <div className="lg:col-span-5 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-electric/40 via-royal-blue-glow/40 to-accent-gold/30 rounded-3xl blur-2xl opacity-60 animate-glow-pulse" />

              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-royal-blue-dark/40 backdrop-blur">
                {imgError ? (
                  <div
                    className="w-full aspect-[4/5] flex items-center justify-center bg-gradient-to-br from-royal-blue-dark to-royal-blue"
                    role="img"
                    aria-label="Photo d'Agnidom Pygnali Aboubakar"
                  >
                    <User className="w-24 h-24 text-white/40" />
                  </div>
                ) : (
                  <picture>
                    <source srcSet={agnidomPhotoWebp} type="image/webp" />
                    <img
                      src={agnidomPhoto}
                      alt="Agnidom Pygnali Aboubakar, fondateur d'ALLNTIC GROUP, expert IT, réseaux et sécurité électronique à Abidjan"
                      className="w-full aspect-[4/5] object-cover"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      width="800"
                      height="1000"
                      onError={() => setImgError(true)}
                    />
                  </picture>
                )}

                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-xl bg-royal-blue-dark/80 backdrop-blur-md border border-cyan-electric/30">
                  <div className="text-xs text-cyan-glow uppercase tracking-wider">
                    Fondateur · ALLNTIC GROUP
                  </div>
                  <div className="text-sm text-white font-medium">
                    Abidjan · Côte d'Ivoire
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
