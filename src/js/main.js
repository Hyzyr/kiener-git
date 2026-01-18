// ============================================
// Main JavaScript
// ============================================

console.log('SCSS Template loaded successfully!');

// ============================================
// Hamburger Menu Toggle
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('menu-toggle');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isActive = hamburger.classList.contains('is-active');

      // Toggle active class
      hamburger.classList.toggle('is-active');

      // Update aria-expanded for accessibility
      hamburger.setAttribute('aria-expanded', !isActive);

      // You can add mobile menu show/hide logic here
      // const mobileMenu = document.querySelector('.header__nav');
      // mobileMenu.classList.toggle('is-open');
    });
  }
  
  // ============================================
  // Splide Carousel Initialization
  // ============================================
  const supportSplide = document.getElementById('support-splide');
  
  if (supportSplide && typeof Splide !== 'undefined') {
    new Splide('#support-splide', {
      type: 'loop',
      perPage: 2,
      perMove: 1,
      gap: '1.5rem',
      padding: { left: 0, right: '10%' },
      breakpoints: {
        1024: {
          perPage: 1,
          padding: { left: 0, right: '5%' },
        },
        768: {
          perPage: 1,
          gap: '1rem',
          padding: 0,
        },
      },
    }).mount();
  }
  
  // ============================================
  // Personal Service Carousel Initialization
  // ============================================
  const serviceSplide = document.getElementById('service-splide');
  
  if (serviceSplide && typeof Splide !== 'undefined') {
    new Splide('#service-splide', {
      type: 'loop',
      perPage: 1,
      perMove: 1,
      gap: '2rem',
      padding: 0,
      arrows: true,
      pagination: false,
      autoplay: false,
    }).mount();
  }
});
