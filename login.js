const container = document.querySelector(".container")
const SignupHeader = document.querySelector(".Signup header")
const loginHeader = document.querySelector(".login header")
console.log(SignupHeader)

loginHeader.addEventListener("click", () => {
    container.classList.add("active")

})

SignupHeader.addEventListener("click", () => {
    container.classList.remove("active")

})


