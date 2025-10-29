-- Fix PUBLIC_DATA_EXPOSURE: Remove public access to contact_messages
-- Drop the dangerous public test policy
DROP POLICY IF EXISTS "Lecture publique des messages pour test" ON public.contact_messages;

-- Create admin-only access policy for contact messages
CREATE POLICY "Only admins can view contact messages"
ON public.contact_messages
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Create a rate limiting table for the contact form
CREATE TABLE IF NOT EXISTS public.chatbot_rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  identifier text NOT NULL,
  window_start timestamp with time zone NOT NULL DEFAULT now(),
  request_count integer NOT NULL DEFAULT 1,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on rate limits table
ALTER TABLE public.chatbot_rate_limits ENABLE ROW LEVEL SECURITY;

-- Allow edge functions to manage rate limits
CREATE POLICY "Edge functions can manage rate limits"
ON public.chatbot_rate_limits
FOR ALL
USING (true)
WITH CHECK (true);