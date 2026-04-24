-- 1. Fix al_profiles: restrict SELECT to owner only
DROP POLICY IF EXISTS "Authenticated users can view all profiles" ON public.al_profiles;

CREATE POLICY "Users can view their own profile"
ON public.al_profiles
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- 2. Fix churches: restrict INSERT to admins only
DROP POLICY IF EXISTS "Allow authenticated insert" ON public.churches;

CREATE POLICY "Only admins can create churches"
ON public.churches
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));
