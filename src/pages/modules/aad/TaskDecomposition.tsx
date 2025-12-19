import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  CircuitLayersIcon,
  CheckNodeIcon,
  ClockNodeIcon,
  AwardNodeIcon,
  GraduationNodeIcon,
  NetworkNodesIcon,
  ShieldNodeIcon
} from '@/components/ui/custom-icons';
import { ArrowRight, Calendar, Users, Target, BookOpen, Briefcase } from 'lucide-react';

const TaskDecomposition = () => {
  const weeklyBreakdown = [
    {
      week: 1,
      title: "Masterclass – Breaking Problems into AI Tasks",
      hours: "15-20",
      description: "Live/Recorded Session (1-2 hours) covering goal analysis, task hierarchies, workflow mapping, AI suitability assessment, and success criteria definition.",
      keyConcepts: ["Task decomposition", "Workflow modeling", "AI-human task allocation", "Dependency mapping"],
      activities: [
        "Goal Analysis: Learn to identify the core objective behind any business problem",
        "Task Hierarchies: Understand how to decompose high-level goals into sub-tasks and atomic actions",
        "Workflow Mapping: Master techniques for visualizing processes, dependencies, and decision points",
        "AI Suitability Assessment: Discover which tasks are best suited for AI automation vs. human judgment",
        "Success Criteria Definition: Learn to define measurable outcomes for each workflow stage"
      ]
    },
    {
      week: 2,
      title: "Hands-On Labs – Building Simple Workflows",
      hours: "15-20",
      description: "Practical Exercises (15-20 hours) including process mapping, workflow design, and AI integration planning.",
      keyConcepts: ["Process mapping", "Workflow design", "AI integration", "Exception handling"],
      activities: [
        "Lab 1: Process Mapping - Map a current business process, identify automation opportunities, distinguish structured vs unstructured tasks",
        "Lab 2: Workflow Design - Design optimized workflows using no-code/low-code tools, create process diagrams, document failure paths",
        "Lab 3: AI Integration Planning - Identify where AI agents fit, define input/output requirements, plan oversight checkpoints",
        "Deliverables: Process maps, workflow diagrams, AI integration plan"
      ]
    },
    {
      week: 3,
      title: "Mentored Sessions – Refining Your Workflow",
      hours: "15-20",
      description: "Forum Q&A + Optional Live Office Hours for structured feedback, edge case analysis, optimization guidance, and real-world scenarios.",
      keyConcepts: ["Peer review", "Edge case handling", "Optimization", "Best practices"],
      activities: [
        "Structured Feedback: Post your workflow design for peer and mentor review",
        "Edge Case Analysis: Discuss how to handle exceptions, errors, and unexpected inputs",
        "Optimization Guidance: Receive expert feedback on workflow efficiency and clarity",
        "Real-World Scenarios: Work through case studies from various industries",
        "Q&A Sessions: Get answers to specific questions about your workflow challenges",
        "Focus Areas: Clarity, robustness, failure handling, scalability"
      ]
    },
    {
      week: 4,
      title: "Mini-Capstone – Deliver Optimized Workflow",
      hours: "15-20",
      description: "Final Project (15-20 hours) designing and documenting a fully optimized workflow for a real business process.",
      keyConcepts: ["Complete process map", "Task breakdown", "AI integration points", "Failure handling", "Oversight checkpoints", "Success metrics"],
      activities: [
        "Complete Process Map: Visual representation of the entire workflow",
        "Task Breakdown: Detailed decomposition of each major step",
        "AI Integration Points: Clear specification of where and how AI agents participate",
        "Failure Handling: Documented exception paths and error recovery",
        "Oversight Checkpoints: Defined human review and approval stages",
        "Success Metrics: Measurable outcomes for workflow validation",
        "Mentor Review: Receive detailed rubric-based feedback on clarity, completeness, and practical applicability",
        "Portfolio Piece: Your capstone becomes a portfolio-ready artifact demonstrating your workflow design competency"
      ]
    }
  ];

  const realWorldUseCases = [
    {
      industry: "Financial Services",
      scenario: "Automating loan application processing by breaking down document verification, credit scoring, and compliance checks into discrete AI tasks."
    },
    {
      industry: "Healthcare",
      scenario: "Decomposing patient intake workflows into AI-managed scheduling, document digitization, and preliminary symptom analysis."
    },
    {
      industry: "Manufacturing",
      scenario: "Creating modular quality control workflows with AI inspection, defect classification, and reporting tasks."
    },
    {
      industry: "Legal Services",
      scenario: "Building contract review workflows with extraction, clause analysis, and risk flagging as separate AI components."
    }
  ];

  const learningOutcomes = [
    "Master problem decomposition frameworks for AI applications",
    "Design efficient task sequences for AI workflow systems",
    "Apply no-code tools for rapid AI workflow prototyping",
    "Ensure ESG 2015 compliance in workflow design",
    "Create documentation meeting EU AI Act standards",
    "Build portfolio-ready workflow deliverables"
  ];

  return (
    <>
      <Helmet>
        <title>Task Decomposition & AI Workflow Design | AAD Module | COAD</title>
        <meta name="description" content="Master problem decomposition and AI workflow design in this 60-hour, 4-week module. Build practical skills with no-code tools and earn a blockchain-verified certificate." />
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
                  60 Hours • 4 Weeks
                </span>
                <span className="px-3 py-1 rounded-full bg-muted/20 text-gray-300 text-sm font-medium">
                  Light Intensity
                </span>
              </div>
              
              <h1 className="heading-1 mb-6">
                Task Decomposition &<br />
                <span className="gradient-text">AI Workflow Design</span>
              </h1>
              
              <p className="body-large text-gray-300 mb-8 max-w-2xl">
                Learn to break complex problems into AI-manageable components and design efficient 
                workflows using no-code tools. Perfect for non-programmers entering AI implementation.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <ClockNodeIcon className="w-5 h-5 text-primary" />
                  <span>60 Contact Hours</span>
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
                    Enroll Now – €800
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
                  The Task Decomposition & AI Workflow Design module equips professionals with the foundational skill of breaking complex business problems into structured, AI-manageable components. Whether you're an analyst, engineer, consultant, or product manager, this module teaches you to transform vague objectives into clear, executable workflows that AI systems can reliably handle and improve over time.
                </p>
                <p className="body text-muted-foreground mb-6">
                  Many professionals know what they want AI to accomplish but struggle to translate business needs into actionable steps. This module bridges that gap, providing you with systematic frameworks for task analysis, workflow mapping, and AI integration planning. You'll learn to distinguish between human and agent work, identify dependencies, define success criteria, and design workflows that are both powerful and maintainable.
                </p>

                <div className="bg-muted/50 rounded-xl p-6 border border-border mb-8">
                  <h3 className="font-semibold mb-4">Who This Module Is For</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Business Analysts</strong> who need to translate stakeholder requirements into AI-automatable processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Product Managers</strong> designing features that integrate AI capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Consultants</strong> helping clients identify AI opportunities in their operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Operations Professionals</strong> seeking to optimize workflows with AI assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Technical Professionals</strong> new to AI who want to understand workflow design principles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Entrepreneurs</strong> building AI-powered products or services</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4 italic">Prerequisites: No coding required. Basic familiarity with business processes and problem-solving is helpful.</p>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-4">Assessment Criteria</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-foreground font-medium">Project Rubric (80% pass requirement)</span>
                        <p className="text-sm text-muted-foreground mt-1">Task decomposition quality (25%), workflow clarity (25%), AI integration planning (20%), failure handling (20%), documentation quality (10%)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Active participation in forums, labs, and mentored sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Mini-capstone deliverable with mentor feedback</span>
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
                    "Decompose Complex Problems: Break down ambiguous business objectives into clear, actionable tasks",
                    "Design AI-Ready Workflows: Create process maps that clearly show where AI agents fit and how they interact with human steps",
                    "Identify Dependencies: Map task sequences, prerequisites, and parallel execution opportunities",
                    "Plan for Failure: Design workflows that gracefully handle errors, exceptions, and edge cases",
                    "Define Success Criteria: Establish measurable outcomes for each workflow stage",
                    "Document Processes: Create clear, maintainable workflow documentation suitable for technical and non-technical stakeholders"
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
                      <span><strong className="text-foreground">Immediate Applicability:</strong> Apply workflow design skills to your current role immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Foundation for AI Projects:</strong> Essential prerequisite for building AI-powered systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Career Enhancement:</strong> Demonstrate structured thinking and process optimization skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Standalone or Stackable:</strong> Take independently or as credit toward AAC track completion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">EU AI Act Alignment:</strong> Learn to design workflows that incorporate oversight and compliance from the start</span>
                    </li>
                  </ul>
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
                JHU-inspired methodology combining live masterclasses, hands-on labs, 
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

        {/* Real-World Use Cases */}
        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Real-World Applications</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                See how task decomposition and workflow design applies across industries.
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
                        <span className="text-muted-foreground">Task decomposition quality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">25%</span>
                        <span className="text-muted-foreground">Workflow clarity and completeness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">20%</span>
                        <span className="text-muted-foreground">AI integration planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">20%</span>
                        <span className="text-muted-foreground">Failure handling and oversight</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">10%</span>
                        <span className="text-muted-foreground">Documentation quality</span>
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
                        <span className="text-muted-foreground"><strong className="text-foreground">Blockchain-Verified Certificate:</strong> "Certificate of Competency in Task Decomposition & AI Workflow Design"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AwardNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Digital Badge:</strong> Shareable on LinkedIn and the Accredited Experts Directory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AwardNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">ECTS Credits:</strong> 2 credits (60 hours) toward professional development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AwardNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Portfolio Artifact:</strong> Your capstone workflow design for your professional portfolio</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="heading-2 mb-6">Pricing & Enrollment</h2>
                <div className="bg-card rounded-xl p-6 border border-border mb-6">
                  <div className="text-4xl font-bold gradient-text mb-2">€800</div>
                  <p className="text-muted-foreground text-sm mb-6">4 weeks (60 hours) • 2 ECTS Credits</p>
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
                    <Link to="/auth">Enroll Now – €800</Link>
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

export default TaskDecomposition;