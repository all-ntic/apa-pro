-- Créer la table contact_messages pour stocker les messages de contact
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Activer RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre à tout le monde d'insérer des messages (formulaire public)
CREATE POLICY "Tout le monde peut soumettre un message de contact"
ON public.contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Politique pour que seuls les administrateurs puissent lire les messages
-- (à ajuster selon vos besoins d'authentification)
CREATE POLICY "Lecture publique des messages pour test"
ON public.contact_messages
FOR SELECT
TO anon, authenticated
USING (true);

-- Créer un trigger pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION public.update_contact_messages_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contact_messages_updated_at
BEFORE UPDATE ON public.contact_messages
FOR EACH ROW
EXECUTE FUNCTION public.update_contact_messages_updated_at();

-- Créer des index pour améliorer les performances
CREATE INDEX idx_contact_messages_status ON public.contact_messages(status);
CREATE INDEX idx_contact_messages_created_at ON public.contact_messages(created_at DESC);