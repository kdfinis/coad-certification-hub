import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'AAC Track: Agentic AI Competency | COAD',
  description: 'Master Agentic AI with AAC: From User to Autonomous Systems Architect. Designed for STEM professionals, data and AI practitioners, and technical leaders.',
};

export default function AACTrackPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-navy to-primary-teal text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Master Agentic AI with AAC: From User to Autonomous Systems Architect
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Designed for STEM professionals, data and AI practitioners, and technical leaders, the AAC Track equips you to design and deploy autonomous, goal-driven AI agents that plan, reason, and act in complex environments. Structured for working professionals with guided projects, live sessions, and ethical guardrails built in.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://app.coad.ai/signup?track=aac" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                    Enroll in AAC Now – Start Building Agentic AI Systems
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
                The AAC (Agentic AI Competency) Track is designed for ambitious professionals who want to move beyond simple automation and learn how to design, build, and oversee autonomous, goal-driven AI agents. It is ideal for STEM and tech-adjacent experts—engineers, analysts, scientists, consultants, product managers, and data/AI professionals—who want to upgrade from "using AI tools" to architecting intelligent systems that can perceive, reason, plan, and act with minimal supervision.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Across the program, you will learn how to combine large language models (LLMs), prompt engineering, planning and reasoning paradigms (such as Chain-of-Thought and ReAct), multi-agent coordination, and reinforcement learning into robust, real-world systems. You will work through a sequence of hands-on projects—from smart workflow agents and automated research systems to advanced support and decision agents—that result in a portfolio of demonstrable Agentic AI solutions. Ethical, safe, and responsible deployment is embedded throughout, so you graduate ready to build systems that are both powerful and trustworthy.
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">From Prompting to True Agency</h3>
                <p className="text-gray-600">
                  Move beyond simple prompt engineering to architect agents that can perceive, reason, plan, and act across tools, data sources, and workflows—turning AI from a helper into an autonomous collaborator.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Acceleration in Agentic AI</h3>
                <p className="text-gray-600">
                  Position yourself at the frontier of AI by mastering Agentic AI concepts and systems, opening doors to high-impact roles in AI engineering, automation, research, operations, and product leadership.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Structured for Working Professionals</h3>
                <p className="text-gray-600">
                  16-week, part-time program with weekly time commitments designed around full-time work—combining recorded content, live sessions, and mentored project work so you can advance without pausing your career.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hands-On, Project-Centric Learning</h3>
                <p className="text-gray-600">
                  Work on concrete Agentic AI projects—data processing agents, research agents, multi-agent systems, and customer support agents—that demonstrate your skills and can be showcased in an e-portfolio.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Verified, Compliance-Oriented Competency</h3>
                <p className="text-gray-600">
                  Earn blockchain-verified certificates of competency that highlight your Agentic AI skills, aligned with EU AI Act expectations for oversight, safety, and data governance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* USPs Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose AAC Track
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Agentic AI System Design Mastery</h3>
                <p className="text-gray-600">
                  Learn to design and build autonomous, goal-driven AI agents that can plan, reason, and act across real-world workflows—moving beyond simple prompts and single-tool scripts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. End-to-End Agent Lifecycle</h3>
                <p className="text-gray-600">
                  Cover the full arc: foundations and prompts, agent architectures, planning and reasoning, multi-agent coordination, reinforcement learning, and human-agent interaction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Project-Based, Portfolio-Ready Outcomes</h3>
                <p className="text-gray-600">
                  Graduate with multiple completed Agentic AI projects—such as data-processing agents, research agents, and support agents—that you can show to employers and clients.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Compliance and Ethics Built In</h3>
                <p className="text-gray-600">
                  Integrate responsible AI principles, risk assessment, oversight, and data governance into every phase, aligning your agent designs with EU AI Act expectations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">5. Blockchain-Verified Agentic AI Credential</h3>
                <p className="text-gray-600">
                  Earn a blockchain-verified AAC certificate of competency that highlights your Agentic AI skills and can be shared on LinkedIn, CVs, and compliance portfolios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Agentic AI Systems?</h2>
            <p className="text-xl text-white/90 mb-8">Start your AAC journey today.</p>
            <a href="https://app.coad.ai/signup?track=aac" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                Enroll in AAC Track
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
