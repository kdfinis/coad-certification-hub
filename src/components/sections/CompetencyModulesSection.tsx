'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CompetencyModulesSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const aacModules = [
    { name: "Task Decomposition", description: "Learn to break complex goals into structured, executable tasks", hours: "60 hours", ects: "2 ECTS", slug: "task-decomposition" },
    { name: "Multi-Agent Systems", description: "Design and analyze systems where multiple agents coordinate", hours: "90 hours", ects: "3 ECTS", slug: "multi-agent-systems" },
    { name: "Performance Optimization", description: "Optimize Agentic AI systems for latency, quality, cost, and reliability", hours: "60 hours", ects: "2 ECTS", slug: "performance-optimization" },
    { name: "Human-AI Design", description: "Design human–agent interactions that are usable, trustworthy, and aligned", hours: "90 hours", ects: "3 ECTS", slug: "human-ai-design" },
    { name: "Restricted Methods", description: "Advanced techniques for specialized Agentic AI applications", hours: "120 hours", ects: "4 ECTS", slug: "restricted-methods" },
    { name: "Latest in AI 2025", description: "Cutting-edge developments and emerging trends in Agentic AI", hours: "90 hours", ects: "3 ECTS", slug: "latest-in-ai-2025" },
  ];

  const aioModules = [
    { name: "Ethical Data Use", description: "Master ethical frameworks for AI data governance", hours: "60 hours", ects: "2 ECTS", slug: "ethical-data-use" },
    { name: "Privacy Auditor", description: "Learn to audit and ensure privacy compliance in AI systems", hours: "80 hours", ects: "2.67 ECTS", slug: "privacy-auditor" },
    { name: "Legal Auditor", description: "Ensure legal compliance and regulatory alignment", hours: "80 hours", ects: "2.67 ECTS", slug: "legal-auditor" },
    { name: "Resource Management", description: "Optimize AI resource allocation and capacity planning", hours: "90 hours", ects: "3 ECTS", slug: "resource-management" },
    { name: "Process Optimization", description: "Streamline processes with AI-driven optimization", hours: "90 hours", ects: "3 ECTS", slug: "process-optimization" },
    { name: "Sustainability & AI", description: "Implement sustainable AI practices and ESG compliance", hours: "60 hours", ects: "2 ECTS", slug: "sustainability-ai" },
    { name: "Crisis Prevention", description: "Develop crisis prevention and risk mitigation strategies", hours: "90 hours", ects: "3 ECTS", slug: "crisis-prevention" },
    { name: "Financial Evaluations", description: "Evaluate AI investments and financial impact", hours: "90 hours", ects: "3 ECTS", slug: "financial-evaluations" },
    { name: "AI for Government", description: "AI governance and implementation for public sector", hours: "120 hours", ects: "4 ECTS", slug: "ai-for-government" },
    { name: "AI for Security", description: "Deploy AI in security operations with ethical oversight", hours: "120 hours", ects: "4 ECTS", slug: "ai-for-security" },
    { name: "Cybersecurity Auditing", description: "Conduct comprehensive cybersecurity assessments of AI systems", hours: "120 hours", ects: "4 ECTS", slug: "cybersecurity-auditing" },
    { name: "AML/KYC", description: "AI-enhanced Anti-Money Laundering and Know Your Customer compliance", hours: "120 hours", ects: "4 ECTS", slug: "aml-kyc" },
  ];

  const allModules = [...aacModules.map(m => ({ ...m, track: 'aac' })), ...aioModules.map(m => ({ ...m, track: 'aio' }))];

  const filteredModules = activeFilter === 'all' 
    ? allModules 
    : activeFilter === 'aac' 
    ? aacModules.map(m => ({ ...m, track: 'aac' }))
    : aioModules.map(m => ({ ...m, track: 'aio' }));

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
          Standalone Competency Modules
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Each standalone module is a self-contained unit with its own certificate of competency, tested via rubrics. They feed into tracks but can be taken independently. All ESG 2015 compliant and EU AI Act-aligned.
        </p>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeFilter === 'all'
                ? 'bg-primary-teal text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Modules
          </button>
          <button
            onClick={() => setActiveFilter('aac')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeFilter === 'aac'
                ? 'bg-primary-teal text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            ACD Modules
          </button>
          <button
            onClick={() => setActiveFilter('aio')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeFilter === 'aio'
                ? 'bg-primary-teal text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            AIO Modules
          </button>
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-4 text-center">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {module.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-center min-h-[40px]">
                {module.description}
              </p>
              <div className="flex justify-center gap-4 text-xs text-gray-500 mb-4">
                <span>{module.hours}</span>
                <span>•</span>
                <span>{module.ects}</span>
              </div>
              <Link href={`/modules/${module.track}/${module.slug}`} className="block">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
