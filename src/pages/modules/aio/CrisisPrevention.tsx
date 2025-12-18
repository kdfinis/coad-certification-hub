import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { RiskAlertIcon, CheckNodeIcon, ClockNodeIcon, AwardNodeIcon, GraduationNodeIcon } from '@/components/ui/custom-icons';
import { ArrowRight, Calendar, Briefcase } from 'lucide-react';

const CrisisPrevention = () => {
  const weeklyBreakdown = [
    {
      week: 1,
      title: "Masterclass – Crisis Fundamentals",
      hours: "35-40",
      description: "Live/Recorded Session (1-2 hours) covering incident types, severity classification, risk assessment, prevention strategies, and regulatory requirements.",
      keyConcepts: ["Incident types", "Severity classification", "Risk assessment", "Prevention", "Regulatory compliance"],
      activities: [
        "Incident Types: Understand different types of AI incidents (bias, security, failure, misuse, unintended consequences)",
        "Severity Classification: Learn to classify incidents by severity and impact",
        "Risk Assessment: Identify potential crisis scenarios and assess likelihood",
        "Prevention Strategies: Design prevention measures and early warning systems",
        "Regulatory Requirements: Understand incident reporting requirements (EU AI Act, sectoral regulations)"
      ]
    },
    {
      week: 2,
      title: "Hands-On Labs – Simulation & Planning",
      hours: "35-40",
      description: "Practical Exercises (35-40 hours) including incident classification, crisis simulation, and prevention design.",
      keyConcepts: ["Incident classification", "Crisis simulation", "Prevention design", "Early warning systems"],
      activities: [
        "Lab 1: Incident Classification - Classify different AI incident scenarios, assess severity and impact, create incident classification frameworks",
        "Lab 2: Crisis Simulation - Participate in tabletop exercises and simulation drills, practice responding to AI crisis scenarios, test crisis response procedures",
        "Lab 3: Prevention Design - Design prevention measures for identified risks, plan early warning systems and monitoring, create prevention frameworks",
        "Deliverables: Incident classification frameworks, simulation results, prevention plans"
      ]
    },
    {
      week: 3,
      title: "Mentored Sessions – Expert Crisis Feedback",
      hours: "35-40",
      description: "Forum Q&A + Optional Live Office Hours for expert guidance, real-world cases, best practices, playbook development, and stakeholder management.",
      keyConcepts: ["Expert guidance", "Real-world cases", "Best practices", "Playbook development"],
      activities: [
        "Expert Guidance: Get feedback from crisis management experts on your plans",
        "Real-World Cases: Analyze real-world AI crisis incidents and responses",
        "Best Practices: Learn from successful crisis prevention and response",
        "Playbook Development: Refine your crisis response playbooks",
        "Stakeholder Management: Plan for stakeholder communication during crises",
        "Focus Areas: Prevention effectiveness, response planning, stakeholder management, recovery"
      ]
    },
    {
      week: 4,
      title: "Mini-Capstone – Crisis Response Plan",
      hours: "35-40",
      description: "Final Project (35-40 hours) creating a comprehensive crisis prevention and response plan for an AI system or portfolio.",
      keyConcepts: ["Risk assessment", "Prevention strategy", "Incident classification", "Response procedures", "Stakeholder communication", "Recovery planning", "Testing plan"],
      activities: [
        "Risk Assessment: Complete risk assessment with potential crisis scenarios",
        "Prevention Strategy: Comprehensive prevention measures and early warning systems",
        "Incident Classification: Framework for classifying and prioritizing incidents",
        "Response Procedures: Detailed crisis response procedures and playbooks",
        "Stakeholder Communication: Plan for communicating with stakeholders during crises",
        "Recovery Planning: Strategy for recovering from incidents and preventing recurrence",
        "Testing Plan: Plan for testing and validating crisis response procedures",
        "Mentor Review: Receive detailed rubric-based feedback on crisis plan completeness, prevention effectiveness, and response quality",
        "Portfolio Piece: Your capstone becomes a portfolio-ready crisis plan suitable for executive review and implementation"
      ]
    }
  ];

  const realWorldUseCases = [
    { industry: "Autonomous Vehicles", scenario: "Developing crisis protocols for AI system failures in safety-critical transportation applications." },
    { industry: "Healthcare AI", scenario: "Creating response plans for AI diagnostic errors with patient safety and regulatory implications." },
    { industry: "Financial Services", scenario: "Building crisis management for AI trading system malfunctions and market disruptions." },
    { industry: "Critical Infrastructure", scenario: "Establishing incident response for AI failures in energy, water, or telecommunications systems." }
  ];

  const learningOutcomes = ["Classify AI incidents by severity and type", "Design comprehensive crisis response plans", "Conduct crisis simulation exercises", "Develop stakeholder communication protocols", "Navigate regulatory notification requirements", "Create post-incident review processes"];

  return (
    <>
      <Helmet>
        <title>Crisis Prevention & Error Management | AIO Module | COAD</title>
        <meta name="description" content="Master AI crisis management in this intensive 120-hour module. Learn incident response and prevention with blockchain certification." />
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
              <h1 className="heading-1 mb-6">Crisis Prevention &<br /><span className="gradient-text">Error Management</span></h1>
              <p className="body-large text-gray-300 mb-8 max-w-2xl">The Crisis Prevention & Error Management module teaches you to prevent and mitigate AI-related crises. You'll learn incident classification, risk assessment, prevention strategies, response planning, and crisis management—ensuring AI systems operate safely and organizations can respond effectively when things go wrong.</p>
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
                <p className="body-large text-muted-foreground mb-6">
                  The Crisis Prevention & Error Management module teaches you to prevent and mitigate AI-related crises. You'll learn incident classification, risk assessment, prevention strategies, response planning, and crisis management—ensuring AI systems operate safely and organizations can respond effectively when things go wrong.
                </p>
                <p className="body text-muted-foreground mb-6">
                  AI systems can fail in ways that cause significant harm: biased decisions, security breaches, system failures, misuse, or unintended consequences. This module provides frameworks for crisis prevention and management: identifying potential crises, designing prevention measures, planning response procedures, and managing incidents when they occur. Whether you're a risk manager, security professional, or operations lead, this module gives you the crisis management skills needed for responsible AI operations.
                </p>

                <div className="bg-muted/50 rounded-xl p-6 border border-border mb-8">
                  <h3 className="font-semibold mb-4">Who This Module Is For</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Risk Managers</strong> preventing and managing AI-related crises</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Security Professionals</strong> responding to AI security incidents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Operations Leads</strong> managing AI system failures and incidents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Crisis Managers</strong> planning for AI-related emergencies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Compliance Officers</strong> ensuring crisis preparedness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Anyone</strong> responsible for AI risk management and incident response</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4 italic">Prerequisites: Understanding of risk management helpful. Interest in crisis prevention and response.</p>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-4">Assessment Criteria</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-foreground font-medium">Project Rubric (80% pass requirement)</span>
                        <p className="text-sm text-muted-foreground mt-1">Risk assessment quality (25%), prevention strategy effectiveness (25%), response planning completeness (25%), recovery planning (15%), documentation clarity (10%)</p>
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
                    "Classify Incidents: Identify and classify AI incidents by type and severity",
                    "Assess Risks: Identify potential crisis scenarios and assess likelihood",
                    "Prevent Crises: Design prevention measures and early warning systems",
                    "Plan Responses: Create comprehensive crisis response procedures",
                    "Manage Incidents: Execute crisis response and recovery procedures",
                    "Document Plans: Create clear crisis prevention and response documentation"
                  ].map((outcome, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                      <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-teal font-semibold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-foreground text-sm">{outcome}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gradient-to-br from-teal/10 to-primary/10 rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-3">Module Benefits</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Risk Mitigation:</strong> Essential skills for preventing and managing AI crises</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Regulatory Compliance:</strong> Learn to meet incident reporting requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Career Enhancement:</strong> Crisis management skills are highly valued</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Track Credit:</strong> Counts toward AIO track completion and Charterholder status</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Organizational Protection:</strong> Protect organizations from AI-related crises</span>
                    </li>
                  </ul>
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
                    {week.keyConcepts && (
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-foreground mb-2">Key Concepts:</p>
                        <div className="flex flex-wrap gap-2">
                          {week.keyConcepts.map((concept, i) => (
                            <span key={i} className="px-2 py-1 bg-teal/10 text-teal text-xs rounded">
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <ul className="space-y-2">{week.activities.map((activity, i) => (<li key={i} className="flex items-start gap-2 text-sm"><CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{activity}</span></li>))}</ul>
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
                        <span className="text-teal font-semibold">25%</span>
                        <span className="text-muted-foreground">Risk assessment quality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal font-semibold">25%</span>
                        <span className="text-muted-foreground">Prevention strategy effectiveness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal font-semibold">25%</span>
                        <span className="text-muted-foreground">Response planning completeness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal font-semibold">15%</span>
                        <span className="text-muted-foreground">Recovery planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal font-semibold">10%</span>
                        <span className="text-muted-foreground">Documentation clarity</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                      <strong className="text-foreground">Pass Requirement:</strong> 80% overall score
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-teal/10 to-primary/10 rounded-xl p-6 border border-border">
                    <h3 className="font-semibold mb-3">Certificate</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Upon successful completion, you receive:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <AwardNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Blockchain-Verified Certificate:</strong> "Certificate of Competency in Crisis Prevention & Error Management"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AwardNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Digital Badge:</strong> Shareable on LinkedIn and the Accredited Experts Directory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AwardNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">ECTS Credits:</strong> 4 credits (120 hours) toward professional development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AwardNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Portfolio Artifact:</strong> Your capstone crisis plan for your professional portfolio</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="heading-2 mb-6">Pricing & Enrollment</h2>
                <div className="bg-card rounded-xl p-6 border border-border mb-6">
                  <div className="text-4xl font-bold gradient-text mb-2">€2,100</div>
                  <p className="text-muted-foreground text-sm mb-6">4 weeks (120 hours) • 4 ECTS Credits</p>
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
                        <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Standalone:</strong> Take this module independently</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Track Credit:</strong> Counts toward AIO (AI Oversight) track completion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
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

        {/* Track Integration */}
        <section className="section-padding bg-navy text-primary-foreground">
          <div className="container-coad">
            <div className="max-w-4xl mx-auto text-center">
              <GraduationNodeIcon className="w-16 h-16 mx-auto mb-6 text-teal" />
              <h2 className="heading-2 mb-4">Part of the AIO Track</h2>
              <p className="body-large text-gray-300 mb-6">
                This module counts toward your AI Oversight (AIO) Track certification. 
                Complete all track modules to achieve Charterholder status and priority 
                listing in the COAD Expert Directory.
              </p>
              <p className="text-sm text-gray-400 mb-8">
                <strong>Track Integration:</strong> This module feeds into AIO Domain 1 (Safety/Risk)
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild><Link to="/auth">Enroll Now – €2,100</Link></Button>
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

export default CrisisPrevention;