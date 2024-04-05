const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll(".mainMenu li a");

openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    if (mainMenu.classList.contains("active")) {
      toggleMenu();
    }
  });
});

function toggleMenu() {
  mainMenu.classList.toggle("active");
}
