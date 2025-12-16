import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Award, Clock, Target, Zap, Crown, Briefcase, Code, Lightbulb, Users, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const AICTrackSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'qap',
      label: 'QAP',
      subtitle: 'Tier 1',
      fullName: 'Qualified AI Practitioner',
      duration: '3 months',
      hours: '180 hours',
      price: '€1,800',
      meaning: "You're certified to structure AI-assisted processes without supervision – entry-level workflow optimization and basic AI application.",
      recognition: 'Digital badge with verifiable skills; employer-trusted for entry jobs',
      Icon: Target,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      id: 'aap',
      label: 'AAP',
      subtitle: 'Tier 2',
      fullName: 'Advanced AI Practitioner',
      duration: '4 months',
      hours: '270 hours',
      price: '€2,200',
      meaning: "You're certified to design multi-tool workflows and coordinate AI across functions with Act-compliant safeguards.",
      recognition: 'Enhanced badge with stats; valued for promotions and complex integration roles',
      Icon: Zap,
      color: 'text-teal',
      bgColor: 'bg-teal/10',
    },
    {
      id: 'map',
      label: 'MAP',
      subtitle: 'Tier 3',
      fullName: 'Master AI Practitioner',
      duration: '6 months',
      hours: '360 hours',
      price: '€2,200',
      meaning: "You're certified to oversee organization-wide AI, integrating governance and efficiency – full Act readiness for enterprise-level AI design.",
      recognition: 'Premium badge with portfolio; industry-endorsed for career advancement',
      Icon: Crown,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
    },
  ];

  const usps = [
    {
      icon: Code,
      title: 'No Coding Background Required',
      description: "Designed for non-programmers (engineers, analysts) to enrich existing knowledge with AI – open to programmers for latest tools.",
    },
    {
      icon: Lightbulb,
      title: 'Hands-On Project Learning',
      description: "Build real-world AI solutions through practical labs and capstone projects that translate directly to workplace applications.",
    },
    {
      icon: Briefcase,
      title: 'Entrepreneurial Focus',
      description: "Apply AI skills to your own business ideas or startup ventures, with mentorship from Europe's top innovation networks.",
    },
    {
      icon: Users,
      title: 'Flexible Self-Paced Tiers',
      description: "Progress from foundational workflows to enterprise mastery at your own pace – designed for busy professionals.",
    },
    {
      icon: Award,
      title: 'Industry-Recognized Credentials',
      description: "Earn certificates valued by employers across Europe, with post-nominal designations that validate your expertise.",
    },
  ];

  return (
    <section className="section-padding bg-background" id="aic-track">
      <div className="container-coad">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            <Award className="w-4 h-4" />
            Professional Institute Program
          </div>
          
          <h2 className="heading-2 text-foreground mb-6">
            Revamp Your Career with AIC:<br />
            <span className="gradient-text">From AI Novice to Competence Master</span>
          </h2>
          
          <p className="body-large text-muted-foreground">
            Designed for scientifically minded experts and career changers, the AIC Track equips you with practical AI development skills to enrich your expertise and launch into high-demand roles. No coding background required—open to programmers for cutting-edge updates.
          </p>
        </div>

        {/* Who It's For */}
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="heading-4 text-foreground mb-6 text-center">Who is AIC for?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Mid-Career Professionals</h4>
              <p className="text-sm text-muted-foreground">Looking to revamp your life by transitioning into AI or enriching existing expertise</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-teal" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Engineers & Scientists</h4>
              <p className="text-sm text-muted-foreground">Scientifically minded experts who want to integrate AI into their domain</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-amber-500" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Recent Graduates</h4>
              <p className="text-sm text-muted-foreground">Eager to build a future-proof skill set and stand out in the job market</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Programmers</h4>
              <p className="text-sm text-muted-foreground">Stay ahead with the latest tools, techniques, and industry practices</p>
            </div>
          </div>
        </div>

        {/* USPs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {usps.map((usp, index) => (
            <div 
              key={usp.title}
              className="p-6 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className={cn(
                'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
                index % 2 === 0 ? 'bg-primary/10' : 'bg-teal/10'
              )}>
                <usp.icon className={cn(
                  'w-6 h-6',
                  index % 2 === 0 ? 'text-primary' : 'text-teal'
                )} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{usp.title}</h4>
              <p className="text-sm text-muted-foreground">{usp.description}</p>
            </div>
          ))}
        </div>

        {/* Tiers Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h3 className="heading-3 text-foreground">
              Three Tiers to Mastery
            </h3>

            <p className="text-muted-foreground">
              Each tier culminates in a certificate of competency tested via rubrics (80% pass required) and real-world simulations.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-success" />
                </div>
                <span className="text-foreground">Verifiable digital badges, shareable on LinkedIn</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-success" />
                </div>
                <span className="text-foreground">Post-nominal designations: QAP, AAP, MAP</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-success" />
                </div>
                <span className="text-foreground">Hands-on learning with real-world projects</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-success" />
                </div>
                <span className="text-foreground">ECTS-compatible for academic credit transfer</span>
              </li>
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://app.coad.ai/signup" className="group">
                  Enroll in AIC Tier 1 – Start Your Revamp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Tabs */}
            <div className="pt-8">
              {/* Tab Headers */}
              <div className="flex border-b border-border">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    className={cn(
                      'flex-1 px-4 py-4 text-center transition-all duration-300 relative',
                      activeTab === index
                        ? 'text-primary font-semibold'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    <span className="text-lg">{tab.label}</span>
                    <span className="block text-xs mt-0.5">{tab.subtitle}</span>
                    {activeTab === index && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="pt-6">
                {tabs.map((tab, index) => (
                  <div
                    key={tab.id}
                    className={cn(
                      'transition-all duration-500 transform',
                      activeTab === index 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 hidden translate-y-2'
                    )}
                  >
                    <div className="space-y-4">
                      <h4 className="heading-4 text-foreground">{tab.fullName}</h4>
                      
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {tab.duration} • {tab.hours}
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div>
                          <p className="text-sm font-medium text-foreground">What it means:</p>
                          <p className="text-muted-foreground">{tab.meaning}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Recognition:</p>
                          <p className="text-muted-foreground">{tab.recognition}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:sticky lg:top-32">
            <div className="relative">
              {/* Tier Cards Stack */}
              <div className="space-y-4">
                {tabs.map((tab, index) => {
                  const IconComponent = tab.Icon;
                  return (
                    <div
                      key={tab.id}
                      onClick={() => setActiveTab(index)}
                      className={cn(
                        'p-6 rounded-2xl border-2 cursor-pointer transition-all duration-500 transform',
                        activeTab === index
                          ? 'bg-card border-primary shadow-xl scale-[1.02] -translate-x-2'
                          : 'bg-muted/30 border-border/50 hover:border-primary/40 hover:bg-card/50'
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          'w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500',
                          activeTab === index ? tab.bgColor : 'bg-muted'
                        )}>
                          <IconComponent className={cn(
                            'w-7 h-7 transition-all duration-500',
                            activeTab === index ? tab.color : 'text-muted-foreground'
                          )} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className={cn(
                              'font-bold text-lg transition-colors duration-300',
                              activeTab === index ? 'text-foreground' : 'text-foreground/70'
                            )}>
                              {tab.label}
                            </h4>
                            <span className={cn(
                              'px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300',
                              activeTab === index 
                                ? 'bg-primary/10 text-primary' 
                                : 'bg-muted text-muted-foreground'
                            )}>
                              {tab.subtitle}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-0.5">{tab.fullName}</p>
                        </div>
                        <div className="text-right">
                          <p className={cn(
                            'text-lg font-bold',
                            activeTab === index ? 'text-primary' : 'text-foreground/60'
                          )}>
                            {tab.price}
                          </p>
                          <p className="text-xs text-muted-foreground">{tab.hours}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-primary/20 to-teal/20 rounded-full blur-3xl -z-10 animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-teal/20 to-primary/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-br from-primary/5 to-teal/5 rounded-3xl p-8 md:p-12">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <Quote className="w-12 h-12 text-primary/30 shrink-0" />
            <div>
              <p className="text-lg md:text-xl text-foreground italic mb-4">
                "As a biologist, AIC allowed me to blend my expertise with AI for groundbreaking research—it's completely revamped my career trajectory."
              </p>
              <p className="text-muted-foreground font-medium">
                — Dr. Elena R., AI Researcher
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICTrackSection;