
const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum(4, 5, 6));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 10, 5, 5));
console.log(sum(10, 10, 20, 30));