import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

/**
 * Google Analytics 4 (GA4) — chargement conditionnel.
 * Activé uniquement si VITE_GA_MEASUREMENT_ID est défini (ex: G-XXXXXXXXXX).
 * Suit automatiquement les changements de route SPA.
 */
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GoogleAnalytics = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (!GA_ID || typeof window.gtag !== "function") return;
    window.gtag("config", GA_ID, {
      page_path: pathname + search,
      anonymize_ip: true,
    });
  }, [pathname, search]);

  if (!GA_ID) return null;

  return (
    <Helmet>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { anonymize_ip: true });
      `}</script>
    </Helmet>
  );
};

export default GoogleAnalytics;
