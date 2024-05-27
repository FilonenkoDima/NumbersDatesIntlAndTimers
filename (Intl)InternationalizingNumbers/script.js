"use strict";

const num = 2884764.23;

const options = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
  //   useGrouping: false,
};

console.log("US:        ", new Intl.NumberFormat("en-US", options).format(num));
console.log("Germany:   ", new Intl.NumberFormat("de-DE", options).format(num));
console.log("Ukraine:   ", new Intl.NumberFormat("uk", options).format(num));
// console.log(
//   `Browser(${navigator.language}):   `,
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );
