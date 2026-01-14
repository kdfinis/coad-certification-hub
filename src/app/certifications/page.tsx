import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'AI Certifications | COAD – EU AI Act Compliant Competency Training',
  description: 'Earn recognized AI certifications in AI code development and oversight. ESG 2015 compliant, tested for real-world proficiency. Start your ACD or AIO track today.',
};

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-navy to-primary-teal text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
              Earn Recognized AI Certifications for Competence and Oversight
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              COAD offers professional certifications that prove your AI skills through rigorous testing and ESG 2015-aligned standards. Our certificates of competency are blockchain-verified, Act-compliant, and designed for career advancement in the AI era.
            </p>
            <Link href="/tracks">
              <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                Explore Tracks
              </Button>
            </Link>
          </div>
        </section>

        {/* Four Controller Pillars */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">The Four Controller Pillars</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              All COAD certifications are built on these foundational pillars of AI governance.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Human Oversight</h3>
                <p className="text-gray-600">
                  Ensuring meaningful human control over AI decision-making processes
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Robustness</h3>
                <p className="text-gray-600">
                  Building secure, reliable, and resilient AI systems
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Governance</h3>
                <p className="text-gray-600">
                  Managing data quality, privacy, and regulatory compliance
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Accountability</h3>
                <p className="text-gray-600">
                  Establishing clear responsibility and audit trails
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                As a leading provider of AI training and certification, COAD operates as a professional institute dedicated to developing real-world AI competence and oversight skills. Our certifications are structured to meet the demands of the EU AI Act, ensuring compliance with high-risk system requirements such as human oversight (Article 13) and data governance (Article 15).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                All programs are ESG 2015 compliant, emphasizing environmental sustainability (e.g., energy-efficient AI practices in Efficacy modules), social responsibility (e.g., ethical oversight in AIO), and governance standards (e.g., transparent testing rubrics). Each certification is earned through comprehensive testing (formative quizzes, capstone projects, peer-reviewed portfolios), guaranteeing verifiable competency.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Certificates are recognized as professional designations, blockchain-verified for authenticity, and convertible to ECTS credits (30 hours per ECTS) for Bologna Process mobility. Whether you're an individual professional or a corporate team, our certifications provide a certificate of competency that enhances resumes, LinkedIn profiles, and compliance portfolios.
              </p>
            </div>
          </div>
        </section>

        {/* Choose Your Track */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Choose Your Track</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AMCD Track</h3>
                <p className="text-gray-600 mb-4">AI Media and Content Development</p>
                <p className="text-sm text-gray-600 mb-4">Perfect for junior professionals, content creators, multimedia producers, web designers, and social media managers. Foundation-level certification establishing core competencies in AI development governance and EU AI Act compliance fundamentals.</p>
                <Link href="/tracks/amcd">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">ACD Track</h3>
                <p className="text-gray-600 mb-4">AI Code Development</p>
                <p className="text-sm text-gray-600 mb-4">For engineers, analysts, and developers building AI solutions. Master software development, integrations, and modernizations with AI-powered systems.</p>
                <Link href="/tracks/acd">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AIO Track</h3>
                <p className="text-gray-600 mb-4">AI Controlling & Oversight</p>
                <p className="text-sm text-gray-600 mb-4">For managers and compliance professionals. Master AI oversight for safe, sustainable transformation with four controller pillars.</p>
                <Link href="/tracks/aio">
                  <Button className="w-full">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ACD Track Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">ACD Track: AI Code Development</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl">
              The ACD (AI Code Development) Track focuses on building practical skills for designing and deploying AI-powered software solutions. For engineers, analysts, and developers, ACD equips you to master software development, integrations, and modernizations with AI-powered systems. The program is structured with three levels to mastery, ensuring graduates can build robust AI solutions that integrate seamlessly into enterprise environments.
            </p>
            <div className="bg-white rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Recognition:</h3>
              <p className="text-gray-700">
                Blockchain-verified ACD certificate of competency, shareable on LinkedIn/Accredited Experts Directory; EU AI Act-aligned for technical AI development; ECTS credits for career mobility.
              </p>
            </div>

            {/* ACD Levels */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">ACD Level 1: Foundation</h3>
                <p className="text-gray-700 mb-4">
                  Foundation level covering Python basics, AI fundamentals, and initial project work. Establishes core competencies in AI development governance and EU AI Act compliance fundamentals.
                </p>
                <div className="flex gap-6 text-sm text-gray-600 mb-4">
                  <span><strong>Level:</strong> QAP (Qualified AI Practitioner)</span>
                </div>
                <p className="text-gray-700 mb-2"><strong>What it means:</strong> You can build foundational AI-powered applications and understand basic AI development principles.</p>
                <p className="text-gray-700"><strong>How it's recognized:</strong> Digital badge noting foundational AI code development competency.</p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">ACD Level 2: Advanced</h3>
                <p className="text-gray-700 mb-4">
                  Intermediate level focusing on system integration, API development, and advanced projects. Builds on foundation to create scalable AI solutions.
                </p>
                <div className="flex gap-6 text-sm text-gray-600 mb-4">
                  <span><strong>Level:</strong> AAP (Advanced AI Practitioner)</span>
                </div>
                <p className="text-gray-700 mb-2"><strong>What it means:</strong> You can design and implement advanced AI systems with proper integration and architecture.</p>
                <p className="text-gray-700"><strong>How it's recognized:</strong> Digital badge highlighting advanced AI code development skills.</p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">ACD Level 3: Master</h3>
                <p className="text-gray-700 mb-4">
                  Advanced level with system architecture, enterprise solutions, and portfolio-ready projects. Capstone level demonstrating mastery of AI code development.
                </p>
                <div className="flex gap-6 text-sm text-gray-600 mb-4">
                  <span><strong>Level:</strong> MAP (Master AI Practitioner)</span>
                </div>
                <p className="text-gray-700 mb-2"><strong>What it means:</strong> You can architect, evaluate, and deploy enterprise-grade AI solutions with full understanding of compliance and best practices.</p>
                <p className="text-gray-700"><strong>How it's recognized:</strong> Premium ACD certificate of competency with portfolio-ready projects; Charterholder status</p>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/tracks/acd">
                <Button size="lg">Explore ACD Track</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* AIO Track Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">AIO Track: AI Oversight Certification</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl">
              The AIO Track focuses on governance, safety, and ethical oversight, aligning with Security/Privacy and Oversight directions. It's a standalone professional institute program, culminating in a certificate of competency tested through domain-specific audits and scenarios. ESG 2015 compliance is integrated (e.g., sustainable practices in Resource Management).
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Recognition:</h3>
              <p className="text-gray-700">
                Blockchain-verified badge, shareable for compliance portfolios; Act-compliant for high-risk AI; ECTS credits for professional development.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">AIO Core: Certified AI Oversight Professional</h3>
              <p className="text-gray-700 mb-4">
                This standalone certification covers 4 domains (Safety/Risk, Ethical Oversight, Legal Compliance, Corporate Digital & AI Transformation), tested through simulations and rubrics. It means gaining expert oversight competence for responsible AI use, recognized as an ESG 2015-compliant certificate of competency for compliance roles.
              </p>
              <div className="flex gap-6 text-sm text-gray-600 mb-4">
                <span><strong>Duration:</strong> 6 months, 12 ECTS (360 hours total)</span>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Domain Structure:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Domain 1: Safety/Risk</strong> - €1,800 (2.67 ECTS, 80 hours)</li>
                  <li><strong>Domain 2: Ethical Oversight</strong> - €1,800 (2.67 ECTS, 80 hours)</li>
                  <li><strong>Domain 3: Legal Compliance</strong> - €1,600 (2.67 ECTS, 80 hours)</li>
                  <li><strong>Domain 4: Corporate Digital & AI Transformation</strong> - €2,600 (4 ECTS, 120 hours)</li>
                </ul>
              </div>
              <p className="text-gray-700 mb-2"><strong>What it means:</strong> You're certified to implement risk governance, ethical controls, Act alignment, and lead comprehensive digital transformation in AI systems.</p>
              <p className="text-gray-700"><strong>How it's recognized:</strong> Digital badge with domain scores (e.g., "95% Transformation Leadership Proficiency"); trusted for regulatory audits and organizational change initiatives.</p>
            </div>

            <div className="mt-8">
              <Link href="/tracks/aio">
                <Button size="lg">Explore AIO Track</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Recognition & Compliance Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Recognition & Compliance</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                All COAD certifications are recognized as professional certificates of competency, issued by an institute dedicated to AI excellence. They are blockchain-verified for authenticity, shareable on LinkedIn, and convertible to ECTS credits for Bologna Process mobility.
              </p>
              <p>
                ESG 2015 compliance ensures sustainability (e.g., energy-efficient AI in Efficacy modules), social inclusion (e.g., ethical rights in AIO), and governance standards (e.g., transparent testing). Certifications are tested through assurance of learning rubrics (formative quizzes, capstone projects, 80% pass), guaranteeing verifiable competency.
              </p>
              <p>
                While not formal academic degrees, they are employer-recognized for Act compliance and career boost (e.g., 20-30% employability increase). For high-risk AI, they support Article 13 (oversight) and Article 15 (data governance) requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Competency Modules Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Competency Modules Overview</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl">
              Each standalone module is a self-contained unit with its own certificate of competency, tested via rubrics. They feed into tracks but can be taken independently. All ESG 2015 compliant and Act-aligned. See individual module pages for details.
            </p>
            <Link href="/modules">
              <Button size="lg">Browse All Modules</Button>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to advance your AI skills?</h2>
            <p className="text-xl text-white/90 mb-8">Explore our tracks and modules today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                  Start Free Preview
                </Button>
              </Link>
              <Link href="/corporate-training">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact for Corporate Training
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
