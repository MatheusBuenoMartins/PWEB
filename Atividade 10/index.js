
document.addEventListener("DOMContentLoaded", function() {
  const closed = "img/fechada.jpg"
const open = "img/aberta.jpg"
const broken = "img/quebrada.jpg"

const img = document.querySelector(".window-wrapper__img")

img.src = closed;

img.addEventListener("mouseover", () => {

    img.src = open
})

img.addEventListener("mouseout", () => {

    img.src = closed
})

img.addEventListener("click", () => {
    img.src = broken
})
});

