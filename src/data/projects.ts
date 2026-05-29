// Projets & Innovations ALLNTIC — data centralisée pour évolutivité.
import imgWeb from "@/assets/realisation-web.jpg";
import imgReseau from "@/assets/realisation-reseau.jpg";
import imgSecurite from "@/assets/realisation-securite.jpg";

export type ProjectStatus = "actif" | "en-developpement" | "a-venir";

export type ShowcaseProject = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  objective: string;
  status: ProjectStatus;
  image: string;
  link?: string;
  category: string;
};

const STATUS_LABEL: Record<ProjectStatus, string> = {
  actif: "Actif",
  "en-developpement": "En développement",
  "a-venir": "À venir",
};

export const STATUS_BADGE: Record<ProjectStatus, string> = {
  actif: "bg-green-500/15 text-green-600 border-green-500/30",
  "en-developpement": "bg-accent-gold/15 text-accent-gold border-accent-gold/40",
  "a-venir": "bg-royal-blue/15 text-royal-blue border-royal-blue/30",
};

export const statusLabel = (s: ProjectStatus) => STATUS_LABEL[s];

export const PROJECTS: ShowcaseProject[] = [
  {
    slug: "allntic",
    name: "ALLNTIC",
    tagline: "Solutions IT & Sécurité Électronique",
    description:
      "Marque technologique fondée par Agnidom Pygnali Aboubakar, regroupant l'ensemble des services IT, réseaux, vidéosurveillance, développement web et cybersécurité en Côte d'Ivoire.",
    technologies: ["IT", "Réseaux", "Vidéosurveillance", "Web", "Cybersécurité"],
    objective:
      "Devenir une référence en ingénierie numérique et sécurité électronique en Afrique de l'Ouest.",
    status: "actif",
    image: imgReseau,
    link: "https://allntic.com",
    category: "Marque corporate",
  },
  {
    slug: "lescvpro",
    name: "LesCVPro",
    tagline: "Plateforme de création de CV professionnels",
    description:
      "Plateforme web permettant aux professionnels et étudiants de créer rapidement des CV modernes, optimisés et téléchargeables, adaptés au marché africain.",
    technologies: ["React", "Supabase", "PDF", "SaaS"],
    objective:
      "Démocratiser l'accès aux CV de qualité professionnelle en Côte d'Ivoire et en Afrique.",
    status: "actif",
    image: imgWeb,
    link: "https://lescvpro.com",
    category: "SaaS Web",
  },
  {
    slug: "allntic-portfolio",
    name: "Portfolio ALLNTIC",
    tagline: "Portfolio professionnel du fondateur",
    description:
      "Portfolio personnel d'Agnidom Pygnali Aboubakar, présentant son parcours technique, ses réalisations et ses expertises en IT et sécurité électronique.",
    technologies: ["React", "Tailwind", "SEO", "PWA"],
    objective:
      "Mettre en avant le parcours et l'expertise du fondateur d'ALLNTIC.",
    status: "actif",
    image: imgSecurite,
    link: "https://allntic.com",
    category: "Portfolio",
  },
  {
    slug: "saas-interventions",
    name: "Plateforme de gestion d'interventions",
    tagline: "SaaS technique pour techniciens et PME",
    description:
      "Application SaaS permettant de planifier, suivre et automatiser les interventions techniques avec rapports dynamiques et tableau de bord temps réel.",
    technologies: ["React", "Supabase", "Node.js", "Chart.js"],
    objective:
      "Digitaliser et professionnaliser la gestion des interventions techniques en Afrique.",
    status: "en-developpement",
    image: imgWeb,
    category: "SaaS B2B",
  },
  {
    slug: "securite-iot",
    name: "Solution Sécurité Connectée",
    tagline: "IoT — vidéosurveillance + alarme intelligente",
    description:
      "Système IoT combinant vidéosurveillance IP, détection d'intrusion, alertes mobiles temps réel et supervision centralisée multi-sites.",
    technologies: ["IoT", "MQTT", "IP Cameras", "Mobile App"],
    objective:
      "Démocratiser la sécurité électronique intelligente pour PME et particuliers.",
    status: "a-venir",
    image: imgSecurite,
    category: "IoT & Sécurité",
  },
  {
    slug: "agence-digitale",
    name: "Agence Technique ALLNTIC",
    tagline: "Pôle intégré IT, Web & Sécurité",
    description:
      "Création d'une agence technique digitale alliant IT, web, sécurité électronique et formation pour accompagner la transformation numérique africaine.",
    technologies: ["IT", "Web", "Formation", "Conseil"],
    objective: "Devenir un pôle technologique de référence en Côte d'Ivoire.",
    status: "a-venir",
    image: imgReseau,
    category: "Entreprise",
  },
];
