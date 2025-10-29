-- Fix function search_path for update_contact_messages_updated_at
-- This addresses the SUPA_function_search_path_mutable security warning

CREATE OR REPLACE FUNCTION public.update_contact_messages_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;