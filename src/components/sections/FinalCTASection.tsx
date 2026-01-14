'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function FinalCTASection() {
  return (
    <section className="bg-gradient-to-br from-primary-navy to-primary-teal py-20 md:py-32 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Start Your AI Certification Journey Today
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Join 10,000+ professionals who have advanced their careers with COAD certifications. Get started with a free preview or explore our corporate training options.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
              Get Started Free
            </Button>
          </Link>
          <Link href="/corporate-training">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Corporate Training
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
