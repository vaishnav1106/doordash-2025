window.addEventListener('scroll', () => {
  const header = document.getElementById('scrollHeader');
  if (window.scrollY > 50) {
    header.style.display = 'block';
  } else {
    header.style.display = 'none';
  }
});
