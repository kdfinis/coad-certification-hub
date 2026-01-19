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
      description: 'Complete COAD certifications to demonstrate mastery. Charterholder status confers priority placement and premium rates.',
    },
    {
      number: 'II',
      title: 'Establish Your Profile',
      description: 'Construct your professional dossier showcasing competencies, credentials, and portfolio of distinguished work.',
    },
    {
      number: 'III',
      title: 'Receive Engagements',
      description: 'Review opportunities aligned with your certified competencies. Charterholders receive priority consideration.',
    },
    {
      number: 'IV',
      title: 'Secure Remuneration',
      description: 'COAD administers all invoicing and payment. Transparent terms, regular disbursements, secure transactions.',
    },
  ];

  const clientSteps = [
    {
      number: 'I',
      title: 'Submit Requirements',
      description: 'Articulate your project scope, required competencies, timeline, and budget parameters.',
    },
    {
      number: 'II',
      title: 'Review Candidates',
      description: 'COAD presents three to five qualified professionals matched precisely to your requirements.',
    },
    {
      number: 'III',
      title: 'Select & Commence',
      description: 'Designate professionals for engagement. COAD facilitates contract execution and onboarding.',
    },
    {
      number: 'IV',
      title: 'Remit Payment',
      description: 'A single invoice from COAD streamlines payment. Quality assured through certification standards.',
    },
  ];

  const eligibilityTiers = [
    {
      tier: 'FIRST CLASS',
      title: 'Charterholders',
      latin: 'Summa Cum Laude',
      description: 'Complete full track (AAD or AIO)',
      features: [
        'Priority consideration for all engagements',
        'Premium rate opportunities (+20%)',
        'Distinguished profile placement',
        'Direct client engagement requests',
      ],
      featured: true,
    },
    {
      tier: 'SECOND CLASS',
      title: 'Track Completers',
      latin: 'Magna Cum Laude',
      description: 'Complete AAD or AIO track',
      features: [
        'Full access to all engagements',
        'Standard rate structure',
        'Standard matching priority',
      ],
    },
    {
      tier: 'THIRD CLASS',
      title: 'Module Completers',
      latin: 'Cum Laude',
      description: 'Complete at least one module',
      features: [
        'Access to module-aligned engagements',
        'Entry-level rate structure',
      ],
    },
  ];

  const testimonials = [
    {
      quote: "Attaining my AAD credentials opened doors to consulting engagements previously inaccessible. The investment in rigorous certification has yielded substantial professional returns.",
      author: 'Dr Sarah Chen, PhD',
      credentials: 'AAD Charterholder',
      year: 'Class of 2024',
    },
    {
      quote: "As an ACOS Charterholder, I benefit from priority consideration and premium rates. The network has become my principal source of distinguished professional engagements.",
      author: 'Marcus Weber, MSc',
      credentials: 'ACOS Charterholder',
      year: 'Class of 2023',
    },
  ];

  const stats = [
    { number: '150+', label: 'Certified Members' },
    { number: '500+', label: 'Engagements' },
    { number: '€2.5M+', label: 'Total Value' },
    { number: '95%', label: 'Satisfaction' },
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
        <meta name="description" content="Join COAD's AI Workforce network to access vetted consulting engagements. Complete certifications to become eligible. Clients receive pre-qualified AI expertise." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section - Grand Academic Style */}
        <section 
          className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, hsl(220 60% 8%) 0%, hsl(220 50% 12%) 50%, hsl(345 80% 20%) 100%)'
          }}
        >
          {/* Ornate border frame */}
          <div className="absolute inset-8 md:inset-16 border border-amber-600/30" />
          <div className="absolute inset-10 md:inset-20 border border-amber-600/20" />
          
          {/* Corner ornaments */}
          <div className="absolute top-8 left-8 md:top-16 md:left-16 w-24 h-24 md:w-32 md:h-32">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-transparent" />
            <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-amber-500 to-transparent" />
            <div className="absolute top-4 left-4 w-3 h-3 border-2 border-amber-500/60 rotate-45" />
          </div>
          <div className="absolute top-8 right-8 md:top-16 md:right-16 w-24 h-24 md:w-32 md:h-32">
            <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-amber-500 to-transparent" />
            <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-amber-500 to-transparent" />
            <div className="absolute top-4 right-4 w-3 h-3 border-2 border-amber-500/60 rotate-45" />
          </div>
          <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 w-24 h-24 md:w-32 md:h-32">
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-transparent" />
            <div className="absolute bottom-0 left-0 h-full w-0.5 bg-gradient-to-t from-amber-500 to-transparent" />
            <div className="absolute bottom-4 left-4 w-3 h-3 border-2 border-amber-500/60 rotate-45" />
          </div>
          <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 w-24 h-24 md:w-32 md:h-32">
            <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-amber-500 to-transparent" />
            <div className="absolute bottom-0 right-0 h-full w-0.5 bg-gradient-to-t from-amber-500 to-transparent" />
            <div className="absolute bottom-4 right-4 w-3 h-3 border-2 border-amber-500/60 rotate-45" />
          </div>

          <div className="container-coad relative z-10 text-center px-8">
            {/* Crest/Emblem */}
            <div className="mb-8 md:mb-12">
              <div className="inline-flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 border-4 border-amber-500/60 rounded-full flex items-center justify-center mb-4 relative">
                  <div className="absolute inset-2 border border-amber-500/30 rounded-full" />
                  <span className="font-display text-4xl md:text-5xl font-light text-amber-400 tracking-widest">AI</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
                  <span className="text-amber-500/80 text-xs tracking-[0.4em] uppercase">Est. MMXXIII</span>
                  <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
                </div>
              </div>
            </div>

            <p className="text-amber-400/90 text-xs md:text-sm tracking-[0.5em] uppercase mb-6 font-light">
              The Certified Order of AI Developers
            </p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-none mb-6 tracking-wide">
              Professional
              <br />
              <span className="text-amber-400 italic">Network</span>
            </h1>

            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 md:w-32 h-px bg-gradient-to-r from-transparent to-amber-500/60" />
              <div className="w-2 h-2 bg-amber-500/60 rotate-45" />
              <div className="w-24 md:w-32 h-px bg-gradient-to-l from-transparent to-amber-500/60" />
            </div>

            <p className="font-display text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light italic">
              "A distinguished network connecting certified AI professionals 
              with organisations seeking expertise of the highest calibre"
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-6 text-base font-display tracking-widest uppercase border-0"
                asChild
              >
                <Link to="/auth">Apply for Membership</Link>
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-amber-500/50 text-amber-400 hover:bg-amber-500/10 px-10 py-6 text-base font-display tracking-widest uppercase"
                asChild
              >
                <Link to="/auth">Engage Professionals</Link>
              </Button>
            </div>

            {/* Latin motto */}
            <p className="mt-12 text-amber-500/50 text-sm tracking-[0.3em] uppercase font-display italic">
              Scientia • Integritas • Excellentia
            </p>
          </div>
        </section>

        {/* Parchment-style Mission Section */}
        <section 
          className="py-24 md:py-32 relative"
          style={{
            background: 'linear-gradient(180deg, hsl(43 30% 94%) 0%, hsl(45 33% 91%) 100%)'
          }}
        >
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-700 to-transparent opacity-30" />
          
          <div className="container-coad">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <span className="text-amber-700/60 text-xs tracking-[0.4em] uppercase font-display">Our Mission</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-8 font-light leading-tight">
                Excellence Through
                <br />
                <span className="italic text-amber-800">Rigorous Certification</span>
              </h2>

              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="w-16 h-px bg-amber-700/40" />
                <div className="w-2 h-2 border border-amber-700/40 rotate-45" />
                <div className="w-16 h-px bg-amber-700/40" />
              </div>

              <p className="font-display text-xl md:text-2xl text-stone-600 leading-relaxed mb-12 italic">
                For over a century, the world's most distinguished professional bodies have 
                upheld standards of excellence through rigorous examination and certification. 
                COAD continues this tradition for the age of artificial intelligence.
              </p>

              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div className="text-left p-8 border border-amber-700/20 bg-white/50">
                  <h3 className="font-display text-2xl text-stone-800 mb-4">For Professionals</h3>
                  <div className="w-12 h-0.5 bg-amber-700/40 mb-6" />
                  <p className="text-stone-600 leading-relaxed">
                    Transform your COAD certifications into substantive consulting engagements. 
                    Our network connects you with organisations seeking precisely your demonstrated 
                    competencies, whilst handling all administrative matters.
                  </p>
                </div>
                <div className="text-left p-8 border border-amber-700/20 bg-white/50">
                  <h3 className="font-display text-2xl text-stone-800 mb-4">For Organisations</h3>
                  <div className="w-12 h-0.5 bg-amber-700/40 mb-6" />
                  <p className="text-stone-600 leading-relaxed">
                    Access a curated network of pre-vetted, certified AI professionals. 
                    Each member has demonstrated competency through rigorous examination. 
                    Quality assured through established certification standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process - For Professionals (Dark Academic) */}
        <section 
          className="py-24 md:py-32 relative"
          style={{
            background: 'linear-gradient(180deg, hsl(220 50% 12%) 0%, hsl(220 60% 8%) 100%)'
          }}
        >
          <div className="container-coad">
            <div className="text-center mb-16">
              <span className="text-amber-500/60 text-xs tracking-[0.4em] uppercase font-display block mb-4">The Process</span>
              <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-4">
                For <span className="italic text-amber-400">Professionals</span>
              </h2>
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="w-16 h-px bg-amber-500/40" />
                <div className="w-2 h-2 border border-amber-500/40 rotate-45" />
                <div className="w-16 h-px bg-amber-500/40" />
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {professionalSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 border-2 border-amber-500/40 rounded-full flex items-center justify-center relative group-hover:border-amber-500 transition-colors">
                    <span className="font-display text-3xl text-amber-400 font-light">{step.number}</span>
                  </div>
                  <h3 className="font-display text-xl text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process - For Clients (Cream/Parchment) */}
        <section 
          className="py-24 md:py-32 relative"
          style={{
            background: 'linear-gradient(180deg, hsl(45 33% 91%) 0%, hsl(43 30% 94%) 100%)'
          }}
        >
          <div className="container-coad">
            <div className="text-center mb-16">
              <span className="text-amber-700/60 text-xs tracking-[0.4em] uppercase font-display block mb-4">The Process</span>
              <h2 className="font-display text-4xl md:text-5xl text-stone-800 font-light mb-4">
                For <span className="italic text-amber-800">Organisations</span>
              </h2>
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="w-16 h-px bg-amber-700/40" />
                <div className="w-2 h-2 border border-amber-700/40 rotate-45" />
                <div className="w-16 h-px bg-amber-700/40" />
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {clientSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 border-2 border-amber-700/30 rounded-full flex items-center justify-center group-hover:border-amber-700 transition-colors bg-white/50">
                    <span className="font-display text-3xl text-amber-800 font-light">{step.number}</span>
                  </div>
                  <h3 className="font-display text-xl text-stone-800 mb-4">{step.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Honours Board - Eligibility Tiers */}
        <section 
          className="py-24 md:py-32 relative"
          style={{
            background: 'linear-gradient(180deg, hsl(345 80% 18%) 0%, hsl(345 80% 12%) 100%)'
          }}
        >
          {/* Wood grain texture overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(0,0,0,0.1) 2px,
              rgba(0,0,0,0.1) 4px
            )`
          }} />

          <div className="container-coad relative z-10">
            <div className="text-center mb-16">
              <span className="text-amber-400/60 text-xs tracking-[0.4em] uppercase font-display block mb-4">Honours Board</span>
              <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-4">
                Professional <span className="italic text-amber-400">Standing</span>
              </h2>
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="w-16 h-px bg-amber-400/40" />
                <div className="w-2 h-2 border border-amber-400/40 rotate-45" />
                <div className="w-16 h-px bg-amber-400/40" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {eligibilityTiers.map((tier, index) => (
                <div
                  key={index}
                  className={cn(
                    'p-8 text-center relative',
                    tier.featured
                      ? 'bg-gradient-to-b from-amber-900/40 to-amber-950/60 border-2 border-amber-500'
                      : 'bg-black/20 border border-amber-500/20'
                  )}
                >
                  {tier.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-amber-500 text-xs tracking-[0.2em] uppercase text-stone-900 font-semibold">
                      Highest Honour
                    </div>
                  )}
                  
                  <p className="text-amber-400/80 text-xs tracking-[0.3em] uppercase mb-2 mt-2">{tier.tier}</p>
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-2">{tier.title}</h3>
                  <p className="text-amber-400/60 text-sm italic mb-4 font-display">{tier.latin}</p>
                  
                  <div className="w-12 h-px bg-amber-500/40 mx-auto mb-6" />
                  
                  <p className="text-gray-300 text-sm mb-6">{tier.description}</p>
                  
                  <ul className="space-y-3 text-left">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="text-amber-500 mt-1">✦</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Member Directory - Scholarly Register */}
        <section 
          className="py-24 md:py-32"
          style={{
            background: 'linear-gradient(180deg, hsl(43 30% 94%) 0%, hsl(45 33% 91%) 100%)'
          }}
        >
          <div className="container-coad">
            <div className="text-center mb-16">
              <span className="text-amber-700/60 text-xs tracking-[0.4em] uppercase font-display block mb-4">Registry</span>
              <h2 className="font-display text-4xl md:text-5xl text-stone-800 font-light mb-4">
                Member <span className="italic text-amber-800">Directory</span>
              </h2>
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="w-16 h-px bg-amber-700/40" />
                <div className="w-2 h-2 border border-amber-700/40 rotate-45" />
                <div className="w-16 h-px bg-amber-700/40" />
              </div>
            </div>

            <div className="bg-white border border-amber-700/20 p-8 md:p-12 max-w-5xl mx-auto shadow-xl">
              <div className="flex flex-wrap gap-8 mb-8 pb-8 border-b border-amber-700/20">
                <div>
                  <label className="text-xs font-display text-stone-500 mb-3 block tracking-[0.2em] uppercase">By Track</label>
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
                          'px-5 py-2 text-sm font-display transition-all border',
                          selectedTrack === option.value
                            ? 'bg-stone-800 text-white border-stone-800'
                            : 'bg-white text-stone-600 border-stone-300 hover:border-stone-800'
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-display text-stone-500 mb-3 block tracking-[0.2em] uppercase">By Standing</label>
                  <div className="flex gap-2">
                    {[
                      { value: 'all', label: 'All' },
                      { value: 'senior', label: 'Charterholder' },
                      { value: 'mid', label: 'Track' },
                      { value: 'entry', label: 'Module' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setSelectedLevel(option.value as typeof selectedLevel)}
                        className={cn(
                          'px-5 py-2 text-sm font-display transition-all border',
                          selectedLevel === option.value
                            ? 'bg-stone-800 text-white border-stone-800'
                            : 'bg-white text-stone-600 border-stone-300 hover:border-stone-800'
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-stone-600 mb-8 font-display">
                <span className="text-2xl text-amber-800 font-semibold">{getProfessionalCount()}</span>
                <span className="ml-2">registered professionals match your criteria</span>
              </p>

              {/* Sample Professional Cards - Academic Style */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Dr Sarah Chen, PhD', title: 'Senior AI Engineer', track: 'AAD', level: 'Charterholder', rate: '€150-200/hr', year: '2024' },
                  { name: 'Marcus Weber, MSc', title: 'AI Governance Consultant', track: 'AIO', level: 'Charterholder', rate: '€175-225/hr', year: '2023' },
                  { name: 'Elena Rodriguez, MA', title: 'Privacy Auditor', track: 'AIO', level: 'Track Completer', rate: '€120-160/hr', year: '2024' },
                ].map((professional, index) => (
                  <div key={index} className="border border-stone-200 p-6 hover:border-amber-700/50 transition-colors bg-stone-50/50">
                    <div className="mb-4 pb-4 border-b border-stone-200">
                      <h4 className="font-display text-lg text-stone-800">{professional.name}</h4>
                      <p className="text-sm text-stone-500">{professional.title}</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Track</span>
                        <span className="font-medium text-stone-800">{professional.track}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Standing</span>
                        <span className={cn(
                          "font-medium",
                          professional.level === 'Charterholder' ? "text-amber-700" : "text-stone-800"
                        )}>{professional.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Class of</span>
                        <span className="font-medium text-stone-800">{professional.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Rate</span>
                        <span className="font-medium text-stone-800">{professional.rate}</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full mt-6 border-stone-300 text-stone-700 hover:bg-stone-100 font-display"
                    >
                      View Profile
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics - Formal Display */}
        <section 
          className="py-20"
          style={{
            background: 'linear-gradient(180deg, hsl(220 60% 8%) 0%, hsl(220 50% 12%) 100%)'
          }}
        >
          <div className="container-coad">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-4xl md:text-5xl lg:text-6xl text-amber-400 mb-2 font-light">{stat.number}</div>
                  <div className="text-gray-400 text-sm tracking-widest uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - Formal Quotations */}
        <section 
          className="py-24 md:py-32"
          style={{
            background: 'linear-gradient(180deg, hsl(45 33% 91%) 0%, hsl(43 30% 94%) 100%)'
          }}
        >
          <div className="container-coad">
            <div className="text-center mb-16">
              <span className="text-amber-700/60 text-xs tracking-[0.4em] uppercase font-display block mb-4">Testimonials</span>
              <h2 className="font-display text-4xl md:text-5xl text-stone-800 font-light mb-4">
                Member <span className="italic text-amber-800">Experiences</span>
              </h2>
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="w-16 h-px bg-amber-700/40" />
                <div className="w-2 h-2 border border-amber-700/40 rotate-45" />
                <div className="w-16 h-px bg-amber-700/40" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white border border-amber-700/20 p-10 shadow-lg relative">
                  <div className="absolute -top-6 left-10 text-8xl font-display text-amber-700/20">"</div>
                  <p className="font-display text-lg text-stone-600 leading-relaxed mb-8 relative z-10 italic">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-amber-700/20 pt-6">
                    <div className="font-display text-lg text-stone-800">{testimonial.author}</div>
                    <div className="text-amber-700 text-sm">{testimonial.credentials}</div>
                    <div className="text-stone-500 text-sm">{testimonial.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Grand CTA Section */}
        <section 
          className="py-24 md:py-32 relative"
          style={{
            background: 'linear-gradient(180deg, hsl(345 80% 18%) 0%, hsl(220 60% 8%) 100%)'
          }}
        >
          {/* Ornate frame */}
          <div className="absolute inset-8 md:inset-16 border border-amber-500/20" />
          
          <div className="container-coad relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto border-2 border-amber-500/40 rounded-full flex items-center justify-center">
                  <span className="font-display text-2xl text-amber-400">AI</span>
                </div>
              </div>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
                Join the <span className="italic text-amber-400">Order</span>
              </h2>

              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-amber-500/40" />
                <div className="w-2 h-2 border border-amber-500/40 rotate-45" />
                <div className="w-16 h-px bg-amber-500/40" />
              </div>

              <p className="font-display text-xl text-gray-300 max-w-2xl mx-auto mb-12 italic">
                Begin your journey toward professional excellence through rigorous certification 
                and membership in our distinguished network.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  className="bg-amber-600 hover:bg-amber-500 text-white px-12 py-6 text-base font-display tracking-widest uppercase"
                  asChild
                >
                  <Link to="/certifications">View Certifications</Link>
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-amber-500/50 text-amber-400 hover:bg-amber-500/10 px-12 py-6 text-base font-display tracking-widest uppercase"
                  asChild
                >
                  <Link to="/auth">Apply Now</Link>
                </Button>
              </div>

              <p className="mt-12 text-amber-500/40 text-sm tracking-[0.3em] uppercase font-display italic">
                Scientia • Integritas • Excellentia
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section 
          className="py-24 md:py-32"
          style={{
            background: 'linear-gradient(180deg, hsl(43 30% 94%) 0%, hsl(45 33% 96%) 100%)'
          }}
        >
          <div className="container-coad">
            <div className="text-center mb-16">
              <span className="text-amber-700/60 text-xs tracking-[0.4em] uppercase font-display block mb-4">Enquiries</span>
              <h2 className="font-display text-4xl md:text-5xl text-stone-800 font-light mb-4">
                Frequently Asked <span className="italic text-amber-800">Questions</span>
              </h2>
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="w-16 h-px bg-amber-700/40" />
                <div className="w-2 h-2 border border-amber-700/40 rotate-45" />
                <div className="w-16 h-px bg-amber-700/40" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Professional FAQs */}
              <div>
                <h3 className="font-display text-xl text-stone-800 mb-6 pb-4 border-b-2 border-amber-700/30">
                  For Professionals
                </h3>
                <Accordion type="single" collapsible className="space-y-3">
                  {professionalFaqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`prof-${index}`} 
                      className="border border-stone-200 bg-white px-6"
                    >
                      <AccordionTrigger className="text-left font-display text-stone-800 hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-stone-600 pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Client FAQs */}
              <div>
                <h3 className="font-display text-xl text-stone-800 mb-6 pb-4 border-b-2 border-amber-700/30">
                  For Organisations
                </h3>
                <Accordion type="single" collapsible className="space-y-3">
                  {clientFaqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`client-${index}`} 
                      className="border border-stone-200 bg-white px-6"
                    >
                      <AccordionTrigger className="text-left font-display text-stone-800 hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-stone-600 pb-5">
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
