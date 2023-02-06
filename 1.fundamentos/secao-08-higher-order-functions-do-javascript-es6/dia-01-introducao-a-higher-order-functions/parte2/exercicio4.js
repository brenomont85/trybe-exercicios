const books = require('./books');

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear > 1901 && book.author.birthYear < 2001);
};

console.log(everyoneWasBornOnSecXX());