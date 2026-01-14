export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-coad py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="university-heading-1 text-foreground mb-8">Cookie Policy</h1>
          <div className="prose prose-sm max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="university-heading-3 text-foreground mb-4">What Are Cookies</h2>
              <p className="text-muted-foreground">
                Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience and analyze site usage.
              </p>
            </section>

            <section>
              <h2 className="university-heading-3 text-foreground mb-4">How We Use Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Authentication and session management in the LMS</li>
                <li>Remembering your preferences</li>
                <li>Analytics to improve our services</li>
                <li>Security and fraud prevention</li>
              </ul>
            </section>

            <section>
              <h2 className="university-heading-3 text-foreground mb-4">Cookie Consent</h2>
              <p className="text-muted-foreground">
                By using our website, you consent to our use of cookies as described in this policy. You can manage cookie preferences in your browser settings.
              </p>
            </section>

            <section>
              <h2 className="university-heading-3 text-foreground mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground">
                We may use third-party services (analytics, payment processing) that set their own cookies. These are subject to their respective privacy policies.
              </p>
            </section>

            <section>
              <h2 className="university-heading-3 text-foreground mb-4">Managing Cookies</h2>
              <p className="text-muted-foreground">
                You can control cookies through your browser settings. Note that disabling cookies may affect LMS functionality.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
