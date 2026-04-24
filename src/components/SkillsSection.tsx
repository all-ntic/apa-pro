import { Monitor, Network, Code, Shield } from "lucide-react";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceReseaux from "@/assets/service-reseaux.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceSecurite from "@/assets/service-securite.jpg";

const SkillsSection = () => {
  const skills = [
    {
      icon: Monitor,
      title: "Maintenance Informatique",
      description: "Hardware et software, diagnostic, réparation postes et serveurs",
      image: serviceMaintenance,
      alt: "Technicien réparant une carte mère avec ordinateur portable affichant du code",
    },
    {
      icon: Network,
      title: "Administration Réseaux",
      description: "LAN/WAN, Wi-Fi, routeurs, switches, sécurité réseau et routage",
      image: serviceReseaux,
      alt: "Baie de serveurs avec câbles réseau RJ45 et LED bleues dans un datacenter",
    },
    {
      icon: Code,
      title: "Développement Web",
      description: "Sites vitrines, HTML5, CSS3, JavaScript, WordPress, optimisation SEO",
      image: serviceWeb,
      alt: "Sites web responsive affichés sur ordinateur, tablette et smartphone",
    },
    {
      icon: Shield,
      title: "Sécurité Électronique",
      description: "Vidéosurveillance IP/analogique, alarmes, contrôle d'accès, DVR/NVR",
      image: serviceSecurite,
      alt: "Caméra de vidéosurveillance IP dôme professionnelle installée sur mur",
    },
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

        {/* Skills Grid with visuals */}
        <ul
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          role="list"
          aria-label="Liste des compétences"
        >
          {skills.map((skill, index) => (
            <li
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-card-soft border border-gray-100 bg-white hover-lift animate-scale-in focus-within:ring-2 focus-within:ring-royal-blue"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={skill.image}
                  alt={skill.alt}
                  loading="lazy"
                  decoding="async"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-royal-blue/90 via-royal-blue/40 to-transparent"
                  aria-hidden="true"
                />
                {/* Icon badge */}
                <div
                  className="absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <skill.icon className="w-6 h-6 text-royal-blue" aria-hidden="true" />
                </div>
                {/* Title over image */}
                <h3 className="absolute bottom-4 left-4 right-4 text-white text-lg font-bold drop-shadow-lg">
                  {skill.title}
                </h3>
              </div>

              {/* Description */}
              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;
