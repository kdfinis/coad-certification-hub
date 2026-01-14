import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'AMCD Track - AI Media and Content Development | COAD',
  description: 'When You\'re Starting Your AI Journey, Master AI-Powered Media and Content Creation',
};

export default function AMCDTrackPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-navy to-primary-teal text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
              When You're Starting Your AI Journey,
              <br />
              Master AI-Powered Media and Content Creation
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              Perfect for junior professionals, content creators, multimedia producers, web designers, and social media managers. Foundation-level certification establishing core competencies in AI development governance and EU AI Act compliance fundamentals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://app.coad.ai/signup?track=amcd" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                  Enroll in AMCD Track
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

        {/* Is AMCD Right For You */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Is AMCD Right For You?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Junior Professionals</h3>
                <p className="text-gray-600">Starting your career? AMCD provides the foundation you need to leverage AI for media and content creation without requiring extensive technical background.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Content Creators</h3>
                <p className="text-gray-600">Enhance your creative workflow with AI-powered tools for visual storytelling, social media content, and multimedia production.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Web Designers</h3>
                <p className="text-gray-600">Master AI-assisted web design, visual design systems, and front-end development for media-focused applications.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Social Media Managers</h3>
                <p className="text-gray-600">Learn to create engaging, AI-enhanced content that drives engagement while maintaining brand consistency and compliance.</p>
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
                  <span>No coding experience required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Basic computer literacy (web browsing, file management)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Access to a computer with internet connection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Modern web browser (Chrome, Firefox, Safari, Edge)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Creative curiosity and willingness to learn</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Outcomes */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Career Outcomes & Job Prospects</h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              AMCD graduates are prepared for a wide range of roles in AI-powered media and content creation. Here's what you can achieve:
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                'AI Content Creator',
                'Multimedia Producer',
                'Social Media Strategist',
                'Web Designer (AI-Enhanced)',
                'Visual Content Specialist',
                'Digital Media Coordinator',
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
                <div className="text-sm font-medium text-primary-teal mb-2">LEVEL 1</div>
                <h3 className="text-2xl font-bold mb-4">Foundation</h3>
                <p className="text-gray-600 mb-4">Core AI media tools, content creation basics, and EU AI Act fundamentals for limited-risk AI systems.</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-sm font-medium text-primary-teal mb-2">LEVEL 2</div>
                <h3 className="text-2xl font-bold mb-4">Advanced</h3>
                <p className="text-gray-600 mb-4">Advanced media workflows, AI-assisted design systems, and compliance best practices.</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-sm font-medium text-primary-teal mb-2">LEVEL 3</div>
                <h3 className="text-2xl font-bold mb-4">Master</h3>
                <p className="text-gray-600 mb-4">Portfolio-ready projects, enterprise media solutions, and Charterholder status.</p>
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
              All AMCD track certifications are structured to meet EU AI Act requirements for limited-risk AI systems, ensuring compliance with transparency and data governance standards.
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 font-medium">EU AI Act Compliant • Limited Risk AI Systems</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-primary-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
            <p className="text-xl text-white/90 mb-8">Begin with AMCD and build your foundation in AI-powered media and content creation.</p>
            <a href="https://app.coad.ai/signup?track=amcd" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                Enroll in AMCD Track
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
