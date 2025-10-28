import { Rocket, Cloud, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FutureProjectsSection = () => {
  const projects = [
    {
      icon: Rocket,
      title: "Plateforme de Gestion d'Interventions",
      description: "Outil en ligne destiné à automatiser la gestion, le suivi et le reporting des interventions de maintenance.",
      status: "En développement",
      color: "cyan-electric"
    },
    {
      icon: Cloud,
      title: "Solution Connectée de Sécurité Intelligente",
      description: "Développement d'un système combinant vidéosurveillance, détection d'intrusion et notifications temps réel sur mobile.",
      status: "Planifié",
      color: "orange-accent"
    },
    {
      icon: Building2,
      title: "Agence Technique Digitale APA",
      description: "Création d'une entité spécialisée dans la conception de solutions intégrées : IT, web et sécurité.",
      status: "Vision 2026",
      color: "cyan-glow"
    }
  ];

  return (
    <section id="projets" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-dark mb-4">
            Projets & <span className="gradient-text">Innovations</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les projets en cours et à venir qui façonneront l'avenir d'APA
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="hover-lift border-gray-200 bg-white animate-scale-in overflow-hidden group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="space-y-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${project.color}/10 group-hover:bg-${project.color}/20 transition-all duration-300 group-hover:scale-110`}>
                  <project.icon className={`w-8 h-8 text-${project.color}`} />
                </div>
                <div>
                  <Badge 
                    variant="secondary" 
                    className={`mb-3 bg-${project.color}/10 text-${project.color} border-${project.color}/20`}
                  >
                    {project.status}
                  </Badge>
                  <CardTitle className="text-xl text-navy-dark group-hover:text-cyan-electric transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureProjectsSection;
