import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import AICTrackSection from '@/components/sections/AICTrackSection';
import AIOTrackSection from '@/components/sections/AIOTrackSection';
import ModulesSection from '@/components/sections/ModulesSection';
import ComplianceSection from '@/components/sections/ComplianceSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import PricingSection from '@/components/sections/PricingSection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>COAD - AI Competency & Oversight Certification | EU AI Act Compliant</title>
        <meta 
          name="description" 
          content="Earn recognized AI certifications with COAD. Blockchain-verified, EU AI Act compliant, ESG 2015 aligned certifications for professionals and organizations." 
        />
        <meta property="og:title" content="COAD - AI Competency & Oversight Certification" />
        <meta property="og:description" content="Master AI competency with EU AI Act compliant certifications. Blockchain-verified credentials for career advancement." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://coad.ai" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <SocialProofSection />
          <AICTrackSection />
          <AIOTrackSection />
          <ModulesSection />
          <ComplianceSection />
          <BenefitsSection />
          <PricingSection />
          <FinalCTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
