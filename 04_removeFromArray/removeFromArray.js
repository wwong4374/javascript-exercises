const removeFromArray = function(array, ...nums) {
  // Iterate nums
  for (var num of nums) {
    // Find indexOf num
    let index = array.indexOf(num);
    if (index !== -1) {
      // Remove from array
      array.splice(index, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
