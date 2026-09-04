import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { services } from "@/data/services";

type Props = {
  defaultService?: string;
  compact?: boolean;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const QuoteForm = ({ defaultService = "", compact = false }: Props) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    message: "",
    website: "", // honeypot
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) return; // bot
    if (form.name.trim().length < 2) return toast.error("Merci d'indiquer votre nom.");
    if (!emailRegex.test(form.email)) return toast.error("Adresse e-mail invalide.");
    if (form.message.trim().length < 10)
      return toast.error("Décrivez votre besoin en quelques mots (10 caractères minimum).");

    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          service: form.service || "Demande de devis",
          message: form.message.trim(),
        },
      });
      if (error) throw error;
      toast.success("Demande envoyée ! Nous revenons vers vous sous 24h ouvrées.");
      setForm({ name: "", email: "", phone: "", service: defaultService, message: "", website: "" });
    } catch {
      toast.error("Envoi impossible pour le moment. Écrivez-nous sur WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className={compact ? "space-y-4" : "grid sm:grid-cols-2 gap-4"}>
        <div className="space-y-2">
          <Label htmlFor="qf-name">Nom complet *</Label>
          <Input id="qf-name" value={form.name} onChange={(e) => update("name", e.target.value)} required maxLength={200} autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="qf-email">E-mail *</Label>
          <Input id="qf-email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} required maxLength={255} autoComplete="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="qf-phone">Téléphone / WhatsApp</Label>
          <Input id="qf-phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} maxLength={50} autoComplete="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="qf-service">Prestation souhaitée</Label>
          <select
            id="qf-service"
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Sélectionner…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Autre besoin">Autre besoin</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="qf-message">Décrivez votre besoin *</Label>
        <Textarea
          id="qf-message"
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          required
          maxLength={2000}
        />
      </div>

      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.website}
        onChange={(e) => update("website", e.target.value)}
        className="hidden"
      />

      <Button type="submit" size="lg" disabled={loading} className="w-full">
        {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
        {loading ? "Envoi en cours…" : "Envoyer ma demande"}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Réponse sous 24h ouvrées. Vos informations servent uniquement à traiter votre demande.
      </p>
    </form>
  );
};

export default QuoteForm;
