import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AllnticSection from "@/components/AllnticSection";
import ServicesGrid from "@/components/ServicesGrid";
import ProjectsSection from "@/components/ProjectsSection";
import RealizationsSection from "@/components/RealizationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";
import SEO from "@/components/seo/SEO";
import { useAnalytics, useScrollDepth, useTimeOnPage } from "@/hooks/useAnalytics";


const Portfolio = () => {
  useAnalytics();
  useScrollDepth();
  useTimeOnPage();

  // Rich JSON-LD : Organization + LocalBusiness + WebSite
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "ALLNTIC GROUP",
      legalName: "ALLNTIC GROUP — Solutions IT & Sécurité Électronique",
      url: "https://allntic.com",
      logo: "https://allntic.com/icon-512.png",
      sameAs: [
        "https://github.com/all-ntic",
        "https://www.instagram.com/allntic225",
        "https://www.youtube.com/@allntic",
        "https://web.facebook.com/ALLNTIC",
        "https://www.tiktok.com/@allntic",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://allntic.com/#localbusiness",
      name: "ALLNTIC GROUP",
      image: "https://allntic.com/icon-512.png",
      url: "https://allntic.com",
      telephone: "+2250778023331",
      email: "all.ntic225@gmail.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Cocody",
        addressLocality: "Abidjan",
        addressRegion: "Lagunes",
        addressCountry: "CI",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 5.3599,
        longitude: -3.9874,
      },
      areaServed: [
        "Abidjan", "Cocody", "Plateau", "Marcory", "Treichville",
        "Yopougon", "Koumassi", "Abobo", "Riviera", "Bingerville",
        "Côte d'Ivoire",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: "https://allntic.com",
      name: "ALLNTIC GROUP — Solutions IT & Sécurité Électronique",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://allntic.com/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="ALLNTIC GROUP — IT, Vidéosurveillance & Sécurité à Abidjan"
        description="Solutions IT, réseaux, vidéosurveillance et cybersécurité pour entreprises et particuliers à Abidjan, Côte d'Ivoire. Par ALLNTIC GROUP."
        canonical="/"
        keywords={[
          "ALLNTIC GROUP", "installation caméra Abidjan", "maintenance informatique Abidjan",
          "réseau informatique Côte d'Ivoire", "sécurité électronique Abidjan",
          "vidéosurveillance entreprise", "développement web Abidjan",
          "IPBX VoIP", "cybersécurité", "WiFi professionnel", "contrôle d'accès",
        ]}
        jsonLd={jsonLd}
      />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <AllnticSection />
        <ServicesGrid />
        <ProjectsSection />
        <RealizationsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Portfolio;
