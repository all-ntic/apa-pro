import { Link } from "react-router-dom";
import {
  Camera, Network, Wrench, ShieldCheck, Code2, Phone,
  Lock, Wifi, KeyRound, Headphones, ArrowRight,
} from "lucide-react";

type ServiceCard = {
  slug: string;
  title: string;
  desc: string;
  icon: typeof Camera;
};

const SERVICES: ServiceCard[] = [
  { slug: "reseaux-informatiques", title: "Réseaux Informatiques", desc: "LAN, WAN, VLAN, fibre optique pour entreprises.", icon: Network },
  { slug: "maintenance-informatique", title: "Maintenance Informatique", desc: "Dépannage, optimisation, infogérance PME.", icon: Wrench },
  { slug: "videosurveillance", title: "Vidéosurveillance", desc: "Caméras IP, NVR/DVR, supervision multi-sites.", icon: Camera },
  { slug: "installation-cameras", title: "Installation Caméras", desc: "Hikvision, Dahua, Uniview — pose pro.", icon: Camera },
  { slug: "securite-electronique", title: "Sécurité Électronique", desc: "Alarmes connectées, détection, intégration.", icon: ShieldCheck },
  { slug: "developpement-web", title: "Développement Web", desc: "Sites vitrines, SaaS, e-commerce optimisés SEO.", icon: Code2 },
  { slug: "ipbx-voip", title: "IPBX / VoIP", desc: "Téléphonie IP entreprise — Yeastar, 3CX.", icon: Phone },
  { slug: "cybersecurite", title: "Cybersécurité", desc: "Audit, pare-feu, sensibilisation, conformité.", icon: Lock },
  { slug: "wifi-professionnel", title: "WiFi Professionnel", desc: "Couverture pro Ubiquiti UniFi, captive portal.", icon: Wifi },
  { slug: "controle-acces", title: "Contrôle d'Accès", desc: "Badge RFID, biométrie, interphone IP.", icon: KeyRound },
];

const ServicesGrid = () => {
  return (
    <section
      id="services"
      className="py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="services-title"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-blue/10 text-royal-blue text-sm font-medium mb-4">
            Nos services
          </div>
          <h2
            id="services-title"
            className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Une expertise <span className="gradient-text">complète</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Solutions IT, réseaux, sécurité électronique et web pour entreprises et particuliers
            en Côte d'Ivoire.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group relative p-6 rounded-2xl bg-white border border-gray-100 ring-glow flex flex-col animate-fade-in"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div className="inline-flex w-12 h-12 rounded-xl bg-gradient-to-br from-royal-blue to-royal-blue-light items-center justify-center mb-4 shadow-lg shadow-royal-blue/30 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-serif font-bold text-lg text-foreground mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {s.desc}
              </p>

              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-royal-blue group-hover:text-cyan-electric transition-colors">
                Découvrir
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>

              {/* Shimmer */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-cyan-electric/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
              </div>
            </Link>
          ))}

          {/* Support card */}
          <Link
            to="/services"
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-royal-blue to-royal-blue-dark text-white flex flex-col justify-between ring-glow animate-fade-in overflow-hidden"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative z-10">
              <Headphones className="w-10 h-10 mb-4 text-accent-gold" />
              <h3 className="font-serif font-bold text-xl mb-2">Support entreprise</h3>
              <p className="text-sm text-white/85 mb-4">
                Forfaits sur mesure, SLA garanti, supervision proactive.
              </p>
            </div>
            <span className="relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-accent-gold">
              Tous les services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-accent-gold/20 rounded-full blur-3xl" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
