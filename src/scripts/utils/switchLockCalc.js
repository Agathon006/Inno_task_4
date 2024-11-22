"use strict";

export default () => {
  const buttons = document.querySelector("#calc").querySelectorAll("button");

  buttons.forEach((button) => {
    if (button.id !== "resetText") button.classList.toggle("lock");
  });
};
