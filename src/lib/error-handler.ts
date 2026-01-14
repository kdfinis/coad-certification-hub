/**
 * Centralized error handling and logging
 */

export type ErrorLevel = 'error' | 'warning' | 'info';

export interface ErrorContext {
  userId?: string;
  courseId?: string;
  action?: string;
  metadata?: Record<string, any>;
}

class ErrorHandler {
  private logError(error: Error, level: ErrorLevel, context?: ErrorContext) {
    const errorLog = {
      message: error.message,
      stack: error.stack,
      level,
      context,
      timestamp: new Date().toISOString(),
    };

    // Console logging (development)
    if (process.env.NODE_ENV === 'development') {
      console.error('Error:', errorLog);
    }

    // TODO: Send to error tracking service (Sentry, LogRocket, etc.)
    // if (process.env.NODE_ENV === 'production') {
    //   errorTrackingService.captureException(error, { extra: context });
    // }
  }

  handle(error: unknown, context?: ErrorContext): string {
    const error = error instanceof Error ? error : new Error(String(error));
    this.logError(error, 'error', context);

    // Return user-friendly message
    if (error.message.includes('network') || error.message.includes('fetch')) {
      return 'Network error. Please check your connection and try again.';
    }

    if (error.message.includes('timeout')) {
      return 'Request timed out. Please try again.';
    }

    if (error.message.includes('validation')) {
      return 'Please check your input and try again.';
    }

    return 'An unexpected error occurred. Please try again or contact support.';
  }

  handleApiError(error: unknown, context?: ErrorContext): { message: string; status?: number } {
    const error = error instanceof Error ? error : new Error(String(error));
    this.logError(error, 'error', context);

    // Extract status from error if available
    const status = (error as any).status;

    return {
      message: this.handle(error, context),
      status,
    };
  }

  warn(message: string, context?: ErrorContext) {
    const error = new Error(message);
    this.logError(error, 'warning', context);
  }

  info(message: string, context?: ErrorContext) {
    const error = new Error(message);
    this.logError(error, 'info', context);
  }
}

export const errorHandler = new ErrorHandler();
