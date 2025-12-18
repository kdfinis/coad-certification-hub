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

const HumanAIDesign = () => {
  const weeklyBreakdown = [
    {
      week: 1,
      title: "Masterclass – Human-AI Collaboration Principles",
      hours: 22,
      description: "Expert-led session on designing effective interfaces between humans and AI systems.",
      activities: [
        "Human-centered AI design principles",
        "Cognitive load management in AI interfaces",
        "Trust calibration frameworks",
        "EU AI Act human oversight requirements"
      ]
    },
    {
      week: 2,
      title: "Hands-On Labs – Interaction Design",
      hours: 23,
      description: "Practical workshops building human-AI interaction patterns and feedback loops.",
      activities: [
        "Designing AI explanation interfaces",
        "Building feedback collection systems",
        "Human-in-the-loop workflow design",
        "Accessibility in AI applications"
      ]
    },
    {
      week: 3,
      title: "Mentored Sessions – User Research",
      hours: 22,
      description: "Expert guidance on conducting user research for AI systems.",
      activities: [
        "AI usability testing methods",
        "Measuring human-AI team performance",
        "ESG considerations in design",
        "Inclusive design practices"
      ]
    },
    {
      week: 4,
      title: "Mini-Capstone – Human-AI Workflow System",
      hours: 23,
      description: "Design and deliver a complete human-AI collaboration workflow.",
      activities: [
        "End-to-end workflow delivery",
        "User testing and iteration",
        "Documentation and presentation",
        "Blockchain certificate issuance"
      ]
    }
  ];

  const realWorldUseCases = [
    {
      industry: "Medical Diagnosis",
      scenario: "Designing AI-assisted diagnostic tools that present findings clearly to physicians while maintaining appropriate human oversight."
    },
    {
      industry: "Content Moderation",
      scenario: "Building human-AI workflows where AI flags content and humans make final decisions with full context."
    },
    {
      industry: "Customer Service",
      scenario: "Creating seamless handoffs between AI chatbots and human agents with preserved conversation context."
    },
    {
      industry: "Legal Review",
      scenario: "Designing AI-assisted contract review tools that highlight risks while enabling lawyer judgment."
    }
  ];

  const learningOutcomes = [
    "Apply human-centered design principles to AI systems",
    "Design effective human-AI collaboration workflows",
    "Build trust calibration and explanation interfaces",
    "Implement human-in-the-loop patterns",
    "Ensure EU AI Act human oversight compliance",
    "Create accessible and inclusive AI applications"
  ];

  return (
    <>
      <Helmet>
        <title>Human-AI Design | AIC Module | COAD</title>
        <meta name="description" content="Master human-AI collaboration design in this 90-hour, 4-week module. Learn to create effective human-AI workflows with blockchain certification." />
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
                  AIC Module
                </span>
                <span className="px-3 py-1 rounded-full bg-teal/20 text-teal text-sm font-medium">
                  90 Hours • 4 Weeks
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium">
                  Standard Intensity
                </span>
              </div>
              
              <h1 className="heading-1 mb-6">
                Human-AI<br />
                <span className="gradient-text">Design</span>
              </h1>
              
              <p className="body-large text-gray-300 mb-8 max-w-2xl">
                Learn to design effective collaboration workflows between humans and AI systems. 
                Create interfaces that build trust and maximize combined human-AI performance.
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
                    Enroll Now – €1,000
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
                  The most successful AI implementations aren't about replacing humans – they're about 
                  augmenting human capabilities. This module teaches you to design systems where humans 
                  and AI work together effectively.
                </p>
                <p className="body text-muted-foreground mb-8">
                  You'll learn user research methods specific to AI, design patterns for human-AI 
                  collaboration, and how to build interfaces that calibrate trust appropriately – 
                  avoiding both over-reliance and under-utilization of AI capabilities.
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
                      <span className="text-muted-foreground">User testing documentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Mini-capstone with mentor feedback</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">EU AI Act human oversight verification</span>
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
                JHU-inspired methodology focusing on user research and interaction design.
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
                Human-AI collaboration is essential in high-stakes domains.
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
              <h2 className="heading-2 mb-4">Part of the AIC Track</h2>
              <p className="body-large text-gray-300 mb-8">
                This module counts toward your AI Competence (AIC) Track certification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/auth">Enroll Now – €1,000</Link>
                </Button>
                <Button variant="outline" size="xl" className="border-gray-600 text-gray-300 hover:bg-white/10" asChild>
                  <Link to="/certifications">Explore Full AIC Track</Link>
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

export default HumanAIDesign;