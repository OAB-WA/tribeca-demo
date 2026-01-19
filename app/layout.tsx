import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

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
    <html lang="en">
      <body>
        {children}
        {/* Load jQuery and Bootstrap first */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        {/* Load other scripts */}
        <Script src="/js/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/js/swiper.js" strategy="lazyOnload" />
        <Script src="/js/loader.js" strategy="lazyOnload" />
        <Script src="/js/header.js" strategy="lazyOnload" />
        <Script src="/js/footer.js" strategy="lazyOnload" />
        <Script src="/js/custom.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
