const modal = document.getElementById("modal");
  const buttons = document.querySelectorAll(".trans_200");
  const closeBtn = document.querySelector(".modal-close");
  const form = document.getElementById("modalForm");

  const openButtons = Array.from(buttons).filter(btn =>
    btn.textContent.trim().toLowerCase().includes("дізнатися більше")
  );

  openButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.classList.remove("active");
    form.reset();
  });