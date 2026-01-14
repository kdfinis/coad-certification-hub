import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">COAD</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/certifications" className="text-sm font-medium transition-colors hover:text-primary">
            Certifications
          </Link>
          <Link href="/tracks" className="text-sm font-medium transition-colors hover:text-primary">
            Tracks
          </Link>
          <Link href="/modules" className="text-sm font-medium transition-colors hover:text-primary">
            Modules
          </Link>
          <Link href="/corporate" className="text-sm font-medium transition-colors hover:text-primary">
            Corporate
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-sm font-medium">
            Log in
          </Link>
          <Link href="/signup" className="rounded-md bg-primary-teal px-4 py-2 text-sm font-medium text-white hover:bg-primary-teal/90">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
