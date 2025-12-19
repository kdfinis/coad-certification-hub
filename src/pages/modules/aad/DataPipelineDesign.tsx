import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  DataNodeIcon,
  CheckNodeIcon,
  ClockNodeIcon,
  AwardNodeIcon,
  GraduationNodeIcon
} from '@/components/ui/custom-icons';
import { ArrowRight, Calendar, Briefcase } from 'lucide-react';

const DataPipelineDesign = () => {
  const weeklyBreakdown = [
    {
      week: 1,
      title: "Masterclass – Data Pipeline Fundamentals",
      hours: "25-30",
      description: "Live/Recorded Session (1-2 hours) covering pipeline architecture, data sources, transformation design, validation strategies, and error handling.",
      keyConcepts: ["Pipeline architecture", "Data transformation", "Validation", "Error handling", "Scalability"],
      activities: [
        "Pipeline Architecture: Understand data pipeline components (ingestion, transformation, validation, storage)",
        "Data Sources: Plan for diverse data sources (databases, APIs, files, streams)",
        "Transformation Design: Design data transformations for AI model requirements",
        "Validation Strategies: Implement data quality checks and validation",
        "Error Handling: Plan for pipeline failures, retries, and recovery"
      ]
    },
    {
      week: 2,
      title: "Hands-On Labs – Pipeline Design",
      hours: "25-30",
      description: "Practical Exercises (25-30 hours) including architecture design, transformation design, and validation & monitoring.",
      keyConcepts: ["Architecture design", "Transformation design", "Validation", "Monitoring"],
      activities: [
        "Lab 1: Architecture Design - Design data pipeline architectures for specific AI use cases, plan data flow/transformations/storage, create pipeline architecture diagrams",
        "Lab 2: Transformation Design - Design data transformations for AI model inputs, plan data cleaning/feature engineering/formatting, create transformation specifications",
        "Lab 3: Validation & Monitoring - Design data quality checks and validation rules, plan pipeline monitoring and alerting, create validation and monitoring plans",
        "Deliverables: Pipeline architectures, transformation specifications, validation plans"
      ]
    },
    {
      week: 3,
      title: "Mentored Sessions – Pipeline Optimization",
      hours: "25-30",
      description: "Forum Q&A + Optional Live Office Hours for expert feedback, scalability planning, performance optimization, best practices, and troubleshooting.",
      keyConcepts: ["Expert feedback", "Scalability", "Performance", "Best practices"],
      activities: [
        "Expert Feedback: Get guidance on your pipeline designs",
        "Scalability Planning: Discuss scaling data pipelines for growth",
        "Performance Optimization: Learn techniques for optimizing pipeline performance",
        "Best Practices: Learn from successful data pipeline implementations",
        "Troubleshooting: Get help with common pipeline challenges",
        "Focus Areas: Scalability, performance, reliability, maintainability"
      ]
    },
    {
      week: 4,
      title: "Mini-Capstone – Complete Pipeline Design",
      hours: "25-30",
      description: "Final Project (25-30 hours) designing a complete data pipeline for an AI system.",
      keyConcepts: ["Pipeline architecture", "Data sources", "Transformation design", "Validation strategy", "Error handling", "Monitoring plan", "Scalability plan"],
      activities: [
        "Pipeline Architecture: Complete design showing all components and data flows",
        "Data Sources: Specification of data sources and ingestion methods",
        "Transformation Design: Detailed transformation specifications",
        "Validation Strategy: Data quality checks and validation rules",
        "Error Handling: Failure modes, retry logic, and recovery procedures",
        "Monitoring Plan: Pipeline monitoring, alerting, and observability",
        "Scalability Plan: Strategy for scaling the pipeline",
        "Mentor Review: Receive detailed rubric-based feedback on pipeline design quality, completeness, and practical applicability",
        "Portfolio Piece: Your capstone becomes a portfolio-ready pipeline design demonstrating your data engineering competency"
      ]
    }
  ];

  const realWorldUseCases = [
    {
      industry: "Retail Analytics",
      scenario: "Building real-time data pipelines for AI-driven inventory and demand forecasting systems."
    },
    {
      industry: "Financial Services",
      scenario: "Creating compliant data pipelines for AI credit scoring with full audit trails."
    },
    {
      industry: "IoT & Manufacturing",
      scenario: "Streaming data pipelines for predictive maintenance AI in industrial settings."
    },
    {
      industry: "Healthcare",
      scenario: "Privacy-compliant pipelines for AI diagnostics with patient data protection."
    }
  ];

  const learningOutcomes = [
    "Design scalable data pipeline architectures for AI",
    "Implement data quality and validation frameworks",
    "Build compliant pipelines with full lineage tracking",
    "Configure monitoring and alerting systems",
    "Ensure EU AI Act data governance compliance",
    "Create production-ready pipeline documentation"
  ];

  return (
    <>
      <Helmet>
        <title>Data Pipeline Design | AAD Module | COAD</title>
        <meta name="description" content="Master AI data pipeline design in this 90-hour module. Learn to build scalable, compliant data infrastructure with blockchain certification." />
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
                Data Pipeline<br />
                <span className="gradient-text">Design</span>
              </h1>
              
              <p className="body-large text-gray-300 mb-8 max-w-2xl">
                The Data Pipeline Design module teaches you to build robust, scalable data pipelines that feed AI systems reliably. You'll learn to design data ingestion, transformation, validation, and storage systems that ensure AI models receive clean, timely, and properly formatted data—critical for production AI systems.
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

        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="heading-2 mb-6">Module Overview</h2>
                <p className="body-large text-muted-foreground mb-6">
                  The Data Pipeline Design module teaches you to build robust, scalable data pipelines that feed AI systems reliably. You'll learn to design data ingestion, transformation, validation, and storage systems that ensure AI models receive clean, timely, and properly formatted data—critical for production AI systems.
                </p>
                <p className="body text-muted-foreground mb-6">
                  Data pipelines are the foundation of reliable AI systems. This module provides frameworks for designing data pipelines: understanding data sources, planning transformations, implementing validation, handling errors, and ensuring scalability. Whether you're building pipelines for training data, real-time inference, or ongoing model updates, this module gives you the design skills needed for production-ready data infrastructure.
                </p>

                <div className="bg-muted/50 rounded-xl p-6 border border-border mb-8">
                  <h3 className="font-semibold mb-4">Who This Module Is For</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Data Engineers</strong> building data pipelines for AI systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">ML Engineers</strong> designing data infrastructure for ML models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Data Architects</strong> planning data pipelines and infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">DevOps Professionals</strong> managing data pipeline infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Technical Leads</strong> overseeing data pipeline development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Anyone</strong> responsible for data infrastructure for AI systems</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4 italic">Prerequisites: Understanding of data engineering concepts. Familiarity with databases and data processing helpful.</p>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-4">Assessment Criteria</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-foreground font-medium">Project Rubric (80% pass requirement)</span>
                        <p className="text-sm text-muted-foreground mt-1">Architecture design quality (25%), transformation design (25%), validation strategy (20%), error handling and scalability (20%), documentation completeness (10%)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Active participation in labs, forums, and mentored sessions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-6">Learning Outcomes</h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Upon completion, you will be able to:
                </p>
                <div className="space-y-4">
                  {[
                    "Design Pipelines: Create complete data pipeline architectures for AI systems",
                    "Plan Transformations: Design data transformations for AI model requirements",
                    "Implement Validation: Build data quality checks and validation systems",
                    "Handle Errors: Design error handling and recovery for pipeline failures",
                    "Scale Systems: Plan for pipeline scalability and performance",
                    "Monitor Pipelines: Design monitoring and observability for data pipelines"
                  ].map((outcome, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-foreground text-sm">{outcome}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gradient-to-br from-primary/10 to-teal/10 rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-3">Module Benefits</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Critical Infrastructure:</strong> Data pipelines are essential for production AI systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Career Enhancement:</strong> Data engineering skills combined with AI expertise are highly valued</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Production Ready:</strong> Learn design patterns used in real-world data pipelines</span>
                    </li>
                    
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Foundation Skill:</strong> Essential for building reliable AI systems</span>
                    </li>
                  </ul>
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
                    {week.keyConcepts && (
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-foreground mb-2">Key Concepts:</p>
                        <div className="flex flex-wrap gap-2">
                          {week.keyConcepts.map((concept, i) => (
                            <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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

        {/* Certification & Benefits */}
        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="heading-2 mb-6">Assessment & Certification</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Assessment Method</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Your mini-capstone is evaluated against a detailed rubric covering:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">25%</span>
                        <span className="text-muted-foreground">Architecture design quality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">25%</span>
                        <span className="text-muted-foreground">Transformation design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">20%</span>
                        <span className="text-muted-foreground">Validation strategy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">20%</span>
                        <span className="text-muted-foreground">Error handling and scalability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">10%</span>
                        <span className="text-muted-foreground">Documentation completeness</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                      <strong className="text-foreground">Pass Requirement:</strong> 80% overall score
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-teal/10 rounded-xl p-6 border border-border">
                    <h3 className="font-semibold mb-3">Certificate</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Upon successful completion, you receive:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <AwardNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Blockchain-Verified Certificate:</strong> "Certificate of Competency in Data Pipeline Design for AI Systems"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AwardNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Digital Badge:</strong> Shareable on LinkedIn and the Accredited Experts Directory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AwardNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">ECTS Credits:</strong> 3 credits (90 hours) toward professional development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AwardNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Portfolio Artifact:</strong> Your capstone pipeline design for your professional portfolio</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="heading-2 mb-6">Pricing & Enrollment</h2>
                <div className="bg-card rounded-xl p-6 border border-border mb-6">
                  <div className="text-4xl font-bold gradient-text mb-2">€1,200</div>
                  <p className="text-muted-foreground text-sm mb-6">4 weeks (90 hours) • 3 ECTS Credits</p>
                  <h3 className="font-semibold mb-3">What's Included:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span>Access to all masterclass recordings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span>Hands-on lab exercises and materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span>Mentored support (forum + optional office hours)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span>Rubric-based assessment and feedback</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span>Blockchain-verified certificate upon completion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span>Lifetime access to course materials</span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-border">
                    <h3 className="font-semibold mb-3">Enrollment Options:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Standalone:</strong> Take this module independently</span>
                      </li>
                      
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Corporate:</strong> Bulk enrollment available for teams</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Use Cases */}
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
                    <Link to="/auth">Enroll Now – €1,200</Link>
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

export default DataPipelineDesign;