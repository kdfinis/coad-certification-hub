export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-coad py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="university-heading-1 text-foreground mb-8">Terms of Service</h1>
          <div className="prose prose-sm max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="university-heading-3 text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing COAD LMS and enrolling in courses, you agree to these Terms of Service. If you do not agree, do not use our services.
              </p>
            </section>

            <section>
              <h2 className="university-heading-3 text-foreground mb-4">2. Course Access & Usage</h2>
              <p className="text-muted-foreground">
                Course access is granted for the duration specified. You may not share account credentials or redistribute course materials.
              </p>
            </section>

            <section>
              <h2 className="university-heading-3 text-foreground mb-4">3. Certification & Credentials</h2>
              <p className="text-muted-foreground">
                Certificates are issued upon successful completion of course requirements. COAD reserves the right to revoke certificates for violations of academic integrity.
              </p>
            </section>

            <section>
              <h2 className="university-heading-3 text-foreground mb-4">4. Payment & Refunds</h2>
              <p className="text-muted-foreground">
                Payment is required before course access. Refund policy applies as stated. All prices include applicable VAT for EU customers.
              </p>
            </section>

            <section>
              <h2 className="university-heading-3 text-foreground mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All course content, LMS platform, and materials are property of COAD SARL-S. Unauthorized reproduction or distribution is prohibited.
              </p>
            </section>

            <section>
              <h2 className="university-heading-3 text-foreground mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                COAD provides educational services "as is." We are not liable for indirect damages. Our liability is limited to the course fee paid.
              </p>
            </section>

            <section>
              <h2 className="university-heading-3 text-foreground mb-4">7. Contact</h2>
              <p className="text-muted-foreground">
                COAD SARL-S, 6 Rue Leonardo da Vinci, L-1946 Luxembourg
              </p>
              <p className="text-muted-foreground">
                Email: <a href="mailto:contact@coad.ai" className="text-primary hover:underline">contact@coad.ai</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
