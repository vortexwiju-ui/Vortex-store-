// Mobile Navbar
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
    }
    navLinks.classList.remove('active');
  });
});

// 3D Card Mouse Move Animation
const cards = document.querySelectorAll('.product-card');

cards.forEach(card => {
  const inner = card.querySelector('.card-inner');

  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = ((y / rect.height) - 0.5) * -20;
    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener('mouseleave', () => {
    inner.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  });
});