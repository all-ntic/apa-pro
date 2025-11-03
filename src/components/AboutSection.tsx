import { CheckCircle, Target, Users, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const values = [
    { icon: CheckCircle, label: "Rigueur", color: "royal-blue" },
    { icon: Lightbulb, label: "Innovation", color: "accent-gold" },
    { icon: Target, label: "Fiabilité", color: "royal-blue-light" },
    { icon: Users, label: "Service client", color: "accent-gold" }
  ];

  return (
    <section id="apropos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-serif">
              À propos de <span className="gradient-text">APA</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          </div>

          {/* Biography */}
          <div className="mb-16 animate-slide-in-right">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-elegant border border-gray-100">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                <strong className="text-foreground">Agnidom Pygnali Aboubakar</strong>, alias <strong className="text-royal-blue">APA</strong>, est un technicien ivoirien expérimenté dans les domaines de la maintenance informatique, des réseaux, du développement web et de la sécurité électronique.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Fort d'une approche <strong className="text-accent-gold">pragmatique</strong> et d'une vision orientée <strong className="text-accent-gold">performance</strong>, il conçoit et déploie des solutions durables adaptées aux besoins des entreprises et particuliers en Côte d'Ivoire.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                Son objectif : <strong className="text-royal-blue">rendre les technologies plus accessibles, fiables et sécurisées</strong>.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="animate-scale-in">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10 font-serif">
              Mes Valeurs
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 text-center hover-lift shadow-card-soft border border-gray-100 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-royal-blue/10 mb-4 group-hover:bg-royal-blue/20 transition-colors duration-300`}>
                    <value.icon className={`w-8 h-8 text-royal-blue`} />
                  </div>
                  <h4 className="font-semibold text-foreground">{value.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
