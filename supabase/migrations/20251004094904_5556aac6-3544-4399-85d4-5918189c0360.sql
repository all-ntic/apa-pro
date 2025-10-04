-- Create projects/realizations table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  project_url TEXT,
  technologies TEXT[],
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0
);

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Policy: Everyone can view projects
CREATE POLICY "Projects are viewable by everyone" 
ON public.projects 
FOR SELECT 
USING (true);

-- Create FAQs table
CREATE TABLE public.faqs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;

-- Policy: Everyone can view FAQs
CREATE POLICY "FAQs are viewable by everyone" 
ON public.faqs 
FOR SELECT 
USING (true);

-- Create contact messages table (for history)
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Policy: Only authenticated users can view messages (for admin dashboard later)
CREATE POLICY "Authenticated users can view messages" 
ON public.contact_messages 
FOR SELECT 
TO authenticated
USING (true);

-- Policy: Anyone can insert messages (public contact form)
CREATE POLICY "Anyone can insert messages" 
ON public.contact_messages 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_faqs_updated_at
BEFORE UPDATE ON public.faqs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data for projects
INSERT INTO public.projects (title, description, image_url, category, is_featured, display_order) VALUES
('Projet E-commerce', 'Développement d''une plateforme e-commerce complète avec gestion des paiements et des stocks', '/placeholder.svg', 'Web', true, 1),
('Application Mobile', 'Application mobile cross-platform pour la gestion de tâches', '/placeholder.svg', 'Mobile', true, 2),
('Site Vitrine', 'Site web moderne et responsive pour une entreprise locale', '/placeholder.svg', 'Web', false, 3);

-- Insert sample data for FAQs
INSERT INTO public.faqs (question, answer, display_order) VALUES
('Quels services proposez-vous ?', 'Nous proposons le développement web, mobile, le design UI/UX et le conseil en stratégie digitale.', 1),
('Quel est le délai moyen pour un projet ?', 'Le délai varie selon la complexité du projet, généralement entre 4 et 12 semaines.', 2),
('Proposez-vous un support après livraison ?', 'Oui, nous offrons un support de 3 mois gratuit après la livraison du projet.', 3);