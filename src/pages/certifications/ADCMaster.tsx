import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  CodeNodeIcon,
  CheckNodeIcon,
  ClockNodeIcon,
  CircuitLayersIcon,
  ShieldNodeIcon,
  DataFlowIcon,
  GraduationNodeIcon,
  CredentialIcon,
  NetworkNodesIcon,
  NeuralBrainIcon,
  AwardNodeIcon,
  BalanceScaleIcon,
  OversightEyeIcon,
  RiskAlertIcon,
  GlobeNodeIcon
} from '@/components/ui/custom-icons';

const ADCMaster = () => {
  const modules = [
    {
      number: "01",
      title: "Strategic AI Governance Design",
      duration: "4 weeks",
      topics: [
        "Enterprise AI governance frameworks",
        "Governance operating models",
        "Policy and procedure development",
        "Board and executive engagement strategies",
        "Governance maturity assessments",
        "Long-term governance roadmapping"
      ]
    },
    {
      number: "02",
      title: "Regulatory Advisory & Interpretation",
      duration: "4 weeks",
      topics: [
        "Advanced EU AI Act interpretation",
        "Regulatory guidance analysis",
        "Precedent review and application",
        "Engagement with regulatory authorities",
        "Multi-regulation harmonisation (GDPR, DSA, DMA)",
        "Regulatory change management"
      ]
    },
    {
      number: "03",
      title: "Enterprise Compliance Architecture",
      duration: "4 weeks",
      topics: [
        "Scalable compliance frameworks",
        "Technology-enabled compliance solutions",
        "Integration with enterprise systems (GRC, ERM)",
        "Compliance automation strategies",
        "Supply chain AI governance",
        "M&A compliance due diligence"
      ]
    },
    {
      number: "04",
      title: "Continuous Monitoring Systems",
      duration: "4 weeks",
      topics: [
        "Real-time monitoring architecture",
        "Automated compliance surveillance",
        "Incident detection and response",
        "Performance degradation monitoring",
        "Regulatory reporting automation",
        "Continuous improvement frameworks"
      ]
    }
  ];

  const outcomes = [
    "Design and implement enterprise-wide AI governance frameworks",
    "Provide authoritative regulatory advisory to executive leadership",
    "Architect scalable compliance systems for large organisations",
    "Lead regulatory engagement and authority communications",
    "Develop continuous monitoring and improvement programmes",
    "Navigate complex multi-regulatory environments",
    "Drive strategic AI governance decisions at board level",
    "Mentor and develop the next generation of AI governance professionals"
  ];

  const whoIsThisFor = [
    {
      icon: NeuralBrainIcon,
      title: "Chief AI Officers",
      description: "Executives responsible for organisational AI strategy and governance"
    },
    {
      icon: BalanceScaleIcon,
      title: "General Counsel",
      description: "Legal leaders seeking comprehensive AI regulatory expertise"
    },
    {
      icon: ShieldNodeIcon,
      title: "Chief Compliance Officers",
      description: "Compliance executives expanding into AI governance leadership"
    },
    {
      icon: OversightEyeIcon,
      title: "Senior Consultants",
      description: "Advisory professionals offering AI governance services to clients"
    }
  ];

  const charterholderBenefits = [
    {
      icon: AwardNodeIcon,
      title: "Charterholder Status",
      description: "The highest recognition in AI development compliance, demonstrating mastery of the field"
    },
    {
      icon: NetworkNodesIcon,
      title: "Expert Directory Listing",
      description: "Priority placement in the COAD Expert Directory with verified Charterholder badge"
    },
    {
      icon: GraduationNodeIcon,
      title: "Lifetime Learning Access",
      description: "Continuous access to updated content as regulations evolve"
    },
    {
      icon: GlobeNodeIcon,
      title: "Speaking Opportunities",
      description: "Invitations to speak at COAD events and industry conferences"
    },
    {
      icon: CredentialIcon,
      title: "Exclusive Community",
      description: "Access to the Master Charterholder peer network and forums"
    },
    {
      icon: DataFlowIcon,
      title: "Advisory Referrals",
      description: "Referral opportunities for consulting and advisory engagements"
    }
  ];

  const assessments = [
    {
      type: "Governance Framework Design",
      description: "Complete enterprise governance framework deliverable",
      weight: "35%"
    },
    {
      type: "Regulatory Advisory Simulation",
      description: "Complex regulatory scenarios and recommendations",
      weight: "25%"
    },
    {
      type: "Oral Defence",
      description: "Panel defence of governance framework and approach",
      weight: "20%"
    },
    {
      type: "Capstone Examination",
      description: "Comprehensive proctored final assessment",
      weight: "20%"
    }
  ];

  return (
    <>
      <Helmet>
        <title>ADC Master Charterholder | The Pinnacle of AI Development Compliance | COAD</title>
        <meta name="description" content="Achieve the highest recognition in AI development compliance with the ADC Master Charterholder certification. Design enterprise governance frameworks and lead regulatory strategy." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-navy text-primary-foreground py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal rounded-full blur-3xl" />
          </div>
          
          {/* Featured badge */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-teal to-primary" />
          
          <div className="container-coad relative z-10">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link to="/certifications" className="hover:text-primary transition-colors">Certifications</Link>
                <span>/</span>
                <span>ADC Track</span>
                <span>/</span>
                <span className="text-primary">Master Charterholder</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-teal text-primary-foreground text-sm font-medium">
                  Highest Level
                </span>
                <span className="px-4 py-1.5 rounded-full bg-teal/20 text-teal text-sm font-medium">
                  ADC Track
                </span>
              </div>
              
              <h1 className="heading-1 mb-6">
                ADC Master <span className="gradient-text">Charterholder</span>
              </h1>
              
              <p className="body-large text-gray-300 mb-8 max-w-2xl">
                The pinnacle of AI development compliance expertise. Master Charterholders are 
                recognised authorities who design enterprise governance frameworks and lead 
                strategic AI compliance across Europe.
              </p>

              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <ClockNodeIcon className="w-5 h-5 text-primary" />
                  <span>16-20 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CircuitLayersIcon className="w-5 h-5 text-primary" />
                  <span>4 Master Modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <AwardNodeIcon className="w-5 h-5 text-primary" />
                  <span>Charterholder Status</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gradient" size="xl" asChild>
                  <Link to="/auth">Apply Now — €4,800</Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/auth">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Charterholder Benefits Banner */}
        <section className="py-12 bg-gradient-to-r from-primary/10 to-teal/10 border-b border-border">
          <div className="container-coad">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
              <AwardNodeIcon className="w-16 h-16 text-primary" />
              <div>
                <h3 className="heading-4 mb-2">Achieve Charterholder Status</h3>
                <p className="text-muted-foreground max-w-xl">
                  The Master Charterholder designation represents the highest level of professional 
                  achievement in AI development compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Is This For */}
        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Who Is This For?</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                The ADC Master Charterholder programme is designed for senior leaders 
                shaping AI governance strategy.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whoIsThisFor.map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border card-hover">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-teal flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="section-padding bg-muted/50">
          <div className="container-coad">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Master Curriculum</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                Four comprehensive modules developing mastery in enterprise AI governance.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {modules.map((module, index) => (
                <div key={index} className="bg-card rounded-xl border border-border overflow-hidden card-hover">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-24 bg-gradient-to-br from-primary to-teal p-6 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary-foreground">{module.number}</span>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                        <h3 className="heading-4">{module.title}</h3>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <ClockNodeIcon className="w-4 h-4" />
                          {module.duration}
                        </span>
                      </div>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Learning Outcomes</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                Upon achieving the ADC Master Charterholder designation, you will be able to:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckNodeIcon className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{outcome}</span>
                </div>
              ))}
            </div>
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {charterholderBenefits.map((benefit, index) => (
                <div key={index} className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment */}
        <section className="section-padding bg-muted/50">
          <div className="container-coad">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Assessment Structure</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                Rigorous assessment including oral defence and comprehensive capstone examination.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {assessments.map((assessment, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border text-center card-hover">
                  <div className="text-4xl font-bold gradient-text mb-2">{assessment.weight}</div>
                  <h3 className="font-semibold mb-2">{assessment.type}</h3>
                  <p className="text-sm text-muted-foreground">{assessment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-teal/5">
          <div className="container-coad">
            <div className="max-w-3xl mx-auto text-center">
              <CredentialIcon className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="heading-2 mb-4">Achieve Master Charterholder Status</h2>
              <p className="body-large text-muted-foreground mb-8">
                Join the elite community of AI governance authorities in Europe.
              </p>
              
              <div className="bg-card rounded-2xl p-8 border border-primary/20 shadow-lg mb-8">
                <div className="text-5xl font-bold gradient-text mb-2">€4,800</div>
                <p className="text-muted-foreground mb-6">One-time payment • Lifetime Charterholder status</p>
                
                <ul className="text-left max-w-sm mx-auto space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckNodeIcon className="w-5 h-5 text-teal" />
                    <span>4 master modules (16-20 weeks)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckNodeIcon className="w-5 h-5 text-teal" />
                    <span>Executive masterclasses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckNodeIcon className="w-5 h-5 text-teal" />
                    <span>1-on-1 executive coaching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckNodeIcon className="w-5 h-5 text-teal" />
                    <span>Oral defence preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckNodeIcon className="w-5 h-5 text-teal" />
                    <span>Charterholder designation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckNodeIcon className="w-5 h-5 text-teal" />
                    <span>Expert Directory listing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckNodeIcon className="w-5 h-5 text-teal" />
                    <span>Lifetime community access</span>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="gradient" size="xl" asChild>
                    <Link to="/auth">Apply Now</Link>
                  </Button>
                  <Button variant="outline" size="xl" asChild>
                    <Link to="/auth">Schedule Consultation</Link>
                  </Button>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Admission is competitive. <a href="mailto:masters@coad.ai" className="text-primary hover:underline">Contact our admissions team</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ADCMaster;