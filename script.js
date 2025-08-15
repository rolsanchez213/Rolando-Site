
document.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  document.querySelectorAll('.parallax').forEach((img) => {
    const speed = 0.08;
    const rect = img.getBoundingClientRect();
    const offset = (rect.top + window.scrollY) * speed - scrolled * speed;
    img.style.setProperty('--offset', `${offset}px`);
  });
}, { passive: true });
