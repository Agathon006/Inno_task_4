"use strict";

import onDigitClick from "./operations/onDigitClick.js";
import onCommaClick from "./operations/onCommaClick.js";
import onComputeClick from "./operations/onComputeClick.js";
import onFactorialClick from "./operations/onFactorialClick.js";

import formatNumToStr from "../utils/formatNumToStr.js";
import switchLockCalc from "../utils/switchLockCalc.js";

export default () => {
  const state = {
    value: 0,
    lastValue: null,
    operation: null,
  };

  const valueText = document.querySelector("#value");
  const lastValueText = document.querySelector("#last-value");
  const resetText = document.querySelector("#reset-text");

  const plusBtn = document.querySelector("#plusBtn");
  const minusBtn = document.querySelector("#minusBtn");
  const multBtn = document.querySelector("#multBtn");
  const divisionBtn = document.querySelector("#divisionBtn");
  const powerBtn = document.querySelector("#powerBtn");

  document.querySelector("#calc").addEventListener("click", (e) => {
    divisionBtn.classList.remove("active");
    multBtn.classList.remove("active");
    minusBtn.classList.remove("active");
    plusBtn.classList.remove("active");
    powerBtn.classList.remove("secondary-active");

    switch (e.target.dataset.btn) {
      case "zero":
        onDigitClick(state, valueText, "0");
        break;
      case "one":
        onDigitClick(state, valueText, "1");
        break;
      case "two":
        onDigitClick(state, valueText, "2");
        break;
      case "three":
        onDigitClick(state, valueText, "3");
        break;
      case "four":
        onDigitClick(state, valueText, "4");
        break;
      case "five":
        onDigitClick(state, valueText, "5");
        break;
      case "six":
        onDigitClick(state, valueText, "6");
        break;
      case "seven":
        onDigitClick(state, valueText, "7");
        break;
      case "eight":
        onDigitClick(state, valueText, "8");
        break;
      case "nine":
        onDigitClick(state, valueText, "9");
        break;
      case "comma":
        onCommaClick(state, valueText);
        break;
      case "reset":
        state.value = 0;
        state.lastValue = null;
        if (resetText.textContent === "AC") state.operation = null;
        if (valueText.textContent === "Error") switchLockCalc();
        break;
      case "sign-change":
        state.value = -state.value;
        break;
      case "percent":
        state.value = state.value / 100;
        break;
      case "division":
        if (typeof state.lastValue === "number" && state.operation !== null) {
          onComputeClick(state, lastValueText);
        }
        state.operation = "division";
        break;
      case "mult":
        if (typeof state.lastValue === "number" && state.operation !== null) {
          onComputeClick(state, lastValueText);
        }
        state.operation = "mult";
        break;
      case "minus":
        if (typeof state.lastValue === "number" && state.operation !== null) {
          onComputeClick(state, lastValueText);
        }
        state.operation = "minus";
        break;
      case "plus":
        if (typeof state.lastValue === "number" && state.operation !== null) {
          onComputeClick(state, lastValueText);
        }
        state.operation = "plus";
        break;
      case "compute":
        onComputeClick(state, lastValueText);
        break;
      case "square":
        state.value = state.value ** 2;
        break;
      case "cube":
        state.value = state.value ** 3;
        break;
      case "power":
        if (typeof state.lastValue === "number" && state.operation !== null) {
          onComputeClick(state, lastValueText);
        }
        state.operation = "power";
        break;
      case "ten-power":
        state.value = 10 ** state.value;
        break;
      case "factorial":
        onFactorialClick(state);
        break;
      case "sqrt":
        state.value = state.value ** (1 / 2);
        break;
      case "cbrt":
        state.value = state.value ** (1 / 3);
        break;
      case "reciprocal":
        if (state.value === 0) {
          state.value = "Error";
          switchLockCalc();
        } else {
          state.value = 1 / state.value;
        }
        break;
      default:
        break;
    }

    if (
      e.target.dataset.btn !== "comma" &&
      !(
        e.target.dataset.btn === "zero" && /^[0,]*$/.test(valueText.textContent)
      )
    ) {
      valueText.textContent = formatNumToStr(state.value);
    }
    lastValueText.textContent = formatNumToStr(state.lastValue);
    state.value
      ? (resetText.textContent = "C")
      : (resetText.textContent = "AC");

    switch (state.operation) {
      case "plus":
        plusBtn.classList.add("active");
        break;
      case "minus":
        minusBtn.classList.add("active");
        break;
      case "mult":
        multBtn.classList.add("active");
        break;
      case "division":
        divisionBtn.classList.add("active");
        break;
      case "power":
        powerBtn.classList.add("secondary-active");
        break;
      default:
        break;
    }
  });
};
