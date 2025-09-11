// script.js
document.addEventListener("DOMContentLoaded", () => {
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');  /* Додаємо/видаляємо клас "open", щоб відкрити/закрити меню */
  burger.classList.toggle('active'); /* Зміна бургеру на хрестик */
  document.body.classList.toggle('no-scroll'); /* Зупиняємо прокрутку сторінки, коли меню відкрите */
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
  // toggle при кліку на бургер
  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (nav.classList.contains('open')) closeMenu(); else openMenu();
  });

  // закривати меню при кліку на будь-яке посилання (перехід у секцію)
  links.forEach(link => {
    link.addEventListener('click', () => {
      // даємо браузеру перейти по якорю, але одразу закриваємо меню
      closeMenu();
    });
  });

  // закрити ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // закрити при кліку поза меню (overlay)
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !burger.contains(e.target)) {
      closeMenu();
    }
  });
});
