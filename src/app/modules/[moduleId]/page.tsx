import Link from 'next/link';
import { Button } from '@/components/ui/button';

type ModuleDetailProps = {
  params: { moduleId: string };
};

const moduleDetails: Record<string, {
  title: string;
  category: string;
  price: string;
  duration: string;
  ects: string;
  description: string;
  outcomes: string[];
  curriculum: string[];
}> = {
  'task-decomposition': {
    title: 'Task Decomposition',
    category: 'AAC Module',
    price: '€1,800',
    duration: '40 hours',
    ects: '1.33 ECTS',
    description: 'Master task decomposition techniques for building effective agentic AI systems.',
    outcomes: [
      'Break down complex problems into manageable tasks',
      'Design hierarchical task structures',
      'Implement task decomposition algorithms',
      'Apply decomposition patterns to real-world scenarios',
    ],
    curriculum: [
      'Introduction to task decomposition',
      'Hierarchical task networks',
      'Decomposition algorithms and patterns',
      'Practical project: Build a task decomposition system',
    ],
  },
  'privacy-auditor': {
    title: 'Privacy Auditor',
    category: 'AIO Module',
    price: '€1,800',
    duration: '80 hours',
    ects: '2.67 ECTS',
    description: 'EU AI Act compliance and privacy auditing skills for AI systems.',
    outcomes: [
      'Conduct privacy impact assessments',
      'Apply GDPR principles to AI systems',
      'Perform compliance audits',
      'Create privacy-by-design frameworks',
    ],
    curriculum: [
      'GDPR and AI Act privacy requirements',
      'Privacy impact assessment methodologies',
      'Data minimization and purpose limitation',
      'Audit project: Privacy assessment of AI system',
    ],
  },
};

export default function ModuleDetailPage({ params }: ModuleDetailProps) {
  const module = moduleDetails[params.moduleId] || moduleDetails['task-decomposition'];

  return (
    <div className="min-h-screen bg-background">
      <div className="container-coad py-16">
        <div className="mb-8">
          <Link href="/modules" className="text-sm text-primary hover:underline">
            ← Back to modules
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
                {module.category}
              </span>
              <h1 className="university-heading-1 text-foreground mb-4">{module.title}</h1>
              <p className="body-large text-muted-foreground">{module.description}</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="university-heading-3 text-foreground mb-4">Learning Outcomes</h2>
              <ul className="space-y-2">
                {module.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-success" />
                    </div>
                    <span className="text-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="university-heading-3 text-foreground mb-4">Curriculum</h2>
              <ul className="space-y-2">
                {module.curriculum.map((item, index) => (
                  <li key={index} className="text-foreground">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl border-2 border-primary bg-card p-6 shadow-xl">
              <div className="mb-6">
                <p className="text-3xl font-bold text-primary mb-2">{module.price}</p>
                <p className="text-sm text-muted-foreground">Duration: {module.duration}</p>
                <p className="text-sm text-muted-foreground">ECTS: {module.ects}</p>
              </div>
              <Link href={`/checkout?course=${params.moduleId}`}>
                <Button className="w-full mb-3" size="lg">
                  Enroll Now
                </Button>
              </Link>
              <Link href="/corporate-services/contact">
                <Button variant="outline" className="w-full">
                  Corporate Training
                </Button>
              </Link>
              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <p>✓ Standalone certificate</p>
                <p>✓ Can feed into full tracks</p>
                <p>✓ Blockchain-verified</p>
                <p>✓ EU AI Act compliant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
