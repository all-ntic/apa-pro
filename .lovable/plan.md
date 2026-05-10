## Vision

Faire évoluer le site actuel (déjà bien structuré : SEO, services, blog, admin, chatbot, PWA) en une **plateforme premium dual** :
- **APA** (portfolio fondateur)
- **ALLNTIC** (vitrine corporate IT & Sécurité)
- **Projets** (LesCVPro, APA PRO, futurs)

Le tout dans un design plus **tech/cybersécurité** (bleu profond + noir + accents lumineux) tout en gardant la base existante (Royal Blue #0047AB, Playfair/Inter).

---

## Phase 1 — Design system tech premium

- Enrichir `index.css` & `tailwind.config.ts` :
  - Palette étendue : `deep-navy` (#0A1628), `cyber-blue` (#0047AB), `electric` (#00D4FF accent lumineux), `silver`
  - Gradients tech (mesh, glow), ombres bleutées
  - Animations : `glow-pulse`, `float`, `shimmer`, `grid-move`
- Composant `<TechBackground />` réutilisable (grille animée + particules subtiles) pour les sections clés.

## Phase 2 — Hero refonte premium

- Background tech animé (grille + nœuds réseau lumineux)
- Photo pro fondateur (placeholder si non fournie)
- H1 : nom + rôle, slogan "Solutions IT modernes, fiables et sécurisées…"
- 3 CTA : **WhatsApp**, **Portfolio**, **Demander un devis**
- Badges crédibilité (années expérience, projets, secteurs)

## Phase 3 — Section À propos

- Réécriture avec le nouveau texte (entrepreneur, fondateur ALLNTIC, créateur LesCVPro)
- Mise en page 2 colonnes : photo + bio narrative
- Encadrés expertise / vision / valeurs

## Phase 4 — Nouvelle section ALLNTIC corporate

Nouveau composant `AllnticSection.tsx` :
- Mission / Vision / Expertise
- Technologies (logos : Cisco, Hikvision, Ubiquiti, MikroTik, React, Supabase…)
- Avantages concurrentiels (4–6 points)
- Zones d'intervention (Abidjan + communes)

## Phase 5 — Section Services modernisée

Refonte de `SkillsSection` → `ServicesGrid` :
- 10 cartes (Réseaux, Maintenance, Vidéosurveillance, Sécurité électronique, Web, IPBX/VoIP, Cybersécurité, WiFi pro, Contrôle d'accès, Support entreprise)
- Icônes Lucide, hover glow, lien vers `/services/:slug`

## Phase 6 — Nouvelle section Projets & Innovations

Nouveau composant `ProjectsSection.tsx` :
- Cartes : **ALLNTIC**, **LesCVPro**, **APA PRO**, **Projets futurs** (SaaS interventions, sécurité IoT, agence digitale)
- Image, description, technos, statut (Actif / En développement / À venir), CTA
- Architecture évolutive (data-driven via `src/data/projects.ts`)

## Phase 7 — Portfolio technique galerie

Refonte `RealizationsSection` :
- Filtres catégories (Caméras, Réseaux, Maintenance, Web, Sécurité)
- Lightbox (composant léger)
- Lazy loading + WebP
- Placeholders si pas d'images réelles encore

## Phase 8 — SEO renforcé

- Schemas JSON-LD enrichis : **LocalBusiness** (horaires, géo Abidjan), **Organization**, **Person** (APA), **FAQPage**
- Mots-clés locaux (Abidjan, Cocody, Plateau, Marcory…) intégrés naturellement
- Open Graph + Twitter cards déjà OK → vérifier images
- Sitemap déjà à jour

## Phase 9 — Témoignages & Réseaux sociaux

- Refonte `TestimonialsSection` : slider auto, étoiles, design premium tech
- Bandeau réseaux sociaux dans Footer (déjà présent → enrichir LinkedIn, TikTok, YouTube, Instagram, FB)

## Phase 10 — Contact & conversion

- Garder `ContactSection` + ajouter **carte Google Maps embed** Abidjan
- WhatsApp flottant déjà présent
- CTA "Demander un devis" visible globalement

---

## Détails techniques

- **Pas de backend nouveau** : contenu statique en dur (data files)
- Réutilisation max des composants shadcn existants
- Lazy loading sur toutes les images
- Tous les changements respectent les tokens design system (HSL)
- Mobile-first (viewport actuel 384px testé en priorité)

---

## Hors scope (reportés)

- Google Analytics / Meta Pixel (utilisateur a dit "pas besoin pour l'instant")
- Vraies photos de réalisations (placeholders en attendant fourniture)
- Photo fondateur réelle (placeholder en attendant)
- Vraie carte Google Maps (embed iframe simple, pas d'API key)
- Système d'avis dynamique (statique pour le moment)

---

## Livrables

```text
Phase 1 : Design tokens tech       → index.css, tailwind.config.ts, TechBackground.tsx
Phase 2 : Hero refondu              → HeroSection.tsx
Phase 3 : À propos                  → AboutSection.tsx (déjà fait au tour précédent)
Phase 4 : Section ALLNTIC corp      → AllnticSection.tsx (nouveau)
Phase 5 : Services grid             → ServicesGrid.tsx (remplace SkillsSection)
Phase 6 : Projets & Innovations     → ProjectsSection.tsx + data/projects.ts
Phase 7 : Portfolio galerie         → RealizationsSection.tsx
Phase 8 : SEO LocalBusiness         → SEO.tsx + Portfolio.tsx (JSON-LD)
Phase 9 : Témoignages premium       → TestimonialsSection.tsx
Phase 10: Maps + CTA                → ContactSection.tsx
```

Approuvez ce plan et je l'exécute en une seule passe cohérente.