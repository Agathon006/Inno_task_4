"use strict";

export default (state, valueText) => {
  if (
    state.operation === null &&
    typeof state.lastValue === "string" &&
    state.lastValue.indexOf("=") !== -1
  ) {
    state.lastValue = null;
    state.value = 0;
    valueText.textContent = "0,";
  } else if (
    state.operation &&
    (state.lastValue === null || typeof state.lastValue === "string")
  ) {
    state.lastValue = state.value;
    state.value = 0;
    valueText.textContent = "0,";
  } else {
    if (valueText.textContent.indexOf(",") === -1) valueText.textContent += ",";
  }
};
