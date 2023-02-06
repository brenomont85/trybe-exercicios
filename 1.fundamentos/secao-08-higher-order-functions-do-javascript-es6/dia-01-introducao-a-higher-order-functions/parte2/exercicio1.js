const books = require('./books');

const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  const indetifyAuthor = books.find((book) => book.author.birthYear === 1947).author.name;
  return indetifyAuthor; 
}

console.log(expectedResult === authorBornIn1947());