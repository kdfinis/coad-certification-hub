import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  NeuralBrainIcon,
  CheckNodeIcon,
  ClockNodeIcon,
  AwardNodeIcon,
  GraduationNodeIcon
} from '@/components/ui/custom-icons';
import { ArrowRight, Calendar, Briefcase } from 'lucide-react';

const LatestInAI = () => {
  const weeklyBreakdown = [
    {
      week: 1,
      title: "Masterclass – AI Landscape Overview",
      hours: 15,
      description: "Expert session on the current AI, GenAI, and Agentic AI landscape, key paradigms, ecosystem players, and evaluation frameworks.",
      activities: [
        "Understand the current AI, GenAI, and Agentic AI landscape",
        "Learn about major paradigms and approaches (LLMs, agents, multi-agent systems, tool use)",
        "Identify major players, frameworks, and platforms",
        "Learn to distinguish between breakthrough developments and incremental updates",
        "Understand how to assess new developments for practical impact"
      ]
    },
    {
      week: 2,
      title: "Hands-On Labs – Mapping Trends to Use Cases",
      hours: 20,
      description: "Practical exercises analyzing trends, evaluating tools, and creating strategic mapping documents.",
      activities: [
        "Analyze recent AI developments and their implications",
        "Map emerging tools and techniques to business use cases",
        "Create trend analysis reports",
        "Evaluate new AI tools and frameworks for specific use cases",
        "Compare capabilities, limitations, and adoption considerations",
        "Map AI trends to your organization's or personal roadmap",
        "Identify opportunities and risks from new developments"
      ]
    },
    {
      week: 3,
      title: "Mentored Sessions – Critical Evaluation",
      hours: 15,
      description: "Expert guidance on distinguishing hype from reality, risk assessment, use case analysis, and strategic planning.",
      activities: [
        "Get expert perspectives on current AI developments",
        "Learn to distinguish between marketing hype and genuine breakthroughs",
        "Discuss risks and limitations of new AI capabilities",
        "Evaluate how new developments fit specific use cases",
        "Receive guidance on integrating new capabilities into your roadmap"
      ]
    },
    {
      week: 4,
      title: "Mini-Capstone – Personal AI Development Roadmap",
      hours: 20,
      description: "Create a comprehensive 12-24 month personal or organizational AI development roadmap with current state assessment, trend analysis, opportunity identification, learning plan, tool adoption strategy, risk mitigation, and success metrics.",
      activities: [
        "Assess where you are now with AI capabilities",
        "Analyze key AI developments relevant to your context",
        "Identify specific opportunities from new AI capabilities",
        "Plan what you'll learn, build, and test over the next 12-24 months",
        "Determine which new tools and frameworks you'll adopt and when",
        "Plan how you'll manage risks from adopting new capabilities",
        "Define how you'll measure progress and success"
      ]
    }
  ];

  const realWorldUseCases = [
    {
      industry: "Enterprise Strategy",
      scenario: "Evaluating and recommending AI technology investments for organizational digital transformation."
    },
    {
      industry: "Product Development",
      scenario: "Identifying AI capabilities to integrate into product roadmaps for competitive advantage."
    },
    {
      industry: "Consulting",
      scenario: "Advising clients on AI technology trends and their strategic implications."
    },
    {
      industry: "Innovation Labs",
      scenario: "Exploring emerging AI technologies for potential proof-of-concept development."
    }
  ];

  const learningOutcomes = [
    "Systematically track and evaluate new AI developments",
    "Identify significant breakthroughs vs. incremental updates",
    "Assess new AI tools and frameworks for practical applicability",
    "Create roadmaps for adopting new AI capabilities",
    "Understand risks and limitations of emerging AI technologies",
    "Maintain ongoing awareness of AI landscape developments"
  ];

  return (
    <>
      <Helmet>
        <title>Latest in AI 2025 | AAC Module | COAD</title>
        <meta name="description" content="Stay current with cutting-edge developments in Agentic AI, large language models, and autonomous systems. Learn to track breakthroughs and evaluate new tools." />
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
                  60 Hours • 4 Weeks
                </span>
                <span className="px-3 py-1 rounded-full bg-muted/20 text-gray-300 text-sm font-medium">
                  Light Intensity
                </span>
              </div>
              
              <h1 className="heading-1 mb-6">
                Latest in AI<br />
                <span className="gradient-text">2025</span>
              </h1>
              
              <p className="body-large text-gray-300 mb-8 max-w-2xl">
                Keep current with cutting-edge developments in Agentic AI, large language models, and autonomous systems. Learn to track breakthroughs, evaluate new tools and techniques, and connect emerging trends to your own roadmap.
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
                  AI evolves rapidly. This module ensures you stay current with the latest developments, 
                  from foundation model advancements to emerging regulatory frameworks. Updated quarterly 
                  to reflect the latest industry trends.
                </p>
                <p className="body text-muted-foreground mb-8">
                  Perfect for professionals who need to understand AI trends without deep technical 
                  implementation. You'll learn to evaluate new technologies, assess their business 
                  implications, and make informed recommendations.
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
                      <span className="text-muted-foreground">Technology evaluation report</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Strategic recommendations delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Peer discussion participation</span>
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
                A curated exploration of the AI landscape, updated quarterly.
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
                Staying current with AI is essential for strategic decision-making.
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

export default LatestInAI;