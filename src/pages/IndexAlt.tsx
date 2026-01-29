import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Globe, Sparkles, Users, BookOpen, CheckCircle2 } from 'lucide-react';

const IndexAlt = () => {
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
          {/* Hero Section - Kipmi inspired */}
          <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-violet-50/50 to-white">
            {/* Floating decorative elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-violet-200/30 to-teal-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-40 left-10 w-96 h-96 bg-gradient-to-tr from-teal-100/40 to-violet-100/40 rounded-full blur-3xl" />
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)',
              backgroundSize: '48px 48px'
            }} />

            <div className="container-coad relative z-10 pt-32 pb-20">
              {/* Small label */}
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-violet-500 mb-6">
                Digital Trust Certification
              </p>
              
              {/* Main headline - large and airy */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-[1.1] mb-8 max-w-4xl">
                Your AI credentials<br />
                <span className="font-medium bg-gradient-to-r from-violet-600 to-teal-500 bg-clip-text text-transparent">
                  at your fingertips
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl text-gray-500 max-w-2xl mb-10 font-light leading-relaxed">
                Master AI governance with EU AI Act compliant certifications. 
                Blockchain-verified credentials that open doors worldwide.
              </p>
              
              {/* CTA Button - Mint/Teal like Kipmi */}
              <Button 
                size="lg" 
                className="bg-teal-400 hover:bg-teal-500 text-gray-900 font-medium px-8 py-6 text-lg rounded-full shadow-lg shadow-teal-200/50 transition-all hover:shadow-xl hover:shadow-teal-300/50"
                asChild
              >
                <a href="https://app.coad.ai/signup">
                  Discover our certifications
                </a>
              </Button>
            </div>
          </section>

          {/* Solutions Section */}
          <section className="py-24 bg-white">
            <div className="container-coad">
              {/* Section header */}
              <div className="text-center mb-20">
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-violet-500 mb-4">
                  Our Solutions
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                  Explore our ecosystem of<br />
                  <span className="font-medium">AI certification solutions</span>
                </h2>
              </div>

              {/* Solution Cards */}
              <div className="space-y-20">
                {/* ADC Track */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-medium text-gray-900">
                      <span className="text-violet-600">ADC</span> Certification Track
                    </h3>
                    <p className="text-lg text-gray-500 leading-relaxed">
                      The Agentic AI Developer Certification prepares you to build, deploy, and manage AI agent systems. 
                      From foundational skills to advanced multi-agent orchestration, progress through Professional, 
                      Advanced, and Master levels to achieve Charterholder status.
                    </p>
                    <ul className="space-y-3">
                      {['Task decomposition & planning', 'Multi-agent coordination', 'Performance optimization', 'Secure AI operations'].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-gray-600">
                          <CheckCircle2 className="w-5 h-5 text-teal-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="link" 
                      className="text-violet-600 hover:text-violet-700 p-0 text-base font-medium group"
                      asChild
                    >
                      <a href="/certifications/adc-professional">
                        Learn more 
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-violet-100 to-violet-50 rounded-3xl p-8 aspect-[4/3] flex items-center justify-center">
                      <div className="w-48 h-48 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                        <BookOpen className="w-20 h-20 text-violet-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ACOS Track */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative order-2 lg:order-1">
                    <div className="bg-gradient-to-br from-teal-100 to-teal-50 rounded-3xl p-8 aspect-[4/3] flex items-center justify-center">
                      <div className="w-48 h-48 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                        <Shield className="w-20 h-20 text-teal-500" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 order-1 lg:order-2">
                    <h3 className="text-2xl md:text-3xl font-medium text-gray-900">
                      <span className="text-teal-600">ACOS</span> Certification Track
                    </h3>
                    <p className="text-lg text-gray-500 leading-relaxed">
                      The AI Compliance & Oversight Specialist track focuses on governance, ethics, and regulatory compliance. 
                      Perfect for professionals ensuring responsible AI deployment across industries while meeting 
                      EU AI Act requirements.
                    </p>
                    <ul className="space-y-3">
                      {['Ethical data governance', 'Privacy & legal auditing', 'Crisis prevention', 'Regulatory compliance'].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-gray-600">
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

          {/* Trust Badges Section */}
          <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container-coad">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Shield, title: 'EU AI Act Compliant', desc: 'Aligned with the latest European AI regulations', color: 'violet' },
                  { icon: Award, title: 'Blockchain Verified', desc: 'Tamper-proof credentials stored on-chain', color: 'teal' },
                  { icon: Globe, title: 'Globally Recognized', desc: 'Accepted by leading organizations worldwide', color: 'violet' },
                ].map((badge) => (
                  <div 
                    key={badge.title}
                    className="text-center p-8 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                      badge.color === 'violet' ? 'bg-violet-100' : 'bg-teal-100'
                    }`}>
                      <badge.icon className={`w-8 h-8 ${
                        badge.color === 'violet' ? 'text-violet-600' : 'text-teal-600'
                      }`} />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{badge.title}</h3>
                    <p className="text-gray-500">{badge.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-24 bg-white">
            <div className="container-coad">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { value: '24', label: 'Competency Modules' },
                  { value: '6', label: 'Certification Levels' },
                  { value: '360+', label: 'Study Hours' },
                  { value: '100%', label: 'Online Learning' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-5xl font-light text-violet-600 mb-2">{stat.value}</p>
                    <p className="text-gray-500 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-gradient-to-br from-violet-600 to-violet-800 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl" />
            
            <div className="container-coad relative z-10 text-center">
              <Sparkles className="w-12 h-12 text-teal-300 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
                Ready to certify your<br />
                <span className="font-medium">AI competency?</span>
              </h2>
              <p className="text-xl text-violet-200 mb-10 max-w-2xl mx-auto">
                Join thousands of professionals advancing their careers with industry-recognized AI certifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-teal-400 hover:bg-teal-300 text-gray-900 font-medium px-8 py-6 text-lg rounded-full"
                  asChild
                >
                  <a href="https://app.coad.ai/signup">
                    Start Free Trial
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-medium px-8 py-6 text-lg rounded-full"
                  asChild
                >
                  <a href="#pricing">
                    View Pricing
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default IndexAlt;
