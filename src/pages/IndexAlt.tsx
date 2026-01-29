import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Globe, BookOpen, CheckCircle2 } from 'lucide-react';

const IndexAlt = () => {
  const stats = [
    { number: 'XXIV', label: 'Competency Modules' },
    { number: 'VI', label: 'Certification Levels' },
    { number: 'CCCLX+', label: 'Study Hours' },
    { number: 'C%', label: 'Online Learning' },
  ];

  return (
    <>
      <Helmet>
        <title>COAD - AI Competency & Oversight Certification | EU AI Act Compliant</title>
        <meta 
          name="description" 
          content="Earn recognized AI certifications with COAD. Blockchain-verified, EU AI Act compliant, ESG 2015 aligned certifications for professionals and organizations." 
        />
        <link rel="canonical" href="https://coad.ai" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        
        <main id="main-content">
          {/* Hero Section - Kipmi style with academic accents */}
          <section 
            className="relative min-h-[90vh] flex items-center overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, hsl(43 30% 96%) 0%, hsl(45 33% 93%) 100%)'
            }}
          >
            {/* Subtle ornate corner accents */}
            <div className="absolute top-8 left-8 w-16 h-16 opacity-30">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-amber-600 to-transparent" />
              <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-amber-600 to-transparent" />
            </div>
            <div className="absolute top-8 right-8 w-16 h-16 opacity-30">
              <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-amber-600 to-transparent" />
              <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-amber-600 to-transparent" />
            </div>
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(220 60% 20%) 1px, transparent 0)',
              backgroundSize: '48px 48px'
            }} />

            <div className="container-coad relative z-10 pt-32 pb-20">
              {/* Small label with decorative lines */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-amber-600/40" />
                <p className="text-sm font-medium tracking-[0.25em] uppercase text-amber-700/80">
                  Digital Trust Certification
                </p>
                <div className="w-12 h-px bg-amber-600/40" />
              </div>
              
              {/* Main headline - large and airy with serif styling */}
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-stone-800 leading-[1.1] mb-8 max-w-4xl">
                Your AI credentials
                <br />
                <span className="italic text-amber-700">
                  at your fingertips
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl text-stone-500 max-w-2xl mb-10 font-light leading-relaxed">
                Master AI governance with EU AI Act compliant certifications. 
                Blockchain-verified credentials that open doors worldwide.
              </p>
              
              {/* CTA Button - Mint/Teal like Kipmi */}
              <Button 
                size="lg" 
                className="bg-teal-400 hover:bg-teal-500 text-stone-900 font-medium px-8 py-6 text-lg rounded-full shadow-lg shadow-teal-200/50 transition-all hover:shadow-xl hover:shadow-teal-300/50"
                asChild
              >
                <a href="https://app.coad.ai/signup">
                  Discover our certifications
                </a>
              </Button>

              {/* Decorative divider */}
              <div className="flex items-center gap-4 mt-16">
                <div className="w-16 h-px bg-amber-600/30" />
                <div className="w-2 h-2 border border-amber-600/40 rotate-45" />
                <div className="w-16 h-px bg-amber-600/30" />
              </div>
            </div>
          </section>

          {/* Solutions Section - Cream parchment style */}
          <section className="py-24 bg-white">
            <div className="container-coad">
              {/* Section header with academic styling */}
              <div className="text-center mb-20">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-px bg-amber-600/40" />
                  <p className="text-sm font-medium tracking-[0.25em] uppercase text-amber-700/70">
                    Our Solutions
                  </p>
                  <div className="w-12 h-px bg-amber-600/40" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-stone-800 leading-tight">
                  Explore our ecosystem of
                  <br />
                  <span className="italic text-amber-700">AI certification solutions</span>
                </h2>
              </div>

              {/* Solution Cards */}
              <div className="space-y-20">
                {/* ADC Track */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-2xl text-amber-600/60">I.</span>
                      <h3 className="font-display text-2xl md:text-3xl font-light text-stone-800">
                        <span className="text-amber-700">ADC</span> Certification Track
                      </h3>
                    </div>
                    <p className="text-lg text-stone-500 leading-relaxed">
                      The Agentic AI Developer Certification prepares you to build, deploy, and manage AI agent systems. 
                      From foundational skills to advanced multi-agent orchestration, progress through Professional, 
                      Advanced, and Master levels to achieve Charterholder status.
                    </p>
                    <ul className="space-y-3">
                      {['Task decomposition & planning', 'Multi-agent coordination', 'Performance optimization', 'Secure AI operations'].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-stone-600">
                          <CheckCircle2 className="w-5 h-5 text-teal-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="link" 
                      className="text-amber-700 hover:text-amber-800 p-0 text-base font-medium group"
                      asChild
                    >
                      <a href="/certifications/adc-professional">
                        Learn more 
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                  <div className="relative">
                    <div 
                      className="rounded-3xl p-8 aspect-[4/3] flex items-center justify-center border border-amber-600/20"
                      style={{ background: 'linear-gradient(135deg, hsl(43 30% 96%) 0%, hsl(45 33% 91%) 100%)' }}
                    >
                      <div className="w-48 h-48 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-amber-600/10">
                        <BookOpen className="w-20 h-20 text-amber-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ACOS Track */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative order-2 lg:order-1">
                    <div 
                      className="rounded-3xl p-8 aspect-[4/3] flex items-center justify-center border border-teal-500/20"
                      style={{ background: 'linear-gradient(135deg, hsl(174 40% 96%) 0%, hsl(174 35% 91%) 100%)' }}
                    >
                      <div className="w-48 h-48 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-teal-500/10">
                        <Shield className="w-20 h-20 text-teal-600" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 order-1 lg:order-2">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-2xl text-amber-600/60">II.</span>
                      <h3 className="font-display text-2xl md:text-3xl font-light text-stone-800">
                        <span className="text-teal-600">ACOS</span> Certification Track
                      </h3>
                    </div>
                    <p className="text-lg text-stone-500 leading-relaxed">
                      The AI Compliance & Oversight Specialist track focuses on governance, ethics, and regulatory compliance. 
                      Perfect for professionals ensuring responsible AI deployment across industries while meeting 
                      EU AI Act requirements.
                    </p>
                    <ul className="space-y-3">
                      {['Ethical data governance', 'Privacy & legal auditing', 'Crisis prevention', 'Regulatory compliance'].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-stone-600">
                          <CheckCircle2 className="w-5 h-5 text-teal-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="link" 
                      className="text-teal-600 hover:text-teal-700 p-0 text-base font-medium group"
                      asChild
                    >
                      <a href="/certifications/acos-professional">
                        Learn more 
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Badges Section - Parchment style */}
          <section 
            className="py-24 relative"
            style={{ background: 'linear-gradient(180deg, hsl(43 30% 96%) 0%, hsl(45 33% 93%) 100%)' }}
          >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
            
            <div className="container-coad">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Shield, title: 'EU AI Act Compliant', desc: 'Aligned with the latest European AI regulations', accent: 'amber' },
                  { icon: Award, title: 'Blockchain Verified', desc: 'Tamper-proof credentials stored on-chain', accent: 'teal' },
                  { icon: Globe, title: 'Globally Recognised', desc: 'Accepted by leading organisations worldwide', accent: 'amber' },
                ].map((badge) => (
                  <div 
                    key={badge.title}
                    className="text-center p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border border-amber-600/10"
                  >
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center border-2 ${
                      badge.accent === 'amber' ? 'border-amber-600/30 bg-amber-50' : 'border-teal-500/30 bg-teal-50'
                    }`}>
                      <badge.icon className={`w-8 h-8 ${
                        badge.accent === 'amber' ? 'text-amber-600' : 'text-teal-600'
                      }`} />
                    </div>
                    <h3 className="font-display text-xl font-light text-stone-800 mb-2">{badge.title}</h3>
                    <p className="text-stone-500">{badge.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section - Roman numerals */}
          <section className="py-24 bg-white">
            <div className="container-coad">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-px bg-amber-600/30" />
                  <div className="w-2 h-2 border border-amber-600/40 rotate-45" />
                  <div className="w-16 h-px bg-amber-600/30" />
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-4xl md:text-5xl font-light text-amber-700 mb-2 tracking-wide">{stat.number}</p>
                    <p className="text-stone-500 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section - Dark academic style */}
          <section 
            className="py-24 relative overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, hsl(220 60% 8%) 0%, hsl(220 50% 12%) 100%)'
            }}
          >
            {/* Ornate border */}
            <div className="absolute inset-8 border border-amber-500/20" />
            
            {/* Corner accents */}
            <div className="absolute top-8 left-8 w-12 h-12">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-amber-500/60 to-transparent" />
              <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-amber-500/60 to-transparent" />
            </div>
            <div className="absolute top-8 right-8 w-12 h-12">
              <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-amber-500/60 to-transparent" />
              <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-amber-500/60 to-transparent" />
            </div>
            <div className="absolute bottom-8 left-8 w-12 h-12">
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-amber-500/60 to-transparent" />
              <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-amber-500/60 to-transparent" />
            </div>
            <div className="absolute bottom-8 right-8 w-12 h-12">
              <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-amber-500/60 to-transparent" />
              <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-amber-500/60 to-transparent" />
            </div>
            
            <div className="container-coad relative z-10 text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-amber-500/40" />
                <div className="w-2 h-2 border border-amber-500/40 rotate-45" />
                <div className="w-16 h-px bg-amber-500/40" />
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
                Ready to certify your
                <br />
                <span className="italic text-amber-400">AI competency?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
                Join distinguished professionals advancing their careers with industry-recognised AI certifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-teal-400 hover:bg-teal-300 text-stone-900 font-medium px-8 py-6 text-lg rounded-full"
                  asChild
                >
                  <a href="https://app.coad.ai/signup">
                    Start Free Trial
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-amber-500/40 text-amber-400 hover:bg-amber-500/10 font-medium px-8 py-6 text-lg rounded-full"
                  asChild
                >
                  <a href="#pricing">
                    View Pricing
                  </a>
                </Button>
              </div>

              {/* Latin motto */}
              <p className="mt-12 text-amber-500/40 text-sm tracking-[0.3em] uppercase font-display italic">
                Scientia . Integritas . Excellentia
              </p>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default IndexAlt;
