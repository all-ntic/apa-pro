// Articles blog statiques ALLNTIC pour SEO long traîne.
export type BlogArticle = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string; // ISO
  readingTime: string;
  cover?: string;
  content: { type: "h2" | "h3" | "p" | "ul" | "callout"; text?: string; items?: string[] }[];
};

export const ARTICLES: BlogArticle[] = [
  {
    slug: "installation-camera-dahua-abidjan",
    title: "Installation Caméra Dahua à Abidjan : Guide Pratique 2025",
    metaDescription:
      "Tout savoir sur l'installation de caméras Dahua à Abidjan : choix du modèle, NVR, câblage, configuration mobile. Conseils d'un installateur professionnel.",
    excerpt:
      "Choix du modèle, câblage PoE, configuration NVR et accès mobile : le guide complet pour réussir l'installation de vos caméras Dahua à Abidjan.",
    category: "Vidéosurveillance",
    tags: ["Dahua", "Caméra IP", "NVR", "Abidjan"],
    date: "2025-04-10",
    readingTime: "6 min",
    content: [
      { type: "h2", text: "Pourquoi choisir Dahua pour la vidéosurveillance ?" },
      {
        type: "p",
        text: "Dahua est l'un des deux leaders mondiaux de la vidéosurveillance avec Hikvision. La marque propose un excellent rapport qualité/prix, une gamme très large (du résidentiel au critique) et une application mobile (DMSS) fiable.",
      },
      { type: "h2", text: "Étape 1 : Choisir les bons modèles" },
      {
        type: "p",
        text: "Pour un commerce ou une PME à Abidjan, nous recommandons une combinaison :",
      },
      {
        type: "ul",
        items: [
          "Caméras bullet IP 4MP IPC-HFW2431S pour extérieur (vision nocturne, IP67)",
          "Caméras dôme IP 4MP IPC-HDW2431T pour intérieur",
          "NVR Dahua NVR4108-8P-4KS2 (8 canaux PoE intégré)",
          "Disque dur Surveillance WD Purple ou Seagate Skyhawk 2 To minimum",
        ],
      },
      { type: "h2", text: "Étape 2 : Câblage PoE" },
      {
        type: "p",
        text: "Le PoE (Power over Ethernet) permet d'alimenter et de transporter les données dans un seul câble UTP catégorie 5e ou 6. Distance maximale 100m. Au-delà, prévoir un switch PoE intermédiaire.",
      },
      { type: "h2", text: "Étape 3 : Configuration et accès mobile" },
      {
        type: "p",
        text: "Branchement plug-and-play sur le NVR (canaux PoE), attribution d'IP automatique, ajustement des angles, configuration des zones de détection. Activation P2P sur le NVR puis ajout dans l'application DMSS via QR code.",
      },
      {
        type: "callout",
        text: "Astuce ALLNTIC : configurez impérativement un mot de passe fort sur le NVR ET désactivez les comptes par défaut. Trop d'installations restent vulnérables.",
      },
    ],
  },
  {
    slug: "erreur-dvr-dahua-solutions",
    title: "Erreurs DVR Dahua : Diagnostic et Solutions Rapides",
    metaDescription:
      "Pas d'image, mot de passe oublié, NVR offline, accès mobile cassé : les solutions aux erreurs les plus courantes sur DVR/NVR Dahua.",
    excerpt:
      "Pas d'image, accès mobile coupé, mot de passe oublié : solutions étape par étape aux erreurs Dahua les plus fréquentes.",
    category: "Dépannage",
    tags: ["Dahua", "DVR", "NVR", "Dépannage"],
    date: "2025-04-15",
    readingTime: "5 min",
    content: [
      { type: "h2", text: "Pas d'image sur certaines caméras" },
      {
        type: "p",
        text: "Vérifier dans l'ordre : alimentation PoE (LED switch), continuité câble (testeur RJ45), réinitialisation caméra (bouton reset 10s), ré-attribution IP via ConfigTool.",
      },
      { type: "h2", text: "Mot de passe oublié" },
      {
        type: "p",
        text: "Procédure officielle de réinitialisation : générer un fichier XML via DMSS (option 'Forgot password'), envoyer à un email autorisé associé au compte, importer la réponse dans le NVR.",
      },
      { type: "h2", text: "Accès mobile DMSS ne fonctionne plus" },
      {
        type: "p",
        text: "Vérifier : connexion Internet du NVR (test ping passerelle), statut P2P (doit être 'Online'), port 37777 ouvert ou P2P cloud activé, mise à jour firmware NVR récente.",
      },
      { type: "h2", text: "Disque dur non reconnu" },
      {
        type: "p",
        text: "Tester avec un autre disque, vérifier câbles SATA, formater via menu HDD du NVR. Si problème persiste, le contrôleur SATA peut être défaillant.",
      },
    ],
  },
  {
    slug: "configuration-ipbx-yeastar",
    title: "Configurer un IPBX Yeastar : Guide Pas à Pas",
    metaDescription:
      "Guide pratique pour configurer un IPBX Yeastar S-Series : SIP trunk, extensions, IVR, files d'attente. Conseils d'un intégrateur télécom Abidjan.",
    excerpt:
      "SIP trunk, extensions, standard automatique, files d'attente : la configuration complète d'un IPBX Yeastar pour PME.",
    category: "Téléphonie",
    tags: ["Yeastar", "IPBX", "VoIP", "SIP"],
    date: "2025-04-20",
    readingTime: "8 min",
    content: [
      { type: "h2", text: "Préparer le réseau" },
      {
        type: "p",
        text: "QoS sur le switch (priorité voix), VLAN voix dédié recommandé, débit Internet symétrique stable (fibre idéale), ouverture ports SIP (5060) et RTP (10000-20000) sur le pare-feu.",
      },
      { type: "h2", text: "Configurer le SIP trunk" },
      {
        type: "p",
        text: "Récupérer auprès de l'opérateur : domaine SIP, identifiant, mot de passe. Dans Yeastar : PBX > Trunks > Add > VoIP Trunk > saisir les paramètres > tester l'enregistrement.",
      },
      { type: "h2", text: "Créer les extensions" },
      {
        type: "p",
        text: "Une extension par utilisateur (numéro court 100-999), email associé pour notifications messagerie, mot de passe SIP fort. Provisioning automatique des postes IP supportés.",
      },
      { type: "h2", text: "Standard automatique (IVR)" },
      {
        type: "p",
        text: "Enregistrer le message d'accueil, créer le menu IVR avec touches (1=Commercial, 2=Technique, 0=Standard), associer au numéro entrant.",
      },
    ],
  },
  {
    slug: "reseau-entreprise-bonnes-pratiques",
    title: "Réseau d'Entreprise : 8 Bonnes Pratiques Essentielles",
    metaDescription:
      "Les 8 bonnes pratiques d'un réseau d'entreprise sécurisé et performant : VLAN, QoS, redondance, supervision, documentation. Par ALLNTIC.",
    excerpt:
      "VLAN, QoS, redondance, sauvegarde de configuration, supervision : les fondamentaux d'un réseau d'entreprise fiable.",
    category: "Réseaux",
    tags: ["Réseau", "VLAN", "Sécurité", "Bonnes pratiques"],
    date: "2025-04-25",
    readingTime: "7 min",
    content: [
      { type: "h2", text: "1. Segmenter avec des VLAN" },
      {
        type: "p",
        text: "Séparer logiquement utilisateurs, serveurs, voix, IoT, invités. Limite la propagation des incidents et améliore la sécurité.",
      },
      { type: "h2", text: "2. Activer la QoS pour la voix et la vidéo" },
      {
        type: "p",
        text: "Marquer DSCP et prioriser le trafic temps réel sur les switchs et routeurs.",
      },
      { type: "h2", text: "3. Documenter le plan d'adressage IP" },
      {
        type: "p",
        text: "Schéma réseau à jour, plan d'adressage par VLAN, inventaire des équipements et leurs configurations.",
      },
      { type: "h2", text: "4. Sauvegarder les configurations" },
      {
        type: "p",
        text: "Export régulier des configs switchs et routeurs vers un serveur sécurisé. Indispensable en cas de panne matérielle.",
      },
      { type: "h2", text: "5. Superviser en continu" },
      {
        type: "p",
        text: "SNMP + outil de supervision (LibreNMS, Zabbix, PRTG) pour anticiper les pannes et capacités.",
      },
      { type: "h2", text: "6. Sécuriser l'accès admin" },
      {
        type: "p",
        text: "Désactiver Telnet, utiliser SSH avec clés, comptes nominatifs, MFA quand possible, journalisation centralisée.",
      },
      { type: "h2", text: "7. Mettre à jour les firmwares" },
      {
        type: "p",
        text: "Calendrier trimestriel de mise à jour des firmwares pour corriger les vulnérabilités connues.",
      },
      { type: "h2", text: "8. Prévoir la redondance" },
      {
        type: "p",
        text: "Liaisons WAN secondaires, switchs en stack, alimentations onduleur (UPS) sur les équipements critiques.",
      },
    ],
  },
  {
    slug: "cybersecurite-pme-cote-divoire",
    title: "Cybersécurité des PME en Côte d'Ivoire : Par Où Commencer ?",
    metaDescription:
      "Guide pratique de cybersécurité pour PME ivoiriennes : ransomware, phishing, sauvegardes immuables, MFA, sensibilisation. Plan d'action concret.",
    excerpt:
      "Ransomware, phishing, fuites de données : les 6 mesures prioritaires pour protéger une PME ivoirienne sans exploser le budget.",
    category: "Cybersécurité",
    tags: ["Cybersécurité", "PME", "Ransomware", "MFA"],
    date: "2025-05-01",
    readingTime: "9 min",
    content: [
      { type: "h2", text: "Les PME, cibles privilégiées" },
      {
        type: "p",
        text: "Contrairement à l'idée reçue, les PME sont aujourd'hui les premières victimes : moins protégées, mais avec des données et des moyens financiers attractifs pour les attaquants.",
      },
      { type: "h2", text: "1. Sauvegardes immuables" },
      {
        type: "p",
        text: "Règle 3-2-1 : 3 copies, 2 supports différents, 1 hors site. Au moins une sauvegarde immuable (non modifiable, non supprimable) pour résister aux ransomwares.",
      },
      { type: "h2", text: "2. Authentification multi-facteurs (MFA)" },
      {
        type: "p",
        text: "MFA partout où c'est possible : email, banque, accès distant, admin serveurs. Bloque 99% des attaques sur identifiants.",
      },
      { type: "h2", text: "3. Mises à jour systématiques" },
      {
        type: "p",
        text: "Patch management automatisé sur OS, navigateurs et applications critiques. Les ransomwares exploitent souvent des failles connues non patchées.",
      },
      { type: "h2", text: "4. Sensibilisation des collaborateurs" },
      {
        type: "p",
        text: "Formation phishing 1x/an minimum, tests simulés réguliers, charte d'usage. Le facteur humain reste le maillon faible.",
      },
      { type: "h2", text: "5. EDR plutôt que simple antivirus" },
      {
        type: "p",
        text: "Les solutions EDR (Endpoint Detection & Response) détectent les comportements suspects, pas seulement les signatures. Bien plus efficaces contre les menaces modernes.",
      },
      { type: "h2", text: "6. Plan de réponse aux incidents" },
      {
        type: "p",
        text: "Document écrit : qui faire quoi en cas d'attaque, contacts d'urgence, procédure d'isolation, communication. Tester l'exercice 1x/an.",
      },
    ],
  },
  {
    slug: "maintenance-informatique-preventive",
    title:
      "Maintenance Informatique Préventive : Pourquoi C'est Rentable ?",
    metaDescription:
      "Maintenance préventive vs curative : comparatif coûts, bénéfices et plan d'action concret pour PME à Abidjan. Conseils ALLNTIC.",
    excerpt:
      "Curative ou préventive : combien ça coûte vraiment ? Comparatif et plan d'action pour PME ivoiriennes.",
    category: "Maintenance",
    tags: ["Maintenance", "PME", "Infogérance"],
    date: "2025-05-05",
    readingTime: "5 min",
    content: [
      { type: "h2", text: "Curatif : le faux ami" },
      {
        type: "p",
        text: "Attendre la panne semble économique. En réalité : interruption d'activité, urgence (tarif majoré), perte de données possible, stress équipe.",
      },
      { type: "h2", text: "Préventif : le vrai investissement" },
      {
        type: "p",
        text: "Visites régulières, supervision proactive, mises à jour, sauvegardes vérifiées. Coût mensuel maîtrisé, pannes anticipées, équipes productives.",
      },
      { type: "h2", text: "Plan préventif type pour PME 10-30 postes" },
      {
        type: "ul",
        items: [
          "Supervision proactive 24/7 (alertes serveurs, sauvegardes, antivirus)",
          "Visite mensuelle sur site (vérification physique, dépoussiérage, contrôle visuel)",
          "Mises à jour OS et applicatifs trimestrielles planifiées",
          "Test de restauration de sauvegarde semestriel",
          "Audit sécurité annuel",
          "Helpdesk illimité utilisateurs",
        ],
      },
      { type: "h2", text: "ROI" },
      {
        type: "p",
        text: "Une journée d'arrêt d'une PME de 15 personnes = facilement 500 000 à 1 500 000 FCFA. Un forfait préventif coûte 100 000 à 300 000 FCFA/mois selon périmètre. Le calcul est vite fait.",
      },
    ],
  },
];

export const getArticleBySlug = (slug: string) =>
  ARTICLES.find((a) => a.slug === slug);

export const ALL_CATEGORIES = Array.from(
  new Set(ARTICLES.map((a) => a.category))
);
export const ALL_TAGS = Array.from(new Set(ARTICLES.flatMap((a) => a.tags)));
