'use client';

import { useState } from 'react';

const initialEvents = [
  { title: 'AAC Live Session', date: 'Apr 10 · 10:00 CET' },
  { title: 'Assignment Due: Risk Memo', date: 'Apr 12 · 23:59 CET' },
  { title: 'Office Hours', date: 'Apr 15 · 14:00 CET' },
];

export default function CalendarPage() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [events, setEvents] = useState(initialEvents);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Calendar</h2>
        <p className="text-sm text-muted-foreground">Upcoming sessions and deadlines.</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-4 space-y-3">
        <p className="text-sm font-semibold text-foreground">Add event</p>
        <input
          className="rounded-md border border-border px-3 py-2 text-sm"
          placeholder="Event title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          className="rounded-md border border-border px-3 py-2 text-sm"
          placeholder="Date and time"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <button
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
          type="button"
          onClick={async () => {
            if (!title.trim()) return;
            
            try {
              // TODO: Create calendar event via API
              // const response = await fetch('/api/calendar/events', {
              //   method: 'POST',
              //   headers: { 'Content-Type': 'application/json' },
              //   body: JSON.stringify({
              //     title: title.trim(),
              //     date,
              //   }),
              // });
              
              setEvents((prev) => [{ title: title.trim(), date: date || 'TBD' }, ...prev]);
              setTitle('');
              setDate('');
            } catch (error) {
              console.error('Failed to create event:', error);
              alert('Failed to create event. Please try again.');
            }
          }}
        >
          Add event
        </button>
      </div>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.title} className="rounded-xl border border-border bg-card p-4">
            <p className="text-sm font-semibold text-foreground">{event.title}</p>
            <p className="text-xs text-muted-foreground">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
