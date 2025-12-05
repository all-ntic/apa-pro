import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Lazy load pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const Install = lazy(() => import("./pages/Install"));
const NotFound = lazy(() => import("./pages/NotFound"));
const MaintenanceInformatique = lazy(() => import("./pages/Services/MaintenanceInformatique"));
const ReseauxInformatiques = lazy(() => import("./pages/Services/ReseauxInformatiques"));
const DeveloppementWeb = lazy(() => import("./pages/Services/DeveloppementWeb"));
const SecuriteElectronique = lazy(() => import("./pages/Services/SecuriteElectronique"));

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
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/install" element={<Install />} />
            <Route path="/services/maintenance-informatique" element={<MaintenanceInformatique />} />
            <Route path="/services/reseaux-informatiques" element={<ReseauxInformatiques />} />
            <Route path="/services/developpement-web" element={<DeveloppementWeb />} />
            <Route path="/services/securite-electronique" element={<SecuriteElectronique />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <FloatingWhatsApp />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
