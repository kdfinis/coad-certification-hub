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
      title: "Masterclass – Prompt Design Principles",
      hours: 15,
      description: "Expert-led session covering the science and art of effective prompt engineering.",
      activities: [
        "LLM behavior and capabilities",
        "Prompt structure and formatting",
        "Context window optimization",
        "Zero-shot vs few-shot techniques"
      ]
    },
    {
      week: 2,
      title: "Hands-On Labs – Advanced Techniques",
      hours: 15,
      description: "Practical exercises with chain-of-thought, role prompting, and retrieval augmentation.",
      activities: [
        "Chain-of-thought prompting",
        "Role and persona engineering",
        "RAG system integration",
        "Prompt chaining strategies"
      ]
    },
    {
      week: 3,
      title: "Mentored Sessions – Enterprise Applications",
      hours: 15,
      description: "Expert guidance on deploying prompt engineering in production environments.",
      activities: [
        "Prompt version control",
        "Testing and evaluation methods",
        "ESG-aligned content generation",
        "EU AI Act transparency requirements"
      ]
    },
    {
      week: 4,
      title: "Mini-Capstone – Prompt Library",
      hours: 15,
      description: "Design and deliver a production-ready prompt library for enterprise use.",
      activities: [
        "Comprehensive prompt library",
        "Documentation and guidelines",
        "Testing and validation results",
        "Blockchain certificate issuance"
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
                Master the art and science of communicating with large language models. Learn 
                advanced techniques to get consistent, high-quality outputs from AI systems.
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
                  Prompt engineering is the foundational skill for anyone working with LLMs. This 
                  module takes you from basics to advanced techniques, covering everything from 
                  simple prompts to complex RAG systems.
                </p>
                <p className="body text-muted-foreground mb-8">
                  You'll learn not just how to write prompts, but how to build maintainable prompt 
                  systems for enterprise use – including version control, testing, and compliance 
                  documentation.
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
                      <span className="text-muted-foreground">Prompt library delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Testing documentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Peer review participation</span>
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
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/auth">Enroll Now – €750</Link>
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

export default PromptEngineering;