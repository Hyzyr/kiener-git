// ============================================
// Main JavaScript
// ============================================

console.log('SCSS Template loaded successfully!');

// ============================================
// Hamburger Menu Toggle
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.header__hamburger');
  
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
});
