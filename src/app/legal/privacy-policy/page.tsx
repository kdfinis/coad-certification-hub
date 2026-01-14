export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-coad py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="university-heading-1 text-foreground mb-8">Privacy Policy</h1>
          <div className="prose prose-sm max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="university-heading-3 text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground">
                COAD SARL-S collects information necessary to provide our LMS platform and certification services. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Account information (name, email, organization)</li>
                <li>Course enrollment and progress data</li>
                <li>Payment and billing information</li>
                <li>LMS usage and activity logs</li>
              </ul>
            </section>

            <section>
              <h2 className="university-heading-3 text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use collected information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide and improve our LMS platform</li>
                <li>Process enrollments and certifications</li>
                <li>Send course updates and notifications</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="university-heading-3 text-foreground mb-4">3. GDPR Compliance</h2>
              <p className="text-muted-foreground">
                COAD complies with GDPR. You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal data</li>
                <li>Request data correction or deletion</li>
                <li>Export your data</li>
                <li>Object to data processing</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, contact: <a href="mailto:contact@coad.ai" className="text-primary hover:underline">contact@coad.ai</a>
              </p>
            </section>

            <section>
              <h2 className="university-heading-3 text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your data, including encryption, access controls, and regular security audits.
              </p>
            </section>

            <section>
              <h2 className="university-heading-3 text-foreground mb-4">5. Contact</h2>
              <p className="text-muted-foreground">
                For privacy inquiries: <a href="mailto:contact@coad.ai" className="text-primary hover:underline">contact@coad.ai</a>
              </p>
              <p className="text-muted-foreground">
                COAD SARL-S, 6 Rue Leonardo da Vinci, L-1946 Luxembourg
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
