let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//item 1 de exercício
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);  
}

//item 2 de exercício
let sumArrayNumbers = 0;
for (let index = 0; index < numbers.length; index++) {
    sumArrayNumbers += numbers[index];
}

console.log(sumArrayNumbers);

//item 3 de exercício
let arrayAverage = sumArrayNumbers / numbers.length;

console.log(arrayAverage);


