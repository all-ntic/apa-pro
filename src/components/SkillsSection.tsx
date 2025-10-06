import { Monitor, Network, Code, Shield, Settings, GraduationCap } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: Monitor,
      title: "Maintenance Informatique",
      description: "Hardware et software, diagnostic, réparation postes et serveurs",
      color: "cyan-electric"
    },
    {
      icon: Network,
      title: "Administration Réseaux",
      description: "LAN/WAN, Wi-Fi, routeurs, switches, sécurité réseau et routage",
      color: "cyan-glow"
    },
    {
      icon: Code,
      title: "Développement Web",
      description: "Sites vitrines, HTML5, CSS3, JavaScript, WordPress, optimisation SEO",
      color: "orange-accent"
    },
    {
      icon: Shield,
      title: "Sécurité Électronique",
      description: "Vidéosurveillance IP/analogique, alarmes, contrôle d'accès, DVR/NVR",
      color: "cyan-electric"
    },
    {
      icon: Settings,
      title: "Gestion de Projets",
      description: "Cahiers des charges, planification, supervision équipes, audit technique",
      color: "cyan-glow"
    },
    {
      icon: GraduationCap,
      title: "Formation Utilisateurs",
      description: "Accompagnement technique, formation outils et systèmes",
      color: "orange-accent"
    }
  ];

  return (
    <section id="competences" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-dark mb-4">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une expertise technique complète au service de vos besoins numériques
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 hover-lift shadow-card-soft border border-gray-100 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${skill.color}/10 mb-6 group-hover:bg-${skill.color}/20 transition-all duration-300 group-hover:scale-110`}>
                <skill.icon className={`w-8 h-8 text-${skill.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-navy-dark mb-3 group-hover:text-cyan-electric transition-colors duration-300">
                {skill.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
