const countries = require('./data2');
const assert = require('assert');

const expectedResult = 4311757;

const getTotalArea = () => {
    return countries
        .map((country) => country.area)
        .reduce((acc, area) => {
            return acc + area
        }, 0);
};

console.log(getTotalArea());