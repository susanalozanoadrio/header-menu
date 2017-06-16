var button = document.querySelector(".btnOpenMenu");

function myToggle() {
  var list = document.querySelector(".menu-mobile");
  if (list.style.display === "none" || list.style.display === "") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }

}
button.addEventListener("click", myToggle);
