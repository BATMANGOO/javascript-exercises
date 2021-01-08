const getTheTitles = function(books) {
  let arr = [];
  books.forEach(book => arr.push(book.title));
  return arr;
}

module.exports = getTheTitles;
