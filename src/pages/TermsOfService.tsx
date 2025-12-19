import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | COAD</title>
        <meta name="description" content="COAD Terms of Service - Terms and conditions for using our AI certification services." />
        <link rel="canonical" href="https://coad.ai/terms-of-service" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="section-padding">
          <div className="container-coad max-w-4xl mx-auto">
            <h1 className="heading-1 mb-4">Terms of Service</h1>
            <p className="body-large text-muted-foreground mb-8">
              Last updated: December 19, 2025
            </p>

            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="heading-3 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using COAD's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">2. Services</h2>
                <p>
                  COAD provides AI competency and oversight certification programs, including:
                </p>
                <ul>
                  <li>ADC (AI Development Certified) certification track</li>
                  <li>ACOS (AI Controlling and Oversight Certified) certification track</li>
                  <li>Standalone competency modules</li>
                  <li>AI Workforce allocation services</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mb-4">3. Enrollment and Payment</h2>
                <p>
                  Enrollment in our programs requires payment of applicable fees. All prices are VAT-inclusive. Payment must be made in full before course access is granted. Refunds are subject to our Refund Policy.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">4. Certification Requirements</h2>
                <p>
                  To receive certification, you must:
                </p>
                <ul>
                  <li>Complete all required coursework</li>
                  <li>Pass assessments with a minimum score of 80%</li>
                  <li>Meet all program requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mb-4">5. Intellectual Property</h2>
                <p>
                  All course materials, content, and certifications are the property of COAD and are protected by copyright. You may not reproduce, distribute, or create derivative works without written permission.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">6. User Conduct</h2>
                <p>You agree not to:</p>
                <ul>
                  <li>Share account credentials</li>
                  <li>Attempt to circumvent security measures</li>
                  <li>Use our services for illegal purposes</li>
                  <li>Interfere with other users' access</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mb-4">7. Limitation of Liability</h2>
                <p>
                  COAD shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">8. Termination</h2>
                <p>
                  We reserve the right to terminate or suspend your account and access to services at our sole discretion, without notice, for conduct that we believe violates these Terms.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">9. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the European Union, without regard to conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">10. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">11. Contact</h2>
                <p>
                  For questions about these Terms, contact us at:<br />
                  Email: contact@coad.ai<br />
                  Phone: +352 621 815 753
                </p>
              </section>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;

