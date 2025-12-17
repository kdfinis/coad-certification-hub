import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  NeuralBrainIcon,
  NetworkNodesIcon,
  ShieldNodeIcon,
  CircuitLayersIcon,
  DataFlowIcon,
  CredentialIcon,
  GraduationNodeIcon,
  CheckNodeIcon,
  ClockNodeIcon,
  AwardNodeIcon,
  CodeNodeIcon,
  BalanceScaleIcon,
  RiskAlertIcon,
  LightbulbNodeIcon,
  OversightEyeIcon
} from '@/components/ui/custom-icons';

const Certifications = () => {
  const [activeTrack, setActiveTrack] = useState('adc');

  const adcLevels = [
    {
      level: "Professional",
      title: "ADC Professional",
      duration: "8-12 weeks",
      description: "Foundation-level certification establishing core competencies in AI development governance and EU AI Act compliance fundamentals.",
      modules: [
        "EU AI Act Framework Overview",
        "AI Risk Classification Systems",
        "Compliance Documentation Essentials",
        "Data Governance Fundamentals"
      ],
      outcomes: [
        "Understand EU AI Act requirements",
        "Classify AI systems by risk level",
        "Create basic compliance documentation",
        "Apply data governance principles"
      ],
      price: "€1,200"
    },
    {
      level: "Advanced Expert",
      title: "ADC Advanced Expert",
      duration: "12-16 weeks",
      description: "Mid-tier certification for professionals leading AI compliance initiatives within their organisations.",
      modules: [
        "Advanced Risk Assessment Methodologies",
        "Technical Documentation Standards",
        "Conformity Assessment Procedures",
        "Cross-functional Team Leadership"
      ],
      outcomes: [
        "Lead compliance assessments",
        "Develop comprehensive documentation",
        "Coordinate conformity procedures",
        "Manage cross-functional AI teams"
      ],
      price: "€2,400"
    },
    {
      level: "Master",
      title: "ADC Master Charterholder",
      duration: "16-20 weeks",
      description: "The pinnacle of AI development compliance expertise. Masters are recognised authorities in EU AI governance.",
      modules: [
        "Strategic AI Governance Design",
        "Regulatory Advisory & Interpretation",
        "Enterprise Compliance Architecture",
        "Continuous Monitoring Systems"
      ],
      outcomes: [
        "Design enterprise governance frameworks",
        "Provide regulatory advisory services",
        "Architect compliance systems at scale",
        "Implement continuous monitoring"
      ],
      price: "€4,800",
      featured: true
    }
  ];

  const acosLevels = [
    {
      level: "Professional",
      title: "ACOS Professional",
      duration: "8-12 weeks",
      description: "Entry-level certification for professionals overseeing AI system deployment and operational compliance.",
      modules: [
        "AI Operations Fundamentals",
        "Oversight Frameworks & Controls",
        "Incident Response Basics",
        "Stakeholder Communication"
      ],
      outcomes: [
        "Implement basic oversight controls",
        "Monitor AI system performance",
        "Handle routine compliance issues",
        "Report to stakeholders effectively"
      ],
      price: "€1,200"
    },
    {
      level: "Advanced Expert",
      title: "ACOS Advanced Expert",
      duration: "12-16 weeks",
      description: "For professionals managing comprehensive AI oversight programmes across multiple systems or departments.",
      modules: [
        "Advanced Monitoring & Auditing",
        "Risk Mitigation Strategies",
        "Regulatory Reporting Excellence",
        "Third-party AI Vendor Management"
      ],
      outcomes: [
        "Design monitoring programmes",
        "Develop risk mitigation plans",
        "Prepare regulatory submissions",
        "Assess third-party AI vendors"
      ],
      price: "€2,400"
    },
    {
      level: "Master",
      title: "ACOS Master Charterholder",
      duration: "16-20 weeks",
      description: "The highest recognition for AI oversight specialists. Masters shape organisational AI strategy and governance.",
      modules: [
        "Enterprise AI Governance Strategy",
        "Board-level Advisory & Reporting",
        "Multi-jurisdictional Compliance",
        "AI Ethics & Responsible AI Leadership"
      ],
      outcomes: [
        "Advise executive leadership",
        "Navigate multi-jurisdictional requirements",
        "Lead responsible AI initiatives",
        "Shape organisational AI strategy"
      ],
      price: "€4,800",
      featured: true
    }
  ];

  const controllerPillars = [
    {
      icon: OversightEyeIcon,
      title: "Human Oversight",
      description: "Ensuring meaningful human control over AI decision-making processes"
    },
    {
      icon: ShieldNodeIcon,
      title: "Technical Robustness",
      description: "Building secure, reliable, and resilient AI systems"
    },
    {
      icon: DataFlowIcon,
      title: "Data Governance",
      description: "Managing data quality, privacy, and regulatory compliance"
    },
    {
      icon: BalanceScaleIcon,
      title: "Accountability",
      description: "Establishing clear responsibility and audit trails"
    }
  ];

  const charterholderBenefits = [
    {
      icon: AwardNodeIcon,
      title: "Charterholder Status",
      description: "Distinguished credential recognised across the EU"
    },
    {
      icon: NetworkNodesIcon,
      title: "Expert Directory Listing",
      description: "Priority placement in the COAD Expert Directory"
    },
    {
      icon: GraduationNodeIcon,
      title: "Lifetime Learning Access",
      description: "Continuous access to updated content and materials"
    },
    {
      icon: CredentialIcon,
      title: "Digital Credentials",
      description: "Verifiable badges for LinkedIn and professional profiles"
    }
  ];

  const renderLevelCard = (level: typeof adcLevels[0], index: number) => (
    <div 
      key={index}
      className={`relative bg-card rounded-2xl border ${level.featured ? 'border-primary shadow-glow' : 'border-border'} overflow-hidden card-hover`}
    >
      {level.featured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-teal" />
      )}
      
      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
              level.featured 
                ? 'bg-primary/20 text-primary' 
                : 'bg-muted text-muted-foreground'
            }`}>
              {level.level}
            </span>
            <h3 className="heading-4">{level.title}</h3>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold gradient-text">{level.price}</div>
            <div className="text-sm text-muted-foreground">one-time</div>
          </div>
        </div>

        <p className="body-small text-muted-foreground mb-6">{level.description}</p>

        {/* Duration */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <ClockNodeIcon className="w-4 h-4" />
          <span>{level.duration}</span>
        </div>

        {/* Modules */}
        <div className="mb-6">
          <h4 className="font-semibold text-sm mb-3">Core Modules</h4>
          <ul className="space-y-2">
            {level.modules.map((module, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CircuitLayersIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{module}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Outcomes */}
        <div className="mb-8">
          <h4 className="font-semibold text-sm mb-3">Learning Outcomes</h4>
          <ul className="space-y-2">
            {level.outcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Button 
          variant={level.featured ? "hero" : "outline"} 
          size="lg" 
          className="w-full"
          asChild
        >
          <Link to="/auth">
            {level.featured ? 'Start Master Programme' : 'Enroll Now'}
          </Link>
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>AI Governance Certifications | ADC & ACOS Tracks | COAD</title>
        <meta name="description" content="Explore COAD's AI governance certification programmes. ADC Track for AI development compliance, ACOS Track for AI oversight specialists. Professional, Advanced Expert, and Master Charterholder levels." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-navy text-primary-foreground py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal rounded-full blur-3xl" />
          </div>
          
          <div className="container-coad relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-8">
                <CredentialIcon className="w-5 h-5" />
                <span className="text-sm font-medium">EU AI Act Aligned Certifications</span>
              </div>
              
              <h1 className="heading-1 mb-6">
                Build Your <span className="gradient-text">AI Governance</span> Expertise
              </h1>
              
              <p className="body-large text-gray-300 max-w-2xl mx-auto">
                Two specialised tracks, three progression levels, one goal: preparing you to lead 
                AI compliance and governance in the EU regulatory landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Controller Pillars */}
        <section className="section-padding-sm bg-muted/50">
          <div className="container-coad">
            <div className="text-center mb-12">
              <h2 className="heading-3 mb-3">The Four Controller Pillars</h2>
              <p className="body text-muted-foreground max-w-2xl mx-auto">
                All COAD certifications are built on these foundational pillars of AI governance.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {controllerPillars.map((pillar, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border text-center card-hover">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-teal/20 flex items-center justify-center mb-4">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Tracks */}
        <section className="section-padding bg-background">
          <div className="container-coad">
            <Tabs defaultValue="adc" className="w-full" onValueChange={setActiveTrack}>
              <div className="text-center mb-12">
                <h2 className="heading-2 mb-6">Choose Your Track</h2>
                <TabsList className="inline-flex h-14 p-1.5 bg-muted rounded-xl">
                  <TabsTrigger 
                    value="adc" 
                    className="px-8 py-3 rounded-lg font-medium data-[state=active]:bg-background data-[state=active]:shadow-md transition-all"
                  >
                    <CodeNodeIcon className="w-5 h-5 mr-2" />
                    ADC Track
                  </TabsTrigger>
                  <TabsTrigger 
                    value="acos" 
                    className="px-8 py-3 rounded-lg font-medium data-[state=active]:bg-background data-[state=active]:shadow-md transition-all"
                  >
                    <OversightEyeIcon className="w-5 h-5 mr-2" />
                    ACOS Track
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="adc" className="mt-0">
                <div className="text-center mb-12">
                  <h3 className="heading-3 mb-3">AI Development Compliance Track</h3>
                  <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                    For developers, architects, and technical leads building compliant AI systems under the EU AI Act.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {adcLevels.map((level, index) => renderLevelCard(level, index))}
                </div>
              </TabsContent>

              <TabsContent value="acos" className="mt-0">
                <div className="text-center mb-12">
                  <h3 className="heading-3 mb-3">AI Compliance & Oversight Specialist Track</h3>
                  <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                    For compliance officers, auditors, and governance professionals overseeing AI operations.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {acosLevels.map((level, index) => renderLevelCard(level, index))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Charterholder Benefits */}
        <section className="section-padding bg-navy text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="container-coad relative z-10">
            <div className="text-center mb-12">
              <AwardNodeIcon className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="heading-2 mb-4">Charterholder Benefits</h2>
              <p className="body-large text-gray-300 max-w-2xl mx-auto">
                Achieving Master Charterholder status unlocks exclusive benefits and recognition.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {charterholderBenefits.map((benefit, index) => (
                <div key={index} className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20 text-center">
                  <div className="w-12 h-12 mx-auto rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="section-padding bg-muted/50">
          <div className="container-coad">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-3 mb-4">Have Questions?</h2>
              <p className="body text-muted-foreground mb-8">
                Our team is ready to help you choose the right certification path for your career goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/auth">Start Free Trial</Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="mailto:contact@coad.ai">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Certifications;