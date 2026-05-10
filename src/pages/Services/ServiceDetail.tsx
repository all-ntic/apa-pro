import { useNavigate, useParams } from "react-router-dom";
import { CheckCircle, Phone, MessageCircle, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getServiceBySlug, SERVICES } from "@/data/services";
import NotFound from "@/pages/NotFound";

const WHATSAPP = "https://wa.me/2250778023331";

const ServiceDetail = () => {
  const { slug = "" } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);

  if (!service) return <NotFound />;

  const canonical = `/services/${service.slug}`;

  // JSON-LD : Service + FAQPage + BreadcrumbList
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.shortName,
      description: service.metaDescription,
      provider: {
        "@type": "LocalBusiness",
        name: "ALLNTIC",
        telephone: "+2250778023331",
        email: "all.ntic225@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Abidjan",
          addressCountry: "CI",
        },
      },
      areaServed: { "@type": "Country", name: "Côte d'Ivoire" },
      url: `https://allntic.com${canonical}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://allntic.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://allntic.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.shortName,
          item: `https://allntic.com${canonical}`,
        },
      ],
    },
  ];

  const related = SERVICES.filter(
    (s) => s.slug !== service.slug && s.category === service.category
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-blue-dark via-royal-blue to-royal-blue-light">
      <SEO
        title={service.title}
        description={service.metaDescription}
        canonical={canonical}
        keywords={service.keywords}
        jsonLd={jsonLd}
      />
      <Navigation />

      <main className="container mx-auto px-6 py-24">
        {/* Hero */}
        <header className="max-w-4xl mx-auto text-center mb-16 text-white">
          <p className="text-accent-gold uppercase tracking-wider text-sm mb-4 font-semibold">
            ALLNTIC — Solutions IT &amp; Sécurité Électronique
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {service.h1}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            {service.intro}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-accent-gold hover:bg-accent-gold-dark text-gray-900 font-semibold"
            >
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Devis WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => (window.location.href = "/#contact")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Demander un devis
            </Button>
          </div>
        </header>

        {/* Features */}
        <section className="max-w-5xl mx-auto mb-16" aria-labelledby="features-title">
          <h2 id="features-title" className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Ce que nous faisons
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.features.map((f) => (
              <Card
                key={f}
                className="bg-white/10 backdrop-blur-sm border-white/20 p-5 hover:bg-white/15 transition-all"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 text-accent-gold flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <p className="text-white">{f}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-5xl mx-auto mb-16" aria-labelledby="benefits-title">
          <h2 id="benefits-title" className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Pourquoi choisir ALLNTIC
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-accent-gold mb-2">
                  {b.title}
                </h3>
                <p className="text-white/80">{b.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO content */}
        <section
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 text-white mb-16 prose prose-invert max-w-none"
          aria-label="Description du service"
        >
          {service.seoContent.map((p, i) => (
            <p
              key={i}
              className="mb-4 leading-relaxed last:mb-0"
              dangerouslySetInnerHTML={{
                __html: p.replace(
                  /\*\*(.+?)\*\*/g,
                  '<strong class="text-accent-gold">$1</strong>'
                ),
              }}
            />
          ))}
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto mb-16" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Questions fréquentes
          </h2>
          <Accordion type="single" collapsible className="bg-white/5 rounded-xl border border-white/10">
            {service.faq.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10 px-4">
                <AccordionTrigger className="text-white hover:text-accent-gold text-left">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Related services */}
        {related.length > 0 && (
          <section className="max-w-5xl mx-auto mb-16" aria-labelledby="related-title">
            <h2 id="related-title" className="text-xl md:text-2xl font-bold text-white text-center mb-8">
              Services associés
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map((r) => (
                <button
                  key={r.slug}
                  onClick={() => navigate(`/services/${r.slug}`)}
                  className="text-left bg-white/10 border border-white/20 rounded-xl p-5 hover:bg-white/20 transition group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">{r.shortName}</h3>
                    <ArrowRight className="w-4 h-4 text-accent-gold group-hover:translate-x-1 transition" />
                  </div>
                  <p className="text-white/70 text-sm mt-2 line-clamp-2">
                    {r.intro}
                  </p>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="max-w-3xl mx-auto text-center bg-accent-gold/10 border border-accent-gold/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-3">
            Besoin d'un devis ou d'un conseil ?
          </h2>
          <p className="text-white/80 mb-6">
            Réponse sous 24h. Intervention à Abidjan et partout en Côte d'Ivoire.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp +225 07 78 02 33 31
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-gray-900"
            >
              <a href="tel:+2250778023331">
                <Phone className="mr-2 h-5 w-5" />
                Appeler
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
