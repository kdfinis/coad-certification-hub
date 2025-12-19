import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  CircuitLockIcon,
  CheckNodeIcon,
  ClockNodeIcon,
  AwardNodeIcon,
  GraduationNodeIcon
} from '@/components/ui/custom-icons';
import { ArrowRight, Calendar, Briefcase } from 'lucide-react';

const RestrictedMethods = () => {
  const weeklyBreakdown = [
    {
      week: 1,
      title: "Masterclass – Safety Fundamentals",
      hours: 30,
      description: "Expert session on failure modes, risk classification, guardrail design, red-teaming, and regulatory expectations for high-risk AI.",
      activities: [
        "Understand how AI systems fail (misalignment, misuse, adversarial attacks, drift)",
        "Learn to categorize AI risks by severity, likelihood, and impact",
        "Design restrictions (allowed/disallowed actions, tool whitelists/blacklists)",
        "Test AI systems for vulnerabilities and failure modes",
        "Understand safety requirements for high-risk AI (EU AI Act, sectoral regulations)"
      ]
    },
    {
      week: 2,
      title: "Hands-On Labs – Policy and Guardrail Design",
      hours: 35,
      description: "Practical exercises in risk assessment, guardrail design, and safety testing.",
      activities: [
        "Conduct risk assessments for specific AI use cases",
        "Classify risks by severity and likelihood",
        "Create risk registers and mitigation plans",
        "Design policies and guardrails for AI agents",
        "Create tool whitelists/blacklists and action restrictions",
        "Design stress tests and adversarial scenarios",
        "Create test plans for identifying failure modes"
      ]
    },
    {
      week: 3,
      title: "Mentored Sessions – Testing and Monitoring",
      hours: 30,
      description: "Expert guidance on safety testing, monitoring design, and best practices from real-world implementations.",
      activities: [
        "Get feedback on your safety designs from industry experts",
        "Learn advanced techniques for safety testing and red-teaming",
        "Receive guidance on designing safety monitoring dashboards",
        "Analyze real-world AI safety incidents and prevention strategies",
        "Learn from successful safety implementations"
      ]
    },
    {
      week: 4,
      title: "Mini-Capstone – Safety Case",
      hours: 35,
      description: "Produce a comprehensive safety case for an AI agent deployment with risk register, control design, test plan, monitoring scheme, and compliance documentation.",
      activities: [
        "Complete risk assessment with identified failure modes and impacts",
        "Detailed specification of guardrails, restrictions, and safety controls",
        "Comprehensive safety testing strategy including red-teaming scenarios",
        "Design for real-time safety monitoring and alerting",
        "Plan for detecting and responding to safety incidents",
        "Evidence of meeting regulatory safety requirements"
      ]
    }
  ];

  const realWorldUseCases = [
    {
      industry: "High-Risk AI Applications",
      scenario: "Designing safety guardrails and monitoring for autonomous AI systems in critical infrastructure or healthcare applications."
    },
    {
      industry: "Oversight Systems",
      scenario: "Creating safety monitoring and controls for AI systems that operate with significant autonomy and potential impact."
    },
    {
      industry: "Regulatory Compliance",
      scenario: "Ensuring AI systems meet EU AI Act safety requirements for high-risk applications through comprehensive safety cases."
    },
    {
      industry: "Security-Critical AI",
      scenario: "Securing AI systems against misuse, adversarial attacks, and ensuring safe behavior in sensitive environments."
    }
  ];

  const learningOutcomes = [
    "Identify and classify safety risks in AI systems",
    "Create effective restrictions and safety controls for AI agents",
    "Design and execute safety tests including red-teaming scenarios",
    "Create monitoring schemes that detect unsafe behavior",
    "Plan for safety incident detection and response",
    "Create comprehensive safety cases for regulatory and internal review"
  ];

  return (
    <>
      <Helmet>
        <title>Restricted Methods & Safety | AAC Module | COAD</title>
        <meta name="description" content="Master AI safety and restricted methods in this intensive 120-hour module. Learn to design guardrails, assess risks, and create safety cases for Agentic AI systems." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-navy text-primary-foreground py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          </div>
          
          <div className="container-coad relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                  AAC Module
                </span>
                <span className="px-3 py-1 rounded-full bg-teal/20 text-teal text-sm font-medium">
                  120 Hours • 4 Weeks
                </span>
                <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium">
                  Heavy Intensity
                </span>
              </div>
              
              <h1 className="heading-1 mb-6">
                Restricted<br />
                <span className="gradient-text">Methods</span>
              </h1>
              
              <p className="body-large text-gray-300 mb-8 max-w-2xl">
                Design restrictions, guardrails, and monitoring for powerful Agentic AI systems. Learn to identify risks, design controls, and operationalize safe behavior in autonomous AI systems.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <ClockNodeIcon className="w-5 h-5 text-primary" />
                  <span>120 Contact Hours</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>4 Weeks Duration</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <AwardNodeIcon className="w-5 h-5 text-primary" />
                  <span>Blockchain Certificate</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/auth">
                    Enroll Now – €1,500
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="border-gray-600 text-gray-300 hover:bg-white/10" asChild>
                  <Link to="/certifications">View All Modules</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Module Overview */}
        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="heading-2 mb-6">Module Overview</h2>
                <p className="body-large text-muted-foreground mb-6">
                  The Restricted Methods & Safety module is an advanced safety-focused program for professionals who must design restrictions, guardrails, and monitoring for powerful Agentic AI systems.
                </p>
                <p className="body text-muted-foreground mb-8">
                  As AI systems become more autonomous and capable, ensuring they operate safely and within defined boundaries becomes critical. This module teaches you to think like a safety engineer for AI: identifying failure modes, designing guardrails, planning for misuse, and creating monitoring systems that detect and prevent unsafe behavior.
                </p>

                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-4">Assessment Criteria</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Project rubric assessment (80% pass threshold)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Compliance framework documentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Risk mitigation plan delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Expert panel evaluation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-6">Learning Outcomes</h3>
                <div className="space-y-4">
                  {learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-foreground">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Breakdown */}
        <section className="section-padding bg-muted/50">
          <div className="container-coad">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">4-Week Curriculum</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                From safety fundamentals to comprehensive safety cases—master the frameworks needed to deploy AI safely.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {weeklyBreakdown.map((week, index) => (
                <div key={index} className="bg-card rounded-2xl border border-border overflow-hidden card-hover">
                  <div className="bg-gradient-to-r from-primary/10 to-teal/10 px-6 py-4 border-b border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold">{week.week}</span>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Week {week.week}</span>
                          <p className="font-semibold text-foreground">{week.hours} Hours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{week.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{week.description}</p>
                    <ul className="space-y-2">
                      {week.activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real-World Use Cases */}
        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Real-World Applications</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                See how safety engineering principles protect organizations and users in real-world AI deployments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {realWorldUseCases.map((useCase, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{useCase.industry}</h3>
                  </div>
                  <p className="text-muted-foreground">{useCase.scenario}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

                {/* Standalone Module Clarification */}
        <section className="section-padding bg-muted/50">
          <div className="container-coad">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="heading-3 mb-4">Standalone Competency Module</h2>
                <p className="body-large text-muted-foreground mb-6">
                  This is a <strong>standalone competency module</strong> that is <strong>unrelated to certification tracks</strong>. 
                  It can be taken independently and provides its own certificate of competency upon completion.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="font-semibold mb-3">This Module</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Standalone 4-week competency module</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Independent certificate of competency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>No track enrollment required</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="font-semibold mb-3">Certification Tracks</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <span>Structured programs (ADC or ACOS)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <span>Progression to Charterholder status</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <span>Separate from competency modules</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/auth">Enroll Now – €1,500</Link>
                  </Button>
                  <Button variant="outline" size="xl" asChild>
                    <Link to="/certifications">Explore Certification Tracks</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RestrictedMethods;