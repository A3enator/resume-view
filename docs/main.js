// main.js
// Scroll-triggered text animations for headings, paragraphs, and list items

document.addEventListener('DOMContentLoaded', () => {
  // Elements to animate
  const animatedTextSelectors = 'h1, h2, p, li';
  const animatedTexts = document.querySelectorAll(animatedTextSelectors);

  // Add initial class for animation
  animatedTexts.forEach(el => {
    el.classList.add('scroll-animate-init');
  });

  // IntersectionObserver for scroll animations
  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-animate-active');
      } else {
        entry.target.classList.remove('scroll-animate-active');
      }
    });
  }, { threshold: 0.15 });

  animatedTexts.forEach(el => {
    textObserver.observe(el);
  });
}); 