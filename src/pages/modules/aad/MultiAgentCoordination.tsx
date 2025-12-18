import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  NetworkNodesIcon,
  CheckNodeIcon,
  ClockNodeIcon,
  AwardNodeIcon,
  GraduationNodeIcon
} from '@/components/ui/custom-icons';
import { ArrowRight, Calendar, Briefcase } from 'lucide-react';

const MultiAgentCoordination = () => {
  const weeklyBreakdown = [
    {
      week: 1,
      title: "Masterclass – Agent Systems Basics",
      hours: 22,
      description: "Expert-led session covering multi-agent architectures, communication protocols, and coordination strategies.",
      activities: [
        "Multi-agent system architectures overview",
        "Agent communication protocols and standards",
        "Task distribution and load balancing",
        "Real-world multi-agent case studies"
      ]
    },
    {
      week: 2,
      title: "Hands-On Labs – Coordinate Multiple AI Tools",
      hours: 23,
      description: "Practical exercises building systems that orchestrate multiple AI agents working together.",
      activities: [
        "Setting up agent orchestration frameworks",
        "Building inter-agent communication channels",
        "Conflict resolution mechanisms",
        "Performance monitoring dashboards"
      ]
    },
    {
      week: 3,
      title: "Mentored Sessions – Live Q&A on Scaling",
      hours: 22,
      description: "Interactive sessions with industry experts on scaling multi-agent systems for enterprise use.",
      activities: [
        "Scaling strategies for production environments",
        "Cost optimization for multi-agent systems",
        "ESG compliance in distributed AI",
        "EU AI Act requirements for agent systems"
      ]
    },
    {
      week: 4,
      title: "Mini-Capstone – Multi-Agent Business Solution",
      hours: 23,
      description: "Design and deliver a complete multi-agent business solution with mentor review.",
      activities: [
        "End-to-end solution architecture",
        "Documentation and compliance verification",
        "Presentation to expert panel",
        "Blockchain certificate issuance"
      ]
    }
  ];

  const realWorldUseCases = [
    {
      industry: "E-Commerce",
      scenario: "Coordinating pricing agents, inventory agents, and customer service agents to optimize real-time marketplace operations."
    },
    {
      industry: "Supply Chain",
      scenario: "Orchestrating logistics agents, demand forecasting agents, and supplier management agents for end-to-end visibility."
    },
    {
      industry: "Financial Trading",
      scenario: "Multi-agent systems for market analysis, risk assessment, and execution agents working in millisecond coordination."
    },
    {
      industry: "Smart Cities",
      scenario: "Traffic management, energy distribution, and emergency response agents collaborating for urban optimization."
    }
  ];

  const learningOutcomes = [
    "Design multi-agent system architectures for business applications",
    "Implement agent communication and coordination protocols",
    "Scale agent systems for enterprise production environments",
    "Optimize performance and costs in multi-agent deployments",
    "Ensure EU AI Act compliance for distributed AI systems",
    "Build portfolio-ready multi-agent solutions"
  ];

  return (
    <>
      <Helmet>
        <title>Multi-Agent Coordination | AAD Module | COAD</title>
        <meta name="description" content="Master multi-agent AI system coordination in this 90-hour, 4-week module. Learn to orchestrate multiple AI tools and earn a blockchain-verified certificate." />
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
                  AAD Module
                </span>
                <span className="px-3 py-1 rounded-full bg-teal/20 text-teal text-sm font-medium">
                  90 Hours • 4 Weeks
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium">
                  Standard Intensity
                </span>
              </div>
              
              <h1 className="heading-1 mb-6">
                Multi-Agent<br />
                <span className="gradient-text">Coordination</span>
              </h1>
              
              <p className="body-large text-gray-300 mb-8 max-w-2xl">
                Learn to orchestrate multiple AI agents working together to solve complex business 
                problems. Build scalable, coordinated AI systems for enterprise environments.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <ClockNodeIcon className="w-5 h-5 text-primary" />
                  <span>90 Contact Hours</span>
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
                    Enroll Now – €1,200
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
                  Multi-agent systems are the future of AI deployment. This module teaches you to 
                  design, build, and manage systems where multiple AI agents collaborate to achieve 
                  complex objectives that no single agent could accomplish alone.
                </p>
                <p className="body text-muted-foreground mb-8">
                  Through hands-on labs and real-world projects, you'll gain practical experience 
                  with agent orchestration frameworks, communication protocols, and scaling strategies 
                  used by leading enterprises.
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
                      <span className="text-muted-foreground">Active participation in forum discussions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Mini-capstone deliverable with mentor feedback</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">ESG and EU AI Act compliance verification</span>
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
                JHU-inspired methodology with live masterclasses, hands-on labs, 
                mentored sessions, and a practical capstone project.
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
                See how multi-agent coordination transforms industries.
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

        {/* Track Integration */}
        <section className="section-padding bg-navy text-primary-foreground">
          <div className="container-coad">
            <div className="max-w-4xl mx-auto text-center">
              <GraduationNodeIcon className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="heading-2 mb-4">Part of the AAD Track</h2>
              <p className="body-large text-gray-300 mb-8">
                This module counts toward your Agentic AI Developer (AAD) Track certification. 
                Complete all track modules to achieve Charterholder status.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/auth">Enroll Now – €1,200</Link>
                </Button>
                <Button variant="outline" size="xl" className="border-gray-600 text-gray-300 hover:bg-white/10" asChild>
                  <Link to="/certifications">Explore Full AAD Track</Link>
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

export default MultiAgentCoordination;