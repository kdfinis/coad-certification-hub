import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'AIO Track: AI Oversight Certification | COAD',
  description: 'Solidify Your Leadership with AIO: Master AI Oversight for Safe, Sustainable Transformation. Tailored for safety-focused managers and professionals.',
};

export default function AIOTrackPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-navy to-primary-teal text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Solidify Your Leadership with AIO: Master AI Oversight for Safe, Sustainable Transformation
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Tailored for safety-focused managers and professionals, the AIO Track empowers you to oversee AI with confidence, ensuring security, compliance, and efficiency in your organization. Strengthen your position today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://app.coad.ai/signup?track=aio" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                    Enroll in AIO Core Now – Start Free Oversight Module
                  </Button>
                </a>
                <Link href="/certifications">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    View All Certifications
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Description */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The AIO Track is crafted for safety-minded professionals and experienced managers who want to solidify their positions in an AI-driven world by mastering oversight, security, and sustainable transformation. It's perfect for leaders in compliance, risk management, or operations who seek to introduce AI responsibly into their organizations, focusing on security, oversight, safety, sustainability, and the broader digital transformation processes AI enables.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're a seasoned executive aiming to protect your team from AI risks or a compliance officer looking to enhance your role with Act-aligned expertise, AIO provides the tools to lead with confidence, ensuring ethical, secure, and sustainable AI deployment. This track invites you to strengthen your professional standing, turning AI from a potential threat into a controlled asset for organizational success.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              What You'll Gain
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Security and Oversight Excellence</h3>
                <p className="text-gray-600">
                  Gain tools to monitor AI risks, implement safeguards, and ensure Act compliance for high-risk systems.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety and Sustainability Focus</h3>
                <p className="text-gray-600">
                  Learn to prioritize human rights, ethical decision-making, and green AI practices to make your organization future-proof.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Transformation Leadership</h3>
                <p className="text-gray-600">
                  Equip yourself to guide comprehensive corporate digital and AI transformation initiatives, from strategic planning to organizational change management, solidifying your role as a strategic leader.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Experienced Manager-Centric</h3>
                <p className="text-gray-600">
                  Designed for those with oversight responsibilities, offering practical audits and simulations to enhance your existing expertise.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Solidification</h3>
                <p className="text-gray-600">
                  Blockchain-verified certifications that boost your credibility, making you indispensable in Act-regulated environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Domain Structure */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              AIO Core: Certified AI Oversight Professional
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              This standalone certification covers 4 domains, tested through simulations and rubrics. Complete all 4 domains for full certification.
            </p>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Domain 1: Safety/Risk</h3>
                <p className="text-gray-600 mb-4">Master risk governance, security controls, and safety frameworks for AI systems.</p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span><strong>Price:</strong> €1,800</span>
                  <span>•</span>
                  <span><strong>ECTS equivalent (approx.):</strong> 2.67</span>
                  <span>•</span>
                  <span><strong>Hours:</strong> 80 hours</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Domain 2: Ethical Oversight</h3>
                <p className="text-gray-600 mb-4">Learn to implement ethical controls, bias detection, and human rights protections.</p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span><strong>Price:</strong> €1,800</span>
                  <span>•</span>
                  <span><strong>ECTS equivalent (approx.):</strong> 2.67</span>
                  <span>•</span>
                  <span><strong>Hours:</strong> 80 hours</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Domain 3: Legal Compliance</h3>
                <p className="text-gray-600 mb-4">Ensure EU AI Act compliance, data governance, and regulatory alignment.</p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span><strong>Price:</strong> €1,600</span>
                  <span>•</span>
                  <span><strong>ECTS equivalent (approx.):</strong> 2.67</span>
                  <span>•</span>
                  <span><strong>Hours:</strong> 80 hours</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Domain 4: Corporate Digital & AI Transformation</h3>
                <p className="text-gray-600 mb-4">Lead comprehensive digital transformation initiatives with AI integration.</p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span><strong>Price:</strong> €2,600</span>
                  <span>•</span>
                  <span><strong>ECTS equivalent (approx.):</strong> 4</span>
                  <span>•</span>
                  <span><strong>Hours:</strong> 120 hours</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-Track Standalone Module */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Cross-Track Standalone Module
            </h2>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Token Efficiency in AI Development</h3>
              <p className="text-gray-600 mb-4">
                Learn how to reduce token usage through prompt optimization, routing, caching, and context management while preserving model quality and compliance.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span><strong>Price:</strong> €920</span>
                <span>•</span>
                <span><strong>ECTS equivalent (approx.):</strong> 3</span>
                <span>•</span>
                <span><strong>Hours:</strong> 90 hours</span>
              </div>
              <div className="mt-4">
                <Link href="/modules/token-efficiency">
                  <Button variant="outline">View Module Details</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Solidify Your Leadership?</h2>
            <p className="text-xl text-white/90 mb-8">Start your AIO journey today.</p>
            <a href="https://app.coad.ai/signup?track=aio" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                Enroll in AIO Track
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
