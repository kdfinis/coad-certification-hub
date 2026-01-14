import Link from 'next/link';
import { Button } from '@/components/ui/button';

const modules = [
  {
    id: 'task-decomposition',
    title: 'Task Decomposition',
    category: 'AAC',
    price: '€1,800',
    duration: '40 hours',
    description: 'Master task decomposition techniques for agentic AI systems.',
  },
  {
    id: 'privacy-auditor',
    title: 'Privacy Auditor',
    category: 'AIO',
    price: '€1,800',
    duration: '80 hours',
    description: 'EU AI Act compliance and privacy auditing skills.',
  },
  {
    id: 'multi-agent-systems',
    title: 'Multi-Agent Systems',
    category: 'AAC',
    price: '€2,200',
    duration: '60 hours',
    description: 'Design and coordinate multi-agent AI systems.',
  },
  {
    id: 'ethical-data-use',
    title: 'Ethical Data Use',
    category: 'AIO',
    price: '€1,800',
    duration: '80 hours',
    description: 'Ethical frameworks for AI data governance.',
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization',
    category: 'AAC',
    price: '€2,200',
    duration: '50 hours',
    description: 'Optimize AI system performance and efficiency.',
  },
  {
    id: 'legal-auditor',
    title: 'Legal Auditor',
    category: 'AIO',
    price: '€1,600',
    duration: '80 hours',
    description: 'Legal compliance auditing for AI systems.',
  },
];

export default function ModulesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-coad py-16">
        <div className="mb-12">
          <h1 className="university-heading-1 text-foreground mb-4">Competency Modules</h1>
          <p className="body-large text-muted-foreground max-w-2xl">
            Standalone competency modules that can be taken independently or as part of a full track. Each module includes its own certificate of competency.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div key={module.id} className="rounded-2xl border border-border bg-card p-6 card-hover">
              <div className="mb-4">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {module.category} Module
                </span>
              </div>
              <h3 className="university-heading-4 text-foreground mb-2">{module.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="text-foreground font-semibold">{module.price}</span>
                <span className="text-muted-foreground">{module.duration}</span>
              </div>
              <Link href={`/modules/${module.id}`}>
                <Button className="w-full">View Details</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
