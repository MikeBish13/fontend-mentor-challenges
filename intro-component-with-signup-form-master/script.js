const form = document.getElementById('form');
const email = document.getElementById("email");
const emailContainer = document.querySelector(".email");
const errorMessage = document.querySelector(".error-message-email");
const inputs = document.querySelectorAll("input");

// When 'submit' button is pressed, call functions to check if inputs are not empty and that password is valid
form.addEventListener('submit', submitEmail);
form.addEventListener('submit', submitForm);


// Function to check if email is valid, if not add the error message class to email container and display new error message
function submitEmail (event) {
    event.preventDefault();
    let emailVal = email.value;
    if(!validateEmail(emailVal)) {
        emailContainer.classList.add("error");
        errorMessage.innerHTML = "This does not look like an email address";
      } else {
        form.classList.remove("error");
      }

};

// Function to check that input is not blank if it has a 'required' attribute
function submitForm(event) {
     event.preventDefault();
     for (let i = 0; i < form.length; i++) {
         if (form[i].value == '' && form[i].hasAttribute('required')) {
             let parent = form[i].parentNode;
             parent.classList.add('error');
         }
     } 
 };

 // Function to remove error message from parent container of inputs when they are clicked
inputs.forEach(function(e) {
    e.addEventListener("click", () => {
        let parent = e.parentNode;
        parent.classList.remove('error');
        })
         
});
 


// Regex function to check password validity
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
