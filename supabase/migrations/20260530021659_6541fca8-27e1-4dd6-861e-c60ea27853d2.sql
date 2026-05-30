
-- Bucket public pour images projets & réalisations
INSERT INTO storage.buckets (id, name, public)
VALUES ('project-images', 'project-images', true)
ON CONFLICT (id) DO NOTHING;

-- Lecture publique
CREATE POLICY "Public read project-images"
ON storage.objects FOR SELECT
USING (bucket_id = 'project-images');

-- Upload réservé aux admins
CREATE POLICY "Admins upload project-images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'project-images' AND public.has_role(auth.uid(), 'admin'));

-- Mise à jour réservée aux admins
CREATE POLICY "Admins update project-images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'project-images' AND public.has_role(auth.uid(), 'admin'));

-- Suppression réservée aux admins
CREATE POLICY "Admins delete project-images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'project-images' AND public.has_role(auth.uid(), 'admin'));
