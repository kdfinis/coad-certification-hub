import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Certifications from "./pages/Certifications";
import ADCProfessional from "./pages/certifications/ADCProfessional";
import ADCAdvanced from "./pages/certifications/ADCAdvanced";
import ADCMaster from "./pages/certifications/ADCMaster";
import ACOSProfessional from "./pages/certifications/ACOSProfessional";
import ACOSAdvanced from "./pages/certifications/ACOSAdvanced";
import ACOSMaster from "./pages/certifications/ACOSMaster";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/certifications/adc-professional" element={<ADCProfessional />} />
            <Route path="/certifications/adc-advanced" element={<ADCAdvanced />} />
            <Route path="/certifications/adc-master" element={<ADCMaster />} />
            <Route path="/certifications/acos-professional" element={<ACOSProfessional />} />
            <Route path="/certifications/acos-advanced" element={<ACOSAdvanced />} />
            <Route path="/certifications/acos-master" element={<ACOSMaster />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
