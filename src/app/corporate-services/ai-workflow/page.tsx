import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'AI Workflow Redesign - Process Optimization Consulting | COAD',
  description: 'Process optimization consulting for AI workflows. Redesign your processes with AI-powered optimization.',
};

export default function AIWorkflowRedesignPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-navy to-primary-teal text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
              AI Workflow Redesign
              <br />
              Process Optimization Consulting
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              Optimize your business processes with AI-powered workflow redesign. Our expert alliance helps you streamline operations, reduce costs, and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://app.coad.ai/contact?service=ai-workflow" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                  Request Workflow Redesign
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
              Our AI Workflow Redesign service provides process optimization consulting to help you redesign business processes with AI-powered solutions. We analyze your current workflows, identify optimization opportunities, and implement AI-enhanced processes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our expert alliance combines technology expertise with business process knowledge to deliver workflow improvements that reduce costs, increase efficiency, and ensure compliance with EU AI Act requirements.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Workflow Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive analysis of your current business processes to identify bottlenecks, inefficiencies, and optimization opportunities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Process mapping and documentation</li>
                  <li>• Bottleneck identification</li>
                  <li>• Efficiency analysis</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">AI Integration Design</h3>
                <p className="text-gray-600 mb-4">
                  Design AI-powered workflows that integrate seamlessly with your existing processes and systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• AI tool selection</li>
                  <li>• Integration architecture</li>
                  <li>• Implementation planning</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Process Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Redesign processes to reduce costs, improve speed, and enhance quality through AI automation and optimization.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Automation opportunities</li>
                  <li>• Cost reduction strategies</li>
                  <li>• Quality improvements</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Compliance Integration</h3>
                <p className="text-gray-600 mb-4">
                  Ensure redesigned workflows meet EU AI Act requirements and governance standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Act compliance checks</li>
                  <li>• Governance framework integration</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">Cost Reduction</h3>
                <p className="text-gray-600">Reduce operational costs through optimized, AI-enhanced workflows</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">Efficiency Gains</h3>
                <p className="text-gray-600">Improve speed and quality through process optimization</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">Compliance Assurance</h3>
                <p className="text-gray-600">Ensure workflows meet EU AI Act and governance requirements</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Workflows?</h2>
            <p className="text-xl text-white/90 mb-8">Let our expert alliance redesign your processes with AI.</p>
            <a href="https://app.coad.ai/contact?service=ai-workflow" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="bg-white text-primary-navy hover:bg-gray-100">
                Request Workflow Redesign
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
