document.addEventListener('DOMContentLoaded', ()=> {
  const icon_menu = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');
  icon_menu.addEventListener('click', ()=> {
    menu.classList.toggle('menu-active');    
  });
});