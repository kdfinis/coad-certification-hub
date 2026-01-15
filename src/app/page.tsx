import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SparkleIcon } from '@/components/ui/sparkle-icon';
import { ArrowIcon } from '@/components/ui/arrow-icon';
import { ShieldIcon, AwardIcon, GlobeIcon } from '@/components/ui/badge-icons';
import { CertificateCard } from '@/components/ui/certificate-card';
import { ModuleCard } from '@/components/ui/module-card';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Exact Match */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-background to-gray-100 overflow-hidden">
          {/* Background dot pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentcolor 1px, transparent 0px)', backgroundSize: '40px 40px' }} />
          </div>
          {/* Blur circles */}
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-teal/10 rounded-full blur-3xl" />
          
          <div className="container-coad relative z-10 pt-24 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary animate-fade-in">
                  <SparkleIcon />
                  Recognized EU AI Certification and Oversight Platform
                </div>
                
                {/* Heading */}
                <h1 className="university-heading-1 text-foreground animate-fade-in-up stagger-1">
                  When You're Worried About Being Left Behind in AI,
                  <br />
                  <span className="color-wave-text-animated">Transform Your Career Into AI Development</span>
                </h1>
                
                {/* Description */}
                <p className="body-large text-muted-foreground max-w-xl animate-fade-in-up stagger-2">
                  Move from your current role to AI expert with 20-30% salary increases. Whether you're starting from scratch or leveling up as a programmer, COAD helps you accomplish this job with hands-on skills to build real AI solutions. Feel confident about your future and be seen as a forward-thinking professional. No coding experience needed to begin, we eliminate that barrier so you can start your transformation today.
                </p>
                
                {/* Features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fade-in-up stagger-3">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-success" />
                    </div>
                    No coding background required, we remove that barrier
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-success" />
                    </div>
                    Achieve Charterholder status, distinguished certification recognition
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-success" />
                    </div>
                    Structured progression, move from entry to master
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-success" />
                    </div>
                    Blockchain-verified credentials employers trust
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-4">
                  <a
                    href="https://app.coad.ai/signup"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] font-semibold h-14 rounded-lg px-10 text-base group"
                  >
                    Start Your Career Transformation
                    <ArrowIcon />
                  </a>
                  <Link
                    href="/#pricing"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-primary/30 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary/50 font-medium h-14 rounded-lg px-10 text-base"
                  >
                    Explore Corporate Training
                  </Link>
                </div>
                
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-6 pt-4 animate-fade-in-up stagger-5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                      <ShieldIcon />
                    </div>
                    <span>EU AI Act<br />Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <AwardIcon />
                    </div>
                    <span>ESG 2015<br />Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                      <GlobeIcon />
                    </div>
                    <span>EU<br />Accredited</span>
                  </div>
                </div>
              </div>
              
              {/* Certificate Card */}
              <CertificateCard />
            </div>
          </div>
        </section>

        {/* ACD Track Section - Exact Match */}
        <section className="section-padding bg-background" id="acd-track">
          <div className="container-coad">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
                <AwardIcon />
                Professional Institute Program
              </div>
              <h2 className="university-heading-2 text-foreground mb-6">
                When You Need to Transition Into AI Development,
                <br />
                <span className="gradient-text">Build Real Solutions That Transform Your Career</span>
              </h2>
              <p className="body-large text-muted-foreground">
                Whether you're an engineer worried about being left behind, a programmer struggling to keep up with GenAI, or an entrepreneur needing practical skills, ACD helps you accomplish this job. Move from your current role to AI expert with hands-on skills that build deployable projects employers want. Feel confident in your capabilities and be seen as a forward-thinking professional. No coding experience? We eliminate that barrier. Already coding? We'll take you to the cutting edge.
              </p>
            </div>
          </div>
          
          {/* Is ACD Right For You */}
          <div className="bg-muted/30 py-16 mb-16">
            <div className="container-coad">
              <h3 className="university-heading-3 text-foreground mb-6 text-center">Is ACD Right For You?</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card rounded-xl p-6 border border-border card-hover">
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4 border border-border bg-gradient-to-br from-primary/10 to-teal/10 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h4 className="university-heading-4">
                        <span className="gradient-text">WORRIED</span>
                        <span className="text-foreground"> ABOUT BEING LEFT BEHIND?</span>
                      </h4>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    When you're an engineer, analyst, or scientist seeing AI transform your field, you need a way to transition without starting over. ACD helps you accomplish this job by starting where you are, no coding background needed, and taking you to building real AI solutions. Move from your current role to high-demand AI positions. Feel confident about your future and be seen as someone who adapted to change.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border card-hover">
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4 border border-border bg-gradient-to-br from-primary/10 to-teal/10 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h4 className="university-heading-4">
                        <span className="gradient-text">STRUGGLING</span>
                        <span className="text-foreground"> TO KEEP UP WITH GENAI?</span>
                      </h4>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    When you're already coding but can't prove your AI expertise, you need recognized credentials that set you apart. ACD helps you accomplish this job by giving you the latest frameworks, real projects, and Charterholder status. Move from dabbling with tools to being the certified expert your company needs. Feel confident in your expertise and be seen as a distinguished AI practitioner.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border card-hover">
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4 border border-border bg-gradient-to-br from-primary/10 to-teal/10 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h4 className="university-heading-4">
                        <span className="gradient-text">NEED</span>
                        <span className="text-foreground"> PRACTICAL SKILLS, NOT THEORY?</span>
                      </h4>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    When you're a founder or consultant frustrated with theory-heavy courses that don't help you build, you need practical skills that create real products. ACD helps you accomplish this job by making hands-on projects become your MVPs. Move from learning to building. Feel capable of creating AI-powered products and be seen as someone who delivers, not just learns.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="bg-background py-16 mb-16">
            <div className="container-coad">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-card rounded-2xl border border-border card-hover">
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4 border border-border bg-gradient-to-br from-primary/10 to-teal/10 flex items-center justify-center">
                    <h4 className="university-heading-4 text-center p-4">
                      <span className="gradient-text">BUILD</span>
                      <span className="text-foreground"> REAL PROJECTS, NOT JUST LEARN THEORY</span>
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    From day one, you're building deployable AI solutions you can show employers. Every project in your portfolio proves you can actually do the work, not just talk about it.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-2xl border border-border card-hover">
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4 border border-border bg-gradient-to-br from-primary/10 to-teal/10 flex items-center justify-center">
                    <h4 className="university-heading-4 text-center p-4">
                      <span className="gradient-text">START</span>
                      <span className="text-foreground"> FROM ZERO, FINISH AS AN EXPERT</span>
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    No coding experience? Perfect. We start with the basics and take you all the way to building sophisticated AI systems. Your technical curiosity is all you need to begin.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-2xl border border-border card-hover">
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4 border border-border bg-gradient-to-br from-primary/10 to-teal/10 flex items-center justify-center">
                    <h4 className="university-heading-4 text-center p-4">
                      <span className="gradient-text">YOUR</span>
                      <span className="text-foreground"> CAREER TRANSFORMATION STARTS HERE</span>
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We don't just teach you AI, we help you reposition your entire career. Portfolio projects, industry credentials, and job placement support turn learning into opportunity.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-2xl border border-border card-hover">
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4 border border-border bg-gradient-to-br from-primary/10 to-teal/10 flex items-center justify-center">
                    <h4 className="university-heading-4 text-center p-4">
                      <span className="gradient-text">LEARN</span>
                      <span className="text-foreground"> AT YOUR PACE, AROUND YOUR LIFE</span>
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Built for busy professionals who can't pause their careers. Flexible pacing means you learn when it works for you, without sacrificing your current job or commitments.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-2xl border border-border card-hover">
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4 border border-border bg-gradient-to-br from-primary/10 to-teal/10 flex items-center justify-center">
                    <h4 className="university-heading-4 text-center p-4">
                      <span className="gradient-text">CREDENTIALS</span>
                      <span className="text-foreground"> THAT ACTUALLY MATTER</span>
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Blockchain-verified certification and Charterholder status don't just look good on your resume, they get you noticed by employers and open doors to opportunities you didn't have before.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Three Tiers to Mastery */}
          <div className="bg-muted/30 py-16 mb-16">
            <div className="container-coad">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <div className="space-y-8">
                  <h3 className="university-heading-3 text-foreground">Three Tiers to Mastery</h3>
                  <p className="text-muted-foreground">
                    Each tier builds on the last, with real-world projects and rigorous assessment that ensures you can actually deliver when it matters. No fluff, just skills that work.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-success" />
                      </div>
                      <span className="text-foreground">Verifiable digital badges, shareable on LinkedIn</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-success" />
                      </div>
                      <span className="text-foreground">Post-nominal designations: QAP, AAP, MAP</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-success" />
                      </div>
                      <span className="text-foreground">Hands-on learning with real-world projects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-success" />
                      </div>
                      <span className="text-foreground">ECTS-compatible for academic credit transfer</span>
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://app.coad.ai/signup"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] font-semibold h-11 rounded-lg px-8 group"
                    >
                      Start Your Career Transformation
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
                <div className="relative lg:sticky lg:top-32">
                  <div className="relative">
                    <div className="space-y-4">
                      <div className="p-6 rounded-2xl border-2 border-primary bg-card shadow-xl scale-[1.02] -translate-x-2">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/10">
                            <div className="w-8 h-8 rounded-full bg-primary/20" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-lg text-foreground">QAP</h4>
                              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">Tier 1</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-0.5">Qualified AI Practitioner</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-primary">€1,800</p>
                            <p className="text-xs text-muted-foreground">180 hours</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded-2xl border-2 border-border/50 bg-muted/30 hover:border-primary/40 hover:bg-card/50">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-muted">
                            <div className="w-8 h-8 rounded-full bg-muted" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-lg text-foreground/70">AAP</h4>
                              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">Tier 2</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-0.5">Advanced AI Practitioner</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-foreground/60">€2,200</p>
                            <p className="text-xs text-muted-foreground">270 hours</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded-2xl border-2 border-border/50 bg-muted/30 hover:border-primary/40 hover:bg-card/50">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-muted">
                            <div className="w-8 h-8 rounded-full bg-muted" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-lg text-foreground/70">MAP</h4>
                              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">Tier 3</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-0.5">Master AI Practitioner</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-foreground/60">€2,200</p>
                            <p className="text-xs text-muted-foreground">360 hours</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="bg-gradient-to-br from-primary/5 via-teal/5 to-primary/5 py-16">
            <div className="container-coad">
              <div className="rounded-3xl p-8 md:p-12">
                <div className="flex items-start gap-4 max-w-3xl mx-auto">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-6 h-6 text-primary font-bold text-xl">"</div>
                  </div>
                  <div>
                    <p className="text-lg md:text-xl text-foreground italic mb-4">
                      "I was stuck in a data analyst role, watching AI transform everything around me. ACD didn't just teach me AI, it gave me the hands-on projects and credentials to completely reposition my career. Now I'm building AI solutions and my salary reflects that change."
                    </p>
                    <p className="text-muted-foreground font-medium">Maria K., AI Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AIO Track Section - Exact Match */}
        <section className="section-padding bg-background" id="aio-track">
          <div className="container-coad">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
                <ShieldIcon />
                Professional Institute Program
              </div>
              <h2 className="university-heading-2 text-foreground mb-6">
                When You Need to Solidify Your Leadership Position,
                <br />
                <span className="gradient-text">Master AI Oversight for Safe Transformation</span>
              </h2>
              <p className="body-large text-muted-foreground">
                The AIO Track focuses on governance, safety, and ethical oversight, aligning with Security/Privacy and Oversight directions. It's a standalone professional institute program, culminating in a certificate of competency tested through domain-specific audits and scenarios.
              </p>
            </div>
          </div>
          
          {/* Who is AIO for */}
          <div className="bg-background py-16 mb-16">
            <div className="container-coad">
              <h3 className="university-heading-3 text-foreground mb-6 text-center">Who is AIO for?</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card rounded-xl p-6 border border-border card-hover">
                  <h4 className="university-heading-4 text-foreground mb-3">Managers</h4>
                  <p className="text-sm text-muted-foreground">
                    Leaders who need to oversee AI systems safely and ensure compliance with EU AI Act requirements.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border card-hover">
                  <h4 className="university-heading-4 text-foreground mb-3">Compliance Officers</h4>
                  <p className="text-sm text-muted-foreground">
                    Professionals responsible for ensuring AI systems meet regulatory and ethical standards.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border card-hover">
                  <h4 className="university-heading-4 text-foreground mb-3">Risk Professionals</h4>
                  <p className="text-sm text-muted-foreground">
                    Experts who assess and mitigate risks associated with AI deployment and governance.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border card-hover">
                  <h4 className="university-heading-4 text-foreground mb-3">Executives</h4>
                  <p className="text-sm text-muted-foreground">
                    C-suite leaders who need strategic AI oversight capabilities and governance expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Four Domains of Expertise */}
          <div className="bg-muted/30 py-16 mb-16">
            <div className="container-coad">
              <h3 className="university-heading-3 text-foreground mb-6 text-center">Four Domains of Expertise</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-card rounded-xl p-6 border border-border card-hover">
                  <h4 className="university-heading-4 text-foreground mb-3">Safety/Risk</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Master risk assessment, safety protocols, and crisis prevention for AI systems.
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">€1,800</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border card-hover">
                  <h4 className="university-heading-4 text-foreground mb-3">Ethical Oversight</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn ethical frameworks, bias detection, and responsible AI deployment practices.
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">€1,800</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border card-hover">
                  <h4 className="university-heading-4 text-foreground mb-3">Legal Compliance</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Understand EU AI Act requirements, compliance frameworks, and regulatory obligations.
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">€1,600</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border card-hover">
                  <h4 className="university-heading-4 text-foreground mb-3">Corporate Digital & AI Transformation</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Lead organization-wide AI transformation with strategic oversight and governance.
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">€2,600</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Complete all four domains to achieve AIO Charterholder status.
                </p>
                <Link href="/tracks/aio">
                  <Button size="lg">Explore AIO Track</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Standalone Competency Modules - Exact Match */}
        <section className="section-padding bg-background" id="modules">
          <div className="container-coad">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="university-heading-2 text-foreground mb-6">
                Standalone Competency Modules
              </h2>
              <p className="body-large text-muted-foreground">
                Each standalone module is a self-contained unit with its own certificate of competency, tested via rubrics. They feed into tracks but can be taken independently.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button variant="outline" className="border-2 border-border hover:border-primary/40">
                All Competencies (25)
              </Button>
              <Button variant="outline" className="border-2 border-border hover:border-primary/40">
                Build & Deploy (9)
              </Button>
              <Button variant="outline" className="border-2 border-border hover:border-primary/40">
                Govern & Comply (5)
              </Button>
              <Button variant="outline" className="border-2 border-border hover:border-primary/40">
                Secure & Optimize (11)
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              <ModuleCard
                titleFirst="TASK"
                titleRest="DECOMPOSITION"
                description="Break complex tasks into AI-manageable components"
                hours="60h / 4 weeks"
                price="€800"
                priceColor="primary"
                category="Build & Deploy"
                categoryColor="primary"
                href="/modules/acd/task-decomposition"
                delay="0ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="MULTI-AGENT"
                titleRest="COORDINATION"
                description="Coordinate multiple AI agents effectively"
                hours="90h / 4 weeks"
                price="€1,200"
                priceColor="primary"
                category="Build & Deploy"
                categoryColor="primary"
                href="/modules/acd/multi-agent-coordination"
                delay="50ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="PERFORMANCE"
                titleRest="OPTIMIZATION"
                description="Optimize AI system performance and efficiency"
                hours="120h / 4 weeks"
                price="€1,750"
                priceColor="success"
                category="Secure & Optimize"
                categoryColor="success"
                href="/modules/acd/performance-optimization"
                delay="100ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="HUMAN-AI"
                titleRest="DESIGN"
                description="Design effective human-AI collaboration workflows"
                hours="90h / 4 weeks"
                price="€1,000"
                priceColor="success"
                category="Secure & Optimize"
                categoryColor="success"
                href="/modules/acd/human-ai-design"
                delay="150ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="RESTRICTED"
                titleRest="METHODS"
                description="Navigate restricted AI methods responsibly"
                hours="120h / 4 weeks"
                price="€1,500"
                priceColor="primary"
                category="Build & Deploy"
                categoryColor="primary"
                href="/modules/acd/restricted-methods"
                delay="200ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="LATEST"
                titleRest="IN AI 2025"
                description="Stay current with cutting-edge AI developments"
                hours="60h / 4 weeks"
                price="€800"
                priceColor="primary"
                category="Build & Deploy"
                categoryColor="primary"
                href="/modules/acd/latest-in-ai"
                delay="250ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="SECURE"
                titleRest="AI OPERATIONS"
                description="Implement security best practices for AI systems"
                hours="120h / 4 weeks"
                price="€1,800"
                priceColor="success"
                category="Secure & Optimize"
                categoryColor="success"
                href="/modules/acd/secure-ai-operations"
                delay="300ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="PROMPT"
                titleRest="ENGINEERING"
                description="Master the art of effective AI prompting"
                hours="60h / 4 weeks"
                price="€750"
                priceColor="primary"
                category="Build & Deploy"
                categoryColor="primary"
                href="/modules/acd/prompt-engineering"
                delay="350ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="AI"
                titleRest="PRODUCT MANAGEMENT"
                description="Lead AI product development lifecycle"
                hours="90h / 4 weeks"
                price="€1,100"
                priceColor="success"
                category="Secure & Optimize"
                categoryColor="success"
                href="/modules/acd/ai-product-management"
                delay="400ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="DATA"
                titleRest="PIPELINE DESIGN"
                description="Build robust data pipelines for AI systems"
                hours="90h / 4 weeks"
                price="€1,200"
                priceColor="primary"
                category="Build & Deploy"
                categoryColor="primary"
                href="/modules/acd/data-pipeline-design"
                delay="450ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="MODEL"
                titleRest="EVALUATION"
                description="Assess and validate AI model performance"
                hours="90h / 4 weeks"
                price="€1,100"
                priceColor="primary"
                category="Build & Deploy"
                categoryColor="primary"
                href="/modules/acd/model-evaluation"
                delay="500ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="AI"
                titleRest="DEPLOYMENT"
                description="Deploy AI systems to production at scale"
                hours="120h / 4 weeks"
                price="€1,600"
                priceColor="primary"
                category="Build & Deploy"
                categoryColor="primary"
                href="/modules/acd/ai-deployment"
                delay="550ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="ETHICAL"
                titleRest="DATA USE"
                description="Ensure ethical data practices in AI systems"
                hours="60h / 4 weeks"
                price="€960"
                priceColor="teal"
                category="Govern & Comply"
                categoryColor="teal"
                href="/modules/aio/ethical-data-use"
                delay="600ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="PRIVACY"
                titleRest="AUDITOR"
                description="Conduct comprehensive privacy audits"
                hours="90h / 4 weeks"
                price="€1,440"
                priceColor="teal"
                category="Govern & Comply"
                categoryColor="teal"
                href="/modules/aio/privacy-auditor"
                delay="650ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="CRISIS"
                titleRest="PREVENTION"
                description="Prevent and mitigate AI-related crises"
                hours="120h / 4 weeks"
                price="€2,100"
                priceColor="success"
                category="Secure & Optimize"
                categoryColor="success"
                href="/modules/aio/crisis-prevention"
                delay="700ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="LEGAL"
                titleRest="AUDITOR"
                description="Perform legal compliance assessments"
                hours="90h / 4 weeks"
                price="€1,800"
                priceColor="teal"
                category="Govern & Comply"
                categoryColor="teal"
                href="/modules/aio/legal-auditor"
                delay="750ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="RESOURCE"
                titleRest="MANAGEMENT"
                description="Optimize AI resource allocation"
                hours="60h / 4 weeks"
                price="€1,200"
                priceColor="success"
                category="Secure & Optimize"
                categoryColor="success"
                href="/modules/aio/resource-management"
                delay="800ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="PROCESS"
                titleRest="OPTIMIZATION"
                description="Streamline AI-driven processes"
                hours="90h / 4 weeks"
                price="€1,800"
                priceColor="success"
                category="Secure & Optimize"
                categoryColor="success"
                href="/modules/aio/process-optimization"
                delay="850ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="SUSTAINABILITY"
                titleRest="& AI"
                description="Implement sustainable AI practices"
                hours="60h / 4 weeks"
                price="€1,440"
                priceColor="teal"
                category="Govern & Comply"
                categoryColor="teal"
                href="/modules/aio/sustainability-ai"
                delay="900ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="FINANCIAL"
                titleRest="EVALUATIONS"
                description="Evaluate AI investments and ROI"
                hours="90h / 4 weeks"
                price="€1,440"
                priceColor="success"
                category="Secure & Optimize"
                categoryColor="success"
                href="/modules/aio/financial-evaluations"
                delay="950ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="AI"
                titleRest="FOR GOVERNMENT"
                description="Deploy AI in public sector contexts"
                hours="60h / 4 weeks"
                price="€1,200"
                priceColor="success"
                category="Secure & Optimize"
                categoryColor="success"
                href="/modules/aio/ai-for-government"
                delay="1000ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="AI"
                titleRest="FOR SECURITY"
                description="Apply AI in security operations"
                hours="90h / 4 weeks"
                price="€1,800"
                priceColor="success"
                category="Secure & Optimize"
                categoryColor="success"
                href="/modules/aio/ai-for-security"
                delay="1050ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="CYBERSECURITY"
                titleRest="AUDITING"
                description="Audit AI cybersecurity measures"
                hours="120h / 4 weeks"
                price="€2,100"
                priceColor="success"
                category="Secure & Optimize"
                categoryColor="success"
                href="/modules/aio/cybersecurity-auditing"
                delay="1100ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="AI-ENHANCED"
                titleRest="AML/KYC"
                description="Implement AI in compliance processes"
                hours="90h / 4 weeks"
                price="€1,800"
                priceColor="teal"
                category="Govern & Comply"
                categoryColor="teal"
                href="/modules/aio/aml-kyc"
                delay="1150ms"
                bubbleType="dark"
              />
              <ModuleCard
                titleFirst="TOKEN"
                titleRest="EFFICIENCY"
                description="Reduce AI costs with token-optimized prompts, routing, and caching"
                hours="90h / 4 weeks"
                price="€920"
                priceColor="primary"
                category="Build & Deploy"
                categoryColor="primary"
                href="/modules/token-efficiency"
                delay="1200ms"
                bubbleType="dark"
              />
            </div>
            <div className="text-center">
              <Link href="/courses">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Browse All Competencies
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* EU AI Act Compliance - Exact Match */}
        <section className="section-padding bg-muted/50" id="compliance">
          <div className="container-coad">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="university-heading-2 text-foreground mb-6">
                EU AI Act Compliant Certifications
              </h2>
              <p className="body-large text-muted-foreground">
                All COAD certifications are structured to meet the demands of the EU AI Act, ensuring compliance with high-risk system requirements such as human oversight (Article 13) and data governance (Article 15).
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
              <div className="bg-card rounded-xl p-6 border border-border card-hover">
                <h3 className="university-heading-4 text-foreground mb-3">Human Oversight Training</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive training on Article 13 requirements for meaningful human control over AI decision-making processes.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border card-hover">
                <h3 className="university-heading-4 text-foreground mb-3">Data Governance Standards</h3>
                <p className="text-sm text-muted-foreground">
                  Training on Article 15 requirements for data quality, privacy, and regulatory compliance.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border card-hover">
                <h3 className="university-heading-4 text-foreground mb-3">Transparency & Disclosure</h3>
                <p className="text-sm text-muted-foreground">
                  Ensuring AI systems meet transparency requirements and proper disclosure standards.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
              <div className="bg-card rounded-xl p-6 border border-border card-hover">
                <h3 className="university-heading-4 text-foreground mb-3">Risk Assessment Methods</h3>
                <p className="text-sm text-muted-foreground">
                  Learn systematic approaches to identifying and mitigating AI risks.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border card-hover">
                <h3 className="university-heading-4 text-foreground mb-3">ECTS Compatible</h3>
                <p className="text-sm text-muted-foreground">
                  All certifications are convertible to ECTS credits (30 hours per ECTS) for Bologna Process mobility.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border card-hover">
                <h3 className="university-heading-4 text-foreground mb-3">Verifiable Digital Credentials</h3>
                <p className="text-sm text-muted-foreground">
                  Blockchain-verified certificates that are authentic, shareable, and recognized by employers.
                </p>
              </div>
            </div>
            <div className="text-center mb-8">
              <div className="bg-card rounded-xl p-6 max-w-md mx-auto border border-border">
                <h3 className="university-heading-4 text-foreground mb-3">Sustainability-Focused</h3>
                <p className="text-sm text-muted-foreground">
                  ESG 2015 compliant programmes emphasizing environmental sustainability, social responsibility, and governance standards.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link href="/courses">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Learn About Compliance
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section - Exact Match */}
        <section id="benefits" className="bg-background">
          <div className="container-coad py-16">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-card rounded-xl p-6 border border-border card-hover">
                <h3 className="university-heading-4 text-foreground mb-3">ECTS Compatible</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  When you need recognized credentials, our content follows ECTS standards making it viable for validation. Move from unrecognized learning to professional development that counts.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Content follows ECTS standards and rules</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Viable for ECTS validation application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Supports professional development</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border card-hover">
                <h3 className="university-heading-4 text-foreground mb-3">Verifiable Digital Credentials</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  When you can't prove your skills to employers, earn blockchain-verified credentials that are secure and instantly verifiable. Move from unverified claims to trusted proof.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Secure credential records</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Instant verification for employers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Shareable on LinkedIn and portfolios</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border card-hover">
                <h3 className="university-heading-4 text-foreground mb-3">Sustainability-Focused</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  When you need to ensure responsible AI, learn energy-efficient practices and ethical oversight. Move from concerns to confident sustainable deployment.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Energy-efficient AI practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Ethical oversight principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Transparent assessment standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Choose Your Certification Path - Exact Match */}
        <section id="pricing" className="section-padding bg-muted/50">
          <div className="container-coad">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="university-heading-2 text-foreground mb-6">
                Choose Your Certification Path
              </h2>
              <p className="body-large text-muted-foreground mb-8">
                All prices VAT-inclusive. Pay monthly or upfront with 10% discount.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="relative bg-card rounded-2xl border-2 border-teal shadow-xl scale-[1.02] p-8 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10">
                  <div className="w-7 h-7 text-primary rounded-full bg-primary/20" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">ACD Track</h3>
                <p className="text-sm text-muted-foreground mb-6">AI Code Development</p>
                <div className="mb-6 space-y-3">
                  <div className="pb-2 border-b border-border/50 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-sm font-medium text-foreground">QAP Tier 1 (Professional)</span>
                      <span className="text-sm font-semibold text-foreground">€1,800</span>
                    </div>
                    <p className="text-xs text-muted-foreground">180 hours • 3 months</p>
                  </div>
                  <div className="pb-2 border-b border-border/50 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-sm font-medium text-foreground">AAP Tier 2 (Advanced Expert)</span>
                      <span className="text-sm font-semibold text-foreground">€2,200</span>
                    </div>
                    <p className="text-xs text-muted-foreground">270 hours • 4 months</p>
                  </div>
                  <div className="pb-2">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-sm font-medium text-foreground">MAP Tier 3 (Master)</span>
                      <span className="text-sm font-semibold text-foreground">€2,200</span>
                    </div>
                    <p className="text-xs text-muted-foreground">360 hours • 6 months</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-foreground flex-grow">
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Progressive 3-level certification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>ACD Charterholder upon Level 3</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Priority directory placement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>LinkedIn shareable credentials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Hands-on project learning</span>
                  </li>
                </ul>
                <Link href="/tracks/acd" className="mt-auto">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    View ACD Track
                  </Button>
                </Link>
              </div>
              <div className="relative bg-card rounded-2xl border-2 border-border p-8 card-hover flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10">
                  <ShieldIcon />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">AIO Track</h3>
                <p className="text-sm text-muted-foreground mb-6">AI Oversight</p>
                <ul className="space-y-2 mb-6 text-sm text-foreground flex-grow">
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Safety/Risk</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Ethical Oversight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Legal Compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Corporate Digital & AI Transformation</span>
                  </li>
                </ul>
                <Link href="/tracks/aio" className="mt-auto">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    View AIO Track
                  </Button>
                </Link>
              </div>
              <div className="relative bg-card rounded-2xl border-2 border-border p-8 card-hover flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10">
                  <AwardIcon />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Competency Modules</h3>
                <p className="text-sm text-muted-foreground mb-6">Standalone certifications</p>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">
                  24 standalone modules available. Each module is a self-contained certificate of competency, tested via rubrics.
                </p>
                <Link href="/competencies" className="mt-auto">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Browse Modules
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LMS Platform & Catalog Showcase */}
        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
                <GlobeIcon />
                Canvas-like Learning Platform
              </div>
              <h2 className="university-heading-2 text-foreground mb-6">
                Learn on a Professional LMS Platform
              </h2>
              <p className="body-large text-muted-foreground">
                Access your courses through our Canvas-like LMS with assignments, quizzes, discussions, live Zoom sessions, and blockchain-verified certificates.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="university-heading-4 text-foreground mb-4">Course Catalog</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Browse our complete catalog of certification tracks and standalone modules. Filter by type, compare courses, and see detailed outcomes before enrolling.
                </p>
                <Link href="/courses">
                  <Button className="w-full">Explore Catalog</Button>
                </Link>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="university-heading-4 text-foreground mb-4">LMS Dashboard</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Access your courses, track progress, submit assignments, join live sessions, and download certificates—all in one Canvas-like platform.
                </p>
                <Link href="/lms">
                  <Button className="w-full">Access LMS</Button>
                </Link>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <AwardIcon />
                </div>
                <p className="text-sm font-semibold text-foreground mb-2">Blockchain Verified</p>
                <p className="text-xs text-muted-foreground">All certificates are blockchain-verified for authenticity</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <GlobeIcon />
                </div>
                <p className="text-sm font-semibold text-foreground mb-2">Live Zoom Sessions</p>
                <p className="text-xs text-muted-foreground">Interactive live sessions integrated into courses</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <ShieldIcon />
                </div>
                <p className="text-sm font-semibold text-foreground mb-2">EU AI Act Compliant</p>
                <p className="text-xs text-muted-foreground">All courses meet EU AI Act requirements</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Exact Match */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0px)', backgroundSize: '40px 40px' }} />
          </div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal/20 rounded-full blur-3xl"></div>
          <div className="container-coad relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-2 group">
                  <div className="relative w-14 h-14">
                    <svg viewBox="0 0 40 40" className="w-full h-full">
                      <defs>
                        <linearGradient id="coadLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--teal))" />
                        </linearGradient>
                      </defs>
                      <circle cx="20" cy="20" r="18" fill="none" stroke="url(#coadLogoGradient)" strokeWidth="2" className="group-hover:animate-pulse" />
                      <circle cx="20" cy="10" r="3" fill="url(#coadLogoGradient)" />
                      <circle cx="10" cy="25" r="3" fill="url(#coadLogoGradient)" />
                      <circle cx="30" cy="25" r="3" fill="url(#coadLogoGradient)" />
                      <circle cx="20" cy="20" r="4" fill="url(#coadLogoGradient)" />
                      <line x1="20" y1="10" x2="20" y2="20" stroke="url(#coadLogoGradient)" strokeWidth="1.5" />
                      <line x1="10" y1="25" x2="20" y2="20" stroke="url(#coadLogoGradient)" strokeWidth="1.5" />
                      <line x1="30" y1="25" x2="20" y2="20" stroke="url(#coadLogoGradient)" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <span className="font-bold tracking-tight text-2xl text-white">COAD</span>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Start Your Career<br />
                <span className="text-primary">Transformation Today</span>
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                When you're ready to move from your current role to AI expert, start with a free module trial. Move from uncertainty to confidence. Feel secure about your future and be seen as someone taking action. Hands-on modules, blockchain-verified certificates, and EU-recognized credentials that prove your transformation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:shadow-lg active:scale-[0.98] h-14 rounded-lg px-10 text-base bg-white text-navy hover:bg-white/90 hover:scale-[1.02] font-semibold shadow-lg group flex items-center gap-2"
                >
                  Browse Course Catalog
                  <svg viewBox="0 0 40 40" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                    <defs>
                      <linearGradient id="coadGradient-arrow-primary" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--teal))" />
                      </linearGradient>
                    </defs>
                    <line x1="6" y1="20" x2="30" y2="20" stroke="url(#coadGradient-arrow-primary)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M24 14 L32 20 L24 26" fill="none" stroke="url(#coadGradient-arrow-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="6" cy="20" r="3" fill="url(#coadGradient-arrow-primary)" />
                    <circle cx="18" cy="20" r="2" fill="url(#coadGradient-arrow-primary)" />
                    <circle cx="32" cy="20" r="3" fill="url(#coadGradient-arrow-primary)" />
                  </svg>
                </a>
                <a
                  href="/#pricing"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white/10 backdrop-blur-sm hover:bg-white/20 h-14 rounded-lg px-10 text-base border-2 border-white/30 text-white hover:border-white/50"
                >
                  Explore Corporate Training
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm">
                <a href="/#acd-track" className="hover:text-white transition-colors underline underline-offset-4">Transform Your Career with ACD</a>
                <span>•</span>
                <a href="/#aio-track" className="hover:text-white transition-colors underline underline-offset-4">Solidify Your Leadership with AIO</a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-white/10">
                <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                  <svg viewBox="0 0 40 40" className="w-5 h-5">
                    <defs>
                      <linearGradient id="coadGradient-shield-white" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="white" />
                        <stop offset="100%" stopColor="hsl(var(--teal))" />
                      </linearGradient>
                    </defs>
                    <path d="M20 4 L34 10 L34 20 C34 28 27 34 20 38 C13 34 6 28 6 20 L6 10 Z" fill="none" stroke="url(#coadGradient-shield-white)" strokeWidth="2" />
                    <circle cx="20" cy="16" r="3" fill="url(#coadGradient-shield-white)" />
                    <circle cx="14" cy="24" r="2.5" fill="url(#coadGradient-shield-white)" opacity="0.8" />
                    <circle cx="26" cy="24" r="2.5" fill="url(#coadGradient-shield-white)" opacity="0.8" />
                    <line x1="20" y1="16" x2="14" y2="24" stroke="url(#coadGradient-shield-white)" strokeWidth="1.5" />
                    <line x1="20" y1="16" x2="26" y2="24" stroke="url(#coadGradient-shield-white)" strokeWidth="1.5" />
                  </svg>
                  <span className="text-sm">EU AI Act</span>
                  <svg viewBox="0 0 40 40" className="w-4 h-4">
                    <defs>
                      <linearGradient id="coadGradient-link-white" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="white" />
                        <stop offset="100%" stopColor="hsl(var(--teal))" />
                      </linearGradient>
                    </defs>
                    <path d="M16 24 L24 16" stroke="url(#coadGradient-link-white)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M22 12 L28 6 C30 4 34 4 36 6 C38 8 38 12 36 14 L30 20" fill="none" stroke="url(#coadGradient-link-white)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M18 28 L12 34 C10 36 6 36 4 34 C2 32 2 28 4 26 L10 20" fill="none" stroke="url(#coadGradient-link-white)" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="16" cy="24" r="3" fill="url(#coadGradient-link-white)" />
                    <circle cx="24" cy="16" r="3" fill="url(#coadGradient-link-white)" />
                    <circle cx="32" cy="10" r="2" fill="url(#coadGradient-link-white)" />
                    <circle cx="8" cy="30" r="2" fill="url(#coadGradient-link-white)" />
                  </svg>
                </a>
                <a href="https://www.iso.org/standard/63787.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                  <svg viewBox="0 0 40 40" className="w-5 h-5">
                    <defs>
                      <linearGradient id="coadGradient-sparkle-white" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="white" />
                        <stop offset="100%" stopColor="hsl(var(--teal))" />
                      </linearGradient>
                    </defs>
                    <path d="M20 4 L22 16 L34 18 L22 20 L20 32 L18 20 L6 18 L18 16 Z" fill="url(#coadGradient-sparkle-white)" opacity="0.3" stroke="url(#coadGradient-sparkle-white)" strokeWidth="2" strokeLinejoin="round" />
                    <circle cx="20" cy="18" r="4" fill="url(#coadGradient-sparkle-white)" />
                    <circle cx="20" cy="4" r="2" fill="url(#coadGradient-sparkle-white)" />
                    <circle cx="20" cy="32" r="2" fill="url(#coadGradient-sparkle-white)" />
                    <circle cx="6" cy="18" r="2" fill="url(#coadGradient-sparkle-white)" />
                    <circle cx="34" cy="18" r="2" fill="url(#coadGradient-sparkle-white)" />
                    <circle cx="32" cy="8" r="1.5" fill="url(#coadGradient-sparkle-white)" opacity="0.7" />
                    <circle cx="8" cy="28" r="1.5" fill="url(#coadGradient-sparkle-white)" opacity="0.7" />
                  </svg>
                  <span className="text-sm">ESG 2015 Standards</span>
                  <svg viewBox="0 0 40 40" className="w-4 h-4">
                    <defs>
                      <linearGradient id="coadGradient-link-white-2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="white" />
                        <stop offset="100%" stopColor="hsl(var(--teal))" />
                      </linearGradient>
                    </defs>
                    <path d="M16 24 L24 16" stroke="url(#coadGradient-link-white-2)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M22 12 L28 6 C30 4 34 4 36 6 C38 8 38 12 36 14 L30 20" fill="none" stroke="url(#coadGradient-link-white-2)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M18 28 L12 34 C10 36 6 36 4 34 C2 32 2 28 4 26 L10 20" fill="none" stroke="url(#coadGradient-link-white-2)" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="16" cy="24" r="3" fill="url(#coadGradient-link-white-2)" />
                    <circle cx="24" cy="16" r="3" fill="url(#coadGradient-link-white-2)" />
                    <circle cx="32" cy="10" r="2" fill="url(#coadGradient-link-white-2)" />
                    <circle cx="8" cy="30" r="2" fill="url(#coadGradient-link-white-2)" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
