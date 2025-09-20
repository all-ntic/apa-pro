import { Monitor, Network, Globe, Shield, Zap, Brain, Lock, Cog } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RealizationsSection = () => {
  const pastRealizations = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Maintenance Informatique",
      description: "Hardware & Software",
      details: "Réparation PC, diagnostic système, optimisation performances, mise à jour logiciels",
      tags: ["Hardware", "Software", "Diagnostic", "Optimisation"]
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Installation Réseaux",
      description: "LAN/WAN & Infrastructure",
      details: "Configuration routeurs, switch, câblage structuré, administration réseau d'entreprise",
      tags: ["LAN", "WAN", "Routeur", "Switch"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Développement Web",
      description: "Sites Vitrines & Portails",
      details: "Création sites professionnels, portfolios, plateformes sur mesure avec technologies modernes",
      tags: ["React", "Responsive", "SEO", "CMS"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité Électronique",
      description: "Vidéosurveillance & Alarmes",
      details: "Installation caméras IP, systèmes d'alarme, contrôle d'accès, monitoring sécurisé",
      tags: ["Caméras IP", "Alarmes", "Monitoring", "Contrôle"]
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs bg-navy-primary/10 text-navy-primary">
                        {tag}
                      </Badge>
                    ))}
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