import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { EnergyNodeIcon, CheckNodeIcon, ClockNodeIcon, AwardNodeIcon, GraduationNodeIcon } from '@/components/ui/custom-icons';
import { ArrowRight, Calendar, Briefcase } from 'lucide-react';

const FinancialEvaluations = () => {
  const weeklyBreakdown = [
    { week: 1, title: "Masterclass – AI Investment Analysis", hours: 22, description: "Expert session on financial evaluation frameworks for AI projects.", activities: ["AI ROI methodologies", "TCO calculation for AI", "Risk-adjusted returns", "EU AI Act cost implications"] },
    { week: 2, title: "Hands-On Labs – Financial Modeling", hours: 23, description: "Practical exercises in building financial models for AI investments.", activities: ["Spreadsheet modeling", "Scenario analysis", "Sensitivity testing", "Business case development"] },
    { week: 3, title: "Mentored Sessions – Investment Decisions", hours: 22, description: "Expert guidance on AI investment decision-making.", activities: ["Portfolio prioritization", "Vendor evaluation", "ESG investment criteria", "Board presentation skills"] },
    { week: 4, title: "Mini-Capstone – Investment Business Case", hours: 23, description: "Develop a comprehensive AI investment business case.", activities: ["Complete business case", "Financial projections", "Risk assessment", "Blockchain certificate issuance"] }
  ];

  const realWorldUseCases = [
    { industry: "Private Equity", scenario: "Evaluating AI investments and due diligence for technology acquisitions." },
    { industry: "Corporate Strategy", scenario: "Building business cases for enterprise AI transformation initiatives." },
    { industry: "Venture Capital", scenario: "Assessing AI startup valuations and investment potential." },
    { industry: "Banking", scenario: "Evaluating AI investments for trading, risk, and customer service applications." }
  ];

  const learningOutcomes = ["Calculate AI project ROI and TCO", "Build financial models for AI investments", "Conduct risk-adjusted investment analysis", "Develop compelling business cases", "Present to executive stakeholders", "Evaluate AI vendor proposals"];

  return (
    <>
      <Helmet>
        <title>Financial Evaluations | AIO Module | COAD</title>
        <meta name="description" content="Master AI financial evaluation in this 90-hour module. Learn investment analysis and business cases with blockchain certification." />
      </Helmet>
      <Header />
      <main className="pt-20">
        <section className="bg-navy text-primary-foreground py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"><div className="absolute top-20 left-20 w-96 h-96 bg-teal rounded-full blur-3xl" /></div>
          <div className="container-coad relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-teal/20 text-teal text-sm font-medium">AIO Module</span>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">90 Hours • 4 Weeks</span>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium">Standard Intensity</span>
              </div>
              <h1 className="heading-1 mb-6">Financial<br /><span className="gradient-text">Evaluations</span></h1>
              <p className="body-large text-gray-300 mb-8 max-w-2xl">Make AI investments that deliver returns. Master financial evaluation, ROI calculation, and business case development for AI initiatives.</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-300"><ClockNodeIcon className="w-5 h-5 text-teal" /><span>90 Contact Hours</span></div>
                <div className="flex items-center gap-2 text-gray-300"><Calendar className="w-5 h-5 text-teal" /><span>4 Weeks Duration</span></div>
                <div className="flex items-center gap-2 text-gray-300"><AwardNodeIcon className="w-5 h-5 text-teal" /><span>Blockchain Certificate</span></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild><Link to="/auth">Enroll Now – €1,440<ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
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
                <p className="body-large text-muted-foreground mb-6">AI investments require rigorous financial analysis. This module teaches the frameworks and techniques needed to evaluate, justify, and optimize AI spending.</p>
                <p className="body text-muted-foreground mb-8">You'll learn to build compelling business cases, calculate realistic ROI, and present investment proposals that win stakeholder approval.</p>
                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-4">Assessment Criteria</h3>
                  <ul className="space-y-3">
                    {["Project rubric assessment (80% pass threshold)", "Business case delivery", "Financial model", "Executive presentation"].map((item, i) => (
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
              <p className="body-large text-gray-300 mb-8">This module counts toward your AI Oversight (AIO) Track certification.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild><Link to="/auth">Enroll Now – €1,440</Link></Button>
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

export default FinancialEvaluations;