'use client';

import { useState } from 'react';

type Notification = {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
};

const mockNotifications: Notification[] = [
  { id: '1', title: 'New assignment', message: 'Project Brief assigned', time: '2h ago', read: false },
  { id: '2', title: 'Grade posted', message: 'Quiz 1 graded: 88%', time: '1d ago', read: false },
  { id: '3', title: 'Zoom session', message: 'Live session scheduled for tomorrow', time: '2d ago', read: true },
];

export default function NotificationsPanel() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="border-b border-border px-4 py-3">
            <p className="text-sm font-semibold text-foreground">Notifications</p>
          </div>
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
        </div>
      )}
    </div>
  );
}
