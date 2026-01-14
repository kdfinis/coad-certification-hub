'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

// Metadata is handled in layout.tsx or via next/head for client components

type CatalogItem = {
  id: string;
  title: string;
  type: 'track' | 'module';
  price: string;
  duration: string;
  description: string;
};

const catalogItems: CatalogItem[] = [
  {
    id: 'aac-foundations',
    title: 'AAC Foundations',
    type: 'track',
    price: '€3,000',
    duration: '16 weeks',
    description: 'Agentic AI Competency track with hands-on projects and certification.',
  },
  {
    id: 'aio-oversight',
    title: 'AIO Oversight Core',
    type: 'track',
    price: 'From €1,600',
    duration: '6 months',
    description: 'AI governance, safety, and ethical oversight certification.',
  },
  {
    id: 'acd-qap',
    title: 'ACD QAP Tier',
    type: 'track',
    price: '€1,800',
    duration: '180 hours',
    description: 'Qualified AI Practitioner certification with practical skills.',
  },
  {
    id: 'task-decomposition',
    title: 'Task Decomposition Module',
    type: 'module',
    price: '€1,800',
    duration: '40 hours',
    description: 'Standalone competency module for task decomposition techniques.',
  },
  {
    id: 'privacy-auditor',
    title: 'Privacy Auditor Module',
    type: 'module',
    price: '€1,800',
    duration: '80 hours',
    description: 'EU AI Act compliance and privacy auditing skills.',
  },
];

export default function CatalogPage() {
  const [filter, setFilter] = useState<'all' | 'track' | 'module'>('all');

  const filteredItems = filter === 'all' ? catalogItems : catalogItems.filter((item) => item.type === filter);

  return (
    <div className="min-h-screen bg-background">
      <div className="container-coad py-16">
        <div className="mb-12">
          <h1 className="university-heading-1 text-foreground mb-4">Course Catalog</h1>
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
              <Link href={`/catalog/${item.id}`}>
                <Button className="w-full">View Details</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
