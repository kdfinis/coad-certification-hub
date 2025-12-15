import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Shield, Clock, AlertTriangle, Scale, FileCheck, Building2, Leaf, Users, Award, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const AIOTrackSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const domains = [
    {
      id: 'transformation',
      label: 'Digital & AI Transformation',
      icon: Building2,
      price: '€2,880',
      hours: '150 hours',
      description: 'Lead corporate digital transformation initiatives with AI-first strategies and organizational change management',
      competencies: ['Change management', 'AI adoption strategy', 'Process redesign', 'Stakeholder alignment', 'Digital roadmaps'],
      useCases: ['Digital strategy', 'AI transformation roadmaps', 'Organizational change', 'Executive advisory'],
    },
    {
      id: 'safety',
      label: 'Safety/Risk',
      icon: AlertTriangle,
      price: '€1,640',
      hours: '90 hours',
      description: 'Master risk assessment and safety protocols for AI systems in high-risk environments',
      competencies: ['Risk identification', 'Impact assessment', 'Mitigation strategies', 'Monitoring frameworks'],
      useCases: ['High-risk AI deployment', 'Safety audits', 'Compliance reviews'],
    },
    {
      id: 'ethical',
      label: 'Ethical Oversight',
      icon: Scale,
      price: '€1,640',
      hours: '90 hours',
      description: 'Ensure ethical AI practices, bias prevention, and human rights protection',
      competencies: ['Bias detection', 'Fairness metrics', 'Ethical frameworks', 'Stakeholder impact'],
      useCases: ['AI ethics boards', 'Fairness audits', 'Policy development'],
    },
    {
      id: 'legal',
      label: 'Legal Compliance',
      icon: FileCheck,
      price: '€1,640',
      hours: '90 hours',
      description: 'Navigate EU AI Act requirements and regulatory frameworks with confidence',
      competencies: ['EU AI Act', 'GDPR compliance', 'Documentation', 'Audit trails'],
      useCases: ['Regulatory compliance', 'Legal reviews', 'Documentation'],
    },
  ];

  const usps = [
    {
      icon: Shield,
      title: 'EU AI Act Leadership',
      description: "Solidify your position with Act-aligned oversight skills, focusing on security, privacy, and sustainability – essential for managers in finance/tech sectors.",
    },
    {
      icon: AlertTriangle,
      title: 'Safety-Minded Professional Edge',
      description: "Tailored for experienced managers to master crisis prevention and ethical AI, ensuring safe digital transformations in high-risk environments.",
    },
    {
      icon: Leaf,
      title: 'Sustainability & Efficiency Tools',
      description: "Learn green AI practices and resource management, adding ESG excellence for eco-conscious corporates.",
    },
    {
      icon: Users,
      title: 'Oversight for Career Solidification',
      description: "Strengthen your role as a compliance leader with certificates that validate expertise – 85% graduates report enhanced leadership positions.",
    },
    {
      icon: Award,
      title: 'Practical Audits & Simulations',
      description: "Hands-on tools for real-world oversight, helping safety-minded pros protect organizations from AI risks while driving transformation.",
    },
  ];

  return (
    <section className="section-padding bg-muted/50" id="aio-track">
      <div className="container-coad">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full text-sm font-medium text-teal mb-6">
            <Shield className="w-4 h-4" />
            Governance & Oversight Program
          </div>
          
          <h2 className="heading-2 text-foreground mb-6">
            Solidify Your Leadership with AIO:<br />
            <span className="gradient-text">Master AI Oversight for Safe Transformation</span>
          </h2>
          
          <p className="body-large text-muted-foreground">
            Tailored for safety-focused managers and professionals, the AIO Track empowers you to oversee AI with confidence, ensuring security, compliance, and efficiency in your organization. Strengthen your position today.
          </p>
        </div>

        {/* Who It's For */}
        <div className="bg-card rounded-3xl p-8 md:p-12 mb-16 border border-border">
          <h3 className="heading-4 text-foreground mb-6 text-center">Who is AIO for?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-muted/30 rounded-xl p-6">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-teal" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Compliance Officers</h4>
              <p className="text-sm text-muted-foreground">Looking to enhance your role with Act-aligned expertise</p>
            </div>
            <div className="bg-muted/30 rounded-xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Experienced Managers</h4>
              <p className="text-sm text-muted-foreground">Seeking to introduce AI responsibly into organizations</p>
            </div>
            <div className="bg-muted/30 rounded-xl p-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Risk Professionals</h4>
              <p className="text-sm text-muted-foreground">Wanting to protect teams from AI risks while enabling innovation</p>
            </div>
            <div className="bg-muted/30 rounded-xl p-6">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Executives</h4>
              <p className="text-sm text-muted-foreground">Aiming to lead with confidence in AI-driven environments</p>
            </div>
          </div>
        </div>

        {/* USPs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {usps.map((usp, index) => (
            <div 
              key={usp.title}
              className="p-6 bg-card rounded-2xl border border-border hover:border-teal/40 hover:shadow-lg transition-all duration-300"
            >
              <div className={cn(
                'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
                index % 2 === 0 ? 'bg-teal/10' : 'bg-primary/10'
              )}>
                <usp.icon className={cn(
                  'w-6 h-6',
                  index % 2 === 0 ? 'text-teal' : 'text-primary'
                )} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{usp.title}</h4>
              <p className="text-sm text-muted-foreground">{usp.description}</p>
            </div>
          ))}
        </div>

        {/* Program Details */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h3 className="heading-3 text-foreground">
              Four Domains of Expertise
            </h3>

            <p className="text-muted-foreground">
              The AIO Track focuses on governance, safety, and ethical oversight, aligning with Security/Privacy and Oversight directions. Tested through domain-specific audits and real-world scenarios with 80% pass required.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3">
              {[
                'Blockchain-verified badge, shareable for compliance portfolios',
                'EU AI Act-compliant for high-risk AI systems',
                'Post-nominal: Certified AI Oversight Professional (AIO)',
                'Digital transformation leadership skills',
              ].map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-teal" />
                  </div>
                  <span className="text-foreground">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Duration Info */}
            <div className="p-4 bg-card rounded-xl border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-teal" />
                <span className="text-foreground font-medium">6 months • 400 hours total</span>
              </div>
              <div className="space-y-2 text-sm">
                {domains.map((domain) => (
                  <div key={domain.id} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{domain.label}</span>
                    <span className="font-semibold text-foreground">{domain.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://app.coad.ai/signup" className="group">
                  Enroll in AIO Core – Solidify Your Leadership
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
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

        {/* Testimonial */}
        <div className="bg-gradient-to-br from-teal/5 to-primary/5 rounded-3xl p-8 md:p-12">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <Quote className="w-12 h-12 text-teal/30 shrink-0" />
            <div>
              <p className="text-lg md:text-xl text-foreground italic mb-4">
                "As a compliance manager, AIO gave me the confidence to lead our AI transformation safely – it's solidified my position and our organization's Act readiness."
              </p>
              <p className="text-muted-foreground font-medium">
                — Thomas B., Risk Officer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIOTrackSection;