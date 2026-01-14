'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AACTrackSection() {
  const [activeTab, setActiveTab] = useState(1);

  const phases = [
    {
      id: 1,
      label: "Phase 1 – Foundations",
      subtitle: "Python, LLMs & Prompt Engineering",
      duration: "~5 weeks",
      focus: "Python refresher, data structures, functions & classes, tooling (notebooks/IDEs), core LLM concepts (zero/one/few-shot prompting), and prompt engineering techniques.",
      topics: ["Landscape of AI and Agentic AI", "Python basics", "LLM fundamentals", "Prompt patterns", "Retrieval-Augmented Generation (RAG)", "Vector databases"],
      project: "Smart Data Processing Agent that ingests inputs, applies policy rules, and outputs structured decisions/documents.",
      outcome: "You can build reliable, prompt-driven agents that automate workflows over your own data.",
    },
    {
      id: 2,
      label: "Phase 2 – Agent Design",
      subtitle: "Agent Concepts, Environments & Responsible AI",
      duration: "~4–5 weeks",
      focus: "Core agent properties (autonomy, goal-directedness, reactivity), environment types (PEAS), perceived agency, and agent communication; ethics, safety, and alignment in autonomous systems.",
      topics: ["Agentic workflows and architectures", "Agent-environment modeling", "Environment and goal complexity", "Human-agent collaboration concepts", "Responsible AI frameworks", "Risk and alignment challenges specific to Agentic AI"],
      project: "Automated Research Agent that plans queries, retrieves from multiple sources, and iteratively refines answers.",
      outcome: "You can design agentic systems that are aligned with human goals and responsible AI principles.",
    },
    {
      id: 3,
      label: "Phase 3 – Advanced Agentic AI",
      subtitle: "Multi-Agent Systems & Reinforcement Learning",
      duration: "~5–6 weeks",
      focus: "Planning and reasoning paradigms (CoT, ReAct, planning over tools), multi-agent systems, reinforcement learning for agents, and human-agent interaction/embodiment.",
      topics: ["Classical vs LLM-based planning", "Agentic RAG", "Coordination & communication in MAS", "Basic game-theoretic reasoning", "Reinforcement learning (including deep and verbal RL)", "Lifelong learning concepts", "Human-agent trust and common ground", "Embodied/simulated agents"],
      project: "Multi-Agent Research & Decision System coordinating specialist agents, or Customer Support Agent that integrates a knowledge base and LLM for robust conversations.",
      outcome: "You can architect and evaluate advanced agentic systems that plan, coordinate, and improve over time.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AAC Track: Agentic AI Competency
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The AAC Track focuses on building practical Agentic AI skills – designing and deploying autonomous, goal-driven AI agents that can perceive, reason, plan, act, and collaborate with humans and other systems. It combines solid foundations in prompt engineering and large language models (LLMs) with agent architectures, planning and reasoning paradigms, multi-agent systems, and advanced reinforcement-learning-based behaviors.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Blockchain-verified Agentic AI competency badge, shareable on LinkedIn and in compliance portfolios</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">EU AI Act-aligned for low/moderate-risk autonomous AI use (human oversight, data governance, risk controls)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">ECTS credits for career mobility</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Post-nominal designation: AAC Certified (Agentic AI Competency)</span>
              </li>
            </ul>

            <Link href="/tracks/acd">
              <Button size="lg">Explore ACD Track</Button>
            </Link>

            {/* Tabs */}
            <div className="mt-8 border-b border-gray-200">
              <div className="flex space-x-1">
                {phases.map((phase) => (
                  <button
                    key={phase.id}
                    onClick={() => setActiveTab(phase.id)}
                    className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === phase.id
                        ? 'border-primary-teal text-primary-teal'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {phase.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {phases.map((phase) => (
              activeTab === phase.id && (
                <div key={phase.id} className="mt-6 space-y-4 animate-fade-in">
                  <div>
                    <span className="text-sm text-gray-500">Duration: {phase.duration}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Focus:</h4>
                    <p className="text-gray-600">{phase.focus}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Topics:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {phase.topics.map((topic, idx) => (
                        <li key={idx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Project Example:</h4>
                    <p className="text-gray-600 italic">{phase.project}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Outcome:</h4>
                    <p className="text-gray-600">{phase.outcome}</p>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-teal/10 to-primary-navy/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🤖</div>
                <p className="text-gray-600 font-medium">Agentic AI Systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
