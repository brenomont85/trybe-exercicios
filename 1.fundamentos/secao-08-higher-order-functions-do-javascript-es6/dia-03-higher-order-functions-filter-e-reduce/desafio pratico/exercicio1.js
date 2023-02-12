const countries = require('./data2');
const assert = require('assert');

const expectedResult = 120797034;

const getPopulation = () => {
    return countries
        .map((country) => country.population)
        .reduce((acc, population) => {
            return acc + population; 
        }, 0);
};

console.log(getPopulation());

assert.equal(getPopulation(), expectedResult);
