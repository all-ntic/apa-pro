import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Upload, X } from "lucide-react";
import type { Realization } from "@/pages/admin/AdminDashboard";

type Props = {
  item: Realization | null;
  onClose: () => void;
  onSaved: () => void;
};

const RealizationForm = ({ item, onClose, onSaved }: Props) => {
  const [title, setTitle] = useState(item?.title ?? "");
  const [category, setCategory] = useState(item?.category ?? "");
  const [description, setDescription] = useState(item?.description ?? "");
  const [details, setDetails] = useState(item?.details ?? "");
  const [tags, setTags] = useState((item?.tags ?? []).join(", "));
  const [link, setLink] = useState(item?.link ?? "");
  const [github, setGithub] = useState(item?.github ?? "");
  const [youtube, setYoutube] = useState(item?.youtube ?? "");
  const [displayOrder, setDisplayOrder] = useState(item?.display_order ?? 0);
  const [isPublished, setIsPublished] = useState(item?.is_published ?? true);
  const [imageUrl, setImageUrl] = useState(item?.image_url ?? "");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const ext = file.name.split(".").pop();
    const fileName = `${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage
      .from("project-images")
      .upload(`realizations/${fileName}`, file, { upsert: false });
    if (error) {
      toast.error(error.message);
      setUploading(false);
      return;
    }
    const { data } = supabase.storage
      .from("project-images")
      .getPublicUrl(`realizations/${fileName}`);
    setImageUrl(data.publicUrl);
    toast.success("Image uploadée");
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const payload = {
      title,
      category,
      description,
      details,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      link: link || null,
      github: github || null,
      youtube: youtube || null,
      display_order: displayOrder,
      is_published: isPublished,
      image_url: imageUrl || null,
    };

    const { error } = item
      ? await supabase.from("realizations").update(payload).eq("id", item.id)
      : await supabase.from("realizations").insert(payload);

    setSaving(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success(item ? "Réalisation mise à jour" : "Réalisation créée");
    onSaved();
  };

  return (
    <Dialog open onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {item ? "Modifier la réalisation" : "Nouvelle réalisation"}
          </DialogTitle>
          <DialogDescription>
            Remplissez les informations du projet
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Titre *</Label>
              <Input id="title" required value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="category">Catégorie *</Label>
              <Input
                id="category"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description courte *</Label>
            <Input
              id="description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="details">Détails *</Label>
            <Textarea
              id="details"
              required
              rows={4}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>

          <div>
            <Label>Image</Label>
            {imageUrl ? (
              <div className="relative mt-2 rounded-lg overflow-hidden border">
                <img src={imageUrl} alt="" className="w-full aspect-video object-cover" />
                <Button
                  type="button"
                  size="icon"
                  variant="destructive"
                  className="absolute top-2 right-2 h-8 w-8"
                  onClick={() => setImageUrl("")}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <label className="mt-2 flex flex-col items-center justify-center aspect-video border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition">
                <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                <span className="text-sm text-muted-foreground">
                  {uploading ? "Upload..." : "Cliquer pour uploader"}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleUpload}
                  disabled={uploading}
                />
              </label>
            )}
          </div>

          <div>
            <Label htmlFor="tags">Tags (séparés par des virgules)</Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="link">Lien démo</Label>
              <Input id="link" type="url" value={link} onChange={(e) => setLink(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="github">GitHub</Label>
              <Input id="github" type="url" value={github} onChange={(e) => setGithub(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="youtube">YouTube</Label>
              <Input id="youtube" type="url" value={youtube} onChange={(e) => setYoutube(e.target.value)} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 items-end">
            <div>
              <Label htmlFor="order">Ordre d'affichage</Label>
              <Input
                id="order"
                type="number"
                value={displayOrder}
                onChange={(e) => setDisplayOrder(parseInt(e.target.value) || 0)}
              />
            </div>
            <div className="flex items-center gap-3 pb-2">
              <Switch id="published" checked={isPublished} onCheckedChange={setIsPublished} />
              <Label htmlFor="published">Publié sur le site</Label>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Annuler
            </Button>
            <Button
              type="submit"
              disabled={saving || uploading}
              className="bg-royal-blue hover:bg-royal-blue-light text-white"
            >
              {saving ? "Enregistrement..." : "Enregistrer"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RealizationForm;
