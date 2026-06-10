// Catalogue centralisé des 12 services ALLNTIC GROUP pour pages SEO dynamiques.
// Chaque entrée alimente : URL, meta tags, H1, contenu, FAQ schema, sitemap.

export type ServiceFAQ = { question: string; answer: string };

export type Service = {
  slug: string;
  category:
    | "securite"
    | "reseaux"
    | "informatique"
    | "telephonie"
    | "web"
    | "cybersecurite";
  shortName: string;
  title: string; // <title>
  metaDescription: string;
  h1: string;
  intro: string;
  keywords: string[];
  features: string[];
  benefits: { title: string; description: string }[];
  seoContent: string[]; // Paragraphes SEO riches
  faq: ServiceFAQ[];
};

const ABIDJAN_AREAS =
  "Cocody, Plateau, Marcory, Treichville, Yopougon, Koumassi, Abobo, Riviera, Bingerville et toute la région d'Abidjan";

export const SERVICES: Service[] = [
  {
    slug: "installation-cameras",
    category: "securite",
    shortName: "Installation Caméras",
    title:
      "Installation Caméras de Surveillance Abidjan | Hikvision, Dahua | ALLNTIC GROUP",
    metaDescription:
      "Installation professionnelle de caméras de surveillance à Abidjan. Caméras IP, analogiques, dôme, bullet, PTZ. Marques Hikvision, Dahua, Uniview. Devis gratuit 24h.",
    h1: "Installation de Caméras de Surveillance à Abidjan",
    intro:
      "Spécialiste de l'installation de caméras IP et analogiques pour entreprises, commerces et particuliers en Côte d'Ivoire. Hikvision, Dahua, Uniview - matériel professionnel garanti.",
    keywords: [
      "installation caméra Abidjan",
      "caméra Hikvision Côte d'Ivoire",
      "caméra Dahua Abidjan",
      "installateur vidéosurveillance",
      "caméra IP entreprise",
    ],
    features: [
      "Étude technique et repérage gratuits sur site",
      "Caméras IP HD, 4MP, 8MP et 4K Ultra HD",
      "Caméras dôme, bullet, PTZ motorisées",
      "Vision nocturne infrarouge longue portée",
      "Installation NVR/DVR avec stockage sécurisé",
      "Configuration accès mobile temps réel (Hik-Connect, gDMSS)",
      "Câblage UTP, PoE, fibre optique",
      "Garantie matériel et service après-vente",
    ],
    benefits: [
      {
        title: "Matériel Pro Garanti",
        description:
          "Hikvision, Dahua, Uniview - références mondiales avec garantie constructeur",
      },
      {
        title: "Installation Soignée",
        description:
          "Câblage discret, fixations sécurisées, finitions professionnelles",
      },
      {
        title: "Accès Mobile Sécurisé",
        description:
          "Visualisation temps réel sur smartphone iOS/Android, alertes intelligentes",
      },
    ],
    seoContent: [
      "ALLNTIC GROUP est votre installateur de référence pour la **vidéosurveillance professionnelle à Abidjan**. Que vous soyez un commerce, une entreprise, une école ou un particulier, nous concevons un système de caméras de surveillance adapté à votre site et à votre budget.",
      "Nous installons des caméras IP haute définition (2MP, 4MP, 8MP, 4K), des caméras analogiques HD-TVI/CVI, ainsi que des caméras motorisées PTZ pour la surveillance étendue. Toutes nos installations incluent un enregistreur NVR ou DVR avec disque dur dédié et configuration de l'accès mobile.",
      `Intervention rapide à ${ABIDJAN_AREAS}. Devis gratuit sous 24h, installation soignée et formation à l'utilisation incluse.`,
    ],
    faq: [
      {
        question:
          "Combien coûte l'installation de caméras de surveillance à Abidjan ?",
        answer:
          "Le coût dépend du nombre de caméras, du type (IP/analogique), de la résolution et du câblage nécessaire. Un kit 4 caméras HD avec NVR démarre généralement autour de 250 000 FCFA installé. Devis gratuit personnalisé sous 24h.",
      },
      {
        question: "Quelle marque de caméra choisir : Hikvision ou Dahua ?",
        answer:
          "Les deux marques sont des références mondiales fiables. Hikvision excelle en applications mobiles et reconnaissance avancée, Dahua offre un excellent rapport qualité/prix. Nous recommandons selon votre usage et budget.",
      },
      {
        question: "Puis-je consulter mes caméras à distance depuis mon téléphone ?",
        answer:
          "Oui. Nous configurons systématiquement l'accès mobile via Hik-Connect (Hikvision), gDMSS/iDMSS (Dahua) ou DMSS Plus. Visualisation temps réel, lecture des enregistrements, alertes intelligentes.",
      },
      {
        question: "Quelle durée d'enregistrement est possible ?",
        answer:
          "Selon la capacité du disque dur (1 To à 10 To) et le nombre de caméras, nous configurons généralement 15 à 60 jours d'enregistrement continu en HD.",
      },
    ],
  },
  {
    slug: "videosurveillance",
    category: "securite",
    shortName: "Vidéosurveillance",
    title:
      "Vidéosurveillance Professionnelle Abidjan | Systèmes IP & NVR | ALLNTIC GROUP",
    metaDescription:
      "Solutions complètes de vidéosurveillance pour entreprises, commerces et particuliers à Abidjan. Caméras IP, NVR/DVR, supervision centralisée. Pose, configuration, maintenance.",
    h1: "Vidéosurveillance Professionnelle pour Entreprises",
    intro:
      "Sécurisez vos locaux, entrepôts, commerces et résidences avec un système de vidéosurveillance pensé pour la Côte d'Ivoire : qualité d'image, fiabilité, supervision à distance.",
    keywords: [
      "vidéosurveillance Abidjan",
      "système surveillance entreprise",
      "NVR DVR Côte d'Ivoire",
      "supervision caméras",
    ],
    features: [
      "Audit sécurité et plan d'implantation des caméras",
      "Systèmes IP centralisés multi-sites",
      "Enregistreurs NVR/DVR haute capacité",
      "Stockage local + sauvegarde cloud optionnelle",
      "Détection de mouvement intelligente, zones d'alerte",
      "Reconnaissance faciale et plaques d'immatriculation (selon modèle)",
      "Supervision à distance multi-utilisateurs",
      "Maintenance préventive annuelle",
    ],
    benefits: [
      {
        title: "Sécurité 24/7",
        description:
          "Surveillance continue, alertes en temps réel sur événements suspects",
      },
      {
        title: "Multi-Sites",
        description:
          "Supervision centralisée de plusieurs sites depuis une interface unique",
      },
      {
        title: "Conformité",
        description:
          "Installation respectant les bonnes pratiques de protection des données",
      },
    ],
    seoContent: [
      "La **vidéosurveillance professionnelle** est aujourd'hui un pilier de la sécurité des entreprises en Côte d'Ivoire. ALLNTIC GROUP conçoit, déploie et maintient des systèmes adaptés aux PME, grandes entreprises, commerces et copropriétés.",
      "Nos solutions intègrent des caméras IP haute résolution, des enregistreurs NVR sécurisés, du stockage redondant et des outils de supervision à distance. Nous gérons aussi les déploiements multi-sites avec supervision centralisée.",
      "Maintenance préventive, mises à jour firmware, dépannage rapide : nous restons à vos côtés après l'installation pour garantir la fiabilité du système.",
    ],
    faq: [
      {
        question: "Quelle différence entre NVR et DVR ?",
        answer:
          "Le NVR (Network Video Recorder) gère des caméras IP via le réseau, offrant une qualité supérieure et plus de fonctionnalités. Le DVR fonctionne avec des caméras analogiques HD via câbles coaxiaux, plus économique pour rénovation d'installations existantes.",
      },
      {
        question: "Combien de caméras pour sécuriser une entreprise ?",
        answer:
          "Cela dépend de la surface et des points sensibles. En moyenne : 4-8 caméras pour un commerce, 8-16 pour une PME, 16+ pour des sites industriels. Audit gratuit pour plan optimal.",
      },
      {
        question: "Proposez-vous la maintenance vidéosurveillance ?",
        answer:
          "Oui. Contrats de maintenance préventive (vérification, nettoyage, firmware) et corrective (dépannage sous 48h).",
      },
    ],
  },
  {
    slug: "reseaux-informatiques",
    category: "reseaux",
    shortName: "Réseaux Informatiques",
    title: "Réseaux Informatiques Entreprise Abidjan | LAN, WAN, VLAN | ALLNTIC GROUP",
    metaDescription:
      "Conception, installation et administration de réseaux informatiques pour entreprises à Abidjan : LAN, WAN, VLAN, VPN, fibre optique. Cisco, MikroTik, Ubiquiti.",
    h1: "Réseaux Informatiques d'Entreprise à Abidjan",
    intro:
      "Architecte de votre infrastructure réseau : LAN, WAN, VLAN, VPN, fibre optique. Solutions sécurisées, scalables et performantes pour PME et grandes entreprises ivoiriennes.",
    keywords: [
      "réseau informatique Abidjan",
      "installation LAN entreprise",
      "VLAN VPN Côte d'Ivoire",
      "Cisco MikroTik Ubiquiti",
    ],
    features: [
      "Audit et conception d'architecture réseau",
      "Câblage structuré cuivre catégorie 6/6A et fibre optique",
      "Configuration switchs managés, routeurs, pare-feu",
      "Segmentation VLAN, QoS, routage avancé",
      "VPN site-à-site et accès distant sécurisé",
      "Supervision SNMP, monitoring temps réel",
      "Documentation réseau complète",
      "Maintenance et évolutions",
    ],
    benefits: [
      {
        title: "Performance",
        description: "Architecture optimisée pour vos applications critiques",
      },
      {
        title: "Sécurité",
        description: "Segmentation, pare-feu, VPN et contrôle d'accès",
      },
      {
        title: "Évolutivité",
        description: "Infrastructure pensée pour accompagner votre croissance",
      },
    ],
    seoContent: [
      "Un **réseau informatique d'entreprise** fiable est la colonne vertébrale de votre productivité. ALLNTIC GROUP conçoit des architectures LAN/WAN robustes, sécurisées et performantes pour les entreprises d'Abidjan et de toute la Côte d'Ivoire.",
      "Nous travaillons avec les meilleurs équipementiers : Cisco, MikroTik, Ubiquiti, TP-Link Pro. Câblage structuré catégorie 6/6A, fibre optique, switchs managés, VLAN, VPN, pare-feu - tout est pensé pour la disponibilité et la sécurité.",
      "Audit réseau gratuit pour identifier les points faibles, recommandations chiffrées et déploiement encadré du début à la fin.",
    ],
    faq: [
      {
        question: "Quelle est la différence entre un switch managé et non managé ?",
        answer:
          "Un switch managé permet de configurer VLAN, QoS, sécurité et supervision. Indispensable pour réseaux d'entreprise. Le non-managé est plug-and-play, adapté aux petits besoins simples.",
      },
      {
        question: "Faut-il privilégier la fibre optique ou le cuivre ?",
        answer:
          "Fibre pour les liaisons longues distances, hauts débits (10 Gb/s+) et environnements perturbés. Cuivre catégorie 6/6A reste excellent pour la distribution finale jusqu'aux postes (jusqu'à 100m).",
      },
      {
        question: "Pouvez-vous interconnecter plusieurs sites ?",
        answer:
          "Oui, via VPN IPSec site-à-site sur Internet, ou liaisons spécialisées (MPLS, fibre opérateur). Configuration sécurisée et supervision centralisée.",
      },
    ],
  },
  {
    slug: "maintenance-informatique",
    category: "informatique",
    shortName: "Maintenance Informatique",
    title:
      "Maintenance Informatique Abidjan | Dépannage PME & Particuliers | ALLNTIC GROUP",
    metaDescription:
      "Maintenance informatique professionnelle à Abidjan : dépannage matériel/logiciel, optimisation, sécurité, support à distance. Intervention 24h. Forfaits PME disponibles.",
    h1: "Maintenance Informatique Professionnelle à Abidjan",
    intro:
      "Support technique expert pour entreprises et particuliers : intervention rapide, diagnostic précis, solutions durables. Forfaits maintenance préventive sur mesure.",
    keywords: [
      "maintenance informatique Abidjan",
      "dépannage informatique Côte d'Ivoire",
      "support technique PME",
      "infogérance Abidjan",
    ],
    features: [
      "Dépannage matériel et logiciel (Windows, macOS, Linux)",
      "Installation et configuration serveurs Windows/Linux",
      "Optimisation performances et nettoyage système",
      "Récupération de données disques durs et SSD",
      "Mise à jour, sécurisation antivirus et anti-malware",
      "Support technique à distance (TeamViewer, AnyDesk)",
      "Sauvegarde automatique locale et cloud",
      "Forfaits maintenance préventive entreprises",
    ],
    benefits: [
      {
        title: "Intervention 24h",
        description: "Diagnostic et dépannage rapides sur site ou à distance",
      },
      {
        title: "Forfaits PME",
        description: "Maintenance préventive avec SLA garanti",
      },
      {
        title: "Garantie Résultat",
        description: "Pas de réparation, pas de facturation diagnostic",
      },
    ],
    seoContent: [
      "ALLNTIC GROUP propose des services de **maintenance informatique professionnelle** pour entreprises, PME et particuliers à Abidjan. Spécialiste du dépannage hardware et software, je garantis des interventions rapides et des solutions techniques fiables.",
      `Service disponible à ${ABIDJAN_AREAS}. Support technique sur site ou à distance selon vos besoins.`,
      "Forfaits maintenance préventive avec SLA pour PME : visites régulières, mises à jour, sauvegardes, supervision proactive de votre parc informatique.",
    ],
    faq: [
      {
        question: "Combien coûte une intervention de dépannage ?",
        answer:
          "À partir de 15 000 FCFA pour un dépannage standard sur Abidjan. Tarif forfaitaire annoncé avant intervention. Pas de réparation possible = pas de frais.",
      },
      {
        question: "Intervenez-vous à domicile et en entreprise ?",
        answer:
          "Oui, sur tout Abidjan. Et à distance via TeamViewer/AnyDesk pour les problèmes logiciels - plus rapide et économique.",
      },
      {
        question: "Proposez-vous des contrats de maintenance pour entreprise ?",
        answer:
          "Oui, forfaits sur mesure incluant maintenance préventive, support illimité, supervision proactive et SLA d'intervention garanti.",
      },
    ],
  },
  {
    slug: "controle-acces",
    category: "securite",
    shortName: "Contrôle d'Accès",
    title:
      "Contrôle d'Accès Abidjan | Badge, Biométrie, Interphone | ALLNTIC GROUP",
    metaDescription:
      "Installation de systèmes de contrôle d'accès à Abidjan : badge RFID, lecteur biométrique, digicode, interphone IP, gâche électrique. Solutions entreprise et résidentiel.",
    h1: "Contrôle d'Accès et Interphonie Professionnels",
    intro:
      "Sécurisez vos accès avec badges RFID, biométrie, digicodes et interphones IP. Installation, paramétrage et gestion centralisée des droits d'accès.",
    keywords: [
      "contrôle d'accès Abidjan",
      "lecteur badge RFID",
      "biométrie entreprise",
      "interphone IP Côte d'Ivoire",
    ],
    features: [
      "Lecteurs de badges RFID (Mifare, EM4100)",
      "Lecteurs biométriques (empreintes, reconnaissance faciale)",
      "Claviers à code et digicodes",
      "Interphones IP audio et vidéo",
      "Gâches électriques et ventouses magnétiques",
      "Logiciel de gestion centralisée des accès",
      "Gestion horaires, profils et historiques",
      "Intégration avec vidéosurveillance",
    ],
    benefits: [
      {
        title: "Sécurité Renforcée",
        description: "Plus de clés perdues, contrôle précis des entrées",
      },
      {
        title: "Traçabilité",
        description: "Journal complet des accès, qui entre et quand",
      },
      {
        title: "Flexibilité",
        description: "Modification instantanée des droits, gestion à distance",
      },
    ],
    seoContent: [
      "Le **contrôle d'accès professionnel** remplace avantageusement les serrures traditionnelles. ALLNTIC GROUP installe à Abidjan des systèmes de badges RFID, lecteurs biométriques, digicodes et interphones IP.",
      "Solutions adaptées aux bureaux, immeubles, entrepôts, copropriétés et résidences. Gestion centralisée via logiciel dédié, intégration avec votre vidéosurveillance possible.",
    ],
    faq: [
      {
        question: "Badge RFID ou biométrie : que choisir ?",
        answer:
          "Le badge RFID est économique et rapide à déployer. La biométrie (empreinte/visage) supprime le risque de prêt/perte mais coûte plus cher. Mix possible selon zones de sécurité.",
      },
      {
        question: "Peut-on intégrer interphone et contrôle d'accès ?",
        answer:
          "Oui, c'est même recommandé : interphone vidéo IP avec ouverture à distance et logging dans le système de contrôle d'accès.",
      },
    ],
  },
  {
    slug: "ipbx-voip",
    category: "telephonie",
    shortName: "IPBX / VoIP",
    title:
      "IPBX VoIP Abidjan | Téléphonie IP Entreprise | Yeastar, 3CX | ALLNTIC GROUP",
    metaDescription:
      "Installation et configuration d'IPBX et solutions VoIP pour entreprises à Abidjan. Yeastar, 3CX, Asterisk. Téléphonie IP, SIP trunk, postes, softphones, standard automatique.",
    h1: "Téléphonie IP & IPBX pour Entreprises",
    intro:
      "Modernisez votre téléphonie d'entreprise avec un IPBX professionnel : économies, fonctionnalités avancées, mobilité et scalabilité.",
    keywords: [
      "IPBX Abidjan",
      "VoIP entreprise Côte d'Ivoire",
      "Yeastar 3CX Abidjan",
      "téléphonie IP",
    ],
    features: [
      "IPBX matériel (Yeastar) ou logiciel (3CX, Asterisk, FreePBX)",
      "Configuration SIP trunk opérateurs",
      "Postes IP filaires et sans-fil DECT",
      "Softphones PC et mobiles",
      "Standard automatique (IVR), files d'attente, musique d'attente",
      "Messagerie vocale, transferts, conférences",
      "Enregistrement des appels (selon réglementation)",
      "Statistiques d'appels et reporting",
    ],
    benefits: [
      {
        title: "Économies",
        description:
          "Réduction des coûts de communication, communications inter-sites gratuites",
      },
      {
        title: "Fonctionnalités Pro",
        description: "Standard, IVR, files d'attente, mobilité",
      },
      {
        title: "Évolutif",
        description: "Ajoutez des postes en quelques minutes selon vos besoins",
      },
    ],
    seoContent: [
      "L'**IPBX (téléphonie IP)** révolutionne la téléphonie d'entreprise : meilleur rapport qualité/prix, fonctionnalités avancées, mobilité totale. ALLNTIC GROUP déploie des solutions Yeastar, 3CX et Asterisk pour PME et grandes entreprises à Abidjan.",
      "Nous gérons l'intégralité du projet : choix de la solution, dimensionnement, configuration des SIP trunks avec votre opérateur, déploiement des postes IP, formation utilisateurs et maintenance.",
    ],
    faq: [
      {
        question: "Quelle solution IPBX choisir : Yeastar, 3CX ou Asterisk ?",
        answer:
          "Yeastar (matériel) est plug-and-play et fiable pour PME 5-200 postes. 3CX (logiciel) offre une excellente expérience utilisateur et licences flexibles. Asterisk/FreePBX (open source) est ultra-personnalisable. Recommandation selon votre contexte.",
      },
      {
        question: "Peut-on garder son numéro existant ?",
        answer:
          "Oui dans la majorité des cas, via portabilité numérique chez votre opérateur SIP trunk.",
      },
      {
        question: "La VoIP fonctionne-t-elle bien à Abidjan ?",
        answer:
          "Oui, avec une connexion Internet stable (fibre recommandée) et un réseau local correctement dimensionné (QoS). Nous validons la qualité avant déploiement.",
      },
    ],
  },
  {
    slug: "securite-electronique",
    category: "securite",
    shortName: "Sécurité Électronique",
    title:
      "Sécurité Électronique Abidjan | Alarmes, Caméras, Accès | ALLNTIC GROUP",
    metaDescription:
      "Solutions complètes de sécurité électronique à Abidjan : vidéosurveillance, alarmes anti-intrusion, contrôle d'accès, interphonie. Audit, installation, maintenance.",
    h1: "Sécurité Électronique Globale pour Entreprises et Résidences",
    intro:
      "Approche intégrée de la sécurité : caméras, alarmes, contrôle d'accès et interphonie en un système cohérent et supervisé.",
    keywords: [
      "sécurité électronique Abidjan",
      "alarme anti-intrusion",
      "système sécurité entreprise",
      "intégrateur sécurité Côte d'Ivoire",
    ],
    features: [
      "Audit sécurité physique et électronique",
      "Vidéosurveillance IP et analogique",
      "Alarmes anti-intrusion filaires et sans-fil",
      "Contrôle d'accès et interphonie",
      "Détection incendie connectée",
      "Centralisation et supervision unique",
      "Notifications mobiles temps réel",
      "Maintenance et tests réguliers",
    ],
    benefits: [
      {
        title: "Vision Globale",
        description: "Un seul interlocuteur pour toute votre sécurité électronique",
      },
      {
        title: "Système Cohérent",
        description: "Caméras, alarmes et accès intégrés et supervisés ensemble",
      },
      {
        title: "Réactivité",
        description: "Notifications instantanées sur smartphone en cas d'événement",
      },
    ],
    seoContent: [
      "ALLNTIC GROUP propose une approche intégrée de la **sécurité électronique** à Abidjan : vidéosurveillance, alarmes anti-intrusion, contrôle d'accès et interphonie pensés comme un système cohérent.",
      "Audit gratuit de votre site, recommandations chiffrées, installation soignée et maintenance régulière pour garantir l'efficacité dans la durée.",
    ],
    faq: [
      {
        question: "Faut-il combiner alarme et vidéosurveillance ?",
        answer:
          "Oui, c'est complémentaire : l'alarme dissuade et alerte instantanément, les caméras documentent et identifient. L'intégration permet la levée de doute vidéo en cas de déclenchement.",
      },
      {
        question: "Proposez-vous la télésurveillance ?",
        answer:
          "Nous installons les systèmes compatibles télésurveillance et pouvons orienter vers des opérateurs partenaires en Côte d'Ivoire.",
      },
    ],
  },
  {
    slug: "developpement-web",
    category: "web",
    shortName: "Développement Web",
    title:
      "Développement Web Abidjan | Sites Vitrines, E-commerce, SaaS | ALLNTIC GROUP",
    metaDescription:
      "Création de sites web professionnels à Abidjan : vitrines, e-commerce, applications SaaS. React, Supabase, WordPress. SEO, performance, mobile-first. Devis 24h.",
    h1: "Développement Web & Sites Internet Professionnels",
    intro:
      "Sites vitrines, e-commerce et applications SaaS sur mesure. Stack moderne (React, Supabase), SEO avancé, mobile-first, hébergement sécurisé.",
    keywords: [
      "création site web Abidjan",
      "développeur web Côte d'Ivoire",
      "site vitrine entreprise",
      "React Supabase Abidjan",
    ],
    features: [
      "Sites vitrines responsive et performants",
      "E-commerce avec Paystack, Stripe, Wave",
      "Applications SaaS sur mesure (React + Supabase)",
      "Sites WordPress optimisés",
      "Optimisation SEO technique avancée",
      "Hébergement cloud sécurisé (Vercel, Netlify)",
      "Maintenance et évolutions",
      "Formation à l'administration du site",
    ],
    benefits: [
      {
        title: "Mobile-First",
        description: "Performance et UX irréprochables sur smartphone",
      },
      {
        title: "SEO Avancé",
        description: "Optimisation technique pour Google dès la conception",
      },
      {
        title: "Sécurisé",
        description: "HTTPS, anti-spam, RLS Supabase, bonnes pratiques OWASP",
      },
    ],
    seoContent: [
      "ALLNTIC GROUP crée des **sites web professionnels** à Abidjan : vitrines, e-commerce et applications métier sur mesure. Stack moderne (React, TypeScript, Supabase) ou WordPress selon vos besoins.",
      "Chaque projet inclut une optimisation SEO technique poussée (meta tags, schema.org, sitemap, performance Core Web Vitals), un design responsive mobile-first et une sécurité renforcée.",
      "Hébergement cloud (Vercel, Netlify), nom de domaine, maintenance et formation : un projet web clé en main.",
    ],
    faq: [
      {
        question: "Combien coûte un site vitrine professionnel ?",
        answer:
          "À partir de 250 000 FCFA pour un site vitrine 5-7 pages avec design moderne, SEO et formulaire de contact. Devis détaillé selon vos besoins.",
      },
      {
        question: "Combien de temps pour livrer un site web ?",
        answer:
          "2 à 4 semaines pour un vitrine standard, 6 à 12 semaines pour un e-commerce ou application sur mesure.",
      },
      {
        question: "Le site sera-t-il bien référencé sur Google ?",
        answer:
          "Oui. Optimisation SEO technique incluse : meta tags dynamiques, données structurées, sitemap, performance, mobile-first. SEO de contenu disponible en option.",
      },
    ],
  },
  {
    slug: "support-entreprise",
    category: "informatique",
    shortName: "Support Entreprise",
    title:
      "Support Informatique Entreprise Abidjan | Infogérance PME | ALLNTIC GROUP",
    metaDescription:
      "Support informatique et infogérance pour PME à Abidjan : helpdesk, supervision, maintenance proactive, sauvegardes, sécurité. Forfaits sur mesure avec SLA garanti.",
    h1: "Support & Infogérance Informatique pour PME",
    intro:
      "Externalisez la gestion de votre informatique : helpdesk, supervision proactive, sauvegardes, sécurité. Concentrez-vous sur votre métier, on gère votre IT.",
    keywords: [
      "support informatique entreprise Abidjan",
      "infogérance PME Côte d'Ivoire",
      "helpdesk Abidjan",
      "maintenance informatique entreprise",
    ],
    features: [
      "Helpdesk multi-canal (téléphone, email, chat)",
      "Support à distance et sur site",
      "Supervision proactive 24/7 du parc",
      "Gestion des sauvegardes locales et cloud",
      "Maintenance préventive régulière",
      "Sécurité antivirus et anti-ransomware",
      "Inventaire et documentation du parc",
      "Reporting mensuel et SLA garanti",
    ],
    benefits: [
      {
        title: "SLA Garanti",
        description: "Engagement contractuel sur les délais d'intervention",
      },
      {
        title: "Coût Maîtrisé",
        description: "Forfait mensuel prévisible, pas de mauvaise surprise",
      },
      {
        title: "Proactif",
        description: "On détecte et règle avant que ça casse",
      },
    ],
    seoContent: [
      "Le **support informatique d'entreprise** ne devrait jamais être un frein à votre productivité. ALLNTIC GROUP propose des forfaits d'infogérance sur mesure pour PME à Abidjan : helpdesk, supervision, maintenance, sécurité.",
      "Vous bénéficiez d'un interlocuteur unique, d'un SLA garanti et d'une supervision proactive de votre parc informatique. Nous détectons les problèmes avant qu'ils n'impactent votre activité.",
    ],
    faq: [
      {
        question: "Comment sont facturés les services d'infogérance ?",
        answer:
          "Forfait mensuel fixe selon le nombre de postes/serveurs et le périmètre de service. Pas de surprise, budget prévisible.",
      },
      {
        question: "Quel délai d'intervention garantissez-vous ?",
        answer:
          "Selon le SLA contractuel : typiquement 1h pour critique, 4h pour majeur, 24h pour mineur. Personnalisable selon vos besoins.",
      },
    ],
  },
  {
    slug: "wifi-professionnel",
    category: "reseaux",
    shortName: "WiFi Professionnel",
    title:
      "WiFi Professionnel Abidjan | UniFi, MikroTik, Aruba | ALLNTIC GROUP",
    metaDescription:
      "Installation de WiFi professionnel à Abidjan : couverture optimale, hauts débits, portail captif, multi-SSID. UniFi, MikroTik, Aruba. Hôtels, bureaux, entrepôts.",
    h1: "WiFi Professionnel pour Entreprises et Établissements",
    intro:
      "Couverture WiFi sans coupure, hauts débits, sécurité et gestion centralisée pour entreprises, hôtels, écoles et événements en Côte d'Ivoire.",
    keywords: [
      "WiFi professionnel Abidjan",
      "installation WiFi entreprise",
      "UniFi Abidjan",
      "borne WiFi hôtel",
    ],
    features: [
      "Étude de couverture (site survey) sur site",
      "Bornes WiFi 5 / WiFi 6 professionnelles",
      "Solutions UniFi, MikroTik, Aruba Instant On",
      "Multi-SSID (privé, invité, IoT)",
      "Portail captif personnalisé (hôtels, événements)",
      "Roaming transparent entre bornes",
      "Contrôleur cloud, supervision centralisée",
      "Bande passante limitée par utilisateur",
    ],
    benefits: [
      {
        title: "Couverture Totale",
        description: "Plus de zones mortes, signal stable partout",
      },
      {
        title: "Sécurisé",
        description: "Réseau invité isolé, WPA3, segmentation",
      },
      {
        title: "Gestion Centralisée",
        description: "Pilotez toutes vos bornes depuis une interface unique",
      },
    ],
    seoContent: [
      "Le **WiFi professionnel** est devenu indispensable pour les entreprises, hôtels, restaurants et écoles. ALLNTIC GROUP déploie à Abidjan des réseaux sans-fil performants avec UniFi (Ubiquiti), MikroTik et Aruba Instant On.",
      "Étude de couverture préalable, choix des bornes adaptées, configuration multi-SSID, portail captif, supervision cloud : un WiFi qui fonctionne vraiment.",
    ],
    faq: [
      {
        question: "Combien de bornes WiFi pour mes locaux ?",
        answer:
          "Cela dépend de la surface, des matériaux des murs et de la densité d'utilisateurs. Une étude de couverture rapide nous permet de dimensionner précisément.",
      },
      {
        question: "Pouvez-vous mettre en place un portail captif ?",
        answer:
          "Oui, idéal pour hôtels, restaurants, événements : page d'accueil personnalisée, conditions d'utilisation, authentification, limitation de débit.",
      },
    ],
  },
  {
    slug: "installation-serveurs",
    category: "informatique",
    shortName: "Installation Serveurs",
    title:
      "Installation Serveurs Abidjan | Windows Server, Linux, NAS | ALLNTIC GROUP",
    metaDescription:
      "Installation et administration de serveurs à Abidjan : Windows Server, Linux, Active Directory, NAS Synology. Virtualisation, sauvegardes, supervision.",
    h1: "Installation et Administration de Serveurs",
    intro:
      "Serveurs Windows, Linux, NAS et virtualisation pour entreprises. Conception, installation, sécurisation, sauvegardes et supervision continue.",
    keywords: [
      "installation serveur Abidjan",
      "Windows Server Côte d'Ivoire",
      "Active Directory Abidjan",
      "NAS Synology entreprise",
    ],
    features: [
      "Serveurs physiques et virtualisés (Proxmox, VMware, Hyper-V)",
      "Windows Server : Active Directory, fichiers, impression",
      "Linux : Ubuntu, Debian, CentOS pour services métier",
      "NAS Synology et QNAP pour stockage et sauvegarde",
      "Sauvegardes automatiques 3-2-1",
      "Supervision et alertes proactives",
      "Mises à jour de sécurité régulières",
      "Plan de reprise d'activité (PRA)",
    ],
    benefits: [
      {
        title: "Centralisation",
        description: "Données, comptes utilisateurs et applications centralisés",
      },
      {
        title: "Disponibilité",
        description: "Architecture résiliente, sauvegardes automatiques",
      },
      {
        title: "Sécurité",
        description: "Hardening, mises à jour, supervision continue",
      },
    ],
    seoContent: [
      "L'**installation de serveurs professionnels** est le socle d'une informatique d'entreprise fiable. ALLNTIC GROUP déploie à Abidjan des serveurs Windows Server (Active Directory, fichiers, impression) et Linux pour les services métier.",
      "Solutions de stockage et sauvegarde avec NAS Synology et QNAP, virtualisation Proxmox/VMware, plan de reprise d'activité. Tout est documenté et supervisé.",
    ],
    faq: [
      {
        question: "Faut-il un serveur physique ou cloud ?",
        answer:
          "Selon votre contexte. Le serveur local convient pour stockage important, latence faible et indépendance Internet. Le cloud (AWS, Azure) offre scalabilité et disponibilité globale. Solutions hybrides possibles.",
      },
      {
        question: "Avez-vous une stratégie de sauvegarde recommandée ?",
        answer:
          "Oui, la règle 3-2-1 : 3 copies des données, sur 2 supports différents, dont 1 hors site. Mise en place automatisée avec supervision.",
      },
    ],
  },
  {
    slug: "cybersecurite",
    category: "cybersecurite",
    shortName: "Cybersécurité",
    title:
      "Cybersécurité Entreprise Abidjan | Audit, Pare-feu, Sensibilisation | ALLNTIC GROUP",
    metaDescription:
      "Cybersécurité pour PME à Abidjan : audit sécurité, pare-feu, anti-ransomware, sensibilisation collaborateurs, sauvegardes sécurisées. Protégez votre entreprise.",
    h1: "Cybersécurité pour PME et TPE en Côte d'Ivoire",
    intro:
      "Protégez votre entreprise contre les ransomwares, le phishing et les intrusions. Audit, pare-feu, sensibilisation, sauvegardes immuables.",
    keywords: [
      "cybersécurité Abidjan",
      "audit sécurité informatique",
      "anti-ransomware PME",
      "pare-feu entreprise Côte d'Ivoire",
    ],
    features: [
      "Audit de sécurité du SI complet",
      "Configuration pare-feu (pfSense, MikroTik, FortiGate)",
      "Anti-virus et EDR centralisé",
      "Sauvegardes immuables anti-ransomware",
      "Authentification multi-facteurs (MFA)",
      "Sensibilisation et formation collaborateurs",
      "Tests de phishing simulés",
      "Plan de réponse aux incidents",
    ],
    benefits: [
      {
        title: "Protection Globale",
        description: "Défense en profondeur sur tous les vecteurs d'attaque",
      },
      {
        title: "Sensibilisation",
        description: "Vos collaborateurs deviennent un rempart, pas une faille",
      },
      {
        title: "Résilience",
        description: "Sauvegardes immuables : récupération garantie même en cas d'attaque",
      },
    ],
    seoContent: [
      "La **cybersécurité des PME** est un enjeu critique. Les ransomwares et le phishing touchent désormais largement les entreprises ivoiriennes. ALLNTIC GROUP propose une approche pragmatique et accessible aux PME.",
      "Audit du système d'information, configuration de pare-feu, déploiement d'anti-virus EDR, sauvegardes immuables, MFA, sensibilisation des collaborateurs : nous bâtissons votre défense en profondeur.",
    ],
    faq: [
      {
        question: "Mon entreprise est petite, suis-je vraiment une cible ?",
        answer:
          "Oui, malheureusement. Les attaquants ciblent massivement les PME, souvent moins protégées. Un audit rapide identifie les failles prioritaires à corriger.",
      },
      {
        question: "Que faire en cas de ransomware ?",
        answer:
          "Ne JAMAIS payer la rançon. Isoler les machines, contacter immédiatement un expert. Avec des sauvegardes immuables correctement configurées, la récupération est possible sans perte majeure.",
      },
      {
        question: "Combien coûte un audit de cybersécurité ?",
        answer:
          "À partir de 200 000 FCFA pour une PME, avec rapport détaillé et plan d'action chiffré. ROI rapide vu le coût d'une attaque réussie.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
