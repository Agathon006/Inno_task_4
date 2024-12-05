"use strict";

import onDigitClick from "./operations/onDigitClick.js";
import onCommaClick from "./operations/onCommaClick.js";
import onComputeClick from "./operations/onComputeClick.js";
import onFactorialClick from "./operations/onFactorialClick.js";

import sqrtN from "../utils/sqrtN.js";
import formatNumToStr from "../utils/formatNumToStr.js";
import switchLockCalc from "../utils/switchLockCalc.js";

export default () => {
  const CALC_BUTTONS = {
    COMMA: 'comma',
    RESET: 'reset',
    RESET_TEXT: {
      AC: 'AC',
      C: 'C',
    },
    SIGN_CHANGE: 'sign-change',
    PERCENT: 'percent',
    DIVISION: 'division',
    MULT: 'mult',
    MINUS: 'minus',
    PLUS: 'plus',
    COMPUTE: 'compute',
    SQUARE: 'square',
    CUBE: 'cube',
    POWER: 'power',
    TEN_POWER: 'ten-power',
    FACTORIAL: 'factorial',
    SQRT: 'sqrt',
    CBRT: 'cbrt',
    ROOT: 'root',
    RECIPROCAL: 'reciprocal',
    MAKE_CLEAR: 'makeClear',
    MAKE_PLUS: 'makePlus',
    MAKE_MINUS: 'makeMinus',
    MAKE_RECALL: 'makeRecall',
    DIGITS: {
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
    },
    ERROR: 'Error',
  }

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

  document.querySelector("#calc").addEventListener("click", (e) => {
    divisionBtn.classList.remove("active-operation");
    divisionBtn.classList.add("calc__division");

    multBtn.classList.remove("active-operation");
    multBtn.classList.add("calc__mult");

    minusBtn.classList.remove("active-operation");
    minusBtn.classList.add("calc__minus");

    plusBtn.classList.remove("active-operation");
    plusBtn.classList.add("calc__plus");

    powerBtn.classList.remove("secondary-active-operation");
    powerBtn.classList.add("calc__power");

    rootBtn.classList.remove("secondary-active-operation");
    rootBtn.classList.add("calc__root");

    switch (e.target.dataset.btn) {
      case CALC_BUTTONS.COMMA:
        onCommaClick(state, valueText);
        break;
      case CALC_BUTTONS.RESET:
        state.value = 0;
        state.lastValue = null;
        if (resetText.textContent === CALC_BUTTONS.RESET_TEXT.AC) state.operation = null;
        if (valueText.textContent === CALC_BUTTONS.ERROR) switchLockCalc();
        break;
      case CALC_BUTTONS.SIGN_CHANGE:
        state.value = -state.value;
        break;
      case CALC_BUTTONS.PERCENT:
        state.value = state.value / 100;
        break;
      case CALC_BUTTONS.DIVISION:
        if (state.value === 0) {
          state.value = CALC_BUTTONS.ERROR;
          switchLockCalc();
        } else {
          if (typeof state.lastValue === "number" && state.operation !== null) {
            onComputeClick(state, lastValueText);
          }
          state.operation = CALC_BUTTONS.DIVISION;
        }
        break;
      case CALC_BUTTONS.MULT:
        if (typeof state.lastValue === "number" && state.operation !== null) {
          onComputeClick(state, lastValueText);
        }
        state.operation = CALC_BUTTONS.MULT;
        break;
      case CALC_BUTTONS.MINUS:
        if (typeof state.lastValue === "number" && state.operation !== null) {
          onComputeClick(state, lastValueText);
        }
        state.operation = CALC_BUTTONS.MINUS;
        break;
      case CALC_BUTTONS.PLUS:
        if (typeof state.lastValue === "number" && state.operation !== null) {
          onComputeClick(state, lastValueText);
        }
        state.operation = CALC_BUTTONS.PLUS;
        break;
      case CALC_BUTTONS.COMPUTE:
        onComputeClick(state, lastValueText);
        break;
      case CALC_BUTTONS.SQUARE:
        state.value = state.value ** 2;
        break;
      case CALC_BUTTONS.CUBE:
        state.value = state.value ** 3;
        break;
      case CALC_BUTTONS.POWER:
        if (typeof state.lastValue === "number" && state.operation !== null) {
          onComputeClick(state, lastValueText);
        }
        state.operation = CALC_BUTTONS.POWER;
        break;
      case CALC_BUTTONS.TEN_POWER:
        state.value = 10 ** state.value;
        break;
      case CALC_BUTTONS.FACTORIAL:
        if (state.value < 0) {
          state.value = CALC_BUTTONS.ERROR;
          switchLockCalc();
        } else {
          onFactorialClick(state);
        }
        break;
      case CALC_BUTTONS.SQRT:
        if (state.value < 0) {
          state.value = CALC_BUTTONS.ERROR;
          switchLockCalc();
        } else {
          state.value = sqrtN(state.value, 2);
        }
        break;
      case CALC_BUTTONS.CBRT:
        state.value = sqrtN(state.value, 3);
        break;
      case CALC_BUTTONS.ROOT:
        if (typeof state.lastValue === "number" && state.operation !== null) {
          onComputeClick(state, lastValueText);
        }
        state.operation = CALC_BUTTONS.ROOT;
        break;
      case CALC_BUTTONS.RECIPROCAL:
        if (state.value === 0) {
          state.value = CALC_BUTTONS.ERROR;
          switchLockCalc();
        } else {
          state.value = 1 / state.value;
        }
        break;
      case CALC_BUTTONS.MAKE_CLEAR:
        state.memoryValue = null;
        break;
      case CALC_BUTTONS.MAKE_PLUS:
        state.memoryValue += state.value;
        break;
      case CALC_BUTTONS.MAKE_MINUS:
        state.memoryValue -= state.value;
        break;
      case CALC_BUTTONS.MAKE_RECALL:
        onDigitClick(state, valueText, state.memoryValue.toString());
        break;
      default:
        if (e.target.dataset.btn in CALC_BUTTONS.DIGITS) onDigitClick(state, valueText, CALC_BUTTONS.DIGITS[e.target.dataset.btn]);
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
      e.target.dataset.btn !== CALC_BUTTONS.COMMA && e.target.dataset.btn !== "zero"
    ) {
      valueText.textContent = formatNumToStr(state.value);
    }
    lastValueText.textContent = formatNumToStr(state.lastValue);
    state.value
      ? (resetText.textContent = CALC_BUTTONS.RESET_TEXT.C)
      : (resetText.textContent = CALC_BUTTONS.RESET_TEXT.AC);

    switch (state.operation) {
      case CALC_BUTTONS.PLUS:
        plusBtn.classList.add("active-operation");
        plusBtn.classList.remove("calc__plus");
        break;
      case CALC_BUTTONS.MINUS:
        minusBtn.classList.add("active-operation");
        minusBtn.classList.remove("calc__minus");
        break;
      case CALC_BUTTONS.MULT:
        multBtn.classList.add("active-operation");
        multBtn.classList.remove("calc__mult");
        break;
      case CALC_BUTTONS.DIVISION:
        divisionBtn.classList.add("active-operation");
        divisionBtn.classList.remove("calc__division");
        break;
      case CALC_BUTTONS.POWER:
        powerBtn.classList.add("secondary-active-operation");
        powerBtn.classList.remove("calc__power");
        break;
      case CALC_BUTTONS.ROOT:
        rootBtn.classList.add("secondary-active-operation");
        rootBtn.classList.remove("calc__root");
        break;
      default:
        break;
    }
  });
};
