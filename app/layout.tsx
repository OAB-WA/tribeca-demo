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
        {/* Performance Optimization: Load jQuery and Bootstrap after page becomes interactive to avoid blocking render */}
        {/* Changed from beforeInteractive to afterInteractive to improve LCP and FCP */}
        <Script src="/js/jquery.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        
        {/* Performance Optimization: Lazy load non-critical scripts to reduce initial bundle size */}
        {/* These scripts are loaded after page interaction to improve initial load time */}
        <Script src="/js/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/js/swiper.js" strategy="lazyOnload" />
        <Script src="/js/loader.js" strategy="lazyOnload" />
        <Script src="/js/header.js" strategy="lazyOnload" />
        <Script src="/js/footer.js" strategy="lazyOnload" />
        <Script src="/js/custom.js" strategy="lazyOnload" />
        
        {/* Performance Optimization: Initialize Owl Carousel after dependencies load */}
        {/* This ensures jQuery and Owl Carousel are available before initialization */}
        <Script id="owl-carousel-init" strategy="lazyOnload">
          {`
            // Wait for jQuery and Owl Carousel to be available
            function initOwlCarousels() {
              if (typeof window !== 'undefined' && typeof jQuery !== 'undefined' && jQuery.fn.owlCarousel) {
                jQuery(document).ready(function($) {
                  $('.owl-carousel-1').owlCarousel({
                    items: 1,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    nav: false,
                    dots: false
                  });
                  $('.owl-carousel-2').owlCarousel({
                    items: 1,
                    loop: true,
                    autoplay: true,
                    nav: false,
                    dots: true
                  });
                  $('.owl-carousel-3').owlCarousel({
                    items: 3,
                    loop: true,
                    autoplay: true,
                    nav: false,
                    dots: false,
                    responsive: {
                      0: { items: 1 },
                      768: { items: 2 },
                      992: { items: 3 }
                    }
                  });
                });
              } else {
                // Retry if dependencies aren't ready yet
                setTimeout(initOwlCarousels, 100);
              }
            }
            initOwlCarousels();
          `}
        </Script>
        
        {/* Performance Optimization: Counter animation script - loaded once globally */}
        <Script id="counter-script" strategy="lazyOnload">
          {`
            // Initialize counter animations when page is ready
            function initCounters() {
              if (typeof window !== 'undefined' && document.readyState === 'complete') {
                let count = document.querySelectorAll(".count");
                let arr = Array.from(count);
                arr.map(function (item) {
                  let startnumber = 0;
                  function counterup() {
                    startnumber++;
                    item.innerHTML = startnumber;
                    if (startnumber == item.dataset.number) {
                      clearInterval(stop);
                    }
                  }
                  let stop = setInterval(function () {
                    counterup();
                  }, 50);
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
      </body>
    </html>
  )
}
