import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Sanitization helper
const sanitizeText = (text: string, maxLength: number = 2000): string => {
  return text.replace(/[<>]/g, '').substring(0, maxLength);
};

// Rate limiting helper
const checkRateLimit = async (supabaseClient: any, identifier: string, maxRequests: number = 5): Promise<boolean> => {
  const windowStart = new Date(Date.now() - 60 * 60 * 1000); // 1 hour window
  
  const { data, error } = await supabaseClient
    .from('chatbot_rate_limits')
    .select('request_count')
    .eq('identifier', identifier)
    .gte('window_start', windowStart.toISOString())
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 = no rows found
    console.error('Rate limit check error:', error);
    return true; // Allow on error to avoid blocking legitimate users
  }

  if (data && data.request_count >= maxRequests) {
    return false; // Rate limit exceeded
  }

  // Update or insert rate limit record
  if (data) {
    await supabaseClient
      .from('chatbot_rate_limits')
      .update({ request_count: data.request_count + 1 })
      .eq('identifier', identifier)
      .gte('window_start', windowStart.toISOString());
  } else {
    await supabaseClient
      .from('chatbot_rate_limits')
      .insert({ identifier, window_start: new Date().toISOString(), request_count: 1 });
  }

  return true;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message }: ContactEmailRequest = await req.json();

    // Basic input validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeText(name, 100);
    const sanitizedEmail = sanitizeText(email, 255);
    const sanitizedPhone = phone ? sanitizeText(phone, 20) : '';
    const sanitizedService = service ? sanitizeText(service, 100) : '';
    const sanitizedMessage = sanitizeText(message, 2000);

    // Rate limiting check
    const supabaseUrl = Deno.env.get('SUPABASE_URL') as string;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') as string;
    const supabaseClient = createClient(supabaseUrl, supabaseKey);

    const clientIp = req.headers.get('x-forwarded-for') || 'unknown';
    const rateLimitIdentifier = `${clientIp}_${sanitizedEmail}`;
    
    const isAllowed = await checkRateLimit(supabaseClient, rateLimitIdentifier, 5);
    
    if (!isAllowed) {
      console.warn(`Rate limit exceeded for: ${rateLimitIdentifier}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Sending contact email for:", { name: sanitizedName, email: sanitizedEmail, service: sanitizedService });

    // Save to database with sanitized data
    const { error: dbError } = await supabaseClient
      .from('contact_messages')
      .insert({
        name: sanitizedName,
        email: sanitizedEmail,
        phone: sanitizedPhone || null,
        message: `${sanitizedService ? `Service: ${sanitizedService}\n\n` : ''}${sanitizedMessage}`
      });

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error(`Failed to save message: ${dbError.message}`);
    }

    console.log("Message saved to database successfully");

    // Send email to the business with sanitized data
    const emailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["all.ntic225@gmail.com", "contact@allntic.info"],
      subject: `Nouvelle demande de contact - ${sanitizedService}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Téléphone:</strong> ${sanitizedPhone}</p>
        <p><strong>Service:</strong> ${sanitizedService}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Envoyé depuis le formulaire de contact ALLNTIC</em></p>
      `,
    });

    // Send confirmation email to the user with sanitized data
    await resend.emails.send({
      from: "ALLNTIC <onboarding@resend.dev>",
      to: [sanitizedEmail],
      subject: "Confirmation de réception de votre demande",
      html: `
        <h2>Merci pour votre demande, ${sanitizedName}!</h2>
        <p>Nous avons bien reçu votre demande concernant <strong>${sanitizedService}</strong>.</p>
        <p>Notre équipe vous contactera dans les plus brefs délais.</p>
        <p>Votre message:</p>
        <blockquote style="border-left: 3px solid #ccc; padding-left: 10px; margin: 10px 0;">${sanitizedMessage.replace(/\n/g, '<br>')}</blockquote>
        <p>Cordialement,<br>L'équipe ALLNTIC</p>
      `,
    });

    console.log("Emails sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, message: "Emails envoyés avec succès" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "Erreur lors de l'envoi de l'email", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);