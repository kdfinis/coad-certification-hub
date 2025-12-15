import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, GraduationCap, Layers, Shield, Brain, Workflow, Users, Zap, Leaf, AlertCircle, DollarSign, Building, Lock, FileSearch, Landmark } from 'lucide-react';
import { cn } from '@/lib/utils';

const ModulesSection = () => {
  const [filter, setFilter] = useState<'all' | 'aic' | 'aio'>('all');

  const aicModules = [
    { name: 'Task Decomposition', icon: Layers, hours: 30, ects: 1, description: 'Break complex tasks into AI-manageable components' },
    { name: 'Multi-Agent Systems', icon: Users, hours: 45, ects: 1.5, description: 'Coordinate multiple AI agents effectively' },
    { name: 'Performance Optimization', icon: Zap, hours: 30, ects: 1, description: 'Optimize AI system performance and efficiency' },
    { name: 'Human-AI Design', icon: Workflow, hours: 45, ects: 1.5, description: 'Design effective human-AI collaboration workflows' },
    { name: 'Restricted Methods', icon: Lock, hours: 30, ects: 1, description: 'Navigate restricted AI methods responsibly' },
    { name: 'Latest in AI 2025', icon: Brain, hours: 30, ects: 1, description: 'Stay current with cutting-edge AI developments' },
  ];

  const aioModules = [
    { name: 'Ethical Data Use', icon: Shield, hours: 30, ects: 1, description: 'Ensure ethical data practices in AI systems' },
    { name: 'Privacy Auditor', icon: Lock, hours: 45, ects: 1.5, description: 'Conduct comprehensive privacy audits' },
    { name: 'Legal Auditor', icon: FileSearch, hours: 45, ects: 1.5, description: 'Perform legal compliance assessments' },
    { name: 'Resource Management', icon: DollarSign, hours: 30, ects: 1, description: 'Optimize AI resource allocation' },
    { name: 'Process Optimization', icon: Workflow, hours: 30, ects: 1, description: 'Streamline AI-driven processes' },
    { name: 'Sustainability & AI', icon: Leaf, hours: 30, ects: 1, description: 'Implement sustainable AI practices' },
    { name: 'Crisis Prevention', icon: AlertCircle, hours: 45, ects: 1.5, description: 'Prevent and mitigate AI-related crises' },
    { name: 'Financial Evaluations', icon: DollarSign, hours: 45, ects: 1.5, description: 'Evaluate AI investments and ROI' },
    { name: 'AI for Government', icon: Landmark, hours: 45, ects: 1.5, description: 'Deploy AI in public sector contexts' },
    { name: 'AI for Security', icon: Shield, hours: 45, ects: 1.5, description: 'Apply AI in security operations' },
    { name: 'Cybersecurity Auditing', icon: Lock, hours: 45, ects: 1.5, description: 'Audit AI cybersecurity measures' },
    { name: 'AI-Enhanced AML/KYC', icon: Building, hours: 45, ects: 1.5, description: 'Implement AI in compliance processes' },
  ];

  const allModules = [
    ...aicModules.map(m => ({ ...m, track: 'aic' as const })),
    ...aioModules.map(m => ({ ...m, track: 'aio' as const })),
  ];

  const filteredModules = filter === 'all' 
    ? allModules 
    : allModules.filter(m => m.track === filter);

  return (
    <section className="section-padding bg-background" id="modules">
      <div className="container-coad">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 text-foreground mb-4">
            Standalone Competency<br />
            <span className="gradient-text">Modules</span>
          </h2>
          <p className="body-large text-muted-foreground">
            Each standalone module is a self-contained unit with its own certificate of competency, tested via rubrics. They feed into tracks but can be taken independently. All ESG 2015 compliant and EU AI Act-aligned.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-muted rounded-lg">
            {[
              { value: 'all', label: 'All Modules' },
              { value: 'aic', label: 'AIC Modules' },
              { value: 'aio', label: 'AIO Modules' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as typeof filter)}
                className={cn(
                  'px-6 py-2 rounded-md text-sm font-medium transition-all duration-200',
                  filter === tab.value
                    ? 'bg-card text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module, index) => (
            <div
              key={`${module.track}-${module.name}`}
              className="group bg-card rounded-xl border border-border p-6 card-hover"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon & Track Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className={cn(
                  'w-12 h-12 rounded-xl flex items-center justify-center',
                  module.track === 'aic' ? 'bg-primary/10' : 'bg-teal/10'
                )}>
                  <module.icon className={cn(
                    'w-6 h-6',
                    module.track === 'aic' ? 'text-primary' : 'text-teal'
                  )} />
                </div>
                <span className={cn(
                  'px-2 py-1 rounded-full text-xs font-medium',
                  module.track === 'aic' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-teal/10 text-teal'
                )}>
                  {module.track.toUpperCase()}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {module.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {module.description}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {module.hours} hours
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  {module.ects} ECTS
                </div>
              </div>

              {/* Hover Action */}
              <div className="mt-4 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="w-full group/btn" asChild>
                  <a href="#pricing">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <a href="#pricing" className="group">
              Browse All Modules
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
