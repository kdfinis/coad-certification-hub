import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Executive Coaching Program | COAD – Strategic AI Guidance for Leaders',
  description: 'Strategic AI guidance for leaders. Executive coaching to help leaders navigate AI transformation and governance.',
};

export default function ExecutiveCoachingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-navy to-primary-teal text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
              Executive Coaching Program
              <br />
              Strategic AI Guidance for Leaders
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              Help leaders navigate AI transformation, governance, and strategic decision-making with personalized executive coaching from COAD's expert alliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/corporate-services/contact?service=executive">
                <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                  Request Executive Coaching
                </Button>
              </Link>
              <Link href="/corporate-services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View All Corporate Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What It Is */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Is Executive Coaching?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our Executive Coaching Program provides strategic AI guidance for leaders who need to navigate AI transformation, governance challenges, and strategic decision-making. Work one-on-one with experts from our alliance to develop your AI leadership capabilities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're a CEO, CTO, or senior executive facing AI governance decisions, our coaching helps you make informed choices, build compliant AI strategies, and lead your organization through digital transformation.
            </p>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Who Is This For?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">CEOs & C-Suite</h3>
                <p className="text-gray-600">
                  Strategic guidance on AI transformation, governance frameworks, and organizational change management.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">CTOs & Technology Leaders</h3>
                <p className="text-gray-600">
                  Technical and strategic advice on AI implementation, compliance, and risk management.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Compliance & Risk Officers</h3>
                <p className="text-gray-600">
                  Expert guidance on EU AI Act compliance, oversight frameworks, and regulatory alignment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Get */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">What You'll Get</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Personalized Strategy Sessions</h3>
                <p className="text-gray-600">
                  One-on-one coaching sessions tailored to your specific challenges, goals, and organizational context.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Expert Alliance Access</h3>
                <p className="text-gray-600">
                  Work with experts from Technology Architects, Finance & Risk, Higher Education, and Industry Professionals.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">AI Governance Frameworks</h3>
                <p className="text-gray-600">
                  Practical frameworks and tools for implementing compliant AI governance in your organization.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
                <p className="text-gray-600">
                  Continued guidance as you implement AI strategies and navigate governance challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Strategic AI Guidance?</h2>
            <p className="text-xl text-white/90 mb-8">Connect with our executive coaching team.</p>
            <Link href="/corporate-services/contact?service=executive">
              <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                Request Executive Coaching
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
