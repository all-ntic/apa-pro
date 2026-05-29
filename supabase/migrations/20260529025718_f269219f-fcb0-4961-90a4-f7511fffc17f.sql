-- Remove public INSERT policy on contact_messages; submissions must go through edge function (service role)
DROP POLICY IF EXISTS "Anyone can submit a contact message" ON public.contact_messages;

-- Restrict has_role EXECUTE: revoke from anon/public, keep authenticated (required by RLS policies)
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;