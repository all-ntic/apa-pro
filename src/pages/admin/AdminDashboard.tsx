import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Pencil, Trash2, LogOut, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import RealizationForm from "@/components/admin/RealizationForm";

export type Realization = {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string;
  image_url: string | null;
  tags: string[];
  link: string | null;
  github: string | null;
  youtube: string | null;
  display_order: number;
  is_published: boolean;
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [items, setItems] = useState<Realization[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Realization | null>(null);
  const [creating, setCreating] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    const check = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/admin/login", { replace: true });
        return;
      }
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin");
      if (!roles || roles.length === 0) {
        toast.error("Accès refusé : vous n'êtes pas administrateur");
        await supabase.auth.signOut();
        navigate("/admin/login", { replace: true });
        return;
      }
      setIsAdmin(true);
      loadItems();
    };
    check();

    const { data: listener } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate("/admin/login", { replace: true });
    });
    return () => listener.subscription.unsubscribe();
  }, [navigate]);

  const loadItems = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("realizations")
      .select("*")
      .order("display_order", { ascending: true })
      .order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    else setItems((data || []) as Realization[]);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    const { error } = await supabase.from("realizations").delete().eq("id", deleteId);
    if (error) toast.error(error.message);
    else {
      toast.success("Réalisation supprimée");
      loadItems();
    }
    setDeleteId(null);
  };

  const togglePublish = async (item: Realization) => {
    const { error } = await supabase
      .from("realizations")
      .update({ is_published: !item.is_published })
      .eq("id", item.id);
    if (error) toast.error(error.message);
    else {
      toast.success(item.is_published ? "Masquée" : "Publiée");
      loadItems();
    }
  };

  if (isAdmin === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-royal-blue border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Espace Admin</h1>
            <p className="text-sm text-muted-foreground">Gestion des réalisations</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => navigate("/")}>
              Voir le site
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" /> Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">
            Réalisations ({items.length})
          </h2>
          <Button
            onClick={() => setCreating(true)}
            className="bg-royal-blue hover:bg-royal-blue-light text-white"
          >
            <Plus className="w-4 h-4 mr-2" /> Nouvelle réalisation
          </Button>
        </div>

        {loading ? (
          <p className="text-muted-foreground">Chargement...</p>
        ) : items.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              Aucune réalisation. Cliquez sur "Nouvelle réalisation" pour commencer.
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                {item.image_url && (
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    {!item.is_published && (
                      <Badge variant="secondary" className="text-xs">
                        Brouillon
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-royal-blue font-medium">{item.category}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {item.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setEditing(item)}
                    >
                      <Pencil className="w-3 h-3 mr-1" /> Modifier
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => togglePublish(item)}
                    >
                      {item.is_published ? (
                        <><EyeOff className="w-3 h-3 mr-1" /> Masquer</>
                      ) : (
                        <><Eye className="w-3 h-3 mr-1" /> Publier</>
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setDeleteId(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      {(creating || editing) && (
        <RealizationForm
          item={editing}
          onClose={() => {
            setCreating(false);
            setEditing(null);
          }}
          onSaved={() => {
            setCreating(false);
            setEditing(null);
            loadItems();
          }}
        />
      )}

      <AlertDialog open={!!deleteId} onOpenChange={(o) => !o && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Supprimer cette réalisation ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive hover:bg-destructive/90"
            >
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminDashboard;
