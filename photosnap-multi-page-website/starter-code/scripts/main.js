// Hamburger menu ------------

let hamburger = document.querySelector('.hamburger');
let closeButton = document.querySelector('.close');
let navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    hamburger.style.display = "none";
    closeButton.style.display = "block";
    navbar.classList.add("navbar-visible");
})

closeButton.addEventListener('click', () => {
    hamburger.style.display = "block";
    closeButton.style.display = "none";
    navbar.classList.remove("navbar-visible");
})

// -----------------

// Pricing Toggle --------------

let toggle = document.getElementById('switch');
let monthlyLabel = document.querySelector('.monthly');
let yearlyLabel = document.querySelector('.yearly');
let dateLabels = document.querySelectorAll('.date');
let basicPrice = document.querySelector('.basic-price');
let proPrice = document.querySelector('.pro-price');
let businessPrice = document.querySelector('.business-price');

toggle.addEventListener('change', () => {
    if (event.target.checked) {
        monthlyLabel.style.color = "#dfdfdf";
        yearlyLabel.style.color = "#000000";
        basicPrice.innerHTML = "$190.00";
        proPrice.innerHTML = "$390.00";
        businessPrice.innerHTML = "$990.00";
        dateLabels.forEach((date) => {
            date.innerHTML = "per year"
        })
    } else {
        yearlyLabel.style.color = "#dfdfdf";
        monthlyLabel.style.color = "#000000";
        basicPrice.innerHTML = "$19.00";
        proPrice.innerHTML = "$39.00";
        businessPrice.innerHTML = "$99.00";
        dateLabels.forEach((date) => {
            date.innerHTML = "per month"
        })
    }
});