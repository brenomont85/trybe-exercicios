const assert = require('assert');
const books = require('./data');

const expectedResult = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
];

const fantasyOrScienceFictionAuthors = () => {
    const expectedGenres = ['Fantasia', 'Ficção Científica'];
    return books
        .filter((book) => expectedGenres.includes(book.genre))
        .map((book) => book.author.name).sort();
};

console.log(fantasyOrScienceFictionAuthors());

assert.deepEqual(fantasyOrScienceFictionAuthors(), expectedResult);
