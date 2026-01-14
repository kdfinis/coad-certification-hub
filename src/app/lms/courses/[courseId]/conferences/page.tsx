'use client';

import { useState } from 'react';

type ConferencesPageProps = {
  params: { courseId: string };
};

const initialSessions = [
  { title: 'AAC Live Session', date: 'Apr 10 · 10:00 CET', status: 'Scheduled' },
  { title: 'Risk Lab', date: 'Apr 17 · 14:00 CET', status: 'Scheduled' },
  { title: 'Office Hours', date: 'Apr 20 · 16:00 CET', status: 'Open' },
];

export default function ConferencesPage({ params }: ConferencesPageProps) {
  const [sessionTitle, setSessionTitle] = useState('');
  const [sessionDate, setSessionDate] = useState('');
  const [sessions, setSessions] = useState(initialSessions);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Zoom Sessions</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-4 space-y-3">
        <p className="text-sm font-semibold text-foreground">Schedule a session</p>
        <div className="grid gap-3 md:grid-cols-2">
          <input
            className="rounded-md border border-border px-3 py-2 text-sm"
            placeholder="Session title"
            value={sessionTitle}
            onChange={(event) => setSessionTitle(event.target.value)}
          />
          <input
            className="rounded-md border border-border px-3 py-2 text-sm"
            placeholder="Date and time"
            value={sessionDate}
            onChange={(event) => setSessionDate(event.target.value)}
          />
        </div>
        <button
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
          type="button"
          onClick={async () => {
            if (!sessionTitle.trim() || !sessionDate.trim()) return;
            
            try {
              // TODO: Call Zoom API to create actual meeting
              // const response = await fetch('/api/zoom/create-meeting', {
              //   method: 'POST',
              //   headers: { 'Content-Type': 'application/json' },
              //   body: JSON.stringify({
              //     courseId: params.courseId,
              //     title: sessionTitle.trim(),
              //     startTime: sessionDate.trim(),
              //     duration: 60,
              //   }),
              // });
              
              // For now, add to local state
              setSessions((prev) => [
                { title: sessionTitle.trim(), date: sessionDate.trim(), status: 'Scheduled' },
                ...prev,
              ]);
              setSessionTitle('');
              setSessionDate('');
            } catch (error) {
              console.error('Failed to create Zoom session:', error);
              alert('Failed to create session. Please try again.');
            }
          }}
        >
          Add Zoom session
        </button>
      </div>
      <div className="space-y-4">
        {sessions.map((session) => (
          <div key={session.title} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">{session.title}</p>
              <span className="text-xs text-muted-foreground">{session.status}</span>
            </div>
            <p className="text-xs text-muted-foreground">{session.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
