import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CircuitLockIcon, CheckNodeIcon, ClockNodeIcon, AwardNodeIcon, GraduationNodeIcon } from '@/components/ui/custom-icons';
import { ArrowRight, Calendar, Briefcase } from 'lucide-react';

const CybersecurityAuditing = () => {
  const weeklyBreakdown = [
    { 
      week: 1, 
      title: "Masterclass – AI Cybersecurity Fundamentals", 
      hours: 30, 
      description: "Expert session on AI-specific threats, threat modeling, vulnerability assessment, security testing, and audit frameworks.", 
      activities: [
        "Understand prompt injection, model extraction, data poisoning, adversarial attacks",
        "Learn to model threats and attack vectors for AI systems",
        "Understand how to identify vulnerabilities in AI systems",
        "Design security tests for AI-specific threats",
        "Understand frameworks for comprehensive AI security audits"
      ] 
    },
    { 
      week: 2, 
      title: "Hands-On Labs – Security Testing Design", 
      hours: 40, 
      description: "Practical exercises in threat modeling, security test design, and vulnerability assessment.", 
      activities: [
        "Conduct threat modeling for AI systems",
        "Identify attack vectors and vulnerabilities",
        "Create threat models",
        "Design security tests for AI-specific attacks",
        "Plan penetration testing scenarios",
        "Assess vulnerabilities in AI systems",
        "Identify security weaknesses"
      ] 
    },
    { 
      week: 3, 
      title: "Mentored Sessions – Audit Refinement", 
      hours: 30, 
      description: "Expert guidance on audit plans, attack scenarios, best practices, testing techniques, and remediation planning.", 
      activities: [
        "Get feedback from cybersecurity experts on your audit plans",
        "Analyze real-world AI security attacks and vulnerabilities",
        "Learn from successful security audit implementations",
        "Discuss advanced security testing techniques",
        "Plan for addressing identified vulnerabilities"
      ] 
    },
    { 
      week: 4, 
      title: "Mini-Capstone – Cybersecurity Audit Plan", 
      hours: 40, 
      description: "Create a comprehensive cybersecurity audit plan for an AI system with threat model, security test plan, vulnerability assessment, risk evaluation, audit findings, and remediation plan.", 
      activities: [
        "Complete threat modeling with identified attack vectors",
        "Comprehensive security testing strategy",
        "Detailed vulnerability identification and assessment",
        "Security risk evaluation and prioritization",
        "Documented audit findings and recommendations",
        "Strategy for addressing identified vulnerabilities"
      ] 
    }
  ];

  const realWorldUseCases = [
    { industry: "Financial Services", scenario: "Auditing AI trading systems for cybersecurity vulnerabilities and market manipulation risks." },
    { industry: "Healthcare", scenario: "Security assessment of AI diagnostic systems protecting patient data and clinical outcomes." },
    { industry: "Manufacturing", scenario: "Evaluating industrial AI systems for cybersecurity in operational technology environments." },
    { industry: "Defense", scenario: "High-assurance security auditing for AI systems in sensitive applications." }
  ];

  const learningOutcomes = [
    "Create comprehensive threat models for AI systems",
    "Design security tests for AI-specific threats",
    "Identify and assess vulnerabilities in AI systems",
    "Perform comprehensive cybersecurity audits",
    "Create clear audit reports with findings and recommendations",
    "Develop strategies for addressing security vulnerabilities"
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Auditing | AIO Module | COAD</title>
        <meta name="description" content="Master AI cybersecurity auditing in this intensive 120-hour module. Learn threat assessment and security controls with blockchain certification." />
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
              <h1 className="heading-1 mb-6">Cybersecurity<br /><span className="gradient-text">Auditing</span></h1>
              <p className="body-large text-gray-300 mb-8 max-w-2xl">Audit AI systems for cybersecurity vulnerabilities comprehensively. Learn to identify AI-specific threats, design security tests, assess vulnerabilities, and create audit plans—ensuring AI systems are resilient against cyber attacks and secure for production deployment.</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-300"><ClockNodeIcon className="w-5 h-5 text-teal" /><span>120 Contact Hours</span></div>
                <div className="flex items-center gap-2 text-gray-300"><Calendar className="w-5 h-5 text-teal" /><span>4 Weeks Duration</span></div>
                <div className="flex items-center gap-2 text-gray-300"><AwardNodeIcon className="w-5 h-5 text-teal" /><span>Blockchain Certificate</span></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild><Link to="/auth">Enroll Now – €2,100<ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
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
                <p className="body-large text-muted-foreground mb-6">AI systems face unique cybersecurity challenges. This intensive module teaches you to identify, assess, and mitigate security risks in AI applications.</p>
                <p className="body text-muted-foreground mb-8">You'll learn to conduct comprehensive security audits, evaluate adversarial vulnerabilities, and create actionable recommendations that protect AI systems.</p>
                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-4">Assessment Criteria</h3>
                  <ul className="space-y-3">
                    {["Project rubric assessment (80% pass threshold)", "Security audit delivery", "Risk assessment report", "Remediation plan"].map((item, i) => (
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
                        <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <span>Standalone 4-week competency module</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <span>Independent certificate of competency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
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
                  <Button variant="hero" size="xl" asChild><Link to="/auth">Enroll Now – €2,100</Link></Button>
                  <Button variant="outline" size="xl" asChild><Link to="/certifications">Explore Certification Tracks</Link></Button>
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

export default CybersecurityAuditing;