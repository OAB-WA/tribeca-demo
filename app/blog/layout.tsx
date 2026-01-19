import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Tribeca Plumbing, Inc.',
  description: 'Latest plumbing and HVAC tips, guides, and news from Tribeca Plumbing, Inc. serving Dallas/Ft. Worth',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
