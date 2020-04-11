window.onload=function(){

<<<<<<< HEAD

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

=======
const email = document.querySelector(".email");
const errorMessage = document.querySelector(".error-message");

email.addEventListener("input", function (event) {
    if(email.validity.valueMissing) {
        // If the field is empty
        // display the following error message.
        errorMessage.textContent = 'Please provide a valid email address.';
      } else if(email.validity.typeMismatch) {
        // If the field doesn't contain an email address
        // display the following error message.
        errorMessage.textContent = 'Please provide a valid email address.';
      } else if(email.validity.tooShort) {
        // If the data is too short
        // display the following error message.
        errorMessage.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
      }
});

>>>>>>> 42fc362b4523c667821cb7a6caf77c2bae2513cd


}