import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/seo/SEO";
import { Card } from "@/components/ui/card";
import { ARTICLES, ALL_CATEGORIES } from "@/data/blog";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";

const BlogIndex = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return ARTICLES.filter((a) => {
      const matchSearch =
        !search ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        a.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchCat = !category || a.category === category;
      return matchSearch && matchCat;
    });
  }, [search, category]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog ALLNTIC",
    url: "https://allntic.com/blog",
    blogPost: ARTICLES.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      datePublished: a.date,
      url: `https://allntic.com/blog/${a.slug}`,
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-blue-dark via-royal-blue to-royal-blue-light">
      <SEO
        title="Blog Technique IT, Sécurité, Réseaux | ALLNTIC Abidjan"
        description="Tutoriels, guides pratiques et conseils experts en informatique, vidéosurveillance, réseaux, IPBX et cybersécurité. Par ALLNTIC, intégrateur IT à Abidjan."
        canonical="/blog"
        jsonLd={jsonLd}
      />
      <Navigation />

      <main className="container mx-auto px-6 py-24">
        <header className="max-w-3xl mx-auto text-center mb-12 text-white">
          <p className="text-accent-gold uppercase tracking-wider text-sm mb-3 font-semibold">
            Blog ALLNTIC
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5">
            Conseils, guides et expertise IT
          </h1>
          <p className="text-lg text-white/90">
            Tutoriels pratiques et retours d'expérience sur la vidéosurveillance,
            les réseaux, la cybersécurité et la téléphonie IP.
          </p>
        </header>

        {/* Filters */}
        <div className="max-w-5xl mx-auto mb-10 space-y-4">
          <Input
            type="search"
            placeholder="Rechercher un article…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            aria-label="Rechercher dans les articles"
          />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategory(null)}
              className={`px-3 py-1.5 rounded-full text-sm border transition ${
                !category
                  ? "bg-accent-gold text-gray-900 border-accent-gold"
                  : "bg-white/5 text-white border-white/20 hover:bg-white/15"
              }`}
            >
              Toutes
            </button>
            {ALL_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1.5 rounded-full text-sm border transition ${
                  category === c
                    ? "bg-accent-gold text-gray-900 border-accent-gold"
                    : "bg-white/5 text-white border-white/20 hover:bg-white/15"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Articles grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-white/70">Aucun article trouvé.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {filtered.map((a) => (
              <Link
                key={a.slug}
                to={`/blog/${a.slug}`}
                className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-2xl"
              >
                <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/20 hover:border-accent-gold/50 transition-all flex flex-col">
                  <span className="inline-block bg-accent-gold/20 text-accent-gold text-xs px-2 py-0.5 rounded-full mb-3 self-start">
                    {a.category}
                  </span>
                  <h2 className="text-white font-semibold text-lg mb-2 group-hover:text-accent-gold transition">
                    {a.title}
                  </h2>
                  <p className="text-white/70 text-sm flex-1 line-clamp-3">
                    {a.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-white/60">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(a.date).toLocaleDateString("fr-FR")}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {a.readingTime}
                    </span>
                  </div>
                  <span className="mt-3 inline-flex items-center text-accent-gold text-sm font-medium">
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndex;
