const repeatString = function(string, num) {
  // Base Case < 0
  if (num < 0) {
    return 'ERROR';
  }
  // Base Case 0
  if (num === 0) {
    return '';
  }
  // Base Case 1
  if (num === 1) {
    return string;
  }

  // Recursive Case
  return string.concat(repeatString(string, num - 1));
};

// Do not edit below this line
module.exports = repeatString;
