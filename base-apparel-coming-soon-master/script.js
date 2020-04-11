window.onload=function(){


const form = document.getElementById("form");
const email = document.querySelector(".email")

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let emailVal = email.value;
    if(!validateEmail(emailVal)) {
        form.classList.add("error");
      } else {
        form.classList.remove("error");
      }

});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}



}