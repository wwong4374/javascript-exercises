const ftoc = function(farenheit) {
  return Math.round(((farenheit - 32) * (5 / 9)) * 10) / 10;
};

const ctof = function(celcius) {
  return Math.round((celcius * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
