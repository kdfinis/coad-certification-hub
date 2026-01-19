import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const AIWorkforce = () => {
  const [selectedTrack, setSelectedTrack] = useState<'all' | 'aad' | 'aio'>('all');
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'entry' | 'mid' | 'senior'>('all');

  const professionalSteps = [
    {
      number: 'I',
      title: 'Attain Certification',
      description: 'Complete COAD certifications to demonstrate mastery of AI competencies. Track completion grants comprehensive access, whilst Charterholder status confers priority placement and premium engagement rates.',
      details: [
        'Automatic eligibility upon certification completion',
        'Track completion grants full access to all engagements',
        'Module completion enables domain-specific projects',
        'Charterholder status confers priority placement',
      ],
    },
    {
      number: 'II',
      title: 'Establish Your Profile',
      description: 'Construct your professional dossier showcasing competencies, credentials, and portfolio of work. Define availability and rate expectations to attract suitable engagements.',
      details: [
        'Present certifications and demonstrated competencies',
        'Include portfolio and case studies',
        'Specify availability preferences',
        'Define engagement rate expectations',
        'Compose professional biography',
      ],
    },
    {
      number: 'III',
      title: 'Receive Engagement Matches',
      description: 'Review project opportunities aligned with your certified competencies. Examine engagement particulars, client requirements, and timelines before accepting assignments.',
      details: [
        'Competency-aligned matching',
        'Notifications via correspondence and portal',
        'Full engagement details prior to acceptance',
        'Charterholders receive priority consideration',
      ],
    },
    {
      number: 'IV',
      title: 'Secure Remuneration',
      description: 'COAD administers all invoicing and payment processing. Transparent terms, regular disbursements, and secure transactions allow you to focus entirely on your professional obligations.',
      details: [
        'COAD manages client invoicing',
        'Clear and transparent payment terms',
        'Regular disbursement schedule',
        'Secure transaction processing',
      ],
    },
  ];

  const clientSteps = [
    {
      number: 'I',
      title: 'Submit Your Requirements',
      description: 'Articulate your project scope, required competencies, timeline, and budget parameters. Specify preferences for Charterholder engagement or particular professional expertise.',
      details: [
        'Comprehensive project description',
        'Required competencies and specialisations',
        'Timeline and milestone expectations',
        'Budget parameters',
        'Professional tier preferences',
      ],
    },
    {
      number: 'II',
      title: 'Review Matched Professionals',
      description: 'COAD presents three to five qualified professionals matched to your requirements. Review credentials, portfolios, and prior engagement assessments.',
      details: [
        'Competency-aligned matching',
        'Three to five professional recommendations',
        'Comprehensive profiles and portfolios',
        'Prior client assessments',
        'Request additional matches as needed',
      ],
    },
    {
      number: 'III',
      title: 'Select and Commence',
      description: 'Designate professionals for your engagement. COAD facilitates contract execution and onboarding. Begin your project with vetted, certified expertise.',
      details: [
        'Select one or more professionals',
        'COAD facilitates contract execution',
        'Structured project onboarding',
        'Communication channels established',
        'Ongoing project management support',
      ],
    },
    {
      number: 'IV',
      title: 'Remit Through COAD',
      description: 'A single invoice from COAD streamlines payment administration. Quality assurance through certification standards ensures professional excellence.',
      details: [
        'Consolidated invoicing through COAD',
        'Simplified payment administration',
        'Quality assurance via certification',
        'Secure payment handling',
        'Dispute resolution support',
      ],
    },
  ];

  const professionalBenefits = [
    { title: 'Access to Vetted Engagements', description: 'Engage with discerning clients pre-qualified by COAD. Projects aligned with your demonstrated competencies.' },
    { title: 'Competency-Aligned Matching', description: 'Receive engagements that correspond precisely with your certified expertise and professional development goals.' },
    { title: 'Charterholder Priority', description: 'Charterholders receive first consideration for engagements, premium rates, and distinguished profile placement.' },
    { title: 'Streamlined Remuneration', description: 'COAD administers all invoicing and payments with transparent terms and regular, secure disbursements.' },
    { title: 'Portfolio Development', description: 'Build a distinguished portfolio through substantive engagements that demonstrate your professional excellence.' },
  ];

  const clientBenefits = [
    { title: 'Pre-Vetted Professionals', description: 'All professionals hold COAD certification and undergo rigorous vetting. Quality assured through established standards.' },
    { title: 'Precise Competency Matching', description: 'Engage professionals with exact competencies required. AAD for development, AIO for governance and oversight.' },
    { title: 'Quality Assurance', description: 'COAD certifications establish professional standards. EU AI Act-aligned expertise ensures regulatory compliance.' },
    { title: 'Unified Point of Contact', description: 'COAD serves as your comprehensive partner for AI talent requirements, from sourcing through payment.' },
    { title: 'Regulatory Expertise', description: 'Professionals trained in EU AI Act compliance ensure your AI initiatives meet regulatory requirements.' },
  ];

  const eligibilityTiers = [
    {
      tier: 'First Class',
      title: 'Charterholders',
      description: 'Complete full track (AAD or AIO) to attain Charterholder standing',
      features: [
        'Priority consideration in all matching',
        'Premium rate engagements (20% enhancement)',
        'Distinguished profile placement',
        'Direct client engagement requests',
        'Reduced administrative margin',
      ],
      featured: true,
    },
    {
      tier: 'Second Class',
      title: 'Track Completers',
      description: 'Complete AAD or AIO track in its entirety',
      features: [
        'Full access to all engagements',
        'Standard rate structure',
        'Standard matching priority',
      ],
    },
    {
      tier: 'Third Class',
      title: 'Module Completers',
      description: 'Complete at least one competency module',
      features: [
        'Access to module-aligned engagements',
        'Entry-level rate structure',
        'Standard matching priority',
      ],
    },
  ];

  const testimonials = [
    {
      quote: "Attaining my AAD credentials opened doors to consulting engagements previously inaccessible. The competency-aligned matching ensures I receive only those projects for which I am demonstrably qualified.",
      author: 'Dr Sarah Chen',
      credentials: 'AAD Charterholder',
      position: 'Senior AI Engineer',
      type: 'professional',
    },
    {
      quote: "As an ACOS Charterholder, I benefit from priority consideration and premium rates. The network has become my principal source of professional engagements. The investment in certification has yielded substantial returns.",
      author: 'Marcus Weber, MSc',
      credentials: 'ACOS Charterholder',
      position: 'AI Governance Consultant',
      type: 'professional',
    },
    {
      quote: "Identifying certified AI professionals had been a considerable challenge. COAD's network matched us precisely with the expertise required for our EU AI Act compliance initiative. The quality of work exceeded expectations.",
      organisation: 'European Technology Partners',
      engagement: 'EU AI Act Compliance Assessment',
      outcome: 'Completed within schedule, all requirements satisfied',
      type: 'client',
    },
    {
      quote: "The competency-aligned matching reduced our search from weeks to days. We required a Privacy Auditor, and COAD presented three superbly qualified professionals. Our selected candidate delivered exemplary work.",
      organisation: 'Continental Financial Services',
      engagement: 'AI System Privacy Assessment',
      outcome: 'Comprehensive audit, regulatory compliance achieved',
      type: 'client',
    },
  ];

  const stats = [
    { number: '150+', label: 'Certified Professionals', description: 'Active members of the network' },
    { number: '500+', label: 'Engagements Completed', description: 'Successful project completions' },
    { number: '€2.5M+', label: 'Total Engagement Value', description: 'Combined value of completed work' },
    { number: '95%', label: 'Client Satisfaction', description: 'Clients satisfied with engagements' },
  ];

  const professionalFaqs = [
    {
      question: 'Must I complete a full track to join the network?',
      answer: 'Completing at least one module qualifies you for entry. However, track completion grants full access to all engagements, and Charterholder standing provides priority consideration.',
    },
    {
      question: 'How are engagements matched to my profile?',
      answer: 'Engagements are matched based upon your certified competencies, stated availability, and rate expectations. Charterholders receive priority consideration for all opportunities.',
    },
    {
      question: 'What are the remuneration arrangements?',
      answer: 'COAD administers all invoicing and payment processing. Professionals receive 70-80% of the engagement fee (dependent upon tier), with regular disbursements.',
    },
    {
      question: 'May I request particular engagements?',
      answer: 'Indeed. You may review available engagements and express interest in those aligned with your objectives, or await matching notifications.',
    },
  ];

  const clientFaqs = [
    {
      question: 'How expeditiously can professionals be matched?',
      answer: 'Typically within 24-48 hours of submission. Charterholder engagements may be matched more rapidly.',
    },
    {
      question: 'May I request specific professionals?',
      answer: 'Certainly. If you have identified a particular professional with whom you wish to engage, direct requests are accommodated.',
    },
    {
      question: 'What recourse exists if expectations are not met?',
      answer: 'COAD provides comprehensive dispute resolution and quality assurance. We work diligently with all parties to resolve any matters satisfactorily.',
    },
    {
      question: 'How is payment administered?',
      answer: 'You remit a single invoice to COAD for the engagement. COAD then administers payment to the professional, simplifying your administrative burden.',
    },
  ];

  const getProfessionalCount = () => {
    let base = 150;
    if (selectedTrack !== 'all') base = Math.floor(base * 0.5);
    if (selectedLevel !== 'all') base = Math.floor(base * 0.4);
    return base;
  };

  return (
    <>
      <Helmet>
        <title>AI Workforce - Connect Certified AI Professionals with Opportunities | COAD</title>
        <meta name="description" content="Join COAD's AI Workforce network to access vetted consulting engagements. Complete certifications to become eligible. Clients receive pre-qualified AI expertise matched to requirements." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section - Academic/Distinguished */}
        <section className="bg-navy text-primary-foreground py-24 md:py-32 relative overflow-hidden">
          {/* Subtle geometric pattern - like university heraldry */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 100px,
                hsl(var(--primary-foreground)) 100px,
                hsl(var(--primary-foreground)) 101px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 100px,
                hsl(var(--primary-foreground)) 100px,
                hsl(var(--primary-foreground)) 101px
              )`
            }} />
          </div>

          <div className="container-coad relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Academic crest/emblem placeholder */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-primary/40 rounded-full">
                  <span className="text-2xl font-serif font-bold text-primary tracking-wider">AI</span>
                </div>
              </div>

              <p className="text-sm tracking-[0.3em] uppercase text-primary/80 mb-6 font-medium">
                The Certified Order of AI Developers
              </p>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
                Professional Network
              </h1>

              <div className="w-24 h-0.5 bg-primary/40 mx-auto mb-8" />

              <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto mb-12 font-light">
                A distinguished network connecting certified AI professionals with organisations 
                seeking expertise of the highest calibre. Charterholders receive priority placement 
                and premium engagement rates.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all px-8 py-6 text-base font-medium tracking-wide"
                  asChild
                >
                  <Link to="/auth">Apply for Membership</Link>
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="text-gray-300 hover:text-primary-foreground hover:bg-primary/10 px-8 py-6 text-base font-medium tracking-wide border border-gray-600 hover:border-primary/40"
                  asChild
                >
                  <Link to="/auth">Engage Professionals</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/20" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/20" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/20" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/20" />
        </section>

        {/* Two Columns - Mission Statement Style */}
        <section className="py-20 bg-background border-b border-border">
          <div className="container-coad">
            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              <div className="text-center md:text-left">
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  For Professionals
                </h2>
                <div className="w-16 h-0.5 bg-primary/60 mb-6 mx-auto md:mx-0" />
                <p className="text-muted-foreground leading-relaxed">
                  Transform your COAD certifications into substantive consulting engagements. 
                  Our network connects you with organisations seeking precisely your demonstrated 
                  competencies, whilst handling all administrative matters from matching through remuneration.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  For Organisations
                </h2>
                <div className="w-16 h-0.5 bg-primary/60 mb-6 mx-auto md:mx-0" />
                <p className="text-muted-foreground leading-relaxed">
                  Access a curated network of pre-vetted, certified AI professionals. 
                  Each member has demonstrated competency through rigorous examination. 
                  Quality assured through established certification standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Professionals */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container-coad">
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4 font-medium">The Process</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                For Professionals
              </h2>
              <div className="w-16 h-0.5 bg-primary/40 mx-auto" />
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {professionalSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 border-2 border-foreground/20 rounded-full flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-foreground">{step.number}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                  <ul className="text-left space-y-2 bg-background/50 rounded-lg p-4 border border-border">
                    {step.details.slice(0, 3).map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-primary mt-0.5">—</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Clients */}
        <section className="py-20 md:py-28 bg-background border-b border-border">
          <div className="container-coad">
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4 font-medium">The Process</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                For Organisations
              </h2>
              <div className="w-16 h-0.5 bg-primary/40 mx-auto" />
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {clientSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 border-2 border-foreground/20 rounded-full flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-foreground">{step.number}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                  <ul className="text-left space-y-2 bg-muted/30 rounded-lg p-4 border border-border">
                    {step.details.slice(0, 3).map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-primary mt-0.5">—</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits - Two Column Academic Layout */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container-coad">
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4 font-medium">Advantages</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Membership Benefits
              </h2>
              <div className="w-16 h-0.5 bg-primary/40 mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {/* Professional Benefits */}
              <div>
                <h3 className="font-serif text-xl font-semibold mb-6 text-center md:text-left border-b border-border pb-4">
                  For Professionals
                </h3>
                <div className="space-y-6">
                  {professionalBenefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-serif text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Benefits */}
              <div>
                <h3 className="font-serif text-xl font-semibold mb-6 text-center md:text-left border-b border-border pb-4">
                  For Organisations
                </h3>
                <div className="space-y-6">
                  {clientBenefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-serif text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Tiers - Academic Honour Roll Style */}
        <section className="py-20 md:py-28 bg-navy text-primary-foreground relative">
          <div className="container-coad relative z-10">
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-primary/80 mb-4 font-medium">Membership Tiers</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Professional Standing
              </h2>
              <div className="w-16 h-0.5 bg-primary/40 mx-auto mb-6" />
              <p className="text-gray-300 max-w-2xl mx-auto">
                Your certification achievement determines your standing within the network and corresponding privileges.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {eligibilityTiers.map((tier, index) => (
                <div
                  key={index}
                  className={cn(
                    'rounded-lg p-8 border-2 transition-all text-center',
                    tier.featured
                      ? 'bg-primary/10 border-primary'
                      : 'bg-white/5 border-white/10'
                  )}
                >
                  {tier.featured && (
                    <div className="inline-block px-4 py-1 bg-primary text-primary-foreground text-xs font-medium tracking-wider uppercase mb-4 rounded">
                      Highest Standing
                    </div>
                  )}
                  <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">{tier.tier}</p>
                  <h3 className="font-serif text-xl font-bold mb-3">{tier.title}</h3>
                  <p className="text-sm text-gray-300 mb-6 pb-6 border-b border-white/10">{tier.description}</p>
                  <ul className="space-y-3 text-left">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="text-primary">—</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Directory - Scholarly Register Style */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container-coad">
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4 font-medium">Professional Register</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Member Directory
              </h2>
              <div className="w-16 h-0.5 bg-primary/40 mx-auto mb-6" />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Filter by track, competency, and professional standing to identify suitable expertise.
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg border border-border p-6 md:p-8 max-w-5xl mx-auto">
              <div className="flex flex-wrap gap-6 mb-8 pb-6 border-b border-border">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-2 block tracking-wide uppercase">By Track</label>
                  <div className="flex gap-2">
                    {[
                      { value: 'all', label: 'All' },
                      { value: 'aad', label: 'AAD' },
                      { value: 'aio', label: 'AIO' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setSelectedTrack(option.value as typeof selectedTrack)}
                        className={cn(
                          'px-4 py-2 text-sm font-medium transition-all border',
                          selectedTrack === option.value
                            ? 'bg-foreground text-background border-foreground'
                            : 'bg-background text-muted-foreground border-border hover:border-foreground/50'
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-2 block tracking-wide uppercase">By Standing</label>
                  <div className="flex gap-2">
                    {[
                      { value: 'all', label: 'All' },
                      { value: 'entry', label: 'Entry' },
                      { value: 'mid', label: 'Mid' },
                      { value: 'senior', label: 'Senior' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setSelectedLevel(option.value as typeof selectedLevel)}
                        className={cn(
                          'px-4 py-2 text-sm font-medium transition-all border',
                          selectedLevel === option.value
                            ? 'bg-foreground text-background border-foreground'
                            : 'bg-background text-muted-foreground border-border hover:border-foreground/50'
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                <span className="font-semibold text-foreground">{getProfessionalCount()}</span> professionals match your criteria
              </p>

              {/* Sample Professional Cards - Academic Style */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Dr Sarah Chen', title: 'Senior AI Engineer', track: 'AAD', level: 'Charterholder', rate: '€150-200/hr', available: true },
                  { name: 'Marcus Weber, MSc', title: 'AI Governance Consultant', track: 'AIO', level: 'Charterholder', rate: '€175-225/hr', available: true },
                  { name: 'Elena Rodriguez', title: 'Privacy Auditor', track: 'AIO', level: 'Track Completer', rate: '€120-160/hr', available: false },
                ].map((professional, index) => (
                  <div key={index} className="bg-background border border-border p-5">
                    <div className="mb-4 pb-4 border-b border-border">
                      <h4 className="font-serif font-semibold text-base">{professional.name}</h4>
                      <p className="text-sm text-muted-foreground">{professional.title}</p>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Track</span>
                        <span className="font-medium">{professional.track}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Standing</span>
                        <span className={cn(
                          "font-medium",
                          professional.level === 'Charterholder' && "text-primary"
                        )}>{professional.level}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Rate</span>
                        <span className="font-medium">{professional.rate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Status</span>
                        <span className={cn(
                          "font-medium",
                          professional.available ? "text-teal" : "text-muted-foreground"
                        )}>
                          {professional.available ? 'Available' : 'Engaged'}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full text-sm">
                      View Profile
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics - Formal Display */}
        <section className="py-16 bg-muted/30 border-y border-border">
          <div className="container-coad">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - Formal Quotations */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container-coad">
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4 font-medium">Testimonials</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Member Experiences
              </h2>
              <div className="w-16 h-0.5 bg-primary/40 mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-muted/30 border border-border p-8">
                  <div className="text-4xl font-serif text-primary/30 mb-4">"</div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    {testimonial.quote}
                  </p>
                  {testimonial.type === 'professional' ? (
                    <div className="pt-4 border-t border-border">
                      <div className="font-serif font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-primary">{testimonial.credentials}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    </div>
                  ) : (
                    <div className="pt-4 border-t border-border">
                      <div className="font-serif font-semibold">{testimonial.organisation}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.engagement}</div>
                      <div className="text-sm text-primary mt-1">{testimonial.outcome}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Formal Invitation */}
        <section className="py-20 md:py-28 bg-navy text-primary-foreground relative">
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/20" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/20" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/20" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/20" />

          <div className="container-coad relative z-10">
            <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
              {/* For Professionals */}
              <div className="text-center">
                <p className="text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">For Professionals</p>
                <h3 className="font-serif text-2xl font-bold mb-4">Apply for Membership</h3>
                <div className="w-12 h-0.5 bg-primary/40 mx-auto mb-6" />
                <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                  Complete COAD certifications to qualify for membership in the Professional Network 
                  and access consulting engagements commensurate with your expertise.
                </p>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <Link to="/certifications">View Certifications</Link>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="w-full text-gray-300 hover:text-primary-foreground border border-gray-600 hover:border-primary/40"
                    asChild
                  >
                    <Link to="/auth">Already Certified? Apply Now</Link>
                  </Button>
                </div>
              </div>

              {/* For Clients */}
              <div className="text-center">
                <p className="text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">For Organisations</p>
                <h3 className="font-serif text-2xl font-bold mb-4">Engage Professionals</h3>
                <div className="w-12 h-0.5 bg-primary/40 mx-auto mb-6" />
                <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                  Submit your project requirements and receive matched recommendations from our 
                  network of certified AI professionals with demonstrated expertise.
                </p>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <Link to="/auth">Submit Requirements</Link>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="w-full text-gray-300 hover:text-primary-foreground border border-gray-600 hover:border-primary/40"
                    asChild
                  >
                    <Link to="/ai-workforce">Browse Directory</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Formal Q&A */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container-coad">
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4 font-medium">Enquiries</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-0.5 bg-primary/40 mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Professional FAQs */}
              <div>
                <h3 className="font-serif text-lg font-semibold mb-6 pb-4 border-b border-border">
                  For Professionals
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {professionalFaqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`prof-${index}`} 
                      className="border border-border bg-muted/20 px-4"
                    >
                      <AccordionTrigger className="text-sm font-medium text-left hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Client FAQs */}
              <div>
                <h3 className="font-serif text-lg font-semibold mb-6 pb-4 border-b border-border">
                  For Organisations
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {clientFaqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`client-${index}`} 
                      className="border border-border bg-muted/20 px-4"
                    >
                      <AccordionTrigger className="text-sm font-medium text-left hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AIWorkforce;
