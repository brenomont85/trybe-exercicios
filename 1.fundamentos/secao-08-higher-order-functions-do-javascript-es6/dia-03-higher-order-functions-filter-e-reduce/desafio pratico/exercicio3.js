const countries = require('./data2');
const assert = require('assert');

const expectedResult = {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
}

const longestName = () => {
    const names = countries.map((country) => country.name)
    const nameLength = names
        .reduce((name, currentName) =>
            (name.length > currentName.length) ? name : currentName);
    const nameObj = countries.find((country) => country.name.includes(nameLength));

    return nameObj;
};

console.log(longestName());

assert.deepEqual(longestName(), expectedResult);