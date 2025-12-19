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

const AIDeployment = () => {
  const weeklyBreakdown = [
    {
      week: 1,
      title: "Masterclass – Deployment Fundamentals",
      hours: 30,
      description: "Expert session on deployment architectures, infrastructure planning, model serving, versioning strategies, and scalability planning.",
      activities: [
        "Understand different deployment patterns (batch, real-time, edge)",
        "Plan compute, storage, and networking for AI workloads",
        "Design model serving infrastructure and APIs",
        "Manage model versions and updates",
        "Plan for scaling AI systems under load"
      ]
    },
    {
      week: 2,
      title: "Hands-On Labs – Deployment Design",
      hours: 40,
      description: "Practical exercises in architecture design, model serving, and monitoring & observability.",
      activities: [
        "Design deployment architectures for specific use cases",
        "Plan infrastructure requirements and scaling strategies",
        "Create deployment architecture diagrams",
        "Design model serving APIs and interfaces",
        "Plan for batch and real-time inference",
        "Design monitoring and observability for AI systems",
        "Plan metrics, logging, and alerting",
        "Create monitoring dashboards"
      ]
    },
    {
      week: 3,
      title: "Mentored Sessions – Production Operations",
      hours: 30,
      description: "Expert guidance on deployment reliability, scalability, monitoring, and operations from successful production deployments.",
      activities: [
        "Get feedback on your deployment designs",
        "Learn from successful production deployments",
        "Discuss common deployment challenges and solutions",
        "Plan for ongoing operations and maintenance",
        "Analyze real-world deployment scenarios"
      ]
    },
    {
      week: 4,
      title: "Mini-Capstone – Complete Deployment Plan",
      hours: 40,
      description: "Create a comprehensive deployment plan for an AI system with deployment architecture, infrastructure plan, model serving design, versioning strategy, monitoring plan, operations plan, and rollback strategy.",
      activities: [
        "Complete architecture design for production deployment",
        "Detailed infrastructure requirements and scaling strategy",
        "Model serving API and interface specifications",
        "Model versioning and update procedures",
        "Comprehensive monitoring, logging, and alerting strategy",
        "Ongoing operations, maintenance, and incident response procedures",
        "Plan for rolling back deployments if issues occur"
      ]
    }
  ];

  const realWorldUseCases = [
    {
      industry: "E-Commerce",
      scenario: "Deploying recommendation systems that handle Black Friday traffic spikes without service degradation."
    },
    {
      industry: "Financial Trading",
      scenario: "Low-latency AI deployment for real-time trading decisions with five-nines availability."
    },
    {
      industry: "Content Platforms",
      scenario: "Global AI deployment for content moderation across multiple regions with local compliance."
    },
    {
      industry: "Healthcare",
      scenario: "Deploying AI diagnostics with strict uptime requirements and fail-safe mechanisms."
    }
  ];

  const learningOutcomes = [
    "Create production deployment architectures for AI systems",
    "Design scalable infrastructure for AI workloads",
    "Design and implement model serving systems",
    "Establish comprehensive monitoring and observability",
    "Implement model versioning and update strategies",
    "Plan for ongoing operations and maintenance"
  ];

  return (
    <>
      <Helmet>
        <title>AI Deployment to Production | AAC Module | COAD</title>
        <meta name="description" content="Master deploying AI systems to production at scale. Learn deployment architectures, infrastructure planning, monitoring, versioning, and production operations." />
      </Helmet>

      <Header />

      <main className="pt-20">
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
                AI Deployment<br />
                <span className="gradient-text">& MLOps</span>
              </h1>
              
              <p className="body-large text-gray-300 mb-8 max-w-2xl">
                Deploy AI systems to production at scale. Learn deployment architectures, infrastructure planning, monitoring and observability, versioning and rollback strategies, and production operations.
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
                    Enroll Now – €1,600
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

        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="heading-2 mb-6">Module Overview</h2>
                <p className="body-large text-muted-foreground mb-6">
                  Most AI projects fail in deployment, not development. This intensive module 
                  teaches you the MLOps practices and infrastructure skills needed to 
                  successfully deploy and operate AI systems in production.
                </p>
                <p className="body text-muted-foreground mb-8">
                  You'll work with real cloud infrastructure, learning to build scalable, 
                  reliable, and compliant AI deployment pipelines that can handle enterprise 
                  requirements.
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
                      <span className="text-muted-foreground">Production deployment delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Operations runbook</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Monitoring dashboard setup</span>
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

        <section className="section-padding bg-muted/50">
          <div className="container-coad">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">4-Week Curriculum</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {weeklyBreakdown.map((week, index) => (
                <div key={index} className="bg-card rounded-2xl border border-border overflow-hidden card-hover">
                  <div className="bg-gradient-to-r from-primary/10 to-teal/10 px-6 py-4 border-b border-border">
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

        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Real-World Applications</h2>
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
                    <Link to="/auth">Enroll Now – €1,600</Link>
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

export default AIDeployment;