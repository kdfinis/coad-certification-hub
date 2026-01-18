'use client';

import { useState } from 'react';

const threads = [
  {
    id: 'thread-1',
    subject: 'Welcome to AAC',
    status: 'Unread',
    participants: ['COAD Faculty', 'You'],
    updatedAt: '2h ago',
    messages: [
      {
        id: 'msg-1',
        sender: 'COAD Faculty',
        time: 'Today · 09:12',
        body: 'Welcome to the AAC cohort. We will kick off with a live session on Wednesday.',
      },
    ],
  },
  {
    id: 'thread-2',
    subject: 'Zoom link updated',
    status: 'Needs response',
    participants: ['Student Support', 'You'],
    updatedAt: '1d ago',
    messages: [
      {
        id: 'msg-2',
        sender: 'Student Support',
        time: 'Yesterday · 14:30',
        body: 'We updated the Zoom link for Friday. Please confirm you can access it.',
      },
      {
        id: 'msg-3',
        sender: 'You',
        time: 'Yesterday · 16:05',
        body: 'Thanks! I will test it this afternoon.',
      },
    ],
  },
  {
    id: 'thread-3',
    subject: 'Module 2 feedback',
    status: 'Replied',
    participants: ['COAD Faculty', 'You'],
    updatedAt: '3d ago',
    messages: [
      {
        id: 'msg-4',
        sender: 'COAD Faculty',
        time: 'Mon · 11:20',
        body: 'Your Module 2 reflections are strong. Please expand on the risk analysis section.',
      },
      {
        id: 'msg-5',
        sender: 'You',
        time: 'Mon · 12:04',
        body: 'Will do. I will submit the revision by tomorrow.',
      },
    ],
  },
];

const statusStyles: Record<string, string> = {
  Unread: 'bg-primary/10 text-primary',
  'Needs response': 'bg-amber-500/10 text-amber-700',
  Replied: 'bg-emerald-500/10 text-emerald-700',
};

export default function InboxPage() {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Inbox</h2>
        <p className="text-sm text-muted-foreground">Internal messaging and announcements.</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-4 space-y-3">
        <p className="text-sm font-semibold text-foreground">Compose</p>
        <input
          className="rounded-md border border-border px-3 py-2 text-sm"
          placeholder="Recipient"
          value={recipient}
          onChange={(event) => setRecipient(event.target.value)}
        />
        <input
          className="rounded-md border border-border px-3 py-2 text-sm"
          placeholder="Subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
        <textarea
          className="rounded-md border border-border p-2 text-sm"
          rows={4}
          placeholder="Message"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <button
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
          type="button"
          onClick={async () => {
            if (!recipient.trim() || !subject.trim() || !body.trim()) {
              alert('Please fill in all fields');
              return;
            }
            
            try {
              // TODO: Send message via API
              // const response = await fetch('/api/messages/send', {
              //   method: 'POST',
              //   headers: { 'Content-Type': 'application/json' },
              //   body: JSON.stringify({
              //     recipient,
              //     subject,
              //     body,
              //   }),
              // });
              
              setRecipient('');
              setSubject('');
              setBody('');
              alert('Message sent successfully');
            } catch (error) {
              console.error('Failed to send message:', error);
              alert('Failed to send message. Please try again.');
            }
          }}
        >
          Send message
        </button>
      </div>
      <div className="space-y-4">
        {threads.map((thread) => (
          <div key={thread.id} className="rounded-xl border border-border bg-card p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-foreground">{thread.subject}</p>
                <p className="text-xs text-muted-foreground">
                  Participants: {thread.participants.join(', ')}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-full px-2 py-1 text-xs font-semibold ${
                    statusStyles[thread.status] ?? 'bg-muted text-foreground'
                  }`}
                >
                  {thread.status}
                </span>
                <span className="text-xs text-muted-foreground">{thread.updatedAt}</span>
              </div>
            </div>
            <div className="space-y-2">
              {thread.messages.map((message) => (
                <div key={message.id} className="rounded-lg border border-border/70 bg-background p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-foreground">{message.sender}</p>
                    <span className="text-xs text-muted-foreground">{message.time}</span>
                  </div>
                  <p className="text-sm text-foreground/90">{message.body}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
