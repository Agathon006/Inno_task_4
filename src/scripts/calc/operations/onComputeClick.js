"use strict";

import sqrtN from "../../utils/sqrtN.js";
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
        break;
      }
      if (state.lastValue !== null && typeof state.lastValue === "number") {
        state.value = state.lastValue / state.value;
      } else {
        state.value = 0 / state.value;
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
    case "root":
      if (state.value <= 0 || (state.lastValue < 0 && (state.value % 2 === 0))) {
        state.value = "Error";
        switchLockCalc();
        break;
      }
      if (state.lastValue !== null && typeof state.lastValue === "number") {
        state.value = sqrtN(state.lastValue, state.value);
      } else {
        state.value = sqrtN(0, state.value)
      }
      state.lastValue = `sqrt(${state.lastValue === null || typeof state.lastValue === "string"
        ? 0
        : state.lastValue
        }, ${oldValue}) = `;
      break;
    default:
      if (lastValueText.textContent !== "") {
        let repeatedValue = 0;
        let currentOperation = '';
        if (lastValueText.textContent.includes('sqrt')) {
          repeatedValue = +lastValueText.textContent
            .split(" ")[1]
            .slice(0, -1)
            .replace(/,/g, ".");
          currentOperation = 'sqrt';
        } else {
          repeatedValue = +lastValueText.textContent
            .split(" ")[2]
            .replace(/,/g, ".");
          currentOperation = lastValueText.textContent.split(" ")[1];
        }
        switch (currentOperation) {
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
            state.lastValue = `${state.value < 0 ? '-' : ''}
            ${repeatedValue === 0 ? 
              state.value === 1 ? 1 : repeatedValue : 
              state.value
              } ^ ${repeatedValue} = `;
            state.value = state.value ** repeatedValue;
            break;
          case "sqrt":
            state.value = sqrtN(state.value, repeatedValue);
            state.lastValue = `sqrt(${state.value ** repeatedValue
              }, ${repeatedValue}) = `;
            break;
        }
      }
      break;
  }
  state.operation = null;
};
