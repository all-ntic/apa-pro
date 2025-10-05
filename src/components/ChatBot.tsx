import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Bonjour ! Je suis l'Assistant Eburnie. Comment puis-je vous aider aujourd'hui ?",
      isUser: false,
      timestamp: new Date(),
    },
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

  // Base de connaissances RAG - Eburnie Groupe & Consulting
  const knowledgeBase: { [key: string]: string } = {
    "qui": "Eburnie Groupe & Consulting est une entreprise ivoirienne spécialisée dans l'ingénierie informatique, la sécurité électronique et la domotique.",
    "depuis": "Fondée en 2013, Eburnie Groupe cumule plus de 10 ans d'expérience dans la mise en œuvre de solutions technologiques.",
    "services": "Nous proposons : vente et installation de matériel informatique, vidéosurveillance, alarmes, réseaux, solutions domotiques, maintenance et audits informatiques.",
    "international": "Oui, nous intervenons principalement en Côte d'Ivoire et dans la sous-région ouest-africaine.",
    "clients": "Nous servons des particuliers, PME, institutions publiques et structures industrielles.",
    "audit": "Oui, nous réalisons des diagnostics complets pour évaluer les infrastructures et proposer des améliorations adaptées.",
    "cloud": "Oui, nous proposons des solutions cloud : stockage sécurisé, sauvegardes automatiques et accès distant aux données.",
    "maintenance": "Oui, nous offrons des contrats de maintenance avec interventions préventives et curatives selon vos besoins.",
    "équipe": "Notre équipe est composée d'ingénieurs, techniciens et consultants certifiés.",
    "formation": "Oui, nous assurons la formation du personnel client pour garantir la bonne prise en main des équipements et logiciels.",
    "délai": "En moyenne 24 à 48h sur Abidjan, et 72h pour les autres villes.",
    "devis": "Oui, tous nos devis sont gratuits et sans engagement. Vous pouvez nous contacter via le formulaire ou au +225 07 07 300 050.",
    "équipement": "Nous installons des caméras IP, serveurs, alarmes, capteurs, contrôleurs d'accès, systèmes domotiques, etc.",
    "installation": "Nous proposons la fourniture de matériel neuf ou nous pouvons travailler sur votre installation existante.",
    "avantage": "Expertise technique reconnue, accompagnement personnalisé, respect des délais et service après-vente réactif.",
    "paiement": "Nous acceptons le virement bancaire, le mobile money (Orange, MTN, Moov) et les paiements par chèque.",
    "entreprise": "Oui, nous proposons des packages personnalisés selon la taille et le secteur d'activité de votre entreprise.",
    "distance": "Oui, vous pouvez suivre les interventions à distance via nos systèmes connectés et alertes en temps réel.",
    "horaire": "Nous sommes ouverts du lundi au samedi, de 8h à 18h.",
    "contact": "Téléphone : +225 07 07 300 050 | Email : info@eburniegroupe.com | Adresse : Koumassi remblais, Abidjan | Site web : www.eburniegroupe.com"
  };

  const getAutomaticResponse = (userMessage: string): string => {
    const messageLower = userMessage.toLowerCase();

    // Recherche dans la base de connaissances
    for (const [keyword, response] of Object.entries(knowledgeBase)) {
      if (messageLower.includes(keyword)) {
        return response;
      }
    }

    // Recherche par mots-clés additionnels
    if (messageLower.includes("présentation") || messageLower.includes("présenter")) {
      return knowledgeBase["qui"];
    }
    if (messageLower.includes("expérience") || messageLower.includes("ancienneté")) {
      return knowledgeBase["depuis"];
    }
    if (messageLower.includes("proposez") || messageLower.includes("offrir")) {
      return knowledgeBase["services"];
    }
    if (messageLower.includes("prix") || messageLower.includes("tarif") || messageLower.includes("coût")) {
      return "Pour obtenir un devis personnalisé gratuit, contactez-nous au +225 07 07 300 050 ou via info@eburniegroupe.com.";
    }
    if (messageLower.includes("téléphone") || messageLower.includes("appeler") || messageLower.includes("numéro")) {
      return "Vous pouvez nous joindre au +225 07 07 300 050, du lundi au samedi de 8h à 18h.";
    }
    if (messageLower.includes("email") || messageLower.includes("mail") || messageLower.includes("courriel")) {
      return "Notre adresse email : info@eburniegroupe.com";
    }
    if (messageLower.includes("adresse") || messageLower.includes("localisation") || messageLower.includes("où")) {
      return "Nous sommes situés à Koumassi remblais, Abidjan, Côte d'Ivoire (10 BP 927 Abidjan 10).";
    }

    // Salutations
    if (messageLower.includes("bonjour") || messageLower.includes("salut") || messageLower.includes("hello")) {
      return "Bonjour ! Comment puis-je vous aider concernant nos services informatiques, de sécurité ou de domotique ?";
    }

    // Remerciements
    if (messageLower.includes("merci") || messageLower.includes("remercie")) {
      return "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. Notre équipe reste à votre disposition.";
    }

    // Message par défaut si aucune correspondance
    return "Je n'ai pas encore cette information dans ma base interne. Vous pouvez contacter notre équipe au +225 07 07 300 050 ou via info@eburniegroupe.com pour obtenir une réponse personnalisée.";
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAutomaticResponse(inputMessage),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-accent text-white shadow-glow hover:shadow-mega transition-all duration-300 z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-floating border border-eburnie-orange/20 flex flex-col z-50 animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-hero text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-eburnie-orange rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold">Assistant Eburnie</h3>
                <p className="text-xs text-white/80">En ligne</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-xl ${
                    message.isUser
                      ? "bg-gradient-accent text-white"
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 p-3 rounded-xl border border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-eburnie-orange rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-eburnie-orange rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="w-2 h-2 bg-eburnie-orange rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Posez votre question..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 border-eburnie-primary/20 focus:border-eburnie-orange"
              />
              <Button
                onClick={handleSendMessage}
                disabled={inputMessage.trim() === ""}
                className="bg-gradient-accent text-white hover:shadow-glow transition-all duration-300"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;