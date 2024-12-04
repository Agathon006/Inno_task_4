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
    memoryValue: null,
  };

  const valueText = document.querySelector("#value");
  const lastValueText = document.querySelector("#lastValue");
  const resetText = document.querySelector("#resetText");

  const plusBtn = document.querySelector("#plusBtn");
  const minusBtn = document.querySelector("#minusBtn");
  const multBtn = document.querySelector("#multBtn");
  const divisionBtn = document.querySelector("#divisionBtn");
  const powerBtn = document.querySelector("#powerBtn");
  const rootBtn = document.querySelector("#rootBtn");
  const makeClearBtn = document.querySelector('#makeClearBtn')
  const makeRecallBtn = document.querySelector('#makeRecallBtn')

  const digitsMap = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  document.querySelector("#calc").addEventListener("click", (e) => {
    divisionBtn.classList.remove("active");
    multBtn.classList.remove("active");
    minusBtn.classList.remove("active");
    plusBtn.classList.remove("active");
    powerBtn.classList.remove("secondary-active");
    rootBtn.classList.remove("secondary-active");

    switch (e.target.dataset.btn) {
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
        if (state.value === 0) {
          state.value = "Error";
          switchLockCalc();
        } else {
          if (typeof state.lastValue === "number" && state.operation !== null) {
            onComputeClick(state, lastValueText);
          }
          state.operation = "division";
        }
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
        if (state.value < 0) {
          state.value = "Error";
          switchLockCalc();
        } else {
          onFactorialClick(state);
        }
        break;
      case "sqrt":
        if (state.value < 0) {
          state.value = "Error";
          switchLockCalc();
        } else {
          state.value = Math.sqrt(state.value);
        }
        break;
      case "cbrt":
        state.value = Math.cbrt(state.value);
        break;
      case "root":
        if (typeof state.lastValue === "number" && state.operation !== null) {
          onComputeClick(state, lastValueText);
        }
        state.operation = "root";
        break;
      case "reciprocal":
        if (state.value === 0) {
          state.value = "Error";
          switchLockCalc();
        } else {
          state.value = 1 / state.value;
        }
        break;
      case "makeClear":
        state.memoryValue = null;
        break;
      case "makePlus":
        state.memoryValue += state.value;
        break;
      case "makeMinus":
        state.memoryValue -= state.value;
        break;
      case "makeRecall":
        onDigitClick(state, valueText, state.memoryValue.toString());
        break;
      default:
        if (e.target.dataset.btn in digitsMap) onDigitClick(state, valueText, digitsMap[e.target.dataset.btn]);
        break;
    }

    if (state.memoryValue === null) {
      makeClearBtn.classList.add("memory-lock");
      makeRecallBtn.classList.add("memory-lock");
    } else {
      makeClearBtn.classList.remove("memory-lock");
      makeRecallBtn.classList.remove("memory-lock");
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
      case "root":
        rootBtn.classList.add("secondary-active");
        break;
      default:
        break;
    }
  });
};
