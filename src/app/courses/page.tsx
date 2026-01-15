'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

type CatalogItem = {
  id: string;
  title: string;
  type: 'track' | 'module';
  price: string;
  duration: string;
  description: string;
};

const catalogItems: CatalogItem[] = [
  // Tracks
  {
    id: 'acd-qap',
    title: 'ACD Level 1: QAP (Qualified AI Practitioner)',
    type: 'track',
    price: '€1,800',
    duration: 'Approx. 6 ECTS equivalent (180 hours)',
    description: 'Foundation level covering Python basics, AI fundamentals, and initial project work. Establishes core competencies in AI development governance.',
  },
  {
    id: 'acd-aap',
    title: 'ACD Level 2: AAP (Advanced AI Practitioner)',
    type: 'track',
    price: '€2,200',
    duration: 'Approx. 9 ECTS equivalent (270 hours)',
    description: 'Intermediate level focusing on system integration, API development, and advanced projects. Builds scalable AI solutions.',
  },
  {
    id: 'acd-map',
    title: 'ACD Level 3: MAP (Master AI Practitioner)',
    type: 'track',
    price: '€3,000',
    duration: 'Approx. 12 ECTS equivalent (360 hours)',
    description: 'Advanced level with system architecture, enterprise solutions, and portfolio-ready projects. Capstone level demonstrating mastery.',
  },
  {
    id: 'aio-oversight',
    title: 'AIO Oversight Core',
    type: 'track',
    price: 'From €1,600',
    duration: '6 months, Approx. 12 ECTS equivalent (360 hours)',
    description: 'AI governance, safety, and ethical oversight certification. Four domains covering Safety/Risk, Ethical Oversight, Legal Compliance, and Corporate Transformation.',
  },
  {
    id: 'amcd-track',
    title: 'AMCD Track (AI Media and Content Development)',
    type: 'track',
    price: '€2,500',
    duration: 'Approx. 8 ECTS equivalent (240 hours)',
    description: 'Perfect for junior professionals, content creators, multimedia producers, web designers, and social media managers.',
  },
  // Modules
  {
    id: 'task-decomposition',
    title: 'Task Decomposition Module',
    type: 'module',
    price: '€1,800',
    duration: 'Approx. 2 ECTS equivalent (60 hours)',
    description: 'Learn to break complex goals into structured, executable tasks for Agentic AI systems. 4 weeks.',
  },
  {
    id: 'multi-agent-systems',
    title: 'Multi-Agent Systems Module',
    type: 'module',
    price: '€2,200',
    duration: 'Approx. 3 ECTS equivalent (90 hours)',
    description: 'Design and analyze systems where multiple agents coordinate to achieve goals. 4 weeks.',
  },
  {
    id: 'token-efficiency',
    title: 'Token Efficiency in AI Development',
    type: 'module',
    price: '€920',
    duration: 'Approx. 3 ECTS equivalent (90 hours)',
    description: 'Reduce LLM costs with prompt optimization, routing, and caching. Practical techniques for production-ready AI systems.',
  },
  {
    id: 'privacy-auditor',
    title: 'Privacy Auditor Module',
    type: 'module',
    price: '€1,800',
    duration: 'Approx. 2.67 ECTS equivalent (80 hours)',
    description: 'EU AI Act compliance and privacy auditing skills. Master data governance and regulatory requirements.',
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization Module',
    type: 'module',
    price: '€1,800',
    duration: 'Approx. 2 ECTS equivalent (60 hours)',
    description: 'Optimize Agentic AI systems for latency, quality, cost, and reliability. 4 weeks.',
  },
  {
    id: 'human-ai-design',
    title: 'Human-AI Design Module',
    type: 'module',
    price: '€2,200',
    duration: 'Approx. 3 ECTS equivalent (90 hours)',
    description: 'Design human–agent interactions that are usable, trustworthy, and aligned with human goals. 4 weeks.',
  },
];

export default function CoursesPage() {
  const [filter, setFilter] = useState<'all' | 'track' | 'module'>('all');
  const [activeSection, setActiveSection] = useState<'overview' | 'tracks' | 'modules' | 'catalog'>('overview');

  const filteredItems = filter === 'all' ? catalogItems : catalogItems.filter((item) => item.type === filter);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy to-teal text-white py-20 md:py-32">
          <div className="container-coad">
            <h1 className="university-heading-1 text-white mb-6 max-w-4xl">
              Earn Recognized AI Certifications for Competence and Oversight
            </h1>
            <p className="body-large text-white/90 mb-8 max-w-3xl">
              COAD offers professional certifications that prove your AI skills through rigorous testing and ESG 2015-aligned standards. Our certificates of competency are blockchain-verified, Act-compliant, and designed for career advancement in the AI era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#pricing">
                <Button size="lg" className="bg-white text-navy hover:bg-gray-100">
                  Explore Tracks
                </Button>
              </Link>
              <Link href="#catalog">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Browse All Courses
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="sticky top-18 z-40 bg-background border-b border-border">
          <div className="container-coad">
            <div className="flex gap-1 overflow-x-auto">
              <button
                onClick={() => setActiveSection('overview')}
                className={`px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                  activeSection === 'overview'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveSection('tracks')}
                className={`px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                  activeSection === 'tracks'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Certification Tracks
              </button>
              <button
                onClick={() => setActiveSection('modules')}
                className={`px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                  activeSection === 'modules'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Competency Modules
              </button>
              <button
                onClick={() => setActiveSection('catalog')}
                className={`px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                  activeSection === 'catalog'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Course Catalog
              </button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        {activeSection === 'overview' && (
          <>
            {/* Four Controller Pillars */}
            <section className="section-padding bg-background">
              <div className="container-coad">
                <h2 className="university-heading-2 text-foreground mb-6 text-center">The Four Controller Pillars</h2>
                <p className="body-large text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                  All COAD certifications are built on these foundational pillars of AI governance.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h3 className="university-heading-4 text-foreground mb-3">Human Oversight</h3>
                    <p className="text-muted-foreground">
                      Ensuring meaningful human control over AI decision-making processes
                    </p>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h3 className="university-heading-4 text-foreground mb-3">Technical Robustness</h3>
                    <p className="text-muted-foreground">
                      Building secure, reliable, and resilient AI systems
                    </p>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h3 className="university-heading-4 text-foreground mb-3">Data Governance</h3>
                    <p className="text-muted-foreground">
                      Managing data quality, privacy, and regulatory compliance
                    </p>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h3 className="university-heading-4 text-foreground mb-3">Accountability</h3>
                    <p className="text-muted-foreground">
                      Establishing clear responsibility and audit trails
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Overview Content */}
            <section className="section-padding bg-muted/30">
              <div className="container-coad max-w-4xl">
                <div className="prose prose-lg max-w-none">
                  <p className="body-large text-foreground leading-relaxed mb-4">
                    As a leading provider of AI training and certification, COAD operates as a professional institute dedicated to developing real-world AI competence and oversight skills. Our certifications are structured to meet the demands of the EU AI Act, ensuring compliance with high-risk system requirements such as human oversight (Article 13) and data governance (Article 15).
                  </p>
                  <p className="body-large text-foreground leading-relaxed mb-4">
                    All programs are ESG 2015 compliant, emphasizing environmental sustainability (e.g., energy-efficient AI practices in Efficacy modules), social responsibility (e.g., ethical oversight in AIO), and governance standards (e.g., transparent testing rubrics). Each certification is earned through comprehensive testing (formative quizzes, capstone projects, peer-reviewed portfolios), guaranteeing verifiable competency.
                  </p>
                  <p className="body-large text-foreground leading-relaxed">
                    Certificates are recognized as professional designations, blockchain-verified for authenticity, and convertible to ECTS equivalent credits (Approx. 30 hours per ECTS equivalent) for Bologna Process mobility. Whether you're an individual professional or a corporate team, our certifications provide a certificate of competency that enhances resumes, LinkedIn profiles, and compliance portfolios.
                  </p>
                </div>
              </div>
            </section>

            {/* Recognition & Compliance */}
            <section className="section-padding bg-background">
              <div className="container-coad max-w-4xl">
                <h2 className="university-heading-2 text-foreground mb-6">Recognition & Compliance</h2>
                <div className="prose prose-lg max-w-none text-foreground space-y-4">
                  <p>
                    All COAD certifications are recognized as professional certificates of competency, issued by an institute dedicated to AI excellence. They are blockchain-verified for authenticity, shareable on LinkedIn, and convertible to ECTS equivalent credits for Bologna Process mobility.
                  </p>
                  <p>
                    ESG 2015 compliance ensures sustainability (e.g., energy-efficient AI in Efficacy modules), social inclusion (e.g., ethical rights in AIO), and governance standards (e.g., transparent testing). Certifications are tested through assurance of learning rubrics (formative quizzes, capstone projects, 80% pass), guaranteeing verifiable competency.
                  </p>
                  <p>
                    While not formal academic degrees, they are employer-recognized for Act compliance and career boost (e.g., 20-30% employability increase). For high-risk AI, they support Article 13 (oversight) and Article 15 (data governance) requirements.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Certification Tracks Section */}
        {activeSection === 'tracks' && (
          <>
            {/* Choose Your Track */}
            <section className="section-padding bg-background">
              <div className="container-coad">
                <h2 className="university-heading-2 text-foreground mb-12 text-center">Choose Your Track</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h3 className="university-heading-3 text-foreground mb-4">AMCD Track</h3>
                    <p className="text-muted-foreground mb-4">AI Media and Content Development</p>
                    <p className="text-sm text-muted-foreground mb-4">Perfect for junior professionals, content creators, multimedia producers, web designers, and social media managers. Foundation-level certification establishing core competencies in AI development governance and EU AI Act compliance fundamentals.</p>
                    <Link href="/tracks/amcd">
                      <Button className="w-full">Learn More</Button>
                    </Link>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h3 className="university-heading-3 text-foreground mb-4">ACD Track</h3>
                    <p className="text-muted-foreground mb-4">AI Code Development</p>
                    <p className="text-sm text-muted-foreground mb-4">For engineers, analysts, and developers building AI solutions. Master software development, integrations, and modernizations with AI-powered systems.</p>
                    <Link href="/tracks/acd">
                      <Button className="w-full">Learn More</Button>
                    </Link>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h3 className="university-heading-3 text-foreground mb-4">AIO Track</h3>
                    <p className="text-muted-foreground mb-4">AI Controlling & Oversight</p>
                    <p className="text-sm text-muted-foreground mb-4">For managers and compliance professionals. Master AI oversight for safe, sustainable transformation with four controller pillars.</p>
                    <Link href="/tracks/aio">
                      <Button className="w-full">Learn More</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* ACD Track Details */}
            <section className="section-padding bg-muted/30">
              <div className="container-coad">
                <h2 className="university-heading-2 text-foreground mb-6">ACD Track: AI Code Development</h2>
                <p className="body-large text-muted-foreground mb-8 max-w-4xl">
                  The ACD (AI Code Development) Track focuses on building practical skills for designing and deploying AI-powered software solutions. For engineers, analysts, and developers, ACD equips you to master software development, integrations, and modernizations with AI-powered systems. The program is structured with three levels to mastery, ensuring graduates can build robust AI solutions that integrate seamlessly into enterprise environments.
                </p>
                <div className="bg-card rounded-lg p-6 mb-8 border border-border">
                  <h3 className="font-semibold text-foreground mb-3">Recognition:</h3>
                  <p className="text-foreground">
                    Blockchain-verified ACD certificate of competency, shareable on LinkedIn/Accredited Experts Directory; EU AI Act-aligned for technical AI development; Approx. 6-12 ECTS equivalent credits for career mobility.
                  </p>
                </div>

                {/* ACD Levels */}
                <div className="space-y-8">
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <div className="mb-4">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">TIER 1</span>
                      <h3 className="university-heading-3 text-foreground mb-4">ACD Level 1: QAP (Qualified AI Practitioner)</h3>
                    </div>
                    <p className="text-foreground mb-4">
                      Foundation level covering Python basics, AI fundamentals, and initial project work. Establishes core competencies in AI development governance and EU AI Act compliance fundamentals.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-muted-foreground"><strong className="text-foreground">Duration:</strong> Approx. 6 ECTS equivalent (180 hours)</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground"><strong className="text-foreground">Price:</strong> €1,800</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Curriculum Highlights:</h4>
                      <ul className="space-y-1 text-foreground text-sm">
                        <li>• Python basics and programming fundamentals</li>
                        <li>• AI fundamentals: LLMs, embeddings, and basic AI concepts</li>
                        <li>• Initial project work: Build your first AI-powered application</li>
                        <li>• Core competencies in AI development governance</li>
                        <li>• EU AI Act compliance fundamentals</li>
                        <li>• Hands-on labs and formative assessments</li>
                      </ul>
                    </div>
                    <p className="text-foreground mb-2"><strong>What it means:</strong> You can build foundational AI-powered applications and understand basic AI development principles.</p>
                    <p className="text-foreground mb-4"><strong>How it's recognized:</strong> Digital badge noting foundational AI code development competency.</p>
                    <Link href="/tracks/acd">
                      <Button variant="outline">Learn More About QAP</Button>
                    </Link>
                  </div>

                  <div className="bg-card rounded-lg p-6 border border-border">
                    <div className="mb-4">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">TIER 2</span>
                      <h3 className="university-heading-3 text-foreground mb-4">ACD Level 2: AAP (Advanced AI Practitioner)</h3>
                    </div>
                    <p className="text-foreground mb-4">
                      Intermediate level focusing on system integration, API development, and advanced projects. Builds on foundation to create scalable AI solutions.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-muted-foreground"><strong className="text-foreground">Duration:</strong> Approx. 9 ECTS equivalent (270 hours)</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground"><strong className="text-foreground">Price:</strong> €2,200</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Curriculum Highlights:</h4>
                      <ul className="space-y-1 text-foreground text-sm">
                        <li>• System integration: Connecting AI with existing systems</li>
                        <li>• API development: Building and consuming AI APIs</li>
                        <li>• Advanced projects: Multi-component AI systems</li>
                        <li>• Scalability patterns and architecture</li>
                        <li>• Error handling and reliability</li>
                        <li>• Performance optimization techniques</li>
                      </ul>
                    </div>
                    <p className="text-foreground mb-2"><strong>What it means:</strong> You can design and implement advanced AI systems with proper integration and architecture.</p>
                    <p className="text-foreground mb-4"><strong>How it's recognized:</strong> Digital badge highlighting advanced AI code development skills.</p>
                    <Link href="/tracks/acd">
                      <Button variant="outline">Learn More About AAP</Button>
                    </Link>
                  </div>

                  <div className="bg-card rounded-lg p-6 border border-border">
                    <div className="mb-4">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">TIER 3</span>
                      <h3 className="university-heading-3 text-foreground mb-4">ACD Level 3: MAP (Master AI Practitioner)</h3>
                    </div>
                    <p className="text-foreground mb-4">
                      Advanced level with system architecture, enterprise solutions, and portfolio-ready projects. Capstone level demonstrating mastery of AI code development.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-muted-foreground"><strong className="text-foreground">Duration:</strong> Approx. 12 ECTS equivalent (360 hours)</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground"><strong className="text-foreground">Price:</strong> €3,000</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Curriculum Highlights:</h4>
                      <ul className="space-y-1 text-foreground text-sm">
                        <li>• System architecture: Enterprise-grade AI system design</li>
                        <li>• Enterprise solutions: Production-ready deployments</li>
                        <li>• Portfolio-ready projects: Showcase your expertise</li>
                        <li>• Advanced compliance and governance</li>
                        <li>• Capstone project: Real-world AI solution</li>
                        <li>• Portfolio development and presentation</li>
                      </ul>
                    </div>
                    <p className="text-foreground mb-2"><strong>What it means:</strong> You can architect, evaluate, and deploy enterprise-grade AI solutions with full understanding of compliance and best practices.</p>
                    <p className="text-foreground mb-4"><strong>How it's recognized:</strong> Premium ACD certificate of competency with portfolio-ready projects; <strong>Charterholder status</strong> - the highest recognition in AI code development.</p>
                    <Link href="/tracks/acd">
                      <Button variant="outline">Learn More About MAP</Button>
                    </Link>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/tracks/acd">
                    <Button size="lg">Explore Full ACD Track</Button>
                  </Link>
                </div>
              </div>
            </section>

            {/* AIO Track Details */}
            <section className="section-padding bg-background">
              <div className="container-coad">
                <h2 className="university-heading-2 text-foreground mb-6">AIO Track: AI Oversight Certification</h2>
                <p className="body-large text-muted-foreground mb-8 max-w-4xl">
                  The AIO Track focuses on governance, safety, and ethical oversight, aligning with Security/Privacy and Oversight directions. It's a standalone professional institute program, culminating in a certificate of competency tested through domain-specific audits and scenarios. ESG 2015 compliance is integrated (e.g., sustainable practices in Resource Management).
                </p>
                <div className="bg-muted/50 rounded-lg p-6 mb-8 border border-border">
                  <h3 className="font-semibold text-foreground mb-3">Recognition:</h3>
                  <p className="text-foreground">
                    Blockchain-verified badge, shareable for compliance portfolios; Act-compliant for high-risk AI; ECTS credits for professional development.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 mb-8">
                  <h3 className="university-heading-3 text-foreground mb-4">AIO Core: Certified AI Oversight Professional</h3>
                  <p className="text-foreground mb-4">
                    This standalone certification covers 4 domains (Safety/Risk, Ethical Oversight, Legal Compliance, Corporate Digital & AI Transformation), tested through simulations and rubrics. It means gaining expert oversight competence for responsible AI use, recognized as an ESG 2015-compliant certificate of competency for compliance roles.
                  </p>
                  <div className="flex gap-6 text-sm text-muted-foreground mb-4">
                    <span><strong className="text-foreground">Duration:</strong> 6 months, Approx. 12 ECTS equivalent (360 hours total)</span>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-4">Domain Structure:</h4>
                    <div className="space-y-4">
                      <div className="bg-muted/50 rounded-lg p-4 border border-border">
                        <h5 className="font-semibold text-foreground mb-2">Domain 1: Safety/Risk - €1,800</h5>
                        <p className="text-sm text-muted-foreground mb-2">Approx. 2.67 ECTS equivalent, 80 hours</p>
                        <p className="text-sm text-foreground">Master risk assessment, safety protocols, and mitigation strategies for AI systems. Learn to identify and manage technical and operational risks in AI deployments.</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 border border-border">
                        <h5 className="font-semibold text-foreground mb-2">Domain 2: Ethical Oversight - €1,800</h5>
                        <p className="text-sm text-muted-foreground mb-2">Approx. 2.67 ECTS equivalent, 80 hours</p>
                        <p className="text-sm text-foreground">Develop ethical frameworks and oversight mechanisms. Ensure AI systems align with ethical principles, human rights, and social responsibility standards.</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 border border-border">
                        <h5 className="font-semibold text-foreground mb-2">Domain 3: Legal Compliance - €1,600</h5>
                        <p className="text-sm text-muted-foreground mb-2">Approx. 2.67 ECTS equivalent, 80 hours</p>
                        <p className="text-sm text-foreground">Navigate EU AI Act requirements, GDPR compliance, and regulatory frameworks. Learn to conduct compliance audits and implement legal safeguards.</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 border border-border">
                        <h5 className="font-semibold text-foreground mb-2">Domain 4: Corporate Digital & AI Transformation - €2,600</h5>
                        <p className="text-sm text-muted-foreground mb-2">Approx. 4 ECTS equivalent, 120 hours</p>
                        <p className="text-sm text-foreground">Lead comprehensive digital transformation initiatives. Master change management, organizational AI strategy, and transformation leadership for enterprise AI adoption.</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground mb-2"><strong>What it means:</strong> You're certified to implement risk governance, ethical controls, Act alignment, and lead comprehensive digital transformation in AI systems.</p>
                  <p className="text-foreground mb-4"><strong>How it's recognized:</strong> Digital badge with domain scores (e.g., "95% Transformation Leadership Proficiency"); trusted for regulatory audits and organizational change initiatives. Complete all 4 domains for full AIO Charterholder status.</p>
                  <div className="flex gap-4">
                    <Link href="/tracks/aio">
                      <Button>Explore Full AIO Track</Button>
                    </Link>
                    <Link href="/courses#catalog">
                      <Button variant="outline">View Individual Domains</Button>
                    </Link>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/tracks/aio">
                    <Button size="lg">Explore AIO Track</Button>
                  </Link>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Competency Modules Section */}
        {activeSection === 'modules' && (
          <section className="section-padding bg-background">
            <div className="container-coad">
              <h2 className="university-heading-2 text-foreground mb-6">Competency Modules Overview</h2>
              <p className="body-large text-muted-foreground mb-8 max-w-3xl">
                Each standalone module is a self-contained unit with its own certificate of competency, tested via rubrics. They feed into tracks but can be taken independently. All ESG 2015 compliant and Act-aligned. All modules run for 4 weeks and use rubric-based assessment with an 80% pass requirement.
              </p>
              
              {/* ACD-Aligned Modules */}
              <div className="mb-12">
                <h3 className="university-heading-3 text-foreground mb-6">ACD-Aligned Modules (AI Code Development)</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h4 className="university-heading-4 text-foreground mb-3">Task Decomposition</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Learn to break complex goals into structured, executable tasks for Agentic AI systems. Week-by-week curriculum covering decomposition patterns, LLM-driven agents, and executable plans.
                    </p>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-foreground font-semibold">€1,800</span>
                      <span className="text-muted-foreground">60 hours, Approx. 2 ECTS equivalent</span>
                    </div>
                    <Link href="/modules/task-decomposition">
                      <Button className="w-full">View Module</Button>
                    </Link>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h4 className="university-heading-4 text-foreground mb-3">Multi-Agent Systems</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Design and analyze systems where multiple agents coordinate to achieve goals. Covers coordination, communication protocols, and MAS architectures.
                    </p>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-foreground font-semibold">€2,200</span>
                      <span className="text-muted-foreground">90 hours, Approx. 3 ECTS equivalent</span>
                    </div>
                    <Link href="/modules/multi-agent">
                      <Button className="w-full">View Module</Button>
                    </Link>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h4 className="university-heading-4 text-foreground mb-3">Performance Optimization</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Optimize Agentic AI systems for latency, quality, cost, and reliability. Learn measuring performance, prompt optimization, and monitoring strategies.
                    </p>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-foreground font-semibold">€1,800</span>
                      <span className="text-muted-foreground">60 hours, Approx. 2 ECTS equivalent</span>
                    </div>
                    <Link href="/modules/performance-optimization">
                      <Button className="w-full">View Module</Button>
                    </Link>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h4 className="university-heading-4 text-foreground mb-3">Human-AI Design</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Design human–agent interactions that are usable, trustworthy, and aligned. Covers interaction patterns, UX for Agentic AI, and oversight collaboration.
                    </p>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-foreground font-semibold">€2,200</span>
                      <span className="text-muted-foreground">90 hours, Approx. 3 ECTS equivalent</span>
                    </div>
                    <Link href="/modules/human-ai-design">
                      <Button className="w-full">View Module</Button>
                    </Link>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h4 className="university-heading-4 text-foreground mb-3">Token Efficiency in AI Development</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Reduce LLM costs with prompt optimization, routing, and caching. Practical techniques for production-ready AI systems with measurable token reduction.
                    </p>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-foreground font-semibold">€920</span>
                      <span className="text-muted-foreground">90 hours, Approx. 3 ECTS equivalent</span>
                    </div>
                    <Link href="/modules/token-efficiency">
                      <Button className="w-full">View Module</Button>
                    </Link>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h4 className="university-heading-4 text-foreground mb-3">Restricted Methods & Safety</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Advanced safety, restriction, and oversight methods for Agentic AI systems. Covers guardrail design, evaluation, testing, and safety case development.
                    </p>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-foreground font-semibold">€2,400</span>
                      <span className="text-muted-foreground">120 hours, Approx. 4 ECTS equivalent</span>
                    </div>
                    <Link href="/modules/restricted-methods">
                      <Button className="w-full">View Module</Button>
                    </Link>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h4 className="university-heading-4 text-foreground mb-3">Latest in AI 2025</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Stay current with frontier developments in Agentic AI, tools, and research directions. Landscape analysis, emerging architectures, and case studies.
                    </p>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-foreground font-semibold">€1,800</span>
                      <span className="text-muted-foreground">60 hours, Approx. 2 ECTS equivalent</span>
                    </div>
                    <Link href="/modules/latest-in-ai-2025">
                      <Button className="w-full">View Module</Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* AIO-Aligned Modules */}
              <div className="mb-12">
                <h3 className="university-heading-3 text-foreground mb-6">AIO-Aligned Modules (AI Oversight)</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h4 className="university-heading-4 text-foreground mb-3">Privacy Auditor</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      EU AI Act compliance and privacy auditing skills. Master data governance, regulatory requirements, and compliance auditing methodologies.
                    </p>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-foreground font-semibold">€1,800</span>
                      <span className="text-muted-foreground">80 hours, Approx. 2.67 ECTS equivalent</span>
                    </div>
                    <Link href="/modules/privacy-auditor">
                      <Button className="w-full">View Module</Button>
                    </Link>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h4 className="university-heading-4 text-foreground mb-3">Legal Auditor</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Ensure legal compliance and regulatory alignment. Navigate EU AI Act requirements, GDPR, and conduct compliance audits.
                    </p>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-foreground font-semibold">€1,800</span>
                      <span className="text-muted-foreground">80 hours, Approx. 2.67 ECTS equivalent</span>
                    </div>
                    <Link href="/modules/legal-auditor">
                      <Button className="w-full">View Module</Button>
                    </Link>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h4 className="university-heading-4 text-foreground mb-3">Resource Management</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Optimize AI resource allocation and capacity planning. Learn sustainable AI practices and ESG compliance for resource management.
                    </p>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-foreground font-semibold">€2,200</span>
                      <span className="text-muted-foreground">90 hours, Approx. 3 ECTS equivalent</span>
                    </div>
                    <Link href="/modules/resource-management">
                      <Button className="w-full">View Module</Button>
                    </Link>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h4 className="university-heading-4 text-foreground mb-3">Sustainability & AI</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Implement sustainable AI practices and ESG compliance. Energy-efficient AI, environmental impact, and sustainable transformation.
                    </p>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-foreground font-semibold">€1,800</span>
                      <span className="text-muted-foreground">60 hours, Approx. 2 ECTS equivalent</span>
                    </div>
                    <Link href="/modules/sustainability-ai">
                      <Button className="w-full">View Module</Button>
                    </Link>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h4 className="university-heading-4 text-foreground mb-3">Crisis Prevention</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Develop crisis prevention and risk mitigation strategies. Learn to identify, prevent, and manage AI-related crises in organizations.
                    </p>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-foreground font-semibold">€2,200</span>
                      <span className="text-muted-foreground">90 hours, Approx. 3 ECTS equivalent</span>
                    </div>
                    <Link href="/modules/crisis-prevention">
                      <Button className="w-full">View Module</Button>
                    </Link>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border card-hover">
                    <h4 className="university-heading-4 text-foreground mb-3">Financial Evaluations</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Evaluate AI investments and financial impact. Learn ROI analysis, cost-benefit evaluation, and financial planning for AI initiatives.
                    </p>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-foreground font-semibold">€2,200</span>
                      <span className="text-muted-foreground">90 hours, Approx. 3 ECTS equivalent</span>
                    </div>
                    <Link href="/modules/financial-evaluations">
                      <Button className="w-full">View Module</Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link href="/modules">
                  <Button size="lg">Browse All Modules</Button>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Course Catalog Section */}
        {activeSection === 'catalog' && (
          <section id="catalog" className="section-padding bg-background">
            <div className="container-coad">
              <div className="mb-12">
                <h2 className="university-heading-2 text-foreground mb-4">Course Catalog</h2>
                <p className="body-large text-muted-foreground max-w-2xl">
                  Discover COAD certification tracks and standalone competency modules. All courses include Canvas-like LMS access, live Zoom sessions, and blockchain-verified certificates.
                </p>
              </div>

              <div className="mb-8 flex gap-3">
                <button
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    filter === 'all'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                  onClick={() => setFilter('all')}
                >
                  All Courses
                </button>
                <button
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    filter === 'track'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                  onClick={() => setFilter('track')}
                >
                  Tracks
                </button>
                <button
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    filter === 'module'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                  onClick={() => setFilter('module')}
                >
                  Modules
                </button>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-border bg-card p-6 card-hover">
                    <div className="mb-4">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {item.type === 'track' ? 'Full Track' : 'Module'}
                      </span>
                    </div>
                    <h3 className="university-heading-4 text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <div className="mb-4 flex items-center justify-between text-sm">
                      <span className="text-foreground font-semibold">{item.price}</span>
                      <span className="text-muted-foreground">{item.duration}</span>
                    </div>
                    <Link href={`/courses/${item.id}`}>
                      <Button className="w-full">View Details</Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-navy to-teal text-white">
          <div className="container-coad text-center">
            <h2 className="university-heading-2 text-white mb-4">Ready to advance your AI skills?</h2>
            <p className="body-large text-white/90 mb-8">Explore our tracks and modules today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-navy hover:bg-gray-100">
                  Start Free Preview
                </Button>
              </Link>
              <Link href="/corporate-services/executive">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact for Corporate Training
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
