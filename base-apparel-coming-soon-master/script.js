window.onload=function(){

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



}