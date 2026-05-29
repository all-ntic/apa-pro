import { CheckCircle, Target, Users, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const values = [
    { icon: CheckCircle, label: "Rigueur", color: "royal-blue" },
    { icon: Lightbulb, label: "Innovation", color: "accent-gold" },
    { icon: Target, label: "Fiabilité", color: "royal-blue-light" },
    { icon: Users, label: "Service client", color: "accent-gold" }
  ];

  return (
    <section id="apropos" className="py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="about-title">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 id="about-title" className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-serif">
              À propos d'<span className="gradient-text">ALLNTIC</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" role="presentation" aria-hidden="true"></div>
          </div>

          {/* Biography */}
          <div className="mb-16 animate-slide-in-right">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-elegant border border-gray-100">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                <strong className="text-foreground">Agnidom Pygnali Aboubakar</strong>, fondateur d'<strong className="text-royal-blue">ALLNTIC</strong>, est un entrepreneur et technicien ivoirien spécialisé dans les infrastructures informatiques, les réseaux, le développement web et la sécurité électronique.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Fondateur de <strong className="text-royal-blue">ALLNTIC</strong> et créateur de la plateforme <strong className="text-royal-blue">LesCVPro</strong>, il développe des solutions technologiques modernes pensées pour répondre aux besoins réels des entreprises, des professionnels et des particuliers en Côte d'Ivoire.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Grâce à une approche <strong className="text-accent-gold">pragmatique</strong>, orientée <strong className="text-accent-gold">performance</strong> et <strong className="text-accent-gold">fiabilité</strong>, il intervient dans la conception, le déploiement et l'optimisation de systèmes informatiques, réseaux, vidéosurveillance, solutions web et infrastructures numériques sécurisées.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                À travers <strong className="text-royal-blue">ALLNTIC</strong> et ses futurs projets technologiques, son ambition est de contribuer à la transformation numérique locale en rendant les technologies plus <strong className="text-royal-blue">accessibles, professionnelles, fiables et sécurisées</strong>.
              </p>

              <div className="border-t border-gray-100 pt-6">
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Son travail repose sur trois piliers :
                </p>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-royal-blue mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                    <span><strong className="text-foreground">Innovation utile</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent-gold mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                    <span><strong className="text-foreground">Qualité technique</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-royal-blue-light mt-2.5 flex-shrink-0" aria-hidden="true"></span>
                    <span><strong className="text-foreground">Solutions durables</strong> adaptées au contexte africain</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="animate-scale-in">
            <h3 id="values-title" className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10 font-serif">
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
