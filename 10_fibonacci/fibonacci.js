const fibonacci = function(num) {
  if (typeof num === 'string') {
    let newNum = Number(num);
    return fibonacci(newNum);
  }
  if (num < 0) {
    return 'OOPS';
  }

  // BASE CASE 1
  if (num === 1) {
    return 1;
  }
  // BASE CASE 2
  if (num === 2) {
    return 1;
  }
  // RECURSIVE CASE
  return fibonacci(num - 2) + fibonacci(num - 1);
};

// Do not edit below this line
module.exports = fibonacci;
