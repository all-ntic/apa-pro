import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import type { ProjectRow } from "@/pages/admin/AdminDashboard";

type Props = {
  item: ProjectRow | null;
  onClose: () => void;
  onSaved: () => void;
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const ProjectForm = ({ item, onClose, onSaved }: Props) => {
  const [name, setName] = useState(item?.name ?? "");
  const [slug, setSlug] = useState(item?.slug ?? "");
  const [tagline, setTagline] = useState(item?.tagline ?? "");
  const [description, setDescription] = useState(item?.description ?? "");
  const [objective, setObjective] = useState(item?.objective ?? "");
  const [category, setCategory] = useState(item?.category ?? "");
  const [status, setStatus] = useState(item?.status ?? "actif");
  const [technologies, setTechnologies] = useState(
    (item?.technologies ?? []).join(", "),
  );
  const [imageUrl, setImageUrl] = useState(item?.image_url ?? "");
  const [link, setLink] = useState(item?.link ?? "");
  const [displayOrder, setDisplayOrder] = useState(item?.display_order ?? 0);
  const [isPublished, setIsPublished] = useState(item?.is_published ?? true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const ext = file.name.split(".").pop();
    const fileName = `${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage
      .from("project-images")
      .upload(`projects/${fileName}`, file, { upsert: false });
    if (error) {
      toast.error(error.message);
      setUploading(false);
      return;
    }
    const { data } = supabase.storage
      .from("project-images")
      .getPublicUrl(`projects/${fileName}`);
    setImageUrl(data.publicUrl);
    toast.success("Image uploadée");
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const payload = {
      name,
      slug: slug || slugify(name),
      tagline,
      description,
      objective,
      category,
      status,
      technologies: technologies
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      image_url: imageUrl,
      link,
      display_order: displayOrder,
      is_published: isPublished,
    };

    const { error } = item
      ? await supabase.from("projects").update(payload).eq("id", item.id)
      : await supabase.from("projects").insert(payload);

    setSaving(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success(item ? "Projet mis à jour" : "Projet créé");
    onSaved();
  };

  return (
    <Dialog open onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {item ? "Modifier le projet" : "Nouveau projet"}
          </DialogTitle>
          <DialogDescription>
            Renseignez les informations du projet showcase
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="p-name">Nom *</Label>
              <Input
                id="p-name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (!item) setSlug(slugify(e.target.value));
                }}
              />
            </div>
            <div>
              <Label htmlFor="p-slug">Slug *</Label>
              <Input
                id="p-slug"
                required
                value={slug}
                onChange={(e) => setSlug(slugify(e.target.value))}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="p-tagline">Tagline *</Label>
            <Input
              id="p-tagline"
              required
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="p-description">Description *</Label>
            <Textarea
              id="p-description"
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="p-objective">Objectif *</Label>
            <Textarea
              id="p-objective"
              required
              rows={2}
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="p-category">Catégorie *</Label>
              <Input
                id="p-category"
                required
                placeholder="Ex: SaaS Web"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="p-status">Statut *</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger id="p-status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="actif">Actif</SelectItem>
                  <SelectItem value="en-developpement">
                    En développement
                  </SelectItem>
                  <SelectItem value="a-venir">À venir</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="p-tech">Technologies (séparées par virgule)</Label>
            <Input
              id="p-tech"
              placeholder="React, Supabase, Node.js"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="p-image">URL Image (optionnel)</Label>
            <Input
              id="p-image"
              type="url"
              placeholder="https://... ou uploader ci-dessous"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <div>
            <Label>Image du projet</Label>
            {imageUrl ? (
              <div className="relative mt-2 rounded-lg overflow-hidden border">
                <img
                  src={imageUrl}
                  alt=""
                  className="w-full aspect-video object-cover"
                />
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
            <Label htmlFor="p-link">Lien du projet</Label>
            <Input
              id="p-link"
              type="url"
              placeholder="https://..."
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 items-end">
            <div>
              <Label htmlFor="p-order">Ordre d'affichage</Label>
              <Input
                id="p-order"
                type="number"
                value={displayOrder}
                onChange={(e) =>
                  setDisplayOrder(parseInt(e.target.value) || 0)
                }
              />
            </div>
            <div className="flex items-center gap-3 pb-2">
              <Switch
                id="p-published"
                checked={isPublished}
                onCheckedChange={setIsPublished}
              />
              <Label htmlFor="p-published">Publié sur le site</Label>
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

export default ProjectForm;
