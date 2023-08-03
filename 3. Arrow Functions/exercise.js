/* const sum = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const log = function (value) {
  console.log(value);
};
 */

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const log = (value) => console.log(value);

let group1 = sum(2, 4);
let group2 = sum(5, 2);
let group3 = multiply(group1, group2);
let group4 = subtract(group3, 2);
let group5 = divide(group4, 5);

log(divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5));
