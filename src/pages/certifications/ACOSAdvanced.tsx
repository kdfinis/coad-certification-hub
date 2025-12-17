import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  OversightEyeIcon,
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
  RiskAlertIcon,
  BalanceScaleIcon,
  CorporateBuildingIcon
} from '@/components/ui/custom-icons';

const ACOSAdvanced = () => {
  const modules = [
    {
      number: "01",
      title: "Advanced Monitoring & Auditing",
      duration: "3 weeks",
      topics: [
        "Comprehensive monitoring programme design",
        "Automated surveillance systems",
        "Audit planning and execution",
        "Evidence collection and analysis",
        "Audit reporting and follow-up"
      ]
    },
    {
      number: "02",
      title: "Risk Mitigation Strategies",
      duration: "3 weeks",
      topics: [
        "Risk identification and assessment frameworks",
        "Control design and implementation",
        "Risk treatment planning",
        "Residual risk management",
        "Risk appetite and tolerance alignment"
      ]
    },
    {
      number: "03",
      title: "Regulatory Reporting Excellence",
      duration: "3 weeks",
      topics: [
        "EU AI Act reporting requirements",
        "Regulatory submission preparation",
        "Serious incident reporting",
        "Market surveillance cooperation",
        "Documentation management systems"
      ]
    },
    {
      number: "04",
      title: "Third-party AI Vendor Management",
      duration: "3 weeks",
      topics: [
        "Vendor risk assessment methodologies",
        "Due diligence frameworks",
        "Contract compliance requirements",
        "Ongoing vendor monitoring",
        "Supply chain risk management"
      ]
    }
  ];

  const outcomes = [
    "Design and implement comprehensive AI monitoring programmes",
    "Conduct thorough audits of AI systems and processes",
    "Develop and execute risk mitigation strategies",
    "Prepare compliant regulatory submissions and reports",
    "Assess and manage third-party AI vendor risks",
    "Lead cross-functional oversight initiatives",
    "Advise management on operational compliance decisions"
  ];

  const whoIsThisFor = [
    {
      icon: OversightEyeIcon,
      title: "Senior Compliance Officers",
      description: "Leading AI oversight programmes within their organisations"
    },
    {
      icon: RiskAlertIcon,
      title: "Risk Managers",
      description: "Expanding expertise into AI-specific risk management"
    },
    {
      icon: ShieldNodeIcon,
      title: "Internal Auditors",
      description: "Developing AI audit capabilities and methodologies"
    },
    {
      icon: CorporateBuildingIcon,
      title: "Vendor Managers",
      description: "Responsible for AI vendor assessment and oversight"
    }
  ];

  const prerequisites = [
    "ACOS Professional certification (or equivalent experience)",
    "Minimum 2 years in compliance, risk, or audit roles",
    "Working knowledge of EU regulatory frameworks",
    "Experience with operational monitoring or auditing"
  ];

  const assessments = [
    {
      type: "Monitoring Programme Design",
      description: "Complete monitoring framework deliverable",
      weight: "30%"
    },
    {
      type: "Audit Simulation",
      description: "Full audit cycle execution",
      weight: "25%"
    },
    {
      type: "Vendor Assessment Project",
      description: "Third-party risk assessment",
      weight: "20%"
    },
    {
      type: "Final Examination",
      description: "Comprehensive proctored assessment",
      weight: "25%"
    }
  ];

  return (
    <>
      <Helmet>
        <title>ACOS Advanced Expert Certification | AI Compliance & Oversight | COAD</title>
        <meta name="description" content="Advance your AI oversight career with the ACOS Advanced Expert certification. Master monitoring, auditing, risk mitigation, and vendor management in 12-16 weeks." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-navy text-primary-foreground py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal rounded-full blur-3xl" />
          </div>
          
          <div className="container-coad relative z-10">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link to="/certifications" className="hover:text-primary transition-colors">Certifications</Link>
                <span>/</span>
                <span>ACOS Track</span>
                <span>/</span>
                <span className="text-primary">Advanced Expert</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium">
                  Mid-Tier Level
                </span>
                <span className="px-4 py-1.5 rounded-full bg-teal/20 text-teal text-sm font-medium">
                  ACOS Track
                </span>
              </div>
              
              <h1 className="heading-1 mb-6">
                ACOS <span className="gradient-text">Advanced Expert</span>
              </h1>
              
              <p className="body-large text-gray-300 mb-8 max-w-2xl">
                Elevate your AI oversight expertise. Master advanced monitoring, auditing 
                techniques, and third-party vendor risk management.
              </p>

              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <ClockNodeIcon className="w-5 h-5 text-primary" />
                  <span>12-16 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CircuitLayersIcon className="w-5 h-5 text-primary" />
                  <span>4 Advanced Modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationNodeIcon className="w-5 h-5 text-primary" />
                  <span>Blended Learning</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/auth">Enroll Now — €2,400</Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/auth">Download Syllabus</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="py-12 bg-gradient-to-r from-primary/5 to-teal/5 border-b border-border">
          <div className="container-coad">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex items-center gap-3">
                <RiskAlertIcon className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-lg">Prerequisites</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {prerequisites.map((prereq, index) => (
                  <span key={index} className="px-4 py-2 rounded-lg bg-card border border-border text-sm">
                    {prereq}
                  </span>
                ))}
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
                The ACOS Advanced Expert certification is designed for professionals ready to 
                lead AI oversight programmes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whoIsThisFor.map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border card-hover">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
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
              <h2 className="heading-2 mb-4">Advanced Curriculum</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                Four intensive modules developing your expertise in AI oversight leadership.
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 mb-6">Learning Outcomes</h2>
                <p className="body-large text-muted-foreground mb-8">
                  Upon completing the ACOS Advanced Expert certification, you will be able to:
                </p>
                <ul className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckNodeIcon className="w-3.5 h-3.5 text-primary-foreground" />
                      </div>
                      <span className="text-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-teal/10 rounded-2xl p-8 border border-border">
                <AwardNodeIcon className="w-16 h-16 text-primary mb-6" />
                <h3 className="heading-3 mb-4">Reach Master Level</h3>
                <p className="text-muted-foreground mb-6">
                  Continue to the ACOS Master Charterholder certification to achieve the 
                  highest recognition in AI oversight.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/certifications/acos-master">View ACOS Master →</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment */}
        <section className="section-padding bg-muted/50">
          <div className="container-coad">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Assessment Structure</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                Rigorous assessment combining practical projects with comprehensive examination.
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
        <section className="section-padding bg-navy text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="container-coad relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <CredentialIcon className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="heading-2 mb-4">Advance Your Oversight Career</h2>
              <p className="body-large text-gray-300 mb-8">
                Take the next step in your AI oversight leadership journey.
              </p>
              
              <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 mb-8">
                <div className="text-5xl font-bold mb-2">€2,400</div>
                <p className="text-gray-400 mb-6">One-time payment • Lifetime access to materials</p>
                
                <ul className="text-left max-w-sm mx-auto space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckNodeIcon className="w-5 h-5 text-teal" />
                    <span>4 advanced modules (12-16 weeks)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckNodeIcon className="w-5 h-5 text-teal" />
                    <span>Live audit workshops</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckNodeIcon className="w-5 h-5 text-teal" />
                    <span>Real-world project portfolio</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckNodeIcon className="w-5 h-5 text-teal" />
                    <span>1-on-1 mentorship sessions</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckNodeIcon className="w-5 h-5 text-teal" />
                    <span>Professional network access</span>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/auth">Enroll Now</Link>
                  </Button>
                  <Button variant="heroOutline" size="xl" asChild>
                    <Link to="/auth">Talk to Advisor</Link>
                  </Button>
                </div>
              </div>

              <p className="text-sm text-gray-400">
                Corporate pricing available. <a href="mailto:corporate@coad.ai" className="text-primary hover:underline">Contact our team</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ACOSAdvanced;