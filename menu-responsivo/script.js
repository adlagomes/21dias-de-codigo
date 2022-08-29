let listMenu = document.querySelector('nav ul');
let openNav = document.querySelector('.menu-burguer i');

function displayMenu() {
  if (listMenu.classList.contains('open')) {
    listMenu.classList.remove('open');
  } else {
    listMenu.classList.add('open');
  }
}