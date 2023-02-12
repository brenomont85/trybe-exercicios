const assert = require('assert');
const books = require('./data');

const expectedResult = [ 'Fundação', 'Duna' ];

const booksByAuthorBirthYear = (birthYear) => {
    return books
        .filter((book) => book.author.birthYear === birthYear)
        .map((book) => book.name);
};
const result = booksByAuthorBirthYear(1920);

console.log(result);

assert.deepEqual(result, expectedResult);