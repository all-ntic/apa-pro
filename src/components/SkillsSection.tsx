import { Monitor, Network, Code, Shield } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: Monitor,
      title: "Maintenance Informatique",
      description: "Hardware et software, diagnostic, réparation postes et serveurs",
      color: "royal-blue"
    },
    {
      icon: Network,
      title: "Administration Réseaux",
      description: "LAN/WAN, Wi-Fi, routeurs, switches, sécurité réseau et routage",
      color: "royal-blue-light"
    },
    {
      icon: Code,
      title: "Développement Web",
      description: "Sites vitrines, HTML5, CSS3, JavaScript, WordPress, optimisation SEO",
      color: "accent-gold"
    },
    {
      icon: Shield,
      title: "Sécurité Électronique",
      description: "Vidéosurveillance IP/analogique, alarmes, contrôle d'accès, DVR/NVR",
      color: "royal-blue"
    }
  ];

  return (
    <section id="competences" className="py-20 bg-gradient-to-b from-white to-gray-50" aria-labelledby="skills-title">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 id="skills-title" className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" role="presentation" aria-hidden="true"></div>
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
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-royal-blue/10 mb-6 group-hover:bg-royal-blue/20 transition-all duration-300 group-hover:scale-110`} role="presentation" aria-hidden="true">
                <skill.icon className={`w-8 h-8 text-royal-blue`} />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-royal-blue transition-colors duration-300">
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
