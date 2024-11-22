"use strict";

import "../styles/index.scss";

import switchThemeListener from "./theme/switchThemeListener.js";
import calcListener from "./calc/calcListener.js";

document.addEventListener("DOMContentLoaded", () => {
  switchThemeListener();
  calcListener();
});
