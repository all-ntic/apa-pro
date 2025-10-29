import { Monitor, Network, Globe, Shield, Zap, Brain, Lock, Cog, Church, Heart, Palette, Truck, PartyPopper, Github, Youtube } from "lucide-react";
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

  const futureProjects = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Solutions Web + IA",
      description: "Applications Intelligentes",
      details: "Développement de plateformes web intégrant l'intelligence artificielle pour l'automatisation",
      tags: ["IA", "Machine Learning", "Chatbots", "Automatisation"],
      status: "En développement"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Sécurité Intelligente",
      description: "Systèmes Intégrés",
      details: "Solutions de sécurité connectées avec reconnaissance faciale et alertes intelligentes",
      tags: ["IoT", "Reconnaissance", "Smart Security", "Intégration"],
      status: "Planifié"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Automatisation PME",
      description: "Processus Informatiques",
      details: "Automatisation complète des processus IT pour petites et moyennes entreprises",
      tags: ["Automatisation", "PME", "Processus", "Efficacité"],
      status: "Recherche & Développement"
    }
  ];

  return (
    <section id="realisations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-dark mb-6">
            Réalisations & <span className="gradient-text">Projets Futurs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mes réalisations passées et les innovations à venir dans le domaine IT et sécurité électronique
          </p>
        </div>

        {/* Réalisations passées */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Zap className="w-6 h-6 text-cyan-electric mr-3" />
            <h3 className="text-3xl font-bold text-navy-dark">Réalisations Accomplies</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastRealizations.map((project, index) => (
              <Card key={index} className="hover-lift glass-card border-0 shadow-card-soft group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-gradient-accent rounded-2xl text-white w-fit group-hover:animate-glow-pulse">
                    {project.icon}
                  </div>
                  <CardTitle className="text-navy-dark text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-cyan-electric font-medium">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.details}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs bg-navy-primary/10 text-navy-primary">
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
                        className="inline-flex items-center gap-2 text-cyan-electric hover:text-cyan-glow transition-colors duration-300 font-medium text-sm"
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
                        className="inline-flex items-center gap-2 text-navy-dark hover:text-cyan-electric transition-colors duration-300 font-medium text-sm"
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
                        className="inline-flex items-center gap-2 text-orange-accent hover:text-orange-accent/80 transition-colors duration-300 font-medium text-sm"
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

        {/* Projets futurs */}
        <div>
          <div className="flex items-center mb-8">
            <Brain className="w-6 h-6 text-orange-accent mr-3" />
            <h3 className="text-3xl font-bold text-navy-dark">Projets & Innovations</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {futureProjects.map((project, index) => (
              <Card key={index} className="hover-lift tech-border bg-gradient-card border-0 shadow-elegant group relative overflow-hidden">
                <CardHeader className="text-center relative z-10">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-orange-accent to-cyan-electric rounded-2xl text-white w-fit group-hover:animate-glow-pulse">
                    {project.icon}
                  </div>
                  <CardTitle className="text-navy-dark text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-orange-accent font-medium">{project.description}</CardDescription>
                  <Badge className="bg-cyan-electric/10 text-cyan-electric border-cyan-electric/20 mt-2">
                    {project.status}
                  </Badge>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{project.details}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-orange-accent/30 text-orange-accent">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealizationsSection;