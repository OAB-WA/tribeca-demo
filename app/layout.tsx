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
      </head>
      <body>
        {children}
        
        {/* Performance Optimization: Bootstrap only - jQuery and Owl Carousel removed! (130KB savings) */}
        <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        
        {/* Performance Optimization: WOW.js for animations */}
        <Script src="/js/wow.min.js" strategy="lazyOnload" />
        
        {/* Performance Optimization: Counter animation (vanilla JS - no jQuery) - uses Intersection Observer for better performance */}
        <Script id="counter-script" strategy="lazyOnload">
          {`
            function initCounters() {
              if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
                setTimeout(initCounters, 100);
                return;
              }
              
              const countElements = document.querySelectorAll(".count");
              if (countElements.length === 0) return;
              
              const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting && !entry.target.dataset.animated) {
                    entry.target.dataset.animated = 'true';
                    let startnumber = 0;
                    const target = parseInt(entry.target.dataset.number);
                    const intervalId = setInterval(function() {
                      startnumber++;
                      entry.target.innerHTML = startnumber;
                      if (startnumber >= target) {
                        clearInterval(intervalId);
                      }
                    }, 50);
                    observer.unobserve(entry.target);
                  }
                });
              }, { threshold: 0.5, rootMargin: '50px' });
              
              countElements.forEach((item) => {
                observer.observe(item);
              });
            }
            
            if (typeof window !== 'undefined') {
              if (document.readyState === 'complete') {
                initCounters();
              } else {
                window.addEventListener('load', initCounters);
              }
            }
          `}
        </Script>
        
        {/* Performance Optimization: WOW.js initialization */}
        <Script id="wow-init" strategy="lazyOnload">
          {`
            function initWOW() {
              if (typeof window !== 'undefined' && typeof WOW !== 'undefined') {
                new WOW({
                  boxClass: 'wow',
                  animateClass: 'animated',
                  offset: 0,
                  mobile: true,
                  live: true
                }).init();
              } else {
                setTimeout(initWOW, 100);
              }
            }
            initWOW();
          `}
        </Script>
      </body>
    </html>
  )
}
