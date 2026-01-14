'use client';

import { useState } from 'react';

const messages = [
  { sender: 'COAD Faculty', subject: 'Welcome to AAC', time: '2h ago' },
  { sender: 'Student Support', subject: 'Zoom link updated', time: '1d ago' },
];

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
        {messages.map((message) => (
          <div key={message.subject} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">{message.subject}</p>
              <span className="text-xs text-muted-foreground">{message.time}</span>
            </div>
            <p className="text-xs text-muted-foreground">From: {message.sender}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
