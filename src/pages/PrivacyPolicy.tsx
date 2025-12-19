import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | COAD</title>
        <meta name="description" content="COAD Privacy Policy - Learn how we collect, use, and protect your personal data in compliance with GDPR." />
        <link rel="canonical" href="https://coad.ai/privacy-policy" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="section-padding">
          <div className="container-coad max-w-4xl mx-auto">
            <h1 className="heading-1 mb-4">Privacy Policy</h1>
            <p className="body-large text-muted-foreground mb-8">
              Last updated: December 19, 2025
            </p>

            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="heading-3 mb-4">1. Introduction</h2>
                <p>
                  COAD SARL-S ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">2. Data Controller</h2>
                <p>
                  COAD SARL-S<br />
                  Email: contact@coad.ai<br />
                  Phone: +352 621 815 753
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">3. Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul>
                  <li>Name and contact information (email, phone number)</li>
                  <li>Account credentials</li>
                  <li>Payment information (processed through secure third-party providers)</li>
                  <li>Certification and course enrollment data</li>
                  <li>Professional profile information (for AI Workforce hub)</li>
                </ul>
                <p>We also automatically collect certain information when you visit our website, such as IP address, browser type, and usage data.</p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">4. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul>
                  <li>Provide and improve our certification services</li>
                  <li>Process enrollments and payments</li>
                  <li>Communicate with you about your account and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mb-4">5. Legal Basis for Processing (GDPR)</h2>
                <p>We process your personal data based on:</p>
                <ul>
                  <li><strong>Contract:</strong> To fulfill our services to you</li>
                  <li><strong>Consent:</strong> Where you have provided explicit consent</li>
                  <li><strong>Legal obligation:</strong> To comply with applicable laws</li>
                  <li><strong>Legitimate interests:</strong> For business operations and security</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mb-4">6. Data Sharing and Disclosure</h2>
                <p>We do not sell your personal data. We may share your information with:</p>
                <ul>
                  <li>Service providers who assist in our operations</li>
                  <li>Payment processors for transaction processing</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mb-4">7. Your Rights (GDPR)</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p>To exercise these rights, contact us at contact@coad.ai</p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">8. Data Retention</h2>
                <p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">9. Security</h2>
                <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">10. Cookies</h2>
                <p>We use cookies and similar technologies. See our <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link> for details.</p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">11. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">12. Contact Us</h2>
                <p>
                  For questions about this Privacy Policy, contact us at:<br />
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

export default PrivacyPolicy;

