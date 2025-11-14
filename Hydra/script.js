document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

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

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (nav.classList.contains('open')) closeMenu(); else openMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !burger.contains(e.target)) {
      closeMenu();
    }
  });

  // --- Модальне вікно ---
  const modal = document.getElementById("modal");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.querySelector(".close");

  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});
