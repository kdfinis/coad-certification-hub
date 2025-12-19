import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';

const GDPRCompliance = () => {
  return (
    <>
      <Helmet>
        <title>GDPR Compliance | COAD</title>
        <meta name="description" content="COAD GDPR Compliance - Our commitment to data protection and your privacy rights under GDPR." />
        <link rel="canonical" href="https://coad.ai/gdpr-compliance" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="section-padding">
          <div className="container-coad max-w-4xl mx-auto">
            <h1 className="heading-1 mb-4">GDPR Compliance</h1>
            <p className="body-large text-muted-foreground mb-8">
              COAD is committed to compliance with the General Data Protection Regulation (GDPR)
            </p>

            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="heading-3 mb-4">Our Commitment</h2>
                <p>
                  COAD SARL-S is committed to protecting your personal data and ensuring compliance with the General Data Protection Regulation (GDPR) (EU) 2016/679.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">Your Rights Under GDPR</h2>
                <p>You have the following rights:</p>
                <ul>
                  <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                  <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                  <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Right to Object:</strong> Object to processing of your data</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mb-4">Exercising Your Rights</h2>
                <p>
                  To exercise any of these rights, please contact us at contact@coad.ai. We will respond to your request within one month.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">Data Protection Measures</h2>
                <p>We implement appropriate technical and organizational measures including:</p>
                <ul>
                  <li>Encryption of sensitive data</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security assessments</li>
                  <li>Staff training on data protection</li>
                  <li>Secure data storage and transmission</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mb-4">Data Processing</h2>
                <p>
                  We process personal data only for specified, explicit, and legitimate purposes. We do not process data in a manner incompatible with these purposes.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">Data Breach Notification</h2>
                <p>
                  In the event of a data breach that poses a risk to your rights and freedoms, we will notify the relevant supervisory authority within 72 hours and inform affected individuals without undue delay.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">Data Protection Officer</h2>
                <p>
                  For data protection inquiries, contact:<br />
                  Email: contact@coad.ai<br />
                  Phone: +352 621 815 753
                </p>
              </section>

              <section>
                <h2 className="heading-3 mb-4">Related Policies</h2>
                <p>
                  For more information, please review our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> and <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.
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

export default GDPRCompliance;

