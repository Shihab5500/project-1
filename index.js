const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", () => {
    menu.classList.remove("-translate-x-full");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.add("-translate-x-full");
  });