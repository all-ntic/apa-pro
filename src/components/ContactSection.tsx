import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, SendHorizontal, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z.string()
    .trim()
    .email("Adresse email invalide")
    .max(255, "L'email ne peut pas dépasser 255 caractères"),
  phone: z.string()
    .trim()
    .max(20, "Le numéro de téléphone ne peut pas dépasser 20 caractères")
    .optional()
    .or(z.literal("")),
  service: z.string()
    .max(100, "Le nom du service ne peut pas dépasser 100 caractères")
    .optional()
    .or(z.literal("")),
  message: z.string()
    .trim()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(2000, "Le message ne peut pas dépasser 2000 caractères")
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Mutation pour envoyer le message via edge function
  const submitMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      // L'edge function gère à la fois l'insertion DB et l'envoi d'email
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });

      if (error) throw error;

      return data;
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé !",
        description: "Votre demande a été envoyée avec succès. Nous vous contacterons bientôt.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    },
    onError: (error) => {
      console.error('Error sending email:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data with zod
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const firstError = result.error.errors[0];
      toast({
        title: "Erreur de validation",
        description: firstError.message,
        variant: "destructive"
      });
      return;
    }
    
    submitMutation.mutate(formData);
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(`Bonjour APA,

Je souhaite obtenir des informations sur vos services :
${formData.service ? `Service : ${formData.service}` : ''}
${formData.message ? `Message : ${formData.message}` : ''}

Merci !`);
    
    window.open(`https://wa.me/+2250778023331?text=${message}`, "_blank");
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      value: "+225 07 78 02 33 31",
      action: "tel:+2250778023331"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Principal",
      value: "all.ntic225@gmail.com",
      action: "mailto:all.ntic225@gmail.com"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Contact",
      value: "contact@apa.info",
      action: "mailto:contact@apa.info"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localisation",
      value: "Abidjan, Côte d'Ivoire",
      action: null
    }
  ];

  const services = [
    "Maintenance informatique",
    "Installation réseaux",
    "Développement web",
    "Sécurité électronique", 
    "Vidéosurveillance",
    "Contrôle d'accès",
    "Audit sécurité",
    "Autre"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-cyan-electric/10 text-cyan-electric px-4 py-2 mb-6">
            Contactez-nous
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-dark mb-6">
            Démarrons Votre <span className="gradient-text">Projet Ensemble</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à transformer vos systèmes IT ? Contactez APA pour une consultation personnalisée et un devis sur mesure.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Informations de contact */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass-card border-0 shadow-elegant hover-lift">
              <CardHeader>
                <CardTitle className="text-navy-dark flex items-center">
                  <MessageCircle className="w-6 h-6 text-cyan-electric mr-3" />
                  Contact Direct
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="p-3 bg-cyan-electric/10 text-cyan-electric rounded-lg group-hover:bg-cyan-electric group-hover:text-white transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-dark">{info.title}</h4>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-gray-600 hover:text-cyan-electric transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Avantages */}
            <Card className="glass-card border-0 shadow-card-soft">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-orange-accent" />
                    <span className="text-sm text-gray-600">Réponse sous 24h garantie</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-cyan-electric" />
                    <span className="text-sm text-gray-600">Intervention sécurisée et certifiée</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-navy-primary" />
                    <span className="text-sm text-gray-600">Support technique inclus</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-navy-dark text-2xl">
                  Formulaire de Contact Rapide
                </CardTitle>
                <p className="text-gray-600">
                  Décrivez votre projet et recevez un devis personnalisé sous 24h
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-navy-dark mb-2">
                        Nom complet *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Votre nom et prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-dark mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-navy-dark mb-2">
                        Téléphone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="+225 XX XX XX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-dark mb-2">
                        Service souhaité
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-electric focus:border-transparent bg-white"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-dark mb-2">
                      Description du projet *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full resize-none"
                      placeholder="Décrivez votre besoin, votre environnement technique actuel, et vos objectifs..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      disabled={submitMutation.isPending}
                      className="btn-hero flex-1 group"
                    >
                      {submitMutation.isPending ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          <SendHorizontal className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                          Envoyer la Demande
                        </>
                      )}
                    </Button>
                    
                    <Button
                      type="button"
                      onClick={handleWhatsAppContact}
                      className="bg-green-600 hover:bg-green-700 text-white flex-1 group"
                    >
                      <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                      WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;