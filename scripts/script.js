"use strict";

const ratingCard = document.querySelector(".rating-card");
const thanksCard = document.querySelector(".thanks-card");
const ratingBtnsContainer = document.querySelector(".rating-box__container");
const ratingBtnsBackground = Array.from(
  ratingBtnsContainer.querySelectorAll(".icon-round-background")
);
const ratingBtns = Array.from(document.querySelectorAll(".rating-box__rate"));
const submitBtn = document.querySelector(".rating-card__submit");
const thanksCardRate = document.querySelector(".thanks-card__mark");

let currentRate = -1;

// Listener for change color while hover (mouseover)
ratingBtnsContainer.addEventListener("mouseover", function (event) {
  const currentBtn = event.target.closest(".icon-round-background");
  if (!currentBtn) return;

  // add helper class to change background color
  currentBtn.classList.add("icon-round-background--medium-grey-bg");

  // change number color
  const numberBtn = currentBtn.firstElementChild;
  numberBtn.classList.add("rating-box--white-text");
});

// Listener for change color while hover (mouseout)
ratingBtnsContainer.addEventListener("mouseout", function (event) {
  const currentBtn = event.target.closest(".icon-round-background");
  if (!currentBtn) return;

  // add helper class to restore background color
  currentBtn.classList.remove("icon-round-background--medium-grey-bg");

  // restore number color
  const numberBtn = currentBtn.firstElementChild;
  numberBtn.classList.remove("rating-box--white-text");
});

// Listener for 'rating-items' click event
ratingBtnsContainer.addEventListener("click", function (event) {
  const currentBtn = event.target.closest(".icon-round-background");
  const numberBtn = currentBtn.firstElementChild; // get the current 'number' (element).

  // remove helper classes from all 'rating-items' different than <<currentBtn/numberBtn>>
  // OBS: this allow to 'click' in a 'clicked rating item' and remove the helper classes
  ratingBtnsBackground.forEach((bg) => {
    if (bg != currentBtn)
      bg.classList.remove("icon-round-background--orange-bg");
  });

  ratingBtns.forEach((num) => {
    if (num != numberBtn)
      num.classList.remove("rating-box--white-text-selected");
  });

  // add helper class to submitBtn
  submitBtn.classList.add("btn--disabled");

  // add helper class to change background color
  currentBtn.classList.toggle("icon-round-background--orange-bg");

  // change 'rating item' number color
  numberBtn.classList.toggle("rating-box--white-text-selected");

  // Activate/deactivate submit btn and save current 'rate'
  if (
    ratingBtnsBackground.some((btn) =>
      btn.classList.contains("icon-round-background--orange-bg")
    )
  ) {
    submitBtn.classList.remove("btn--disabled");

    currentRate = numberBtn.textContent;
  }
});

// Listener for big button (submit) hover event [mouseover]
submitBtn.addEventListener("mouseover", function () {
  submitBtn.classList.add("rating-card__submit--dark-text");
});

// Listener for big button (submit) hover event [mouseout]
submitBtn.addEventListener("mouseout", function () {
  submitBtn.classList.remove("rating-card__submit--dark-text");
});

// Listener for big button (submit) click event
submitBtn.addEventListener("click", function () {
  // Change '#' for the current selected rate
  thanksCardRate.textContent = currentRate;

  // Invert btn colors
  submitBtn.classList.toggle("rating-card__submit--orange-text");
  submitBtn.classList.toggle("rating-card__submit--white-bg");

  // Change visibility (.rating-card and .thanks-card)
  setTimeout(function () {
    ratingCard.classList.toggle("hidden");
    thanksCard.classList.toggle("hidden");
  }, 220);
});

/*
SIGUIENTES PASOS:
1. Cambiar visibilidad entre "rating-card" y "thanks-card"  [hidden helper class]
2. Crear variable "global" para guardar el "textContent" del "numberBtn" [DOM] seleccionado y poder mostrarlo en 'thanks card'
3. Estilizar el <footer>
4. Añadir responsive design (media queries)
*/
