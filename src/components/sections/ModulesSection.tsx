import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  CircuitLayersIcon, 
  NetworkNodesIcon, 
  EnergyNodeIcon, 
  DataFlowIcon, 
  CircuitLockIcon, 
  NeuralBrainIcon,
  ShieldNodeIcon,
  SustainabilityIcon,
  RiskAlertIcon,
  DataNodeIcon,
  CodeNodeIcon,
  LightbulbNodeIcon
} from '@/components/ui/custom-icons';

const ModulesSection = () => {
  const [filter, setFilter] = useState<'all' | 'aic' | 'aio'>('all');

  const aicModules = [
    { name: 'Task Decomposition', slug: 'task-decomposition', Icon: CircuitLayersIcon, hours: 60, price: '€800', description: 'Break complex tasks into AI-manageable components' },
    { name: 'Multi-Agent Coordination', slug: 'multi-agent-coordination', Icon: NetworkNodesIcon, hours: 90, price: '€1,200', description: 'Coordinate multiple AI agents effectively' },
    { name: 'Performance Optimization', slug: 'performance-optimization', Icon: EnergyNodeIcon, hours: 120, price: '€1,750', description: 'Optimize AI system performance and efficiency' },
    { name: 'Human-AI Design', slug: 'human-ai-design', Icon: DataFlowIcon, hours: 90, price: '€1,000', description: 'Design effective human-AI collaboration workflows' },
    { name: 'Restricted Methods', slug: 'restricted-methods', Icon: CircuitLockIcon, hours: 120, price: '€1,500', description: 'Navigate restricted AI methods responsibly' },
    { name: 'Latest in AI 2025', slug: 'latest-in-ai', Icon: NeuralBrainIcon, hours: 60, price: '€800', description: 'Stay current with cutting-edge AI developments' },
    { name: 'Secure AI Operations', slug: 'secure-ai-operations', Icon: ShieldNodeIcon, hours: 120, price: '€1,800', description: 'Implement security best practices for AI systems' },
    { name: 'Prompt Engineering', slug: 'prompt-engineering', Icon: LightbulbNodeIcon, hours: 60, price: '€750', description: 'Master the art of effective AI prompting' },
    { name: 'AI Product Management', slug: 'ai-product-management', Icon: DataNodeIcon, hours: 90, price: '€1,100', description: 'Lead AI product development lifecycle' },
    { name: 'Data Pipeline Design', slug: 'data-pipeline-design', Icon: DataFlowIcon, hours: 90, price: '€1,200', description: 'Build robust data pipelines for AI systems' },
    { name: 'Model Evaluation', slug: 'model-evaluation', Icon: CodeNodeIcon, hours: 90, price: '€1,100', description: 'Assess and validate AI model performance' },
    { name: 'AI Deployment', slug: 'ai-deployment', Icon: NetworkNodesIcon, hours: 120, price: '€1,600', description: 'Deploy AI systems to production at scale' },
  ];

  const aioModules = [
    { name: 'Ethical Data Use', slug: 'ethical-data-use', Icon: ShieldNodeIcon, hours: 60, price: '€960', description: 'Ensure ethical data practices in AI systems' },
    { name: 'Privacy Auditor', slug: 'privacy-auditor', Icon: CircuitLockIcon, hours: 90, price: '€1,440', description: 'Conduct comprehensive privacy audits' },
    { name: 'Crisis Prevention', slug: 'crisis-prevention', Icon: RiskAlertIcon, hours: 120, price: '€2,100', description: 'Prevent and mitigate AI-related crises' },
    { name: 'Legal Auditor', slug: 'legal-auditor', Icon: DataNodeIcon, hours: 90, price: '€1,800', description: 'Perform legal compliance assessments' },
    { name: 'Resource Management', slug: 'resource-management', Icon: DataFlowIcon, hours: 60, price: '€1,200', description: 'Optimize AI resource allocation' },
    { name: 'Process Optimization', slug: 'process-optimization', Icon: NetworkNodesIcon, hours: 90, price: '€1,800', description: 'Streamline AI-driven processes' },
    { name: 'Sustainability & AI', slug: 'sustainability-ai', Icon: SustainabilityIcon, hours: 60, price: '€1,440', description: 'Implement sustainable AI practices' },
    { name: 'Financial Evaluations', slug: 'financial-evaluations', Icon: EnergyNodeIcon, hours: 90, price: '€1,440', description: 'Evaluate AI investments and ROI' },
    { name: 'AI for Government', slug: 'ai-for-government', Icon: DataNodeIcon, hours: 60, price: '€1,200', description: 'Deploy AI in public sector contexts' },
    { name: 'AI for Security', slug: 'ai-for-security', Icon: ShieldNodeIcon, hours: 90, price: '€1,800', description: 'Apply AI in security operations' },
    { name: 'Cybersecurity Auditing', slug: 'cybersecurity-auditing', Icon: CircuitLockIcon, hours: 120, price: '€2,100', description: 'Audit AI cybersecurity measures' },
    { name: 'AI-Enhanced AML/KYC', slug: 'aml-kyc', Icon: NeuralBrainIcon, hours: 90, price: '€1,800', description: 'Implement AI in compliance processes' },
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
            Each standalone module is a self-contained 4-week unit with its own certificate of competency. JHU-inspired methodology with masterclasses, hands-on labs, mentored sessions, and mini-capstone projects. All ESG 2015 compliant and EU AI Act-aligned.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-muted rounded-lg">
            {[
              { value: 'all', label: 'All Modules' },
              { value: 'aic', label: 'AIC Modules (12)' },
              { value: 'aio', label: 'AIO Modules (12)' },
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredModules.map((module, index) => (
            <Link
              to={`/modules/${module.track}/${module.slug}`}
              key={`${module.track}-${module.name}`}
              className="group bg-card rounded-xl border border-border p-6 card-hover block"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon & Track Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className={cn(
                  'w-12 h-12 rounded-xl flex items-center justify-center',
                  module.track === 'aic' ? 'bg-primary/10' : 'bg-teal/10'
                )}>
                  <module.Icon 
                    className="w-7 h-7"
                    color={module.track === 'aic' ? 'primary' : 'teal'}
                  />
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
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  {module.hours}h / 4 weeks
                </div>
                <span className={cn(
                  'font-semibold',
                  module.track === 'aic' ? 'text-primary' : 'text-teal'
                )}>
                  {module.price}
                </span>
              </div>

              {/* Hover Action */}
              <div className="mt-4 pt-4 border-t border-border">
                <span className="flex items-center justify-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  View Curriculum
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/certifications" className="group">
              View Full Certification Tracks
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
