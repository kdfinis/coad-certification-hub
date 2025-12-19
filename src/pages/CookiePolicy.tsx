import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | COAD</title>
        <meta name="description" content="COAD Cookie Policy - Learn about how we use cookies and similar technologies on our website." />
        <link rel="canonical" href="https://coad.ai/cookie-policy" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="section-padding">
          <div className="container-coad max-w-4xl mx-auto">
            <h1 className="heading-1 mb-4">Cookie Policy</h1>
            <p className="body-large text-muted-foreground mb-8">
              Last updated: December 19, 2025
            </p>

            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="heading-3 mb-4">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and improve our services.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">2. How We Use Cookies</h2>
                <p>We use cookies for:</p>
                <ul>
                  <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Functional cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Analytics cookies:</strong> Help us understand how visitors use our website (when implemented)</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mb-4">3. Types of Cookies</h2>
                <h3 className="heading-4 mb-2">Essential Cookies</h3>
                <p>These cookies are necessary for the website to function and cannot be switched off.</p>
                
                <h3 className="heading-4 mb-2 mt-4">Functional Cookies</h3>
                <p>These cookies enable enhanced functionality and personalization.</p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">4. Managing Cookies</h2>
                <p>
                  You can control and manage cookies through your browser settings. However, disabling cookies may affect website functionality.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">5. Third-Party Cookies</h2>
                <p>
                  We may use third-party services that set their own cookies. We do not control these cookies. Please review their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">6. Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time. Please review this page periodically for changes.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">7. Contact</h2>
                <p>
                  For questions about our use of cookies, contact us at:<br />
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

export default CookiePolicy;

