/**
 * ============================================
 * Header Navigation & Scroll Behavior
 * ============================================
 * All header-related functionality:
 * - Sticky header with scroll animations
 * - Mobile menu drawer
 * - Logo variant handling
 */

(function () {
  'use strict';

  // ============================================
  // Mobile Menu
  // ============================================
  const hamburger = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');

  function openMobileMenu() {
    if (mobileMenu && mobileMenuBackdrop) {
      mobileMenu.classList.add('is-open');
      mobileMenuBackdrop.classList.add('is-open');
      hamburger?.classList.add('is-active');
      hamburger?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileMenu && mobileMenuBackdrop) {
      mobileMenu.classList.remove('is-open');
      mobileMenuBackdrop.classList.remove('is-open');
      hamburger?.classList.remove('is-active');
      hamburger?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  // Hamburger click
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu?.classList.contains('is-open');
      isOpen ? closeMobileMenu() : openMobileMenu();
    });
  }

  // Close button click
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  // Backdrop click
  if (mobileMenuBackdrop) {
    mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
  }

  // ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu?.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });

  // ============================================
  // Sticky Header Scroll Behavior
  // ============================================
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  const SCROLL_THRESHOLD = 10; // Min scroll distance to trigger show/hide
  const TOP_THRESHOLD = 350; // Distance from top for final at-top state
  const FADE_THRESHOLD = TOP_THRESHOLD * 2; // Distance to start fade animation (700px)

  function updateHeaderState() {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;

    // At top of page
    if (currentScrollY < TOP_THRESHOLD) {
      header.classList.add('header--at-top');
      header.classList.remove(
        'header--hidden',
        'header--visible',
        'header--scrolled',
      );

      if (header.classList.contains('header--has-scrolled')) {
        header.classList.remove('header--has-scrolled');
      }

      // Restore original variant classes
      if (header.hasAttribute('data-original-white')) {
        header.classList.add('header--white');
      }
      if (header.hasAttribute('data-original-dark')) {
        header.classList.add('header--dark');
      }
    }
    // Between TOP_THRESHOLD and FADE_THRESHOLD - transition zone
    else if (
      currentScrollY >= TOP_THRESHOLD &&
      currentScrollY < FADE_THRESHOLD
    ) {
      header.classList.add('header--at-top');

      if (scrollDelta < 0) {
        // Scrolling up in transition zone - prepare for fade
        header.classList.add(
          'header--visible',
          'header--scrolled',
          'header--has-scrolled',
        );
        header.classList.remove('header--hidden');
      } else {
        // Scrolling down in transition zone
        header.classList.add('header--hidden', 'header--scrolled');
        header.classList.remove('header--visible', 'header--has-scrolled');
      }
    }
    // Scrolling down - hide header (past FADE_THRESHOLD)
    else if (scrollDelta > 0 && currentScrollY >= FADE_THRESHOLD) {
      header.classList.add(
        'header--hidden',
        'header--scrolled',
        'header--has-scrolled',
      );
      header.classList.remove('header--visible', 'header--at-top');

      // Store and remove white/dark variants for proper logo visibility
      if (header.classList.contains('header--white')) {
        header.setAttribute('data-original-white', 'true');
        header.classList.remove('header--white');
      }
      if (header.classList.contains('header--dark')) {
        header.setAttribute('data-original-dark', 'true');
        header.classList.remove('header--dark');
      }
    }
    // Scrolling up - show header (past FADE_THRESHOLD)
    else if (
      scrollDelta < -SCROLL_THRESHOLD &&
      currentScrollY >= FADE_THRESHOLD
    ) {
      header.classList.add(
        'header--visible',
        'header--scrolled',
        'header--has-scrolled',
      );
      header.classList.remove('header--hidden', 'header--at-top');

      // Keep variants removed when scrolled
      if (header.classList.contains('header--white')) {
        header.setAttribute('data-original-white', 'true');
        header.classList.remove('header--white');
      }
      if (header.classList.contains('header--dark')) {
        header.setAttribute('data-original-dark', 'true');
        header.classList.remove('header--dark');
      }
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateHeaderState);
      ticking = true;
    }
  }

  // Initialize
  updateHeaderState();

  // Listen to scroll
  window.addEventListener('scroll', onScroll, { passive: true });
})();
