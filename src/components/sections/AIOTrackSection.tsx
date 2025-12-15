import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Shield, Clock, GraduationCap, AlertTriangle, Scale, FileCheck, Siren } from 'lucide-react';
import { cn } from '@/lib/utils';

const AIOTrackSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const domains = [
    {
      id: 'safety',
      label: 'Safety/Risk',
      icon: AlertTriangle,
      description: 'Master risk assessment and safety protocols for AI systems',
      competencies: ['Risk identification', 'Impact assessment', 'Mitigation strategies', 'Monitoring frameworks'],
      useCases: ['High-risk AI deployment', 'Safety audits', 'Compliance reviews'],
    },
    {
      id: 'ethical',
      label: 'Ethical Oversight',
      icon: Scale,
      description: 'Ensure ethical AI practices and bias prevention',
      competencies: ['Bias detection', 'Fairness metrics', 'Ethical frameworks', 'Stakeholder impact'],
      useCases: ['AI ethics boards', 'Fairness audits', 'Policy development'],
    },
    {
      id: 'legal',
      label: 'Legal Compliance',
      icon: FileCheck,
      description: 'Navigate regulatory requirements and legal frameworks',
      competencies: ['EU AI Act', 'GDPR compliance', 'Documentation', 'Audit trails'],
      useCases: ['Regulatory compliance', 'Legal reviews', 'Documentation'],
    },
    {
      id: 'crisis',
      label: 'Crisis Response',
      icon: Siren,
      description: 'Develop crisis management and incident response capabilities',
      competencies: ['Incident detection', 'Response protocols', 'Communication', 'Recovery planning'],
      useCases: ['Incident management', 'Crisis communication', 'Recovery'],
    },
  ];

  const bullets = [
    'Blockchain-verified badge, shareable for compliance portfolios',
    'EU AI Act-compliant for high-risk AI',
    'ECTS credits for professional development',
    'Post-nominal: Certified AI Oversight Professional (AIO)',
  ];

  return (
    <section className="section-padding bg-muted/50" id="aio-track">
      <div className="container-coad">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full text-sm font-medium text-teal">
              <Shield className="w-4 h-4" />
              Governance & Oversight Program
            </div>

            {/* Heading */}
            <h2 className="heading-2 text-foreground">
              AIO Track: AI Oversight<br />
              <span className="gradient-text">Certification</span>
            </h2>

            {/* Description */}
            <p className="body-large text-muted-foreground">
              The AIO Track focuses on governance, safety, and ethical oversight, aligning with Security/Privacy and Oversight directions. It's a standalone professional institute program, culminating in a certificate of competency tested through domain-specific audits and scenarios.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-teal" />
                  </div>
                  <span className="text-foreground">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Duration Info */}
            <div className="flex flex-wrap gap-4 p-4 bg-card rounded-xl border border-border">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-teal" />
                <span className="text-foreground font-medium">6 months total</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-teal" />
                <span className="text-foreground font-medium">12 ECTS (360 hours)</span>
              </div>
            </div>

            {/* CTA */}
            <Button variant="hero" size="lg" asChild>
              <a href="#pricing" className="group">
                Explore AIO Track
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Right Column - Domain Tabs */}
          <div className="relative lg:sticky lg:top-32">
            {/* Tab Headers */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {domains.map((domain, index) => (
                <button
                  key={domain.id}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    'p-4 rounded-xl text-left transition-all duration-300 border-2',
                    activeTab === index
                      ? 'bg-card border-teal shadow-md'
                      : 'bg-card/50 border-transparent hover:border-teal/30'
                  )}
                >
                  <div className={cn(
                    'w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors',
                    activeTab === index ? 'bg-teal/10' : 'bg-muted'
                  )}>
                    <domain.icon className={cn(
                      'w-5 h-5 transition-colors',
                      activeTab === index ? 'text-teal' : 'text-muted-foreground'
                    )} />
                  </div>
                  <p className={cn(
                    'font-medium transition-colors',
                    activeTab === index ? 'text-foreground' : 'text-muted-foreground'
                  )}>
                    {domain.label}
                  </p>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-card rounded-xl border border-border p-6">
              {domains.map((domain, index) => (
                <div
                  key={domain.id}
                  className={cn(
                    'transition-all duration-300',
                    activeTab === index ? 'opacity-100 visible' : 'opacity-0 hidden'
                  )}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                        <domain.icon className="w-6 h-6 text-teal" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{domain.label}</h4>
                        <p className="text-sm text-muted-foreground">Domain Specialization</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground">{domain.description}</p>

                    <div>
                      <p className="text-sm font-medium text-foreground mb-3">Key Competencies:</p>
                      <div className="flex flex-wrap gap-2">
                        {domain.competencies.map((comp) => (
                          <span
                            key={comp}
                            className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-foreground mb-3">Use Cases:</p>
                      <ul className="space-y-2">
                        {domain.useCases.map((useCase) => (
                          <li key={useCase} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal/20 to-primary/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIOTrackSection;
