import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { ARTICLES, getArticleBySlug } from "@/data/blog";
import NotFound from "@/pages/NotFound";

const WHATSAPP = "https://wa.me/2250778023331";

const BlogArticle = () => {
  const { slug = "" } = useParams();
  const article = getArticleBySlug(slug);
  if (!article) return <NotFound />;

  const canonical = `/blog/${article.slug}`;
  const related = ARTICLES.filter(
    (a) => a.slug !== article.slug && a.category === article.category
  ).slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.metaDescription,
      datePublished: article.date,
      author: {
        "@type": "Person",
        name: "Agnidom Pygnali Aboubakar",
        url: "https://allntic.com",
      },
      publisher: {
        "@type": "Organization",
        name: "ALLNTIC",
        logo: {
          "@type": "ImageObject",
          url: "https://storage.googleapis.com/gpt-engineer-file-uploads/SAdL5uQGe2W7X7Gb6JNrzFaXgY02/social-images/social-1760095751167-ALLNTIC-removebg-preview.png",
        },
      },
      mainEntityOfPage: `https://allntic.com${canonical}`,
      keywords: article.tags.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://allntic.com/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://allntic.com/blog" },
        { "@type": "ListItem", position: 3, name: article.title, item: `https://allntic.com${canonical}` },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-blue-dark via-royal-blue to-royal-blue-light">
      <SEO
        title={`${article.title} | Blog ALLNTIC`}
        description={article.metaDescription}
        canonical={canonical}
        keywords={article.tags}
        type="article"
        jsonLd={jsonLd}
      />
      <Navigation />

      <main className="container mx-auto px-6 py-24">
        <article className="max-w-3xl mx-auto text-white">
          <Link
            to="/blog"
            className="inline-flex items-center text-accent-gold hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Tous les articles
          </Link>

          <span className="inline-block bg-accent-gold/20 text-accent-gold text-xs px-2 py-0.5 rounded-full mb-3">
            {article.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70 mb-8">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(article.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readingTime}
            </span>
          </div>

          <p className="text-lg text-white/90 mb-10 leading-relaxed border-l-4 border-accent-gold pl-4">
            {article.excerpt}
          </p>

          <div className="space-y-5">
            {article.content.map((block, i) => {
              if (block.type === "h2")
                return (
                  <h2 key={i} className="text-2xl font-bold text-accent-gold mt-8 mb-2">
                    {block.text}
                  </h2>
                );
              if (block.type === "h3")
                return (
                  <h3 key={i} className="text-xl font-semibold text-white mt-6 mb-2">
                    {block.text}
                  </h3>
                );
              if (block.type === "ul")
                return (
                  <ul key={i} className="list-disc list-inside space-y-1.5 text-white/90 pl-2">
                    {block.items?.map((it, j) => <li key={j}>{it}</li>)}
                  </ul>
                );
              if (block.type === "callout")
                return (
                  <aside
                    key={i}
                    className="bg-accent-gold/10 border-l-4 border-accent-gold rounded-r-lg p-4 text-white/95"
                  >
                    💡 {block.text}
                  </aside>
                );
              return (
                <p key={i} className="text-white/90 leading-relaxed">
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-2">
            {article.tags.map((t) => (
              <span
                key={t}
                className="bg-white/5 text-white/80 text-xs px-2.5 py-1 rounded-full border border-white/10"
              >
                #{t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 bg-accent-gold/10 border border-accent-gold/30 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-2">
              Besoin d'aide sur ce sujet&nbsp;?
            </h2>
            <p className="text-white/80 mb-4">
              ALLNTIC intervient à Abidjan et en Côte d'Ivoire pour vos projets IT
              et sécurité électronique.
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Discuter sur WhatsApp
              </a>
            </Button>
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="max-w-5xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-white text-center mb-6">
              Articles liés
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="bg-white/10 border border-white/20 rounded-xl p-5 hover:bg-white/20 transition"
                >
                  <h3 className="text-white font-semibold mb-2">{r.title}</h3>
                  <p className="text-white/70 text-sm line-clamp-2">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticle;
