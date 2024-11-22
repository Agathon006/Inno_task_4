"use strict";

export default () => {
  const switchBtn = document.querySelector("#theme-switch");
  const wrapper = document.querySelector(".wrapper");

  switchBtn.addEventListener("click", () => {
    if (wrapper.classList.contains("dark-theme")) {
      wrapper.classList.remove("dark-theme");
      wrapper.classList.add("light-theme");
    } else {
      wrapper.classList.remove("light-theme");
      wrapper.classList.add("dark-theme");
    }
  });
};
