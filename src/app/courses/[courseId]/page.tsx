import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

type CourseDetailProps = {
  params: { courseId: string };
};

export async function generateMetadata({ params }: CourseDetailProps): Promise<Metadata> {
  const course = courseDetails[params.courseId] || courseDetails['aac-foundations'];
  return {
    title: `${course.title} | COAD - AI Competency & Oversight Certification`,
    description: course.description,
  };
}

const courseDetails: Record<string, {
  title: string;
  price: string;
  duration: string;
  description: string;
  outcomes: string[];
  curriculum: string[];
  format: string;
}> = {
  'aac-foundations': {
    title: 'AAC Foundations',
    price: '€3,000',
    duration: '16 weeks',
    description: 'Agentic AI Competency track with hands-on projects and certification.',
    outcomes: [
      'Build deployable AI agents with real-world applications',
      'Master prompt engineering and LLM integration',
      'Design multi-agent systems with coordination',
      'Earn blockchain-verified AAC certification',
    ],
    curriculum: [
      'Phase 1: Foundations & Prompt Engineering (5 weeks)',
      'Phase 2: Agentic AI Design & Ethics (4-5 weeks)',
      'Phase 3: Multi-Agent & Advanced Agentic AI (5-6 weeks)',
    ],
    format: 'Online with live Zoom sessions, Canvas-like LMS access, project-based assessments',
  },
  'aio-oversight': {
    title: 'AIO Oversight Core',
    price: 'From €1,600 per domain',
    duration: '6 months',
    description: 'AI governance, safety, and ethical oversight certification.',
    outcomes: [
      'Implement risk governance for AI systems',
      'Apply ethical controls and Act alignment',
      'Lead comprehensive digital transformation',
      'Earn Certified AI Oversight Professional designation',
    ],
    curriculum: [
      'Domain 1: Safety/Risk (€1,800, 80 hours)',
      'Domain 2: Ethical Oversight (€1,800, 80 hours)',
      'Domain 3: Legal Compliance (€1,600, 80 hours)',
      'Domain 4: Corporate Digital & AI Transformation (€2,600, 120 hours)',
    ],
    format: 'Online with live Zoom sessions, Canvas-like LMS access, domain-specific audits',
  },
  'acd-qap': {
    title: 'ACD QAP Tier',
    price: '€1,800',
    duration: '180 hours',
    description: 'Qualified AI Practitioner certification with practical skills.',
    outcomes: [
      'Build foundational AI-powered applications',
      'Understand basic AI development principles',
      'Master Python basics and AI fundamentals',
      'Earn QAP digital badge',
    ],
    curriculum: [
      'Python basics and AI fundamentals',
      'Initial project work',
      'Core competencies in AI development governance',
      'EU AI Act compliance fundamentals',
    ],
    format: 'Online with live Zoom sessions, Canvas-like LMS access, project-based assessments',
  },
  'task-decomposition': {
    title: 'Task Decomposition Module',
    price: '€1,800',
    duration: '40 hours',
    description: 'Standalone competency module for task decomposition techniques.',
    outcomes: [
      'Break complex goals into structured, executable tasks',
      'Design task hierarchies and workflows',
      'Create dependency graphs for AI systems',
      'Earn module certificate of competency',
    ],
    curriculum: [
      'Week 1: Foundations of Agentic Task Decomposition',
      'Week 2: Decomposition Patterns for LLM-Driven Agents',
      'Week 3: From Decomposition to Executable Plans',
      'Week 4: Mini Project & Evaluation',
    ],
    format: '4-week online module with async content, readings, labs, and project',
  },
  'privacy-auditor': {
    title: 'Privacy Auditor Module',
    price: '€1,800',
    duration: '80 hours',
    description: 'EU AI Act compliance and privacy auditing skills.',
    outcomes: [
      'Master EU AI Act compliance requirements',
      'Conduct privacy audits for AI systems',
      'Implement data governance best practices',
      'Earn Privacy Auditor certificate of competency',
    ],
    curriculum: [
      'EU AI Act fundamentals and requirements',
      'Privacy auditing methodologies',
      'Data governance and compliance',
      'Capstone audit project',
    ],
    format: 'Online with live Zoom sessions, Canvas-like LMS access, rubric-based assessment',
  },
};

export default function CourseDetailPage({ params }: CourseDetailProps) {
  const course = courseDetails[params.courseId] || courseDetails['aac-foundations'];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container-coad py-16">
          <div className="mb-8">
            <Link href="/courses" className="text-sm text-primary hover:underline">
              ← Back to courses
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-8">
              <div>
                <h1 className="university-heading-1 text-foreground mb-4">{course.title}</h1>
                <p className="body-large text-muted-foreground">{course.description}</p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="university-heading-3 text-foreground mb-4">Learning Outcomes</h2>
                <ul className="space-y-2">
                  {course.outcomes.map((outcome, index) => (
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
                  {course.curriculum.map((item, index) => (
                    <li key={index} className="text-foreground">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="university-heading-3 text-foreground mb-4">Format & Delivery</h2>
                <p className="text-foreground">{course.format}</p>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border-2 border-primary bg-card p-6 shadow-xl">
                <div className="mb-6">
                  <p className="text-3xl font-bold text-primary mb-2">{course.price}</p>
                  <p className="text-sm text-muted-foreground">Duration: {course.duration}</p>
                </div>
                <Link href={`/checkout?course=${params.courseId}`}>
                  <Button className="w-full mb-3" size="lg">
                    Enroll Now
                  </Button>
                </Link>
                <Link href="/corporate-services/executive">
                  <Button variant="outline" className="w-full">
                    Corporate Training
                  </Button>
                </Link>
                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <p>✓ Blockchain-verified certificate</p>
                  <p>✓ EU AI Act compliant</p>
                  <p>✓ ECTS credits</p>
                  <p>✓ Lifetime LMS access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
