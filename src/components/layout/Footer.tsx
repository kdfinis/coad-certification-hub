import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">COAD SARL-S</h3>
            <p className="text-sm text-gray-600 mb-2">
              AI Training Innovator
            </p>
            <p className="text-sm text-gray-600">
              Contact <a href="mailto:contact@coad.ai" className="text-primary-teal hover:underline">contact@coad.ai</a> for Act-Compliant Solutions
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">Certifications</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tracks/amcd" className="text-gray-600 hover:text-primary-teal transition-colors">AMCD Track</Link></li>
              <li><Link href="/tracks/acd" className="text-gray-600 hover:text-primary-teal transition-colors">ACD Track</Link></li>
              <li><Link href="/tracks/aio" className="text-gray-600 hover:text-primary-teal transition-colors">AIO Track</Link></li>
              <li><Link href="/certifications" className="text-gray-600 hover:text-primary-teal transition-colors">All Certifications</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/modules" className="text-gray-600 hover:text-primary-teal transition-colors">Modules</Link></li>
              <li><Link href="/corporate-training" className="text-gray-600 hover:text-primary-teal transition-colors">Corporate Training</Link></li>
              <li><Link href="/ai-workforce" className="text-gray-600 hover:text-primary-teal transition-colors">AI Workforce</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-primary-teal transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">Info</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Serving Professionals Globally</li>
              <li>EU AI Act Compliant</li>
              <li>Premier AI Training Platform</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} COAD SARL-S. All rights reserved.</p>
          <p className="mt-2">Serving professionals globally with EU AI Act compliant training.</p>
        </div>
      </div>
    </footer>
  );
}
