"use strict";

export default (data) => {
  if (data === null) return "";
  if (typeof data === "string") return data.replace(/\./g, ",");
  
  const parts = String(data).split(".");
  const integerPart = parts[0];
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  if (parts.length > 1) {
    return `${formattedInteger},${parts[1]}`;
  } else {
    return formattedInteger;
  }
};
