'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ShieldNodeIcon, CheckNodeIcon, ClockNodeIcon, AwardNodeIcon, GraduationNodeIcon } from '@/components/ui/custom-icons';
import { ArrowRight, Calendar, Briefcase } from 'lucide-react';

export default function AIForSecurityPage() {
  const weeklyBreakdown = [
    { week: 1, title: "Masterclass – AI in Security Operations", hours: 30, description: "Expert session on AI applications in security and defense contexts.", activities: ["Threat detection AI", "Surveillance and monitoring", "Access control systems", "EU AI Act security provisions"] },
    { week: 2, title: "Hands-On Labs – Security AI Implementation", hours: 30, description: "Practical exercises with security-focused AI systems.", activities: ["Anomaly detection systems", "Behavioral analysis tools", "Automated response systems", "Integration with SOC workflows"] },
    { week: 3, title: "Mentored Sessions – Ethics & Oversight", hours: 30, description: "Expert guidance on ethical considerations in security AI.", activities: ["Proportionality assessments", "Human rights considerations", "ESG in security AI", "Oversight mechanisms"] },
    { week: 4, title: "Mini-Capstone – Security AI Framework", hours: 30, description: "Develop a comprehensive security AI deployment framework.", activities: ["Complete framework document", "Ethical guidelines", "Oversight procedures", "Blockchain certificate issuance"] }
  ];

  const realWorldUseCases = [
    { industry: "Cybersecurity", scenario: "Deploying AI for threat detection and automated incident response in SOC environments." },
    { industry: "Physical Security", scenario: "Implementing AI-powered surveillance with privacy protections and human oversight." },
    { industry: "Border Control", scenario: "Balancing AI efficiency in border security with fundamental rights protections." },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">AI for Security</h1>
            <p className="text-lg text-gray-600">
              Master AI applications in security operations with ethical oversight and compliance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            {weeklyBreakdown.map((week) => (
              <div key={week.week} className="border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Week {week.week}</h3>
                  <ClockNodeIcon className="w-6 h-6 text-gray-400" />
                </div>
                <h4 className="font-medium mb-2">{week.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{week.description}</p>
                <div className="space-y-2">
                  {week.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckNodeIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{activity}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <ClockNodeIcon className="w-4 h-4 mr-1" />
                  {week.hours} hours
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Real-World Use Cases</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {realWorldUseCases.map((useCase, idx) => (
                <div key={idx} className="border rounded-lg p-6">
                  <h3 className="font-semibold mb-2">{useCase.industry}</h3>
                  <p className="text-sm text-gray-600">{useCase.scenario}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/enroll">
              <Button size="lg">Enroll Now</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
