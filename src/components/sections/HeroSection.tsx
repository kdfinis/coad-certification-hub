'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Master AI Competency & Oversight
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Earn recognized AI certifications that prove your skills through rigorous testing and ESG 2015-aligned standards. Our certificates of competency are blockchain-verified, Act-compliant, and designed for career advancement in the AI era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/certifications">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Certification Tracks
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/corporate-training">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Corporate Training
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-teal/20 to-primary-navy/20 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto bg-primary-teal/10 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 font-medium">Blockchain-Verified Certificates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
