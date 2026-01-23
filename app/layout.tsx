import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { dmSans } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'Tribeca Plumbing, Inc. - Dallas Plumbing & HVAC Experts',
  description: 'Licensed plumbing, HVAC, and electrical services in Dallas/Ft. Worth. 24/7 emergency service. Call (214) 402-5454',
  icons: {
    icon: '/img/tribeca-logo.png',
    shortcut: '/img/tribeca-logo.png',
    apple: '/img/tribeca-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        {/* Bootstrap Icons: load as separate CSS request (avoid @import in main bundle) */}
        <link rel="preload" as="style" href="/css/bootstrap-icons.min.css" />
        <link rel="stylesheet" href="/css/bootstrap-icons.min.css" />

        {/* Performance Optimization: Preload critical hero image for LCP improvement */}
        <link rel="preload" as="image" href="/img/slider-01.jpg" fetchPriority="high" />
        
        {/* Performance Optimization: DNS prefetch for Google Maps (if used) */}
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body>
        {children}
        
        {/* Performance Optimization: Bootstrap only - jQuery and Owl Carousel removed! (130KB savings) */}
        <Script src="/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
