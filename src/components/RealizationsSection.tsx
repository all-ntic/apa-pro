import { Monitor, Network, Globe, Shield, Zap, Brain, Lock, Cog, Church, Heart, Palette, Truck, PartyPopper } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const RealizationsSection = () => {
  // Charger les projets depuis Supabase
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('display_order', { ascending: true });
      
      if (error) throw error;
      return data;
    }
  });

  // Icônes statiques pour les projets (mapping par catégorie)
  const iconMap: { [key: string]: JSX.Element } = {
    "Web": <Globe className="w-8 h-8" />,
    "Mobile": <Monitor className="w-8 h-8" />,
    "Network": <Network className="w-8 h-8" />,
    "Security": <Shield className="w-8 h-8" />,
    "AI": <Brain className="w-8 h-8" />,
    "Automation": <Cog className="w-8 h-8" />
  };

  const pastRealizations = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "APA Pro - Portfolio Professionnel",
      description: "Portfolio IT & Web",
      details: "Portfolio professionnel complet avec design moderne, animations, chatbot intelligent et formulaire de contact",
      tags: ["React", "Portfolio", "Responsive", "Chatbot"],
      link: "https://apa-pro.allntic.com"
    },
    {
      icon: <Church className="w-8 h-8" />,
      title: "Ivoire Église+",
      description: "Plateforme Multi-Église",
      details: "Solution cloud complète : gestion membres, événements, dons en ligne, chatbot spirituel IA",
      tags: ["Cloud", "Multi-tenant", "IA", "Paystack"],
      link: "https://ivoire-eglise.allntic.com"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "OLCAP-CI",
      description: "ONG Santé & Solidarité",
      details: "Site institutionnel pour ONG de lutte contre l'anémie et sensibilisation aux cancers féminins",
      tags: ["NGO", "Impact", "Responsive", "Dons"],
      link: "https://olcap-ci.allntic.com"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Atisso Goha",
      description: "Portfolio Artiste Sculpteur",
      details: "Portfolio artistique immersif pour sculpteur monumental - galerie, parcours et exposition virtuelle",
      tags: ["Art", "Portfolio", "Galerie", "Immersif"],
      link: "https://atisso-goha.lovable.app"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "TradLog",
      description: "Solution Logistique",
      details: "Plateforme de gestion logistique et transport pour optimisation des opérations commerciales",
      tags: ["Logistique", "SaaS", "Gestion", "Transport"],
      link: "https://tradlog.lovable.app"
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: "Chill Party",
      description: "Plateforme Événementiel",
      details: "Application web pour organisation et gestion d'événements festifs et sociaux",
      tags: ["Événementiel", "Social", "Web App", "Planning"],
      link: "https://chill-party.lovable.app"
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
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-electric hover:text-cyan-glow transition-colors duration-300 font-medium text-sm"
                    >
                      Voir le projet
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
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