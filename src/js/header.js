/**
 * ============================================
 * Header Mega Menu Logic
 * ============================================
 */

(function () {
  'use strict';

  const trigger = document.getElementById('mega-menu-trigger');
  const megaMenu = document.getElementById('mega-menu');

  if (!trigger || !megaMenu) return;

  function toggleMenu(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const isActive = megaMenu.classList.contains('is-active');
    const navItem = trigger.closest('.nav__item');

    if (isActive) {
      // Close
      megaMenu.classList.remove('is-active');
      if (navItem) navItem.classList.remove('is-active');
      trigger.setAttribute('aria-expanded', 'false');
    } else {
      // Open
      megaMenu.classList.add('is-active');
      if (navItem) navItem.classList.add('is-active');
      trigger.setAttribute('aria-expanded', 'true');
    }
  }

  function closeMenu() {
    const navItem = trigger.closest('.nav__item');
    megaMenu.classList.remove('is-active');
    if (navItem) navItem.classList.remove('is-active');
    trigger.setAttribute('aria-expanded', 'false');
  }

  // Toggle on click
  trigger.addEventListener('click', toggleMenu);

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!megaMenu.contains(e.target) && !trigger.contains(e.target)) {
      if (megaMenu.classList.contains('is-active')) {
        closeMenu();
      }
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && megaMenu.classList.contains('is-active')) {
      closeMenu();
    }
  });
})();
