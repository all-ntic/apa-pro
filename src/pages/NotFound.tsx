import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import allnticLogo from "@/assets/allntic-logo.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-blue-dark via-royal-blue to-royal-blue-light flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <img 
            src={allnticLogo} 
            alt="ALLNTIC Logo" 
            className="w-32 h-32 mx-auto mb-6 animate-pulse"
            loading="eager"
          />
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-8xl font-bold text-white">4</div>
            <Search className="w-16 h-16 text-accent-gold animate-bounce" />
            <div className="text-8xl font-bold text-white">4</div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Page Introuvable</h1>
          <p className="text-xl text-white/90 mb-4">
            Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <p className="text-lg text-white/80 mb-8">
            Chemin demandé : <code className="bg-white/10 px-2 py-1 rounded text-accent-gold font-mono">{location.pathname}</code>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="/"
            className="bg-accent-gold hover:bg-accent-gold-dark text-gray-900 px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
          >
            <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Retour à l'accueil
          </a>
          <button
            onClick={() => window.history.back()}
            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Page précédente
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-3">Pages populaires</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/services/maintenance-informatique" className="text-accent-gold hover:text-white transition-colors">Maintenance IT</a>
            <span className="text-white/50">•</span>
            <a href="/services/reseaux-informatiques" className="text-accent-gold hover:text-white transition-colors">Réseaux</a>
            <span className="text-white/50">•</span>
            <a href="/services/developpement-web" className="text-accent-gold hover:text-white transition-colors">Développement Web</a>
            <span className="text-white/50">•</span>
            <a href="/services/securite-electronique" className="text-accent-gold hover:text-white transition-colors">Sécurité Électronique</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
