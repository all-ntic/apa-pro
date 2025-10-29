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
      icon: <HelpCircle className="w-5 h-5 text-navy-primary" />,
      question: "Quels services propose ALLNTIC ?",
      answer: "ALLNTIC propose une gamme complète de services IT : maintenance informatique (hardware/software), installation et administration de réseaux LAN/WAN, développement de sites web professionnels, et installation de systèmes de sécurité électronique (vidéosurveillance, alarmes, contrôle d'accès). Nous couvrons tous vos besoins technologiques avec une approche intégrée et professionnelle."
    },
    {
      id: "item-2", 
      icon: <MessageCircle className="w-5 h-5 text-navy-primary" />,
      question: "Comment demander une intervention technique ?",
      answer: "Vous pouvez nous contacter facilement via notre formulaire de contact sur le site, par WhatsApp Business au +225 07 78 02 33 31, ou par email à all.ntic225@gmail.com. Nous vous répondons rapidement pour évaluer vos besoins et planifier l'intervention. Une consultation préliminaire permet d'établir un devis précis adapté à votre situation."
    },
    {
      id: "item-3",
      icon: <Shield className="w-5 h-5 text-navy-primary" />,
      question: "Proposez-vous des solutions de vidéosurveillance et de contrôle d'accès ?",
      answer: "Absolument ! Nous sommes spécialisés dans l'installation, la configuration et la maintenance de systèmes de sécurité électronique complets : caméras de surveillance IP haute définition, systèmes d'alarme intelligents, contrôle d'accès biométrique ou par badge, et monitoring à distance. Toutes nos solutions sont intégrées et personnalisées selon vos besoins sécuritaires."
    },
    {
      id: "item-4",
      icon: <Globe className="w-5 h-5 text-navy-primary" />,
      question: "Faites-vous aussi du développement web ?",
      answer: "Oui, nous créons des sites web professionnels : sites vitrines élégants, portfolios personnalisés, plateformes e-commerce, et applications web sur mesure. Nous utilisons des technologies modernes (React, Next.js, responsive design) avec optimisation SEO incluse. Chaque projet web est développé selon vos objectifs business et votre identité visuelle."
    },
    {
      id: "item-5",
      icon: <Clock className="w-5 h-5 text-navy-primary" />,
      question: "Quels sont vos délais d'intervention ?",
      answer: "Nous nous engageons à répondre à toute demande sous 24h maximum. Pour les interventions urgentes (pannes critiques, sécurité compromise), nous proposons un service d'urgence avec intervention sous 4h en fonction de la localisation. Les projets de développement et installations complexes font l'objet d'une planification détaillée avec jalons et livrables définis."
    }
  ];


  return (
    <section id="faq" className="py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Éléments de fond subtils */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-64 h-64 bg-navy-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-muted backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-sm">
            <HelpCircle className="w-5 h-5 text-navy-primary mr-3" />
            <span className="text-navy-primary font-semibold text-sm lg:text-base">Questions Fréquentes</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Des Questions ? <span className="text-navy-primary">Nous Avons les Réponses</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez les réponses aux questions les plus fréquemment posées sur nos services IT et sécurité électronique
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-muted border border-border rounded-xl overflow-hidden shadow-card transition-all duration-300 hover:shadow-elegant animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline hover:bg-white/50 transition-all duration-300">
                  <div className="flex items-start gap-4 text-left w-full">
                    <div className="mt-0.5 p-2.5 bg-navy-primary/10 rounded-lg transition-colors duration-300">
                      {faq.icon}
                    </div>
                    <div className="flex-1 pr-4">
                      <h3 className="text-base lg:text-lg font-semibold text-navy-primary leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-6 pb-6">
                  <div className="ml-14 pt-2">
                    <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-white max-w-2xl mx-auto p-8 lg:p-10 rounded-2xl border border-border shadow-elegant">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Notre équipe est disponible pour répondre à toutes vos questions spécifiques et vous accompagner dans vos projets IT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/2250778023331" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-navy-primary hover:bg-accent text-white px-6 py-3.5 rounded-xl font-semibold hover:shadow-glow transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Direct
              </a>
              <a 
                href="#contact"
                className="bg-white border-2 border-navy-primary text-navy-primary hover:bg-navy-primary hover:text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Prendre RDV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;