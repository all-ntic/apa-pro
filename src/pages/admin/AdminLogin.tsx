import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { toast } from "sonner";
import SEO from "@/components/seo/SEO";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Domaine interne par défaut si l'utilisateur saisit juste un nom d'utilisateur
  const DEFAULT_DOMAIN = "allntic.com";

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate("/admin", { replace: true });
    });
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const raw = identifier.trim().toLowerCase();
    const email = raw.includes("@")
      ? raw
      : `${raw.replace(/[^a-z0-9._-]/g, "")}@${DEFAULT_DOMAIN}`;
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Connexion réussie");
    navigate("/admin", { replace: true });
  };
    <>
      <SEO
        title="Connexion administrateur — ALLNTIC"
        description="Espace de connexion réservé à l'administration ALLNTIC."
        canonical="/admin/login"
        noindex
      />
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md shadow-card-soft">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-royal-blue/10 rounded-2xl w-fit">
            <Lock className="w-6 h-6 text-royal-blue" />
          </div>
          <CardTitle className="text-2xl">Espace Administrateur</CardTitle>
          <CardDescription>Connectez-vous pour gérer vos réalisations</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="identifier">Identifiant ou email</Label>
              <Input
                id="identifier"
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                autoComplete="username"
                placeholder="infos@allntic.com"
              />

            </div>
            <div>
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-royal-blue hover:bg-royal-blue-light text-white"
            >
              {loading ? "Connexion..." : "Se connecter"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
    </>
  );
};

export default AdminLogin;
