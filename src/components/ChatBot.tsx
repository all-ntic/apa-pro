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

  // Réponses automatiques basées sur les FAQ
  const getAutomaticResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("service") || message.includes("proposez")) {
      return "ALLNTIC propose plusieurs services : maintenance informatique (hardware/software), installation et administration de réseaux LAN/WAN, développement web professionnel, et sécurité électronique (vidéosurveillance, alarmes, contrôle d'accès). Quel service vous intéresse le plus ?";
    }
    
    if (message.includes("contact") || message.includes("rdv") || message.includes("rendez-vous")) {
      return "Pour nous contacter, vous pouvez utiliser le formulaire sur le site, nous appeler, ou cliquer sur le bouton WhatsApp. Nous répondons sous 24h ! Préférez-vous un contact immédiat via WhatsApp ?";
    }
    
    if (message.includes("vidéo") || message.includes("surveillance") || message.includes("caméra") || message.includes("sécurité")) {
      return "Oui, nous installons des systèmes de vidéosurveillance complets : caméras IP HD, enregistrement numérique, accès à distance, et systèmes d'alarme. Nous proposons également du contrôle d'accès. Avez-vous un projet spécifique en tête ?";
    }
    
    if (message.includes("web") || message.includes("site") || message.includes("développement")) {
      return "Nous créons des sites web modernes : sites vitrines, portfolios, e-commerce, et applications sur mesure. Tous nos sites sont responsive, optimisés SEO, et développés avec les dernières technologies. Quel type de site souhaitez-vous ?";
    }
    
    if (message.includes("délai") || message.includes("quand") || message.includes("combien de temps")) {
      return "Nous nous engageons à répondre sous 24h. Pour les urgences, intervention possible sous 4h selon la zone. Les projets de développement sont planifiés avec des jalons précis. Avez-vous une urgence ?";
    }
    
    if (message.includes("prix") || message.includes("tarif") || message.includes("coût")) {
      return "Nos tarifs dépendent de la complexité du projet. Nous proposons toujours un devis gratuit personnalisé. Décrivez-moi votre besoin et je pourrai vous orienter vers la bonne solution !";
    }
    
    if (message.includes("merci") || message.includes("au revoir") || message.includes("bye")) {
      return "Merci pour votre intérêt ! N'hésitez pas à nous contacter pour concrétiser votre projet. L'équipe ALLNTIC est à votre disposition !";
    }
    
    return "Je comprends votre question. Pour obtenir une réponse détaillée et personnalisée, je vous recommande de contacter directement notre équipe via WhatsApp ou le formulaire de contact. Ils pourront vous accompagner précisément dans votre projet !";
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