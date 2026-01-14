import { useState, useCallback } from 'react';

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
}

const toasts: Toast[] = [];
const listeners: Array<(toasts: Toast[]) => void> = [];

function notify() {
  listeners.forEach((listener) => listener([...toasts]));
}

export function toast(toast: Omit<Toast, 'id'>) {
  const id = Math.random().toString(36).substring(2, 9);
  toasts.push({ ...toast, id });
  notify();
  setTimeout(() => {
    const index = toasts.findIndex((t) => t.id === id);
    if (index > -1) {
      toasts.splice(index, 1);
      notify();
    }
  }, 5000);
  return id;
}

export function useToast() {
  const [toastList, setToastList] = useState<Toast[]>([]);

  const addListener = useCallback((listener: (toasts: Toast[]) => void) => {
    listeners.push(listener);
    listener([...toasts]);
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  useState(() => {
    const removeListener = addListener(setToastList);
    return removeListener;
  });

  return {
    toasts: toastList,
    toast,
    dismiss: (id: string) => {
      const index = toasts.findIndex((t) => t.id === id);
      if (index > -1) {
        toasts.splice(index, 1);
        notify();
      }
    },
  };
}
