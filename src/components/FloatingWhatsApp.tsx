import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Bonjour ALLNTIC, je souhaite obtenir plus d'informations sur vos services."
    );
    window.open(`https://wa.me/2250778023331?text=${message}`, "_blank");
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 bg-background border border-border rounded-2xl shadow-2xl p-4 w-72 z-50 animate-in slide-in-from-bottom-5">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-start gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-foreground">ALLNTIC</p>
              <p className="text-xs text-muted-foreground">Disponible maintenant</p>
            </div>
          </div>
          <p className="text-sm text-foreground mb-3">
            Besoin d'aide ? Contactez-moi directement sur WhatsApp pour un devis gratuit ou des conseils techniques.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Démarrer la conversation
          </button>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all z-50 flex items-center justify-center group"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      </button>
    </>
  );
};

export default FloatingWhatsApp;
