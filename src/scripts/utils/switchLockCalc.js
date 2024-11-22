"use strict";

export default () => {
  const buttons = document.querySelector("#calc").querySelectorAll("button");

  buttons.forEach((button) => {
    if (button.id !== "reset-text") button.classList.toggle("lock");
  });
};
