import { useState } from "react";
import { Globe, Zap, Github, Youtube, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import imgSecurite from "@/assets/realisation-securite.jpg";
import imgReseau from "@/assets/realisation-reseau.jpg";
import imgWeb from "@/assets/realisation-web.jpg";
import imgEglise from "@/assets/realisation-eglise.jpg";
import imgOng from "@/assets/realisation-ong.jpg";
import imgArt from "@/assets/realisation-art.jpg";
import imgLogistique from "@/assets/realisation-logistique.jpg";
import imgEvent from "@/assets/realisation-event.jpg";

type Project = {
  image: string;
  category: string;
  title: string;
  description: string;
  details: string;
  tags: string[];
  link?: string;
  github?: string;
  youtube?: string;
};

const projects: Project[] = [
  {
    image: imgSecurite,
    category: "Sécurité Électronique",
    title: "Vidéosurveillance IP",
    description: "Installation Caméras & NVR",
    details:
      "Déploiement complet d'un système de vidéosurveillance IP pour entreprise : caméras Hikvision, enregistreur NVR, supervision mobile temps réel et maintenance préventive.",
    tags: ["Hikvision", "NVR", "PoE", "Supervision Mobile"],
  },
  {
    image: imgReseau,
    category: "Réseaux Informatiques",
    title: "Réseau Sécurisé PME",
    description: "LAN / WAN / Wi-Fi Pro",
    details:
      "Conception et mise en œuvre d'un réseau LAN/WAN complet avec serveurs, VLAN, contrôle d'accès, pare-feu et supervision centralisée pour une PME.",
    tags: ["Cisco", "Ubiquiti", "VLAN", "Windows Server"],
  },
  {
    image: imgWeb,
    category: "Développement Web",
    title: "APA Pro - Portfolio",
    description: "Portfolio IT & Web",
    details:
      "Portfolio professionnel complet : expertise systèmes, réseaux, développement web et sécurité électronique avec chatbot intelligent et SEO avancé.",
    tags: ["React", "Supabase", "Chatbot IA", "SEO"],
    link: "https://apa-pro.allntic.com",
    github: "https://github.com/all-ntic",
    youtube: "https://www.youtube.com/@allntic",
  },
  {
    image: imgEglise,
    category: "SaaS Cloud",
    title: "Ivoire Église+",
    description: "Plateforme Multi-Église",
    details:
      "Solution SaaS complète pour églises : gestion membres, événements, messagerie, dons en ligne via Paystack et assistant spirituel IA.",
    tags: ["Cloud", "Multi-tenant", "Paystack", "IA"],
    link: "https://ivoire-eglise.allntic.com",
    youtube: "https://www.youtube.com/@allntic",
  },
  {
    image: imgOng,
    category: "Site Institutionnel",
    title: "OLCAP-CI",
    description: "ONG Santé & Solidarité",
    details:
      "Site institutionnel pour ONG de lutte contre l'anémie falciforme et sensibilisation aux cancers féminins en Côte d'Ivoire.",
    tags: ["NGO", "Santé", "Dons", "React"],
    link: "https://olcap-ci.allntic.com",
  },
  {
    image: imgArt,
    category: "Portfolio Artistique",
    title: "Atisso Goha",
    description: "Sculpteur Monumental",
    details:
      "Galerie en ligne immersive pour sculpteur monumental ivoirien : exposition virtuelle d'œuvres et parcours artistique.",
    tags: ["Art", "Galerie", "Culture", "Next.js"],
    link: "https://atisso-goha.lovable.app",
  },
  {
    image: imgLogistique,
    category: "Plateforme E-commerce",
    title: "TradLog Côte d'Ivoire",
    description: "Logistique & BTP",
    details:
      "Plateforme logistique professionnelle : transport routier, distribution ciment, acier et granulats avec couverture nationale.",
    tags: ["Logistique", "BTP", "Transport", "React"],
    link: "https://tradlog.lovable.app",
  },
  {
    image: imgEvent,
    category: "Landing Événementielle",
    title: "Chill Side Party",
    description: "Pool Party Abidjan",
    details:
      "Site événementiel festif : billetterie en ligne, compte à rebours, DJ live et pool party aux Résidences Saint Jérôme.",
    tags: ["Événement", "Billetterie", "Landing", "Tailwind"],
    link: "https://chill-party.lovable.app",
  },
];

const RealizationsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="realisations"
      className="py-20 bg-gray-50"
      aria-labelledby="realizations-title"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            id="realizations-title"
            className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Mes <span className="gradient-text">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Galerie visuelle de mes projets en sécurité, réseaux et développement web
          </p>
        </div>

        <div className="flex items-center mb-8">
          <Zap className="w-6 h-6 text-royal-blue mr-3" />
          <h3 className="text-3xl font-bold text-foreground">
            Galerie de Projets
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelected(project)}
              className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue rounded-2xl"
              aria-label={`Voir les détails de ${project.title}`}
            >
              <Card className="overflow-hidden border-0 shadow-card-soft hover-lift h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-royal-blue/10">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category}`}
                    width={768}
                    height={576}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/90 via-royal-blue/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  <Badge className="absolute top-3 left-3 bg-accent-gold text-foreground hover:bg-accent-gold">
                    {project.category}
                  </Badge>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h4 className="text-lg font-bold leading-tight">
                      {project.title}
                    </h4>
                    <p className="text-sm text-white/90">{project.description}</p>
                  </div>
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-royal-blue" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs bg-royal-blue/10 text-royal-blue"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          {selected && (
            <>
              <div className="relative aspect-video overflow-hidden bg-royal-blue/10">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-accent-gold text-foreground hover:bg-accent-gold">
                  {selected.category}
                </Badge>
              </div>
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-foreground">
                    {selected.title}
                  </DialogTitle>
                  <DialogDescription className="text-royal-blue font-medium">
                    {selected.description}
                  </DialogDescription>
                </DialogHeader>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {selected.details}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {selected.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-royal-blue/10 text-royal-blue"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  {selected.link && (
                    <Button
                      asChild
                      className="bg-royal-blue hover:bg-royal-blue-light text-white"
                    >
                      <a
                        href={selected.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Démo Live
                      </a>
                    </Button>
                  )}
                  {selected.github && (
                    <Button asChild variant="outline">
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {selected.youtube && (
                    <Button
                      asChild
                      variant="outline"
                      className="border-accent-gold text-accent-gold hover:bg-accent-gold/10"
                    >
                      <a
                        href={selected.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube className="w-4 h-4 mr-2" />
                        Vidéo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default RealizationsSection;
