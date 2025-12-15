import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Award, Clock, GraduationCap, Target, Zap, Crown } from 'lucide-react';
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
      meaning: "You're certified to structure AI-assisted processes without supervision",
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
      meaning: "You're certified to design multi-tool workflows and coordinate AI across functions",
      recognition: 'Enhanced badge with stats; valued for promotions',
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
      meaning: "You're certified to oversee organization-wide AI, integrating governance and efficiency",
      recognition: 'Premium badge with portfolio; industry-endorsed for career advancement',
      Icon: Crown,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
    },
  ];

  const bullets = [
    'Blockchain-verified badge, shareable on LinkedIn',
    'EU AI Act-compliant for low/moderate-risk AI use',
    'ECTS credits for career mobility',
    'Post-nominal designations: QAP, AAP, MAP',
  ];

  return (
    <section className="section-padding bg-background" id="aic-track">
      <div className="container-coad">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <Award className="w-4 h-4" />
              Professional Institute Program
            </div>

            {/* Heading */}
            <h2 className="heading-2 text-foreground">
              AIC Track: AI Competence<br />
              <span className="gradient-text">Certification</span>
            </h2>

            {/* Description */}
            <p className="body-large text-muted-foreground">
              The AIC Track focuses on building practical AI skills for implementation and development, aligning with Mastery and Efficacy directions. It's a tiered ladder designed as a professional institute program, with each tier culminating in a certificate of competency tested via rubrics (80% pass required) and real-world simulations.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-success" />
                  </div>
                  <span className="text-foreground">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button variant="hero" size="lg" asChild>
              <a href="#pricing" className="group">
                Explore AIC Track
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

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
                          {tab.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <GraduationCap className="w-4 h-4" />
                          ECTS Compatible
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
                        <div className={cn(
                          'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300',
                          activeTab === index
                            ? 'bg-success/10 text-success'
                            : 'bg-muted text-muted-foreground'
                        )}>
                          <GraduationCap className="w-3.5 h-3.5" />
                          ECTS
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
      </div>
    </section>
  );
};

export default AICTrackSection;
