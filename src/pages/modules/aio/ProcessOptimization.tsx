import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { NetworkNodesIcon, CheckNodeIcon, ClockNodeIcon, AwardNodeIcon, GraduationNodeIcon } from '@/components/ui/custom-icons';
import { ArrowRight, Calendar, Briefcase } from 'lucide-react';

const ProcessOptimization = () => {
  const weeklyBreakdown = [
    { week: 1, title: "Masterclass – AI Process Engineering", hours: 30, description: "Expert session on redesigning business processes with AI integration.", activities: ["Process mapping methodologies", "AI opportunity identification", "Bottleneck analysis", "EU AI Act process requirements"] },
    { week: 2, title: "Hands-On Labs – Process Redesign", hours: 30, description: "Practical workshops redesigning processes for AI enhancement.", activities: ["As-is/To-be modeling", "AI integration points", "Change impact assessment", "ROI calculation methods"] },
    { week: 3, title: "Mentored Sessions – Implementation Planning", hours: 30, description: "Expert guidance on implementing AI-enhanced processes.", activities: ["Change management strategies", "Stakeholder engagement", "ESG process considerations", "Continuous improvement frameworks"] },
    { week: 4, title: "Mini-Capstone – Optimized Process Design", hours: 30, description: "Deliver a complete AI-optimized process design.", activities: ["Complete process documentation", "Implementation roadmap", "KPI framework", "Blockchain certificate issuance"] }
  ];

  const realWorldUseCases = [
    { industry: "Supply Chain", scenario: "Redesigning procurement and logistics processes with AI-driven demand forecasting and optimization." },
    { industry: "Customer Service", scenario: "Transforming support workflows with AI triage, automated responses, and intelligent routing." },
    { industry: "Manufacturing", scenario: "Optimizing production processes with AI quality control and predictive maintenance integration." },
    { industry: "Healthcare", scenario: "Streamlining patient pathways with AI-assisted scheduling and resource allocation." }
  ];

  const learningOutcomes = ["Map and analyze business processes for AI", "Identify AI integration opportunities", "Design AI-enhanced process workflows", "Calculate ROI for process optimization", "Plan change management strategies", "Establish continuous improvement frameworks"];

  return (
    <>
      <Helmet>
        <title>Process Optimization | AIO Module | COAD</title>
        <meta name="description" content="Master AI process optimization in this 120-hour module. Learn to redesign business processes with blockchain certification." />
      </Helmet>
      <Header />
      <main className="pt-20">
        <section className="bg-navy text-primary-foreground py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"><div className="absolute top-20 left-20 w-96 h-96 bg-teal rounded-full blur-3xl" /></div>
          <div className="container-coad relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-teal/20 text-teal text-sm font-medium">AIO Module</span>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">120 Hours • 4 Weeks</span>
                <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium">Heavy Intensity</span>
              </div>
              <h1 className="heading-1 mb-6">Process<br /><span className="gradient-text">Optimization</span></h1>
              <p className="body-large text-gray-300 mb-8 max-w-2xl">Transform business operations with AI. Learn to analyze, redesign, and optimize processes for AI integration and maximum efficiency.</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-300"><ClockNodeIcon className="w-5 h-5 text-teal" /><span>120 Contact Hours</span></div>
                <div className="flex items-center gap-2 text-gray-300"><Calendar className="w-5 h-5 text-teal" /><span>4 Weeks Duration</span></div>
                <div className="flex items-center gap-2 text-gray-300"><AwardNodeIcon className="w-5 h-5 text-teal" /><span>Blockchain Certificate</span></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild><Link to="/auth">Enroll Now – €1,800<ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
                <Button variant="outline" size="xl" className="border-gray-600 text-gray-300 hover:bg-white/10" asChild><Link to="/certifications">View All Modules</Link></Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="heading-2 mb-6">Module Overview</h2>
                <p className="body-large text-muted-foreground mb-6">AI doesn't just automate existing processes – it enables entirely new ways of working. This module teaches strategic process redesign for AI transformation.</p>
                <p className="body text-muted-foreground mb-8">You'll learn to identify high-impact opportunities, design AI-enhanced workflows, and plan implementations that deliver measurable business value.</p>
                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-4">Assessment Criteria</h3>
                  <ul className="space-y-3">
                    {["Project rubric assessment (80% pass threshold)", "Process design documentation", "Implementation roadmap", "ROI analysis"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3"><CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="heading-3 mb-6">Learning Outcomes</h3>
                <div className="space-y-4">
                  {learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                      <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0"><span className="text-teal font-semibold text-sm">{index + 1}</span></div>
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
            <div className="text-center mb-12"><h2 className="heading-2 mb-4">4-Week Curriculum</h2></div>
            <div className="grid md:grid-cols-2 gap-8">
              {weeklyBreakdown.map((week, index) => (
                <div key={index} className="bg-card rounded-2xl border border-border overflow-hidden card-hover">
                  <div className="bg-gradient-to-r from-teal/10 to-primary/10 px-6 py-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center"><span className="text-white font-bold">{week.week}</span></div>
                      <div><span className="text-sm text-muted-foreground">Week {week.week}</span><p className="font-semibold text-foreground">{week.hours} Hours</p></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{week.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{week.description}</p>
                    <ul className="space-y-2">{week.activities.map((activity, i) => (<li key={i} className="flex items-start gap-2 text-sm"><CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{activity}</span></li>))}</ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="text-center mb-12"><h2 className="heading-2 mb-4">Real-World Applications</h2></div>
            <div className="grid md:grid-cols-2 gap-6">
              {realWorldUseCases.map((useCase, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border card-hover">
                  <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center"><Briefcase className="w-5 h-5 text-teal" /></div><h3 className="font-semibold">{useCase.industry}</h3></div>
                  <p className="text-muted-foreground">{useCase.scenario}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-navy text-primary-foreground">
          <div className="container-coad">
            <div className="max-w-4xl mx-auto text-center">
              <GraduationNodeIcon className="w-16 h-16 mx-auto mb-6 text-teal" />
              <h2 className="heading-2 mb-4">Part of the AIO Track</h2>
              <p className="body-large text-gray-300 mb-8">This advanced module counts toward your AI Oversight (AIO) Track certification.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild><Link to="/auth">Enroll Now – €1,800</Link></Button>
                <Button variant="outline" size="xl" className="border-gray-600 text-gray-300 hover:bg-white/10" asChild><Link to="/certifications">Explore Full AIO Track</Link></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProcessOptimization;