import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  DataFlowIcon,
  CheckNodeIcon,
  ClockNodeIcon,
  AwardNodeIcon,
  GraduationNodeIcon
} from '@/components/ui/custom-icons';
import { ArrowRight, Calendar, Briefcase } from 'lucide-react';

const AIProductManagement = () => {
  const weeklyBreakdown = [
    {
      week: 1,
      title: "Masterclass – AI Product Management Fundamentals",
      hours: "25-30",
      description: "Live/Recorded Session (1-2 hours) covering AI product strategy, capability assessment, user-centric design, experimentation frameworks, and ethical considerations.",
      keyConcepts: ["Product strategy", "AI capabilities", "User-centric design", "Experimentation", "Ethics"],
      activities: [
        "AI Product Strategy: Define product vision and strategy for AI-powered products",
        "Capability Assessment: Understand AI capabilities, limitations, and when to use AI",
        "User-Centric Design: Design AI products that meet user needs and build trust",
        "Experimentation Frameworks: Plan and manage AI product experiments and iterations",
        "Ethical Considerations: Integrate ethics and responsibility into product development"
      ]
    },
    {
      week: 2,
      title: "Hands-On Labs – Product Development",
      hours: "25-30",
      description: "Practical Exercises (25-30 hours) including product strategy, user research & design, and go-to-market planning.",
      keyConcepts: ["Product strategy", "User research", "Go-to-market", "Product requirements"],
      activities: [
        "Lab 1: Product Strategy - Define product vision and strategy for an AI product, assess AI capabilities and feasibility, create product roadmaps and prioritization frameworks",
        "Lab 2: User Research & Design - Conduct user research for AI product features, design user experiences for AI-human collaboration, create product requirements and specifications",
        "Lab 3: Go-to-Market Planning - Plan product launch and go-to-market strategy, design metrics and success criteria, create iteration and improvement plans",
        "Deliverables: Product strategy documents, user research findings, go-to-market plans"
      ]
    },
    {
      week: 3,
      title: "Mentored Sessions – Product Leadership",
      hours: "25-30",
      description: "Forum Q&A + Optional Live Office Hours for expert guidance, case studies, best practices, stakeholder management, and iteration strategies.",
      keyConcepts: ["Expert feedback", "Case studies", "Best practices", "Stakeholder management"],
      activities: [
        "Expert Guidance: Get feedback on your product strategy and plans",
        "Case Studies: Analyze successful AI product launches and failures",
        "Best Practices: Learn from experienced AI product managers",
        "Stakeholder Management: Discuss managing stakeholders in AI product development",
        "Iteration Strategies: Plan for continuous improvement and iteration",
        "Focus Areas: Strategy quality, user focus, execution planning, stakeholder management"
      ]
    },
    {
      week: 4,
      title: "Mini-Capstone – AI Product Plan",
      hours: "25-30",
      description: "Final Project (25-30 hours) creating a comprehensive product plan for an AI-powered product.",
      keyConcepts: ["Product vision", "Strategy & roadmap", "User research", "Technical feasibility", "Go-to-market plan", "Ethical framework", "Iteration plan"],
      activities: [
        "Product Vision: Clear vision and value proposition for the AI product",
        "Strategy & Roadmap: Product strategy, roadmap, and prioritization framework",
        "User Research: User needs, personas, and user experience design",
        "Technical Feasibility: AI capability assessment and technical requirements",
        "Go-to-Market Plan: Launch strategy, metrics, and success criteria",
        "Ethical Framework: Ethical considerations and responsible AI practices",
        "Iteration Plan: Strategy for continuous improvement and learning",
        "Mentor Review: Receive detailed rubric-based feedback on product plan completeness, strategic thinking, and practical applicability",
        "Portfolio Piece: Your capstone becomes a portfolio-ready product plan demonstrating your AI product management competency"
      ]
    }
  ];

  const realWorldUseCases = [
    {
      industry: "SaaS",
      scenario: "Managing AI feature development within a product suite while balancing innovation with compliance requirements."
    },
    {
      industry: "Healthcare Tech",
      scenario: "Launching AI diagnostic tools through complex regulatory pathways while meeting market timelines."
    },
    {
      industry: "FinTech",
      scenario: "Integrating AI capabilities into financial products while maintaining regulatory compliance."
    },
    {
      industry: "EdTech",
      scenario: "Building adaptive learning products that leverage AI while protecting student data."
    }
  ];

  const learningOutcomes = [
    "Develop AI product strategies for regulated markets",
    "Create comprehensive AI product specifications",
    "Coordinate cross-functional AI development teams",
    "Design compliance-integrated product roadmaps",
    "Launch AI products with ESG considerations",
    "Establish post-launch monitoring frameworks"
  ];

  return (
    <>
      <Helmet>
        <title>AI Product Management | AAD Module | COAD</title>
        <meta name="description" content="Master AI product management in this 90-hour module. Learn to build and launch AI products in regulated markets with blockchain certification." />
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
                AI Product<br />
                <span className="gradient-text">Management</span>
              </h1>
              
              <p className="body-large text-gray-300 mb-8 max-w-2xl">
                The AI Product Management module teaches you to lead the complete AI product development lifecycle—from ideation and strategy through development, launch, and iteration. You'll learn to balance technical feasibility, user needs, business value, and ethical considerations to deliver successful AI-powered products.
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
                    Enroll Now – €1,100
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
                  The AI Product Management module teaches you to lead the complete AI product development lifecycle—from ideation and strategy through development, launch, and iteration. You'll learn to balance technical feasibility, user needs, business value, and ethical considerations to deliver successful AI-powered products.
                </p>
                <p className="body text-muted-foreground mb-6">
                  Product management for AI products requires unique skills: understanding AI capabilities and limitations, managing uncertainty and experimentation, designing for AI-human collaboration, and navigating ethical and regulatory considerations. This module provides frameworks and practical techniques for AI product management, combining product management fundamentals with AI-specific considerations.
                </p>

                <div className="bg-muted/50 rounded-xl p-6 border border-border mb-8">
                  <h3 className="font-semibold mb-4">Who This Module Is For</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Product Managers</strong> leading AI product development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Product Owners</strong> managing AI features and capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Technical Product Managers</strong> bridging technical and business teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Entrepreneurs</strong> building AI-powered products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Innovation Leaders</strong> driving AI product strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Anyone</strong> responsible for AI product success</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4 italic">Prerequisites: Basic understanding of product management helpful but not required. Interest in AI product development.</p>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-4">Assessment Criteria</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-foreground font-medium">Project Rubric (80% pass requirement)</span>
                        <p className="text-sm text-muted-foreground mt-1">Product strategy quality (25%), user-centric design (25%), technical feasibility assessment (20%), go-to-market planning (20%), ethical integration (10%)</p>
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
                    "Define Strategy: Create product vision and strategy for AI-powered products",
                    "Assess Capabilities: Evaluate AI feasibility and limitations for product features",
                    "Design Experiences: Create user-centric AI product experiences",
                    "Plan Execution: Develop go-to-market plans and iteration strategies",
                    "Manage Stakeholders: Navigate stakeholder relationships in AI product development",
                    "Integrate Ethics: Incorporate ethical considerations into product development"
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
                      <span><strong className="text-foreground">Career Advancement:</strong> AI product management skills are in high demand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Practical Skills:</strong> Learn frameworks applicable to real product development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Strategic Thinking:</strong> Develop strategic product thinking for AI products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Track Credit:</strong> Counts toward AAC track completion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Leadership Skills:</strong> Build leadership capabilities for AI product teams</span>
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
                        <span className="text-muted-foreground">Product strategy quality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">25%</span>
                        <span className="text-muted-foreground">User-centric design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">20%</span>
                        <span className="text-muted-foreground">Technical feasibility assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">20%</span>
                        <span className="text-muted-foreground">Go-to-market planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">10%</span>
                        <span className="text-muted-foreground">Ethical integration</span>
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
                        <span className="text-muted-foreground"><strong className="text-foreground">Blockchain-Verified Certificate:</strong> "Certificate of Competency in AI Product Management"</span>
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
                        <span className="text-muted-foreground"><strong className="text-foreground">Portfolio Artifact:</strong> Your capstone product plan for your professional portfolio</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="heading-2 mb-6">Pricing & Enrollment</h2>
                <div className="bg-card rounded-xl p-6 border border-border mb-6">
                  <div className="text-4xl font-bold gradient-text mb-2">€1,100</div>
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
                        <span><strong className="text-foreground">Track Credit:</strong> Counts toward AAC (Agentic AI Competency) track completion</span>
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

        {/* Track Integration */}
        <section className="section-padding bg-navy text-primary-foreground">
          <div className="container-coad">
            <div className="max-w-4xl mx-auto text-center">
              <GraduationNodeIcon className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="heading-2 mb-4">Part of the AAC Track</h2>
              <p className="body-large text-gray-300 mb-6">
                This module counts toward your Agentic AI Competency (AAC) Track certification. 
                Complete all track modules to achieve Charterholder status and priority 
                listing in the COAD Expert Directory.
              </p>
              <p className="text-sm text-gray-400 mb-8">
                <strong>Track Integration:</strong> This module complements all AAC phases with product management skills
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/auth">Enroll Now – €1,100</Link>
                </Button>
                <Button variant="outline" size="xl" className="border-gray-600 text-gray-300 hover:bg-white/10" asChild>
                  <Link to="/certifications">Explore Full AAC Track</Link>
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

export default AIProductManagement;