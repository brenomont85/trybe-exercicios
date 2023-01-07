//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1];.

function indexOfHighest (array) {
    let highNumber = 0;
    for (let index = 0; index < array.length; index += 1) {
        if (highNumber < array[index]) {
            highNumber = index;
        }
    }
    return highNumber;
};

console.log(indexOfHighest([2, 3, 6, 7, 10, 1]));