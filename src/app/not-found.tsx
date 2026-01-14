import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container-coad text-center">
        <h1 className="university-heading-1 text-foreground mb-4">404 - Page Not Found</h1>
        <p className="body-large text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button size="lg">Go Home</Button>
          </Link>
          <Link href="/catalog">
            <Button variant="outline" size="lg">Browse Courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
