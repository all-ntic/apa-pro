import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; href?: string };

const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <nav aria-label="Fil d'Ariane" className="text-sm">
    <ol className="flex flex-wrap items-center gap-1 text-muted-foreground">
      <li>
        <Link to="/" className="hover:text-primary transition-colors">
          Accueil
        </Link>
      </li>
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-1">
          <ChevronRight className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
          {item.href && i < items.length - 1 ? (
            <Link to={item.href} className="hover:text-primary transition-colors">
              {item.name}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.name}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export const breadcrumbJsonLd = (items: Crumb[], baseUrl = "https://allntic.com") => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Accueil", href: "/" }, ...items].map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.href ? `${baseUrl}${item.href}` : undefined,
  })),
});

export default Breadcrumbs;
