const assert = require('assert');
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

const letterArray = names.join('').toLowerCase().split('');

const countA = () => {
    return letterArray.reduce((acc, curr) => {
        return (curr === 'a') ? acc += 1 : acc;
    }, 0);
};

console.log(countA());

assert.equal(countA(), expectedResult);
