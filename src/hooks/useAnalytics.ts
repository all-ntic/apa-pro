import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, trackPageView, analytics } from '@/lib/analytics';

// Hook to initialize GA and track page views
export const useAnalytics = () => {
  const location = useLocation();

  // Initialize GA on mount
  useEffect(() => {
    initGA();
  }, []);

  // Track page views on route change
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return analytics;
};

// Hook for scroll depth tracking
export const useScrollDepth = () => {
  useEffect(() => {
    const milestones = [25, 50, 75, 100];
    const reached = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      milestones.forEach((milestone) => {
        if (scrollPercent >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          analytics.scrollDepth(milestone);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Hook for time on page tracking
export const useTimeOnPage = () => {
  useEffect(() => {
    const startTime = Date.now();
    const milestones = [30, 60, 120, 300]; // seconds
    const reached = new Set<number>();

    const interval = setInterval(() => {
      const elapsed = Math.round((Date.now() - startTime) / 1000);
      
      milestones.forEach((milestone) => {
        if (elapsed >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          analytics.timeOnPage(milestone);
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);
};

export default useAnalytics;
