// Performance Optimization: Counter animation (vanilla JS - no jQuery) - uses Intersection Observer for better performance
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
