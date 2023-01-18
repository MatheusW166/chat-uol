const menuBtn = document.querySelector(".menu");
const asideMenu = document.querySelector("aside");

function openMenu() {
  asideMenu.classList.add("open");
}

function closeMenu(event) {
  if (!Array.from(event.target.classList).includes("aside-bg")) return;
  asideMenu.classList.remove("open");
}

asideMenu.onclick = closeMenu;
menuBtn.onclick = openMenu;

export {};
