import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'AI Workforce - Connect Certified AI Professionals with Opportunities | COAD',
  description: 'AI Workforce: Connect Certified Professionals with Opportunities. Professional marketplace connecting certified professionals with project opportunities.',
};

export default function AIWorkforcePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-navy to-primary-teal text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
              AI Workforce: Connect Certified Professionals with Opportunities
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              From certification to getting paid—a streamlined journey to consulting opportunities. Connect certified AI professionals with organizations that need their expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://app.coad.ai/signup?service=workforce" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                  Join AI Workforce
                </Button>
              </a>
              <Link href="/certifications">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Get Certified First
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works for Professionals */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">How It Works for Professionals</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary-teal mb-2">1</div>
                <h3 className="text-xl font-semibold mb-3">Get Certified</h3>
                <p className="text-gray-600">
                  Complete COAD certifications (tracks or modules) to become eligible for AI Workforce. Track completion gives you full access. Charterholder status unlocks priority placement and premium rates.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• Automatic eligibility upon certification completion</li>
                  <li>• Track completion = Full access to all opportunities</li>
                  <li>• Module completion = Access to module-specific projects</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary-teal mb-2">2</div>
                <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
                <p className="text-gray-600">
                  Build your professional profile showcasing your competencies, certifications, and portfolio.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• Showcase certifications and competencies</li>
                  <li>• Upload portfolio and case studies</li>
                  <li>• Set availability (full-time, part-time, project-based)</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary-teal mb-2">3</div>
                <h3 className="text-xl font-semibold mb-3">Get Matched</h3>
                <p className="text-gray-600">
                  Receive project opportunities that match your competencies. Review project details, client requirements, and timeline before accepting.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• Competency-based matching</li>
                  <li>• Project notifications via email and dashboard</li>
                  <li>• Review project details before accepting</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary-teal mb-2">4</div>
                <h3 className="text-xl font-semibold mb-3">Get Paid</h3>
                <p className="text-gray-600">
                  COAD handles all invoicing and payment processing. Transparent payment terms, regular payouts, and secure transactions.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• COAD handles client invoicing</li>
                  <li>• Transparent payment terms</li>
                  <li>• Regular payouts (bi-weekly or monthly)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works for Clients */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">How It Works for Clients</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl font-bold text-primary-teal mb-2">1</div>
                <h3 className="text-xl font-semibold mb-3">Submit Your Project</h3>
                <p className="text-gray-600">
                  Describe your project scope, required competencies, timeline, and budget. Specify if you need Charterholders or have specific professional requests.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl font-bold text-primary-teal mb-2">2</div>
                <h3 className="text-xl font-semibold mb-3">Get Matched</h3>
                <p className="text-gray-600">
                  Our system matches you with qualified professionals based on competencies, availability, and project requirements.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl font-bold text-primary-teal mb-2">3</div>
                <h3 className="text-xl font-semibold mb-3">Work & Pay</h3>
                <p className="text-gray-600">
                  Collaborate with matched professionals. COAD handles all payment processing and project management support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Sections */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Benefits for Professionals</h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Access to vetted project opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Competency-based matching (right projects for your skills)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Priority placement for Charterholders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Transparent payment processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Build your professional portfolio</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Benefits for Clients</h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Access to certified AI professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Competency-based matching (right professionals for your needs)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Charterholder priority for high-stakes projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Streamlined project management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>EU AI Act compliance assurance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Eligibility for Professionals</h2>
            <div className="bg-white rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                To join AI Workforce, you must complete at least one COAD certification (track or module). Track completion gives you full access to all opportunities. Module completion gives you access to module-specific projects.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Charterholder Status:</strong> Complete a full track (ACD Level 3, AIO all 4 pillars) to achieve Charterholder status, which unlocks priority placement and premium rates.
              </p>
              <Link href="/certifications">
                <Button size="lg">View Certification Tracks</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
            <p className="text-xl text-white/90 mb-8">Join AI Workforce and connect certified professionals with opportunities.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.coad.ai/signup?service=workforce" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                  Join as Professional
                </Button>
              </a>
              <a href="https://app.coad.ai/signup?service=client" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Submit Project as Client
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
