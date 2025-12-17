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
  BalanceScaleIcon
} from '@/components/ui/custom-icons';

const ACOSProfessional = () => {
  const modules = [
    {
      number: "01",
      title: "AI Operations Fundamentals",
      duration: "2 weeks",
      topics: [
        "AI system lifecycle management",
        "Operational deployment considerations",
        "Performance baseline establishment",
        "Operational documentation requirements"
      ]
    },
    {
      number: "02",
      title: "Oversight Frameworks & Controls",
      duration: "2 weeks",
      topics: [
        "Human oversight requirements under EU AI Act",
        "Control framework design basics",
        "Monitoring checkpoint establishment",
        "Escalation procedures and protocols"
      ]
    },
    {
      number: "03",
      title: "Incident Response Basics",
      duration: "2 weeks",
      topics: [
        "Incident identification and classification",
        "Initial response procedures",
        "Documentation and evidence preservation",
        "Communication protocols"
      ]
    },
    {
      number: "04",
      title: "Stakeholder Communication",
      duration: "2 weeks",
      topics: [
        "Reporting to management and leadership",
        "User notification requirements",
        "Regulatory communication basics",
        "Transparency and disclosure obligations"
      ]
    }
  ];

  const outcomes = [
    "Understand AI system operational requirements and lifecycle",
    "Implement basic oversight controls and monitoring checkpoints",
    "Respond to AI-related incidents following established protocols",
    "Communicate compliance status to stakeholders effectively",
    "Maintain operational documentation and records",
    "Support compliance audits and assessments"
  ];

  const whoIsThisFor = [
    {
      icon: OversightEyeIcon,
      title: "Operations Analysts",
      description: "Professionals monitoring AI system performance and compliance"
    },
    {
      icon: ShieldNodeIcon,
      title: "Junior Compliance Officers",
      description: "New to AI oversight and seeking foundational expertise"
    },
    {
      icon: RiskAlertIcon,
      title: "Risk Analysts",
      description: "Expanding their expertise into AI operational risk"
    },
    {
      icon: NetworkNodesIcon,
      title: "IT Support Specialists",
      description: "Supporting AI system operations and requiring governance knowledge"
    }
  ];

  const assessments = [
    {
      type: "Module Quizzes",
      description: "Knowledge checks after each module",
      weight: "20%"
    },
    {
      type: "Scenario Exercises",
      description: "Operational scenario responses",
      weight: "30%"
    },
    {
      type: "Incident Response Drill",
      description: "Simulated incident handling",
      weight: "25%"
    },
    {
      type: "Final Examination",
      description: "Comprehensive proctored exam",
      weight: "25%"
    }
  ];

  return (
    <>
      <Helmet>
        <title>ACOS Professional Certification | AI Compliance & Oversight | COAD</title>
        <meta name="description" content="Build foundational AI oversight expertise with the ACOS Professional certification. Master operational monitoring, incident response, and stakeholder communication in 8-12 weeks." />
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
                <span className="text-primary">Professional</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium">
                  Foundation Level
                </span>
                <span className="px-4 py-1.5 rounded-full bg-teal/20 text-teal text-sm font-medium">
                  ACOS Track
                </span>
              </div>
              
              <h1 className="heading-1 mb-6">
                ACOS <span className="gradient-text">Professional</span>
              </h1>
              
              <p className="body-large text-gray-300 mb-8 max-w-2xl">
                Your entry point into AI oversight and compliance operations. Build the foundational 
                skills needed to monitor AI systems and ensure operational compliance.
              </p>

              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <ClockNodeIcon className="w-5 h-5 text-primary" />
                  <span>8-12 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CircuitLayersIcon className="w-5 h-5 text-primary" />
                  <span>4 Core Modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationNodeIcon className="w-5 h-5 text-primary" />
                  <span>Self-paced Learning</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/auth">Enroll Now — €1,200</Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/auth">Start Free Trial</Link>
                </Button>
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
                The ACOS Professional certification is designed for professionals beginning 
                their journey in AI oversight operations.
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
              <h2 className="heading-2 mb-4">Curriculum</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                Four comprehensive modules building your foundation in AI oversight operations.
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
                  Upon completing the ACOS Professional certification, you will be able to:
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
                <OversightEyeIcon className="w-16 h-16 text-primary mb-6" />
                <h3 className="heading-3 mb-4">Ready to Level Up?</h3>
                <p className="text-muted-foreground mb-6">
                  After completing ACOS Professional, continue your journey with the 
                  ACOS Advanced Expert certification to deepen your oversight expertise.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/certifications/acos-advanced">View ACOS Advanced Expert →</Link>
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
                A balanced assessment approach combining continuous evaluation with practical drills.
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
              <h2 className="heading-2 mb-4">Start Your Oversight Journey</h2>
              <p className="body-large text-gray-300 mb-8">
                Join professionals across Europe building their AI oversight expertise.
              </p>
              
              <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 mb-8">
                <div className="text-5xl font-bold mb-2">€1,200</div>
                <p className="text-gray-400 mb-6">One-time payment • Lifetime access to materials</p>
                
                <ul className="text-left max-w-sm mx-auto space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckNodeIcon className="w-5 h-5 text-teal" />
                    <span>4 comprehensive modules</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckNodeIcon className="w-5 h-5 text-teal" />
                    <span>Self-paced online learning</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckNodeIcon className="w-5 h-5 text-teal" />
                    <span>Incident response simulations</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckNodeIcon className="w-5 h-5 text-teal" />
                    <span>Digital credential upon completion</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckNodeIcon className="w-5 h-5 text-teal" />
                    <span>Community forum access</span>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/auth">Enroll Now</Link>
                  </Button>
                  <Button variant="heroOutline" size="xl" asChild>
                    <Link to="/auth">Try Free Module</Link>
                  </Button>
                </div>
              </div>

              <p className="text-sm text-gray-400">
                Questions? <a href="mailto:contact@coad.ai" className="text-primary hover:underline">Contact our team</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ACOSProfessional;