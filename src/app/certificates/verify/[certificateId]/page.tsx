import Link from 'next/link';
import { Button } from '@/components/ui/button';

type CertificateVerifyProps = {
  params: { certificateId: string };
};

export default function CertificateVerifyPage({ params }: CertificateVerifyProps) {
  // TODO: Verify certificate from blockchain/database
  const isValid = true; // Mock verification
  const certificateData = {
    userName: 'John Doe',
    courseName: 'AAC Foundations',
    issueDate: '2024-03-15',
    verificationHash: `cert_${params.certificateId}`,
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container-coad py-16">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="university-heading-1 text-foreground mb-4">Certificate Verification</h1>
            <p className="body-large text-muted-foreground">
              Verify the authenticity of a COAD certificate
            </p>
          </div>

          <div className={`rounded-2xl border-2 ${isValid ? 'border-success' : 'border-destructive'} bg-card p-8`}>
            <div className="text-center mb-6">
              {isValid ? (
                <div className="mx-auto w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : (
                <div className="mx-auto w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              )}
              <h2 className={`text-2xl font-bold ${isValid ? 'text-success' : 'text-destructive'} mb-2`}>
                {isValid ? 'Certificate Verified' : 'Certificate Invalid'}
              </h2>
            </div>

            {isValid && (
              <div className="space-y-4 border-t border-border pt-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Certificate Holder</p>
                  <p className="text-lg font-semibold text-foreground">{certificateData.userName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Course</p>
                  <p className="text-lg font-semibold text-foreground">{certificateData.courseName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Issue Date</p>
                  <p className="text-lg font-semibold text-foreground">
                    {new Date(certificateData.issueDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Verification Hash</p>
                  <code className="block px-3 py-2 rounded bg-muted text-sm text-foreground break-all">
                    {certificateData.verificationHash}
                  </code>
                </div>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Blockchain Verified</span>
                <span>•</span>
                <span>EU AI Act Compliant</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/courses">
              <Button variant="outline">Browse Courses</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
