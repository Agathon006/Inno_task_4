"use strict";

import switchLockCalc from "../../utils/switchLockCalc.js";

export default (state, lastValueText) => {
  let oldValue = state.value;
  switch (state.operation) {
    case "plus":
      if (state.lastValue !== null && typeof state.lastValue === "number") {
        state.value = state.lastValue + state.value;
      } else {
        state.value = 0 + state.value;
      }
      state.lastValue = `${state.lastValue === null || typeof state.lastValue === "string"
        ? 0
        : state.lastValue
        } + ${oldValue} = `;
      break;
    case "minus":
      if (state.lastValue !== null && typeof state.lastValue === "number") {
        state.value = state.lastValue - state.value;
      } else {
        state.value = 0 - state.value;
      }
      state.lastValue = `${state.lastValue === null || typeof state.lastValue === "string"
        ? 0
        : state.lastValue
        } - ${oldValue} = `;
      break;
    case "mult":
      if (state.lastValue !== null && typeof state.lastValue === "number") {
        state.value = state.lastValue * state.value;
      } else {
        state.value = 0 * state.value;
      }
      state.lastValue = `${state.lastValue === null || typeof state.lastValue === "string"
        ? 0
        : state.lastValue
        } * ${oldValue} = `;
      break;
    case "division":
      if (state.value === 0) {
        state.value = "Error";
        switchLockCalc();
      } else {
        if (state.lastValue !== null && typeof state.lastValue === "number") {
          state.value = state.lastValue / state.value;
        } else {
          state.value = 0 / state.value;
        }
      }
      state.lastValue = `${state.lastValue === null || typeof state.lastValue === "string"
        ? 0
        : state.lastValue
        } / ${oldValue} = `;
      break;
    case "power":
      if (state.lastValue !== null && typeof state.lastValue === "number") {
        state.value = state.lastValue ** state.value;
      } else {
        state.value = 0 ** state.value;
      }
      state.lastValue = `${state.lastValue === null || typeof state.lastValue === "string"
        ? 0
        : state.lastValue
        } ^ ${oldValue} = `;
      break;
    default:
      if (lastValueText.textContent !== "") {
        let repeatedValue = +lastValueText.textContent
          .split(" ")[2]
          .replace(/,/g, ".");
        switch (lastValueText.textContent.split(" ")[1]) {
          case "+":
            state.value += repeatedValue;
            state.lastValue = `${state.value - repeatedValue
              } + ${repeatedValue} = `;
            break;
          case "-":
            state.value -= repeatedValue;
            state.lastValue = `${state.value + repeatedValue
              } - ${repeatedValue} = `;
            break;
          case "*":
            state.value *= repeatedValue;
            state.lastValue = `${repeatedValue === 0 ? repeatedValue : state.value / repeatedValue
              } * ${repeatedValue} = `;
            break;
          case "/":
            state.value /= repeatedValue;
            state.lastValue = `${state.value * repeatedValue
              } / ${repeatedValue} = `;
            break;
          case "^":
            state.value = state.value ** repeatedValue;
            state.lastValue = `${repeatedValue === 0 ? state.value === 1 ? 1 : repeatedValue : state.value ** (1 / repeatedValue)
              } ^ ${repeatedValue} = `;
            break;
        }
      }
      break;
  }
  state.operation = null;
};
