const sumAll = function(start, end) {
  // Base Case NaN
  if (typeof start !== 'number' || typeof end !== 'number') {
    return 'ERROR';
  }
  // Base Case < 0
  if (start < 0 || end < 0) {
    return 'ERROR';
  }
  // Base Case 1
  if (start === end) {
    return start;
  }

  // Recursive Case
  if (start > end) {
    // Reverse start and end
    let temp = start;
    start = end;
    end = temp;
  }
  return start + sumAll(start + 1, end);
};

// Do not edit below this line
module.exports = sumAll;
