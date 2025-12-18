import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
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

// AAD Modules (Agentic AI Developer)
import TaskDecomposition from "./pages/modules/aad/TaskDecomposition";
import MultiAgentCoordination from "./pages/modules/aad/MultiAgentCoordination";
import PerformanceOptimization from "./pages/modules/aad/PerformanceOptimization";
import HumanAIDesign from "./pages/modules/aad/HumanAIDesign";
import RestrictedMethods from "./pages/modules/aad/RestrictedMethods";
import LatestInAI from "./pages/modules/aad/LatestInAI";
import SecureAIOperations from "./pages/modules/aad/SecureAIOperations";
import PromptEngineering from "./pages/modules/aad/PromptEngineering";
import AIProductManagement from "./pages/modules/aad/AIProductManagement";
import DataPipelineDesign from "./pages/modules/aad/DataPipelineDesign";
import ModelEvaluation from "./pages/modules/aad/ModelEvaluation";
import AIDeployment from "./pages/modules/aad/AIDeployment";

// AIO Modules
import EthicalDataUse from "./pages/modules/aio/EthicalDataUse";
import PrivacyAuditor from "./pages/modules/aio/PrivacyAuditor";
import CrisisPrevention from "./pages/modules/aio/CrisisPrevention";
import LegalAuditor from "./pages/modules/aio/LegalAuditor";
import ResourceManagement from "./pages/modules/aio/ResourceManagement";
import ProcessOptimization from "./pages/modules/aio/ProcessOptimization";
import SustainabilityAI from "./pages/modules/aio/SustainabilityAI";
import FinancialEvaluations from "./pages/modules/aio/FinancialEvaluations";
import AIForGovernment from "./pages/modules/aio/AIForGovernment";
import AIForSecurity from "./pages/modules/aio/AIForSecurity";
import CybersecurityAuditing from "./pages/modules/aio/CybersecurityAuditing";
import AMLKYC from "./pages/modules/aio/AMLKYC";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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
            
            {/* AAD Modules */}
            <Route path="/modules/aad/task-decomposition" element={<TaskDecomposition />} />
            <Route path="/modules/aad/multi-agent-coordination" element={<MultiAgentCoordination />} />
            <Route path="/modules/aad/performance-optimization" element={<PerformanceOptimization />} />
            <Route path="/modules/aad/human-ai-design" element={<HumanAIDesign />} />
            <Route path="/modules/aad/restricted-methods" element={<RestrictedMethods />} />
            <Route path="/modules/aad/latest-in-ai" element={<LatestInAI />} />
            <Route path="/modules/aad/secure-ai-operations" element={<SecureAIOperations />} />
            <Route path="/modules/aad/prompt-engineering" element={<PromptEngineering />} />
            <Route path="/modules/aad/ai-product-management" element={<AIProductManagement />} />
            <Route path="/modules/aad/data-pipeline-design" element={<DataPipelineDesign />} />
            <Route path="/modules/aad/model-evaluation" element={<ModelEvaluation />} />
            <Route path="/modules/aad/ai-deployment" element={<AIDeployment />} />
            
            {/* AIO Modules */}
            <Route path="/modules/aio/ethical-data-use" element={<EthicalDataUse />} />
            <Route path="/modules/aio/privacy-auditor" element={<PrivacyAuditor />} />
            <Route path="/modules/aio/crisis-prevention" element={<CrisisPrevention />} />
            <Route path="/modules/aio/legal-auditor" element={<LegalAuditor />} />
            <Route path="/modules/aio/resource-management" element={<ResourceManagement />} />
            <Route path="/modules/aio/process-optimization" element={<ProcessOptimization />} />
            <Route path="/modules/aio/sustainability-ai" element={<SustainabilityAI />} />
            <Route path="/modules/aio/financial-evaluations" element={<FinancialEvaluations />} />
            <Route path="/modules/aio/ai-for-government" element={<AIForGovernment />} />
            <Route path="/modules/aio/ai-for-security" element={<AIForSecurity />} />
            <Route path="/modules/aio/cybersecurity-auditing" element={<CybersecurityAuditing />} />
            <Route path="/modules/aio/aml-kyc" element={<AMLKYC />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;