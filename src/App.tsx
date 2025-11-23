import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Index from "./pages/Index";
import Install from "./pages/Install";
import NotFound from "./pages/NotFound";
import MaintenanceInformatique from "./pages/Services/MaintenanceInformatique";
import ReseauxInformatiques from "./pages/Services/ReseauxInformatiques";
import DeveloppementWeb from "./pages/Services/DeveloppementWeb";
import SecuriteElectronique from "./pages/Services/SecuriteElectronique";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
        <FloatingWhatsApp />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
