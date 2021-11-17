const reverseString = function(str) {
  let reversed = '';
  while(str.length > 0) {
    reversed += str[str.length - 1];
    str = str.slice(0, str.length - 1);
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
