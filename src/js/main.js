// ============================================
// Main JavaScript
// ============================================

console.log('SCSS Template loaded successfully!');

// ============================================
// Hamburger Menu Toggle
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('dom loaded');
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

  // Check if Splide is loaded
  if (typeof Splide === 'undefined') {
    console.error('❌ Splide library is not loaded!');
  } else {
    console.log('✅ Splide library loaded successfully');
  }

  // Support Carousel
  const supportCarousel = document.getElementById('splide-support');
  if (supportCarousel) {
    console.log('✅ Support carousel element found');

    if (typeof Splide !== 'undefined') {
      const supportSplide = new Splide(supportCarousel, {
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
      });

      supportSplide.mount();
      console.log('✅ Support Carousel Mounted');
    }
  } else {
    console.error('❌ Support carousel element not found');
  }
 

  // New Products Carousel
  const productsNewCarousel = document.getElementById('splide-products-new');
  if (productsNewCarousel) {
    console.log('✅ New products carousel element found');

    if (typeof Splide !== 'undefined') {
      const productsNewSplide = new Splide(productsNewCarousel, {
        type: 'loop',
        perPage: 5,
        perMove: 1,
        gap: '1.5rem',
        pagination: false,
        arrows: true,
        breakpoints: {
          1280: {
            perPage: 4,
          },
          1024: {
            perPage: 3,
          },
          768: {
            perPage: 2,
          },
          480: {
            perPage: 1,
          },
        },
      });

      productsNewSplide.mount();
      console.log('✅ New Products Carousel Mounted');
    }
  } else {
    console.error('❌ New products carousel element not found');
  }

  // Trusted Products Carousel
  const productsTrustedCarousel = document.getElementById(
    'splide-products-trusted',
  );
  if (productsTrustedCarousel) {
    console.log('✅ Trusted products carousel element found');

    if (typeof Splide !== 'undefined') {
      const productsTrustedSplide = new Splide(productsTrustedCarousel, {
        type: 'loop',
        perPage: 5,
        perMove: 1,
        gap: '1.5rem',
        pagination: false,
        arrows: true,
        breakpoints: {
          1280: {
            perPage: 4,
          },
          1024: {
            perPage: 3,
          },
          768: {
            perPage: 2,
          },
          480: {
            perPage: 1,
          },
        },
      });

      productsTrustedSplide.mount();
      console.log('✅ Trusted Products Carousel Mounted');
    }
  } else {
    console.error('❌ Trusted products carousel element not found');
  }
});
