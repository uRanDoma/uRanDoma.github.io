document.addEventListener("DOMContentLoaded", () => {

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

  // --- Join Hydra ---
  const purpleBtn = document.querySelector('.btn.purple');
  if (purpleBtn) {
    purpleBtn.addEventListener('click', (event) => {
      event.preventDefault();
    });
  }
});

document.getElementById("back-btn").addEventListener("click", () => {
  window.history.back();
});
