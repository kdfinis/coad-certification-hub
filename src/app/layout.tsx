import type { Metadata } from 'next'
import './globals.css'
import CookieConsent from '@/components/lms/CookieConsent'

export const metadata: Metadata = {
  title: 'COAD - AI Competency & Oversight Certification',
  description: 'Earn recognized AI certifications that prove your skills through rigorous testing and ESG 2015-aligned standards.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
