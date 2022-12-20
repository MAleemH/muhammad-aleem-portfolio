const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');
const intro = document.querySelector('.introduction');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('active');
  intro.classList.toggle('active');
});
document.querySelectorAll('.nav-options').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  body.classList.remove('active');
  intro.classList.remove('active');
}));


