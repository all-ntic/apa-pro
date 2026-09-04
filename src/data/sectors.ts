export type Sector = {
  slug: string;
  name: string;
  short: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  needs: string[];
  solutions: string[];
  icon: "building" | "store" | "school" | "hotel" | "hospital" | "bank" | "factory" | "home";
};

export const sectors: Sector[] = [
  {
    slug: "pme-entreprises",
    name: "PME & Entreprises",
    short: "Infrastructure fiable, support réactif et sécurité maîtrisée.",
    title: "Solutions IT & sécurité pour PME et entreprises à Abidjan | ALLNTIC GROUP",
    metaDescription:
      "ALLNTIC GROUP équipe les PME d'Abidjan : réseau d'entreprise, serveurs, vidéosurveillance, maintenance et cybersécurité. Devis gratuit sous 24h.",
    h1: "Solutions IT et sécurité électronique pour PME et entreprises",
    intro:
      "Une PME a besoin d'un système d'information stable, sécurisé et facile à administrer. ALLNTIC GROUP conçoit, installe et maintient l'ensemble de votre infrastructure technique, du câblage réseau à la supervision de la vidéosurveillance.",
    needs: [
      "Réseau et WiFi stables sur tout le site",
      "Postes de travail et serveurs maintenus",
      "Vidéosurveillance et contrôle des accès",
      "Sauvegardes et protection des données",
      "Support technique réactif",
    ],
    solutions: [
      "reseaux-informatiques",
      "installation-serveurs",
      "maintenance-informatique",
      "videosurveillance",
      "cybersecurite",
    ],
    icon: "building",
  },
  {
    slug: "commerces-boutiques",
    name: "Commerces & Boutiques",
    short: "Surveillance des espaces de vente et protection des recettes.",
    title: "Vidéosurveillance et sécurité pour commerces à Abidjan | ALLNTIC GROUP",
    metaDescription:
      "Installation de caméras, alarmes et contrôle d'accès pour boutiques, supermarchés et commerces à Abidjan. ALLNTIC GROUP, devis gratuit sous 24h.",
    h1: "Vidéosurveillance et sécurité électronique pour commerces",
    intro:
      "Caisses, réserves, entrées et parkings : un commerce se protège par une couverture vidéo pensée point par point, consultable depuis un téléphone à tout moment.",
    needs: [
      "Couverture caméra des caisses et réserves",
      "Consultation à distance depuis mobile",
      "Alarme anti-intrusion hors horaires",
      "Réseau et WiFi pour la clientèle",
    ],
    solutions: ["installation-cameras", "videosurveillance", "securite-electronique", "wifi-professionnel"],
    icon: "store",
  },
  {
    slug: "ecoles-universites",
    name: "Écoles & Universités",
    short: "Campus connectés, salles informatiques et sécurité des sites.",
    title: "Réseau, salles informatiques et sécurité pour écoles | ALLNTIC GROUP",
    metaDescription:
      "ALLNTIC GROUP équipe écoles et universités à Abidjan : réseau et WiFi campus, salles informatiques, vidéosurveillance et contrôle d'accès.",
    h1: "Solutions techniques pour écoles, collèges et universités",
    intro:
      "Un établissement scolaire combine des enjeux pédagogiques et de sécurité : accès au numérique pour les élèves, protection des locaux et supervision des entrées.",
    needs: [
      "WiFi couvrant les bâtiments et l'administration",
      "Salle informatique fonctionnelle et maintenue",
      "Vidéosurveillance des cours et couloirs",
      "Contrôle des accès et interphonie",
    ],
    solutions: ["wifi-professionnel", "reseaux-informatiques", "videosurveillance", "controle-acces"],
    icon: "school",
  },
  {
    slug: "hotels-residences",
    name: "Hôtels & Résidences",
    short: "Confort connecté et sécurité discrète pour vos occupants.",
    title: "WiFi, vidéosurveillance et accès pour hôtels et résidences | ALLNTIC GROUP",
    metaDescription:
      "ALLNTIC GROUP installe WiFi haute densité, vidéosurveillance et contrôle d'accès pour hôtels et résidences à Abidjan. Devis gratuit sous 24h.",
    h1: "Équipements techniques pour hôtels et résidences",
    intro:
      "Vos clients attendent un WiFi qui fonctionne partout et un site sécurisé sans être intrusif. Nous concevons des installations discrètes, robustes et faciles à exploiter.",
    needs: [
      "WiFi haute densité chambres et espaces communs",
      "Vidéosurveillance des accès et parkings",
      "Contrôle d'accès et interphonie",
      "Téléphonie IPBX interne",
    ],
    solutions: ["wifi-professionnel", "videosurveillance", "controle-acces", "ipbx-voip"],
    icon: "hotel",
  },
  {
    slug: "sante-cliniques",
    name: "Santé & Cliniques",
    short: "Continuité de service et protection des espaces sensibles.",
    title: "Informatique et sécurité pour cliniques et cabinets | ALLNTIC GROUP",
    metaDescription:
      "Réseau, serveurs, sauvegardes et vidéosurveillance pour cliniques, cabinets et pharmacies à Abidjan. ALLNTIC GROUP, devis gratuit sous 24h.",
    h1: "Solutions IT et sécurité pour établissements de santé",
    intro:
      "Les structures de santé exigent une disponibilité permanente et un contrôle strict des accès aux zones sensibles, avec des données protégées et sauvegardées.",
    needs: [
      "Réseau fiable et sauvegardes régulières",
      "Contrôle d'accès des zones sensibles",
      "Vidéosurveillance des accueils et couloirs",
      "Maintenance préventive planifiée",
    ],
    solutions: ["installation-serveurs", "controle-acces", "videosurveillance", "maintenance-informatique"],
    icon: "hospital",
  },
  {
    slug: "banques-institutions",
    name: "Banques & Institutions",
    short: "Sécurité électronique renforcée et supervision centralisée.",
    title: "Sécurité électronique pour banques et institutions | ALLNTIC GROUP",
    metaDescription:
      "Vidéosurveillance haute définition, contrôle d'accès et cybersécurité pour banques, microfinances et institutions à Abidjan. ALLNTIC GROUP.",
    h1: "Sécurité électronique pour banques, microfinances et institutions",
    intro:
      "Les établissements financiers demandent une traçabilité complète : enregistrement continu, gestion fine des droits d'accès et durcissement du réseau.",
    needs: [
      "Vidéosurveillance haute définition et archivage",
      "Contrôle d'accès par badge ou biométrie",
      "Durcissement réseau et cybersécurité",
      "Supervision multi-sites",
    ],
    solutions: ["videosurveillance", "controle-acces", "cybersecurite", "reseaux-informatiques"],
    icon: "bank",
  },
  {
    slug: "industries-logistique",
    name: "Industries & Logistique",
    short: "Couverture des sites étendus, entrepôts et zones de stockage.",
    title: "Vidéosurveillance et réseau pour industries et entrepôts | ALLNTIC GROUP",
    metaDescription:
      "ALLNTIC GROUP sécurise usines, entrepôts et zones logistiques à Abidjan : caméras longue portée, réseau industriel et contrôle d'accès.",
    h1: "Sécurité et réseau pour sites industriels et logistiques",
    intro:
      "Sur un site étendu, la difficulté est la couverture : distances, extérieur, poussière et alimentation. Nous dimensionnons l'installation en fonction du terrain réel.",
    needs: [
      "Caméras extérieures et longue portée",
      "Liaisons réseau entre bâtiments",
      "Contrôle d'accès véhicules et personnel",
      "Maintenance sur site",
    ],
    solutions: ["installation-cameras", "reseaux-informatiques", "controle-acces", "support-entreprise"],
    icon: "factory",
  },
  {
    slug: "particuliers-villas",
    name: "Particuliers & Villas",
    short: "Protéger son domicile et garder un œil, même à distance.",
    title: "Installation caméras et alarme pour maisons et villas | ALLNTIC GROUP",
    metaDescription:
      "Installation de caméras, alarmes et interphonie pour villas et résidences privées à Abidjan. ALLNTIC GROUP, devis gratuit sous 24h.",
    h1: "Vidéosurveillance et sécurité pour maisons et villas",
    intro:
      "Une installation domestique bien pensée est simple à utiliser : quelques caméras bien placées, une application mobile claire et un enregistrement fiable.",
    needs: [
      "Caméras entrée, cour et périmètre",
      "Consultation mobile en temps réel",
      "Alarme et interphonie vidéo",
      "WiFi couvrant toute la maison",
    ],
    solutions: ["installation-cameras", "securite-electronique", "controle-acces", "wifi-professionnel"],
    icon: "home",
  },
];

export const getSector = (slug?: string) => sectors.find((s) => s.slug === slug);
