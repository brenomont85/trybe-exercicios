const assert = require('assert');
const books = require('./data');

const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => {
  return books
    .filter((book) => (
        book.author.name[1] === '.'
        && book.author.name[4] === '.'
        && book.author.name[7] === '.'
    ))[0].name;
};
console.log(authorWith3DotsOnName());

assert.equal(authorWith3DotsOnName(), expectedResult);