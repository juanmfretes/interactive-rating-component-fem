"use strict";

let finalRating;
const ratingBtns = Array.from(document.querySelectorAll(".rating-box__rate"));
const ratingBtnsContainer = document.querySelector(".rating-box__container");
const ratingBtnsBackground = Array.from(
  ratingBtnsContainer.querySelectorAll(".icon-round-background")
);
const submitBtn = document.querySelector(".rating-card__submit");

console.log(ratingBtns);
console.log(typeof ratingBtnsBackground);

// Listener for change color while hover (mouseover)
ratingBtnsContainer.addEventListener("mouseover", function (event) {
  const currentBtn = event.target.closest(".icon-round-background");
  console.log(currentBtn);
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

  console.log(currentBtn);
});

// Listener for 'rating-items' click event
ratingBtnsContainer.addEventListener("click", function (event) {
  const currentBtn = event.target.closest(".icon-round-background");
  const numberBtn = currentBtn.firstElementChild; // get the current number el.

  // remove helper classes from all 'rating-items' different than <<currentBtn/numberBtn>>
  // OBS: this allow to 'click' in a 'clicked rating item' and remove the helper classes
  ratingBtnsBackground.forEach((bg) => {
    if (bg != currentBtn)
      bg.classList.remove("icon-round-background--orange-bg");
  });

  ratingBtns.forEach((num) => {
    if (num != numberBtn) num.classList.remove("rating-box__clicked");
  });

  // add helper class to change background color
  currentBtn.classList.toggle("icon-round-background--orange-bg");

  // change 'rating item' number color
  numberBtn.classList.toggle("rating-box__clicked");
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
  // AGREGAR CONDICIONAL: sólo si uno de los 'rating items' está seleccionado
  submitBtn.classList.toggle("rating-card__submit--orange-text");
  submitBtn.classList.toggle("rating-card__submit--white-bg");
});
