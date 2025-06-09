// https://www.youtube.com/watch?v=FNXgsTFrD7U

const navbar = document.querySelector("#navbar");
const hamburgerToggle = document.querySelector("#hamburger-toggle");

hamburgerToggle.addEventListener("click", onHamburgerClick);

function onHamburgerClick() {
    if (!navbar.classList.contains("open")) {
        navbar.classList.add("open");
        
    }
    else {
        navbar.classList.remove("open");
    }
}