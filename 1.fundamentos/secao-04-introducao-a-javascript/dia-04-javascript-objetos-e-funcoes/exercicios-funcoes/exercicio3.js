//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3];.
//Valor esperado no retorno da função: 6.

function indexOflowest (array) {
    let lowNumber = 0;
    for (let index = 0; index < array.length; index += 1) {
        if (lowNumber > array[index]) {
            lowNumber = index;
        }
    }
    return lowNumber;
};

console.log(indexOflowest([2, 4, 6, 7, 10, 0, -3]));