import { Building2, Target, Shield, Users, Zap, Award } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Zap className="w-8 h-8 text-eburnie-orange" />,
      title: "Innovation",
      description: "Intégration de technologies modernes et fiables pour des solutions d'avant-garde."
    },
    {
      icon: <Shield className="w-8 h-8 text-eburnie-orange" />,
      title: "Fiabilité",
      description: "Engagement à fournir des produits et services de qualité supérieure."
    },
    {
      icon: <Users className="w-8 h-8 text-eburnie-orange" />,
      title: "Proximité",
      description: "Accompagnement personnalisé et écoute attentive de chaque client."
    },
    {
      icon: <Award className="w-8 h-8 text-eburnie-orange" />,
      title: "Excellence",
      description: "Expertise technique reconnue et respect rigoureux des délais."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Éléments de fond animés */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-eburnie-orange/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-eburnie-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-eburnie-orange/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Building2 className="w-6 h-6 text-eburnie-orange mr-3" />
            <span className="text-eburnie-orange font-medium">À Propos de Nous</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-eburnie-primary mb-6">
            Qui est <span className="gradient-text">Eburnie Groupe & Consulting</span> ?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Plus de 10 ans d'excellence au service de votre transformation numérique
          </p>
        </div>

        {/* Présentation */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card p-8 rounded-2xl border border-eburnie-orange/10">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-eburnie-primary mb-4">Notre Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Offrir des solutions technologiques innovantes et durables, adaptées aux besoins spécifiques de chaque client, afin d'améliorer leur performance, leur confort et leur sécurité.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Fondée en 2013, <strong className="text-eburnie-orange">Eburnie Groupe & Consulting</strong> est une entreprise ivoirienne spécialisée dans les <strong>solutions informatiques, électroniques, domotiques et de sécurité</strong>. Nous accompagnons les particuliers, entreprises et institutions publiques dans leur transition numérique avec expertise et professionnalisme.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-eburnie-primary mb-12">
            Nos Valeurs Fondamentales
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl border border-white/10 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 p-3 bg-eburnie-orange/10 rounded-lg w-fit">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-eburnie-primary mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center glass-card p-8 rounded-xl hover-lift">
            <div className="text-5xl font-bold text-eburnie-orange mb-2">10+</div>
            <div className="text-gray-600 font-medium">Années d'Expérience</div>
          </div>
          <div className="text-center glass-card p-8 rounded-xl hover-lift">
            <div className="text-5xl font-bold text-eburnie-orange mb-2">500+</div>
            <div className="text-gray-600 font-medium">Clients Satisfaits</div>
          </div>
          <div className="text-center glass-card p-8 rounded-xl hover-lift">
            <div className="text-5xl font-bold text-eburnie-orange mb-2">24/48h</div>
            <div className="text-gray-600 font-medium">Délai d'Intervention</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
