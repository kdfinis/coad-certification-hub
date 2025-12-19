import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { DataNodeIcon, CheckNodeIcon, ClockNodeIcon, AwardNodeIcon, GraduationNodeIcon } from '@/components/ui/custom-icons';
import { ArrowRight, Calendar, Briefcase } from 'lucide-react';

const LegalAuditor = () => {
  const weeklyBreakdown = [
    {
      week: 1,
      title: "Masterclass – Legal Frameworks",
      hours: "25-30",
      description: "Live/Recorded Session (1-2 hours) covering EU AI Act, sectoral regulations, contract obligations, legal risk assessment, and compliance documentation.",
      keyConcepts: ["EU AI Act", "Sectoral regulations", "Contract law", "Legal risk", "Compliance documentation"],
      activities: [
        "EU AI Act: Understand EU AI Act requirements, risk classifications, and obligations",
        "Sectoral Regulations: Learn sector-specific AI regulations (finance, healthcare, etc.)",
        "Contract Obligations: Understand contractual requirements for AI systems",
        "Legal Risk Assessment: Learn to assess legal risks in AI deployment",
        "Compliance Documentation: Understand requirements for legal compliance documentation"
      ]
    },
    {
      week: 2,
      title: "Hands-On Labs – Legal Assessment",
      hours: "25-30",
      description: "Practical Exercises (25-30 hours) including risk classification, compliance assessment, and legal documentation.",
      keyConcepts: ["Risk classification", "Compliance assessment", "Legal documentation", "Gap analysis"],
      activities: [
        "Lab 1: Risk Classification - Classify AI systems by risk level under EU AI Act, map regulatory obligations to system characteristics, create risk classification frameworks",
        "Lab 2: Compliance Assessment - Assess AI use cases against applicable regulations, identify compliance gaps and requirements, create compliance assessment matrices",
        "Lab 3: Legal Documentation - Draft legal assessment memos, document compliance positions, create legal opinion documents",
        "Deliverables: Risk classifications, compliance assessments, legal memos"
      ]
    },
    {
      week: 3,
      title: "Mentored Sessions – Legal Guidance",
      hours: "25-30",
      description: "Forum Q&A + Optional Live Office Hours for expert guidance, edge cases, regulatory updates, best practices, and case studies.",
      keyConcepts: ["Expert guidance", "Edge cases", "Regulatory updates", "Best practices"],
      activities: [
        "Expert Guidance: Get legal expert feedback on your assessments",
        "Edge Cases: Discuss complex legal scenarios and multi-jurisdiction contexts",
        "Regulatory Updates: Stay current with AI regulatory developments",
        "Best Practices: Learn from successful legal compliance implementations",
        "Case Studies: Analyze real-world legal compliance scenarios",
        "Focus Areas: Legal assessment quality, compliance evaluation, documentation clarity"
      ]
    },
    {
      week: 4,
      title: "Mini-Capstone – Legal Compliance Assessment",
      hours: "25-30",
      description: "Final Project (25-30 hours) creating a comprehensive legal compliance assessment for an AI use case.",
      keyConcepts: ["Risk classification", "Regulatory mapping", "Compliance assessment", "Gap analysis", "Legal opinion", "Recommendations"],
      activities: [
        "Risk Classification: Complete EU AI Act risk classification",
        "Regulatory Mapping: Mapping of all applicable regulations and requirements",
        "Compliance Assessment: Detailed assessment against each regulatory requirement",
        "Gap Analysis: Identification of compliance gaps and required actions",
        "Legal Opinion: Legal assessment memo with compliance position",
        "Recommendations: Legal recommendations for achieving compliance",
        "Mentor Review: Receive detailed rubric-based feedback on legal assessment quality, compliance evaluation, and documentation clarity",
        "Portfolio Piece: Your capstone becomes a portfolio-ready legal assessment suitable for stakeholder review and legal counsel"
      ]
    }
  ];

  const realWorldUseCases = [
    { industry: "High-Risk AI Systems", scenario: "Conducting conformity assessments for AI systems classified as high-risk under EU AI Act." },
    { industry: "Medical Devices", scenario: "Navigating MDR and EU AI Act intersection for AI-powered medical diagnostic tools." },
    { industry: "Financial Regulation", scenario: "Ensuring AI compliance across MiFID II, DORA, and EU AI Act requirements." },
    { industry: "Employment Law", scenario: "Auditing recruitment AI for compliance with anti-discrimination laws and EU AI Act." }
  ];

  const learningOutcomes = ["Master EU AI Act legal requirements", "Conduct comprehensive legal compliance audits", "Perform gap analysis and remediation planning", "Navigate sector-specific AI regulations", "Interpret ambiguous regulatory provisions", "Create legally defensible documentation"];

  return (
    <>
      <Helmet>
        <title>Legal Auditor | AIO Module | COAD</title>
        <meta name="description" content="Master AI legal compliance in this 90-hour module. Learn EU AI Act auditing and legal assessments with blockchain certification." />
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
              <h1 className="heading-1 mb-6">Legal<br /><span className="gradient-text">Auditor</span></h1>
              <p className="body-large text-gray-300 mb-8 max-w-2xl">The Legal Auditor module teaches you to perform legal compliance assessments for AI systems. You'll learn to interpret regulatory requirements, assess AI use cases against applicable laws, document compliance positions, and create legal assessment memos—ensuring AI systems meet legal obligations under EU AI Act, GDPR, sectoral regulations, and contract requirements.</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-300"><ClockNodeIcon className="w-5 h-5 text-teal" /><span>90 Contact Hours</span></div>
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
                <p className="body-large text-muted-foreground mb-6">
                  The Legal Auditor module teaches you to perform legal compliance assessments for AI systems. You'll learn to interpret regulatory requirements, assess AI use cases against applicable laws, document compliance positions, and create legal assessment memos—ensuring AI systems meet legal obligations under EU AI Act, GDPR, sectoral regulations, and contract requirements.
                </p>
                <p className="body text-muted-foreground mb-6">
                  Legal compliance is essential for responsible AI deployment. This module provides frameworks for legal AI auditing: understanding EU AI Act requirements, interpreting sectoral regulations, assessing contract obligations, documenting compliance positions, and creating legal opinions. Whether you're a legal professional, compliance officer, or risk manager, this module gives you the legal assessment skills needed for compliant AI deployment.
                </p>

                <div className="bg-muted/50 rounded-xl p-6 border border-border mb-8">
                  <h3 className="font-semibold mb-4">Who This Module Is For</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Legal Professionals</strong> assessing AI legal compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Compliance Officers</strong> ensuring legal compliance in AI systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Risk Managers</strong> evaluating legal risks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Regulatory Affairs Professionals</strong> navigating AI regulations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">In-House Counsel</strong> providing legal guidance on AI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Anyone</strong> responsible for AI legal compliance</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4 italic">Prerequisites: Understanding of legal concepts helpful. Interest in regulatory compliance.</p>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-4">Assessment Criteria</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-foreground font-medium">Project Rubric (80% pass requirement)</span>
                        <p className="text-sm text-muted-foreground mt-1">Risk classification accuracy (25%), compliance assessment quality (30%), legal analysis depth (20%), documentation clarity (15%), recommendations quality (10%)</p>
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
                    "Interpret Regulations: Understand and interpret AI regulatory requirements",
                    "Classify Risk: Classify AI systems by risk level under EU AI Act",
                    "Assess Compliance: Evaluate AI use cases against applicable regulations",
                    "Document Positions: Create clear legal assessment documentation",
                    "Identify Gaps: Identify compliance gaps and required actions",
                    "Provide Guidance: Offer legal guidance on AI compliance"
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
                      <span><strong className="text-foreground">Regulatory Compliance:</strong> Essential for EU AI Act and other regulatory compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Risk Mitigation:</strong> Identify and address legal risks before deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Career Enhancement:</strong> Legal AI expertise is increasingly valued</span>
                    </li>
                    
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Professional Credibility:</strong> Demonstrate legal compliance expertise</span>
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
                        <span className="text-muted-foreground">Risk classification accuracy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal font-semibold">30%</span>
                        <span className="text-muted-foreground">Compliance assessment quality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal font-semibold">20%</span>
                        <span className="text-muted-foreground">Legal analysis depth</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal font-semibold">15%</span>
                        <span className="text-muted-foreground">Documentation clarity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal font-semibold">10%</span>
                        <span className="text-muted-foreground">Recommendations quality</span>
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
                        <span className="text-muted-foreground"><strong className="text-foreground">Blockchain-Verified Certificate:</strong> "Certificate of Competency in Legal Auditing for AI Systems"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AwardNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Digital Badge:</strong> Shareable on LinkedIn and the Accredited Experts Directory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AwardNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">ECTS Credits:</strong> 3 credits (90 hours) toward professional development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AwardNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Portfolio Artifact:</strong> Your capstone legal assessment for your professional portfolio</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="heading-2 mb-6">Pricing & Enrollment</h2>
                <div className="bg-card rounded-xl p-6 border border-border mb-6">
                  <div className="text-4xl font-bold gradient-text mb-2">€1,800</div>
                  <p className="text-muted-foreground text-sm mb-6">4 weeks (90 hours) • 3 ECTS Credits</p>
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
                    <Link to="/auth">Enroll Now – €1,800</Link>
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

export default LegalAuditor;