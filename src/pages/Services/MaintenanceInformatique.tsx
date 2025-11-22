import { Wrench, CheckCircle, Clock, Shield, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const MaintenanceInformatique = () => {
  const services = [
    "Dépannage matériel et logiciel",
    "Installation et configuration Windows/Linux",
    "Optimisation des performances système",
    "Nettoyage et maintenance préventive",
    "Récupération de données",
    "Mise à jour et sécurisation des systèmes",
    "Support technique à distance",
    "Formation utilisateurs"
  ];

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-blue-dark via-royal-blue to-royal-blue-light">
      <Navigation />
      
      <main className="container mx-auto px-6 py-24">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Maintenance Informatique Professionnelle à Abidjan
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Support technique expert pour entreprises et particuliers en Côte d'Ivoire. 
            Intervention rapide, diagnostic précis, solutions durables.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-accent-gold hover:bg-accent-gold-dark text-gray-900 font-semibold"
          >
            <Phone className="mr-2 h-5 w-5" />
            Demander une intervention
          </Button>
        </div>

        {/* Services Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Services de Maintenance IT
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                  <p className="text-white text-lg">{service}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Pourquoi choisir ALLNTIC ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Intervention Rapide</h3>
              <p className="text-white/80">Diagnostic sous 24h, dépannage express</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Fiabilité Garantie</h3>
              <p className="text-white/80">Solutions durables, suivi post-intervention</p>
            </div>
            <div className="text-center">
              <Wrench className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Expertise Technique</h3>
              <p className="text-white/80">Technicien certifié, matériel professionnel</p>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Maintenance informatique Abidjan - Support IT professionnel
          </h2>
          <p className="mb-4 leading-relaxed">
            ALLNTIC propose des services de <strong>maintenance informatique professionnelle</strong> pour 
            entreprises, PME et particuliers à Abidjan. Spécialiste du dépannage hardware et software, 
            je garantis des interventions rapides et des solutions techniques fiables.
          </p>
          <p className="mb-4 leading-relaxed">
            Besoin d'un <strong>technicien informatique à Abidjan</strong> ? Je prends en charge l'installation 
            de serveurs Windows et Linux, l'optimisation des performances système, la récupération de données 
            et la sécurisation de vos postes de travail.
          </p>
          <p className="leading-relaxed">
            Service disponible à Cocody, Plateau, Marcory, Yopougon et toute la région d'Abidjan. 
            Support technique sur site ou à distance selon vos besoins.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MaintenanceInformatique;
