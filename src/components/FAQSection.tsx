import { HelpCircle, ChevronDown, MessageCircle, Phone, Shield, Globe, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqData = [
    {
      id: "item-1",
      icon: <HelpCircle className="w-5 h-5 text-cyan-electric" />,
      question: "Quels services propose ALLNTIC ?",
      answer: "ALLNTIC propose une gamme complète de services IT : maintenance informatique (hardware/software), installation et administration de réseaux LAN/WAN, développement de sites web professionnels, et installation de systèmes de sécurité électronique (vidéosurveillance, alarmes, contrôle d'accès). Nous couvrons tous vos besoins technologiques avec une approche intégrée et professionnelle."
    },
    {
      id: "item-2", 
      icon: <MessageCircle className="w-5 h-5 text-cyan-electric" />,
      question: "Comment demander une intervention technique ?",
      answer: "Vous pouvez nous contacter facilement via notre formulaire de contact sur le site, par WhatsApp Business au numéro affiché, ou par email. Nous vous répondons rapidement pour évaluer vos besoins et planifier l'intervention. Une consultation préliminaire permet d'établir un devis précis adapté à votre situation."
    },
    {
      id: "item-3",
      icon: <Shield className="w-5 h-5 text-cyan-electric" />,
      question: "Proposez-vous des solutions de vidéosurveillance et de contrôle d'accès ?",
      answer: "Absolument ! Nous sommes spécialisés dans l'installation, la configuration et la maintenance de systèmes de sécurité électronique complets : caméras de surveillance IP haute définition, systèmes d'alarme intelligents, contrôle d'accès biométrique ou par badge, et monitoring à distance. Toutes nos solutions sont intégrées et personnalisées selon vos besoins sécuritaires."
    },
    {
      id: "item-4",
      icon: <Globe className="w-5 h-5 text-cyan-electric" />,
      question: "Faites-vous aussi du développement web ?",
      answer: "Oui, nous créons des sites web professionnels : sites vitrines élégants, portfolios personnalisés, plateformes e-commerce, et applications web sur mesure. Nous utilisons des technologies modernes (React, responsive design) avec optimisation SEO incluse. Chaque projet web est développé selon vos objectifs business et votre identité visuelle."
    },
    {
      id: "item-5",
      icon: <Clock className="w-5 h-5 text-cyan-electric" />,
      question: "Quels sont vos délais d'intervention ?",
      answer: "Nous nous engageons à répondre à toute demande sous 24h maximum. Pour les interventions urgentes (pannes critiques, sécurité compromise), nous proposons un service d'urgence avec intervention sous 4h en fonction de la localisation. Les projets de développement et installations complexes font l'objet d'une planification détaillée avec jalons et livrables définis."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-navy-dark relative overflow-hidden">
      {/* Éléments de fond animés */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-electric/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-glow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-cyan-electric/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <HelpCircle className="w-6 h-6 text-cyan-electric mr-3" />
            <span className="text-cyan-electric font-medium">Questions Fréquentes</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Des Questions ? <span className="gradient-text">Nous Avons les Réponses</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les réponses aux questions les plus fréquemment posées sur nos services IT et sécurité électronique
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="glass-card border border-white/10 rounded-xl overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="px-6 py-6 text-left hover:no-underline group-hover:bg-white/5 transition-all duration-300">
                  <div className="flex items-start gap-4 text-left">
                    <div className="mt-1 p-2 bg-cyan-electric/10 rounded-lg group-hover:bg-cyan-electric/20 transition-colors duration-300">
                      {faq.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-electric transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-6 pb-6">
                  <div className="ml-16 pt-2">
                    <p className="text-white/90 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="glass-card max-w-2xl mx-auto p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-gray-300 mb-6">
              Notre équipe est disponible pour répondre à toutes vos questions spécifiques et vous accompagner dans vos projets IT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-accent text-white px-6 py-3 rounded-lg font-medium hover:shadow-glow transition-all duration-300 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Direct
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Prendre RDV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;