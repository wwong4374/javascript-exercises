const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(numbers) {
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  return sum;
};

const multiply = function(numbers) {
  let product = 1;
  numbers.forEach((num) => {
    product *= num;
  });
  return product;
};

const power = function(x, y) {
  return x ** y;
};

const factorial = function(x) {
  // BASE CASE 0
  if (x === 0) {
    return 1;
  }
  // BASE CASE 1
  if (x === 1) {
    return 1;
  }
  // Recursive Case
  return x * factorial(x - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
