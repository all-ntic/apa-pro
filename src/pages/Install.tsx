import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Smartphone, Globe, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Install = () => {
  const navigate = useNavigate();
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("PWA installée avec succès");
    }

    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--navy-dark))] flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full glass-card">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(var(--gold-primary))] to-[hsl(var(--gold-light))] flex items-center justify-center shadow-lg">
              <Download className="w-10 h-10 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-[hsl(var(--navy-dark))]">
            Installer ALLNTIC
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Installez l'application sur votre appareil pour une expérience optimale
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div className="flex gap-4 items-start p-4 rounded-lg bg-[hsl(var(--gray-100))]">
              <Smartphone className="w-6 h-6 text-[hsl(var(--gold-primary))] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[hsl(var(--navy-dark))]">
                  Accès rapide
                </h3>
                <p className="text-sm text-[hsl(var(--gray-700))]">
                  Lancez l'app depuis votre écran d'accueil
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-lg bg-[hsl(var(--gray-100))]">
              <Globe className="w-6 h-6 text-[hsl(var(--gold-primary))] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[hsl(var(--navy-dark))]">
                  Fonctionne hors ligne
                </h3>
                <p className="text-sm text-[hsl(var(--gray-700))]">
                  Consultez le contenu même sans connexion
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 rounded-lg bg-[hsl(var(--gray-100))]">
              <Zap className="w-6 h-6 text-[hsl(var(--gold-primary))] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[hsl(var(--navy-dark))]">
                  Performance optimale
                </h3>
                <p className="text-sm text-[hsl(var(--gray-700))]">
                  Chargement ultra-rapide et expérience fluide
                </p>
              </div>
            </div>
          </div>

          {isInstallable ? (
            <Button
              onClick={handleInstall}
              className="w-full btn-hero py-6 text-lg font-bold"
            >
              <Download className="w-5 h-5 mr-2" />
              Installer maintenant
            </Button>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-sm text-[hsl(var(--gray-600))]">
                Installation déjà effectuée ou non disponible sur cet appareil
              </p>
              <div className="p-4 bg-[hsl(var(--gray-100))] rounded-lg text-left space-y-2">
                <p className="text-sm font-semibold text-[hsl(var(--navy-dark))]">
                  Pour installer manuellement :
                </p>
                <ul className="text-sm text-[hsl(var(--gray-700))] space-y-1">
                  <li>• <strong>iPhone/iPad :</strong> Touchez Partager → Ajouter à l'écran d'accueil</li>
                  <li>• <strong>Android :</strong> Menu → Installer l'application</li>
                </ul>
              </div>
            </div>
          )}

          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="w-full"
          >
            Retour à l'accueil
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Install;