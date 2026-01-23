// Performance Optimization: WOW.js initialization
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
