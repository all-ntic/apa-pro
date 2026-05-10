
-- Enum app_role
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin','user');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- user_roles
CREATE TABLE IF NOT EXISTS public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id=_user_id AND role=_role)
$$;

DROP POLICY IF EXISTS "Users see own roles" ON public.user_roles;
CREATE POLICY "Users see own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- realizations
CREATE TABLE IF NOT EXISTS public.realizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  details TEXT NOT NULL DEFAULT '',
  tags TEXT[] NOT NULL DEFAULT '{}',
  link TEXT NOT NULL DEFAULT '',
  github TEXT NOT NULL DEFAULT '',
  youtube TEXT NOT NULL DEFAULT '',
  image_url TEXT NOT NULL DEFAULT '',
  display_order INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.realizations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public reads published realizations" ON public.realizations;
CREATE POLICY "Public reads published realizations" ON public.realizations FOR SELECT USING (is_published = true);

DROP POLICY IF EXISTS "Admins read all realizations" ON public.realizations;
CREATE POLICY "Admins read all realizations" ON public.realizations FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));

DROP POLICY IF EXISTS "Admins insert realizations" ON public.realizations;
CREATE POLICY "Admins insert realizations" ON public.realizations FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'));

DROP POLICY IF EXISTS "Admins update realizations" ON public.realizations;
CREATE POLICY "Admins update realizations" ON public.realizations FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin'));

DROP POLICY IF EXISTS "Admins delete realizations" ON public.realizations;
CREATE POLICY "Admins delete realizations" ON public.realizations FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'));

CREATE OR REPLACE FUNCTION public.update_updated_at_column() RETURNS TRIGGER
LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

DROP TRIGGER IF EXISTS update_realizations_updated_at ON public.realizations;
CREATE TRIGGER update_realizations_updated_at BEFORE UPDATE ON public.realizations
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
