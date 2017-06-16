var button = document.querySelector(".btnOpenMenu");

function myToggle() {
  var mobileMenu = document.querySelector(".menu-mobile");
  mobileMenu.classList.toggle("open-menu-mobile");
}
button.addEventListener("click", myToggle);
