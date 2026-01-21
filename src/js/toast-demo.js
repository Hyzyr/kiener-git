// Toast Demo Initialization
// Shows toast notifications when clicking on any product card

document.addEventListener('DOMContentLoaded', () => {
  // Find all product cards on the page
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      // Don't interfere with link navigation
      if (e.target.tagName === 'A') {
        return;
      }

      e.preventDefault();

      // Extract product info from the card
      const productImage = card.querySelector('.product-card__image img');
      const productInfo = card.querySelector('.product-card__info-group');

      if (!productInfo || !window.toastManager) {
        return;
      }

      // Get product name and category
      const strongElements = productInfo.querySelectorAll('strong');
      const spanElement = productInfo.querySelector('span');

      const productName = strongElements[0]?.textContent || 'Product';
      const productCategory = spanElement?.textContent || '';
      const productPrice = strongElements[1]?.textContent || '';

      // Get image source
      const imageSrc = productImage?.src || '';

      // Show toast notification
      window.toastManager.show({
        message: '✓ Toegevoegd aan winkelwagen',
        image: imageSrc,
        description: `${productName} - ${productCategory} ${productPrice}`,
        duration: 4000,
      });
    });
  });
});
