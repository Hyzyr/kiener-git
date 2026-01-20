document.addEventListener('DOMContentLoaded', function () {
  // Main Image Elements
  const mainImage = document.getElementById('main-image');
  const prevBtn = document.querySelector(
    '.pdp-hero__gallery-nav button:first-child',
  );
  const nextBtn = document.querySelector(
    '.pdp-hero__gallery-nav button:last-child',
  );
  let currentIndex = 0;

  // Track if load more has been triggered
  let loadMoreTriggered = false;

  // Splide Slider Initialization
  const thumbsSliderElement = document.getElementById('pdp-thumbs-splide');
  let thumbsSplide;

  // Helper function to initialize/reinitialize Splide
  function initThumbsSlider(targetIndex) {
    if (!thumbsSliderElement || typeof Splide === 'undefined') return;

    thumbsSplide = new Splide(thumbsSliderElement, {
      pagination: false,
      arrows: false,
      drag: 'free',
      focus: 0,
      perPage: 4,
      gap: '4px',
      autoWidth: true,
      breakpoints: {
        768: {
          perPage: 3,
        },
      },
    }).mount();

    // Navigate to target index if specified
    if (typeof targetIndex === 'number') {
      thumbsSplide.go(targetIndex);
    }

    // Bind events
    thumbsSplide.on('click', (slide) => {
      if (slide.slide.classList.contains('js-thumb-more')) {
        if (!loadMoreTriggered) {
          loadMoreTriggered = true;
          handleLoadMore(slide.index);
        }
        return;
      }
      updateImage(slide.index, slide.slide);
    });

    thumbsSplide.on('active', (slide) => {
      if (slide.slide.classList.contains('js-thumb-more')) {
        if (!loadMoreTriggered) {
          loadMoreTriggered = true;
          handleLoadMore(slide.index);
        }
      }
    });
  }

  // Initial Splide setup
  if (thumbsSliderElement && typeof Splide !== 'undefined') {
    initThumbsSlider();
    updateButtonStates(); // Set initial button states
  }

  // Fallback / Helper function to update main image
  function updateImage(index, slideElement) {
    if (!slideElement && thumbsSplide) {
      slideElement = thumbsSplide.Components.Elements.slides[index];
    }

    // Update Index
    currentIndex = index;

    if (slideElement) {
      const newSrc = slideElement.getAttribute('data-src');
      if (newSrc && mainImage) {
        // Fade effect
        mainImage.style.opacity = '0.5';
        setTimeout(() => {
          mainImage.src = newSrc;
          mainImage.style.opacity = '1';
        }, 150);
      }
      // Update active class
      if (thumbsSplide) {
        thumbsSplide.Components.Elements.slides.forEach((s) =>
          s.classList.remove('is-active'),
        );
        slideElement.classList.add('is-active');
      }
    }

    // Update button states
    updateButtonStates();
  }

  // Helper function to update navigation button states
  function updateButtonStates() {
    if (!thumbsSplide || !prevBtn || !nextBtn) return;

    const totalSlides = thumbsSplide.Components.Elements.slides.length;

    // Disable prev button on first slide
    if (currentIndex <= 0) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }

    // Disable next button on last slide
    if (currentIndex >= totalSlides - 1) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }
  }

  // Handle "Load More" Click
  function handleLoadMore(moreIndex) {
    console.log('handleLoadMore', moreIndex);
    if (!thumbsSplide) return;
    console.log('handleLoadMore 2', moreIndex);

    // Destroy current Splide instance
    thumbsSplide.destroy();

    const allSlides = thumbsSliderElement.querySelectorAll('.splide__slide');
    const moreSlide = allSlides[moreIndex];

    // Transform "Load More" slide into a regular slide
    moreSlide.classList.remove('js-thumb-more');
    const span = moreSlide.querySelector('span');
    if (span) span.remove();

    // Reveal hidden slides & inject images
    allSlides.forEach((slide) => {
      if (slide.classList.contains('is-hidden')) {
        // Remove hidden state
        slide.classList.remove('is-hidden');
        slide.removeAttribute('style'); // Remove inline display:none

        // Inject Image if missing
        const ratioContainer = slide.querySelector('.ratio-image');
        if (ratioContainer && !ratioContainer.querySelector('img')) {
          const src = slide.getAttribute('data-src');
          if (src) {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Product view';
            ratioContainer.appendChild(img);
          }
        }
      }
    });

    // Reinitialize Splide and navigate to target index
    initThumbsSlider(moreIndex);

    // Update main image
    updateImage(moreIndex, allSlides[moreIndex]);
  }

  // Navigation Buttons Logic
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) {
        // Stop at first slide instead of wrapping
        newIndex = 0;
      }

      if (thumbsSplide) {
        const slide = thumbsSplide.Components.Elements.slides[newIndex];

        // Check if navigating to "Load More" slide
        if (slide.classList.contains('js-thumb-more') && !loadMoreTriggered) {
          loadMoreTriggered = true;
          handleLoadMore(newIndex);
          return;
        }

        updateImage(newIndex, slide);
        thumbsSplide.go(newIndex);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      let newIndex = currentIndex + 1;
      if (
        thumbsSplide &&
        newIndex >= thumbsSplide.Components.Elements.slides.length
      ) {
        // Stop at last slide instead of wrapping
        newIndex = thumbsSplide.Components.Elements.slides.length - 1;
      }

      if (thumbsSplide) {
        const slide = thumbsSplide.Components.Elements.slides[newIndex];

        // Check if navigating to "Load More" slide
        if (slide.classList.contains('js-thumb-more') && !loadMoreTriggered) {
          loadMoreTriggered = true;
          handleLoadMore(newIndex);
          return;
        }

        updateImage(newIndex, slide);
        thumbsSplide.go(newIndex);
      }
    });
  }

  // Variant selection (mock functionality for now)
  const variants = document.querySelectorAll('.variants__item');
  variants.forEach((variant) => {
    variant.addEventListener('click', function () {
      variants.forEach((v) => v.classList.remove('variants__item--active'));
      this.classList.add('variants__item--active');
      // Optional: Change main image based on variant if images are mapped
      const img = this.querySelector('img');
      if (img && mainImage) {
        mainImage.src = img.src;
      }
    });
  });
});
