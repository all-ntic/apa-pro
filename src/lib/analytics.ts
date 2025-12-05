// Google Analytics 4 Configuration
// Replace GA_MEASUREMENT_ID with your actual GA4 Measurement ID (e.g., G-XXXXXXXXXX)

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Replace with your actual GA4 ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined') return;
  
  // Don't initialize in development unless explicitly enabled
  if (import.meta.env.DEV && !import.meta.env.VITE_ENABLE_GA_DEV) {
    console.log('[GA4] Analytics disabled in development mode');
    return;
  }

  // Check if GA is already loaded
  if (window.gtag) return;

  // Create gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true,
  });

  console.log('[GA4] Analytics initialized');
};

// Track page views (for SPA navigation)
export const trackPageView = (url: string, title?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title || document.title,
    page_location: window.location.origin + url,
  });
};

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', eventName, parameters);
};

// Pre-defined event trackers for common actions
export const analytics = {
  // Contact form events
  contactFormSubmit: (service?: string) => {
    trackEvent('generate_lead', {
      event_category: 'Contact',
      event_label: service || 'general',
      value: 1,
    });
    trackEvent('contact_form_submit', {
      service: service || 'not_specified',
    });
  },

  contactFormError: (error: string) => {
    trackEvent('form_error', {
      event_category: 'Contact',
      error_message: error,
    });
  },

  // WhatsApp click events
  whatsAppClick: (source: string) => {
    trackEvent('click', {
      event_category: 'WhatsApp',
      event_label: source,
      link_url: 'https://wa.me/+2250778023331',
    });
    trackEvent('whatsapp_contact', {
      source,
    });
  },

  // Phone click events
  phoneClick: () => {
    trackEvent('click', {
      event_category: 'Contact',
      event_label: 'phone_call',
      link_url: 'tel:+2250778023331',
    });
  },

  // Email click events
  emailClick: () => {
    trackEvent('click', {
      event_category: 'Contact',
      event_label: 'email',
      link_url: 'mailto:all.ntic225@gmail.com',
    });
  },

  // Navigation events
  navClick: (section: string) => {
    trackEvent('navigation', {
      event_category: 'Navigation',
      event_label: section,
    });
  },

  // Portfolio/Realizations events
  projectClick: (projectName: string, linkType: 'demo' | 'github' | 'youtube') => {
    trackEvent('click', {
      event_category: 'Portfolio',
      event_label: `${projectName}_${linkType}`,
      project_name: projectName,
      link_type: linkType,
    });
  },

  // Service page views
  servicePageView: (serviceName: string) => {
    trackEvent('view_item', {
      event_category: 'Service',
      item_name: serviceName,
    });
  },

  // CTA button clicks
  ctaClick: (ctaName: string, location: string) => {
    trackEvent('cta_click', {
      event_category: 'CTA',
      event_label: ctaName,
      cta_location: location,
    });
  },

  // Social media link clicks
  socialClick: (platform: string) => {
    trackEvent('click', {
      event_category: 'Social',
      event_label: platform,
    });
  },

  // Scroll depth tracking
  scrollDepth: (percentage: number) => {
    trackEvent('scroll', {
      event_category: 'Engagement',
      event_label: `${percentage}%`,
      value: percentage,
    });
  },

  // Time on page
  timeOnPage: (seconds: number) => {
    trackEvent('timing_complete', {
      event_category: 'Engagement',
      name: 'time_on_page',
      value: seconds,
    });
  },

  // Chatbot interactions
  chatbotOpen: () => {
    trackEvent('chatbot_open', {
      event_category: 'Chatbot',
    });
  },

  chatbotMessage: () => {
    trackEvent('chatbot_message', {
      event_category: 'Chatbot',
    });
  },

  // PWA install
  pwaInstall: () => {
    trackEvent('app_install', {
      event_category: 'PWA',
    });
  },
};

export default analytics;
