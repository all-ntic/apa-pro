-- contact_messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Anyone may insert a contact message (form is public; edge function also uses service role)
CREATE POLICY "Anyone can submit a contact message"
  ON public.contact_messages
  FOR INSERT
  WITH CHECK (true);

-- Only admins can read messages
CREATE POLICY "Admins can view contact messages"
  ON public.contact_messages
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can update (e.g., mark as read)
CREATE POLICY "Admins can update contact messages"
  ON public.contact_messages
  FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can delete
CREATE POLICY "Admins can delete contact messages"
  ON public.contact_messages
  FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER trg_contact_messages_updated_at
  BEFORE UPDATE ON public.contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at
  ON public.contact_messages (created_at DESC);

-- chatbot_rate_limits table (used by edge function; service role only)
CREATE TABLE IF NOT EXISTS public.chatbot_rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  identifier TEXT NOT NULL,
  window_start TIMESTAMPTZ NOT NULL DEFAULT now(),
  request_count INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.chatbot_rate_limits ENABLE ROW LEVEL SECURITY;

-- No policies => no client access. Edge function uses SERVICE_ROLE which bypasses RLS.

CREATE INDEX IF NOT EXISTS idx_chatbot_rate_limits_identifier_window
  ON public.chatbot_rate_limits (identifier, window_start DESC);