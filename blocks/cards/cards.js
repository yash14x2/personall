const body = document.body;

// Create Carousel Container
const carouselContainer = document.createElement('div');
carouselContainer.id = 'carousel';
carouselContainer.classList.add('carousel'); // Add carousel class for styling
body.appendChild(carouselContainer);

// Create Previous Button
const prevButton = document.createElement('button');
prevButton.id = 'prevBtn';
prevButton.textContent = 'Previous';
body.appendChild(prevButton);

// Create Next Button
const nextButton = document.createElement('button');
nextButton.id = 'nextBtn';
nextButton.textContent = 'Next';
body.appendChild(nextButton);

const items = [
  { text: 'Item 1' },
  { text: 'Item 2' },
  { text: 'Item 3' },
  // Add more items as needed
];

let currentItem = 0;

function createCarouselItem(item) {
  const itemElement = document.createElement('div');
  itemElement.classList.add('carousel-item');
  itemElement.textContent = item.text;
  return itemElement;
}

function updateCarousel() {
  carouselContainer.innerHTML = '';

  for (let i = 0; i < items.length; i++) {
    const item = createCarouselItem(items[i]);
    carouselContainer.appendChild(item);
  }

 carouselContainer.style.width = `${items.length * 100}%`;
  carouselContainer.style.transition = 'transform 0.3s ease-in-out'; // Add transition property
  carouselContainer.style.transform = `translateX(-${currentItem * (100 / items.length)}%)`;

}

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
const body = document.body;

// Create Carousel Container
const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
body.appendChild(container);

// Create Previous Button
const carouselContainer = document.createElement('div');
carouselContainer.id = 'carousel';
carouselContainer.classList.add('carousel'); // Add carousel class for styling
container.appendChild(carouselContainer);

// Create Next Button
const prevButton = document.createElement('button');
prevButton.id = 'prevBtn';
prevButton.textContent = 'Previous';
container.appendChild(prevButton);

const nextButton = document.createElement('button');
nextButton.id = 'nextBtn';
nextButton.textContent = 'Next';
container.appendChild(nextButton);

const items = [
  { text: 'Item 1' },
  { text: 'Item 2' },
  { text: 'Item 3' },
  // Add more items as needed
];

let currentItem = 0;

function createCarouselItem(item) {
  const itemElement = document.createElement('div');
  itemElement.classList.add('carousel-item');
  itemElement.textContent = item.text;
  return itemElement;
}

function updateCarousel() {
  carouselContainer.innerHTML = '';

  for (let i = 0; i < items.length; i++) {
    const item = createCarouselItem(items[i]);
    carouselContainer.appendChild(item);
  }

 carouselContainer.style.width = `${items.length * 100}%`;
  carouselContainer.style.transition = 'transform 0.3s ease-in-out'; // Add transition property
  carouselContainer.style.transform = `translateX(-${currentItem * (100 / items.length)}%)`;

}

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
