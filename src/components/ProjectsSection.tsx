import { useEffect, useState } from "react";
import { ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import {
  PROJECTS as FALLBACK_PROJECTS,
  STATUS_BADGE,
  statusLabel,
  type ProjectStatus,
  type ShowcaseProject,
} from "@/data/projects";
import { supabase } from "@/integrations/supabase/client";
import imgReseau from "@/assets/realisation-reseau.jpg";

const ProjectsSection = () => {
  const [projects, setProjects] = useState<ShowcaseProject[]>(FALLBACK_PROJECTS);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select(
          "slug,name,tagline,description,technologies,objective,status,image_url,link,category",
        )
        .eq("is_published", true)
        .order("display_order", { ascending: true });
      if (cancelled || error || !data || data.length === 0) return;
      setProjects(
        data.map((p) => ({
          slug: p.slug,
          name: p.name,
          tagline: p.tagline,
          description: p.description,
          technologies: p.technologies ?? [],
          objective: p.objective,
          status: (p.status as ProjectStatus) ?? "actif",
          image: p.image_url || imgReseau,
          link: p.link || undefined,
          category: p.category,
        })),
      );
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="projets"
      className="py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="projects-title"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/15 text-accent-gold text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Projets & Innovations
          </div>
          <h2
            id="projects-title"
            className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Les <span className="gradient-text">projets</span> portés par ALLNTIC
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            ALLNTIC, LesCVPro et les futures solutions technologiques en construction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 ring-glow flex flex-col animate-fade-in"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-royal-blue/10">
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.tagline}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-blue-dark/85 via-royal-blue-dark/30 to-transparent" />
                <span
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${STATUS_BADGE[p.status]}`}
                >
                  {statusLabel(p.status)}
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs uppercase tracking-widest text-cyan-glow mb-0.5">
                    {p.category}
                  </div>
                  <h3 className="font-serif font-bold text-xl leading-tight">{p.name}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-sm font-medium text-royal-blue mb-2">{p.tagline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {p.description}
                </p>

                <div className="mb-4">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">
                    Objectif
                  </div>
                  <p className="text-sm text-foreground/90 italic leading-snug">
                    « {p.objective} »
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.technologies.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs bg-royal-blue/10 text-royal-blue rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-royal-blue hover:text-cyan-electric transition-colors"
                    >
                      Visiter
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-gold">
                      Bientôt disponible
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
