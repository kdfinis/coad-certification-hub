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
      hours: 15,
      description: "Expert-led recorded session covering problem decomposition frameworks, task identification methodologies, and AI capability mapping.",
      activities: [
        "Problem analysis frameworks for AI suitability",
        "Task granularity optimization techniques",
        "AI capability assessment matrices",
        "Live Q&A with industry practitioners"
      ]
    },
    {
      week: 2,
      title: "Hands-On Labs – Build Simple Workflows",
      hours: 15,
      description: "Practical workshop using no-code and low-code tools to construct AI workflows from decomposed tasks.",
      activities: [
        "No-code workflow builder exercises",
        "Task sequencing and dependency mapping",
        "Integration with popular AI tools",
        "Workflow documentation standards"
      ]
    },
    {
      week: 3,
      title: "Mentored Sessions – Forum Feedback",
      hours: 15,
      description: "Weekly forum Q&A plus optional live office hours with industry professionals reviewing your personal project.",
      activities: [
        "Peer review of decomposition strategies",
        "Expert feedback on workflow designs",
        "ESG compliance checks in workflows",
        "EU AI Act alignment verification"
      ]
    },
    {
      week: 4,
      title: "Mini-Capstone – Deliver Optimized Workflow",
      hours: 15,
      description: "Final practical deliverable with mentor review, creating a portfolio-ready AI workflow system.",
      activities: [
        "Complete workflow system delivery",
        "Documentation and presentation",
        "Mentor feedback and assessment",
        "Blockchain certificate issuance"
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
                  This foundation module teaches you to analyze complex business problems and 
                  decompose them into discrete tasks suitable for AI automation. Using a JHU-inspired 
                  methodology, you'll move from theory to practice in just four weeks.
                </p>
                <p className="body text-muted-foreground mb-8">
                  The module emphasizes practical application over theory – 60% of your time will be 
                  spent on hands-on labs and projects. You'll work with real-world scenarios and 
                  build a portfolio piece that demonstrates your competency.
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

        {/* Track Integration */}
        <section className="section-padding bg-navy text-primary-foreground">
          <div className="container-coad">
            <div className="max-w-4xl mx-auto text-center">
              <GraduationNodeIcon className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="heading-2 mb-4">Part of the AAD Track</h2>
              <p className="body-large text-gray-300 mb-8">
                This module counts toward your Agentic AI Developer (AAD) Track certification. 
                Complete all track modules to achieve Charterholder status and priority 
                listing in the COAD Expert Directory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/auth">Enroll Now – €800</Link>
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

export default TaskDecomposition;