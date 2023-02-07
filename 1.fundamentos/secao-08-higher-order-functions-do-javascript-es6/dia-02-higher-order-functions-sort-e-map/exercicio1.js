const assert = require('assert');

const books = require('./database');

const expectedResult = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

const formatedBookNames = () => {
   const formatedBooks = books.map((book) => {
        return `${book.name} - ${book.genre} - ${book.author.name}`
    })
    return formatedBooks;
};

//console.log(formatedBookNames());

assert.deepStrictEqual(formatedBookNames(), expectedResult);