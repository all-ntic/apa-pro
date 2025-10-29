import { Monitor, Network, Code, Shield, Server, Database } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: Monitor,
      title: "Maintenance Informatique",
      description: "Diagnostic, réparation et maintenance préventive de matériel informatique (PC, serveurs, périphériques). Support technique hardware et software professionnel.",
      color: "gold"
    },
    {
      icon: Network,
      title: "Administration Réseaux",
      description: "Configuration et gestion de réseaux LAN/WAN, Wi-Fi professionnels. Installation routeurs Cisco, switches, sécurité réseau et optimisation des performances.",
      color: "cyan"
    },
    {
      icon: Code,
      title: "Développement Web",
      description: "Création de sites web modernes et responsives avec React, Next.js, TypeScript. Intégration Supabase, API REST, optimisation SEO et déploiement cloud.",
      color: "gold"
    },
    {
      icon: Shield,
      title: "Sécurité Électronique",
      description: "Installation systèmes de vidéosurveillance IP (Hikvision, Dahua), caméras connectées, alarmes intelligentes, contrôle d'accès et supervision à distance.",
      color: "cyan"
    },
    {
      icon: Server,
      title: "Administration Serveurs",
      description: "Configuration et maintenance serveurs Windows/Linux, virtualisation, gestion Active Directory, sauvegardes automatisées et monitoring système.",
      color: "gold"
    },
    {
      icon: Database,
      title: "Solutions Cloud & Bases de Données",
      description: "Déploiement d'applications cloud, gestion bases de données (PostgreSQL, Supabase), migration de données et solutions de stockage sécurisées.",
      color: "cyan"
    }
  ];

  return (
    <section id="competences" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-electric/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full text-gold-primary font-semibold text-sm mb-6">
            Expertise Technique
          </span>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-navy-dark mb-6">
            Mes <span className="bg-gradient-gold bg-clip-text text-transparent">Compétences</span>
          </h2>
          
          <div className="w-24 h-1.5 bg-gradient-gold mx-auto mb-6 rounded-full"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une expertise technique complète et polyvalente pour répondre à tous vos besoins numériques et électroniques
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 hover-lift border-2 border-gray-100 hover:border-gold-primary/30 transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                skill.color === 'gold' 
                  ? 'from-gold-primary/5 to-transparent' 
                  : 'from-cyan-electric/5 to-transparent'
              } rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 transition-all duration-500 ${
                  skill.color === 'gold'
                    ? 'bg-gradient-gold text-navy-dark shadow-glow'
                    : 'bg-cyan-electric/10 text-cyan-electric group-hover:bg-cyan-electric group-hover:text-white'
                } group-hover:scale-110 group-hover:rotate-6`}>
                  <skill.icon className="w-10 h-10" strokeWidth={2} />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-navy-dark mb-4 group-hover:text-gold-primary transition-colors duration-300">
                  {skill.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {skill.description}
                </p>

                {/* Decorative Line */}
                <div className={`mt-6 h-1 w-0 group-hover:w-full rounded-full transition-all duration-500 ${
                  skill.color === 'gold' ? 'bg-gradient-gold' : 'bg-cyan-electric'
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-gray-600 mb-6">
            Besoin d'une solution technique personnalisée ?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-gradient-gold text-navy-dark font-bold rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Discutons de votre projet
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
