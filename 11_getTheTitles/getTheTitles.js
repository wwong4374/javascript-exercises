const getTheTitles = function(books) { // books is an array of objects
  // return an array of titles
  let titles = [];
  books.forEach((book) => {
    titles.push(book.title);
  });
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
