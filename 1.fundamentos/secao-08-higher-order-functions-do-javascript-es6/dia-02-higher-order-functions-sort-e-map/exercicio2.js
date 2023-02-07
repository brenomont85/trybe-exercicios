const books = require('./database');

const expectedResult = [
    'George R. R. Martin - 1948',
    'J. R. R. Tolkien - 1892',
    'Isaac Asimov - 1920',
    'Frank Herbert - 1920',
    'Stephen King - 1947',
    'H. P. Lovecraft - 1890',
];

const formatedAuthorNamesBirth = () => {
    const authorNameBirtYear = books.map((book) => {
         return `${book.author.name} - ${book.author.birthYear}`;
    })
    return authorNameBirtYear;
};

console.log(formatedAuthorNamesBirth());