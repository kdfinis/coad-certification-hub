import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  EnergyNodeIcon,
  CheckNodeIcon,
  ClockNodeIcon,
  AwardNodeIcon,
  GraduationNodeIcon
} from '@/components/ui/custom-icons';
import { ArrowRight, Calendar, Briefcase } from 'lucide-react';

const PerformanceOptimization = () => {
  const weeklyBreakdown = [
    {
      week: 1,
      title: "Masterclass – Tuning for Speed & Cost",
      hours: 30,
      description: "Expert-led deep dive into AI performance optimization covering latency reduction, throughput maximization, and cost management.",
      activities: [
        "Performance profiling methodologies",
        "Latency vs throughput trade-offs",
        "Cost-per-inference optimization",
        "Cloud vs edge deployment decisions"
      ]
    },
    {
      week: 2,
      title: "Hands-On Labs – Benchmarking Tools",
      hours: 30,
      description: "Practical workshops using industry-standard benchmarking and profiling tools for AI systems.",
      activities: [
        "Setting up performance monitoring stacks",
        "A/B testing for model optimization",
        "Memory and compute profiling",
        "Automated performance regression testing"
      ]
    },
    {
      week: 3,
      title: "Mentored Sessions – Advanced Optimization",
      hours: 30,
      description: "Expert feedback on optimization strategies for complex enterprise scenarios.",
      activities: [
        "Model compression techniques",
        "Quantization and pruning strategies",
        "ESG-compliant optimization practices",
        "EU AI Act performance documentation"
      ]
    },
    {
      week: 4,
      title: "Mini-Capstone – Optimized Enterprise System",
      hours: 30,
      description: "Deliver a fully optimized AI system with comprehensive performance documentation.",
      activities: [
        "End-to-end system optimization",
        "Performance benchmarking report",
        "Cost analysis and projections",
        "Blockchain certificate issuance"
      ]
    }
  ];

  const realWorldUseCases = [
    {
      industry: "Streaming Platforms",
      scenario: "Optimizing recommendation engines to serve millions of users with sub-100ms latency while managing compute costs."
    },
    {
      industry: "Autonomous Vehicles",
      scenario: "Edge AI optimization for real-time decision making with strict latency and power consumption constraints."
    },
    {
      industry: "Healthcare Diagnostics",
      scenario: "Optimizing medical imaging AI to process scans quickly while maintaining accuracy for critical diagnoses."
    },
    {
      industry: "Financial Services",
      scenario: "High-frequency trading systems requiring microsecond-level AI inference optimization."
    }
  ];

  const learningOutcomes = [
    "Master AI performance profiling and benchmarking techniques",
    "Implement latency and throughput optimization strategies",
    "Apply model compression, quantization, and pruning",
    "Design cost-effective AI deployment architectures",
    "Create performance documentation for EU AI Act compliance",
    "Build enterprise-grade optimized AI systems"
  ];

  return (
    <>
      <Helmet>
        <title>Performance Optimization | AIC Module | COAD</title>
        <meta name="description" content="Master AI performance optimization in this intensive 120-hour, 4-week module. Learn to tune systems for speed and cost efficiency with blockchain certification." />
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
                  120 Hours • 4 Weeks
                </span>
                <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium">
                  Heavy Intensity
                </span>
              </div>
              
              <h1 className="heading-1 mb-6">
                Performance<br />
                <span className="gradient-text">Optimization</span>
              </h1>
              
              <p className="body-large text-gray-300 mb-8 max-w-2xl">
                Master the art and science of optimizing AI systems for speed, cost, and 
                efficiency. Learn enterprise-grade techniques used by leading tech companies.
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
                    Enroll Now – €1,750
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
                  This intensive module covers everything you need to know about making AI systems 
                  run faster, cheaper, and more efficiently. From profiling to deployment optimization, 
                  you'll learn techniques used at the highest levels of the industry.
                </p>
                <p className="body text-muted-foreground mb-8">
                  With 120 hours over 4 weeks, this is our most comprehensive technical module. 
                  You'll spend significant time in hands-on labs working with real optimization 
                  challenges and enterprise-scale systems.
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
                      <span className="text-muted-foreground">Performance benchmarking report</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Mini-capstone with mentor feedback</span>
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
                Intensive JHU-inspired methodology with 30 hours per week of focused optimization training.
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
                Performance optimization is critical across every industry using AI.
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
                This advanced module counts toward your AI Competence (AIC) Track certification. 
                Complete all track modules to achieve Charterholder status.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/auth">Enroll Now – €1,750</Link>
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

export default PerformanceOptimization;