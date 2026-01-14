import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'About COAD | European AI Governance Alliance',
  description: 'Building the Future of AI Governance in Europe. COAD brings together coders, finance experts, certified higher education experts, and industry leading professionals.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-navy to-primary-teal text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
              Building the Future of AI Governance in Europe
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              The EU AI Act represents the most comprehensive AI regulatory framework in history. Organisations across Europe face an urgent need for qualified professionals who understand both the technical and governance dimensions of AI compliance.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              COAD exists to bridge this gap—creating rigorous, practical certification programmes that equip professionals with the knowledge and credentials to lead AI governance initiatives within their organisations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We combine technical expertise with governance excellence, ensuring that Europe's workforce is prepared to implement AI systems that are not only innovative but also compliant, ethical, and sustainable.
            </p>
          </div>
        </section>

        {/* The Alliance */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">The Alliance</h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              COAD brings together four essential disciplines, each contributing unique expertise to our certification programmes.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology Architects</h3>
                <p className="text-gray-600">
                  Developers and AI specialists building the infrastructure for next-generation compliance systems and automated oversight tools.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Finance & Risk Experts</h3>
                <p className="text-gray-600">
                  Senior practitioners from banking, asset management, and regulatory bodies bringing real-world governance experience.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Higher Education Leaders</h3>
                <p className="text-gray-600">
                  Accredited curriculum designers and academic professionals ensuring our programmes meet rigorous educational standards.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Leading Professionals</h3>
                <p className="text-gray-600">
                  Experienced practitioners in training and workforce development, bringing practical insights from leading organizations across Europe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Principles */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Principles</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Rigorous Standards</h3>
                <p className="text-gray-700">
                  Our certifications are built on comprehensive curricula that combine theoretical knowledge with practical application, ensuring graduates are ready for real-world challenges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Practical Focus</h3>
                <p className="text-gray-700">
                  Every programme emphasizes hands-on projects, case studies, and real-world scenarios that mirror the challenges professionals face in their organizations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">European Excellence</h3>
                <p className="text-gray-700">
                  Designed specifically for the European market, our programmes align with EU AI Act requirements, ESG standards, and regional best practices.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Innovation</h3>
                <p className="text-gray-700">
                  As AI governance evolves, so do our programmes. We continuously update curricula to reflect the latest regulations, technologies, and industry practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EU AI Act Compliance */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">EU AI Act Compliance</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              COAD is fully compliant with the EU AI Act. Our programmes, curriculum, and operational practices are designed to meet and exceed all regulatory requirements, ensuring our Charterholders are prepared to implement compliant AI governance frameworks.
            </p>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Compliance Framework</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Curriculum aligned with EU AI Act Articles 13 (Human Oversight) and 15 (Data Governance)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>ESG 2015 compliant training standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Blockchain-verified certificates for authenticity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Regular audits and updates to maintain compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* European by Design */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">European by Design</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              COAD is built for Europe. Our programmes reflect the unique regulatory landscape, cultural values, and business practices of European organizations. We understand that AI governance in Europe requires a nuanced approach that balances innovation with responsibility.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our alliance of experts spans across European countries, bringing diverse perspectives and deep regional knowledge to every certification programme.
            </p>
          </div>
        </section>

        {/* Ready to Join */}
        <section className="py-16 md:py-24 bg-primary-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're looking to advance your career, upskill your team, or become part of the European AI governance community, COAD has a programme for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/certifications">
                <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                  Explore Certifications
                </Button>
              </Link>
              <Link href="/ai-workforce">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Join AI Workforce
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
