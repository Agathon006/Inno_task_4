"use strict";

export default (state) => {
    if (state.value < 0 || state.value === "Error") {
        state.value = "Error";
    } else if (state.value === 0) {
        state.value = 1;
    } else {
        let result = 1;
        for (let i = 1; i <= state.value; i++) {
            result *= i;
        }
        state.value = result;
    }
}