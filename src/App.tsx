import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";

// Lazy load pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const Install = lazy(() => import("./pages/Install"));
const NotFound = lazy(() => import("./pages/NotFound"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const ServicesIndex = lazy(() => import("./pages/Services/ServicesIndex"));
const ServiceDetail = lazy(() => import("./pages/Services/ServiceDetail"));
const BlogIndex = lazy(() => import("./pages/Blog/BlogIndex"));
const BlogArticle = lazy(() => import("./pages/Blog/BlogArticle"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-royal-blue border-t-transparent rounded-full animate-spin" />
      <p className="text-muted-foreground text-sm">Chargement...</p>
    </div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <GoogleAnalytics />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/install" element={<Install />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/services" element={<ServicesIndex />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogArticle />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminDashboard />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <FloatingWhatsApp />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
