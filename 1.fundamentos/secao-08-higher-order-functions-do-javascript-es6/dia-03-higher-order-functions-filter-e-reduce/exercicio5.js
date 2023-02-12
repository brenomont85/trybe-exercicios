const assert = require('assert');
const books = require('./data');

const expectedResult = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
];

const oldBooks = () => {
    const currentYear = new Date().getFullYear();
    return books
        .filter((book) => (currentYear - book.releaseYear) >= 60)
        .map((book) => book.name);
};

console.log(oldBooks());

assert.deepEqual(oldBooks(), expectedResult);