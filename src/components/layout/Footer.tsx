import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">COAD</h3>
            <p className="text-sm text-gray-600">
              AI Competency & Oversight Certification
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Certifications</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/aac-track" className="text-gray-600 hover:text-primary">AAC Track</Link></li>
              <li><Link href="/aio-track" className="text-gray-600 hover:text-primary">AIO Track</Link></li>
              <li><Link href="/certifications" className="text-gray-600 hover:text-primary">All Certifications</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/modules" className="text-gray-600 hover:text-primary">Modules</Link></li>
              <li><Link href="/corporate" className="text-gray-600 hover:text-primary">Corporate Training</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-primary">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Contact</h4>
            <p className="text-sm text-gray-600">contact@coad.ai</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} COAD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
