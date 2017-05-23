var buttom = document.querySelector(".btnOpenMenu")

function myToggle() {
var list = document.getElementById("myMenuMobile");
    if (list.style.display === 'none') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }

}
button.addEvenListener('click',myToggle);
