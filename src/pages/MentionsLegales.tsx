import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, FileText, Mail, Phone, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales & Politique de Confidentialité | ALLNTIC - APA-PRO</title>
        <meta 
          name="description" 
          content="Consultez les mentions légales et la politique de confidentialité du site APA-PRO par ALLNTIC. Protection des données personnelles et informations légales." 
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://apa-pro.allntic.com/mentions-legales" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-royal-blue hover:text-accent-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue rounded"
            >
              <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
              Retour à l'accueil
            </Link>
          </nav>

          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Mentions Légales & <span className="text-royal-blue">Politique de Confidentialité</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Mentions Légales */}
            <section aria-labelledby="mentions-title" className="bg-white rounded-2xl p-8 shadow-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-royal-blue/10 rounded-xl">
                  <FileText className="w-6 h-6 text-royal-blue" aria-hidden="true" />
                </div>
                <h2 id="mentions-title" className="text-2xl font-bold text-foreground">Mentions Légales</h2>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">1. Éditeur du site</h3>
                  <ul className="space-y-2">
                    <li><strong>Nom :</strong> Agnidom Pygnali Aboubakar</li>
                    <li><strong>Nom commercial :</strong> ALLNTIC</li>
                    <li><strong>Activité :</strong> Technicien Systèmes, Réseaux, Développement Web et Sécurité Électronique</li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-royal-blue" aria-hidden="true" />
                      <span><strong>Adresse :</strong> Abidjan, Côte d'Ivoire</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-royal-blue" aria-hidden="true" />
                      <span><strong>Téléphone :</strong> <a href="tel:+2250778023331" className="text-royal-blue hover:underline">+225 07 78 02 33 31</a></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-royal-blue" aria-hidden="true" />
                      <span><strong>Email :</strong> <a href="mailto:all.ntic225@gmail.com" className="text-royal-blue hover:underline">all.ntic225@gmail.com</a></span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">2. Hébergement</h3>
                  <p>
                    Ce site est hébergé par <strong>Lovable / Vercel</strong>, dont le siège social est situé aux États-Unis.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">3. Propriété intellectuelle</h3>
                  <p>
                    L'ensemble du contenu de ce site (textes, images, logos, vidéos, éléments graphiques) est la propriété exclusive d'ALLNTIC ou de ses partenaires et est protégé par les lois relatives à la propriété intellectuelle. Toute reproduction, distribution ou utilisation sans autorisation préalable est strictement interdite.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">4. Responsabilité</h3>
                  <p>
                    ALLNTIC s'efforce de fournir des informations exactes et à jour sur ce site. Cependant, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations diffusées. L'utilisation des informations présentes sur ce site se fait sous la seule responsabilité de l'utilisateur.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">5. Liens externes</h3>
                  <p>
                    Ce site peut contenir des liens vers des sites tiers. ALLNTIC n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leurs pratiques en matière de confidentialité.
                  </p>
                </div>
              </div>
            </section>

            {/* Politique de Confidentialité */}
            <section aria-labelledby="confidentialite-title" className="bg-white rounded-2xl p-8 shadow-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent-gold/10 rounded-xl">
                  <Shield className="w-6 h-6 text-accent-gold" aria-hidden="true" />
                </div>
                <h2 id="confidentialite-title" className="text-2xl font-bold text-foreground">Politique de Confidentialité</h2>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">1. Collecte des données personnelles</h3>
                  <p className="mb-3">
                    Nous collectons les données personnelles que vous nous fournissez volontairement via :
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Le formulaire de contact (nom, email, téléphone, message)</li>
                    <li>Les demandes de devis ou d'intervention</li>
                    <li>L'inscription à notre newsletter (si applicable)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">2. Utilisation des données</h3>
                  <p className="mb-3">Vos données personnelles sont utilisées pour :</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Répondre à vos demandes de contact ou de devis</li>
                    <li>Vous fournir nos services techniques</li>
                    <li>Améliorer notre site et nos services</li>
                    <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">3. Protection des données</h3>
                  <p>
                    Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction. Les données sont stockées de manière sécurisée via notre plateforme Supabase avec chiffrement.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">4. Cookies et analyses</h3>
                  <p className="mb-3">
                    Ce site utilise des cookies et Google Analytics pour :
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Analyser le trafic et l'utilisation du site</li>
                    <li>Améliorer l'expérience utilisateur</li>
                    <li>Mémoriser vos préférences</li>
                  </ul>
                  <p className="mt-3">
                    Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">5. Conservation des données</h3>
                  <p>
                    Vos données personnelles sont conservées pendant une durée maximale de 3 ans à compter de notre dernier contact, sauf obligation légale de conservation plus longue.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">6. Vos droits</h3>
                  <p className="mb-3">
                    Conformément à la réglementation applicable, vous disposez des droits suivants :
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                    <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                    <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                    <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                    <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                  </ul>
                  <p className="mt-3">
                    Pour exercer ces droits, contactez-nous à : <a href="mailto:all.ntic225@gmail.com" className="text-royal-blue hover:underline">all.ntic225@gmail.com</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">7. Partage des données</h3>
                  <p>
                    Vos données personnelles ne sont jamais vendues à des tiers. Elles peuvent être partagées uniquement avec nos prestataires techniques (hébergement, email) dans le cadre strict de la fourniture de nos services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">8. Contact</h3>
                  <p>
                    Pour toute question concernant cette politique de confidentialité ou vos données personnelles, vous pouvez nous contacter :
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>Email : <a href="mailto:all.ntic225@gmail.com" className="text-royal-blue hover:underline">all.ntic225@gmail.com</a></li>
                    <li>WhatsApp : <a href="https://wa.me/2250778023331" className="text-royal-blue hover:underline" target="_blank" rel="noopener noreferrer">+225 07 78 02 33 31</a></li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default MentionsLegales;
