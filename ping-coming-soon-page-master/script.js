const form = document.querySelector(".form");
const email = document.getElementById("email")

form.addEventListener('submit', submitEmail);


function submitEmail (event) {
    event.preventDefault();
    let emailVal = email.value;
    if(!validateEmail(emailVal)) {
        form.classList.add("error");
      } else {
        form.classList.remove("error");
      }

};

email.addEventListener("click", () => {
        form.classList.remove('error');
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }