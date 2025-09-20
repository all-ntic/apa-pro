import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="text-8xl font-bold text-white/20 mb-4">404</div>
          <h1 className="text-3xl font-bold text-white mb-4">Page non trouvée</h1>
          <p className="text-gray-300 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="bg-gradient-accent text-white px-6 py-3 rounded-lg font-medium hover:shadow-glow transition-all duration-300 flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </a>
          <button
            onClick={() => window.history.back()}
            className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
