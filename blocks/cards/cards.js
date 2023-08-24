import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* Change to ul, li */
  const ul = document.createElement('ul');
  ul.classList.add('carousel'); // Add a class for styling and JavaScript selection
  let currentIndex = 0;

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    li.className = 'carousel-card'; // Set a class for carousel card styling
    ul.append(li);
  });

  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);

  const cards = ul.querySelectorAll('.carousel-card');
  const cardWidth = cards[0].offsetWidth; // Assuming all cards have the same width

  function moveCarousel() {
    const offset = -currentIndex * cardWidth;
    ul.style.transform = `translateX(${offset}px)`;
  }

  // Add event listeners for carousel navigation buttons
  const prevBtn = document.createElement('button');
  prevBtn.textContent = 'Previous';
  prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    moveCarousel();
  });

  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next';
  nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, cards.length - 1);
    moveCarousel();
  });

  block.append(prevBtn);
  block.append(nextBtn);

  moveCarousel(); // Initial position
}
