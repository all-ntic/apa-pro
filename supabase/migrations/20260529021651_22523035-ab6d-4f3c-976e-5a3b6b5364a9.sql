-- Create projects table for admin-editable showcase projects
CREATE TABLE public.projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  name text NOT NULL,
  tagline text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  objective text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'actif',
  technologies text[] NOT NULL DEFAULT '{}',
  image_url text NOT NULL DEFAULT '',
  link text NOT NULL DEFAULT '',
  display_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.projects TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.projects TO authenticated;
GRANT ALL ON public.projects TO service_role;

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public reads published projects"
  ON public.projects FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins read all projects"
  ON public.projects FOR SELECT
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins insert projects"
  ON public.projects FOR INSERT
  TO authenticated
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins update projects"
  ON public.projects FOR UPDATE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins delete projects"
  ON public.projects FOR DELETE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER trg_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Seed with existing static projects
INSERT INTO public.projects (slug, name, tagline, description, objective, category, status, technologies, image_url, link, display_order) VALUES
('allntic', 'ALLNTIC', 'Solutions IT & Sécurité Électronique',
 'Marque technologique fondée par Agnidom Pygnali Aboubakar, regroupant l''ensemble des services IT, réseaux, vidéosurveillance, développement web et cybersécurité en Côte d''Ivoire.',
 'Devenir une référence en ingénierie numérique et sécurité électronique en Afrique de l''Ouest.',
 'Marque corporate', 'actif', ARRAY['IT','Réseaux','Vidéosurveillance','Web','Cybersécurité'],
 '', 'https://allntic.com', 1),
('lescvpro', 'LesCVPro', 'Plateforme de création de CV professionnels',
 'Plateforme web permettant aux professionnels et étudiants de créer rapidement des CV modernes, optimisés et téléchargeables, adaptés au marché africain.',
 'Démocratiser l''accès aux CV de qualité professionnelle en Côte d''Ivoire et en Afrique.',
 'SaaS Web', 'actif', ARRAY['React','Supabase','PDF','SaaS'],
 '', 'https://lescvpro.com', 2),
('allntic-portfolio', 'Portfolio ALLNTIC', 'Portfolio professionnel du fondateur',
 'Portfolio personnel d''Agnidom Pygnali Aboubakar, présentant son parcours technique, ses réalisations et ses expertises en IT et sécurité électronique.',
 'Mettre en avant le parcours et l''expertise du fondateur d''ALLNTIC.',
 'Portfolio', 'actif', ARRAY['React','Tailwind','SEO','PWA'],
 '', 'https://allntic.com', 3),
('saas-interventions', 'Plateforme de gestion d''interventions', 'SaaS technique pour techniciens et PME',
 'Application SaaS permettant de planifier, suivre et automatiser les interventions techniques avec rapports dynamiques et tableau de bord temps réel.',
 'Digitaliser et professionnaliser la gestion des interventions techniques en Afrique.',
 'SaaS B2B', 'en-developpement', ARRAY['React','Supabase','Node.js','Chart.js'],
 '', '', 4);