'use client';

import { useState } from 'react';

type Notification = {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
};

type Preference = {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
};

const mockNotifications: Notification[] = [
  { id: '1', title: 'New assignment', message: 'Project Brief assigned', time: '2h ago', read: false },
  { id: '2', title: 'Grade posted', message: 'Quiz 1 graded: 88%', time: '1d ago', read: false },
  { id: '3', title: 'Zoom session', message: 'Live session scheduled for tomorrow', time: '2d ago', read: true },
];

const initialPreferences: Preference[] = [
  {
    id: 'pref-assignments',
    label: 'Assignments',
    description: 'Due dates and grading updates.',
    enabled: true,
  },
  {
    id: 'pref-discussions',
    label: 'Discussions',
    description: 'Replies and instructor announcements.',
    enabled: true,
  },
  {
    id: 'pref-calendar',
    label: 'Calendar reminders',
    description: 'Live sessions and office hours.',
    enabled: false,
  },
  {
    id: 'pref-system',
    label: 'System alerts',
    description: 'Security and account changes.',
    enabled: true,
  },
];

export default function NotificationsPanel() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [preferences, setPreferences] = useState(initialPreferences);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'notifications' | 'preferences'>('notifications');

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="relative">
      <button
        className="relative rounded-md p-2 text-foreground/80 hover:bg-muted hover:text-foreground"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
            {unreadCount}
          </span>
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 rounded-xl border border-border bg-card shadow-lg z-50">
          <div className="border-b border-border px-4 py-3 space-y-3">
            <p className="text-sm font-semibold text-foreground">Notifications</p>
            <div className="flex gap-2">
              <button
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  activeTab === 'notifications' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                }`}
                onClick={() => setActiveTab('notifications')}
                type="button"
              >
                Inbox
              </button>
              <button
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  activeTab === 'preferences' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                }`}
                onClick={() => setActiveTab('preferences')}
                type="button"
              >
                Preferences
              </button>
            </div>
          </div>
          {activeTab === 'notifications' ? (
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`border-b border-border px-4 py-3 hover:bg-muted cursor-pointer ${!notification.read ? 'bg-primary/5' : ''}`}
                  onClick={() => {
                    setNotifications((prev) =>
                      prev.map((n) => (n.id === notification.id ? { ...n, read: true } : n))
                    );
                  }}
                >
                  <p className="text-sm font-semibold text-foreground">{notification.title}</p>
                  <p className="text-xs text-muted-foreground">{notification.message}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{notification.time}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-h-96 overflow-y-auto px-4 py-3 space-y-3">
              {preferences.map((pref) => (
                <div key={pref.id} className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{pref.label}</p>
                    <p className="text-xs text-muted-foreground">{pref.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setPreferences((prev) =>
                        prev.map((item) =>
                          item.id === pref.id ? { ...item, enabled: !item.enabled } : item
                        )
                      )
                    }
                    className={`h-6 w-11 rounded-full border border-border p-0.5 transition ${
                      pref.enabled ? 'bg-primary/20' : 'bg-muted'
                    }`}
                    aria-pressed={pref.enabled}
                  >
                    <span
                      className={`block h-5 w-5 rounded-full transition ${
                        pref.enabled ? 'translate-x-5 bg-primary' : 'translate-x-0 bg-muted-foreground'
                      }`}
                    />
                  </button>
                </div>
              ))}
              <p className="text-xs text-muted-foreground">
                Changes sync automatically with your account preferences.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
