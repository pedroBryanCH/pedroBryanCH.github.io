const menuMobile = document.getElementById("main-menu__mobile"),
      menu = document.getElementById("menu"),
      menuIcon = document.getElementById("main-menu__icono-mobile");

menuMobile.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  menuIcon.classList.toggle("close-menu");
});