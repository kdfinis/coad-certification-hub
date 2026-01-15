import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'ACD Track - AI Code Development | COAD',
  description: 'When You Need to Build AI Solutions, Master Software Development, Integrations & Modernizations',
};

export default function ACDTrackPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-navy to-primary-teal text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
              When You Need to Build AI Solutions,
              <br />
              Master Software Development, Integrations & Modernizations
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="https://app.coad.ai/signup?track=acd" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                  Enroll in ACD Track
                </Button>
              </a>
              <Link href="/certifications">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View All Certifications
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Is ACD Right For You */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Is ACD Right For You?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Technically Inclined Professionals</h3>
                <p className="text-gray-600">Interested in building AI systems but need structured learning and recognized credentials.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Career Transitioners</h3>
                <p className="text-gray-600">Looking to move into AI development roles with hands-on project experience.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">System Integrators</h3>
                <p className="text-gray-600">Want to master API development, third-party integrations, and system modernizations.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Solution Architects</h3>
                <p className="text-gray-600">Design scalable AI system architectures, integrations, and modernizations for enterprise applications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Prerequisites & Requirements</h2>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Technical Prerequisites</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>No coding experience required (we teach Python from scratch)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Basic computer literacy (file management, web browsing)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Access to a computer with internet connection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Willingness to learn and build projects</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cross-Track Standalone Module */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Cross-Track Standalone Module
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Token Efficiency in AI Development</h3>
              <p className="text-gray-600 mb-4">
                Optimize AI systems for cost and latency with prompt compression, routing, caching, and context trimming strategies.
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

        {/* Career Outcomes */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Career Outcomes & Job Prospects</h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              ACD graduates are prepared for technical roles in AI system development, integration, and modernization. AI development roles are among the fastest-growing in tech, with 40% annual growth projected through 2030.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                'AI Developer',
                'AI Integration Specialist',
                'System Modernization Engineer',
                'AI Solutions Architect',
                'API Development Specialist',
                'AI Systems Consultant',
              ].map((role) => (
                <div key={role} className="bg-gray-50 rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-gray-900">{role}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Three Levels to Mastery */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Three Levels to Mastery</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-sm font-medium text-primary-teal mb-2">TIER 1</div>
                <h3 className="text-2xl font-bold mb-4">QAP - Qualified AI Practitioner</h3>
                <p className="text-gray-600 mb-4">Foundation level covering Python basics, AI fundamentals, and initial project work.</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-sm font-medium text-primary-teal mb-2">TIER 2</div>
                <h3 className="text-2xl font-bold mb-4">AAP - Advanced AI Practitioner</h3>
                <p className="text-gray-600 mb-4">Intermediate level focusing on system integration, API development, and advanced projects.</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-sm font-medium text-primary-teal mb-2">TIER 3</div>
                <h3 className="text-2xl font-bold mb-4">MAP - Master AI Practitioner</h3>
                <p className="text-gray-600 mb-4">Advanced level with system architecture, enterprise solutions, and portfolio-ready projects.</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* EU AI Act Compliance */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">EU AI Act Compliance</h2>
            <p className="text-lg text-gray-600 mb-4">
              All ACD track certifications are structured to meet EU AI Act requirements, ensuring compliance with high-risk system requirements such as human oversight (Article 13) and data governance (Article 15).
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 font-medium">EU AI Act Compliant • High-Risk AI Systems (when applicable)</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-primary-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build AI Solutions?</h2>
            <p className="text-xl text-white/90 mb-8">Start your ACD journey today.</p>
            <a href="https://app.coad.ai/signup?track=acd" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                Enroll in ACD Track
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
