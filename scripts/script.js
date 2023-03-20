"use strict";

let finalRating;
const ratingBtns = Array.from(document.querySelectorAll(".rating-box__rate"));
const ratingBtnsContainer = document.querySelector(".rating-box__container");
console.log(ratingBtns);

// Hover a cada rating-box item (aumentar el tamaño del background)
// Falta agregar un "mouseout" para eliminar el incremento de tamaño
ratingBtnsContainer.addEventListener("mouseover", function (event) {
  const currentBtn = event.target.closest(".icon-round-background");
  console.log(currentBtn);
  if (!currentBtn) return;

  // add helper class to change background color
  currentBtn.classList.add("icon-round-background__hover");

  // change number color
  const numberBtn = currentBtn.firstElementChild;
  numberBtn.classList.add("rating-box__hover");
});

ratingBtnsContainer.addEventListener("mouseout", function (event) {
  const currentBtn = event.target.closest(".icon-round-background");
  if (!currentBtn) return;

  // add helper class to restore background color
  currentBtn.classList.remove("icon-round-background__hover");

  // restore number color
  const numberBtn = currentBtn.firstElementChild;
  numberBtn.classList.remove("rating-box__hover");

  console.log(currentBtn);
});
// Click en un rating-box item (active: cambia de color a orange, luego queda en color gris)

// Click en submit (active: invertir colores texto y botón)
