import { Link } from "react-router-dom";
import {
  Camera,
  Video,
  Network,
  Wrench,
  KeyRound,
  Phone,
  ShieldCheck,
  Code2,
  Headset,
  Wifi,
  Server,
  Lock,
  ArrowRight,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/seo/SEO";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/data/services";

const ICONS: Record<string, JSX.Element> = {
  "installation-cameras": <Camera className="w-7 h-7" />,
  videosurveillance: <Video className="w-7 h-7" />,
  "reseaux-informatiques": <Network className="w-7 h-7" />,
  "maintenance-informatique": <Wrench className="w-7 h-7" />,
  "controle-acces": <KeyRound className="w-7 h-7" />,
  "ipbx-voip": <Phone className="w-7 h-7" />,
  "securite-electronique": <ShieldCheck className="w-7 h-7" />,
  "developpement-web": <Code2 className="w-7 h-7" />,
  "support-entreprise": <Headset className="w-7 h-7" />,
  "wifi-professionnel": <Wifi className="w-7 h-7" />,
  "installation-serveurs": <Server className="w-7 h-7" />,
  cybersecurite: <Lock className="w-7 h-7" />,
};

const ServicesIndex = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.shortName,
      url: `https://apa-pro.allntic.com/services/${s.slug}`,
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-blue-dark via-royal-blue to-royal-blue-light">
      <SEO
        title="Nos Services IT & Sécurité Électronique à Abidjan | ALLNTIC"
        description="Découvrez tous nos services : installation caméras, vidéosurveillance, réseaux, maintenance, IPBX, contrôle d'accès, WiFi pro, cybersécurité, développement web. Abidjan, Côte d'Ivoire."
        canonical="/services"
        keywords={[
          "services informatique Abidjan",
          "sécurité électronique Côte d'Ivoire",
          "ALLNTIC services",
        ]}
        jsonLd={jsonLd}
      />
      <Navigation />

      <main className="container mx-auto px-6 py-24">
        <header className="max-w-3xl mx-auto text-center mb-14 text-white">
          <p className="text-accent-gold uppercase tracking-wider text-sm mb-3 font-semibold">
            ALLNTIC — Solutions IT &amp; Sécurité Électronique
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5">
            Nos Services Professionnels
          </h1>
          <p className="text-lg text-white/90">
            12 expertises pour sécuriser, connecter et faire évoluer votre
            infrastructure numérique à Abidjan et partout en Côte d'Ivoire.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-2xl"
            >
              <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/20 hover:border-accent-gold/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-accent-gold/20 text-accent-gold p-3 rounded-xl group-hover:bg-accent-gold group-hover:text-gray-900 transition">
                    {ICONS[s.slug] ?? <ShieldCheck className="w-7 h-7" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-white font-semibold text-lg mb-1">
                      {s.shortName}
                    </h2>
                    <p className="text-white/70 text-sm line-clamp-3">
                      {s.intro}
                    </p>
                    <span className="mt-3 inline-flex items-center text-accent-gold text-sm font-medium">
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesIndex;
