import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  BalanceScaleIcon,
  CheckNodeIcon,
  ClockNodeIcon,
  AwardNodeIcon,
  GraduationNodeIcon
} from '@/components/ui/custom-icons';
import { ArrowRight, Calendar, Briefcase } from 'lucide-react';

const ModelEvaluation = () => {
  const weeklyBreakdown = [
    {
      week: 1,
      title: "Masterclass – Evaluation Fundamentals",
      hours: "25-30",
      description: "Live/Recorded Session (1-2 hours) covering evaluation metrics, test set design, bias detection, robustness testing, and validation frameworks.",
      keyConcepts: ["Evaluation metrics", "Test design", "Bias detection", "Robustness", "Validation frameworks"],
      activities: [
        "Evaluation Metrics: Understand accuracy, precision, recall, F1, AUC, and task-specific metrics",
        "Test Set Design: Design representative test sets and validation strategies",
        "Bias Detection: Identify and measure bias and fairness issues in models",
        "Robustness Testing: Test model performance across diverse scenarios and edge cases",
        "Validation Frameworks: Establish comprehensive validation processes"
      ]
    },
    {
      week: 2,
      title: "Hands-On Labs – Evaluation Implementation",
      hours: "25-30",
      description: "Practical Exercises (25-30 hours) including metric selection, test design, and bias & fairness analysis.",
      keyConcepts: ["Metric selection", "Test design", "Bias analysis", "Fairness assessment"],
      activities: [
        "Lab 1: Metric Selection - Select appropriate metrics for different tasks and use cases, implement metric calculations and reporting, create evaluation dashboards",
        "Lab 2: Test Design - Design test sets for model evaluation, plan cross-validation and holdout strategies, create test data specifications",
        "Lab 3: Bias & Fairness Analysis - Conduct bias and fairness assessments, analyze model performance across demographic groups, create fairness reports",
        "Deliverables: Evaluation plans, metric calculations, bias analysis reports"
      ]
    },
    {
      week: 3,
      title: "Mentored Sessions – Advanced Evaluation",
      hours: "25-30",
      description: "Forum Q&A + Optional Live Office Hours for expert guidance, advanced techniques, case studies, best practices, and troubleshooting.",
      keyConcepts: ["Expert guidance", "Advanced techniques", "Case studies", "Best practices"],
      activities: [
        "Expert Guidance: Get feedback on your evaluation strategies",
        "Advanced Techniques: Learn advanced evaluation and testing techniques",
        "Case Studies: Analyze real-world model evaluation scenarios",
        "Best Practices: Learn from successful model evaluation implementations",
        "Troubleshooting: Get help with evaluation challenges",
        "Focus Areas: Evaluation quality, bias detection, robustness testing, validation completeness"
      ]
    },
    {
      week: 4,
      title: "Mini-Capstone – Comprehensive Evaluation Plan",
      hours: "25-30",
      description: "Final Project (25-30 hours) creating a comprehensive evaluation plan for an AI model.",
      keyConcepts: ["Evaluation strategy", "Test set specification", "Bias assessment", "Robustness testing", "Performance reporting", "Validation process"],
      activities: [
        "Evaluation Strategy: Complete evaluation framework with metrics and test design",
        "Test Set Specification: Detailed test set design and validation strategy",
        "Bias Assessment: Bias and fairness analysis plan",
        "Robustness Testing: Strategy for testing across diverse scenarios",
        "Performance Reporting: Framework for reporting evaluation results",
        "Validation Process: Complete validation process from testing to deployment approval",
        "Mentor Review: Receive detailed rubric-based feedback on evaluation plan completeness, metric selection, and practical applicability",
        "Portfolio Piece: Your capstone becomes a portfolio-ready evaluation plan demonstrating your model evaluation competency"
      ]
    }
  ];

  const realWorldUseCases = [
    {
      industry: "Healthcare AI",
      scenario: "Building evaluation frameworks for medical AI that test accuracy, safety, and fairness across patient demographics."
    },
    {
      industry: "Financial Services",
      scenario: "Evaluating credit scoring models for bias, accuracy, and regulatory compliance before deployment."
    },
    {
      industry: "Autonomous Systems",
      scenario: "Safety-critical evaluation frameworks for self-driving AI with edge case testing."
    },
    {
      industry: "HR Tech",
      scenario: "Testing recruitment AI for bias and discrimination before deployment under EU AI Act."
    }
  ];

  const learningOutcomes = [
    "Design comprehensive AI evaluation frameworks",
    "Implement automated testing pipelines",
    "Conduct bias and fairness assessments",
    "Perform adversarial robustness testing",
    "Ensure EU AI Act evaluation compliance",
    "Build continuous monitoring systems"
  ];

  return (
    <>
      <Helmet>
        <title>Model Evaluation & Testing | AAD Module | COAD</title>
        <meta name="description" content="Master AI model evaluation in this 90-hour module. Learn comprehensive testing methodologies with blockchain certification." />
      </Helmet>

      <Header />

      <main className="pt-20">
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
                  90 Hours • 4 Weeks
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium">
                  Standard Intensity
                </span>
              </div>
              
              <h1 className="heading-1 mb-6">
                Model Evaluation<br />
                <span className="gradient-text">& Testing</span>
              </h1>
              
              <p className="body-large text-gray-300 mb-8 max-w-2xl">
                The Model Evaluation & Validation module teaches you to assess and validate AI model performance comprehensively. You'll learn evaluation metrics, testing strategies, bias detection, robustness testing, and validation frameworks—ensuring AI models meet quality, fairness, and reliability standards before deployment.
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
                    Enroll Now – €1,100
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

        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="heading-2 mb-6">Module Overview</h2>
                <p className="body-large text-muted-foreground mb-6">
                  The Model Evaluation & Validation module teaches you to assess and validate AI model performance comprehensively. You'll learn evaluation metrics, testing strategies, bias detection, robustness testing, and validation frameworks—ensuring AI models meet quality, fairness, and reliability standards before deployment.
                </p>
                <p className="body text-muted-foreground mb-6">
                  Model evaluation is critical for responsible AI deployment. This module provides frameworks for comprehensive model assessment: understanding different metrics, designing test sets, detecting bias and fairness issues, testing robustness, and validating model performance across diverse scenarios. Whether you're evaluating your own models or reviewing models for deployment, this module gives you the evaluation skills needed for production AI systems.
                </p>

                <div className="bg-muted/50 rounded-xl p-6 border border-border mb-8">
                  <h3 className="font-semibold mb-4">Who This Module Is For</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">ML Engineers</strong> evaluating model performance before deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Data Scientists</strong> assessing model quality and reliability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Quality Assurance Professionals</strong> testing AI systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Risk Managers</strong> validating AI models for compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Technical Leads</strong> overseeing model evaluation processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Anyone</strong> responsible for AI model quality and validation</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4 italic">Prerequisites: Understanding of ML/AI concepts. Familiarity with model training helpful.</p>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-4">Assessment Criteria</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckNodeIcon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-foreground font-medium">Project Rubric (80% pass requirement)</span>
                        <p className="text-sm text-muted-foreground mt-1">Evaluation strategy quality (25%), test design effectiveness (25%), bias assessment completeness (20%), robustness testing (20%), documentation clarity (10%)</p>
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
                    "Select Metrics: Choose appropriate evaluation metrics for different tasks",
                    "Design Tests: Create representative test sets and validation strategies",
                    "Detect Bias: Identify and measure bias and fairness issues",
                    "Test Robustness: Evaluate model performance across diverse scenarios",
                    "Validate Models: Establish comprehensive validation processes",
                    "Report Results: Create clear evaluation reports for stakeholders"
                  ].map((outcome, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-foreground text-sm">{outcome}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gradient-to-br from-primary/10 to-teal/10 rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-3">Module Benefits</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Quality Assurance:</strong> Essential skills for ensuring AI model quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Responsible AI:</strong> Learn to detect and address bias and fairness issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Career Enhancement:</strong> Model evaluation skills are highly valued</span>
                    </li>
                    
                    <li className="flex items-start gap-2">
                      <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Risk Mitigation:</strong> Validate models before deployment to reduce risks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/50">
          <div className="container-coad">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">4-Week Curriculum</h2>
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
                    {week.keyConcepts && (
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-foreground mb-2">Key Concepts:</p>
                        <div className="flex flex-wrap gap-2">
                          {week.keyConcepts.map((concept, i) => (
                            <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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
                        <span className="text-primary font-semibold">25%</span>
                        <span className="text-muted-foreground">Evaluation strategy quality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">25%</span>
                        <span className="text-muted-foreground">Test design effectiveness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">20%</span>
                        <span className="text-muted-foreground">Bias assessment completeness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">20%</span>
                        <span className="text-muted-foreground">Robustness testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-semibold">10%</span>
                        <span className="text-muted-foreground">Documentation clarity</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                      <strong className="text-foreground">Pass Requirement:</strong> 80% overall score
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-teal/10 rounded-xl p-6 border border-border">
                    <h3 className="font-semibold mb-3">Certificate</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Upon successful completion, you receive:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <AwardNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Blockchain-Verified Certificate:</strong> "Certificate of Competency in Model Evaluation & Validation"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AwardNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Digital Badge:</strong> Shareable on LinkedIn and the Accredited Experts Directory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AwardNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">ECTS Credits:</strong> 3 credits (90 hours) toward professional development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AwardNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Portfolio Artifact:</strong> Your capstone evaluation plan for your professional portfolio</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="heading-2 mb-6">Pricing & Enrollment</h2>
                <div className="bg-card rounded-xl p-6 border border-border mb-6">
                  <div className="text-4xl font-bold gradient-text mb-2">€1,100</div>
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
                        <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Standalone:</strong> Take this module independently</span>
                      </li>
                      
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
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
                    <Link to="/auth">Enroll Now – €1,100</Link>
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

export default ModelEvaluation;