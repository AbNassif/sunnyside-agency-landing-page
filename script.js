let toggle = document.getElementsByClassName("toggle")[0];
let navLinks = document.getElementsByClassName("navLinks")[0];

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("activated");
})

let socialMedia = document.getElementsByClassName("smLinks");

console.log(socialMedia)