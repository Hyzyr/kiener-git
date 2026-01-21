/**
 * Toast Notification System
 * Displays animated toast messages for user actions like adding items to cart
 */

class ToastManager {
  constructor() {
    this.container = null;
    this.init();
  }

  init() {
    // Create toast container if it doesn't exist
    if (!document.querySelector('.toast-container')) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    } else {
      this.container = document.querySelector('.toast-container');
    }
  }

  /**
   * Show a toast notification
   * @param {Object} options - Toast configuration
   * @param {string} options.message - Main message text
   * @param {string} options.image - Product image URL
   * @param {string} options.description - Product description
   * @param {number} options.duration - Duration in milliseconds (default: 3500)
   */
  show({
    message = 'Added to cart',
    image = '',
    description = '',
    duration = 3500,
  }) {
    const toast = document.createElement('div');
    toast.className = 'toast';

    toast.innerHTML = `
      <div class="toast__content">
        ${
          image
            ? `<div class="toast__image">
          <img src="${image}" alt="Product">
        </div>`
            : ''
        }
        <div class="toast__text">
          <div class="toast__message">${message}</div>
          ${description ? `<div class="toast__description">${description}</div>` : ''}
        </div>
        <button class="toast__close" aria-label="Close notification">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    `;

    this.container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('toast--show');
    });

    // Close button handler
    const closeBtn = toast.querySelector('.toast__close');
    closeBtn.addEventListener('click', () => this.hide(toast));

    // Auto-hide after duration
    const timeout = setTimeout(() => {
      this.hide(toast);
    }, duration);

    // Clear timeout if manually closed
    toast.dataset.timeout = timeout;
  }

  hide(toast) {
    if (toast.dataset.timeout) {
      clearTimeout(parseInt(toast.dataset.timeout));
    }

    toast.classList.remove('toast--show');
    toast.classList.add('toast--hide');

    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }
}

// Create global instance
window.toastManager = new ToastManager();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ToastManager;
}
