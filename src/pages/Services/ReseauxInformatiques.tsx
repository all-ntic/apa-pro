import { Network, Wifi, Server, Cable, Shield, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ReseauxInformatiques = () => {
  const services = [
    "Installation et configuration réseau LAN/WAN",
    "Déploiement Wi-Fi professionnel sécurisé",
    "Configuration routeurs et switchs managés",
    "Câblage structuré et réseau filaire",
    "Mise en place de serveurs Windows/Linux",
    "Sécurisation réseau (pare-feu, VLAN, VPN)",
    "Supervision et monitoring réseau",
    "Audit et optimisation infrastructure"
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
            Installation Réseaux Informatiques Entreprise Abidjan
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Conception, déploiement et sécurisation d'infrastructures réseau professionnelles. 
            Solutions LAN, WAN, Wi-Fi et serveurs pour PME en Côte d'Ivoire.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-accent-gold hover:bg-accent-gold-dark text-gray-900 font-semibold"
          >
            <Phone className="mr-2 h-5 w-5" />
            Obtenir un devis gratuit
          </Button>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Solutions Réseau Professionnelles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-start gap-4">
                  <Network className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                  <p className="text-white text-lg">{service}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technologies Utilisées
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <Server className="w-12 h-12 text-accent-gold mx-auto mb-3" />
              <p className="text-white font-semibold">Cisco</p>
            </div>
            <div className="text-center">
              <Wifi className="w-12 h-12 text-accent-gold mx-auto mb-3" />
              <p className="text-white font-semibold">Ubiquiti</p>
            </div>
            <div className="text-center">
              <Cable className="w-12 h-12 text-accent-gold mx-auto mb-3" />
              <p className="text-white font-semibold">MikroTik</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-accent-gold mx-auto mb-3" />
              <p className="text-white font-semibold">Windows Server</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Expert réseau informatique Abidjan - Infrastructure IT sécurisée
          </h2>
          <p className="mb-4 leading-relaxed">
            ALLNTIC est spécialiste de l'<strong>installation de réseaux informatiques professionnels</strong> à 
            Abidjan et en Côte d'Ivoire. Je conçois et déploie des infrastructures réseau LAN/WAN performantes 
            et sécurisées pour entreprises et PME.
          </p>
          <p className="mb-4 leading-relaxed">
            Besoin d'un <strong>intégrateur réseau Abidjan</strong> ? Je prends en charge le câblage structuré, 
            la configuration de routeurs Cisco, Ubiquiti et MikroTik, ainsi que l'installation de serveurs 
            Windows et Linux. Solutions Wi-Fi professionnelles avec supervision centralisée.
          </p>
          <p className="leading-relaxed">
            Intervention sur Abidjan et toute la Côte d'Ivoire. Audit réseau, optimisation de bande passante, 
            sécurisation par VLAN et VPN. Devis gratuit sous 24h.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReseauxInformatiques;
