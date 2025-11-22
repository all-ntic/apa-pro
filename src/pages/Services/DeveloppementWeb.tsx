import { Code, Smartphone, Search, Zap, Phone, Palette } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const DeveloppementWeb = () => {
  const services = [
    "Sites vitrines professionnels",
    "Portfolios et CV en ligne",
    "Sites e-commerce (WooCommerce, Shopify)",
    "Applications web sur-mesure",
    "Optimisation SEO et référencement Google",
    "Responsive design mobile-first",
    "Hébergement et maintenance",
    "Formation WordPress et outils web"
  ];

  const technologies = [
    { name: "HTML5 / CSS3", icon: Code },
    { name: "React / Next.js", icon: Zap },
    { name: "WordPress", icon: Palette },
    { name: "Supabase", icon: Code },
  ];

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-blue-dark via-royal-blue to-royal-blue-light">
      <Navigation />
      
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center mb-16 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Développement Web Professionnel Abidjan - Création Sites Internet
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Création de sites web modernes, rapides et optimisés SEO. 
            Développeur freelance à Abidjan spécialisé en solutions web sur-mesure.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-accent-gold hover:bg-accent-gold-dark text-gray-900 font-semibold"
          >
            <Phone className="mr-2 h-5 w-5" />
            Demander un devis web
          </Button>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Services de Développement Web
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-start gap-4">
                  <Code className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                  <p className="text-white text-lg">{service}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Pourquoi choisir ALLNTIC pour votre site web ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Smartphone className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Mobile-First</h3>
              <p className="text-white/80">Design responsive adapté à tous les écrans</p>
            </div>
            <div className="text-center">
              <Search className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">SEO Optimisé</h3>
              <p className="text-white/80">Référencement Google intégré dès la conception</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
              <p className="text-white/80">Temps de chargement ultra-rapide</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Technologies Modernes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="w-10 h-10 text-accent-gold mx-auto mb-3" />
                  <p className="text-white font-medium">{tech.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Développeur web Abidjan - Création site internet Côte d'Ivoire
          </h2>
          <p className="mb-4 leading-relaxed">
            ALLNTIC est un <strong>développeur web freelance à Abidjan</strong> spécialisé dans la création 
            de sites internet professionnels pour entreprises, artisans et entrepreneurs en Côte d'Ivoire. 
            Je conçois des sites vitrines modernes, portfolios personnalisés et solutions e-commerce performantes.
          </p>
          <p className="mb-4 leading-relaxed">
            Besoin d'un <strong>site web professionnel à Abidjan</strong> ? Je maîtrise HTML5, CSS3, JavaScript, 
            React, WordPress et les frameworks modernes comme Next.js et Supabase. Chaque projet inclut 
            l'optimisation SEO, le design responsive mobile-first et l'hébergement sécurisé.
          </p>
          <p className="leading-relaxed">
            Service complet : de la conception graphique au déploiement, en passant par l'intégration de 
            formulaires de contact, Google Analytics et outils de tracking. Accompagnement et formation inclus. 
            Devis gratuit sous 24h.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DeveloppementWeb;
