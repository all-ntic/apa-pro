// Generates public/sitemap.xml from app routes + dynamic content (services, blog).
// Runs via predev/prebuild npm hooks.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { SERVICES } from "../src/data/services";
import { ARTICLES } from "../src/data/blog";

const BASE_URL = "https://allntic.com";
const today = new Date().toISOString().split("T")[0];

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?:
    | "always" | "hourly" | "daily" | "weekly"
    | "monthly" | "yearly" | "never";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
  { path: "/services", changefreq: "monthly", priority: "0.9", lastmod: today },
  { path: "/blog", changefreq: "weekly", priority: "0.8", lastmod: today },
  { path: "/install", changefreq: "yearly", priority: "0.4" },
  { path: "/mentions-legales", changefreq: "yearly", priority: "0.3" },
];

const serviceEntries: SitemapEntry[] = SERVICES.map((s) => ({
  path: `/services/${s.slug}`,
  changefreq: "monthly",
  priority: "0.9",
  lastmod: today,
}));

const blogEntries: SitemapEntry[] = ARTICLES.map((a) => ({
  path: `/blog/${a.slug}`,
  changefreq: "monthly",
  priority: "0.7",
  lastmod: a.date,
}));

const entries = [...staticEntries, ...serviceEntries, ...blogEntries];

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`✓ sitemap.xml written (${entries.length} entries)`);
