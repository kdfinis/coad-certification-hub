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
  AwardNodeIcon
} from '@/components/ui/custom-icons';

const ADCProfessional = () => {
  const modules = [
    {
      number: "01",
      title: "EU AI Act Framework Overview",
      duration: "2 weeks",
      topics: [
        "Regulatory landscape and legislative history",
        "Key definitions and scope of application",
        "Risk-based approach to AI regulation",
        "Roles and responsibilities under the Act"
      ]
    },
    {
      number: "02",
      title: "AI Risk Classification Systems",
      duration: "2 weeks",
      topics: [
        "Prohibited AI practices",
        "High-risk AI system categories",
        "Limited and minimal risk classifications",
        "Assessment methodologies and decision trees"
      ]
    },
    {
      number: "03",
      title: "Compliance Documentation Essentials",
      duration: "2 weeks",
      topics: [
        "Technical documentation requirements",
        "Risk management system documentation",
        "Quality management system basics",
        "Record-keeping obligations"
      ]
    },
    {
      number: "04",
      title: "Data Governance Fundamentals",
      duration: "2 weeks",
      topics: [
        "Data quality requirements for AI systems",
        "Training, validation, and testing data sets",
        "Bias detection and mitigation basics",
        "GDPR intersection with AI Act"
      ]
    }
  ];

  const outcomes = [
    "Understand and explain EU AI Act requirements to stakeholders",
    "Classify AI systems according to the risk-based framework",
    "Create foundational compliance documentation",
    "Apply data governance principles to AI development",
    "Identify gaps in existing AI governance practices",
    "Communicate compliance requirements to technical teams"
  ];

  const whoIsThisFor = [
    {
      icon: CodeNodeIcon,
      title: "Junior Developers",
      description: "Starting their career in AI development and seeking foundational compliance knowledge"
    },
    {
      icon: ShieldNodeIcon,
      title: "Compliance Associates",
      description: "New to AI regulation and building their expertise in the EU AI Act"
    },
    {
      icon: DataFlowIcon,
      title: "Data Analysts",
      description: "Working with AI systems and needing to understand governance requirements"
    },
    {
      icon: NetworkNodesIcon,
      title: "Project Coordinators",
      description: "Supporting AI initiatives and requiring compliance awareness"
    }
  ];

  const assessments = [
    {
      type: "Module Quizzes",
      description: "Knowledge checks after each module",
      weight: "20%"
    },
    {
      type: "Case Study Analysis",
      description: "Real-world scenario assessments",
      weight: "30%"
    },
    {
      type: "Documentation Exercise",
      description: "Create sample compliance documents",
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
        <title>ADC Professional Certification | AI Development Compliance | COAD</title>
        <meta name="description" content="Build foundational AI governance expertise with the ADC Professional certification. Master EU AI Act basics, risk classification, and compliance documentation in 8-12 weeks." />
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
                <span>ADC Track</span>
                <span>/</span>
                <span className="text-primary">Professional</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium">
                  Foundation Level
                </span>
                <span className="px-4 py-1.5 rounded-full bg-teal/20 text-teal text-sm font-medium">
                  ADC Track
                </span>
              </div>
              
              <h1 className="heading-1 mb-6">
                ADC <span className="gradient-text">Professional</span>
              </h1>
              
              <p className="body-large text-gray-300 mb-8 max-w-2xl">
                The ADC Professional certification is your entry point into AI development compliance. Designed for ambitious professionals who want to move beyond simple automation and learn how to design, build, and oversee autonomous, goal-driven AI agents. Build the foundational knowledge needed to understand and apply EU AI Act requirements while mastering the fundamentals of Agentic AI development.
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
                The ADC Professional certification is designed for professionals beginning 
                their journey in AI governance.
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
                Four comprehensive modules building your foundation in AI development compliance.
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

        {/* Your Journey */}
        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Your ADC Journey</h2>
              <p className="body-large text-muted-foreground max-w-3xl mx-auto">
                The ADC (AI Development Certified) track follows a structured progression from foundational knowledge to advanced mastery, culminating in Charterholder status.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Journey Path */}
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-teal to-primary transform -translate-x-1/2 hidden lg:block" />
                
                <div className="space-y-12">
                  {/* Level 1: Professional */}
                  <div className="relative flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2 lg:text-right">
                      <div className="bg-card rounded-xl p-6 border-2 border-primary shadow-lg">
                        <div className="flex items-center justify-end gap-3 mb-4">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">Level 1</span>
                          <span className="text-2xl font-bold text-primary">Professional</span>
                        </div>
                        <h3 className="heading-4 mb-3">Foundation Level</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          Build foundational knowledge in AI development compliance, EU AI Act requirements, risk classification, and data governance. Perfect for professionals beginning their journey in AI governance.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>4 core modules (8-12 weeks)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>Self-paced learning</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>€1,200 investment</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0 border-4 border-background shadow-lg z-10">
                      <span className="text-2xl font-bold text-primary-foreground">1</span>
                    </div>
                    <div className="lg:w-1/2"></div>
                  </div>

                  {/* Level 2: Advanced Expert */}
                  <div className="relative flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2"></div>
                    <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center flex-shrink-0 border-4 border-background shadow-lg z-10">
                      <span className="text-2xl font-bold text-primary-foreground">2</span>
                    </div>
                    <div className="lg:w-1/2 lg:text-left">
                      <div className="bg-card rounded-xl p-6 border-2 border-teal shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl font-bold text-teal">Advanced Expert</span>
                          <span className="px-3 py-1 bg-teal/10 text-teal text-sm font-semibold rounded-full">Level 2</span>
                        </div>
                        <h3 className="heading-4 mb-3">Intermediate Level</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          Deepen your expertise with advanced Agentic AI concepts, multi-agent systems, performance optimization, and production deployment. Build hands-on skills through practical projects.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                            <span>Advanced modules & projects</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                            <span>Portfolio development</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                            <span>Mentored learning</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Level 3: Master */}
                  <div className="relative flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2 lg:text-right">
                      <div className="bg-card rounded-xl p-6 border-2 border-primary shadow-lg">
                        <div className="flex items-center justify-end gap-3 mb-4">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">Level 3</span>
                          <span className="text-2xl font-bold text-primary">Master</span>
                        </div>
                        <h3 className="heading-4 mb-3">Advanced Level</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          Master advanced Agentic AI architectures, reinforcement learning, human-agent collaboration, and enterprise-scale system design. Complete comprehensive capstone projects.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>Master-level modules</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>Advanced capstone projects</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>Expert mentorship</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0 border-4 border-background shadow-lg z-10">
                      <span className="text-2xl font-bold text-primary-foreground">3</span>
                    </div>
                    <div className="lg:w-1/2"></div>
                  </div>

                  {/* Charterholder */}
                  <div className="relative flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2"></div>
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-teal flex items-center justify-center flex-shrink-0 border-4 border-background shadow-xl z-10">
                      <AwardNodeIcon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="lg:w-1/2 lg:text-left">
                      <div className="bg-gradient-to-br from-primary/10 to-teal/10 rounded-xl p-6 border-2 border-primary shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl font-bold gradient-text">ADC Charterholder</span>
                          <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">Elite Status</span>
                        </div>
                        <h3 className="heading-4 mb-3">Top-Level Achievement</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          Upon completing all three levels, achieve Charterholder status with priority placement in the Accredited Experts Directory, enhanced visibility, and recognition as a top-tier AI development professional.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <AwardNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span><strong className="text-foreground">Priority Directory Placement:</strong> Top of search results</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AwardNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span><strong className="text-foreground">Charterholder Badge:</strong> Public recognition</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AwardNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span><strong className="text-foreground">AI Workforce Access:</strong> Premium opportunities</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="section-padding bg-muted/50">
          <div className="container-coad">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 mb-6">Learning Outcomes</h2>
                <p className="body-large text-muted-foreground mb-8">
                  Upon completing the ADC Professional certification, you will be able to:
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
                <NeuralBrainIcon className="w-16 h-16 text-primary mb-6" />
                <h3 className="heading-3 mb-4">Ready to Level Up?</h3>
                <p className="text-muted-foreground mb-6">
                  After completing ADC Professional, continue your journey with the 
                  ADC Advanced Expert certification to deepen your expertise and move closer to Charterholder status.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/certifications/adc-advanced">View ADC Advanced Expert →</Link>
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
                A balanced assessment approach combining continuous evaluation with final examination.
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
              <h2 className="heading-2 mb-4">Start Your ADC Journey Today</h2>
              <p className="body-large text-gray-300 mb-8">
                Join professionals across Europe building their AI development expertise. Begin with ADC Professional and progress through Advanced Expert and Master levels to achieve Charterholder status—the highest recognition in AI development competency.
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
                    <span>Case studies and exercises</span>
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

export default ADCProfessional;