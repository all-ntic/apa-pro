import { Laptop, Shield, Home, Network, Wrench, HeadphonesIcon, TrendingUp } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Laptop className="w-12 h-12 text-eburnie-orange" />,
      title: "Matériel Informatique",
      description: "Vente, installation et configuration de matériel informatique professionnel et grand public : ordinateurs, serveurs, imprimantes et accessoires.",
      features: ["Matériel neuf et reconditionné", "Configuration sur mesure", "Formation du personnel"]
    },
    {
      icon: <Shield className="w-12 h-12 text-eburnie-orange" />,
      title: "Vidéosurveillance",
      description: "Installation complète de systèmes de surveillance professionnels pour protéger vos locaux et biens.",
      features: ["Caméras IP haute définition", "DVR/NVR", "Accès mobile sécurisé"]
    },
    {
      icon: <Home className="w-12 h-12 text-eburnie-orange" />,
      title: "Solutions de Sécurité",
      description: "Systèmes de sécurité électronique complets pour entreprises et particuliers.",
      features: ["Alarmes intelligentes", "Contrôle d'accès biométrique", "Détection d'intrusion"]
    },
    {
      icon: <Network className="w-12 h-12 text-eburnie-orange" />,
      title: "Réseaux & Câblage",
      description: "Conception, installation et administration de réseaux informatiques LAN/WAN professionnels.",
      features: ["Câblage structuré", "Architecture réseau", "Configuration serveurs"]
    },
    {
      icon: <Home className="w-12 h-12 text-eburnie-orange" />,
      title: "Domotique",
      description: "Solutions domotiques pour automatiser et sécuriser vos espaces résidentiels et professionnels.",
      features: ["Automatisation intelligente", "Contrôle à distance", "Économies d'énergie"]
    },
    {
      icon: <Wrench className="w-12 h-12 text-eburnie-orange" />,
      title: "Maintenance & Support",
      description: "Maintenance préventive et corrective de tous vos équipements informatiques et électroniques.",
      features: ["Contrats de maintenance", "Intervention rapide", "Support technique"]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-eburnie-orange" />,
      title: "Conseil en Transformation Numérique",
      description: "Accompagnement stratégique pour optimiser votre infrastructure IT et améliorer vos processus.",
      features: ["Audit informatique", "Recommandations sur mesure", "Gestion de projet"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Éléments de fond animés */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-eburnie-orange/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-eburnie-orange/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-eburnie-orange/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <HeadphonesIcon className="w-6 h-6 text-eburnie-orange mr-3" />
            <span className="text-eburnie-orange font-medium">Nos Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Solutions <span className="gradient-text">Technologiques Complètes</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            De l'informatique à la sécurité électronique, nous couvrons tous vos besoins technologiques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl border border-white/10 group hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 p-4 bg-eburnie-orange/10 rounded-xl w-fit group-hover:bg-eburnie-orange/20 transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-eburnie-orange transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-white/70 text-sm">
                    <div className="w-1.5 h-1.5 bg-eburnie-orange rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass-card max-w-2xl mx-auto p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Besoin d'une solution personnalisée ?
            </h3>
            <p className="text-white/80 mb-6">
              Contactez-nous pour discuter de votre projet et obtenir un devis gratuit adapté à vos besoins.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-accent text-white px-8 py-4 rounded-lg font-medium hover:shadow-glow transition-all duration-300 inline-flex items-center"
            >
              <HeadphonesIcon className="w-5 h-5 mr-2" />
              Demander un Devis Gratuit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
