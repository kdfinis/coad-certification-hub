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
import {
  Award,
  Briefcase,
  CheckCircle2,
  CreditCard,
  FileText,
  Filter,
  Handshake,
  Shield,
  Star,
  Target,
  User,
  Users,
  Wallet,
  Clock,
  Building2,
  FolderOpen,
  HeadphonesIcon,
} from 'lucide-react';
import {
  CredentialIcon,
  NetworkNodesIcon,
  ShieldNodeIcon,
  NeuralBrainIcon,
  CheckNodeIcon,
} from '@/components/ui/custom-icons';

const AIWorkforce = () => {
  const [selectedTrack, setSelectedTrack] = useState<'all' | 'aad' | 'aio'>('all');
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'entry' | 'mid' | 'senior'>('all');

  const professionalSteps = [
    {
      icon: Award,
      title: 'Step 1: Get Certified',
      description: 'Complete COAD certifications (tracks or modules) to become eligible for AI Workforce. Track completion gives you full access. Charterholder status unlocks priority placement and premium rates.',
      details: [
        'Automatic eligibility upon certification completion',
        'Track completion = Full access to all opportunities',
        'Module completion = Access to module-specific projects',
        'Charterholder status = Priority placement + Premium rates',
      ],
    },
    {
      icon: User,
      title: 'Step 2: Create Your Profile',
      description: 'Build your professional profile showcasing your competencies, certifications, and portfolio. Set your availability and rate preferences. Your profile becomes your professional showcase.',
      details: [
        'Showcase certifications and competencies',
        'Upload portfolio and case studies',
        'Set availability (full-time, part-time, project-based)',
        'Define rate preferences',
        'Add professional summary and bio',
      ],
    },
    {
      icon: Target,
      title: 'Step 3: Get Matched to Projects',
      description: 'Receive project opportunities that match your competencies. Review project details, client requirements, and timelines. Accept projects that align with your goals.',
      details: [
        'Competency-based matching',
        'Project notifications via email and dashboard',
        'Review project details before accepting',
        'Accept or decline opportunities',
        'Charterholders see opportunities first',
      ],
    },
    {
      icon: Wallet,
      title: 'Step 4: Get Paid Through COAD',
      description: 'COAD handles all invoicing and payment processing. Transparent payment terms, regular payouts, and secure transactions. Focus on your work, not paperwork.',
      details: [
        'COAD handles client invoicing',
        'Transparent payment terms',
        'Regular payouts (bi-weekly or monthly)',
        'Secure payment processing',
        'No payment collection hassle',
      ],
    },
  ];

  const clientSteps = [
    {
      icon: FileText,
      title: 'Step 1: Submit Your Project Request',
      description: 'Describe your project scope, required competencies, timeline, and budget. Specify if you need Charterholders or have specific professional requests.',
      details: [
        'Project description and scope',
        'Required competencies (tracks, modules, skills)',
        'Timeline and deadlines',
        'Budget range',
        'Preferred professional tier',
      ],
    },
    {
      icon: Users,
      title: 'Step 2: Review Matched Professionals',
      description: 'COAD matches 3-5 qualified professionals based on your requirements. Review profiles, portfolios, certifications, and previous client ratings.',
      details: [
        'Competency-based matching',
        '3-5 professional recommendations',
        'Detailed profiles and portfolios',
        'Previous client ratings and reviews',
        'Request additional matches if needed',
      ],
    },
    {
      icon: Handshake,
      title: 'Step 3: Select Professionals & Start',
      description: 'Choose the professional(s) for your project. COAD facilitates contract creation and onboarding. Begin your project with vetted, certified talent.',
      details: [
        'Select one or more professionals',
        'COAD facilitates contract creation',
        'Project onboarding and kickoff',
        'Communication channels established',
        'Project management support',
      ],
    },
    {
      icon: CreditCard,
      title: 'Step 4: Pay Through COAD',
      description: 'Single invoice from COAD simplifies payment processing. Quality assurance backed by certifications. Secure, transparent transactions.',
      details: [
        'Single invoice from COAD',
        'Simplified payment processing',
        'Quality assurance through certifications',
        'Secure payment handling',
        'Dispute resolution support',
      ],
    },
  ];

  const professionalBenefits = [
    { icon: Briefcase, title: 'Access to Vetted Opportunities', description: 'Work with quality clients pre-screened by COAD. Projects aligned with your certified competencies.' },
    { icon: Target, title: 'Competency-Based Matching', description: 'Get matched to projects that align with your skills. Build your portfolio with relevant experience.' },
    { icon: Star, title: 'Priority for Charterholders', description: 'Charterholders get first access to opportunities, premium rates, and featured profile placement.' },
    { icon: Wallet, title: 'Streamlined Payments', description: 'COAD handles all invoicing and payments. Transparent terms, regular payouts, secure transactions.' },
    { icon: FolderOpen, title: 'Build Your Portfolio', description: 'Work on real-world projects that showcase your skills. Advance your career with AI consulting experience.' },
  ];

  const clientBenefits = [
    { icon: CheckCircle2, title: 'Pre-Vetted Professionals', description: 'All professionals are COAD-certified and pre-vetted. Quality assurance through certification standards.' },
    { icon: Target, title: 'Right Skills for Your Needs', description: 'Get matched to professionals with the exact competencies you need. AAD for development, AIO for oversight.' },
    { icon: Shield, title: 'Quality Assurance', description: 'COAD certifications ensure quality. Professionals meet competency standards. EU AI Act-aligned expertise.' },
    { icon: HeadphonesIcon, title: 'Single Point of Contact', description: 'Work with COAD for all your AI talent needs. Simplified sourcing, contract management, and payment.' },
    { icon: ShieldNodeIcon, title: 'EU AI Act Expertise', description: 'Professionals trained in EU AI Act compliance. Ensure your AI projects meet regulatory requirements.' },
  ];

  const eligibilityTiers = [
    {
      tier: 'Tier 1',
      title: 'Charterholders',
      description: 'Complete full track (AAD or AIO) → Charterholder status',
      features: [
        'Priority placement in all matching',
        'Premium rate opportunities (20% higher)',
        'Featured profile placement',
        'Direct client requests',
        'Reduced margin (20% vs 25-30%)',
      ],
      featured: true,
    },
    {
      tier: 'Tier 2',
      title: 'Track Completers',
      description: 'Complete AAD or AIO track (all phases/domains)',
      features: [
        'Full access to all opportunities',
        'Standard rates',
        'Standard matching priority',
      ],
    },
    {
      tier: 'Tier 3',
      title: 'Module Completers',
      description: 'Complete at least one competency module',
      features: [
        'Access to projects matching module competencies',
        'Entry-level rates',
        'Standard matching priority',
      ],
    },
  ];

  const testimonials = [
    {
      quote: "Completing my AAD track opened doors to consulting opportunities I never had before. The competency-based matching means I only get projects I'm qualified for, and the payment processing is seamless.",
      author: 'Sarah Chen',
      role: 'AAD Charterholder, AI Engineer',
      stats: '8 projects, €45,000 earned',
      type: 'professional',
    },
    {
      quote: "As an ACOS Charterholder, I get priority placement and premium rates. The hub has become my primary source of consulting work. COAD's certification investment paid off immediately.",
      author: 'Marcus Weber',
      role: 'ACOS Charterholder, AI Governance Consultant',
      stats: '12 projects, €85,000 earned',
      type: 'professional',
    },
    {
      quote: "Finding certified AI professionals used to be a challenge. COAD's hub made it easy—we got matched to exactly the right professionals for our EU AI Act compliance project. Quality was exceptional.",
      company: 'TechCorp Europe',
      project: 'EU AI Act Compliance Audit',
      result: 'Completed on time, met all requirements',
      type: 'client',
    },
    {
      quote: "The competency-based matching saved us weeks of searching. We needed a Privacy Auditor, and COAD matched us with three qualified professionals. We selected one and the project was flawless.",
      company: 'FinanceAI Solutions',
      project: 'Privacy Audit for AI System',
      result: 'Comprehensive audit, regulatory compliance achieved',
      type: 'client',
    },
  ];

  const stats = [
    { number: '150+', label: 'Certified Professionals', description: 'Active professionals in the hub' },
    { number: '500+', label: 'Projects Completed', description: 'Successful project completions' },
    { number: '€2.5M+', label: 'Total Project Value', description: 'Combined value of completed projects' },
    { number: '95%', label: 'Client Satisfaction', description: 'Clients satisfied with matches' },
  ];

  const professionalFaqs = [
    {
      question: 'Do I need to complete a full track to join?',
      answer: 'No, completing at least one module makes you eligible. However, track completion gives you full access, and Charterholder status provides priority placement.',
    },
    {
      question: 'How are projects matched to me?',
      answer: 'Projects are matched based on your certified competencies, availability, and rate preferences. Charterholders see opportunities first.',
    },
    {
      question: 'How does payment work?',
      answer: 'COAD handles all invoicing and payment processing. You receive 70-80% of the project fee (depending on your tier), with regular payouts.',
    },
    {
      question: 'Can I request specific projects?',
      answer: 'Yes, you can browse available projects and request ones that interest you, or wait for matching notifications.',
    },
  ];

  const clientFaqs = [
    {
      question: 'How quickly can I get matched to professionals?',
      answer: 'Typically within 24-48 hours of submitting your project request. Charterholder requests may be matched faster.',
    },
    {
      question: 'Can I request specific professionals?',
      answer: 'Yes, if you know a specific professional you would like to work with, you can request them directly.',
    },
    {
      question: "What if I'm not satisfied with a professional?",
      answer: 'COAD provides dispute resolution and quality assurance. We work with you to resolve any issues.',
    },
    {
      question: 'How does payment work?',
      answer: 'You pay COAD a single invoice for the project. COAD handles payment to the professional, simplifying the process.',
    },
  ];

  // Mock professional count based on filters
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
        <meta name="description" content="Join COAD's AI Workforce hub to access vetted consulting opportunities. Complete certifications to become eligible. Clients get pre-qualified AI talent matched to their needs." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-navy text-primary-foreground py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal rounded-full blur-3xl" />
          </div>

          <div className="container-coad relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-8">
                <NetworkNodesIcon className="w-5 h-5" />
                <span className="text-sm font-medium">COAD AI Talent Network</span>
              </div>

              <h1 className="heading-1 mb-6">
                AI Workforce: Connect Certified Professionals with{' '}
                <span className="gradient-text">Opportunities</span>
              </h1>

              <p className="body-large text-gray-300 max-w-3xl mx-auto mb-10">
                Complete COAD certifications to unlock access to vetted AI consulting projects. 
                Clients get pre-qualified AI talent matched to their needs. Charterholders get 
                priority placement and premium rates.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/auth">Join AI Workforce</Link>
                </Button>
                <Button variant="outline" size="xl" className="border-primary/40 text-primary-foreground hover:bg-primary/10" asChild>
                  <Link to="/auth">Hire AI Talent</Link>
                </Button>
              </div>
            </div>

            {/* Split Dashboard Preview */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-card/10 backdrop-blur-sm rounded-2xl border border-primary/20 p-6 group hover:border-primary/40 transition-all">
                <h3 className="text-primary font-semibold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Professional Dashboard
                </h3>
                <div className="space-y-3">
                  <div className="bg-background/10 rounded-lg p-3 flex items-center justify-between">
                    <span className="text-sm text-gray-300">Active Projects</span>
                    <span className="font-semibold text-primary">3</span>
                  </div>
                  <div className="bg-background/10 rounded-lg p-3 flex items-center justify-between">
                    <span className="text-sm text-gray-300">New Matches</span>
                    <span className="font-semibold text-teal">5</span>
                  </div>
                  <div className="bg-background/10 rounded-lg p-3 flex items-center justify-between">
                    <span className="text-sm text-gray-300">Earnings This Month</span>
                    <span className="font-semibold gradient-text">€8,500</span>
                  </div>
                </div>
              </div>

              <div className="bg-card/10 backdrop-blur-sm rounded-2xl border border-teal/20 p-6 group hover:border-teal/40 transition-all">
                <h3 className="text-teal font-semibold mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Client Dashboard
                </h3>
                <div className="space-y-3">
                  <div className="bg-background/10 rounded-lg p-3 flex items-center justify-between">
                    <span className="text-sm text-gray-300">Active Projects</span>
                    <span className="font-semibold text-teal">2</span>
                  </div>
                  <div className="bg-background/10 rounded-lg p-3 flex items-center justify-between">
                    <span className="text-sm text-gray-300">Matched Professionals</span>
                    <span className="font-semibold text-primary">8</span>
                  </div>
                  <div className="bg-background/10 rounded-lg p-3 flex items-center justify-between">
                    <span className="text-sm text-gray-300">Projects Completed</span>
                    <span className="font-semibold gradient-text">12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Professionals */}
        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">
                How It Works for <span className="gradient-text">Professionals</span>
              </h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                From certification to getting paid—a streamlined journey to consulting success.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {professionalSteps.map((step, index) => (
                <div key={index} className="relative">
                  {index < professionalSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
                  )}
                  <div className="bg-card rounded-2xl border border-border p-6 card-hover relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-teal/20 flex items-center justify-center mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.slice(0, 3).map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckNodeIcon className="w-3.5 h-3.5 text-teal flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Clients */}
        <section className="section-padding bg-muted/50">
          <div className="container-coad">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">
                How It Works for <span className="gradient-text">Clients</span>
              </h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                From project submission to completion—find the right AI talent quickly.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {clientSteps.map((step, index) => (
                <div key={index} className="relative">
                  {index < clientSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-teal/50 to-transparent z-0" />
                  )}
                  <div className="bg-card rounded-2xl border border-border p-6 card-hover relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal/20 to-primary/20 flex items-center justify-center mb-4">
                      <step.icon className="w-7 h-7 text-teal" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.slice(0, 3).map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckNodeIcon className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-background">
          <div className="container-coad">
            {/* Professional Benefits */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="heading-3 mb-4">Benefits for Professionals</h2>
                <p className="body text-muted-foreground max-w-2xl mx-auto">
                  Turn your certifications into consulting opportunities.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {professionalBenefits.map((benefit, index) => (
                  <div key={index} className="bg-card rounded-xl border border-border p-5 card-hover text-center">
                    <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-2">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Benefits */}
            <div>
              <div className="text-center mb-12">
                <h2 className="heading-3 mb-4">Benefits for Clients</h2>
                <p className="body text-muted-foreground max-w-2xl mx-auto">
                  Access pre-vetted, certified AI talent for your projects.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {clientBenefits.map((benefit, index) => (
                  <div key={index} className="bg-card rounded-xl border border-border p-5 card-hover text-center">
                    <div className="w-12 h-12 mx-auto rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-teal" />
                    </div>
                    <h4 className="font-semibold text-sm mb-2">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Tiers */}
        <section className="section-padding bg-navy text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="container-coad relative z-10">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Eligibility for Professionals</h2>
              <p className="body-large text-gray-300 max-w-2xl mx-auto">
                Your certification level determines your access and benefits.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {eligibilityTiers.map((tier, index) => (
                <div
                  key={index}
                  className={cn(
                    'rounded-2xl p-6 border transition-all',
                    tier.featured
                      ? 'bg-card/20 border-primary shadow-glow'
                      : 'bg-card/10 border-primary/20'
                  )}
                >
                  {tier.featured && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-4">
                      <Star className="w-3 h-3" />
                      Priority Access
                    </div>
                  )}
                  <div className="text-xs text-gray-400 mb-1">{tier.tier}</div>
                  <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{tier.description}</p>
                  <ul className="space-y-2">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Segmentation / Filter Tool */}
        <section className="section-padding bg-muted/50">
          <div className="container-coad">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">
                Find the Right <span className="gradient-text">Professional</span>
              </h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                Filter by track, competency, and experience level to find your perfect match.
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <div className="flex flex-wrap gap-4 mb-8">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">By Track</label>
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
                          'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                          selectedTrack === option.value
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">By Experience</label>
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
                          'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                          selectedLevel === option.value
                            ? 'bg-teal text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-lg font-semibold mb-6">
                <Filter className="w-5 h-5 text-primary" />
                <span>{getProfessionalCount()} professionals match your criteria</span>
              </div>

              {/* Sample Professional Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Sarah Chen', title: 'AI Engineer', track: 'AAD', level: 'Charterholder', rate: '€150-200/hr', available: true },
                  { name: 'Marcus Weber', title: 'AI Governance Consultant', track: 'AIO', level: 'Charterholder', rate: '€175-225/hr', available: true },
                  { name: 'Elena Rodriguez', title: 'Privacy Auditor', track: 'AIO', level: 'Track Completer', rate: '€120-160/hr', available: false },
                ].map((professional, index) => (
                  <div key={index} className="bg-muted/50 rounded-xl p-4 border border-border">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{professional.name}</h4>
                        <p className="text-sm text-muted-foreground">{professional.title}</p>
                      </div>
                      {professional.level === 'Charterholder' && (
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center gap-1">
                          <Star className="w-3 h-3" /> Charterholder
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={cn(
                        'px-2 py-0.5 rounded text-xs font-medium',
                        professional.track === 'AAD' ? 'bg-primary/10 text-primary' : 'bg-teal/10 text-teal'
                      )}>
                        {professional.track}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-muted text-muted-foreground text-xs">
                        {professional.rate}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={cn(
                        'text-xs flex items-center gap-1',
                        professional.available ? 'text-teal' : 'text-muted-foreground'
                      )}>
                        <Clock className="w-3 h-3" />
                        {professional.available ? 'Available' : 'Busy'}
                      </span>
                      <Button variant="ghost" size="sm" className="text-primary">
                        View Profile
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="section-padding-sm bg-background">
          <div className="container-coad">
            <div className="text-center mb-12">
              <h2 className="heading-3 mb-4">AI Workforce by the Numbers</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-xl border border-border">
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-muted/50">
          <div className="container-coad">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Success Stories</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                Hear from professionals and clients who've found success through AI Workforce.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card rounded-2xl border border-border p-6 card-hover">
                  <p className="text-lg italic text-muted-foreground mb-6">"{testimonial.quote}"</p>
                  {testimonial.type === 'professional' ? (
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-primary mt-1">{testimonial.stats}</div>
                    </div>
                  ) : (
                    <div>
                      <div className="font-semibold">{testimonial.company}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.project}</div>
                      <div className="text-sm text-teal mt-1">{testimonial.result}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Sections */}
        <section className="section-padding bg-navy text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-teal rounded-full blur-3xl" />
          </div>

          <div className="container-coad relative z-10">
            <div className="grid md:grid-cols-2 gap-12">
              {/* For Professionals */}
              <div className="text-center">
                <CredentialIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="heading-3 mb-4">Ready to Join AI Workforce?</h3>
                <p className="text-gray-300 mb-6">
                  Complete COAD certifications to become eligible for consulting opportunities.
                </p>
                <div className="flex flex-col gap-3">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/certifications">Complete Certifications</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary/40 text-primary-foreground hover:bg-primary/10" asChild>
                    <Link to="/auth">Already Certified? Join Now</Link>
                  </Button>
                </div>
              </div>

              {/* For Clients */}
              <div className="text-center">
                <NeuralBrainIcon className="w-12 h-12 mx-auto mb-4 text-teal" />
                <h3 className="heading-3 mb-4">Need Certified AI Talent?</h3>
                <p className="text-gray-300 mb-6">
                  Submit your project request and get matched to qualified professionals.
                </p>
                <div className="flex flex-col gap-3">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/auth">Hire Certified AI Talent</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-teal/40 text-primary-foreground hover:bg-teal/10" asChild>
                    <Link to="/auth">View Available Professionals</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Professional FAQs */}
              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  For Professionals
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {professionalFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`pro-${index}`} className="bg-card rounded-lg border border-border px-4">
                      <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Client FAQs */}
              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-teal" />
                  For Clients
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {clientFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`client-${index}`} className="bg-card rounded-lg border border-border px-4">
                      <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
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