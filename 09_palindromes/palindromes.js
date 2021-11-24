const palindromes = function (string) {
  const punctuation = ['!', '\'', ',', '.', ' '];
  let formattedString = '';
  for (let i = 0; i < string.length; i++) {
    if (!punctuation.includes(string[i])) {
      formattedString += string[i];
    }
  }
  formattedString = formattedString.toLowerCase();
  // BASE CASE 0
  if (formattedString.length === 0) {
    return true;
  }
  // BASE CASE 1
  if (formattedString.length === 1) {
    return true;
  }
  // RECURSIVE CASE
  if (formattedString[0] === formattedString[formattedString.length - 1]) {
    return palindromes(formattedString.slice(1, formattedString.length - 1));
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
