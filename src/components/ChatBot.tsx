import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { analytics } from "@/lib/analytics";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant virtuel d'ALLNTIC GROUP. Comment puis-je vous aider avec vos besoins en informatique et sécurité électronique ?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Base de connaissances RAG enrichie avec informations ALLNTIC GROUP
  const getAutomaticResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Salutations
    if (message.match(/^(bonjour|salut|hello|hi|hey|bonsoir)$/i)) {
      return "Bonjour et bienvenue ! Je suis le chatbot ALLNTIC GROUP, comment puis-je vous aider aujourd'hui ?";
    }
    
    if (message.includes("comment") && (message.includes("vas") || message.includes("allez"))) {
      return "Je vais très bien, merci ! Et vous ? Comment puis-je vous assister dans vos projets techniques ?";
    }
    
    // Identité ALLNTIC GROUP
    if (message.includes("qui") || message.includes("allntic") || message.includes("groupe") || message.includes("entreprise")) {
      return "ALLNTIC GROUP est un pôle technique pluridisciplinaire basé à Abidjan (Cocody), spécialisé en systèmes informatiques, réseaux, développement web et sécurité électronique. Notre devise : Fiabilité, performance et sécurité au service du numérique africain.";
    }

    
    if (message.includes("mission") || message.includes("objectif")) {
      return "Ma mission : Accompagner particuliers et entreprises dans la transformation numérique sécurisée grâce à des solutions intégrées en IT, web et sécurité électronique. Ma vision : Faire de la Côte d'Ivoire un pôle technologique africain.";
    }
    
    // Services proposés
    if (message.includes("service") || message.includes("proposez") || message.includes("offrez") || message.includes("faire")) {
      return "Mes services : 1) Maintenance et dépannage informatique 2) Développement de sites web professionnels SEO-optimisés 3) Installation de réseaux LAN/WAN/Wi-Fi sécurisés 4) Sécurité électronique (vidéosurveillance IP, alarmes, contrôle d'accès) 5) Formation technique 6) Support à distance.";
    }
    
    // Maintenance informatique
    if (message.includes("maintenance") || message.includes("dépannage") || message.includes("réparation") || message.includes("ordinateur")) {
      return "Maintenance informatique complète : hardware/software, diagnostic et réparation PC/serveurs, configuration Windows/Linux, optimisation système, nettoyage, upgrades. Intervention rapide 24-72h selon urgence sur Abidjan.";
    }
    
    // Réseaux
    if (message.includes("réseau") || message.includes("lan") || message.includes("wan") || message.includes("wifi") || message.includes("routeur") || message.includes("switch")) {
      return "Installation réseaux professionnels : LAN/WAN/Wi-Fi, configuration routeurs (Cisco, Ubiquiti, MikroTik), switches managés, VLAN, VPN, pare-feux, câblage structuré, supervision et audit réseau. Solutions adaptées PME et institutions.";
    }
    
    // Sécurité électronique
    if (message.includes("vidéo") || message.includes("surveillance") || message.includes("caméra") || message.includes("alarme") || message.includes("sécurité") || message.includes("hikvision") || message.includes("dahua")) {
      return "Installation systèmes de sécurité : vidéosurveillance IP/analogique HD 4K, caméras Hikvision/Dahua/Uniview, enregistreurs DVR/NVR, accès mobile temps réel, alarmes connectées, contrôle d'accès biométrique, interphonie. Maintenance préventive incluse.";
    }
    
    // Développement web
    if (message.includes("web") || message.includes("site") || message.includes("développement") || message.includes("création") || message.includes("internet") || message.includes("portfolio")) {
      return "Création sites web professionnels : vitrines, portfolios, PWA mobile-first, optimisation SEO avancée (Google, Bing, Meta), WordPress, React, Supabase, Lovable. Tous mes sites sont responsive, sécurisés et hébergés cloud (Vercel, Netlify).";
    }
    
    if (message.includes("seo") || message.includes("référencement") || message.includes("google")) {
      return "Optimisation SEO complète : balises title/meta/ALT, Open Graph, structured data, sitemap XML, robots.txt, performance web, accessibilité, keywords stratégiques. Je garantis une visibilité maximale sur les moteurs de recherche.";
    }
    
    // Technologies utilisées
    if (message.includes("technologie") || message.includes("outil") || message.includes("logiciel") || message.includes("langage")) {
      return "Technologies maîtrisées : HTML5, CSS3, JavaScript, React, Next.js, Laravel, WordPress, Supabase, GitHub, Cisco, Ubiquiti, Windows Server, Linux, Hikvision, Dahua, Synology. Je m'adapte à vos besoins spécifiques.";
    }
    
    // Réalisations
    if (message.includes("réalisation") || message.includes("projet réalisé") || message.includes("expérience") || message.includes("portfolio")) {
      return "Principales réalisations : 1) Déploiement réseau sécurisé PME (Cisco, Ubiquiti, Windows Server) 2) Site institutionnel éducatif responsive SEO-optimisé 3) Système vidéosurveillance IP avec accès mobile 4) Tableau de bord technique React/Supabase 5) Refonte portail ALLNTIC GROUP avec Next.js/TailwindCSS.";
    }
    
    // Projets futurs
    if (message.includes("projet") || message.includes("innovation") || message.includes("avenir") || message.includes("développer")) {
      return "Projets à venir : 1) Plateforme SaaS de gestion d'interventions techniques avec rapports dynamiques 2) Solution IoT de sécurité intelligente (vidéo + alarme + alertes mobiles) 3) Agence technique digitale ALLNTIC GROUP intégrant IT, web, sécurité et formation.";
    }
    
    // Délais et disponibilité
    if (message.includes("délai") || message.includes("quand") || message.includes("combien de temps") || message.includes("rapide")) {
      return "Délais moyens : 24 à 72h selon complexité. Urgences critiques sur Abidjan : intervention sous 4h. Horaires : Lundi-Samedi 8h-18h. Assistance d'urgence disponible sur demande en dehors des horaires.";
    }
    
    if (message.includes("horaire") || message.includes("disponible") || message.includes("ouvert")) {
      return "Horaires : Lundi au Samedi, 8h à 18h. Assistance d'urgence possible en dehors de ces horaires pour interventions critiques. N'hésitez pas à me contacter via WhatsApp pour toute demande.";
    }
    
    // Tarifs et devis
    if (message.includes("prix") || message.includes("tarif") || message.includes("coût") || message.includes("devis") || message.includes("budget")) {
      return "Mes tarifs varient selon la complexité et l'ampleur du projet. Je propose systématiquement un devis gratuit détaillé et sans engagement après analyse de vos besoins. Contactez-moi pour une estimation personnalisée adaptée à votre budget.";
    }
    
    // Formation
    if (message.includes("formation") || message.includes("apprendre") || message.includes("cours") || message.includes("enseigner")) {
      return "Formations techniques disponibles : bureautique, maintenance informatique, administration réseaux, sécurité électronique, cybersécurité. Formations adaptées à votre niveau, en présentiel ou à distance, avec support de cours et accompagnement personnalisé.";
    }
    
    // Zone d'intervention
    if (message.includes("où") || message.includes("zone") || message.includes("abidjan") || message.includes("intervenir") || message.includes("localisation")) {
      return "Basé à Abidjan, Cocody. J'interviens sur toute la ville : Cocody, Plateau, Yopougon, Koumassi, Marcory, Abobo, etc. Interventions possibles dans d'autres villes de Côte d'Ivoire selon le projet et sur devis.";
    }
    
    // Contrats de maintenance
    if (message.includes("contrat") || message.includes("abonnement") || message.includes("suivi") || message.includes("maintenance préventive")) {
      return "Oui, je propose des contrats de maintenance IT et sécurité avec interventions préventives et curatives programmées, mises à jour régulières et assistance prioritaire. Idéal pour PME nécessitant un suivi technique continu.";
    }
    
    // Contact et réseaux sociaux
    if (message.includes("contact") || message.includes("joindre") || message.includes("appeler") || message.includes("email") || message.includes("whatsapp")) {
      return "Contact : WhatsApp +225 07 78 02 33 31, Email all.ntic225@gmail.com, Site https://allntic.com. Suivez-moi sur LinkedIn, GitHub, Instagram, YouTube, Facebook, TikTok @allntic. Réponse sous 24h garantie.";
    }
    
    if (message.includes("github") || message.includes("instagram") || message.includes("facebook") || message.includes("youtube") || message.includes("tiktok") || message.includes("réseau social")) {
      return "Nos réseaux : GitHub github.com/all-ntic, Instagram/TikTok @allntic225, YouTube @allntic, Facebook ALLNTIC. Suivez nos actualités et projets techniques !";
    }

    
    // Certifications et qualifications
    if (message.includes("certification") || message.includes("diplôme") || message.includes("qualification")) {
      return "Plusieurs formations validées en IT, réseaux, sécurité et développement web. Technicien certifié avec expérience terrain confirmée sur plus de 30 projets (sites web, réseaux sécurisés, installations de sécurité électronique).";
    }
    
    // Matériel recommandé
    if (message.includes("recommandation") || message.includes("marque") || message.includes("matériel")) {
      return "Marques recommandées : Réseaux (Ubiquiti, Cisco, TP-Link Pro, MikroTik), Sécurité (Hikvision, Dahua, Uniview, Synology), Serveurs (Windows Server, Linux Ubuntu/Debian). Je travaille avec des équipements professionnels fiables et évolutifs.";
    }
    
    // Support technique
    if (message.includes("support") || message.includes("assistance") || message.includes("aide") || message.includes("problème")) {
      return "Support technique disponible : télémaintenance via outils sécurisés, assistance à distance, intervention sur site Abidjan, diagnostic rapide, résolution de problèmes IT et sécurité. Contactez-moi pour toute urgence technique.";
    }
    
    // Entreprises et PME
    if (message.includes("entreprise") || message.includes("pme") || message.includes("société") || message.includes("professionnel")) {
      return "Je collabore avec des PME, institutions, écoles et entrepreneurs en Afrique de l'Ouest. Services dédiés : infrastructure IT complète, réseaux d'entreprise sécurisés, solutions de sécurité professionnelles, formation équipes, contrats de maintenance prioritaires.";
    }
    
    // Lovable et outils modernes
    if (message.includes("lovable") || message.includes("supabase") || message.includes("moderne")) {
      return "J'utilise des technologies modernes : Lovable pour le développement rapide d'applications, Supabase pour les backends, Paystack pour les paiements, API modernes (Eventbrite, etc.). Solutions cloud scalables et sécurisées.";
    }
    
    // Cybersécurité
    if (message.includes("cybersécurité") || message.includes("sécurité informatique") || message.includes("protection")) {
      return "Services cybersécurité : configuration pare-feux, VPN sécurisés, politiques d'accès, protection contre intrusions, audit sécurité réseau, sensibilisation équipes, gestion mots de passe, sauvegarde données. Votre sécurité numérique est ma priorité.";
    }
    
    // Intelligence artificielle
    if (message.includes("ia") || message.includes("intelligence artificielle") || message.includes("automatisation")) {
      return "Je m'intéresse aux solutions IA et automatisation : chatbots intelligents, génération de contenu, automatisation de tâches, analyse de données. Je peux intégrer des solutions IA modernes dans vos projets web et IT.";
    }
    
    // Cloud et hébergement
    if (message.includes("cloud") || message.includes("hébergement") || message.includes("serveur")) {
      return "Solutions cloud professionnelles : hébergement sécurisé (Vercel, Netlify, AWS, Supabase), configuration serveurs Windows/Linux, migration vers le cloud, sauvegarde automatique, scalabilité. Infrastructure moderne et performante.";
    }
    
    // E-commerce
    if (message.includes("e-commerce") || message.includes("boutique") || message.includes("vente en ligne")) {
      return "Création sites e-commerce : intégration Paystack/WooCommerce, catalogue produits, panier, paiement sécurisé XOF, gestion stocks, suivi commandes. Solutions adaptées au marché ivoirien et africain.";
    }
    
    // Caméras spécifiques
    if (message.includes("nvr") || message.includes("dvr") || message.includes("enregistreur")) {
      return "Enregistreurs vidéo : NVR pour caméras IP (4K, H.265+, PoE), DVR pour analogiques. Marques : Hikvision, Dahua, Synology Surveillance Station. Accès mobile iOS/Android, alertes temps réel, stockage local et cloud.";
    }
    
    // VLAN et segmentation
    if (message.includes("vlan") || message.includes("segmentation")) {
      return "Configuration VLAN : segmentation logique réseau, isolation trafic, sécurité renforcée, gestion switches managés, politiques d'accès par groupe. Idéal pour séparer administration, production, invités dans une infrastructure complexe.";
    }
    
    // WordPress
    if (message.includes("wordpress") || message.includes("cms")) {
      return "Développement WordPress : sites vitrines, blogs, CMS personnalisés, thèmes sur mesure, plugins, optimisation vitesse, sécurité renforcée, sauvegarde automatique, mises à jour. Solution flexible pour gérer votre contenu facilement.";
    }
    
    // React et frameworks modernes
    if (message.includes("react") || message.includes("next") || message.includes("framework")) {
      return "Développement avec frameworks modernes : React, Next.js, TailwindCSS. Applications web performantes, PWA, SEO-friendly, responsive design, intégration API. Code propre, maintenable et évolutif.";
    }
    
    // Création de site vitrine
    if (message.includes("site vitrine") || message.includes("présence web")) {
      return "Création site vitrine professionnel : design moderne, responsive mobile-first, formulaire contact, intégration réseaux sociaux, galerie photos/vidéos, optimisation SEO, hébergement sécurisé. Présence web impactante garantie.";
    }
    
    // Garantie et SAV
    if (message.includes("garantie") || message.includes("sav") || message.includes("après-vente")) {
      return "Service après-vente complet : garantie sur prestations, suivi technique, mises à jour régulières, assistance prioritaire pour clients sous contrat, documentation détaillée. Votre satisfaction est ma priorité.";
    }
    
    // Intervention d'urgence
    if (message.includes("urgence") || message.includes("panne") || message.includes("critique")) {
      return "Intervention d'urgence disponible : diagnostic rapide, résolution problèmes critiques, restauration systèmes, récupération données. Sur Abidjan, intervention possible sous 4h pour urgences techniques. Contactez-moi immédiatement.";
    }
    
    // Paystack et paiements
    if (message.includes("paystack") || message.includes("paiement") || message.includes("transaction")) {
      return "Intégration Paystack pour paiements en ligne : transactions sécurisées XOF, cartes bancaires, Mobile Money (MTN, Moov, Orange), webhooks, réconciliation automatique. Solution de paiement adaptée au marché ivoirien.";
    }
    
    // Sauvegarde et récupération
    if (message.includes("sauvegarde") || message.includes("backup") || message.includes("récupération")) {
      return "Solutions de sauvegarde : automatisation backups, stockage local et cloud, plan de reprise d'activité (PRA), récupération données en cas de panne, protection contre ransomware. Vos données en sécurité.";
    }
    
    // Formation cybersécurité
    if (message.includes("formation cybersécurité") || message.includes("sensibilisation")) {
      return "Formation cybersécurité : sensibilisation équipes, bonnes pratiques, gestion mots de passe, phishing, protection données personnelles, RGPD. Sessions interactives adaptées à tous niveaux.";
    }
    
    // Audit technique
    if (message.includes("audit") || message.includes("diagnostic") || message.includes("analyse")) {
      return "Audit technique complet : diagnostic infrastructure IT, analyse sécurité réseau, évaluation systèmes, recommandations d'amélioration, rapport détaillé, plan d'action priorisé. Optimisez votre IT.";
    }
    
    // Travail à distance
    if (message.includes("distance") || message.includes("remote") || message.includes("télémaintenance")) {
      return "Oui, télémaintenance et support à distance via outils sécurisés (TeamViewer, AnyDesk, SSH). Idéal pour diagnostic, configuration, formation, résolution problèmes sans déplacement. Efficace et économique.";
    }
    
    // Collaboration
    if (message.includes("collaboration") || message.includes("partenariat") || message.includes("équipe")) {
      return "Ouvert aux collaborations techniques, partenariats sur projets IT, intégration dans équipes pluridisciplinaires. Capacité d'adaptation, esprit d'équipe, communication transparente. Contactez-moi pour discuter opportunités.";
    }
    
    // Valeurs
    if (message.includes("valeur") || message.includes("principe") || message.includes("éthique")) {
      return "Mes valeurs : Rigueur technique, Innovation pragmatique, Fiabilité des solutions, Transparence totale, Service orienté client, Engagement qualité, Excellence opérationnelle. Ces principes guident chacune de mes prestations.";
    }
    
    // Remerciements
    if (message.includes("merci") || message.includes("au revoir") || message.includes("bye") || message.includes("ciao")) {
      return "Merci pour votre intérêt ! N'hésitez pas à me contacter via WhatsApp +225 07 78 02 33 31 ou all.ntic225@gmail.com pour concrétiser votre projet. Je suis à votre disposition. À très bientôt ! 🚀";
    }
    
    // Réponse par défaut enrichie
    return "Je n'ai pas cette information précise dans ma base actuellement. Pour une réponse détaillée et personnalisée, contactez ALLNTIC GROUP directement : WhatsApp +225 07 78 02 33 31, Email all.ntic225@gmail.com, Site https://allntic.com. Je serai ravi de vous aider !";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Track chatbot message
    analytics.chatbotMessage();

    // Ajouter message utilisateur
    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simuler temps de réponse
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getAutomaticResponse(inputMessage.trim()),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleOpenChat = () => {
    analytics.chatbotOpen();
    setIsOpen(true);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={handleOpenChat}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full btn-hero shadow-floating animate-glow-pulse"
          size="lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] shadow-floating border-0 bg-white flex flex-col animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-hero text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-full">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Assistant ALLNTIC GROUP</h3>
                <p className="text-xs text-cyan-100">En ligne</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.isUser ? "flex-row-reverse space-x-reverse" : ""}`}>
                  <div className={`p-2 rounded-full ${message.isUser ? "bg-cyan-electric text-white" : "bg-white border"}`}>
                    {message.isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-cyan-electric" />}
                  </div>
                  <div className={`p-3 rounded-2xl ${
                    message.isUser 
                      ? "bg-cyan-electric text-white rounded-br-md" 
                      : "bg-white border rounded-bl-md shadow-sm"
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-1 opacity-70 ${message.isUser ? "text-cyan-100" : "text-gray-500"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="p-2 rounded-full bg-white border">
                    <Bot className="w-4 h-4 text-cyan-electric" />
                  </div>
                  <div className="bg-white border rounded-2xl rounded-bl-md shadow-sm p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white rounded-b-lg">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre message..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-cyan-electric hover:bg-cyan-glow text-white px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatBot;