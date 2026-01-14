export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-coad py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="university-heading-1 text-foreground mb-8">Refund Policy</h1>
          <div className="prose prose-sm max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="university-heading-3 text-foreground mb-4">Refund Eligibility</h2>
              <p className="text-muted-foreground">
                Refunds are available within 14 days of purchase if you have not accessed more than 20% of course content in the LMS.
              </p>
            </section>

            <section>
              <h2 className="university-heading-3 text-foreground mb-4">Refund Process</h2>
              <p className="text-muted-foreground">
                To request a refund:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Contact support at <a href="mailto:contact@coad.ai" className="text-primary hover:underline">contact@coad.ai</a></li>
                <li>Provide your enrollment confirmation and reason for refund</li>
                <li>Refunds are processed within 5-7 business days</li>
              </ol>
            </section>

            <section>
              <h2 className="university-heading-3 text-foreground mb-4">Non-Refundable Items</h2>
              <p className="text-muted-foreground">
                The following are not eligible for refund:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Courses with more than 20% completion</li>
                <li>Issued certificates</li>
                <li>Corporate training contracts (subject to separate terms)</li>
              </ul>
            </section>

            <section>
              <h2 className="university-heading-3 text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground">
                For refund requests: <a href="mailto:contact@coad.ai" className="text-primary hover:underline">contact@coad.ai</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
