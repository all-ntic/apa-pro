export const SITE = {
  name: "ALLNTIC GROUP",
  url: "https://allntic.com",
  tagline: "IT · Réseaux · Sécurité électronique · Web",
  baseline:
    "Pôle technique pluridisciplinaire à Abidjan : infrastructures IT, réseaux, vidéosurveillance, sécurité électronique et développement web.",
  email: "infos@allntic.com",
  phone: "+2250778023331",
  phoneDisplay: "+225 07 78 02 33 31",
  whatsapp: "2250778023331",
  city: "Abidjan",
  area: "Cocody, Abidjan — Côte d'Ivoire",
  hours: "Lundi – Samedi · 08h00 – 18h00",
  social: {
    facebook: "https://web.facebook.com/ALLNTIC",
    instagram: "https://www.instagram.com/allntic225",
    youtube: "https://www.youtube.com/@allntic",
    tiktok: "https://www.tiktok.com/@allntic",
    github: "https://github.com/all-ntic",
  },
} as const;

export const whatsappLink = (message = "Bonjour ALLNTIC GROUP, je souhaite un devis.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
