import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { dmSans, fontAwesomeSolid, fontAwesomeBrands, fontAwesomeRegular } from '@/lib/fonts'

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
    <html lang="en" className={`${dmSans.variable} ${fontAwesomeSolid.variable} ${fontAwesomeBrands.variable} ${fontAwesomeRegular.variable}`}>
      <head>
        {/* Performance Optimization: Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        
        {/* Performance Optimization: Preload critical hero image for LCP improvement */}
        <link rel="preload" as="image" href="/img/slider-01.jpg" fetchPriority="high" />
        
        {/* Performance Optimization: Preload Font Awesome fonts for faster rendering */}
        <link rel="preload" as="font" type="font/woff2" href="/webfonts/fa-solid-900.woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/woff2" href="/webfonts/fa-brands-400.woff2" crossOrigin="anonymous" />
        
        {/* Performance Optimization: DNS prefetch for Google Maps (if used) */}
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body>
        {children}
        
        {/* Performance Optimization: Bootstrap only - jQuery and Owl Carousel removed! (130KB savings) */}
        <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        
        {/* Performance Optimization: WOW.js for animations */}
        <Script src="/js/wow.min.js" strategy="lazyOnload" />
        
        {/* Performance Optimization: Counter animation - extracted to external file for better caching */}
        <Script src="/js/counter.js" strategy="lazyOnload" />
        
        {/* Performance Optimization: WOW.js initialization - extracted to external file for better caching */}
        <Script src="/js/wow-init.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
