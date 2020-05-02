const button = document.querySelector(".toggleLabel");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.toggle("dark")
  } else {
    body.classList.toggle("light");
  }
});
