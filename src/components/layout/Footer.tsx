import { Link } from 'react-router-dom';
import { 
  LinkedInNodeIcon, 
  TwitterNodeIcon, 
  FacebookNodeIcon, 
  InstagramNodeIcon, 
  MailNodeIcon, 
  PhoneNodeIcon, 
  MapPinNodeIcon, 
  ExternalLinkNodeIcon 
} from '@/components/ui/custom-icons';
import CoadLogo from '@/components/ui/coad-logo';

const Footer = () => {
  const footerLinks = {
    certifications: [
      { label: 'ADC Track', href: '#adc-track' },
      { label: 'ACOS Track', href: '#acos-track' },
      { label: 'Compare Tracks', href: '#pricing' },
      { label: 'All Modules', href: '#modules' },
      { label: 'Corporate Training', href: '#pricing' },
    ],
    resources: [
      { label: 'Help Center', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Webinars', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    compliance: [
      { label: 'EU AI Act', href: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689', external: true },
      { label: 'ESG 2015 Standards', href: 'https://www.iso.org/standard/63787.html', external: true },
      { label: 'Blockchain Verification', href: '#benefits' },
      { label: 'Accreditation', href: '#' },
    ],
    company: [
      { label: 'About COAD', href: '#about' },
      { label: 'Our Mission', href: '#about' },
      { label: 'Team', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact Us', href: '#contact' },
    ],
    legal: [
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Refund Policy', href: '#' },
      { label: 'GDPR Compliance', href: '#' },
    ],
  };

  const socialLinks = [
    { Icon: LinkedInNodeIcon, href: 'https://linkedin.com/company/coad', label: 'LinkedIn' },
    { Icon: TwitterNodeIcon, href: 'https://twitter.com/coad_ai', label: 'Twitter' },
    { Icon: FacebookNodeIcon, href: 'https://facebook.com/coad.ai', label: 'Facebook' },
    { Icon: InstagramNodeIcon, href: 'https://instagram.com/coad.ai', label: 'Instagram' },
  ];

  return (
    <footer className="bg-navy text-gray-100" id="contact">
      {/* Main Footer */}
      <div className="container-coad section-padding-sm">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo & Contact */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <CoadLogo size="md" textClassName="text-gray-50" />
            </Link>
            
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPinNodeIcon className="w-4 h-4 mt-0.5 shrink-0" />
                <span>European Union</span>
              </div>
              <div className="flex items-center gap-2">
                <MailNodeIcon className="w-4 h-4 shrink-0" />
                <a href="mailto:contact@coad.ai" className="hover:text-gray-50 transition-colors">
                  contact@coad.ai
                </a>
              </div>
              <div className="flex items-center gap-2">
                <PhoneNodeIcon className="w-4 h-4 shrink-0" />
                <a href="tel:+352621815753" className="hover:text-gray-50 transition-colors">
                  +352 621 815 753
                </a>
              </div>
            </div>
            
            {/* VAT Note */}
            <p className="mt-4 text-xs text-gray-500">
              All prices VAT-inclusive
            </p>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="font-semibold text-gray-50 mb-4">Certifications</h4>
            <ul className="space-y-2">
              {footerLinks.certifications.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-gray-50 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-50 mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-gray-50 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-50 mb-4">Compliance</h4>
            <ul className="space-y-2">
              {footerLinks.compliance.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-gray-400 hover:text-gray-50 transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLinkNodeIcon className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-50 mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-gray-50 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-50 mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-gray-50 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-600/30" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2025 COAD. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-600/20 flex items-center justify-center text-gray-400 hover:text-gray-50 hover:bg-primary/20 transition-all"
                aria-label={social.label}
              >
                <social.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-50 transition-colors">Terms</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-50 transition-colors">Privacy</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-50 transition-colors">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;