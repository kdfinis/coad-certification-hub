'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type CertificatePageProps = {
  params: { courseId: string };
};

export default function CertificatePage({ params }: CertificatePageProps) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      // TODO: Generate and download certificate PDF
      // const response = await fetch(`/api/certificates/generate?courseId=${params.courseId}`);
      // const blob = await response.blob();
      // const url = window.URL.createObjectURL(blob);
      // const a = document.createElement('a');
      // a.href = url;
      // a.download = `COAD_Certificate_${params.courseId}.pdf`;
      // a.click();
      
      alert('Certificate download started');
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download certificate. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  const handleShareLinkedIn = () => {
    // TODO: Share certificate to LinkedIn
    const certificateUrl = `${window.location.origin}/certificates/verify/${params.courseId}`;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(certificateUrl)}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <div>
        <Link href={`/lms/courses/${params.courseId}`} className="text-sm text-primary hover:underline mb-4 inline-block">
          ← Back to Course
        </Link>
        <h2 className="text-2xl font-semibold text-foreground">Certificate of Completion</h2>
        <p className="text-sm text-muted-foreground">Your blockchain-verified certificate for {params.courseId}</p>
      </div>

      <div className="rounded-2xl border-2 border-primary bg-card p-8 text-center">
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
            <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Certificate of Competency</h3>
          <p className="text-muted-foreground mb-4">This certifies that</p>
          <p className="text-xl font-semibold text-foreground mb-4">John Doe</p>
          <p className="text-muted-foreground mb-2">has successfully completed</p>
          <p className="text-lg font-semibold text-foreground mb-4">{params.courseId}</p>
          <p className="text-sm text-muted-foreground">Issued on {new Date().toLocaleDateString()}</p>
        </div>

        <div className="border-t border-border pt-6 mb-6">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Blockchain Verified</span>
            <span>•</span>
            <span>EU AI Act Compliant</span>
            <span>•</span>
            <span>ECTS Compatible</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Verification ID: <code className="px-2 py-1 rounded bg-muted text-foreground">cert_{params.courseId}_{Date.now()}</code>
          </p>
        </div>

        <div className="flex gap-3 justify-center">
          <Button onClick={handleDownload} disabled={downloading} size="lg">
            {downloading ? 'Downloading...' : 'Download PDF'}
          </Button>
          <Button variant="outline" onClick={handleShareLinkedIn} size="lg">
            Share on LinkedIn
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Certificate Verification</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Share this verification link with employers or add it to your portfolio:
        </p>
        <div className="flex gap-2">
          <input
            readOnly
            className="flex-1 rounded-md border border-border px-3 py-2 text-sm bg-muted"
            value={`${typeof window !== 'undefined' ? window.location.origin : ''}/certificates/verify/${params.courseId}`}
          />
          <Button
            variant="outline"
            onClick={() => {
              const url = `${typeof window !== 'undefined' ? window.location.origin : ''}/certificates/verify/${params.courseId}`;
              navigator.clipboard.writeText(url);
              alert('Verification link copied to clipboard');
            }}
          >
            Copy Link
          </Button>
        </div>
      </div>
    </div>
  );
}
