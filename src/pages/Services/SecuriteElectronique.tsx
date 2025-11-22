import { Camera, Shield, Bell, Lock, Phone, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SecuriteElectronique = () => {
  const services = [
    "Installation vidéosurveillance IP et analogique",
    "Caméras de sécurité HD et 4K",
    "Systèmes d'alarme anti-intrusion",
    "Contrôle d'accès biométrique et badges",
    "Interphonie et vidéophone",
    "Supervision mobile à distance",
    "Maintenance et dépannage",
    "Audit de sécurité et conseil"
  ];

  const brands = [
    "Hikvision",
    "Dahua",
    "Uniview",
    "Synology"
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
            Installation Vidéosurveillance et Alarme Abidjan - Sécurité Électronique
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Expert en sécurité électronique : caméras IP, alarmes, contrôle d'accès et supervision 
            mobile pour entreprises et résidences à Abidjan.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-accent-gold hover:bg-accent-gold-dark text-gray-900 font-semibold"
          >
            <Phone className="mr-2 h-5 w-5" />
            Devis sécurité gratuit
          </Button>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Solutions de Sécurité Électronique
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-start gap-4">
                  <Camera className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                  <p className="text-white text-lg">{service}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Nos Avantages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Eye className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Vision 24/7</h3>
              <p className="text-white/80">Surveillance continue avec accès mobile</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Protection Totale</h3>
              <p className="text-white/80">Systèmes intégrés alarme + caméras</p>
            </div>
            <div className="text-center">
              <Lock className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Contrôle d'Accès</h3>
              <p className="text-white/80">Gestion des entrées biométrique</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Marques Partenaires
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all">
                  <p className="text-white font-bold text-lg">{brand}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Installation caméra surveillance Abidjan - Expert sécurité électronique Côte d'Ivoire
          </h2>
          <p className="mb-4 leading-relaxed">
            ALLNTIC est spécialiste de l'<strong>installation de systèmes de vidéosurveillance</strong> à 
            Abidjan et en Côte d'Ivoire. J'installe des caméras IP et analogiques HD/4K avec enregistreurs 
            NVR/DVR Hikvision, Dahua et Uniview pour entreprises, commerces et résidences.
          </p>
          <p className="mb-4 leading-relaxed">
            Besoin d'un <strong>installateur alarme et caméra à Abidjan</strong> ? Je propose des solutions 
            complètes de sécurité électronique : vidéosurveillance avec supervision mobile, alarmes 
            anti-intrusion connectées, contrôle d'accès biométrique et interphonie vidéo.
          </p>
          <p className="leading-relaxed">
            Intervention rapide sur Cocody, Plateau, Marcory, Yopougon et toute la Côte d'Ivoire. 
            Maintenance préventive, dépannage technique et formation utilisateurs inclus. 
            Devis gratuit et audit de sécurité sur demande.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SecuriteElectronique;
