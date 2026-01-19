import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Tribeca Plumbing, Inc.',
  description: 'Contact Tribeca Plumbing, Inc. for plumbing and HVAC services in Dallas. Call (214) 402-5454 or fill out our contact form.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
