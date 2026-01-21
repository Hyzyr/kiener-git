// Toast Demo Initialization
// Adds click handlers to product cards for toast demonstrations

document.addEventListener('DOMContentLoaded', () => {
  // Find all add-to-cart buttons in the toast demo section
  const addToCartButtons = document.querySelectorAll(
    '.toast-demo .add-to-cart-btn',
  );

  addToCartButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      // Get product data from parent card
      const productCard = button.closest('.product-card--interactive');
      const productName = productCard.dataset.productName;
      const productDescription = productCard.dataset.productDescription;
      const productImage = productCard.dataset.productImage;

      // Show toast notification
      if (window.toastManager) {
        window.toastManager.show({
          message: '✓ Toegevoegd aan winkelwagen',
          image: productImage,
          description: `${productName} - ${productDescription}`,
          duration: 4000,
        });
      }
    });
  });
});
