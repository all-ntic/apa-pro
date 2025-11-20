import { Globe, Zap, Church, Heart, Palette, Truck, PartyPopper, Github, Youtube } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RealizationsSection = () => {

  const pastRealizations = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "APA Pro - Portfolio Professionnel",
      description: "Portfolio IT & Web",
      details: "Portfolio professionnel complet présentant expertise en systèmes informatiques, réseaux, développement web et sécurité électronique avec chatbot intelligent",
      tags: ["React", "Supabase", "Responsive", "Chatbot IA", "SEO"],
      link: "https://apa-pro.allntic.com",
      github: "https://github.com/all-ntic/apa-portfolio",
      youtube: "https://www.youtube.com/@allntic"
    },
    {
      icon: <Church className="w-8 h-8" />,
      title: "Ivoire Église+",
      description: "Plateforme Multi-Église Cloud",
      details: "Solution SaaS complète pour églises : gestion membres, événements, messagerie, dons en ligne Paystack et assistant spirituel IA",
      tags: ["Cloud", "Multi-tenant", "Paystack", "IA Spirituelle", "TypeScript"],
      link: "https://ivoire-eglise.allntic.com",
      github: "https://github.com/all-ntic/ivoire-eglise",
      youtube: "https://www.youtube.com/@allntic"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "OLCAP-CI",
      description: "ONG Santé & Solidarité",
      details: "Site institutionnel pour ONG de lutte contre l'anémie falciforme et sensibilisation aux cancers féminins en Côte d'Ivoire",
      tags: ["NGO", "Santé", "Impact Social", "Dons", "React"],
      link: "https://olcap-ci.allntic.com",
      github: "https://github.com/all-ntic/olcap-ci",
      youtube: "https://www.youtube.com/@allntic"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Atisso Goha",
      description: "Portfolio Artiste Sculpteur",
      details: "Galerie en ligne immersive pour sculpteur monumental ivoirien - exposition virtuelle d'œuvres monumentales et parcours artistique",
      tags: ["Art", "Galerie", "Portfolio", "Culture", "Next.js"],
      link: "https://atisso-goha.lovable.app",
      github: "https://github.com/all-ntic/atisso-goha",
      youtube: "https://www.youtube.com/@allntic"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "TradLog Côte d'Ivoire",
      description: "Logistique & Matériaux BTP",
      details: "Plateforme logistique professionnelle : transport routier, distribution ciment, acier et granulats avec couverture nationale",
      tags: ["Logistique", "BTP", "Transport", "E-commerce", "React"],
      link: "https://tradlog.lovable.app",
      github: "https://github.com/all-ntic/tradlog-ci",
      youtube: "https://www.youtube.com/@allntic"
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: "Chill Side Party",
      description: "Événement Pool Party",
      details: "Site événementiel pour soirée festive à Abidjan : billetterie en ligne, compte à rebours, DJ live et pool party aux Résidences Saint Jérôme",
      tags: ["Événement", "Billetterie", "Landing Page", "Festif", "Tailwind"],
      link: "https://chill-party.lovable.app",
      github: "https://github.com/all-ntic/chill-side-party",
      youtube: "https://www.youtube.com/@allntic"
    }
  ];


  return (
    <section id="realisations" className="py-20 bg-gray-50" aria-labelledby="realizations-title">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="realizations-title" className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Mes <span className="gradient-text">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mes réalisations dans le domaine IT et sécurité électronique
          </p>
        </div>

        <div>
          <div className="flex items-center mb-8">
            <Zap className="w-6 h-6 text-royal-blue mr-3" />
            <h3 className="text-3xl font-bold text-foreground">Réalisations Accomplies</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastRealizations.map((project, index) => (
              <Card key={index} className="hover-lift glass-card border-0 shadow-card-soft group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-gradient-accent rounded-2xl text-white w-fit group-hover:animate-glow-pulse">
                    {project.icon}
                  </div>
                  <CardTitle className="text-foreground text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-royal-blue font-medium">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.details}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs bg-royal-blue/10 text-royal-blue">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-royal-blue hover:text-royal-blue-light transition-colors duration-300 font-medium text-sm"
                      >
                        <Globe className="w-4 h-4" />
                        Démo Live
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-foreground hover:text-royal-blue transition-colors duration-300 font-medium text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code Source
                      </a>
                    )}
                    {project.youtube && (
                      <a 
                        href={project.youtube} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent-gold hover:text-accent-gold/80 transition-colors duration-300 font-medium text-sm"
                      >
                        <Youtube className="w-4 h-4" />
                        Vidéo
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RealizationsSection;