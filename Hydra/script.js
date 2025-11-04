document.addEventListener("DOMContentLoaded", () => {
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('open'); 
  burger.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

  burger.classList.toggle('active');
  document.body.classList.toggle('no-scroll');

  const openMenu = () => {
    nav.classList.add('open');
    burger.classList.add('active');
    document.body.classList.add('no-scroll');
  };
  const closeMenu = () => {
    nav.classList.remove('open');
    burger.classList.remove('active');
    document.body.classList.remove('no-scroll');
  };

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});
  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (nav.classList.contains('open')) closeMenu(); else openMenu();
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !burger.contains(e.target)) {
      closeMenu();
    }
  });
});

document.querySelector('.btn.purple').addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = './build-your-world/index.html';
});
