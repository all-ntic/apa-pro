import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Kouadio Jean-Marc",
    role: "Directeur Général",
    company: "PME Tech Solutions",
    content:
      "ALLNTIC a transformé notre infrastructure réseau. Installation professionnelle, sécurisée et performante. Excellent suivi technique et réactivité remarquable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marie-Laure Diabaté",
    role: "Responsable Marketing",
    company: "Agence Digitale CI",
    content:
      "Site web moderne, responsive et parfaitement optimisé SEO. ALLNTIC a su comprendre nos besoins et livrer un résultat au-delà de nos attentes.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amara Touré",
    role: "Gérant",
    company: "Boutique Élégance",
    content:
      "Système de vidéosurveillance installé avec soin. Caméras de qualité, accès mobile fluide et formation complète. Je me sens en sécurité grâce à ALLNTIC.",
    rating: 5,
  },
  {
    id: 4,
    name: "Fabrice N'Guessan",
    role: "Chef de Projet IT",
    company: "SARL InnovTech",
    content:
      "Maintenance informatique réactive et efficace. Diagnostic rapide, résolution de problèmes complexes et conseils avisés. Un technicien de confiance.",
    rating: 5,
  },
  {
    id: 5,
    name: "Aïcha Bamba",
    role: "Fondatrice",
    company: "Startup HealthCI",
    content:
      "ALLNTIC a déployé notre IPBX et notre WiFi pro en moins d'une semaine. Tout fonctionne parfaitement, équipe à l'écoute et professionnelle.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % total), 6000);
    return () => clearInterval(t);
  }, [total]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section
      id="temoignages"
      className="py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white"
      aria-labelledby="testimonials-title"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/15 text-accent-gold text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-accent-gold" />
            Témoignages
          </div>
          <h2
            id="testimonials-title"
            className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Ils nous font <span className="gradient-text">confiance</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Retours de clients équipés et accompagnés par ALLNTIC en Côte d'Ivoire.
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-2">
                  <div className="relative bg-white rounded-3xl border border-gray-100 p-8 lg:p-12 shadow-elegant">
                    <Quote className="absolute top-6 right-6 w-16 h-16 text-royal-blue/10" />

                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent-gold text-accent-gold" />
                      ))}
                    </div>

                    <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 italic font-serif">
                      « {t.content} »
                    </blockquote>

                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-royal-blue via-royal-blue-light to-cyan-electric flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-royal-blue/30">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-foreground">{t.name}</div>
                        <div className="text-sm text-muted-foreground">{t.role}</div>
                        <div className="text-sm text-royal-blue font-medium">{t.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            aria-label="Témoignage précédent"
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:bg-royal-blue hover:text-white hover:border-royal-blue transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Témoignage suivant"
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:bg-royal-blue hover:text-white hover:border-royal-blue transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Témoignage ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-royal-blue" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-royal-blue font-semibold hover:text-cyan-electric transition-colors"
          >
            Rejoignez nos clients satisfaits — Demandez un devis →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
