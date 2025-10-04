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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email for:", { name, email, service });

    // Save to database
    const supabaseUrl = Deno.env.get('SUPABASE_URL') as string;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') as string;
    
    const supabaseClient = createClient(supabaseUrl, supabaseKey);
    
    const { error: dbError } = await supabaseClient
      .from('contact_messages')
      .insert({
        name,
        email,
        phone: phone || null,
        message: `${service ? `Service: ${service}\n\n` : ''}${message}`
      });

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error(`Failed to save message: ${dbError.message}`);
    }

    console.log("Message saved to database successfully");

    // Send email to the business
    const emailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["all.ntic225@gmail.com", "contact@allntic.info"],
      subject: `Nouvelle demande de contact - ${service}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Envoyé depuis le formulaire de contact ALLNTIC</em></p>
      `,
    });

    // Send confirmation email to the user
    await resend.emails.send({
      from: "ALLNTIC <onboarding@resend.dev>",
      to: [email],
      subject: "Confirmation de réception de votre demande",
      html: `
        <h2>Merci pour votre demande, ${name}!</h2>
        <p>Nous avons bien reçu votre demande concernant <strong>${service}</strong>.</p>
        <p>Notre équipe vous contactera dans les plus brefs délais.</p>
        <p>Votre message:</p>
        <blockquote style="border-left: 3px solid #ccc; padding-left: 10px; margin: 10px 0;">${message.replace(/\n/g, '<br>')}</blockquote>
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