var hamburger = document.getElementById("hamburger");
var hamburgerClose = document.getElementById("hamburger-close");
var navBar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    hamburger.style.display = "none";
    hamburgerClose.style.display = "block";
    navBar.classList.toggle("navbar-visible")
});

hamburgerClose.addEventListener('click', () => {
    hamburger.style.display = "block";
    hamburgerClose.style.display = "none";
    navBar.classList.toggle("navbar-visible")
});