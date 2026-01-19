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
        
        {/* Performance Optimization: Bootstrap only - jQuery and Owl Carousel removed! (130KB savings) */}
        <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        
        {/* Performance Optimization: WOW.js for animations */}
        <Script src="/js/wow.min.js" strategy="lazyOnload" />
        
        {/* Performance Optimization: Counter animation (vanilla JS - no jQuery) */}
        <Script id="counter-script" strategy="lazyOnload">
          {`
            function initCounters() {
              if (typeof window !== 'undefined' && document.readyState === 'complete') {
                const countElements = document.querySelectorAll(".count");
                countElements.forEach(function (item) {
                  let startnumber = 0;
                  const target = parseInt(item.dataset.number);
                  function counterup() {
                    startnumber++;
                    item.innerHTML = startnumber;
                    if (startnumber >= target) {
                      clearInterval(intervalId);
                    }
                  }
                  const intervalId = setInterval(counterup, 50);
                });
              } else {
                setTimeout(initCounters, 100);
              }
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
