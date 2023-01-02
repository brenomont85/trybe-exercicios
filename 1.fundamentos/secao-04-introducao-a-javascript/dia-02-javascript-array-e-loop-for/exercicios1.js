let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//item 1 de exercício
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);  
}

//item 2 de exercício
let sumArrayNumbers = 0;
for (let index = 0; index < numbers.length; index += 1) {
    sumArrayNumbers += numbers[index];
}

console.log(sumArrayNumbers);

//item 3 de exercício
let arrayAverage = sumArrayNumbers / numbers.length;

console.log(arrayAverage);

//item 4 de exercício
if (arrayAverage> 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
};

//item 5 de exercício
let highestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber) {
     highestNumber = numbers[index];
    }
}
console.log(highestNumber);

//item 6 de exercício
let numberOfOdds = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        numberOfOdds += 1;   
    } 
}

if (numberOfOdds === 0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log(numberOfOdds);
}

//item 7 de exercício
let lowestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < lowestNumber) {
     lowestNumber = numbers[index];
    }
}
console.log(lowestNumber);

//item 8 de exercício
let numbers2 = [];

for (let index = 1; index <= 25; index += 1) {
  numbers2.push(index);
}

console.log(numbers2);

//item 9 de exercício

