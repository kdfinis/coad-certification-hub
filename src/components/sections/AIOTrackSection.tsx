'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AIOTrackSection() {
  const [activeTab, setActiveTab] = useState(1);

  const domains = [
    {
      id: 1,
      label: "Safety/Risk",
      description: "Master risk governance, security controls, and safety frameworks for AI systems.",
      competencies: ["Risk assessment", "Security controls", "Threat modeling", "Safety frameworks"],
      useCases: ["High-risk AI oversight", "Security audits", "Risk mitigation"],
      price: "€1,800",
      ects: "2.67 ECTS",
      hours: "80 hours",
    },
    {
      id: 2,
      label: "Ethical Oversight",
      description: "Learn to implement ethical controls, bias detection, and human rights protections.",
      competencies: ["Ethical frameworks", "Bias detection", "Human rights", "Fairness assessments"],
      useCases: ["Ethical audits", "Bias mitigation", "Human rights compliance"],
      price: "€1,800",
      ects: "2.67 ECTS",
      hours: "80 hours",
    },
    {
      id: 3,
      label: "Legal Compliance",
      description: "Ensure EU AI Act compliance, data governance, and regulatory alignment.",
      competencies: ["EU AI Act compliance", "Data governance", "Regulatory frameworks", "Article 13 & 15"],
      useCases: ["Compliance audits", "Regulatory alignment", "Data governance"],
      price: "€1,600",
      ects: "2.67 ECTS",
      hours: "80 hours",
    },
    {
      id: 4,
      label: "Corporate Digital & AI Transformation",
      description: "Lead comprehensive digital transformation initiatives with AI integration.",
      competencies: ["Digital transformation", "Organizational change", "AI integration", "Strategic planning"],
      useCases: ["Digital transformation", "Organizational change", "AI strategy"],
      price: "€2,600",
      ects: "4 ECTS",
      hours: "120 hours",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AIO Track: AI Oversight Certification
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The AIO Track focuses on governance, safety, and ethical oversight, aligning with Security/Privacy and Oversight directions. It's a standalone professional institute program, culminating in a certificate of competency tested through domain-specific audits and scenarios. ESG 2015 compliance is integrated throughout.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Blockchain-verified badge, shareable for compliance portfolios</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">EU AI Act-compliant for high-risk AI</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">ECTS credits for professional development</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Post-nominal: Certified AI Oversight Professional</span>
              </li>
            </ul>

            <Link href="/tracks/aio">
              <Button size="lg">Explore AIO Track</Button>
            </Link>

            {/* Domain Tabs */}
            <div className="mt-8 border-b border-gray-200">
              <div className="flex flex-wrap gap-1">
                {domains.map((domain) => (
                  <button
                    key={domain.id}
                    onClick={() => setActiveTab(domain.id)}
                    className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === domain.id
                        ? 'border-primary-teal text-primary-teal'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {domain.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {domains.map((domain) => (
              activeTab === domain.id && (
                <div key={domain.id} className="mt-6 space-y-4 animate-fade-in">
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>{domain.hours}</span>
                    <span>•</span>
                    <span>{domain.ects}</span>
                    <span>•</span>
                    <span className="font-semibold text-gray-900">{domain.price}</span>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-4">{domain.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Competencies:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {domain.competencies.map((comp, idx) => (
                        <li key={idx}>{comp}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {domain.useCases.map((useCase, idx) => (
                        <li key={idx}>{useCase}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-navy/10 to-primary-teal/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🛡️</div>
                <p className="text-gray-600 font-medium">AI Oversight & Governance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
