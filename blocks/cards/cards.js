const body = document.body;

// Create Carousel Container
const container = document.createElement('div');
container.style.overflow = 'hidden'; // Add overflow hidden to prevent items from overflowing
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
body.appendChild(container);

// Create Carousel Wrapper
const carouselWrapper = document.createElement('div'); // Add an additional wrapper
carouselWrapper.style.overflow = 'hidden'; // Hide the overflow of the wrapper
carouselWrapper.appendChild(container); // Add the existing container to the wrapper
body.appendChild(carouselWrapper); // Append the wrapper to the body

// ... (rest of your code)

function updateCarousel() {
  // ... (existing code)

  carouselContainer.style.width = `${items.length * 100}%`;
  carouselContainer.style.transition = 'transform 0.3s ease-in-out';
  carouselContainer.style.transform = `translateX(-${currentItem * (100 / items.length)}%)`;
}

// ... (rest of your code)

// Modify your event listeners to also update the transform of the carouselWrapper
prevButton.addEventListener('click', () => {
  if (currentItem > 0) {
    currentItem--;
    updateCarousel();
  }
});

nextButton.addEventListener('click', () => {
  if (currentItem < items.length - 1) {
    currentItem++;
    updateCarousel();
  }
});

updateCarousel();
