'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function EUAIActSection() {
  const features = [
    {
      icon: "👁️",
      title: "Human Oversight Training",
      description: "Learn to implement effective human oversight mechanisms for AI systems",
      article: "Article 13",
    },
    {
      icon: "🛡️",
      title: "Data Governance Standards",
      description: "Master data governance requirements for AI system compliance",
      article: "Article 15",
    },
    {
      icon: "📄",
      title: "Transparency & Disclosure",
      description: "Understand transparency obligations and disclosure requirements",
      article: "Transparency",
    },
    {
      icon: "⚠️",
      title: "Risk Assessment Methods",
      description: "Learn systematic risk assessment approaches for AI systems",
      article: "Risk Management",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
          EU AI Act Compliant Certifications
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          All COAD certifications are structured to meet the demands of the EU AI Act, ensuring compliance with high-risk system requirements such as human oversight (Article 13) and data governance (Article 15). Our programs directly satisfy Act obligations, positioning COAD as an essential compliance partner.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <div className="text-xs text-primary-teal font-medium mb-2">{feature.article}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/compliance">
            <Button size="lg">Learn About Compliance</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
