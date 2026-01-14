import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'AI System Improvements - Done-For-You Implementation | COAD',
  description: 'Done-for-you AI system improvements and implementation. Let COAD experts enhance your AI systems for compliance and performance.',
};

export default function AISystemImprovementsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-navy to-primary-teal text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
              AI System Improvements
              <br />
              Done-For-You Implementation
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              Let COAD's expert alliance improve your AI systems. We handle implementation, optimization, and compliance upgrades so you can focus on your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://app.coad.ai/contact?service=ai-system" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                  Request AI System Improvements
                </Button>
              </a>
              <Link href="/corporate-services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View All Corporate Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our AI System Improvements service provides done-for-you implementation and optimization of your AI systems. Our expert alliance handles everything from compliance upgrades to performance optimization.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We work with your existing systems to enhance them for EU AI Act compliance, improve performance, reduce costs, and ensure they meet governance standards. You get improved systems without the internal resource drain.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Compliance Upgrades</h3>
                <p className="text-gray-600 mb-4">
                  Upgrade your AI systems to meet EU AI Act requirements, including human oversight, data governance, and transparency.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Article 13 (Human Oversight) implementation</li>
                  <li>• Article 15 (Data Governance) compliance</li>
                  <li>• Transparency and accountability frameworks</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Improve system performance, reduce latency, optimize costs, and enhance reliability.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• System performance analysis</li>
                  <li>• Cost optimization</li>
                  <li>• Reliability improvements</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Security Enhancements</h3>
                <p className="text-gray-600 mb-4">
                  Strengthen security, implement safeguards, and ensure robust protection against threats.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Security audits</li>
                  <li>• Threat mitigation</li>
                  <li>• Safeguard implementation</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Governance Integration</h3>
                <p className="text-gray-600 mb-4">
                  Integrate governance frameworks, oversight mechanisms, and compliance monitoring.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Governance framework implementation</li>
                  <li>• Oversight mechanisms</li>
                  <li>• Compliance monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-teal mb-2">1</div>
                <h3 className="text-lg font-semibold mb-2">Assessment</h3>
                <p className="text-sm text-gray-600">Comprehensive analysis of your current AI systems</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-teal mb-2">2</div>
                <h3 className="text-lg font-semibold mb-2">Planning</h3>
                <p className="text-sm text-gray-600">Custom improvement plan aligned with your goals</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-teal mb-2">3</div>
                <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                <p className="text-sm text-gray-600">Done-for-you execution by our expert alliance</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-teal mb-2">4</div>
                <h3 className="text-lg font-semibold mb-2">Support</h3>
                <p className="text-sm text-gray-600">Ongoing monitoring and optimization</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Improve Your AI Systems?</h2>
            <p className="text-xl text-white/90 mb-8">Let our expert alliance handle your AI system improvements.</p>
            <a href="https://app.coad.ai/contact?service=ai-system" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                Request AI System Improvements
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
