import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to error tracking service in production
    if (import.meta.env.PROD) {
      // TODO: Integrate error tracking service (e.g., Sentry)
      // logErrorToService(error, errorInfo);
    } else {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background">
          <Header />
          <main className="section-padding">
            <div className="container-coad max-w-2xl mx-auto text-center">
              <h1 className="heading-1 mb-4">Something went wrong</h1>
              <p className="body-large text-muted-foreground mb-8">
                We're sorry, but something unexpected happened. Please try again or contact support if the problem persists.
              </p>
              {import.meta.env.DEV && this.state.error && (
                <div className="mb-8 p-4 bg-destructive/10 rounded-lg text-left">
                  <p className="text-sm font-mono text-destructive">
                    {this.state.error.toString()}
                  </p>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" asChild>
                  <Link to="/">Go to Homepage</Link>
                </Button>
                <Button variant="outline" onClick={() => window.location.reload()}>
                  Reload Page
                </Button>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

