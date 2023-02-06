const books = require('./books');

const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length ) {
        nameBook = book.name;
    }
});

  return nameBook;
}

console.log(expectedResult === smallerName());