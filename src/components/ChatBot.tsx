import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

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
      text: "Bonjour ! Je suis l'assistant virtuel d'ALLNTIC. Comment puis-je vous aider avec vos besoins en informatique et sécurité électronique ?",
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

  // Base de connaissances RAG locale
  const getAutomaticResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Identité et profil
    if (message.includes("qui") || message.includes("allntic") || message.includes("aboubakar")) {
      return "Je suis ALLNTIC (Agnidom Pygnali Aboubakar), technicien polyvalent ivoirien spécialisé en systèmes informatiques, réseaux, développement web et sécurité électronique. Mon approche repose sur le pragmatisme, la précision technique et l'innovation durable.";
    }
    
    // Services proposés
    if (message.includes("service") || message.includes("proposez") || message.includes("offrez")) {
      return "Je propose : maintenance informatique (hardware/software), installation et administration de réseaux LAN/WAN, développement web (sites vitrines, portfolios), et sécurité électronique (vidéosurveillance IP/analogique, alarmes, contrôle d'accès). Je propose également des formations techniques et du support à distance.";
    }
    
    // Maintenance informatique
    if (message.includes("maintenance") || message.includes("dépannage") || message.includes("réparation")) {
      return "Je réalise la maintenance hardware et software : diagnostic et réparation de PC, serveurs, installation de logiciels, optimisation système, nettoyage et upgrades. Intervention rapide à domicile ou sur site selon votre localisation.";
    }
    
    // Réseaux
    if (message.includes("réseau") || message.includes("lan") || message.includes("wan") || message.includes("wifi")) {
      return "J'installe et configure des réseaux LAN/WAN sécurisés : routeurs, switches managés, points d'accès Wi-Fi professionnel, câblage structuré, segmentation réseau et configuration VPN. Audit et optimisation de réseaux existants également disponibles.";
    }
    
    // Sécurité électronique
    if (message.includes("vidéo") || message.includes("surveillance") || message.includes("caméra") || message.includes("alarme") || message.includes("sécurité")) {
      return "J'installe des systèmes de vidéosurveillance complets (IP et analogiques) : caméras HD 4K, enregistreurs DVR/NVR, accès à distance sur mobile, systèmes d'alarme connectés, et contrôle d'accès biométrique. Intégration de marques Hikvision, Dahua, Synology.";
    }
    
    // Développement web
    if (message.includes("web") || message.includes("site") || message.includes("développement") || message.includes("création")) {
      return "Je crée des sites web professionnels : sites vitrines, portfolios, plateformes sur mesure avec HTML5, CSS3, JavaScript et WordPress. Tous mes sites sont responsive, optimisés SEO et hébergés de manière sécurisée. Je propose également la maintenance et les mises à jour.";
    }
    
    // Délais et interventions
    if (message.includes("délai") || message.includes("quand") || message.includes("combien de temps") || message.includes("rapide")) {
      return "Mes délais moyens sont de 24 à 72 heures selon la complexité et l'urgence. Pour les urgences critiques sur Abidjan, je peux intervenir dans les 4h. Les projets web sont planifiés avec des jalons précis et validés avec vous.";
    }
    
    // Tarifs et devis
    if (message.includes("prix") || message.includes("tarif") || message.includes("coût") || message.includes("devis")) {
      return "Mes tarifs varient selon la complexité du projet. Je propose systématiquement un devis gratuit et sans engagement après analyse de vos besoins. Contactez-moi pour obtenir une estimation personnalisée adaptée à votre budget.";
    }
    
    // Formation
    if (message.includes("formation") || message.includes("apprendre") || message.includes("cours")) {
      return "Je propose des formations techniques en bureautique, maintenance informatique de base, administration réseau et sécurité électronique. Formations adaptées à votre niveau, en présentiel ou à distance selon vos préférences.";
    }
    
    // Zone d'intervention
    if (message.includes("où") || message.includes("zone") || message.includes("abidjan") || message.includes("intervenir")) {
      return "Je suis basé à Abidjan et j'interviens principalement sur toute la ville (Cocody, Plateau, Yopougon, Koumassi, etc.) et ses environs. Interventions possibles dans d'autres villes de Côte d'Ivoire sur demande et selon le projet.";
    }
    
    // Contrats de maintenance
    if (message.includes("contrat") || message.includes("abonnement") || message.includes("suivi")) {
      return "Oui, je propose des contrats de maintenance informatique et sécurité avec interventions préventives et curatives programmées. Idéal pour les PME et structures nécessitant un suivi régulier et une disponibilité garantie.";
    }
    
    // Contact
    if (message.includes("contact") || message.includes("joindre") || message.includes("appeler") || message.includes("email")) {
      return "Vous pouvez me contacter par WhatsApp au +225 07 78 02 33 31, par email à all.ntic225@gmail.com, ou via le formulaire de contact sur ce site. Je réponds généralement sous 24h. Mon profil LinkedIn : linkedin.com/in/allntic";
    }
    
    // Horaires
    if (message.includes("horaire") || message.includes("disponible") || message.includes("ouvert")) {
      return "Je suis disponible du lundi au samedi, de 8h à 18h. Pour les urgences techniques critiques, une assistance peut être organisée en dehors de ces horaires sur demande. N'hésitez pas à me contacter.";
    }
    
    // Projets à venir
    if (message.includes("projet") || message.includes("innovation") || message.includes("avenir")) {
      return "Je travaille actuellement sur plusieurs projets : une plateforme de gestion d'interventions techniques, une solution de sécurité connectée intelligente, et la création de l'agence ALLNTIC pour des solutions IT intégrées complètes.";
    }
    
    // Remerciements
    if (message.includes("merci") || message.includes("au revoir") || message.includes("bye")) {
      return "Merci pour votre intérêt ! N'hésitez pas à me contacter pour concrétiser votre projet technique. Je suis à votre disposition pour toute question. À très bientôt !";
    }
    
    // Réponse par défaut
    return "Je n'ai pas encore cette information précise dans ma base. Pour obtenir une réponse détaillée et personnalisée, contactez-moi directement au +225 07 78 02 33 31 (WhatsApp) ou via all.ntic225@gmail.com. Je serai ravi de vous aider !";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

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

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
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
                <h3 className="font-semibold">Assistant ALLNTIC</h3>
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