-- Table des réalisations (publique en lecture, admin seul en écriture)
CREATE TABLE public.realizations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  details TEXT NOT NULL,
  image_url TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  link TEXT,
  github TEXT,
  youtube TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.realizations ENABLE ROW LEVEL SECURITY;

-- Lecture publique des réalisations publiées
CREATE POLICY "Anyone can view published realizations"
ON public.realizations FOR SELECT
USING (is_published = true OR has_role(auth.uid(), 'admin'::app_role));

-- Seuls les admins peuvent créer/modifier/supprimer
CREATE POLICY "Admins can insert realizations"
ON public.realizations FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update realizations"
ON public.realizations FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete realizations"
ON public.realizations FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Trigger updated_at
CREATE TRIGGER update_realizations_updated_at
BEFORE UPDATE ON public.realizations
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Bucket public pour les images de réalisations
INSERT INTO storage.buckets (id, name, public)
VALUES ('realizations', 'realizations', true)
ON CONFLICT (id) DO NOTHING;

-- Politiques Storage : lecture publique, écriture admin
CREATE POLICY "Public can view realization images"
ON storage.objects FOR SELECT
USING (bucket_id = 'realizations');

CREATE POLICY "Admins can upload realization images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'realizations' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update realization images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'realizations' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete realization images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'realizations' AND has_role(auth.uid(), 'admin'::app_role));