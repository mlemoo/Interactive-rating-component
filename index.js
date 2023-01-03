const mainContainer = document.querySelector(".main__container");
const thankYouState = document.querySelector(".thank__you__state");
const submitButton = document.getElementById("submit");
const submitAgain = document.getElementById("submitAgain")
const Rating = document.getElementById("rating");
const numbers = document.querySelectorAll(".button");



submitButton.addEventListener("click", () => {
 thankYouState.classList.remove("hidden");
 mainContainer.style.display = "none";
})

submitAgain.addEventListener("click", () => {
  thankYouState.classList.add("hidden");
  mainContainer.style.display = "block";
 })

 numbers.forEach((number) => {
  number.addEventListener(("click"), () =>{

    Rating.innerHTML = number.innerHTML;
  })
 })