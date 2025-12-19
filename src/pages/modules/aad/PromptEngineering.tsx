import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  LightbulbNodeIcon,
  CheckNodeIcon,
  ClockNodeIcon,
  AwardNodeIcon,
  GraduationNodeIcon
} from '@/components/ui/custom-icons';
import { ArrowRight, Calendar, Briefcase } from 'lucide-react';

const PromptEngineering = () => {
  const weeklyBreakdown = [
    {
      week: 1,
      title: "Masterclass – Prompt Engineering Fundamentals",
      hours: "15-20",
      description: "Live/Recorded Session (1-2 hours) covering model behavior, prompt patterns, task optimization, iteration strategies, and common pitfalls.",
      keyConcepts: ["Prompt patterns", "Model behavior", "Task optimization", "Iteration strategies"],
      activities: [
        "Model Behavior: Understand how LLMs process prompts and generate outputs",
        "Prompt Patterns: Learn proven patterns (Chain-of-Thought, few-shot, role-playing, structured output)",
        "Task Optimization: Design prompts optimized for specific tasks (classification, generation, extraction, reasoning)",
        "Iteration Strategies: Systematic approaches to improving prompts through testing",
        "Common Pitfalls: Avoid typical prompt engineering mistakes"
      ]
    },
    {
      week: 2,
      title: "Hands-On Labs – Crafting Effective Prompts",
      hours: "15-20",
      description: "Practical Exercises (15-20 hours) including pattern application, task optimization, and advanced techniques.",
      keyConcepts: ["Pattern application", "Task optimization", "Few-shot learning", "Chain-of-Thought"],
      activities: [
        "Lab 1: Pattern Application - Apply different prompt patterns to various tasks, compare results, create prompt libraries",
        "Lab 2: Task Optimization - Design prompts for specific use cases, optimize for quality/consistency/efficiency, test and iterate",
        "Lab 3: Advanced Techniques - Use few-shot learning and in-context examples, implement Chain-of-Thought reasoning, design prompts for complex multi-step tasks",
        "Deliverables: Prompt libraries, optimized prompts, comparison analyses"
      ]
    },
    {
      week: 3,
      title: "Mentored Sessions – Prompt Refinement",
      hours: "15-20",
      description: "Forum Q&A + Optional Live Office Hours for expert feedback, quality improvement, use case guidance, best practices, and troubleshooting.",
      keyConcepts: ["Expert feedback", "Quality improvement", "Best practices", "Troubleshooting"],
      activities: [
        "Expert Feedback: Get expert review of your prompt designs",
        "Quality Improvement: Learn techniques for improving prompt quality and consistency",
        "Use Case Guidance: Receive guidance on prompts for specific use cases",
        "Best Practices: Learn from successful prompt engineering examples",
        "Troubleshooting: Get help debugging prompt issues and improving results",
        "Focus Areas: Prompt quality, consistency, optimization, practical application"
      ]
    },
    {
      week: 4,
      title: "Mini-Capstone – Prompt Engineering Portfolio",
      hours: "15-20",
      description: "Final Project (15-20 hours) creating a comprehensive prompt engineering portfolio demonstrating mastery across different use cases.",
      keyConcepts: ["Prompt library", "Use case demonstrations", "Optimization documentation", "Performance analysis", "Best practices guide"],
      activities: [
        "Prompt Library: Collection of optimized prompts for various tasks",
        "Use Case Demonstrations: Working prompts for 3-5 different use cases",
        "Optimization Documentation: Explanation of prompt design decisions and iterations",
        "Performance Analysis: Comparison of prompt variations and their results",
        "Best Practices Guide: Documented learnings and recommendations",
        "Mentor Review: Receive detailed rubric-based feedback on prompt quality, variety, and practical applicability",
        "Portfolio Piece: Your capstone becomes a portfolio-ready prompt engineering portfolio demonstrating your skills"
      ]
    }
  ];

  const realWorldUseCases = [
    {
      industry: "Customer Service",
      scenario: "Designing prompts for AI assistants that maintain brand voice while resolving customer issues effectively."
    },
    {
      industry: "Content Creation",
      scenario: "Building prompt systems for marketing teams to generate consistent, on-brand content at scale."
    },
    {
      industry: "Legal",
      scenario: "Creating prompts for contract analysis and document summarization with high accuracy requirements."
    },
    {
      industry: "Education",
      scenario: "Developing adaptive tutoring prompts that adjust to student comprehension levels."
    }
  ];

  const learningOutcomes = [
    "Master core prompt engineering principles and techniques",
    "Implement advanced prompting strategies like chain-of-thought",
    "Design prompt systems for enterprise applications",
    "Create maintainable prompt libraries with version control",
    "Ensure EU AI Act transparency compliance",
    "Build evaluation frameworks for prompt performance"
  ];

  return (
    <>
      <Helmet>
        <title>Prompt Engineering | AAD Module | COAD</title>
        <meta name="description" content="Master prompt engineering in this 60-hour, 4-week module. Learn advanced techniques for LLM optimization with blockchain certification." />
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
                Prompt<br />
                <span className="gradient-text">Engineering</span>
              </h1>
              
              <p className="body-large text-gray-300 mb-8 max-w-2xl">
                The Prompt Engineering module teaches you to master the art of effective AI prompting. You'll learn proven techniques for crafting prompts that produce reliable, high-quality outputs from large language models—moving beyond trial-and-error to systematic, repeatable prompt design.
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
                    Enroll Now – €750
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

        {/* Content sections follow same pattern */}
        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="heading-2 mb-6">Module Overview</h2>
                <p className="body-large text-muted-foreground mb-6">
                  The Prompt Engineering module teaches you to master the art of effective AI prompting. You'll learn proven techniques for crafting prompts that produce reliable, high-quality outputs from large language models—moving beyond trial-and-error to systematic, repeatable prompt design.
                </p>
                <p className="body text-muted-foreground mb-6">
                  Prompt engineering is the foundation of working with modern AI systems. This module provides structured frameworks for prompt design: understanding model behavior, using proven patterns (Chain-of-Thought, few-shot learning, role-playing), optimizing for specific tasks, and iterating systematically. Whether you're building AI applications, automating workflows, or extracting insights, this module gives you the prompt engineering skills needed for success.
                </p>

                <div className="bg-muted/50 rounded-xl p-6 border border-border mb-8">
                  <h3 className="font-semibold mb-4">Who This Module Is For</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">AI Practitioners</strong> building applications with LLMs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Developers</strong> integrating AI capabilities into products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Analysts</strong> using AI for data analysis and insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Content Creators</strong> leveraging AI for content generation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Automation Specialists</strong> building AI-powered workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Anyone</strong> working with large language models who wants better results</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4 italic">Prerequisites: Basic familiarity with AI/LLMs helpful but not required. No coding required.</p>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-4">Assessment Criteria</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-foreground font-medium">Project Rubric (80% pass requirement)</span>
                        <p className="text-sm text-muted-foreground mt-1">Prompt quality and effectiveness (30%), pattern application (25%), use case variety (20%), optimization documentation (15%), portfolio completeness (10%)</p>
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
                    "Design Effective Prompts: Create prompts that produce reliable, high-quality outputs",
                    "Apply Patterns: Use proven prompt patterns for different tasks and use cases",
                    "Optimize Prompts: Iterate systematically to improve prompt quality and consistency",
                    "Handle Complex Tasks: Design prompts for multi-step, complex reasoning tasks",
                    "Build Prompt Libraries: Create reusable prompt collections for common tasks",
                    "Document Best Practices: Document prompt engineering learnings and patterns"
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
                      <span><strong className="text-foreground">Foundation Skill:</strong> Prompt engineering is essential for working with modern AI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Immediate Application:</strong> Apply prompt skills to current projects immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Career Enhancement:</strong> Demonstrate practical AI skills employers value</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Cost Efficiency:</strong> Better prompts reduce API costs and improve results</span>
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
                From fundamentals to enterprise-grade prompt systems.
              </p>
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
                        <span className="text-primary font-semibold">30%</span>
                        <span className="text-muted-foreground">Prompt quality and effectiveness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">25%</span>
                        <span className="text-muted-foreground">Pattern application</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">20%</span>
                        <span className="text-muted-foreground">Use case variety</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">15%</span>
                        <span className="text-muted-foreground">Optimization documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">10%</span>
                        <span className="text-muted-foreground">Portfolio completeness</span>
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
                        <span className="text-muted-foreground"><strong className="text-foreground">Blockchain-Verified Certificate:</strong> "Certificate of Competency in Prompt Engineering"</span>
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
                        <span className="text-muted-foreground"><strong className="text-foreground">Portfolio Artifact:</strong> Your capstone prompt portfolio for your professional portfolio</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="heading-2 mb-6">Pricing & Enrollment</h2>
                <div className="bg-card rounded-xl p-6 border border-border mb-6">
                  <div className="text-4xl font-bold gradient-text mb-2">€750</div>
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
                    <Link to="/auth">Enroll Now – €750</Link>
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

export default PromptEngineering;