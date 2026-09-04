export type Zone = {
  slug: string;
  name: string;
  intro: string;
  landmarks: string[];
};

export const zones: Zone[] = [
  {
    slug: "cocody",
    name: "Cocody",
    intro:
      "Résidences, sièges d'entreprises et établissements scolaires : Cocody concentre une forte demande d'installations de vidéosurveillance et de réseaux d'entreprise.",
    landmarks: ["Riviera", "Angré", "Deux Plateaux", "II Plateaux Vallon"],
  },
  {
    slug: "plateau",
    name: "Plateau",
    intro:
      "Quartier d'affaires d'Abidjan : bureaux, institutions et sièges sociaux qui exigent des infrastructures réseau fiables et une sécurité électronique rigoureuse.",
    landmarks: ["Centre des affaires", "Immeubles de bureaux", "Institutions"],
  },
  {
    slug: "marcory",
    name: "Marcory",
    intro:
      "Commerces, showrooms et PME : Marcory demande des installations rapides à déployer et faciles à exploiter au quotidien.",
    landmarks: ["Zone 4", "Biétry", "Remblais"],
  },
  {
    slug: "yopougon",
    name: "Yopougon",
    intro:
      "Commerces de proximité, écoles et habitations : des solutions de vidéosurveillance dimensionnées au juste besoin et au bon budget.",
    landmarks: ["Niangon", "Selmer", "Sideci"],
  },
  {
    slug: "treichville",
    name: "Treichville",
    intro:
      "Activité commerciale dense et entrepôts : couverture caméra des points de vente, des réserves et des accès.",
    landmarks: ["Zone portuaire", "Marché", "Entrepôts"],
  },
  {
    slug: "koumassi",
    name: "Koumassi",
    intro:
      "Zone industrielle et artisanale : réseaux inter-bâtiments, caméras extérieures et contrôle d'accès des véhicules.",
    landmarks: ["Zone industrielle", "Remblais", "Prodomo"],
  },
  {
    slug: "abobo",
    name: "Abobo",
    intro:
      "Habitations, écoles et commerces : installations sécurisées, simples à utiliser et maintenues sur la durée.",
    landmarks: ["Abobo Baoulé", "Anonkoua Kouté", "Avocatier"],
  },
  {
    slug: "bingerville",
    name: "Bingerville",
    intro:
      "Villas, résidences et établissements : couverture des périmètres étendus et liaisons WiFi entre bâtiments.",
    landmarks: ["Centre-ville", "Résidences", "Zones pavillonnaires"],
  },
];

export const getZone = (slug?: string) => zones.find((z) => z.slug === slug);
