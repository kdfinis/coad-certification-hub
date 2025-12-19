import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AADTrackSection from '@/components/sections/AADTrackSection';
import ACOSTrackSection from '@/components/sections/ACOSTrackSection';
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
        <meta name="keywords" content="AI certification, EU AI Act, AI governance, AI competency, blockchain certification, AI oversight, COAD" />
        <meta property="og:title" content="COAD - AI Competency & Oversight Certification" />
        <meta property="og:description" content="Master AI competency with EU AI Act compliant certifications. Blockchain-verified credentials for career advancement." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coad.ai" />
        <meta property="og:image" content="https://coad.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="COAD - AI Competency & Oversight Certification" />
        <meta name="twitter:description" content="Master AI competency with EU AI Act compliant certifications." />
        <link rel="canonical" href="https://coad.ai" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "COAD",
            "url": "https://coad.ai",
            "logo": "https://coad.ai/logo.png",
            "description": "AI Competency & Oversight Certification provider offering EU AI Act compliant certifications",
            "email": "contact@coad.ai",
            "telephone": "+352621815753",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "EU"
            },
            "sameAs": []
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main id="main-content">
          <HeroSection />
          <AADTrackSection />
          <ACOSTrackSection />
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
