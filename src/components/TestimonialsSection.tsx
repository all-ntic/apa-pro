import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Kouadio Jean-Marc",
      role: "Directeur Général",
      company: "PME Tech Solutions",
      content: "ALLNTIC a transformé notre infrastructure réseau. Installation professionnelle, sécurisée et performante. Excellent suivi technique et réactivité remarquable. Je recommande vivement ses services.",
      rating: 5
    },
    {
      id: 2,
      name: "Marie-Laure Diabaté",
      role: "Responsable Marketing",
      company: "Agence Digitale CI",
      content: "Site web moderne, responsive et parfaitement optimisé SEO. APA a su comprendre nos besoins et livrer un résultat au-delà de nos attentes. Un vrai professionnel du web.",
      rating: 5
    },
    {
      id: 3,
      name: "Amara Touré",
      role: "Gérant",
      company: "Boutique Élégance",
      content: "Système de vidéosurveillance installé avec soin. Caméras de qualité, accès mobile fluide et formation complète. Je me sens en sécurité grâce à ALLNTIC.",
      rating: 5
    },
    {
      id: 4,
      name: "Fabrice N'Guessan",
      role: "Chef de Projet IT",
      company: "SARL InnovTech",
      content: "Maintenance informatique réactive et efficace. Diagnostic rapide, résolution de problèmes complexes et conseils avisés. Un technicien de confiance pour notre parc informatique.",
      rating: 5
    }
  ];

  return (
    <section id="temoignages" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfaction de mes clients est ma priorité. Découvrez leurs retours d'expérience sur mes services IT, réseaux, web et sécurité électronique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="bg-white border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                <Quote className="w-10 h-10 text-accent-gold opacity-20" />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-gold text-accent-gold" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal-blue to-cyan-electric flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-royal-blue font-medium">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            Vous aussi, rejoignez mes clients satisfaits ! 
            <a href="#contact" className="text-royal-blue font-semibold hover:text-cyan-electric transition-colors ml-2">
              Demandez un devis gratuit →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
